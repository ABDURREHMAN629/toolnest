(function () {
  const { esc, fmt } = UI;
  const nice = n => (isFinite(n) ? String(parseFloat(n.toPrecision(12))) : '—');
  const r4 = (n, d = 4) => (isFinite(n) ? String(parseFloat(n.toFixed(d))) : '—');

  Tools.define('percentage-calculator', root => {
    const rows = [
      ['What is', '% of', '?', (a, b) => a / 100 * b, r => r4(r)],
      ['', 'is what % of', '?', (a, b) => a / b * 100, r => r4(r) + '%'],
      ['% change from', 'to', '?', (a, b) => (b - a) / Math.abs(a) * 100, r => `${r >= 0 ? '▲ increase' : '▼ decrease'} of ${r4(Math.abs(r))}%`],
      ['Marks obtained', 'out of total', '?', (a, b) => a / b * 100, r => r4(r, 2) + '%'],
      ['Add', '% to', '?', (a, b) => b * (1 + a / 100), r => r4(r)],
      ['Subtract', '% from', '?', (a, b) => b * (1 - a / 100), r => r4(r)],
    ];
    const defaults = [[20, 150], [30, 120], [80, 100], [445, 550], [15, 200], [25, 80]];
    root.innerHTML = `<div class="stack">${rows.map(([pre, mid], i) => `<div class="card-sub row" style="align-items:center;gap:10px" data-r="${i}">${pre ? `<span>${pre}</span>` : ''}<input class="input a" type="number" step="any" value="${defaults[i][0]}" style="flex:0 1 120px"><span>${mid}</span><input class="input b" type="number" step="any" value="${defaults[i][1]}" style="flex:0 1 120px"><span>=</span><strong class="res" style="font-size:1.25rem;color:var(--primary)"></strong><button class="btn sm ghost cp" title="Copy">📋</button></div>`).join('')}
      <p class="small muted">Tip: percentage change = (new − old) ÷ old × 100. Marks percentage = obtained ÷ total × 100.</p></div>`;
    const calc = card => {
      const [, , , f, out] = rows[+card.dataset.r];
      const a = UI.num(card.querySelector('.a').value), b = UI.num(card.querySelector('.b').value), r = f(a, b);
      card.querySelector('.res').textContent = isFinite(r) ? out(r) : '—';
    };
    root.querySelectorAll('[data-r]').forEach(c => { calc(c); c.addEventListener('input', () => calc(c)); c.querySelector('.cp').onclick = () => UI.copy(c.querySelector('.res').textContent); });
  });

  function evaluate(src, { deg = true, ans = 0 } = {}) {
    const s = src.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/π/g, 'pi').replace(/√/g, 'sqrt').replace(/\s+/g, '');
    let i = 0;
    const toRad = x => deg ? x * Math.PI / 180 : x, fromRad = x => deg ? x * 180 / Math.PI : x;
    const fact = n => { if (n < 0 || n !== Math.floor(n)) throw new Error('Factorial needs a whole number'); if (n > 170) return Infinity; let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; };
    const F = { sin: x => Math.sin(toRad(x)), cos: x => Math.cos(toRad(x)), tan: x => Math.tan(toRad(x)), asin: x => fromRad(Math.asin(x)), acos: x => fromRad(Math.acos(x)), atan: x => fromRad(Math.atan(x)), sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, ln: Math.log, log: Math.log10, log2: Math.log2, sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, exp: Math.exp, round: Math.round, floor: Math.floor, ceil: Math.ceil };
    const peek = () => s[i];
    const expr = () => { let v = term(); while (peek() === '+' || peek() === '-') { const o = s[i++]; const r = term(); v = o === '+' ? v + r : v - r; } return v; };
    const term = () => { let v = unary(); for (;;) { const c = peek(); if (c === '*' || c === '/') { i++; const r = unary(); v = c === '*' ? v * r : v / r; } else if (c && (/[0-9.(a-z]/i.test(c))) v *= unary(); else return v; } };
    const unary = () => { if (peek() === '-') { i++; return -unary(); } if (peek() === '+') { i++; return unary(); } return power(); };
    const power = () => { const b = postfix(); if (peek() === '^') { i++; return Math.pow(b, unary()); } return b; };
    const postfix = () => { let v = atom(); for (;;) { if (peek() === '!') { i++; v = fact(v); } else if (peek() === '%') { i++; v = v / 100; } else return v; } };
    const atom = () => {
      const c = peek();
      if (c === '(') { i++; const v = expr(); if (peek() === ')') i++; return v; }
      const num = s.slice(i).match(/^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i);
      if (num) { i += num[0].length; return parseFloat(num[0]); }
      const id = s.slice(i).match(/^(log2|[a-z]+)/i);
      if (id) {
        const name = id[0].toLowerCase(); i += id[0].length;
        if (name === 'pi') return Math.PI; if (name === 'e') return Math.E; if (name === 'ans') return ans;
        if (F[name]) { const arg = peek() === '(' ? atom() : postfix(); return F[name](arg); }
        throw new Error('Unknown: ' + name);
      }
      throw new Error(c ? `Unexpected "${c}"` : 'Incomplete expression');
    };
    const v = expr();
    if (i < s.length) throw new Error(`Unexpected "${s[i]}"`);
    return v;
  }
  Tools.define('scientific-calculator', root => {
    const keys = [['sin', 'cos', 'tan', 'deg', 'AC'], ['asin', 'acos', 'atan', '(', ')'], ['ln', 'log', '√', 'x²', '^'], ['π', 'e', 'x!', '%', '÷'], ['7', '8', '9', '⌫', '×'], ['4', '5', '6', 'Ans', '−'], ['1', '2', '3', 'EXP', '+'], ['0', '.', '±', 'M+', '=']];
    root.innerHTML = `<div class="grid-2" style="align-items:start"><div class="stack" style="max-width:460px">
      <div class="card-sub" style="text-align:right;padding:14px 16px"><div class="small muted prev" style="min-height:1.3em;word-break:break-all"></div><input class="disp" aria-label="Expression" style="width:100%;border:0;background:none;color:var(--text);font:600 1.9rem var(--mono);text-align:right;outline:none" value="" placeholder="0"><div class="small muted mode">DEG</div></div>
      <div class="keys" style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px">${keys.flat().map(k => `<button class="btn ${/^[0-9.]$/.test(k) ? 'secondary' : k === '=' ? '' : k === 'AC' ? 'danger' : 'ghost'}" data-k="${k}" style="padding:10px 0;min-height:48px;font-size:1rem">${k}</button>`).join('')}</div>
      <div class="small muted">Keyboard works too: type an expression and press Enter. Memory: M+ adds to memory, use "MR" button below.</div><div class="btn-row"><button class="btn sm ghost mr">MR</button><button class="btn sm ghost mc">MC</button><span class="small muted mem"></span></div></div>
      <div class="stack"><h3 style="margin:0">History</h3><ul class="hist list-plain stack" style="gap:6px"></ul></div></div>`;
    const $ = UI.q(root), d = $('.disp');
    let deg = true, ans = 0, mem = 0, justEval = false;
    const insert = t => { if (justEval && /^[0-9.(πe√a-z]/i.test(t)) d.value = ''; justEval = false; const p = d.selectionStart ?? d.value.length; d.value = d.value.slice(0, p) + t + d.value.slice(d.selectionEnd ?? p); d.focus(); d.setSelectionRange(p + t.length, p + t.length); preview(); };
    const preview = () => { try { const v = evaluate(d.value, { deg, ans }); $('.prev').textContent = d.value && isFinite(v) ? '= ' + nice(v) : ''; } catch (e) { $('.prev').textContent = ''; } };
    const equals = () => {
      if (!d.value.trim()) return;
      try { const v = evaluate(d.value, { deg, ans }); if (!isFinite(v)) throw new Error(isNaN(v) ? 'Math error' : 'Infinity'); const li = UI.h(`<li class="card-sub" style="padding:8px 12px;cursor:pointer"><div class="small muted">${esc(d.value)}</div><strong>${nice(v)}</strong></li>`); li.onclick = () => insert(nice(v)); $('.hist').prepend(li); $('.prev').textContent = d.value + ' ='; ans = v; d.value = nice(v); justEval = true; }
      catch (e) { $('.prev').textContent = '⚠️ ' + e.message; }
    };
    root.querySelector('.keys').addEventListener('click', e => {
      const k = e.target.closest('button')?.dataset.k; if (!k) return;
      const map = { sin: 'sin(', cos: 'cos(', tan: 'tan(', asin: 'asin(', acos: 'acos(', atan: 'atan(', ln: 'ln(', log: 'log(', '√': '√(', 'x²': '^2', 'x!': '!', EXP: 'e', Ans: 'Ans', '−': '-' };
      if (k === 'AC') { d.value = ''; $('.prev').textContent = ''; }
      else if (k === '⌫') { d.value = d.value.slice(0, -1); preview(); }
      else if (k === '=') equals();
      else if (k === 'deg') { deg = !deg; $('.mode').textContent = deg ? 'DEG' : 'RAD'; e.target.textContent = deg ? 'deg' : 'rad'; preview(); }
      else if (k === '±') { d.value = d.value.startsWith('-(') && d.value.endsWith(')') ? d.value.slice(2, -1) : `-(${d.value || '0'})`; preview(); }
      else if (k === 'M+') { try { mem += evaluate(d.value || '0', { deg, ans }); $('.mem').textContent = 'M = ' + nice(mem); } catch (er) { } }
      else if (k === 'EXP') insert('e');
      else insert(map[k] || k);
    });
    $('.mr').onclick = () => insert(nice(mem)); $('.mc').onclick = () => { mem = 0; $('.mem').textContent = ''; };
    d.addEventListener('input', () => { justEval = false; preview(); });
    d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); equals(); } if (e.key === 'Escape') { d.value = ''; preview(); } });
    d.focus();
  });
  Tools._evaluate = evaluate;

  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  Tools.define('fraction-calculator', root => {
    const fr = (p, w, n, d) => `<div class="row" style="align-items:center;gap:6px;flex-wrap:nowrap"><input class="input ${p}w" type="number" value="${w}" placeholder="whole" style="width:84px;flex:0 0 84px" title="Whole number (optional)"><div class="stack" style="gap:4px;width:84px"><input class="input ${p}n" type="number" value="${n}" placeholder="num"><div style="height:2px;background:var(--text)"></div><input class="input ${p}d" type="number" value="${d}" placeholder="den"></div></div>`;
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:center;gap:14px">${fr('a', '', 3, 4)}<select class="select op" style="width:70px;flex:0 0 70px"><option value="+">+</option><option value="-">−</option><option value="*">×</option><option value="/">÷</option></select>${fr('b', 1, 2, 3)}</div><div class="out"></div></div>`;
    const $ = UI.q(root);
    const read = p => { const w = UI.num($(`.${p}w`).value) || 0, n = UI.num($(`.${p}n`).value) || 0, d = UI.num($(`.${p}d`).value); if (!d) return null; const sign = w < 0 ? -1 : 1; return [w * d + sign * n, d]; };
    const show = ([n, d]) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); n /= g; d /= g; return [n, d]; };
    const calc = () => {
      const a = read('a'), b = read('b'), op = $('.op').value;
      if (!a || !b) { $('.out').innerHTML = '<div class="notice">Denominators cannot be zero or empty.</div>'; return; }
      let r = op === '+' ? [a[0] * b[1] + b[0] * a[1], a[1] * b[1]] : op === '-' ? [a[0] * b[1] - b[0] * a[1], a[1] * b[1]] : op === '*' ? [a[0] * b[0], a[1] * b[1]] : [a[0] * b[1], a[1] * b[0]];
      if (!r[1]) { $('.out').innerHTML = '<div class="notice error">Cannot divide by zero.</div>'; return; }
      const [n, d] = show(r), whole = Math.trunc(n / d), rem = Math.abs(n % d);
      const step = `${a[0]}/${a[1]} ${({ '+': '+', '-': '−', '*': '×', '/': '÷' })[op]} ${b[0]}/${b[1]} = ${r[0]}/${r[1]}${gcd(r[0], r[1]) > 1 ? ` = ${n}/${d} (simplified by ${gcd(r[0], r[1])})` : ''}`;
      $('.out').innerHTML = UI.resultsHTML([{ k: 'Result', v: d === 1 ? String(n) : `${n}/${d}`, main: true, s: step }, { k: 'Mixed number', v: d === 1 ? String(n) : whole ? `${whole} ${rem}/${d}` : `${n}/${d}` }, { k: 'Decimal', v: r4(n / d, 6) }, { k: 'Percentage', v: r4(n / d * 100) + '%' }]);
    };
    root.addEventListener('input', calc); root.addEventListener('change', calc); calc();
  });

  Tools.define('average-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'nums', label: 'Numbers (separated by commas, spaces or new lines)', type: 'textarea', rows: 4, value: '12, 15, 18, 22, 22, 30, 41', full: true }],
      compute(v) {
        const a = (v.nums.match(/-?\d*\.?\d+(e[+-]?\d+)?/gi) || []).map(Number).filter(isFinite);
        if (!a.length) return null;
        const n = a.length, sum = a.reduce((x, y) => x + y, 0), mean = sum / n, s = [...a].sort((x, y) => x - y);
        const median = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
        const cnt = {}; a.forEach(x => cnt[x] = (cnt[x] || 0) + 1); const mx = Math.max(...Object.values(cnt));
        const mode = mx > 1 ? Object.keys(cnt).filter(k => cnt[k] === mx).join(', ') : 'No mode';
        const vp = a.reduce((x, y) => x + (y - mean) ** 2, 0) / n, vs = n > 1 ? vp * n / (n - 1) : 0;
        const geo = s[0] > 0 ? Math.exp(a.reduce((x, y) => x + Math.log(y), 0) / n) : null;
        return { results: [{ k: 'Average (mean)', v: r4(mean, 6), main: true, s: `of ${n} numbers` }, { k: 'Median', v: nice(median) }, { k: 'Mode', v: mode }, { k: 'Sum', v: nice(sum) }, { k: 'Range', v: nice(s[n - 1] - s[0]) }, { k: 'Min / Max', v: `${nice(s[0])} / ${nice(s[n - 1])}` }, { k: 'Std. deviation (sample)', v: r4(Math.sqrt(vs), 6) }, { k: 'Std. deviation (population)', v: r4(Math.sqrt(vp), 6) }, { k: 'Variance (sample)', v: r4(vs, 6) }, geo && { k: 'Geometric mean', v: r4(geo, 6) }],
          html: `<p class="small muted mt">Sorted: ${s.slice(0, 200).map(nice).join(', ')}${n > 200 ? '…' : ''}</p>` };
      },
    });
  });

  const UNITS = {
    Length: { m: ['Meter', 1], km: ['Kilometer', 1000], cm: ['Centimeter', 0.01], mm: ['Millimeter', 0.001], um: ['Micrometer', 1e-6], mi: ['Mile', 1609.344], yd: ['Yard', 0.9144], ft: ['Foot', 0.3048], in: ['Inch', 0.0254], nmi: ['Nautical mile', 1852] },
    Weight: { kg: ['Kilogram', 1], g: ['Gram', 0.001], mg: ['Milligram', 1e-6], t: ['Metric ton', 1000], lb: ['Pound', 0.45359237], oz: ['Ounce', 0.028349523125], st: ['Stone', 6.35029318], tola: ['Tola', 0.0116638], maund: ['Maund (40 kg)', 40] },
    Temperature: { c: ['Celsius'], f: ['Fahrenheit'], k: ['Kelvin'] },
    Area: { m2: ['Square meter', 1], km2: ['Square kilometer', 1e6], cm2: ['Square centimeter', 1e-4], ha: ['Hectare', 1e4], acre: ['Acre', 4046.8564224], ft2: ['Square foot', 0.09290304], in2: ['Square inch', 0.00064516], yd2: ['Square yard', 0.83612736], mi2: ['Square mile', 2589988.110336], marla: ['Marla (225 sq ft)', 20.9032], kanal: ['Kanal (20 marla)', 418.064] },
    Volume: { l: ['Liter', 1], ml: ['Milliliter', 0.001], m3: ['Cubic meter', 1000], gal: ['Gallon (US)', 3.785411784], galuk: ['Gallon (UK)', 4.54609], qt: ['Quart (US)', 0.946352946], pt: ['Pint (US)', 0.473176473], cup: ['Cup (US)', 0.2365882365], floz: ['Fluid ounce (US)', 0.0295735296], tbsp: ['Tablespoon', 0.01478676], tsp: ['Teaspoon', 0.00492892], ft3: ['Cubic foot', 28.316846592] },
    Speed: { kmh: ['Km per hour', 1 / 3.6], ms: ['Meter per second', 1], mph: ['Miles per hour', 0.44704], kn: ['Knot', 0.514444], fts: ['Feet per second', 0.3048] },
    Time: { s: ['Second', 1], ms: ['Millisecond', 0.001], min: ['Minute', 60], h: ['Hour', 3600], d: ['Day', 86400], wk: ['Week', 604800], mo: ['Month (avg)', 2629746], y: ['Year (365.25 d)', 31557600] },
    'Digital storage': { b: ['Byte', 1], kb: ['Kilobyte (KB)', 1e3], mb: ['Megabyte (MB)', 1e6], gb: ['Gigabyte (GB)', 1e9], tb: ['Terabyte (TB)', 1e12], kib: ['Kibibyte (KiB)', 1024], mib: ['Mebibyte (MiB)', 1048576], gib: ['Gibibyte (GiB)', 1073741824], bit: ['Bit', 0.125] },
    Pressure: { pa: ['Pascal', 1], kpa: ['Kilopascal', 1000], bar: ['Bar', 1e5], psi: ['PSI', 6894.757], atm: ['Atmosphere', 101325], mmhg: ['mmHg', 133.322] },
    Energy: { j: ['Joule', 1], kj: ['Kilojoule', 1000], cal: ['Calorie', 4.184], kcal: ['Kilocalorie', 4184], wh: ['Watt hour', 3600], kwh: ['Kilowatt hour', 3.6e6], btu: ['BTU', 1055.06] },
  };
  const DEF = { Length: ['cm', 'in'], Weight: ['kg', 'lb'], Temperature: ['c', 'f'], Area: ['m2', 'ft2'], Volume: ['l', 'gal'], Speed: ['kmh', 'mph'], Time: ['h', 'min'], 'Digital storage': ['gb', 'mb'], Pressure: ['bar', 'psi'], Energy: ['kcal', 'kj'] };
  const temp = (v, f, t) => { const c = f === 'c' ? v : f === 'f' ? (v - 32) * 5 / 9 : v - 273.15; return t === 'c' ? c : t === 'f' ? c * 9 / 5 + 32 : c + 273.15; };
  Tools.define('unit-converter', root => {
    root.innerHTML = `<div class="stack"><div class="cats chips"></div><div class="row" style="align-items:flex-end"><div class="field"><label>Value</label><input class="input val" type="number" step="any" value="1"></div><div class="field"><label>From</label><select class="select from"></select></div><button class="btn ghost swap" style="flex:0 0 auto">⇄</button><div class="field"><label>To</label><select class="select to"></select></div></div><div class="out"></div><div class="tbl"></div></div>`;
    const $ = UI.q(root);
    let cat = 'Length';
    Object.keys(UNITS).forEach(c => { const b = UI.h(`<button class="chip">${c}</button>`); b.onclick = () => { cat = c; setCat(); }; $('.cats').append(b); });
    const setCat = () => {
      [...$('.cats').children].forEach(b => { b.style.borderColor = b.textContent === cat ? 'var(--primary)' : ''; b.style.fontWeight = b.textContent === cat ? '700' : ''; });
      const opts = Object.entries(UNITS[cat]).map(([k, [n]]) => `<option value="${k}">${n}</option>`).join('');
      $('.from').innerHTML = opts; $('.to').innerHTML = opts; [$('.from').value, $('.to').value] = DEF[cat]; calc();
    };
    const conv = (v, f, t) => cat === 'Temperature' ? temp(v, f, t) : v * UNITS[cat][f][1] / UNITS[cat][t][1];
    const calc = () => {
      const v = UI.num($('.val').value), f = $('.from').value, t = $('.to').value, U = UNITS[cat];
      if (!isFinite(v)) { $('.out').innerHTML = ''; return; }
      $('.out').innerHTML = UI.resultsHTML([{ k: `${nice(v)} ${U[f][0]} =`, v: `${nice(conv(v, f, t))} ${U[t][0]}`, main: true, s: cat === 'Temperature' ? '' : `1 ${U[f][0]} = ${nice(conv(1, f, t))} ${U[t][0]}` }]);
      $('.tbl').innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>${nice(v)} ${esc(U[f][0])} in</th><th class="num">Value</th></tr></thead><tbody>${Object.entries(U).filter(([k]) => k !== f).map(([k, [n]]) => `<tr><td>${n}</td><td class="num">${nice(conv(v, f, k))}</td></tr>`).join('')}</tbody></table></div>`;
    };
    root.addEventListener('input', calc); $('.from').onchange = calc; $('.to').onchange = calc;
    $('.swap').onclick = () => { const f = $('.from').value; $('.from').value = $('.to').value; $('.to').value = f; calc(); };
    setCat();
  });

  Tools.define('random-number-generator', root => {
    root.innerHTML = `<div class="stack"><div class="row opts"></div><div class="btn-row"><button class="btn lg go">🎲 Generate</button><button class="btn ghost cp">📋 Copy</button></div><div class="out"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'min', label: 'Min', type: 'number', value: 1 }, { id: 'max', label: 'Max', type: 'number', value: 100 }, { id: 'n', label: 'How many', type: 'number', value: 1, min: 1, max: 10000 }, { id: 'dec', label: 'Decimal places', type: 'number', value: 0, min: 0, max: 10 }, { id: 'unique', label: 'No duplicates', type: 'checkbox', value: false }, { id: 'sort', label: 'Sort results', type: 'checkbox', value: false }]);
    let last = [];
    const rnd = () => crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296;
    $('.go').onclick = () => {
      const o = form.get(), lo = Math.min(o.min, o.max), hi = Math.max(o.min, o.max), n = UI.clamp(Math.round(o.n || 1), 1, 10000), dp = UI.clamp(Math.round(o.dec || 0), 0, 10);
      if (!isFinite(lo) || !isFinite(hi)) return UI.toast('Enter a valid range');
      const f = 10 ** dp, span = Math.floor((hi - lo) * f) + 1;
      if (o.unique && n > span) return UI.notice($('.out'), `Only ${span} unique numbers exist in this range.`, 'error');
      const set = new Set(), out = [];
      while (out.length < n) { const x = (Math.floor(rnd() * span) + Math.round(lo * f)) / f; if (o.unique) { if (set.has(x)) continue; set.add(x); } out.push(x); }
      if (o.sort) out.sort((a, b) => a - b);
      last = out.map(x => x.toFixed(dp));
      $('.out').innerHTML = n === 1 ? `<div class="big-num" style="color:var(--primary)">${last[0]}</div>` : `<div class="out-box">${last.join(', ')}</div>`;
    };
    $('.cp').onclick = () => last.length && UI.copy(last.join(', '));
    $('.go').click();
  });

  const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const below100 = n => n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
  const below1000 = n => (n >= 100 ? ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' : '') : '') + (n % 100 ? below100(n % 100) : '');
  function toWords(n, system = 'intl') {
    n = BigInt(n);
    if (n === 0n) return 'zero';
    const parts = [];
    if (system === 'south') {
      const units = [[10000000n, 'crore'], [100000n, 'lakh'], [1000n, 'thousand']];
      if (n >= 1000000000n) { const cr = n / 10000000n; parts.push(toWords(cr, 'south') + ' crore'); n %= 10000000n; }
      for (const [v, name] of units) if (n >= v) { parts.push(below1000(Number(n / v)) + ' ' + name); n %= v; }
      if (n > 0n) parts.push(below1000(Number(n)));
    } else {
      const names = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];
      let k = 0; const chunks = [];
      while (n > 0n) { const c = Number(n % 1000n); if (c) chunks.unshift(below1000(c) + (names[k] ? ' ' + names[k] : '')); n /= 1000n; k++; }
      parts.push(...chunks);
    }
    return parts.join(' ').replace(/\s+/g, ' ').trim();
  }
  const CUR = { none: ['', ''], pkr: ['rupees', 'paisa'], inr: ['rupees', 'paise'], usd: ['dollars', 'cents'], eur: ['euros', 'cents'], gbp: ['pounds', 'pence'], aed: ['dirhams', 'fils'], sar: ['riyals', 'halalas'], bdt: ['taka', 'poisha'] };
  Tools.define('number-to-words', root => {
    UI.calc(root, {
      fields: [{ id: 'num', label: 'Number', type: 'text', value: '1250075.50', cls: 'grow' }, { id: 'sys', label: 'Numbering system', type: 'select', value: 'south', options: [['south', 'Lakh / Crore (Pakistan, India)'], ['intl', 'International (million, billion)']] }, { id: 'cur', label: 'Currency', type: 'select', value: 'pkr', options: [['none', 'None'], ['pkr', 'Pakistani Rupees'], ['inr', 'Indian Rupees'], ['usd', 'US Dollars'], ['eur', 'Euros'], ['gbp', 'British Pounds'], ['aed', 'UAE Dirhams'], ['sar', 'Saudi Riyals'], ['bdt', 'Bangladeshi Taka']] }, { id: 'case', label: 'Letter case', type: 'select', value: 'title', options: [['title', 'Title Case'], ['upper', 'UPPERCASE'], ['sentence', 'Sentence case'], ['lower', 'lowercase']] }],
      compute(v) {
        const raw = v.num.replace(/[,\s]/g, ''); if (!raw) return null;
        if (!/^-?\d+(\.\d+)?$/.test(raw)) return '<div class="notice error">Please enter a valid number (digits and one decimal point).</div>';
        if (raw.replace(/^-/, '').split('.')[0].length > 21) return '<div class="notice error">Number is too large.</div>';
        const neg = raw.startsWith('-'), [ip, dp = ''] = raw.replace('-', '').split('.');
        const [major, minor] = CUR[v.cur];
        let w = toWords(ip, v.sys);
        if (major) { w += ' ' + major; const c = Math.round(parseFloat('0.' + (dp || '0')) * 100); if (c) w += ' and ' + toWords(c, 'intl') + ' ' + minor; w += ' only'; }
        else if (dp) w += ' point ' + [...dp].map(d => d === '0' ? 'zero' : ONES[+d]).join(' ');
        if (neg) w = 'minus ' + w;
        w = v.case === 'upper' ? w.toUpperCase() : v.case === 'title' ? w.replace(/\b[a-z]/g, c => c.toUpperCase()) : v.case === 'sentence' ? w[0].toUpperCase() + w.slice(1) : w;
        const grouped = v.sys === 'south' ? Number(ip).toLocaleString('en-IN') : Number(ip).toLocaleString('en-US');
        return { html: `<div class="card-sub stack"><div class="small muted">${grouped}${dp ? '.' + dp : ''}</div><div class="words" style="font-size:1.35rem;font-weight:700;line-height:1.4">${esc(w)}</div><div><button class="btn sm cp">📋 Copy</button></div></div>` };
      },
      after(out) { const b = out.querySelector('.cp'); if (b) b.onclick = () => UI.copy(out.querySelector('.words').textContent); },
    });
  });

  const RM = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  const toRoman = n => RM.reduce((s, [v, r]) => { while (n >= v) { s += r; n -= v; } return s; }, '');
  const fromRoman = s => { s = s.toUpperCase(); if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(s) || !s) return NaN; let n = 0, i = 0; for (const [v, r] of RM) while (s.startsWith(r, i)) { n += v; i += r.length; } return n; };
  Tools.define('roman-numeral-converter', root => {
    UI.calc(root, {
      fields: [{ id: 'x', label: 'Enter a number (1–3999) or a Roman numeral', type: 'text', value: '2026', cls: 'grow' }],
      compute(v) {
        const s = v.x.trim(); if (!s) return null;
        if (/^\d+$/.test(s)) { const n = +s; if (n < 1 || n > 3999) return '<div class="notice error">Roman numerals cover 1 to 3,999.</div>'; return { results: [{ k: `${n} in Roman numerals`, v: toRoman(n), main: true }], html: `<p class="small muted mt">Breakdown: ${RM.filter(([val]) => n >= val).length ? (() => { let k = n; const p = []; for (const [val, r] of RM) while (k >= val) { p.push(`${r} (${val})`); k -= val; } return p.join(' + '); })() : ''}</p>` }; }
        const n = fromRoman(s); if (!n) return '<div class="notice error">That is not a valid Roman numeral.</div>';
        return { results: [{ k: `${s.toUpperCase()} as a number`, v: n.toLocaleString(), main: true }] };
      },
    });
  });

  const factorize = n => { const f = {}; for (let p = 2; p * p <= n; p++) while (n % p === 0) { f[p] = (f[p] || 0) + 1; n /= p; } if (n > 1) f[n] = (f[n] || 0) + 1; return f; };
  Tools.define('lcm-gcd-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'nums', label: 'Numbers (comma or space separated)', type: 'text', value: '12, 18, 30', cls: 'grow' }],
      compute(v) {
        const a = (v.nums.match(/\d+/g) || []).map(Number).filter(x => x > 0 && x < 1e12);
        if (a.length < 2) return '<div class="notice">Enter at least two positive whole numbers.</div>';
        const g = a.reduce(gcd), l = a.reduce((x, y) => x / gcd(x, y) * y);
        const fx = n => Object.entries(factorize(n)).map(([p, e]) => e > 1 ? `${p}<sup>${e}</sup>` : p).join(' × ') || '1';
        return { results: [{ k: 'LCM', v: l.toLocaleString(), main: true, s: 'Least common multiple' }, { k: 'GCD / HCF', v: g.toLocaleString(), s: 'Greatest common divisor' }],
          html: `<div class="table-wrap mt"><table class="table"><thead><tr><th>Number</th><th>Prime factorization</th></tr></thead><tbody>${a.map(n => `<tr><td>${n.toLocaleString()}</td><td>${fx(n)}</td></tr>`).join('')}</tbody></table></div>` };
      },
    });
  });

  Tools.define('quadratic-equation-solver', root => {
    UI.calc(root, {
      fields: [{ id: 'a', label: 'a', type: 'number', value: 1 }, { id: 'b', label: 'b', type: 'number', value: -3 }, { id: 'c', label: 'c', type: 'number', value: -10 }],
      compute(v) {
        const { a, b, c } = v; if (![a, b, c].every(isFinite)) return null;
        if (a === 0) return b ? { results: [{ k: 'Linear equation — x =', v: nice(-c / b), main: true }] } : '<div class="notice error">a and b cannot both be zero.</div>';
        const D = b * b - 4 * a * c, vx = -b / (2 * a), vy = a * vx * vx + b * vx + c;
        let roots, kind;
        if (D > 0) { const r1 = (-b + Math.sqrt(D)) / (2 * a), r2 = (-b - Math.sqrt(D)) / (2 * a); roots = `x₁ = ${nice(r1)}, x₂ = ${nice(r2)}`; kind = 'Two real roots (D > 0)'; }
        else if (D === 0) { roots = `x = ${nice(vx)}`; kind = 'One repeated real root (D = 0)'; }
        else { const im = Math.sqrt(-D) / (2 * Math.abs(a)); roots = `x = ${nice(vx)} ± ${nice(im)}i`; kind = 'Two complex roots (D < 0)'; }
        const sg = x => (x < 0 ? '− ' : '+ ') + nice(Math.abs(x));
        const steps = [`Equation: ${nice(a)}x² ${sg(b)}x ${sg(c)} = 0`, `Discriminant D = b² − 4ac = (${nice(b)})² − 4 × ${nice(a)} × ${nice(c)} = ${nice(D)}`, `x = (−b ± √D) ÷ 2a = (${nice(-b)} ± √${nice(D)}) ÷ ${nice(2 * a)}`, roots];
        return { results: [{ k: 'Roots', v: roots, main: true, s: kind }, { k: 'Discriminant', v: nice(D) }, { k: 'Vertex', v: `(${nice(vx)}, ${nice(vy)})` }, { k: 'Axis of symmetry', v: `x = ${nice(vx)}` }, { k: 'Y-intercept', v: nice(c) }],
          html: `<div class="card-sub mt"><strong>Step by step</strong><ol class="small" style="margin:8px 0 0">${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div><canvas class="graph mt" width="640" height="320" style="width:100%;max-width:640px;border:1px solid var(--border);border-radius:10px;background:var(--bg)"></canvas>` };
      },
      after(out, v) {
        const cv = out.querySelector('.graph'); if (!cv) return;
        const x = cv.getContext('2d'), W = cv.width, H = cv.height, vx = -v.b / (2 * v.a), span = Math.max(6, Math.abs(vx) * 2 + 4);
        const xs = [vx - span / 2, vx + span / 2], f = t => v.a * t * t + v.b * t + v.c;
        const ys = Array.from({ length: 200 }, (_, i) => f(xs[0] + i / 199 * span)); let lo = Math.min(...ys, 0), hi = Math.max(...ys, 0); const pad = (hi - lo) * 0.1 || 1; lo -= pad; hi += pad;
        const X = t => (t - xs[0]) / span * W, Y = y => H - (y - lo) / (hi - lo) * H;
        x.strokeStyle = '#94a3b8'; x.lineWidth = 1; x.beginPath(); x.moveTo(0, Y(0)); x.lineTo(W, Y(0)); x.moveTo(X(0), 0); x.lineTo(X(0), H); x.stroke();
        x.strokeStyle = '#4f46e5'; x.lineWidth = 3; x.beginPath(); ys.forEach((y, i) => { const px = i / 199 * W; i ? x.lineTo(px, Y(y)) : x.moveTo(px, Y(y)); }); x.stroke();
      },
    });
  });
})();

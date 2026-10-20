(function () {
  const { esc, fmt } = UI;
  const STOP = new Set('a an the and or but if then so of to in on at by for with from as is are was were be been being it its this that these those i you he she we they me him her us them my your his our their not no yes do does did have has had will would can could should may might must about into over under after before than too very just also there here what which who whom whose when where why how all any both each few more most other some such only own same s t can don now'.split(' '));
  const wordsOf = t => t.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || [];
  const stripLinks = t => t.replace(/\b(?:https?:\/\/|www\.)\S+/gi, ' ').replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, ' ').replace(/\b[\w-]+\.(?:com|org|net|io|dev|pk|in|co|uk)\b\S*/gi, ' ');

  const LIMITS = [['X / Twitter post', 280], ['Meta title (SEO)', 60], ['Meta description (SEO)', 160], ['SMS message', 160], ['Instagram caption', 2200], ['YouTube title', 100], ['LinkedIn post', 3000], ['Facebook post (shown before "See more")', 477]];
  Tools.define('word-counter', (root, preset) => {
    root.innerHTML = `<div class="stack"><div class="results stats"></div><textarea class="textarea txt" style="min-height:260px" placeholder="Start typing or paste your text here…" dir="auto"></textarea>
      <div class="btn-row"><button class="btn ghost cp">📋 Copy</button><button class="btn ghost clr">Clear</button><span class="small muted">Text is saved in your browser automatically.</span></div>
      <div class="grid-2" style="align-items:start"><div class="card-sub"><h3>${preset.chars ? 'Platform limits' : 'Top keywords'}</h3><div class="side stack" style="gap:8px"></div></div><div class="card-sub"><h3>${preset.chars ? 'Top keywords' : 'Platform limits'}</h3><div class="side2 stack" style="gap:8px"></div></div></div></div>`;
    const $ = UI.q(root), ta = $('.txt'), key = preset.chars ? 'cc-text' : 'wc-text';
    ta.value = UI.store.get(key, '');
    const update = () => {
      const t = ta.value, w = wordsOf(t), chars = [...t].length, noSp = [...t.replace(/\s/g, '')].length;
      const sentences = (t.match(/[^.!?。؟]+[.!?。؟]+(\s|$)/g) || []).length || (t.trim() ? 1 : 0), paras = t.split(/\n\s*\n/).filter(p => p.trim()).length;
      const rt = w.length / 238, st = w.length / 150, mins = x => x < 1 ? `${Math.max(0, Math.round(x * 60))} sec` : `${Math.floor(x)} min ${Math.round(x % 1 * 60)} sec`;
      const main = preset.chars ? [{ k: 'Characters', v: fmt(chars), main: true, s: `${fmt(noSp)} without spaces` }, { k: 'Words', v: fmt(w.length) }] : [{ k: 'Words', v: fmt(w.length), main: true, s: `${fmt(chars)} characters` }, { k: 'Characters', v: fmt(chars) }];
      $('.stats').innerHTML = UI.resultsHTML([...main, { k: 'No spaces', v: fmt(noSp) }, { k: 'Sentences', v: fmt(sentences) }, { k: 'Paragraphs', v: fmt(paras) }, { k: 'Reading time', v: mins(rt) }, { k: 'Speaking time', v: mins(st) }, { k: 'Unique words', v: fmt(new Set(w.map(x => x.toLowerCase())).size) }]).replace('class="results"', 'class="results" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))"');
      const freq = {}; wordsOf(stripLinks(t)).forEach(x => { x = x.toLowerCase(); if (x.length > 2 && !STOP.has(x)) freq[x] = (freq[x] || 0) + 1; });
      const top = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 10), mx = top[0] ? top[0][1] : 1;
      const kwHTML = top.map(([k, c]) => `<div class="bar-row"><span style="width:110px;overflow:hidden;text-overflow:ellipsis">${esc(k)}</span><div class="bar"><i style="width:${c / mx * 100}%"></i></div><span>${c} · ${(c / w.length * 100).toFixed(1)}%</span></div>`).join('') || '<span class="muted small">Type some text to see keyword frequency.</span>';
      const limHTML = LIMITS.map(([n, l]) => `<div class="bar-row"><span style="width:160px">${n}</span><div class="bar"><i style="width:${Math.min(100, chars / l * 100)}%;background:${chars > l ? 'var(--danger)' : 'var(--primary)'}"></i></div><span style="width:90px;text-align:right">${chars}/${l}</span></div>`).join('');
      $(preset.chars ? '.side' : '.side2').innerHTML = limHTML; $(preset.chars ? '.side2' : '.side').innerHTML = kwHTML;
      UI.store.set(key, t);
    };
    ta.addEventListener('input', update);
    $('.cp').onclick = () => UI.copy(ta.value); $('.clr').onclick = () => { ta.value = ''; update(); ta.focus(); };
    update();
  });

  const SMALL = /^(a|an|and|as|at|but|by|for|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  const splitWords = t => t.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_\-.]+/g, ' ').trim().split(/\s+/).filter(Boolean);
  Tools.define('case-converter', root => {
    UI.textTool(root, {
      sample: 'the quick brown fox jumps over the lazy dog. it was a sunny day in lahore!', live: false,
      actions: [
        { label: 'UPPER CASE', run: t => t.toUpperCase() }, { label: 'lower case', run: t => t.toLowerCase() },
        { label: 'Title Case', run: t => t.toLowerCase().replace(/[\p{L}\p{N}][^\s]*/gu, (w, i) => (i > 0 && SMALL.test(w) ? w : w[0].toUpperCase() + w.slice(1))) },
        { label: 'Sentence case', run: t => t.toLowerCase().replace(/(^\s*|[.!?]\s+)(\p{L})/gu, (m, p, c) => p + c.toUpperCase()).replace(/\bi\b/g, 'I') },
        { label: 'Capitalize Each Word', run: t => t.toLowerCase().replace(/(^|\s)(\p{L})/gu, (m, p, c) => p + c.toUpperCase()) },
        { label: 'camelCase', run: t => t.split('\n').map(l => splitWords(l).map((w, i) => i ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase()).join('')).join('\n') },
        { label: 'PascalCase', run: t => t.split('\n').map(l => splitWords(l).map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('')).join('\n') },
        { label: 'snake_case', run: t => t.split('\n').map(l => splitWords(l).join('_').toLowerCase()).join('\n') },
        { label: 'kebab-case', run: t => t.split('\n').map(l => splitWords(l).join('-').toLowerCase()).join('\n') },
        { label: 'CONSTANT_CASE', run: t => t.split('\n').map(l => splitWords(l).join('_').toUpperCase()).join('\n') },
        { label: 'aLtErNaTiNg', run: t => { let i = 0; return [...t].map(c => /\p{L}/u.test(c) ? (i++ % 2 ? c.toUpperCase() : c.toLowerCase()) : c).join(''); } },
        { label: 'iNVERSE', run: t => [...t].map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('') },
      ],
    });
  });

  const LOREM = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra est eros bibendum elit nec luctus magna felis sollicitudin mauris integer in mauris eu nibh euismod gravida duis ac tellus et risus vulputate vehicula donec lobortis risus a elit etiam tempor ut ullamcorper ligula eu tempor congue eros est euismod turpis id tincidunt sapien risus a quam maecenas fermentum consequat mi donec fermentum pellentesque malesuada nulla a mi duis sapien sem aliquet nec commodo eget consequat quis neque aliquam faucibus elit ut dictum aliquet felis nisl adipiscing sapien sed malesuada diam lacus eget erat cras mollis scelerisque nunc nullam arcu aliquam consequat'.split(' ');
  Tools.define('lorem-ipsum-generator', root => {
    root.innerHTML = '<div class="stack"><div class="row opts"></div><div class="btn-row"><button class="btn go">Generate</button><button class="btn ghost cp">📋 Copy</button></div><textarea class="textarea out" style="min-height:280px" readonly></textarea><div class="small muted info"></div></div>';
    const $ = UI.q(root);
    const r = n => Math.floor(Math.random() * n), word = () => LOREM[r(LOREM.length)];
    const sentence = () => { const n = 8 + r(10), w = Array.from({ length: n }, word); w[0] = w[0][0].toUpperCase() + w[0].slice(1); if (n > 10) w[r(n - 4) + 2] += ','; return w.join(' ') + '.'; };
    const para = () => Array.from({ length: 4 + r(4) }, sentence).join(' ');
    const form = UI.fields($('.opts'), [{ id: 'type', label: 'Generate', type: 'seg', value: 'p', options: [['p', 'Paragraphs'], ['s', 'Sentences'], ['w', 'Words'], ['l', 'List items']] }, { id: 'n', label: 'How many', type: 'number', value: 3, min: 1, max: 500 }, { id: 'start', label: 'Start with "Lorem ipsum dolor sit amet…"', type: 'checkbox', value: true }, { id: 'html', label: 'Wrap in HTML tags', type: 'checkbox', value: false }], () => gen());
    const gen = () => {
      const o = form.get(), n = UI.clamp(Math.round(o.n || 1), 1, 500); let items;
      if (o.type === 'w') items = [Array.from({ length: n }, word).join(' ')];
      else items = Array.from({ length: n }, o.type === 'p' ? para : sentence);
      if (o.start) items[0] = o.type === 'w' ? ('lorem ipsum dolor sit amet ' + items[0]).split(' ').slice(0, Math.max(n, 1)).join(' ') : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + items[0].split('. ').slice(1).join('. ');
      let out = o.type === 'p' ? items.join('\n\n') : o.type === 's' ? items.join(' ') : o.type === 'l' ? items.map(i => (o.html ? i : '• ' + i)).join('\n') : items[0];
      if (o.html) out = o.type === 'p' ? items.map(p => `<p>${p}</p>`).join('\n') : o.type === 'l' ? `<ul>\n${items.map(i => `  <li>${i}</li>`).join('\n')}\n</ul>` : `<p>${out}</p>`;
      $('.out').value = out.trim(); $('.info').textContent = `${wordsOf(out).length} words · ${out.length} characters`;
    };
    $('.go').onclick = gen; $('.cp').onclick = () => UI.copy($('.out').value); gen();
  });

  function lcsDiff(a, b) {
    const n = a.length, m = b.length;
    if (n * m > 25e6) return null;
    const dp = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const out = []; let i = 0, j = 0;
    while (i < n && j < m) { if (a[i] === b[j]) { out.push(['=', a[i]]); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) out.push(['-', a[i++]]); else out.push(['+', b[j++]]); }
    while (i < n) out.push(['-', a[i++]]); while (j < m) out.push(['+', b[j++]]);
    return out;
  }
  Tools.define('text-compare', root => {
    root.innerHTML = `<div class="stack"><div class="grid-2"><div class="field"><label>Original text</label><textarea class="textarea a" style="min-height:220px">The quick brown fox jumps over the lazy dog.
Our office opens at 9 AM.
Contact us by email.</textarea></div><div class="field"><label>Changed text</label><textarea class="textarea b" style="min-height:220px">The quick brown fox leaped over the lazy dog.
Our office opens at 9 AM.
Contact us by email or phone.
New line added here.</textarea></div></div>
      <div class="row" style="align-items:center"><button class="btn go">🆚 Compare</button><label class="check"><input type="checkbox" class="ic"> Ignore case</label><label class="check"><input type="checkbox" class="iw" checked> Ignore extra spaces</label></div><div class="out stack"></div></div>`;
    const $ = UI.q(root);
    const run = () => {
      const norm = s => { if ($('.iw').checked) s = s.replace(/[ \t]+/g, ' ').trim(); if ($('.ic').checked) s = s.toLowerCase(); return s; };
      const A = $('.a').value.split('\n'), B = $('.b').value.split('\n');
      const d = lcsDiff(A.map(norm), B.map(norm));
      if (!d) return UI.notice($('.out'), 'These texts are too long to compare in the browser. Try smaller sections.', 'error');
      let ai = 0, bi = 0, add = 0, del = 0; const rows = [];
      for (let k = 0; k < d.length; k++) {
        const [op] = d[k];
        if (op === '-' && d[k + 1] && d[k + 1][0] === '+') {
          const wa = A[ai].split(/(\s+)/), wb = B[bi].split(/(\s+)/), wd = lcsDiff(wa.map(norm), wb.map(norm)) || [];
          let x = 0, y = 0; const L = [], R = [];
          wd.forEach(([o]) => { if (o === '=') { L.push(esc(wa[x++])); R.push(esc(wb[y++])); } else if (o === '-') L.push(`<span class="hl-del">${esc(wa[x++])}</span>`); else R.push(`<span class="hl-add">${esc(wb[y++])}</span>`); });
          rows.push(['~', ai + 1, L.join(''), bi + 1, R.join('')]); ai++; bi++; k++; add++; del++;
        } else if (op === '=') { rows.push(['=', ai + 1, esc(A[ai]), bi + 1, esc(B[bi])]); ai++; bi++; }
        else if (op === '-') { rows.push(['-', ai + 1, `<span class="hl-del">${esc(A[ai])}</span>`, '', '']); ai++; del++; }
        else { rows.push(['+', '', '', bi + 1, `<span class="hl-add">${esc(B[bi])}</span>`]); bi++; add++; }
      }
      const bg = { '=': '', '-': 'background:var(--danger-soft)', '+': 'background:var(--success-soft)', '~': 'background:var(--warn-soft)' };
      $('.out').innerHTML = (add + del ? `<div class="notice">Found <strong>${rows.filter(r => r[0] !== '=').length}</strong> changed line(s): ${rows.filter(r => r[0] === '+').length} added, ${rows.filter(r => r[0] === '-').length} removed, ${rows.filter(r => r[0] === '~').length} modified.</div>` : '<div class="notice success">✓ The texts are identical.</div>')
        + `<div class="table-wrap"><table class="table" style="table-layout:fixed;font-family:var(--mono);font-size:.85rem"><colgroup><col style="width:44px"><col><col style="width:44px"><col></colgroup><tbody>${rows.map(([o, l, L, r, R]) => `<tr style="${bg[o]}"><td class="muted">${l}</td><td style="white-space:pre-wrap;word-break:break-word">${L}</td><td class="muted">${r}</td><td style="white-space:pre-wrap;word-break:break-word">${R}</td></tr>`).join('')}</tbody></table></div>`;
    };
    $('.go').onclick = run; run();
  });

  Tools.define('remove-duplicate-lines', root => {
    UI.textTool(root, {
      sample: 'apple\nbanana\nApple\norange\nbanana\n\nkiwi\norange',
      options: [{ id: 'ci', label: 'Ignore case', type: 'checkbox', value: true }, { id: 'trim', label: 'Trim spaces', type: 'checkbox', value: true }, { id: 'empty', label: 'Remove empty lines', type: 'checkbox', value: true }, { id: 'sort', label: 'Sort A → Z', type: 'checkbox', value: false }],
      run(t, o) {
        const seen = new Set(), lines = t.split('\n'), out = [];
        lines.forEach(l => { const v = o.trim ? l.trim() : l; if (o.empty && !v) return; const k = o.ci ? v.toLowerCase() : v; if (seen.has(k)) return; seen.add(k); out.push(v); });
        if (o.sort) out.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));
        return { text: out.join('\n'), info: `${lines.length} lines → ${out.length} lines (${lines.length - out.length} removed)` };
      },
    });
  });
  Tools.define('sort-lines', root => {
    UI.textTool(root, {
      sample: 'Mango\nbanana\nApple 10\nApple 2\ncherry\nDate',
      options: [{ id: 'mode', label: 'Sort', type: 'select', value: 'az', options: [['az', 'Alphabetical A → Z'], ['za', 'Alphabetical Z → A'], ['num', 'Numbers ascending'], ['numd', 'Numbers descending'], ['len', 'Shortest first'], ['lend', 'Longest first'], ['rev', 'Reverse order'], ['shuf', 'Shuffle (random)']] }, { id: 'nat', label: 'Natural sort (2 before 10)', type: 'checkbox', value: true }, { id: 'ci', label: 'Ignore case', type: 'checkbox', value: true }, { id: 'empty', label: 'Remove empty lines', type: 'checkbox', value: true }],
      run(t, o) {
        let l = t.split('\n'); if (o.empty) l = l.filter(x => x.trim());
        const cmp = (a, b) => a.localeCompare(b, undefined, { numeric: o.nat, sensitivity: o.ci ? 'base' : 'variant' }), num = x => parseFloat((x.match(/-?\d+(\.\d+)?/) || [NaN])[0]);
        const f = { az: () => l.sort(cmp), za: () => l.sort((a, b) => cmp(b, a)), num: () => l.sort((a, b) => (num(a) - num(b)) || cmp(a, b)), numd: () => l.sort((a, b) => (num(b) - num(a)) || cmp(a, b)), len: () => l.sort((a, b) => a.length - b.length), lend: () => l.sort((a, b) => b.length - a.length), rev: () => l.reverse(), shuf: () => { for (let i = l.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [l[i], l[j]] = [l[j], l[i]]; } return l; } };
        f[o.mode](); return { text: l.join('\n'), info: `${l.length} lines sorted` };
      },
    });
  });
  Tools.define('reverse-text', root => {
    const g = t => [...(window.Intl && Intl.Segmenter ? [...new Intl.Segmenter().segment(t)].map(s => s.segment) : t)];
    UI.textTool(root, {
      sample: 'Hello world! Reverse this text.', live: false,
      actions: [{ label: 'Reverse text', run: t => g(t).reverse().join('') }, { label: 'Reverse each word', run: t => t.split(/(\s+)/).map(w => g(w).reverse().join('')).join('') }, { label: 'Reverse word order', run: t => t.split('\n').map(l => l.split(/\s+/).reverse().join(' ')).join('\n') }, { label: 'Reverse line order', run: t => t.split('\n').reverse().join('\n') }],
    });
  });

  const MATH = { bold: [0x1D400, 0x1D41A, 0x1D7CE], italic: [0x1D434, 0x1D44E], boldItalic: [0x1D468, 0x1D482], script: [0x1D49C, 0x1D4B6], boldScript: [0x1D4D0, 0x1D4EA], fraktur: [0x1D504, 0x1D51E], boldFraktur: [0x1D56C, 0x1D586], double: [0x1D538, 0x1D552, 0x1D7D8], sans: [0x1D5A0, 0x1D5BA, 0x1D7E2], sansBold: [0x1D5D4, 0x1D5EE, 0x1D7EC], sansItalic: [0x1D608, 0x1D622], sansBoldItalic: [0x1D63C, 0x1D656], mono: [0x1D670, 0x1D68A, 0x1D7F6] };
  const EXC = { italic: { h: 'ℎ' }, script: { B: 'ℬ', E: 'ℰ', F: 'ℱ', H: 'ℋ', I: 'ℐ', L: 'ℒ', M: 'ℳ', R: 'ℛ', e: 'ℯ', g: 'ℊ', o: 'ℴ' }, fraktur: { C: 'ℭ', H: 'ℌ', I: 'ℑ', R: 'ℜ', Z: 'ℨ' }, double: { C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ' } };
  const mapMath = (t, k) => [...t].map(c => { const e = EXC[k] && EXC[k][c]; if (e) return e; const [U, L, D] = MATH[k], x = c.charCodeAt(0); if (x >= 65 && x <= 90) return String.fromCodePoint(U + x - 65); if (x >= 97 && x <= 122) return String.fromCodePoint(L + x - 97); if (D && x >= 48 && x <= 57) return String.fromCodePoint(D + x - 48); return c; }).join('');
  const mapTable = (t, from, to) => { const f = [...from], tt = [...to]; return [...t].map(c => { const i = f.indexOf(c); return i >= 0 ? tt[i] : c; }).join(''); };
  const ABC = 'abcdefghijklmnopqrstuvwxyz';
  const range = (t, up, lo, dg) => [...t].map(c => { const x = c.charCodeAt(0); if (x >= 65 && x <= 90 && up) return String.fromCodePoint(up + x - 65); if (x >= 97 && x <= 122) return lo ? String.fromCodePoint(lo + x - 97) : up ? String.fromCodePoint(up + x - 97) : c; if (dg && x >= 48 && x <= 57) return dg(x - 48); return c; }).join('');
  const comb = (t, m) => [...t].map(c => (c === ' ' ? c : c + m)).join('');
  const FLIP_FROM = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,\'"?!()[]{}<>&_;', FLIP_TO = 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀ꓭƆꓷƎℲꓨHIꓩꓘꓶWNOԀΌꓤSꓕ∩ΛMX⅄Z0ƖᄅƐㄣϛ9ㄥ86˙\'„¿¡)(][}{><⅋‾؛';
  const STYLES = [
    ['Bold', t => mapMath(t, 'bold')], ['Italic', t => mapMath(t, 'italic')], ['Bold Italic', t => mapMath(t, 'boldItalic')], ['Cursive Script', t => mapMath(t, 'script')], ['Bold Cursive', t => mapMath(t, 'boldScript')],
    ['Gothic (Fraktur)', t => mapMath(t, 'fraktur')], ['Bold Gothic', t => mapMath(t, 'boldFraktur')], ['Double-struck', t => mapMath(t, 'double')], ['Sans Bold', t => mapMath(t, 'sansBold')], ['Sans Italic', t => mapMath(t, 'sansItalic')],
    ['Sans Bold Italic', t => mapMath(t, 'sansBoldItalic')], ['Monospace', t => mapMath(t, 'mono')], ['Circled', t => range(t, 0x24B6, 0x24D0, d => d ? String.fromCodePoint(0x2460 + d - 1) : '⓪')], ['Circled (dark)', t => range(t.toUpperCase(), 0x1F150)],
    ['Squared', t => range(t.toUpperCase(), 0x1F130)], ['Squared (dark)', t => range(t.toUpperCase(), 0x1F170)], ['Fullwidth', t => [...t].map(c => { const x = c.charCodeAt(0); return x === 32 ? '　' : x > 32 && x < 127 ? String.fromCharCode(x + 0xFEE0) : c; }).join('')],
    ['Small Caps', t => mapTable(t.toLowerCase(), ABC, 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ')], ['Superscript', t => mapTable(t.toLowerCase(), ABC + '0123456789', 'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹')], ['Upside Down', t => [...mapTable(t, FLIP_FROM, FLIP_TO)].reverse().join('')],
    ['Strikethrough', t => comb(t, '̶')], ['Underline', t => comb(t, '̲')], ['Double Underline', t => comb(t, '̳')], ['Slashed', t => comb(t, '̸')], ['Wavy', t => comb(t, '̰')],
    ['Sparkles', t => `✨ ${t} ✨`], ['Stars', t => `★彡 ${mapMath(t, 'boldScript')} 彡★`], ['Hearts', t => `♡ ${t} ♡`], ['Brackets', t => `『${t}』`], ['Wings', t => `꧁༺ ${mapMath(t, 'script')} ༻꧂`], ['Fire', t => `🔥 ${mapMath(t, 'sansBold')} 🔥`], ['Spaced Out', t => [...t].join(' ')],
  ];
  Tools.define('fancy-text-generator', root => {
    root.innerHTML = `<div class="stack"><input class="input txt" style="font-size:1.1rem" value="Your Text Here" placeholder="Type your text…"><div class="small muted">Click any style to copy it. Works on Instagram, WhatsApp, TikTok, Facebook, X, Discord and more.</div><div class="list stack" style="gap:8px"></div></div>`;
    const $ = UI.q(root);
    const draw = () => { const t = $('.txt').value || 'Your Text Here'; $('.list').innerHTML = STYLES.map(([n, f], i) => `<button class="file-item" data-i="${i}" style="cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%"><div class="meta"><div class="sub">${n}</div><div class="name fx" style="font-size:1.2rem;white-space:normal">${esc(f(t))}</div></div><span class="btn sm secondary">Copy</span></button>`).join(''); };
    $('.list').addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) UI.copy(b.querySelector('.fx').textContent, 'Copied — paste it anywhere'); });
    $('.txt').addEventListener('input', draw); draw();
  });

  Tools.define('remove-line-breaks', root => {
    UI.textTool(root, {
      sample: 'This text was copied from a PDF and has\nline breaks in the middle of sen-\ntences that make it hard to read.\n\nThis is a second paragraph   with  extra   spaces.',
      options: [{ id: 'mode', label: 'Line breaks', type: 'select', value: 'para', options: [['para', 'Remove, but keep paragraphs'], ['all', 'Remove all'], ['comma', 'Replace with comma']] }, { id: 'hy', label: 'Join hyphenated words', type: 'checkbox', value: true }, { id: 'sp', label: 'Remove extra spaces', type: 'checkbox', value: true }],
      run(t, o) {
        let s = t.replace(/\r\n?/g, '\n'); if (o.hy) s = s.replace(/(\p{L})-\n(\p{L})/gu, '$1$2');
        if (o.mode === 'para') s = s.split(/\n\s*\n/).map(p => p.replace(/\s*\n\s*/g, ' ')).join('\n\n');
        else if (o.mode === 'all') s = s.replace(/\s*\n\s*/g, ' '); else s = s.split('\n').map(x => x.trim()).filter(Boolean).join(', ');
        if (o.sp) s = s.replace(/[ \t]{2,}/g, ' ').replace(/ +\n/g, '\n').trim();
        return s;
      },
    });
  });

  Tools.define('find-and-replace', root => {
    UI.textTool(root, {
      sample: 'I love cats. Cats are wonderful pets, and my cat sleeps all day.',
      options: [{ id: 'f', label: 'Find', type: 'text', value: 'cat' }, { id: 'r', label: 'Replace with', type: 'text', value: 'dog' }, { id: 'cs', label: 'Match case', type: 'checkbox', value: false }, { id: 'ww', label: 'Whole words only', type: 'checkbox', value: false }, { id: 're', label: 'Regular expression', type: 'checkbox', value: false }],
      run(t, o) {
        if (!o.f) return { text: t, info: 'Enter text to find.' };
        let src = o.re ? o.f : o.f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); if (o.ww) src = `\\b${src}\\b`;
        const re = new RegExp(src, 'g' + (o.cs ? '' : 'i') + 'u'), n = (t.match(re) || []).length;
        return { text: t.replace(re, o.re ? o.r : () => o.r), info: `${n} replacement${n === 1 ? '' : 's'} made` };
      },
    });
  });

  Tools.define('keyword-density-checker', root => {
    root.innerHTML = `<div class="stack"><textarea class="textarea txt" style="min-height:200px" placeholder="Paste your article or web page text…">Online tools save time. Our free online tools help students, developers and businesses. With free online tools you can convert PDF files, compress images and calculate your CGPA. The best online tools are fast, free and private.</textarea>
      <div class="row"><label class="check"><input type="checkbox" class="sw" checked> Ignore common words (the, and, of…)</label><div class="field small"><label>Min. word length</label><input class="input ml" type="number" value="3"></div></div><div class="stats"></div><div class="grid-3 out" style="align-items:start"></div></div>`;
    const $ = UI.q(root);
    const run = () => {
      const w = wordsOf(stripLinks($('.txt').value).toLowerCase()), total = w.length, ml = UI.num($('.ml').value) || 1, sw = $('.sw').checked;
      const ok = x => x.length >= ml && !(sw && STOP.has(x)) && !/^\d+$/.test(x);
      const grams = n => { const c = {}; for (let i = 0; i + n <= w.length; i++) { const g = w.slice(i, i + n); if (!g.every(ok) && n === 1) continue; if (n > 1 && (!ok(g[0]) || !ok(g[n - 1]))) continue; const k = g.join(' '); c[k] = (c[k] || 0) + 1; } return Object.entries(c).filter(([, v]) => n === 1 || v > 1).sort((a, b) => b[1] - a[1]).slice(0, 15); };
      $('.stats').innerHTML = UI.resultsHTML([{ k: 'Total words', v: fmt(total) }, { k: 'Unique words', v: fmt(new Set(w).size) }]);
      $('.out').innerHTML = [1, 2, 3].map(n => `<div class="card-sub"><h3>${n} word${n > 1 ? 's' : ''}</h3><table class="table"><thead><tr><th>Keyword</th><th class="num">Count</th><th class="num">Density</th></tr></thead><tbody>${grams(n).map(([k, c]) => `<tr><td style="white-space:normal">${esc(k)}</td><td class="num">${c}</td><td class="num">${(c * n / Math.max(1, total) * 100).toFixed(1)}%</td></tr>`).join('') || '<tr><td colspan="3" class="muted">—</td></tr>'}</tbody></table></div>`).join('');
    };
    root.addEventListener('input', UI.debounce(run, 150)); root.addEventListener('change', run); run();
  });

  const MORSE = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', 0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.' };
  const REV = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));
  Tools.define('morse-code-translator', root => {
    let playing = null;
    const tt = UI.textTool(root, {
      sample: 'SOS Help is on the way', inputLabel: 'Text or Morse code', outputLabel: 'Translation',
      options: [{ id: 'wpm', label: 'Playback speed', type: 'range', value: 18, min: 5, max: 35, unit: ' wpm' }],
      run(t) {
        if (/^[\s.\-/·−_|]+$/.test(t) && /[.\-]/.test(t)) return { text: t.trim().replace(/[·]/g, '.').replace(/[−_]/g, '-').split(/\s*[/|]\s*|\s{3,}/).map(w => w.split(/\s+/).map(c => REV[c] || (c ? '�' : '')).join('')).join(' '), info: 'Detected Morse code → text' };
        return { text: t.toUpperCase().split(/\s+/).filter(Boolean).map(w => [...w].map(c => MORSE[c] || '').filter(Boolean).join(' ')).join(' / '), info: 'Text → Morse code (letters separated by spaces, words by /)' };
      },
    });
    const play = UI.h('<button class="btn secondary">🔊 Play Morse</button>');
    root.querySelector('.btn-row').prepend(play);
    play.onclick = () => {
      if (playing) { playing.close(); playing = null; play.textContent = '🔊 Play Morse'; return; }
      const code = /^[\s.\-/]+$/.test(tt.out.value) ? tt.out.value : tt.inp.value; if (!/[.\-]/.test(code)) return UI.toast('Nothing to play');
      const ac = new AudioContext(), unit = 1.2 / tt.opts.get().wpm; let t = ac.currentTime + 0.1;
      const osc = ac.createOscillator(), g = ac.createGain(); osc.frequency.value = 650; g.gain.value = 0; osc.connect(g).connect(ac.destination); osc.start();
      for (const c of code) { if (c === '.' || c === '-') { g.gain.setValueAtTime(0.4, t); t += unit * (c === '.' ? 1 : 3); g.gain.setValueAtTime(0, t); t += unit; } else if (c === ' ') t += unit * 2; else if (c === '/') t += unit * 4; }
      osc.stop(t); playing = ac; play.textContent = '⏹ Stop'; osc.onended = () => { ac.close(); if (playing === ac) { playing = null; play.textContent = '🔊 Play Morse'; } };
    };
  });

  Tools.define('binary-translator', root => {
    const enc = new TextEncoder(), dec = new TextDecoder();
    const fromBytes = (t, base, re) => { const parts = t.trim().split(/[\s,]+/).filter(Boolean); if (!parts.every(p => re.test(p))) throw new Error('Invalid input for this conversion.'); return dec.decode(new Uint8Array(parts.map(p => parseInt(p, base)))); };
    UI.textTool(root, {
      sample: 'Hello', live: false, mono: true,
      actions: [{ label: 'Text → Binary', run: t => [...enc.encode(t)].map(b => b.toString(2).padStart(8, '0')).join(' ') }, { label: 'Binary → Text', run: t => fromBytes(t.replace(/([01]{8})(?=[01])/g, '$1 '), 2, /^[01]{1,8}$/) }, { label: 'Text → Hex', run: t => [...enc.encode(t)].map(b => b.toString(16).padStart(2, '0')).join(' ') }, { label: 'Hex → Text', run: t => fromBytes(t.replace(/0x/gi, '').replace(/([0-9a-f]{2})(?=[0-9a-f])/gi, '$1 '), 16, /^[0-9a-f]{1,2}$/i) }, { label: 'Text → Decimal', run: t => [...enc.encode(t)].join(' ') }, { label: 'Decimal → Text', run: t => fromBytes(t, 10, /^\d{1,3}$/) }],
    });
  });

  Tools.define('text-repeater', root => {
    UI.textTool(root, {
      sample: 'Hello! 👋',
      options: [{ id: 'n', label: 'Repeat', type: 'number', value: 10, min: 1, unit: 'times' }, { id: 'sep', label: 'Separator', type: 'select', value: 'nl', options: [['nl', 'New line'], ['sp', 'Space'], ['none', 'None'], ['comma', 'Comma'], ['custom', 'Custom']] }, { id: 'custom', label: 'Custom separator', type: 'text', value: ' | ', show: v => v.sep === 'custom' }, { id: 'num', label: 'Number each line', type: 'checkbox', value: false }],
      run(t, o) {
        const n = Math.max(0, Math.round(o.n || 0)); if (!t) return '';
        if (t.length * n > 5e6) throw new Error('That would be too large (over 5 million characters). Use a smaller count.');
        const sep = { nl: '\n', sp: ' ', none: '', comma: ', ', custom: o.custom }[o.sep];
        return { text: Array.from({ length: n }, (_, i) => (o.num ? `${i + 1}. ` : '') + t).join(sep), info: `${n} repetitions` };
      },
    });
  });

  Tools.define('online-notepad', root => {
    let notes = UI.store.get('notes', null) || [{ id: Date.now(), text: 'Welcome to your online notepad! 📝\n\nEverything you type is saved automatically in this browser. Create more notes with "+ New note".', t: Date.now() }];
    let cur = notes[0].id;
    root.innerHTML = `<div class="grid-2" style="grid-template-columns:240px 1fr;align-items:start"><div class="stack"><button class="btn new">+ New note</button><div class="list stack" style="gap:6px;max-height:480px;overflow:auto"></div></div>
      <div class="stack"><textarea class="textarea ed" style="min-height:420px;font-size:1.02rem" dir="auto" placeholder="Start writing…"></textarea><div class="btn-row"><button class="btn secondary dl">⬇ Download .txt</button><button class="btn ghost cp">📋 Copy</button><button class="btn ghost del">🗑 Delete</button><span class="small muted st"></span></div></div></div>`;
    const $ = UI.q(root);
    if (innerWidth < 700) root.firstElementChild.style.gridTemplateColumns = '1fr';
    const save = () => UI.store.set('notes', notes);
    const note = () => notes.find(n => n.id === cur);
    const title = n => (n.text.trim().split('\n')[0] || 'Untitled').slice(0, 40);
    const list = () => { $('.list').innerHTML = notes.sort((a, b) => b.t - a.t).map(n => `<button class="file-item" data-id="${n.id}" style="cursor:pointer;text-align:left;font:inherit;color:inherit;${n.id === cur ? 'border-color:var(--primary)' : ''}"><div class="meta"><div class="name">${esc(title(n))}</div><div class="sub">${new Date(n.t).toLocaleString()}</div></div></button>`).join(''); };
    const open = id => { cur = id; $('.ed').value = note().text; status(); list(); };
    const status = () => { const t = $('.ed').value; $('.st').textContent = `${wordsOf(t).length} words · saved`; };
    $('.ed').addEventListener('input', UI.debounce(() => { const n = note(); n.text = $('.ed').value; n.t = Date.now(); save(); status(); list(); }, 300));
    $('.list').addEventListener('click', e => { const b = e.target.closest('[data-id]'); if (b) open(+b.dataset.id); });
    $('.new').onclick = () => { const n = { id: Date.now(), text: '', t: Date.now() }; notes.unshift(n); save(); open(n.id); $('.ed').focus(); };
    $('.del').onclick = () => { if (!confirm('Delete this note?')) return; notes = notes.filter(n => n.id !== cur); if (!notes.length) notes.push({ id: Date.now(), text: '', t: Date.now() }); save(); open(notes[0].id); };
    $('.dl').onclick = () => UI.downloadText($('.ed').value, title(note()).replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-') + '.txt');
    $('.cp').onclick = () => UI.copy($('.ed').value);
    open(cur);
  });

  const INVIS = [
    ['\u3164', 'Hangul Filler', 'U+3164', 'Most popular blank character — shows as an empty but real character in usernames, game names and messages.'],
    ['\u2800', 'Braille Pattern Blank', 'U+2800', 'Looks like a normal space but is not removed by apps — good for blank messages and bio spacing.'],
    ['\u200B', 'Zero Width Space', 'U+200B', 'Takes no space at all. Used to break links or hashtags and for “empty” messages.'],
    ['\uFFA0', 'Halfwidth Hangul Filler', 'U+FFA0', 'A narrower blank filler that some games and apps accept when U+3164 is blocked.'],
    ['\u00A0', 'No-Break Space', 'U+00A0', 'A normal-width space that keeps words together and is not collapsed in many apps.'],
    ['\u2003', 'Em Space', 'U+2003', 'A wide space — useful for indenting text in bios and captions.'],
    ['\u200C', 'Zero Width Non-Joiner', 'U+200C', 'Invisible and zero width. Another option for blank messages.'],
  ];
  const HIDDEN = /[\u00A0\u00AD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180E\u2000-\u200F\u2028-\u202F\u205F-\u2064\u206A-\u206F\u2800\u3000\u3164\uFEFF\uFFA0]/g;
  const cpName = ch => { const f = INVIS.find(x => x[0] === ch); return f ? f[1] : 'U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'); };

  Tools.define('invisible-character', root => {
    root.innerHTML = `<div class="stack">
      <div class="card-sub stack" style="align-items:center;text-align:center"><div class="small muted">Invisible character (Hangul Filler) — copied with one click</div>
        <div class="main-box" aria-label="Invisible character" style="width:min(320px,100%);height:72px;border:2px dashed var(--primary);border-radius:14px;background:var(--primary-soft);display:grid;place-items:center;font-size:1.5rem">\u3164</div>
        <button class="btn lg cp-main">📋 Copy invisible character</button></div>
      <div class="row"><div class="field"><label>Character</label><select class="select which">${INVIS.map((c, i) => `<option value="${i}">${c[1]} (${c[2]})</option>`).join('')}</select></div>
        <div class="field"><label>How many</label><input class="input count" type="number" value="1" min="1" max="5000"></div>
        <div class="field" style="justify-content:flex-end"><button class="btn secondary cp-many">📋 Copy</button></div></div>
      <p class="small muted desc"></p>
      <div class="table-wrap"><table class="table"><thead><tr><th>Character</th><th>Code</th><th>Best for</th><th></th></tr></thead><tbody>${INVIS.map((c, i) => `<tr><td><strong>${c[1]}</strong></td><td class="mono">${c[2]}</td><td class="small">${c[3]}</td><td><button class="btn sm secondary" data-cp="${i}">Copy</button></td></tr>`).join('')}</tbody></table></div>
      <div class="card-sub stack"><strong>🔍 Invisible character detector & remover</strong><div class="small muted">Paste any text to find hidden characters, zero-width spaces and blank fillers.</div>
        <textarea class="textarea det" placeholder="Paste text here…" style="min-height:110px"></textarea><div class="det-out small"></div>
        <div class="btn-row"><button class="btn sm secondary clean">🧹 Remove hidden characters & copy</button></div></div></div>`;
    const $ = UI.q(root);
    const many = () => { const c = INVIS[+$('.which').value]; $('.desc').textContent = c[3]; return c[0].repeat(UI.clamp(Math.round(UI.num($('.count').value)) || 1, 1, 5000)); };
    $('.which').onchange = many; many();
    $('.cp-main').onclick = () => UI.copy('\u3164', 'Invisible character copied');
    $('.cp-many').onclick = () => { const s = many(); UI.copy(s, `Copied ${s.length} invisible character${s.length === 1 ? '' : 's'}`); };
    root.addEventListener('click', e => { const b = e.target.closest('[data-cp]'); if (b) UI.copy(INVIS[+b.dataset.cp][0], `${INVIS[+b.dataset.cp][1]} copied`); });
    const detect = () => {
      const t = $('.det').value, found = t.match(HIDDEN) || [];
      if (!t) { $('.det-out').innerHTML = ''; return; }
      const counts = {}; found.forEach(ch => { const n = cpName(ch); counts[n] = (counts[n] || 0) + 1; });
      $('.det-out').innerHTML = found.length ? `⚠️ Found <strong>${found.length}</strong> hidden character${found.length === 1 ? '' : 's'}: ${Object.entries(counts).map(([n, c]) => `${esc(n)} × ${c}`).join(', ')}` : '✅ No hidden characters found.';
    };
    $('.det').addEventListener('input', detect);
    $('.clean').onclick = () => { const t = $('.det').value.replace(HIDDEN, m => /[\u00A0\u2000-\u200A\u202F\u205F\u3000]/.test(m) ? ' ' : ''); $('.det').value = t; detect(); UI.copy(t, 'Cleaned text copied'); };
  });

  Tools.define('words-to-minutes', root => {
    UI.calc(root, {
      fields: [
        { id: 'dir', label: 'Calculate', type: 'seg', value: 'w2m', options: [['w2m', 'Words → minutes'], ['m2w', 'Minutes → words']], full: true },
        { id: 'words', label: 'Number of words', type: 'number', value: 1300, min: 0, show: v => v.dir === 'w2m' },
        { id: 'text', label: '…or paste your speech / text', type: 'textarea', rows: 4, value: '', placeholder: 'Paste text to count its words automatically', full: true, show: v => v.dir === 'w2m' },
        { id: 'mins', label: 'Speech length', type: 'number', value: 5, min: 0, unit: 'min', show: v => v.dir === 'm2w' },
        { id: 'pace', label: 'Speaking pace', type: 'select', value: '130', options: [['100', 'Slow — 100 wpm'], ['130', 'Average — 130 wpm'], ['160', 'Fast — 160 wpm'], ['c', 'Custom']] },
        { id: 'custom', label: 'Custom pace', type: 'number', value: 150, unit: 'wpm', show: v => v.pace === 'c' },
      ],
      compute(v) {
        const pace = v.pace === 'c' ? v.custom : +v.pace; if (!(pace > 0)) return null;
        const mmss = min => { const s = Math.round(min * 60); return s >= 3600 ? `${Math.floor(s / 3600)} h ${Math.floor(s % 3600 / 60)} min` : `${Math.floor(s / 60)} min ${s % 60} s`; };
        if (v.dir === 'm2w') {
          if (!(v.mins > 0)) return null;
          return { results: [{ k: `Words for a ${fmt(v.mins)}-minute speech`, v: `${fmt(Math.round(v.mins * pace))} words`, main: true, s: `at ${pace} words per minute` }, { k: 'Slow (100 wpm)', v: fmt(v.mins * 100) + ' words' }, { k: 'Fast (160 wpm)', v: fmt(v.mins * 160) + ' words' }, { k: 'Pages (≈ 500 words, single-spaced)', v: fmt(v.mins * pace / 500, 1) }] };
        }
        const typed = v.text.trim() ? v.text.trim().split(/\s+/).length : null, n = typed ?? v.words;
        if (!(n > 0)) return null;
        return {
          results: [
            { k: 'Speaking time', v: mmss(n / pace), main: true, s: `${fmt(n)} words at ${pace} wpm${typed != null ? ' (counted from your text)' : ''}` },
            { k: 'Silent reading time', v: mmss(n / 238), s: 'average adult: 238 wpm' },
            { k: 'Slow speaker (100 wpm)', v: mmss(n / 100) }, { k: 'Fast speaker (160 wpm)', v: mmss(n / 160) },
          ],
          note: 'Most people speak at 120–150 words per minute in presentations and read silently at about 238 words per minute. Practise out loud with a timer for the most accurate result.',
        };
      },
    });
  });
})();

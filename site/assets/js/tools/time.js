(function () {
  const { esc, fmt } = UI;
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  const parse = s => s ? new Date(s + 'T00:00') : null;
  const long = d => d.toLocaleDateString('en', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const DAY = 864e5;
  function ymd(a, b) {
    let y = b.getFullYear() - a.getFullYear(), m = b.getMonth() - a.getMonth(), d = b.getDate() - a.getDate();
    if (d < 0) { m--; d += new Date(b.getFullYear(), b.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    return { y, m, d };
  }
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;

  const ZODIAC = [[20, 'Capricorn ♑'], [19, 'Aquarius ♒'], [21, 'Pisces ♓'], [20, 'Aries ♈'], [21, 'Taurus ♉'], [21, 'Gemini ♊'], [23, 'Cancer ♋'], [23, 'Leo ♌'], [23, 'Virgo ♍'], [23, 'Libra ♎'], [22, 'Scorpio ♏'], [22, 'Sagittarius ♐']];
  const CHINESE = ['Monkey 🐒', 'Rooster 🐓', 'Dog 🐕', 'Pig 🐖', 'Rat 🐀', 'Ox 🐂', 'Tiger 🐅', 'Rabbit 🐇', 'Dragon 🐉', 'Snake 🐍', 'Horse 🐎', 'Goat 🐐'];
  Tools.define('age-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'dob', label: 'Date of birth', type: 'date', value: '2000-01-15' }, { id: 'at', label: 'Age on this date', type: 'date', value: iso(new Date()) }],
      compute(v) {
        const a = parse(v.dob), b = parse(v.at); if (!a || !b) return null;
        if (b < a) return '<div class="notice error">The date of birth must be before the "age on" date.</div>';
        const { y, m, d } = ymd(a, b), days = Math.round((b - a) / DAY);
        let next = new Date(b.getFullYear(), a.getMonth(), a.getDate()); if (next <= b) next = new Date(b.getFullYear() + 1, a.getMonth(), a.getDate());
        const toNext = Math.round((next - b) / DAY), nd = ymd(b, next);
        const zi = ZODIAC[a.getMonth()], sign = a.getDate() < zi[0] ? zi[1] : ZODIAC[(a.getMonth() + 1) % 12][1];
        return { results: [{ k: 'Your age', v: `${plural(y, 'year')}, ${plural(m, 'month')}, ${plural(d, 'day')}`, main: true, s: `Born on a ${a.toLocaleDateString('en', { weekday: 'long' })}` },
          { k: 'Total months', v: fmt(y * 12 + m) }, { k: 'Total weeks', v: fmt(Math.floor(days / 7)) }, { k: 'Total days', v: fmt(days) }, { k: 'Total hours', v: fmt(days * 24) },
          { k: 'Next birthday', v: toNext === 365 || toNext === 366 ? '🎉 Today!' : `${nd.m ? plural(nd.m, 'month') + ' ' : ''}${plural(nd.d, 'day')}`, s: `${long(next)} — turning ${y + 1}` }, { k: 'Zodiac sign', v: sign }, { k: 'Chinese zodiac', v: CHINESE[a.getFullYear() % 12] }] };
      },
    });
  });

  Tools.define('date-difference-calculator', root => {
    const d1 = new Date(); const d2 = new Date(d1.getFullYear(), 11, 31);
    UI.calc(root, {
      fields: [{ id: 'a', label: 'Start date', type: 'date', value: iso(d1) }, { id: 'b', label: 'End date', type: 'date', value: iso(d2) }, { id: 'inc', label: 'Include end date (+1 day)', type: 'checkbox', value: false },
        { id: 'we', label: 'Weekend days', type: 'select', value: '06', options: [['06', 'Saturday & Sunday'], ['56', 'Friday & Saturday'], ['5', 'Friday only'], ['0', 'Sunday only']] }],
      compute(v) {
        let a = parse(v.a), b = parse(v.b); if (!a || !b) return null;
        const neg = b < a; if (neg) [a, b] = [b, a];
        const days = Math.round((b - a) / DAY) + (v.inc ? 1 : 0), { y, m, d } = ymd(a, b);
        let biz = 0; const wk = v.we.split('').map(Number);
        for (let t = new Date(a), k = 0; k < days; k++, t.setDate(t.getDate() + 1)) if (!wk.includes(t.getDay())) biz++;
        return { results: [{ k: neg ? 'Days (end is before start)' : 'Difference', v: plural(days, 'day'), main: true, s: `${long(a)} → ${long(b)}` }, { k: 'Years, months, days', v: `${y}y ${m}m ${d}d` }, { k: 'Weeks', v: `${Math.floor(days / 7)} weeks ${days % 7} days` }, { k: 'Business days', v: fmt(biz), s: 'excluding weekends' }, { k: 'Hours', v: fmt(days * 24) }, { k: 'Minutes', v: fmt(days * 1440) }] };
      },
    });
  });

  Tools.define('date-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'd', label: 'Start date', type: 'date', value: iso(new Date()) }, { id: 'op', label: 'Operation', type: 'seg', value: '+', options: [['+', 'Add'], ['-', 'Subtract']] },
        { id: 'y', label: 'Years', type: 'number', value: 0 }, { id: 'm', label: 'Months', type: 'number', value: 0 }, { id: 'w', label: 'Weeks', type: 'number', value: 0 }, { id: 'dd', label: 'Days', type: 'number', value: 90 }],
      compute(v) {
        const s = parse(v.d); if (!s) return null;
        const k = v.op === '+' ? 1 : -1, months = k * ((v.y || 0) * 12 + (v.m || 0));
        const r = new Date(s.getFullYear(), s.getMonth() + months, 1);
        r.setDate(Math.min(s.getDate(), new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate()));
        r.setDate(r.getDate() + k * ((v.w || 0) * 7 + (v.dd || 0)));
        return { results: [{ k: 'Result date', v: long(r), main: true, s: `${Math.abs(Math.round((r - s) / DAY))} days ${r >= s ? 'after' : 'before'} ${s.toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' })}` }, { k: 'ISO format', v: iso(r) }, { k: 'Day of year', v: Math.round((r - new Date(r.getFullYear(), 0, 0)) / DAY) }] };
      },
    });
  });

  const hm = min => { const s = min < 0 ? '−' : ''; min = Math.abs(Math.round(min)); return `${s}${Math.floor(min / 60)}h ${String(min % 60).padStart(2, '0')}m`; };
  Tools.define('time-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'mode', label: 'Calculate', type: 'seg', value: 'between', options: [['between', 'Hours between two times'], ['add', 'Add / subtract time'], ['sum', 'Total of many durations']], full: true },
        { id: 's', label: 'Start time', type: 'time', value: '09:00', show: v => v.mode === 'between' }, { id: 'e', label: 'End time', type: 'time', value: '17:30', show: v => v.mode === 'between' }, { id: 'br', label: 'Unpaid break', type: 'number', value: 30, unit: 'min', show: v => v.mode === 'between' }, { id: 'rate', label: 'Hourly rate (optional)', type: 'number', value: '', show: v => v.mode === 'between' },
        { id: 't', label: 'Start time', type: 'time', value: '08:45', show: v => v.mode === 'add' }, { id: 'op', label: 'Operation', type: 'seg', value: '+', options: [['+', 'Add'], ['-', 'Subtract']], show: v => v.mode === 'add' }, { id: 'h', label: 'Hours', type: 'number', value: 3, show: v => v.mode === 'add' }, { id: 'mi', label: 'Minutes', type: 'number', value: 50, show: v => v.mode === 'add' },
        { id: 'list', label: 'Durations, one per line (e.g. 1:30, 2h 15m, 45m)', type: 'textarea', rows: 5, value: '1:30\n2h 15m\n45m\n0:50', show: v => v.mode === 'sum', full: true }],
      compute(v) {
        const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
        if (v.mode === 'between') {
          if (!v.s || !v.e) return null;
          let d = toMin(v.e) - toMin(v.s); const overnight = d < 0; if (overnight) d += 1440; const net = d - (v.br || 0);
          return { results: [{ k: 'Total time', v: hm(net), main: true, s: `${(net / 60).toFixed(2)} decimal hours${overnight ? ' · crosses midnight' : ''}` }, { k: 'Before break', v: hm(d) }, { k: 'In minutes', v: fmt(net) }, v.rate > 0 && { k: 'Pay', v: fmt(net / 60 * v.rate, 2, 2) }] };
        }
        if (v.mode === 'add') {
          if (!v.t) return null;
          const tot = toMin(v.t) + (v.op === '+' ? 1 : -1) * ((v.h || 0) * 60 + (v.mi || 0)), dayShift = Math.floor(tot / 1440), r = ((tot % 1440) + 1440) % 1440;
          const d = new Date(2000, 0, 1, Math.floor(r / 60), r % 60);
          return { results: [{ k: 'Result', v: d.toLocaleTimeString('en', { hour: 'numeric', minute: '2-digit' }), main: true, s: dayShift ? `${dayShift > 0 ? '+' : ''}${dayShift} day(s)` : 'Same day' }, { k: '24-hour', v: `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` }] };
        }
        let total = 0, n = 0;
        v.list.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
          let m = 0; const c = l.match(/^(-?\d+):(\d{1,2})(?::(\d{1,2}))?$/);
          if (c) m = +c[1] * 60 + (c[1].startsWith('-') ? -1 : 1) * (+c[2] + (+c[3] || 0) / 60);
          else { const h = l.match(/(\d+(?:\.\d+)?)\s*h/i), mm = l.match(/(\d+(?:\.\d+)?)\s*m/i); m = (h ? +h[1] * 60 : 0) + (mm ? +mm[1] : 0); if (!h && !mm && isFinite(+l)) m = +l * 60; }
          total += m; n++;
        });
        return { results: [{ k: 'Total', v: hm(total), main: true, s: `${n} entries · ${(total / 60).toFixed(2)} decimal hours` }, { k: 'Average', v: n ? hm(total / n) : '—' }] };
      },
    });
  });

  Tools.define('stopwatch', root => {
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="big-num disp">0:00.00</div><div class="btn-row" style="justify-content:center"><button class="btn lg ss">▶ Start</button><button class="btn lg secondary lap" disabled>⏱ Lap</button><button class="btn lg ghost rst">↺ Reset</button></div>
      <div class="small muted">Shortcuts: <kbd>Space</kbd> start/stop · <kbd>L</kbd> lap · <kbd>R</kbd> reset</div><div class="table-wrap w-100" style="max-width:520px" hidden><table class="table"><thead><tr><th>Lap</th><th class="num">Lap time</th><th class="num">Total</th></tr></thead><tbody class="laps"></tbody></table></div></div>`;
    const $ = UI.q(root);
    let run = false, base = 0, acc = 0, laps = [], raf;
    const now = () => acc + (run ? performance.now() - base : 0);
    const show = () => { $('.disp').textContent = UI.fmtTime(now() / 1000, true); if (run) raf = requestAnimationFrame(show); };
    const iv = setInterval(() => { if (run) $('.disp').textContent = UI.fmtTime(now() / 1000, true); }, 50);
    const toggle = () => { if (run) { acc = now(); run = false; cancelAnimationFrame(raf); $('.ss').textContent = '▶ Start'; } else { base = performance.now(); run = true; show(); $('.ss').textContent = '⏸ Stop'; } $('.lap').disabled = !run; };
    const lap = () => {
      if (!run) return; const t = now(), prev = laps.length ? laps[laps.length - 1] : 0; laps.push(t);
      const times = laps.map((x, i) => x - (i ? laps[i - 1] : 0)), mn = Math.min(...times), mx = Math.max(...times);
      $('.laps').innerHTML = laps.map((x, i) => [i, times[i], x]).reverse().map(([i, l, x]) => `<tr><td>Lap ${i + 1}</td><td class="num" style="color:${laps.length > 2 && l === mn ? 'var(--success)' : laps.length > 2 && l === mx ? 'var(--danger)' : ''}">${UI.fmtTime(l / 1000, true)}</td><td class="num">${UI.fmtTime(x / 1000, true)}</td></tr>`).join('');
      $('.table-wrap').hidden = false; void prev;
    };
    const reset = () => { run = false; acc = 0; laps = []; cancelAnimationFrame(raf); $('.disp').textContent = '0:00.00'; $('.ss').textContent = '▶ Start'; $('.lap').disabled = true; $('.laps').innerHTML = ''; $('.table-wrap').hidden = true; };
    $('.ss').onclick = toggle; $('.lap').onclick = lap; $('.rst').onclick = reset;
    document.addEventListener('keydown', e => { if (!root.isConnected) return clearInterval(iv); if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return; if (e.code === 'Space') { e.preventDefault(); toggle(); } else if (e.key === 'l' || e.key === 'L') lap(); else if (e.key === 'r' || e.key === 'R') reset(); });
  });

  function timerUI(root, { presets, title }) {
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="chips pre" style="justify-content:center">${presets.map(m => `<button class="chip" data-m="${m}">${m >= 60 ? m / 60 + ' h' : m + ' min'}</button>`).join('')}</div>
      <div class="row" style="justify-content:center"><div class="field small"><label>Hours</label><input class="input h" type="number" min="0" value="0"></div><div class="field small"><label>Minutes</label><input class="input m" type="number" min="0" value="5"></div><div class="field small"><label>Seconds</label><input class="input s" type="number" min="0" value="0"></div></div>
      <div class="big-num disp">5:00</div><div class="progress w-100" style="max-width:520px"><div class="bar" style="width:100%"></div></div>
      <div class="btn-row" style="justify-content:center"><button class="btn lg go">▶ Start</button><button class="btn lg ghost rst">↺ Reset</button><button class="btn lg ghost fs" title="Full screen">⛶</button></div><div class="msg"></div></div>`;
    const $ = UI.q(root), pageTitle = document.title;
    let total = 300, left = 300, end = 0, run = false, iv, ringing;
    const dur = () => ((UI.num($('.h').value) || 0) * 3600 + (UI.num($('.m').value) || 0) * 60 + (UI.num($('.s').value) || 0));
    const paint = () => { $('.disp').textContent = UI.fmtTime(Math.ceil(left)); $('.bar').style.width = (total ? left / total * 100 : 0) + '%'; document.title = run ? `⏳ ${UI.fmtTime(Math.ceil(left))} — ${title}` : pageTitle; };
    const stop = () => { run = false; clearInterval(iv); $('.go').textContent = '▶ Start'; };
    const ring = () => { stop(); left = 0; paint(); document.title = '⏰ Time is up!'; UI.alarm(8); ringing = setInterval(() => UI.alarm(4), 3500); $('.msg').innerHTML = '<div class="notice success">⏰ Time is up! <button class="btn sm ok">Stop alarm</button></div>'; $('.msg .ok').onclick = () => { clearInterval(ringing); $('.msg').innerHTML = ''; document.title = pageTitle; }; try { if (Notification.permission === 'granted') new Notification('⏰ Time is up!', { body: title }); } catch (e) { } };
    $('.go').onclick = () => {
      if (run) { stop(); return; }
      clearInterval(ringing); $('.msg').innerHTML = '';
      if (left <= 0 || left === total) { total = dur(); left = total; }
      if (!(total > 0)) return UI.toast('Set a time first');
      try { if (window.Notification && Notification.permission === 'default') Notification.requestPermission(); } catch (e) { }
      UI.beep(660, 0.05, 0.05); end = Date.now() + left * 1000; run = true; $('.go').textContent = '⏸ Pause';
      iv = setInterval(() => { left = Math.max(0, (end - Date.now()) / 1000); paint(); if (left <= 0) ring(); }, 200);
    };
    $('.rst').onclick = () => { stop(); clearInterval(ringing); $('.msg').innerHTML = ''; total = dur(); left = total; paint(); };
    $('.fs').onclick = () => { const el = root.closest('.tool-app') || root; document.fullscreenElement ? document.exitFullscreen() : el.requestFullscreen && el.requestFullscreen(); };
    root.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { const m = +b.dataset.m; $('.h').value = Math.floor(m / 60); $('.m').value = m % 60; $('.s').value = 0; stop(); total = left = m * 60; paint(); $('.go').click(); });
    root.addEventListener('input', e => { if (!run && e.target.matches('.h,.m,.s')) { total = left = dur(); paint(); } });
    paint();
  }
  Tools.define('countdown-timer', root => timerUI(root, { presets: [1, 3, 5, 10, 15, 20, 30, 45, 60], title: 'Countdown Timer' }));

  Tools.define('pomodoro-timer', root => {
    const cfg = UI.store.get('pomo', { work: 25, short: 5, long: 15, every: 4, auto: true });
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="phase"></div><div class="big-num disp">25:00</div><div class="progress w-100" style="max-width:520px"><div class="bar"></div></div>
      <div class="btn-row" style="justify-content:center"><button class="btn lg go">▶ Start</button><button class="btn lg ghost skip">⏭ Skip</button><button class="btn lg ghost rst">↺ Reset</button></div><div class="small muted cnt"></div>
      <details class="card-sub w-100" style="max-width:620px"><summary style="cursor:pointer;font-weight:600">⚙️ Settings</summary><div class="row mt opts"></div></details></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'work', label: 'Focus', type: 'number', value: cfg.work, unit: 'min' }, { id: 'short', label: 'Short break', type: 'number', value: cfg.short, unit: 'min' }, { id: 'long', label: 'Long break', type: 'number', value: cfg.long, unit: 'min' }, { id: 'every', label: 'Long break every', type: 'number', value: cfg.every, unit: 'focus' }, { id: 'auto', label: 'Auto-start next session', type: 'checkbox', value: cfg.auto }], v => { UI.store.set('pomo', v); if (!run) setPhase(phase); });
    let phase = 'work', done = 0, left, total, end, run = false, iv; const pageTitle = document.title;
    const LABEL = { work: ['🍅 Focus time', 'var(--danger)'], short: ['☕ Short break', 'var(--success)'], long: ['🌴 Long break', 'var(--primary)'] };
    const setPhase = p => { phase = p; const o = form.get(); total = left = (o[p] || 1) * 60; $('.phase').innerHTML = `<span class="badge" style="font-size:1rem;padding:6px 14px;color:${LABEL[p][1]}">${LABEL[p][0]}</span>`; paint(); };
    const paint = () => { $('.disp').textContent = UI.fmtTime(Math.ceil(left)); $('.bar').style.width = (100 - left / total * 100) + '%'; $('.cnt').textContent = `Completed focus sessions: ${done}`; document.title = run ? `${UI.fmtTime(Math.ceil(left))} ${phase === 'work' ? '🍅' : '☕'} Pomodoro` : pageTitle; };
    const stop = () => { run = false; clearInterval(iv); $('.go').textContent = '▶ Start'; paint(); };
    const start = () => { end = Date.now() + left * 1000; run = true; $('.go').textContent = '⏸ Pause'; iv = setInterval(() => { left = Math.max(0, (end - Date.now()) / 1000); paint(); if (left <= 0) next(true); }, 250); };
    const next = (rang) => {
      stop(); if (rang) UI.alarm(4);
      if (phase === 'work') { done++; setPhase(done % (form.get().every || 4) === 0 ? 'long' : 'short'); } else setPhase('work');
      try { if (rang && Notification.permission === 'granted') new Notification(phase === 'work' ? 'Break is over — time to focus!' : 'Great work! Take a break.'); } catch (e) { }
      if (rang && form.get().auto) start();
    };
    $('.go').onclick = () => { if (run) stop(); else { try { if (window.Notification && Notification.permission === 'default') Notification.requestPermission(); } catch (e) { } start(); } };
    $('.skip').onclick = () => next(false);
    $('.rst').onclick = () => { stop(); done = 0; setPhase('work'); };
    setPhase('work');
  });

  const ZONES = (() => { try { return Intl.supportedValuesOf('timeZone'); } catch (e) { return ['UTC', 'Asia/Karachi', 'Asia/Kolkata', 'Asia/Dubai', 'Asia/Riyadh', 'Europe/London', 'Europe/Paris', 'America/New_York', 'America/Chicago', 'America/Los_Angeles', 'Asia/Tokyo', 'Asia/Shanghai', 'Australia/Sydney']; } })();
  const tzOffset = (t, tz) => { const p = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).formatToParts(t).map(x => [x.type, x.value])); return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second) - Math.floor(t / 1000) * 1000; };
  const wallToUtc = (y, mo, d, h, mi, tz) => { const guess = Date.UTC(y, mo, d, h, mi); let t = guess - tzOffset(guess, tz); t = guess - tzOffset(t, tz); return t; };
  Tools.define('time-zone-converter', root => {
    const local = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    let targets = UI.store.get('tz-list', ['UTC', 'Asia/Karachi', 'Asia/Kolkata', 'Asia/Dubai', 'Asia/Riyadh', 'Europe/London', 'America/New_York', 'America/Los_Angeles', 'Asia/Tokyo', 'Australia/Sydney']);
    const now = new Date();
    root.innerHTML = `<div class="stack"><div class="row"><div class="field"><label>Date</label><input class="input d" type="date" value="${iso(now)}"></div><div class="field"><label>Time</label><input class="input t" type="time" value="${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}"></div>
      <div class="field grow"><label>In time zone</label><select class="select src">${ZONES.map(z => `<option ${z === local ? 'selected' : ''}>${z}</option>`).join('')}</select></div><div class="field" style="flex:0 0 auto"><label>&nbsp;</label><button class="btn ghost nowb">Now</button></div></div>
      <div class="list stack"></div><div class="row"><div class="field grow"><label>Add a city / time zone</label><select class="select add"><option value="">Choose…</option>${ZONES.map(z => `<option>${z}</option>`).join('')}</select></div></div></div>`;
    const $ = UI.q(root);
    const draw = () => {
      const [y, mo, d] = $('.d').value.split('-').map(Number), [h, mi] = $('.t').value.split(':').map(Number);
      if (!y || isNaN(h)) return;
      const t = wallToUtc(y, mo - 1, d, h, mi, $('.src').value);
      $('.list').innerHTML = targets.map((z, i) => {
        const off = tzOffset(t, z) / 6e4, sign = off < 0 ? '−' : '+', a = Math.abs(off);
        const time = new Date(t).toLocaleTimeString('en', { timeZone: z, hour: 'numeric', minute: '2-digit' }), date = new Date(t).toLocaleDateString('en', { timeZone: z, weekday: 'short', day: 'numeric', month: 'short' });
        const hr = +new Date(t).toLocaleString('en-US', { timeZone: z, hour: 'numeric', hourCycle: 'h23' });
        return `<div class="file-item"><div class="thumb">${hr >= 6 && hr < 18 ? '☀️' : '🌙'}</div><div class="meta"><div class="name">${esc(z.split('/').pop().replace(/_/g, ' '))} <span class="muted small">${esc(z)}</span></div><div class="sub">UTC${sign}${Math.floor(a / 60)}${a % 60 ? ':' + String(a % 60).padStart(2, '0') : ''} · ${date}</div></div><strong style="font-size:1.3rem">${time}</strong><button class="btn sm ghost" data-rm="${i}" title="Remove">✕</button></div>`;
      }).join('');
      UI.store.set('tz-list', targets);
    };
    root.addEventListener('input', draw); root.addEventListener('change', e => { if (e.target.classList.contains('add') && e.target.value) { targets.push(e.target.value); e.target.value = ''; } draw(); });
    root.addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (b) { targets.splice(+b.dataset.rm, 1); draw(); } });
    $('.nowb').onclick = () => { const n = new Date(); $('.d').value = iso(n); $('.t').value = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`; $('.src').value = local; draw(); };
    draw();
  });
  Tools._wallToUtc = wallToUtc;

  const SOUNDS = { classic: () => UI.alarm(3), beep: () => [0, 300, 600].forEach(t => setTimeout(() => UI.beep(1000, 0.15, 0.4), t)), bell: () => [0, 500].forEach(t => setTimeout(() => UI.beep(523, 0.8, 0.4, 'triangle'), t)), digital: () => [0, 150, 300, 450].forEach(t => setTimeout(() => UI.beep(2000, 0.08, 0.3, 'square'), t)) };
  Tools.define('alarm-clock', root => {
    let alarms = UI.store.get('alarms', []);
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="big-num clock"></div><div class="small muted date"></div>
      <div class="row card-sub w-100" style="max-width:640px;align-items:flex-end"><div class="field small"><label>Alarm time</label><input class="input at" type="time" value="07:00"></div><div class="field"><label>Label</label><input class="input lb" placeholder="Wake up"></div><div class="field small"><label>Sound</label><select class="select snd"><option value="classic">Classic</option><option value="beep">Beep</option><option value="bell">Bell</option><option value="digital">Digital</option></select></div><button class="btn add" style="flex:0 0 auto">+ Set alarm</button></div>
      <div class="list stack w-100" style="max-width:640px"></div><div class="ring w-100" style="max-width:640px"></div>
      <p class="small muted">Keep this tab open and your device awake — the alarm rings in your browser. Turn your volume up.</p></div>`;
    const $ = UI.q(root);
    let ringT = null; const pageTitle = document.title;
    const save = () => UI.store.set('alarms', alarms);
    const draw = () => { $('.list').innerHTML = alarms.map((a, i) => `<div class="file-item"><div class="thumb">⏰</div><div class="meta"><div class="name">${new Date(2000, 0, 1, ...a.t.split(':').map(Number)).toLocaleTimeString('en', { hour: 'numeric', minute: '2-digit' })}</div><div class="sub">${esc(a.label || 'Alarm')} · ${a.snd}</div></div><label class="check"><input type="checkbox" data-on="${i}" ${a.on ? 'checked' : ''}> On</label><button class="btn sm ghost" data-rm="${i}">✕</button></div>`).join('') || '<p class="muted small text-center">No alarms set.</p>'; };
    const stopRing = () => { clearInterval(ringT); ringT = null; $('.ring').innerHTML = ''; document.title = pageTitle; };
    const ring = a => {
      if (ringT) return; SOUNDS[a.snd](); ringT = setInterval(() => SOUNDS[a.snd](), 2200); document.title = '⏰ ' + (a.label || 'Alarm');
      $('.ring').innerHTML = `<div class="notice success" style="font-size:1.2rem;text-align:center">⏰ <strong>${esc(a.label || 'Alarm')}</strong><div class="btn-row mt" style="justify-content:center"><button class="btn danger stop">Stop</button><button class="btn secondary snz">Snooze 5 min</button></div></div>`;
      $('.ring .stop').onclick = stopRing;
      $('.ring .snz').onclick = () => { stopRing(); const d = new Date(Date.now() + 5 * 6e4); alarms.push({ t: `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`, label: (a.label || 'Alarm') + ' (snooze)', snd: a.snd, on: true, once: true }); save(); draw(); };
      try { if (Notification.permission === 'granted') new Notification('⏰ ' + (a.label || 'Alarm')); } catch (e) { }
    };
    let lastMin = '';
    const tick = () => {
      if (!root.isConnected) return clearInterval(iv);
      const n = new Date(); $('.clock').textContent = n.toLocaleTimeString('en', { hour: 'numeric', minute: '2-digit', second: '2-digit' }); $('.date').textContent = long(n);
      const cur = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`;
      if (cur !== lastMin) { lastMin = cur; alarms.forEach(a => { if (a.on && a.t === cur) { ring(a); if (a.once) a.on = false; } }); alarms = alarms.filter(a => !(a.once && !a.on)); save(); draw(); }
    };
    const iv = setInterval(tick, 500);
    $('.add').onclick = () => { alarms.push({ t: $('.at').value, label: $('.lb').value.trim(), snd: $('.snd').value, on: true }); save(); draw(); SOUNDS[$('.snd').value](); UI.toast('Alarm set for ' + $('.at').value); try { if (window.Notification && Notification.permission === 'default') Notification.requestPermission(); } catch (e) { } };
    root.addEventListener('change', e => { const i = e.target.dataset.on; if (i != null) { alarms[+i].on = e.target.checked; save(); } });
    root.addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (b) { alarms.splice(+b.dataset.rm, 1); save(); draw(); } });
    draw(); tick();
  });
})();

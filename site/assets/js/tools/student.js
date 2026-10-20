(function () {
  const { esc } = UI;

  const SCALES = {
    '4': { max: 4, label: '4.0 scale (HEC Pakistan / USA)', grades: [['A+', 4], ['A', 4], ['A-', 3.67], ['B+', 3.33], ['B', 3], ['B-', 2.67], ['C+', 2.33], ['C', 2], ['C-', 1.67], ['D+', 1.33], ['D', 1], ['F', 0]] },
    '5': { max: 5, label: '5.0 scale', grades: [['A', 5], ['B', 4], ['C', 3], ['D', 2], ['E', 1], ['F', 0]] },
    '10': { max: 10, label: '10-point scale (India)', grades: [['O', 10], ['A+', 9], ['A', 8], ['B+', 7], ['B', 6], ['C', 5], ['P', 4], ['F', 0]] },
  };
  const scaleSelect = (v = '4') => `<select class="select scale">${Object.entries(SCALES).map(([k, s]) => `<option value="${k}" ${k === v ? 'selected' : ''}>${s.label}</option>`).join('')}</select>`;
  const toPct = (g, scale) => scale === '10' ? g * 9.5 : g / SCALES[scale].max * 100;
  const letterFor = (g, scale) => { const s = SCALES[scale].grades; return (s.find(([, p]) => g >= p - 0.005) || s[s.length - 1])[0]; };

  Tools.define('cgpa-calculator', root => {
    const saved = UI.store.get('cgpa', null);
    const st = saved || { scale: '4', mode: 'sem', prev: false, prevCgpa: '', prevCr: '', sems: [{ gpa: '3.4', cr: '18' }, { gpa: '3.6', cr: '17' }, { gpa: '', cr: '' }], csems: [{ courses: [{ n: '', g: 'A', cr: 3 }, { n: '', g: 'B+', cr: 3 }, { n: '', g: 'A-', cr: 4 }] }] };
    root.innerHTML = `<div class="stack"><div class="row"><div class="field"><label>Grading scale</label>${scaleSelect(st.scale)}</div><div class="field"><label>Calculate from</label><div class="modeseg"></div></div></div>
      <label class="check"><input type="checkbox" class="prev" ${st.prev ? 'checked' : ''}> I have a previous CGPA to include</label>
      <div class="row prevrow" ${st.prev ? '' : 'hidden'}><div class="field"><label>Previous CGPA</label><input class="input pc" type="number" step="0.01" value="${esc(st.prevCgpa)}"></div><div class="field"><label>Credits completed</label><input class="input pcr" type="number" value="${esc(st.prevCr)}"></div></div>
      <div class="body stack"></div><div class="out"></div><div class="btn-row"><button class="btn ghost reset">Reset</button></div></div>`;
    const $ = UI.q(root);
    $('.modeseg').append(UI.seg([['sem', 'Semester GPAs'], ['course', 'Course grades']], st.mode, m => { st.mode = m; draw(); }));
    const save = () => UI.store.set('cgpa', st);
    const draw = () => {
      const b = $('.body'), sc = SCALES[st.scale];
      if (st.mode === 'sem') {
        b.innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>Semester</th><th>GPA / SGPA (out of ${sc.max})</th><th>Credit hours</th><th></th></tr></thead><tbody>${st.sems.map((s, i) => `<tr><td>Semester ${i + 1}</td><td><input class="input" data-i="${i}" data-k="gpa" type="number" step="0.01" min="0" max="${sc.max}" value="${esc(s.gpa)}"></td><td><input class="input" data-i="${i}" data-k="cr" type="number" min="0" value="${esc(s.cr)}"></td><td><button class="btn sm ghost" data-rm="${i}">✕</button></td></tr>`).join('')}</tbody></table></div><div><button class="btn secondary add">+ Add semester</button></div>`;
      } else {
        b.innerHTML = st.csems.map((s, si) => `<div class="card-sub stack"><div class="row" style="justify-content:space-between;align-items:center"><strong>Semester ${si + 1}</strong><span class="badge sg" data-s="${si}"></span></div>
          ${s.courses.map((c, ci) => `<div class="row" style="flex-wrap:nowrap"><input class="input" placeholder="Course (optional)" data-s="${si}" data-c="${ci}" data-k="n" value="${esc(c.n)}" style="flex:2"><select class="select" data-s="${si}" data-c="${ci}" data-k="g" style="flex:1">${sc.grades.map(([g, p]) => `<option value="${g}" ${g === c.g ? 'selected' : ''}>${g} (${p})</option>`).join('')}</select><input class="input" type="number" min="0" data-s="${si}" data-c="${ci}" data-k="cr" value="${esc(c.cr)}" style="flex:0 0 80px" title="Credit hours"><button class="btn sm ghost" data-rmc="${si}:${ci}">✕</button></div>`).join('')}
          <div class="btn-row"><button class="btn sm secondary" data-addc="${si}">+ Add course</button>${st.csems.length > 1 ? `<button class="btn sm ghost" data-rms="${si}">Remove semester</button>` : ''}</div></div>`).join('') + '<div><button class="btn secondary adds">+ Add semester</button></div>';
      }
      calc();
    };
    const calc = () => {
      const sc = SCALES[st.scale]; let pts = 0, cr = 0;
      if (st.prev) { const g = UI.num(st.prevCgpa), c = UI.num(st.prevCr); if (g >= 0 && c > 0) { pts += g * c; cr += c; } }
      const rows = [];
      if (st.mode === 'sem') st.sems.forEach((s, i) => { const g = UI.num(s.gpa), c = UI.num(s.cr); if (g >= 0 && g <= sc.max && c > 0) { pts += g * c; cr += c; rows.push([`Semester ${i + 1}`, g]); } });
      else st.csems.forEach((s, si) => {
        let sp = 0, scr = 0;
        s.courses.forEach(c => { const p = (sc.grades.find(([g]) => g === c.g) || [0, 0])[1], k = UI.num(c.cr); if (k > 0) { sp += p * k; scr += k; } });
        const el = root.querySelector(`.sg[data-s="${si}"]`); if (el) el.textContent = scr ? `SGPA ${(sp / scr).toFixed(2)} · ${scr} cr` : '';
        pts += sp; cr += scr; if (scr) rows.push([`Semester ${si + 1}`, sp / scr]);
      });
      if (!cr) { $('.out').innerHTML = '<div class="notice">Enter your grades and credit hours to see your CGPA.</div>'; return; }
      const g = pts / cr;
      $('.out').innerHTML = UI.resultsHTML([{ k: 'Your CGPA', v: g.toFixed(2) + ` <small style="font-size:1rem;opacity:.8">/ ${sc.max}</small>`, main: true, s: `Equivalent grade: ${letterFor(g, st.scale)}` }, { k: 'Total credits', v: UI.fmt(cr) }, { k: 'Quality points', v: UI.fmt(pts, 2) }, { k: 'Approx. percentage', v: toPct(g, st.scale).toFixed(1) + '%', s: st.scale === '10' ? 'CGPA × 9.5' : `CGPA ÷ ${sc.max} × 100` }])
        + (rows.length > 1 ? `<div class="stack mt" style="gap:6px">${rows.map(([n, v]) => `<div class="bar-row"><span style="width:90px">${n}</span><div class="bar"><i style="width:${v / sc.max * 100}%"></i></div><strong>${v.toFixed(2)}</strong></div>`).join('')}</div>` : '')
        + '<p class="small muted mt">Percentage conversion rules differ between universities — check your institution\'s official formula.</p>';
      save();
    };
    root.addEventListener('input', e => {
      const t = e.target;
      if (t.dataset.k && t.dataset.i != null) st.sems[+t.dataset.i][t.dataset.k] = t.value;
      else if (t.dataset.k && t.dataset.s != null) st.csems[+t.dataset.s].courses[+t.dataset.c][t.dataset.k] = t.value;
      else if (t.classList.contains('pc')) st.prevCgpa = t.value; else if (t.classList.contains('pcr')) st.prevCr = t.value;
      calc();
    });
    root.addEventListener('change', e => {
      const t = e.target;
      if (t.classList.contains('scale')) { st.scale = t.value; const gs = SCALES[st.scale].grades; st.csems.forEach(s => s.courses.forEach(c => { if (!gs.some(([g]) => g === c.g)) c.g = gs[0][0]; })); draw(); }
      if (t.classList.contains('prev')) { st.prev = t.checked; $('.prevrow').hidden = !t.checked; calc(); }
      if (t.dataset.k === 'g') { st.csems[+t.dataset.s].courses[+t.dataset.c].g = t.value; calc(); }
    });
    root.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      if (t.classList.contains('add')) st.sems.push({ gpa: '', cr: '' });
      else if (t.dataset.rm != null) { st.sems.splice(+t.dataset.rm, 1); if (!st.sems.length) st.sems.push({ gpa: '', cr: '' }); }
      else if (t.classList.contains('adds')) st.csems.push({ courses: [{ n: '', g: SCALES[st.scale].grades[0][0], cr: 3 }] });
      else if (t.dataset.addc != null) st.csems[+t.dataset.addc].courses.push({ n: '', g: SCALES[st.scale].grades[0][0], cr: 3 });
      else if (t.dataset.rmc) { const [s, c] = t.dataset.rmc.split(':').map(Number); st.csems[s].courses.splice(c, 1); if (!st.csems[s].courses.length) st.csems.splice(s, 1); if (!st.csems.length) st.csems.push({ courses: [{ n: '', g: 'A', cr: 3 }] }); }
      else if (t.dataset.rms != null) st.csems.splice(+t.dataset.rms, 1);
      else if (t.classList.contains('reset')) { UI.store.set('cgpa', null); Tools.mount('cgpa-calculator', root); return; }
      else return;
      draw();
    });
    draw();
  });

  Tools.define('gpa-calculator', root => {
    const st = UI.store.get('gpa', null) || { scale: '4', courses: [{ n: 'Mathematics', g: 'A', cr: 3 }, { n: 'Physics', g: 'B+', cr: 4 }, { n: 'English', g: 'A-', cr: 3 }, { n: '', g: 'B', cr: 3 }], prevCgpa: '', prevCr: '' };
    root.innerHTML = `<div class="stack"><div class="row"><div class="field"><label>Grading scale</label>${scaleSelect(st.scale)}</div></div><div class="list stack"></div>
      <div class="btn-row"><button class="btn secondary add">+ Add course</button><button class="btn ghost reset">Reset</button></div>
      <details class="card-sub"><summary style="cursor:pointer;font-weight:600">Also calculate my new cumulative GPA (optional)</summary><div class="row mt"><div class="field"><label>Current CGPA</label><input class="input pc" type="number" step="0.01" value="${esc(st.prevCgpa)}"></div><div class="field"><label>Credits completed so far</label><input class="input pcr" type="number" value="${esc(st.prevCr)}"></div></div></details>
      <div class="out"></div></div>`;
    const $ = UI.q(root);
    const draw = () => {
      const gs = SCALES[st.scale].grades;
      $('.list').innerHTML = `<div class="row small muted" style="flex-wrap:nowrap"><span style="flex:2">Course</span><span style="flex:1">Grade</span><span style="flex:0 0 80px">Credits</span><span style="width:46px"></span></div>` + st.courses.map((c, i) => `<div class="row" style="flex-wrap:nowrap"><input class="input" placeholder="Course ${i + 1}" data-i="${i}" data-k="n" value="${esc(c.n)}" style="flex:2"><select class="select" data-i="${i}" data-k="g" style="flex:1">${gs.map(([g, p]) => `<option value="${g}" ${g === c.g ? 'selected' : ''}>${g} (${p})</option>`).join('')}</select><input class="input" type="number" min="0" data-i="${i}" data-k="cr" value="${esc(c.cr)}" style="flex:0 0 80px"><button class="btn sm ghost" data-rm="${i}">✕</button></div>`).join('');
      calc();
    };
    const calc = () => {
      const sc = SCALES[st.scale]; let p = 0, cr = 0;
      st.courses.forEach(c => { const k = UI.num(c.cr), gp = (sc.grades.find(([g]) => g === c.g) || [0, 0])[1]; if (k > 0) { p += gp * k; cr += k; } });
      UI.store.set('gpa', st);
      if (!cr) { $('.out').innerHTML = '<div class="notice">Add at least one course with credit hours.</div>'; return; }
      const g = p / cr, pc = UI.num(st.prevCgpa), pcr = UI.num(st.prevCr);
      const cum = pc >= 0 && pcr > 0 ? (pc * pcr + p) / (pcr + cr) : null;
      $('.out').innerHTML = UI.resultsHTML([{ k: 'Semester GPA', v: g.toFixed(2) + ` <small style="font-size:1rem;opacity:.8">/ ${sc.max}</small>`, main: true, s: `Grade ${letterFor(g, st.scale)} · ${toPct(g, st.scale).toFixed(1)}%` }, { k: 'Credits', v: cr }, { k: 'Grade points', v: UI.fmt(p, 2) }, cum != null && { k: 'New cumulative GPA', v: cum.toFixed(2), s: `${pcr + cr} total credits` }]);
    };
    root.addEventListener('input', e => { const t = e.target; if (t.dataset.k) st.courses[+t.dataset.i][t.dataset.k] = t.value; if (t.classList.contains('pc')) st.prevCgpa = t.value; if (t.classList.contains('pcr')) st.prevCr = t.value; calc(); });
    root.addEventListener('change', e => { const t = e.target; if (t.classList.contains('scale')) { st.scale = t.value; const gs = SCALES[st.scale].grades; st.courses.forEach(c => { if (!gs.some(([g]) => g === c.g)) c.g = gs[0][0]; }); draw(); } else if (t.dataset.k === 'g') { st.courses[+t.dataset.i].g = t.value; calc(); } });
    root.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      if (t.classList.contains('add')) st.courses.push({ n: '', g: SCALES[st.scale].grades[0][0], cr: 3 });
      else if (t.dataset.rm != null) st.courses.splice(+t.dataset.rm, 1);
      else if (t.classList.contains('reset')) { UI.store.set('gpa', null); Tools.mount('gpa-calculator', root); return; } else return;
      draw();
    });
    draw();
  });

  Tools.define('grade-calculator', root => {
    const rows = [{ n: 'Assignments', s: 88, w: 20 }, { n: 'Quizzes', s: 76, w: 15 }, { n: 'Midterm', s: 81, w: 25 }];
    root.innerHTML = `<div class="stack"><div class="list stack"></div><div><button class="btn secondary add">+ Add assessment</button></div>
      <div class="card-sub"><strong>What do I need on the final?</strong><div class="row mt"><div class="field"><label>Final exam weight</label><div class="input-wrap"><input class="input fw" type="number" value="40"><span class="unit">%</span></div></div><div class="field"><label>Target overall grade</label><div class="input-wrap"><input class="input tg" type="number" value="80"><span class="unit">%</span></div></div></div></div><div class="out"></div></div>`;
    const $ = UI.q(root);
    const letter = p => p >= 93 ? 'A' : p >= 90 ? 'A-' : p >= 87 ? 'B+' : p >= 83 ? 'B' : p >= 80 ? 'B-' : p >= 77 ? 'C+' : p >= 73 ? 'C' : p >= 70 ? 'C-' : p >= 67 ? 'D+' : p >= 60 ? 'D' : 'F';
    const draw = () => { $('.list').innerHTML = `<div class="row small muted" style="flex-wrap:nowrap"><span style="flex:2">Assessment</span><span style="flex:1">Score %</span><span style="flex:1">Weight %</span><span style="width:46px"></span></div>` + rows.map((r, i) => `<div class="row" style="flex-wrap:nowrap"><input class="input" data-i="${i}" data-k="n" value="${esc(r.n)}" style="flex:2"><input class="input" type="number" data-i="${i}" data-k="s" value="${r.s}" style="flex:1"><input class="input" type="number" data-i="${i}" data-k="w" value="${r.w}" style="flex:1"><button class="btn sm ghost" data-rm="${i}">✕</button></div>`).join(''); calc(); };
    const calc = () => {
      let sw = 0, ss = 0; rows.forEach(r => { const s = UI.num(r.s), w = UI.num(r.w); if (s >= 0 && w > 0) { sw += w; ss += s * w; } });
      if (!sw) { $('.out').innerHTML = '<div class="notice">Enter scores and weights.</div>'; return; }
      const cur = ss / sw, fw = UI.num($('.fw').value), tg = UI.num($('.tg').value);
      let need = null, msg = '';
      if (fw > 0 && tg >= 0) { need = (tg * (sw + fw) - cur * sw) / fw; msg = need > 100 ? 'Unfortunately this target is not reachable even with 100% on the final.' : need <= 0 ? 'You have already secured this target!' : ''; }
      $('.out').innerHTML = UI.resultsHTML([{ k: 'Current weighted grade', v: cur.toFixed(2) + '%', main: true, s: `Letter grade: ${letter(cur)} · weights entered: ${sw}%` }, need != null && { k: `Needed on final for ${tg}%`, v: Math.max(0, need).toFixed(1) + '%', s: msg }]);
    };
    root.addEventListener('input', e => { const t = e.target; if (t.dataset.k) rows[+t.dataset.i][t.dataset.k] = t.value; calc(); });
    root.addEventListener('click', e => { const t = e.target.closest('button'); if (!t) return; if (t.classList.contains('add')) rows.push({ n: 'Assessment ' + (rows.length + 1), s: '', w: '' }); else if (t.dataset.rm != null) rows.splice(+t.dataset.rm, 1); else return; draw(); });
    draw();
  });

  Tools.define('cgpa-to-percentage', root => {
    UI.calc(root, {
      fields: [
        { id: 'dir', label: 'Convert', type: 'seg', value: 'c2p', options: [['c2p', 'CGPA → Percentage'], ['p2c', 'Percentage → CGPA']], full: true },
        { id: 'scale', label: 'Scale', type: 'select', value: '4', options: [['4', '4.0 scale'], ['5', '5.0 scale'], ['10', '10-point scale']] },
        { id: 'formula', label: 'Formula (10-point)', type: 'select', value: '9.5', options: [['9.5', 'CGPA × 9.5 (CBSE / most Indian universities)'], ['10', 'CGPA × 10'], ['vtu', '(CGPA − 0.75) × 10 (VTU)']], show: v => v.scale === '10' },
        { id: 'val', label: 'Your CGPA or percentage', type: 'number', value: 3.5 },
      ],
      compute(v) {
        if (!(v.val >= 0)) return null;
        const max = +v.scale;
        const c2p = g => v.scale === '10' ? (v.formula === 'vtu' ? (g - 0.75) * 10 : g * +v.formula) : g / max * 100;
        const p2c = p => v.scale === '10' ? (v.formula === 'vtu' ? p / 10 + 0.75 : p / +v.formula) : p / 100 * max;
        if (v.dir === 'c2p') { if (v.val > max) return `<div class="notice error">CGPA cannot be more than ${max} on this scale.</div>`; return { results: [{ k: 'Percentage', v: Math.max(0, c2p(v.val)).toFixed(2) + '%', main: true, s: `${v.val} out of ${max}` }], note: 'Universities may use their own official conversion — use this as an estimate.' }; }
        if (v.val > 100) return '<div class="notice error">Percentage cannot exceed 100.</div>';
        return { results: [{ k: 'CGPA', v: Math.min(max, p2c(v.val)).toFixed(2) + ` / ${max}`, main: true, s: `from ${v.val}%` }] };
      },
    });
  });

  Tools.define('attendance-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'held', label: 'Classes held so far', type: 'number', value: 60, min: 0 },
        { id: 'att', label: 'Classes attended', type: 'number', value: 42, min: 0 },
        { id: 'req', label: 'Required attendance', type: 'number', value: 75, unit: '%' },
      ],
      compute(v) {
        if (!(v.held > 0) || !(v.att >= 0)) return null;
        if (v.att > v.held) return '<div class="notice error">Attended classes cannot be more than classes held.</div>';
        const r = v.req / 100, cur = v.att / v.held * 100;
        let s;
        if (cur >= v.req) { const k = Math.floor(v.att * 100 / v.req - v.held + 1e-9); s = { k: 'You can miss', v: `${Math.max(0, k)} class${k === 1 ? '' : 'es'}`, s: `and still stay at or above ${v.req}%` }; }
        else { const y = r >= 1 ? Infinity : Math.ceil((v.req * v.held - 100 * v.att) / (100 - v.req) - 1e-9); s = { k: 'You must attend', v: isFinite(y) ? `${y} more class${y === 1 ? '' : 'es'}` : 'All classes', s: `in a row to reach ${v.req}%` }; }
        return { results: [{ k: 'Current attendance', v: cur.toFixed(2) + '%', main: true, s: cur >= v.req ? '✅ Above the requirement' : '⚠️ Below the requirement' }, s, { k: 'Classes missed', v: v.held - v.att }] };
      },
    });
  });

  const STOP = new Set(('a about above after again against all also am an and any are as at be because been before being below between both but by can could did do does doing down during each few for from further had has have having he her here hers him his how i if in into is it its itself just me more most my no nor not of off on once only or other our ours out over own same she should so some such than that the their them then there these they this those through to too under until up very was we were what when where which while who whom why will with would you your yours etc e.g i.e via per within across including include includes among upon '
    + 'experience experienced work working job role position candidate candidates company team teams ability able strong excellent good great skills skill knowledge years year required requirements preferred plus responsibilities responsible duties looking join opportunity apply applicants benefits salary equal employer environment based new well using use used must may also day days time make ensure provide support help within least minimum ideal ideally including other related relevant various multiple across key level levels highly proven demonstrated understanding familiarity familiar hiring hire seeking want wants like great passionate').split(/\s+/));
  const VERBS = 'achieved accelerated administered analyzed architected automated boosted built coached collaborated completed conducted consolidated coordinated created cut decreased delivered designed developed directed doubled drove earned eliminated enabled engineered enhanced established exceeded executed expanded facilitated founded generated grew guided headed implemented improved increased initiated innovated installed integrated introduced launched led managed maximized mentored migrated minimized modernized negotiated optimized orchestrated organized oversaw owned partnered pioneered planned prepared presented produced programmed published raised redesigned reduced refactored resolved restructured revamped saved scaled secured shipped simplified solved spearheaded streamlined strengthened supervised tested trained transformed tripled upgraded won wrote'.split(' ');
  const CLICHES = ['hard worker', 'hard-working', 'team player', 'detail-oriented', 'detail oriented', 'go-getter', 'think outside the box', 'results-driven', 'results driven', 'self-starter', 'self starter', 'dynamic', 'synergy', 'go-to person', 'best of breed', 'proactive', 'motivated individual', 'passionate', 'perfectionist'];
  const SECTIONS = [['Contact information', null], ['Summary / Profile', /\b(summary|profile|objective|about me|professional summary|career objective)\b/i], ['Work experience', /\b(experience|employment|work history|professional background|internships?)\b/i], ['Education', /\b(education|academic|qualifications?|degree)\b/i], ['Skills', /\b(skills|technical skills|competencies|technologies|tools|expertise)\b/i]];
  const OPTIONAL = [['Projects', /\bprojects?\b/i], ['Certifications', /\b(certifications?|certificates?|licen[cs]es?|courses)\b/i], ['Achievements / Awards', /\b(achievements?|awards?|honou?rs|accomplishments)\b/i]];

  function extractKeywords(jd) {
    const words = jd.toLowerCase().replace(/[“”"()[\]{}|•·;:!?]/g, ' ').split(/[\s,]+/).map(w => w.replace(/^[.\-/]+|[.\-/]+$/g, '')).filter(Boolean);
    const ok = w => w.length > 1 && !STOP.has(w) && !/^\d+[%+k]?$/.test(w) && /[a-z]/.test(w);
    const uni = {}, bi = {};
    words.forEach((w, i) => { if (ok(w)) { uni[w] = (uni[w] || 0) + 1; const n = words[i + 1]; if (n && ok(n)) bi[w + ' ' + n] = (bi[w + ' ' + n] || 0) + 1; } });
    const out = Object.entries(bi).filter(([, c]) => c >= 2).map(([k, c]) => [k, c * 2.2]);
    const inBi = new Set(out.flatMap(([k]) => k.split(' ')));
    Object.entries(uni).forEach(([k, c]) => { if (!inBi.has(k) || c >= 3) out.push([k, c + (/[+#.]/.test(k) ? 1 : 0)]); });
    const keys = out.sort((a, b) => b[1] - a[1]).map(x => x[0]);
    return keys.filter(k => !(k.endsWith('s') && keys.includes(k.slice(0, -1)))).slice(0, 30);
  }
  const has = (text, kw) => new RegExp('(^|[^a-z0-9+#])' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/s$/, 's?') + '($|[^a-z0-9+#])', 'i').test(text);

  async function readResume(file) {
    if (/\.pdf$/i.test(file.name) || file.type === 'application/pdf') {
      const pdf = await UI.openPdf(file); let t = '';
      for (let i = 1; i <= pdf.numPages; i++) { const tc = await (await pdf.getPage(i)).getTextContent(); tc.items.forEach(it => { t += it.str + (it.hasEOL ? '\n' : ' '); }); t += '\n'; }
      return { text: t, pages: pdf.numPages, type: 'PDF' };
    }
    if (/\.docx$/i.test(file.name)) { const m = await UI.lib('mammoth'); const r = await m.extractRawText({ arrayBuffer: await file.arrayBuffer() }); return { text: r.value, type: 'DOCX' }; }
    if (/\.doc$/i.test(file.name)) throw new Error('Old .doc files are not supported. Save your resume as .docx or PDF.');
    return { text: await UI.readFile(file), type: 'TXT' };
  }

  function analyzeResume(text, jd, meta = {}) {
    const lower = text.toLowerCase(), words = (text.match(/[A-Za-z][A-Za-z'+#.-]*/g) || []).length;
    const checks = [], score = {};
    const email = /[\w.+-]+@[\w-]+\.[\w.]+/.test(text), phone = /(\+?\d[\d\s().-]{7,}\d)/.test(text), linkedin = /linkedin\.com\/in\//i.test(text), web = /(github\.com|gitlab\.com|behance\.net|dribbble\.com|portfolio|https?:\/\/)/i.test(text);
    score.contact = (email ? 4 : 0) + (phone ? 4 : 0) + (linkedin || web ? 2 : 0);
    checks.push([email, 'Email address found', 'Add a professional email address at the top.']);
    checks.push([phone, 'Phone number found', 'Add a phone number so recruiters can call you.']);
    checks.push([linkedin, 'LinkedIn profile link found', 'Add your LinkedIn URL (linkedin.com/in/yourname).']);
    const lines = text.split(/\n/).map(l => l.trim()).filter(Boolean);
    const headingHit = re => lines.some(l => l.length < 45 && re.test(l)) || re.test(text);
    let secPts = 0;
    SECTIONS.forEach(([name, re]) => { const ok = re ? headingHit(re) : email || phone; if (ok) secPts += 4; if (re) checks.push([ok, `"${name}" section found`, `Add a clearly titled "${name}" section — ATS software looks for standard headings.`]); });
    score.sections = secPts;
    const optional = OPTIONAL.filter(([, re]) => headingHit(re)).map(([n]) => n);
    const usedVerbs = VERBS.filter(v => new RegExp('\\b' + v + '\\b', 'i').test(text));
    score.verbs = Math.min(10, usedVerbs.length);
    checks.push([usedVerbs.length >= 8, `${usedVerbs.length} strong action verbs used`, 'Start bullet points with action verbs like Led, Built, Improved, Reduced, Launched.']);
    const quant = lines.filter(l => {
      const s = l.replace(/\b(19|20)\d{2}\b/g, '').replace(/\+?\d[\d\s().-]{7,}\d/g, '');
      return /(\d+(\.\d+)?\s?%|[$€£₹]\s?\d|\b\d{2,}|\b\d+\s?(k|m|x|\+|million|billion)\b|\b\d+\s+(users|clients|customers|people|teams?|projects|members|students|employees|countries|stores|products|apps))/i.test(s);
    }).length;
    score.quant = Math.min(10, quant * 2);
    checks.push([quant >= 4, `${quant} measurable achievement(s) found`, 'Add numbers to your achievements (e.g. "Reduced load time by 40%", "Managed a $50k budget").']);
    score.length = words >= 350 && words <= 1000 ? 10 : words >= 200 && words <= 1300 ? 6 : 2;
    checks.push([score.length === 10, `Length: ${words} words${meta.pages ? ` · ${meta.pages} page(s)` : ''}`, words < 350 ? 'Your resume looks short. Aim for 400–800 words with detailed achievements.' : 'Your resume is long. Keep it to 1–2 pages focused on relevant experience.']);
    const pronouns = (text.match(/\b(I|me|my|myself)\b/g) || []).length;
    const cliches = CLICHES.filter(c => lower.includes(c));
    score.style = Math.max(0, 5 - Math.min(3, Math.floor(pronouns / 3)) - Math.min(2, cliches.length));
    checks.push([pronouns < 3, pronouns < 3 ? 'No first-person pronouns' : `${pronouns} first-person pronouns (I, me, my)`, 'Remove "I", "me" and "my" — write bullets like "Led a team of 5" instead of "I led a team of 5".']);
    checks.push([!cliches.length, cliches.length ? `Overused buzzwords: ${cliches.join(', ')}` : 'No overused buzzwords', 'Replace buzzwords with concrete evidence of what you achieved.']);
    if (meta.type === 'PDF' && words < 40) checks.unshift([false, 'Very little text could be read from your PDF', 'Your PDF may be a scanned image or use graphics for text. Most ATS systems cannot read it — export your resume from Word/Google Docs as a text-based PDF.']);
    let kw = null;
    if (jd && jd.trim().length > 40) {
      const keys = extractKeywords(jd), matched = keys.filter(k => has(text, k)), missing = keys.filter(k => !has(text, k));
      kw = { keys, matched, missing, pct: keys.length ? matched.length / keys.length : 0 };
      score.keywords = Math.round(kw.pct * 35);
      checks.unshift([kw.pct >= 0.6, `Keyword match: ${Math.round(kw.pct * 100)}% of job description keywords`, 'Add the missing keywords below where they genuinely match your experience — especially in Skills and recent job bullets.']);
    }
    const max = kw ? 100 : 65;
    const total = Math.round(Object.values(score).reduce((a, b) => a + b, 0) / max * 100);
    return { total, score, checks, kw, words, optional, usedVerbs };
  }

  Tools.define('ats-resume-checker', root => {
    let file = null;
    root.innerHTML = `<div class="stack"><div class="grid-2" style="align-items:start">
      <div class="stack"><label class="label">1. Your resume</label><div class="dz"></div><div class="cur"></div><details><summary class="small" style="cursor:pointer">…or paste your resume text</summary><textarea class="textarea rtext mt" placeholder="Paste the full text of your resume"></textarea></details></div>
      <div class="stack"><label class="label">2. Job description <span class="muted">(recommended)</span></label><textarea class="textarea jd" style="min-height:230px" placeholder="Paste the job description of the role you are applying for. We'll find the keywords your resume is missing."></textarea></div></div>
      <div class="btn-row"><button class="btn lg go">🎯 Check my resume</button><span class="small muted">🔒 Your resume is analyzed in your browser and never uploaded.</span></div><div class="err"></div><div class="out stack"></div></div>`;
    const $ = UI.q(root);
    $('.dz').append(UI.dropzone({ accept: '.pdf,.docx,.txt', icon: '📄', title: 'Upload resume', hint: 'PDF, DOCX or TXT', compact: true, onFiles: ([f]) => { file = f; $('.cur').innerHTML = ''; $('.cur').append(UI.fileRow({ name: f.name, sub: UI.fmtBytes(f.size), icon: '📄' })); } }));
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      let text = $('.rtext').value.trim(), meta = { type: 'TXT' };
      if (!text) { if (!file) throw new Error('Upload your resume or paste its text first.'); const r = await readResume(file); text = r.text; meta = r; }
      if (text.trim().length < 50) throw new Error('We could not read enough text from your resume. If it is a scanned PDF, export a text-based PDF from Word or Google Docs.');
      const a = analyzeResume(text, $('.jd').value, meta);
      const col = a.total >= 80 ? 'var(--success)' : a.total >= 60 ? 'var(--warn)' : 'var(--danger)';
      const verdict = a.total >= 80 ? 'Excellent — your resume is well optimized for ATS.' : a.total >= 60 ? 'Good, but a few improvements will raise your chances.' : 'Needs work — fix the issues below before applying.';
      const bar = (label, v, max) => `<div class="bar-row"><span style="width:150px">${label}</span><div class="bar"><i style="width:${v / max * 100}%"></i></div><strong style="width:52px;text-align:right">${v}/${max}</strong></div>`;
      $('.out').innerHTML = `<div class="card-sub"><div class="row" style="align-items:center;gap:24px">
        <div style="width:150px;height:150px;border-radius:50%;background:conic-gradient(${col} ${a.total * 3.6}deg, var(--bg-soft) 0);display:grid;place-items:center;flex:none"><div style="width:118px;height:118px;border-radius:50%;background:var(--card);display:grid;place-items:center;text-align:center"><div><div style="font-size:2.4rem;font-weight:800;color:${col}">${a.total}</div><div class="small muted">ATS score</div></div></div></div>
        <div class="stack" style="flex:1;min-width:240px;gap:8px"><strong>${verdict}</strong>${a.kw ? bar('Keyword match', a.score.keywords, 35) : ''}${bar('Sections', a.score.sections, 20)}${bar('Contact details', a.score.contact, 10)}${bar('Action verbs', a.score.verbs, 10)}${bar('Measurable results', a.score.quant, 10)}${bar('Length', a.score.length, 10)}${bar('Writing style', a.score.style, 5)}</div></div></div>
        ${a.kw ? `<div class="grid-2"><div class="card-sub"><h3>✅ Matched keywords (${a.kw.matched.length})</h3><div class="chips">${a.kw.matched.map(k => `<span class="badge ok">${esc(k)}</span>`).join('') || '<span class="muted small">None yet</span>'}</div></div><div class="card-sub"><h3>❌ Missing keywords (${a.kw.missing.length})</h3><div class="chips">${a.kw.missing.map(k => `<span class="badge bad">${esc(k)}</span>`).join('') || '<span class="muted small">None — great!</span>'}</div></div></div>` : '<div class="notice warn">Tip: paste the job description to get a keyword match score — it is the biggest factor in how ATS systems rank resumes.</div>'}
        <div class="card-sub"><h3>Checklist</h3><ul class="list-plain stack" style="gap:10px">${a.checks.map(([ok, title, tip]) => `<li class="row" style="flex-wrap:nowrap;align-items:flex-start;gap:10px"><span>${ok ? '✅' : '⚠️'}</span><div><strong>${esc(title)}</strong>${ok ? '' : `<div class="small muted">${esc(tip)}</div>`}</div></li>`).join('')}</ul>
        ${a.optional.length ? `<p class="small muted mt">Bonus sections found: ${a.optional.join(', ')}.</p>` : '<p class="small muted mt">Consider adding Projects, Certifications or Awards sections if relevant.</p>'}</div>
        <div class="notice small">ATS-friendly formatting tips: use a single-column layout, standard fonts, simple bullet points, no text inside images, tables or text boxes, and save as PDF or DOCX. Need a clean template? Try our <a href="resume-builder">Resume Builder</a>.</div>`;
    }, 'Analyzing…', $('.err'));
  });
  Tools._analyzeResume = analyzeResume;

  const SAMPLE_CV = { name: 'Ayesha Khan', title: 'Frontend Developer', email: 'ayesha.khan@email.com', phone: '+92 300 1234567', location: 'Lahore, Pakistan', link: 'linkedin.com/in/ayeshakhan',
    summary: 'Frontend developer with 4 years of experience building fast, accessible web apps with React and TypeScript. Improved Core Web Vitals for 3 high-traffic products and mentored 5 junior developers.',
    exp: [{ role: 'Frontend Developer', org: 'TechNova', place: 'Lahore', date: '2022 – Present', bullets: 'Led the redesign of the customer dashboard used by 40,000+ users\nReduced page load time by 45% through code splitting and image optimization\nBuilt a shared component library adopted by 4 product teams' }, { role: 'Junior Web Developer', org: 'PixelCraft Studio', place: 'Remote', date: '2020 – 2022', bullets: 'Developed 20+ responsive client websites with React and Tailwind CSS\nAutomated deployments with GitHub Actions, saving 6 hours per week' }],
    edu: [{ role: 'BS Computer Science', org: 'University of the Punjab', place: 'Lahore', date: '2016 – 2020', bullets: 'CGPA 3.6 / 4.0' }],
    skills: 'JavaScript, TypeScript, React, Next.js, HTML, CSS, Tailwind CSS, Node.js, Git, REST APIs, Jest, Figma',
    projects: [{ role: 'ToolNest', org: 'github.com/ayesha/toolnest', place: '', date: '2024', bullets: 'Open-source collection of 100+ browser-based utilities with 10k monthly users' }],
    certs: 'Meta Front-End Developer Certificate (2023)\nGoogle UX Design Certificate (2022)', langs: 'English, Urdu' };
  const EMPTY_CV = { name: '', title: '', email: '', phone: '', location: '', link: '', summary: '', exp: [{ role: '', org: '', place: '', date: '', bullets: '' }], edu: [{ role: '', org: '', place: '', date: '', bullets: '' }], skills: '', projects: [], certs: '', langs: '' };
  function cvHTML(d, o) {
    const e = s => esc(s || ''), sec = (t, body) => body ? `<section><h2>${t}</h2>${body}</section>` : '';
    const items = list => (list || []).filter(x => x.role || x.org).map(x => `<div class="item"><div class="ih"><div><strong>${e(x.role)}</strong>${x.org ? ` — ${e(x.org)}` : ''}</div><span>${e([x.place, x.date].filter(Boolean).join(' · '))}</span></div>${x.bullets ? `<ul>${x.bullets.split('\n').filter(b => b.trim()).map(b => `<li>${e(b.replace(/^[-•*]\s*/, ''))}</li>`).join('')}</ul>` : ''}</div>`).join('');
    const contact = [d.email, d.phone, d.location, d.link].filter(Boolean).map(e).join(' &nbsp;|&nbsp; ');
    const font = o.font === 'serif' ? 'Georgia, "Times New Roman", serif' : '"Segoe UI", Calibri, Arial, sans-serif';
    return `<style>.cv{font-family:${font};color:#1f2937;font-size:10.5pt;line-height:1.45;background:#fff;padding:${o.tpl === 'compact' ? '28px 34px' : '40px 46px'};width:100%;box-sizing:border-box}
      .cv h1{font-size:${o.tpl === 'compact' ? 20 : 24}pt;margin:0;color:${o.tpl === 'modern' ? o.color : '#111'};letter-spacing:-.01em}.cv .t{font-size:12pt;color:${o.tpl === 'classic' ? '#4b5563' : o.color};margin:2px 0 6px;font-weight:600}.cv .c{font-size:9.5pt;color:#4b5563}
      .cv header{${o.tpl === 'classic' ? 'text-align:center;border-bottom:2px solid #111;padding-bottom:10px' : o.tpl === 'modern' ? `border-left:6px solid ${o.color};padding-left:14px` : `border-bottom:2px solid ${o.color};padding-bottom:8px`};margin-bottom:12px}
      .cv h2{font-size:11pt;text-transform:uppercase;letter-spacing:.08em;color:${o.tpl === 'classic' ? '#111' : o.color};border-bottom:1px solid #d1d5db;padding-bottom:3px;margin:${o.tpl === 'compact' ? 10 : 14}px 0 6px}
      .cv .item{margin-bottom:${o.tpl === 'compact' ? 6 : 9}px}.cv .ih{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}.cv .ih span{color:#6b7280;font-size:9.5pt;white-space:nowrap}.cv ul{margin:3px 0 0;padding-left:18px}.cv li{margin:1px 0}.cv p{margin:0}</style>
      <div class="cv"><header><h1>${e(d.name) || 'Your Name'}</h1>${d.title ? `<div class="t">${e(d.title)}</div>` : ''}<div class="c">${contact}</div></header>
      ${sec('Summary', d.summary ? `<p>${e(d.summary)}</p>` : '')}${sec('Experience', items(d.exp))}${sec('Education', items(d.edu))}
      ${sec('Skills', d.skills ? `<p>${e(d.skills)}</p>` : '')}${sec('Projects', items(d.projects))}${sec('Certifications', d.certs ? `<ul>${d.certs.split('\n').filter(Boolean).map(c => `<li>${e(c)}</li>`).join('')}</ul>` : '')}${sec('Languages', d.langs ? `<p>${e(d.langs)}</p>` : '')}</div>`;
  }
  Tools.define('resume-builder', root => {
    let d = UI.store.get('cv', null) || JSON.parse(JSON.stringify(SAMPLE_CV));
    const o = UI.store.get('cvopt', { tpl: 'modern', color: '#1d4ed8', font: 'sans' });
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end"><div class="field small"><label>Template</label><select class="select tpl"><option value="modern">Modern</option><option value="classic">Classic</option><option value="compact">Compact</option></select></div><div class="field small"><label>Accent</label><input type="color" class="col"></div><div class="field small"><label>Font</label><select class="select fnt"><option value="sans">Sans-serif</option><option value="serif">Serif</option></select></div>
      <div class="btn-row"><button class="btn pdf">⬇ Download PDF</button><button class="btn secondary doc">⬇ Word (.doc)</button><button class="btn ghost sample">Load sample</button><button class="btn ghost clear">Clear all</button></div></div>
      <div class="grid-2" style="align-items:start"><div class="form stack"></div><div style="position:sticky;top:80px"><div class="small muted" style="margin-bottom:6px">Live preview</div><div class="pv" style="border:1px solid var(--border);box-shadow:var(--shadow);background:#fff;max-height:calc(100vh - 140px);overflow:auto;border-radius:6px"></div></div></div></div>`;
    const $ = UI.q(root);
    $('.tpl').value = o.tpl; $('.col').value = o.color; $('.fnt').value = o.font;
    const listBlock = (key, title, labels) => `<div class="card-sub stack"><strong>${title}</strong>${(d[key] || []).map((x, i) => `<div class="stack" style="gap:8px;padding-bottom:10px;border-bottom:1px dashed var(--border)"><div class="row"><input class="input" data-l="${key}" data-i="${i}" data-k="role" placeholder="${labels[0]}" value="${esc(x.role)}"><input class="input" data-l="${key}" data-i="${i}" data-k="org" placeholder="${labels[1]}" value="${esc(x.org)}"></div><div class="row"><input class="input" data-l="${key}" data-i="${i}" data-k="place" placeholder="Location" value="${esc(x.place)}"><input class="input" data-l="${key}" data-i="${i}" data-k="date" placeholder="Dates (e.g. 2021 – Present)" value="${esc(x.date)}"></div><textarea class="textarea" style="min-height:80px" data-l="${key}" data-i="${i}" data-k="bullets" placeholder="${labels[2]}">${esc(x.bullets)}</textarea><div><button class="btn sm ghost" data-rm="${key}:${i}">Remove</button></div></div>`).join('')}<div><button class="btn sm secondary" data-add="${key}">+ Add ${title.toLowerCase().replace(/s$/, '')}</button></div></div>`;
    const field = (k, label, ph, ta) => `<div class="field"><label>${label}</label>${ta ? `<textarea class="textarea" style="min-height:80px" data-f="${k}" placeholder="${ph}">${esc(d[k])}</textarea>` : `<input class="input" data-f="${k}" placeholder="${ph}" value="${esc(d[k])}">`}</div>`;
    const drawForm = () => {
      $('.form').innerHTML = `<div class="card-sub stack"><strong>Personal details</strong><div class="row">${field('name', 'Full name', 'Ayesha Khan')}${field('title', 'Job title', 'Frontend Developer')}</div><div class="row">${field('email', 'Email', 'you@email.com')}${field('phone', 'Phone', '+92 300 1234567')}</div><div class="row">${field('location', 'Location', 'City, Country')}${field('link', 'LinkedIn / website', 'linkedin.com/in/you')}</div>${field('summary', 'Professional summary', '2–3 sentences about your experience and strengths', true)}</div>
        ${listBlock('exp', 'Experience', ['Job title', 'Company', 'One achievement per line — start with an action verb and add numbers'])}${listBlock('edu', 'Education', ['Degree', 'School / University', 'GPA, honours, relevant coursework (optional)'])}
        <div class="card-sub stack"><strong>Skills & more</strong>${field('skills', 'Skills (comma separated)', 'JavaScript, React, SQL…', true)}${field('certs', 'Certifications (one per line)', '', true)}${field('langs', 'Languages', 'English, Urdu')}</div>${listBlock('projects', 'Projects', ['Project name', 'Link', 'What you built and the impact'])}`;
    };
    const opts = () => ({ tpl: $('.tpl').value, color: $('.col').value, font: $('.fnt').value });
    const render = () => { $('.pv').innerHTML = cvHTML(d, opts()); UI.store.set('cv', d); UI.store.set('cvopt', opts()); };
    root.addEventListener('input', e => { const t = e.target; if (t.dataset.f) d[t.dataset.f] = t.value; else if (t.dataset.l) d[t.dataset.l][+t.dataset.i][t.dataset.k] = t.value; render(); });
    root.addEventListener('change', render);
    root.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t) return;
      if (t.dataset.add) { (d[t.dataset.add] = d[t.dataset.add] || []).push({ role: '', org: '', place: '', date: '', bullets: '' }); drawForm(); render(); }
      if (t.dataset.rm) { const [k, i] = t.dataset.rm.split(':'); d[k].splice(+i, 1); drawForm(); render(); }
    });
    $('.sample').onclick = () => { d = JSON.parse(JSON.stringify(SAMPLE_CV)); drawForm(); render(); };
    $('.clear').onclick = () => { if (confirm('Clear all resume fields?')) { d = JSON.parse(JSON.stringify(EMPTY_CV)); drawForm(); render(); } };
    const fname = () => (d.name || 'resume').trim().replace(/\s+/g, '_') + '_Resume';
    $('.pdf').onclick = () => {
      const fr = document.createElement('iframe'); fr.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0'; document.body.appendChild(fr);
      const doc = fr.contentDocument; doc.open(); doc.write(`<!doctype html><html><head><title>${esc(fname())}</title><style>@page{size:A4;margin:0}body{margin:0}</style></head><body>${cvHTML(d, opts())}</body></html>`); doc.close();
      setTimeout(() => { fr.contentWindow.focus(); fr.contentWindow.print(); setTimeout(() => fr.remove(), 2000); }, 300);
      UI.toast('Choose "Save as PDF" in the print window', 3500);
    };
    $('.doc').onclick = () => UI.download(new Blob(['\ufeff<html><head><meta charset="utf-8"></head><body>' + cvHTML(d, opts()) + '</body></html>'], { type: 'application/msword' }), fname() + '.doc');
    drawForm(); render();
  });

  const HAND_FONTS = ['Homemade Apple', 'Caveat', 'Indie Flower', 'Kalam', 'Shadows Into Light', 'Patrick Hand', 'Gloria Hallelujah', 'Reenie Beanie', 'Nanum Pen Script', 'Dawning of a New Day', 'Cedarville Cursive', 'La Belle Aurore'];
  Tools.define('text-to-handwriting', root => {
    root.innerHTML = `<div class="stack"><textarea class="textarea txt" style="min-height:170px">Assignment: The Water Cycle

The water cycle describes how water moves between the earth and the atmosphere. Water evaporates from oceans and lakes, rises and cools to form clouds, and returns to the ground as rain or snow. This continuous cycle supports all life on our planet.</textarea>
      <div class="row opts"></div><div class="btn-row"><button class="btn lg png">⬇ Download images</button><button class="btn secondary pdf">⬇ Download PDF</button><span class="small muted info"></span></div><div class="pages stack"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [
      { id: 'font', label: 'Handwriting', type: 'select', value: 'Caveat', options: HAND_FONTS },
      { id: 'ink', label: 'Ink', type: 'select', value: '#1e3a8a', options: [['#1e3a8a', 'Blue'], ['#111827', 'Black'], ['#b91c1c', 'Red'], ['#065f46', 'Green']] },
      { id: 'paper', label: 'Paper', type: 'select', value: 'lined', options: [['lined', 'Ruled (lined)'], ['blank', 'Plain'], ['grid', 'Grid']] },
      { id: 'size', label: 'Text size', type: 'range', value: 30, min: 20, max: 44, unit: 'px' },
      { id: 'mess', label: 'Natural variation', type: 'range', value: 5, min: 0, max: 10 },
      { id: 'margin', label: 'Red margin line', type: 'checkbox', value: true },
    ], UI.debounce(() => draw(), 250));
    $('.txt').addEventListener('input', UI.debounce(() => draw(), 400));
    let canvases = [];
    const W = 1240, H = 1754, TOP = 170, LEFT = 150, RIGHT = 80;
    const rand = seed => () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    const draw = async () => {
      const o = form.get(); await UI.font(o.font);
      const gap = Math.round(o.size * 1.75), r = rand(7);
      const newPage = () => {
        const c = UI.canvas(W, H), x = c.getContext('2d');
        x.fillStyle = '#fdfdf8'; x.fillRect(0, 0, W, H);
        if (o.paper === 'lined') { x.strokeStyle = '#a5c8e8'; x.lineWidth = 2; for (let y = TOP; y < H - 60; y += gap) { x.beginPath(); x.moveTo(0, y); x.lineTo(W, y); x.stroke(); } }
        if (o.paper === 'grid') { x.strokeStyle = '#d6e4f0'; x.lineWidth = 1.5; for (let y = TOP % gap; y < H; y += gap) { x.beginPath(); x.moveTo(0, y); x.lineTo(W, y); x.stroke(); } for (let X = 0; X < W; X += gap) { x.beginPath(); x.moveTo(X, 0); x.lineTo(X, H); x.stroke(); } }
        if (o.margin) { x.strokeStyle = '#ef9a9a'; x.lineWidth = 2.5; x.beginPath(); x.moveTo(LEFT - 25, 0); x.lineTo(LEFT - 25, H); x.stroke(); }
        x.font = `${o.size}px "${o.font}"`; x.fillStyle = o.ink; x.textBaseline = 'alphabetic';
        canvases.push(c); return x;
      };
      canvases = [];
      let x = newPage(), y = TOP - 8;
      const maxW = W - LEFT - RIGHT;
      for (const para of $('.txt').value.split('\n')) {
        const words = para.split(/\s+/).filter(Boolean);
        let line = [];
        const flush = () => {
          let X = LEFT + (r() - 0.5) * o.mess;
          for (const w of line) {
            x.save(); x.translate(X, y + (r() - 0.5) * o.mess * 0.5); x.rotate((r() - 0.5) * o.mess * 0.006);
            x.globalAlpha = 0.85 + r() * 0.15; x.fillText(w, 0, 0); x.restore();
            X += x.measureText(w + ' ').width + (r() - 0.5) * o.mess * 0.8;
          }
          y += gap; line = [];
          if (y > H - 80) { x = newPage(); y = TOP - 8; }
        };
        if (!words.length) { y += gap; if (y > H - 80) { x = newPage(); y = TOP - 8; } continue; }
        for (const w of words) { const test = [...line, w].join(' '); if (x.measureText(test).width > maxW && line.length) flush(); line.push(w); }
        if (line.length) flush();
      }
      $('.pages').innerHTML = '';
      canvases.forEach(c => { const p = UI.canvas(W, H); p.getContext('2d').drawImage(c, 0, 0); p.style.cssText = 'width:100%;max-width:620px;box-shadow:var(--shadow-lg);border-radius:4px;align-self:center'; $('.pages').append(p); });
      $('.info').textContent = `${canvases.length} page(s)`;
    };
    $('.png').onclick = e => UI.busy(e.currentTarget, async () => {
      const files = await Promise.all(canvases.map(async (c, i) => ({ name: `handwriting-page-${i + 1}.jpg`, blob: await UI.canvasBlob(c, 'image/jpeg', 0.92) })));
      if (files.length === 1) UI.download(files[0].blob, files[0].name); else await UI.zip(files, 'handwriting-pages.zip');
    }, 'Preparing…');
    $('.pdf').onclick = e => UI.busy(e.currentTarget, async () => {
      const { PDFDocument } = await UI.lib('pdflib'), doc = await PDFDocument.create();
      for (const c of canvases) { const img = await doc.embedJpg(await (await UI.canvasBlob(c, 'image/jpeg', 0.9)).arrayBuffer()); doc.addPage([595.28, 841.89]).drawImage(img, { x: 0, y: 0, width: 595.28, height: 841.89 }); }
      UI.download(new Blob([await doc.save()], { type: 'application/pdf' }), 'handwriting.pdf');
    }, 'Creating PDF…');
    draw();
  });

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function citation(style, type, f) {
    const authors = f.authors.split('\n').map(a => a.trim()).filter(Boolean).map(a => { const p = a.includes(',') ? a.split(',').map(s => s.trim()).reverse() : a.split(/\s+/); const last = p.length > 1 ? (a.includes(',') ? p[1] : p[p.length - 1]) : p[0]; const first = a.includes(',') ? p[0] : p.slice(0, -1).join(' '); return { first, last }; });
    const ini = n => n.split(/[\s-]+/).filter(Boolean).map(x => x[0].toUpperCase() + '.').join(' ');
    const date = f.date ? new Date(f.date + 'T00:00') : null, year = f.year || (date ? date.getFullYear() : 'n.d.');
    const acc = f.accessed ? new Date(f.accessed + 'T00:00') : null;
    const i = s => s ? `<i>${esc(s)}</i>` : '', e = esc, url = f.doi ? (f.doi.startsWith('http') ? f.doi : 'https://doi.org/' + f.doi) : f.url;
    const ed = f.edition && f.edition !== '1' ? f.edition : '';
    const ord = n => n + (['th', 'st', 'nd', 'rd'][(n % 100 - 20) % 10] || ['th', 'st', 'nd', 'rd'][n % 100] || 'th');
    let A;
    if (style === 'apa') {
      const one = a => `${e(a.last)}${a.first ? ', ' + ini(a.first) : ''}`;
      A = authors.length === 0 ? '' : authors.length === 1 ? one(authors[0]) : authors.length <= 20 ? authors.slice(0, -1).map(one).join(', ') + ', &amp; ' + one(authors[authors.length - 1]) : authors.slice(0, 19).map(one).join(', ') + ', … ' + one(authors[authors.length - 1]);
      const d = type === 'web' && date ? `${year}, ${MONTHS[date.getMonth()]} ${date.getDate()}` : year;
      const head = A ? `${A} (${d}).` : '';
      if (type === 'web') return A ? `${head} ${i(f.title)}. ${e(f.site)}. ${e(url)}` : `${i(f.title)}. (${d}). ${e(f.site)}. ${e(url)}`;
      if (type === 'book') return `${head} ${i(f.title)}${ed ? ` (${ord(+ed) || e(ed)} ed.)` : ''}. ${e(f.publisher)}.${url ? ' ' + e(url) : ''}`;
      return `${head} ${e(f.title)}. ${i(f.journal + (f.volume ? ', ' + f.volume : ''))}${f.issue ? `(${e(f.issue)})` : ''}${f.pages ? ', ' + e(f.pages) : ''}.${url ? ' ' + e(url) : ''}`;
    }
    const full = a => `${e(a.first)} ${e(a.last)}`.trim(), inv = a => `${e(a.last)}${a.first ? ', ' + e(a.first) : ''}`;
    if (style === 'mla' || style === 'chicago') {
      A = authors.length === 0 ? '' : authors.length === 1 ? inv(authors[0]) : authors.length === 2 ? `${inv(authors[0])}, and ${full(authors[1])}` : style === 'mla' ? `${inv(authors[0])}, et al` : `${inv(authors[0])}, ${authors.slice(1, -1).map(full).join(', ')}${authors.length > 2 ? ',' : ''} and ${full(authors[authors.length - 1])}`;
      const head = A ? `${A}. ` : '';
      const dmy = d => d ? `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}${d.getMonth() === 4 ? '' : '.'} ${d.getFullYear()}` : '';
      if (style === 'mla') {
        if (type === 'web') return `${head}"${e(f.title)}." ${i(f.site)}, ${date ? dmy(date) : year}, ${e(String(url || '').replace(/^https?:\/\//, ''))}.${acc ? ` Accessed ${dmy(acc)}.` : ''}`;
        if (type === 'book') return `${head}${i(f.title)}. ${ed ? `${ord(+ed) || e(ed)} ed., ` : ''}${e(f.publisher)}, ${year}.`;
        return `${head}"${e(f.title)}." ${i(f.journal)}${f.volume ? `, vol. ${e(f.volume)}` : ''}${f.issue ? `, no. ${e(f.issue)}` : ''}, ${year}${f.pages ? `, pp. ${e(f.pages)}` : ''}.${url ? ' ' + e(url) + '.' : ''}`;
      }
      const mdy = d => d ? `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}` : '';
      if (type === 'web') return `${head}"${e(f.title)}." ${e(f.site)}. ${date ? mdy(date) : year}. ${e(url)}.`;
      if (type === 'book') return `${head}${i(f.title)}. ${ed ? `${ord(+ed) || e(ed)} ed. ` : ''}${f.city ? e(f.city) + ': ' : ''}${e(f.publisher)}, ${year}.`;
      return `${head}"${e(f.title)}." ${i(f.journal)} ${e(f.volume || '')}${f.issue ? `, no. ${e(f.issue)}` : ''} (${year})${f.pages ? ': ' + e(f.pages) : ''}.${url ? ' ' + e(url) + '.' : ''}`;
    }
    const h = a => `${e(a.last)}${a.first ? ', ' + ini(a.first) : ''}`;
    A = authors.length === 0 ? '' : authors.length === 1 ? h(authors[0]) : authors.length <= 3 ? authors.slice(0, -1).map(h).join(', ') + ' and ' + h(authors[authors.length - 1]) : h(authors[0]) + ' et al.';
    const head = A ? `${A} (${year}) ` : '';
    const dmy = d => d ? `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}` : '';
    if (type === 'web') return `${head || `${i(f.site)} (${year}) `}${i(f.title)}. Available at: ${e(url)}${acc ? ` (Accessed: ${dmy(acc)})` : ''}.`;
    if (type === 'book') return `${head}${i(f.title)}. ${ed ? `${ord(+ed) || e(ed)} edn. ` : ''}${f.city ? e(f.city) + ': ' : ''}${e(f.publisher)}.`;
    return `${head}'${e(f.title)}', ${i(f.journal)}, ${e(f.volume || '')}${f.issue ? `(${e(f.issue)})` : ''}${f.pages ? `, pp. ${e(f.pages)}` : ''}.${f.doi ? ` doi: ${e(f.doi.replace(/^https?:\/\/doi.org\//, ''))}.` : ''}`;
  }
  Tools.define('citation-generator', root => {
    const bib = UI.store.get('bib', []);
    root.innerHTML = `<div class="stack"><div class="row"><div class="field"><label>Citation style</label><div class="style"></div></div><div class="field"><label>Source type</label><div class="type"></div></div></div>
      <div class="row opts"></div><div class="card-sub stack"><div class="small muted">Your citation</div><div class="cite" style="font-family:Georgia,serif;font-size:1.05rem;padding-left:2em;text-indent:-2em;line-height:1.7"></div>
      <div class="btn-row"><button class="btn cp">📋 Copy</button><button class="btn secondary add">+ Add to bibliography</button></div></div>
      <div class="bibwrap stack" ${bib.length ? '' : 'hidden'}><div class="row" style="justify-content:space-between;align-items:center"><h3 style="margin:0">Bibliography / Reference list</h3><div class="btn-row"><button class="btn sm cpall">Copy all</button><button class="btn sm ghost clr">Clear</button></div></div><ol class="bib" style="font-family:Georgia,serif;line-height:1.7"></ol></div></div>`;
    const $ = UI.q(root);
    let style = 'apa', type = 'web';
    const fieldsFor = t => [
      { id: 'authors', label: 'Authors (one per line: First Last)', type: 'textarea', rows: 2, value: t === 'web' ? 'Jane Smith' : 'John A. Doe\nMaria Garcia', full: true },
      { id: 'title', label: t === 'journal' ? 'Article title' : t === 'book' ? 'Book title' : 'Page / article title', type: 'text', value: t === 'web' ? 'How climate change affects ocean currents' : t === 'book' ? 'Principles of modern economics' : 'Effects of sleep on memory consolidation', cls: 'grow' },
      ...(t === 'web' ? [{ id: 'site', label: 'Website name', type: 'text', value: 'National Geographic' }, { id: 'url', label: 'URL', type: 'text', value: 'https://www.example.com/article', cls: 'grow' }, { id: 'date', label: 'Date published', type: 'date', value: '2024-03-15' }, { id: 'accessed', label: 'Date accessed', type: 'date', value: new Date().toISOString().slice(0, 10) }] : []),
      ...(t === 'book' ? [{ id: 'publisher', label: 'Publisher', type: 'text', value: 'Oxford University Press' }, { id: 'city', label: 'City (Chicago/Harvard)', type: 'text', value: 'Oxford' }, { id: 'year', label: 'Year', type: 'text', value: '2021' }, { id: 'edition', label: 'Edition', type: 'text', value: '2' }, { id: 'doi', label: 'DOI / URL (optional)', type: 'text', value: '' }] : []),
      ...(t === 'journal' ? [{ id: 'journal', label: 'Journal name', type: 'text', value: 'Journal of Cognitive Science', cls: 'grow' }, { id: 'year', label: 'Year', type: 'text', value: '2023' }, { id: 'volume', label: 'Volume', type: 'text', value: '12' }, { id: 'issue', label: 'Issue', type: 'text', value: '3' }, { id: 'pages', label: 'Pages', type: 'text', value: '45–67' }, { id: 'doi', label: 'DOI', type: 'text', value: '10.1000/jcs.2023.123' }] : []),
    ];
    let form;
    const build = () => { form = UI.fields($('.opts'), fieldsFor(type), render); render(); };
    const vals = () => Object.assign({ authors: '', title: '', site: '', url: '', date: '', accessed: '', publisher: '', city: '', year: '', edition: '', doi: '', journal: '', volume: '', issue: '', pages: '' }, form.get());
    const render = () => { $('.cite').innerHTML = citation(style, type, vals()); };
    $('.style').append(UI.seg([['apa', 'APA 7'], ['mla', 'MLA 9'], ['harvard', 'Harvard'], ['chicago', 'Chicago']], 'apa', v => { style = v; render(); }));
    $('.type').append(UI.seg([['web', 'Website'], ['book', 'Book'], ['journal', 'Journal']], 'web', v => { type = v; build(); }));
    const copyRich = async html => {
      try { await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([UI.h('<div>' + html + '</div>').textContent], { type: 'text/plain' }) })]); UI.toast('✓ Copied with formatting'); }
      catch (e) { UI.copy(UI.h('<div>' + html + '</div>').textContent); }
    };
    const drawBib = () => { const sorted = [...bib].sort((a, b) => UI.h('<i>' + a + '</i>').textContent.localeCompare(UI.h('<i>' + b + '</i>').textContent)); $('.bib').innerHTML = sorted.map(b => `<li style="padding-left:1.5em;text-indent:-1.5em">${b}</li>`).join(''); $('.bibwrap').hidden = !bib.length; UI.store.set('bib', bib); };
    $('.cp').onclick = () => copyRich($('.cite').innerHTML);
    $('.add').onclick = () => { bib.push($('.cite').innerHTML); drawBib(); UI.toast('Added to bibliography'); };
    $('.cpall').onclick = () => copyRich([...$('.bib').children].map(li => `<p>${li.innerHTML}</p>`).join(''));
    $('.clr').onclick = () => { bib.length = 0; drawBib(); };
    build(); drawBib();
  });
  Tools._citation = citation;

  const COMMON = 'the be to of and a in that have it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us is was are were been has had did said each tell does set three air play small end put home read hand port large spell add land here must big high such follow act why ask men change went light kind off need house picture try again animal point mother world near build self earth father head stand own page should country found answer school grow study still learn plant cover food sun four between state keep eye never last let thought city tree cross farm hard start might story saw far sea draw left late run while press close night real life few north open seem together next white children begin got walk example ease paper group always music those both mark often letter until mile river car feet care second book carry took science eat room friend began idea fish mountain stop once base hear horse cut sure watch color face wood main enough plain girl usual young ready above ever red list though feel talk bird soon body dog family direct pose leave song measure door product black short numeral class wind question happen complete ship area half rock order fire south problem piece told knew pass since top whole king space heard best hour better true during hundred five remember step early hold west ground interest reach fast verb sing listen six table travel less morning ten simple several vowel toward war lay against pattern slow center love person money serve appear road map rain rule govern pull cold notice voice unit power town fine certain fly fall lead cry dark machine note wait plan figure star box noun field rest correct able pound done beauty drive stood contain front teach week final gave green oh quick develop ocean warm free minute strong special mind behind clear tail produce fact street inch multiply nothing course stay wheel full force blue object decide surface deep moon island foot system busy test record boat common gold possible plane age dry wonder laugh thousand ago ran check game shape yes hot miss brought heat snow tire bring distant fill east paint language among'.split(' ');
  const SENTENCES = ['Practice makes progress, so keep your eyes on the screen and your fingers on the home row.', 'A small habit repeated every day can change the direction of your whole year.', 'The best way to learn something new is to teach it to someone else.', 'Good typing is about rhythm and accuracy first; speed follows naturally with time.', 'Bright mornings in Lahore often begin with fresh bread, warm tea and busy streets.', 'Technology moves quickly, but curiosity and patience never go out of style.', 'She checked the weather, packed an umbrella and walked to the station before eight.', 'Clear writing comes from clear thinking, so plan your ideas before you begin.', 'The library was quiet except for the soft sound of pages turning in the afternoon.', 'Every expert was once a beginner who refused to give up after the first mistake.', 'Our team shipped the update on Friday, fixed two bugs and celebrated with pizza.', 'Mountains look close in the morning light, yet the trail to the top is long and steep.'];
  Tools.define('typing-speed-test', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end"><div class="field small"><label>Duration</label><div class="dur"></div></div><div class="field small"><label>Text</label><div class="mode"></div></div><button class="btn ghost restart">↻ Restart</button></div>
      <div class="results live"></div>
      <div class="box" style="position:relative;height:150px;overflow:hidden;padding:14px 18px;background:var(--bg);border:1px solid var(--border);border-radius:14px;font-family:var(--mono);font-size:1.35rem;line-height:2.2;cursor:text"><div class="words"></div></div>
      <input class="input typer" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Click here and start typing — the timer starts on your first key" aria-label="Type here">
      <div class="final"></div></div>`;
    const $ = UI.q(root);
    let dur = 60, mode = 'words', target = '', spans = [], timer = null, start = 0, done = false, typed = '';
    const best = () => UI.store.get('typing-best', 0);
    $('.dur').append(UI.seg([['30', '30s'], ['60', '60s'], ['120', '2 min']], '60', v => { dur = +v; reset(); }));
    $('.mode').append(UI.seg([['words', 'Common words'], ['sentences', 'Sentences']], 'words', v => { mode = v; reset(); }));
    const gen = () => { let t = ''; if (mode === 'words') { while (t.length < dur * 14) t += COMMON[Math.floor(Math.random() * COMMON.length)] + ' '; } else { const s = [...SENTENCES].sort(() => Math.random() - 0.5); let k = 0; while (t.length < dur * 14) t += s[k++ % s.length] + ' '; } return t.trim(); };
    const stats = () => { const el = start ? (Date.now() - start) / 1000 : 0; let ok = 0; for (let i = 0; i < typed.length; i++) if (typed[i] === target[i]) ok++; const min = Math.max(el, 1) / 60; return { el, ok, err: typed.length - ok, wpm: Math.round(ok / 5 / min), raw: Math.round(typed.length / 5 / min), acc: typed.length ? Math.round(ok / typed.length * 100) : 100 }; };
    const showLive = () => { const s = stats(); $('.live').innerHTML = UI.resultsHTML([{ k: 'Time left', v: Math.max(0, Math.ceil(dur - s.el)) + 's' }, { k: 'WPM', v: start ? s.wpm : 0 }, { k: 'Accuracy', v: s.acc + '%' }, { k: 'Personal best', v: best() + ' WPM' }]); };
    const reset = () => {
      clearInterval(timer); timer = null; start = 0; done = false; typed = ''; target = gen();
      $('.words').innerHTML = [...target].map(c => `<span>${c === ' ' ? ' ' : esc(c)}</span>`).join('');
      spans = [...$('.words').children]; spans[0].style.borderLeft = '2px solid var(--primary)';
      $('.typer').value = ''; $('.typer').disabled = false; $('.final').innerHTML = ''; $('.words').style.transform = '';
      showLive();
    };
    const finish = () => {
      done = true; clearInterval(timer); $('.typer').disabled = true;
      const s = stats(), b = best(); if (s.wpm > b) UI.store.set('typing-best', s.wpm);
      const lvl = s.wpm >= 70 ? 'Excellent — professional typist level! 🚀' : s.wpm >= 50 ? 'Great — faster than most people. 👏' : s.wpm >= 35 ? 'Good — that is around the average typing speed.' : 'Keep practicing — accuracy first, then speed.';
      $('.final').innerHTML = UI.resultsHTML([{ k: 'Your typing speed', v: s.wpm + ' WPM', main: true, s: lvl + (s.wpm > b ? ' New personal best!' : '') }, { k: 'Accuracy', v: s.acc + '%' }, { k: 'Raw speed', v: s.raw + ' WPM' }, { k: 'Correct characters', v: s.ok }, { k: 'Mistakes', v: s.err }]) + '<div class="btn-row mt"><button class="btn again">↻ Try again</button></div>';
      $('.final .again').onclick = () => { reset(); $('.typer').focus(); };
      showLive();
    };
    $('.typer').addEventListener('input', e => {
      if (done) return;
      if (!start) { start = Date.now(); timer = setInterval(() => { showLive(); if ((Date.now() - start) / 1000 >= dur) finish(); }, 200); }
      typed = e.target.value.slice(0, target.length);
      spans.forEach((sp, i) => { sp.style.borderLeft = ''; sp.style.color = i < typed.length ? (typed[i] === target[i] ? 'var(--success)' : 'var(--danger)') : ''; sp.style.background = i < typed.length && typed[i] !== target[i] ? 'var(--danger-soft)' : ''; });
      const cur = spans[typed.length]; if (cur) { cur.style.borderLeft = '2px solid var(--primary)'; const top = cur.offsetTop; $('.words').style.transform = `translateY(${-Math.max(0, top - 50)}px)`; }
      if (typed.length >= target.length) finish(); else showLive();
    });
    $('.typer').addEventListener('paste', e => e.preventDefault());
    $('.box').onclick = () => $('.typer').focus();
    $('.restart').onclick = () => { reset(); $('.typer').focus(); };
    reset();
  });
})();

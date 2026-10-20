(function () {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const flat = s => String(s).replace(/\s+/g, ' ').trim();
  const lower = s => flat(s).toLowerCase().replace(/-/g, ' ');

  window.mountTool = (slug, preset) => {
    const el = document.createElement('div'); el.className = 'tool-app'; document.body.appendChild(el);
    Tools.mount(slug, el, preset || {});
    return el;
  };

  window.setField = (el, fid, value) => {
    const wrap = el.querySelector(`[data-fid="${fid}"]`);
    if (!wrap) throw new Error('no field ' + fid);
    const seg = wrap.querySelector('.seg');
    if (seg) { const b = seg.querySelector(`button[data-v="${value}"]`); if (!b) throw new Error(`no option ${value} for ${fid}`); b.click(); return; }
    const c = wrap.querySelector('input, select, textarea');
    if (c.type === 'checkbox') c.checked = !!value; else c.value = value;
    c.dispatchEvent(new Event('input', { bubbles: true }));
    c.dispatchEvent(new Event('change', { bubbles: true }));
  };

  window.calcOut = async (slug, values, opts = {}) => {
    const el = mountTool(slug, opts.preset);
    for (const [k, v] of Object.entries(values)) setField(el, k, v);
    if (opts.button) el.querySelector(opts.button).click();
    await sleep(opts.wait || 30);
    const out = flat((el.querySelector(opts.out || '.calc-out') || el).innerText);
    if (opts.inspect) { const x = await opts.inspect(el); el.remove(); return x; }
    el.remove();
    return out;
  };

  const R = [];
  const ok = (name, pass, got) => R.push({ pass: !!pass, name, got: pass ? '' : String(got).slice(0, 200) });
  const has = (name, got, ...needles) => ok(name, needles.every(n => n instanceof RegExp ? n.test(got) : got.includes(n)), got);
  const words = (name, got, expected) => ok(name, lower(got).includes(lower(expected)), got);

  window.knownAnswers = async () => {
    R.length = 0;

    let o = await calcOut('cgpa-to-percentage', { scale: '10', formula: '9.5', val: 8.2 });
    has('CGPA 8.2 ×9.5 = 77.90%', o, '77.90%');
    o = await calcOut('cgpa-to-percentage', { scale: '10', formula: '10', val: 8.2 });
    has('CGPA 8.2 ×10 = 82.00%', o, '82.00%');
    o = await calcOut('cgpa-to-percentage', { scale: '10', formula: 'vtu', val: 7.5 });
    has('VTU 7.5 = 67.50%', o, '67.50%');
    o = await calcOut('cgpa-to-percentage', { scale: '4', val: 3.5 });
    has('3.5 / 4.0 = 87.50%', o, '87.50%');
    o = await calcOut('cgpa-to-percentage', { scale: '5', val: 4 });
    has('4 / 5.0 = 80.00%', o, '80.00%');
    o = await calcOut('cgpa-to-percentage', { dir: 'p2c', scale: '10', formula: '9.5', val: 76 });
    has('76% ÷ 9.5 = 8.00 CGPA', o, '8.00 / 10');
    o = await calcOut('cgpa-to-percentage', { dir: 'p2c', scale: '4', val: 80 });
    has('80% on 4.0 = 3.20', o, '3.20 / 4');
    o = await calcOut('cgpa-to-percentage', { scale: '4', val: 4.5 });
    has('CGPA above scale is rejected', o, 'cannot be more than 4');

    o = await calcOut('attendance-calculator', { held: 60, att: 42, req: 75 });
    has('42/60 = 70%, attend 12 more', o, '70.00%', '12 more classes');
    o = await calcOut('attendance-calculator', { held: 60, att: 54, req: 75 });
    has('54/60 = 90%, can miss 12', o, '90.00%', '12 classes');
    o = await calcOut('attendance-calculator', { held: 20, att: 14, req: 80 });
    has('14/20 at 80% → attend exactly 10 more', o, '70.00%', '10 more classes');
    o = await calcOut('attendance-calculator', { held: 10, att: 6, req: 70 });
    has('6/10 at 70% → attend 4 more', o, '4 more classes');
    o = await calcOut('attendance-calculator', { held: 60, att: 45, req: 75 });
    has('45/60 is exactly 75% → can miss 0', o, '75.00%', '0 classes');
    o = await calcOut('attendance-calculator', { held: 100, att: 90, req: 70 });
    has('90/100 at 70% → can miss 28', o, '28 classes');
    o = await calcOut('attendance-calculator', { held: 10, att: 12, req: 75 });
    has('attended > held is rejected', o, 'cannot be more than');

    o = await calcOut('zakat-calculator', { goldPrice: 20000, silverPrice: 250, cash: 200000 });
    has('Cash 200,000 above silver nisab → 5,000 zakat', o.replace(/,/g, ''), '5000.00', '153090.00');
    o = await calcOut('zakat-calculator', { goldPrice: 20000, silverPrice: 250, goldG: 10, karat: '22' });
    has('10 g of 22K gold → 4,583.33 zakat', o.replace(/,/g, ''), '4583.33', '183333.33');
    o = await calcOut('zakat-calculator', { goldPrice: 20000, silverPrice: 250, basis: 'gold', cash: 200000 });
    has('Gold nisab 1,749,600 → no zakat on 200,000', o.replace(/,/g, ''), '1749600.00', 'below nisab');
    o = await calcOut('zakat-calculator', { goldPrice: 20000, silverPrice: 250, cash: 300000, debts: 200000 });
    has('Debts reduce wealth below nisab → no zakat', o, 'below nisab');

    const n2w = (num, sys, cur = 'none') => calcOut('number-to-words', { num, sys, cur, case: 'lower' });
    words('1,00,000 = one lakh', await n2w('1,00,000', 'south'), 'one lakh');
    words('1 crore', await n2w('10000000', 'south'), 'one crore');
    words('1250075.50 PKR', await n2w('1250075.50', 'south', 'pkr'), 'twelve lakh fifty thousand seventy five rupees and fifty paisa only');
    words('123,45,67,890 lakh/crore', await n2w('1234567890', 'south'), 'one hundred twenty three crore forty five lakh sixty seven thousand eight hundred ninety');
    words('1,234,567,890 international', await n2w('1234567890', 'intl'), 'one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety');
    words('zero', await n2w('0', 'intl'), 'zero');
    words('USD cents', await n2w('19.99', 'intl', 'usd'), 'nineteen dollars and ninety nine cents only');
    o = await n2w('5.999', 'intl', 'pkr');
    ok('5.999 PKR rounds to six rupees (no "100 paisa")', /six rupees/.test(lower(o)) && !/hundred paisa/.test(lower(o)), o);
    words('100 crore', await n2w('1000000000', 'south'), 'one hundred crore');
    has('invalid input rejected', await n2w('12a', 'intl'), 'valid number');

    try { localStorage.removeItem('tn:gpa'); localStorage.removeItem('tn:cgpa'); } catch (e) { }
    o = await calcOut('gpa-calculator', {}, { out: '.out' });
    has('GPA A/B+/A-/B (3,4,3,3 cr) = 3.49', o, '3.49');
    o = await calcOut('cgpa-calculator', {}, { out: '.out' });
    has('CGPA 3.4×18 + 3.6×17 = 3.50', o, '3.50');
    o = await calcOut('grade-calculator', {}, { out: '.out' });
    has('Weighted grade 82.08%, 76.9% needed on final for 80%', o, '82.08%', '76.9%');

    const ats = await calcOut('ats-resume-checker', {}, {
      inspect: async el => {
        el.querySelector('.rtext').value = `Ali Khan\nali.khan@example.com | +92 300 1234567 | linkedin.com/in/alikhan\n\nSUMMARY\nFrontend developer with 4 years of experience building React applications.\n\nEXPERIENCE\nSoftware Engineer, Acme Corp (2021 – Present)\n- Built a React and TypeScript dashboard used by 20,000 customers\n- Reduced page load time by 40% by optimizing images and caching\n- Led a team of 3 developers to deliver the checkout redesign\n\nEDUCATION\nBS Computer Science, FAST NUCES, 2020\n\nSKILLS\nJavaScript, TypeScript, React, HTML, CSS, Git, REST APIs`;
        el.querySelector('.jd').value = 'We are hiring a Frontend Engineer with strong React, TypeScript and GraphQL skills. Experience with Next.js, Jest testing and AWS is a plus.';
        el.querySelector('.go').click();
        for (let i = 0; i < 40 && !el.querySelector('.out').innerText.trim(); i++) await sleep(50);
        return flat(el.querySelector('.out').innerText);
      },
    });
    has('ATS: matches React/TypeScript, flags GraphQL as missing', ats, /react/i, /typescript/i, /graphql/i);
    ok('ATS: gives a score out of 100', /\b\d{1,3}\b/.test(ats) && /keyword/i.test(ats), ats);

    const hw = await calcOut('text-to-handwriting', {}, {
      inspect: async el => {
        for (let i = 0; i < 60 && !el.querySelector('.pages canvas'); i++) await sleep(100);
        const c = el.querySelector('.pages canvas');
        if (!c) return { pages: 0 };
        const d = c.getContext('2d').getImageData(150, 150, 900, 300).data;
        let ink = 0; for (let i = 0; i < d.length; i += 4) if (d[i + 2] > d[i] + 40 && d[i] < 120) ink++;
        return { pages: el.querySelectorAll('.pages canvas').length, ink };
      },
    });
    ok('Handwriting: renders a page with blue ink text', hw.pages >= 1 && hw.ink > 500, JSON.stringify(hw));

    const cite = await calcOut('citation-generator', {}, { inspect: async el => flat(el.querySelector('.cite').innerText) });
    has('APA website citation format', cite, 'Smith, J. (2024, March 15).', 'How climate change affects ocean currents', 'National Geographic', 'https://www.example.com/article');

    const num = s => s.replace(/,/g, '');
    o = await calcOut('gst-calculator', { amt: 10000, rate: '18', mode: 'add' });
    has('GST: 10,000 + 18% = 11,800', num(o), '11800.00', '1800.00');
    o = await calcOut('gst-calculator', { amt: 11800, rate: '18', mode: 'rm' });
    has('GST: remove 18% from 11,800 = 10,000', num(o), '10000.00', '1800.00');
    o = await calcOut('sip-calculator', { P: 10000, r: 12, y: 10, step: 0 });
    has('SIP 10,000/month, 12%, 10 yrs ≈ 23,23,391', num(o), /232339\d\.\d\d/, '1200000.00');
    o = await calcOut('fuel-cost-calculator', { sys: 'metric', dist: 380, eff: 14, effu: 'kmpl', price: 270 });
    has('Fuel: 380 km at 14 km/l, 270/l = 7,328.57', num(o), '7328.57', '27.14');
    o = await calcOut('fuel-cost-calculator', { sys: 'metric', dist: 380, eff: 7, effu: 'l100', price: 270, round: true, people: 2 });
    has('Fuel: 760 km at 7 l/100 km, 270/l = 14,364, split 2 = 7,182', num(o), '14364.00', '7182.00');
    o = await calcOut('fuel-cost-calculator', { sys: 'us', dist: 300, eff: 30, price: 3.5 });
    has('Fuel: 300 mi at 30 mpg, $3.50 = 35.00', num(o), '35.00', '10 gallons');
    o = await calcOut('salary-calculator', { amt: 25, per: 'hour', hpw: 40, dpw: 5, vac: 0 });
    has('Salary: $25/h × 40 h × 52 = 52,000', num(o), '52000.00', '4333.33');

    const day = 864e5, t0 = new Date(); t0.setHours(0, 0, 0, 0);
    const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const shift = n => { const d = new Date(t0); d.setDate(d.getDate() + n); return d; };
    o = await calcOut('pregnancy-calculator', { method: 'lmp', date: iso(shift(-70)), cycle: 28 });
    const due = shift(210);
    has('Pregnancy: LMP 70 days ago → 10 weeks 0 days, due in 210 days', o, '10 weeks 0 days', '210 days to go', String(due.getDate()), due.toLocaleDateString('en', { month: 'short' }));
    o = await calcOut('ovulation-calculator', { date: iso(shift(-10)), cycle: 28 });
    const ov = shift(4), fmt = d => d.toLocaleDateString('en', { day: 'numeric', month: 'short' });
    has('Ovulation: day 14 of 28-day cycle, fertile window 5 days before', o, `${fmt(shift(-1))} – ${fmt(shift(5))}`, String(ov.getDate()));
    o = await calcOut('age-calculator', { dob: '2000-01-15', at: '2026-10-20' });
    has('Age: 15 Jan 2000 → 20 Oct 2026 = 26 y 9 m 5 d, born Saturday', o, '26 years, 9 months, 5 days', 'Saturday');
    o = await calcOut('age-calculator', { dob: '1990-03-31', at: '2026-04-30' });
    has('Age: 31 Mar 1990 → 30 Apr 2026 = 36 y 0 m 30 d', o, '36 years, 0 months, 30 days');
    o = await calcOut('date-difference-calculator', { a: '2026-01-01', b: '2026-12-31', inc: false });
    has('Days between 1 Jan and 31 Dec 2026 = 364', o, '364 days');
    o = await calcOut('date-difference-calculator', { a: '2024-01-01', b: '2025-01-01', inc: false });
    has('Leap year 2024 has 366 days', o, '366 days');

    o = await calcOut('week-number', { date: '2026-10-20', sys: 'iso' });
    has('ISO week of 20 Oct 2026 = 43 (Mon 19 – Sun 25 Oct)', o, 'Week 43', 'of 2026', 'Mon, Oct 19, 2026', 'Sun, Oct 25, 2026', /Weeks in 2026\s*53/i);
    o = await calcOut('week-number', { date: '2021-01-03', sys: 'iso' });
    has('3 Jan 2021 is ISO week 53 of 2020', o, 'Week 53', 'of 2020');
    o = await calcOut('week-number', { date: '2024-12-30', sys: 'iso' });
    has('30 Dec 2024 is ISO week 1 of 2025', o, 'Week 1 ', 'of 2025');
    o = await calcOut('week-number', { date: '2026-01-04', sys: 'us' });
    has('US: Sunday 4 Jan 2026 starts week 2', o, 'Week 2 ', 'Sun, Jan 4, 2026', 'Sat, Jan 10, 2026');
    o = await calcOut('week-number', { date: '2026-01-01', sys: 'us' });
    has('US: week 1 of 2026 is Thu 1 – Sat 3 Jan', o, 'Week 1 ', 'Thu, Jan 1, 2026', 'Sat, Jan 3, 2026');

    o = await calcOut('day-of-week-calculator', { date: '2000-01-15' });
    has('15 Jan 2000 was a Saturday (third of the month)', o, 'Saturday', 'third Saturday');
    o = await calcOut('day-of-week-calculator', { date: '1969-07-20' });
    has('Moon landing, 20 Jul 1969, was a Sunday', o, 'Sunday');
    o = await calcOut('day-of-week-calculator', { date: '2026-10-31' });
    has('31 Oct 2026 is the fifth (and last) Saturday', o, 'Saturday', 'fifth (and last)');

    o = await calcOut('hijri-date-converter', { dir: 'g2h', date: '2025-03-01', adj: '0' });
    has('1 Mar 2025 = 1 Ramadan 1446 AH', o, '1 Ramadan 1446 AH');
    o = await calcOut('hijri-date-converter', { dir: 'g2h', date: '2024-07-07', adj: '0' });
    has('7 Jul 2024 = 1 Muharram 1446 AH', o, '1 Muharram 1446 AH');
    o = await calcOut('hijri-date-converter', { dir: 'g2h', date: '2025-03-01', adj: '-1' });
    has('Moon-sighting −1 day → still Sha\'ban', o, "Sha'ban 1446 AH");
    o = await calcOut('hijri-date-converter', { dir: 'h2g', hd: 1, hm: '10', hy: 1446, adj: '0' });
    has('1 Shawwal 1446 (Eid) = Sunday 30 Mar 2025', o, 'Sunday, March 30, 2025');
    o = await calcOut('hijri-date-converter', { dir: 'h2g', hd: 1, hm: '9', hy: 1447, adj: '0' });
    has('1 Ramadan 1447 = 18 Feb 2026', o, 'February 18, 2026');
    o = await calcOut('hijri-date-converter', { dir: 'h2g', hd: 30, hm: '9', hy: 1446, adj: '0' });
    has('30 Ramadan 1446 does not exist (29-day month)', o, 'does not have a day 30');

    const mil = t => calcOut('military-time-converter', { t });
    has('1430 → 2:30 PM, fourteen thirty hours', await mil('1430'), '2:30 PM', 'fourteen thirty hours');
    has('0000 → 12:00 AM', await mil('0000'), '12:00 AM', 'zero zero hundred hours');
    has('0905 → 9:05 AM, zero nine zero five', await mil('0905'), '9:05 AM', 'zero nine zero five hours');
    has('1200 → 12:00 PM', await mil('1200'), '12:00 PM');
    has('2359 → 11:59 PM', await mil('23:59'), '11:59 PM', 'twenty-three fifty-nine hours');
    has('12:15 am → 0015 hours', await mil('12:15 am'), '0015 hours');
    has('2:30 PM → 1430 hours', await mil('2:30 PM'), '1430 hours', '14:30');
    has('12 PM → 1200 hours', await mil('12 pm'), '1200 hours');
    has('2400 → midnight', await mil('2400'), '12:00 AM', '2400');
    has('2500 rejected', await mil('2500'), 'between 00 and 23');
    has('13:00 PM rejected', await mil('13:00 PM'), 'between 1 and 12');

    o = await calcOut('hours-to-decimal', { dir: 't2d', h: 7, m: 45, s: 0, rate: 20 });
    has('7 h 45 min = 7.75 h, pay at 20/h = 155.00', o, '7.75', '155.00');
    o = await calcOut('hours-to-decimal', { dir: 't2d', h: 1, m: 20, s: 0 });
    has('1 h 20 min = 1.3333 h', o, '1.3333');
    o = await calcOut('hours-to-decimal', { dir: 'd2t', dec: 8.6 });
    has('8.6 h = 8 h 36 min', o, '8 h 36 min');
    o = await calcOut('hours-to-decimal', { dir: 'd2t', dec: 0.1 });
    has('0.1 h = 6 min', o, '0 h 6 min');

    o = await calcOut('words-to-minutes', { dir: 'w2m', words: 1300, pace: '130' });
    has('1,300 words at 130 wpm = 10 min; reading 5 min 28 s', o, '10 min 0 s', '5 min 28 s');
    o = await calcOut('words-to-minutes', { dir: 'm2w', mins: 5, pace: '130' });
    has('5-minute speech = 650 words', o, '650 words');
    o = await calcOut('words-to-minutes', { dir: 'w2m', words: 999, text: Array(260).fill('word').join(' '), pace: '130' });
    has('Pasted text is counted (260 words → 2 min 0 s)', o, '260 words', '2 min 0 s');

    const Z = String.fromCharCode(0x200B), HF = String.fromCharCode(0x3164);
    const inv = await calcOut('invisible-character', {}, {
      inspect: async el => {
        const box = el.querySelector('.main-box').textContent;
        const ta = el.querySelector('.det'); ta.value = 'a' + Z + 'b' + HF + 'c'; ta.dispatchEvent(new Event('input'));
        const found = flat(el.querySelector('.det-out').innerText);
        el.querySelector('.clean').click();
        return { box: box.charCodeAt(0), found, cleaned: ta.value };
      },
    });
    ok('Invisible: main character is U+3164', inv.box === 0x3164, inv.box);
    has('Invisible: detector finds 2 hidden characters', inv.found, 'Found 2', 'Zero Width Space', 'Hangul Filler');
    ok('Invisible: remover leaves "abc"', inv.cleaned === 'abc', JSON.stringify(inv.cleaned));

    const ws = await calcOut('white-screen', {}, {
      inspect: async el => {
        el.querySelector('.go').click(); await sleep(50);
        const ov = document.querySelector('.screen-overlay'); const first = ov && getComputedStyle(ov).backgroundColor;
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })); await sleep(20);
        const second = ov && getComputedStyle(ov).backgroundColor;
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); await sleep(50);
        if (document.fullscreenElement) await document.exitFullscreen().catch(() => { });
        return { first, second, closed: !document.querySelector('.screen-overlay') };
      },
    });
    ok('White screen: full-screen overlay is white, → switches to black, Esc closes', ws.first === 'rgb(255, 255, 255)' && ws.second === 'rgb(0, 0, 0)' && ws.closed, JSON.stringify(ws));
    const bs = await calcOut('white-screen', {}, { preset: { color: '#000000' }, inspect: async el => getComputedStyle(el.querySelector('.screen-prev')).backgroundColor });
    ok('Black screen preset starts black', bs === 'rgb(0, 0, 0)', bs);

    const sp = await calcOut('spacebar-counter', {}, {
      inspect: async el => {
        el.querySelector('.dur .seg button[data-v="0"], .dur button[data-v="0"]').click();
        const press = (repeat = false, target = document.body) => target.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', repeat, bubbles: true, cancelable: true }));
        for (let i = 0; i < 5; i++) press();
        press(true);
        const inp = document.createElement('input'); document.body.append(inp); press(false, inp); inp.remove();
        await sleep(80);
        return flat(el.querySelector('.live').innerText);
      },
    });
    has('Spacebar: counts 5 presses, ignores key-repeat and typing in inputs', sp, /PRESSES\s*5\b/i);

    try { localStorage.removeItem('tn:tally'); } catch (e) { }
    const tl = await calcOut('tally-counter', {}, {
      inspect: async el => {
        const big = () => el.querySelector('.big').textContent;
        el.querySelector('.inc').click(); el.querySelector('.inc').click(); el.querySelector('.inc').click(); el.querySelector('.dec').click();
        const a = big();
        document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, cancelable: true }));
        const b = big();
        const st = el.querySelector('.step'); st.value = 5; st.dispatchEvent(new Event('input', { bubbles: true }));
        el.querySelector('.inc').click(); const c = big();
        el.querySelector('.add').click(); const d = big(), total = flat(el.querySelector('.total').innerText);
        return { a, b, c, d, total };
      },
    });
    ok('Tally: +3 −1 = 2, ↑ = 3, step 5 → 8, new counter starts at 0, total 8', tl.a === '2' && tl.b === '3' && tl.c === '8' && tl.d === '0' && /8$/.test(tl.total), JSON.stringify(tl));
    try { localStorage.removeItem('tn:tally'); } catch (e) { }

    const qb = async (lat, lon) => calcOut('qibla-direction', {}, {
      inspect: async el => {
        const a = el.querySelector('.lat'), b = el.querySelector('.lon');
        a.value = lat; b.value = lon; a.dispatchEvent(new Event('input', { bubbles: true }));
        return flat(el.querySelector('.out').innerText);
      },
    });
    has('Qibla New York = 58.5° NE', await qb(40.7128, -74.006), '58.5°');
    has('Qibla London ≈ 119.0° ESE', await qb(51.5074, -0.1278), '119.0°', 'ESE');
    has('Qibla Jakarta ≈ 295.1–295.2° WNW', await qb(-6.2088, 106.8456), /295\.[12]°/, 'WNW');
    o = await qb(24.8607, 67.0011);
    has('Qibla Karachi ≈ 267–268° W, distance ≈ 2,800 km', o, /26[78]\.\d°/, /\b2,[78]\d\d km/);
    has('Invalid latitude rejected', await qb(95, 10), 'valid latitude');
    try { localStorage.removeItem('tn:qibla'); } catch (e) { }

    const fails = R.filter(r => !r.pass);
    return { passed: R.length - fails.length, total: R.length, fails };
  };
  'known answers ready';
})();

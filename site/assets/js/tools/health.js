(function () {
  const { fmt } = UI;
  const sysField = { id: 'sys', label: 'Units', type: 'seg', value: 'metric', options: [['metric', 'Metric (cm, kg)'], ['us', 'Imperial (ft, lb)']], full: true };
  const bodyFields = (weight = true) => [
    sysField,
    { id: 'cm', label: 'Height', type: 'number', value: 170, unit: 'cm', show: v => v.sys === 'metric' },
    { id: 'ft', label: 'Height (feet)', type: 'number', value: 5, unit: 'ft', show: v => v.sys === 'us' },
    { id: 'in', label: 'Height (inches)', type: 'number', value: 7, unit: 'in', show: v => v.sys === 'us' },
    ...(weight ? [{ id: 'kg', label: 'Weight', type: 'number', value: 68, unit: 'kg', show: v => v.sys === 'metric' }, { id: 'lb', label: 'Weight', type: 'number', value: 150, unit: 'lb', show: v => v.sys === 'us' }] : []),
  ];
  const body = v => ({ cm: v.sys === 'us' ? ((v.ft || 0) * 12 + (v.in || 0)) * 2.54 : v.cm, kg: v.sys === 'us' ? v.lb * 0.45359237 : v.kg });
  const wt = (kg, sys) => sys === 'us' ? `${fmt(kg / 0.45359237, 1)} lb` : `${fmt(kg, 1)} kg`;
  const person = [{ id: 'age', label: 'Age', type: 'number', value: 28, unit: 'yrs' }, { id: 'sex', label: 'Gender', type: 'seg', value: 'm', options: [['m', 'Male'], ['f', 'Female']] }];
  const mifflin = (v, b) => 10 * b.kg + 6.25 * b.cm - 5 * v.age + (v.sex === 'm' ? 5 : -161);
  const dayFmt = d => d.toLocaleDateString('en', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);

  Tools.define('bmi-calculator', root => {
    UI.calc(root, {
      fields: [...bodyFields(), { id: 'asian', label: 'Use Asian BMI cut-offs (South & East Asian)', type: 'checkbox', value: false, full: true }],
      compute(v) {
        const b = body(v); if (!(b.cm > 50) || !(b.kg > 10)) return null;
        const h = b.cm / 100, bmi = b.kg / (h * h);
        const cut = v.asian ? [18.5, 23, 27.5] : [18.5, 25, 30];
        const [cat, col] = bmi < cut[0] ? ['Underweight', '#3b82f6'] : bmi < cut[1] ? ['Healthy weight', '#16a34a'] : bmi < cut[2] ? ['Overweight', '#f59e0b'] : ['Obese', '#dc2626'];
        const lo = cut[0] * h * h, hi = (cut[1] - 0.1) * h * h, pos = UI.clamp((bmi - 15) / 25 * 100, 0, 100);
        const scale = `<div class="mt"><div style="position:relative;height:16px;border-radius:99px;background:linear-gradient(90deg,#3b82f6 0 ${(cut[0] - 15) / 25 * 100}%,#16a34a 0 ${(cut[1] - 15) / 25 * 100}%,#f59e0b 0 ${(cut[2] - 15) / 25 * 100}%,#dc2626 0)"><span style="position:absolute;left:${pos}%;top:-6px;width:4px;height:28px;background:var(--text);border-radius:2px;transform:translateX(-50%)"></span></div><div class="row small muted" style="justify-content:space-between;margin-top:4px"><span>15</span><span>${cut[0]}</span><span>${cut[1]}</span><span>${cut[2]}</span><span>40</span></div></div>`;
        return { results: [{ k: 'Your BMI', v: bmi.toFixed(1), main: true, s: cat }, { k: 'Category', v: `<span style="color:${col}">${cat}</span>` }, { k: 'Healthy weight for your height', v: `${wt(lo, v.sys)} – ${wt(hi, v.sys)}` }, { k: 'BMI Prime', v: (bmi / 25).toFixed(2) }, { k: bmi > cut[1] ? 'To reach a healthy BMI, lose' : bmi < cut[0] ? 'To reach a healthy BMI, gain' : 'Status', v: bmi > cut[1] ? wt(b.kg - hi, v.sys) : bmi < cut[0] ? wt(lo - b.kg, v.sys) : '👍 In range' }],
          html: scale, note: 'BMI is a screening tool and does not measure body fat directly. Athletes and older adults may need other measures.' };
      },
    });
  });

  const ACTIVITY = [['1.2', 'Sedentary (little or no exercise)'], ['1.375', 'Light (exercise 1–3 days/week)'], ['1.55', 'Moderate (exercise 3–5 days/week)'], ['1.725', 'Active (exercise 6–7 days/week)'], ['1.9', 'Very active (hard exercise or physical job)']];
  Tools.define('calorie-calculator', root => {
    UI.calc(root, {
      fields: [...person, ...bodyFields(), { id: 'act', label: 'Activity level', type: 'select', value: '1.55', options: ACTIVITY, cls: 'grow' }],
      compute(v) {
        const b = body(v); if (!(v.age > 0) || !(b.cm > 50) || !(b.kg > 10)) return null;
        const bmr = mifflin(v, b), tdee = bmr * +v.act;
        const goals = [['Extreme weight loss (1 kg/week)', -1000], ['Weight loss (0.5 kg/week)', -500], ['Mild weight loss (0.25 kg/week)', -250], ['Maintain weight', 0], ['Mild weight gain (0.25 kg/week)', 250], ['Weight gain (0.5 kg/week)', 500]];
        return { results: [{ k: 'Calories to maintain weight', v: fmt(tdee, 0) + ' kcal/day', main: true }, { k: 'BMR (at rest)', v: fmt(bmr, 0) + ' kcal' }, { k: 'To lose 0.5 kg/week', v: fmt(Math.max(v.sex === 'm' ? 1500 : 1200, tdee - 500), 0) + ' kcal' }, { k: 'To gain 0.5 kg/week', v: fmt(tdee + 500, 0) + ' kcal' }],
          html: `<div class="table-wrap mt"><table class="table"><thead><tr><th>Goal</th><th class="num">Calories / day</th></tr></thead><tbody>${goals.map(([g, d]) => `<tr><td>${g}</td><td class="num">${fmt(tdee + d, 0)}${tdee + d < (v.sex === 'm' ? 1500 : 1200) ? ' ⚠️' : ''}</td></tr>`).join('')}</tbody></table></div>`,
          note: 'Uses the Mifflin-St Jeor equation. ⚠️ marks intakes below the commonly advised minimum — consult a doctor before very low-calorie diets.' };
      },
    });
  });

  Tools.define('bmr-calculator', root => {
    UI.calc(root, {
      fields: [...person, ...bodyFields(), { id: 'bf', label: 'Body fat % (optional, for Katch-McArdle)', type: 'number', value: '', unit: '%' }],
      compute(v) {
        const b = body(v); if (!(v.age > 0) || !(b.cm > 50) || !(b.kg > 10)) return null;
        const mif = mifflin(v, b);
        const hb = v.sex === 'm' ? 88.362 + 13.397 * b.kg + 4.799 * b.cm - 5.677 * v.age : 447.593 + 9.247 * b.kg + 3.098 * b.cm - 4.330 * v.age;
        const km = v.bf > 0 && v.bf < 70 ? 370 + 21.6 * b.kg * (1 - v.bf / 100) : null;
        return { results: [{ k: 'Your BMR (Mifflin-St Jeor)', v: fmt(mif, 0) + ' kcal/day', main: true, s: 'Calories your body burns at complete rest' }, { k: 'Harris-Benedict', v: fmt(hb, 0) + ' kcal' }, km && { k: 'Katch-McArdle', v: fmt(km, 0) + ' kcal' }],
          html: `<div class="table-wrap mt"><table class="table"><thead><tr><th>Activity level</th><th class="num">Daily calories</th></tr></thead><tbody>${ACTIVITY.map(([f, l]) => `<tr><td>${l}</td><td class="num">${fmt(mif * +f, 0)}</td></tr>`).join('')}</tbody></table></div>` };
      },
    });
  });

  Tools.define('body-fat-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'sex', label: 'Gender', type: 'seg', value: 'm', options: [['m', 'Male'], ['f', 'Female']] }, { id: 'u', label: 'Measurements in', type: 'seg', value: 'cm', options: [['cm', 'cm / kg'], ['in', 'inches / lb']] },
        { id: 'h', label: 'Height', type: 'number', value: 178 }, { id: 'neck', label: 'Neck', type: 'number', value: 38 }, { id: 'waist', label: 'Waist (at navel)', type: 'number', value: 86 },
        { id: 'hip', label: 'Hips (widest point)', type: 'number', value: 97, show: v => v.sex === 'f' }, { id: 'w', label: 'Weight (optional)', type: 'number', value: 75 }],
      compute(v) {
        const k = v.u === 'in' ? 2.54 : 1, h = v.h * k, n = v.neck * k, wa = v.waist * k, hi = (v.hip || 0) * k;
        if (!(h > 0 && n > 0 && wa > n)) return null;
        const bf = v.sex === 'm' ? 495 / (1.0324 - 0.19077 * Math.log10(wa - n) + 0.15456 * Math.log10(h)) - 450 : 495 / (1.29579 - 0.35004 * Math.log10(wa + hi - n) + 0.22100 * Math.log10(h)) - 450;
        if (!isFinite(bf) || bf <= 0) return '<div class="notice error">Please check your measurements.</div>';
        const cats = v.sex === 'm' ? [[6, 'Essential fat'], [14, 'Athletes'], [18, 'Fitness'], [25, 'Average'], [99, 'Obese']] : [[14, 'Essential fat'], [21, 'Athletes'], [25, 'Fitness'], [32, 'Average'], [99, 'Obese']];
        const cat = cats.find(([lim]) => bf < lim)[1], kg = v.w > 0 ? v.w * (v.u === 'in' ? 0.45359237 : 1) : 0;
        return { results: [{ k: 'Body fat', v: bf.toFixed(1) + '%', main: true, s: cat }, kg && { k: 'Fat mass', v: wt(kg * bf / 100, v.u === 'in' ? 'us' : 'metric') }, kg && { k: 'Lean mass', v: wt(kg * (1 - bf / 100), v.u === 'in' ? 'us' : 'metric') }], note: 'U.S. Navy circumference method. Measure with a soft tape, relaxed, without sucking in. Typical accuracy is ±3–4%.' };
      },
    });
  });

  Tools.define('ideal-weight-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'sex', label: 'Gender', type: 'seg', value: 'm', options: [['m', 'Male'], ['f', 'Female']] }, ...bodyFields(false)],
      compute(v) {
        const b = body(v); if (!(b.cm > 120)) return null;
        const over = Math.max(0, b.cm / 2.54 - 60), M = v.sex === 'm';
        const f = [['Robinson (1983)', M ? 52 + 1.9 * over : 49 + 1.7 * over], ['Miller (1983)', M ? 56.2 + 1.41 * over : 53.1 + 1.36 * over], ['Devine (1974)', M ? 50 + 2.3 * over : 45.5 + 2.3 * over], ['Hamwi (1964)', M ? 48 + 2.7 * over : 45.5 + 2.2 * over]];
        const avg = f.reduce((a, x) => a + x[1], 0) / f.length, h = b.cm / 100;
        return { results: [{ k: 'Ideal weight (average)', v: wt(avg, v.sys), main: true }, ...f.map(([k, x]) => ({ k, v: wt(x, v.sys) })), { k: 'Healthy BMI range', v: `${wt(18.5 * h * h, v.sys)} – ${wt(24.9 * h * h, v.sys)}` }], note: 'Formulas are designed for adults over 5 ft (152 cm). Body frame and muscle mass also matter.' };
      },
    });
  });

  Tools.define('pregnancy-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'method', label: 'Calculate from', type: 'seg', value: 'lmp', options: [['lmp', 'Last period'], ['conc', 'Conception date']] },
        { id: 'date', label: 'First day of last period', type: 'date', value: iso(addDays(today(), -70)), show: v => v.method === 'lmp' },
        { id: 'cdate', label: 'Conception date', type: 'date', value: iso(addDays(today(), -56)), show: v => v.method === 'conc' },
        { id: 'cycle', label: 'Average cycle length', type: 'number', value: 28, unit: 'days', show: v => v.method === 'lmp' }],
      compute(v) {
        let lmp;
        if (v.method === 'lmp') { if (!v.date) return null; lmp = addDays(new Date(v.date + 'T00:00'), (v.cycle || 28) - 28); }
        else { if (!v.cdate) return null; lmp = addDays(new Date(v.cdate + 'T00:00'), -14); }
        const due = addDays(lmp, 280), ga = Math.floor((today() - lmp) / 864e5);
        if (ga < 0) return '<div class="notice error">The date is in the future.</div>';
        if (ga > 300) return '<div class="notice warn">This date is more than 42 weeks ago. Please check the date.</div>';
        const w = Math.floor(ga / 7), d = ga % 7, tri = w < 13 ? 'First trimester' : w < 27 ? 'Second trimester' : 'Third trimester';
        const ms = [[12, 'End of first trimester'], [20, 'Anatomy scan (18–22 weeks)'], [24, 'Viability milestone'], [27, 'Third trimester begins'], [37, 'Early term'], [40, 'Due date']];
        return { results: [{ k: 'Estimated due date', v: dayFmt(due), main: true, s: `${Math.max(0, 280 - ga)} days to go` }, { k: 'You are', v: `${w} weeks ${d} days`, s: tri }, { k: 'Conception (approx.)', v: dayFmt(addDays(lmp, 14)) }],
          html: `<div class="progress mt"><div style="width:${Math.min(100, ga / 280 * 100)}%"></div></div><div class="table-wrap mt"><table class="table"><thead><tr><th>Milestone</th><th class="num">Week</th><th class="num">Date</th></tr></thead><tbody>${ms.map(([wk, l]) => `<tr><td>${wk <= w ? '✅ ' : ''}${l}</td><td class="num">${wk}</td><td class="num">${dayFmt(addDays(lmp, wk * 7))}</td></tr>`).join('')}</tbody></table></div>`,
          note: 'Only about 4% of babies arrive exactly on their due date. Your doctor or midwife may adjust it after an ultrasound.' };
      },
    });
  });

  Tools.define('ovulation-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'date', label: 'First day of last period', type: 'date', value: iso(addDays(today(), -10)) }, { id: 'cycle', label: 'Cycle length', type: 'number', value: 28, min: 20, max: 45, unit: 'days' }],
      compute(v) {
        if (!v.date || !(v.cycle >= 20 && v.cycle <= 45)) return null;
        const start = new Date(v.date + 'T00:00'), rows = [];
        for (let i = 0; i < 6; i++) { const p = addDays(start, i * v.cycle), ov = addDays(p, v.cycle - 14); rows.push([p, addDays(ov, -5), ov, addDays(ov, 1), addDays(p, v.cycle)]); }
        const f = d => d.toLocaleDateString('en', { day: 'numeric', month: 'short' });
        const [, fs, ov, fe, np] = rows[0];
        return { results: [{ k: 'Next ovulation', v: dayFmt(ov), main: true, s: `Fertile window: ${f(fs)} – ${f(fe)}` }, { k: 'Next period', v: dayFmt(np) }, { k: 'Pregnancy test from', v: dayFmt(addDays(np, 1)) }],
          html: `<div class="table-wrap mt"><table class="table"><thead><tr><th>Cycle</th><th>Period starts</th><th>Fertile window</th><th>Ovulation</th></tr></thead><tbody>${rows.map((r, i) => `<tr><td>${i + 1}</td><td>${f(r[0])}</td><td>${f(r[1])} – ${f(r[3])}</td><td><strong>${f(r[2])}</strong></td></tr>`).join('')}</tbody></table></div>`,
          note: 'Predictions assume regular cycles. Ovulation tests and tracking basal body temperature give more accurate results. This is not a method of contraception.' };
      },
    });
  });

  Tools.define('water-intake-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'sys', label: 'Units', type: 'seg', value: 'metric', options: [['metric', 'kg / litres'], ['us', 'lb / ounces']] }, { id: 'w', label: 'Body weight', type: 'number', value: 70 }, { id: 'ex', label: 'Exercise per day', type: 'number', value: 30, unit: 'min' }, { id: 'hot', label: 'Hot or humid climate', type: 'checkbox', value: false }],
      compute(v) {
        if (!(v.w > 0)) return null;
        const kg = v.sys === 'us' ? v.w * 0.45359237 : v.w, ml = kg * 35 + (v.ex || 0) * 12 + (v.hot ? 500 : 0);
        return { results: [{ k: 'Drink about', v: v.sys === 'us' ? `${fmt(ml / 29.5735, 0)} oz` : `${(ml / 1000).toFixed(1)} litres`, main: true, s: 'per day, from all drinks and food' }, { k: 'Glasses (250 ml)', v: Math.ceil(ml / 250) }, { k: 'Bottles (500 ml)', v: (ml / 500).toFixed(1) }], note: 'General guidance for healthy adults. Needs vary with health conditions, pregnancy and medication — ask your doctor if unsure.' };
      },
    });
  });

  Tools.define('sleep-calculator', root => {
    UI.calc(root, {
      fields: [{ id: 'mode', label: 'I want to', type: 'seg', value: 'wake', options: [['wake', 'Wake up at…'], ['bed', 'Go to bed at…'], ['now', 'Sleep now']], full: true }, { id: 't', label: 'Time', type: 'time', value: '07:00', show: v => v.mode !== 'now' }, { id: 'fall', label: 'Time to fall asleep', type: 'number', value: 15, unit: 'min' }],
      compute(v) {
        const base = new Date();
        if (v.mode !== 'now') { if (!v.t) return null; const [h, mi] = v.t.split(':').map(Number); base.setHours(h, mi, 0, 0); }
        const fall = v.fall || 0, fmtT = d => d.toLocaleTimeString('en', { hour: 'numeric', minute: '2-digit' });
        const cyc = v.mode === 'wake' ? [6, 5, 4, 3] : [3, 4, 5, 6];
        const times = cyc.map(c => ({ c, d: new Date(base.getTime() + (v.mode === 'wake' ? -1 : 1) * (c * 90 + fall) * 6e4) }));
        const title = v.mode === 'wake' ? `To wake up at ${fmtT(base)}, go to bed at one of these times:` : `If you ${v.mode === 'now' ? 'go to bed now' : 'go to bed at ' + fmtT(base)}, try to wake up at:`;
        return `<p><strong>${title}</strong></p><div class="results">${times.map(({ c, d }) => `<div class="result${c >= 5 ? ' main' : ''}" style="grid-column:auto"><div class="k">${c} cycles · ${c * 1.5} h${c >= 5 ? ' · recommended' : ''}</div><div class="v">${fmtT(d)}</div></div>`).join('')}</div><p class="small muted mt">A sleep cycle lasts about 90 minutes. Waking up between cycles helps you feel refreshed. Adults need 7–9 hours (5–6 cycles).</p>`;
      },
    });
  });
})();

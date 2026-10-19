(function () {
  const { esc, fmt } = UI;
  const m = n => fmt(n, 2, 2);
  const pie = (a, b, la, lb) => {
    const p = a + b > 0 ? a / (a + b) * 100 : 0;
    return `<div class="row mt" style="align-items:center;gap:18px"><div style="width:120px;height:120px;border-radius:50%;background:conic-gradient(var(--primary) 0 ${p}%, #f59e0b ${p}% 100%)"></div>
      <div class="stack small" style="gap:6px"><span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:var(--primary)"></span> ${la}: <strong>${p.toFixed(1)}%</strong></span><span><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#f59e0b"></span> ${lb}: <strong>${(100 - p).toFixed(1)}%</strong></span></div></div>`;
  };
  const table = (head, rows) => `<div class="table-wrap mt"><table class="table"><thead><tr>${head.map((h, i) => `<th class="${i ? 'num' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td class="${i ? 'num' : ''}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const emi = (P, annual, n) => { const r = annual / 1200; return r ? P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) : P / n; };

  Tools.define('loan-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'P', label: 'Loan amount', type: 'number', value: 1000000, min: 0 },
        { id: 'rate', label: 'Interest rate (yearly)', type: 'number', value: 12, unit: '%' },
        { id: 'term', label: 'Loan tenure', type: 'number', value: 5, min: 0 },
        { id: 'unit', label: 'Tenure in', type: 'seg', value: 'y', options: [['y', 'Years'], ['m', 'Months']] },
        { id: 'sched', label: 'Schedule', type: 'select', value: 'y', options: [['y', 'Yearly'], ['m', 'Monthly']] },
      ],
      compute(v) {
        const n = Math.round(v.unit === 'y' ? v.term * 12 : v.term);
        if (!(v.P > 0) || !(n > 0) || !(v.rate >= 0)) return null;
        const e = emi(v.P, v.rate, n), total = e * n, interest = total - v.P;
        let bal = v.P; const rows = []; let yp = 0, yi = 0;
        for (let k = 1; k <= n; k++) {
          const i = bal * v.rate / 1200, p = e - i; bal = Math.max(0, bal - p); yp += p; yi += i;
          if (v.sched === 'm') rows.push([`Month ${k}`, m(e), m(p), m(i), m(bal)]);
          else if (k % 12 === 0 || k === n) { rows.push([`Year ${Math.ceil(k / 12)}`, m(yp + yi), m(yp), m(yi), m(bal)]); yp = yi = 0; }
        }
        return { results: [{ k: 'Monthly EMI', v: m(e), main: true, s: `for ${n} months` }, { k: 'Total interest', v: m(interest) }, { k: 'Total payment', v: m(total) }, { k: 'Principal', v: m(v.P) }],
          html: pie(v.P, interest, 'Principal', 'Interest') + table(['Period', 'Payment', 'Principal', 'Interest', 'Balance'], rows) };
      },
    });
  });

  Tools.define('mortgage-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'price', label: 'Home price', type: 'number', value: 400000 },
        { id: 'down', label: 'Down payment', type: 'number', value: 20, unit: '%' },
        { id: 'rate', label: 'Interest rate', type: 'number', value: 6.5, unit: '%' },
        { id: 'years', label: 'Loan term', type: 'select', value: '30', options: [['30', '30 years'], ['25', '25 years'], ['20', '20 years'], ['15', '15 years'], ['10', '10 years']] },
        { id: 'tax', label: 'Property tax (yearly)', type: 'number', value: 1.1, unit: '%' },
        { id: 'ins', label: 'Home insurance (yearly)', type: 'number', value: 1500 },
        { id: 'hoa', label: 'HOA fees (monthly)', type: 'number', value: 0 },
      ],
      compute(v) {
        if (!(v.price > 0) || !(v.rate >= 0)) return null;
        const loan = v.price * (1 - (v.down || 0) / 100), n = +v.years * 12, pi = emi(loan, v.rate, n);
        const tax = v.price * (v.tax || 0) / 100 / 12, ins = (v.ins || 0) / 12, hoa = v.hoa || 0, total = pi + tax + ins + hoa;
        const end = new Date(); end.setMonth(end.getMonth() + n);
        return { results: [{ k: 'Monthly payment', v: m(total), main: true, s: `Paid off by ${end.toLocaleDateString('en', { month: 'long', year: 'numeric' })}` }, { k: 'Principal & interest', v: m(pi) }, { k: 'Property tax', v: m(tax) }, { k: 'Insurance', v: m(ins) }, { k: 'HOA', v: m(hoa) }, { k: 'Loan amount', v: m(loan) }, { k: 'Down payment', v: m(v.price - loan) }, { k: 'Total interest', v: m(pi * n - loan) }],
          html: pie(loan, pi * n - loan, 'Principal', 'Interest') };
      },
    });
  });

  Tools.define('compound-interest-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'P', label: 'Initial amount', type: 'number', value: 10000 },
        { id: 'pm', label: 'Monthly contribution', type: 'number', value: 500 },
        { id: 'rate', label: 'Annual interest rate', type: 'number', value: 8, unit: '%' },
        { id: 'years', label: 'Years', type: 'number', value: 10 },
        { id: 'n', label: 'Compounding', type: 'select', value: '12', options: [['1', 'Yearly'], ['2', 'Half-yearly'], ['4', 'Quarterly'], ['12', 'Monthly'], ['365', 'Daily']] },
      ],
      compute(v) {
        if (!(v.years > 0) || !(v.rate >= 0)) return null;
        const mr = Math.pow(1 + v.rate / 100 / +v.n, +v.n / 12) - 1;
        let bal = v.P || 0, dep = v.P || 0; const rows = [];
        for (let k = 1; k <= Math.round(v.years * 12); k++) { bal = bal * (1 + mr) + (v.pm || 0); dep += v.pm || 0; if (k % 12 === 0) rows.push([`Year ${k / 12}`, m(dep), m(bal - dep), m(bal)]); }
        return { results: [{ k: 'Future value', v: m(bal), main: true, s: `after ${v.years} years` }, { k: 'Total deposits', v: m(dep) }, { k: 'Interest earned', v: m(bal - dep) }, { k: 'Effective annual rate', v: ((Math.pow(1 + mr, 12) - 1) * 100).toFixed(3) + '%' }],
          html: pie(dep, bal - dep, 'Deposits', 'Interest') + table(['Year', 'Total deposits', 'Total interest', 'Balance'], rows) };
      },
    });
  });

  Tools.define('simple-interest-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'P', label: 'Principal amount', type: 'number', value: 50000 },
        { id: 'R', label: 'Rate of interest (yearly)', type: 'number', value: 7.5, unit: '%' },
        { id: 'T', label: 'Time', type: 'number', value: 3 },
        { id: 'u', label: 'Time in', type: 'seg', value: 'y', options: [['y', 'Years'], ['m', 'Months'], ['d', 'Days']] },
      ],
      compute(v) {
        if (!(v.P >= 0) || !(v.R >= 0) || !(v.T >= 0)) return null;
        const t = v.u === 'y' ? v.T : v.u === 'm' ? v.T / 12 : v.T / 365, I = v.P * v.R * t / 100;
        return { results: [{ k: 'Total amount', v: m(v.P + I), main: true }, { k: 'Simple interest', v: m(I) }, { k: 'Principal', v: m(v.P) }], note: 'Formula: Interest = P × R × T ÷ 100' };
      },
    });
  });

  Tools.define('sip-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'P', label: 'Monthly investment', type: 'number', value: 10000 },
        { id: 'r', label: 'Expected return (yearly)', type: 'number', value: 12, unit: '%' },
        { id: 'y', label: 'Time period', type: 'number', value: 10, unit: 'yrs' },
        { id: 'step', label: 'Annual step-up (optional)', type: 'number', value: 0, unit: '%' },
      ],
      compute(v) {
        if (!(v.P > 0) || !(v.y > 0) || !(v.r >= 0)) return null;
        const i = v.r / 1200; let bal = 0, inv = 0, amt = v.P; const rows = [];
        for (let k = 1; k <= Math.round(v.y * 12); k++) { bal = (bal + amt) * (1 + i); inv += amt; if (k % 12 === 0) { rows.push([`Year ${k / 12}`, m(inv), m(bal - inv), m(bal)]); amt *= 1 + (v.step || 0) / 100; } }
        return { results: [{ k: 'Total value', v: m(bal), main: true, s: `after ${v.y} years` }, { k: 'Invested amount', v: m(inv) }, { k: 'Estimated returns', v: m(bal - inv) }],
          html: pie(inv, bal - inv, 'Invested', 'Returns') + table(['Year', 'Invested', 'Returns', 'Value'], rows), note: 'Mutual fund returns are not guaranteed. This is an estimate based on a constant rate of return.' };
      },
    });
  });

  Tools.define('discount-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'price', label: 'Original price', type: 'number', value: 2500 },
        { id: 'd', label: 'Discount', type: 'number', value: 30, unit: '%' },
        { id: 'd2', label: 'Extra discount (optional)', type: 'number', value: '', unit: '%' },
        { id: 'tax', label: 'Sales tax (optional)', type: 'number', value: '', unit: '%' },
      ],
      compute(v) {
        if (!(v.price >= 0) || !(v.d >= 0)) return null;
        const a = v.price * (1 - v.d / 100), b = a * (1 - (v.d2 || 0) / 100), f = b * (1 + (v.tax || 0) / 100);
        const eff = (1 - b / v.price) * 100;
        return { results: [{ k: 'Final price', v: m(f), main: true, s: v.tax ? 'including tax' : '' }, { k: 'You save', v: m(v.price - b) }, { k: 'Total discount', v: eff.toFixed(2) + '%' }, v.tax && { k: 'Tax', v: m(f - b) }] };
      },
    });
  });

  Tools.define('tip-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'bill', label: 'Bill amount', type: 'number', value: 85 },
        { id: 'pct', label: 'Tip', type: 'seg', value: '15', options: [['10', '10%'], ['15', '15%'], ['18', '18%'], ['20', '20%'], ['25', '25%'], ['c', 'Custom']] },
        { id: 'custom', label: 'Custom tip', type: 'number', value: 12, unit: '%', show: v => v.pct === 'c' },
        { id: 'people', label: 'Number of people', type: 'number', value: 2, min: 1 },
        { id: 'round', label: 'Round up total per person', type: 'checkbox', value: false },
      ],
      compute(v) {
        if (!(v.bill > 0)) return null;
        const p = v.pct === 'c' ? v.custom || 0 : +v.pct, n = Math.max(1, Math.round(v.people || 1)), tip = v.bill * p / 100;
        let per = (v.bill + tip) / n; if (v.round) per = Math.ceil(per);
        return { results: [{ k: n > 1 ? 'Each person pays' : 'Total to pay', v: m(per), main: true }, { k: 'Tip amount', v: m(tip) }, { k: 'Tip per person', v: m(tip / n) }, { k: 'Total bill', v: m(v.round ? per * n : v.bill + tip) }] };
      },
    });
  });

  Tools.define('gst-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'amt', label: 'Amount', type: 'number', value: 10000 },
        { id: 'rate', label: 'Tax rate', type: 'select', value: '18', options: [['5', '5% (GST India / VAT UAE)'], ['12', '12% (GST India)'], ['15', '15% (VAT Saudi Arabia)'], ['17', '17% (GST Pakistan)'], ['18', '18% (GST India / Pakistan)'], ['20', '20% (VAT UK)'], ['28', '28% (GST India)'], ['c', 'Custom rate']] },
        { id: 'custom', label: 'Custom rate', type: 'number', value: 10, unit: '%', show: v => v.rate === 'c' },
        { id: 'mode', label: 'Calculation', type: 'seg', value: 'add', options: [['add', 'Add tax (exclusive)'], ['rm', 'Remove tax (inclusive)']] },
      ],
      compute(v) {
        if (!(v.amt >= 0)) return null;
        const r = (v.rate === 'c' ? v.custom || 0 : +v.rate) / 100;
        const net = v.mode === 'add' ? v.amt : v.amt / (1 + r), tax = net * r, gross = net + tax;
        return { results: [{ k: v.mode === 'add' ? 'Price including tax' : 'Price excluding tax', v: m(v.mode === 'add' ? gross : net), main: true, s: `Tax rate ${(r * 100).toFixed(2).replace(/\.00$/, '')}%` }, { k: 'Net amount', v: m(net) }, { k: 'Tax amount', v: m(tax) }, { k: 'Gross amount', v: m(gross) }, { k: 'CGST + SGST (India)', v: `${m(tax / 2)} + ${m(tax / 2)}` }] };
      },
    });
  });

  Tools.define('profit-margin-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'mode', label: 'I know', type: 'seg', value: 'price', options: [['price', 'Cost & selling price'], ['margin', 'Cost & target margin'], ['markup', 'Cost & markup']], full: true },
        { id: 'cost', label: 'Cost', type: 'number', value: 750 },
        { id: 'price', label: 'Selling price', type: 'number', value: 1200, show: v => v.mode === 'price' },
        { id: 'pct', label: 'Percentage', type: 'number', value: 35, unit: '%', show: v => v.mode !== 'price' },
      ],
      compute(v) {
        if (!(v.cost >= 0)) return null;
        let price = v.price;
        if (v.mode === 'margin') { if (v.pct >= 100) return '<div class="notice error">Margin must be below 100%.</div>'; price = v.cost / (1 - v.pct / 100); }
        if (v.mode === 'markup') price = v.cost * (1 + v.pct / 100);
        if (!(price > 0)) return null;
        const profit = price - v.cost;
        return { results: [{ k: v.mode === 'price' ? 'Profit' : 'Selling price', v: m(v.mode === 'price' ? profit : price), main: true }, { k: 'Gross margin', v: (profit / price * 100).toFixed(2) + '%' }, { k: 'Markup', v: v.cost ? (profit / v.cost * 100).toFixed(2) + '%' : '—' }, { k: 'Profit', v: m(profit) }, { k: 'Revenue', v: m(price) }], note: 'Margin = profit ÷ price. Markup = profit ÷ cost.' };
      },
    });
  });

  Tools.define('salary-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'amt', label: 'Pay amount', type: 'number', value: 25 },
        { id: 'per', label: 'Per', type: 'select', value: 'hour', options: [['hour', 'Hour'], ['day', 'Day'], ['week', 'Week'], ['biweek', '2 weeks'], ['month', 'Month'], ['year', 'Year']] },
        { id: 'hpw', label: 'Hours per week', type: 'number', value: 40 },
        { id: 'dpw', label: 'Days per week', type: 'number', value: 5 },
        { id: 'vac', label: 'Unpaid weeks off per year', type: 'number', value: 0 },
      ],
      compute(v) {
        if (!(v.amt > 0) || !(v.hpw > 0) || !(v.dpw > 0)) return null;
        const wk = 52 - (v.vac || 0), hrsY = v.hpw * wk;
        const yearly = { hour: v.amt * hrsY, day: v.amt * v.dpw * wk, week: v.amt * wk, biweek: v.amt * wk / 2, month: v.amt * 12, year: v.amt }[v.per];
        return { results: [{ k: 'Yearly salary', v: m(yearly), main: true }, { k: 'Monthly', v: m(yearly / 12) }, { k: 'Bi-weekly', v: m(yearly / wk * 2) }, { k: 'Weekly', v: m(yearly / wk) }, { k: 'Daily', v: m(yearly / wk / v.dpw) }, { k: 'Hourly', v: m(yearly / hrsY) }], note: 'Before taxes and deductions.' };
      },
    });
  });

  Tools.define('currency-converter', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end"><div class="field"><label>Amount</label><input class="input amt" type="number" value="100" step="any"></div>
      <div class="field"><label>From</label><select class="select from"></select></div><button class="btn ghost swap" title="Swap" style="flex:0 0 auto">⇄</button><div class="field"><label>To</label><select class="select to"></select></div></div>
      <div class="out"></div><div class="tbl"></div><p class="small muted src"></p></div>`;
    const $ = UI.q(root);
    const names = (() => { try { return new Intl.DisplayNames(['en'], { type: 'currency' }); } catch (e) { return { of: c => c }; } })();
    let rates = null, updated = '';
    const POP = ['USD', 'EUR', 'GBP', 'PKR', 'INR', 'AED', 'SAR', 'CAD', 'AUD', 'CNY', 'JPY', 'TRY', 'BDT', 'MYR'];
    const conv = (a, f, t) => a / rates[f] * rates[t];
    const calc = () => {
      if (!rates) return;
      const a = UI.num($('.amt').value), f = $('.from').value, t = $('.to').value;
      UI.store.set('fx-pair', [f, t]);
      if (!(a >= 0)) { $('.out').innerHTML = ''; return; }
      const r = conv(1, f, t);
      $('.out').innerHTML = UI.resultsHTML([{ k: `${fmt(a, 2)} ${f} =`, v: `${fmt(conv(a, f, t), r < 0.01 ? 6 : 2, 2)} ${t}`, main: true, s: esc(names.of(t) || t) }, { k: 'Exchange rate', v: `1 ${f} = ${fmt(r, 6)} ${t}` }, { k: 'Inverse rate', v: `1 ${t} = ${fmt(1 / r, 6)} ${f}` }]);
      $('.tbl').innerHTML = `<div class="table-wrap"><table class="table"><thead><tr><th>${fmt(a, 2)} ${f} in</th><th class="num">Amount</th></tr></thead><tbody>${POP.filter(c => c !== f && rates[c]).map(c => `<tr><td>${c} — ${esc(names.of(c) || c)}</td><td class="num">${fmt(conv(a, f, c), 2, 2)}</td></tr>`).join('')}</tbody></table></div>`;
    };
    (async () => {
      try {
        const cached = UI.store.get('fx', null);
        if (cached && Date.now() - cached.t < 6 * 3600e3) ({ rates, updated } = cached);
        else {
          $('.out').innerHTML = '<div class="notice">Loading latest exchange rates…</div>';
          const j = await (await fetch('https://open.er-api.com/v6/latest/USD')).json();
          if (j.result !== 'success') throw new Error('rates unavailable');
          rates = j.rates; updated = j.time_last_update_utc; UI.store.set('fx', { rates, updated, t: Date.now() });
        }
        const codes = Object.keys(rates).sort(), [f, t] = UI.store.get('fx-pair', ['USD', 'PKR']);
        const opts = codes.map(c => `<option value="${c}">${c} — ${esc(names.of(c) || c)}</option>`).join('');
        $('.from').innerHTML = opts; $('.to').innerHTML = opts; $('.from').value = f; $('.to').value = t;
        $('.src').innerHTML = `Rates updated: ${esc(new Date(updated).toLocaleString())}. <a href="https://www.exchangerate-api.com" rel="noopener" target="_blank">Rates by Exchange Rate API</a>. Rates are mid-market and for reference only — banks and exchange shops add their own margin.`;
        calc();
      } catch (e) { UI.notice($('.out'), '⚠️ Could not load exchange rates. Check your internet connection and refresh.', 'error'); }
    })();
    root.addEventListener('input', calc); root.addEventListener('change', calc);
    $('.swap').onclick = () => { const f = $('.from').value; $('.from').value = $('.to').value; $('.to').value = f; calc(); };
  });

  Tools.define('zakat-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'goldPrice', label: 'Gold price per gram (24K)', type: 'number', value: '', placeholder: 'today\'s price' },
        { id: 'silverPrice', label: 'Silver price per gram', type: 'number', value: '', placeholder: 'today\'s price' },
        { id: 'basis', label: 'Nisab based on', type: 'seg', value: 'silver', options: [['silver', 'Silver (612.36 g)'], ['gold', 'Gold (87.48 g)']] },
        { id: 'cash', label: 'Cash at home & in bank', type: 'number', value: '' },
        { id: 'goldG', label: 'Gold you own (grams)', type: 'number', value: '' },
        { id: 'karat', label: 'Gold purity', type: 'select', value: '24', options: [['24', '24K'], ['22', '22K'], ['21', '21K'], ['18', '18K']] },
        { id: 'silverG', label: 'Silver you own (grams)', type: 'number', value: '' },
        { id: 'inv', label: 'Investments, shares, savings schemes', type: 'number', value: '' },
        { id: 'biz', label: 'Business stock / inventory', type: 'number', value: '' },
        { id: 'owed', label: 'Money others owe you', type: 'number', value: '' },
        { id: 'debts', label: 'Debts & bills due now', type: 'number', value: '' },
      ],
      empty: 'Enter today\'s gold and silver prices and your assets to calculate zakat.',
      compute(v) {
        const z = x => (x > 0 ? x : 0);
        if (!(v.goldPrice > 0) || !(v.silverPrice > 0)) return null;
        const gold = z(v.goldG) * (+v.karat / 24) * v.goldPrice, silver = z(v.silverG) * v.silverPrice;
        const assets = z(v.cash) + gold + silver + z(v.inv) + z(v.biz) + z(v.owed), net = assets - z(v.debts);
        const nisab = v.basis === 'gold' ? 87.48 * v.goldPrice : 612.36 * v.silverPrice;
        const due = net >= nisab ? net * 0.025 : 0;
        return { results: [{ k: 'Zakat payable', v: m(due), main: true, s: net >= nisab ? 'Your wealth is above nisab — 2.5% is due' : 'Your wealth is below nisab — no zakat is due' }, { k: 'Total assets', v: m(assets) }, { k: 'Net zakatable wealth', v: m(net) }, { k: 'Nisab threshold', v: m(nisab) }, { k: 'Gold value', v: m(gold) }, { k: 'Silver value', v: m(silver) }],
          note: 'Zakat is due on wealth held for one lunar year (hawl) above the nisab. Many scholars recommend the silver nisab as it benefits more people in need. Please consult a qualified scholar for your specific situation.' };
      },
    });
  });

  Tools.define('fuel-cost-calculator', root => {
    UI.calc(root, {
      fields: [
        { id: 'sys', label: 'Units', type: 'seg', value: 'metric', options: [['metric', 'Km & litres'], ['us', 'Miles & gallons']], full: true },
        { id: 'dist', label: 'Trip distance', type: 'number', value: 380 },
        { id: 'eff', label: 'Fuel efficiency', type: 'number', value: 14 },
        { id: 'effu', label: 'Efficiency unit', type: 'select', value: 'kmpl', options: [['kmpl', 'km per litre'], ['l100', 'litres per 100 km']], show: v => v.sys === 'metric' },
        { id: 'price', label: 'Fuel price (per litre / gallon)', type: 'number', value: 270 },
        { id: 'round', label: 'Round trip', type: 'checkbox', value: false },
        { id: 'people', label: 'Split between', type: 'number', value: 1, min: 1 },
      ],
      compute(v) {
        if (!(v.dist > 0) || !(v.eff > 0) || !(v.price >= 0)) return null;
        const d = v.dist * (v.round ? 2 : 1);
        const fuel = v.sys === 'us' ? d / v.eff : v.effu === 'kmpl' ? d / v.eff : d * v.eff / 100;
        const cost = fuel * v.price, n = Math.max(1, Math.round(v.people || 1)), u = v.sys === 'us' ? 'gallons' : 'litres';
        return { results: [{ k: 'Total fuel cost', v: m(cost), main: true, s: `${fmt(d)} ${v.sys === 'us' ? 'miles' : 'km'}${v.round ? ' (round trip)' : ''}` }, { k: 'Fuel needed', v: `${fmt(fuel, 2)} ${u}` }, n > 1 && { k: 'Cost per person', v: m(cost / n) }, { k: `Cost per ${v.sys === 'us' ? 'mile' : 'km'}`, v: m(cost / d) }] };
      },
    });
  });
})();

module.exports = {
  title: 'How to Calculate Hours Worked (With Breaks, Decimals and Excel)',
  desc: 'Work out hours worked from start and end times, subtract unpaid breaks, convert minutes to decimal hours for payroll, and total a week — with Excel and Google Sheets formulas.',
  date: '2026-10-26',
  tools: ['time-calculator', 'hours-to-decimal', 'military-time-converter'],
  faq: [
    ['How do I calculate hours worked in a day?', 'Subtract the start time from the end time, then subtract any unpaid breaks. 9:00 AM to 5:30 PM with a 30-minute lunch is 8 hours 30 minutes minus 30 minutes = 8 hours.'],
    ['How do I convert minutes to decimal hours?', 'Divide the minutes by 60. 15 minutes = 0.25 hours, 30 minutes = 0.5, 45 minutes = 0.75, and 20 minutes ≈ 0.33.'],
    ['How do I calculate hours worked overnight?', 'Count the hours to midnight and add the hours after midnight. 10:00 PM to 6:00 AM is 2 hours + 6 hours = 8 hours. In Excel, use =MOD(end-start,1)*24.'],
    ['How many hours are in a full-time work year?', '40 hours a week × 52 weeks = 2,080 hours, before holidays and leave.'],
    ['When does overtime start?', 'It depends on where you work. In the US, the Fair Labor Standards Act requires overtime at 1.5 times the regular rate for non-exempt employees after 40 hours in a workweek. Other countries and some US states have different rules.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> hours worked = <strong>end time − start time − unpaid breaks</strong>. Convert the minutes to decimals (minutes ÷ 60) for payroll. Example: 9:00 AM to 5:30 PM with a 30-minute lunch = <strong>8.00 hours</strong>.</p></blockquote>

<p>Whether you're filling in a timesheet, checking a payslip or running payroll for a small team, calculating hours by hand is surprisingly easy to get wrong — especially with lunch breaks, minutes and overnight shifts. Here's a simple, reliable method.</p>

<h2>Step 1: Work out each day's hours</h2>
<ol class="steps">
<li>Write the start and end times in 24-hour format if you can (5:30 PM = 17:30). It avoids AM/PM mistakes.</li>
<li>Subtract: 17:30 − 9:00 = 8 hours 30 minutes.</li>
<li>Subtract unpaid breaks: 8 h 30 min − 30 min = <strong>8 hours</strong>.</li>
</ol>
<p>Or let the time calculator do it — enter the start, end and break, and add an hourly rate to see the pay:</p>
{{tool:time-calculator}}

<h2>Step 2: Convert minutes to decimal hours</h2>
<p>Payroll systems and spreadsheets use <strong>decimal hours</strong>, where 7 hours 45 minutes is 7.75 — not 7.45. Divide the minutes by 60:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Minutes</th><th class="num">Decimal</th><th>Minutes</th><th class="num">Decimal</th></tr></thead>
<tbody>
<tr><td>5</td><td class="num">0.08</td><td>35</td><td class="num">0.58</td></tr>
<tr><td>10</td><td class="num">0.17</td><td>40</td><td class="num">0.67</td></tr>
<tr><td>15</td><td class="num">0.25</td><td>45</td><td class="num">0.75</td></tr>
<tr><td>20</td><td class="num">0.33</td><td>50</td><td class="num">0.83</td></tr>
<tr><td>25</td><td class="num">0.42</td><td>55</td><td class="num">0.92</td></tr>
<tr><td>30</td><td class="num">0.50</td><td>60</td><td class="num">1.00</td></tr>
</tbody></table></div>
{{tool:hours-to-decimal}}

<h2>Step 3: Total the week</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Day</th><th>Start</th><th>End</th><th>Unpaid break</th><th class="num">Hours</th></tr></thead>
<tbody>
<tr><td>Monday</td><td>9:00</td><td>17:30</td><td>30 min</td><td class="num">8.00</td></tr>
<tr><td>Tuesday</td><td>8:45</td><td>17:15</td><td>45 min</td><td class="num">7.75</td></tr>
<tr><td>Wednesday</td><td>9:00</td><td>18:00</td><td>60 min</td><td class="num">8.00</td></tr>
<tr><td>Thursday</td><td>9:15</td><td>17:30</td><td>30 min</td><td class="num">7.75</td></tr>
<tr><td>Friday</td><td>9:00</td><td>15:00</td><td>none</td><td class="num">6.00</td></tr>
<tr><td colspan="4"><strong>Total</strong></td><td class="num"><strong>37.50</strong></td></tr>
</tbody></table></div>
<p>At an hourly rate of 20, that week's pay is 37.5 × 20 = <strong>750</strong>. The time calculator's "total of many durations" mode adds up a week for you: enter each day as 8:00, 7:45 and so on.</p>

<h2>Overnight shifts</h2>
<p>When a shift crosses midnight, the end time is "smaller" than the start time, so a simple subtraction goes negative. Count the hours to midnight and add the hours after: 22:00 to 06:00 = 2 + 6 = <strong>8 hours</strong>. The time calculator detects overnight shifts automatically.</p>

<h2>How to calculate hours worked in Excel or Google Sheets</h2>
<p>Put the start time in A2, end time in B2 and unpaid break (as a time, such as 0:30) in C2. Format A2:C2 as Time.</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>What you want</th><th>Formula</th></tr></thead>
<tbody>
<tr><td>Hours worked (decimal)</td><td><code>=(B2-A2)*24</code></td></tr>
<tr><td>Hours worked minus lunch</td><td><code>=(B2-A2-C2)*24</code></td></tr>
<tr><td>Overnight shifts</td><td><code>=MOD(B2-A2,1)*24</code></td></tr>
<tr><td>Hours as h:mm instead</td><td><code>=B2-A2-C2</code>, formatted as <code>[h]:mm</code></td></tr>
<tr><td>Pay</td><td><code>=(B2-A2-C2)*24*D2</code>, with the hourly rate in D2</td></tr>
</tbody></table></div>
<p>Excel stores times as fractions of a day, which is why you multiply by 24 to get hours. Use the <code>[h]:mm</code> format for weekly totals — without the square brackets, totals over 24 hours "wrap around" and show the wrong number.</p>

<h2>Monthly and yearly hours</h2>
<ul>
<li><strong>Per week:</strong> add up each day.</li>
<li><strong>Per month:</strong> weekly hours × 52 ÷ 12. A 40-hour week averages about 173.3 hours a month.</li>
<li><strong>Per year:</strong> 40 hours × 52 weeks = 2,080 hours, before holidays and leave.</li>
</ul>

<h2>Overtime basics</h2>
<p>In the United States, the Fair Labor Standards Act requires overtime of at least 1.5 times the regular rate for non-exempt employees for hours over 40 in a workweek. Some states, such as California, also have daily overtime rules, and other countries set their own limits. Check your contract and local labour law. Using the example week above, someone working 45 hours at 20 an hour would earn 40 × 20 + 5 × 30 = 950.</p>

<h2>Common timesheet mistakes</h2>
<ul>
<li><strong>Writing minutes as decimals.</strong> 7 hours 45 minutes is 7.75 hours, not 7.45.</li>
<li><strong>Forgetting unpaid breaks</strong> — or subtracting paid breaks that should count.</li>
<li><strong>AM/PM mix-ups.</strong> Use 24-hour time to avoid them; the <a href="/military-time-converter">military time converter</a> converts between the two.</li>
<li><strong>Rounding each day instead of the total.</strong> Round once, at the end, to two decimal places — or follow your employer's rounding policy.</li>
</ul>
`,
};

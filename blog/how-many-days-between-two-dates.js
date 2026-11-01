module.exports = {
  title: 'How Many Days Between Two Dates? How to Count Days, Weeks and Workdays',
  desc: 'Count the days between any two dates — the quick method, whether to include the end date, counting business days, a days-in-each-month table, and the Excel formulas.',
  date: '2026-11-01',
  tools: ['date-difference-calculator', 'date-calculator', 'age-calculator'],
  faq: [
    ['How do I count the days between two dates?', 'Subtract the earlier date from the later one. The easiest way is a date difference calculator, or in Excel simply =B1-A1. By hand, count the remaining days in the first month, add the full months in between, then add the days in the last month.'],
    ['Do you include the start and end date when counting days?', 'A normal date difference counts the nights in between, so Monday to Friday is 4 days. If you\'re counting days of an event, a hotel stay\'s calendar days, or a contract that includes both dates, add 1 — Monday to Friday is then 5 days.'],
    ['How many days are there between January 1 and December 31?', 'In a non-leap year like 2026, there are 364 days between January 1 and December 31, or 365 if you count both dates.'],
    ['How do I count only working days?', 'Use a business day count that skips weekends: in Excel, =NETWORKDAYS(A1,B1) counts Monday–Friday and includes both dates. The date difference calculator also shows business days and lets you choose which days are the weekend.'],
    ['How many weeks are there between two dates?', 'Divide the number of days by 7. 139 days is 19 weeks and 6 days.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> subtract the earlier date from the later one. From <strong>March 15 to August 1, 2026 is 139 days</strong> — 19 weeks and 6 days, or 4 months and 17 days. Add 1 if you want to count both the start and end date. Enter any two dates below to get days, weeks, months and business days.</p></blockquote>

<p>Counting days sounds simple until months of different lengths, leap years and weekends get involved. Whether you're counting down to a trip, working out a notice period, tracking a pregnancy or checking a deadline, here's how to get the right number every time.</p>
{{tool:date-difference-calculator}}

<h2>How to count days between dates by hand</h2>
<p>Example: <strong>March 15 to August 1, 2026</strong>.</p>
<ol>
<li><strong>Days left in the first month:</strong> March has 31 days, so 31 − 15 = 16 days.</li>
<li><strong>Full months in between:</strong> April (30) + May (31) + June (30) + July (31) = 122 days.</li>
<li><strong>Days in the last month:</strong> 1 (up to August 1).</li>
<li><strong>Total:</strong> 16 + 122 + 1 = <strong>139 days</strong>.</li>
</ol>

<h2>Days in each month</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Month</th><th class="num">Days</th><th>Month</th><th class="num">Days</th></tr></thead>
<tbody>
<tr><td>January</td><td class="num">31</td><td>July</td><td class="num">31</td></tr>
<tr><td>February</td><td class="num">28 (29 in a leap year)</td><td>August</td><td class="num">31</td></tr>
<tr><td>March</td><td class="num">31</td><td>September</td><td class="num">30</td></tr>
<tr><td>April</td><td class="num">30</td><td>October</td><td class="num">31</td></tr>
<tr><td>May</td><td class="num">31</td><td>November</td><td class="num">30</td></tr>
<tr><td>June</td><td class="num">30</td><td>December</td><td class="num">31</td></tr>
</tbody></table></div>
<p>The old rhyme helps: "Thirty days hath September, April, June and November." Leap years — when February has 29 days — happen in years divisible by 4, except century years not divisible by 400. 2028 is the next leap year; 2100 won't be one.</p>

<h2>Should you include the end date?</h2>
<p>This is where most counting mistakes happen.</p>
<ul>
<li><strong>Difference between dates (default):</strong> Monday to Friday = 4 days. This is what you want for "how many days until…", ages and countdowns.</li>
<li><strong>Counting both dates (inclusive):</strong> Monday to Friday = 5 days. Use this for event days, leave you're taking, or a contract "from 1 March to 31 March inclusive" (31 days).</li>
</ul>
<p>Tick <strong>Include end date</strong> in the calculator to add the extra day.</p>

<h2>How to count business days</h2>
<p>For deadlines, delivery estimates and notice periods you often need working days only. From March 15 to August 1, 2026 there are <strong>100 weekdays</strong> (Monday–Friday). The calculator shows business days automatically, and you can change the weekend to Friday–Saturday, Friday only or Sunday only for countries with a different working week.</p>
<p>Public holidays aren't removed automatically, because they differ by country and region — subtract any that fall in your range.</p>

<h2>Counting days in Excel and Google Sheets</h2>
<ul>
<li><code>=B1-A1</code> — days between two dates (format the cell as a number, not a date).</li>
<li><code>=B1-A1+1</code> — counting both dates.</li>
<li><code>=DATEDIF(A1,B1,"d")</code>, <code>"m"</code> or <code>"y"</code> — complete days, months or years between them.</li>
<li><code>=NETWORKDAYS(A1,B1)</code> — working days Monday–Friday, including both dates. Add a range of holiday dates as a third argument to skip them.</li>
<li><code>=NETWORKDAYS.INTL(A1,B1,7)</code> — working days with a Friday–Saturday weekend.</li>
<li><code>=TODAY()-A1</code> — days since a date.</li>
</ul>

<h2>Common questions people count</h2>
<ul>
<li><strong>Days until a date:</strong> put today as the start date and the event as the end date — the calculator also shows the gap in weeks and in years, months and days.</li>
<li><strong>A date X days from now:</strong> "What's the date 90 days from today?" is the opposite question — use the <a href="/date-calculator">date calculator</a> to add or subtract days, weeks, months or years.</li>
<li><strong>Your age in days:</strong> the <a href="/age-calculator">age calculator</a> gives your exact age in years, months and days, and your total days alive.</li>
<li><strong>Weeks between dates:</strong> divide the days by 7 — the calculator shows weeks and remaining days.</li>
<li><strong>Working hours across those days:</strong> see <a href="/blog/how-to-calculate-hours-worked">how to calculate hours worked</a>.</li>
</ul>

<h2>Why months and years can be tricky</h2>
<p>"One month" isn't a fixed number of days. January 31 plus one month has no exact answer, because February has no 31st — most systems, including the date calculator here, land on the last day of February. That's why contracts and visa rules often state periods in days (such as "90 days") rather than months: days are unambiguous.</p>
`,
};

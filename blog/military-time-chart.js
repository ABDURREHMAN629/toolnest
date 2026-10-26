module.exports = {
  title: 'Military Time Chart: How to Read and Convert 24-Hour Time',
  desc: 'A complete military time chart for every hour, how to convert between military and standard time, how to say military time out loud, and a minutes-to-decimal chart for payroll.',
  date: '2026-10-26',
  tools: ['military-time-converter', 'hours-to-decimal', 'time-zone-converter'],
  faq: [
    ['What is 1500 in military time?', '1500 is 3:00 PM. For any time after 1300, subtract 1200 to get the PM time.'],
    ['Is midnight 0000 or 2400?', 'Midnight at the start of a day is 0000. Some schedules use 2400 to mean midnight at the end of a day, but 0000 is the standard way to write it.'],
    ['How do you say 0800 in military time?', '"Zero eight hundred" — or "oh eight hundred". Times that end in :00 are said as hundreds.'],
    ['Does military time use a colon?', 'Strictly, no — the military writes 1430, not 14:30. In everyday 24-hour time, including in most of the world outside the US, the colon is normal.'],
    ['Why is it called military time?', 'In the United States and Canada, 24-hour time is mainly used by the armed forces, hospitals and emergency services, so it\'s commonly called military time. In most other countries it\'s simply the normal way to write time.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> military time counts the hours from 0000 (midnight) to 2359. For any PM time, <strong>add 12 to the hour</strong> (3:00 PM = 1500). For military times from 1300 up, <strong>subtract 1200</strong> to get the PM time (1845 = 6:45 PM).</p></blockquote>

<p>Military time — the 24-hour clock — is used by the armed forces, hospitals, airlines, police, and in most countries for everyday timetables. It avoids AM/PM confusion because every hour of the day has its own number. Here's the full chart and the simple rules for converting.</p>

<h2>Military time chart</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Standard</th><th>Military</th><th>Standard</th><th>Military</th></tr></thead>
<tbody>
<tr><td>12:00 AM (midnight)</td><td>0000</td><td>12:00 PM (noon)</td><td>1200</td></tr>
<tr><td>1:00 AM</td><td>0100</td><td>1:00 PM</td><td>1300</td></tr>
<tr><td>2:00 AM</td><td>0200</td><td>2:00 PM</td><td>1400</td></tr>
<tr><td>3:00 AM</td><td>0300</td><td>3:00 PM</td><td>1500</td></tr>
<tr><td>4:00 AM</td><td>0400</td><td>4:00 PM</td><td>1600</td></tr>
<tr><td>5:00 AM</td><td>0500</td><td>5:00 PM</td><td>1700</td></tr>
<tr><td>6:00 AM</td><td>0600</td><td>6:00 PM</td><td>1800</td></tr>
<tr><td>7:00 AM</td><td>0700</td><td>7:00 PM</td><td>1900</td></tr>
<tr><td>8:00 AM</td><td>0800</td><td>8:00 PM</td><td>2000</td></tr>
<tr><td>9:00 AM</td><td>0900</td><td>9:00 PM</td><td>2100</td></tr>
<tr><td>10:00 AM</td><td>1000</td><td>10:00 PM</td><td>2200</td></tr>
<tr><td>11:00 AM</td><td>1100</td><td>11:00 PM</td><td>2300</td></tr>
</tbody></table></div>
<p>Minutes stay the same: 4:30 PM is 1630, 7:05 AM is 0705, and 11:59 PM is 2359.</p>
{{tool:military-time-converter}}

<h2>How to convert standard time to military time</h2>
<ul>
<li><strong>AM times (1:00–11:59 AM):</strong> keep the numbers, remove the colon and add a leading zero if needed. 9:15 AM → <strong>0915</strong>.</li>
<li><strong>12 AM (midnight hour):</strong> becomes 00. 12:30 AM → <strong>0030</strong>.</li>
<li><strong>12 PM (noon hour):</strong> stays 12. 12:45 PM → <strong>1245</strong>.</li>
<li><strong>PM times (1:00–11:59 PM):</strong> add 12 to the hour. 6:20 PM → 6 + 12 = <strong>1820</strong>.</li>
</ul>

<h2>How to convert military time to standard time</h2>
<ul>
<li><strong>0000–0059:</strong> 12 AM. 0045 → <strong>12:45 AM</strong>.</li>
<li><strong>0100–1159:</strong> AM — drop the leading zero and add a colon. 0730 → <strong>7:30 AM</strong>.</li>
<li><strong>1200–1259:</strong> 12 PM. 1215 → <strong>12:15 PM</strong>.</li>
<li><strong>1300–2359:</strong> subtract 12 from the hour and add PM. 2140 → 21 − 12 = <strong>9:40 PM</strong>.</li>
</ul>

<h2>How to say military time out loud</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Military time</th><th>How it's said</th></tr></thead>
<tbody>
<tr><td>0600</td><td>"Zero six hundred" (or "oh six hundred")</td></tr>
<tr><td>0630</td><td>"Zero six thirty"</td></tr>
<tr><td>1200</td><td>"Twelve hundred"</td></tr>
<tr><td>1405</td><td>"Fourteen zero five"</td></tr>
<tr><td>2000</td><td>"Twenty hundred"</td></tr>
<tr><td>0000</td><td>"Zero hundred" (midnight)</td></tr>
</tbody></table></div>
<p>The word "hours" is sometimes added ("fourteen hundred hours"), especially in formal or radio use.</p>

<h2>Military time minutes chart (for payroll)</h2>
<p>When people search for a "military time chart for payroll", they usually need to turn minutes into <strong>decimal hours</strong>, because timesheets add up hours as decimals. Divide the minutes by 60:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Minutes</th><th class="num">Decimal hour</th><th>Minutes</th><th class="num">Decimal hour</th></tr></thead>
<tbody>
<tr><td>:06</td><td class="num">0.1</td><td>:36</td><td class="num">0.6</td></tr>
<tr><td>:12</td><td class="num">0.2</td><td>:42</td><td class="num">0.7</td></tr>
<tr><td>:15</td><td class="num">0.25</td><td>:45</td><td class="num">0.75</td></tr>
<tr><td>:18</td><td class="num">0.3</td><td>:48</td><td class="num">0.8</td></tr>
<tr><td>:24</td><td class="num">0.4</td><td>:54</td><td class="num">0.9</td></tr>
<tr><td>:30</td><td class="num">0.5</td><td>:60</td><td class="num">1.0</td></tr>
</tbody></table></div>
<p>So a shift from 0815 to 1645 with a 30-minute break is 8 h 30 min − 30 min = 8 hours, or 8.0 decimal hours. For exact conversions, use the hours-to-decimal converter; for whole timesheets, see <a href="/blog/how-to-calculate-hours-worked">how to calculate hours worked</a>.</p>
{{tool:hours-to-decimal}}

<h2>Who uses military time?</h2>
<ul>
<li><strong>Hospitals and nurses</strong> — medication times and charts use 24-hour time to avoid dangerous AM/PM mistakes.</li>
<li><strong>Armed forces, police and emergency services</strong> — often with a time zone letter such as "Z" (Zulu, meaning UTC).</li>
<li><strong>Airlines and railways</strong> — timetables worldwide use the 24-hour clock.</li>
<li><strong>Most countries outside the US</strong> — in Europe, Asia and much of the world, 24-hour time is everyday time on phones, tickets and schedules.</li>
</ul>
<p>Working with people in other countries? The <a href="/time-zone-converter">time zone converter</a> shows any time in several cities at once.</p>

<h2>Switch your phone or computer to 24-hour time</h2>
<ul>
<li><strong>iPhone:</strong> Settings → General → Date &amp; Time → 24-Hour Time.</li>
<li><strong>Android:</strong> Settings → System → Date &amp; time → Use 24-hour format.</li>
<li><strong>Windows 11:</strong> Settings → Time &amp; language → Language &amp; region → Regional format → change formats, then choose a 24-hour time format.</li>
<li><strong>Mac:</strong> System Settings → General → Date &amp; Time → 24-hour time.</li>
</ul>
`,
};

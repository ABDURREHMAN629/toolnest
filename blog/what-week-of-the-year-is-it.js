module.exports = {
  title: 'What Week of the Year Is It? Week Numbers Explained (2026 Calendar)',
  desc: 'Find the current week number, see every 2026 week with its dates, and learn how ISO 8601 and US week numbering differ — and why 2026 has 53 weeks.',
  date: '2026-11-01',
  tools: ['week-number', 'day-of-week-calculator', 'date-calculator'],
  faq: [
    ['How many weeks are in 2026?', 'Under the ISO 8601 system used in Europe and most business software, 2026 has 53 weeks, because it starts on a Thursday. Week 53 runs from Monday, December 28, 2026 to Sunday, January 3, 2027.'],
    ['What week number is it today?', 'Open the week number tool on this page — it shows today\'s week automatically in both the ISO (Monday start) and US (Sunday start) systems, because the two can differ by one.'],
    ['Does the week start on Sunday or Monday?', 'It depends on the system. ISO 8601 weeks start on Monday and are standard in Europe, the UK and most of Asia. In the US, calendars usually start the week on Sunday.'],
    ['What is week 1 of the year?', 'In ISO 8601, week 1 is the week that contains the first Thursday of January (equivalently, the week with January 4 in it). In the US system, week 1 is simply the week that contains January 1.'],
    ['How do I show week numbers in Excel?', 'Use =ISOWEEKNUM(A1) for ISO weeks or =WEEKNUM(A1) for US-style weeks that start on Sunday. In Google Sheets the same two functions work.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> the year is split into <strong>52 or 53 numbered weeks</strong>. Most of the world uses the <strong>ISO 8601</strong> system, where weeks start on Monday and week 1 is the week with the year's first Thursday. In the US, weeks usually start on Sunday and week 1 is the week containing January 1. The tool below shows today's week in both systems.</p></blockquote>

<p>Week numbers are everywhere once you start looking: project plans, school terms, shipping schedules, payroll calendars and factory production plans all talk about "week 23" or "W45". The catch is that there are two common ways to count, and they don't always agree.</p>
{{tool:week-number}}

<h2>ISO 8601 week numbers vs US week numbers</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th></th><th>ISO 8601</th><th>US system</th></tr></thead>
<tbody>
<tr><td>Week starts on</td><td>Monday</td><td>Sunday</td></tr>
<tr><td>Week 1 is</td><td>The week with the first Thursday of January</td><td>The week containing January 1</td></tr>
<tr><td>Weeks per year</td><td>52 or 53</td><td>53 (sometimes 54 partial weeks)</td></tr>
<tr><td>Used by</td><td>Europe, UK, most of Asia, ISO standards, SAP and many ERP systems</td><td>US and Canadian calendars, Excel's WEEKNUM by default</td></tr>
<tr><td>Can week 1 start in December?</td><td>Yes — e.g. week 1 of 2026 began Dec 29, 2025</td><td>No — it always starts on January 1</td></tr>
</tbody></table></div>
<p>Because of these rules, the same date can be week 44 in one system and week 45 in the other. If you're coordinating with a team in another country, say which system you mean — or quote the dates.</p>

<h2>2026 week numbers (ISO 8601)</h2>
<p>2026 starts on a Thursday, so it's a <strong>53-week year</strong> in the ISO system. Every week below runs Monday to Sunday.</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Week</th><th>Dates</th><th>Week</th><th>Dates</th></tr></thead>
<tbody>
<tr><td>1</td><td>Dec 29, 2025 – Jan 4</td><td>28</td><td>Jul 6 – Jul 12</td></tr>
<tr><td>2</td><td>Jan 5 – Jan 11</td><td>29</td><td>Jul 13 – Jul 19</td></tr>
<tr><td>3</td><td>Jan 12 – Jan 18</td><td>30</td><td>Jul 20 – Jul 26</td></tr>
<tr><td>4</td><td>Jan 19 – Jan 25</td><td>31</td><td>Jul 27 – Aug 2</td></tr>
<tr><td>5</td><td>Jan 26 – Feb 1</td><td>32</td><td>Aug 3 – Aug 9</td></tr>
<tr><td>6</td><td>Feb 2 – Feb 8</td><td>33</td><td>Aug 10 – Aug 16</td></tr>
<tr><td>7</td><td>Feb 9 – Feb 15</td><td>34</td><td>Aug 17 – Aug 23</td></tr>
<tr><td>8</td><td>Feb 16 – Feb 22</td><td>35</td><td>Aug 24 – Aug 30</td></tr>
<tr><td>9</td><td>Feb 23 – Mar 1</td><td>36</td><td>Aug 31 – Sep 6</td></tr>
<tr><td>10</td><td>Mar 2 – Mar 8</td><td>37</td><td>Sep 7 – Sep 13</td></tr>
<tr><td>11</td><td>Mar 9 – Mar 15</td><td>38</td><td>Sep 14 – Sep 20</td></tr>
<tr><td>12</td><td>Mar 16 – Mar 22</td><td>39</td><td>Sep 21 – Sep 27</td></tr>
<tr><td>13</td><td>Mar 23 – Mar 29</td><td>40</td><td>Sep 28 – Oct 4</td></tr>
<tr><td>14</td><td>Mar 30 – Apr 5</td><td>41</td><td>Oct 5 – Oct 11</td></tr>
<tr><td>15</td><td>Apr 6 – Apr 12</td><td>42</td><td>Oct 12 – Oct 18</td></tr>
<tr><td>16</td><td>Apr 13 – Apr 19</td><td>43</td><td>Oct 19 – Oct 25</td></tr>
<tr><td>17</td><td>Apr 20 – Apr 26</td><td>44</td><td>Oct 26 – Nov 1</td></tr>
<tr><td>18</td><td>Apr 27 – May 3</td><td>45</td><td>Nov 2 – Nov 8</td></tr>
<tr><td>19</td><td>May 4 – May 10</td><td>46</td><td>Nov 9 – Nov 15</td></tr>
<tr><td>20</td><td>May 11 – May 17</td><td>47</td><td>Nov 16 – Nov 22</td></tr>
<tr><td>21</td><td>May 18 – May 24</td><td>48</td><td>Nov 23 – Nov 29</td></tr>
<tr><td>22</td><td>May 25 – May 31</td><td>49</td><td>Nov 30 – Dec 6</td></tr>
<tr><td>23</td><td>Jun 1 – Jun 7</td><td>50</td><td>Dec 7 – Dec 13</td></tr>
<tr><td>24</td><td>Jun 8 – Jun 14</td><td>51</td><td>Dec 14 – Dec 20</td></tr>
<tr><td>25</td><td>Jun 15 – Jun 21</td><td>52</td><td>Dec 21 – Dec 27</td></tr>
<tr><td>26</td><td>Jun 22 – Jun 28</td><td>53</td><td>Dec 28 – Jan 3, 2027</td></tr>
<tr><td>27</td><td>Jun 29 – Jul 5</td><td></td><td></td></tr>
</tbody></table></div>
<p>Week 1 of 2027 then starts on Monday, January 4, 2027. 2027 and 2028 are both ordinary 52-week years.</p>

<h2>Why some years have 53 weeks</h2>
<p>A year has 365 days — 52 weeks plus one day (two in a leap year). Those spare days add up, so every five or six years the ISO calendar needs a 53rd week to stay in step. An ISO year gets 53 weeks when it <strong>starts on a Thursday</strong>, or when it's a leap year that starts on a Wednesday. 2020 and 2026 are 53-week years; the next one after 2026 is 2032.</p>
<p>This matters for anything paid or planned weekly. A business that pays weekly wages, or reports "weekly sales vs the same week last year", has to decide what to do with week 53 — usually it's compared with week 52 or reported separately.</p>

<h2>How to find the week number of any date</h2>
<ol>
<li>Enter the date in the <a href="/week-number">week number calculator</a>.</li>
<li>Choose <strong>ISO 8601</strong> (Monday start) or <strong>US</strong> (Sunday start).</li>
<li>Read the week number, the Monday-to-Sunday (or Sunday-to-Saturday) dates, and the full list of weeks for that year.</li>
</ol>
<p>Need the weekday of a date instead? Use the <a href="/day-of-week-calculator">day of the week calculator</a>. To jump forward a number of weeks ("what date is 12 weeks from today?"), use the <a href="/date-calculator">date calculator</a>.</p>

<h2>Week numbers in Excel, Google Sheets and Outlook</h2>
<ul>
<li><strong>Excel and Google Sheets:</strong> <code>=ISOWEEKNUM(A1)</code> gives the ISO week. <code>=WEEKNUM(A1)</code> gives the US-style week (Sunday start). <code>=WEEKNUM(A1,2)</code> starts weeks on Monday but still treats the week with January 1 as week 1, so it can differ from ISO.</li>
<li><strong>Outlook:</strong> File → Options → Calendar → tick "Show week numbers in the month view and in the Date Navigator". Set "First week of year" to "First 4-day week" to match ISO.</li>
<li><strong>Google Calendar:</strong> Settings → View options → "Show week numbers". It follows the first-day-of-week setting you choose.</li>
<li><strong>iPhone:</strong> Settings → Calendar → turn on "Week Numbers".</li>
</ul>

<h2>How to write a week number</h2>
<p>The ISO standard writes week dates as <strong>2026-W45</strong> (year, then W and the two-digit week) or <strong>2026-W45-1</strong> to add the weekday (1 = Monday, 7 = Sunday). In conversation, "week 45" or "W45" is fine. Watch out around New Year: December 29, 2025 belongs to <strong>2026-W01</strong>, so the "week-year" isn't always the calendar year.</p>
`,
};

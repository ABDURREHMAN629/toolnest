module.exports = {
  title: "Discord Timestamps: How to Show a Time in Everyone's Time Zone",
  desc: 'Discord timestamps like <t:1767225600:F> show every member an event time in their own time zone. All 7 formats with examples, and how to make one in seconds.',
  date: '2026-10-26',
  tools: ['discord-timestamp-generator', 'unix-timestamp-converter', 'time-zone-converter'],
  faq: [
    ['Do Discord timestamps show in everyone\'s time zone?', 'Yes. Discord converts the timestamp on each reader\'s device, using their own time zone and language settings, so everyone sees the correct local time.'],
    ['What is the default Discord timestamp format?', 'If you leave out the style letter, as in <t:1767225600>, Discord uses the short date and time format (style f).'],
    ['Why is my Discord timestamp showing the wrong year?', 'You probably used a timestamp in milliseconds (13 digits). Discord expects seconds (10 digits). Divide the number by 1,000, or create the code with a timestamp generator.'],
    ['Can bots send Discord timestamps?', 'Yes. Bots can include timestamps in messages and embeds. discord.py has discord.utils.format_dt(), and discord.js has a time() helper with TimestampStyles.'],
    ['Do Discord timestamps work on mobile?', 'Yes. Timestamps display in the desktop app, the web version and the mobile apps.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> type <code>&lt;t:UNIX:F&gt;</code> in a Discord message, replacing UNIX with the time as a Unix timestamp in seconds — for example <code>&lt;t:1767225600:F&gt;</code>. Discord shows it in each reader's own time zone. The easiest way to get the code is a <a href="/discord-timestamp-generator">Discord timestamp generator</a>.</p></blockquote>

<p>"The event starts at 8 PM" means a different time in New York, London and Karachi. Discord timestamps fix that: instead of writing a time, you post a small code, and Discord displays it in every member's local time and date format. Here's how they work, every format available, and the quickest way to create one.</p>

<h2>How Discord timestamps work</h2>
<p>A Discord timestamp has three parts inside angle brackets:</p>
<p><code>&lt;t:1767225600:F&gt;</code></p>
<ul>
<li><code>t:</code> tells Discord this is a timestamp.</li>
<li><code>1767225600</code> is a <strong>Unix timestamp</strong> — the number of seconds since 1 January 1970 (UTC). This one is 1 January 2026 at midnight UTC.</li>
<li><code>:F</code> is the optional display style. If you leave it out, Discord uses style <code>f</code>.</li>
</ul>
<p>Because a Unix timestamp marks one exact moment, Discord can convert it to anybody's local time — including daylight saving time — without you doing any time zone maths.</p>

<h2>All Discord timestamp formats</h2>
<p>Here is how <code>&lt;t:1767225600:STYLE&gt;</code> looks to a reader in New York with English (US) settings. Readers in other countries see their own local time and date format.</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Style</th><th>Code</th><th>Shows as</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>Short time</td><td><code>&lt;t:1767225600:t&gt;</code></td><td>7:00 PM</td><td>Times on the same day</td></tr>
<tr><td>Long time</td><td><code>&lt;t:1767225600:T&gt;</code></td><td>7:00:00 PM</td><td>When seconds matter</td></tr>
<tr><td>Short date</td><td><code>&lt;t:1767225600:d&gt;</code></td><td>12/31/2025</td><td>Deadlines</td></tr>
<tr><td>Long date</td><td><code>&lt;t:1767225600:D&gt;</code></td><td>December 31, 2025</td><td>Birthdays, release dates</td></tr>
<tr><td>Short date &amp; time (default)</td><td><code>&lt;t:1767225600:f&gt;</code></td><td>December 31, 2025 7:00 PM</td><td>Most announcements</td></tr>
<tr><td>Long date &amp; time</td><td><code>&lt;t:1767225600:F&gt;</code></td><td>Wednesday, December 31, 2025 7:00 PM</td><td>Events and meetings</td></tr>
<tr><td>Relative</td><td><code>&lt;t:1767225600:R&gt;</code></td><td>"in 3 hours" or "2 months ago"</td><td>Countdowns, "starts in…"</td></tr>
</tbody></table></div>
<p>Notice that this reader sees <em>December 31, 2025</em>: midnight UTC on 1 January is still New Year's Eve in New York. That's exactly the kind of confusion timestamps prevent.</p>

<h2>How to create a Discord timestamp in seconds</h2>
<ol class="steps">
<li>Open the <a href="/discord-timestamp-generator">Discord timestamp generator</a>.</li>
<li>Pick the date and time, and the <strong>time zone that time is in</strong> (for example, 8 PM in America/New_York).</li>
<li>Copy the code for the style you want — the table shows a live preview of each one.</li>
<li>Paste it into your Discord message and send. It changes into a formatted date as soon as it's posted.</li>
</ol>
{{tool:discord-timestamp-generator}}
<p>Received a timestamp and want to know exactly what it means? Paste the code into the generator's <strong>Decode</strong> box to see the date and time.</p>

<h2>Making the code by hand</h2>
<p>If you already know the Unix timestamp, you can type the code yourself. To get the number, use a <a href="/unix-timestamp-converter">Unix timestamp converter</a>: pick the date and time, and copy the value in <strong>seconds</strong>. Then write <code>&lt;t:</code>, the number, a colon, the style letter and <code>&gt;</code>.</p>
{{tool:unix-timestamp-converter}}

<h2>Tips for event announcements</h2>
<ul>
<li><strong>Combine two styles.</strong> <code>&lt;t:1767225600:F&gt; (&lt;t:1767225600:R&gt;)</code> shows the full date and a live countdown, such as "Wednesday, December 31, 2025 7:00 PM (in 2 days)".</li>
<li><strong>Use relative time for countdowns.</strong> The <code>R</code> style updates by itself, so "in 3 hours" becomes "in 2 hours" without editing the message.</li>
<li><strong>Hover to check.</strong> On desktop, hovering over a timestamp shows the full date and time in a tooltip.</li>
<li><strong>Planning across time zones?</strong> Use the <a href="/time-zone-converter">Time Zone Converter</a> to choose a time that suits most members before you announce it.</li>
</ul>

<h2>Common mistakes</h2>
<ul>
<li><strong>Milliseconds instead of seconds.</strong> JavaScript's <code>Date.now()</code> and many tools give 13-digit milliseconds. Discord needs 10-digit seconds — divide by 1,000.</li>
<li><strong>Wrong time zone when converting.</strong> If you convert "8 PM" as if it were UTC, everyone sees the wrong time. Always set the time zone the time is in.</li>
<li><strong>Inside a code block.</strong> Text wrapped in backticks isn't formatted, so the code shows as plain text.</li>
<li><strong>Typos in the format.</strong> Spaces, missing angle brackets or a lowercase/uppercase mix-up (<code>f</code> vs <code>F</code>) change or break the result.</li>
<li><strong>Places that don't support message formatting</strong> — such as channel names — show the raw code instead of a date.</li>
</ul>

<h2>Timestamps for bot developers</h2>
<p>Bots use exactly the same format in messages and embeds. In <strong>discord.py</strong>, <code>discord.utils.format_dt(dt, style="F")</code> builds the code from a datetime. In <strong>discord.js</strong>, the <code>time(date, TimestampStyles.RelativeTime)</code> helper does the same. You can also build the string yourself from a Unix timestamp in seconds.</p>
`,
};

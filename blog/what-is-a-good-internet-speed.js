module.exports = {
  title: 'What Is a Good Internet Speed? Mbps Explained for Streaming, Gaming and Work',
  desc: 'A good internet speed for most homes is 100 Mbps download and 10–20 Mbps upload. See how much speed streaming, gaming, video calls and working from home really need.',
  date: '2026-10-27',
  tools: ['internet-speed-test', 'what-is-my-ip'],
  faq: [
    ['Is 100 Mbps fast?', 'Yes. 100 Mbps download is enough for a typical household to stream 4K video on a couple of TVs while others browse, game and make video calls.'],
    ['Is 50 Mbps good for gaming?', 'Yes. Online games use only a few Mbps while you play. What matters more for gaming is a low ping (ideally under 50 ms) and low jitter. Faster speeds mainly help you download games and updates sooner.'],
    ['What is a good upload speed?', 'For video calls and uploading files, 10 Mbps is comfortable. If you stream on Twitch or YouTube, or several people make video calls at once, aim for 20 Mbps or more.'],
    ['What is the difference between Mbps and MB/s?', 'Mbps means megabits per second; MB/s means megabytes per second. One byte is 8 bits, so 100 Mbps equals about 12.5 MB/s of download speed.'],
    ['Why is my speed test lower than my plan?', 'Wi-Fi distance and walls, other devices using the connection, an old router, a VPN or busy evening hours can all reduce your speed. Test with a cable plugged into the router to see the speed your provider is actually delivering.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> for most households, a good internet speed is around <strong>100 Mbps download</strong> and <strong>10–20 Mbps upload</strong>, with a ping under 50 ms. One or two people who browse and stream can manage well on 25–50 Mbps; busy homes with 4K streaming, gaming and large downloads benefit from 200 Mbps or more.</p></blockquote>

<p>Internet providers advertise big numbers, but what speed do you actually need? It depends on what you do online and how many people use the connection at the same time. Here's what each number in a speed test means and how much speed common activities need.</p>

<h2>What the numbers in a speed test mean</h2>
<ul>
<li><strong>Download speed</strong> — how fast data reaches you: streaming, browsing, downloading. Measured in megabits per second (Mbps).</li>
<li><strong>Upload speed</strong> — how fast you send data: video calls, uploading files and photos, live streaming, cloud backup.</li>
<li><strong>Ping (latency)</strong> — how long a tiny message takes to reach a server and come back, in milliseconds (ms). Lower is better, and it matters most for gaming and video calls.</li>
<li><strong>Jitter</strong> — how much the ping varies. High jitter causes choppy calls and lag spikes even when speed is good.</li>
</ul>
<p>Check your own connection in about 20 seconds:</p>
{{tool:internet-speed-test}}

<h2>How much speed do you need for each activity?</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Activity</th><th>Recommended speed</th></tr></thead>
<tbody>
<tr><td>Email, browsing, social media</td><td>1–5 Mbps</td></tr>
<tr><td>HD video streaming (Netflix, YouTube)</td><td>about 5 Mbps per stream</td></tr>
<tr><td>4K streaming</td><td>15–25 Mbps per stream</td></tr>
<tr><td>Video calls (Zoom, Teams, Meet) in HD</td><td>about 3–4 Mbps download and upload</td></tr>
<tr><td>Online gaming (while playing)</td><td>3–6 Mbps, with ping under 50 ms</td></tr>
<tr><td>Live streaming in 1080p (Twitch, YouTube)</td><td>8–10 Mbps upload</td></tr>
<tr><td>Working from home</td><td>25–50 Mbps download, 10 Mbps upload or more</td></tr>
</tbody></table></div>
<p>These figures are for one activity on one device. Add them up for everything your household does at the same time — a family streaming 4K on two TVs while someone is on a work call and someone else downloads a game needs far more than one person on a laptop.</p>

<h2>Recommended speed by household</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Household</th><th>Download</th><th>Upload</th></tr></thead>
<tbody>
<tr><td>1–2 people, browsing and HD streaming</td><td>25–50 Mbps</td><td>5–10 Mbps</td></tr>
<tr><td>3–4 people, 4K streaming and video calls</td><td>100–200 Mbps</td><td>10–20 Mbps</td></tr>
<tr><td>5+ people, gamers, home office, smart devices</td><td>300 Mbps – 1 Gbps</td><td>20–50+ Mbps</td></tr>
</tbody></table></div>

<h2>Mbps vs MB/s: why downloads seem slower than your plan</h2>
<p>Speeds are sold in <strong>megabits</strong> per second (Mbps), but file sizes and download windows usually show <strong>megabytes</strong> (MB). One byte is 8 bits, so divide your speed by 8: a 100 Mbps connection downloads at up to about 12.5 MB/s. In theory, a 50 GB game takes a little over an hour at 100 Mbps — in practice a bit longer, because game servers and your Wi-Fi rarely run at full speed.</p>

<h2>What is a good speed for gaming?</h2>
<p>Gamers often overestimate the speed they need. While you're playing, most online games use only a few megabits per second. What really matters is:</p>
<ul>
<li><strong>Ping:</strong> under 20 ms is excellent, 20–50 ms is good, and above 100 ms you'll notice lag in fast games.</li>
<li><strong>Jitter:</strong> ideally under 10 ms.</li>
<li><strong>Download speed:</strong> mostly affects how quickly you download games and updates, which can be 50–150 GB.</li>
<li><strong>A wired connection:</strong> plugging your console or PC into the router with an Ethernet cable usually lowers ping and jitter more than a faster plan does.</li>
</ul>

<h2>Why your speed test result is lower than your plan</h2>
<ul>
<li><strong>Wi-Fi.</strong> Distance, walls and floors weaken the signal. Test next to the router, or with a cable, to see your real line speed.</li>
<li><strong>Other devices.</strong> Downloads, cloud backups, game updates and streaming on other devices all share the connection.</li>
<li><strong>Busy hours.</strong> Evenings are peak time, when shared networks get congested.</li>
<li><strong>Your equipment.</strong> An old router, or a laptop with an older Wi-Fi card, can cap your speed.</li>
<li><strong>VPN.</strong> A VPN routes traffic through another server, which usually reduces speed and increases ping.</li>
</ul>
<p>For the most accurate result, pause other downloads and streaming, and run the test two or three times at different times of day. You can also check which network and provider you're on with <a href="/what-is-my-ip">What Is My IP</a> — useful for spotting a VPN that's still switched on.</p>
{{tool:what-is-my-ip}}

<h2>How to get faster internet without changing plans</h2>
<ol class="steps">
<li>Restart your router and modem every few weeks.</li>
<li>Place the router centrally and up high, away from thick walls, mirrors and microwaves.</li>
<li>Use the 5 GHz Wi-Fi band for devices near the router; it's faster than 2.4 GHz over short distances.</li>
<li>Plug fixed devices (TV, console, desktop) into the router with Ethernet cables.</li>
<li>For large homes, use a mesh Wi-Fi system or a wired access point instead of a simple extender.</li>
<li>If speeds are still far below your plan when wired, contact your provider with your test results.</li>
</ol>
`,
};

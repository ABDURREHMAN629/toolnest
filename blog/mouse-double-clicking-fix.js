module.exports = {
  title: 'Mouse Double Clicking on a Single Click? How to Test and Fix It',
  desc: 'If your mouse double clicks when you click once, test it in your browser to confirm the fault, then try these fixes — from Windows settings to cleaning and replacing the switch.',
  date: '2026-10-26',
  tools: ['mouse-double-click-test', 'cps-test'],
  faq: [
    ['Why does my mouse double click when I click once?', 'Almost always because the small switch under the button is wearing out. Its metal contact bounces and sends two clicks instead of one. Less often, it\'s caused by a Windows setting, a driver problem or dirt inside the switch.'],
    ['Can a double-clicking mouse be fixed?', 'Sometimes. Settings and driver problems are easy to fix, and a static discharge or cleaning occasionally helps. If the switch itself is worn, the reliable fixes are replacing the switch (soldering) or replacing the mouse.'],
    ['How can I tell if my mouse is double clicking?', 'Click normally in a mouse double-click test about 50–100 times. It flags any two clicks closer together than a human can click — usually under 80 milliseconds — and tells you which button is faulty.'],
    ['Is mouse double clicking covered by warranty?', 'Usually yes, if the mouse is still within its warranty period. Double-clicking from a worn switch is a common and well-known fault.'],
    ['How do I change my mouse to open files with a single click?', 'In Windows, open File Explorer options and under "Click items as follows" choose single-click or double-click. This is a setting, not a fault, so it doesn\'t cause random double clicks.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> a mouse that double clicks on a single click almost always has a worn button switch. Confirm it with a free <a href="/mouse-double-click-test">mouse double click test</a>, then try: checking Windows mouse settings, updating the mouse software, discharging static, and cleaning. If the test still shows double clicks, replace the switch or the mouse — or use the warranty.</p></blockquote>

<p>Files open when you meant to select them, drag-and-drop lets go halfway, and games register two shots instead of one. Mouse double clicking is one of the most common computer faults — and it can happen to cheap and expensive mice alike. Here's how to confirm the problem and fix it.</p>

<h2>Why mice start double clicking</h2>
<p>Under each mouse button is a small <strong>microswitch</strong>: a thin metal spring that snaps against a contact when you press. Over hundreds of thousands of clicks, the metal tires and oxidises. Instead of making one clean contact, it "bounces" and sends two clicks a few milliseconds apart. Other causes include:</p>
<ul>
<li>Dust or debris inside the switch.</li>
<li>Static build-up in wireless mice.</li>
<li>Mouse software or driver settings (for example a very low "debounce time" on some gaming mice).</li>
<li>Windows settings that make normal clicking behave unexpectedly.</li>
</ul>

<h2>Step 1: Test your mouse for double clicking</h2>
<ol class="steps">
<li>Open the <a href="/mouse-double-click-test">Mouse Double Click Test</a>.</li>
<li>Click normally inside the box — single clicks, at your usual speed — 50 to 100 times. Faults often appear only after many clicks.</li>
<li>Test the right, middle (wheel) and side buttons too, and scroll the wheel both ways.</li>
<li>Read the result. Any two presses closer together than the threshold (80 ms by default) are flagged as a double click, and the table shows which button is affected.</li>
</ol>
{{tool:mouse-double-click-test}}
<p>A real human double-click is normally well over 80 ms apart, so a flagged click is almost certainly the hardware. If you get a few false alarms because you click very fast, switch the threshold to 50 ms. The click log shows the exact gap between every click.</p>

<h2>Step 2: Rule out settings and software</h2>
<ul>
<li><strong>File Explorer click setting (Windows):</strong> open File Explorer options and check <em>Click items as follows</em>. "Single-click to open" can feel like a double click, but it isn't a fault.</li>
<li><strong>Double-click speed:</strong> Settings → Bluetooth &amp; devices → Mouse → Additional mouse settings → Buttons tab. A very slow setting can make two separate clicks count as a double click.</li>
<li><strong>ClickLock:</strong> on the same Buttons tab, make sure <em>ClickLock</em> is off. It holds the button down after a long press, which makes dragging behave strangely.</li>
<li><strong>Mouse software:</strong> update Logitech, Razer, SteelSeries or other mouse software and firmware. Some gaming mice have a <em>debounce time</em> setting — raising it slightly can hide a worn switch.</li>
<li><strong>Driver:</strong> in Device Manager, expand Mice and other pointing devices, uninstall the mouse and restart.</li>
<li><strong>Try another computer or USB port.</strong> If the mouse double clicks everywhere, the problem is in the mouse.</li>
</ul>

<h2>Step 3: Quick hardware fixes to try</h2>
<ol class="steps">
<li><strong>Discharge static (wireless mice):</strong> switch the mouse off, remove the battery, then hold down both buttons for about 30 seconds. Put the battery back and test again.</li>
<li><strong>Blow out dust:</strong> use short bursts of compressed air into the gaps around the button while clicking it.</li>
<li><strong>Click firmly a few dozen times:</strong> sometimes this temporarily clears oxidation from the switch contacts. It's a short-term fix at best.</li>
</ol>
<p>After each step, run the <a href="/mouse-double-click-test">double click test</a> again to see if anything changed.</p>

<h2>Step 4: Permanent fixes</h2>
<ul>
<li><strong>Warranty:</strong> if the mouse is still under warranty, contact the manufacturer — double clicking is a well-known fault and is usually covered.</li>
<li><strong>Replace the switch:</strong> with a soldering iron, you can replace the worn microswitch with a new one, often for a few dollars. Many tutorials exist for popular mice; it takes 20–30 minutes if you're comfortable with soldering.</li>
<li><strong>Swap buttons temporarily:</strong> in Windows mouse settings you can swap the primary and secondary buttons to keep working while you wait for a repair.</li>
<li><strong>Replace the mouse:</strong> if you buy a new one, look for models with <strong>optical switches</strong>, which use light instead of a metal contact and don't suffer from this kind of bounce.</li>
</ul>

<h2>Double clicking in games</h2>
<p>In games, a bouncing switch causes double shots, accidental item drops and failed drag-clicks. If you also want to check how fast you can click, the <a href="/cps-test">CPS test</a> measures clicks per second — but run the double-click test first, because a faulty switch inflates CPS scores with clicks you never made.</p>
{{tool:cps-test}}
`,
};

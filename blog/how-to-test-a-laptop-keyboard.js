module.exports = {
  title: 'How to Test a Laptop Keyboard (and Fix Keys That Stop Working)',
  desc: 'Test every key on your laptop keyboard online in a minute, find dead, sticky or double-pressing keys, and try the fixes that work on Windows laptops and MacBooks.',
  date: '2026-10-27',
  tools: ['laptop-keyboard-test', 'keyboard-tester', 'keyboard-ghosting-test'],
  faq: [
    ['How do I check if all my keyboard keys are working?', 'Open an online keyboard tester, choose your laptop layout and press every key once. Keys that turn green work. Use "Highlight untested keys" to see which ones you missed or which didn\'t respond.'],
    ['Why can\'t the tester detect my Fn key?', 'The Fn key is handled inside the laptop itself and never sent to the browser, so no website can detect it on its own. Test it by pressing Fn together with another key, such as a brightness or volume key.'],
    ['Why do some keys type the wrong symbols?', 'Usually the keyboard language or layout in your operating system doesn\'t match your physical keyboard — for example US vs UK. Change it in Windows Settings → Time & language, or on a Mac in System Settings → Keyboard.'],
    ['Can I fix a laptop keyboard myself?', 'Software problems (settings, drivers, layout) are easy to fix yourself. A single sticky key can often be cleaned. If several keys are dead after a spill or a drop, the keyboard usually needs replacing by a repair shop.'],
    ['Does the keyboard test work on a MacBook?', 'Yes. Choose the Apple MacBook layout. Most keys are detected; the Touch ID button and Fn/Globe key can\'t be seen by browsers.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> open a free <a href="/laptop-keyboard-test">laptop keyboard test</a>, pick your layout (Windows laptop, Lenovo ThinkPad or MacBook), and press every key. Working keys turn green. Keys that stay grey don't register, and keys flagged as "double-press" are sending two presses at once.</p></blockquote>

<p>A key that doesn't work, types twice, or only works when you press hard is frustrating — especially on a laptop, where you can't simply swap the keyboard. Before you book a repair, test every key properly. It takes about a minute and tells you whether the problem is one key, several keys, or a software setting.</p>

<h2>How to test your laptop keyboard online</h2>
<ol class="steps">
<li>Open the <a href="/laptop-keyboard-test">Laptop Keyboard Test</a>.</li>
<li>Choose your <strong>layout</strong>: Windows laptop (Dell, HP, ASUS, Acer and most others), Lenovo ThinkPad / IdeaPad, or Apple MacBook. Tick <strong>UK / EU (ISO)</strong> if your Enter key is tall and you have a key between left Shift and Z. Turn on the number pad if your laptop has one.</li>
<li>Press every key once, row by row. Tested keys turn <strong>green</strong>; keys you're holding turn blue.</li>
<li>Click <strong>Highlight untested keys</strong> to spot any you missed — or any that didn't respond.</li>
</ol>
{{tool:laptop-keyboard-test}}
<p>Brand-specific layouts are also available for <a href="/dell-keyboard-test">Dell</a>, <a href="/hp-keyboard-test">HP</a>, <a href="/lenovo-keyboard-test">Lenovo</a>, <a href="/asus-keyboard-test">ASUS</a>, <a href="/acer-keyboard-test">Acer</a> and <a href="/macbook-keyboard-test">MacBook</a> keyboards.</p>

<h2>Reading the results</h2>
<ul>
<li><strong>A key stays grey:</strong> the press isn't reaching the computer. Try it several times and with more force.</li>
<li><strong>A key works only when pressed hard:</strong> often dirt under the key or a worn rubber dome.</li>
<li><strong>"Double-press warnings" (key chatter):</strong> the tester flags keys that register twice within 25 milliseconds of being released — faster than a human can press. That's a sign of a failing switch, or dirt under the key.</li>
<li><strong>Several keys in one row or area dead:</strong> usually a hardware fault, such as liquid damage or a loose keyboard cable.</li>
<li><strong>Keys can't be pressed together:</strong> some keyboards can only register a limited number of keys at once. Check this with the <a href="/keyboard-ghosting-test">keyboard ghosting test</a>.</li>
</ul>
<p>Dashed keys such as <strong>Fn</strong> and Touch ID are handled inside the laptop and can't be detected by any website. Test Fn by pressing it together with a media key (volume, brightness) and checking that the action happens.</p>

<h2>Fixes for keys that don't work (Windows)</h2>
<ol class="steps">
<li><strong>Restart the laptop.</strong> It sounds obvious, but it clears many temporary driver glitches.</li>
<li><strong>Check Filter Keys and Sticky Keys.</strong> In Settings → Accessibility → Keyboard, turn off Filter Keys (which ignores quick or repeated presses) and Sticky Keys. Holding the right Shift key for 8 seconds can switch Filter Keys on by accident.</li>
<li><strong>Check Num Lock and Fn Lock.</strong> If number-pad keys don't type numbers, press Num Lock. If the top row changes volume instead of acting as F1–F12 (or the other way round), toggle Fn Lock — often Fn + Esc.</li>
<li><strong>Check the keyboard language.</strong> If keys type the wrong symbols (@ and " swapped, for example), go to Settings → Time &amp; language → Language &amp; region and make sure the keyboard layout matches your keyboard.</li>
<li><strong>Reinstall the keyboard driver.</strong> Open Device Manager, expand Keyboards, right-click your keyboard and choose Uninstall device, then restart. Windows reinstalls the driver automatically.</li>
<li><strong>Install updates.</strong> Run Windows Update and your laptop maker's update app (Dell, HP, Lenovo and ASUS all have one) for BIOS and driver fixes.</li>
</ol>
<p><strong>Quick hardware check:</strong> restart and enter the BIOS/UEFI setup (usually F2, F10, F12, Del or Esc at start-up). If the keys work there, the keyboard hardware is fine and the problem is in Windows.</p>

<h2>Fixes on a MacBook</h2>
<ul>
<li>Check <strong>System Settings → Accessibility → Keyboard</strong> and turn off <em>Slow Keys</em> and <em>Sticky Keys</em> if they're on.</li>
<li>Check the input source in <strong>System Settings → Keyboard → Text Input</strong> if keys type the wrong characters.</li>
<li>For a sticky key, Apple's recommended cleaning method is to hold the laptop at a 75-degree angle and spray compressed air across the keys in a zig-zag, then repeat with the laptop turned to its right side and its left side.</li>
</ul>

<h2>Cleaning a sticky or unresponsive key</h2>
<ol class="steps">
<li>Shut down the laptop and unplug it.</li>
<li>Tilt it and use short bursts of compressed air around the problem key from several angles.</li>
<li>For sticky residue, lightly dampen a cotton swab with isopropyl alcohol and clean around the key edges — never pour liquid onto the keyboard.</li>
<li>Avoid prying keycaps off unless you know how your model's clips work; laptop keycaps break easily.</li>
</ol>

<h2>If you spilled a drink on the keyboard</h2>
<p>Turn the laptop off immediately and unplug it. Turn it upside down in a tent shape so liquid drains out of the keyboard, wipe what you can, and leave it to dry for at least 24–48 hours before switching it on. Sugary drinks leave residue, so if keys are sticky or dead after drying, take it to a repair shop.</p>

<h2>When to replace the keyboard</h2>
<p>If several keys are still dead after these steps, the keyboard or its cable is faulty. Many laptop keyboards can be replaced by a repair shop; on some models the keyboard is part of the top case, which costs more. In the meantime, a USB or Bluetooth keyboard keeps you working — and you can test it with the same <a href="/keyboard-tester">keyboard tester</a>.</p>
`,
};

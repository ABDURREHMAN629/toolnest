module.exports = {
  title: 'Stick Drift: How to Test It and Fix It (PS5, Xbox, Switch and PC)',
  desc: 'Is your controller drifting? Test both sticks in your browser in 5 seconds, learn what causes stick drift, and try the fixes that work — from calibration and deadzones to cleaning and repair.',
  date: '2026-10-26',
  tools: ['stick-drift-test', 'gamepad-tester'],
  faq: [
    ['Can stick drift fix itself?', 'Drift caused by dirt or debris sometimes improves after cleaning or simply goes away for a while. Drift caused by worn parts inside the stick usually gets worse over time and needs a repair or replacement.'],
    ['Is stick drift covered by warranty?', 'Usually, yes, if the controller is still within its warranty period and has not been opened. Contact the manufacturer (Sony, Microsoft or Nintendo) before trying any repair that involves opening the controller.'],
    ['Does the drift test work with a PS5 or Xbox controller?', 'Yes. Connect the controller to a computer or Android phone by USB cable or Bluetooth, open the tester in Chrome, Edge or Firefox and press any button so the browser detects it.'],
    ['What is a deadzone?', 'A deadzone is a small area around the centre of the stick where movement is ignored. Increasing the deadzone in a game\'s controller settings hides small amounts of drift, at the cost of slightly less precise aiming.'],
    ['Do Hall effect sticks get stick drift?', 'Hall effect sticks measure position with magnets instead of parts that rub together, so they don\'t wear out in the way that causes most drift. They are much more resistant to it, though no part lasts forever.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> stick drift is when your character or camera moves without you touching the stick, usually because the stick's sensor is worn or dirty. Test it with a free <a href="/stick-drift-test">stick drift test</a>, then try (1) calibration or a controller reset, (2) a bigger deadzone in your game, (3) cleaning around the stick, and (4) a warranty repair or replacement stick.</p></blockquote>

<p>Stick drift is one of the most common controller problems on PlayStation, Xbox, Nintendo Switch and PC. It can start as a tiny creep in menus and grow until your aim slides off target in every match. The good news: you can confirm it in seconds and often reduce or fix it without buying a new controller.</p>

<h2>What causes stick drift?</h2>
<p>Most controllers measure each stick's position with two small sensors called <strong>potentiometers</strong> — one for left–right and one for up–down. Inside each one, a contact slides over a resistive track. Over months of use, that track wears down and collects dust, so the controller reports a small movement even when the stick is resting in the centre. Other causes include:</p>
<ul>
<li><strong>Dirt and debris</strong> — crumbs, dust and skin oils getting under the stick's rubber cap.</li>
<li><strong>Worn springs</strong> — the springs that pull the stick back to the centre get weaker.</li>
<li><strong>Drops and pressure</strong> — knocks can bend or shift parts inside the stick module.</li>
<li><strong>Calibration or firmware</strong> — less often, the controller's idea of "centre" is simply wrong.</li>
</ul>

<h2>How to test for stick drift</h2>
<ol class="steps">
<li>Connect your controller to a computer or Android phone with a USB cable or Bluetooth.</li>
<li>Open the <a href="/stick-drift-test">stick drift test</a> in Chrome, Edge or Firefox and <strong>press any button</strong> — browsers only show a controller after a button press.</li>
<li>Click <strong>5-second drift test</strong>, then let go of both sticks and put the controller down.</li>
<li>Read the result for each stick: the largest movement it reported while you weren't touching it.</li>
</ol>
{{tool:stick-drift-test}}
<div class="table-wrap"><table class="table">
<thead><tr><th>Worst offset at rest</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Below 0.05</td><td>Centred — normal. Every stick shows a tiny bit of noise.</td></tr>
<tr><td>0.05 – 0.12</td><td>Slight offset — most games' default deadzones hide this.</td></tr>
<tr><td>Above 0.12</td><td>Drift likely — you'll probably notice it in games.</td></tr>
</tbody></table></div>
<p>While you're there, rotate each stick slowly around its edge. The trail it draws should be a smooth, round circle; a squashed or patchy circle points to a worn stick. The same <a href="/gamepad-tester">controller tester</a> also checks every button, both triggers and vibration.</p>

<h2>How to fix stick drift</h2>
<p>Try these in order — from free and quick to more involved.</p>

<h3>1. Calibrate or reset the controller</h3>
<ul>
<li><strong>Nintendo Switch:</strong> System Settings → Controllers and Sensors → Calibrate Control Sticks, then follow the on-screen steps.</li>
<li><strong>PS5 DualSense / PS4 DualShock:</strong> there's no stick calibration menu, but a reset can help. With the console off, press the small reset button in the hole on the back of the controller with a pin for about 5 seconds, then reconnect it with a USB cable.</li>
<li><strong>Xbox controllers:</strong> update the controller firmware with the Xbox Accessories app (on the console or on Windows), then unplug and reconnect it.</li>
<li><strong>Steam and Steam Deck:</strong> Steam's controller settings include calibration and deadzone options for each stick.</li>
<li><strong>Windows:</strong> for many controllers, type <em>Set up USB game controllers</em> in the Start menu, select yours, then <strong>Properties → Settings → Calibrate</strong>.</li>
</ul>

<h3>2. Increase the deadzone in your game</h3>
<p>Most shooters and action games — Fortnite, Call of Duty, Apex Legends, Battlefield and others — have a stick deadzone setting in their controller options. Raise the deadzone for the drifting stick just until the movement stops. It's the quickest way to keep playing, though very large deadzones make aiming feel less responsive.</p>

<h3>3. Clean around the stick</h3>
<p>Turn the controller off. Blow compressed air around the base of the stick while rotating it in full circles. Some players also dab a little isopropyl alcohol (90% or stronger) around the base with a cotton swab, rotate the stick for a minute and let it dry completely before turning the controller back on. Don't pour liquid into the controller, and skip this step if you plan to use the warranty.</p>

<h3>4. Use the warranty or a repair service</h3>
<p>If the controller is still under warranty, contact Sony, Microsoft or Nintendo for a repair or replacement — opening it yourself usually voids the warranty. Nintendo has repaired drifting Joy-Con controllers free of charge in many regions, so check Nintendo's support site for yours. Out of warranty, a repair shop can replace the stick module, and some offer <strong>Hall effect</strong> replacement sticks that use magnets and resist drift.</p>

<h3>5. Replace the controller</h3>
<p>If drift keeps coming back, a new controller may be the most reliable fix. Consider one with Hall effect sticks, which don't wear out in the way that causes most drift.</p>

<h2>How to make your controller last longer</h2>
<ul>
<li>Wash and dry your hands before long sessions, and avoid eating over the controller.</li>
<li>Don't press the sticks hard against their edges for long periods.</li>
<li>Store controllers in a closed drawer or case so dust doesn't settle around the sticks.</li>
<li>Test a new or second-hand controller with the <a href="/gamepad-tester">controller tester</a> as soon as you get it, while you can still return it.</li>
</ul>
`,
};

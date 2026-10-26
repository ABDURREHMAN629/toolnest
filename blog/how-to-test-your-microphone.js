module.exports = {
  title: 'How to Test Your Microphone (and Fix a Mic That Isn\'t Working)',
  desc: 'Check your microphone online in seconds and hear a playback of your voice. Then fix common problems on Windows, Mac, Discord, Zoom and Teams — plus a quick webcam check.',
  date: '2026-10-26',
  tools: ['mic-test', 'webcam-test', 'voice-recorder'],
  faq: [
    ['How can I test my mic and hear myself?', 'Open an online mic test, allow microphone access, and click "Record 5-second sample". It plays your recording back so you can hear exactly how you sound.'],
    ['Why is my microphone not working in Windows 11?', 'Most often, apps don\'t have permission to use it, the wrong input device is selected, or the mic is muted. Check Settings → Privacy & security → Microphone and Settings → System → Sound → Input.'],
    ['How do I test my mic on Discord?', 'Open User Settings → Voice & Video and click "Let\'s Check" under Mic Test. Discord plays your voice back to you.'],
    ['Why does my microphone sound quiet?', 'The input volume may be low, the mic may be too far from your mouth, or you may be using a built-in laptop mic instead of your headset. Raise the input volume in your sound settings and choose the right device.'],
    ['Is the online mic test private?', 'Yes. The test runs in your browser and the sample recording is played back on your device; it isn\'t uploaded or stored.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> open a free <a href="/mic-test">mic test</a>, click start and allow microphone access, then speak. If the level bar moves, your mic works. Click <strong>Record 5-second sample</strong> to hear how you sound. If nothing happens, check the selected input device and your app permissions.</p></blockquote>

<p>Before an interview, an online class, a gaming session or a podcast, it's worth checking that your microphone works — and that people will actually hear you clearly. A test takes 30 seconds and catches most problems before they become embarrassing.</p>

<h2>How to test your microphone online</h2>
<ol class="steps">
<li>Open the <a href="/mic-test">Mic Test</a> and click start.</li>
<li>When your browser asks, <strong>allow access to the microphone</strong>.</li>
<li>Speak normally. The level meter should move with your voice, and the test confirms when it can hear you.</li>
<li>If you have several microphones (laptop, headset, webcam), choose the one you want from the device list.</li>
<li>Click <strong>Record 5-second sample</strong> and listen to the playback to check the sound quality.</li>
</ol>
{{tool:mic-test}}
<p>The test also shows details such as the device name, sample rate and whether echo cancellation and noise suppression are on. Nothing is uploaded — the test and the recording stay in your browser.</p>

<h2>If the test can't hear you</h2>
<ul>
<li><strong>Check the mute switch.</strong> Many headsets have a mute button or a flip-up mic boom; some laptops have a mic mute key (often F4 or a key with a crossed-out microphone).</li>
<li><strong>Pick the right device.</strong> The browser may be using a different microphone than you think — choose yours from the list.</li>
<li><strong>Allow browser access.</strong> Click the padlock or settings icon next to the web address and set Microphone to Allow, then reload.</li>
<li><strong>Close other apps.</strong> Some apps lock the microphone while they're open. Quit them and try again.</li>
<li><strong>Re-plug it.</strong> Unplug USB or Bluetooth headsets and connect them again, or try another USB port.</li>
</ul>

<h2>Fix microphone problems on Windows 11 and 10</h2>
<ol class="steps">
<li>Go to <strong>Settings → Privacy &amp; security → Microphone</strong> and turn on <em>Microphone access</em>, <em>Let apps access your microphone</em> and <em>Let desktop apps access your microphone</em>.</li>
<li>Go to <strong>Settings → System → Sound</strong>. Under <em>Input</em>, choose your microphone and speak — the input volume bar should move. Click the device to raise its input volume.</li>
<li>Still not working? Under <em>Input</em>, run the sound troubleshooter, or reinstall the device in Device Manager (Audio inputs and outputs → right-click → Uninstall device, then restart).</li>
</ol>

<h2>Fix microphone problems on a Mac</h2>
<ol class="steps">
<li>Open <strong>System Settings → Privacy &amp; Security → Microphone</strong> and make sure your browser or app is switched on.</li>
<li>Open <strong>System Settings → Sound → Input</strong>, select your microphone and check that the input level moves when you speak. Adjust the input volume slider.</li>
</ol>

<h2>Test your mic in Discord, Zoom and Teams</h2>
<ul>
<li><strong>Discord:</strong> User Settings → Voice &amp; Video → choose your input device → click <strong>Let's Check</strong> under Mic Test. Also check Input Sensitivity, which can cut off quiet voices.</li>
<li><strong>Zoom:</strong> Settings → Audio → choose your microphone → <strong>Test Mic</strong>, which records and plays back a short clip.</li>
<li><strong>Microsoft Teams:</strong> Settings → Devices → choose your microphone → <strong>Make a test call</strong>.</li>
<li><strong>Google Meet:</strong> before joining, click "Check your audio and video" to test your microphone and speakers.</li>
</ul>

<h2>Make your microphone sound better</h2>
<ul>
<li><strong>Distance:</strong> keep a headset mic about two fingers' width from the corner of your mouth, and a desk mic about 15–30 cm (6–12 inches) away.</li>
<li><strong>Room:</strong> soft furnishings reduce echo; avoid bare rooms and sitting with your back to a hard wall.</li>
<li><strong>Noise:</strong> turn off fans, close windows and use your app's noise suppression.</li>
<li><strong>Use a headset instead of laptop speakers</strong> so the mic doesn't pick up the other person's voice (echo).</li>
<li><strong>Record a longer sample</strong> with the <a href="/voice-recorder">voice recorder</a> to check how a full sentence sounds.</li>
</ul>

<h2>Check your webcam too</h2>
<p>For video calls, test your camera at the same time. The <a href="/webcam-test">webcam test</a> shows a live preview, your camera's resolution and frame rate, lets you switch between cameras, mirror the image and take a test photo.</p>
{{tool:webcam-test}}
`,
};

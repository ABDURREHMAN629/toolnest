module.exports = {
  title: 'How to Screen Record on Windows, Mac, iPhone and Android (With Audio)',
  desc: 'Record your screen for free on any device: built-in shortcuts for Windows, Mac, iPhone and Android, plus a browser recorder that captures your microphone and system audio.',
  date: '2026-10-26',
  tools: ['screen-recorder', 'video-converter', 'video-trimmer'],
  faq: [
    ['How do I screen record on Windows with audio?', 'Use a browser screen recorder and tick both "Record microphone" and "Record system / tab audio", then share your entire screen with "Share system audio" switched on. The Xbox Game Bar (Win + Alt + R) also records game and app audio.'],
    ['What is the shortcut to screen record on a Mac?', 'Press Shift + Command + 5, choose Record Entire Screen or Record Selected Portion, and click Record. Click the stop button in the menu bar when you\'re done.'],
    ['Why is my screen recording black?', 'Streaming services like Netflix and some apps block recording to protect copyrighted content, so the video shows black. Other causes are recording the wrong screen or a graphics setting such as hardware acceleration.'],
    ['Is there a time limit on screen recording?', 'Built-in recorders and the browser recorder have no fixed time limit; recordings are limited by your free disk space and memory. Very long recordings make large files.'],
    ['Can I screen record on my phone without an app?', 'Yes. iPhone has Screen Recording in Control Center, and most Android phones have a Screen record tile in Quick Settings.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> <strong>Windows 11:</strong> press Win + Shift + R (Snipping Tool). <strong>Mac:</strong> press Shift + Command + 5. <strong>iPhone:</strong> Control Center → Screen Recording. <strong>Android:</strong> Quick Settings → Screen record. To record with your microphone and computer sound in one go, use a free <a href="/screen-recorder">online screen recorder</a>.</p></blockquote>

<p>Screen recordings are perfect for tutorials, bug reports, presentations, online lessons and saving a video call. Every modern device has a built-in recorder, and a browser recorder fills the gaps — like recording system audio on a computer.</p>

<h2>Screen record in your browser (Windows, Mac, Linux, Chromebook)</h2>
<ol class="steps">
<li>Open the <a href="/screen-recorder">Screen Recorder</a> in Chrome, Edge, Firefox or Safari on a computer.</li>
<li>Choose your options: <strong>Record microphone</strong> for your voice, <strong>Record system / tab audio</strong> for sound from your computer or a browser tab, the <strong>quality</strong> (720p, 1080p or 1440p) and a <strong>countdown</strong> of 3 or 5 seconds.</li>
<li>Click start and pick what to share: your entire screen, one window or a single browser tab. To capture computer sound, turn on the "share audio" option in that dialog.</li>
<li>Click stop when you're done, preview the video and download it.</li>
</ol>
{{tool:screen-recorder}}
<p>Nothing is uploaded — the recording is created and saved on your computer. Depending on your browser, the file is MP4 or WebM. If you need MP4 for editing or sharing, convert it with the <a href="/video-converter">video converter</a>, and cut the start and end with the <a href="/video-trimmer">video trimmer</a>.</p>
<p><strong>About system audio:</strong> sharing a browser tab includes its sound in Chrome and Edge on every system. Sharing your whole screen with computer sound works on Windows and Chromebooks; on a Mac, browsers generally can only capture a tab's sound.</p>

<h2>How to screen record on Windows 11 and 10</h2>
<h3>Snipping Tool (Windows 11)</h3>
<p>Press <strong>Win + Shift + R</strong>, or open Snipping Tool and choose the video camera icon. Drag to select the area, click <strong>Start</strong>, and stop from the toolbar. Recent versions can include microphone and system audio. The video is saved as MP4.</p>
<h3>Xbox Game Bar (Windows 10 and 11)</h3>
<p>Press <strong>Win + G</strong> to open Game Bar, or <strong>Win + Alt + R</strong> to start recording the current app straight away. It records one app or game window (not the desktop or File Explorer), with game audio and optionally your microphone. Recordings go to your Videos → Captures folder.</p>

<h2>How to screen record on a Mac</h2>
<ol class="steps">
<li>Press <strong>Shift + Command + 5</strong>.</li>
<li>Choose <strong>Record Entire Screen</strong> or <strong>Record Selected Portion</strong>.</li>
<li>Open <strong>Options</strong> to pick a microphone, a timer and where to save.</li>
<li>Click <strong>Record</strong>, then the stop button in the menu bar when you're finished.</li>
</ol>
<p>The Mac's built-in recorder captures your microphone but not your Mac's own sound. To include sound from a video or website, record a browser tab with the online screen recorder and turn on tab audio. QuickTime Player (File → New Screen Recording) opens the same tool.</p>

<h2>How to screen record on iPhone and iPad</h2>
<ol class="steps">
<li>If Screen Recording isn't in Control Center yet, add it in <strong>Settings → Control Center</strong> (on newer iOS versions, tap + in Control Center to add controls).</li>
<li>Open Control Center and tap the <strong>Screen Recording</strong> button. Recording starts after a 3-second countdown.</li>
<li>To include your voice, touch and hold the button and turn on <strong>Microphone</strong>.</li>
<li>Tap the red indicator at the top of the screen to stop. The video is saved in Photos.</li>
</ol>

<h2>How to screen record on Android</h2>
<ol class="steps">
<li>Swipe down twice to open <strong>Quick Settings</strong>.</li>
<li>Tap <strong>Screen record</strong> (on Samsung phones, <strong>Screen recorder</strong>). If it isn't there, tap the edit (pencil) icon and drag it in.</li>
<li>Choose whether to record audio (device sound, microphone or both) and whether to show touches, then start.</li>
<li>Stop from the notification. The video is saved to your gallery.</li>
</ol>
<p>Phone browsers don't allow websites to record the screen, so on phones always use the built-in recorder.</p>

<h2>Tips for better screen recordings</h2>
<ul>
<li><strong>Close notifications</strong> and turn on Do Not Disturb so pop-ups don't appear in your video.</li>
<li><strong>Record a window or tab, not the whole screen,</strong> when you can — it keeps private things out of view and makes smaller files.</li>
<li><strong>Use a headset microphone</strong> for clearer voice and less room echo.</li>
<li><strong>Do a 10-second test</strong> to check that sound is being recorded before you record a long session.</li>
<li><strong>Keep the cursor slow</strong> and pause for a moment before each click so viewers can follow.</li>
</ul>

<h2>Why screen recordings come out black</h2>
<p>Netflix, Disney+, Prime Video and other streaming services use copy protection (DRM) that blocks recording, so the video appears black — that's intentional and can't be bypassed legally. If an ordinary app or game records black, make sure you selected the right screen or window, and try turning off hardware acceleration in your browser settings.</p>
`,
};

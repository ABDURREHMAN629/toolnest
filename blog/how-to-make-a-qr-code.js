module.exports = {
  title: "How to Make a QR Code for Free (That Never Expires)",
  desc: 'Make a free QR code for a link, Wi-Fi, WhatsApp, Google reviews, a form or a PDF in seconds — and why static QR codes are the ones that never stop working.',
  date: '2026-10-26',
  tools: ['qr-code-generator', 'qr-code-scanner'],
  faq: [
    ['Do free QR codes expire?', 'Static QR codes never expire, because the link or information is stored inside the code itself. Codes from some "free" generators are dynamic: they point to the company\'s redirect service, which can stop working when a free trial ends.'],
    ['Can I make a QR code for a PDF?', 'Yes. Upload the PDF to Google Drive, Dropbox or OneDrive, set sharing to "anyone with the link", copy the link and turn that link into a QR code.'],
    ['How big should a printed QR code be?', 'At least 2 × 2 cm (about 0.8 inches) for scanning up close. A useful rule is about 1 cm of QR code width for every 10 cm of scanning distance.'],
    ['Can I put a logo in my QR code?', 'Yes. Add the logo in the centre and use high error correction, which lets the code still scan even though part of it is covered. Always test it before printing.'],
    ['Can I change where a QR code points after printing it?', 'Not with a static code — its content is fixed. If you need to change the destination later, point the QR code at a page you control, such as your own website, and update that page instead.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> open a free <a href="/qr-code-generator">QR code generator</a>, choose what the code is for (link, Wi-Fi, WhatsApp, contact and more), enter the details and download the PNG. Codes made this way are <strong>static</strong>, so they never expire.</p></blockquote>

<p>QR codes are everywhere — on menus, posters, business cards, packaging and wedding invitations. Making one takes seconds and costs nothing, but there's one trap worth knowing about before you print hundreds of copies.</p>

<h2>Static vs dynamic QR codes (why some "free" codes stop working)</h2>
<ul>
<li><strong>Static QR codes</strong> store your information — the link, Wi-Fi password or text — directly in the pattern. They work forever, offline, with no account and no tracking.</li>
<li><strong>Dynamic QR codes</strong> store a short link to a company's server, which then redirects to your page. They let you change the destination and count scans, but if the service shuts down or your free trial ends, every printed code stops working.</li>
</ul>
<p>Many sites advertise "free" QR codes that are really dynamic codes with an expiry date hidden in the terms. The generator on WebToolNest makes static codes, created in your browser, so they keep working permanently.</p>

<h2>How to make a QR code in 3 steps</h2>
<ol class="steps">
<li>Open the <a href="/qr-code-generator">QR Code Generator</a> and pick a type: URL, text, Wi-Fi, WhatsApp, email, phone, SMS or contact card.</li>
<li>Fill in the details. Optionally change the size, colours and style (square, rounded or dots), make the background transparent, or add a logo in the centre.</li>
<li>Download the PNG and test it with your phone's camera before you print or share it.</li>
</ol>
{{tool:qr-code-generator}}

<h2>QR codes for popular uses</h2>
<h3>A website or link</h3>
<p>Choose <strong>URL</strong> and paste the full address, including <code>https://</code>. Shorter links make simpler, easier-to-scan codes.</p>
<h3>Wi-Fi (guests join without typing the password)</h3>
<p>Choose <strong>Wi-Fi</strong>, enter the network name (SSID) exactly as it appears, the password and the security type (usually WPA/WPA2/WPA3). iPhone and Android cameras recognise Wi-Fi codes and offer to join the network. Great for homes, cafés and offices.</p>
<h3>WhatsApp chat</h3>
<p>Choose <strong>WhatsApp</strong>, enter your number with the country code (for example +44…), and optionally a pre-filled message. Customers scan it and land straight in a chat with you.</p>
<h3>Google reviews</h3>
<p>In your Google Business Profile, find the option to <strong>ask for reviews</strong> and copy your review link. Turn that link into a QR code and put it on receipts, tables or the counter.</p>
<h3>Google Form</h3>
<p>In Google Forms, click <strong>Send</strong>, choose the link tab, copy the link, and paste it into the URL option.</p>
<h3>A PDF, menu or document</h3>
<p>QR codes can't hold a whole file, so upload the PDF to Google Drive, Dropbox or OneDrive, set sharing to <em>anyone with the link</em>, copy the link and make a URL QR code. Keep the file in the same place — if you delete or move it, the code breaks.</p>
<h3>Instagram, Facebook or a business card</h3>
<p>Use the URL option with your profile link, or the <strong>Contact</strong> option to create a vCard code that adds your name, phone, email, company and website straight to someone's contacts.</p>

<h2>Design tips so your QR code always scans</h2>
<ul>
<li><strong>Keep strong contrast.</strong> Dark code on a light background works best. Light codes on dark backgrounds and low-contrast colour pairs fail on many phones.</li>
<li><strong>Leave a quiet zone.</strong> Keep a clear margin around the code — don't print it touching other graphics or the edge of the paper.</li>
<li><strong>Logos need error correction.</strong> When you add a logo, the generator switches to high error correction, which lets the code survive part of it being covered. Keep the logo small.</li>
<li><strong>Size it for the distance.</strong> At least 2 × 2 cm for a business card; for a poster read from 2 metres away, about 20 cm wide.</li>
<li><strong>Test on two phones</strong> — ideally one iPhone and one Android — before printing.</li>
</ul>

<h2>QR codes in Canva, Word and Google Docs</h2>
<p>Canva has a built-in QR code app for links. For anything else — Wi-Fi, WhatsApp, contact cards — or for Word and Google Docs, which don't create QR codes, download the PNG from the generator and insert it as an image.</p>

<h2>How to scan a QR code</h2>
<p>On iPhone and most Android phones, open the camera app and point it at the code, then tap the link that appears. On a computer, or for a QR code inside a screenshot, use the <a href="/qr-code-scanner">QR code scanner</a> — it reads codes from your webcam or from an image file.</p>
{{tool:qr-code-scanner}}

<h2>Stay safe with QR codes</h2>
<p>Scammers sometimes stick fake QR codes over real ones on parking meters and posters. Before opening a link from a QR code, check that the web address looks right, and never enter payment details or passwords on a page you reached from a code you don't trust.</p>
`,
};

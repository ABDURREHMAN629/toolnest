module.exports = {
  title: 'How to Reduce Image Size in KB (to 100 KB, 50 KB, 20 KB or Less)',
  desc: 'Shrink a photo to an exact size like 100 KB, 50 KB or 20 KB for online forms, email and websites — free, in your browser. Plus how to resize to exact pixel dimensions.',
  date: '2026-10-26',
  tools: ['compress-image', 'resize-image', 'crop-image'],
  faq: [
    ['How do I reduce a photo to 100 KB?', 'Open an image compressor, choose "Target size (KB)", enter 100 and download the result. If it looks blurry, first reduce its width to about 1,000–1,200 pixels, then compress.'],
    ['How do I reduce image size without losing quality?', 'Reduce the pixel dimensions to what you actually need and use a quality setting around 75–85%. At normal viewing sizes the difference is very hard to see, while the file can shrink by 80–90%.'],
    ['What is the difference between KB and MB?', '1 MB is about 1,000 KB (1,024 KB in some software). A 2 MB photo is roughly 2,000 KB, so getting it under 100 KB means making it about 20 times smaller.'],
    ['Why does my form reject my photo even though it is under the size limit?', 'Many forms also require exact pixel dimensions (for example 200 × 230 pixels) or a specific format like JPG. Resize to the required dimensions first, then compress.'],
    ['Which format makes the smallest images?', 'For photos, WebP is usually smallest, followed by JPG. PNG is best for screenshots, logos and graphics with flat colours, but it makes large files for photos.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> open a free <a href="/compress-image">image compressor</a>, choose <strong>Target size (KB)</strong>, enter the limit you need (for example 100) and download the result. For very small targets like 20 KB, set a <strong>max width</strong> of about 400–600 pixels first.</p></blockquote>

<p>Job applications, exam and government forms, visa portals and email often reject photos that are "too large" — sometimes with strict limits like 50 KB or 20 KB. A modern phone photo is often 2–5 MB, which is 2,000–5,000 KB. Here's how to get it under the limit without making it look terrible.</p>

<h2>How to compress an image to a target size in KB</h2>
<ol class="steps">
<li>Open <a href="/compress-image">Compress Image</a> and choose your photo (you can add several at once).</li>
<li>Set <strong>Compression mode</strong> to <strong>Target size (KB)</strong> and enter your limit — 100, 50, 20 or whatever the form asks for.</li>
<li>Optionally set a <strong>Max width</strong> to make the image smaller in pixels as well, and choose the output format (JPG is accepted almost everywhere).</li>
<li>Download the compressed image and check its size before uploading.</li>
</ol>
{{tool:compress-image}}
<p>Your photos are compressed in your browser and never uploaded, which matters for ID photos, signatures and documents.</p>

<h2>Suggested settings for common size limits</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Target size</th><th>Suggested max width</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td>1–2 MB</td><td>2,000–2,500 px</td><td>Email, printing small photos, YouTube thumbnails (2 MB limit)</td></tr>
<tr><td>500 KB</td><td>1,600 px</td><td>Websites, blog images, portfolios</td></tr>
<tr><td>200 KB</td><td>1,200 px</td><td>Online forms, profile pictures</td></tr>
<tr><td>100 KB</td><td>800–1,000 px</td><td>Job and exam applications, ID photos</td></tr>
<tr><td>50 KB</td><td>600 px</td><td>Strict application forms</td></tr>
<tr><td>20 KB</td><td>300–400 px</td><td>Signatures and thumbnail photos on forms</td></tr>
</tbody></table></div>
<p>These are starting points: photos with lots of detail (trees, crowds, patterns) need smaller dimensions than simple ones to hit the same size.</p>

<h2>Why reducing pixels matters as much as compression</h2>
<p>File size depends on two things: how many pixels the image has, and how strongly it's compressed. Squeezing a 4,000-pixel-wide photo down to 50 KB with compression alone makes it blocky and blurry. Reducing it to 600 pixels wide first lets you keep a good quality setting and still reach 50 KB — and 600 pixels is more than enough for a photo on a form.</p>

<h2>Resize to exact pixel dimensions</h2>
<p>Some forms ask for an exact size, such as <em>200 × 230 pixels</em> for a photo or <em>140 × 60 pixels</em> for a signature. Use <a href="/resize-image">Resize Image</a>:</p>
<ol class="steps">
<li>Choose your image and select <strong>Pixels</strong>.</li>
<li>Enter the width and height.</li>
<li>Choose <strong>Crop to exact size</strong> so the photo fills the frame without stretching (or <em>Fit inside</em> to keep the whole picture).</li>
<li>Download, then compress it to the KB limit if needed.</li>
</ol>
{{tool:resize-image}}
<p>The resizer also has ready-made sizes for Instagram posts and stories, YouTube thumbnails and banners, Facebook covers, LinkedIn banners and profile pictures. To cut out part of a photo first, use <a href="/crop-image">Crop Image</a>.</p>

<h2>JPG, PNG or WebP?</h2>
<ul>
<li><strong>JPG</strong> — best for photos and accepted by almost every form and website.</li>
<li><strong>WebP</strong> — usually smaller than JPG at the same quality; great for your own website, but some forms don't accept it.</li>
<li><strong>PNG</strong> — best for screenshots, logos and graphics with text or flat colours, and the only one of the three that keeps transparency. Photos saved as PNG are much larger.</li>
</ul>

<h2>Reduce image size on your computer without a website</h2>
<ul>
<li><strong>Mac:</strong> open the image in Preview, choose <strong>Tools → Adjust Size</strong> to reduce the pixels, then <strong>File → Export</strong> with a lower JPEG quality.</li>
<li><strong>Windows 11:</strong> open the image in Photos, click the "…" menu and choose <strong>Resize image</strong>, then pick a smaller size or quality.</li>
<li><strong>Paint (Windows):</strong> Home → Resize, choose pixels or percentage, then save as JPG.</li>
</ul>
<p>These options can't aim for an exact KB size, so you may need a few tries — which is where the target-size mode saves time.</p>

<h2>Tips for photos on application forms</h2>
<ul>
<li>Start from the best original you have — compressing an already compressed WhatsApp photo again loses more detail.</li>
<li>Crop away empty space before compressing, so the important part keeps more pixels.</li>
<li>Check the required format (usually JPG), dimensions and background colour as well as the size.</li>
<li>Keep the original — always compress a copy.</li>
</ul>
`,
};

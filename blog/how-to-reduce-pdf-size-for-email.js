module.exports = {
  title: 'How to Reduce PDF File Size for Email (Without Ruining Quality)',
  desc: 'Too big to attach? Shrink a PDF under the 20–25 MB email limit for free. Learn which compression level to choose, why PDFs get large, and fixes for scanned documents.',
  date: '2026-10-26',
  tools: ['compress-pdf', 'split-pdf', 'pdf-to-jpg'],
  faq: [
    ['What is the maximum attachment size for email?', 'Gmail and Yahoo Mail allow attachments up to 25 MB per email; Outlook.com and most Outlook setups allow about 20 MB. Larger files are usually sent as a cloud link instead.'],
    ['Will compressing a PDF reduce its quality?', 'The images inside can lose some sharpness, depending on the level you choose. Text and vector graphics stay sharp at the standard levels. The Extreme level turns each page into an image, so the text can no longer be selected or searched.'],
    ['Why is my PDF so large?', 'Usually because of images: scanned pages, high-resolution photos or images pasted in at full size. Embedded fonts and many pages add to it too.'],
    ['How do I reduce PDF size on a Mac?', 'Open the PDF in Preview, choose File → Export, and set Quartz Filter to "Reduce File Size". It can lower image quality a lot, so check the result.'],
    ['How do I send a PDF that is still too big?', 'Split it into smaller parts with a PDF splitter, or upload it to Google Drive, OneDrive or Dropbox and email the share link instead.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> open a free <a href="/compress-pdf">PDF compressor</a>, keep the <strong>Recommended</strong> level, and download the smaller file. Gmail allows <strong>25 MB</strong> per email and Outlook about <strong>20 MB</strong>; if the file is still too big, try the Strong level or split the PDF.</p></blockquote>

<p>Big PDFs bounce back from email, fail to upload to job portals and take ages to open on phones. The good news: most large PDFs are large because of images, and those can usually be shrunk a lot with little visible difference.</p>

<h2>Email attachment size limits</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Service</th><th>Attachment limit</th></tr></thead>
<tbody>
<tr><td>Gmail</td><td>25 MB (larger files become a Google Drive link)</td></tr>
<tr><td>Yahoo Mail</td><td>25 MB</td></tr>
<tr><td>Outlook.com / Outlook</td><td>about 20 MB</td></tr>
<tr><td>Many job portals and forms</td><td>often 2–10 MB — check the page</td></tr>
</tbody></table></div>
<p>Attachments grow by about a third when an email is sent, because of how they're encoded, so aim well below the limit — under 15 MB for Outlook, for example.</p>

<h2>How to compress a PDF</h2>
<ol class="steps">
<li>Open the <a href="/compress-pdf">Compress PDF</a> tool and choose your file.</li>
<li>Pick a compression level (see the table below). <strong>Recommended</strong> is the best balance for most documents.</li>
<li>Optionally tick <strong>Convert images to grayscale</strong> for an even smaller file when colour doesn't matter.</li>
<li>Download the compressed PDF and check it looks right.</li>
</ol>
{{tool:compress-pdf}}
<p>Your PDF is compressed inside your browser and never uploaded, so it's safe for contracts, payslips, IDs and other private documents.</p>

<h2>Which compression level should you choose?</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Level</th><th>What it does</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Lossless</td><td>Cleans up and rewrites the file without touching image quality</td><td>Text documents that only need a small reduction</td></tr>
<tr><td>Recommended</td><td>Re-compresses images and limits them to about 2,000 pixels</td><td>Most documents, reports and scans</td></tr>
<tr><td>Strong</td><td>Smaller images (about 1,300 pixels) at lower quality</td><td>Meeting a strict size limit</td></tr>
<tr><td>Extreme</td><td>Turns every page into a compressed image</td><td>Scanned documents when only the smallest file matters</td></tr>
</tbody></table></div>
<p><strong>Important:</strong> Extreme makes each page an image, so the text is no longer selectable or searchable, and fine print may look softer. Use it as a last resort. If a PDF is already well optimised, the tool tells you it couldn't make it noticeably smaller.</p>

<h2>Why PDFs get so big</h2>
<ul>
<li><strong>Scanned pages.</strong> Each scanned page is a full image. Scanning at 600 DPI in colour makes files enormous.</li>
<li><strong>Photos pasted at full size.</strong> A photo from a phone camera can be several megabytes, even if it's shown small on the page.</li>
<li><strong>Embedded fonts.</strong> Unusual fonts are stored inside the PDF so it looks the same everywhere.</li>
<li><strong>Many pages.</strong> Long reports, especially with images on each page, add up.</li>
</ul>

<h2>Scanning documents? Make them small from the start</h2>
<ul>
<li>Scan text documents at <strong>150–200 DPI</strong> — enough to read and print clearly.</li>
<li>Use <strong>grayscale or black-and-white</strong> unless colour matters.</li>
<li>Phone scanner apps (including the scanner in the iPhone Notes app and Google Drive on Android) usually create smaller files than a photo of the page.</li>
</ul>

<h2>Other ways to reduce PDF size</h2>
<ul>
<li><strong>Mac Preview:</strong> File → Export → Quartz Filter → <em>Reduce File Size</em>. Quick, but it often reduces image quality a lot.</li>
<li><strong>Adobe Acrobat:</strong> has a "Compress PDF" or "Reduce File Size" option; the full version is a paid product.</li>
<li><strong>Microsoft Word:</strong> if you made the PDF from Word, use File → Save As → PDF and choose <em>Minimum size (publishing online)</em>.</li>
</ul>

<h2>Still too big? Split it or send a link</h2>
<p>If a long document is still over the limit, <a href="/split-pdf">split the PDF</a> into parts and send them in separate emails, or upload it to Google Drive, OneDrive or Dropbox and share a link. For forms that only accept images, convert pages with <a href="/pdf-to-jpg">PDF to JPG</a>.</p>
{{tool:split-pdf}}
`,
};

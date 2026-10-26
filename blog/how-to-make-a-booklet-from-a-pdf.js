module.exports = {
  title: 'How to Make a Booklet From a PDF (Print, Fold and Staple)',
  desc: 'Turn any PDF into a booklet you can print double-sided, fold and staple. Free step-by-step guide with the right printer settings, paper sizes and tips for thick booklets.',
  date: '2026-10-27',
  tools: ['pdf-booklet-maker', 'merge-pdf', 'organize-pdf'],
  faq: [
    ['Why does a booklet need a multiple of 4 pages?', 'Each sheet of paper, folded in half, makes four booklet pages — two on the front and two on the back. If your PDF has, say, 10 pages, two blank pages are added at the end to make 12.'],
    ['Should I flip on the long edge or the short edge?', 'Short edge. Booklet sheets are printed in landscape with two pages side by side, so the paper has to flip on its short edge for the back of each sheet to come out the right way up.'],
    ['What paper size do I need for an A5 booklet?', 'Print on A4 paper. Two A5 pages fit side by side on one A4 sheet, which folds down to A5. On US paper, Letter sheets fold into 5.5 × 8.5 inch booklets.'],
    ['How many pages can I staple in one booklet?', 'A normal stapler handles roughly 15–20 sheets (60–80 pages). For thicker booklets, print in signatures — small groups of sheets folded separately — and bind them together, or use a long-reach stapler.'],
    ['Can I make a booklet in Word or Google Docs?', 'Word has a Book fold option (Layout → Margins → Custom Margins → Multiple pages: Book fold). Google Docs and Canva don\'t, so export your document as a PDF and convert it with a booklet maker.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> open your PDF in a free <a href="/pdf-booklet-maker">PDF booklet maker</a>, choose your paper size, and download the booklet PDF. Print it <strong>double-sided with "flip on short edge"</strong>, then fold the stack in half and staple along the fold.</p></blockquote>

<p>Programmes for events, zines, school projects, church bulletins, menus and small manuals all look better as a folded booklet. The tricky part is page order: if you simply print pages 1, 2, 3, 4 on a sheet, they end up in the wrong places once folded. A booklet maker rearranges the pages for you — this is called <em>imposition</em> — so they come out in reading order.</p>

<h2>How booklet page order works</h2>
<p>Each sheet of paper holds four booklet pages: two on the front and two on the back. For an 8-page booklet printed on two sheets, the pages are arranged like this:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Sheet</th><th>Front (left | right)</th><th>Back (left | right)</th></tr></thead>
<tbody>
<tr><td>Sheet 1 (outside)</td><td>8 | 1</td><td>2 | 7</td></tr>
<tr><td>Sheet 2 (inside)</td><td>6 | 3</td><td>4 | 5</td></tr>
</tbody></table></div>
<p>When you stack the sheets, fold them and open the booklet, the pages read 1 to 8 in order. That's why the total must be a multiple of 4. If your PDF has 10 pages, the booklet maker adds 2 blank pages at the end to make 12.</p>

<h2>Step 1: Get your document into one PDF</h2>
<p>The booklet maker works with any PDF. If your content is in Word, Google Docs, Canva or PowerPoint, export or download it as PDF first. If it's in several files, combine them with <a href="/merge-pdf">Merge PDF</a>, and reorder or delete pages with <a href="/organize-pdf">Organize PDF</a>.</p>
<p>Your first page becomes the front cover and your last page the back cover. If you want the back cover to be blank or to show something specific, add that page at the end now.</p>

<h2>Step 2: Turn the PDF into a booklet</h2>
<ol class="steps">
<li>Open the <a href="/pdf-booklet-maker">PDF Booklet Maker</a> and choose your PDF.</li>
<li>Pick a <strong>paper size</strong>: A4 (makes an A5 booklet), US Letter (makes a 5.5 × 8.5 inch booklet), A3 (for a booklet of A4 pages), US Legal — or Automatic, which puts two of your pages side by side at their original size.</li>
<li>Choose the <strong>binding</strong>: one booklet to fold and staple, or signatures of 16, 20 or 32 pages for thicker booklets (see below).</li>
<li>Set the <strong>reading direction</strong>: left to right for English, or right to left for Urdu, Arabic or manga.</li>
<li>Optionally add an <strong>extra margin at the fold</strong> so text near the spine isn't hidden.</li>
<li>Download the booklet PDF. The tool tells you how many sheets of paper you'll need.</li>
</ol>
{{tool:pdf-booklet-maker}}
<p>The PDF is processed in your browser, so private documents are never uploaded.</p>

<h2>Step 3: Print it correctly</h2>
<p>This is where most booklets go wrong. Use these settings in your print dialog:</p>
<ul>
<li><strong>Double-sided (duplex): on.</strong></li>
<li><strong>Flip on short edge.</strong> On Windows it's usually "Flip on Short Edge"; on a Mac, "Short-Edge binding" or "Two-Sided: Short-Edge". Long-edge flipping prints every back page upside down.</li>
<li><strong>Scale: Actual size / 100%.</strong> Avoid "fit to page" or "shrink oversized pages", which can add white borders.</li>
<li><strong>Orientation:</strong> the booklet PDF is already landscape — leave orientation on automatic.</li>
</ul>
<p><strong>No duplex printer?</strong> Print the odd pages of the booklet PDF first, put the printed stack back in the paper tray (test with one sheet to see which way round it needs to go), then print the even pages.</p>
<p>Always print one sheet as a test before printing the whole run.</p>

<h2>Step 4: Fold and staple</h2>
<ol class="steps">
<li>Keep the sheets in the order they came out of the printer.</li>
<li>Fold the whole stack in half, cover on the outside, and press the fold flat with a ruler or the back of a spoon.</li>
<li>Open the booklet flat and staple along the fold — two staples for A5, three for larger booklets. A long-reach stapler makes this much easier; or staple through the open booklet into a piece of cardboard and bend the staple ends closed by hand.</li>
</ol>

<h2>Making thicker booklets with signatures</h2>
<p>A normal stapler struggles with more than about 15–20 sheets, and very thick folded booklets bulge. For those, choose <strong>signatures</strong> in the booklet maker. Each signature is a small group of sheets (for example 4 sheets = 16 pages) that you fold separately. Stack the folded signatures in order and bind them by sewing, gluing the spine, or using a binder clip for drafts.</p>
<p>In thick booklets, the inner pages stick out slightly at the open edge after folding (called <em>creep</em>). You can trim the edge with a paper cutter for a clean finish, and use the extra fold margin so text doesn't get too close to the spine.</p>

<h2>Booklets in Word, Acrobat, Canva and Google Docs</h2>
<ul>
<li><strong>Microsoft Word:</strong> Layout → Margins → Custom Margins → under Pages, set Multiple pages to <em>Book fold</em>. Best if you're writing the booklet in Word from scratch.</li>
<li><strong>Adobe Acrobat / Reader:</strong> in the Print dialog, choose <em>Booklet</em> under Page Sizing &amp; Handling.</li>
<li><strong>Canva and Google Docs:</strong> no booklet printing option — download as PDF and use the booklet maker.</li>
</ul>

<h2>Tips for a professional result</h2>
<ul>
<li>Use slightly heavier paper (100–120 gsm) for a sturdier booklet, and heavier card for the cover if your printer handles it.</li>
<li>Keep important text at least 1.5 cm (about half an inch) away from every edge.</li>
<li>For page numbers, add them before making the booklet so they follow your reading order.</li>
<li>Choose colours carefully: dark full-page backgrounds use a lot of ink and can crack at the fold.</li>
</ul>
`,
};

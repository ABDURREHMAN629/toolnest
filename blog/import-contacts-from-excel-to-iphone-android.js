module.exports = {
  title: 'How to Import Contacts From Excel to iPhone, Android or Gmail',
  desc: 'Turn an Excel or CSV list of names and phone numbers into phone contacts: convert it to a VCF file, then import it on iPhone, Android or Google Contacts.',
  date: '2026-10-26',
  tools: ['excel-to-vcf', 'csv-to-vcf', 'vcf-to-excel'],
  faq: [
    ['Can I import an Excel file directly into my iPhone?', "No. The iPhone Contacts app can't read Excel or CSV files. Convert the spreadsheet to a VCF (vCard) file first, then open the VCF on your iPhone or import it at iCloud.com."],
    ['Why do my phone numbers look like 9.23E+11 in Excel?', 'Excel shows long numbers in scientific notation. Format the phone number column as Text before typing or pasting the numbers, or add the numbers with a leading + and country code, so every digit is kept.'],
    ['Will the contacts show up in WhatsApp?', 'Yes. WhatsApp reads your phone\'s contacts, so once the contacts are imported, anyone who uses WhatsApp appears there — as long as the number includes the right country code.'],
    ['How many contacts can I import at once?', 'A single VCF file can hold hundreds or thousands of contacts. iPhone, Android and Google Contacts all import a multi-contact VCF in one go.'],
    ['Is it safe to convert my contacts online?', 'With the converter in this guide, yes: the spreadsheet is read and converted inside your browser and is never uploaded to a server.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> phones don't import Excel files directly. Convert your spreadsheet to a <strong>VCF (vCard)</strong> file with a free <a href="/excel-to-vcf">Excel to VCF converter</a>, then open the VCF on your phone (iPhone: "Add All Contacts"; Android: Contacts → Fix &amp; manage → Import from file) or import it at contacts.google.com.</p></blockquote>

<p>Maybe you have a customer list, a class register or a club's member sheet in Excel and want everyone in your phone. Typing hundreds of numbers by hand isn't an option. The trick is to turn the spreadsheet into a <strong>VCF file</strong> — the standard contacts format that iPhone, Android, Gmail and most email apps understand.</p>

<h2>Step 1: Prepare your spreadsheet</h2>
<p>Put one contact on each row, with a header row on top. Typical columns are:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>First name</th><th>Last name</th><th>Phone</th><th>Email</th><th>Company</th></tr></thead>
<tbody><tr><td>Sara</td><td>Ahmed</td><td>+44 7700 900123</td><td>sara@example.com</td><td>Acme Ltd</td></tr>
<tr><td>John</td><td>Miller</td><td>+1 415 555 0142</td><td>john@example.com</td><td></td></tr></tbody></table></div>
<ul>
<li><strong>Use full international numbers.</strong> Write numbers with a + and the country code (+1, +44, +92…). They then work from any country and are recognised by WhatsApp.</li>
<li><strong>Stop Excel from mangling numbers.</strong> Format the phone column as <em>Text</em> before pasting numbers, otherwise long numbers turn into something like <code>9.23E+11</code> and leading zeros disappear.</li>
<li><strong>Keep one name format.</strong> Either separate first and last name columns, or one "Full name" column — both work.</li>
</ul>
<p>If your contacts are in Google Sheets or another app, export them as a CSV file — that works too.</p>

<h2>Step 2: Convert Excel or CSV to VCF</h2>
<ol class="steps">
<li>Open the <a href="/excel-to-vcf">Excel to VCF converter</a> (or <a href="/csv-to-vcf">CSV to VCF</a> for a CSV file) and choose your file.</li>
<li>Match your columns to contact fields — name, phone, email, company, job title, address, birthday, notes or website.</li>
<li>Keep <strong>vCard 3.0</strong> selected. It's the version iPhone, Android, Google and Outlook all read.</li>
<li>Download the VCF file. One file holds all your contacts; there's also an option to download one file per contact as a ZIP, for older phones that only import the first contact from a file.</li>
</ol>
{{tool:excel-to-vcf}}
<p>The file is converted inside your browser, so your contact list is never uploaded anywhere.</p>

<h2>Step 3: Import the VCF file</h2>
<h3>iPhone</h3>
<p><strong>Option A — directly on the iPhone:</strong> send the VCF to yourself (email, AirDrop, iCloud Drive or a messaging app), tap the file on your iPhone, then tap <strong>Add All Contacts</strong>.</p>
<p><strong>Option B — on a computer with iCloud:</strong> sign in at iCloud.com, open <strong>Contacts</strong>, click the <strong>+</strong> button and choose <strong>Import Contact</strong>, then select the VCF file. If iCloud Contacts is turned on for your iPhone, the contacts appear there within a minute or two.</p>
<h3>Android</h3>
<p>Copy the VCF file to your phone (or download it there). In the <strong>Contacts</strong> app by Google, tap <strong>Fix &amp; manage → Import from file</strong>, choose the account to save to, and pick the VCF. On Samsung phones, open <strong>Contacts → menu (☰) → Manage contacts → Import contacts</strong> and choose the file from your phone storage. Menu names can vary slightly between Android versions.</p>
<h3>Gmail / Google Contacts</h3>
<p>Go to contacts.google.com on a computer, click <strong>Import</strong> in the left menu, select your VCF (Google also accepts CSV) and click <strong>Import</strong>. Every Android phone signed into that Google account gets the contacts automatically.</p>
<h3>Outlook</h3>
<p>Outlook.com imports contacts from CSV files: open <strong>People → Manage contacts → Import contacts</strong> and choose your CSV. If your list is in Excel, save it as CSV first (File → Save As → CSV).</p>

<h2>Importing contacts for WhatsApp</h2>
<p>There's no separate WhatsApp import — WhatsApp simply reads your phone's contacts. Import the VCF to your phone as above, open WhatsApp, and contacts who use WhatsApp appear in your chat list and when you start a new chat. If someone is missing, check that their number has the correct country code.</p>

<h2>Common problems and fixes</h2>
<ul>
<li><strong>Names in the wrong fields</strong> — go back to step 2 and re-match the columns; the preview shows the first contact before you download.</li>
<li><strong>Numbers missing a digit or leading zero</strong> — the Excel column wasn't formatted as Text. Fix the numbers in Excel and convert again.</li>
<li><strong>Duplicate contacts</strong> — on iPhone, the Contacts app shows a "Duplicates Found" card that lets you merge them; Google Contacts has a <em>Merge &amp; fix</em> page.</li>
<li><strong>Only one contact imported</strong> — some older phones only read the first contact in a file. Use the one-file-per-contact ZIP option instead.</li>
<li><strong>Arabic, Urdu or accented names look broken</strong> — make sure you exported with vCard 3.0, which uses UTF-8 so every alphabet displays correctly.</li>
</ul>

<h2>Going the other way: phone contacts to Excel</h2>
<p>To back up your phone's contacts in a spreadsheet, export them as a VCF (iCloud.com: select all → Export vCard; Google Contacts: Export → vCard), then open the file in the <a href="/vcf-to-excel">VCF to Excel converter</a> to get one row per contact.</p>
{{tool:vcf-to-excel}}
`,
};

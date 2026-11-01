module.exports = {
  title: 'How to Write Numbers in Words (Including on a Check)',
  desc: 'The rules for writing numbers in words in English — hyphens, "and", decimals, millions vs lakhs — plus exactly how to write the amount on a check or cheque, with examples.',
  date: '2026-11-01',
  tools: ['number-to-words', 'roman-numeral-converter'],
  faq: [
    ['How do you write 1,500 in words?', 'One thousand five hundred. On a check you would write "One thousand five hundred and 00/100".'],
    ['Do you use "and" when writing numbers in words?', 'In American English, "and" is usually left out of whole numbers (one hundred five) and used only before the cents or fraction on a check. In British English it is normal to say "one hundred and five".'],
    ['Which numbers need a hyphen?', 'Compound numbers from twenty-one to ninety-nine: twenty-one, forty-five, ninety-nine. Larger numbers are not hyphenated between the hundreds and thousands: three hundred forty-two thousand.'],
    ['How do you write cents on a check?', 'Write the dollars in words, then "and", then the cents as a fraction of 100: $245.07 is "Two hundred forty-five and 07/100". Draw a line from the end of the words to the word "Dollars" so nothing can be added.'],
    ['How do you write 1,00,000 in words?', 'In the Indian and Pakistani system, 1,00,000 is one lakh. In the international system the same number is written 100,000 and said one hundred thousand.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> say the number in groups — billions, millions, thousands, then hundreds — and add a <strong>hyphen</strong> to numbers from twenty-one to ninety-nine. 4,372 is <strong>four thousand three hundred seventy-two</strong>. On a check, write the cents as a fraction: $4,372.50 is "Four thousand three hundred seventy-two and 50/100".</p></blockquote>

<p>You need numbers in words more often than you'd think: on checks and cheques, invoices and legal contracts (where the words override the digits if they disagree), wedding invitations and formal letters. The rules are short — here they are, with a converter that writes any amount out for you.</p>
{{tool:number-to-words}}

<h2>The basic rules</h2>
<ol>
<li><strong>Zero to twenty are single words:</strong> zero, one, two … twelve, thirteen … nineteen, twenty.</li>
<li><strong>Tens:</strong> twenty, thirty, forty (not "fourty"), fifty, sixty, seventy, eighty, ninety.</li>
<li><strong>Hyphenate 21–99:</strong> twenty-one, thirty-four, ninety-nine.</li>
<li><strong>Hundreds:</strong> the digit plus "hundred" — six hundred, six hundred eight, six hundred eighty-two.</li>
<li><strong>Bigger numbers go in groups of three digits</strong>, each followed by its name: thousand, million, billion.</li>
<li><strong>Don't pluralise the group names</strong> after a number: "two million", not "two millions".</li>
</ol>

<h2>Examples</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Number</th><th>In words</th></tr></thead>
<tbody>
<tr><td>15</td><td>fifteen</td></tr>
<tr><td>48</td><td>forty-eight</td></tr>
<tr><td>105</td><td>one hundred five (UK: one hundred and five)</td></tr>
<tr><td>999</td><td>nine hundred ninety-nine</td></tr>
<tr><td>1,500</td><td>one thousand five hundred</td></tr>
<tr><td>20,019</td><td>twenty thousand nineteen</td></tr>
<tr><td>134,000</td><td>one hundred thirty-four thousand</td></tr>
<tr><td>1,250,075</td><td>one million two hundred fifty thousand seventy-five</td></tr>
<tr><td>3,000,000,000</td><td>three billion</td></tr>
</tbody></table></div>

<h2>"And" in numbers: US vs UK</h2>
<p>In <strong>American English</strong>, "and" is generally left out of whole numbers — "two hundred fifty" — and saved for the decimal point or the cents on a check. In <strong>British, Australian and Indian English</strong>, "and" goes after the hundreds: "two hundred and fifty". Both are correct in their region; just be consistent.</p>

<h2>How to write numbers with decimals</h2>
<ul>
<li><strong>Read the digits after the point one by one:</strong> 3.14 is "three point one four".</li>
<li><strong>For money,</strong> use the currency units: $12.75 is "twelve dollars and seventy-five cents".</li>
<li><strong>Formal fractions:</strong> 2.5 can be written "two and five tenths" or "two and a half".</li>
</ul>

<h2>How to write the amount on a check</h2>
<p>US-style checks have a box for the digits and a line for the amount in words. For a check of <strong>$1,284.30</strong>:</p>
<ol>
<li>In the box, write <strong>1,284.30</strong> close to the dollar sign.</li>
<li>On the line, start at the far left: <strong>One thousand two hundred eighty-four and 30/100</strong>.</li>
<li>Draw a line from the end of your words to the printed word "Dollars" so no one can add to it.</li>
<li>For a whole-dollar amount, write <strong>and 00/100</strong> (or "and no/100").</li>
</ol>
<p>Capitalise the first word only, and don't write "dollars" in the words if the check already prints it at the end of the line.</p>

<h2>How to write a cheque in the UK, Pakistan and India</h2>
<p>Cheques in these countries usually write the full currency words and end with <strong>"only"</strong> so nothing can be added:</p>
<ul>
<li>UK: <em>One thousand two hundred and eighty-four pounds and 30 pence only</em></li>
<li>Pakistan: <em>Twenty-five thousand rupees only</em></li>
<li>India: <em>One lakh twenty-five thousand rupees and fifty paise only</em></li>
</ul>
<p>The <a href="/number-to-words">number to words converter</a> writes amounts in this style for rupees, dollars, euros, pounds, dirhams, riyals and taka, adding "only" at the end. Choose the currency and the numbering system, then copy the result in lowercase, Title Case, Sentence case or CAPITALS.</p>

<h2>Lakh and crore vs million and billion</h2>
<p>South Asia groups large numbers differently. After the first thousand, digits are grouped in twos:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Number</th><th>Indian / Pakistani system</th><th>International system</th></tr></thead>
<tbody>
<tr><td>1,00,000 / 100,000</td><td>one lakh</td><td>one hundred thousand</td></tr>
<tr><td>10,00,000 / 1,000,000</td><td>ten lakh</td><td>one million</td></tr>
<tr><td>1,00,00,000 / 10,000,000</td><td>one crore</td><td>ten million</td></tr>
<tr><td>1,00,00,00,000 / 1,000,000,000</td><td>one arab (100 crore)</td><td>one billion</td></tr>
</tbody></table></div>
<p>So 1,89,000 is "one lakh eighty-nine thousand", the same amount as 189,000 or "one hundred eighty-nine thousand" internationally. The converter supports both systems — pick "International" for million and billion.</p>

<h2>When to use words or digits in writing</h2>
<p>Most style guides spell out numbers from zero to nine (or one to one hundred in very formal writing) and use digits for larger numbers, measurements, money and dates. Always spell out a number that starts a sentence: "Twenty-two people attended", not "22 people attended". For dates and chapter numbers in a classical style, you might also see <a href="/blog/roman-numerals-chart">Roman numerals</a>.</p>
`,
};

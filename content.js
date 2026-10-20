// Long-form, hand-written guide content for individual tool pages (HTML, inserted under "About this tool").
// Unique, genuinely useful text is what lets a tool page rank — add an entry here for every tool you want to push in search.
// Keys are tool slugs from site/assets/js/registry.js.
module.exports = {
  'cgpa-to-percentage': `
      <h2>How CGPA to percentage conversion works</h2>
      <p>There is no single worldwide formula — the right one depends on your grading scale and, for 10-point systems, on your board or university. This converter supports the common ones:</p>
      <ul>
        <li><strong>CGPA × 9.5</strong> — used by CBSE and most Indian universities. A CGPA of 8.2 becomes 8.2 × 9.5 = <strong>77.9%</strong>.</li>
        <li><strong>CGPA × 10</strong> — used by some universities that map the 10-point scale directly. 8.2 becomes <strong>82%</strong>.</li>
        <li><strong>(CGPA − 0.75) × 10</strong> — the VTU formula. 7.5 becomes (7.5 − 0.75) × 10 = <strong>67.5%</strong>.</li>
        <li><strong>4.0 and 5.0 scales</strong> — a simple proportion: CGPA ÷ maximum × 100. A 3.5 on a 4.0 scale is <strong>87.5%</strong>.</li>
      </ul>
      <h2>Percentage to CGPA</h2>
      <p>The reverse conversion divides by the same factor. On the CBSE formula, 76% ÷ 9.5 = <strong>8.0 CGPA</strong>. On a 4.0 scale, 80% is 0.80 × 4 = <strong>3.2</strong>.</p>
      <h2>Which formula should I use?</h2>
      <p>Always check your transcript or university website first — many print the official formula on the back of the marksheet. If you are applying abroad, admissions offices usually ask for the conversion your own institution uses, or for a credential evaluation (WES, ECE) rather than a self-calculated figure.</p>`,

  'attendance-calculator': `
      <h2>How the attendance percentage is calculated</h2>
      <p>Attendance percentage = classes attended ÷ classes held × 100. If you attended 42 out of 60 classes, your attendance is 42 ÷ 60 × 100 = <strong>70%</strong>.</p>
      <h2>How many classes do I need to attend to reach 75%?</h2>
      <p>If you are below the requirement, the number of classes you must attend in a row is:</p>
      <p><code>needed = (required × held − attended) ÷ (1 − required)</code>, rounded up.</p>
      <p>Example: 42 of 60 classes with a 75% requirement → (0.75 × 60 − 42) ÷ 0.25 = <strong>12 classes</strong>. After 12 more classes you will have 54 of 72, which is exactly 75%.</p>
      <h2>How many classes can I miss and stay above 75%?</h2>
      <p>If you are above the requirement, the classes you can skip are:</p>
      <p><code>can miss = attended ÷ required − held</code>, rounded down.</p>
      <p>Example: 54 of 60 classes (90%) → 54 ÷ 0.75 − 60 = <strong>12 classes</strong>. Missing 12 leaves you at 54 of 72 = 75%.</p>
      <h2>Tips</h2>
      <ul>
        <li>Count lab and tutorial sessions the way your college does — some count a 2-hour lab as two classes.</li>
        <li>Medical leave and approved duty leave are often added back, so ask your department before panicking.</li>
        <li>Recalculate every week: the earlier you catch a shortage, the fewer classes you need to recover.</li>
      </ul>`,

  'zakat-calculator': `
      <h2>How zakat is calculated</h2>
      <ol>
        <li><strong>Add up zakatable assets</strong> — cash at home and in the bank, gold and silver (by weight and purity), shares and investments, business stock and money owed to you that you expect to receive.</li>
        <li><strong>Subtract debts due now</strong> — bills and loan instalments that are currently payable.</li>
        <li><strong>Compare with nisab</strong> — the minimum wealth threshold, equal to the value of 87.48 g of gold or 612.36 g of silver at today's price.</li>
        <li><strong>Pay 2.5%</strong> — if your net wealth has stayed above nisab for one lunar year (hawl), zakat due is net wealth × 2.5%.</li>
      </ol>
      <p>Example: if your net zakatable wealth is 1,000,000 and it is above nisab, zakat due is 1,000,000 × 0.025 = <strong>25,000</strong>.</p>
      <h2>Gold or silver nisab?</h2>
      <p>The silver nisab is much lower, so more people qualify to pay and more reaches those in need — many scholars recommend it for that reason. The gold nisab is also widely followed. The calculator lets you choose either.</p>
      <h2>Gold purity</h2>
      <p>Jewellery is rarely 24-karat. The calculator values gold by its pure-gold content: 22K is 22/24 (91.7%) pure, 21K is 87.5% and 18K is 75%. Enter the weight of your jewellery and pick its karat.</p>
      <p><em>This calculator is a guide. For personal circumstances — business assets, pensions, loans you have given — please consult a qualified scholar.</em></p>`,

  'number-to-words': `
      <h2>Lakh and crore vs. million and billion</h2>
      <p>Pakistan, India, Bangladesh and Nepal group large numbers differently from the international system:</p>
      <ul>
        <li>1 lakh = 1,00,000 = one hundred thousand</li>
        <li>10 lakh = 10,00,000 = one million</li>
        <li>1 crore = 1,00,00,000 = ten million</li>
        <li>1 arab = 100 crore = one billion</li>
      </ul>
      <p>So 1,250,075 is written <strong>twelve lakh fifty thousand seventy-five</strong> in the South Asian system and <strong>one million two hundred fifty thousand seventy-five</strong> in the international system. Choose the system your bank or document expects.</p>
      <h2>Writing an amount on a cheque</h2>
      <p>Banks expect the amount in words to match the figure exactly and to end with “only” so nothing can be added afterwards. For 1,250,075.50 rupees the converter writes: <em>Twelve Lakh Fifty Thousand Seventy-Five Rupees and Fifty Paisa Only</em>. Write it on one line starting at the far left, and draw a line through any space left over.</p>
      <h2>Decimals</h2>
      <p>With a currency selected, decimals become the minor unit (paisa, cents, pence, fils, halalas). With no currency, decimals are read digit by digit — 3.14 becomes “three point one four”.</p>`,
  'week-number': `
      <h2>How week numbers work</h2>
      <p>There are two common systems, and they can give different answers for the same date:</p>
      <ul>
        <li><strong>ISO 8601</strong> — used in Europe, most of Asia and international business. Weeks start on <strong>Monday</strong>, and week 1 is the week that contains the year's first Thursday (so it always contains 4 January). A year has 52 or 53 weeks, and the first days of January can belong to the last week of the previous year. Example: Sunday 3 January 2021 is in <strong>week 53 of 2020</strong>.</li>
        <li><strong>US system</strong> — weeks start on <strong>Sunday</strong> and week 1 is simply the week that contains 1 January, even if it is only one day long. Example: Thursday 1 January 2026 is in week 1, and Sunday 4 January starts week 2.</li>
      </ul>
      <h2>Week numbers in Excel and Google Sheets</h2>
      <p><code>=ISOWEEKNUM(A1)</code> returns the ISO week. <code>=WEEKNUM(A1)</code> returns the US-style week (Sunday start); <code>=WEEKNUM(A1, 2)</code> starts weeks on Monday but still counts 1 January as week 1, so it is not the same as ISO.</p>
      <h2>Why it matters</h2>
      <p>Factories, schools, payroll and project plans often schedule by week number ("delivery in week 43"). When working with people in other countries, confirm which system they use — the ISO and US numbers differ for many dates.</p>`,

  'hijri-date-converter': `
      <h2>How the Hijri calendar works</h2>
      <p>The Islamic (Hijri) calendar is lunar. Each of its 12 months begins with the new crescent moon and lasts 29 or 30 days, so a Hijri year is about 354 days — 11 days shorter than the Gregorian year. That is why Ramadan and Eid move about 11 days earlier every year. Years are counted from the Hijrah of the Prophet ﷺ to Madinah in 622 CE and are written with "AH".</p>
      <h2>Umm al-Qura and moon sighting</h2>
      <p>This converter uses the <strong>Umm al-Qura</strong> calendar, the official calendar of Saudi Arabia, which is calculated in advance. Many countries — including Pakistan, India and Bangladesh — begin each month after the moon is actually sighted locally, so their date is often <strong>one day behind</strong> Saudi Arabia. Use the moon-sighting adjustment to match your local calendar, and follow your local moon-sighting committee for the start of Ramadan and the Eids.</p>
      <h2>Examples</h2>
      <ul>
        <li>1 Muharram 1446 AH (Islamic New Year) = 7 July 2024</li>
        <li>1 Ramadan 1446 AH = 1 March 2025</li>
        <li>1 Shawwal 1446 AH (Eid al-Fitr) = 30 March 2025</li>
        <li>1 Ramadan 1447 AH = 18 February 2026 (Umm al-Qura)</li>
      </ul>
      <h2>The 12 Islamic months</h2>
      <p>Muharram, Safar, Rabi al-Awwal, Rabi al-Thani, Jumada al-Ula, Jumada al-Akhirah, Rajab, Sha'ban, Ramadan, Shawwal, Dhu al-Qa'dah and Dhu al-Hijjah.</p>`,

  'qibla-direction': `
      <h2>How the Qibla direction is calculated</h2>
      <p>The Qibla is the direction of the Kaaba in Makkah (21.4225° N, 39.8262° E). Because the Earth is round, the correct direction is the <strong>great-circle</strong> direction — the shortest path over the globe — not a straight line on a flat map. This finder calculates that bearing from your coordinates and shows it in degrees clockwise from <strong>true north</strong>.</p>
      <h2>Examples</h2>
      <ul>
        <li>Karachi: about 268° (just south of west)</li>
        <li>London: about 119° (east-south-east)</li>
        <li>New York: about 58° (north-east — not south-east as a flat map suggests)</li>
        <li>Jakarta: about 295° (west-north-west)</li>
      </ul>
      <h2>Using a compass correctly</h2>
      <ul>
        <li>A magnetic compass points to <strong>magnetic north</strong>, which differs from true north by a few degrees in most places (the "magnetic declination"). For everyday prayer this small difference is usually acceptable; for building a masjid, check your local declination.</li>
        <li>Keep the phone flat and away from metal, magnets, speakers and laptops, and move it in a figure 8 to calibrate before reading.</li>
        <li>On a computer there is no compass: read the angle and use the sun or a physical compass instead.</li>
      </ul>`,

  'invisible-character': `
      <h2>What is an invisible character?</h2>
      <p>An invisible character is a real Unicode character that shows up as empty space. Apps and games usually reject a name or message made only of normal spaces, because they trim spaces automatically — but they accept these characters, so you can create a blank name, an empty message, or extra spacing in a bio or caption.</p>
      <h2>Which one should I use?</h2>
      <ul>
        <li><strong>Hangul Filler (U+3164)</strong> — the most widely accepted blank character for usernames and game names.</li>
        <li><strong>Braille Pattern Blank (U+2800)</strong> — looks like a space and is rarely removed; good for blank messages and line spacing.</li>
        <li><strong>Zero Width Space (U+200B)</strong> — takes up no width at all; useful for breaking links and hashtags.</li>
      </ul>
      <p>Every app filters characters differently and rules change, so if one character is removed or rejected, simply try the next one in the list.</p>
      <h2>Find and remove hidden characters</h2>
      <p>Text copied from websites, PDFs or chat apps can contain hidden characters that break code, spreadsheets, passwords or search. Paste the text into the detector to see exactly which hidden characters it contains, then clean it with one click.</p>`,

  'military-time-converter': `
      <h2>How to convert military time</h2>
      <ul>
        <li><strong>0000 to 1159</strong> — morning. Drop any leading zero and add AM: 0730 = 7:30 AM. The one exception is 00xx, which is the 12 o'clock hour: 0015 = 12:15 AM.</li>
        <li><strong>1200 to 1259</strong> — the noon hour: 1230 = 12:30 PM.</li>
        <li><strong>1300 to 2359</strong> — afternoon and evening. Subtract 12 and add PM: 1845 = 6:45 PM.</li>
      </ul>
      <p>To go the other way, add 12 to any PM hour except 12 PM, and turn 12 AM into 00.</p>
      <h2>How military time is spoken</h2>
      <p>Military time is written without a colon and spoken as two pairs of digits: 1430 is "fourteen thirty hours", 0600 is "zero six hundred hours" and 0905 is "zero nine zero five hours". 2400 is sometimes used for midnight at the end of a day, and is the same moment as 0000 the next day.</p>`,

  'hours-to-decimal': `
      <h2>How to convert minutes to decimal hours</h2>
      <p>Divide the minutes by 60 and add the result to the hours: <code>decimal hours = hours + minutes ÷ 60</code>. For example, 7 hours 45 minutes = 7 + 45 ÷ 60 = <strong>7.75 hours</strong>, and 1 hour 20 minutes = <strong>1.33 hours</strong>.</p>
      <h2>Decimal hours back to hours and minutes</h2>
      <p>Keep the whole number as hours and multiply the decimal part by 60 to get minutes. For example, 8.6 hours = 8 hours + 0.6 × 60 = <strong>8 hours 36 minutes</strong>.</p>
      <h2>Why payroll uses decimal hours</h2>
      <p>Pay is calculated by multiplying hours by the hourly rate, which only works with decimals. A common mistake is to treat 7:45 as 7.45 — that underpays 18 minutes. At 20 per hour, 7 h 45 min is 7.75 × 20 = <strong>155.00</strong>, not 149.00.</p>`,
};

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

  'keyboard-tester': `
      <h2>Choose the layout that matches your keyboard</h2>
      <p>Keyboards come in different sizes, so this tester draws the one you actually have:</p>
      <ul>
        <li><strong>Full-size (100%)</strong> — 104 keys with the number pad on the right. Standard office and desktop keyboards.</li>
        <li><strong>Tenkeyless (TKL, 87%)</strong> — a full keyboard without the number pad. Popular with gamers for more mouse space.</li>
        <li><strong>75%</strong> — keeps the function row and arrow keys but squeezes the navigation keys into one column.</li>
        <li><strong>65%</strong> — no function row, but still has arrow keys. <strong>60%</strong> — just the main block of 61 keys; arrows live on an Fn layer.</li>
        <li><strong>Laptop layouts</strong> — Windows laptops (Dell, HP, ASUS, Acer), Lenovo ThinkPad/IdeaPad and Apple MacBook, each with their real bottom row and half-height arrow keys. Tick “Numeric keypad” for 15.6″ and 17″ laptops.</li>
      </ul>
      <p>Using a UK or European keyboard? Tick <strong>UK / EU (ISO)</strong> to get the tall Enter key and the extra key next to left Shift.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Ghosting and double-press checks</h2>
      <p><strong>Held at once</strong> shows how many keys your keyboard registers at the same time. Gaming keyboards usually manage 6 or more (“N-key rollover”); cheap office keyboards may stop at 2–3 keys for some combinations. <strong>Double-press warnings</strong> appear when one press arrives twice within 25 milliseconds — a sign of a worn switch (“key chatter”), common on older mechanical keyboards.</p>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'laptop-keyboard-test': `
      <h2>How to test a laptop keyboard</h2>
      <p>The tester is already set to a standard Windows laptop layout. If your laptop has a number pad (most 15.6″ and 17″ models), tick <strong>Numeric keypad</strong>. Then press every key from the top-left to the bottom-right and watch them turn green. The counter at the top tells you how many keys are left.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Fn and the top row</h2>
      <p>On most new laptops the top row does media actions (volume, brightness) by default, and you hold <kbd>Fn</kbd> to get F1–F12. If F-keys don't light up here, press them together with Fn, or toggle <strong>Fn Lock</strong> — usually <kbd>Fn</kbd> + <kbd>Esc</kbd>, or a setting in the BIOS called “Function key behavior” or “Action keys mode”.</p>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'dell-keyboard-test': `
      <h2>Testing a Dell laptop keyboard</h2>
      <p>This page is set to the Windows laptop layout used by most Dell Inspiron, Vostro, Latitude, XPS and G-series laptops. If your Dell has a number pad, tick <strong>Numeric keypad</strong>. Press every key and check that each one turns green.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Function keys not working on your Dell laptop?</h2>
      <ul>
        <li>On many Dell laptops <kbd>Fn</kbd> + <kbd>Esc</kbd> toggles <strong>Fn Lock</strong>, switching the top row between media keys and F1–F12.</li>
        <li>You can also set it permanently: restart, press <kbd>F2</kbd> to open the BIOS setup, and look for <strong>Function Key Behavior</strong>.</li>
      </ul>
      <h2>Run Dell's own hardware test</h2>
      <p>Restart and tap <kbd>F12</kbd> at the Dell logo, then choose <strong>Diagnostics</strong>. Dell's built-in test (ePSA / SupportAssist) checks the keyboard and other hardware without Windows. If it reports a keyboard fault and your laptop is under warranty, Dell can replace the keyboard.</p>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'hp-keyboard-test': `
      <h2>Testing an HP laptop keyboard</h2>
      <p>This page uses the Windows laptop layout found on HP Pavilion, Victus, Envy, Omen, ProBook and EliteBook laptops. Tick <strong>Numeric keypad</strong> if your HP has one. Press every key and make sure each turns green.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Function keys not working on your HP laptop?</h2>
      <p>HP laptops ship with the top row set to actions (brightness, volume). To make F1–F12 work without holding Fn, restart, press <kbd>F10</kbd> to open the BIOS, and under <strong>System Configuration</strong> turn off <strong>Action Keys Mode</strong>.</p>
      <h2>Run HP's hardware test</h2>
      <p>Restart and press <kbd>Esc</kbd> repeatedly to open the startup menu, then press <kbd>F2</kbd> for <strong>HP PC Hardware Diagnostics</strong>. Its component tests can confirm a keyboard fault before you contact HP support.</p>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'lenovo-keyboard-test': `
      <h2>The Lenovo layout</h2>
      <p>Lenovo keyboards are a little different from other laptops, so this page draws them accurately: the <kbd>Fn</kbd> key is at the far bottom-left (before Ctrl), <kbd>PrtSc</kbd> sits between the right Alt and Ctrl, and <kbd>PgUp</kbd> / <kbd>PgDn</kbd> are above the left and right arrows, as on ThinkPads. Tick <strong>Numeric keypad</strong> for IdeaPad and Legion models that have one.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Function keys not working on your Lenovo laptop?</h2>
      <ul>
        <li>Press <kbd>Fn</kbd> + <kbd>Esc</kbd> to toggle <strong>FnLock</strong> — the small light on the Esc key shows when it is on.</li>
        <li>Prefer Ctrl in the corner? ThinkPad BIOS setup has a <strong>Fn and Ctrl Key Swap</strong> option, and Lenovo Vantage has the same setting under Input.</li>
      </ul>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'asus-keyboard-test': `
      <h2>Testing an ASUS laptop keyboard</h2>
      <p>This page uses the Windows laptop layout found on ASUS VivoBook, ZenBook, TUF Gaming and ROG laptops. Tick <strong>Numeric keypad</strong> if yours has one. Note: some VivoBook and ZenBook models have a <em>NumberPad</em> built into the touchpad — that is a touchpad feature, so it won't show up as keyboard keys here.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Function keys not working on your ASUS laptop?</h2>
      <p>On many ASUS laptops <kbd>Fn</kbd> + <kbd>Esc</kbd> toggles Fn Lock. You can also set it in the <strong>MyASUS</strong> app under Customization → <strong>Function key lock</strong>. MyASUS also has a <strong>System Diagnosis</strong> section that can check your hardware.</p>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'acer-keyboard-test': `
      <h2>Testing an Acer laptop keyboard</h2>
      <p>This page uses the Windows laptop layout found on Acer Aspire, Swift, Nitro and Predator laptops. Tick <strong>Numeric keypad</strong> if yours has one. Press every key and check that each turns green.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>Function keys not working on your Acer laptop?</h2>
      <p>On many Acer models the top row behaviour is set in the BIOS: restart, press <kbd>F2</kbd>, and on the Main tab look for an option such as <strong>Function key behavior</strong> or <strong>Hotkey Mode</strong>. Some newer models toggle it with <kbd>Fn</kbd> + <kbd>Esc</kbd>.</p>
      
      <h2>A key does not light up — what next?</h2>
      <ol>
        <li><strong>Rule out software first.</strong> Restart, then test again. Check that Filter Keys / Sticky Keys (Windows Settings → Accessibility → Keyboard) are off.</li>
        <li><strong>Plug in a USB keyboard and test it here.</strong> If the external keyboard works, the laptop keyboard hardware is at fault, not Windows.</li>
        <li><strong>Clean it.</strong> Turn the laptop off, tilt it, and blow compressed air under the dead key in short bursts. Crumbs and dust cause most “dead” or “sticky” keys.</li>
        <li><strong>Reinstall the driver.</strong> Device Manager → Keyboards → right-click the keyboard → Uninstall device, then restart. Windows reinstalls it automatically.</li>
        <li>If one key or one whole row is still dead, the keyboard (or its ribbon cable) needs replacing. On most laptops the keyboard is a separate, inexpensive part.</li>
      </ol>`,

  'macbook-keyboard-test': `
      <h2>Testing a MacBook keyboard</h2>
      <p>This page draws the MacBook Air / MacBook Pro layout: <kbd>fn</kbd>, <kbd>control</kbd>, <kbd>option</kbd> and <kbd>command</kbd> on the bottom row, half-height arrow keys, and the function row with Touch ID. Using a UK or European MacBook? Tick <strong>UK / EU (ISO)</strong>.</p>
      
      <h2>What the colours mean</h2>
      <ul>
        <li><strong>Green</strong> — the key sent a signal to your computer. It works.</li>
        <li><strong>Blue</strong> — the key is being held down right now. A key that stays blue after you let go is <em>stuck</em>.</li>
        <li><strong>Red outline</strong> — shown when you click “Highlight untested keys”: keys you have not pressed yet.</li>
        <li><strong>Dashed</strong> — Fn and Touch ID are handled inside the laptop and are never visible to any website. Test Fn through its shortcuts instead (Fn + brightness or volume).</li>
      </ul>
      <h2>F-keys only change brightness or volume?</h2>
      <p>That is normal on a Mac. Hold <kbd>fn</kbd> while pressing them, or change it permanently in <strong>System Settings → Keyboard → Keyboard Shortcuts → Function Keys</strong> and turn on “Use F1, F2, etc. keys as standard function keys”.</p>
      <h2>A key is sticky, repeats or does nothing</h2>
      <ol>
        <li>Hold the MacBook at a 75° angle and spray compressed air across the keyboard from left to right, then repeat from the other two sides. This is Apple's own advice for debris under keys.</li>
        <li>Run <strong>Apple Diagnostics</strong>: on Apple silicon, shut down, press and hold the power button until startup options appear, then press <kbd>command</kbd> + <kbd>D</kbd>. On Intel Macs, hold <kbd>D</kbd> while starting up.</li>
        <li>Keys that type twice or not at all on 2016–2019 MacBooks are a known problem with that “butterfly” keyboard design — an Apple Store or authorised service provider can check it.</li>
      </ol>`,

  'keyboard-ghosting-test': `
      <h2>What is keyboard ghosting?</h2>
      <p>Most keyboards don't wire every key separately. They use a grid, and when you hold certain combinations the keyboard can't tell which keys are down — so it drops some presses. That is <strong>ghosting</strong> (sometimes called blocking or jamming). In games it means a jump or reload that never happens while you are running diagonally.</p>
      <h2>How to test it</h2>
      <ol>
        <li>Hold the keys you use together in games — for example <kbd>W</kbd> + <kbd>A</kbd> + <kbd>Shift</kbd>, then add <kbd>Space</kbd>.</li>
        <li>Every held key should turn blue and the <strong>Held at once</strong> counter should rise with each one.</li>
        <li>If a key stays grey while the others are held, that combination ghosts. Try other combinations — rollover limits depend on which keys share the grid.</li>
      </ol>
      <h2>What the numbers mean</h2>
      <ul>
        <li><strong>2–3 keys:</strong> typical for basic office keyboards. Fine for typing, limiting for games.</li>
        <li><strong>6 keys:</strong> “6-key rollover”, the limit of standard USB keyboards — enough for nearly every game.</li>
        <li><strong>More than 6:</strong> “N-key rollover” (NKRO) — every key is read independently. Some keyboards only enable NKRO in their software or with a key combination.</li>
      </ul>
      <p>Note: some laptops and browsers cap the count themselves, and macOS reports keys differently while <kbd>command</kbd> is held, so test with letters, Shift and Space for the clearest result.</p>`,

  'gamepad-tester': `
      <h2>How to test your controller</h2>
      <ol>
        <li>Connect the controller with a USB cable or Bluetooth.</li>
        <li><strong>Press any button.</strong> For privacy, browsers hide game controllers from websites until you press a button.</li>
        <li>Move both sticks around their full range — the trail should draw a full, round circle. Press every button and both triggers; each lights up, and triggers show how far they are pressed (0–100%).</li>
        <li>Click <strong>Test vibration</strong> to run both rumble motors (works in Chrome and Edge).</li>
      </ol>
      <h2>Which controllers work?</h2>
      <p>PlayStation 5 DualSense and PS4 DualShock 4, Xbox One and Series X|S controllers, Nintendo Switch Pro Controller, and most PC gamepads. Button names change automatically to match your controller (✕ ○ □ △ for PlayStation, A B X Y for Xbox). Chrome, Edge, Firefox and Safari all support controllers; vibration from websites works best in Chrome and Edge.</p>
      <h2>Reading the stick values</h2>
      <p>Each stick reports X and Y from −1 to +1. At rest both should be close to 0. The <strong>offset</strong> is the distance from the centre: under 0.05 is perfect, 0.05–0.12 is a small offset that games' deadzones normally hide, and above about 0.12 means the stick is drifting. Use the <strong>5-second drift test</strong> for a definite answer.</p>`,

  'stick-drift-test': `
      <h2>What is stick drift?</h2>
      <p>Stick drift is when your character or camera moves on its own while you are not touching the controller. It happens because the sensors inside an analog stick wear out or collect dust, so the stick no longer reports “centre” when it is centred. It is very common on DualSense, Joy-Con and Xbox controllers after a year or two of heavy use.</p>
      <h2>How this test measures drift</h2>
      <p>Connect your controller, press any button, put it down, and click <strong>5-second drift test</strong>. For five seconds the page records the largest distance each stick reports from the centre while nobody is touching it:</p>
      <ul>
        <li><strong>Below 0.05</strong> — centred. No drift.</li>
        <li><strong>0.05 to 0.12</strong> — a slight offset. Most games ignore movements this small (their “deadzone”), so you probably won't notice it.</li>
        <li><strong>Above 0.12</strong> — drift is likely and you will usually see it in games.</li>
      </ul>
      <h2>How to fix stick drift</h2>
      <ol>
        <li><strong>Clean it:</strong> with the controller off, push the stick fully to one side and blow compressed air into the gap at the base, rotating as you go. A tiny drop of isopropyl alcohol around the base helps with sticky residue.</li>
        <li><strong>Raise the deadzone</strong> in the game's controller settings (or in Steam Input) so it ignores small offsets.</li>
        <li><strong>Recalibrate / update firmware:</strong> Xbox controllers update through the Xbox Accessories app; PS5 DualSense through the console or the official PC updater.</li>
        <li>If the offset stays above 0.12, the stick module needs replacing — covered by warranty for many controllers, or replaceable with a Hall-effect stick that does not wear the same way.</li>
      </ol>`,

  'mouse-double-click-test': `
      <h2>Why does my mouse double-click by itself?</h2>
      <p>Every mouse button has a small metal spring inside a switch. After millions of clicks the spring wears or oxidises and “bounces”, so one press is sent to the computer as two clicks a few milliseconds apart. Files open when you meant to select them, and dragging drops things halfway.</p>
      <h2>How this test works</h2>
      <p>Click the box slowly and normally — one click at a time — with each button. Humans can't click the same button twice in under about 80 milliseconds, so when two presses arrive closer together than that, the test flags a <strong>double-click fault</strong> for that button. The table shows clicks, faults and the shortest gap for left, right, middle and both side buttons, and the log lists every click. Faults often only appear now and then, so click 50–100 times for a reliable result. Scroll the wheel inside the box to check that it registers up and down.</p>
      <h2>Fixes</h2>
      <ol>
        <li>Check Windows isn't the cause: Settings → Bluetooth & devices → Mouse → Additional mouse settings, and make sure “ClickLock” is off. Test the mouse on another computer if you can.</li>
        <li>If the fault follows the mouse, it is the switch. Under warranty? Most brands replace it. Otherwise the switch can be replaced (it needs soldering), or the mouse replaced — optical-switch mice don't suffer from this problem.</li>
      </ol>`,

  'pdf-booklet-maker': `
      <h2>How booklet printing works</h2>
      <p>A booklet is made of sheets folded in half, with two pages on each side of every sheet. The pages therefore can't be printed in their normal order. For an 8-page booklet, sheet 1 carries pages 8 and 1 on the front and 2 and 7 on the back; sheet 2 carries 6 and 3, then 4 and 5. This tool works out that order for you (it's called <em>imposition</em>) and adds blank pages at the end when needed, because a booklet always has a multiple of 4 pages.</p>
      <h2>Printing your booklet</h2>
      <ol>
        <li>Open the downloaded PDF and print at <strong>actual size</strong> (100%).</li>
        <li>Choose <strong>double-sided</strong> printing with <strong>flip on short edge</strong>. (Flipping on the long edge prints every back side upside down.)</li>
        <li>Fold the whole stack in half and staple along the fold — two or three staples is enough.</li>
      </ol>
      <p>No duplex printer? Print the odd pages, put the stack back in the tray, then print the even pages — do one test sheet first to see which way your printer feeds paper.</p>
      <h2>Settings explained</h2>
      <ul>
        <li><strong>Paper size:</strong> “Automatic” makes each sheet exactly two pages wide. Choose A4 or Letter to print A5 / half-letter booklets on normal paper, or A3 to keep A4 pages full size.</li>
        <li><strong>Signatures:</strong> one booklet works up to about 40–60 pages. Thicker documents fold badly, so split them into signatures of 16–32 pages, fold each one, stack them and bind them together.</li>
        <li><strong>Right to left:</strong> for Urdu, Arabic and Persian books and Japanese manga, which open from the other side.</li>
      </ul>`,

  'discord-timestamp-generator': `
      <h2>How Discord timestamps work</h2>
      <p>If you type “game night at 8 PM” in a Discord server, everyone reads it in their own time zone and half of them show up at the wrong time. A Discord timestamp fixes that. You paste a short code like <code>&lt;t:1792540800:F&gt;</code>, and Discord shows each reader the time converted to <em>their</em> time zone and language. The number is a Unix timestamp — the seconds since 1 January 1970 UTC.</p>
      <h2>The 7 styles</h2>
      <ul>
        <li><code>:t</code> short time (8:00 PM) and <code>:T</code> long time (8:00:00 PM)</li>
        <li><code>:d</code> short date (10/20/2026) and <code>:D</code> long date (October 20, 2026)</li>
        <li><code>:f</code> date and time — the default if you leave the style out</li>
        <li><code>:F</code> full date with weekday and time</li>
        <li><code>:R</code> relative time (“in 3 hours”, “2 days ago”), which keeps updating in Discord — perfect for countdowns</li>
      </ul>
      <h2>Tips</h2>
      <ul>
        <li>Pick the time zone the event is planned in — for example New York for a US-hosted tournament — and the tool converts it correctly, including daylight saving time.</li>
        <li>Combine styles: “Starts <code>&lt;t:…:F&gt;</code> (<code>&lt;t:…:R&gt;</code>)” shows both the date and a live countdown.</li>
        <li>Timestamps work in messages, embeds, channel topics, event descriptions and bot replies.</li>
      </ul>`,

  'vcf-converter': `
      <h2>What is a VCF file?</h2>
      <p>A VCF (vCard) file is the standard format for contacts. Every phone and email app can import and export it: iPhone, Android, Google Contacts, Outlook, WhatsApp Business and more. One .vcf file can hold one contact or thousands.</p>
      <h2>What this converter does</h2>
      <ul>
        <li><strong>CSV or Excel → VCF:</strong> turn a spreadsheet of customers, staff or students into contacts you can import on a phone in one go. Columns like Name, Mobile and Email are matched automatically, and you can change any match.</li>
        <li><strong>VCF → CSV or Excel:</strong> open a contacts backup in a spreadsheet — one row per contact, with every phone number and email in its own column.</li>
      </ul>
      <p>Names in any language (Urdu, Arabic, Hindi, Chinese…) are kept intact, and old Android exports that use “quoted-printable” encoding are decoded properly.</p>
      <h2>Private by design</h2>
      <p>Contact lists contain other people's phone numbers and emails. Many online converters upload them to a server; this one reads and converts the file inside your browser, so the contacts never leave your device.</p>`,

  'csv-to-vcf': `
      <h2>Prepare your CSV</h2>
      <ul>
        <li>Put one contact per row, with column names in the first row — for example <em>Name, Mobile, Email, Company</em>. Separate First name and Last name columns also work.</li>
        <li>Phone numbers: include the country code (+92, +1, +44…) if you will import on a phone used abroad. Keep leading zeros — if Excel removed them, format the column as Text before saving.</li>
        <li>Saved from Excel? Use “CSV UTF-8” so names with non-English letters stay correct.</li>
      </ul>
      <h2>Import the VCF on your phone</h2>
      <ul>
        <li><strong>iPhone:</strong> email or AirDrop the .vcf to yourself, open it and tap “Add All Contacts”. Or import it at icloud.com/contacts.</li>
        <li><strong>Android:</strong> open the Contacts app → Fix & manage (or Settings) → Import from file, and choose the .vcf.</li>
        <li><strong>Gmail / Google Contacts:</strong> contacts.google.com → Import → select the .vcf. They then sync to every Android phone on that account.</li>
        <li><strong>Outlook:</strong> open the .vcf, or import it from the People page.</li>
      </ul>
      <p>vCard 3.0 is selected by default because every modern phone and app reads it. Choose 2.1 only for very old phones.</p>`,

  'excel-to-vcf': `
      <h2>Converting an Excel contact list</h2>
      <p>Choose your .xlsx or .xls file — there's no need to save it as CSV first. The first sheet is read, columns are matched automatically (Name, First name, Last name, Phone, Mobile, Email, Company…), and you can fix any column using the drop-downs. A preview of the first vCard shows exactly what your phone will receive.</p>
      <h2>Common problems</h2>
      <ul>
        <li><strong>Phone numbers like 3.00123E+09:</strong> Excel turned them into numbers. Select the column, choose Format Cells → Text, and retype or paste the numbers back as text.</li>
        <li><strong>Missing leading zero:</strong> same cause — store phone numbers as text, or use the international format (+92 300…).</li>
        <li><strong>Several sheets:</strong> only the first sheet is converted. Move the contacts sheet to the front, or copy it into a new file.</li>
        <li><strong>Hundreds of contacts:</strong> no problem — they all go into one .vcf file, which phones import in a single step. Need one file per contact instead? Use the ZIP option.</li>
      </ul>`,

  'vcf-to-csv': `
      <h2>Why convert VCF to CSV?</h2>
      <p>A CSV file opens in Excel, Google Sheets and any CRM or mailing tool, so you can clean up duplicates, see all your contacts at a glance, or move them into business software. The converter puts each contact on one row with columns for full name, first and last name, up to five phone numbers (with their type: cell, work, home), emails, company, job title, address, website, birthday and notes.</p>
      <h2>Getting a VCF from your phone</h2>
      <ul>
        <li><strong>Android:</strong> Contacts → Fix & manage → Export to file. You get a .vcf with every contact.</li>
        <li><strong>iPhone:</strong> at icloud.com/contacts select all contacts and choose Export vCard.</li>
        <li><strong>Google Contacts:</strong> Export → vCard.</li>
      </ul>
      <p>The CSV is saved as UTF-8 with the marker Excel needs, so Urdu, Arabic and other non-English names open correctly when you double-click the file.</p>`,

  'vcf-to-excel': `
      <h2>Open your contacts in Excel</h2>
      <p>Excel can't open a .vcf file directly — it shows one long column of BEGIN:VCARD lines. This converter reads the vCard properly and saves a real .xlsx workbook with one row per contact and a column for each detail, ready to sort, filter, print or share.</p>
      <h2>Good to know</h2>
      <ul>
        <li>Contacts with several phone numbers get Phone 1, Phone 2… columns, each with its type (cell, work, home).</li>
        <li>Multi-line notes and addresses stay in one cell.</li>
        <li>Phone numbers are kept as text, so leading zeros and + signs are not lost.</li>
        <li>Edited the sheet and want the contacts back on your phone? Switch the converter to <strong>CSV / Excel → VCF</strong> and choose your edited file.</li>
      </ul>`,

  'typing-speed-test': `
      <h2>How typing speed is measured</h2>
      <p>Typing speed is counted in <strong>words per minute (WPM)</strong>, where one “word” is any 5 characters including spaces. That way long and short words count fairly. This test counts only correctly typed characters for your WPM; <strong>raw speed</strong> includes mistakes, and <strong>accuracy</strong> is the share of characters you got right.</p>
      <h2>What is a good typing speed?</h2>
      <ul>
        <li><strong>Under 30 WPM</strong> — beginner. Focus on accuracy and using all ten fingers.</li>
        <li><strong>35–45 WPM</strong> — average for adults.</li>
        <li><strong>50–70 WPM</strong> — fast; enough for most office and data-entry jobs.</li>
        <li><strong>Over 70 WPM</strong> — professional level.</li>
      </ul>
      <h2>Getting faster</h2>
      <ol>
        <li>Keep your fingers on the home row (ASDF and JKL;) and don't look at the keyboard.</li>
        <li>Slow down until you reach 95% accuracy — speed follows. The <strong>keys to practice</strong> list after each test shows which characters you miss most.</li>
        <li>Practise 10–15 minutes a day, and try <strong>Punctuation & numbers</strong> mode once plain words feel easy, since real writing has capitals, commas and numbers.</li>
      </ol>`,

  '1-minute-typing-test': `
      <h2>About the 1 minute typing test</h2>
      <p>One minute is the most common typing test length and the quickest way to check your words per minute. It is long enough to give a fair score but short enough to keep your best speed the whole way through, so 1-minute scores are usually a little higher than longer tests.</p>
      <h2>Tips for your best score</h2>
      <ul>
        <li>Sit straight with your wrists level and fingers resting on the home row.</li>
        <li>Read a word or two ahead instead of looking at each letter.</li>
        <li>Don't stop to fix every mistake — keep a steady rhythm. Your WPM only counts correct characters, so accuracy still matters.</li>
        <li>Take three tests and use the average; the page remembers your best 1-minute score.</li>
      </ul>`,

  '3-minute-typing-test': `
      <h2>Why take a 3 minute typing test?</h2>
      <p>Many job applications, data-entry roles and government or university typing tests use 3 to 5 minutes, because a short test can hide inconsistent typing. Three minutes shows your <em>sustained</em> speed — the pace you keep when the first burst of energy wears off. The speed chart at the end shows whether you slowed down.</p>
      <h2>Preparing for a typing test for a job</h2>
      <ul>
        <li>Practise with <strong>Sentences</strong> or <strong>Punctuation & numbers</strong> mode — real job tests use proper text with capitals and punctuation.</li>
        <li>Employers usually ask for 35–45 WPM for general office work and 50–60+ WPM for typists and data entry, often with 90–95% accuracy.</li>
        <li>Accuracy counts: a test that removes points for errors can make 60 WPM with mistakes score lower than 50 WPM without.</li>
      </ul>`,

  '5-minute-typing-test': `
      <h2>About the 5 minute typing test</h2>
      <p>A five-minute test gives the most realistic measure of your everyday typing speed. Short tests reward a quick burst; over five minutes your rhythm, accuracy and stamina all count — which is why it is a common length for professional typing certificates and transcription jobs.</p>
      <h2>Reading your results</h2>
      <ul>
        <li><strong>WPM</strong> counts only correct characters. <strong>Raw speed</strong> includes mistakes — a big gap between the two means you should slow down slightly.</li>
        <li><strong>CPM</strong> (characters per minute) is used by some employers instead of WPM; it is roughly WPM × 5.</li>
        <li>The <strong>speed chart</strong> shows your pace minute by minute. A falling line means fatigue — short daily practice builds the stamina to keep it flat.</li>
      </ul>`,

  'image-splitter': `
      <h2>How Instagram grid posts work</h2>
      <p>Your Instagram profile shows posts three across, newest first. If you cut one big picture into tiles and post them in the right order, your profile shows the whole picture — a “grid post” or “puzzle feed”. The catch is the order: the newest post appears at the top-left, so the <strong>bottom-right tile must be posted first</strong> and the top-left tile last. This tool numbers every tile in that posting order for you.</p>
      <h2>Grid, carousel or custom?</h2>
      <ul>
        <li><strong>Profile grid</strong> — 1 to 5 rows of 3 posts (3, 6, 9, 12 or 15 tiles) that join up on your profile.</li>
        <li><strong>Carousel (swipe)</strong> — 2 to 10 slides in a single post. Perfect for panoramas: as people swipe, the photo continues seamlessly.</li>
        <li><strong>Custom grid</strong> — any number of rows and columns, for printing, puzzles or other platforms.</li>
      </ul>
      <h2>Which tile shape?</h2>
      <ul>
        <li><strong>1:1 square (1080×1080)</strong> — the classic Instagram shape.</li>
        <li><strong>4:5 portrait (1080×1350)</strong> — the tallest feed post Instagram allows; takes up more screen in the feed.</li>
        <li><strong>3:4 (1080×1440)</strong> — matches the taller thumbnails Instagram's profile grid now shows, so tiles line up without being cut off on your profile.</li>
      </ul>
      <p>Use the two sliders to move the picture inside the frame before cutting. Tiles are saved as high-quality JPGs at Instagram's recommended 1080-pixel width and downloaded together in a ZIP.</p>`,

  'split-image-for-instagram': `
      <h2>Split one photo into 3 Instagram posts</h2>
      <p>A three-part photo fills one whole row of your Instagram profile — great for landscapes, group photos, product launches and announcements. Choose a wide photo, keep <strong>1 row</strong> selected, and the tool crops it to the right shape and cuts three equal tiles.</p>
      <h2>Posting order matters</h2>
      <ol>
        <li>Post tile <strong>1</strong> first — it is the right-hand third of your picture.</li>
        <li>Then post tile <strong>2</strong> (the middle) and finally tile <strong>3</strong> (the left).</li>
        <li>Post all three in a row without anything in between, or the picture will be split across two rows.</li>
      </ol>
      <p>Already have posts on your profile? The three tiles only line up if the number of posts before them is a multiple of three — otherwise post one or two extra images first, or archive them, to align the row.</p>`,

  'instagram-carousel-splitter': `
      <h2>Seamless Instagram carousel from a panorama</h2>
      <p>A carousel post can hold up to 20 images, and people swipe through them in order. Cut a panorama into equal slides and the picture flows from one slide to the next as they swipe — one of the most engaging post types, because every swipe counts as interaction.</p>
      <h2>Tips</h2>
      <ul>
        <li><strong>Pick the slide count from the photo's shape.</strong> A photo about three times wider than it is tall works well as 3 square slides; a very wide phone panorama suits 4–6 slides.</li>
        <li><strong>Choose 4:5 portrait</strong> for slides that take up more of the screen in the feed.</li>
        <li><strong>Upload all slides in one post</strong>, selecting them in order 1, 2, 3… Instagram keeps that order.</li>
        <li>Avoid placing faces or text exactly on a cut line — use the sliders to shift the picture slightly.</li>
      </ul>`,

  'gpx-kml-converter': `
      <h2>GPX vs KML — what's the difference?</h2>
      <ul>
        <li><strong>GPX</strong> is the standard format of GPS devices and fitness apps: Garmin, Strava, Komoot, AllTrails, Wikiloc, OsmAnd and most hiking and cycling apps. It stores waypoints, tracks (where you went, with times) and routes (where you plan to go).</li>
        <li><strong>KML</strong> (and zipped <strong>KMZ</strong>) is Google's format for Google Earth and Google My Maps. It also stores styling such as line colour and width.</li>
      </ul>
      <p>This converter reads either format and writes the other: waypoints become placemarks, and tracks and routes become lines (and back again). Elevation is kept, and timestamps are kept when converting KML tracks that include them. It also shows the total length of your tracks in kilometres and miles.</p>
      <h2>Private by design</h2>
      <p>GPS files show exactly where you live, work and travel. Most online converters upload them to a server; this one converts the file inside your browser, so your location data never leaves your device.</p>`,

  'gpx-to-kml': `
      <h2>Open a GPX track in Google Earth or My Maps</h2>
      <ol>
        <li>Export the GPX from your app or device (Strava: activity → ⋯ → Export GPX; Garmin Connect: activity → ⚙ → Export to GPX).</li>
        <li>Convert it here. Pick a track colour and line width — they are saved inside the KML.</li>
        <li><strong>Google Earth:</strong> File → Open (or drag the KML onto the globe). <strong>Google My Maps:</strong> create a map → Add layer → Import, then choose the KML.</li>
      </ol>
      <p>Google Earth on the web can open GPX directly too, but Google My Maps works more reliably with KML, and KML keeps your chosen colour and width when you share the map.</p>`,

  'kml-to-gpx': `
      <h2>Take a Google Earth or My Maps route to your GPS</h2>
      <ol>
        <li><strong>From Google My Maps:</strong> open the map → ⋮ menu → Export to KML/KMZ. <strong>From Google Earth:</strong> right-click the place or folder → Save Place As → KML or KMZ.</li>
        <li>Convert it here — KMZ files are unzipped automatically.</li>
        <li>Copy the GPX to your device or import it into your app (Garmin Connect, Komoot, OsmAnd, AllTrails, Wikiloc…).</li>
      </ol>
      <h2>Tracks or routes?</h2>
      <p>By default lines become GPX <strong>tracks</strong>, which every app and device can display. Tick “Save lines as GPX routes” if your device needs <strong>routes</strong> for turn-by-turn navigation. Placemarks become waypoints. Shapes drawn as areas are converted to their outline.</p>`,

  'instagram-unfollowers-tracker': `
      <h2>Why this tracker never asks for your password</h2>
      <p>Most “unfollowers” apps ask you to log in with your Instagram password. That gives a stranger full access to your account, and Instagram regularly restricts or locks accounts that use them. This tracker works differently: it reads the copy of your followers and following lists that <strong>Instagram itself</strong> gives you through <em>Download your information</em>. You never log in here, and the file is read inside your browser — it is not uploaded.</p>
      <h2>What the three lists mean</h2>
      <ul>
        <li><strong>Don't follow you back</strong> — accounts you follow that don't follow you. This is the list most people want.</li>
        <li><strong>You don't follow back</strong> — your followers that you don't follow (your “fans”).</li>
        <li><strong>Mutual</strong> — you follow each other.</li>
      </ul>
      <p>Each name links to the profile, so you can review and unfollow by hand. Lists can be searched, copied or saved as a CSV spreadsheet.</p>
      <h2>Good to know</h2>
      <ul>
        <li>The results are a snapshot from the moment you requested the download. Request a fresh download to check again later.</li>
        <li>Brands, celebrities and creators rarely follow back — that's normal, not a sign of an unfollow.</li>
        <li>Unfollow slowly. Removing hundreds of accounts in a few minutes can trigger Instagram's limits; a few dozen per hour is safer.</li>
      </ul>`,

  'instagram-not-following-back': `
      <h2>See who doesn't follow you back — without risking your account</h2>
      <p>Instagram doesn't show a “not following back” list, and third-party apps that promise one usually want your password. This page uses Instagram's own data download instead: request your <em>Followers and following</em> data in JSON format, drop the ZIP file here, and you instantly get the list of accounts you follow that don't follow you.</p>
      <h2>Step by step</h2>
      <ol>
        <li>Instagram → <strong>Settings → Accounts Center → Your information and permissions → Download your information</strong>.</li>
        <li><strong>Download or transfer information</strong> → your account → <strong>Some of your information</strong> → tick <strong>Followers and following</strong>.</li>
        <li><strong>Download to device</strong>, date range <strong>All time</strong>, format <strong>JSON</strong> → <strong>Create files</strong>.</li>
        <li>When Instagram's email arrives, download the ZIP and drop it on this page.</li>
      </ol>
      <p>Everything is processed in your browser; nothing is sent to us or to anyone else.</p>`,

  'sun-moon-rising-calculator': `
      <h2>Your Big Three</h2>
      <p>In Western astrology the three most important placements in a birth chart are often called the <strong>Big Three</strong>:</p>
      <ul>
        <li><strong>Sun sign</strong> — your core identity. It is the sign most people know, based on your birthday.</li>
        <li><strong>Moon sign</strong> — your emotional side: what you need to feel safe and how you react. The Moon changes sign about every two and a half days.</li>
        <li><strong>Rising sign (Ascendant)</strong> — the sign rising on the eastern horizon at the moment you were born. It describes your outward style and first impressions, and it changes roughly every two hours, which is why your birth time matters.</li>
      </ul>
      <h2>How it is calculated</h2>
      <p>The calculator converts your birth time to Universal Time using your birthplace's time zone (including daylight saving rules for that date), then computes the exact positions of the Sun and Moon along the zodiac with a professional astronomy library. The rising sign comes from the local sidereal time and the latitude of your birthplace. It uses the <strong>tropical zodiac</strong> used in Western astrology; Vedic (sidereal) astrology gives signs about 24° earlier.</p>
      <p>Don't know your birth time? You will still get your Sun sign, and your Moon sign unless the Moon changed sign that day — the tool tells you when it did.</p>`,

  'rising-sign-calculator': `
      <h2>What is a rising sign?</h2>
      <p>Your rising sign, or <strong>Ascendant</strong>, is the zodiac sign that was rising over the eastern horizon at the exact time and place you were born. Astrologers read it as your “mask”: the energy you show to new people, your style and your instinctive way of starting things.</p>
      <h2>Why the exact birth time matters</h2>
      <p>The Earth turns a full circle every day, so all twelve signs rise in turn — each for about two hours on average (much less for some signs at high latitudes). A difference of even 10–20 minutes can change your rising sign if you were born near the boundary, so use the time from your birth certificate when you can. Your birthplace matters too: the same moment gives different rising signs in London and Karachi.</p>
      <p>The degree shown with your result tells you how close you are to a boundary: near 0° or 29° means a small error in the time could move it to the neighbouring sign.</p>`,

  'moon-sign-calculator': `
      <h2>What is a Moon sign?</h2>
      <p>Your Moon sign is the zodiac sign the Moon was in when you were born. While your Sun sign describes your identity, the Moon describes your emotional world — your moods, comfort needs and how you care for others. Many people relate to their Moon sign more than to their Sun sign.</p>
      <h2>Do I need my birth time?</h2>
      <p>Usually not. The Moon spends about two and a half days in each sign, so on most dates the whole day falls in one sign and the calculator gives a definite answer. If the Moon changed sign on your birthday, the tool warns you and shows both signs — then your birth time decides which one is yours.</p>
      <p>Results use the tropical (Western) zodiac and the Moon's exact position from an astronomy library, adjusted for your birthplace's time zone on that date.</p>`,

  'merge-pdf': `
      <h2>How to merge PDF files</h2>
      <p>Select two or more PDFs, put them in the right order with the arrows, and click <strong>Merge PDF</strong>. Pages keep their original size, orientation, text and links; the files are simply joined one after another into a single document.</p>
      <h2>Tips</h2>
      <ul>
        <li><strong>Only need some pages?</strong> Merge first, then use <a href="/delete-pdf-pages">Delete PDF Pages</a> or <a href="/organize-pdf">Organize PDF</a> to remove or reorder pages.</li>
        <li><strong>Adding scans or photos?</strong> Convert them with <a href="/jpg-to-pdf">JPG to PDF</a>, then merge.</li>
        <li><strong>File too big to email afterwards?</strong> Run the result through <a href="/compress-pdf">Compress PDF</a>.</li>
        <li>Password-protected PDFs must be opened and saved without a password first.</li>
      </ul>
      <h2>Is it safe for private documents?</h2>
      <p>Yes. The tool runs inside your web browser, so your documents are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'compress-pdf': `
      <h2>Which compression level should I choose?</h2>
      <ul>
        <li><strong>Lossless</strong> — cleans up and re-packs the file without touching image quality. Best for text documents; savings are usually small.</li>
        <li><strong>Recommended</strong> — re-compresses the images inside the PDF at good quality. The right choice for most files.</li>
        <li><strong>Strong</strong> — smaller images and lower quality. Good for scans you only need to read on screen.</li>
        <li><strong>Extreme</strong> — turns every page into a compressed image. Gives the smallest file, but text can no longer be selected or searched, so use it only when you must hit a strict size limit (for example 1 MB or 2 MB on an application portal).</li>
      </ul>
      <p>Ticking <strong>grayscale</strong> removes colour from images and often halves the size of scanned documents.</p>
      <h2>Why some PDFs barely shrink</h2>
      <p>PDFs made of plain text (exported from Word, for example) are already small; most of a PDF's size comes from images and embedded fonts. If the tool can't make your file noticeably smaller it tells you, instead of giving you a worse copy.</p>
      <h2>Is it safe for private documents?</h2>
      <p>Yes. The tool runs inside your web browser, so your documents are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'pdf-to-jpg': `
      <h2>Convert PDF pages to images</h2>
      <p>Every page is rendered as a separate image. Choose <strong>JPG</strong> for small files that are easy to share in WhatsApp or email, or <strong>PNG</strong> for sharp text and diagrams with no compression artefacts. Download single pages or all of them in one ZIP file.</p>
      <h2>Which resolution?</h2>
      <ul>
        <li><strong>Low (72 DPI)</strong> — small previews and thumbnails.</li>
        <li><strong>Medium (150 DPI)</strong> — sharing on screens, WhatsApp and social media.</li>
        <li><strong>High (220 DPI)</strong> or <strong>Print (300 DPI)</strong> — printing, or zooming into small text.</li>
      </ul>
      <p>Higher resolutions make bigger files and take longer for long documents, so start in the middle and only go higher if the text looks soft.</p>
      <h2>Is it safe for private documents?</h2>
      <p>Yes. The tool runs inside your web browser, so your documents are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'jpg-to-pdf': `
      <h2>Turn photos and scans into one PDF</h2>
      <p>Add JPG, PNG, WebP or other images, drag them into order, and choose the page size: <strong>A4</strong>, <strong>US Letter</strong> or <strong>Legal</strong> for documents you will print or submit, or <strong>Same as image</strong> to keep each photo's own size. Margins and portrait/landscape orientation are adjustable.</p>
      <h2>Typical uses</h2>
      <ul>
        <li>Combining photos of a multi-page form, receipt or ID into one file for an application.</li>
        <li>Sending assignments or notes you photographed with your phone.</li>
        <li>Making a simple photo album or portfolio PDF.</li>
      </ul>
      <p>Tip: phone photos are often large. If the PDF must stay under an upload limit, run it through <a href="/compress-pdf">Compress PDF</a> afterwards.</p>
      <h2>Is it safe for private photos?</h2>
      <p>Yes. The tool runs inside your web browser, so your photos are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'pdf-to-word': `
      <h2>What gets converted</h2>
      <p>The converter reads the text of your PDF and rebuilds it as paragraphs in an editable Word (.docx) file that opens in Microsoft Word, Google Docs and LibreOffice. It is ideal when you need to edit or reuse the <em>words</em> of a document: reports, letters, articles and CVs.</p>
      <h2>Limitations to know</h2>
      <ul>
        <li><strong>Scanned PDFs</strong> are pictures of text, so there is nothing to extract. Run the pages through <a href="/image-to-text">Image to Text (OCR)</a> first.</li>
        <li><strong>Complex layouts</strong> — columns, tables and text boxes — are simplified into ordinary paragraphs, so check the formatting before you send the file.</li>
        <li>Images inside the PDF are not copied into the Word file.</li>
      </ul>
      <h2>Is it safe for private documents?</h2>
      <p>Yes. The tool runs inside your web browser, so your documents are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'word-to-pdf': `
      <h2>How it works</h2>
      <p>Your .docx file is rendered in the browser with its fonts, headings, tables and images, and you save it as a PDF using the print dialog (choose <strong>Save as PDF</strong> as the printer). The result looks the same on every device, which is why PDF is the safest format for CVs, applications and anything you submit.</p>
      <h2>Tips for a perfect PDF</h2>
      <ul>
        <li>Turn off “Headers and footers” in the print dialog so the browser doesn't add a date or web address.</li>
        <li>Set the paper size (A4 or Letter) and margins to match your document.</li>
        <li>Only .docx files are supported. Save older .doc files as .docx in Word or Google Docs first.</li>
      </ul>
      <h2>Is it safe for private documents?</h2>
      <p>Yes. The tool runs inside your web browser, so your documents are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'split-pdf': `
      <h2>Two ways to split</h2>
      <ul>
        <li><strong>Every page</strong> — each page becomes its own PDF, downloaded together as a ZIP.</li>
        <li><strong>Custom ranges</strong> — type ranges such as <code>1-3, 5, 8-10</code> to extract exactly the pages you need, each range as a separate file.</li>
      </ul>
      <h2>Common uses</h2>
      <p>Sending only the relevant pages of a long contract, separating scanned documents that were captured in one batch, or pulling a single chapter out of a book or manual. To remove pages instead of extracting them, use <a href="/delete-pdf-pages">Delete PDF Pages</a>.</p>
      <h2>Is it safe for private documents?</h2>
      <p>Yes. The tool runs inside your web browser, so your documents are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'compress-image': `
      <h2>How image compression works</h2>
      <p>JPG and WebP images can be stored at different quality levels. Lowering the quality slightly removes detail your eyes barely notice and can cut the file size by 50–80%. The before/after sizes are shown for every image so you can find the right balance.</p>
      <h2>Tips for the smallest files</h2>
      <ul>
        <li><strong>Resize first.</strong> A 4000-pixel phone photo shown on a website at 1200 pixels wastes most of its size — use <a href="/resize-image">Resize Image</a>.</li>
        <li><strong>Choose the right format.</strong> WebP is usually 25–35% smaller than JPG at the same quality and works in all modern browsers. Keep PNG for logos and screenshots with sharp edges.</li>
        <li>Quality around 70–80% is the sweet spot for photos; below 60% blocky artefacts start to show.</li>
      </ul>
      <h2>Is it safe for private images?</h2>
      <p>Yes. The tool runs inside your web browser, so your images are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'resize-image': `
      <h2>Resize by pixels or percentage</h2>
      <p>Enter a new width and height in pixels, or scale by a percentage. When you set both width and height, choose <strong>Fit inside (keep ratio)</strong> to avoid stretching, <strong>Crop to exact size</strong> to fill the frame exactly, or <strong>Stretch</strong> if distortion doesn't matter. Several images can be resized at once.</p>
      <h2>Common sizes</h2>
      <ul>
        <li><strong>Instagram post:</strong> 1080 × 1080 (square) or 1080 × 1350 (portrait)</li>
        <li><strong>Facebook / LinkedIn link image:</strong> 1200 × 630</li>
        <li><strong>YouTube thumbnail:</strong> 1280 × 720</li>
        <li><strong>Website hero image:</strong> 1600–2000 pixels wide</li>
        <li><strong>Passport photo:</strong> use the <a href="/passport-photo-maker">Passport Photo Maker</a>, which handles country sizes for you.</li>
      </ul>
      <p>Making an image bigger can't add detail that isn't there, so enlarging small photos will look soft. Shrinking always looks sharp.</p>
      <h2>Is it safe for private images?</h2>
      <p>Yes. The tool runs inside your web browser, so your images are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'remove-background': `
      <h2>AI background removal in your browser</h2>
      <p>A small AI model trained to separate people and objects from their background runs directly in your browser. The first time, it downloads the model (a few MB); after that, removing a background takes a few seconds. You get a transparent PNG, or you can fill the background with a solid colour such as white for ID and passport photos.</p>
      <h2>For the cleanest cut-out</h2>
      <ul>
        <li>Use a photo where the subject is in focus and clearly separated from the background.</li>
        <li>Good, even lighting helps more than a high resolution.</li>
        <li>Fine details such as flyaway hair are the hardest part for any tool — a plain background behind the subject gives the best edges.</li>
      </ul>
      <h2>Is it safe for private photos?</h2>
      <p>Yes. The tool runs inside your web browser, so your photos are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'image-to-text': `
      <h2>Extract text from images and scans (OCR)</h2>
      <p>Optical character recognition (OCR) reads the letters in a photo or screenshot and turns them into text you can copy, edit and search. Choose the language of the text first — English, Urdu, Arabic, Hindi, Bengali, Persian, Spanish, French, German and more are supported, including English + Urdu for mixed documents.</p>
      <h2>Getting accurate results</h2>
      <ul>
        <li>Take the photo straight on, with the page filling the frame and no shadows.</li>
        <li>Higher contrast (dark text on a light background) works best; crop away anything that isn't text.</li>
        <li>Handwriting and decorative fonts are much harder than printed text — always proofread the result.</li>
      </ul>
      <h2>Is it safe for private images?</h2>
      <p>Yes. The tool runs inside your web browser, so your images are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'heic-to-jpg': `
      <h2>What is a HEIC file?</h2>
      <p>iPhones save photos as <strong>HEIC</strong> (High Efficiency Image Container) because it takes about half the space of JPG. The problem is that many Windows programs, websites and upload forms don't accept HEIC. Converting to JPG makes the photo open everywhere.</p>
      <h2>Converting several photos</h2>
      <p>Add as many HEIC files as you like; each is converted to JPG and you can download them together as a ZIP.</p>
      <p>Want your iPhone to save JPG from now on? Go to <strong>Settings → Camera → Formats</strong> and choose <strong>Most Compatible</strong>.</p>
      <h2>Is it safe for private photos?</h2>
      <p>Yes. The tool runs inside your web browser, so your photos are processed on your own device and are never uploaded to a server. That makes it safe for contracts, ID documents, bank statements and anything confidential — and it works even on a slow connection once the page has loaded.</p>`,

  'qr-code-generator': `
      <h2>What can a QR code hold?</h2>
      <p>Besides website links, this generator creates QR codes for plain text, <strong>Wi-Fi logins</strong> (guests scan to join without typing the password), email, phone numbers, SMS and contact cards (vCard). Choose colours, add a logo in the middle, and download as PNG for screens or SVG for print.</p>
      <h2>Printing QR codes that scan every time</h2>
      <ul>
        <li>Keep strong contrast — dark code on a light background. Light-on-dark codes fail on some phones.</li>
        <li>Print at least 2 × 2 cm, and bigger the further away people will scan it from (posters: 10 cm+).</li>
        <li>Leave the white border (quiet zone) around the code.</li>
        <li>Test with two different phones before printing hundreds of copies.</li>
      </ul>
      <p>These are static QR codes: they never expire and don't depend on any service staying online.</p>`,

  'password-generator': `
      <h2>What makes a password strong?</h2>
      <p>Length matters more than anything else. Every extra character multiplies the number of guesses an attacker needs. A random 16-character password using letters, numbers and symbols would take longer than the age of the universe to brute-force; an 8-character one can fall in hours.</p>
      <h2>Random characters or a passphrase?</h2>
      <ul>
        <li><strong>Random password</strong> (e.g. <code>t7#Vq2!mLp9@xR4s</code>) — maximum strength per character. Ideal with a password manager.</li>
        <li><strong>Passphrase</strong> — several random words such as <code>Lamp-River-Orbit-Velvet-42</code>. Easier to type and remember, and still very strong at 5+ words.</li>
      </ul>
      <p>Use “avoid look-alikes” if you'll have to type the password by hand. Passwords are generated with your browser's cryptographically secure random number generator and are never sent anywhere — and never reuse the same password on two sites.</p>`,

  'bmi-calculator': `
      <h2>What your BMI means</h2>
      <p>Body Mass Index is your weight in kilograms divided by your height in metres squared. The World Health Organization uses these adult ranges:</p>
      <ul>
        <li><strong>Below 18.5</strong> — underweight</li>
        <li><strong>18.5 – 24.9</strong> — healthy weight</li>
        <li><strong>25 – 29.9</strong> — overweight</li>
        <li><strong>30 and above</strong> — obesity</li>
      </ul>
      <p>For example, 70 kg at 1.75 m gives 70 ÷ 1.75² = <strong>22.9</strong>, a healthy BMI. For people of South Asian origin, the WHO suggests a lower threshold: health risks start to rise from a BMI of about 23.</p>
      <h2>Limits of BMI</h2>
      <p>BMI doesn't distinguish muscle from fat, so athletes can score as “overweight” while being very fit, and it isn't designed for children or pregnancy. Waist size and the <a href="/body-fat-calculator">Body Fat Calculator</a> add useful context. For health decisions, talk to a doctor.</p>`,

  'age-calculator': `
      <h2>Exact age in years, months and days</h2>
      <p>Enter your date of birth to see your exact age, the total number of months, weeks and days you have lived, the weekday you were born on and a countdown to your next birthday. Change the “age at” date to find your age on a past or future date — useful for exam, job and visa forms that ask for age on a specific cut-off date.</p>
      <h2>How age is counted</h2>
      <p>Age is counted in completed years, then completed months, then the remaining days. If you were born on 29 February, most countries treat 28 February (or 1 March) as your birthday in non-leap years; the calculator follows the calendar exactly so you can see both dates.</p>`,

  'percentage-calculator': `
      <h2>Three percentage questions, solved</h2>
      <ul>
        <li><strong>What is X% of Y?</strong> — multiply: 15% of 2,400 = 2,400 × 0.15 = <strong>360</strong>.</li>
        <li><strong>X is what percent of Y?</strong> — divide and ×100: 45 out of 60 = 45 ÷ 60 × 100 = <strong>75%</strong>.</li>
        <li><strong>Percentage change</strong> — (new − old) ÷ old × 100: from 80 to 100 is <strong>+25%</strong>; from 100 to 80 is <strong>−20%</strong>.</li>
      </ul>
      <h2>A common mistake</h2>
      <p>Percentage changes don't cancel out. A price that rises 20% and then falls 20% ends up 4% lower than where it started (100 → 120 → 96), because the second percentage is taken from a bigger number. For discounts and sale prices, the <a href="/discount-calculator">Discount Calculator</a> does the maths for you.</p>`,

  'word-counter': `
      <h2>More than a word count</h2>
      <p>Paste or type your text to see words, characters (with and without spaces), sentences, paragraphs, reading time and speaking time — updated as you type. Nothing you type is uploaded or saved.</p>
      <h2>Useful limits to know</h2>
      <ul>
        <li><strong>X (Twitter) post:</strong> 280 characters</li>
        <li><strong>Instagram caption:</strong> 2,200 characters</li>
        <li><strong>Meta description for Google:</strong> about 150–160 characters</li>
        <li><strong>Common App personal essay:</strong> 650 words</li>
        <li><strong>Reading speed:</strong> about 200–250 words per minute; speaking about 130–150</li>
      </ul>
      <p>Need to fit a strict character limit? The <a href="/character-counter">Character Counter</a> focuses on characters only.</p>`,

  'loan-calculator': `
      <h2>How the EMI is calculated</h2>
      <p>An EMI (equated monthly instalment) is the fixed monthly payment that pays off a loan with interest over its term. The formula is <code>EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)</code>, where P is the loan amount, r the monthly interest rate (annual rate ÷ 12 ÷ 100) and n the number of months.</p>
      <p>Example: 1,000,000 at 12% a year for 5 years (60 months) → r = 0.01 → EMI ≈ <strong>22,244</strong> a month, and about 334,667 paid in interest in total.</p>
      <h2>Reading the schedule</h2>
      <p>In the early months most of each payment goes to interest; later, most goes to the principal. That's why paying extra early in the loan saves the most interest. Compare offers by total interest, not just the monthly amount — a longer term lowers the EMI but usually costs much more overall.</p>`,

  'json-formatter': `
      <h2>Format, validate and minify JSON</h2>
      <p>Paste JSON to pretty-print it with your choice of indentation, check that it is valid, or minify it into one compact line for APIs and config files. When the JSON is invalid, the error message points to the line and position of the problem.</p>
      <h2>Most common JSON errors</h2>
      <ul>
        <li><strong>Trailing commas</strong> — <code>{"a": 1,}</code> is not allowed in JSON.</li>
        <li><strong>Single quotes</strong> — strings and keys must use double quotes: <code>"name"</code>, not <code>'name'</code>.</li>
        <li><strong>Unquoted keys</strong> — <code>{name: "x"}</code> is JavaScript, not JSON.</li>
        <li><strong>Comments</strong> — JSON has no comments; remove <code>//</code> and <code>/* */</code>.</li>
      </ul>
      <p>Your data stays in your browser, so it is safe to format API responses containing tokens or personal data.</p>`,
};

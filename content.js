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

  'pdf-to-png': `
      <h2>PDF to PNG converter — free and high quality</h2>
      <p>This <strong>pdf to png converter free</strong> tool turns every page of a PDF into a separate PNG image. PNG is lossless, so text, lines and diagrams stay perfectly sharp — the best <strong>pdf to png format</strong> for screenshots, slides, charts and anything you will edit later. It works as a <strong>pdf to png converter free online</strong> on Windows, on a Mac and on phones, with no app to install.</p>
      <h2>Choosing the resolution</h2>
      <ul>
        <li><strong>Medium (150 DPI)</strong> — good for screens, websites and presentations.</li>
        <li><strong>High (220 DPI)</strong> — a <strong>pdf to png high quality</strong> result for zooming into small text.</li>
        <li><strong>Print (300 DPI)</strong> — <strong>pdf to png high resolution</strong> output for <strong>pdf to png for printing</strong>.</li>
      </ul>
      <h2>Common uses</h2>
      <ul>
        <li><strong>pdf to png for signature</strong> — export the page with your signature, then crop it with the <a href="/crop-image">Crop Image</a> tool.</li>
        <li><strong>pdf to png for logo</strong> — convert a logo supplied as PDF into an image for a website or social profile.</li>
        <li><strong>pdf to png for mac</strong> and Windows users who don't have Adobe Acrobat.</li>
      </ul>
      <p>Pages render on a white background. Need <strong>pdf to png with transparent background</strong>? Convert first, then remove the white with the <a href="/remove-background">Background Remover</a>. You can convert <strong>pdf to png for free</strong> with no watermark and no sign-up, and download all pages as a ZIP.</p>
      <p>Exporting <strong>pdf to png adobe</strong>-style needs Acrobat Pro; this <strong>pdf to png format converter</strong> is <strong>pdf to png free</strong>, works on Windows and as a <strong>pdf to png mac</strong> option, and runs as <strong>pdf to png for free online</strong> on phones too.</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'rotate-pdf': `
      <h2>Rotate PDF pages and save them that way</h2>
      <p>Scanned a page sideways or upside down? This tool lets you <strong>rotate pdf pages</strong> 90° right, 90° left or 180° and download a new file — so you can <strong>rotate pdf and save it that way</strong> permanently. Viewers such as <strong>rotate pdf in google drive</strong> or <strong>rotate pdf in firefox</strong> only turn the page on your screen; the file itself stays wrong the next time you open it.</p>
      <h2>Rotate by page, or all at once</h2>
      <ul>
        <li><strong>All pages</strong> — fix a whole document scanned in the wrong orientation.</li>
        <li><strong>Odd or even pages</strong> — useful for double-sided scans where every other page came out upside down.</li>
        <li><strong>Custom pages</strong> — <strong>rotate pdf by page</strong> with a list such as <code>2, 5-7</code>.</li>
      </ul>
      <p>You can <strong>rotate pdf by degrees</strong> in 90° steps (90, 180 or 270), which is how PDF page rotation works in every reader. To <strong>rotate pdf online free</strong>, just choose the file, pick the angle and download — there's no need to <strong>rotate pdf in adobe</strong> Acrobat or remember a <strong>rotate pdf shortcut</strong>. You can <strong>rotate pdf for free online</strong> from Chrome on Windows, Mac, Android, and <strong>rotate pdf on iphone</strong> in Safari.</p>
      <p>This is a free way to <strong>rotate pdf online</strong> with no watermark, no file limit and no account — <strong>rotate pdf for free</strong> as often as you need.</p>
      <p>In short: <strong>rotate pdf free</strong> here instead of paying to <strong>rotate pdf adobe</strong>-style — the simplest <strong>rotate for pdf</strong> pages scanned the wrong way.</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'organize-pdf': `
      <h2>Organize PDF pages online — free</h2>
      <p>Drag and drop thumbnails to <strong>organize pdf pages</strong>: move pages into the right order, turn sideways pages with ↻, and remove pages you don't need with ✕. When it looks right, save a new PDF. It's the simplest way to <strong>organize pdf pages online free</strong> without installing software or paying for an editor.</p>
      <h2>What you can do</h2>
      <ul>
        <li><strong>Reorder</strong> — drag pages to <strong>organize pdf by page number</strong> after scanning them out of order.</li>
        <li><strong>Rotate</strong> — fix individual pages that came out sideways.</li>
        <li><strong>Delete</strong> — drop blank or duplicate pages in the same step.</li>
      </ul>
      <h2>Organize PDF files from several sources</h2>
      <p>To <strong>organize pdf files</strong> that are split across documents, combine them first with <a href="/merge-pdf">Merge PDF</a>, then rearrange the pages here. Planning to print a booklet? You don't have to <strong>arrange pdf for booklet printing</strong> by hand — the <a href="/pdf-booklet-maker">PDF Booklet Maker</a> does the imposition for you. And if you need to <strong>arrange pdf for printing</strong> on two sides, organize first, then print.</p>
      <p>You can <strong>organize pdf free</strong> as often as you like and <strong>organize pdf online free</strong> on any device — another way to <strong>organize pdf for free online</strong> without the limits of desktop apps. Once arranged, you can convert the result with <strong>organize pdf to word</strong> (<a href="/pdf-to-word">PDF to Word</a>) or <strong>organize pdf to jpg</strong> (<a href="/pdf-to-jpg">PDF to JPG</a>).</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'delete-pdf-pages': `
      <h2>Delete PDF pages online — free</h2>
      <p>Type the pages you want to remove — for example <code>2, 5-7, 12</code> — and download a new PDF without them. It's the fastest way to <strong>delete pdf pages online free</strong>: no Adobe subscription, no sign-up and no watermark. You can <strong>delete pdf pages for free</strong> on Windows, Linux, Chromebooks and phones alike.</p>
      <h2>On Mac and iPhone</h2>
      <p>On a Mac you can <strong>delete pdf pages in preview</strong> (View → Thumbnails, select a page, press Delete), but this page works the same everywhere, so you can <strong>delete pdf pages on mac</strong>, <strong>delete pdf pages on iphone</strong> in Safari, or on Android in Chrome. No need to <strong>delete pdf pages in adobe</strong> Acrobat Pro, and unlike trying to <strong>delete pdf pages in google drive</strong>, you get a new file you can keep.</p>
      <h2>Tips</h2>
      <ul>
        <li>To <strong>remove pdf pages for free</strong> and also reorder the rest, use <a href="/organize-pdf">Organize PDF</a> instead.</li>
        <li>Want to keep only a few pages? <a href="/split-pdf">Split PDF</a> can extract them directly.</li>
        <li>To <strong>delete pdf pages mac</strong> users and Windows users alike can use this page — it's the same tool on every system.</li>
      </ul>
      <p>Whether you need to <strong>delete pdf pages</strong> from a contract, a scanned book or a bank statement, you can <strong>remove pdf pages for free online</strong> here — another way to <strong>delete pdf pages online</strong> or <strong>delete pdf pages for free online</strong> without uploading anything.</p>
      <p>It's a way to <strong>delete pdf pages free</strong> without the <strong>delete pdf pages adobe</strong> subscription — and to <strong>delete pdf pages iphone</strong> users can do in Safari without an app.</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'add-page-numbers': `
      <h2>Add page numbers to PDF — free</h2>
      <p>Upload a document and <strong>add page numbers to pdf</strong> in seconds. Choose where the numbers go (bottom or top; left, center or right), the format (<code>1</code>, <code>Page 1</code>, <code>1 of 10</code>, <code>Page 1 of 10</code> or <code>- 1 -</code>), the starting number, font size, margin and colour. To <strong>add page numbers to pdf free</strong> with no watermark, that's all it takes.</p>
      <h2>Without Acrobat or Preview</h2>
      <p>Many guides explain how to <strong>add page numbers to pdf in acrobat</strong> or <strong>add page numbers to pdf in adobe</strong> using Bates or header/footer tools — but that needs <strong>Acrobat Pro</strong>. Here you can <strong>add page numbers to pdf for free</strong> in any browser. Mac users can <strong>add page numbers to pdf on mac</strong> without Preview (which can't do it), so it's an easy way to <strong>add page numbers to pdf mac</strong> owners can use right away.</p>
      <h2>Useful options</h2>
      <ul>
        <li><strong>Skip the first page</strong> — leave the cover unnumbered.</li>
        <li><strong>Start at</strong> any number — continue numbering from a previous document.</li>
        <li><strong>add page numbers to pdf for printing</strong> — use a margin of 28–40 pt so printers don't cut them off.</li>
      </ul>
      <p>Need a reference that points to a page, such as <strong>add page numbers to pdf url</strong> or <strong>add page numbers to pdf link</strong>? Most viewers open a page with <code>#page=5</code> added to the link. Roman numerals for front matter aren't supported yet, so to <strong>add page numbers to pdf in roman</strong> numerals, number the main section here and keep the preface separate. This is the quickest way to <strong>add page numbers to pdf in adobe acrobat pro</strong> style — without the subscription.</p>
      <p>On a Mac you can't <strong>add page numbers to pdf in preview</strong> — Preview has no numbering feature — and you'd need to <strong>add page numbers to pdf acrobat pro</strong> (or <strong>add page numbers to pdf in acrobat pro</strong>) or <strong>add page numbers to pdf in bluebeam</strong> on paid software. This page does the same job for free.</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'watermark-pdf': `
      <h2>Watermark PDF free — text watermark on every page</h2>
      <p>Type your watermark text — CONFIDENTIAL, DRAFT, COPY or your company name — and choose the font size, colour, opacity and angle. Place it once in the <strong>center</strong> of each page, or <strong>tiled</strong> across the whole page so it can't simply be cropped out. It's a <strong>watermark pdf free</strong> tool with no sign-up and no watermark of our own.</p>
      <h2>Why watermark a PDF?</h2>
      <ul>
        <li>Mark drafts and confidential reports before sharing them.</li>
        <li>Protect designs, quotes and portfolios sent to clients.</li>
        <li>Stamp copies of ID documents with “For visa application only” — a simple <strong>stamp pdf for free</strong> alternative.</li>
      </ul>
      <h2>Online, without Adobe</h2>
      <p>You don't need to <strong>watermark pdf in adobe</strong> Acrobat: <strong>watermark pdf online free</strong> here in any browser. It works as a <strong>pdf watermark for mac</strong>, Windows and phones, and you can <strong>watermark pdf for free</strong> as many times as you like. Looking for a <strong>watermark for pdf online</strong> that never uploads your file? This one doesn't — another reason to <strong>watermark pdf online</strong> here, or <strong>watermark pdf for free online</strong> for every document you send.</p>
      <p>This tool adds text watermarks. To <strong>watermark pdf with image</strong> such as a logo, add the logo to images with <a href="/watermark-image">Watermark Image</a> before building the PDF. Note that a watermark discourages copying but isn't encryption — and we don't offer a <strong>watermark pdf remover</strong>, because removing other people's watermarks is usually not permitted. It's the simplest <strong>watermark for pdf</strong> files you own.</p>
      <p>It's a light <strong>watermark pdf editor</strong> that saves a ready <strong>watermark pdf download</strong> — no <strong>watermark pdf adobe</strong> subscription. Need the text editable afterwards? Watermark last, after any <strong>watermark pdf to word</strong> conversion and editing.</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'pdf-to-text': `
      <h2>PDF to text converter — free</h2>
      <p>This <strong>pdf to text converter free</strong> tool pulls all the text out of a PDF so you can copy it, search it or save it as a .txt file. Tick <strong>Add page separators</strong> to keep track of which page each part came from. It's a quick <strong>pdf to text extractor</strong> for reports, books, papers and contracts — a free <strong>pdf to text file</strong> conversion in your browser.</p>
      <h2>Copy text for ChatGPT, Claude and other AI</h2>
      <p>AI chat tools work best with clean text. Use this as a <strong>pdf to text for chatgpt</strong>, <strong>pdf to text for claude</strong> or general <strong>pdf to text for ai</strong> and <strong>pdf to text for llm</strong> step: extract, check the text, then paste it into the chat. It's also handy as a <strong>pdf to text for copy</strong> helper when a PDF blocks normal text selection.</p>
      <h2>Good to know</h2>
      <ul>
        <li><strong>Scanned PDFs</strong> are images, so there's no text to extract — use <a href="/image-to-text">Image to Text (OCR)</a> instead.</li>
        <li>Columns and tables are flattened into plain lines — perfect for reading or AI, less so for keeping layout. Need an editable layout? Try <a href="/pdf-to-word">PDF to Word</a>.</li>
        <li>Want it read aloud? A <strong>pdf to text to speech</strong> workflow is simple: extract here, then paste into <a href="/text-to-speech">Text to Speech</a>.</li>
      </ul>
      <p>Developers often reach for <strong>pdf to text python</strong> libraries; for one-off files this <strong>pdf to text online</strong> page is faster. Convert <strong>pdf to text for free</strong>, as a <strong>pdf to text converter free online</strong>, as often as you like.</p>
      <p>Everything happens in your browser: your documents never leave your device, which makes this safe for private and confidential files.</p>`,

  'sign-pdf': `
      <h2>Sign PDF online free — no sign up</h2>
      <p>Open your document, create a signature and click where it should go. You can <strong>draw</strong> it with a mouse or finger, <strong>type</strong> it in a handwriting font, or <strong>upload</strong> a picture of your real signature. Then download the signed file. It's a way to <strong>sign pdf for free no sign up</strong> — no account, no email address and no watermark.</p>
      <h2>Sign on any device</h2>
      <ul>
        <li><strong>sign pdf on iphone</strong> or Android — draw your signature with your finger for the most natural result.</li>
        <li><strong>sign pdf on mac</strong> or Windows — type it, draw it with a trackpad, or upload a scan.</li>
        <li><strong>sign pdf in chrome</strong>, Edge, Firefox or Safari — nothing to install.</li>
      </ul>
      <p>You don't need Acrobat to <strong>sign pdf adobe</strong>-style: this is a simple way to <strong>sign pdf online free</strong>, <strong>sign pdf free</strong> and <strong>sign pdf for free online</strong>. It's ideal to <strong>sign pdf form</strong> pages — rental agreements, offer letters, school forms — and to <strong>sign pdf document</strong> files you need to send back today. To <strong>sign pdf form online free</strong>, open the form, place the signature next to the signature line, and download.</p>
      <h2>Is it legally valid?</h2>
      <p>A drawn or typed signature is an <em>electronic signature</em>, which most countries accept for everyday agreements (for example under the US ESIGN Act and EU eIDAS rules). Some documents — wills, property deeds, certain government forms — require a wet-ink or certified digital signature, so check if in doubt. To <strong>sign pdf online</strong> without sharing the contract with a third-party service, this tool keeps everything on your device — the private way to <strong>sign pdf for free</strong>.</p>`,

  'crop-image': `
      <h2>Crop images online — free and exact</h2>
      <p>Drag the frame over your photo to <strong>crop image online</strong>, or pick a ratio to lock its shape: free, 1:1, 4:3, 3:4, 16:9, 9:16, 3:2 or a ⭕ circle. You can also type the exact width and height in pixels. Download as JPG, PNG or WebP.</p>
      <h2>Crop for every platform</h2>
      <ul>
        <li><strong>crop image for instagram</strong> — 1:1 for square posts, 4:5 (choose 3:4 and adjust) for portrait.</li>
        <li><strong>crop image for profile picture</strong> and <strong>crop image for pfp</strong> — choose ⭕ circle; it saves as a transparent PNG, perfect to <strong>crop image for discord pfp</strong>, WhatsApp and LinkedIn.</li>
        <li><strong>crop image for youtube thumbnail</strong> — 16:9, then resize to 1280 × 720.</li>
        <li><strong>crop image for youtube banner</strong> — 16:9 at 2560 × 1440, keeping key content in the centre.</li>
        <li><strong>crop image for tiktok</strong> and <strong>crop image for phone wallpaper</strong> — 9:16 vertical.</li>
        <li><strong>crop image for passport size free</strong> — use the <a href="/passport-photo-maker">Passport Photo Maker</a>, which crops to official sizes.</li>
      </ul>
      <h2>No Photoshop needed</h2>
      <p>There's no need to <strong>crop image photoshop</strong>-style, <strong>crop image in canva</strong> or <strong>crop image in illustrator</strong> for a quick edit, and it works where built-in tools are fiddly — such as when you <strong>crop image in preview</strong> or <strong>crop image on mac</strong>. Want to <strong>crop image into circle</strong>? Choose ⭕ and you're done. <strong>crop image for free online</strong> with no watermark and no sign-up.</p>
      <p>Everything happens in your browser: your photos never leave your device, which makes this safe for private and confidential files.</p>`,

  'image-converter': `
      <h2>Free image converter — JPG, PNG, WebP and more</h2>
      <p>Convert photos and graphics between the formats people use every day. This <strong>image converter free</strong> tool works as an <strong>image converter to jpg</strong>, an <strong>image converter to png</strong> and to WebP, in bulk, right in your browser. Choose the quality, and pick a background colour for transparent areas when converting to JPG (which can't store transparency).</p>
      <h2>Which format should I use?</h2>
      <ul>
        <li><strong>JPG</strong> — photos; small files that open everywhere. An <strong>image converter to jpeg</strong> is what most upload forms need.</li>
        <li><strong>PNG</strong> — logos, screenshots and anything with transparency or sharp text.</li>
        <li><strong>WebP</strong> — about 30% smaller than JPG for websites.</li>
      </ul>
      <h2>Popular conversions</h2>
      <ul>
        <li><strong>image converter heic to jpg</strong> — use <a href="/heic-to-jpg">HEIC to JPG</a> for iPhone photos.</li>
        <li><strong>image converter to pdf</strong> — use <a href="/jpg-to-pdf">JPG to PDF</a> to combine images into one document.</li>
        <li><strong>image converter to svg</strong> — SVG is a vector format, so photos can't truly become SVG; logos are best recreated as vectors.</li>
      </ul>
      <h2>Size and use-case tips</h2>
      <p>This works as an <strong>image converter for windows</strong>, Mac and phones, so there's no need for an <strong>image converter for pc</strong> download. Combine it with <a href="/resize-image">Resize Image</a> when you need an exact <strong>image converter size</strong>: for example a 3000 × 3000 album cover (the classic <strong>image converter 3000x3000</strong> search), an <strong>image converter for instagram post</strong> (1080 × 1350), an <strong>image converter for whatsapp dp</strong> (square), an <strong>image converter for youtube banner</strong> (2560 × 1440) or an <strong>image converter for cricut</strong> PNG. Convert <strong>image converter for free</strong>, as often as you like.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'png-to-jpg': `
      <h2>PNG to JPG converter — free</h2>
      <p>This <strong>png to jpg converter free</strong> tool changes PNG images into JPG in bulk. JPG files are usually much smaller than PNG for photos, and they're accepted by every website, upload form and email client — which is why <strong>png to jpg</strong> is one of the most common conversions.</p>
      <h2>What happens to transparency?</h2>
      <p>JPG can't store transparent areas, so they're filled with a colour of your choice. White is the default, giving you <strong>png to jpg with white background</strong> — ideal for product photos, logos on documents and ID uploads. Pick any other colour if you prefer.</p>
      <h2>Quality and size</h2>
      <p>Use a quality around 85–92% for photos; lower it to shrink files further. For <strong>png to jpg for web</strong> use, combine with <a href="/resize-image">Resize Image</a> so pictures aren't larger than they're displayed.</p>
      <h2>On any device</h2>
      <p>Convert <strong>png to jpg on iphone</strong> in Safari, <strong>png to jpg on mac</strong>, Windows or Android — it's a <strong>png to jpg converter free online</strong> with nothing to install. It's a quick <strong>png to jpg format converter</strong> (and <strong>png to jpg format converter online</strong>) for a fast <strong>png to jpg format change</strong>, so you can switch <strong>png to jpg format</strong> without editing software. Convert <strong>png to jpg online</strong>, <strong>png to jpg free</strong>, <strong>png to jpg for free</strong> and <strong>png to jpg for free online</strong> as many images as you like — a simple <strong>png to jpg converter</strong> with no watermark.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'jpg-to-png': `
      <h2>JPG to PNG converter — free</h2>
      <p>This <strong>jpg to png converter free</strong> tool turns JPG and JPEG photos into PNG files in bulk. PNG is lossless, so converting stops any further quality loss every time the image is edited and saved — useful for graphics you'll keep working on.</p>
      <h2>Do I get a transparent background?</h2>
      <p>Converting alone doesn't make the background clear — a JPG has no transparency to keep. For <strong>jpg to png transparent background</strong>, convert here and then use the <a href="/remove-background">Background Remover</a>: it's the way to <strong>jpg to png remove background</strong> and get a true <strong>jpg to png transparent</strong> image.</p>
      <h2>When to convert JPG to PNG</h2>
      <ul>
        <li><strong>jpg to png for signature</strong> (and <strong>jpg to png for sign</strong> images) — convert a photographed signature, then remove the paper background; or create one with the <a href="/signature-generator">Signature Generator</a>.</li>
        <li><strong>jpg to png for logo</strong> — PNG keeps edges crisp on websites and documents.</li>
        <li><strong>jpg to png for website</strong> graphics with text, and <strong>jpg to png for printing</strong> where you want no further compression.</li>
      </ul>
      <p>PNG files are larger than JPG for photos, so keep photos as JPG unless you need these benefits. It's a <strong>jpg to png format converter</strong> that changes the <strong>jpg to png extension</strong> the proper way (renaming a file doesn't convert it). Convert <strong>jpg to png free</strong>, <strong>jpg to png for free</strong> — the easy way to <strong>convert jpg to png for free</strong> in your browser, with no <strong>jpg to png format converter free download</strong> needed.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'webp-to-jpg': `
      <h2>WebP to JPG converter — free</h2>
      <p>Saved an image from a website and got a .webp file that won't open or upload? This <strong>webp to jpg converter free</strong> tool turns WebP images into ordinary JPG files that work everywhere — Word, PowerPoint, old photo viewers and upload forms.</p>
      <h2>Convert WebP to JPG in bulk</h2>
      <p>Add as many files as you like — it's <strong>webp to jpg bulk</strong> conversion (also called <strong>webp to jpg in bulk</strong>) with a single click, then download them together as a ZIP. Transparent areas are filled with white (or a colour you choose), because JPG can't store transparency.</p>
      <h2>On Windows and Mac</h2>
      <p>Use it as a <strong>webp to jpg for windows</strong> or <strong>webp to jpg for mac</strong> solution — on a <strong>webp to jpg mac</strong> it saves opening Preview and exporting each file. No <strong>webp to jpg extension for chrome</strong> is needed either: there's no <strong>webp to jpg extension</strong> to install, so it's a simple way to <strong>change webp to jpg for free</strong>.</p>
      <h2>Why websites use WebP</h2>
      <p>WebP files are about 25–35% smaller than JPG at the same quality, so websites serve them to load faster. That's great for the web but not every program reads them, which is why people <strong>convert webp to jpg for free</strong>. Need transparency? Convert to PNG with <a href="/webp-to-png">WebP to PNG</a> instead.</p>
      <p>Convert <strong>webp to jpg</strong>, <strong>webp to jpg free</strong>, <strong>webp to jpg for free</strong> and <strong>webp to jpg online for free</strong> (or <strong>webp to jpg online free</strong>) — an easy <strong>webp to jpg converter</strong> for the <strong>webp to jpg format</strong>.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'webp-to-png': `
      <h2>WebP to PNG converter — free, keeps transparency</h2>
      <p>This <strong>webp to png converter free</strong> tool changes WebP images into PNG files that every editor and app can open. Unlike JPG, PNG supports transparency, so <strong>webp to png with transparency</strong> keeps see-through areas intact — a <strong>webp to png transparent</strong> result, ideal for logos, stickers and cut-out product shots (<strong>webp to png with transparent background</strong>).</p>
      <h2>Convert WebP to PNG in bulk</h2>
      <p>Drop a whole folder of images for <strong>webp to png bulk</strong> conversion — <strong>webp to png in bulk</strong> with one click — and download them together as a ZIP. It runs in your browser on Windows, Linux and <strong>webp to png on mac</strong> without installing anything, and no <strong>webp to png extension</strong> is needed.</p>
      <h2>From a URL or link</h2>
      <p>To convert <strong>webp to png from url</strong> or <strong>webp to png from link</strong>, open the image link in your browser, right-click → Save image as, then drop the saved .webp file here.</p>
      <h2>PNG or JPG?</h2>
      <p>Choose <strong>webp to png</strong> for graphics, screenshots and anything transparent; choose JPG (<a href="/webp-to-jpg">WebP to JPG</a>) for photos when small files matter — the converter covers <strong>webp to png jpg</strong> both ways. It's a straightforward <strong>webp to png format converter</strong> for the <strong>webp to png format</strong>: <strong>webp to png free</strong>, <strong>webp to png for free</strong>, and the quickest way to <strong>convert webp to png for free</strong> — a simple <strong>webp to png converter</strong> with no watermark.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'jpg-to-webp': `
      <h2>JPG to WebP converter — smaller images, same quality</h2>
      <p>WebP images are typically 25–35% smaller than JPG at the same visual quality, so websites load faster and score better in Google's page-speed tests. This <strong>jpg to webp converter free</strong> tool converts your photos in seconds — a handy <strong>jpg to webp compressor</strong> for blogs, online stores and portfolios.</p>
      <h2>Bulk conversion</h2>
      <p>Add dozens of images at once — <strong>jpg to webp bulk</strong> (or <strong>jpg to webp in bulk</strong>) conversion — and download them all as a ZIP. It's a free <strong>jpg to webp bulk converter</strong> that works on Windows, Linux and <strong>jpg to webp on mac</strong>.</p>
      <h2>Choosing quality</h2>
      <p>A quality around 75–85% is usually indistinguishable from the original JPG while saving the most space. Go higher for detailed product photos.</p>
      <h2>Using WebP on your site</h2>
      <ul>
        <li>All modern browsers display WebP; very old ones fall back if you use a <code>&lt;picture&gt;</code> element with a JPG source.</li>
        <li>WordPress, Shopify and most site builders accept WebP uploads directly.</li>
        <li>Prefer a design tool? You don't need to convert <strong>jpg to webp in photoshop</strong> or <strong>jpg to webp in canva</strong> — export as JPG and convert here.</li>
      </ul>
      <p>This works as a <strong>jpg to webp converter online</strong>: change <strong>jpg to webp</strong>, <strong>jpg to webp free</strong>, <strong>jpg to webp for free</strong> — the simple way to <strong>convert jpg to webp for free</strong>. It's a <strong>jpg to webp format converter</strong> for any <strong>image to webp format</strong> need, and the right <strong>jpg to webp format</strong> for a fast site — sometimes searched as <strong>jpg to web format</strong>. A free <strong>jpg to webp converter</strong> with no limits.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'rotate-image': `
      <h2>Rotate and flip images online</h2>
      <p>Turn a photo the right way up or mirror it in one click. Use <strong>⟲ Rotate left</strong> and <strong>⟳ Rotate right</strong> for 90° turns, and <strong>⇋ Flip horizontal</strong> or <strong>⇵ Flip vertical</strong> to mirror the picture. This <strong>rotate flip image</strong> tool previews every change instantly; <strong>Reset</strong> takes you back to the original, and <strong>Download</strong> saves the result.</p>
      <h2>How to flip an image horizontally</h2>
      <p>Wondering <strong>how to flip an image horizontally</strong>? Choose the photo and click ⇋ Flip horizontal — left becomes right. It's the quickest way to <strong>rotate mirror image</strong> selfies (front cameras often save them reversed) or text photographed in a mirror.</p>
      <h2>Common uses</h2>
      <ul>
        <li>Fix sideways phone photos before uploading them to forms that don't read the photo's rotation tag.</li>
        <li>Mirror an image for t-shirt transfers and iron-on prints, which must be printed reversed.</li>
        <li>Create symmetrical designs or reverse the direction a subject faces in a layout.</li>
      </ul>
      <p>This works as a <strong>rotate flip image online</strong> tool and a <strong>rotate mirror image online</strong> tool in any browser — no <strong>flip rotate image extension</strong> to install, and no need to <strong>mirror rotate image powerpoint</strong>-style inside slides.</p>
      <h2>Rotate image online on any device</h2>
      <p>This <strong>rotate image online</strong> tool works wherever you are: <strong>rotate image iphone</strong> photos in Safari, fix pictures on Android, or on a PC — no need to <strong>rotate image in photoshop</strong>, <strong>rotate image in canva</strong> or <strong>rotate image in word</strong>. Likewise you can <strong>flip image online</strong> instead of trying to <strong>flip image in word</strong>, <strong>flip image in powerpoint</strong> or <strong>flip image in google docs</strong>, where flipped pictures often can't be saved as a separate file.</p>
      <ul><li><strong>flip image horizontally</strong> — creates a <strong>mirror image</strong>, left to right.</li><li><strong>flip image upside down</strong> — use ⇵ Flip vertical (or rotate 180°).</li><li><strong>flip image iphone</strong> selfies that came out reversed.</li></ul>
      <p>To <strong>rotate image</strong> or <strong>flip image</strong> files and keep the result, just download — the change is saved into the picture itself.</p>
      <p>Everything happens in your browser: your photos never leave your device, which makes this safe for private and confidential files.</p>`,

  'image-to-base64': `
      <h2>Image to Base64 converter — and back</h2>
      <p>Base64 turns an image file into plain text, so it can be embedded directly in HTML, CSS, JSON or email without a separate file. This <strong>image to base64 converter</strong> works both ways: <strong>Image → Base64</strong> to encode, and <strong>Base64 → Image</strong> to decode a string back into a picture (an <strong>image to base64 decode</strong> in reverse).</p>
      <h2>Outputs you can copy</h2>
      <ul>
        <li><strong>image to base64 string</strong> — the raw encoded text.</li>
        <li><strong>image to base64 data url</strong> (also called an <strong>image to base64 url</strong>) — starts with <code>data:image/png;base64,</code> and works anywhere a URL does.</li>
        <li><strong>image to base64 for html</strong> — a ready <code>&lt;img src="…"&gt;</code> tag; <strong>convert image to base64 for html</strong> pages that must be a single file.</li>
        <li>CSS <code>background-image</code> snippets.</li>
      </ul>
      <h2>When to use Base64 images</h2>
      <p>Good for small icons, <strong>image to base64 for email</strong> signatures and templates, <strong>image to base64 for markdown</strong> documents, and offline single-file pages. Avoid it for large photos: Base64 is about 33% bigger than the original file and can't be cached separately by browsers.</p>
      <p>Developers often write <strong>image to base64 python</strong> scripts; for quick jobs this <strong>image to base64 online</strong> page is faster — an <strong>image to base64 encoder</strong> that lets you <strong>image to base64 encode</strong> any PNG, JPG, GIF, WebP or SVG. It's an <strong>image to base64 encode online</strong> tool and an <strong>image to base64 converter online</strong> in one: <strong>image to base64</strong> in your browser — the easiest way to <strong>convert image to base64 format</strong> or pick the <strong>image to base64 format</strong> you need.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'watermark-image': `
      <h2>Add watermark to image — free</h2>
      <p>Protect your photos before you post them. This tool lets you <strong>add watermark to image</strong> files with your own text — your name, @handle, website or “©” — and set the colour, size, opacity, angle and an optional shadow. Place it in a corner, the centre, or <strong>tiled</strong> across the whole photo so it can't be cropped out. It's a way to <strong>add watermark to image free</strong> with no watermark of ours added on top.</p>
      <h2>Logo watermark</h2>
      <p>Switch to <strong>Logo watermark</strong> to <strong>add logo to image for free</strong> — upload a transparent PNG of your logo and place it the same way. Ideal for photographers, online sellers and real-estate listings.</p>
      <h2>Watermark many photos</h2>
      <p>To <strong>add watermark to image bulk</strong>, add all your photos together and the same watermark is applied to each, then download them as a ZIP.</p>
      <h2>No editing software needed</h2>
      <p>There's no need to <strong>add watermark to image in photoshop</strong>, <strong>add watermark to image in lightroom</strong>, <strong>add watermark to image in canva</strong> (or <strong>add watermark to image canva</strong> Pro), or struggle to <strong>add watermark to image in paint</strong>, <strong>add watermark to image in word</strong> or <strong>add watermark to image in powerpoint</strong>. It works in any browser — including on Android and Samsung phones (<strong>add watermark to image samsung</strong>) and to <strong>add watermark to image on iphone</strong>.</p>
      <p>Use it to <strong>add watermark to image online</strong>, <strong>add watermark to image online free</strong>, <strong>add watermark to image for free</strong> or <strong>add watermark to photo for free</strong>.</p>
      <p>Everything happens in your browser: your photos never leave your device, which makes this safe for private and confidential files.</p>`,

  'photo-filters': `
      <h2>Photo editor with filters — free and online</h2>
      <p>Give your pictures a new look in seconds. This <strong>photo editor with filters free</strong> tool lets you adjust <strong>brightness</strong>, <strong>contrast</strong> and <strong>saturation</strong>, add <strong>blur</strong>, rotate the hue, and apply classic effects — <strong>grayscale</strong> (black &amp; white), <strong>sepia</strong> (vintage) and <strong>invert</strong>. Changes preview instantly, and <strong>Original</strong> or <strong>Reset</strong> takes you back anytime.</p>
      <h2>Quick recipes</h2>
      <ul>
        <li><strong>Vintage</strong> — sepia, slightly lower saturation, a touch more contrast.</li>
        <li><strong>Moody black &amp; white</strong> — grayscale plus extra contrast.</li>
        <li><strong>Bright and airy</strong> — raise brightness a little, lower contrast.</li>
        <li><strong>Dreamy background</strong> — a small amount of blur.</li>
      </ul>
      <h2>No app needed</h2>
      <p>Unlike a <strong>photo editor filters app</strong>, there's nothing to download — it's a <strong>photo editor filters online</strong> page that works on phones and computers, a simple <strong>image editor filters online</strong> option for quick edits without a <strong>photo editor filter photoshop</strong> subscription. It isn't a face-tracking camera app, so if you want a <strong>photo editor with filters like snapchat</strong>, use those apps; for clean, classic adjustments this is quicker.</p>
      <p>Use it as an <strong>image editor with filters</strong>, a <strong>photo editor for filters</strong> and a <strong>photo editor for effects</strong> — a <strong>photo editor with effects free</strong> of watermarks. It's a <strong>photo editor with filters online free</strong> that works as a <strong>photo editor with filters online</strong> on any device — <strong>photo editor filters free</strong>, a free <strong>image editor filters</strong> tool and <strong>photo editor filters online free</strong> — perhaps the <strong>best photo editor for filters</strong> when you just need a fast fix.</p>
      <p>Everything happens in your browser: your photos never leave your device, which makes this safe for private and confidential files.</p>`,

  'meme-generator': `
      <h2>Free meme generator — no watermark</h2>
      <p>Make a meme in seconds: upload any picture, type your <strong>top text</strong> and <strong>bottom text</strong>, and download. You can change the font size, text colour and outline colour, and switch UPPERCASE on or off for the classic white-text-with-black-outline meme style. This <strong>meme generator free</strong> tool adds no watermark.</p>
      <h2>Using popular templates</h2>
      <p>Find the template you want — the Drake format, Bernie Sanders, Forrest Gump and so on — save the image, and add your captions here. Searching for a <strong>meme generator drake</strong>, <strong>meme generator bernie sanders</strong> or <strong>meme generator forrest gump</strong> layout? Any image works with these <strong>meme generator templates</strong>, including your own photos — the <strong>meme generator for frodo</strong> one-liners and classics like “<strong>meme generator for ants</strong>” included.</p>
      <h2>Tips for funny memes</h2>
      <ul>
        <li>Keep the text short — one line top, one line bottom reads best on phones.</li>
        <li>Use a thick outline so the text is readable on any background.</li>
        <li>Square or 4:5 images look best on Instagram; crop first with <a href="/crop-image">Crop Image</a>.</li>
      </ul>
      <p>This is an image <strong>meme generator text</strong> tool — not a <strong>meme generator for videos</strong> or a <strong>meme generator gif</strong> maker (turn video clips into GIFs with <a href="/video-to-gif">Video to GIF</a> first). It works in your browser, so there's no <strong>meme generator app</strong> to install — a handy <strong>meme generator for iphone</strong>, Android and PC. Make memes with this <strong>meme generator</strong> as often as you like — a <strong>meme generator for free</strong>, with no <strong>meme generator ai</strong> guesswork, just your words.</p>
      <p>Everything happens in your browser: your pictures never leave your device, which makes this safe for private and confidential files.</p>`,

  'favicon-generator': `
      <h2>Favicon generator — from text, emoji or image</h2>
      <p>A favicon is the small icon shown in browser tabs, bookmarks and Google search results. This <strong>favicon generator free</strong> tool creates one two ways:</p>
      <ul>
        <li><strong>From text / emoji</strong> — a <strong>favicon generator from text</strong>: type a letter or emoji, choose colours, a square, rounded or circle shape, and a font.</li>
        <li><strong>From image</strong> — a <strong>favicon generator from image</strong> (or <strong>favicon generator from png</strong>, JPG or <strong>favicon generator from svg</strong>): upload your logo and get every size.</li>
      </ul>
      <p>You get favicon.ico plus PNG sizes (16×16, 32×32, 180×180 for Apple touch icons and 192/512 for Android) — a <strong>favicon generator for all devices</strong>, including PWA icons (<strong>favicon generator for pwa</strong>).</p>
      <h2>Adding it to your site</h2>
      <ul>
        <li><strong>favicon generator for wordpress</strong> — Appearance → Customize → Site Identity → Site Icon (upload the 512 PNG).</li>
        <li><strong>favicon generator for shopify</strong> — Online Store → Themes → Customize → Theme settings → Favicon.</li>
        <li><strong>favicon generator for blogger</strong> — Layout → Favicon → Edit.</li>
        <li><strong>favicon generator for nextjs</strong> and <strong>favicon generator for react</strong> apps — put the files in <code>public/</code> (or <code>app/</code> for Next.js) and add the <code>&lt;link&gt;</code> tags.</li>
      </ul>
      <p>A <strong>favicon generator for website</strong> owners who want a quick, sharp icon: this <strong>favicon generator online</strong> is a <strong>favicon generator free online</strong> with no account — a <strong>favicon generator for free</strong>.</p>`,

  'image-color-picker': `
      <h2>Image color picker — get HEX, RGB and HSL codes</h2>
      <p>Upload a photo, screenshot or logo and click anywhere on it to pick the exact colour. This <strong>image color picker online</strong> shows the code in <strong>HEX</strong>, <strong>RGB</strong> and <strong>HSL</strong>, keeps a list of the colours you've picked, and automatically shows the <strong>main colors in this image</strong> as a ready palette.</p>
      <h2>Who uses it</h2>
      <ul>
        <li><strong>Designers</strong> matching a brand colour from a logo or photo.</li>
        <li><strong>Developers</strong> copying an <strong>image color picker hex code</strong> straight into CSS.</li>
        <li><strong>Crafters and painters</strong> — a <strong>color picker from image for paint</strong> matching at the hardware store.</li>
      </ul>
      <h2>Pick colours from a website or screen</h2>
      <p>To use it as an <strong>image color picker from website</strong> or <strong>image color picker from screen</strong>, take a screenshot (Windows: Win + Shift + S; Mac: Cmd + Shift + 4), then paste or upload it here. For an <strong>image color picker from url</strong>, save the image first. This <strong>image color picker from image</strong> workflow also works as an <strong>image colour picker from file</strong> — any PNG, JPG or WebP.</p>
      <p>It's a free <strong>image color picker tool</strong> — an <strong>image color picker with hex code</strong> (also an <strong>image color picker hex</strong> and <strong>image color picker rgb</strong> tool) and a <strong>hex color picker for image</strong> files, with no <strong>image color picker app</strong> or Adobe subscription needed. Use this <strong>image color picker free</strong> any time — a <strong>color picker for image online</strong> that also works as a plain <strong>image color picker</strong>. Need complementary colours? Try the <a href="/color-palette-generator">Color Palette Generator</a>.</p>
      <p>Everything happens in your browser: your images never leave your device, which makes this safe for private and confidential files.</p>`,

  'svg-to-png': `
      <h2>SVG to PNG converter — any size, sharp edges</h2>
      <p>SVG files are vectors: they stay sharp at any size, but many apps, social networks and document editors can't open them. This <strong>svg to png converter free</strong> tool renders your SVG into a crisp PNG at the width you choose — so you get <strong>svg to png high resolution</strong> output for print, or small icons for apps.</p>
      <h2>Transparent or white background</h2>
      <p>By default you get <strong>svg to png with transparent background</strong> — a true <strong>svg to png transparent</strong> image for logos and icons. Tick “Fill background” for <strong>svg to png with white background</strong> (or any colour) when the PNG will go into a document or slide.</p>
      <h2>Choosing the size</h2>
      <p>Set the output width and the height follows the SVG's proportions — this is <strong>svg to png with size</strong> control. For example: 512 px for app icons, 1200 px for web graphics, 3000 px+ for printing.</p>
      <h2>From a URL</h2>
      <p>To convert <strong>svg to png from url</strong> or <strong>svg to png from link</strong>, open the SVG link, save it (Ctrl/Cmd + S), and drop the file here.</p>
      <p>No need for Inkscape or Illustrator — convert <strong>svg to png on mac</strong> (or with a <strong>svg to png mac</strong> shortcut), Windows or phones. It's <strong>svg to png online</strong>, <strong>svg to png free</strong> and <strong>svg to png for free</strong>: the easiest way to <strong>convert svg to png for free</strong> into the <strong>svg to png format</strong> you need — a simple <strong>svg to png converter</strong> (and <strong>convert svg to png format</strong> tool) for <strong>svg to png</strong> jobs of any size.</p>
      <p>Everything happens in your browser: your files never leave your device, which makes this safe for private and confidential files.</p>`,

  'passport-photo-maker': `
      <h2>Passport photo maker — free and online</h2>
      <p>Take a photo against a plain wall, upload it, and this <strong>passport photo maker free</strong> tool crops it to the official size for your country, lets you set the background colour (white is standard), and prepares a print sheet. It works as a <strong>passport photo maker online free</strong> — no app download and no studio fee.</p>
      <h2>Sizes included</h2>
      <ul>
        <li><strong>35 × 45 mm</strong> — UK, EU, Pakistan, India, Australia and most countries.</li>
        <li><strong>2 × 2 in (51 × 51 mm)</strong> — USA and India visa.</li>
        <li><strong>50 × 70 mm</strong> Canada · <strong>33 × 48 mm</strong> China · <strong>40 × 60 mm</strong> Saudi Arabia · <strong>35 × 50 mm</strong> Malaysia · <strong>40 × 50 mm</strong> UAE visa.</li>
      </ul>
      <p>Choose this <strong>passport photo maker for visa</strong> applications and ID cards too.</p>
      <h2>Print at home or a shop</h2>
      <p>Download a <strong>passport photo maker 4x6</strong> sheet (10 × 15 cm) to print at any photo kiosk for very little, or an A4 sheet for home printers — making it a true <strong>passport photo maker for print</strong>. Print at 100% scale so the size stays exact.</p>
      <h2>Tips for an accepted photo</h2>
      <ul><li>Even lighting, no shadows on face or background.</li><li>Look straight at the camera with a neutral expression; no glasses glare.</li><li>Need a white background? Use the <a href="/remove-background">Background Remover</a> first.</li></ul>
      <p>No <strong>passport photo maker software</strong> or <strong>passport photo maker for pc free download</strong> needed — it runs in the browser on Windows (<strong>passport photo maker for windows</strong>, including <strong>passport photo maker for windows 10</strong> and <strong>passport photo maker for windows 7</strong>), Mac and phones, so you don't need a <strong>passport photo maker for pc</strong> install or a <strong>passport photo maker app</strong>. It's a <strong>passport photo maker for free online</strong> — a <strong>passport photo maker online</strong> and <strong>passport photo maker for free</strong>.</p>
      <p>Everything happens in your browser: your photos never leave your device, which makes this safe for private and confidential files.</p>`,

  'collage-maker': `
      <h2>Photo collage maker — free, no watermark</h2>
      <p>Add your photos, choose a layout, and download a finished collage. This <strong>photo collage maker free</strong> tool lets you set the number of columns, spacing between photos, rounded corners and background colour. It's a <strong>photo collage maker online free</strong> with no sign-up and no watermark.</p>
      <h2>Sizes for every use</h2>
      <ul>
        <li><strong>Square 1080 × 1080</strong> — a <strong>photo collage maker for instagram</strong> feed (a <strong>photo collage maker for instagram post</strong>).</li>
        <li><strong>Portrait 1080 × 1350</strong> — taller Instagram and Facebook posts.</li>
        <li><strong>Story 1080 × 1920</strong> — Instagram and WhatsApp stories; also a <strong>photo collage maker for phone wallpaper</strong>.</li>
        <li><strong>Landscape 1920 × 1080</strong> — a <strong>photo collage maker for desktop background</strong>, for laptops (<strong>photo collage maker for laptop wallpaper</strong>), for <strong>photo collage maker for computer backgrounds</strong> and as a <strong>photo collage maker for mac wallpaper</strong>.</li>
        <li><strong>Large square 2400 × 2400</strong> — a <strong>photo collage maker for printing</strong> photo books and frames.</li>
      </ul>
      <h2>Tips for a great collage</h2>
      <ul>
        <li>Use an even number of photos for tidy rows, or 3 / 6 / 9 for square grids.</li>
        <li>A little spacing and rounded corners make collages look modern.</li>
        <li>Pick a background colour from one of your photos for a matching look.</li>
      </ul>
      <p>It's a <strong>photo collage maker online</strong> that works on Windows, Mac and as a <strong>photo collage maker iphone</strong> alternative — no <strong>photo collage maker app</strong> or <strong>photo collage maker free download</strong> needed, though it's as easy as a <strong>photo collage maker app free</strong>. Use this <strong>photo collage maker</strong> — a <strong>photo collage maker for free</strong> — whenever you like.</p>
      <p>Everything happens in your browser: your photos never leave your device, which makes this safe for private and confidential files.</p>`,

  'video-converter': `
      <h2>Free video converter — MP4, WebM, MOV, MKV and AVI</h2>
      <p>This <strong>video converter free</strong> tool changes a video into the format you need: <strong>MP4</strong>, WebM, MOV, MKV or AVI. As a <strong>video converter to mp4</strong> it fixes the most common problem — a file that won't play on a phone, TV or social app. Choose <strong>High</strong>, <strong>Balanced</strong> or <strong>Small file</strong> quality, or tick <strong>Fast mode</strong> to keep the original codecs when possible (much quicker, no quality loss).</p>
      <h2>Which format should I choose?</h2>
      <ul>
        <li><strong>MP4</strong> — plays everywhere; best for WhatsApp, YouTube and Instagram. Use it as a <strong>video converter for youtube</strong>, a <strong>video converter for instagram</strong> and a <strong>video converter for discord</strong> upload.</li>
        <li><strong>WebM</strong> — smaller files for websites.</li>
        <li><strong>MOV</strong> — Apple editing apps; <strong>MKV</strong> — keeps multiple audio and subtitle tracks.</li>
      </ul>
      <h2>Works on every device</h2>
      <p>It runs in the browser, so it's a <strong>video converter for windows</strong>, Mac and Linux, a <strong>video converter for chromebook</strong>, a <strong>video converter for android</strong> and a <strong>video converter for iphone</strong> — no <strong>video converter app</strong>, no <strong>video converter free download</strong> and no <strong>video converter for pc free download</strong> needed, even though it works just like a <strong>video converter for pc</strong>.</p>
      <h2>Audio and GIFs</h2>
      <p>Need sound only? Use <a href="/video-to-mp3">Video to MP3</a> — the <strong>video converter to mp3</strong> (or <strong>video converter mp4 to mp3</strong>) job. Want a short loop? Try <a href="/video-to-gif">Video to GIF</a>, the <strong>video converter to gif</strong>. This <strong>video converter online</strong> handles everyday files of a few hundred MB on a modern computer.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-compressor': `
      <h2>Video compressor — make videos smaller without losing quality</h2>
      <p>Compress by <strong>level</strong> (Light, Recommended, Strong, Maximum) or by <strong>target size</strong>: type the size you need and the compressor works out the right bitrate. You can also lower the resolution (1080p, 720p, 480p, 360p) and audio quality, or remove audio entirely. It's a <strong>video compressor free</strong> tool with no watermark — a <strong>video compressor for free</strong>.</p>
      <h2>Video compressor for Discord</h2>
      <p>Discord limits uploads on free accounts (10 MB at the time of writing). As a <strong>video compressor for discord</strong>, set the target size to about 9.5 MB to stay safely under it — the <strong>video compressor for discord 10mb</strong> and <strong>video compressor to 10mb</strong> setting. Nitro users can go bigger, up to the <strong>video compressor for discord 500mb</strong> limit. A <strong>video compressor for discord free</strong> of sign-ups, as people often recommend on Reddit (<strong>video compressor for discord reddit</strong>, <strong>video compressor reddit</strong>).</p>
      <h2>Other common targets</h2>
      <ul>
        <li><strong>video compressor for email</strong> — Gmail attachments max out at 25 MB.</li>
        <li><strong>video compressor for instagram</strong> and WhatsApp — 720p at the Recommended level looks sharp on phones.</li>
      </ul>
      <h2>Without losing quality</h2>
      <p>For a <strong>video compressor without losing quality</strong> look, use <strong>Light</strong> or <strong>Recommended</strong> and keep the original resolution. Phone videos are recorded at very high bitrates, so they often shrink 50–70% with no visible difference.</p>
      <p>No <strong>video compressor app</strong> or <strong>video compressor download</strong> needed: it's a <strong>video compressor online</strong> and <strong>video compressor online free</strong> page that works as a <strong>video compressor for pc</strong> and a <strong>video compressor for iphone</strong>.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-to-mp3': `
      <h2>Video to MP3 converter — free</h2>
      <p>Extract the sound from any video and save it as an audio file. This <strong>video to mp3 converter free</strong> tool supports <strong>MP3</strong>, M4A, WAV and OGG, at quality from 96 kbps (small) to 320 kbps (best). It's a quick <strong>video to mp3 audio</strong> extractor for lectures, podcasts recorded on video, interviews and music clips you own.</p>
      <h2>Quality guide</h2>
      <ul>
        <li><strong>320 kbps</strong> — best for music.</li>
        <li><strong>192 kbps</strong> — great quality, smaller <strong>video to mp3 file</strong>.</li>
        <li><strong>96–128 kbps</strong> — speech, lectures and podcasts.</li>
      </ul>
      <h2>Make a ringtone</h2>
      <p>For <strong>video to mp3 for ringtone</strong> use, extract the audio here, then cut the best 30 seconds with the <a href="/mp3-cutter">MP3 Cutter</a>.</p>
      <h2>On phone or computer</h2>
      <p>Works as <strong>video to mp3 android</strong> (<strong>video to mp3 for android</strong>), <strong>video to mp3 iphone</strong> (<strong>video to mp3 for iphone</strong>) and <strong>video to mp3 for pc</strong> — no app and no <strong>video to mp3 download</strong> of software. It's a <strong>video to mp3 converter online</strong> and a <strong>video to mp3 format converter</strong> for the universal <strong>video to mp3 format</strong>: <strong>video to mp3 free</strong>, <strong>video to mp3 for free</strong> and <strong>video to mp3 for free online</strong> — a simple <strong>video to mp3 converter</strong>.</p>
      <p>Please only convert videos you own or have permission to use. This tool converts files on your device; it doesn't download from YouTube or other sites.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'mp4-to-mp3': `
      <h2>MP4 to MP3 converter — free</h2>
      <p>This <strong>mp4 to mp3 converter free</strong> tool pulls the audio track out of an MP4 video and saves it as MP3 (or M4A, WAV, OGG). Pick 320 kbps for music or 128 kbps for speech. It's the easiest <strong>mp4 to mp3 file converter</strong> for recordings, lectures and voice notes saved as video.</p>
      <h2>Large files</h2>
      <p>Because conversion happens on your own computer, there's no upload limit: <strong>mp4 to mp3 for large files</strong> works as long as your device has enough memory — files of several hundred MB are fine on a modern laptop.</p>
      <h2>Mac, PC and iPhone</h2>
      <p>It works as <strong>mp4 to mp3 for mac</strong>, <strong>mp4 to mp3 for pc</strong> and <strong>mp4 to mp3 for iphone</strong> in the browser — no Format Factory install (<strong>mp4 to mp3 format factory</strong>) and no <strong>mp4 to mp3 converter download for android</strong>. It's an <strong>mp4 to mp3 converter online</strong>, an <strong>mp4 to mp3 converter online free</strong> and an <strong>mp4 to mp3 format converter</strong> for the <strong>mp4 to mp3 format</strong>.</p>
      <h2>Spotify and music apps</h2>
      <p>For <strong>mp4 to mp3 for spotify</strong>, convert your own audio here and add it to Spotify as a local file (Settings → Local files). Only convert content you own or have the right to use.</p>
      <p><strong>mp4 to mp3 free</strong>, <strong>mp4 to mp3 for free</strong> and <strong>mp4 to mp3 for free online</strong> — a no-signup <strong>mp4 to mp3 converter</strong> that often comes recommended on Reddit (<strong>mp4 to mp3 reddit</strong>) because it doesn't upload your files. No <strong>mp4 to mp3 download</strong> of software needed.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-trimmer': `
      <h2>Video trimmer online — cut the start and end</h2>
      <p>Set the <strong>start</strong> and <strong>end</strong> times and download only the part you want. This <strong>video trimmer online free</strong> tool has two modes: <strong>Fast</strong> (no re-encoding — instant and no quality loss, cutting at the nearest keyframe) and <strong>Frame-accurate</strong> (re-encodes for an exact cut).</p>
      <h2>Popular uses</h2>
      <ul>
        <li><strong>video trimmer for whatsapp status</strong> — trim to 60 seconds or less.</li>
        <li><strong>video trimmer for discord</strong> — keep the clip short to fit the upload limit, then shrink it with the <a href="/video-compressor">Video Compressor</a>.</li>
        <li>Remove the boring start of a screen recording or lecture.</li>
      </ul>
      <h2>Large files, any computer</h2>
      <p>As a <strong>video trimmer for large files</strong> (a <strong>video trimmer for large files free</strong> of upload limits), Fast mode handles big recordings quickly because it just copies the selected part. It works as a <strong>video trimmer for windows</strong> (or <strong>video trimmer windows</strong>), a <strong>video trimmer for pc</strong>, a <strong>video trimmer for linux</strong> (<strong>video trimmer linux</strong>) and a <strong>video trimmer for android</strong> — no <strong>video trimmer app</strong> or <strong>video trimmer download</strong>. It's a <strong>video trimmer for pc free</strong> of installs: <strong>video trimmer free</strong>, <strong>video trimmer for free</strong>, <strong>video trimmer online</strong>.</p>
      <p>Need a <strong>video trimmer and cropper</strong> to change the frame shape too? Trim here, then use the <a href="/video-converter">Video Converter</a> or an editor for cropping.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-to-gif': `
      <h2>Video to GIF converter — high quality</h2>
      <p>Choose a video, set the start time and length, then pick the width (320–800 px) and frame rate (8–20 fps). This <strong>video to gif converter free</strong> tool uses a smart colour palette so GIFs look sharp — a <strong>video to gif high quality</strong> result without the grainy look of quick converters.</p>
      <h2>Size tips</h2>
      <ul>
        <li>GIFs get big fast. Keep clips to 2–6 seconds.</li>
        <li><strong>480 px at 12–15 fps</strong> is the sweet spot for chats and websites.</li>
        <li>Even a <strong>video to gif 4k</strong> source works — the GIF is scaled to the width you choose.</li>
      </ul>
      <h2>For every platform</h2>
      <ul>
        <li><strong>video to gif for discord</strong> (and <strong>video to gif discord</strong> reactions) — 320–480 px; a <strong>video to gif for discord banner</strong> needs Nitro and a 600 × 240 crop; a <strong>video to gif for discord sticker</strong> must be under 512 KB.</li>
        <li><strong>video to gif for reddit</strong>, <strong>video to gif for whatsapp</strong>, <strong>video to gif for instagram</strong> and <strong>video to gif for tiktok</strong> profile loops.</li>
      </ul>
      <p>It's a <strong>video to gif maker</strong> and <strong>video to gif format converter</strong> in your browser — <strong>video to gif iphone</strong> users can use it in Safari. Convert <strong>video to gif online</strong>, <strong>video to gif free</strong> and <strong>video to gif for free</strong> into the classic <strong>video to gif format</strong> — a simple <strong>video to gif converter</strong>.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'audio-converter': `
      <h2>Free audio converter — MP3, WAV, M4A, AAC, OGG, FLAC, OPUS</h2>
      <p>This <strong>audio converter free</strong> tool converts music, voice notes and recordings between all common formats and lets you choose the bitrate (64–320 kbps). Use it as an <strong>audio converter to mp3</strong> for maximum compatibility, an <strong>audio converter to wav</strong> for editing, or to FLAC for lossless archiving.</p>
      <h2>Which format?</h2>
      <ul>
        <li><strong>MP3</strong> — plays everywhere. <strong>M4A / AAC</strong> — iPhone and Apple Music.</li>
        <li><strong>WAV / FLAC</strong> — lossless; best for editing and archiving.</li>
        <li><strong>OGG / OPUS</strong> — great quality at small sizes; OPUS is what WhatsApp voice notes use.</li>
      </ul>
      <h2>WhatsApp voice notes and video</h2>
      <p>As an <strong>audio converter for whatsapp</strong>, turn .opus voice notes into MP3 to play them anywhere. As an <strong>audio converter from video</strong> (the <strong>audio converter - mp4 to mp3</strong> case), use <a href="/video-to-mp3">Video to MP3</a>.</p>
      <h2>No app needed</h2>
      <p>It runs in your browser: an <strong>audio converter for windows</strong>, an <strong>audio converter for mac</strong>, an <strong>audio converter for android</strong> and an <strong>audio converter for iphone</strong> — no <strong>audio converter app</strong>, no <strong>audio converter for pc free download</strong> or <strong>audio converter for pc download</strong>, yet it works as an <strong>audio converter for pc</strong>. For <strong>audio converter for spotify</strong> uploads, convert your own tracks to MP3 and add them as local files. This is an <strong>audio converter online</strong> — an <strong>audio converter for free</strong>, with no <strong>audio converter ai</strong> changes to your sound.</p>
      <p>Your audio files are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'mp3-cutter': `
      <h2>MP3 cutter and ringtone maker</h2>
      <p>Pick the start and end of the part you want, add an optional 2-second <strong>fade in</strong> or <strong>fade out</strong>, and save as MP3, M4A or WAV. It's an <strong>mp3 cutter and ringtone maker</strong> in one — the quickest way to make an <strong>mp3 cutter for ringtone</strong> clip from your favourite song.</p>
      <h2>Ringtones for iPhone and Android</h2>
      <ul>
        <li><strong>Android</strong> — save as MP3 and pick it in Settings → Sound → Ringtone. A handy <strong>mp3 cutter for android</strong>.</li>
        <li><strong>iPhone</strong> — save as M4A, rename it to <code>.m4r</code>, and add it with Finder or iTunes (or GarageBand on the phone). This <strong>mp3 cutter for iphone</strong> keeps ringtones under 30 seconds as iPhones require.</li>
      </ul>
      <h2>On any computer</h2>
      <p>It works as an <strong>mp3 cutter for windows</strong> (including <strong>mp3 cutter for windows 10</strong> and <strong>mp3 cutter for windows 11</strong>) and as an <strong>mp3 cutter for pc</strong> — no <strong>mp3 cutter download</strong>, <strong>mp3 cutter download for pc</strong>, <strong>mp3 cutter for pc free download</strong> or <strong>mp3 cutter app</strong> needed.</p>
      <h2>Joining songs</h2>
      <p>This is a cutter; an <strong>mp3 cutter and joiner</strong> that merges clips isn't available here yet. To make a mashup (<strong>mp3 cutter and joiner online</strong>), cut each part here first.</p>
      <p>Use it as an <strong>mp3 cutter online</strong> — <strong>mp3 cutter online free</strong>, <strong>mp3 cutter free</strong>, an <strong>mp3 cutter for free</strong> and <strong>mp3 cutter for free online</strong>. It's the simplest <strong>mp3 cutter</strong> around.</p>
      <p>Your audio files are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'mute-video': `
      <h2>Mute video online — remove the sound</h2>
      <p>Choose a video and click <strong>Remove audio</strong>: you get the same video with its audio track removed entirely. Because the picture isn't re-encoded, it's fast and there's no quality loss. You can <strong>mute video online free</strong>, with no watermark and no sign-up — <strong>mute video for free</strong>.</p>
      <h2>Why remove the audio?</h2>
      <ul>
        <li><strong>mute video for instagram</strong> (and every <strong>mute video for instagram post</strong>) — so you can add licensed music in the app.</li>
        <li>Remove background noise, private conversations or copyrighted music before sharing.</li>
        <li>Make a <strong>silent video for kids</strong> to watch quietly, or a clean clip for presentations.</li>
      </ul>
      <h2>Mute video on iPhone, Android and PC</h2>
      <p>It works in any browser — to <strong>mute video on iphone</strong>, on Android or on a computer. Social apps can <strong>mute videos on tiktok</strong> or <strong>mute videos on facebook</strong> only while you watch; this tool removes the <strong>mute video audio</strong> from the file itself, so it stays silent everywhere you upload it. It's also handy before you <strong>mute video in figma</strong> prototypes.</p>
      <p>It's a <strong>mute video online</strong> tool — a <strong>mute video for free online</strong> option to <strong>mute video</strong> files in seconds. Want to keep only the sound instead? Use <a href="/video-to-mp3">Video to MP3</a>.</p>
      <h2>Remove audio from video — free</h2>
      <p>This is the quickest way to <strong>remove audio from video</strong> files: <strong>remove audio from video online free</strong> (or <strong>remove sound from video online free</strong>) without editing software. Instead of learning to <strong>remove audio from video capcut</strong>, <strong>remove audio from video canva</strong> or <strong>remove audio from video davinci resolve</strong>-style, just choose the file. It works to <strong>remove audio from video iphone</strong> and <strong>remove audio from video android</strong> users record, and to <strong>remove audio from video windows</strong> PCs store — <strong>remove sound from video</strong> in one click, <strong>remove audio from video free</strong>.</p>
      <p>Your videos are processed inside your browser and never uploaded, so private clips stay private. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'screen-recorder': `
      <h2>Free screen recorder — no download</h2>
      <p>Record your whole screen, a single window or one browser tab, with your <strong>microphone</strong> and the <strong>system / tab audio</strong>. Choose quality (720p, 1080p or 2K) and an optional 3- or 5-second countdown, then pause, resume and stop. The video plays back on the page and downloads in one click — with no watermark and no time limit.</p>
      <h2>Windows, Mac and Chromebook</h2>
      <p>It's a <strong>screen recorder for windows</strong> — including a <strong>screen recorder windows 11</strong> and <strong>screen recorder windows 10</strong> option (a <strong>screen recorder for windows 11</strong> too) — a <strong>screen recorder for mac</strong> (on a <strong>screen recorder mac</strong>, allow your browser under System Settings → Privacy &amp; Security → Screen Recording), and a <strong>screen recorder for chromebook</strong>. Basically a <strong>screen recorder for pc</strong> that runs as a <strong>screen recorder for google chrome</strong>, Edge or Firefox — no <strong>screen recorder chrome extension</strong> or <strong>screen recorder app</strong> needed.</p>
      <h2>Phones and tablets</h2>
      <p>Mobile browsers don't allow websites to record the screen. As a <strong>screen recorder for iphone</strong> or <strong>screen recorder for ipad</strong>, use Control Center → Screen Recording; as a <strong>screen recorder for android</strong> (or <strong>screen recorder android</strong>), use the Screen record tile in Quick Settings.</p>
      <h2>Tips</h2>
      <ul>
        <li>Record a single tab for the cleanest audio in tutorials and online classes.</li>
        <li>As a <strong>screen recorder for gaming</strong>, 1080p works well; very fast games may need dedicated software like OBS.</li>
        <li>Recordings save as WebM in Chrome and Edge — convert to MP4 with the <a href="/video-converter">Video Converter</a> if needed.</li>
      </ul>
      <p>Everything is recorded on your own computer — a private <strong>screen recorder</strong> where nothing is uploaded.</p>`,

  'voice-recorder': `
      <h2>Free online voice recorder</h2>
      <p>Click <strong>Start recording</strong>, speak, then pause or stop. Your recordings are listed on the page so you can play them back, download them as <strong>MP3</strong> or <strong>WAV</strong>, or delete them. It's a <strong>voice recorder online free</strong> — no sign-up, no time limit and no app.</p>
      <h2>What people use it for</h2>
      <ul>
        <li><strong>voice recorder for lectures students</strong> rely on — and a <strong>voice recorder for college lectures</strong> (ask permission first).</li>
        <li><strong>voice recorder for meetings</strong>, interviews and quick voice memos.</li>
        <li><strong>voice recorder for singing</strong> practice and podcast tests — WAV keeps full quality.</li>
        <li><strong>voice recorder for kids</strong> to record stories and songs for family.</li>
      </ul>
      <h2>On any device</h2>
      <p>Use it as a <strong>voice recorder for iphone</strong> and <strong>voice recorder on iphone</strong> (in Safari), a <strong>voice recorder android</strong> and <strong>voice recorder for android</strong> option, or a <strong>voice recorder for pc</strong> with any USB or headset mic — unlike a <strong>voice recorder app</strong> (even a <strong>voice recorder app free</strong> one), there's nothing to install.</p>
      <h2>Need a physical recorder?</h2>
      <p>If you're shopping for a <strong>voice recorder device</strong> (or searching for a <strong>voice recorder near me</strong>, <strong>voice recorder for sale</strong>, or a <strong>voice recorder for stuffed animals</strong> to sew into a teddy bear), test your phone first — this page often does the job for free.</p>
      <p>Recordings stay on your device; nothing is uploaded. A simple <strong>voice recorder online</strong> — a <strong>voice recorder free</strong> to use — and a reliable <strong>voice recorder</strong> when you need one. Check your microphone first with the <a href="/mic-test">Mic Test</a>.</p>`,

  'webcam-test': `
      <h2>Webcam test online — check your camera in seconds</h2>
      <p>Click <strong>Start camera</strong> and allow access: you'll see a live preview plus your camera's details — <strong>resolution</strong>, <strong>frame rate</strong>, <strong>aspect ratio</strong> and how many <strong>cameras were found</strong>. Switch between cameras, take a test photo, or record a short clip to check quality. It's a <strong>webcam test online free</strong> with nothing to install.</p>
      <h2>Before an exam or meeting</h2>
      <ul>
        <li><strong>webcam test for online exam</strong> and <strong>webcam test for proctored exam</strong> sessions — check the camera works and your face is well lit before the exam starts (a common <strong>webcam test for exam</strong> requirement).</li>
        <li><strong>webcam test for zoom</strong> (or <strong>webcam test zoom</strong>) and <strong>webcam test for teams</strong> calls — confirm the right camera is selected.</li>
      </ul>
      <p>Checking sound as well? This is a <strong>webcam test and mic</strong> pair: run the <a href="/mic-test">Mic Test</a> next.</p>
      <h2>Troubleshooting</h2>
      <ul>
        <li>Black screen? Close other apps using the camera (Zoom, Teams, Camera app) and try again.</li>
        <li><strong>webcam test windows 11</strong> — check Settings → Privacy &amp; security → Camera, and allow your browser. On a <strong>webcam test for mac</strong>, check System Settings → Privacy &amp; Security → Camera.</li>
        <li>Is the preview mirrored? That's normal — the <strong>webcam test mirror</strong> view is how most apps show you; others see you the right way round.</li>
      </ul>
      <p>Works as a <strong>webcam test for laptop</strong>, a <strong>webcam test for pc</strong>, a <strong>webcam test for mobile</strong> and even a <strong>webcam test for windows 7</strong> in a modern browser — a trusted <strong>webcam test site</strong> (recommended on Reddit as a <strong>webcam test reddit</strong> pick) for a quick <strong>webcam test online</strong>. Nothing is recorded or uploaded — a private <strong>webcam test</strong>.</p>`,

  'mic-test': `
      <h2>Mic test online — hear yourself and check levels</h2>
      <p>Click <strong>Start mic test</strong>, allow access and speak: a live level meter and waveform show that your microphone is picking up sound. Pick a different <strong>device</strong> if you have several, and see the <strong>sample rate</strong>, <strong>channels</strong>, <strong>echo cancellation</strong> and <strong>noise suppression</strong> settings. To <strong>mic test hear myself</strong>, use <strong>Record 5-second sample</strong> and play it back — a true <strong>mic test playback</strong> check, like a mini <strong>mic test recorder</strong>.</p>
      <h2>For every app and device</h2>
      <ul>
        <li><strong>mic test for discord</strong> (also <strong>mic test discord</strong> voice) and <strong>mic test for zoom</strong> before calls.</li>
        <li><strong>mic test for airpods</strong>, <strong>mic test for headphones</strong> and <strong>mic test for earphones</strong> — make sure the headset mic is selected, not the laptop's.</li>
        <li><strong>mic test for laptop</strong>, <strong>mic test for pc</strong>, <strong>mic test for android</strong> and <strong>mic test iphone</strong> in the browser — even <strong>mic test for roblox</strong> voice chat.</li>
      </ul>
      <h2>Background noise and left/right</h2>
      <p>For a <strong>mic test for background noise</strong>, stay silent for a few seconds: the meter should drop near zero. Hiss or hum suggests a noisy room, a bad cable or a cheap mic. For a stereo <strong>mic test left right</strong>, check the channels value shows 2.</p>
      <p>Need something to read? A classic <strong>mic test script</strong> is “Testing, one, two, three.” This <strong>mic test online</strong> keeps everything on your device — nothing is uploaded. (Looking for the antibiotic <strong>mic test microbiology</strong> instead? That's a lab test; this <strong>mic test</strong> is for microphones.)</p>`,

  'text-to-speech': `
      <h2>Free text to speech — natural voices, many languages</h2>
      <p>Paste or type text, choose a voice and language, and press play. Adjust <strong>speed</strong>, <strong>pitch</strong> and <strong>volume</strong> to taste. This <strong>text to speech free</strong> tool uses the voices built into your device and browser, so there's no account, no word limit and no cost — <strong>text to speech for free</strong>.</p>
      <h2>Languages</h2>
      <p>English (US, UK and India), Urdu, Hindi, Arabic, Bengali, Punjabi, Persian, Spanish, French, German, Portuguese, Italian, Russian, Turkish, Indonesian, Malay, Chinese, Japanese, Korean and more — the exact <strong>text to speech voices</strong> available depend on your device. Chrome often offers Google voices (<strong>text to speech google</strong>), while Edge offers Microsoft's very natural ones.</p>
      <h2>Ways to use it</h2>
      <ul>
        <li><strong>text to speech reader</strong> for articles, emails and study notes — easier on the eyes.</li>
        <li><strong>text to speech for pdf</strong> files: copy text with <a href="/pdf-to-text">PDF to Text</a>, then paste it here. The same works as <strong>text to speech for books</strong>, <strong>text to speech for kindle books</strong> you own and <strong>text to speech for google docs</strong>.</li>
        <li><strong>text to speech for mute people</strong> who want to speak in calls, and <strong>text to speech for discord</strong> or <strong>text to speech for discord voice chat</strong> (play it through your mic with a virtual cable).</li>
        <li><strong>text to speech for edits</strong> and voiceovers in short videos.</li>
      </ul>
      <p>It runs in Chrome, Edge and Safari (<strong>text to speech for chrome</strong> users need no extension) as a <strong>text to speech online</strong> page — no <strong>text to speech app</strong> download. Prefer a <strong>text to speech no ai</strong> option? These are your device's standard voices, not cloned voices. A simple <strong>text to speech generator</strong> and <strong>text to speech</strong> reader — not a <strong>text to speech ai</strong> voice cloner.</p>`,

  'speech-to-text': `
      <h2>Free speech to text — type with your voice</h2>
      <p>Click <strong>Start listening</strong>, allow the microphone, and speak: your words appear as text that you can edit, copy or download as a .txt file. Say “comma”, “period”, “question mark” or “new line” to add punctuation in English. It's <strong>speech to text free</strong>, with no account — <strong>speech to text for free</strong>.</p>
      <h2>Supported browsers and privacy</h2>
      <p>Voice typing uses your browser's built-in speech recognition. It works in Google Chrome, Microsoft Edge and Safari. In Chrome and Edge the audio is processed by the browser maker's speech service (Google or Microsoft) to produce the text, so avoid dictating anything highly confidential.</p>
      <h2>Who it helps</h2>
      <ul>
        <li><strong>speech to text for writing a book</strong>, essays and long emails — speaking is about three times faster than typing.</li>
        <li><strong>speech to text for deaf people</strong>, <strong>speech to text for deaf</strong> users and <strong>speech to text for hearing impaired</strong> people as live captions of what someone says.</li>
        <li><strong>speech to text for google docs</strong> (or <strong>speech to text google docs</strong>): dictate here and paste — or use Docs' own Tools → Voice typing in Chrome.</li>
      </ul>
      <h2>On every device</h2>
      <p>It works as <strong>speech to text for computer</strong> use, <strong>speech to text for laptop</strong>, <strong>speech to text for windows</strong> (also <strong>speech to text windows</strong> and <strong>speech to text for windows 11</strong>), <strong>speech to text on mac</strong>, <strong>speech to text android</strong> and <strong>speech to text iphone</strong> in Safari — no <strong>speech to text app</strong> (or <strong>speech to text app free</strong>) needed. Need another language? Pick it from the Language list; to translate the result, paste it into a translator (a two-step <strong>speech to text translator</strong>). A simple <strong>speech to text</strong> page.</p>`,

  'cgpa-calculator': `
      <h2>CGPA calculator for all semesters</h2>
      <p>Calculate your <strong>Cumulative Grade Point Average</strong> two ways: enter each <strong>semester's GPA</strong> with its credit hours, or enter <strong>individual course grades</strong>. It handles any number of terms — a <strong>cgpa calculator for all semester</strong> results, whether you need a <strong>cgpa calculator for 2 semester</strong>, a <strong>cgpa calculator for 4 semesters</strong>, a <strong>cgpa calculator for 6 semesters</strong> or a <strong>cgpa calculator for 8 semesters</strong>.</p>
      <h2>CGPA calculator formula</h2>
      <p>The <strong>cgpa calculator formula</strong> is a credit-weighted average: <code>CGPA = Σ(GPA × credits) ÷ Σ credits</code>. A 3.2 GPA over 18 credits and a 3.8 GPA over 15 credits gives (57.6 + 57) ÷ 33 = <strong>3.47</strong>. That's how a <strong>cgpa calculator from gpa</strong> values works. Simply averaging the GPAs would be wrong whenever semesters have different credit loads.</p>
      <h2>4.0 and 10-point scales</h2>
      <ul>
        <li><strong>cgpa calculator 4.0 scale</strong> — used in the USA and by HEC Pakistan universities such as UAF (<strong>cgpa calculator uaf</strong>), plus UTM (<strong>cgpa calculator utm</strong>) and other Malaysian universities.</li>
        <li><strong>10-point scale</strong> — Indian universities such as VTU (<strong>cgpa calculator vtu</strong>), Anna University (<strong>cgpa calculator anna university</strong>), KTU (<strong>cgpa calculator ktu</strong>) and VIT (<strong>cgpa calculator vit</strong>) — a <strong>cgpa calculator for engineering</strong> and a <strong>cgpa calculator for arts and science</strong> programs.</li>
      </ul>
      <p>School students can use it as a <strong>cgpa calculator for class 10 cbse</strong> or a <strong>cgpa calculator for 10th state board</strong> on the 10-point scale. Need a percentage? Use the <strong>cgpa calculator to percentage</strong> tool: <a href="/cgpa-to-percentage">CGPA to Percentage</a>. Universities sometimes round or weight courses differently, so confirm important results with your exam office — this <strong>cgpa calculator</strong> gives you a reliable estimate.</p>`,

  'gpa-calculator': `
      <h2>GPA calculator — semester and cumulative</h2>
      <p>Add your courses with their <strong>credits</strong> and <strong>grades</strong> to get your semester GPA. Enter your <strong>current CGPA</strong> and the <strong>credits completed so far</strong> to see your <strong>new cumulative GPA</strong> as well — a <strong>gpa calculator with current gpa</strong> built in. Choose the 4.0 scale (USA, HEC Pakistan) or the 10-point scale (India).</p>
      <h2>How GPA is calculated</h2>
      <p>The <strong>gpa calculator formula</strong>: multiply each course's grade points by its credits, add them up, and divide by the total credits. A (4.0) in a 3-credit class and B (3.0) in a 4-credit class: (12 + 12) ÷ 7 = <strong>3.43</strong>.</p>
      <h2>College, university and high school</h2>
      <ul>
        <li><strong>gpa calculator college</strong> and <strong>gpa calculator university</strong> students — a <strong>gpa calculator for college</strong> each <strong>gpa calculator for semester</strong>, including UIUC (<strong>gpa calculator uiuc</strong>), UF (<strong>gpa calculator uf</strong>) and most US schools on the 4.0 scale.</li>
        <li><strong>gpa calculator high school</strong> (a <strong>gpa calculator for high school</strong>) and <strong>gpa calculator middle school</strong> (a <strong>gpa calculator for middle school</strong>) — unweighted 4.0 GPAs. Schools that give extra points for AP/honors use a <strong>gpa calculator weighted</strong> scale (often 5.0); add those adjustments by hand.</li>
        <li><strong>gpa calculator for medical school</strong> applications — AMCAS recalculates your GPA from every course, so enter each class.</li>
        <li><strong>gpa calculator for all 4 years</strong> — enter your cumulative GPA and credits, then add this term; it works as a <strong>gpa calculator for multiple colleges</strong> too.</li>
      </ul>
      <p>Only have percentages? Convert with <strong>gpa calculator from percentage</strong> help: <a href="/cgpa-to-percentage">CGPA to Percentage</a> works both ways. Need a quick <strong>gpa calculator for one class</strong>? Add a single course — or a whole <strong>gpa calculator for class</strong> list. A simple <strong>gpa calculator</strong>.</p>`,

  'grade-calculator': `
      <h2>Weighted grade calculator</h2>
      <p>Add each assessment — assignments, quizzes, midterm, labs — with your <strong>score %</strong> and its <strong>weight %</strong>, and see your <strong>current weighted grade</strong>. It's a <strong>grade calculator with weights</strong>, so a 90% on a 10% quiz counts less than 75% on a 40% exam — exactly how teachers calculate it.</p>
      <h2>What do I need on the final?</h2>
      <p>Enter the <strong>final exam weight</strong> and your <strong>target overall grade</strong>, and the calculator tells you the score you need — a <strong>grade calculator final</strong> (or <strong>grade calculator for final exam</strong>) answer that removes the guesswork. Example: 82% so far, final worth 30%, target 85% → you need <strong>92%</strong> on the final.</p>
      <h2>Points-based and percentage grades</h2>
      <p>If your class uses points instead, convert each item to a percentage (points earned ÷ points possible × 100) and use the weight of its category — a <strong>grade calculator points</strong>, <strong>grade calculator point based</strong> and <strong>grade calculator percentage</strong> method in one.</p>
      <h2>For every situation</h2>
      <ul>
        <li><strong>grade calculator college</strong> courses (a <strong>grade calculator for college</strong>) and a <strong>grade calculator semester</strong> plan.</li>
        <li><strong>grade calculator for test</strong> (or <strong>grade calculator test</strong>), <strong>grade calculator for quiz</strong>, <strong>grade calculator for exam</strong>, <strong>grade calculator for assignments</strong> and <strong>grade calculator for final</strong>.</li>
        <li><strong>grade calculator for teachers</strong> checking a student's standing, or a <strong>grade calculator for one class</strong> (a <strong>grade calculator for class</strong>).</li>
      </ul>
      <p>For your overall GPA across courses, use the <a href="/gpa-calculator">GPA Calculator</a>. A simple <strong>grade calculator</strong>.</p>`,

  'ats-resume-checker': `
      <h2>Free ATS resume checker with job description</h2>
      <p>Upload your resume (PDF, DOCX or TXT) or paste it, then paste the job description. You get an <strong>ATS score</strong>, the <strong>keywords you're missing</strong>, and a checklist covering sections, contact details, length, action verbs, measurable results and writing style. It's an <strong>ats resume checker free online without login</strong> — and nothing is uploaded.</p>
      <h2>What does ATS stand for?</h2>
      <p>The <strong>ats resume checker meaning</strong> is simple — <strong>ats resume checker what does ats stand for</strong>? <strong>Applicant Tracking System</strong>: software employers use to collect, parse and rank resumes. Many resumes are filtered out before a human reads them, usually because they're missing key terms from the job ad or use layouts the software can't read.</p>
      <h2>How to raise your ATS score</h2>
      <ul>
        <li>Use the <strong>ats resume checker with job description</strong> (an <strong>ats resume checker against job description</strong>) for every application — an <strong>ats resume checker for job description</strong> and an <strong>ats resume checker for specific job</strong> match beats a generic resume.</li>
        <li>Add missing skills only if you really have them, using the exact wording from the ad.</li>
        <li>Use standard headings (Experience, Education, Skills), a single column and no text inside images or tables.</li>
        <li>Start bullets with action verbs and add numbers (“reduced costs by 15%”).</li>
      </ul>
      <h2>For every career stage</h2>
      <p>It works as an <strong>ats resume checker for freshers</strong>, an <strong>ats resume checker for internship</strong> applications, an <strong>ats resume checker for data analyst</strong> and <strong>ats resume checker for hr</strong> roles, for large employers (an <strong>ats resume checker for deloitte</strong>-style application) and for Gulf jobs (<strong>ats resume checker for uae</strong>). Unlike Grammarly-style tools (<strong>ats resume checker grammarly</strong>), it focuses on ATS matching. People on Reddit (<strong>ats resume checker reddit</strong>) recommend checking every application — this <strong>ats resume checker for free</strong> (and <strong>ats resume checker free online</strong>) makes that easy. A simple <strong>ats resume checker</strong>. Need a clean template? Try the <a href="/resume-builder">Resume Builder</a>.</p>`,

  'resume-builder': `
      <h2>Free resume builder — no sign-up, no watermark</h2>
      <p>Fill in your details — summary, experience, education, skills, projects, certifications and languages — and watch your resume update live. Choose a template (<strong>Modern</strong>, <strong>Classic</strong>, <strong>Compact</strong>, <strong>Sans</strong> or <strong>Serif</strong>) and download a clean PDF. It's a <strong>resume builder free</strong> of hidden fees: no account and no paywall at the download step — a true <strong>resume builder for free</strong>.</p>
      <h2>ATS-friendly by design</h2>
      <p>Every resume builder template here is single-column with standard headings and real text, so applicant tracking systems can read it. Check it against a job ad with the <a href="/ats-resume-checker">ATS Resume Checker</a>.</p>
      <h2>Resumes for every stage</h2>
      <ul>
        <li><strong>resume builder for students</strong> and <strong>resume builder for college students</strong> — lead with education and projects.</li>
        <li><strong>resume builder for high school students</strong> and <strong>resume builder for teens</strong> — volunteering, clubs and part-time work count.</li>
        <li><strong>resume builder for no work experience</strong> — use the Projects section for coursework, freelance or personal projects.</li>
        <li><strong>resume builder for nurses</strong> — list licences and certifications prominently.</li>
        <li><strong>resume builder for veterans</strong> — translate military roles into civilian skills.</li>
      </ul>
      <h2>No app, no download</h2>
      <p>It's a <strong>resume builder online free</strong> (a <strong>resume builder for free online</strong>) that works on any device, so there's no <strong>resume builder app</strong> or <strong>resume builder free download</strong> needed — no <strong>resume builder for free download</strong> either. Unlike a <strong>resume builder ai</strong> or <strong>resume builder ai free</strong> tool, it doesn't invent experience — you stay in control. Your data stays in your browser. A simple <strong>resume builder template</strong> page — and a no-nonsense <strong>resume builder</strong>.</p>`,

  'text-to-handwriting': `
      <h2>Text to handwriting converter</h2>
      <p>Type or paste your text and this <strong>text to handwriting converter</strong> writes it out in realistic handwriting on paper. Choose the <strong>handwriting style</strong>, <strong>ink</strong> colour (blue, black, red or green), <strong>paper</strong> (ruled, plain or grid), text size, a red margin line and <strong>natural variation</strong> so letters aren't identical. Download the pages as images or a PDF.</p>
      <h2>For assignments</h2>
      <p>It's a popular <strong>text to handwriting for assignment</strong> helper (also searched as <strong>text to handwriting assignment</strong> or <strong>text to handwriting converter for assignment</strong>): blue ink on ruled paper with a red margin looks most like a school notebook. Check your teacher's rules first — some assignments must be handwritten by you.</p>
      <h2>Notes, GoodNotes and more</h2>
      <ul>
        <li><strong>text to handwriting for goodnotes</strong> (and <strong>text to handwriting goodnotes</strong>) — download as PDF and import it into GoodNotes or Notability.</li>
        <li><strong>text to handwriting for math</strong> — grid paper suits worked solutions.</li>
        <li>Hindi and other scripts depend on the fonts installed; Latin-script text works best (a <strong>text to handwriting for hindi</strong> or <strong>text to handwriting converter for hindi</strong> needs a Devanagari font).</li>
      </ul>
      <p>It's a <strong>text to handwriting generator</strong> in the browser — no <strong>text to handwriting app</strong> to install and no <strong>text to handwriting ai</strong> guesswork. Use it <strong>text to handwriting free</strong>, as a <strong>text to handwriting converter online free</strong>, <strong>text to handwriting free online</strong>, a <strong>text to handwriting for free</strong> and <strong>text to handwriting converter for free</strong> option — download in image or PDF <strong>text to handwriting format</strong>. A simple <strong>text to handwriting</strong> tool.</p>`,

  'citation-generator': `
      <h2>Free citation generator — APA, MLA, Harvard and Chicago</h2>
      <p>Pick a style and a source type — <strong>website</strong>, <strong>book</strong> or <strong>journal article</strong> — fill in the details, and copy a correctly formatted reference. It's a <strong>citation generator free</strong> of ads and sign-ups — a <strong>citation generator for free</strong>.</p>
      <h2>Styles included</h2>
      <ul>
        <li><strong>citation generator apa</strong> — APA 7 (a <strong>citation generator apa 7th edition</strong> and <strong>citation generator for apa 7th edition</strong>, the <strong>citation generator for apa</strong> most universities use).</li>
        <li><strong>citation generator mla</strong> — MLA 9 for humanities.</li>
        <li><strong>citation generator chicago</strong> (<strong>citation generator chicago style</strong>) — notes and bibliography.</li>
        <li><strong>Harvard</strong> — common in the UK, Australia and Pakistan.</li>
      </ul>
      <p>AMA (<strong>citation generator ama</strong>) and ACS (<strong>citation generator acs</strong>) styles aren't included yet — for those, follow your department's guide or Purdue OWL (<strong>citation generator purdue owl</strong> guides are excellent references).</p>
      <h2>Citing different sources</h2>
      <ul>
        <li><strong>citation generator for website</strong> pages — include the author or organisation, the date published and your access date.</li>
        <li><strong>citation generator for books</strong> — publisher, year and edition; add the DOI or URL for e-books.</li>
        <li><strong>citation generator for scientific paper</strong> references — journal, volume, issue, pages and DOI.</li>
        <li><strong>citation generator for youtube video</strong> (and <strong>citation generator for videos</strong>), <strong>citation generator for pdf</strong> reports and <strong>citation generator for images</strong> — use the Website type with the creator, title and URL.</li>
      </ul>
      <p>Always double-check names and dates against the source — a <strong>citation generator</strong> can only format what you enter.</p>`,

  'mortgage-calculator': `
      <h2>Mortgage calculator with taxes, insurance and HOA</h2>
      <p>Enter the home price, down payment, interest rate and loan term (10–30 years), then add yearly property tax, home insurance and monthly HOA fees. You'll see your full monthly <strong>mortgage calculator payment</strong> — principal and interest plus escrow costs — and the total interest over the life of the loan. It's a <strong>mortgage calculator free</strong> of sign-ups.</p>
      <h2>Mortgage calculator formula</h2>
      <p>The <strong>mortgage calculator formula</strong> for principal and interest is <code>M = P × r(1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)</code>, where r is the monthly rate and n the number of payments. Example: $300,000 at 6.5% for 30 years → about <strong>$1,896</strong> a month before taxes and insurance — the same maths behind the <strong>mortgage calculator google</strong> shows.</p>
      <h2>Paying off early and extra payments</h2>
      <p>This version doesn't model extra payments directly. To use it as a <strong>mortgage calculator for paying off early</strong>, compare a 30-year and a 15- or 20-year term: the shorter term shows how much interest extra payments can save. (A full <strong>mortgage calculator with extra payments</strong> — or <strong>mortgage calculator for extra payments</strong> — schedule is on our list.)</p>
      <h2>Other uses</h2>
      <ul>
        <li><strong>mortgage calculator for refinance</strong> — enter your remaining balance as the price with zero down.</li>
        <li><strong>mortgage calculator for investment property</strong>, a <strong>mortgage calculator for second home</strong> or a <strong>mortgage calculator for land</strong> — use the higher rates and down payments those loans usually need.</li>
        <li><strong>mortgage calculator for va loan</strong> — set the down payment to 0; a <strong>mortgage calculator for mobile home</strong> works the same way with its own rate.</li>
        <li><strong>mortgage calculator for commercial property</strong> — commercial loans often have shorter terms, so try 10–20 years.</li>
      </ul>
      <p>Property tax varies by state, which is why a <strong>mortgage calculator florida</strong>, <strong>mortgage calculator california</strong>, <strong>mortgage calculator ohio</strong>, <strong>mortgage calculator utah</strong> or <strong>mortgage calculator pa</strong> search gives different results — enter your county's tax for accuracy. A simple <strong>mortgage calculator</strong>.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'compound-interest-calculator': `
      <h2>Compound interest calculator with monthly contributions</h2>
      <p>Enter your starting amount, a <strong>monthly contribution</strong>, the yearly interest rate and the number of years, then pick how often interest compounds — yearly, half-yearly, quarterly, monthly or daily. You'll see the final balance, how much you contributed and how much came from interest. It's a <strong>compound interest calculator with monthly contributions</strong> built in, and a <strong>compound interest calculator monthly</strong> by default.</p>
      <h2>Compound interest calculator formula</h2>
      <p>The <strong>compound interest calculator formula</strong> is <code>A = P(1 + r/n)ⁿᵗ</code>. Example: $10,000 at 8% compounded monthly for 10 years grows to about <strong>$22,196</strong> — more than doubling with no extra deposits. Add $200 a month and it reaches roughly $58,800. That's the same calculation the SEC's <strong>compound interest calculator investor.gov</strong> uses.</p>
      <h2>Retirement and investing</h2>
      <ul>
        <li><strong>compound interest calculator retirement</strong> (a <strong>compound interest calculator for retirement</strong>) planning — try 6–8% for a diversified long-term portfolio.</li>
        <li><strong>compound interest calculator 401k</strong> (a <strong>compound interest calculator for 401k</strong>) and <strong>compound interest calculator for roth ira</strong> — enter your monthly contribution including any employer match.</li>
        <li><strong>compound interest calculator for stocks</strong> and other <strong>compound interest calculator for investments</strong> — a <strong>compound interest calculator for monthly investment</strong> plans; returns vary year to year, so test a range.</li>
        <li><strong>compound interest calculator for cd</strong> — use the CD's rate and term.</li>
      </ul>
      <p>For a <strong>compound interest calculator for loan</strong> or <strong>compound interest calculator for car loan</strong> payments, the <a href="/loan-calculator">Loan EMI Calculator</a> is the right tool. Withdrawals, inflation and rising contributions aren't modelled here — for a <strong>compound interest calculator with inflation</strong>, subtract expected inflation (say 3%) from your return. A simple <strong>compound interest calculator</strong>.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'simple-interest-calculator': `
      <h2>Simple interest calculator</h2>
      <p>Enter the principal, the yearly interest rate and the time — in <strong>years</strong>, <strong>months</strong> or <strong>days</strong> — to get the interest and the total amount. It's a <strong>simple interest calculator monthly</strong> or daily, as you prefer.</p>
      <h2>Simple interest calculator formula</h2>
      <p>The <strong>simple interest calculator formula</strong> is <code>SI = P × R × T ÷ 100</code>. Example: 50,000 at 10% a year for 3 years → 50,000 × 10 × 3 ÷ 100 = <strong>15,000</strong> interest, 65,000 in total. Unlike compound interest, the interest is never added to the principal, so it grows in a straight line.</p>
      <h2>Days, months and dates</h2>
      <ul>
        <li><strong>simple interest calculator days</strong> (a <strong>simple interest calculator for days</strong>) — interest for 90 days = P × R × 90 ÷ 36500.</li>
        <li><strong>simple interest calculator for months</strong> — 18 months = 1.5 years.</li>
        <li><strong>simple interest calculator by date</strong> or <strong>simple interest calculator between two dates</strong> — count the days with <a href="/date-difference-calculator">Days Between Dates</a>, then enter them here.</li>
      </ul>
      <h2>Loans and savings</h2>
      <p>Many personal loans and car loans in the US are simple-interest loans, so a <strong>simple interest calculator for car loan</strong> or <strong>simple interest calculator loan</strong> estimate is useful. For the actual <strong>simple interest calculator monthly payment</strong> (a <strong>simple interest calculator for monthly payments</strong> or <strong>simple interest calculator payment</strong>), use the <a href="/loan-calculator">Loan EMI Calculator</a>. It also works as a <strong>simple interest calculator savings</strong> estimate (a <strong>simple interest calculator for savings account</strong> or <strong>simple interest calculator for cd</strong>), a <strong>simple interest calculator for loan</strong> or <strong>simple interest calculator for housing loan</strong> comparison, a <strong>simple interest calculator india</strong> users and <strong>simple interest calculator for bank staff</strong> rely on. A simple <strong>simple interest calculator</strong>.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'sip-calculator': `
      <h2>SIP calculator with step up</h2>
      <p>Enter your monthly investment, expected yearly return and time period. Add an optional <strong>annual step-up</strong> — raising your SIP by, say, 10% each year — to see the effect of investing more as your income grows. It's a <strong>sip calculator with step up</strong> built in (a <strong>sip calculator india with step up</strong> favourite).</p>
      <h2>SIP calculator formula</h2>
      <p>The <strong>sip calculator formula</strong> is <code>FV = P × [((1 + i)ⁿ − 1) ÷ i] × (1 + i)</code>, where i is the monthly return and n the number of months. Example: 5,000 a month at 12% for 10 years → about <strong>11.6 lakh</strong> (1,161,695), from 6 lakh invested.</p>
      <h2>Long-term SIPs</h2>
      <p>Compounding rewards patience. Compare a <strong>sip calculator for 10 years</strong>, a <strong>sip calculator for 20 years</strong> and a <strong>sip calculator for 50 years</strong> — the last decade usually adds more than the first two combined. (A <strong>sip calculator for 60 years</strong> or <strong>sip calculator for 100 years</strong> shows the extreme of a <strong>sip calculator for long term</strong>.)</p>
      <h2>Mutual funds, lumpsum and other countries</h2>
      <ul>
        <li><strong>sip calculator for mutual funds</strong> — use 10–12% for equity funds and 6–8% for debt funds as rough long-term assumptions.</li>
        <li><strong>sip calculator lumpsum</strong> — for a <strong>sip calculator for lumpsum amount</strong> or <strong>sip calculator for one time investment</strong>, use the <a href="/compound-interest-calculator">Compound Interest Calculator</a> with no monthly contribution.</li>
        <li>Works as a <strong>sip calculator india</strong>, a <strong>sip calculator nepal</strong> or a <strong>sip calculator usa</strong> tool — a <strong>sip calculator dollars</strong> works the same as rupees.</li>
      </ul>
      <p>It gives the same results as the <strong>sip calculator groww</strong> or <strong>sip calculator sbi</strong> pages without logging in. Returns are not guaranteed; a simple <strong>sip calculator</strong>.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'discount-calculator': `
      <h2>Discount calculator with tax</h2>
      <p>Enter the original price and the discount — as a percentage or an amount — and see how much you save and what you'll pay. Add an <strong>extra discount</strong> (like “extra 10% off at checkout”) and <strong>sales tax</strong> for the real final price — a <strong>discount calculator with tax</strong> (and <strong>discount calculator with sales tax</strong>) in one.</p>
      <h2>Discount calculator formula</h2>
      <p>The <strong>discount calculator formula</strong> (the <strong>discount formula for selling price</strong>) is <code>Sale price = Price × (1 − discount%)</code>. Stacked discounts multiply rather than add: 20% off and then an extra 10% off is <strong>28%</strong> off in total, not 30%. Example: $80 → 20% off = $64 → extra 10% = $57.60 → plus 8% tax = <strong>$62.21</strong>.</p>
      <h2>Common uses</h2>
      <ul>
        <li>Shopping sales — a <strong>discount calculator percentage</strong> check before buying.</li>
        <li>A <strong>discount calculator for senior citizen</strong> and student discounts at restaurants and pharmacies.</li>
        <li>A <strong>discount calculator for rupees</strong>, dollars or any currency — the maths is the same.</li>
        <li>Homework: the <strong>discount formula for class 8</strong> maths uses exactly these steps.</li>
      </ul>
      <h2>In Excel</h2>
      <p>For a <strong>discount calculator excel</strong> sheet (or <strong>discount calculator for excel</strong>), the <strong>discount calculator formula in excel</strong> — the <strong>discount formula for excel</strong> — is <code>=A2*(1-B2)</code>, with the price in A2 and the discount as a percentage in B2. This <strong>discount calculator online</strong> needs no <strong>discount calculator app</strong>. A simple <strong>discount calculator</strong>.</p>`,

  'tip-calculator': `
      <h2>Tip calculator — split the bill</h2>
      <p>Enter the bill, pick a tip (10%, 15%, 18%, 20%, 25% or a custom amount) and the number of people. You'll see the tip, the total and what each person pays — with an option to <strong>round up</strong> each share. It's a <strong>tip calculator free</strong> of ads and sign-ups.</p>
      <h2>Tip calculator formula</h2>
      <p>The <strong>tip calculator formula</strong>: tip = bill × tip%; each person pays (bill + tip) ÷ people. Quick mental trick for 20%: move the decimal one place and double it ($45 → $4.50 → $9).</p>
      <h2>How much to tip in the US</h2>
      <ul>
        <li><strong>tip calculator restaurant</strong> service: 15–20% is standard, 18–20% in big cities — a <strong>tip calculator nyc</strong> (or <strong>tip calculator ny</strong>) user will usually choose 20%, while a <strong>tip calculator texas</strong> or <strong>tip calculator ca</strong> bill typically gets 15–20%.</li>
        <li><strong>tip calculator for hair salon</strong>, a <strong>tip calculator for haircut</strong> or a <strong>tip calculator for hairdresser</strong> (or <strong>tip calculator for hair</strong>): 15–20%.</li>
        <li><strong>tip calculator for nail salon</strong> (or <strong>tip calculator for nails</strong>): 15–20%.</li>
        <li><strong>tip calculator for tattoo</strong> artists: 15–25% depending on the work.</li>
        <li><strong>tip calculator for delivery</strong> and <strong>tip calculator for doordash</strong> orders: 15–20%, more for bad weather or long distances.</li>
      </ul>
      <p>Customs differ by country — in much of Europe and Asia, service is included or a small round-up is enough. This page works on your phone like a <strong>tip calculator app</strong> (a <strong>tip calculator iphone</strong> home-screen shortcut works great). A simple <strong>tip calculator</strong>.</p>`,

  'gst-calculator': `
      <h2>GST and VAT calculator — add or remove tax</h2>
      <p>This <strong>gst calculator</strong> and <strong>vat calculator</strong> works both ways. Choose <strong>Add tax</strong> to get the price including tax, or <strong>Remove tax</strong> to split a tax-inclusive price into its net amount and tax — a <strong>reverse gst calculator</strong>. Ready-made rates include 5% (GST India / VAT UAE), 12%, 18% and 28% (GST India), 15% (VAT Saudi Arabia), 17% and 18% (GST Pakistan) and 20% (VAT UK), plus any custom rate.</p>
      <h2>GST calculator formula</h2>
      <ul>
        <li><strong>Add tax:</strong> total = amount × (1 + rate). 1,000 + 18% = <strong>1,180</strong>.</li>
        <li><strong>Remove tax</strong> (the <strong>gst inclusive formula</strong> and <strong>reverse gst calculator formula</strong>): net = total ÷ (1 + rate). 1,180 ÷ 1.18 = 1,000, so the tax is 180. A common mistake is taking 18% of 1,180 (212.40) — that's wrong.</li>
      </ul>
      <p>That's the whole <strong>gst calculator formula</strong>.</p>
      <h2>Rates around the world</h2>
      <ul>
        <li><strong>gst calculator india</strong> (5/12/18/28%) and Pakistan (17–18%).</li>
        <li><strong>gst calculator australia</strong> — 10%, e.g. a <strong>gst calculator nsw</strong> or <strong>reverse gst calculator australia</strong> check; <strong>gst calculator nz</strong> — 15%.</li>
        <li><strong>gst calculator canada</strong> — 5% federal GST (a <strong>gst calculator alberta</strong> uses 5%); a <strong>reverse gst calculator canada</strong>, <strong>reverse gst calculator alberta</strong>, <strong>reverse gst calculator bc</strong>, <strong>reverse gst calculator manitoba</strong> or <strong>reverse gst calculator ontario</strong> check may need provincial tax too (HST 13% in Ontario).</li>
        <li><strong>vat calculator</strong> Europe: <strong>vat calculator germany</strong> 19%, <strong>vat calculator france</strong> 20%, <strong>vat calculator italy</strong> 22%, <strong>vat calculator spain</strong> 21%, <strong>vat calculator ireland</strong> 23%; <strong>vat calculator south africa</strong> 15%, <strong>vat calculator philippines</strong> 12%.</li>
      </ul>
      <p>The US has state sales tax instead (a <strong>vat calculator usa</strong> search usually means sales tax) — use the custom rate. This <strong>gst calculator online</strong> (a <strong>vat calculator online</strong> and <strong>reverse gst calculator online</strong> too) is a <strong>gst vat calculator</strong> for any country. Rates change, so check your tax authority's current rate.</p>`,

  'profit-margin-calculator': `
      <h2>Profit margin calculator — margin and markup</h2>
      <p>Tell the calculator what you know — <strong>cost and selling price</strong>, <strong>cost and target margin</strong>, or <strong>cost and markup</strong> — and it fills in the rest: profit, margin % and markup %. It's a <strong>profit margin calculator free</strong> of sign-ups and a handy <strong>profit margin calculator percentage</strong> check.</p>
      <h2>Profit margin calculator formula</h2>
      <ul>
        <li><strong>Margin</strong> = (price − cost) ÷ price × 100 — the <strong>profit margin calculator formula</strong>.</li>
        <li><strong>Markup</strong> = (price − cost) ÷ cost × 100.</li>
      </ul>
      <p>Example: cost 60, price 100 → profit 40, margin <strong>40%</strong>, markup <strong>66.7%</strong>. Margin can never reach 100%; mixing up margin and markup is the most common pricing mistake. To hit a 40% margin on a $60 cost, the price is 60 ÷ (1 − 0.40) = <strong>$100</strong> — that's the <strong>profit margin formula for a product</strong>.</p>
      <h2>For your type of business</h2>
      <ul>
        <li><strong>profit margin calculator for product</strong> sellers and <strong>profit margin calculator for dropshipping</strong> stores — include shipping and platform fees in the cost.</li>
        <li><strong>profit margin calculator for food</strong> businesses — restaurants often target 60–70% gross margin on dishes.</li>
        <li><strong>profit margin calculator for service business</strong> owners — use your hourly cost, including overheads.</li>
        <li>A <strong>profit margin calculator for business</strong> owners in the UK or India works the same in pounds or rupees (a <strong>profit margin calculator uk</strong> or <strong>profit margin calculator india</strong>) — add VAT/GST separately.</li>
      </ul>
      <p>In a spreadsheet (a <strong>profit margin calculator excel</strong>), the <strong>profit margin calculator formula excel</strong> is <code>=(B2-A2)/B2</code> with cost in A2 and price in B2 — the <strong>profit margin calculation for excel</strong> sheets. This page works like a <strong>profit margin calculator app</strong>. Trading? A <strong>profit margin calculator forex</strong> refers to trading margin, which is different. A simple <strong>profit margin calculator</strong>.</p>`,

  'salary-calculator': `
      <h2>Salary calculator — hourly, weekly, monthly and yearly</h2>
      <p>Enter what you're paid and how often — per hour, day, week, 2 weeks, month or year — plus your hours per week, days per week and any unpaid weeks off. The calculator converts it into every other period. It's a <strong>salary calculator hourly</strong> rate converter and a <strong>salary calculator for hourly rate</strong> questions such as “what is $25 an hour per year?” (about <strong>$52,000</strong> at 40 hours × 52 weeks).</p>
      <h2>Before tax</h2>
      <p>The results are <strong>gross pay</strong> (before tax). Take-home pay depends on federal, state and local taxes: a <strong>salary calculator texas</strong> (or <strong>salary calculator for texas</strong>) and <strong>salary calculator florida</strong> (a <strong>salary calculator for florida</strong>) result has no state income tax, while a <strong>salary calculator california</strong> (a <strong>salary calculator for california</strong>), <strong>salary calculator new york</strong> or <strong>salary calculator nyc</strong> estimate does, as do a <strong>salary calculator illinois</strong>, <strong>salary calculator georgia</strong>, <strong>salary calculator north carolina</strong> and a <strong>salary calculator for maryland</strong>.</p>
      <h2>Other uses</h2>
      <ul>
        <li><strong>salary calculator for raises</strong> — compare your current and new pay in every period.</li>
        <li><strong>salary calculator for teachers</strong> and others paid for fewer weeks — add the unpaid weeks.</li>
        <li><strong>salary calculator for mortgage</strong> planning — lenders often like housing costs under 28% of gross monthly income.</li>
        <li><strong>salary calculator for different cities</strong> and a <strong>salary calculator for inflation</strong> — compare offers knowing living costs and prices differ.</li>
      </ul>
      <p>A simple <strong>salary calculator</strong>.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'currency-converter': `
      <h2>Currency converter with live exchange rates</h2>
      <p>Pick two currencies and an amount to convert instantly — dollars, euros, pounds, rupees, dirhams, riyals and most other world currencies. Press ⇄ to swap. Rates come from ExchangeRate-API and are refreshed daily, so this <strong>currency converter calculator</strong> is ideal for travel budgets, online shopping and invoices.</p>
      <h2>Popular conversions</h2>
      <ul>
        <li><strong>currency converter euro to usd</strong> and a <strong>currency converter to usd</strong> from almost any currency.</li>
        <li><strong>currency converter pounds to dollars</strong> (GBP → USD).</li>
        <li><strong>currency converter cad to usd</strong> — a <strong>currency converter canadian to us</strong> dollars check.</li>
        <li><strong>currency converter for pesos to dollars</strong> — a <strong>currency converter for mexico</strong> trips.</li>
        <li>Travel: a <strong>currency converter for thailand</strong> (THB), a <strong>currency converter for italy</strong> (EUR) and a <strong>currency converter for iceland</strong> (ISK).</li>
      </ul>
      <h2>Good to know</h2>
      <ul>
        <li>These are mid-market rates. Banks, card companies and exchange counters add a margin, so you'll usually get a little less.</li>
        <li>Historical rates aren't available here; for a <strong>currency converter for past dates</strong> (or a <strong>currency converter for specific date</strong>), use your bank or a historical rates service like the <strong>currency converter foreign exchange rates oanda</strong> page.</li>
        <li>Looking for a <strong>currency converter for time</strong>? You probably want the <a href="/time-zone-converter">Time Zone Converter</a>.</li>
      </ul>
      <p>Bookmark it on your phone and it works just like a <strong>currency converter app</strong> — a <strong>currency converter for android</strong> and iPhone with nothing to install, giving the same rates you'd see in a <strong>currency converter google</strong> search. (The <strong>currency converter mtg</strong> search is about Magic cards — not this.) A simple <strong>currency converter</strong>.</p>`,

  'fuel-cost-calculator': `
      <h2>Fuel cost calculator for road trips</h2>
      <p>Enter the trip distance, your car's fuel efficiency and the fuel price to see how much fuel you'll use and what it will cost. Tick <strong>round trip</strong> to double it, and <strong>split between</strong> friends to see each person's share. Units work both ways: <strong>km and litres</strong> (km per litre or litres per 100 km) or <strong>miles and gallons</strong>. It's a <strong>fuel cost calculator road trip</strong> planner — a <strong>fuel cost calculator for road trip</strong> budgets and any <strong>fuel cost calculator trip</strong>.</p>
      <h2>Fuel cost calculator formula</h2>
      <p>The <strong>fuel cost calculator formula</strong>: cost = distance ÷ efficiency × price. Example: 450 km in a car doing 14 km/l with fuel at 270 per litre → 32.1 litres → about <strong>8,680</strong>. In US units: 300 miles at 30 mpg and $3.50/gal → 10 gallons → <strong>$35</strong>.</p>
      <h2>Tips for an accurate estimate</h2>
      <ul>
        <li>Get the distance from Google Maps — a <strong>fuel cost calculator google maps</strong> combination — and enter it here.</li>
        <li>Use your real consumption, not the brochure figure: a <strong>fuel cost calculator based on car</strong> (or <strong>fuel cost calculator by car</strong>) estimate is only as good as the efficiency you enter. Highway driving is usually more efficient than city driving.</li>
        <li><strong>fuel cost calculator for diesel</strong> — enter the diesel price; a <strong>fuel cost calculator for semi trucks</strong> is often around 6–7 mpg.</li>
        <li>A <strong>fuel cost calculator comparison</strong>: run it twice with two cars' efficiencies to see which is cheaper.</li>
      </ul>
      <p>It's a <strong>fuel cost calculator for car</strong> (a <strong>fuel cost calculator for my car</strong>), a <strong>fuel cost calculator for bike</strong> trips and a <strong>fuel cost calculator for journey</strong> planning, from a <strong>fuel cost calculator uk</strong> commute to a <strong>fuel cost calculator for trip india</strong> holiday — a <strong>fuel cost calculator km</strong> or miles. Use it as a <strong>fuel cost calculator for trip</strong> costs — the simple <strong>fuel cost calculator</strong>.</p>`,

  'calorie-calculator': `
      <h2>Calorie calculator for weight loss, maintenance and gain</h2>
      <p>Enter your age, sex, height, weight and <strong>activity level</strong>, then choose a goal. The calculator estimates your daily calories using the <strong>Mifflin-St Jeor</strong> equation (the most accurate standard formula for most adults) multiplied by your activity level, then adjusts for your goal.</p>
      <h2>Calorie calculator to lose weight</h2>
      <p>As a <strong>calorie calculator for weight loss</strong> (a <strong>calorie calculator to lose weight</strong>), it subtracts about 500 calories a day from maintenance — roughly 0.5 kg (1 lb) a week. Larger cuts are hard to sustain and can cost muscle. A <strong>calorie calculator for women</strong> gives lower numbers than for men of the same size because of body composition.</p>
      <h2>Calorie calculator to gain weight</h2>
      <p>As a <strong>calorie calculator to gain weight</strong> (a <strong>calorie calculator for weight gain</strong>) or <strong>calorie calculator for muscle gain</strong>, add about 250–500 calories a day and pair it with strength training and enough protein (around 1.6 g per kg of body weight).</p>
      <h2>Food, meals and recipes</h2>
      <p>This tool tells you how many calories you need. A <strong>calorie calculator food</strong> lookup (a <strong>calorie calculator for food</strong>, <strong>calorie calculator for meal</strong> or <strong>calorie calculator for recipes</strong>) tells you what you eat — read nutrition labels or use a food database, then compare with your target. One food calorie (kcal) = 4,184 joules (the familiar “1 calorie <strong>= 4.18400 joules</strong>” refers to the small calorie).</p>
      <p>Not designed as a <strong>calorie calculator for kids</strong> — children's needs depend on growth, so ask a paediatrician — or as a <strong>calorie calculator for dogs</strong> or <strong>calorie calculator for cats</strong> (ask your vet). It gives the same results as the <strong>calorie calculator.net</strong> formula, and on your phone it works like a <strong>calorie calculator app</strong>. A simple <strong>calorie calculator</strong>.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'bmr-calculator': `
      <h2>BMR calculator — your basal metabolic rate</h2>
      <p>Your BMR is the number of calories your body burns at complete rest just to stay alive — breathing, circulation, temperature. This <strong>bmr calculator</strong> uses the <strong>Mifflin-St Jeor</strong> equation, and if you enter your body fat percentage it also uses <strong>Katch-McArdle</strong>, which is more accurate for lean or muscular people — a <strong>bmr calculator with body fat</strong> (or <strong>bmr calculator with body fat percentage</strong>) option.</p>
      <h2>BMR calculator formula</h2>
      <p>The <strong>bmr calculator formula</strong> (Mifflin-St Jeor): men = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5; women use −161 instead of +5. Example: a 30-year-old man, 80 kg, 180 cm → <strong>1,780</strong> kcal a day. As a <strong>bmr calculator for men</strong> (or <strong>bmr calculator for men with body fat</strong>) and a <strong>bmr calculator for women</strong> (a <strong>bmr calculator for women free</strong> of sign-ups), the formulas differ only by that constant.</p>
      <h2>Using BMR to lose weight</h2>
      <p>BMR isn't your daily calorie need — multiply it by your activity level, or use the <a href="/calorie-calculator">Calorie Calculator</a>. As a <strong>bmr calculator to lose weight</strong> (a <strong>bmr calculator for weight loss</strong>, or <strong>bmr calculator for women to lose weight</strong>), aim to eat a little below your total daily needs but not below your BMR for long periods.</p>
      <p>Teens are still growing, so a <strong>bmr calculator for teens</strong> (or <strong>bmr calculator for 13 year old</strong>) gives only a rough figure, and it isn't intended as a <strong>bmr calculator for kids</strong>. These are the same equations the <strong>bmr calculator mayo clinic</strong> and other health sites reference.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'body-fat-calculator': `
      <h2>Body fat calculator with measurements</h2>
      <p>This <strong>body fat calculator with measurements</strong> uses the <strong>U.S. Navy method</strong>: you need only a tape measure. Enter your height, neck and waist (at the navel) — plus hips for women — in cm or inches. It's a <strong>body fat calculator based on measurements</strong>, so no machine or calipers are needed.</p>
      <h2>Navy, Army and Air Force</h2>
      <p>The <strong>body fat calculator navy</strong> formula is the tape method used for military fitness checks. The <strong>body fat calculator army</strong> standard (a <strong>body fat calculator for army</strong>, or <strong>body fat calculator for men army</strong>) uses a similar tape approach, and a <strong>body fat calculator for air force</strong> assessment is similar too — always follow your service's current regulations.</p>
      <h2>Healthy ranges</h2>
      <ul>
        <li><strong>body fat calculator for men</strong>: about 8–19% is healthy for adults; athletes are often 6–13%.</li>
        <li><strong>body fat calculator for women</strong>: about 21–32% is healthy; athletes are often 14–20%.</li>
      </ul>
      <h2>How accurate is it?</h2>
      <p>Tape methods are usually within 3–4% of lab results if you measure carefully (same spot, tape snug but not tight, relaxed stomach). A <strong>body fat calculator caliper</strong> (or <strong>body fat calculator for calipers</strong>) skinfold test or a <strong>body fat calculator machine</strong> (bioimpedance scale, DEXA scan) can be more precise — if you're searching for a <strong>body fat calculator near me</strong>, gyms and clinics offer those. The formula isn't designed as a <strong>body fat calculator for kids</strong> or <strong>body fat calculator for teens</strong>, and a <strong>body fat calculator for athletes</strong> with large necks may read slightly high.</p>
      <p>The <strong>body fat calculator formula</strong> uses the logarithm of waist minus neck (plus hips for women) against height. A simple <strong>body fat calculator</strong>.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'ideal-weight-calculator': `
      <h2>Ideal weight calculator — four formulas</h2>
      <p>Enter your height and sex to see your ideal weight by the four classic formulas — <strong>Devine</strong>, <strong>Robinson</strong>, <strong>Miller</strong> and <strong>Hamwi</strong> — plus the healthy weight range for a BMI of 18.5–24.9. Results show as an <strong>ideal weight calculator in kg</strong> and an <strong>ideal weight calculator in lbs</strong>.</p>
      <h2>Ideal weight calculator formula</h2>
      <p>The best-known <strong>ideal weight calculator formula</strong> (Devine) is 50 kg + 2.3 kg per inch over 5 feet for men, and 45.5 kg + 2.3 kg per inch for women. A 5'10" man → <strong>73 kg</strong> (161 lb). The formulas disagree by a few kilograms, which is why the BMI range is the most useful guide.</p>
      <h2>Men and women</h2>
      <p>As an <strong>ideal weight calculator male</strong> (an <strong>ideal weight calculator for men</strong>) and an <strong>ideal weight calculator female</strong> (an <strong>ideal weight calculator for women</strong>), each formula uses a different base weight. Height formulas don't include age; an <strong>ideal weight calculator age</strong> adjustment isn't standard, though older adults are often advised that a slightly higher BMI is fine.</p>
      <h2>Asian and South Asian adults</h2>
      <p>For an <strong>ideal weight calculator for asian</strong> adults — including an <strong>ideal weight calculator for indian male</strong> or <strong>ideal weight calculator for indian female</strong> — the WHO suggests health risks start at a lower BMI (around 23), so aim for the lower half of the range.</p>
      <h2>Limits</h2>
      <p>These formulas ignore muscle and <strong>ideal weight calculator frame size</strong> — an <strong>ideal weight calculator for athletes</strong> will read low because muscle weighs more than fat. It isn't an <strong>ideal weight calculator for kids</strong> or an <strong>ideal weight calculator for baby</strong> (children use growth charts), nor an <strong>ideal weight calculator for dogs</strong> (an <strong>ideal weight calculator dog</strong> owners need is a vet's body-condition score). People on Reddit (<strong>ideal weight calculator reddit</strong>) often prefer the BMI range for that reason. A simple <strong>ideal weight calculator</strong>.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'pregnancy-calculator': `
      <h2>Pregnancy due date calculator</h2>
      <p>Calculate from the <strong>first day of your last period</strong> (LMP) or from your <strong>conception date</strong>, and adjust for your average cycle length. You'll see your estimated due date, how many weeks and days pregnant you are, your trimester and key milestones. It's a <strong>pregnancy due date calculator free</strong> of sign-ups.</p>
      <h2>Pregnancy due date calculator formula</h2>
      <p>The standard <strong>pregnancy due date calculator formula</strong> (Naegele's rule) is LMP + 280 days (40 weeks), adjusted if your cycle is longer or shorter than 28 days. A <strong>pregnancy due date calculator lmp</strong> result is what most clinics use first.</p>
      <h2>From conception or ovulation</h2>
      <p>A <strong>pregnancy due date calculator based on conception</strong> (or <strong>pregnancy due date calculator from conception</strong>) adds 266 days to the conception date — useful as a <strong>pregnancy due date calculator based on ovulation</strong> if you tracked ovulation.</p>
      <h2>IVF and irregular cycles</h2>
      <ul>
        <li>As a <strong>pregnancy due date calculator ivf</strong> (a <strong>pregnancy due date calculator for ivf</strong>, or <strong>baby due date calculator for ivf</strong>): use the conception option with your transfer date plus the embryo's age (e.g. a 5-day embryo transferred on 1 March → conception 24 February).</li>
        <li>As a <strong>pregnancy due date calculator for irregular periods</strong>, set your typical cycle length — but an early ultrasound gives the most reliable date.</li>
        <li>A <strong>pregnancy due date calculator by ultrasound</strong> date from your scan always takes priority over this estimate.</li>
      </ul>
      <p>Only about 4% of babies arrive exactly on the due date; most come within two weeks either side. A <strong>pregnancy due date calculator for twins</strong> uses the same date, though twins often arrive around 36–37 weeks. Track progress <strong>pregnancy due date calculator week by week</strong> (a <strong>pregnancy due date calculator by week</strong>) on this page — a simple <strong>pregnancy due date calculator</strong>.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'ovulation-calculator': `
      <h2>Ovulation calculator — your fertile window</h2>
      <p>Enter the first day of your last period and your average cycle length. The <strong>ovulation calculator</strong> estimates your ovulation day, your <strong>fertile window</strong> (from 5 days before ovulation to the day after), your next period and the earliest day to take a pregnancy test — for the next six cycles. It's an <strong>ovulation calculator free</strong> of sign-ups.</p>
      <h2>How it's calculated</h2>
      <p>Ovulation usually happens about 14 days <em>before</em> your next period. In a 28-day cycle that's around day 14 — an <strong>ovulation calculator for 30 days cycle</strong> puts it near day 16. Sperm can survive up to five days, which is why the fertile window starts before ovulation.</p>
      <h2>Trying to get pregnant</h2>
      <p>As an <strong>ovulation calculator for pregnancy</strong>, focus on the two to three days before ovulation. Combine it with ovulation test strips or tracking basal body temperature for more certainty. Once pregnant, use the <a href="/pregnancy-calculator">Pregnancy Due Date Calculator</a> for an <strong>ovulation calculator due date</strong> (or <strong>ovulation calculator for due date</strong>) estimate.</p>
      <h2>Irregular periods and PCOS</h2>
      <p>An <strong>ovulation calculator for irregular periods</strong> (or <strong>ovulation calculator for irregular periods free</strong> tool) is less reliable because ovulation varies cycle to cycle; an <strong>ovulation calculator for pcos</strong> is even less predictable. Use your average cycle as a starting point and confirm with tests or your doctor.</p>
      <h2>Boy or girl and twins</h2>
      <p>Timing-based methods for choosing a baby's sex — an <strong>ovulation calculator boy or girl</strong>, <strong>ovulation calculator boy</strong> (or <strong>ovulation calculator for boy</strong>), <strong>ovulation calculator girl</strong> (an <strong>ovulation calculator for girl</strong>) — are popular but not scientifically proven, and no calendar can make an <strong>ovulation calculator for twins</strong> or <strong>ovulation calculator for boy twins</strong> happen. The results match the <strong>ovulation calculator babycenter</strong> or <strong>ovulation calculator first response</strong> pages, and it works like an <strong>ovulation calculator app</strong> on your phone.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'water-intake-calculator': `
      <h2>Water intake calculator by weight</h2>
      <p>Enter your body weight, how many minutes you exercise per day, and whether you live in a hot or humid climate. The <strong>water intake calculator by weight</strong> starts from about 35 ml per kg of body weight and adds water for exercise and heat, giving a daily target in litres or ounces — a <strong>water intake calculator kg litre</strong> or lb/oz result.</p>
      <h2>Water intake calculator formula</h2>
      <p>The <strong>water intake calculator formula</strong>: weight (kg) × 35 ml, plus extra for activity and heat. Example: 70 kg × 35 ml = <strong>2.45 litres</strong> a day before exercise. Food provides about 20% of most people's water, and tea, coffee and milk count too.</p>
      <h2>Men, women and age</h2>
      <p>A <strong>water intake calculator for men</strong> usually gives more than a <strong>water intake calculator for women</strong> because of body size. Older adults feel less thirsty, so a <strong>water intake calculator by age</strong> (or <strong>water intake calculator by age and weight</strong>) reminder to drink regularly matters more with age. Height matters little once weight is known, so a <strong>water intake calculator by weight and height</strong> gives the same answer.</p>
      <h2>Special situations</h2>
      <ul>
        <li><strong>water intake calculator for athletes</strong> — add roughly 0.4–0.8 litres per hour of training, more in heat.</li>
        <li><strong>water intake calculator with creatine</strong> (a <strong>water intake calculator for creatine</strong>) — creatine draws water into muscles, so many people add about half a litre a day.</li>
        <li><strong>water intake calculator for weight loss</strong> (a <strong>water intake calculator for weight loss female</strong>) — a glass before meals can help you feel full.</li>
        <li><strong>water intake calculator pregnancy</strong> (or <strong>water intake calculator for pregnancy</strong>) — needs rise to around 2.3–3 litres; ask your midwife.</li>
        <li>Not a <strong>water intake calculator for kids</strong> or a <strong>water intake calculator for dogs</strong> (<strong>water intake calculator dog</strong>) — ask a doctor or vet.</li>
      </ul>
      <p>A simple <strong>water intake calculator</strong>.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'sleep-calculator': `
      <h2>Sleep calculator — wake up refreshed</h2>
      <p>Sleep runs in cycles of about 90 minutes. Waking at the end of a cycle feels much easier than waking in the middle of deep sleep. Choose <strong>Wake up at…</strong> to find good bedtimes, <strong>Go to bed at…</strong> to find good wake-up times, or <strong>Sleep now</strong>. Adjust the <strong>time to fall asleep</strong> (about 15 minutes for most people). It's a <strong>sleep calculator cycle</strong> planner and a <strong>sleep calculator for rem cycle</strong> timing in one.</p>
      <h2>How much sleep do I need?</h2>
      <ul>
        <li>Adults: 7–9 hours (5–6 cycles) — a <strong>sleep calculator hours</strong> rule of thumb for a <strong>sleep calculator for women</strong> and men alike.</li>
        <li>Teens: 8–10 hours — a <strong>sleep calculator for teens</strong> should aim for 6 cycles.</li>
        <li>Children 6–12: 9–12 hours; a <strong>sleep calculator for kids</strong> works best with a fixed bedtime.</li>
        <li>A <strong>sleep calculator for toddlers</strong> (11–14 hours including naps) or <strong>sleep calculator for babies</strong> (12–16 hours) is a rough guide only — little ones sleep in shorter cycles.</li>
      </ul>
      <p>These follow the American Academy of Sleep Medicine's <strong>sleep calculator by age</strong> recommendations; a <strong>sleep calculator by age and gender</strong> (or <strong>sleep calculator for women by age</strong>) differs little, as needs are similar for men and women.</p>
      <h2>Naps and travel</h2>
      <ul>
        <li><strong>sleep calculator for naps</strong> (or <strong>sleep calculator nap</strong>): 20 minutes for a quick boost, or a full 90-minute cycle — avoid 45–60 minutes, which ends in deep sleep.</li>
        <li><strong>sleep calculator for jet lag</strong> (a <strong>sleep calculator for travel</strong>): shift your bedtime by an hour a day before you fly, and get morning light at your destination.</li>
      </ul>
      <p>Bookmark this <strong>sleep calculator time</strong> planner and it works like a <strong>sleep calculator app</strong> — a simple <strong>sleep calculator</strong>.</p>`,

  'scientific-calculator': `
      <h2>Free scientific calculator online</h2>
      <p>This <strong>scientific calculator online</strong> handles everything from basic arithmetic to trigonometry and logarithms: <strong>sin</strong>, <strong>cos</strong>, <strong>tan</strong> and their inverses, <strong>log</strong> and <strong>ln</strong>, square roots, powers (x², xʸ), π, e, percentages, scientific notation (EXP), the previous answer (Ans), memory (MC, MR) and a history of your calculations. Switch between degrees (DEG) and radians, and type with your keyboard or click the buttons.</p>
      <h2>For school and college</h2>
      <ul>
        <li><strong>scientific calculator for high school</strong> and <strong>scientific calculator for middle school</strong> maths — fractions, powers and percentages; even a <strong>scientific calculator for 7th grade</strong> homework.</li>
        <li><strong>scientific calculator for geometry</strong> — trig functions in degrees for angles and triangles.</li>
        <li><strong>scientific calculator for chemistry</strong> — logs for pH and EXP for scientific notation (6.022 EXP 23).</li>
        <li><strong>scientific calculator for statistics</strong> — for mean, median and standard deviation use the <a href="/average-calculator">Average Calculator</a>.</li>
        <li><strong>scientific calculator for calculus</strong> and a <strong>scientific calculator for college</strong> course — handy for evaluating expressions; graphing tools like the <strong>scientific calculator desmos</strong> offers are better for plotting functions.</li>
      </ul>
      <h2>Buying a calculator for exams?</h2>
      <p>Most exams require a physical calculator. Popular models are the <strong>scientific calculator casio</strong> fx-991 series and the <strong>scientific calculator ti-30xs</strong>. If you're checking <strong>scientific calculator price</strong> or looking for a <strong>scientific calculator for sale</strong> — at a <strong>scientific calculator walmart</strong> store, a stationery shop in Lahore (<strong>scientific calculator lahore</strong>) or searching <strong>scientific calculator near me</strong> or <strong>scientific calculator nearby</strong> — this page is perfect for practice in the meantime. A free <strong>scientific calculator for school</strong> — a simple <strong>scientific calculator</strong>.</p>`,

  'fraction-calculator': `
      <h2>Fraction calculator with whole numbers and mixed numbers</h2>
      <p>Add, subtract, multiply and divide fractions — including <strong>mixed numbers</strong> such as 2 ¾ — by entering the whole number, numerator and denominator. The answer is shown <strong>simplified</strong>, as a mixed number, as a decimal and as a percentage. It's a <strong>fraction calculator with whole numbers</strong> and a <strong>fraction calculator mixed numbers</strong> tool in one.</p>
      <h2>How fraction maths works</h2>
      <ul>
        <li><strong>Add / subtract</strong> — find a common denominator: 1/3 + 1/4 = 4/12 + 3/12 = <strong>7/12</strong>.</li>
        <li><strong>Multiply</strong> — multiply across: 2/3 × 3/5 = 6/15 = <strong>2/5</strong>.</li>
        <li><strong>Divide</strong> (<strong>fraction calculator division</strong>) — flip the second fraction and multiply: 3/4 ÷ 1/2 = 3/4 × 2 = <strong>1 ½</strong>.</li>
        <li><strong>Simplify</strong> (<strong>fraction calculator simplify</strong>) — divide top and bottom by their greatest common divisor.</li>
      </ul>
      <p>That's the whole <strong>fraction calculator formula</strong>. Negative fractions work too — a <strong>fraction calculator with negatives</strong>.</p>
      <h2>Measurements, construction and woodworking</h2>
      <p>As a <strong>fraction calculator for inches</strong> and a <strong>fraction calculator for measurements</strong> — a <strong>fraction calculator for construction</strong> and <strong>fraction calculator for woodworking</strong> — it adds tape-measure values like 5 ⅜" + 2 ¾" = <strong>8 ⅛"</strong>.</p>
      <h2>For students</h2>
      <p>A friendly <strong>fraction calculator for kids</strong> (a <strong>fraction calculator for grade 4</strong> and up): check homework and see the decimal and percentage at the same time. For a <strong>fraction calculator for 3 fractions</strong>, combine the first two, then the result with the third. Exponents aren't supported (a <strong>fraction calculator with exponents</strong> can raise each part separately). And <strong>can you do fractions on a calculator</strong>? Yes — this <strong>fraction calculator online</strong> does, with no <strong>fraction calculator app</strong> needed, matching what a <strong>fraction calculator google</strong> search gives. A simple <strong>fraction calculator</strong>.</p>`,

  'average-calculator': `
      <h2>Average calculator — mean, median, mode and more</h2>
      <p>Paste or type your numbers (separated by commas, spaces or new lines) to get the <strong>average (mean)</strong>, <strong>median</strong>, <strong>mode</strong>, <strong>range</strong>, <strong>sum</strong>, count, minimum and maximum, plus the <strong>standard deviation</strong> (population and sample), variance and geometric mean.</p>
      <h2>Average calculator formula</h2>
      <p>The <strong>average calculator formula</strong>: mean = sum ÷ count. For 70, 85, 90 and 95: 340 ÷ 4 = <strong>85</strong>. The median is the middle value when sorted (87.5 here), and the mode is the most frequent value.</p>
      <h2>Grades and GPA</h2>
      <p>As an <strong>average calculator for grades</strong> (an <strong>average calculator grade</strong>) and an <strong>average calculator for percentages</strong> (an <strong>average calculator percentage</strong> check), enter your marks to see your mean. If assignments carry different weights, use the <a href="/grade-calculator">Grade Calculator</a> — an <strong>average calculator with weight</strong>; for an <strong>average calculator gpa</strong>, use the <a href="/gpa-calculator">GPA Calculator</a>.</p>
      <h2>Stocks and shares</h2>
      <p>For an <strong>average calculator for stocks</strong> (an <strong>average calculator stock</strong>) or <strong>average calculator for shares</strong> — your average buy price — you need a weighted average: total cost ÷ total shares. 10 shares at $50 plus 30 at $40 → $1,700 ÷ 40 = <strong>$42.50</strong>, not the simple average of $45.</p>
      <h2>Other averages</h2>
      <ul>
        <li><strong>average calculator for car</strong> and <strong>average calculator for bike</strong> mileage (an <strong>average calculator for car in india</strong> favourite): km driven ÷ litres used.</li>
        <li><strong>average calculator for time</strong> — convert minutes and seconds to decimals first.</li>
        <li><strong>average calculator baseball</strong> — batting average = hits ÷ at-bats.</li>
      </ul>
      <p>In a spreadsheet (an <strong>average calculator excel</strong>), the <strong>average calculator formula in excel</strong> is <code>=AVERAGE(A1:A10)</code>. Speed or distance averages for a route (an <strong>average calculator map</strong>)? Divide total distance by total time. A simple <strong>average calculator</strong>.</p>`,

  'unit-converter': `
      <h2>Unit converter — length, weight, temperature and more</h2>
      <p>Convert between metric and imperial units in ten categories: <strong>length</strong>, <strong>weight</strong>, <strong>temperature</strong>, <strong>area</strong>, <strong>volume</strong>, <strong>speed</strong>, <strong>time</strong>, <strong>digital storage</strong>, <strong>pressure</strong> and <strong>energy</strong>. Type a value, choose the units, and press ⇄ to swap. It's a <strong>unit converter calculator</strong> that updates as you type.</p>
      <h2>Popular conversions</h2>
      <ul>
        <li><strong>unit converter length</strong> — e.g. the <strong>unit converter mm to inches</strong> case: 25.4 mm = 1 inch; also cm, m, km, ft, yd and miles.</li>
        <li><strong>unit converter weight</strong> — kg ↔ lb (1 kg = 2.205 lb), grams, ounces, stones, tola and maund.</li>
        <li><strong>unit converter volume</strong> — litres, millilitres, US gallons, cups and fluid ounces.</li>
        <li><strong>unit converter for area</strong> — a <strong>unit converter for land</strong> measurement: m², ft², square yards, acres, hectares, marla and kanal.</li>
        <li><strong>unit converter for pressure</strong> — bar, psi, kPa, atm (tyre pressures).</li>
        <li><strong>unit converter force</strong> (a <strong>unit converter force newton</strong> conversion) — use energy and pressure units for engineering basics.</li>
        <li><strong>unit converter for electricity</strong> bills — energy in kWh, kJ and kcal.</li>
      </ul>
      <h2>Unit converter formula</h2>
      <p>Most conversions are a single multiplication — the <strong>unit converter formula</strong> is value × factor (miles × 1.609 = km). Temperature is the exception: °F = °C × 9/5 + 32. The full <strong>unit converter list</strong> of units is in each category's menu.</p>
      <p>It works in the browser on any device — a <strong>unit converter for windows</strong>, a <strong>unit converter for pc</strong> and a <strong>unit converter for iphone</strong> with no <strong>unit converter app</strong> or <strong>unit converter download</strong>. For <strong>unit converter money</strong> conversions, use the <a href="/currency-converter">Currency Converter</a>. A simple <strong>unit converter</strong>.</p>`,

  'random-number-generator': `
      <h2>Random number generator</h2>
      <p>Set a <strong>minimum</strong> and <strong>maximum</strong>, choose <strong>how many</strong> numbers you want and any decimal places, and generate. Tick <strong>No duplicates</strong> for unique numbers — a <strong>random number generator no repeats</strong> — and <strong>Sort results</strong> to list them in order. Numbers come from your browser's cryptographically secure generator, so they're genuinely unpredictable.</p>
      <h2>Quick ranges</h2>
      <p>Popular settings: <strong>random number generator 1-10</strong>, <strong>random number generator 1-100</strong>, <strong>random number generator 1-6</strong> (a dice roll — or try the <a href="/dice-roller">Dice Roller</a>), <strong>random number generator 1-3</strong>, <strong>random number generator 1-4</strong>, <strong>random number generator 1-5</strong> and <strong>random number generator 1-12</strong>. Just type the range.</p>
      <h2>Lottery, raffles and games</h2>
      <ul>
        <li><strong>random number generator for lottery</strong> picks — a <strong>random number generator for powerball</strong> (5 unique from 1–69, plus 1 from 1–26) or <strong>random number generator for mega millions</strong> (5 from 1–70, plus 1 from 1–24). Every combination has exactly the same odds.</li>
        <li><strong>random number generator for raffle</strong> draws — number the tickets and draw winners with no duplicates.</li>
        <li><strong>random number generator for football squares</strong> and <strong>random number generator for fantasy football</strong> draft order — generate 0–9 or 1–12 with no repeats.</li>
        <li><strong>random number generator for names</strong> — number your list, or use the <a href="/spin-the-wheel">Spin the Wheel</a> picker (a <strong>random number generator wheel</strong> alternative).</li>
      </ul>
      <h2>In Excel</h2>
      <p>For a <strong>random number generator for excel</strong>, the <strong>random number generator formula excel</strong> is <code>=RANDBETWEEN(1,100)</code> — but it recalculates every time the sheet changes. Generate a <strong>random number generator for multiple numbers</strong> list here and paste it. A simple <strong>random number generator</strong>.</p>`,

  'roman-numeral-converter': `
      <h2>Roman numeral converter — both ways</h2>
      <p>Type a number from 1 to 3999 to get its Roman numerals, or type Roman numerals to get the number — a <strong>roman numeral converter to numbers</strong> and back, with a step-by-step breakdown (2026 = M + M + X + X + V + I = <strong>MMXXVI</strong>).</p>
      <h2>Dates and birthdays</h2>
      <p>As a <strong>roman numeral converter date</strong> tool (a <strong>roman numeral converter for dates</strong>), convert each part separately: the day, the month and the year. A <strong>roman numeral converter date of birth</strong> example — 14 August 1995 = <strong>XIV · VIII · MCMXCV</strong>. That's the format people use with a <strong>roman numeral converter birthday</strong> (or <strong>roman numerals converter for birthday</strong>) — and <strong>roman numerals converter 2020</strong> gives MMXX. A <strong>roman numeral calculator for dates</strong> works the same way.</p>
      <h2>Tattoos</h2>
      <p>A <strong>roman numeral converter tattoo</strong> (or <strong>roman numeral converter for tattoo</strong>) design must be exactly right — double-check the result and the separators (dots or spaces) before the appointment. The standard form never repeats a symbol more than three times: 4 is IV, not IIII (except on some clock faces).</p>
      <h2>How Roman numerals work</h2>
      <p>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. A smaller numeral before a larger one subtracts (IX = 9, XC = 90, CM = 900). The <strong>roman numeral converter to english</strong> (or <strong>roman numeral converter to hindu arabic</strong> numbers — <strong>roman numerals convert to arabic</strong> digits) simply adds and subtracts these values; <strong>roman numerals converter to letters</strong> works in reverse.</p>
      <p>It's the same everywhere — UK (<strong>roman numeral converter uk</strong>) or Australia (<strong>roman numeral converter australia</strong>). Coding it yourself? A <strong>roman numeral converter python</strong> (a <strong>roman numeral converter in python</strong>) loop uses the same value table. A simple <strong>roman numeral converter</strong>.</p>`,

  'lcm-gcd-calculator': `
      <h2>LCM and GCD (HCF) calculator</h2>
      <p>Enter two or more numbers, separated by commas or spaces, to get both the <strong>LCM</strong> (least common multiple) and the <strong>GCD</strong> — also called the HCF or GCF (greatest common factor). It's an <strong>lcm calculator</strong>, a <strong>gcd calculator</strong> and an <strong>hcf calculator</strong> in one — an <strong>lcm gcd calculator</strong> and <strong>lcm gcf calculator</strong> for any count of numbers.</p>
      <h2>Worked examples</h2>
      <ul>
        <li><strong>what is the lcm of 24 and 36</strong>? 24 = 2³ × 3 and 36 = 2² × 3², so the LCM takes the highest powers: 2³ × 3² = <strong>72</strong>; the GCD takes the lowest: 2² × 3 = <strong>12</strong>.</li>
        <li><strong>what is the lcm of 8 24 and 36</strong>? 2³ × 3² = <strong>72</strong>.</li>
        <li>Shortcut for two numbers: LCM = a × b ÷ GCD → 24 × 36 ÷ 12 = 72.</li>
      </ul>
      <h2>Methods you'll see in class</h2>
      <ul>
        <li><strong>hcf calculator prime factorization</strong> (an <strong>hcf calculator with steps prime factorization</strong> approach) — break each number into primes, as above.</li>
        <li><strong>hcf calculator by division method</strong> (an <strong>hcf calculator with steps division method</strong>) — the <strong>gcd calculator euclidean algorithm</strong>: divide, keep the remainder, repeat. 36 ÷ 24 = 1 r 12; 24 ÷ 12 = 2 r 0 → GCD 12.</li>
        <li><strong>lcm calculator ladder method</strong> — divide all numbers by common primes in a ladder, then multiply the side and bottom numbers.</li>
      </ul>
      <p>Alongside the answers, the tool lists each number's prime factorization, so use it as an <strong>lcm calculator online</strong> (or <strong>gcd calculator online</strong>, <strong>hcf calculator online</strong>) to check your <strong>lcm calculator with steps</strong> or <strong>gcd calculator with steps</strong> homework. Programmers can write a <strong>gcd calculator python</strong> with <code>math.gcd</code>. A <strong>gcd calculator of two numbers</strong> or more — and a quick <strong>hcf calculator maths</strong> check.</p>`,

  'quadratic-equation-solver': `
      <h2>Quadratic equation solver with steps</h2>
      <p>Enter the coefficients <strong>a</strong>, <strong>b</strong> and <strong>c</strong> of ax² + bx + c = 0 and get both roots, the discriminant and a <strong>step by step</strong> solution. It handles real and complex roots — a <strong>quadratic equation solver with steps</strong> and a <strong>quadratic equation solver calculator</strong> in one.</p>
      <h2>Quadratic equation solver formula</h2>
      <p>The <strong>quadratic equation solver formula</strong> is the quadratic formula: <code>x = (−b ± √(b² − 4ac)) ÷ 2a</code>. The discriminant b² − 4ac tells you what to expect: positive → two real roots; zero → one repeated root; negative → two complex roots. That's the method for <strong>quadratic equation solving for x</strong> (and <strong>quadratic formula solving for x</strong>) — the standard <strong>quadratic equation for solving</strong> any second-degree equation, and <strong>quadratic equation solving for roots</strong>.</p>
      <h2>Example</h2>
      <p>x² − 5x + 6 = 0 → a = 1, b = −5, c = 6 → discriminant = 25 − 24 = 1 → x = (5 ± 1) ÷ 2 → <strong>x = 3</strong> or <strong>x = 2</strong>.</p>
      <h2>By factoring</h2>
      <p>The same equation factors as (x − 2)(x − 3) = 0. Factoring is quicker when the roots are whole numbers; the formula always works. This <strong>quadratic equation solver by factoring</strong> check (a <strong>quadratic equation solver with steps by factoring</strong>) lets you confirm your factors give the same roots.</p>
      <h2>On a TI-84, in Excel or Python</h2>
      <p>On a TI-84 (<strong>quadratic equation solver ti 84</strong>, or a <strong>quadratic formula solver for ti 84</strong> program), use the PlySmlt2 app or a program. A <strong>quadratic equation solver in excel</strong> uses <code>=(-B1+SQRT(B1^2-4*A1*C1))/(2*A1)</code>; a <strong>quadratic equation solver in python</strong> uses <code>cmath.sqrt</code> to handle complex roots. This <strong>quadratic equation solver online</strong> is quicker for checking homework — a simple <strong>quadratic equation solver</strong>.</p>`,

  'date-difference-calculator': `
      <h2>Days between dates calculator</h2>
      <p>Pick a start and an end date to count the <strong>days between dates</strong> — and see the same gap in years, months and days, in weeks, and as <strong>business days</strong>. Tick <strong>Include end date</strong> to count both the first and last day (handy for holidays and hotel stays), and choose which days are your weekend: Saturday & Sunday, Friday & Saturday, Friday only or Sunday only. It's a <strong>days between dates calculator</strong> and a <strong>days between dates counter</strong> in one.</p>
      <h2>Example</h2>
      <p>1 January 2026 → 25 December 2026 = <strong>358 days</strong> (51 weeks and 1 day, or 11 months and 24 days), of which <strong>256</strong> are weekdays. Business days skip weekends only, not public holidays, so subtract any holidays yourself. Prefer to see it on a <strong>days between dates calendar</strong>? The result also shows both dates with their weekdays.</p>
      <h2>Days between dates formula</h2>
      <p>The <strong>days between dates formula</strong> is simply end date − start date. Here's how to do it in other tools:</p>
      <ul>
        <li><strong>days between dates in excel</strong> — the <strong>days between dates excel formula</strong> is <code>=B2-A2</code> or <code>=DAYS(B2,A2)</code>; for working days, <code>=NETWORKDAYS(A2,B2)</code>. Any <strong>days between dates formula excel</strong> users write works the same in a <strong>days between dates excel</strong> sheet.</li>
        <li><strong>days between dates in google sheets</strong> — the same <code>=DAYS(B2,A2)</code> or <code>=DATEDIF(A2,B2,"D")</code> is the <strong>days between dates formula google sheets</strong> users need (or any <strong>days between dates google sheets</strong> template).</li>
        <li><strong>days between dates in sql</strong> — SQL Server: <code>DATEDIFF(day, start_date, end_date)</code>; MySQL: <code>DATEDIFF(end_date, start_date)</code>.</li>
        <li><strong>days between dates in oracle</strong> — subtract the dates directly: <code>end_date - start_date</code>.</li>
        <li><strong>days between dates in snowflake</strong> — <code>DATEDIFF(day, start_date, end_date)</code>.</li>
        <li><strong>days between dates in power bi</strong> (DAX) — <code>DATEDIFF([Start], [End], DAY)</code>.</li>
        <li><strong>days between dates in power query</strong> — <code>Duration.Days([End] - [Start])</code>.</li>
      </ul>
      <p>(Searching for “Days Between” by the Grateful Dead? That's the Jerry Garcia song — this page is for counting dates.)</p>`,

  'date-calculator': `
      <h2>Date calculator — add or subtract days</h2>
      <p>Pick a start date, choose <strong>Add</strong> or <strong>Subtract</strong>, and enter any mix of years, months, weeks and days. You'll get the resulting date with its weekday, the ISO date (YYYY-MM-DD), its day of the year and how many days away it is. It's a <strong>date calculator add days</strong> tool — or a <strong>date calculator add</strong> months and years tool — that's ideal for deadlines.</p>
      <h2>Examples</h2>
      <ul>
        <li>21 October 2026 + 90 days = <strong>Tuesday, 19 January 2027</strong>.</li>
        <li>31 January + 1 month = <strong>28 February</strong> (29 in a leap year) — the calculator keeps you inside the shorter month instead of spilling into March.</li>
        <li>A <strong>date calculator for weeks</strong>: today + 6 weeks for a follow-up appointment.</li>
      </ul>
      <h2>Courts, medication and pregnancy</h2>
      <ul>
        <li><strong>date calculator for court</strong> deadlines — “within 30 days of service” = service date + 30 days. Court rules often extend deadlines that land on weekends or holidays, so check your court's rules.</li>
        <li><strong>date calculator for medication</strong> — when a 28-day pack or a 90-day prescription runs out.</li>
        <li><strong>date calculator for pregnancy</strong> — the <a href="/pregnancy-calculator">Pregnancy Due Date Calculator</a> works out weeks and the due date for you.</li>
        <li><strong>date calculator for age</strong> — the <a href="/age-calculator">Age Calculator</a> gives exact years, months and days.</li>
      </ul>
      <h2>Counting days between two dates</h2>
      <p>To go the other way — a <strong>date calculator between two dates</strong>, a <strong>date calculator days between</strong> or <strong>date calculator count days</strong> tool, or a <strong>date calculator for business days</strong> — use <a href="/date-difference-calculator">Days Between Dates</a>. It's the <strong>date calculator for number of days</strong> (a <strong>date calculator for days</strong>) that also counts weekdays.</p>
      <h2>In Excel</h2>
      <p>For a <strong>date calculator for excel</strong>, the <strong>date calculator formula in excel</strong> is <code>=A2+90</code> for days, <code>=EDATE(A2,3)</code> for months and <code>=WORKDAY(A2,10)</code> for 10 working days. Planning for <strong>date calculator 2026</strong> or 2027 deadlines? Any year from 1 to 9999 works — a simple <strong>date calculator</strong>.</p>`,

  'time-calculator': `
      <h2>Time calculator for work hours</h2>
      <p>Pick one of three modes:</p>
      <ul>
        <li><strong>Hours between two times</strong> — enter a start and end time and an <strong>unpaid break</strong>. You'll get the total in hours and minutes, in <strong>decimal hours</strong> and in minutes; add an hourly rate to see the pay. Overnight shifts (22:00 → 06:00) are handled automatically.</li>
        <li><strong>Add / subtract time</strong> — e.g. 08:45 + 3 h 20 m = 12:05 PM, with a “+1 day” note if you cross midnight.</li>
        <li><strong>Total of many durations</strong> — one per line, like <code>1:30</code>, <code>2h 15m</code> or <code>45m</code>, with the total and the average.</li>
      </ul>
      <h2>Time calculator for work with lunch</h2>
      <p>As a <strong>time calculator for work</strong> (a <strong>time calculator for work hours</strong>), enter 9:00 to 17:30 with a 30-minute lunch → <strong>8h 00m</strong> (8.00 decimal hours). That's the <strong>time calculator with lunch</strong> — or <strong>time calculator for work with lunch</strong> — most timesheets need.</p>
      <h2>For the week and payroll</h2>
      <p>For a <strong>time calculator for the week</strong>, switch to “Total of many durations” and enter each day: 8:00, 7:45, 8:30, 8:00, 6:15 → <strong>38h 30m</strong>. Payroll systems use decimal hours, so this <strong>time calculator for payroll</strong> shows 38.50 as well (see also <a href="/hours-to-decimal">Hours to Decimal</a>).</p>
      <h2>Hours, minutes and seconds</h2>
      <p>As a <strong>time calculator hours and minutes</strong> (a <strong>time calculator for hours and minutes</strong>) tool it's precise to the minute. For a <strong>time calculator minutes</strong> total (a <strong>time calculator for minutes</strong>), enter <code>45m</code> lines; for a <strong>time calculator minutes and seconds</strong> (or <strong>time calculator for minutes and seconds</strong>) sum, type h:mm:ss like <code>0:04:30</code> — totals are shown rounded to the minute. It's a quick <strong>time calculator for hours</strong> and a <strong>time calculator hours</strong> adder too.</p>
      <h2>Division, dates and time zones</h2>
      <p>For <strong>time calculator division</strong>, divide the decimal hours: 7.5 h ÷ 3 = 2.5 h = 2h 30m (the average in the list mode does this for you). A <strong>time calculator between dates</strong> is <a href="/date-difference-calculator">Days Between Dates</a>, and a <strong>time calculator for time zones</strong> is the <a href="/time-zone-converter">Time Zone Converter</a>. A simple <strong>time calculator</strong>.</p>`,

  'stopwatch': `
      <h2>Online stopwatch with laps</h2>
      <p>Press <strong>Start</strong> — or the <kbd>Space</kbd> bar — and this <strong>online stopwatch</strong> counts to the hundredth of a second. Press <kbd>L</kbd> or <strong>Lap</strong> to record split times, and <kbd>R</kbd> to reset. Each lap shows its own time and the running total; once you have three or more laps, the fastest is highlighted green and the slowest red. It's an <strong>online stopwatch with laps</strong> that's completely free — an <strong>online stopwatch for free</strong> with no ads in the way of the timer.</p>
      <h2>Accurate timing</h2>
      <p>The time is measured with your browser's high-resolution clock, so it stays accurate even if the display briefly stutters. For a bigger display, press <kbd>F11</kbd> for an <strong>online stopwatch full screen</strong> view. Need to count down instead? Use the <a href="/countdown-timer">Countdown Timer</a> — the <strong>online stopwatch countdown</strong> mode with an alarm and its own full-screen button. Together they make an <strong>online stopwatch timer</strong> set.</p>
      <h2>Sport, study and the classroom</h2>
      <ul>
        <li><strong>online stopwatch for running</strong> — use Lap for each lap of the track or each kilometre.</li>
        <li><strong>online stopwatch race</strong> — time sprints and swimming lengths; laps show who improved.</li>
        <li><strong>online stopwatch for rubik's cube</strong> solves — Space to start and stop, just like a cube timer.</li>
        <li><strong>online stopwatch for chess</strong> — times a whole game or a single move (a two-sided chess clock is a different tool).</li>
        <li><strong>online stopwatch for study</strong> sessions (an <strong>online stopwatch for study free</strong>) — or try the <a href="/pomodoro-timer">Pomodoro Timer</a>.</li>
        <li><strong>online stopwatch for classroom</strong> activities and an <strong>online stopwatch for kids</strong> — simple big numbers anyone can read; for a countdown, the <strong>online timer for kids</strong> is the Countdown Timer.</li>
        <li><strong>online stopwatch game</strong> challenges — try stopping it at exactly 10.00 seconds. (An <strong>online stopwatch for game</strong> nights works too.)</li>
      </ul>
      <p>Looking for the <strong>online stopwatch duck race</strong>, <strong>online stopwatch horse race</strong> or <strong>online stopwatch bomb</strong> timers? Those are themed classroom timers on other sites; this one is a clean, distraction-free stopwatch.</p>`,

  'countdown-timer': `
      <h2>Countdown timer online with alarm</h2>
      <p>Click a preset — 1, 3, 5, 10, 15, 20, 30 or 45 minutes, or 1 hour — or set any hours, minutes and seconds, then press <strong>Start</strong>. A progress bar shows the time left, the browser tab shows the remaining time too, and when it reaches zero an alarm rings until you stop it. It's a <strong>countdown timer online</strong> that's completely <strong>countdown timer free</strong>, with a full-screen button (⛶).</p>
      <h2>Classroom, kids and presentations</h2>
      <ul>
        <li><strong>countdown timer for classroom</strong> activities — go full screen on the projector so the whole class can see it.</li>
        <li><strong>countdown timer for kids</strong> — screen-time limits, tidy-up races and homework blocks.</li>
        <li><strong>countdown timer for powerpoint</strong> talks — keep it full screen on a second display, or switch to it between slides.</li>
      </ul>
      <h2>Streaming, OBS and Discord</h2>
      <p>As a <strong>countdown timer for stream</strong> starts (“starting in 5 minutes”) or a <strong>countdown timer for obs</strong>, add this page as a Window Capture or Browser Source and crop to the timer. For a <strong>countdown timer for discord</strong> event, share your screen — or post a live countdown with the <a href="/discord-timestamp-generator">Discord Timestamp Generator</a>.</p>
      <h2>Phone, desktop and widgets</h2>
      <p>It works in any browser, so it's a <strong>countdown timer for desktop</strong> computers and a <strong>countdown timer for iphone</strong> (a <strong>countdown timer iphone</strong> users can add to the Home Screen) — like a <strong>countdown timer app</strong> or <strong>countdown timer widget</strong> without installing anything. It's the same idea as the <strong>countdown timer google</strong> shows when you search “set timer”, with presets and full screen. Keep the tab open; your device's volume must be up to hear the alarm.</p>
      <h2>Counting down to a date</h2>
      <p>This timer counts down a duration. For a <strong>countdown timer date</strong> — days until a wedding, exam or New Year — use <a href="/date-difference-calculator">Days Between Dates</a>. (Social posts like a <strong>countdown timer for whatsapp</strong> status or <strong>countdown timer for facebook</strong> event usually just share the number of days left.) A simple <strong>countdown timer</strong>.</p>`,

  'pomodoro-timer': `
      <h2>Pomodoro timer online</h2>
      <p>Press <strong>Start</strong> for a 25-minute focus session. When the timer rings, take a 5-minute short break; every 4th break is a 15-minute long break. The <strong>pomodoro timer online</strong> counts your completed sessions, shows the countdown in the browser tab, and can start the next session automatically. Change the focus, short-break and long-break lengths in ⚙️ Settings — they're remembered on this device.</p>
      <h2>Pomodoro timer meaning</h2>
      <p>The <strong>pomodoro timer technique</strong> was created by Francesco Cirillo in the late 1980s. “Pomodoro” is Italian for tomato — he used a tomato-shaped kitchen timer. That's the <strong>pomodoro timer meaning</strong>: short, timed bursts of single-task focus with regular breaks to beat procrastination and fatigue.</p>
      <h2>Studying and ADHD</h2>
      <ul>
        <li><strong>pomodoro timer for studying</strong> — one subject per session; use the break to stand up and stretch, not scroll.</li>
        <li><strong>pomodoro timer for adhd</strong> — many people find shorter sessions (15 minutes work, 5 break) easier to start; set them in Settings.</li>
        <li><strong>pomodoro timer for kids</strong> — try 10–15 minute focus blocks for homework.</li>
      </ul>
      <h2>Mac, Windows and desktop</h2>
      <p>It runs in the browser, so it's a <strong>pomodoro timer for mac</strong> (a <strong>pomodoro timer for macbook</strong>), a <strong>pomodoro timer for windows</strong> and a <strong>pomodoro timer for desktop</strong> without an install — like a <strong>pomodoro timer app</strong>. Keep it in a tab beside your study notes or a <strong>pomodoro timer for notion</strong> workspace, and allow notifications to get a ping when a session ends.</p>
      <h2>YouTube, aesthetic and physical timers</h2>
      <p>A <strong>pomodoro timer youtube</strong> video plays fixed sessions; this one is adjustable and pauses when you need it. If you prefer a <strong>pomodoro timer aesthetic</strong> or <strong>pomodoro timer cute</strong> look, use full-screen with a calm wallpaper. Physical options — a <strong>pomodoro timer cube</strong> you flip, or a classic tomato timer from Amazon — make a nice <strong>pomodoro timer for desk</strong> setup, but this free <strong>pomodoro timer</strong> does the same job.</p>`,

  'time-zone-converter': `
      <h2>Time zone converter with date</h2>
      <p>Pick a date and time and the time zone it's in, and see the same moment in every city on your list — with each place's date, UTC offset and a ☀️/🌙 day-or-night icon. Add any city or time zone from the full world list, remove the ones you don't need, and press <strong>Now</strong> for the current time everywhere. Your list is remembered on this device. Daylight saving time is applied automatically for the date you choose, so this <strong>time zone converter with date</strong> stays correct all year.</p>
      <h2>Example</h2>
      <p>A 9:00 AM meeting in New York is <strong>7:30 PM</strong> in India in winter (EST, UTC−5) but <strong>6:30 PM</strong> in summer (EDT, UTC−4) — because India (UTC+5:30) doesn't use daylight saving. That's why a <strong>time zone converter for india</strong> and a <strong>time zone converter for usa</strong> (Eastern, Central, Mountain, Pacific) need the date.</p>
      <h2>Meetings across countries</h2>
      <p>As a <strong>time zone converter for meetings</strong> (a <strong>time zone converter meeting planner</strong>), add every attendee's city and slide the time until it's daytime ☀️ for everyone — a <strong>time zone converter for multiple countries</strong> at a glance, like a <strong>time zone converter chart</strong>. It's a <strong>time zone calculator for travel</strong> too: check the local time when you land.</p>
      <h2>Forex market hours</h2>
      <p>As a <strong>time zone converter forex</strong> traders use, convert the session opens to your time. In <strong>time zone converter forex market hours</strong> terms (UTC, winter): Sydney about 21:00–06:00, Tokyo 00:00–09:00, London 08:00–17:00, New York 13:00–22:00 — about an hour earlier when daylight saving is on.</p>
      <h2>Discord, Excel and Google</h2>
      <ul>
        <li><strong>time zone converter for discord</strong> (a <strong>time zone converter discord</strong> trick) — the <a href="/discord-timestamp-generator">Discord Timestamp Generator</a> shows a time in each reader's own zone.</li>
        <li><strong>time zone converter for excel</strong> — add the offset as a fraction of a day: <code>=A2+5/24</code>, or <code>=A2+TIME(5,30,0)</code> for +5:30.</li>
        <li>Unlike a quick <strong>time zone converter google</strong> answer, a <strong>time zone converter map</strong> or the <strong>time zone converter classic</strong> pages, this <strong>time zone converter calculator</strong> keeps your own city list and works like a <strong>time zone converter app</strong>.</li>
      </ul>
      <p>A simple <strong>time zone converter</strong>.</p>`,

  'alarm-clock': `
      <h2>Online alarm clock with sound</h2>
      <p>Set an alarm time, give it a label (“Wake up”, “Take medicine”) and pick a sound — <strong>Classic</strong>, <strong>Beep</strong>, <strong>Bell</strong> or <strong>Digital</strong>. Add as many as you like: it's an <strong>online alarm clock multiple alarms</strong> tool, and each one can be switched on or off. When an alarm rings, choose <strong>Stop</strong> or <strong>Snooze 5 min</strong>. Your alarms are saved in this browser, and the page shows a big live clock and today's date. It's an <strong>online alarm clock free</strong> of sign-ups — an <strong>online alarm clock with sound</strong> that keeps ringing until you stop it.</p>
      <h2>Make sure it rings</h2>
      <ul>
        <li>Keep this tab open and your computer awake — the <strong>online alarm clock for computer</strong> rings in your browser, so a sleeping laptop can't ring.</li>
        <li>Turn the volume up. For an <strong>online alarm clock loud</strong> enough — or an <strong>online alarm clock for heavy sleepers</strong> — choose Digital or Beep and use external speakers.</li>
        <li>Allow notifications so you see a pop-up even in another tab.</li>
      </ul>
      <h2>Laptop, PC and classroom</h2>
      <p>It works as an <strong>online alarm clock for laptop</strong> and an <strong>online alarm clock for pc</strong> users at their desk, and an <strong>online alarm clock for students</strong> to mark the end of study blocks. Teachers use it as an <strong>online alarm clock for classroom</strong> and an <strong>online alarm clock for kids</strong> to signal tidy-up time. On a projector, the big clock doubles as an <strong>online digital clock for classroom</strong> and an <strong>online digital clock for exams</strong> — or an <strong>online digital clock for desktop</strong> on a spare screen.</p>
      <h2>Alarm or timer?</h2>
      <p>An alarm rings at a time of day; a timer rings after a duration. For an <strong>online alarm clock timer</strong> (“ring in 20 minutes”), use the <a href="/countdown-timer">Countdown Timer</a>. Like the <strong>online alarm clock - vclock</strong> style sites, it needs no download, and its clean big-number display gives an <strong>online alarm clock aesthetic</strong> on any screen. A simple <strong>online alarm clock</strong>.</p>`,

  'day-of-week-calculator': `
      <h2>Day of the week calculator for any date</h2>
      <p>Enter any date — past or future — to see which weekday it falls on. You also get which one it is in the month (“the third Saturday”), the day of the year, the ISO week number and how many days ago or away it is. It's a <strong>day of the week calculator for any date</strong>, <strong>day of the week calculator free</strong> of sign-ups and works as a <strong>day of the week calculator online</strong> on any device.</p>
      <h2>What day was I born on?</h2>
      <p>This is the <strong>day of the week i was born calculator</strong> — a <strong>what day was i born calculator</strong> that's <strong>what day was i born calculator free</strong> to use. Answering <strong>what day was i born on by date of birth</strong> takes one step: type your birthday — 15 January 2000 was a <strong>Saturday</strong> — and you'll also see the old nursery rhyme for your day (“Saturday's child works hard for a living”). As a <strong>day of week calculator birthday</strong> tool (or <strong>birth day of week calculator</strong>), try your birthday in a future year to see which weekday your next party falls on. It's a <strong>day finder by date of birth</strong>, a <strong>day finder by date</strong> for any event, and a <strong>day in the week calculator</strong> that answers any <strong>day of week calculator from date</strong> question instantly.</p>
      <h2>Famous dates</h2>
      <p>A <strong>historical day of week calculator</strong> makes trivia easy:</p>
      <ul>
        <li><strong>what day of the week was july 4 1776</strong>? A <strong>Thursday</strong>.</li>
        <li><strong>what day of the week was d day</strong> (<strong>what day of the week was june 6 1944</strong>)? A <strong>Tuesday</strong>.</li>
        <li><strong>what day of the week was september 11 2001</strong> (<strong>what day of the week was 9/11</strong>)? Also a <strong>Tuesday</strong>.</li>
        <li>20 July 1969 (the Moon landing) was a Sunday.</li>
        <li><strong>what day of the week is fourth of july 2026</strong>? A Saturday. <strong>what day of the week is halloween 2026</strong>? Also a Saturday. <strong>what day of the week is christmas 2026</strong>? A Friday.</li>
      </ul>
      <h2>Day of the week calculator formula</h2>
      <p>The classic <strong>day of the week calculator formula</strong> is Zeller's congruence: <code>h = (q + ⌊13(m+1)/5⌋ + K + ⌊K/4⌋ + ⌊J/4⌋ + 5J) mod 7</code>, where q is the day, m the month (March = 3 … February = 14 of the previous year), K the year of the century and J the century; h = 0 is Saturday. It's the <strong>day of the week calculator for any date formula</strong> taught in maths classes. It's also the usual <strong>day finder formula</strong>. For mental <strong>day of the week calculator math</strong>, try John Conway's Doomsday rule — 4/4, 6/6, 8/8, 10/10 and 12/12 always fall on the same weekday in any year.</p>
      <h2>In Excel</h2>
      <p>For an <strong>excel day of week calculator</strong> (<strong>what day of the week formula excel</strong>), use <code>=TEXT(A2,"dddd")</code> for the name or <code>=WEEKDAY(A2)</code> for a number (1 = Sunday).</p>
      <h2>Julian calendar and BC dates</h2>
      <p>Dates before 1582 are calculated on the modern Gregorian calendar extended backwards. Historians usually quote older dates on the Julian calendar, so a <strong>day of the week calculator julian calendar</strong> answer can differ — convert the date to Gregorian first. Browser date pickers start at year 1, so a <strong>day of the week calculator bc</strong> date isn't supported.</p>`,

  'character-counter': `
      <h2>Character counter with and without spaces</h2>
      <p>Type or paste your text and this <strong>character counter online</strong> updates instantly: characters <strong>including spaces</strong> and without spaces, words, sentences, paragraphs, reading and speaking time, plus your top keywords. Your text is saved in your browser, so it's still there if you close the tab. It's a <strong>character counter with spaces</strong> and a <strong>character counter including spaces</strong> or not — the <strong>character counter tool</strong> for any <strong>character counter text</strong> check.</p>
      <h2>Character limits for social media and SMS</h2>
      <p>Bars show how close you are to each platform's limit, turning red when you go over — a <strong>character counter for social media</strong> in one view:</p>
      <ul>
        <li><strong>character counter for twitter</strong> / <strong>character counter for x</strong> — 280 characters per post (longer posts need X Premium). X counts each emoji as 2.</li>
        <li><strong>character counter for instagram</strong> — 2,200 characters per caption; only the first ~125 show before “more”.</li>
        <li><strong>character counter for sms</strong> — 160 characters per message (70 if it contains emoji or non-Latin letters).</li>
        <li>Also: SEO meta title (60) and description (160), YouTube title (100), LinkedIn post (3,000) and Facebook's “See more” cut-off (477).</li>
      </ul>
      <h2>Essays and personal statements</h2>
      <p>As a <strong>character counter for essay</strong> limits and a <strong>character counter for personal statement</strong> — the UCAS personal statement allows 4,000 characters including spaces — paste your draft and watch the total. It's a <strong>character counter for words</strong> too, showing the word count beside it, and works as a <strong>character counter for text</strong> messages and forms.</p>
      <h2>In Word, Excel and Grammarly</h2>
      <ul>
        <li><strong>character counter in word</strong> — Review → Word Count shows characters with and without spaces.</li>
        <li><strong>character counter excel</strong> — the <strong>character counter formula excel</strong> is <code>=LEN(A1)</code>; without spaces, <code>=LEN(SUBSTITUTE(A1," ",""))</code>.</li>
        <li><strong>character counter grammarly</strong> — Grammarly shows counts too, but needs an account; this page doesn't.</li>
      </ul>
      <p>Prefer counting words first? Use the <a href="/word-counter">Word Counter</a>. A simple <strong>character counter</strong>.</p>`,

  'case-converter': `
      <h2>Case converter — uppercase, lowercase, title case and more</h2>
      <p>Paste your text and click a button to convert it: <strong>UPPER CASE</strong>, <strong>lower case</strong>, <strong>Title Case</strong>, <strong>Sentence case</strong>, Capitalize Each Word, <strong>camelCase</strong>, PascalCase, <strong>snake_case</strong>, kebab-case, CONSTANT_CASE, aLtErNaTiNg and iNVERSE. Then copy the result. It's a <strong>case converter online</strong> and <strong>case converter free</strong> tool — a <strong>case converter online free</strong> of sign-ups.</p>
      <h2>Uppercase to lowercase and back</h2>
      <p>Accidentally typed with Caps Lock on? This <strong>uppercase to lowercase converter</strong> fixes it in one click — <strong>convert capital letters to lowercase online</strong> or <strong>caps to lowercase online</strong> and back. As a <strong>lowercase to uppercase converter</strong>, <strong>convert text to uppercase online</strong> for headings and labels — <strong>uppercase to lowercase online</strong>, <strong>lowercase to uppercase online</strong>, or simply <strong>convert to uppercase online</strong>.</p>
      <h2>Title case converter (AP and Chicago style)</h2>
      <p>As a <strong>title case converter</strong> and <strong>title case converter online</strong>, it follows the common rule from the <strong>title case converter ap style</strong> guides: short articles, conjunctions and prepositions (a, an, the, and, but, for, of, on, to, by…) stay lowercase unless they're the first word. A <strong>title case converter chicago</strong> style also lowercases longer prepositions like “with” and “between”, so adjust those by hand. To <strong>convert text to title case</strong> or turn <strong>sentence case to title case</strong>, paste and click.</p>
      <p>The <strong>difference between sentence case and title case</strong>: sentence case capitalises only the first word (and names) — “How to write a great headline”; title case capitalises the main words — “How to Write a Great Headline”. This <strong>sentence case converter</strong> (<strong>sentence case converter online</strong>) also fixes a lone “i” to “I”, and the “Capitalize Each Word” button works as a <strong>proper case converter</strong>.</p>
      <h2>In Word, Excel, Google Docs and Python</h2>
      <ul>
        <li><strong>uppercase to lowercase in word</strong> — select the text and press Shift + F3 (the <strong>uppercase to lowercase shortcut</strong>; also the <strong>lowercase to uppercase shortcut</strong>) to cycle cases.</li>
        <li><strong>uppercase to lowercase in excel</strong> / <strong>lowercase to uppercase in excel</strong> — the <strong>uppercase to lowercase formula excel</strong> is <code>=LOWER(A1)</code>; to <strong>convert to uppercase in excel</strong>, <code>=UPPER(A1)</code>; proper case, <code>=PROPER(A1)</code>.</li>
        <li><strong>uppercase to lowercase in google docs</strong> — Format → Text → Capitalisation.</li>
        <li><strong>uppercase to lowercase python</strong> — <code>s.lower()</code>, <code>s.upper()</code>, <code>s.title()</code>.</li>
      </ul>
      <p>A simple <strong>case converter</strong> for both <strong>uppercase to lowercase</strong> and <strong>lowercase to uppercase</strong> — or anything to <strong>convert to uppercase</strong>.</p>`,

  'lorem-ipsum-generator': `
      <h2>Lorem ipsum generator — paragraphs, sentences, words or lists</h2>
      <p>Choose what to generate — <strong>paragraphs</strong>, <strong>sentences</strong>, <strong>words</strong> or <strong>list items</strong> — and how many (up to 500). Tick “Start with Lorem ipsum dolor sit amet…” for the classic opening, and “Wrap in HTML tags” to get <code>&lt;p&gt;</code> paragraphs or a <code>&lt;ul&gt;</code> list. The word and character count is shown under the result. It's a <strong>lorem ipsum generator free</strong> to use for any mock-up.</p>
      <h2>For web designers, Figma and HTML</h2>
      <ul>
        <li><strong>lorem ipsum generator for web designers</strong> — the <strong>lorem ipsum generator for html</strong> option wraps everything in tags, ready to paste into your page.</li>
        <li><strong>lorem ipsum generator for figma</strong> (or <strong>lorem ipsum generator figma</strong> mock-ups) — generate a few sentences, copy, and paste into a text layer.</li>
        <li><strong>lorem ipsum generator for typographers</strong> — paragraphs of varied sentence length show how a <strong>lorem ipsum generator font</strong> test really sets.</li>
        <li><strong>lorem ipsum generator with headings</strong> — generate paragraphs, then add your own <code>&lt;h2&gt;</code> headings between them.</li>
      </ul>
      <h2>By word or character count</h2>
      <p>As a <strong>lorem ipsum generator word</strong> tool, choose Words and enter the exact number. For a <strong>lorem ipsum generator by character count</strong> (a <strong>lorem ipsum generator characters</strong> or <strong>lorem ipsum generator by character</strong> limit), generate a few more words than you need, check the character count shown, and trim — roughly 6 characters per word, including the space.</p>
      <h2>In Word and PowerPoint</h2>
      <p>The <strong>lorem ipsum generator for word</strong> built into Microsoft Word is a formula: type <code>=lorem(3,5)</code> and press Enter for 3 paragraphs of 5 sentences. That <strong>lorem ipsum generator formula</strong> also works <strong>lorem ipsum generator in powerpoint</strong> text boxes. This page gives more control, plus HTML.</p>
      <h2>Where does lorem ipsum come from?</h2>
      <p>It's scrambled Latin from Cicero's <em>De finibus bonorum et malorum</em> (45 BC), used by printers since the 1500s because it looks like real text without distracting readers. Want a <strong>lorem ipsum generator funny</strong> or <strong>lorem ipsum generator fun</strong> version (bacon, cat or pirate ipsum)? This one sticks to the classic <strong>lorem ipsum generator text</strong>, which clients won't misread. A simple <strong>lorem ipsum generator</strong>.</p>`,

  'text-compare': `
      <h2>Text compare — find the differences</h2>
      <p>Paste the original text on the left and the changed text on the right, then click <strong>Compare</strong>. Every line is lined up: removed lines turn red, added lines green, and changed lines yellow with the exact <strong>words</strong> that changed highlighted. A summary counts the added, removed and modified lines. Options let you ignore case and extra spaces. It's a <strong>text compare online</strong> tool — <strong>text compare online free</strong> and private, because nothing is uploaded.</p>
      <h2>For code, documents and contracts</h2>
      <ul>
        <li><strong>text compare for code</strong> — compare two versions of a config file, script or JSON (format JSON first with the <a href="/json-formatter">JSON Formatter</a> so lines match up).</li>
        <li><strong>text compare for differences</strong> between two drafts of an essay, contract or policy — see exactly which words an editor changed.</li>
        <li><strong>text compare for large files</strong> — it handles a few thousand lines in the browser; split very long files into sections.</li>
      </ul>
      <h2>Similarity and plagiarism</h2>
      <p>To <strong>compare text for similarity</strong>, paste both and look at how many lines are unchanged. It isn't a <strong>text compare for plagiarism</strong> checker that searches the web — it compares exactly the two texts you give it.</p>
      <h2>Instagram followers</h2>
      <p>Comparing two lists of followers? A <strong>text compare for instagram followers</strong> (or <strong>text compare for instagram</strong>) check works with the lists one name per line — but the <a href="/instagram-unfollowers-tracker">Instagram Unfollowers Tracker</a> reads your official Instagram data export and shows who doesn't follow you back automatically.</p>
      <h2>Windows, Mac, Notepad++ and VS Code</h2>
      <p>It runs in any browser, so it's a <strong>text compare tool for windows</strong> (a <strong>text compare for windows</strong>) and a <strong>text compare for mac</strong> with nothing to install — a <strong>text compare for free</strong> alternative to desktop apps. If you prefer an editor:</p>
      <ul>
        <li><strong>text compare in notepad++</strong> — install the “Compare” plugin from Plugins Admin.</li>
        <li><strong>text compare in vs code</strong> — select two files in Explorer, right-click and choose “Compare Selected”.</li>
        <li><strong>text compare excel</strong> — <code>=EXACT(A1,B1)</code> tells you whether two cells match exactly.</li>
      </ul>
      <p>A simple <strong>text compare tool online</strong> and <strong>text compare website</strong> — the quick <strong>text compare tool</strong> for any <strong>text compare</strong>.</p>`,

  'remove-duplicate-lines': `
      <h2>Remove duplicate lines online</h2>
      <p>Paste a list and this tool will <strong>remove duplicate lines</strong> instantly, keeping the first copy of each line in its original order. Options: <strong>Ignore case</strong> (so “Apple” and “apple” count as the same), <strong>Trim spaces</strong>, <strong>Remove empty lines</strong> and <strong>Sort A → Z</strong>. You'll see how many lines were removed. It's the quick way to <strong>remove duplicate lines online</strong> — <strong>remove duplicate lines of text</strong> such as emails, keywords, URLs or names.</p>
      <h2>From a text file</h2>
      <p>To <strong>remove duplicate lines from text file</strong> data (<strong>remove duplicate lines in text file</strong>), open the file, copy everything, paste it here, then copy the result back. Nothing is uploaded.</p>
      <h2>In Excel, Notepad++, VS Code and Sublime Text</h2>
      <ul>
        <li><strong>remove duplicate lines in excel</strong> — Data → Remove Duplicates.</li>
        <li><strong>remove duplicate lines in notepad++</strong> (or <strong>remove duplicate lines in notepad ++</strong>) — Edit → Line Operations → Remove Duplicate Lines.</li>
        <li><strong>remove duplicate lines in vscode</strong> — run “Delete Duplicate Lines” from the Command Palette (Ctrl + Shift + P).</li>
        <li><strong>remove duplicate lines in sublime text</strong> — Edit → Permute Lines → Unique.</li>
        <li><strong>remove duplicate lines in vim</strong> — <code>:sort u</code> (this also sorts the lines).</li>
      </ul>
      <h2>On Linux and in Bash</h2>
      <p>To <strong>remove duplicate lines linux</strong> style (<strong>remove duplicate lines in linux</strong>), <code>sort -u file.txt</code> removes duplicates but changes the order. To <strong>remove duplicate lines from file linux</strong> while keeping the order — the classic <strong>remove duplicate lines bash</strong> one-liner — use <code>awk '!seen[$0]++' file.txt</code>, the same thing this page does to <strong>remove duplicate lines in file linux</strong> users have.</p>
      <h2>AutoCAD and Illustrator</h2>
      <p>For drawings, these are different “lines”: to <strong>remove duplicate lines in autocad</strong> (<strong>remove duplicate lines autocad</strong>), use the <code>OVERKILL</code> command, which deletes overlapping geometry. To <strong>remove duplicate lines in illustrator</strong>, select the overlapping paths and delete or merge them with Pathfinder. This page is for text. A simple way to <strong>remove duplicate lines</strong>.</p>`,

  'sort-lines': `
      <h2>Sort text lines alphabetically</h2>
      <p>Paste a list — one item per line — and choose how to <strong>sort text lines</strong>: <strong>alphabetical A → Z</strong> or Z → A, <strong>numbers ascending</strong> or descending, <strong>shortest first</strong> or longest first (to <strong>sort text lines by length</strong>), <strong>reverse order</strong>, or <strong>shuffle</strong> randomly (to <strong>sort text lines random</strong>). Options: <strong>Natural sort</strong> (so “Apple 2” comes before “Apple 10”), ignore case and remove empty lines. It's the easiest way to <strong>sort text lines alphabetically online</strong> — or <strong>sort lines alphabetically online</strong> — and <strong>alphabetize list online</strong>.</p>
      <h2>Alphabetical order generator</h2>
      <p>Use it as an <strong>alphabetical order generator</strong> (an <strong>alphabetical order generator a to z</strong>) for names, words or titles — an <strong>alphabetize list generator</strong> that will <strong>alphabetize list for me</strong> in one click. Need to <strong>sort words alphabetically online</strong> on a single line? Put each word on its own line first.</p>
      <ul>
        <li><strong>alphabetical order generator names</strong> — to <strong>alphabetize list by last name</strong>, write names as “Last, First” before sorting.</li>
        <li><strong>alphabetical order generator for references</strong> and an <strong>alphabetical order generator for bibliography</strong> — APA and MLA reference lists are sorted by the first author's surname, so paste one reference per line and sort A → Z.</li>
      </ul>
      <h2>In Word, Excel, Google Docs and editors</h2>
      <ul>
        <li><strong>sort lines alphabetically in word</strong> / <strong>alphabetize list in word</strong> — Home → Sort (A→Z).</li>
        <li><strong>alphabetize list in excel</strong> — Data → Sort A to Z.</li>
        <li><strong>alphabetize list in google docs</strong> / <strong>sort lines alphabetically google docs</strong> — Docs has no built-in sort; paste the list here, sort, and paste it back.</li>
        <li><strong>sort lines alphabetically notepad ++</strong> — Edit → Line Operations → Sort Lines Lexicographically Ascending.</li>
        <li><strong>sort lines alphabetically vscode</strong> — Command Palette → “Sort Lines Ascending”.</li>
        <li><strong>sublime text sort lines</strong> — Edit → Sort Lines (F9) is the <strong>sublime text sort lines alphabetically</strong> command.</li>
        <li><strong>sort lines alphabetically linux</strong> — <code>sort file.txt</code> (to <strong>sort text file lines alphabetically</strong>); add <code>-V</code> for natural order.</li>
      </ul>
      <p>Faster than <strong>sort text lines codebeautify</strong>-style pages and fully private — the simple way to <strong>sort lines alphabetically</strong>, <strong>sort alphabetically online</strong>, <strong>sort list online</strong> (or <strong>sort list alphabetically online</strong>) and <strong>alphabetize list</strong> items.</p>`,

  'reverse-text': `
      <h2>Reverse text generator</h2>
      <p>Type or paste your text and choose: <strong>Reverse text</strong> (write it backwards — “hello” → “olleh”), <strong>Reverse each word</strong> (keeping word order), <strong>Reverse word order</strong> (“one two three” → “three two one”) or <strong>Reverse line order</strong>. Emoji and accented letters stay intact. It's a <strong>reverse text generator</strong> and <strong>reverse text converter</strong> — a <strong>reverse text online</strong> tool — so you can <strong>reverse text copy and paste</strong> into any app.</p>
      <h2>Hebrew and Arabic text</h2>
      <p>Right-to-left text sometimes appears backwards when pasted into apps or design tools that don't support RTL. A <strong>text reverse for hebrew</strong> (or Arabic) fixes it: reverse the text, then paste. (A <strong>reverse text translator</strong> doesn't translate languages — it only flips the order.)</p>
      <h2>Mirror text for printing, cameras and teleprompters</h2>
      <p>Backwards letters aren't the same as a mirror image. For <strong>mirror text for printing</strong> on iron-on transfers — or <strong>reverse text for printing</strong> — make an image of your text and flip it horizontally with <a href="/rotate-image">Rotate &amp; Flip Image</a>. The same goes for <strong>mirror text for teleprompter</strong> glass and <strong>reverse text for camera</strong> signs that look right in a selfie video.</p>
      <h2>In Word, Excel, Photoshop and CapCut</h2>
      <ul>
        <li><strong>reverse text in word</strong> — to mirror a text box, use Format Shape → 3-D Rotation → X Rotation 180°.</li>
        <li><strong>reverse text formula in excel</strong> (Excel 365) — <code>=TEXTJOIN("",TRUE,MID(A1,SEQUENCE(LEN(A1),,LEN(A1),-1),1))</code>.</li>
        <li><strong>reverse text for photoshop</strong> — Edit → Transform → Flip Horizontal mirrors a text layer.</li>
        <li><strong>reverse text for capcut</strong> — paste backwards text from here into a text layer, or mirror the clip in the editor.</li>
      </ul>
      <p>Fun uses: secret messages, puzzles and a <strong>reverse text font</strong> look for usernames — <strong>reverse letters for casting</strong> calls and drama games, too. Just type and click: this <strong>reverse text</strong> page will <strong>reverse text for me</strong> instantly.</p>`,

  'fancy-text-generator': `
      <h2>Fancy text generator — copy and paste</h2>
      <p>Type your text and see it in 30+ styles at once: <strong>bold</strong>, <em>italic</em>, <strong>cursive</strong> script, gothic (Fraktur), double-struck, monospace, circled, squared, small caps, superscript, upside down, strikethrough, underline, and decorated styles like sparkles ✨, hearts ♡ and wings ꧁༺ ༻꧂. Click any style to copy it. It's a <strong>fancy text generator copy and paste</strong> tool — a <strong>fancy text generator font</strong> set that works where you can't change the font.</p>
      <h2>How it works</h2>
      <p>These aren't real fonts. Each letter is swapped for a look-alike Unicode character (such as the mathematical bold 𝐀), so the style stays when you paste it. That's why the <strong>fancy text generator cursive</strong> and <strong>fancy text generator symbols</strong> styles work almost everywhere. Two cautions: screen readers may read these letters oddly, and search engines may not match them, so keep important words in plain text.</p>
      <h2>For Instagram, TikTok, Facebook and WhatsApp</h2>
      <ul>
        <li><strong>fancy text generator for instagram</strong> bios, names and captions.</li>
        <li><strong>fancy text generator for tiktok</strong> bios and comments.</li>
        <li><strong>fancy text generator for facebook</strong> posts and <strong>fancy text generator for whatsapp</strong> statuses and group names.</li>
      </ul>
      <h2>For Discord and games</h2>
      <p>As a <strong>fancy text generator for discord</strong> (or <strong>fancy text generator discord</strong>) nickname and channel tool, most styles work. Games are stricter: a <strong>fancy text generator for roblox</strong> name won't pass Roblox's filter, and names for a <strong>fancy text generator for fortnite</strong>, <strong>fancy text generator for bgmi</strong>, <strong>fancy text generator for mlbb</strong> or <strong>fancy text generator for codm</strong> profile may be rejected or shown as boxes. Each game has its own rules, so try a style and pick another if it's refused. For a blank-looking name, see <a href="/invisible-character">Invisible Character</a>.</p>
      <h2>Colours</h2>
      <p>Plain text can't carry colour, so a <strong>fancy text generator color</strong> isn't possible in bios — but on Discord, coloured text works in <code>ansi</code> code blocks. A simple <strong>fancy text generator</strong>.</p>`,

  'remove-line-breaks': `
      <h2>Remove line breaks from text</h2>
      <p>Text copied from a PDF or email often breaks in the middle of sentences. Paste it here to <strong>remove line breaks from text</strong> online. Choose <strong>Remove, but keep paragraphs</strong> (the usual choice), <strong>Remove all</strong> line breaks, or <strong>Replace with comma</strong> to turn a column of items into a comma-separated list. Options also <strong>join hyphenated words</strong> split across lines (“sen-<br>tences” → “sentences”) and remove extra spaces. It's the fastest way to <strong>remove line breaks online</strong> — <strong>remove line breaks from text online</strong> without uploading anything.</p>
      <h2>From a text file</h2>
      <p>To <strong>remove line breaks from text file</strong> content, open the file, copy everything, paste it here and copy the clean result back.</p>
      <h2>In Word</h2>
      <p>To <strong>remove line breaks in word</strong> (<strong>remove line breaks in word document</strong> files), use <strong>remove line breaks in word find and replace</strong>: press Ctrl + H, search for <code>^p</code> (paragraph mark) or <code>^l</code> (manual line break) and replace with a space. Careful — <code>^p</code> also removes your real paragraph breaks, which is why “keep paragraphs” here is easier.</p>
      <h2>In Excel</h2>
      <ul>
        <li><strong>remove line breaks in excel</strong> — Ctrl + H, click in “Find what” and press Ctrl + J (an invisible line break), then replace with a space.</li>
        <li><strong>remove line breaks in excel formula</strong> — the <strong>remove line break formula excel</strong> users need is <code>=SUBSTITUTE(A1,CHAR(10)," ")</code>, or <code>=CLEAN(A1)</code> to strip them entirely — the way to <strong>remove line breaks in excel cell</strong> text and <strong>remove line breaks from excel cells</strong> in bulk.</li>
      </ul>
      <h2>In Google Docs and Notepad++</h2>
      <ul>
        <li><strong>remove line breaks in google docs</strong> — paste the text here first, then paste the clean version into Docs.</li>
        <li><strong>remove line breaks notepad++</strong> (or <strong>remove line breaks in notepad ++</strong>) — select the lines and press Ctrl + J (Join Lines), or use Ctrl + H in Extended mode to replace <code>\r\n</code> with a space.</li>
      </ul>
      <p>A simple way to <strong>remove line breaks</strong>.</p>`,

  'find-and-replace': `
      <h2>Find and replace text online</h2>
      <p>Paste your text, type what to <strong>Find</strong> and what to <strong>Replace with</strong>, and every match is replaced at once — with a count of how many replacements were made. Options: <strong>Match case</strong>, <strong>Whole words only</strong> (so “cat” doesn't change “category”) and <strong>Regular expression</strong> for advanced patterns, with <code>$1</code> to reuse captured groups. It's a <strong>find and replace text online</strong> tool — a <strong>find and replace for text</strong> editing that's fully private.</p>
      <h2>Regular expression examples</h2>
      <ul>
        <li>Find <code>\s+</code> → replace with one space: collapses repeated spaces.</li>
        <li>Find <code>(\w+)@example\.com</code> → <code>$1@newdomain.com</code>: change an email domain.</li>
        <li>Find <code>(\d{2})/(\d{2})/(\d{4})</code> → <code>$3-$2-$1</code>: turn 21/10/2026 into 2026-10-21.</li>
      </ul>
      <h2>Find and replace for text editing in apps</h2>
      <ul>
        <li><strong>find and replace text in word</strong> and <strong>find and replace text in excel</strong> — Ctrl + H.</li>
        <li><strong>find and replace text in autocad</strong> — the <code>FIND</code> command.</li>
        <li><strong>find and replace text in indesign</strong> — Edit → Find/Change.</li>
        <li><strong>find and replace text in illustrator</strong> — Edit → Find and Replace.</li>
        <li><strong>find and replace text in revit</strong> — Annotate → Find/Replace.</li>
        <li><strong>find and replace text in bluebeam</strong> — Bluebeam Revu's search and edit-text tools (in the editions that include them).</li>
      </ul>
      <h2>In a PDF</h2>
      <p>To <strong>find and replace text in pdf</strong> files — a <strong>find and replace text in pdf online</strong> (or <strong>find and replace text in pdf online free</strong>) job — extract the text with <a href="/pdf-to-text">PDF to Text</a> or convert it with <a href="/pdf-to-word">PDF to Word</a>, make your replacements here or in Word, then save it as a PDF again.</p>
      <h2>Without an extension</h2>
      <p>No need for a <strong>find and replace for text editing chrome extension</strong> (or <strong>find and replace for text editing extension</strong>) with page permissions — for <strong>find and replace for text editing</strong> on a web form, paste the text here, replace, and paste it back. A simple <strong>find and replace text</strong> tool.</p>`,

  'keyword-density-checker': `
      <h2>Free keyword density checker</h2>
      <p>Paste your article or page text and this <strong>free keyword density checker</strong> lists your most-used <strong>single words</strong>, <strong>2-word phrases</strong> and <strong>3-word phrases</strong>, each with its count and density, plus the total and unique word count. Tick “Ignore common words” to hide words like “the” and “and”, and set a minimum word length. It's a <strong>keyword density checker online</strong> — a <strong>free keyword density analyzer</strong> and <strong>free keyword density tool</strong> with no sign-up (a <strong>keyword density checker free tool</strong>).</p>
      <h2>What is keyword density?</h2>
      <p><strong>what is keyword density</strong>? It's the share of your words taken up by a keyword or phrase — the <strong>keyword density meaning</strong> in one line. The <strong>keyword density formula</strong> (or <strong>keyword density checker formula</strong>) is count ÷ total words × 100. So for <strong>keyword density in 1000 words</strong>, a phrase used 10 times is a 1% <strong>keyword density percentage</strong>.</p>
      <h2>Best keyword density for SEO</h2>
      <p>There's no magic number. Google has said it doesn't use a target density, and repeating a keyword unnaturally is “keyword stuffing”, which breaks its spam policies. As a guide to <strong>keyword density for seo</strong>, most well-written pages land around 0.5–2% for their main phrase. The <strong>best keyword density for seo</strong> is the one that reads naturally — use related words and answer the reader's questions. That's how <strong>keyword density in seo</strong> is best treated: a check for overuse, not a goal.</p>
      <h2>How to check keyword density</h2>
      <p><strong>how to check keyword density</strong>: paste your text, look at the top 1-, 2- and 3-word lists, and make sure your main topic appears — but nothing is suspiciously high. For a <strong>keyword density in blog</strong> post, check your draft before publishing.</p>
      <h2>Compared with other tools</h2>
      <p>It works like the <strong>keyword density checker small seo tools</strong>, <strong>keyword density checker seo review tools</strong> or <strong>keyword density checker ahrefs</strong> pages, without ads or a <strong>keyword density checker extension</strong> (or <strong>keyword density checker chrome extension</strong>) to install. There's no <strong>keyword density checker google</strong> tool, so paste your text here — your content never leaves the browser. A simple <strong>keyword density checker</strong> (a <strong>keyword density checker free</strong> tool).</p>`,

  'morse-code-translator': `
      <h2>Morse code translator — text to Morse and back</h2>
      <p>Type text to get Morse code, or paste dots and dashes to get text — the direction is detected automatically. Letters are separated by spaces and words by <code>/</code>. Press <strong>🔊 Play Morse</strong> to hear it as beeps and set the speed from 5 to 35 words per minute — a <strong>morse code translator audio</strong> player built in. Example: SOS = <code>... --- ...</code>.</p>
      <h2>Morse code to text and English</h2>
      <p>As a <strong>morse code translator morse code to text</strong> (<strong>morse code translator to english</strong>) tool, paste the code using dots (.) and dashes (-); “·” and “−” work too. Unknown codes show as �, so you can spot typos.</p>
      <h2>Numbers</h2>
      <p>As a <strong>morse code translator numbers</strong> (or <strong>morse code translator for numbers</strong>) chart: 1 = <code>.----</code>, 2 = <code>..---</code>, 3 = <code>...--</code>, 4 = <code>....-</code>, 5 = <code>.....</code>, 6 = <code>-....</code>, 7 = <code>--...</code>, 8 = <code>---..</code>, 9 = <code>----.</code>, 0 = <code>-----</code>. Punctuation such as . , ? ! / @ is supported too.</p>
      <h2>Audio, images, video and light</h2>
      <p>This tool translates text you type. For a <strong>morse code translator for audio</strong> clip, a <strong>morse code translator for videos</strong> (a <strong>morse code translator video</strong>), a <strong>morse code translator for images</strong> (a <strong>morse code translator image</strong> or <strong>morse code translator picture</strong>) or a <strong>morse code translator for light</strong> signals, write down the short (dot) and long (dash) signals and paste them here — a dash lasts three times as long as a dot, and gaps separate letters and words.</p>
      <h2>Games, kids and ham radio</h2>
      <ul>
        <li>Game puzzles — a <strong>morse code translator dayz</strong> clue or a <strong>morse code translator for battlefield 1</strong> easter egg: type the dots and dashes you find.</li>
        <li><strong>morse code translator for kids</strong> — write secret messages and play them aloud; slower speeds are easier to learn.</li>
        <li><strong>morse code translator for ham radio</strong> practice — listen at 15–20 wpm and copy what you hear. (Looking for a <strong>morse code translator for sale</strong>? Practice here for free first.)</li>
      </ul>
      <p>Like the <strong>morse code translator google</strong> Gboard keyboard, but on any device — a simple <strong>morse code translator</strong>.</p>`,

  'binary-translator': `
      <h2>Binary translator — text to binary and back</h2>
      <p>Type text and click <strong>Text → Binary</strong> to get each character as 8-bit binary, or paste binary and click <strong>Binary → Text</strong> to decode it. You can also convert text to and from <strong>hex</strong> and <strong>decimal</strong> codes. Text is encoded as UTF-8, so accented letters and emoji work too. It's a <strong>binary translator to text</strong> and back.</p>
      <h2>Example</h2>
      <p>“Hello” in binary is <code>01001000 01100101 01101100 01101100 01101111</code> — H = 72, e = 101, l = 108, o = 111 in decimal. That's how a <strong>binary translator to english</strong> (a <strong>binary translator to words</strong> tool) works: every 8 bits is one byte, and each byte is a letter's code. For plain English that's the same as a <strong>binary translator to ascii</strong>.</p>
      <h2>Binary numbers and decimal</h2>
      <p>This page translates text. A <strong>binary translator to numbers</strong>, a <strong>binary translator to decimal</strong> or a <strong>binary translator for numbers</strong> (a <strong>binary code translator for numbers</strong>) is a different job: use the <a href="/number-base-converter">Number Base Converter</a>. For example, <strong>binary translator 101</strong>: 101 in binary = 1×4 + 0×2 + 1×1 = <strong>5</strong>.</p>
      <h2>IP addresses</h2>
      <p>As a <strong>binary converter for ip address</strong> octets, convert each part of the address separately in the Number Base Converter: 192 = 11000000, 168 = 10101000, so 192.168.1.1 = 11000000.10101000.00000001.00000001.</p>
      <h2>Pictures and camera</h2>
      <p>There's no <strong>binary translator from image</strong> (or <strong>binary translator picture</strong>) reader here: copy the 0s and 1s from the picture (phone text recognition — a <strong>binary translator camera</strong> or <strong>binary translator with camera</strong> trick — works well), then paste. Unlike a <strong>binary translator to english google translate</strong> search, this decodes it properly. A simple <strong>binary translator</strong>.</p>`,

  'text-repeater': `
      <h2>Text repeater — repeat text 100 or 1000 times</h2>
      <p>Type a word, emoji or message, choose how many times to repeat it, and pick a separator: <strong>new line</strong>, <strong>space</strong>, <strong>comma</strong>, <strong>none</strong> or a <strong>custom</strong> separator. Tick <strong>Number each line</strong> to add 1., 2., 3. Then copy the result. A <strong>text repeater 100 times</strong> or <strong>text repeater 1000 times</strong> job takes a second — it's a <strong>text repeater online</strong> and <strong>text repeater generator</strong> that lets you <strong>text repeater copy and paste</strong> anywhere.</p>
      <h2>For WhatsApp, Instagram and Snapchat</h2>
      <ul>
        <li><strong>text repeater for whatsapp</strong> (a <strong>text repeater whatsapp</strong> trick) — repeat a “Happy birthday 🎉” or a row of hearts, then paste it into the chat. It's a <strong>text repeater for whatsapp messages and social posts</strong>, with no <strong>text repeater for whatsapp apk</strong> to install.</li>
        <li><strong>text repeater for instagram</strong> (a <strong>text repeater for instagram free</strong>) — fun comments, captions and emoji lines.</li>
        <li><strong>text repeater for snapchat</strong> and a <strong>text repeater for youtube</strong> comment — paste the result.</li>
      </ul>
      <p>Please use it for fun, not to spam people — apps may limit or block very long or repeated messages.</p>
      <h2>Practical uses</h2>
      <ul>
        <li>Testing forms and layouts with long input.</li>
        <li>Making numbered lists or templates (with Number each line).</li>
        <li>Writing lines, worksheets and handwriting practice sheets.</li>
      </ul>
      <p>The output is capped at about 5 million characters so your browser stays responsive. It works in any browser — no <strong>text repeater app</strong> needed. A simple <strong>text repeater</strong>.</p>`,

  'online-notepad': `
      <h2>Free online notepad that saves automatically</h2>
      <p>Start typing — this <strong>online notepad</strong> saves every change automatically in your browser, so your notes are still here when you come back. Create as many notes as you like with <strong>+ New note</strong>, switch between them in the list, and <strong>download</strong> any note as a .txt file or copy it. A live word count shows as you type. It's an <strong>online notepad free</strong> of accounts and ads — the <strong>online notepad that saves</strong> without a sign-in, and an <strong>online notepad for free</strong> forever.</p>
      <h2>Private by design</h2>
      <p>Your notes are stored only in this browser on this device — never on our servers. That also means clearing your browser data deletes them, and they don't sync between devices, so download anything important.</p>
      <h2>For writing, typing and kids</h2>
      <ul>
        <li><strong>online notepad for writing</strong> drafts, to-do lists and ideas — a distraction-free <strong>online notepad editor</strong>.</li>
        <li><strong>online notepad for typing</strong> practice — try the <a href="/typing-speed-test">Typing Speed Test</a> too.</li>
        <li><strong>online notepad for kids</strong> — simple, no sign-up and nothing to install.</li>
        <li><strong>online notepad dark mode</strong> — the site follows your device's dark-mode setting.</li>
      </ul>
      <h2>For HTML and coding</h2>
      <p>As an <strong>online notepad for coding</strong> or an <strong>online notepad for html</strong> (<strong>online notepad for html coding</strong>), it keeps snippets safe in plain text; download as .txt and rename to .html. It doesn't run or highlight code.</p>
      <h2>Sharing, drawing and pens</h2>
      <p>There's no share link — for an <strong>online notepad share</strong> (or <strong>online notepad for sharing</strong>), copy the text or download the file and send it. It's for typed text, so an <strong>online notepad drawing</strong> pad, an <strong>online notepad for drawing</strong> or an <strong>online notepad with pen</strong> input isn't supported. Bookmark the page and it works like an <strong>online notepad app</strong> on any device.</p>`,

  'words-to-minutes': `
      <h2>Words to minutes converter for speeches</h2>
      <p>Enter your word count — or paste your speech to count it automatically — and choose a speaking pace: <strong>slow</strong> (100 words per minute), <strong>average</strong> (130 wpm), <strong>fast</strong> (160 wpm) or a custom pace. You'll see how long the speech will take, plus the silent reading time (at about 238 wpm). Switch to <strong>Minutes → words</strong> to find how many words you need for a set time. It's a <strong>words to minutes converter</strong>, a <strong>words to minutes calculator</strong> and a <strong>speech time calculator</strong> — the <strong>speech time calculator words to minutes converter</strong> for any talk.</p>
      <h2>How long is a 1000 word speech?</h2>
      <p><strong>how long is a 1000 word speech</strong>? At an average 130 wpm, about <strong>7 minutes 42 seconds</strong> — between 6¼ minutes (fast) and 10 minutes (slow). <strong>how many minutes is a 1000 word speech</strong> to read silently? About 4 minutes. And <strong>how long is a 700 word speech</strong>? About 5 minutes 23 seconds.</p>
      <h2>How many words is a 5 minute speech?</h2>
      <p><strong>how many words is a 5 minute speech</strong>? About <strong>650 words</strong> at an average pace (500–800 depending on speed). Likewise, <strong>how many words for a 5 minute presentation</strong>: 650; <strong>how many words for a 10 minute speech</strong>: about 1,300. For <strong>how many words in a 5 minute speech toastmasters</strong> clubs expect: a 5–7 minute speech is roughly 650–900 words.</p>
      <h2>Words per minute speech averages</h2>
      <p>The <strong>words per minute speech average</strong> is 120–150 for presentations and up to 160 in conversation. The <strong>average words per minute for speech</strong> making is lower when you pause for effect — a good thing. As <strong>words per minute for presentation</strong> advice, aim for 120–140, and practise out loud with a timer: your real pace is the best number to enter here. Silent reading is faster, so a <strong>words to minutes reading time</strong> estimate is shown separately.</p>
      <p>This <strong>words to minutes speech calculator</strong> (a <strong>words to minutes speech</strong> and <strong>words per minute speech</strong> tool) also works as a <strong>speaking time calculator</strong> — a <strong>speaking time calculator from text</strong> when you paste a script — and a <strong>speech time estimator</strong> (<strong>speech time calculator free</strong>). A simple <strong>words to minutes</strong> converter.</p>`,
};

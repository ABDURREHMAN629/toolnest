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

  'base64-encode-decode': `
      <h2>Base64 encode decode online</h2>
      <p>Paste text and click <strong>Encode to Base64</strong>, or paste Base64 and click <strong>Decode from Base64</strong>. Text is handled as UTF-8, so accents, Arabic, Urdu and emoji survive the round trip. Tick <strong>URL-safe Base64</strong> to use <code>-</code> and <code>_</code> instead of <code>+</code> and <code>/</code> (as JWTs and URLs need). You can also drop any file to get it as a Base64 data URL. It's a <strong>base64 encode decode online</strong> tool — <strong>base64 encode to decode online</strong> in one place.</p>
      <h2>Example</h2>
      <p>“Hello” → <code>SGVsbG8=</code>. Base64 turns every 3 bytes into 4 characters, so encoded data is about 33% larger. It's an encoding, not encryption — anyone can decode it, and a <strong>base64 encode decode with key</strong> doesn't exist; use real encryption for secrets.</p>
      <h2>In code and on the command line</h2>
      <ul>
        <li><strong>base64 encode decode python</strong> (<strong>base64 encode decode in python</strong>) — <code>base64.b64encode(s.encode()).decode()</code> and <code>base64.b64decode(b).decode()</code>.</li>
        <li><strong>base64 encode decode javascript</strong> (<strong>base64 encode decode in javascript</strong>) — <code>btoa()</code> / <code>atob()</code> only handle Latin-1, so encode UTF-8 with <code>TextEncoder</code> first; in Node, <code>Buffer.from(s).toString('base64')</code>.</li>
        <li><strong>base64 encode decode java</strong> (<strong>base64 encode decode in java 8</strong> and later) — <code>Base64.getEncoder().encodeToString(bytes)</code> and <code>Base64.getDecoder().decode(s)</code>; the same in any <strong>base64 encode decode in java</strong> project.</li>
        <li><strong>base64 encode decode php</strong> (<strong>base64 encode and decode in php</strong>) — <code>base64_encode()</code> and <code>base64_decode()</code>.</li>
        <li><strong>base64 encode decode linux</strong> / <strong>base64 encode decode command line</strong> — <code>base64 file.txt</code> to encode, <code>base64 -d</code> to decode (a <strong>base64 encode decode command</strong> built into Linux and macOS).</li>
        <li><strong>base64 encode decode c++</strong> and <strong>base64 encode decode in c</strong> — there's no standard function; use a library such as OpenSSL's <code>EVP_EncodeBlock</code>.</li>
        <li><strong>base64 encode decode in notepad ++</strong> — Plugins → MIME Tools → Base64 Encode / Decode.</li>
      </ul>
      <p>A simple <strong>base64 encode decode</strong> tool.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'url-encode-decode': `
      <h2>URL encoder and decoder online</h2>
      <p>Paste text or a link and choose <strong>Encode (component)</strong> for a single value such as a search term or parameter, <strong>Encode full URL</strong> to keep <code>:/?&amp;=</code> intact, or <strong>Decode</strong> to turn <code>%20</code>-style codes back into text (a <code>+</code> is read as a space too). Paste a full URL and you'll also see its parts — protocol, host, path, query and hash — and every query parameter in a table. It's a <strong>url encode decode online</strong> <strong>url encode decode tool</strong>: a <strong>url encoder online</strong> and <strong>url decoder online</strong> together.</p>
      <h2>What is URL encoding?</h2>
      <p><strong>what is url encode</strong>? URLs can only contain certain characters, so others are written as % plus their UTF-8 bytes in hex. Common ones:</p>
      <ul>
        <li><strong>url encoding for space</strong>: <code>%20</code> (or <code>+</code> in <strong>url encoded form data</strong>).</li>
        <li><strong>url encode forward slash</strong>: <code>%2F</code>; <strong>url encoding for ampersand</strong>: <code>%26</code>; ? = <code>%3F</code>; # = <code>%23</code>.</li>
        <li><strong>url encoding for special characters</strong> beyond ASCII uses UTF-8 (<strong>url encoding to utf 8</strong>): é = <code>%C3%A9</code>.</li>
      </ul>
      <p>Example: “free online tools &amp; more/?” → <code>free%20online%20tools%20%26%20more%2F%3F</code>. A <strong>url decode to text</strong> reverses it.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>url encode in javascript</strong> / <strong>url encode decode javascript</strong> — <code>encodeURIComponent()</code> and <code>decodeURIComponent()</code>.</li>
        <li><strong>url encode in python</strong> / <strong>url encode decode python</strong> — <code>urllib.parse.quote()</code> and <code>unquote()</code>.</li>
        <li><strong>url encode in java</strong> / <strong>url encode decode java</strong> — <code>URLEncoder.encode(s, StandardCharsets.UTF_8)</code> (spaces become +).</li>
        <li><strong>url encode in php</strong> / <strong>url encode and decode in php</strong> — <code>rawurlencode()</code> (%20) or <code>urlencode()</code> (+).</li>
        <li><strong>url encode decode c#</strong> — <code>Uri.EscapeDataString()</code> and <code>Uri.UnescapeDataString()</code>.</li>
        <li><strong>url decode in excel</strong> — Excel has <code>=ENCODEURL()</code> but no decode function, so paste the text here.</li>
      </ul>
      <p>As a <strong>url encoder for svg</strong> data URIs in CSS, use Encode (component) on the SVG code. No <strong>url encode decode extension</strong> needed — a simple <strong>url encode decode</strong> page.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'html-entity-encoder': `
      <h2>HTML encoder and decoder</h2>
      <p>Paste text and click <strong>Encode HTML</strong> to escape the five special characters — <code>&amp;</code> → <code>&amp;amp;</code>, <code>&lt;</code> → <code>&amp;lt;</code>, <code>&gt;</code> → <code>&amp;gt;</code>, <code>"</code> → <code>&amp;quot;</code> and <code>'</code> → <code>&amp;#39;</code> — or <strong>Decode HTML</strong> to turn entities back into plain text. Tick “Also encode non-ASCII characters” to write © or emoji as numeric entities like <code>&amp;#169;</code>. It's an <strong>html encoder decoder online</strong>: an <strong>html encode online</strong> and <strong>html decode online</strong> tool, and an <strong>html entity encoder online</strong>.</p>
      <h2>What are HTML entities?</h2>
      <p><strong>what are html entities</strong>? They're codes that display a character the browser would otherwise treat as markup, or that's hard to type. A few from the <strong>html entities list</strong>:</p>
      <ul>
        <li><strong>html encoded ampersand</strong>: <code>&amp;amp;</code> · less than <code>&amp;lt;</code> · greater than <code>&amp;gt;</code></li>
        <li><strong>html escape single quote</strong>: <code>&amp;#39;</code> (or <code>&amp;apos;</code>) · double quote <code>&amp;quot;</code></li>
        <li><strong>html encode space</strong> that won't break: <code>&amp;nbsp;</code> · © <code>&amp;copy;</code> · ™ <code>&amp;trade;</code> · → <code>&amp;rarr;</code></li>
      </ul>
      <h2>Escape HTML to prevent XSS</h2>
      <p>The main reason to <strong>html escape</strong> text: if user input is shown on a page without escaping, someone can inject scripts. Always <strong>escape html to prevent xss</strong> when inserting text into HTML — the <strong>html escape characters</strong> above are exactly the ones that matter. This page is handy for checking output and preparing snippets, such as showing code on a blog.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>html encode in javascript</strong> — set <code>element.textContent</code> instead of <code>innerHTML</code>, or replace the five characters.</li>
        <li><strong>html encode in php</strong> — <code>htmlspecialchars($s, ENT_QUOTES)</code>; decode with <code>html_entity_decode()</code>.</li>
        <li><strong>html encode in c#</strong> — <code>WebUtility.HtmlEncode()</code> / <code>HtmlDecode()</code>.</li>
      </ul>
      <p>To decode a page full of <code>&amp;amp;</code> codes (<strong>html entities decode</strong>, <strong>html entities to text</strong> or <strong>html unescape online</strong>), paste and click Decode. A simple <strong>html encode decode</strong> (<strong>html encode decode online</strong>) <strong>html entity converter online</strong> — an <strong>html entities online converter</strong> that's also an <strong>html escape online</strong> and <strong>html entity decode online</strong> tool, with <strong>html entities encode</strong> and an <strong>html decoder</strong> in one.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'uuid-generator': `
      <h2>UUID generator — v4 and v7</h2>
      <p>Choose <strong>v4 (random)</strong> or <strong>v7 (time-ordered)</strong>, how many you need (up to 10,000), and options for <strong>UPPERCASE</strong>, <strong>no hyphens</strong> or <strong>{braces}</strong> (GUID style). Copy them all or download a .txt file. UUIDs are made with your browser's cryptographically secure random generator. It's a <strong>uuid generator online</strong> for bulk lists.</p>
      <h2>v4 or v7?</h2>
      <p>A <strong>uuid generator v4</strong> makes 122 random bits — the chance of a duplicate is effectively zero. A <strong>uuid generator v7</strong> puts a millisecond timestamp first, so new IDs sort in creation order; that makes database indexes faster. Use v7 for primary keys, v4 for everything else. The <strong>uuid generator format</strong> is 8-4-4-4-12 hex digits, e.g. <code>f47ac10b-58cc-4372-a567-0e02b2c3d479</code> (the “4” marks version 4).</p>
      <h2>Minecraft</h2>
      <p>As a <strong>uuid generator for minecraft bedrock</strong> (or <strong>uuid generator minecraft bedrock</strong>) add-on, every <code>manifest.json</code> needs unique v4 UUIDs — one for the header and one for each module. Generate a few here and paste them in. A <strong>uuid generator minecraft java</strong> player UUID is different: it comes from the player's Mojang account and can't be generated. That's the whole story for any <strong>uuid generator for minecraft</strong> (or <strong>uuid generator minecraft</strong>) search.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>uuid generator python</strong> (<strong>uuid generator for python</strong>) — <code>import uuid; uuid.uuid4()</code>.</li>
        <li><strong>uuid generator javascript</strong> (<strong>uuid generator for js</strong> and <strong>uuid generator for react</strong>) — <code>crypto.randomUUID()</code> in modern browsers and Node.</li>
        <li><strong>uuid generator java</strong> (<strong>uuid generator for java</strong>) — <code>UUID.randomUUID()</code>.</li>
        <li><strong>uuid generator for postgres</strong> — <code>gen_random_uuid()</code> (PostgreSQL 13+); <code>uuidv7()</code> arrives in PostgreSQL 18.</li>
        <li><strong>uuid generator for postman</strong> — the <code>{{$guid}}</code> or <code>{{$randomUUID}}</code> variable.</li>
        <li><strong>uuid generator for excel</strong> — generate a list here and paste it into a column.</li>
      </ul>
      <p>A simple <strong>uuid generator</strong>.</p>`,

  'hash-generator': `
      <h2>Hash generator — MD5, SHA-1, SHA-256, SHA-512</h2>
      <p>Type or paste text and see its <strong>MD5</strong>, <strong>SHA-1</strong>, <strong>SHA-256</strong>, <strong>SHA-384</strong> and <strong>SHA-512</strong> hashes instantly, or drop a file to get its checksums. Paste an expected hash in “Verify” and a ✓ appears next to the matching algorithm. It's a <strong>hash generator online</strong> — a <strong>hash generator sha256</strong> (an <strong>hash generator online sha256</strong>), <strong>hash generator sha512</strong> and <strong>hash generator md5</strong> (or <strong>hash generator online md5</strong>) in one.</p>
      <h2>Examples</h2>
      <p>For the text “hello world”: MD5 = <code>5eb63bbbe01eeed093cb22bb8f5acdc3</code>; SHA-256 = <code>b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9</code>. Change one letter and the hash changes completely. A hash only goes one way — there's no <strong>hash generator to text</strong> that reverses it.</p>
      <h2>Verify a download (file checksum)</h2>
      <p>As a <strong>hash generator for file</strong> checks (an <strong>md5 hash generator for file</strong>), drop the file you downloaded, paste the checksum from the publisher's site, and look for the ✓. On Windows (a <strong>hash generator for windows</strong> without installing anything), you can also run <code>Get-FileHash file.iso</code> in PowerShell or <code>certutil -hashfile file.iso SHA256</code>. No <strong>hash generator download</strong> is needed.</p>
      <h2>Passwords, salt and keys</h2>
      <p>As a <strong>hash generator for password</strong> (or <strong>hash generator password</strong>) storage, plain MD5 or SHA hashes aren't safe — attackers can test billions per second. Real systems use a slow, salted algorithm such as bcrypt or Argon2. A <strong>hash generator with salt</strong> here means adding the salt to the text yourself; a <strong>hash generator with key</strong> (HMAC) isn't included.</p>
      <h2>In Python</h2>
      <p>A <strong>hash generator in python</strong>: <code>hashlib.sha256("text".encode()).hexdigest()</code> — the same as a <strong>hash generator from string</strong> here. (Looking for a <strong>hash generator for youtube</strong>? That's usually a hashtag generator — a different tool.) A simple <strong>hash generator</strong>.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'jwt-decoder': `
      <h2>JWT decoder online — decode JWT tokens locally</h2>
      <p>Paste a JSON Web Token (with or without “Bearer ”) to <strong>decode jwt token</strong> data instantly: the <strong>header</strong> (algorithm and type), the <strong>payload</strong> (claims), and the issued-at, not-before and expiry times in your local time and UTC. A badge shows whether the token is <strong>expired</strong>. It's a <strong>jwt decoder online</strong> and <strong>jwt decoder tool</strong> — the quick way to <strong>decode jwt token online</strong>, <strong>decode jwt expiration time online</strong> and check <strong>jwt decode token expiry</strong>.</p>
      <h2>Decode JWT locally</h2>
      <p>Tokens can grant access to accounts, so never paste them into sites that upload them. This page is a <strong>jwt decoder offline</strong>-style tool: you can <strong>decode jwt locally</strong> (<strong>jwt decode locally</strong>) — the <strong>jwt decode in browser</strong> happens on your device and nothing is sent anywhere. Like the <strong>jwt io decode online</strong> debugger, it's a <strong>json web token decode online</strong> tool, without uploading your token.</p>
      <h2>Decoding vs verifying</h2>
      <p>A JWT's header and payload are just Base64URL-encoded JSON, so anyone can read them — never put secrets in a payload. Checking the <em>signature</em> needs the secret or public key; this page decodes but doesn't verify, so it isn't a <strong>jwt token decoder and verifier</strong> or <strong>jwt decode with secret key</strong> tool. Verify signatures in your server code. For a <strong>jwt decoder and encoder</strong> (or <strong>jwt decoder to encoder</strong>), sign new tokens with a library on your server.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>jwt decode python</strong> — PyJWT: <code>jwt.decode(token, options={"verify_signature": False})</code> to inspect (verify in production).</li>
        <li><strong>jwt decode in javascript</strong> — the <code>jwt-decode</code> npm package, or <code>JSON.parse(atob(token.split('.')[1]))</code> for simple tokens.</li>
        <li><strong>java jwt decode</strong> / <strong>spring boot jwt decode</strong> — <code>JwtDecoder</code> in Spring Security, or the jjwt library.</li>
        <li><strong>jwt decoder flutter</strong> (<strong>jwt decoder in flutter</strong>) — the <code>jwt_decoder</code> package.</li>
        <li><strong>jwt decode bash</strong> / <strong>jwt decoder cli</strong> — <code>cut -d. -f2 | base64 -d</code> (add padding if needed); in PowerShell (<strong>jwt decode powershell</strong>), split on “.” and Base64-decode the second part.</li>
        <li><strong>decode jwt in postman</strong> — <code>JSON.parse(atob(token.split('.')[1]))</code> in a test script.</li>
      </ul>
      <p>The <strong>jwt encode format</strong> is <code>header.payload.signature</code>, and decoding gives you the claims as JSON — a <strong>jwt decode to json</strong> view of any <strong>jwt decoder microsoft</strong> Entra ID token or other provider's token. A simple <strong>jwt decoder</strong> — just <strong>jwt decode</strong>, <strong>decode jwt</strong>, <strong>jwt decode online</strong>.</p>`,

  'regex-tester': `
      <h2>Regex tester online with live highlighting</h2>
      <p>Type a regular expression and its flags (<code>g</code>, <code>i</code>, <code>m</code>, <code>s</code>, <code>u</code>, <code>y</code>) and every match in your test text is highlighted as you type, with a match count and a table of <strong>capture groups</strong>. Add a replacement (using <code>$1</code> or <code>$&lt;name&gt;</code>) to preview the result. Quick patterns for email, URL, phone, date, IPv4, hex colour and numbers get you started. It's a <strong>regex tester online</strong> that runs entirely in your browser.</p>
      <h2>Regex tester for JavaScript</h2>
      <p>It uses the JavaScript engine, so it's an exact <strong>regex tester javascript</strong> (<strong>regex tester js</strong> and <strong>regex tester for javascript</strong>) — named groups, lookbehind and Unicode property escapes like <code>\p{L}</code> all work.</p>
      <h2>Python, Java, C# and other languages</h2>
      <p>Most everyday syntax — character classes, quantifiers, groups, alternation, anchors — works the same across languages, so it's useful as a <strong>regex tester python</strong>, <strong>regex tester java</strong>, <strong>regex tester c#</strong> (<strong>regex tester .net</strong>), <strong>regex tester powershell</strong> or <strong>regex tester for r</strong>. Watch for flavour differences:</p>
      <ul>
        <li><strong>regex tester for python</strong>: named groups are written <code>(?P&lt;name&gt;…)</code>; use <code>(?&lt;name&gt;…)</code> here.</li>
        <li><strong>regex tester for java</strong> and <strong>regex tester for c#</strong>/<strong>regex tester for .net</strong>: possessive quantifiers and atomic groups aren't available in JavaScript.</li>
        <li><strong>regex tester for sed</strong> and <strong>regex tester for bash</strong> (grep): POSIX regex has no <code>\d</code> or lookarounds — use <code>[0-9]</code>.</li>
      </ul>
      <h2>Common tests</h2>
      <ul>
        <li><strong>regex test for numbers</strong>: <code>^\d+$</code> (whole number) or <code>-?\d+(\.\d+)?</code> (decimals).</li>
        <li><strong>regex test for special characters</strong>: <code>[^a-zA-Z0-9\s]</code> finds anything that isn't a letter, digit or space.</li>
      </ul>
      <p>Like <strong>regex tester 101</strong>-style sites, but lightweight — a simple <strong>regex tester</strong>.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'color-picker': `
      <h2>Color picker and converter — HEX, RGB, HSL, CMYK</h2>
      <p>Pick a colour from the swatch or type any colour — HEX, RGB, HSL or a CSS name like “teal” — and get every format at once: <strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, <strong>HSV</strong> and <strong>CMYK</strong>, each with a copy button. You also get 11 <strong>tints and shades</strong> (click to copy) and the <strong>WCAG contrast</strong> ratio with white and black text, marked AA or AAA. It's a <strong>color picker online</strong>, a <strong>color picker tool</strong> and a <strong>color picker converter</strong> in one — a <strong>css color picker and converter</strong> for any <strong>color picker color code</strong>.</p>
      <h2>Hex to RGB and RGB to hex</h2>
      <p>As a <strong>hex to rgb converter</strong> (and <strong>rgb to hex converter</strong>), type either and copy the other. The <strong>hex to rgb formula</strong>: split the hex into pairs and convert each from base 16 — <code>#4F46E5</code> → 4F = 79, 46 = 70, E5 = 229 → <code>rgb(79, 70, 229)</code>. The <strong>rgb to hex formula</strong> reverses it. Need <strong>hex to rgba</strong> or <strong>hex to rgb with opacity</strong>? Add the alpha yourself: <code>rgba(79, 70, 229, 0.5)</code> or the 8-digit hex <code>#4F46E580</code>. It's a <strong>color picker to rgb</strong> and <strong>color picker to hex</strong> converter, and a <strong>hex to rgb and cmyk</strong> one too (CMYK here is a simple conversion — ask your printer for exact print values).</p>
      <h2>Hex color picker for CSS and websites</h2>
      <p>As a <strong>hex color picker online</strong> (<strong>color picker hex</strong> or <strong>color picker hex code</strong>), the swatch opens your system's colour wheel (a <strong>color picker wheel</strong>); in Chrome and Edge on desktop it includes an eyedropper for picking a <strong>color picker from screen</strong>. Check contrast before you use a colour as a <strong>color picker for website</strong> text — WCAG AA needs 4.5:1 for normal text and 3:1 for large text. It's a <strong>color picker for css</strong> code and a <strong>hex color picker to rgb</strong>.</p>
      <h2>From an image, Photoshop, Canva and Word</h2>
      <ul>
        <li><strong>color picker from image</strong> — upload a photo to the <a href="/image-color-picker">Image Color Picker</a> and click any pixel.</li>
        <li><strong>color picker in photoshop</strong> — press I for the Eyedropper; the hex code is in the Color Picker dialog.</li>
        <li><strong>color picker in canva</strong> — click a colour, then the + tile, and paste a hex code.</li>
        <li><strong>color picker in word</strong> — Font Color → More Colors → Custom shows RGB and Hex.</li>
      </ul>
      <p>Opacity isn't adjustable here, so for a <strong>hex color picker with opacity</strong>, add the alpha as shown above. A simple <strong>color picker</strong> and <strong>hex color picker</strong> — <strong>hex to rgb</strong> and <strong>rgb to hex</strong> (a <strong>rgb to hex code</strong> copy) in one click.</p>`,

  'color-palette-generator': `
      <h2>Color palette generator</h2>
      <p>Pick a base colour and a harmony — <strong>analogous</strong>, <strong>complementary</strong>, <strong>split-complementary</strong>, <strong>triadic</strong>, <strong>tetradic</strong>, <strong>monochrome</strong> or <strong>random</strong> — and get a five-colour palette. Click a colour to copy its hex code, 🔒 lock the ones you like, and press <kbd>Space</kbd> for a new random palette. Copy all codes or a ready-made block of CSS variables. It's a <strong>color palette generator free</strong> of sign-ups.</p>
      <h2>Based on one color or hex code</h2>
      <p>As a <strong>color palette generator based on one color</strong> (or <strong>color palette generator from hex</strong>), set your brand colour as the base and switch harmonies: monochrome gives tints and shades of it, complementary adds its opposite for accents, analogous gives calm neighbours.</p>
      <h2>From a photo or image</h2>
      <p>For a <strong>color palette generator from photo</strong> (or <strong>color palette generator from image</strong> — a <strong>color palette generator from photo free</strong> of watermarks), upload the picture to the <a href="/image-color-picker">Image Color Picker</a>, which extracts its main colours; then paste one here as the base to build a matching scheme.</p>
      <h2>For brands, websites, homes and weddings</h2>
      <ul>
        <li><strong>color palette generator for brand</strong> and <strong>color palette generator for website</strong> — use one main colour, one accent and neutrals; check text contrast with the <a href="/color-picker">Color Picker</a>.</li>
        <li><strong>color palette generator for interior design</strong> and a <strong>color palette generator for home</strong> — the classic 60-30-10 rule: 60% main, 30% secondary, 10% accent.</li>
        <li><strong>color palette generator for wedding</strong> invitations, flowers and decor — analogous palettes feel soft and romantic.</li>
        <li><strong>color palette generator for clothes</strong> — complementary pairs make bold outfits; a <strong>color palette generator for skin tone</strong> is best done with a mirror and natural light.</li>
        <li><strong>color palette generator for coloring books</strong> and <strong>color palette generator for ohuhu markers</strong> — match the hex codes to your closest marker colours.</li>
        <li><strong>color palette generator for minecraft</strong> (or <strong>color palette generator minecraft</strong>) builds — pick blocks close to each palette colour.</li>
      </ul>
      <p>Naming palettes from words (a <strong>color palette generator from words</strong> or <strong>color palette generator by name</strong>) isn't supported, but random mode is great for inspiration. A simple <strong>color palette generator</strong>.</p>`,

  'css-gradient-generator': `
      <h2>CSS gradient generator</h2>
      <p>Choose <strong>linear</strong> (with any angle), <strong>radial</strong> (circle or ellipse) or <strong>conic</strong>, add as many colour stops as you like and drag their positions, then copy the CSS. The code includes a solid fallback colour for very old browsers. Press 🎲 Random for inspiration. It's a <strong>css gradient generator online</strong> — a <strong>gradient generator for css</strong> and a <strong>css gradient generator tool</strong> for any <strong>css gradient generator background</strong>.</p>
      <h2>3 colors, transparency and opacity</h2>
      <ul>
        <li><strong>css gradient generator 3 colors</strong> — click “+ Add color stop” and place it at 50%.</li>
        <li><strong>css gradient generator transparent</strong> or <strong>css gradient generator with opacity</strong> — the colour pickers are solid, so in the copied code replace a stop with <code>transparent</code> or <code>rgba(79, 70, 229, 0.5)</code>.</li>
      </ul>
      <h2>Gradient text</h2>
      <p>As a <strong>css gradient generator for text</strong> (or <strong>css gradient generator text</strong>), copy the background and add: <code>-webkit-background-clip: text; background-clip: text; color: transparent;</code>.</p>
      <h2>Tailwind and animation</h2>
      <ul>
        <li><strong>css gradient generator tailwind</strong> — use Tailwind's <code>bg-linear-to-r from-indigo-600 to-pink-500</code> (v4; <code>bg-gradient-to-r</code> in v3), or paste the exact CSS as an arbitrary value: <code>bg-[linear-gradient(135deg,#4f46e5_0%,#ec4899_100%)]</code>.</li>
        <li><strong>css gradient generator animated</strong> — set <code>background-size: 200% 200%</code> and animate <code>background-position</code> with <code>@keyframes</code>.</li>
      </ul>
      <h2>From an image or existing code</h2>
      <p>For a <strong>css gradient generator from image</strong> (a <strong>linear gradient generator from image</strong> or <strong>linear gradient css generator from image</strong>), pick the colours with the <a href="/image-color-picker">Image Color Picker</a> and enter them as stops. To edit an existing gradient (a <strong>css gradient generator from code</strong>), copy its colours and angle into the controls. A simple <strong>css gradient generator</strong>.</p>`,

  'box-shadow-generator': `
      <h2>CSS box shadow generator</h2>
      <p>Drag the sliders for <strong>horizontal offset</strong>, <strong>vertical offset</strong>, <strong>blur</strong>, <strong>spread</strong> and <strong>opacity</strong>, pick the shadow, box and background colours, and tick <strong>Inset</strong> for an inner shadow. The preview updates live and the CSS is ready to copy. It's a <strong>box shadow generator</strong> — a <strong>css box shadow generator online</strong>, <strong>box shadow generator css</strong> and <strong>css shadow generator</strong> in one.</p>
      <h2>Box shadow CSS syntax</h2>
      <p>The <strong>box shadow css syntax</strong> is <code>box-shadow: [inset] x y blur spread color;</code>. Some <strong>box shadow css examples</strong>:</p>
      <ul>
        <li><strong>box shadow css for card</strong>: <code>0 4px 12px rgba(0, 0, 0, 0.1)</code></li>
        <li><strong>box shadow css for button</strong>: <code>0 2px 4px rgba(0, 0, 0, 0.2)</code></li>
        <li><strong>css box shadow generator bottom only</strong>: <code>0 8px 6px -6px rgba(0, 0, 0, 0.3)</code> — negative spread hides the sides. A <strong>box shadow css top only</strong> uses a negative y offset instead.</li>
        <li><strong>css box shadow generator all sides</strong> (<strong>box shadow css for all sides</strong>): <code>0 0 12px rgba(0, 0, 0, 0.2)</code></li>
        <li><strong>box shadow css inset</strong> (a <strong>box shadow generator inset</strong> or <strong>css inner box shadow generator</strong>): <code>inset 0 2px 6px rgba(0, 0, 0, 0.25)</code></li>
      </ul>
      <p>For a <strong>css box shadow generator smooth</strong> look, combine two or three soft shadows separated by commas. On a <strong>box shadow css for dark theme</strong>, shadows barely show — use a lighter border or a soft glow instead.</p>
      <h2>Tailwind, drop shadows and React Native</h2>
      <ul>
        <li><strong>tailwind css box shadow generator</strong> (a <strong>box shadow generator tailwind</strong>, or <strong>box shadow css to tailwind</strong>) — use an arbitrary value: <code>shadow-[0_4px_12px_rgba(0,0,0,0.1)]</code>.</li>
        <li><strong>css drop shadow generator</strong> (a <strong>drop shadow css generator</strong>) — <code>filter: drop-shadow(0 4px 6px rgba(0,0,0,.3))</code> follows the shape of transparent PNGs and SVGs; it has no spread or inset.</li>
        <li><strong>box shadow generator react native</strong> — React Native 0.76+ (New Architecture) accepts the same <code>boxShadow</code> string.</li>
      </ul>
      <h2>Box shadow not working?</h2>
      <p>If your <strong>box shadow not working</strong> problem shows no shadow: check that the parent doesn't have <code>overflow: hidden</code> (it clips shadows), the colour isn't fully transparent, and the element has a size. A simple <strong>css3 box shadow generator</strong> — a <strong>css box shadow creator</strong> for any <strong>box shadow css</strong>.</p>`,

  'code-minifier': `
      <h2>HTML, CSS and JS minifier</h2>
      <p>Choose <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>HTML</strong> or <strong>JSON</strong>, paste your code and click <strong>📦 Minify</strong> — or <strong>✨ Beautify</strong> to make minified code readable again. You'll see the size before and after and the percentage saved. JavaScript uses Terser, the minifier behind most build tools, which also shortens variable names safely. It's an <strong>html css js minifier</strong> (and <strong>html css js compressor</strong>) for any <strong>minify html css js online</strong> job.</p>
      <h2>What does minify JavaScript mean?</h2>
      <p>The <strong>minify javascript meaning</strong>: removing comments, spaces and line breaks — and for JS, renaming local variables — so files download faster, without changing what they do. A typical stylesheet shrinks 20–40%, and your server's gzip compression comes on top.</p>
      <ul>
        <li><strong>css minifier</strong> / <strong>minify css</strong> (a <strong>css minifier online</strong> and <strong>css compressor online</strong>) — strips comments and whitespace and shortens <code>0px</code> to <code>0</code>.</li>
        <li><strong>js minifier</strong> / <strong>minify javascript</strong> (a <strong>js minifier online</strong>, <strong>minify javascript online</strong> or <strong>js compressor online</strong>) — compresses and mangles with Terser.</li>
        <li><strong>html minifier</strong> (an <strong>html minifier online</strong> and <strong>html compressor online</strong>) — removes comments and whitespace between tags, the way to <strong>compress html to one line</strong>.</li>
      </ul>
      <p>For <strong>minify css and js</strong> together, run each through its own tab.</p>
      <h2>Unminify: back to normal</h2>
      <p>For <strong>css minify to normal</strong> or <strong>js minify to normal</strong>, click Beautify — it turns <strong>minified javascript to readable</strong> code with proper indentation. Original variable names and comments can't be recovered once removed.</p>
      <h2>How to minify CSS and HTML elsewhere</h2>
      <ul>
        <li><strong>how to minify css</strong> or <strong>how to minify html</strong> by hand: paste here, minify, copy into your production file — keep the readable original for editing.</li>
        <li><strong>minify js in vs code</strong> or <strong>minify css in vscode</strong> — install a minify extension, or use a build tool like Vite or esbuild that minifies automatically.</li>
        <li><strong>how to minify css in wordpress</strong> — caching plugins such as Autoptimize or LiteSpeed Cache have a minify option.</li>
      </ul>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'unix-timestamp-converter': `
      <h2>Unix timestamp converter</h2>
      <p>See the current Unix timestamp ticking live (with a copy button), convert a <strong>timestamp to a date</strong>, or pick a <strong>date to get its timestamp</strong>. Results show your local time, <strong>UTC</strong>, ISO 8601 and how long ago or ahead it is. It's a <strong>unix timestamp converter online</strong> — a <strong>unix timestamp converter to date</strong> and <strong>unix timestamp converter to utc</strong> in one.</p>
      <h2>Seconds or milliseconds</h2>
      <p>Paste either: the converter detects <strong>milliseconds</strong> automatically (13 digits) — a <strong>unix timestamp converter milliseconds</strong> (<strong>unix timestamp converter with milliseconds</strong>) mode built in. Example: <code>1767225600</code> = <strong>1 January 2026, 00:00:00 UTC</strong>; in milliseconds, <code>1767225600000</code>. Fun fact: 32-bit systems overflow at <code>2147483647</code> — 19 January 2038, 03:14:07 UTC.</p>
      <h2>Time zones: EST, CST, IST</h2>
      <p>A Unix timestamp has no time zone — it's seconds since 1 January 1970 UTC. The converter shows it in UTC and your device's own zone. As a <strong>unix timestamp converter with time zone</strong>, for a <strong>unix timestamp converter to est</strong> (UTC−5, −4 in summer), <strong>unix timestamp converter to cst</strong> (UTC−6, −5 in summer) or <strong>unix timestamp converter to ist</strong> (India, UTC+5:30), take the UTC time and use the <a href="/time-zone-converter">Time Zone Converter</a>.</p>
      <h2>In Excel</h2>
      <p>As a <strong>unix timestamp converter excel</strong> (or <strong>unix timestamp converter in excel</strong>), the <strong>unix timestamp converter excel formula</strong> — the <strong>unix timestamp converter formula</strong> — is <code>=A1/86400+DATE(1970,1,1)</code>; format the cell as a date and time. Add <code>+5.5/24</code> for IST, or <code>-5/24</code> for EST. For milliseconds, divide by 86,400,000.</p>
      <h2>In Python and Discord</h2>
      <p>A <strong>unix timestamp converter python</strong> one-liner: <code>datetime.fromtimestamp(ts, tz=timezone.utc)</code>. As a <strong>unix timestamp converter for discord</strong> (<strong>unix timestamp converter discord</strong>), the <a href="/discord-timestamp-generator">Discord Timestamp Generator</a> writes the <code>&lt;t:1767225600:F&gt;</code> code that shows in each reader's own time. A simple <strong>unix timestamp converter</strong>.</p>`,

  'markdown-to-html': `
      <h2>Markdown to HTML converter with live preview</h2>
      <p>Type or paste Markdown on the left and see the rendered preview and the clean HTML output as you type. It supports GitHub-flavoured Markdown: headings, bold and italic, links, images, lists, task lists, blockquotes, code blocks and <strong>tables</strong>. Copy the HTML or <strong>download a complete .html file</strong> with simple styling. It's a <strong>markdown to html converter</strong> and <strong>markdown to html online</strong> tool — a <strong>markdown to html formatter</strong> that runs in your browser.</p>
      <h2>Tables and code</h2>
      <ul>
        <li><strong>markdown to html table</strong> — pipe tables like <code>| Name | Price |</code> with a <code>|---|---|</code> line become proper <code>&lt;table&gt;</code> markup.</li>
        <li><strong>markdown to html code</strong> blocks — fenced code with a language (<code>\`\`\`js</code>) gets a <code>class="language-js"</code>, so you can add Prism or highlight.js for <strong>markdown to html with syntax highlighting</strong>.</li>
      </ul>
      <h2>Styling and email</h2>
      <p>For <strong>markdown to html with css</strong>, the downloaded file has basic styles — replace them with your own stylesheet. For <strong>markdown to html for email</strong>, copy the HTML into your email builder; many email clients ignore stylesheets, so keep it simple. Diagrams and maths (a <strong>markdown to html with mermaid</strong> or <strong>markdown to html with latex</strong> render) aren't converted here.</p>
      <h2>In Python, JavaScript, VS Code and the command line</h2>
      <ul>
        <li><strong>markdown to html python</strong> (<strong>markdown to html in python</strong>) — <code>pip install markdown</code>, then <code>markdown.markdown(text)</code>.</li>
        <li><strong>markdown to html js</strong> (<strong>markdown to html in javascript</strong>) — the <code>marked</code> library (the same one this page uses): <code>marked.parse(text)</code>.</li>
        <li><strong>markdown to html vscode</strong> — Ctrl + Shift + V previews Markdown; extensions like “Markdown All in One” can export HTML.</li>
        <li><strong>markdown to html cli</strong> / <strong>markdown to html linux</strong> — <code>pandoc input.md -o output.html</code>.</li>
      </ul>
      <p>The <strong>markdown to html format</strong> is predictable — <code># Title</code> becomes <code>&lt;h1&gt;</code>, <code>**bold**</code> becomes <code>&lt;strong&gt;</code> — so it's a simple <strong>markdown to html</strong> converter.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'csv-to-json': `
      <h2>CSV to JSON converter online — and JSON to CSV</h2>
      <p>Paste CSV (or open a .csv file) to get a JSON array, or switch to <strong>JSON → CSV</strong> to go the other way. The delimiter is auto-detected — comma, semicolon, tab or pipe — and quoted fields with commas or line breaks are handled correctly. Options: <strong>first row is header</strong> (gives an array of objects) and <strong>detect numbers &amp; booleans</strong> (so <code>22</code> becomes a number, not <code>"22"</code>). Copy or download the result. It's a <strong>csv to json converter online free</strong> (a <strong>csv to json converter free</strong> of sign-ups) — a <strong>csv to json format converter</strong> with no <strong>csv to json converter download</strong>.</p>
      <h2>Example</h2>
      <p><code>name,age</code> / <code>Ayesha,22</code> → <code>[{"name": "Ayesha", "age": 22}]</code>. Leading zeros (like phone numbers <code>0300…</code>) are kept as text.</p>
      <h2>From Excel</h2>
      <p>For an <strong>excel to json format converter</strong> (an <strong>excel to json converter for free</strong>), save the sheet as CSV (File → Save As → CSV) or copy the cells — Excel copies as tab-separated text, which is auto-detected — and paste here.</p>
      <h2>GST and income tax JSON (India)</h2>
      <p>Searching for a <strong>csv to json converter for gstr1</strong>, <strong>csv to json converter for gst</strong>, <strong>excel to json converter for gstr1</strong>, <strong>excel to json converter for gst</strong>, <strong>excel to json converter for income tax return</strong> or <strong>excel to json converter for e invoice</strong>? Those portals need JSON in their own exact schema, created by the official offline utilities (such as the GST Returns Offline Tool). Generic JSON from this page won't upload there — use the government tool for filing.</p>
      <h2>In Python and VS Code</h2>
      <p>A <strong>csv to json converter python</strong> (<strong>csv to json converter in python</strong>) script: <code>json.dumps(list(csv.DictReader(open("data.csv"))))</code>, or with pandas, <code>df.to_json(orient="records")</code>. In VS Code (a <strong>csv to json converter vscode</strong>), paste the CSV here and the JSON back — no extension needed. Once the page has loaded, your data never leaves the device, like a <strong>csv to json converter offline</strong> app. A simple <strong>csv to json converter</strong> (a <strong>csv to json converter online</strong>).</p>`,

  'number-base-converter': `
      <h2>Number base converter — binary, decimal, octal, hex</h2>
      <p>Type a number in any box — <strong>decimal</strong>, <strong>binary</strong>, <strong>octal</strong> or <strong>hexadecimal</strong> — and the others update instantly. A custom box converts to and from any base from 2 to 36. It works with very large numbers and negatives, accepts prefixes like <code>0x</code> and <code>0b</code>, and shows how many bits the number needs. It's a <strong>number base converter online</strong> and a <strong>number base calculator</strong> for any <strong>number base conversion</strong>.</p>
      <h2>Binary to decimal</h2>
      <p>The <strong>binary to decimal formula</strong>: multiply each digit by its power of 2 and add them up. <strong>binary to decimal for 1101</strong>: 1×8 + 1×4 + 0×2 + 1×1 = <strong>13</strong>. <strong>binary to decimal for 1010</strong>: 8 + 2 = <strong>10</strong>. A <strong>binary to decimal chart</strong> for 4 bits runs 0000 = 0 to 1111 = 15. This <strong>binary to decimal converter</strong> does it instantly; work it on paper like this for a <strong>binary to decimal converter with steps</strong>.</p>
      <h2>Decimal to binary</h2>
      <p>The <strong>decimal to binary formula</strong>: divide by 2 repeatedly and read the remainders from bottom to top. <strong>decimal to binary for 25</strong>: 25 → 12 r1 → 6 r0 → 3 r0 → 1 r1 → 0 r1 = <strong>11001</strong>. <strong>decimal to binary for 10</strong> = <strong>1010</strong>. A quick <strong>decimal to binary converter</strong>.</p>
      <h2>Hex to decimal and decimal to hex</h2>
      <p>Hex digits go 0–9 then A–F (10–15). <strong>hex to decimal</strong>: FF = 15×16 + 15 = <strong>255</strong>; <strong>decimal to hex</strong>: 255 = FF. That's also how a <strong>decimal to hex color</strong> works: rgb(255, 128, 0) → FF, 80, 00 → <code>#FF8000</code>. 255 in octal is 377 and in binary 11111111 — handy for a <strong>binary to decimal to hexadecimal</strong> check (a <strong>hex to decimal converter</strong> and <strong>decimal to hex converter</strong> in one).</p>
      <h2>In Excel and Python</h2>
      <ul>
        <li><strong>binary to decimal in excel</strong>: <code>=BIN2DEC("1101")</code>; <strong>hex to decimal in excel</strong>: <code>=HEX2DEC("FF")</code>; also <code>=DEC2BIN(25)</code> and <code>=DEC2HEX(255)</code>.</li>
        <li><strong>binary to decimal in python</strong>: <code>int("1101", 2)</code>; <strong>decimal to binary in python</strong>: <code>bin(25)</code>; <strong>hex to decimal in python</strong>: <code>int("ff", 16)</code> — a one-line <strong>number base converter python</strong>.</li>
      </ul>
      <p>Whole numbers only (no fractions). Also useful for <strong>number base conversion in digital electronics</strong> classes and their <strong>number base conversion examples</strong> — a simple <strong>number base converter</strong> covering <strong>binary to decimal</strong> and <strong>decimal to binary</strong>.</p>`,

  'sql-formatter': `
      <h2>SQL formatter and beautifier online</h2>
      <p>Paste a query and click <strong>✨ Format</strong> to get clean, indented SQL. Choose the dialect — <strong>Standard SQL</strong>, <strong>MySQL</strong>, <strong>MariaDB</strong>, <strong>PostgreSQL</strong>, <strong>SQL Server (T-SQL)</strong>, <strong>Oracle PL/SQL</strong>, <strong>SQLite</strong> or <strong>BigQuery</strong> — keyword case (UPPERCASE, lowercase or keep as is) and 2- or 4-space indents. If the query uses another dialect's syntax, it switches automatically. Click <strong>Minify</strong> to squeeze it onto one line. It's a <strong>sql formatter online</strong>, an <strong>sql formatter & beautifier online</strong> and an <strong>sql formatter online free</strong> tool — an <strong>sql formatter free</strong> of sign-ups.</p>
      <h2>PostgreSQL and Snowflake</h2>
      <p>As an <strong>sql formatter for postgresql</strong>, choose PostgreSQL to keep <code>::</code> casts and <code>$1</code> parameters intact. For an <strong>sql formatter for snowflake</strong>, use Standard SQL — Snowflake's syntax is close to it.</p>
      <h2>SSMS, VS Code, DBeaver and Notepad++</h2>
      <ul>
        <li><strong>sql formatter ssms</strong> (an <strong>sql formatter for ssms</strong>, including <strong>sql formatter for ssms 21</strong> and <strong>sql formatter for ssms 22</strong>) — SSMS has no built-in formatter; paste here, or use an add-in such as <strong>sql formatter redgate</strong> SQL Prompt (paid).</li>
        <li><strong>sql formatter vscode</strong> (<strong>sql formatter for vscode</strong>) — install an <strong>sql formatter extension</strong>, then Shift + Alt + F. The same works as an <strong>sql formatter for cursor</strong>.</li>
        <li><strong>sql formatter for dbeaver</strong> — Ctrl + Shift + F formats the current query.</li>
        <li><strong>sql formatter in notepad++</strong> (<strong>sql formatter for notepad++</strong>) — use a plugin, or paste here and copy back.</li>
        <li><strong>sql formatter for visual studio</strong> — paste the query here and copy it back, or add a formatting extension.</li>
      </ul>
      <p>Your query stays in your browser, so it's safe for production SQL — a simple <strong>sql formatter</strong>.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'internet-speed-test': `
      <h2>Free internet speed test</h2>
      <p>Press <strong>Start test</strong> to measure your <strong>download</strong> speed, <strong>upload</strong> speed, <strong>ping</strong> and <strong>jitter</strong> in about 20 seconds. The test runs against Cloudflare's global network, shows your internet provider and approximate location, and finishes with a plain-English verdict on what your connection can handle. It's an <strong>internet speed test free</strong> of apps and sign-ups. A full test uses about 50–200 MB of data.</p>
      <h2>What speed do I need?</h2>
      <ul>
        <li><strong>internet speed test for streaming</strong> — about 5 Mbps for HD and 15–25 Mbps for 4K, per stream.</li>
        <li><strong>internet speed test for streaming on twitch</strong> — upload matters: 1080p at 60 fps streams at about 6 Mbps, so aim for 8–10 Mbps upload.</li>
        <li><strong>internet speed test for video call</strong> and an <strong>internet speed test for zoom meeting</strong> — 3–4 Mbps in both directions for HD video.</li>
        <li><strong>internet speed test for gaming</strong> (and an <strong>internet speed test for fortnite</strong>) — 10–25 Mbps is plenty; ping under 50 ms and low jitter matter far more than raw speed.</li>
      </ul>
      <h2>Spectrum, Xfinity, Cox, Verizon, AT&amp;T and Starlink</h2>
      <p>Every provider has its own test — the <strong>internet speed test spectrum</strong>, <strong>internet speed test xfinity</strong> (or <strong>internet speed test for xfinity</strong>), <strong>internet speed test cox</strong>, <strong>internet speed test verizon</strong> and <strong>internet speed test att</strong> pages — but those often measure to the provider's own servers. Testing against an independent network gives a more realistic picture to compare with the speed on your bill. As an <strong>internet speed test for starlink</strong>, run it at different times of day, as satellite speeds vary with load and weather.</p>
      <h2>On a phone or PC</h2>
      <p>It works in any browser, so it's an <strong>internet speed test for phone</strong> and an <strong>internet speed test for pc</strong> with no <strong>internet speed test app</strong> to install. On mobile data, remember the test uses data. For the most accurate result, pause downloads and streaming on other devices, and test over a cable as well as Wi-Fi to see if Wi-Fi is the bottleneck.</p>
      <p>Like the <strong>internet speed test ookla</strong> and <strong>internet speed test google</strong> tools, it's quick and free — a simple <strong>internet speed test</strong>.</p>`,

  'what-is-my-ip': `
      <h2>What is my IP address?</h2>
      <p>This page shows your <strong>public IP address</strong> straight away — the address websites see — with a copy button, plus your approximate <strong>location</strong>, <strong>internet provider</strong>, time zone and coordinates. It answers <strong>what is my ip</strong> and <strong>what is my ip address</strong> in one glance, for <strong>what is my ip for this device</strong> and network. Location is usually the city of your provider's equipment, not your home. We don't store your IP.</p>
      <h2>IPv4 or IPv6</h2>
      <p>If your connection uses IPv6, you'll see a longer address with colons. Looking for <strong>what is my ipv4</strong> (<strong>what is my ipv4 address</strong> or <strong>what is my ip address ipv4</strong>)? It's the four-number format like 203.0.113.42; if this page shows IPv6, your IPv4 may differ.</p>
      <h2>Phone, computer and router</h2>
      <ul>
        <li><strong>what is my ip address on my phone</strong> — open this page on the phone. On Wi-Fi it shows your router's public IP; on mobile data, your carrier's.</li>
        <li><strong>what is my ip address on my computer</strong> — every device on your Wi-Fi shares the same public IP. The <em>local</em> IP (like 192.168.1.5) is in <code>ipconfig</code> on Windows or System Settings → Network on a Mac.</li>
        <li><strong>what is my ip for router</strong> settings — that's the “Default Gateway” in <code>ipconfig</code>, usually 192.168.0.1 or 192.168.1.1.</li>
      </ul>
      <h2>VPN check</h2>
      <p>With a VPN on, this page should show the VPN server's address and city instead of yours — a quick <strong>what is my ip address vpn</strong> test that works for <strong>what is my ip address nordvpn</strong> or any provider. If you still see your real location, the VPN isn't working.</p>
      <h2>Game servers: Minecraft, Terraria, Palworld</h2>
      <p>To host a game for friends outside your home, they connect to your public IP and you forward the game's port on your router:</p>
      <ul>
        <li><strong>what is my ip for minecraft server</strong> (<strong>what is my ip for minecraft</strong>) — port 25565 (Java) or 19132 UDP (Bedrock).</li>
        <li><strong>what is my ip for terraria server</strong> (<strong>what is my ip for terraria</strong>) — port 7777.</li>
        <li><strong>what is my ip for palworld dedicated server</strong> (<strong>what is my ip for palworld</strong>) — port 8211 UDP.</li>
      </ul>
      <p>Friends on the same Wi-Fi should use your local IP instead. Your <strong>what is my ip location</strong> result also helps check which region a service thinks you're in — a simple <strong>what is my ip for internet</strong> check.</p>`,

  'youtube-thumbnail-downloader': `
      <h2>YouTube thumbnail downloader — HD and all sizes</h2>
      <p>Paste a YouTube link — a normal video, a Short, a live stream, an embed or a youtu.be link — and you'll instantly see the thumbnail in every size: <strong>HD (1280×720)</strong>, <strong>SD (640×480)</strong>, High (480×360), Medium (320×180) and Small (120×90). Click to download any of them as a JPG. It's a <strong>youtube thumbnail downloader</strong> and <strong>youtube thumbnail grabber online</strong> — a <strong>youtube thumbnail downloader all image</strong> sizes view, free to <strong>download youtube thumbnail free online</strong>.</p>
      <h2>Get YouTube thumbnail from URL or video ID</h2>
      <p>To <strong>get youtube thumbnail from url</strong> or <strong>get youtube thumbnail from link</strong>, paste the address; to <strong>get youtube thumbnail from video id</strong>, paste the 11-character ID on its own. Behind the scenes, thumbnails live at <code>https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg</code>. It's a <strong>youtube thumbnail download from video link</strong> — or <strong>youtube thumbnail download for link</strong> — in one step.</p>
      <h2>HD, full size and 4K</h2>
      <p>To <strong>download youtube thumbnail in hd</strong> (<strong>download youtube video thumbnail in hd</strong>, or <strong>download youtube thumbnail full size</strong>), choose the 1280×720 version — the largest YouTube stores, so a <strong>youtube thumbnail download in 4k quality</strong> doesn't exist. HD only appears if the creator uploaded an HD thumbnail; otherwise SD is the <strong>download youtube thumbnail in high quality</strong> best option, and this <strong>youtube thumbnail grabber high quality</strong> hides sizes that don't exist.</p>
      <h2>Shorts and live streams</h2>
      <p><strong>download youtube thumbnail short</strong> videos and <strong>youtube shorts thumbnail download online</strong> the same way. For a <strong>youtube thumbnail download from live</strong> stream (<strong>download youtube thumbnail live</strong>, or a <strong>youtube thumbnail downloader livestream</strong>), paste the live link.</p>
      <h2>On mobile and PC</h2>
      <p><strong>how to download youtube thumbnail on mobile</strong>: open this page in your phone's browser, paste the link and tap Download — Android saves to Downloads (a <strong>youtube thumbnail download in gallery</strong>); on iPhone, long-press the image and choose Save to Photos. On a computer it's a <strong>youtube thumbnail download hd for pc</strong> with no <strong>youtube thumbnail downloader app</strong> or <strong>youtube thumbnail downloader extension chrome</strong> needed.</p>
      <p><strong>can you download youtube thumbnail</strong> images freely? Yes for reference, but they belong to their creators — ask permission before reusing one. YouTube thumbnails don't include the play button, so a <strong>download youtube thumbnail with play button</strong> means adding it yourself.</p>`,

  'meta-tag-generator': `
      <h2>Meta tag generator for SEO and social sharing</h2>
      <p>Fill in your page title, meta description, URL, share image, site name, X handle and author, choose the content type and search-engine setting, and copy ready-made HTML. You get the SEO tags (title, description, robots, canonical), <strong>Open Graph</strong> tags for Facebook, WhatsApp and LinkedIn, and <strong>Twitter Card</strong> tags — with a live Google search preview, a social share preview and character counters. It's a <strong>meta tag generator free</strong> to use — a <strong>meta tag generator online</strong> (<strong>meta tag generator tool</strong>) and <strong>free meta tag generator</strong> with no account. It's also a <strong>meta tags generator</strong> and <strong>meta tag generator html</strong> output in one.</p>
      <h2>Meta tags for SEO</h2>
      <p>The <strong>meta tags for seo</strong> that matter most are the title (50–60 characters) and the <strong>meta description for seo</strong> (120–160 characters) — they become your headline and snippet on Google. <strong>meta tags in seo</strong> don't directly raise rankings, but a clear title and description earn more clicks. Google ignores the keywords tag, so it's optional here.</p>
      <p><strong>meta description for seo example</strong>: “Merge, compress and convert PDFs for free in your browser. No sign-up, no watermarks — your files never leave your device.” (122 characters.) As <strong>meta tags for seo examples</strong> show, lead with what the page does and why it's better.</p>
      <h2>Open Graph generator</h2>
      <p><strong>what are og tags</strong>? Open Graph tags control the title, description and image shown when your link is shared. As an <strong>open graph generator</strong> (an <strong>open graph generator online</strong>, <strong>open graph tag generator</strong>, <strong>open graph tags generator</strong>, <strong>og tags generator</strong>, <strong>og meta tags generator</strong> or <strong>og tag generator online</strong>), it writes <code>og:title</code>, <code>og:description</code>, <code>og:image</code>, <code>og:url</code>, <code>og:type</code>, <code>og:site_name</code> and <code>og:locale</code>. <strong>og tags example</strong>: <code>&lt;meta property="og:image" content="https://example.com/og.jpg"&gt;</code> — use a 1200×630 image.</p>
      <h2>How to add meta tags for SEO</h2>
      <p><strong>how to add meta tags for seo</strong> (and <strong>how to write meta tags for seo</strong>): paste the code inside the <code>&lt;head&gt;</code> of each page, with a unique title and description per page. That's the <strong>meta tag for seo in html</strong>.</p>
      <ul>
        <li><strong>meta tag generator for website</strong> (<strong>meta tags generator for website</strong>) builders — use your platform's SEO settings, or paste into a custom head-code box.</li>
        <li><strong>meta tag generator for blogger</strong> (<strong>meta tags generator for blogger</strong>) — Theme → Edit HTML, paste inside <code>&lt;head&gt;</code>; also fill in “Search description” in Settings.</li>
        <li>WordPress — an SEO plugin such as Yoast or Rank Math adds these tags for you.</li>
      </ul>
      <p>It doesn't read an existing page, so a <strong>meta tag generator from url</strong> means filling the fields yourself; it isn't a <strong>meta tag generator ai</strong> or <strong>meta tags generator for youtube</strong> (video tags are a different thing). A simple <strong>meta tag generator</strong> and <strong>meta tags for seo generator</strong>.</p>`,

  'utm-builder': `
      <h2>UTM link builder for Google Analytics</h2>
      <p>Enter your website URL and the campaign details — <strong>source</strong>, <strong>medium</strong> and <strong>campaign name</strong>, plus optional term, content and ID — and copy a tagged link. One-click presets fill in Facebook, Instagram, WhatsApp, LinkedIn, Email, Google Ads and YouTube. Spaces become underscores, and an option converts everything to lowercase so “Facebook” and “facebook” don't split your reports. It's a <strong>utm link builder free</strong> to use — a <strong>utm builder</strong>, <strong>utm generator</strong>, <strong>utm url builder</strong>, <strong>utm tag builder</strong> and <strong>utm code builder</strong> in one, and a <strong>free utm link builder</strong> (<strong>utm builder free</strong>, <strong>utm generator free</strong>).</p>
      <h2>UTM links explained</h2>
      <p><strong>utm links explained</strong>: UTM parameters are labels added to a link so Google Analytics knows where a visitor came from. The <strong>utm link meaning</strong> of each part:</p>
      <ul>
        <li><code>utm_source</code> — who sent the traffic (facebook, newsletter, google).</li>
        <li><code>utm_medium</code> — the type (social, email, cpc).</li>
        <li><code>utm_campaign</code> — your campaign name (summer_sale).</li>
        <li><code>utm_term</code>, <code>utm_content</code>, <code>utm_id</code> — keyword, ad variation and campaign ID.</li>
      </ul>
      <p><strong>utm examples</strong> — the <strong>utm code format</strong>: <code>https://example.com/landing-page?utm_source=facebook&amp;utm_medium=social&amp;utm_campaign=summer_sale</code>.</p>
      <h2>How to build UTM links</h2>
      <p><strong>how to build utm links</strong> (or <strong>create utm link</strong> tags): use one naming style and stick to it, keep everything lowercase, and never put UTMs on links within your own site — they restart the visit. <strong>is utm free</strong>? Yes — UTM tags cost nothing; this <strong>utm builder online</strong> (<strong>utm builder tool</strong>) just writes them.</p>
      <h2>GA4, Google Ads, Meta and LinkedIn</h2>
      <ul>
        <li><strong>utm builder ga4</strong> (<strong>utm builder google analytics</strong>, <strong>campaign url builder ga4</strong>) — for <strong>utm tracking in ga4</strong>, see Reports → Acquisition → Traffic acquisition (session source / medium and campaign).</li>
        <li><strong>utm builder for google ads</strong> — Google Ads auto-tagging already tracks clicks; use UTMs for other platforms.</li>
        <li><strong>utm builder for meta ads</strong> and <strong>utm builder for facebook ads</strong> — use source facebook or instagram and medium paid_social.</li>
        <li><strong>utm builder for linkedin</strong> posts and ads, and <strong>utm tracking instagram</strong> bio links.</li>
      </ul>
      <p>It works like the <strong>utm link builder google</strong> (<strong>utm builder google</strong>, <strong>utm url builder google</strong>, <strong>utm tag builder google</strong>) Campaign URL Builder — the <strong>campaign url builder</strong> and <strong>campaign url builder google analytics</strong> tool. <strong>what is utm builder</strong>? Exactly this.</p>
      <h2>In a spreadsheet</h2>
      <p>For a <strong>utm link builder spreadsheet</strong> (<strong>utm link builder excel</strong>, <strong>utm generator excel</strong>, <strong>utm generator google sheets</strong> or <strong>utm builder excel template</strong>), the <strong>utm builder formula</strong> is <code>=A2&amp;"?utm_source="&amp;B2&amp;"&amp;utm_medium="&amp;C2&amp;"&amp;utm_campaign="&amp;D2</code>. A simple <strong>utm link builder</strong>.</p>`,

  'robots-txt-generator': `
      <h2>Robots.txt generator</h2>
      <p>Choose whether robots may crawl everything or nothing, list paths to block (one per line) and paths to always allow, add an optional crawl delay and your sitemap URL, and tick <strong>Block AI training crawlers</strong> to add rules for GPTBot, ClaudeBot, CCBot, Google-Extended and other AI bots. Copy the result or download it as a ready <strong>robots.txt file</strong>. It's a <strong>robots.txt generator free</strong> to use — a <strong>robots.txt generator tool</strong> and <strong>robots.txt file generator</strong>.</p>
      <h2>What is a robots.txt file?</h2>
      <p><strong>what is a robots.txt file</strong>? A plain text file at the root of your site that tells crawlers which pages they may visit — the <strong>robots.txt file meaning</strong> in one line. <strong>how robots.txt works</strong> — <strong>robots.txt explained</strong>: before crawling, a bot reads <code>yoursite.com/robots.txt</code> and follows the rules for its user-agent. The <strong>robots.txt file location</strong> must be the root; it won't work in a sub-folder.</p>
      <h2>Robots.txt example</h2>
      <p>A <strong>robots.txt example</strong> (<strong>robots.txt file example</strong>) in the standard <strong>robots.txt format</strong>:</p>
      <pre class="out-box">User-agent: *
Disallow: /admin/
Allow: /admin/help/

Sitemap: https://example.com/sitemap.xml</pre>
      <p>Two <strong>robots.txt rules</strong> to know: <strong>robots.txt disallow all</strong> (or <strong>robots.txt to disallow all</strong>, <strong>robots.txt to block all crawlers</strong>) is <code>Disallow: /</code>, and an empty <code>Disallow:</code> allows everything. Google ignores Crawl-delay; Bing respects it.</p>
      <h2>Robots.txt for AI crawlers</h2>
      <p>As a <strong>robots.txt for ai</strong> (<strong>robots.txt for ai crawlers</strong>, <strong>robots.txt disallow ai</strong> or <strong>robots.txt ai bots</strong>) setup, the AI option adds a <code>Disallow: /</code> group for each AI crawler. Be aware it also blocks AI search bots such as OAI-SearchBot and PerplexityBot, so your pages may stop appearing in AI answers — remove those lines if you want that traffic.</p>
      <h2>Blogger, WordPress and Cloudflare</h2>
      <ul>
        <li><strong>robots.txt generator for blogger</strong> — a <strong>custom robots txt generator for blogger</strong> (<strong>custom robots txt generator for blogger free</strong>) setting: go to Settings → Crawlers and indexing and switch on “Enable custom robots.txt” (the step people search as <strong>enable custom robots txt generator for blogger</strong>), then paste. Keep <code>Disallow: /search</code> to avoid indexing label pages.</li>
        <li><strong>robots txt generator for wordpress</strong> (<strong>robots txt generator wordpress</strong>) — WordPress serves a virtual file; to edit <strong>robots.txt in wordpress</strong>, use your SEO plugin's file editor or upload a real file to the site root.</li>
        <li><strong>robots.txt in cloudflare</strong> — Cloudflare can add AI-bot rules to your robots.txt automatically; check the result after enabling it.</li>
      </ul>
      <h2>Is robots.txt necessary?</h2>
      <p><strong>is robots.txt necessary</strong>? Not strictly — without one, everything may be crawled — but it's good practice for the sitemap line. It isn't security: <strong>is robots.txt legally binding</strong>? No, it's a request well-behaved bots follow. To keep a page out of Google, use a <code>noindex</code> tag instead. <strong>robots.txt for seo</strong>: never block CSS, JS or pages you want ranked. Test it with a <strong>robots.txt tester</strong> or <strong>robots.txt checker</strong> such as Search Console's robots.txt report. A simple <strong>robots.txt generator</strong> — <strong>robots txt generator online</strong>, a <strong>robots txt creator</strong> like the <strong>robots txt generator small seo tools</strong> one, without ads (not a <strong>robots txt generator ai</strong> or <strong>robots txt generator google</strong> product).</p>`,

  'slug-generator': `
      <h2>URL slug generator</h2>
      <p>Paste one title per line and get clean, SEO-friendly URL slugs instantly — lowercase words joined by <strong>hyphens</strong> (or underscores), with accents removed (“Café” → “cafe”), “&amp;” turned into “and” and punctuation stripped. Options let you <strong>remove stop words</strong> (a, the, of…) and set a <strong>max length</strong> that cuts at a whole word. It's a <strong>url slug generator online</strong> and <strong>bulk url slug generator</strong> — a <strong>slug generator online</strong> (<strong>slug generator tool</strong>) and <strong>url slug creator</strong> that's also a <strong>website slug generator</strong>.</p>
      <h2>URL slug example</h2>
      <p><strong>url slug example</strong>: “10 Best Free Online Tools for Students in 2026!” → <code>10-best-free-online-tools-for-students-in-2026</code>; with stop words removed, <code>10-best-free-online-tools-students-2026</code>.</p>
      <h2>What is a slug URL?</h2>
      <p><strong>what is a slug url</strong>? The slug is the readable last part of an address that identifies the page — in <code>example.com/blog/merge-pdf-files</code>, it's <code>merge-pdf-files</code>. That's the <strong>slug meaning url</strong> (<strong>url slug meaning</strong>, or <strong>slug in url meaning</strong>). <strong>url slug vs path</strong>: the path is everything after the domain (<code>/blog/merge-pdf-files</code>); the slug is just the page's own part.</p>
      <h2>URL slug best practices for SEO</h2>
      <p>A <strong>seo friendly url slug generator</strong> follows the <strong>url slug best practices</strong> — the <strong>url slug for seo</strong> and <strong>url slug format</strong> rules:</p>
      <ul>
        <li>Lowercase, words separated by hyphens — Google recommends hyphens over underscores.</li>
        <li>Short and descriptive, with the main keyword; 3–6 words is plenty.</li>
        <li>Skip dates in evergreen content so the URL never looks outdated.</li>
        <li>Don't change a published slug without a 301 redirect.</li>
      </ul>
      <h2>WordPress, Shopify and Wix</h2>
      <ul>
        <li><strong>what is url slug in wordpress</strong> — the “URL” or “Permalink” field in the post sidebar; set Settings → Permalinks to “Post name”.</li>
        <li><strong>how to change url slug in shopify</strong> — on the product or page, edit “Search engine listing” → URL handle (tick the redirect box).</li>
        <li><strong>how to change url slug in wix</strong> — open the page's SEO settings and edit the URL slug.</li>
      </ul>
      <h2>Slugify in code</h2>
      <p>To <strong>slugify</strong> (the <strong>slugify meaning</strong>: turn text into a slug) in code — or <strong>slugify online</strong> and <strong>slugify text online</strong> here, a <strong>url slug generator slugify online</strong> — or the <strong>url to slug</strong> shortcut:</p>
      <ul>
        <li><strong>slugify python</strong> / <strong>slug generator python</strong> — the <code>python-slugify</code> package; <strong>slugify in django</strong> — <code>django.utils.text.slugify()</code>.</li>
        <li><strong>slugify js</strong> — the <code>slugify</code> npm package.</li>
        <li><strong>slugify in php</strong> / <strong>slug generator laravel</strong> — <code>Str::slug($title)</code>.</li>
      </ul>
      <p>A simple <strong>url slug generator</strong> and <strong>slug generator</strong> for any <strong>url slug</strong>.</p>`,

  'screen-resolution': `
      <h2>What is my screen resolution?</h2>
      <p>Open this page to see your <strong>screen resolution</strong> instantly — plus the physical pixels behind any display scaling, your browser window (viewport) size, the available screen area, device pixel ratio, colour depth, orientation and <strong>aspect ratio</strong>. It answers <strong>what is my screen resolution</strong> (and <strong>what is my screen resolution size</strong>) on any phone, tablet or computer, and updates as you resize.</p>
      <h2>In pixels and inches</h2>
      <p><strong>what is my screen resolution in pixels</strong>: the main number, e.g. 1920 × 1080. On a scaled display — Windows at 150%, or any Retina screen — the page also shows the real physical pixels. <strong>what is my screen resolution in inches</strong>? Resolution is measured in pixels; screen <em>size</em> is the diagonal in inches. Pixels per inch = diagonal pixels ÷ diagonal inches — a 15.6" Full HD laptop is about 141 PPI. <strong>what is my screen resolution and aspect ratio</strong>: 1920 × 1080 is 16:9, 2560 × 1600 is 16:10.</p>
      <h2>Common resolutions</h2>
      <ul>
        <li><strong>what is the screen resolution for 4k</strong>? 3840 × 2160. <strong>what is the screen resolution for 2k</strong>? Usually 2560 × 1440 (QHD) on monitors; the cinema standard is 2048 × 1080.</li>
        <li><strong>what is the screen resolution for a laptop</strong>? Most are 1920 × 1080; premium models go higher.</li>
        <li><strong>what is the screen resolution for steam deck</strong>? 1280 × 800 (LCD and OLED).</li>
        <li><strong>what is the screen resolution for macbook air</strong>? 13-inch (M2 and later): 2560 × 1664; 15-inch: 2880 × 1864.</li>
        <li><strong>what is the screen resolution for macbook pro</strong>? 14-inch: 3024 × 1964; 16-inch: 3456 × 2234.</li>
        <li><strong>what is the screen resolution for iphone 15 pro</strong>? 2556 × 1179. <strong>what is the screen resolution for iphone 15 pro max</strong>? 2796 × 1290. <strong>what is the screen resolution for iphone 16 pro max</strong> and <strong>what is the screen resolution for iphone 17 pro max</strong>? 2868 × 1320.</li>
      </ul>
      <h2>Windows 10, Mac and Android</h2>
      <ul>
        <li><strong>what is my screen resolution windows 10</strong> (and 11) — Settings → System → Display → Display resolution.</li>
        <li><strong>what is my screen resolution mac</strong> — System Settings → Displays (hover over a size to see its resolution).</li>
        <li><strong>what is my screen resolution android</strong> — many phones show it in Settings → Display → Screen resolution; or just open this page.</li>
      </ul>
      <p>Like <strong>what is my screen resolution.net</strong>-style sites, but with physical pixels and aspect ratio included.</p>`,

  'browser-info': `
      <h2>What is my browser?</h2>
      <p>This page detects your <strong>browser and version</strong>, your operating system (including Windows 10 vs 11, Android and iOS versions), whether you're on a phone or desktop, and your language, time zone, CPU cores, memory, graphics card and screen size. It also checks whether cookies, a touch screen and Do Not Track are enabled, and shows your full user agent with a copy button. It answers <strong>what is my browser</strong> and <strong>what is my browser version</strong> in one look — handy when support asks.</p>
      <h2>On your phone, iPhone or iPad</h2>
      <p>Open this page in the app you use to browse: <strong>what is my browser on this phone</strong> (or <strong>what is my browser for this phone</strong>) is shown at the top. <strong>what is my browser on my iphone</strong> or <strong>what is my browser on my ipad</strong>? Usually Safari, unless you installed Chrome or another <strong>what is my browser app</strong>. <strong>what is my browser on my computer</strong> works the same way.</p>
      <h2>Default browsers by device</h2>
      <ul>
        <li><strong>what is the browser for iphone</strong>, <strong>what is the browser for apple</strong> and <strong>what is the browser for mac</strong>? Safari.</li>
        <li><strong>what is the browser for microsoft</strong> Windows? Microsoft Edge.</li>
        <li><strong>what is the browser for android</strong> and <strong>what is the browser for google</strong>? Chrome. <strong>what is the browser for samsung</strong>? Samsung Internet (Chrome is also installed on most).</li>
        <li><strong>what is the browser for ps5</strong> and <strong>what is the browser for roku tv</strong>? Neither has an official general web browser.</li>
      </ul>
      <h2>Browser size, cache and settings</h2>
      <ul>
        <li><strong>what is my browser size</strong> — the window size is on the <a href="/screen-resolution">Screen Resolution</a> page.</li>
        <li><strong>what is my browser cache</strong> — saved copies of websites that make them load faster. To clear it in Chrome, Edge or Firefox, press Ctrl + Shift + Delete.</li>
        <li><strong>what is my browser setting</strong> — open the menu (⋮ or ⋯) → Settings; this page shows the key ones, like cookies and language.</li>
      </ul>`,

  'dead-pixel-test': `
      <h2>Dead pixel test — full screen</h2>
      <p>Press <strong>Start full-screen test</strong> and your whole screen fills with one colour at a time: black, white, red, green, blue, gray, cyan, magenta and yellow. Click or press → for the next colour, ← to go back and Esc to exit. Look closely for dots that don't match. It's a <strong>dead pixel test full screen</strong> — a <strong>dead pixel tester</strong> that works on any device.</p>
      <h2>Dead, stuck or hot?</h2>
      <ul>
        <li><strong>Dead pixel</strong> — always black; easiest to see on the white screen.</li>
        <li><strong>Stuck pixel</strong> — always one colour (red, green or blue); look on black and the other colours.</li>
        <li><strong>Hot pixel</strong> — always white; shows up on black.</li>
      </ul>
      <p>Clean your screen first so dust isn't mistaken for a pixel.</p>
      <h2>Test and fix</h2>
      <p>As a <strong>dead pixel test and fix</strong>: stuck pixels can sometimes be revived by rapidly flashing colours over them for a few minutes, or by gently massaging the spot through a soft cloth (with the screen off). Truly dead pixels usually can't be fixed — check your warranty, as many brands replace screens with a set number of bad pixels.</p>
      <h2>Monitor, laptop, TV and Mac</h2>
      <p>As a <strong>dead pixel test monitor</strong> (a <strong>dead pixel test for monitor</strong> and <strong>dead pixel test for laptop</strong>), test a new display within the return window. A <strong>dead pixel test for mac</strong> works in Safari or Chrome. For a <strong>dead pixel test for tv</strong>, open this page in the TV's browser or connect a laptop by HDMI.</p>
      <h2>Phone, iPhone, Android and iPad</h2>
      <p>It works as a <strong>dead pixel test phone</strong> (or <strong>dead pixel test for phone</strong>, <strong>dead pixel test for mobile</strong>) check on Android — a <strong>dead pixel test android</strong> and <strong>dead pixel test samsung</strong> check — and as a <strong>dead pixel test for ipad</strong>. As a <strong>dead pixel test iphone</strong> (<strong>dead pixel test for iphone</strong>), note that Safari on iPhone doesn't allow true full screen, so the colour fills the browser window — scroll to hide the bars and check the edges separately.</p>
      <h2>OLED screens</h2>
      <p>As a <strong>dead pixel test oled</strong> (<strong>dead pixel test for oled</strong>), the gray screen is also good for spotting burn-in — faint ghost images of keyboards or status bars.</p>
      <p>A <strong>dead pixel test for camera</strong> sensors is different: take a photo with the lens cap on and look for bright dots. A simple <strong>dead pixel test</strong>.</p>`,

  'cps-test': `
      <h2>CPS test — clicks per second</h2>
      <p>Choose a time — <strong>1, 5, 10, 30 or 60 seconds</strong> — then click the big box as fast as you can. The timer starts with your first click, and you'll see your live clicks, time left and CPS, then a final score with a rank from “Warming up” to “Lightning fast”. Your best score for each duration is saved on this device. It's a <strong>cps tester</strong> and <strong>cps test clicker</strong> with no ads in the way.</p>
      <h2>Right click, mobile and the 1-second test</h2>
      <ul>
        <li><strong>cps test right click</strong> (<strong>cps test for right click</strong>) — right-clicks count too, and the menu is blocked inside the box.</li>
        <li><strong>cps test mobile</strong> (<strong>cps test for mobile</strong>, <strong>cps test for phone</strong>) — tap with one or two fingers.</li>
        <li><strong>cps test 1 second</strong> — a burst test; longer tests show your real stamina.</li>
      </ul>
      <h2>Spacebar and keyboard</h2>
      <p>For a <strong>cps test spacebar</strong> (<strong>cps test for spacebar</strong>), <strong>cps test keyboard</strong> (<strong>cps test for keyboard</strong>) or <strong>cps test any key</strong> challenge, use the <a href="/spacebar-counter">Spacebar Counter</a>. A <strong>cps test for controller</strong> or <strong>cps test for xbox controller</strong> isn't possible here — use the <a href="/gamepad-tester">Gamepad Tester</a> to check your buttons.</p>
      <h2>CPS test for Minecraft</h2>
      <p>As a <strong>cps test for minecraft</strong> PvP practice: most players click 6–8 CPS normally. Jitter clicking (tensing your arm) reaches 10–14, butterfly clicking (two fingers alternating) 15–20, and drag clicking even more — though some servers limit high CPS. As a <strong>cps test for mouse</strong>, a sudden double count on single clicks can mean a failing switch — check with the <a href="/mouse-double-click-test">Mouse Double Click Test</a>.</p>
      <p>Like <strong>cps test.org</strong>-style pages, but clean and fast — a simple <strong>cps test</strong>.</p>`,

  'white-screen': `
      <h2>White screen — full screen light</h2>
      <p>Click the preview to fill your whole screen with pure white. Choose another colour — black, warm white, red, green, blue, yellow, orange, pink, purple, gray, cyan — or any custom colour. In full screen, use ← → to change colours, and click or press Esc to exit. Turn your screen brightness up for the brightest <strong>white screen</strong>.</p>
      <h2>White screen for light</h2>
      <ul>
        <li><strong>white screen for light</strong> on video calls — a second monitor or tablet with a <strong>white screen bright</strong> enough to act as a soft fill light (warm white is flattering).</li>
        <li><strong>white screen for pictures</strong> — a simple light source for product photos and makeup.</li>
        <li><strong>white screen for flashlight</strong> — in a pinch, a phone or laptop at full brightness lights a room.</li>
      </ul>
      <h2>Tracing, cleaning and testing</h2>
      <ul>
        <li><strong>white screen for tracing</strong> — put paper over a tablet showing white to trace drawings, like a lightbox.</li>
        <li><strong>white screen for cleaning</strong> — a <strong>white screen for cleaning monitor</strong> glass shows dust and specks clearly (black shows smudges better).</li>
        <li><strong>white screen test</strong> — check for uneven brightness, tint or dead pixels; for a full colour cycle, try the <a href="/dead-pixel-test">Dead Pixel Test</a>.</li>
      </ul>
      <h2>Projectors, phones and Windows</h2>
      <p>A <strong>white screen for projector</strong> (or <strong>white screen for projector outdoor</strong> movie nights) helps you focus the image and check the brightness and colour. It works on a <strong>white screen iphone</strong> or Android in the browser and as a <strong>white screen for windows</strong> PCs — no app.</p>
      <h2>Backgrounds and edits</h2>
      <p>Need a <strong>white screen background</strong>, <strong>white screen image</strong> or <strong>white screen wallpaper</strong> for <strong>white screen for edits</strong>? Go full screen and take a screenshot, or record the screen for a video clip — no <strong>white screen youtube</strong> video needed. (A <strong>white screen door</strong> is a home-improvement product — not this.)</p>`,

  'black-screen': `
      <h2>Black screen — full screen</h2>
      <p>Click the preview to fill your whole screen with pure black. Want another colour? Pick white, warm white, red, green, blue or any custom colour, or press ← → in full screen. Click or press Esc to exit. It's a <strong>black screen</strong> you can use on any device without an app.</p>
      <h2>Black screen for OLED, sleep and focus</h2>
      <ul>
        <li><strong>black screen for oled</strong> — black pixels are switched off on OLED, so it rests the panel and saves battery while keeping the device awake.</li>
        <li><strong>black screen for sleep</strong> — a dark screen when something must stay open overnight, like a music or white-noise tab.</li>
        <li><strong>black screen for projector</strong> — blank the projection between slides or talks without switching it off.</li>
      </ul>
      <h2>Cleaning and backlight bleed</h2>
      <p>A <strong>black screen for cleaning monitor</strong> glass makes fingerprints and streaks easy to see. In a dark room, black also reveals backlight bleed — light leaking at the edges of LCD screens.</p>
      <h2>Edits, CapCut and Instagram stories</h2>
      <p>For a <strong>black screen for edits</strong>, a <strong>black screen for capcut</strong> intro or a <strong>black screen for instagram story</strong>, go full screen and take a screenshot to get a <strong>black screen image</strong> or <strong>black screen wallpaper</strong>, or screen-record it for a <strong>black screen video</strong>. No <strong>black screen youtube</strong> video needed.</p>
      <h2>Phone, iPhone, laptop and Windows</h2>
      <p>It works as a <strong>black screen for iphone</strong> (or <strong>black screen on iphone</strong>), a <strong>black screen on laptop</strong> and a <strong>black screen for windows</strong>. On iPhone, Safari doesn't allow true full screen, so the black fills the browser window.</p>
      <h2>Black screen of death?</h2>
      <p>If your computer shows a <strong>black screen of death</strong> by itself, this page won't fix it — on Windows, try Win + Ctrl + Shift + B to restart the graphics driver; on iPhone, force-restart (volume up, volume down, then hold the side button). (A <strong>black screen door</strong> or <strong>black screen for porch</strong> is a different product, and <strong>black screen records</strong> is a music label.)</p>`,

  'spacebar-counter': `
      <h2>Spacebar counter — how fast can you press space?</h2>
      <p>Pick a time — <strong>5, 10, 30 or 60 seconds</strong>, or <strong>No limit</strong> — and press the spacebar as fast as you can. The count, time left and presses per second update live, and your best score for each time is saved. Holding the key down doesn't count, so every press is real. On a phone, tap the box. It's a <strong>spacebar counter online</strong> — a <strong>spacebar counter with timer</strong> (a <strong>space bar clicker with timer</strong>) and a <strong>spacebar counter game</strong> in one.</p>
      <h2>Spacebar speed test</h2>
      <p>As a <strong>spacebar speed test</strong> — a <strong>spacebar click speed test</strong>, <strong>spacebar tap speed test</strong> or <strong>click speed test for space bar</strong> — the result is presses per second, like CPS for a mouse. Try the <strong>spacebar counter 5 seconds</strong> (<strong>spacebar speed test 5 seconds</strong>) for a sprint and the <strong>spacebar counter 10 seconds</strong> (<strong>spacebar speed test 10 seconds</strong>) for the classic challenge. A <strong>spacebar speed test 1 second</strong> is too short to be fair, so 5 seconds is the minimum here.</p>
      <h2>How fast is fast?</h2>
      <p><strong>how fast can you click spacebar test</strong> results: most people manage 5–7 presses per second; 8+ is fast, and 10+ is excellent. Alternate two fingers or both thumbs for more speed. The <strong>world record for space bar clicker</strong> challenges online vary by site and rules, so beat your own best first.</p>
      <h2>CPS, per second and no limit</h2>
      <ul>
        <li><strong>spacebar counter cps</strong> (<strong>spacebar counter per second</strong>) — shown live during every test.</li>
        <li><strong>No limit</strong> mode — a plain <strong>spacebar counter clicker</strong> and <strong>space bar clicker counter</strong> for counting anything.</li>
        <li>For a mouse, use the <a href="/cps-test">CPS Test</a>.</li>
      </ul>
      <p>Like <strong>spacebar counter.io</strong> or <strong>hooda math spacebar clicker</strong> and other <strong>space bar clicker online games</strong>, but clean, free and fast — a simple <strong>spacebar counter</strong>, <strong>spacebar counter test</strong>, <strong>space bar clicker</strong> and <strong>space bar clicker test</strong> (a <strong>space bar clicker speed test</strong>).</p>`,

  'qr-code-scanner': `
      <h2>QR code scanner online</h2>
      <p>Click <strong>Scan with camera</strong> and point your camera at a QR code — it's read instantly with a beep. No camera handy? Drop a screenshot or photo, choose a file, or paste an image with Ctrl + V. You can copy the result, open links (with a warning to check them first, as QR codes can lead to scam sites), and see the network name of Wi-Fi QR codes. A history lists everything you scanned this session. It's a <strong>qr code scanner online</strong> and <strong>qr code scanner free</strong> to use — a <strong>qr code scanner for free</strong> with nothing to install, and decoding happens on your device.</p>
      <h2>QR code scanner from image</h2>
      <p>As a <strong>qr code scanner from image</strong> (or <strong>qr code scanner for pictures</strong>), it's perfect when the QR code is already on your screen — in an email, a PDF or a website — where you can't point a camera at it. Take a screenshot (Win + Shift + S on Windows, Cmd + Shift + 4 on a Mac) and paste it here.</p>
      <h2>On PC, laptop and Mac</h2>
      <p>As a <strong>qr code scanner for pc</strong> or <strong>qr code scanner for computer</strong>, use a screenshot as above, or hold a printed code up to your webcam. It works as a <strong>qr code scanner for laptop</strong> with a built-in camera, and as a <strong>qr code scanner for mac</strong> (or <strong>qr code scanner for macbook</strong>) in Safari or Chrome.</p>
      <h2>On Android and iPhone</h2>
      <p>As a <strong>qr code scanner online mobile</strong>, open this page and allow the camera — it uses the rear camera. On an iPhone (a <strong>qr code scanner for iphone</strong>), the built-in Camera app also reads QR codes; on Android (a <strong>qr code scanner android</strong>, <strong>qr code scanner for android</strong> or <strong>qr code scanner for android phone</strong>), the camera or Google Lens does — the <strong>qr code scanner google</strong> option. This page is handy when those aren't available, or for scanning images, without another <strong>qr code scanner app</strong>.</p>
      <p>It reads QR codes, not regular barcodes. To make your own code, use the <a href="/qr-code-generator">QR Code Generator</a>. A simple <strong>qr code scanner</strong>.</p>`,

  'barcode-generator': `
      <h2>Free barcode generator online</h2>
      <p>Choose a barcode type — <strong>Code 128</strong>, <strong>EAN-13</strong>, <strong>EAN-8</strong>, <strong>UPC-A</strong>, <strong>Code 39</strong>, <strong>ITF-14</strong>, Codabar, MSI or Pharmacode — enter the value, and adjust the bar width, height, colour and whether the number shows underneath. The barcode updates live and warns you if the value isn't valid for that type. Download as a high-resolution <strong>PNG</strong> or a scalable <strong>SVG</strong> for print. It's a <strong>barcode generator free online</strong> — a <strong>barcode generator for free</strong> with no watermark or sign-up.</p>
      <h2>Which barcode should I use?</h2>
      <ul>
        <li><strong>barcode generator 128</strong> — Code 128 holds any letters and numbers compactly; the best choice for a <strong>barcode generator for inventory</strong>, asset tags and shipping labels.</li>
        <li><strong>barcode generator for products</strong> in shops — EAN-13 (worldwide) or UPC-A (USA, Canada). Real retail numbers must come from GS1; made-up numbers won't be accepted by stores or Amazon.</li>
        <li><strong>barcode generator for books</strong> — an ISBN-13 is an EAN-13: enter the 13 digits without hyphens.</li>
        <li>ITF-14 for outer cartons; Code 39 for older systems that need it.</li>
      </ul>
      <h2>In Excel and Word</h2>
      <p>As a <strong>barcode generator for excel</strong> (<strong>barcode generator excel</strong>) or <strong>barcode generator for word</strong>, download each barcode as PNG or SVG and use Insert → Pictures. For hundreds of codes, a barcode font or label software is faster — but for a few labels, this beats installing <strong>barcode generator software</strong> or a <strong>barcode generator app</strong>.</p>
      <h2>POS systems, links and websites</h2>
      <ul>
        <li><strong>barcode generator for square</strong> or other POS systems — use the same value you enter as the item's SKU or barcode in the system, so the scanner finds it.</li>
        <li><strong>barcode generator for link</strong> or <strong>barcode generator for website</strong> addresses — phones scan QR codes far more easily; use the <a href="/qr-code-generator">QR Code Generator</a>.</li>
        <li><strong>barcode generator for username and password</strong> — avoid it: anyone with a scanner can read a barcode.</li>
      </ul>
      <p>A simple <strong>barcode generator</strong> — a <strong>barcode generator online</strong> and <strong>barcode generator free</strong> tool.</p>`,

  'password-strength-checker': `
      <h2>Password strength checker — how long to crack?</h2>
      <p>Type a password to see its strength, its estimated entropy in bits, and how long it would take to crack — both in a <strong>fast offline attack</strong> (10 billion guesses per second, as with stolen password databases) and an <strong>online attack</strong> (100 guesses per second against a login page). A checklist shows what's missing (12+ characters, uppercase, lowercase, numbers, symbols), and warnings flag common passwords, repeated characters, sequences like “123” or “qwerty”, and years. It's a <strong>password strength checker online</strong> and a <strong>password strength checker how long to crack</strong> estimate in one.</p>
      <h2>Is it safe to type my password here?</h2>
      <p>The check runs entirely in your browser — the password is never sent anywhere or stored. Even so, it's good practice to test a similar password rather than your real one.</p>
      <h2>Brute force and what makes a password strong</h2>
      <p>As a <strong>password strength checker brute force</strong> estimate: every extra character multiplies the guesses an attacker needs. Length beats complexity — a four-word passphrase like “maple-orbit-candle-river” is far stronger than “P@ss1”. Avoid names, dates and common words with a number on the end; attackers try those first. Use a different password for every site and a password manager to remember them.</p>
      <h2>Checker and generator</h2>
      <p>For a <strong>password strength checker and generator</strong> pair, create a strong password with the <a href="/password-generator">Password Generator</a>, then check it here. It's simple enough for a <strong>password strength checker for kids</strong> lesson in online safety.</p>
      <h2>Build one: projects in Python, JavaScript and more</h2>
      <p>A <strong>password strength checker project</strong> is a classic <strong>password strength checker project in cyber security</strong> courses. The logic this page uses is a good starting point: count the character types, estimate entropy as length × log₂(pool size), then subtract for common passwords, repeats and sequences.</p>
      <ul>
        <li><strong>password strength checker python</strong> (<strong>password strength checker in python</strong>, <strong>password strength checker program in python</strong> or <strong>password strength checker code in python</strong>) — use regular expressions for each character class and <code>math.log2</code>; the <code>zxcvbn</code> package gives realistic estimates.</li>
        <li><strong>password strength checker in javascript</strong> (<strong>password strength checker js</strong> or <strong>password strength checker in react js</strong>) — the zxcvbn library works in the browser; update a meter on every input event.</li>
        <li><strong>password strength checker in java</strong> or <strong>password strength checker in c</strong> — the same rules with <code>Character.isUpperCase()</code> or <code>isupper()</code> loops.</li>
      </ul>
      <p>Search <strong>password strength checker github</strong> for open-source examples, and document your rules and test cases for a <strong>password strength checker project report pdf</strong>. A simple <strong>password strength checker</strong>.</p>`,

  'spin-the-wheel': `
      <h2>Spin the wheel — random name picker</h2>
      <p>Type your entries, one per line, and click the wheel or <strong>Spin</strong>. It spins for about five seconds with a ticking sound and lands on a random winner. Tick the option to remove the winner after each spin for draws with several prizes. Shuffle or sort the list with one click; your entries are saved for next time, and a history lists every winner. It's a <strong>spin the wheel - random picker</strong> that's <strong>spin the wheel for free</strong> — a <strong>spin the wheel generator</strong> and <strong>spin the wheel picker</strong> with no ads on the wheel.</p>
      <h2>Spin the wheel for names</h2>
      <p>As a <strong>spin the wheel names</strong> (or <strong>spin the wheel for names</strong>) picker, it's ideal for choosing who goes first, picking a student to answer, assigning chores or drawing Secret Santa pairs.</p>
      <h2>Instagram giveaways</h2>
      <p>As a <strong>spin the wheel for instagram giveaway</strong>, paste the usernames of everyone who entered, then screen-record the spin so followers can see the draw was fair.</p>
      <h2>Yes or no, numbers and colours</h2>
      <ul>
        <li><strong>spin the wheel yes or no</strong> — enter “Yes” and “No” (add “Maybe” for fun).</li>
        <li><strong>spin the wheel number</strong> — enter 1 to 10; for big ranges, the <a href="/random-number-generator">Random Number Generator</a> is quicker.</li>
        <li><strong>spin the wheel colors</strong> (<strong>spin the wheel for colors</strong>) — type colour names for art prompts or games.</li>
      </ul>
      <h2>Food, games and challenges</h2>
      <ul>
        <li><strong>spin the wheel for food</strong> and <strong>spin the wheel for dinner</strong> — list restaurants or recipes and let the wheel end the debate.</li>
        <li><strong>spin the wheel fortnite</strong> and <strong>spin the wheel fortnite challenges</strong> — drop spots, loadout rules or “no-build” challenges.</li>
        <li><strong>spin the wheel forsaken</strong> or any Roblox game — characters or challenges to try.</li>
        <li>A classroom <strong>spin the wheel game</strong> — topics, questions or rewards.</li>
      </ul>
      <p>It's a fully <strong>spin the wheel custom</strong> wheel — any text works. (A physical prize wheel <strong>spin the wheel for sale</strong> is a different thing.) A simple <strong>spin the wheel</strong>.</p>
      <p class="small muted">Results use your browser's cryptographically secure random generator, so every outcome is equally likely.</p>`,

  'coin-flip': `
      <h2>Flip a coin — heads or tails</h2>
      <p>Click the coin or <strong>Flip coin</strong> to toss it with a 3D spin. You'll see <strong>Heads!</strong> or <strong>Tails!</strong>, a running count with percentages, and your last 40 results. <strong>Flip 10 times</strong> tosses ten at once. It's a <strong>flip a coin generator</strong> that's fair, free and instant — <strong>flip a coin heads or tails</strong> (or <strong>flip a coin for heads or tails</strong>) in one click.</p>
      <h2>Flip a coin for me</h2>
      <p>Need a quick decision? <strong>flip a coin for me</strong> — or <strong>flip a coin for me please</strong> — and let chance decide. Assign each side before you flip: it's a <strong>flip a coin for yes or no</strong> (<strong>flip a coin yes or no</strong>) answer, or a <strong>flip a coin for two options</strong> tie-breaker, like which film to watch. It works as a <strong>flip a coin for me heads or tails</strong> and <strong>flip a coin for me online</strong> tool — <strong>flip a coin please</strong>, and it's done.</p>
      <h2>Best of 3, or 100 times</h2>
      <ul>
        <li><strong>flip a coin 3 times</strong> (<strong>flip a coin for me 3 times</strong>) — best of three settles arguments fairly; the count keeps score.</li>
        <li><strong>flip a coin 100 times</strong> — press “Flip 10 times” ten times and watch the percentages settle near 50/50 (the law of large numbers in action).</li>
      </ul>
      <h2>For two people</h2>
      <p>To <strong>flip a coin for us</strong> — two people deciding who goes first or who pays — agree on who is heads before flipping. Like the <strong>flip a coin google</strong> (<strong>flip a coin for me google</strong>) answer, it's instant, but this one keeps a tally and needs no <strong>flip a coin app</strong>. A simple <strong>flip a coin</strong>.</p>
      <p class="small muted">Results use your browser's cryptographically secure random generator, so every outcome is equally likely.</p>`,

  'dice-roller': `
      <h2>Online dice roller — D4 to D100</h2>
      <p>Pick how many dice to roll (1 to 10) and the dice type — <strong>D4</strong>, <strong>D6</strong>, <strong>D8</strong>, <strong>D10</strong>, <strong>D12</strong>, <strong>D20</strong> or <strong>D100</strong> — and press <strong>Roll</strong>. Six-sided dice show real pips; you get the total and a history of recent rolls (like “2d6: 4+3=7”). It's a <strong>dice roller online</strong> that's <strong>dice roller for free</strong>, with no <strong>dice roller app</strong> to install.</p>
      <h2>Dice roller for DnD (5e)</h2>
      <p>As a <strong>dice roller dnd</strong> (<strong>dice roller for dnd</strong> or <strong>dice roller 5e</strong>) companion:</p>
      <ul>
        <li><strong>dice roller d20</strong> — attack rolls, saving throws and ability checks. For advantage, roll 2 D20 and keep the higher.</li>
        <li><strong>dice roller for dnd stats</strong> — roll 4 D6, drop the lowest, and repeat six times.</li>
        <li><strong>dice roller d100</strong> — percentile rolls for loot tables and wild magic.</li>
        <li>Damage — 2d6 for a greatsword, 8d6 for a fireball (roll 8 D6).</li>
      </ul>
      <h2>Board games and 40k</h2>
      <ul>
        <li><strong>dice roller 1-6</strong> — one D6 for any board game.</li>
        <li><strong>dice roller for monopoly</strong> — roll 2 D6; matching numbers are doubles.</li>
        <li><strong>dice roller for 40k</strong> — Warhammer 40,000 uses lots of D6; roll up to 10 at once and count the hits.</li>
      </ul>
      <h2>Kids, Discord and fun</h2>
      <p>A <strong>dice roller for kids</strong> makes maths games easy (add the dice, then check the total). For a <strong>dice roller for discord</strong> game night, roll here and share the result on screen. Use it as a <strong>dice roller game</strong> for party challenges, or a <strong>dice roller for food</strong> — number six meals and roll a D6. Roblox players use it for a <strong>dice roller for sab</strong> (<strong>dice roller for steal a brainrot</strong>) challenge. Like the <strong>dice roller google</strong> shows, but with more dice types — a simple <strong>dice roller</strong>.</p>
      <p class="small muted">Results use your browser's cryptographically secure random generator, so every outcome is equally likely.</p>`,

  'signature-generator': `
      <h2>Signature generator — draw or type</h2>
      <p>Choose <strong>✍️ Draw</strong> to sign with your mouse, finger or stylus, or <strong>⌨️ Type</strong> to write your name in nine handwriting-style fonts. Pick black, blue or red ink and the pen size, then <strong>download a transparent PNG</strong> — or tick white background — or copy the image to paste straight into a document. It's a <strong>signature generator free</strong> to use (a <strong>signature generator for free</strong>), and your signature never leaves your device.</p>
      <h2>Signature generator for my name</h2>
      <p>As a <strong>signature generator for my name</strong> (a <strong>signature generator for name</strong>, or a <strong>signature generator for my name free</strong> of watermarks), type your name and click the style you like. The <strong>signature generator cursive</strong> fonts — Great Vibes, Allura, Alex Brush, Pinyon Script and more — make a <strong>signature generator for my name cursive</strong> look in seconds (a <strong>signature generator cursive free</strong> option). For a truly <strong>signature generator handwritten</strong> result, use Draw mode on a phone or tablet with your finger.</p>
      <h2>For PDF, Word and documents</h2>
      <ul>
        <li><strong>signature generator for pdf</strong> — download the PNG, then place it on your document with <a href="/sign-pdf">Sign PDF</a>.</li>
        <li><strong>signature generator for word</strong> — Insert → Pictures, then set Wrap Text to “In Front of Text” to position it over the line.</li>
        <li><strong>signature generator for documents</strong> like forms and letters — the transparent background sits neatly on any page.</li>
      </ul>
      <h2>Email and Outlook</h2>
      <p>As a <strong>signature generator for email</strong> or <strong>signature generator for outlook</strong>, add the PNG as an image in your email signature settings (in Outlook, search Settings for “Signatures”).</p>
      <h2>Copy and paste</h2>
      <p>For <strong>signature generator copy and paste</strong>, click “Copy image” and paste with Ctrl + V into Word, Google Docs, email or chat. This isn't a <strong>signature generator ai</strong> — it's your own signature or name. For contracts that need verified identity, use a certified e-signature service. A simple <strong>signature generator</strong>.</p>`,

  'invoice-generator': `
      <h2>Free invoice generator online</h2>
      <p>Fill in your business details and your client's, the invoice number, date and due date, then add line items with quantity and rate. Set any currency, a discount %, tax %, shipping and notes, add your <strong>logo</strong> and pick an accent colour. The preview updates live, and <strong>Download PDF</strong> saves a clean A4 invoice (choose “Save as PDF” in the print window). Everything is saved in your browser, and <strong>New invoice</strong> keeps your details and moves to the next invoice number. It's an <strong>invoice generator free</strong> — an <strong>invoice generator online free</strong> (or <strong>invoice generator for free online</strong>) with no watermark, sign-up or <strong>invoice generator free download</strong> needed.</p>
      <h2>Invoice generator format</h2>
      <p>The standard <strong>invoice generator format</strong> includes: your name and contact details, the client's details, a unique invoice number, the issue and due dates, itemised services or products, subtotal, discount, tax, total, and payment instructions in the notes (bank details or payment link). This template includes all of them.</p>
      <h2>For freelancers, contractors and small businesses</h2>
      <ul>
        <li><strong>invoice generator for freelancers</strong> — list hours or projects as items; put payment terms such as “Net 14” in the notes.</li>
        <li><strong>invoice generator for contractor</strong> work — separate labour and materials as line items.</li>
        <li><strong>invoice generator for small business</strong> owners — add your logo and tax number for a professional look.</li>
        <li><strong>invoice generator for influencers</strong> — invoice brands for posts, reels and usage rights.</li>
        <li><strong>invoice generator for travel agency</strong> and <strong>invoice generator for hotel</strong> bills — itemise rooms, nights, tickets and services.</li>
      </ul>
      <h2>Compared with apps</h2>
      <p>Full accounting apps like the <strong>invoice generator zoho</strong> offers track payments and clients, but need an account. For simple invoicing, people on Reddit (<strong>invoice generator reddit</strong>, <strong>invoice generator free reddit</strong>) often recommend lightweight tools like this one. It runs in any browser, so it's an <strong>invoice generator for pc</strong> and phone without an <strong>invoice generator app</strong>. It isn't an <strong>invoice generator ai</strong> — you stay in control of every line. Your data stays on your device; download each PDF to keep records. A simple <strong>invoice generator online</strong> — the <strong>invoice generator</strong> for any business.</p>`,

  'todo-list': `
      <h2>Simple online to-do list</h2>
      <p>Type a task and press Enter to add it. Tick tasks off as you finish them, click any task to edit it, and delete with ✕. Filter by <strong>All</strong>, <strong>Active</strong> or <strong>Completed</strong>, and clear finished tasks in one click. A counter shows how many are left. Your list is saved automatically in this browser, so it's there when you come back — a free <strong>to-do list app</strong> without an account.</p>
      <h2>To-do list for today</h2>
      <p>A <strong>to-do list for today</strong> works best when it's short: pick three must-do tasks, then add smaller ones. Start with the hardest task while your energy is highest, and break big jobs into steps you can finish in under an hour.</p>
      <h2>To-do list for ADHD adults</h2>
      <p>As a <strong>to-do list for adhd adults</strong>, keep it visible and small: write tasks as actions (“email Sara about rent”, not “rent”), check off even tiny wins, and pair it with the <a href="/pomodoro-timer">Pomodoro Timer</a> to start. Clearing completed tasks keeps the list from feeling overwhelming.</p>
      <h2>For students, school and kids</h2>
      <ul>
        <li><strong>to-do list for students</strong> (a <strong>to-do list for students free</strong> option) — homework, revision topics and deadlines, oldest due first.</li>
        <li><strong>to-do list for school</strong> — one task per subject, ticked off after each study session.</li>
        <li><strong>to-do list for kids</strong> — morning routine and chores; ticking boxes is motivating.</li>
      </ul>
      <h2>Template and format</h2>
      <p>A good <strong>to-do list format</strong>: one action per line, starting with a verb, with a deadline if it has one. This page is a ready-made <strong>to-do list template</strong>. If you prefer files, a <strong>to-do list template excel</strong> needs just three columns — Task, Due date, Done (a checkbox) — and a <strong>to-do list template word</strong> is a bulleted checklist. List <strong>to-do list items</strong> like “Pay electricity bill” rather than vague goals.</p>
      <h2>Desktop and Windows</h2>
      <p>Bookmark it and it's a <strong>to do list for desktop</strong> and a <strong>to do list for windows</strong>, Mac or phone — no install. Lists are stored per browser and device, so use the same browser each time. A simple <strong>to-do list</strong>.</p>`,

  'tally-counter': `
      <h2>Online tally counter</h2>
      <p>Tap the big <strong>+</strong> button to count, <strong>−</strong> to undo and <strong>↺</strong> to reset. On a keyboard, press <kbd>Space</kbd> or <kbd>↑</kbd> to count up and <kbd>↓</kbd> to count down. Name your counter, set a step size (count by 2s, 5s or 10s) and switch on a click sound. Everything is saved automatically, so your count survives a refresh. It's a <strong>tally counter online</strong> — a <strong>tally counter clicker</strong> that works like a <strong>tally counter app</strong> without installing anything.</p>
      <h2>Tally counter for multiple things</h2>
      <p>Click <strong>+ Add counter</strong> to track several things at once, each with its own name and +/− buttons, plus a grand total. That makes it a <strong>tally counter for multiple things</strong> — cars vs bikes in a traffic count, or items by type in a stock take — and a <strong>tally counter for two people</strong> or a <strong>tally counter for 3 people</strong>: one counter per person for scores, laps or reps.</p>
      <h2>Prayer, tasbih and naam jap</h2>
      <p>As a <strong>tally counter for prayer</strong>, it works for tasbih and dhikr (33 or 99 counts), rosary prayers and a <strong>tally counter for naam jap</strong> — 108 repetitions for a mala. Turn on the click sound so you can count without looking.</p>
      <h2>Other uses</h2>
      <ul>
        <li>People at an event door, laps on a track, stitches and rows in knitting, birds or plants in a survey.</li>
        <li>Inventory — count by 6s or 12s with the step setting.</li>
      </ul>
      <h2>Physical clickers</h2>
      <p>A metal hand clicker or a <strong>tally counter for finger</strong> ring (popular for dhikr) works without a screen — you'll find them as a <strong>tally counter amazon</strong> or <strong>tally counter walmart</strong> listing, a <strong>tally counter for sale</strong> online, or at a stationery shop <strong>tally counter near me</strong> (<strong>tally counter nearby</strong>). This page is the free alternative on your phone, with multiple counters and a saved history.</p>
      <h2>Terraria</h2>
      <p>The <strong>tally counter terraria</strong> item (also in the <strong>tally counter calamity</strong> mod) is an accessory that shows how many of the last enemy type you've killed — a game item, not this tool. A simple <strong>tally counter</strong>.</p>`,
};

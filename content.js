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
      
      <h2>A key stays grey on a desktop or external keyboard</h2>
      <ol>
        <li><strong>Try another USB port</strong>, ideally one directly on the computer rather than a hub or the monitor.</li>
        <li><strong>Wireless keyboard?</strong> Replace or recharge the batteries and move the receiver closer — weak power causes missed and repeated keys long before the keyboard stops completely.</li>
        <li><strong>Test it on a second computer or phone.</strong> If the same key fails there, the keyboard is at fault, not your PC.</li>
        <li><strong>Mechanical keyboard:</strong> pull the keycap and blow out the switch. On hot-swap boards, swap the switch with one from a key you rarely use and test again.</li>
        <li><strong>Check remapping software.</strong> Gaming suites, PowerToys Keyboard Manager and AutoHotkey scripts can disable or change a key so it never reaches the browser.</li>
      </ol>
      <p>Testing a laptop's built-in keyboard instead? The <a href="/laptop-keyboard-test">laptop keyboard test</a> has the laptop-specific steps, and there are pages for <a href="/dell-keyboard-test">Dell</a>, <a href="/hp-keyboard-test">HP</a>, <a href="/lenovo-keyboard-test">Lenovo</a>, <a href="/asus-keyboard-test">ASUS</a>, <a href="/acer-keyboard-test">Acer</a> and <a href="/macbook-keyboard-test">MacBook</a>.</p>`,

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
      <p>This page is set to the Windows laptop layout used by most Dell Inspiron, Vostro, Latitude, XPS and G-series laptops. If your Dell has a number pad (most 15.6″ and larger models), tick <strong>Numeric keypad</strong>. Press every key from Esc to the right arrow and check that each one turns green.</p>
      <p class="small muted">Green means the key works, blue means it is held down, and dashed keys (Fn) can't be seen by any website. The full colour guide and the general step-by-step fixes for a dead key are on the <a href="/laptop-keyboard-test">laptop keyboard test</a> page; this page covers what is specific to Dell.</p>
      <h2>Dell keys that behave differently</h2>
      <ul>
        <li><strong>Top row.</strong> Dell ships most laptops with the top row in multimedia mode, so F1–F12 may not light up until you hold <kbd>Fn</kbd> or switch <strong>Fn Lock</strong> with <kbd>Fn</kbd> + <kbd>Esc</kbd>. To change it permanently, restart, press <kbd>F2</kbd> for the BIOS setup and look for <strong>Function Key Behavior</strong>.</li>
        <li><strong>Keyboard backlight.</strong> It is the key with the glowing-keyboard icon — <kbd>F5</kbd> on many recent Inspiron and XPS models, <kbd>F10</kbd> or <kbd>F6</kbd> on others, sometimes with Fn. The backlight changes inside the laptop, so that press may not light up here.</li>
        <li><strong>Compact models.</strong> On small Dells such as the XPS 13, Home, End, PgUp and PgDn share keys with the arrows or the F-row and need Fn. Test them as a combination.</li>
        <li><strong>Latitude pointing stick.</strong> The small stick between G, H and B and the extra buttons below the space bar are mouse controls. They will not show up in a keyboard test.</li>
      </ul>
      <h2>Run Dell's own keyboard diagnostic</h2>
      <ol>
        <li><strong>Before Windows starts:</strong> restart and tap <kbd>F12</kbd> at the Dell logo, then choose <strong>Diagnostics</strong>. This pre-boot test (ePSA / SupportAssist Pre-Boot) checks the keyboard without any drivers, so a failure there is a hardware fault.</li>
        <li><strong>Inside Windows:</strong> open the <strong>SupportAssist</strong> app, go to Troubleshooting, choose to check a specific piece of hardware and pick Keyboard.</li>
        <li>Note any error code. If the laptop is under warranty, Dell support will ask for it together with the Service Tag printed on the bottom of the laptop.</li>
      </ol>
      <h2>If keys fail on your Dell</h2>
      <ul>
        <li><strong>A few keys dead after a spill or crumbs:</strong> clean first, then re-test here. One dead key is usually dirt; a whole row or column is usually the keyboard matrix or its ribbon cable.</li>
        <li><strong>Keys or touchpad feel raised:</strong> stop and have the battery checked. A swollen battery under the palm rest can push the keyboard up on thin laptops.</li>
        <li><strong>Replacement:</strong> on many Inspiron, Vostro and Latitude models the keyboard is a separate part. On thin models such as the XPS line it is built into the palm-rest assembly, so the repair costs more.</li>
      </ul>`,

  'hp-keyboard-test': `
      <h2>Testing an HP laptop keyboard</h2>
      <p>This page uses the Windows laptop layout found on HP Pavilion, Victus, Envy, Omen, ProBook and EliteBook laptops. Tick <strong>Numeric keypad</strong> if your HP has one. Work across each row and make sure every key turns green.</p>
      <p class="small muted">Green means the key works, blue means it is held down, and dashed keys (Fn) can't be seen by any website. The full colour guide and the general step-by-step fixes for a dead key are on the <a href="/laptop-keyboard-test">laptop keyboard test</a> page; this page covers what is specific to HP.</p>
      <h2>HP keys that behave differently</h2>
      <ul>
        <li><strong>Action keys.</strong> HP ships the top row as action keys (brightness, volume, playback). F1–F12 only register here while you hold <kbd>Fn</kbd>, unless you turn off <strong>Action Keys Mode</strong>: restart, press <kbd>F10</kbd> for the BIOS, open <strong>System Configuration</strong>.</li>
        <li><strong>Fn Lock on business models.</strong> On many ProBook and EliteBook keyboards <kbd>Fn</kbd> + left <kbd>Shift</kbd> toggles Fn Lock without entering the BIOS.</li>
        <li><strong>Power key in the top row.</strong> Many Envy, Spectre and Pavilion models have the power button as a keyboard key at the top right. Skip it — pressing it puts the laptop to sleep.</li>
        <li><strong>Extra column on the right.</strong> 14″ and 15″ HPs often have Home, PgUp, PgDn and End in a column beside Enter and Backspace. They are easy to miss, so use <strong>Highlight untested keys</strong> at the end.</li>
        <li><strong>Fingerprint reader.</strong> On newer models it sits where right Ctrl used to be. It is not a key and will not light up.</li>
      </ul>
      <h2>Run HP's keyboard test</h2>
      <ol>
        <li>Restart and press <kbd>Esc</kbd> repeatedly until the startup menu appears.</li>
        <li>Press <kbd>F2</kbd> for <strong>HP PC Hardware Diagnostics UEFI</strong>.</li>
        <li>Choose <strong>Component Tests → Keyboard</strong> and follow the prompts. Because this runs outside Windows, a failure here confirms a hardware fault before you contact HP support.</li>
      </ol>
      <h2>If the whole HP keyboard stops responding</h2>
      <p>Try a power reset first: shut down, unplug the charger and all USB devices, hold the power button for about 15 seconds, then start up and test again. If keys still fail both here and in the UEFI test, the keyboard needs service. On many HP consumer laptops the keyboard is fixed into the top cover, so it is replaced together with the palm rest.</p>`,

  'lenovo-keyboard-test': `
      <h2>The Lenovo layout</h2>
      <p>Lenovo keyboards are a little different from other laptops, so this page draws them accurately: the <kbd>Fn</kbd> key is at the far bottom-left (before Ctrl), <kbd>PrtSc</kbd> sits between the right Alt and Ctrl, and <kbd>PgUp</kbd> / <kbd>PgDn</kbd> are above the left and right arrows, as on ThinkPads. Tick <strong>Numeric keypad</strong> for IdeaPad and Legion models that have one.</p>
      <p class="small muted">Green means the key works, blue means it is held down, and dashed keys (Fn) can't be seen by any website. The full colour guide and the general step-by-step fixes for a dead key are on the <a href="/laptop-keyboard-test">laptop keyboard test</a> page; this page covers what is specific to Lenovo.</p>
      <h2>ThinkPad, IdeaPad and Legion differences</h2>
      <ul>
        <li><strong>Fn and Ctrl.</strong> Classic ThinkPads put Fn in the corner. You can swap the two in the BIOS setup or in Lenovo Vantage (<strong>Fn and Ctrl Key Swap</strong>). ThinkPads released from 2024 onward ship with Ctrl in the corner instead — the test still works, because keys light up by the signal they send, not by position.</li>
        <li><strong>FnLock.</strong> <kbd>Fn</kbd> + <kbd>Esc</kbd> toggles it; the small light on the Esc key shows when it is on. IdeaPads have the same setting in the BIOS as <strong>HotKey Mode</strong>.</li>
        <li><strong>Backlight.</strong> <kbd>Fn</kbd> + <kbd>Space</kbd> steps through off, dim and bright on backlit models.</li>
        <li><strong>TrackPoint.</strong> The red pointing stick and the three buttons under the space bar are mouse controls, so they never appear in a keyboard test.</li>
        <li><strong>Legion.</strong> <kbd>Fn</kbd> + <kbd>Q</kbd> switches the performance mode. Only the Q is visible to the browser.</li>
      </ul>
      <h2>Run Lenovo's hardware check</h2>
      <ul>
        <li>In Windows, open <strong>Lenovo Vantage</strong> and run <strong>Hardware Scan</strong>.</li>
        <li>On many ThinkPads you can also press <kbd>F10</kbd> during startup to open <strong>Lenovo Diagnostics</strong>, which tests the keyboard before Windows loads.</li>
      </ul>
      <p>If a key fails in both places it is a hardware fault. ThinkPad keyboards are sold as separate replacement parts for most T, L and E series models.</p>`,

  'asus-keyboard-test': `
      <h2>Testing an ASUS laptop keyboard</h2>
      <p>This page uses the Windows laptop layout found on ASUS VivoBook, ZenBook, TUF Gaming and ROG laptops. Tick <strong>Numeric keypad</strong> if yours has physical number keys on the right.</p>
      <p class="small muted">Green means the key works, blue means it is held down, and dashed keys (Fn) can't be seen by any website. The full colour guide and the general step-by-step fixes for a dead key are on the <a href="/laptop-keyboard-test">laptop keyboard test</a> page; this page covers what is specific to ASUS.</p>
      <h2>ASUS keys that behave differently</h2>
      <ul>
        <li><strong>NumberPad in the touchpad.</strong> Some VivoBook and ZenBook models light up a number pad on the touchpad. That is a touchpad feature, so it won't show as keyboard keys here — check it by typing digits into any text box.</li>
        <li><strong>Function row.</strong> On many ASUS laptops <kbd>Fn</kbd> + <kbd>Esc</kbd> toggles Fn Lock. The same switch is in the <strong>MyASUS</strong> app under Customization → <strong>Function key lock</strong>.</li>
        <li><strong>Power key.</strong> Many VivoBook and ZenBook keyboards have the power button as the top-right key, sometimes with a fingerprint sensor. Don't press it during the test.</li>
        <li><strong>ROG and TUF extras.</strong> The Armoury Crate key and the volume or macro keys above the keyboard are handled by ASUS software, so they can stay grey even when they work.</li>
        <li><strong>Backlight.</strong> The brightness keys carry a keyboard-with-rays icon: <kbd>F7</kbd> on many newer models, <kbd>F3</kbd> / <kbd>F4</kbd> on older ones, and Fn + the up and down arrows on some ROG and TUF laptops.</li>
      </ul>
      <h2>Hotkeys stopped working after a Windows update?</h2>
      <p>Brightness, volume and backlight keys on ASUS laptops depend on a driver called <strong>ASUS System Control Interface</strong>. If the letter keys pass this test but the hotkeys do nothing, update or reinstall that driver from MyASUS or from the support page for your exact model, then restart. MyASUS also has a <strong>System Diagnosis</strong> section for checking hardware.</p>`,

  'acer-keyboard-test': `
      <h2>Testing an Acer laptop keyboard</h2>
      <p>This page uses the Windows laptop layout found on Acer Aspire, Swift, Nitro and Predator laptops. Tick <strong>Numeric keypad</strong> if yours has one — on many 15.6″ Acers the number keys are narrower than the letters, so press them carefully.</p>
      <p class="small muted">Green means the key works, blue means it is held down, and dashed keys (Fn) can't be seen by any website. The full colour guide and the general step-by-step fixes for a dead key are on the <a href="/laptop-keyboard-test">laptop keyboard test</a> page; this page covers what is specific to Acer.</p>
      <h2>Acer keys that behave differently</h2>
      <ul>
        <li><strong>Function row.</strong> On many Acer models the top-row behaviour is a BIOS setting: restart, press <kbd>F2</kbd>, and on the Main tab look for <strong>Function key behavior</strong> or <strong>Hotkey Mode</strong>. Some newer models toggle it with <kbd>Fn</kbd> + <kbd>Esc</kbd>.</li>
        <li><strong>Hotkeys need Acer software.</strong> Brightness, volume and airplane-mode keys rely on <strong>Acer Quick Access</strong> (Launch Manager on older laptops). If the letters pass here but those keys do nothing, reinstall it from Acer's support page for your model.</li>
        <li><strong>Backlight.</strong> On many Aspire and Swift models it is <kbd>Fn</kbd> + <kbd>F9</kbd> (<kbd>Fn</kbd> + <kbd>F8</kbd> on some).</li>
        <li><strong>Nitro and Predator keys.</strong> The NitroSense, PredatorSense and Turbo keys open Acer's own apps and may not light up in a browser.</li>
        <li><strong>€ and $ keys.</strong> Older Aspire keyboards have euro and dollar keys above the left and right arrows. They type the symbols but are not drawn as separate keys here.</li>
        <li><strong>Power key.</strong> On many Swift and Aspire models the power button is the top-right key. Skip it.</li>
      </ul>
      <h2>If keys fail on your Acer</h2>
      <p>Open <strong>Acer Care Center</strong> to check for driver and BIOS updates, then test again. If the same keys stay grey afterwards, connect a USB keyboard: if that one passes, the built-in keyboard or its ribbon cable is at fault and needs repair.</p>`,

  'macbook-keyboard-test': `
      <h2>Testing a MacBook keyboard</h2>
      <p>This page draws the MacBook Air / MacBook Pro layout: <kbd>fn</kbd>, <kbd>control</kbd>, <kbd>option</kbd> and <kbd>command</kbd> on the bottom row, half-height arrow keys, and the function row with Touch ID. Using a UK or European MacBook? Tick <strong>UK / EU (ISO)</strong>.</p>
      
      <p class="small muted">Green means the key works and blue means it is held down. The <kbd>fn</kbd> key and Touch ID are drawn dashed because macOS never passes them to a website.</p>
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
      <p>Contact lists contain other people's phone numbers and emails. Many online converters upload them to a server; this one reads and converts the file inside your browser, so the contacts never leave your device.</p>
      <h2>Files it accepts</h2>
      <p>For spreadsheets: CSV, TSV and TXT files with commas, semicolons, tabs or pipes between columns (the separator is detected automatically), plus Excel .xlsx and .xls and LibreOffice .ods. For contacts: .vcf and .vcard files in vCard 2.1, 3.0 or 4.0, including the older “quoted-printable” encoding many Android phones still use when exporting, so names with accents and non-English letters come out correctly.</p>
      <h2>Choosing a vCard version</h2>
      <ul>
        <li><strong>3.0</strong> — the recommended choice; works with iPhone, Android, Google Contacts and Outlook.</li>
        <li><strong>2.1</strong> — for older Android phones and basic feature phones that reject newer files.</li>
        <li><strong>4.0</strong> — the newest standard, for apps that ask for it specifically.</li>
      </ul>
      <h2>One file or many?</h2>
      <p>Normally all contacts go into a single .vcf, which is what phones expect when importing a list. If a system wants one contact per file, use <strong>One file per contact (ZIP)</strong> instead.</p>
      <p>Before you download, a preview shows how many contacts are ready and exactly what the first one looks like, so you can catch a wrong column before importing hundreds of contacts.</p>`,

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
      <p>vCard 3.0 is selected by default because every modern phone and app reads it. Choose 2.1 only for very old phones.</p>
      <h2>Exports from other apps</h2>
      <p>Most CRMs, school systems, mailing tools and Google Sheets can export a CSV, and the converter reads it whatever separator it uses — commas, semicolons (common in European Excel), tabs or pipes. Columns named Name, Full name, Contact name, First name, Surname, Mobile, Cell, Phone, WhatsApp, Contact no, Email, Company and similar are matched automatically.</p>
      <h2>Checking the result before import</h2>
      <p>The preview shows the first contact exactly as your phone will receive it. Check three things: that the name is in the right field (not the phone number), that the number starts with the country code you expect, and that non-English letters look right. If they appear as strange symbols, save the CSV again as “CSV UTF-8” and reload it.</p>
      <h2>Avoid duplicates</h2>
      <p>Importing the same VCF twice creates two copies of every contact. If you need to re-import after a correction, delete the first import on the phone or use the merge-duplicates option in Google Contacts afterwards.</p>`,

  'excel-to-vcf': `
      <h2>Converting an Excel contact list</h2>
      <p>Choose your .xlsx or .xls file — there's no need to save it as CSV first. The first sheet is read, columns are matched automatically (Name, First name, Last name, Phone, Mobile, Email, Company…), and you can fix any column using the drop-downs. A preview of the first vCard shows exactly what your phone will receive.</p>
      <h2>Common problems</h2>
      <ul>
        <li><strong>Phone numbers like 3.00123E+09:</strong> Excel turned them into numbers. Select the column, choose Format Cells → Text, and retype or paste the numbers back as text.</li>
        <li><strong>Missing leading zero:</strong> same cause — store phone numbers as text, or use the international format (+92 300…).</li>
        <li><strong>Several sheets:</strong> only the first sheet is converted. Move the contacts sheet to the front, or copy it into a new file.</li>
        <li><strong>Hundreds of contacts:</strong> no problem — they all go into one .vcf file, which phones import in a single step. Need one file per contact instead? Use the ZIP option.</li>
      </ul>
      <h2>Which sheet and which rows?</h2>
      <p>The first sheet in the workbook is read, and completely empty rows are skipped. If your contacts are on another sheet, move that sheet to the front in Excel and save. Leave <strong>First row is column names</strong> ticked when row 1 has headings; untick it if your sheet starts straight away with contact data, then match each column by hand.</p>
      <h2>Phone numbers from Excel</h2>
      <p>Numbers are read as Excel displays them, so whatever you see in the cell is what goes into the vCard. That is why the formatting fix matters: a cell showing 3.00123E+09 or a number missing its leading zero will be copied exactly like that. Fix the display in Excel first, and include the country code (for example +92 or +44) if the phone may be used abroad.</p>
      <h2>A second phone number</h2>
      <p>Columns such as Work phone, Home phone, Landline, Office phone or Phone 2 are matched to <strong>Other phone</strong>, so each contact can carry both a mobile and a second number.</p>`,

  'vcf-to-csv': `
      <h2>Why convert VCF to CSV?</h2>
      <p>A CSV file opens in Excel, Google Sheets and any CRM or mailing tool, so you can clean up duplicates, see all your contacts at a glance, or move them into business software. The converter puts each contact on one row with columns for full name, first and last name, up to five phone numbers (with their type: cell, work, home), emails, company, job title, address, website, birthday and notes.</p>
      <h2>Getting a VCF from your phone</h2>
      <ul>
        <li><strong>Android:</strong> Contacts → Fix & manage → Export to file. You get a .vcf with every contact.</li>
        <li><strong>iPhone:</strong> at icloud.com/contacts select all contacts and choose Export vCard.</li>
        <li><strong>Google Contacts:</strong> Export → vCard.</li>
      </ul>
      <p>The CSV is saved as UTF-8 with the marker Excel needs, so Urdu, Arabic and other non-English names open correctly when you double-click the file.</p>
      <h2>Open it correctly in Excel</h2>
      <p>The CSV is saved as UTF-8 with the marker Excel looks for, so names in Arabic, Urdu, Chinese or with accents display correctly when you double-click the file. Values that contain commas or line breaks, such as addresses and notes, are quoted properly, so they stay in their own cell instead of spilling into the next column.</p>
      <h2>Importing into other systems</h2>
      <ul>
        <li><strong>Google Contacts or Outlook</strong> import VCF directly, so you only need CSV when moving contacts into a spreadsheet, CRM, newsletter tool or school database.</li>
        <li>Most CRMs ask you to match columns during import; the clear column names (Full name, Phone 1, Email 1, Company…) make that quick.</li>
      </ul>
      <p>Before downloading, a table preview shows how many contacts were found and the first rows, so you can check the data came through.</p>`,

  'vcf-to-excel': `
      <h2>Open your contacts in Excel</h2>
      <p>Excel can't open a .vcf file directly — it shows one long column of BEGIN:VCARD lines. This converter reads the vCard properly and saves a real .xlsx workbook with one row per contact and a column for each detail, ready to sort, filter, print or share.</p>
      <h2>Good to know</h2>
      <ul>
        <li>Contacts with several phone numbers get Phone 1, Phone 2… columns, each with its type (cell, work, home).</li>
        <li>Multi-line notes and addresses stay in one cell.</li>
        <li>Phone numbers are kept as text, so leading zeros and + signs are not lost.</li>
        <li>Edited the sheet and want the contacts back on your phone? Switch the converter to <strong>CSV / Excel → VCF</strong> and choose your edited file.</li>
      </ul>
      <h2>A real Excel workbook</h2>
      <p>The download is a proper .xlsx file with a sheet named “Contacts”, not a CSV renamed to look like one. That means no import wizard, no lost leading zeros and no problems with non-English letters — it opens straight into Excel, Google Sheets, Numbers or LibreOffice.</p>
      <h2>Cleaning up a contact list in Excel</h2>
      <ol>
        <li>Turn on <strong>Data → Filter</strong> to sort by name or company.</li>
        <li>Use <strong>Data → Remove Duplicates</strong> on the phone column to find contacts saved twice.</li>
        <li>Delete rows you don't need, then convert the cleaned list back with <a href="/excel-to-vcf">Excel to VCF</a> and import it on your phone.</li>
      </ol>
      <h2>Android phone exports</h2>
      <p>Many Android phones export contacts in the older vCard 2.1 format with “quoted-printable” encoding, which shows up as codes like =C3=A9 in a text editor. These are decoded automatically, so names and addresses appear correctly in the spreadsheet.</p>`,

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
      </ol>
      <h2>Test lengths and text types</h2>
      <p>Choose from seven durations — 15 seconds, 30 seconds, 1, 2, 3, 5 or 10 minutes — and three kinds of text: <strong>Common words</strong> (good for building speed), <strong>Punctuation &amp; numbers</strong> (capitals, commas and digits, like real writing) and <strong>Sentences</strong> (whole sentences, closest to typing a document). The timer starts on your first key press, so take your time getting ready.</p>
      <h2>What you see at the end</h2>
      <ul>
        <li>Your <strong>WPM</strong> with a rating, your accuracy, and your characters per minute.</li>
        <li>A <strong>speed chart</strong> of your WPM second by second, with your peak — a line that drops near the end shows where your focus or stamina slipped.</li>
        <li><strong>Keys to practice</strong>: the characters you got wrong most often.</li>
        <li>Your <strong>personal best</strong> for each duration is remembered in your browser, so you can track progress over weeks.</li>
      </ul>`,

  '1-minute-typing-test': `
      <h2>About the 1 minute typing test</h2>
      <p>One minute is the most common typing test length and the quickest way to check your words per minute. It is long enough to give a fair score but short enough to keep your best speed the whole way through, so 1-minute scores are usually a little higher than longer tests.</p>
      <h2>Tips for your best score</h2>
      <ul>
        <li>Sit straight with your wrists level and fingers resting on the home row.</li>
        <li>Read a word or two ahead instead of looking at each letter.</li>
        <li>Don't stop to fix every mistake — keep a steady rhythm. Your WPM only counts correct characters, so accuracy still matters.</li>
        <li>Take three tests and use the average; the page remembers your best 1-minute score.</li>
      </ul>
      <h2>Practising with short tests</h2>
      <p>Because a 1-minute test is quick, it is ideal for practice in sets. Do three in a row: the first warms you up, the second and third show your real speed. Compare your score in <strong>Common words</strong> mode with <strong>Punctuation &amp; numbers</strong> — the gap shows how much capitals, commas and digits slow you down, and that is often where the quickest improvement is.</p>
      <h2>Your 1-minute personal best</h2>
      <p>Your best 1-minute score is saved separately from your scores at other lengths, so a fast one-minute sprint never hides a slower result over five minutes. Clearing your browser data resets it.</p>
      <p>When your 1-minute score is steady, try the <a href="/3-minute-typing-test">3 minute test</a>: if you lose more than 5 WPM over the longer test, stamina rather than finger speed is what to work on.</p>`,

  '3-minute-typing-test': `
      <h2>Why take a 3 minute typing test?</h2>
      <p>Many job applications, data-entry roles and government or university typing tests use 3 to 5 minutes, because a short test can hide inconsistent typing. Three minutes shows your <em>sustained</em> speed — the pace you keep when the first burst of energy wears off. The speed chart at the end shows whether you slowed down.</p>
      <h2>Preparing for a typing test for a job</h2>
      <ul>
        <li>Practise with <strong>Sentences</strong> or <strong>Punctuation & numbers</strong> mode — real job tests use proper text with capitals and punctuation.</li>
        <li>Employers usually ask for 35–45 WPM for general office work and 50–60+ WPM for typists and data entry, often with 90–95% accuracy.</li>
        <li>Accuracy counts: a test that removes points for errors can make 60 WPM with mistakes score lower than 50 WPM without.</li>
      </ul>
      <h2>Reading the speed chart</h2>
      <p>After three minutes the chart shows your speed second by second. A flat line means a steady rhythm, which is what employers want. A line that starts high and slides down means you started too fast; a jagged line with deep dips usually means you stop to fix mistakes. Aim to start a little slower than your 1-minute speed and hold it.</p>
      <h2>Mistakes over three minutes</h2>
      <p>Errors add up on a longer test. The <strong>Keys to practice</strong> list shows the characters you got wrong most often — practise those letters and the finger that types them for a few minutes before your next attempt, rather than simply repeating the whole test.</p>`,

  '5-minute-typing-test': `
      <h2>About the 5 minute typing test</h2>
      <p>A five-minute test gives the most realistic measure of your everyday typing speed. Short tests reward a quick burst; over five minutes your rhythm, accuracy and stamina all count — which is why it is a common length for professional typing certificates and transcription jobs.</p>
      <h2>Reading your results</h2>
      <ul>
        <li><strong>WPM</strong> counts only correct characters. <strong>Raw speed</strong> includes mistakes — a big gap between the two means you should slow down slightly.</li>
        <li><strong>CPM</strong> (characters per minute) is used by some employers instead of WPM; it is roughly WPM × 5.</li>
        <li>The <strong>speed chart</strong> shows your pace minute by minute. A falling line means fatigue — short daily practice builds the stamina to keep it flat.</li>
      </ul>
      <h2>Building stamina for long tests</h2>
      <ul>
        <li>Relax your shoulders and hands — tension is what makes speed drop after two or three minutes.</li>
        <li>Keep your eyes on the text a word or two ahead of where you are typing.</li>
        <li>If you make a mistake, fix it and move on without rushing to make up time.</li>
        <li>Practise with <strong>Sentences</strong> mode, since most 5-minute job and certificate tests use real paragraphs rather than random words.</li>
      </ul>
      <h2>Comparing with other lengths</h2>
      <p>Your 5-minute personal best is stored separately, so you can see how it compares with your shorter tests. A 5-minute score within 5 WPM of your 1-minute score is a sign of very consistent typing. If you need an even longer test for transcription work, the main <a href="/typing-speed-test">typing speed test</a> also has a 10-minute option.</p>`,

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
      <p>Use the two sliders to move the picture inside the frame before cutting. Tiles are saved as high-quality JPGs at Instagram's recommended 1080-pixel width and downloaded together in a ZIP.</p>
      <h2>Tile shapes</h2>
      <ul>
        <li><strong>1:1 square</strong> (1080 × 1080) — the classic Instagram post.</li>
        <li><strong>4:5 portrait</strong> (1080 × 1350) — takes up more of the screen in the feed.</li>
        <li><strong>3:4 grid</strong> (1080 × 1440) — matches the taller thumbnails Instagram now uses on profile grids.</li>
        <li><strong>Original</strong> — cuts the picture as it is, without cropping to a fixed shape.</li>
      </ul>
      <h2>Position the picture</h2>
      <p>When your photo doesn't have the same shape as the grid, part of it has to be cropped. Use the <strong>left / right</strong> and <strong>up / down</strong> sliders to choose which part stays, and watch the preview: each tile is drawn with its number so you can check that faces and text aren't cut through a gap between tiles.</p>
      <h2>Download</h2>
      <p>All tiles download together in one ZIP as high-quality images, named in posting order. Besides the profile grid and carousel modes, <strong>Custom</strong> lets you cut any image into up to 10 rows and 10 columns, numbered left to right and top to bottom — useful for printing large posters on several sheets.</p>`,

  'split-image-for-instagram': `
      <h2>Split one photo into 3 Instagram posts</h2>
      <p>A three-part photo fills one whole row of your Instagram profile — great for landscapes, group photos, product launches and announcements. Choose a wide photo, keep <strong>1 row</strong> selected, and the tool crops it to the right shape and cuts three equal tiles.</p>
      <h2>Posting order matters</h2>
      <ol>
        <li>Post tile <strong>1</strong> first — it is the right-hand third of your picture.</li>
        <li>Then post tile <strong>2</strong> (the middle) and finally tile <strong>3</strong> (the left).</li>
        <li>Post all three in a row without anything in between, or the picture will be split across two rows.</li>
      </ol>
      <p>Already have posts on your profile? The three tiles only line up if the number of posts before them is a multiple of three — otherwise post one or two extra images first, or archive them, to align the row.</p>
      <h2>Choosing a photo that works in three</h2>
      <p>A wide picture about three times wider than it is tall fits a row of three squares with little cropping — landscapes, skylines and group photos are ideal. With a normal phone photo (4:3), switch the tile shape to <strong>4:5 portrait</strong> or <strong>3:4 grid</strong> to keep more of the image, and use the up/down slider to choose which strip stays.</p>
      <h2>Keep the main subject off the joins</h2>
      <p>On your profile, the three tiles sit side by side with a thin gap between them. A face or a word that falls right on a join gets split by that gap. Use the left/right slider to move the important part into the middle of a tile.</p>
      <h2>Want more than one row?</h2>
      <p>The same tool can split a picture into 2 to 5 rows (6 to 15 posts) for a bigger profile mosaic — open <a href="/image-splitter">Instagram grid maker</a> and pick the number of rows.</p>`,

  'instagram-carousel-splitter': `
      <h2>Seamless Instagram carousel from a panorama</h2>
      <p>A carousel post can hold up to 20 images, and people swipe through them in order. Cut a panorama into equal slides and the picture flows from one slide to the next as they swipe — one of the most engaging post types, because every swipe counts as interaction.</p>
      <h2>Tips</h2>
      <ul>
        <li><strong>Pick the slide count from the photo's shape.</strong> A photo about three times wider than it is tall works well as 3 square slides; a very wide phone panorama suits 4–6 slides.</li>
        <li><strong>Choose 4:5 portrait</strong> for slides that take up more of the screen in the feed.</li>
        <li><strong>Upload all slides in one post</strong>, selecting them in order 1, 2, 3… Instagram keeps that order.</li>
        <li>Avoid placing faces or text exactly on a cut line — use the sliders to shift the picture slightly.</li>
      </ul>
      <h2>How many slides?</h2>
      <p>Choose 2, 3, 4, 5, 6, 7, 8 or 10 slides. The tool crops your picture to the exact width needed for that many slides at your chosen shape, so the joins line up perfectly when people swipe. As a rough guide: a normal wide photo suits 2–3 slides, a phone panorama 4–6, and a very long 360° panorama 8–10.</p>
      <h2>Square or portrait slides?</h2>
      <p><strong>4:5 portrait</strong> slides are taller, so they fill more of the screen in the feed and are noticed more. They need a taller strip of your photo, so use the up/down slider to choose what stays in frame. <strong>1:1 square</strong> slides keep more of a very wide panorama.</p>
      <h2>Posting the carousel</h2>
      <p>Create a new post, tap the multiple-images icon, and select the slides in order 1 → last. They download numbered, so they appear in the right order in your camera roll. Use the same filter on every slide, or none at all — different filters show visible seams between slides.</p>`,

  'gpx-kml-converter': `
      <h2>GPX vs KML — what's the difference?</h2>
      <ul>
        <li><strong>GPX</strong> is the standard format of GPS devices and fitness apps: Garmin, Strava, Komoot, AllTrails, Wikiloc, OsmAnd and most hiking and cycling apps. It stores waypoints, tracks (where you went, with times) and routes (where you plan to go).</li>
        <li><strong>KML</strong> (and zipped <strong>KMZ</strong>) is Google's format for Google Earth and Google My Maps. It also stores styling such as line colour and width.</li>
      </ul>
      <p>This converter reads either format and writes the other: waypoints become placemarks, and tracks and routes become lines (and back again). Elevation is kept, and timestamps are kept when converting KML tracks that include them. It also shows the total length of your tracks in kilometres and miles.</p>
      <h2>Private by design</h2>
      <p>GPS files show exactly where you live, work and travel. Most online converters upload them to a server; this one converts the file inside your browser, so your location data never leaves your device.</p>
      <h2>Check the file before you download</h2>
      <p>As soon as you choose a file, a summary shows which way it will be converted, how many waypoints and tracks it contains, the number of GPS points, and the total length of all tracks in kilometres and miles. If the length looks far too short, you probably exported only part of an activity — export it again from your app before converting.</p>
      <h2>What is kept, and what isn't</h2>
      <ul>
        <li><strong>Kept both ways:</strong> waypoint names and descriptions, track and route names, latitude, longitude and elevation.</li>
        <li><strong>KML areas</strong> (shapes drawn in My Maps) become closed lines named “Area”, because GPX has no polygons.</li>
        <li><strong>Timestamps:</strong> Google Earth's timed tracks keep their times when converted to GPX. Plain KML lines have no times, and KML written from GPX keeps the path and elevation but not the times, so convert the original GPX again if an app needs your pace or speed.</li>
        <li>Styles such as icons and fill colours in a KML have no equivalent in GPX and are left out.</li>
      </ul>
      <p>If a file isn't valid XML, or contains no waypoints or tracks at all, you get a clear message instead of an empty download.</p>`,

  'gpx-to-kml': `
      <h2>Open a GPX track in Google Earth or My Maps</h2>
      <ol>
        <li>Export the GPX from your app or device (Strava: activity → ⋯ → Export GPX; Garmin Connect: activity → ⚙ → Export to GPX).</li>
        <li>Convert it here. Pick a track colour and line width — they are saved inside the KML.</li>
        <li><strong>Google Earth:</strong> File → Open (or drag the KML onto the globe). <strong>Google My Maps:</strong> create a map → Add layer → Import, then choose the KML.</li>
      </ol>
      <p>Google Earth on the web can open GPX directly too, but Google My Maps works more reliably with KML, and KML keeps your chosen colour and width when you share the map.</p>
      <h2>Make the track easy to see</h2>
      <p>The default red line at width 4 shows up well on Google Earth's satellite imagery. On a light map such as My Maps, a darker colour (blue or purple) and width 5–6 is easier to follow. If you are converting several tracks to view together, give each one its own colour before converting so you can tell them apart.</p>
      <h2>Elevation in Google Earth</h2>
      <p>When your GPX has elevation data, the KML is set to follow the ground, so the line sits on the terrain instead of floating in the air or disappearing under hills. Tilt the view in Google Earth (hold <kbd>Shift</kbd> and drag) to see the climbs and descents in 3D.</p>
      <h2>Sharing the result</h2>
      <p>A KML is a small text file, so it is easy to email or send in a chat. The person receiving it can open it in Google Earth on a computer, or import it into a My Maps map that anyone with the link can view on their phone.</p>`,

  'kml-to-gpx': `
      <h2>Take a Google Earth or My Maps route to your GPS</h2>
      <ol>
        <li><strong>From Google My Maps:</strong> open the map → ⋮ menu → Export to KML/KMZ. <strong>From Google Earth:</strong> right-click the place or folder → Save Place As → KML or KMZ.</li>
        <li>Convert it here — KMZ files are unzipped automatically.</li>
        <li>Copy the GPX to your device or import it into your app (Garmin Connect, Komoot, OsmAnd, AllTrails, Wikiloc…).</li>
      </ol>
      <h2>Tracks or routes?</h2>
      <p>By default lines become GPX <strong>tracks</strong>, which every app and device can display. Tick “Save lines as GPX routes” if your device needs <strong>routes</strong> for turn-by-turn navigation. Placemarks become waypoints. Shapes drawn as areas are converted to their outline.</p>
      <h2>Routes from Google My Maps</h2>
      <p>Lines you draw in My Maps, including driving, walking and cycling directions you add there, become GPX tracks or routes. Pins become GPX waypoints with their names and descriptions, so a planned trip with stops arrives on your device with the stops marked.</p>
      <h2>Areas and shapes</h2>
      <p>Polygons drawn in My Maps or Google Earth, such as a field boundary or a park outline, have no equivalent in GPX. They are converted to a closed line around the edge named “Area”, which most GPS apps display as a track you can follow around the perimeter.</p>
      <h2>Garmin and other devices</h2>
      <ul>
        <li>Garmin Connect: Training → Courses → Import, then send the course to your watch or bike computer.</li>
        <li>Komoot, AllTrails, Wikiloc and OsmAnd: use the app's “Import GPX” option on the website or in the app.</li>
        <li>If a device shows a straight line between two points instead of your path, re-convert with “Save lines as GPX routes” unticked — tracks keep every point exactly.</li>
      </ul>`,

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
      </ul>
      <h2>Three lists you can switch between</h2>
      <ul>
        <li><strong>Don't follow you back</strong> — accounts you follow that don't follow you.</li>
        <li><strong>You don't follow back</strong> — your followers that you haven't followed.</li>
        <li><strong>Mutual</strong> — accounts that follow each other with you.</li>
      </ul>
      <p>Above the lists you see your total followers, following and mutual counts. Each list can be filtered by typing part of a username, copied to the clipboard in one click, or downloaded as a CSV file for Excel or Google Sheets. Where Instagram's file includes it, the date you started following is shown too.</p>
      <h2>Tracking changes over time</h2>
      <p>Instagram's download is a snapshot of one moment. To see who unfollowed you between two dates, download your data again later and compare the two CSV files, or simply re-check the “Don't follow you back” list.</p>
      <h2>Big accounts</h2>
      <p>Accounts with many followers get several follower files (followers_1, followers_2 and so on). Dropping the ZIP reads all of them automatically, and you can also drop the separate JSON or HTML files.</p>`,

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
      <p>Everything is processed in your browser; nothing is sent to us or to anyone else.</p>
      <h2>Before you unfollow</h2>
      <p>Not everyone on the list is ignoring you. Brands, celebrities, news pages and public figures rarely follow back, and some accounts are inactive or have been deactivated. Type a name into the search box to check a specific person, and go through the list by hand rather than unfollowing everyone at once.</p>
      <h2>Unfollow slowly</h2>
      <p>Instagram limits how many accounts you can unfollow in a short time, and sudden bursts of activity can trigger a temporary block. Spread unfollows over several days — a few dozen per session is a safe pace.</p>
      <h2>Keep a copy</h2>
      <p>Use <strong>Download CSV</strong> to save the list before you start. Next time you download your data you can compare the two lists and see who you have already dealt with.</p>`,

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
      <p>Don't know your birth time? You will still get your Sun sign, and your Moon sign unless the Moon changed sign that day — the tool tells you when it did.</p>
      <h2>How the calculation works</h2>
      <p>The calculator uses the Western (tropical) zodiac. Your local birth time is converted to universal time using your birthplace's time zone, including daylight saving time where it applied that year. From that moment it calculates the exact positions of the Sun and Moon and the sign rising on the eastern horizon at your birthplace. Each result also shows the degree within the sign: a placement at 0° or 29° sits at the edge of a sign and is sensitive to the exact minute of birth.</p>
      <h2>Birthplace</h2>
      <p>Start typing your city and choose it from a list of about 160 major cities worldwide. If your town isn't listed, enter its latitude, longitude and time zone yourself — you can find the coordinates by right-clicking the place in Google Maps. For the Sun and Moon a nearby big city is fine; for the rising sign, use your actual birthplace.</p>
      <h2>Private by design</h2>
      <p>The city list and the astronomy are built into the page, so your birth date, time and place are never sent anywhere.</p>`,

  'rising-sign-calculator': `
      <h2>What is a rising sign?</h2>
      <p>Your rising sign, or <strong>Ascendant</strong>, is the zodiac sign that was rising over the eastern horizon at the exact time and place you were born. Astrologers read it as your “mask”: the energy you show to new people, your style and your instinctive way of starting things.</p>
      <h2>Why the exact birth time matters</h2>
      <p>The Earth turns a full circle every day, so all twelve signs rise in turn — each for about two hours on average (much less for some signs at high latitudes). A difference of even 10–20 minutes can change your rising sign if you were born near the boundary, so use the time from your birth certificate when you can. Your birthplace matters too: the same moment gives different rising signs in London and Karachi.</p>
      <p>The degree shown with your result tells you how close you are to a boundary: near 0° or 29° means a small error in the time could move it to the neighbouring sign.</p>
      <h2>Where to find your exact birth time</h2>
      <ul>
        <li>A birth certificate — in many countries the long form records the time.</li>
        <li>Hospital discharge papers or a baby book kept by your family.</li>
        <li>Asking the people who were there; even “just after lunch” narrows it to a couple of hours.</li>
      </ul>
      <h2>Testing an uncertain time</h2>
      <p>If you only know a range, run the calculator at the start and end of that range. If both give the same rising sign, you can be fairly confident. If they differ, the result tells you which two or three signs are possible — read the descriptions of each and see which fits how other people describe you.</p>
      <h2>Why the birthplace matters</h2>
      <p>The rising sign depends on where on Earth you were born, not just when. Two babies born at the same moment in London and Lahore have different rising signs, because a different part of the sky is on their eastern horizon. Choose your actual birth city, or enter its coordinates if it isn't in the list.</p>`,

  'moon-sign-calculator': `
      <h2>What is a Moon sign?</h2>
      <p>Your Moon sign is the zodiac sign the Moon was in when you were born. While your Sun sign describes your identity, the Moon describes your emotional world — your moods, comfort needs and how you care for others. Many people relate to their Moon sign more than to their Sun sign.</p>
      <h2>Do I need my birth time?</h2>
      <p>Usually not. The Moon spends about two and a half days in each sign, so on most dates the whole day falls in one sign and the calculator gives a definite answer. If the Moon changed sign on your birthday, the tool warns you and shows both signs — then your birth time decides which one is yours.</p>
      <p>Results use the tropical (Western) zodiac and the Moon's exact position from an astronomy library, adjusted for your birthplace's time zone on that date.</p>
      <h2>When the Moon changes sign on your birthday</h2>
      <p>If you tick <strong>I don't know my birth time</strong>, the calculator checks the Moon's position at the start and the end of your birth day. If it stayed in one sign, your Moon sign is certain. If it moved into the next sign that day, you get a clear warning naming both signs, because your Moon sign then depends on the hour you were born. Asking a parent, or checking a birth certificate or hospital record, usually settles it.</p>
      <h2>Moon signs and the elements</h2>
      <ul>
        <li><strong>Fire Moons</strong> (Aries, Leo, Sagittarius) are described as needing excitement and recognition.</li>
        <li><strong>Earth Moons</strong> (Taurus, Virgo, Capricorn) as needing stability and practical comfort.</li>
        <li><strong>Air Moons</strong> (Gemini, Libra, Aquarius) as needing conversation and ideas.</li>
        <li><strong>Water Moons</strong> (Cancer, Scorpio, Pisces) as needing closeness and emotional safety.</li>
      </ul>
      <p>Astrology is a tradition of interpretation rather than a science, so read these as ideas to reflect on, not facts about you.</p>`,

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
      <h2>What happens to bookmarks, forms and links?</h2>
      <p>Each page is copied into the new file exactly as it is, so text stays selectable and searchable, and images keep their original quality. Two things may not carry over: the bookmark (outline) panel of the original files, and fillable form fields, which can stop being editable. If you need to fill in a form, fill it in and save it first, then merge.</p>
      <h2>Merging large numbers of files</h2>
      <p>You can add as many PDFs as you like, and the counter under the list shows the number of files and their combined size before you start. Because the work is done by your own device, very large jobs (hundreds of scanned pages) are limited by its memory rather than by an upload limit. On a phone, merging in batches of 20–30 files and then merging the results is more reliable.</p>
      <h2>Naming and order tips</h2>
      <ul>
        <li>Files are listed in the order you add them. Use the arrows to move one up or down; the final document follows the list from top to bottom.</li>
        <li>The result is saved as <code>merged.pdf</code>. Rename it to something descriptive, such as <em>Visa application – Ali Khan.pdf</em>, before you send it.</li>
        <li>When you combine documents for an application, put the form first and supporting documents after it, in the order the checklist asks for.</li>
      </ul>`,

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
      <h2>What each level actually does</h2>
      <p><strong>Recommended</strong> re-saves the photos and scans inside your PDF as JPGs no larger than 2000 pixels on their longest side, at good quality — plenty for reading on screen and for normal printing. <strong>Strong</strong> limits them to 1300 pixels at lower quality, which roughly halves the size again. In both, the text, fonts and links stay as they are, so the document remains searchable and sharp.</p>
      <h2>Grayscale for scanned documents</h2>
      <p>Tick <strong>Convert images to grayscale</strong> for black-and-white documents that were scanned in colour, such as forms, ID copies and bank statements. Colour information takes a lot of space, and removing it often makes a scan much smaller with no loss of readability.</p>
      <h2>When the file won't get smaller</h2>
      <p>PDFs that are mostly text, or were already compressed, may not shrink. In that case the tool tells you so instead of giving you a file that isn't smaller. Options then: try Strong or Extreme, <a href="/split-pdf">split the PDF</a> into parts if a portal limits each upload, or <a href="/delete-pdf-pages">remove pages</a> you don't need to send.</p>`,

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
      <h2>Convert only some pages</h2>
      <p>Leave the <strong>Pages</strong> box empty to convert the whole document, or type <code>1</code> for just the cover, or <code>2-4, 9</code> for a selection. Converting only what you need is much faster on long documents. One page downloads as a single image; several pages come as a ZIP named after your file.</p>
      <h2>JPG or PNG?</h2>
      <div class="table-wrap" style="max-height:none;margin:14px 0 20px"><table class="table">
        <tr><th>Use JPG when…</th><th>Use PNG when…</th></tr>
        <tr><td>the page has photos, or you are sending it in a chat app</td><td>the page is mostly text, tables or line drawings</td></tr>
        <tr><td>file size matters (often 3–5× smaller)</td><td>you will crop or zoom and need crisp edges</td></tr>
      </table></div>
      <h2>Good to know</h2>
      <ul>
        <li>Pages are rendered as they appear on screen, including fonts and vector graphics, so the images match what you see in a PDF reader.</li>
        <li>An A4 page at 150 DPI is about 1240 × 1754 pixels; at 300 DPI it is about 2480 × 3508 pixels.</li>
        <li>Need the text rather than a picture of it? Use <a href="/pdf-to-text">PDF to Text</a>, or <a href="/pdf-to-word">PDF to Word</a> to edit it.</li>
      </ul>`,

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
      <h2>Settings explained</h2>
      <ul>
        <li><strong>Orientation: Auto</strong> turns each page to match its photo, so landscape pictures get landscape pages and nothing is shrunk unnecessarily. Choose Portrait or Landscape to force every page the same way.</li>
        <li><strong>Margin</strong> — None makes the image fill the page (best for scans of documents), Small or Large leaves a white border like a printed photo.</li>
        <li><strong>Image quality</strong> — High is right for most uses; pick “Smaller file” when a portal has a strict size limit, or Maximum for photos you plan to print.</li>
      </ul>
      <p>Images are centred on the page and scaled to fit without being cropped or stretched. PNG files with transparency keep it; other images get a white background.</p>
      <h2>Adding images quickly</h2>
      <p>Besides choosing files, you can drag them onto the box or paste a screenshot with <kbd>Ctrl</kbd> + <kbd>V</kbd>. JPG, PNG, WebP, GIF and BMP are accepted. iPhone photos in HEIC format need converting first with <a href="/heic-to-jpg">HEIC to JPG</a>.</p>
      <h2>Scanning paper documents with a phone</h2>
      <p>Lay the page on a dark surface in daylight, hold the phone directly above it so the edges are parallel, and crop away the table before converting. A straight, evenly lit photo turns into a much more readable PDF than a sharp but tilted one.</p>`,

  'pdf-to-word': `
      <h2>What gets converted</h2>
      <p>The converter reads the text of your PDF and rebuilds it as paragraphs in an editable Word (.docx) file that opens in Microsoft Word, Google Docs and LibreOffice. It is ideal when you need to edit or reuse the <em>words</em> of a document: reports, letters, articles and CVs.</p>
      <h2>Limitations to know</h2>
      <ul>
        <li><strong>Scanned PDFs</strong> are pictures of text, so there is nothing to extract. Run the pages through <a href="/image-to-text">Image to Text (OCR)</a> first.</li>
        <li><strong>Complex layouts</strong> — columns, tables and text boxes — are simplified into ordinary paragraphs, so check the formatting before you send the file.</li>
        <li>Images inside the PDF are not copied into the Word file.</li>
      </ul>
      <h2>How the conversion works</h2>
      <p>The converter reads every line of text on each page, works out which lines belong to the same paragraph from their spacing, and treats noticeably larger text as headings (bolded in Word). Each PDF page starts on a new Word page, so a 5-page PDF gives you a 5-page document that is easy to compare with the original.</p>
      <h2>Getting the best result</h2>
      <ul>
        <li><strong>Check that the text is selectable.</strong> Open the PDF and try to highlight a word. If you can't, it is a scan, and the tool will tell you so — run it through <a href="/image-to-text">Image to Text (OCR)</a> instead.</li>
        <li><strong>Simple documents convert best</strong>: letters, essays, reports and CVs with a single column of text.</li>
        <li><strong>Re-apply styles in Word.</strong> Select the headings and choose Heading 1/Heading 2 so you get a navigation pane and table of contents again.</li>
        <li>Recreate tables with Word's Insert → Table, then paste the converted text into the cells.</li>
      </ul>
      <h2>Only need a quick edit?</h2>
      <p>For small changes — a date, a name, a signature — it is often faster to keep the PDF as it is. You can <a href="/sign-pdf">sign it</a>, <a href="/add-page-numbers">add page numbers</a> or <a href="/watermark-pdf">add a watermark</a> without converting at all.</p>`,

  'word-to-pdf': `
      <h2>How it works</h2>
      <p>Your .docx file is rendered in the browser with its fonts, headings, tables and images, and you save it as a PDF using the print dialog (choose <strong>Save as PDF</strong> as the printer). The result looks the same on every device, which is why PDF is the safest format for CVs, applications and anything you submit.</p>
      <h2>Tips for a perfect PDF</h2>
      <ul>
        <li>Turn off “Headers and footers” in the print dialog so the browser doesn't add a date or web address.</li>
        <li>Set the paper size (A4 or Letter) and margins to match your document.</li>
        <li>Only .docx files are supported. Save older .doc files as .docx in Word or Google Docs first.</li>
      </ul>
      <h2>Preview before you save</h2>
      <p>After you choose a .docx file, the document is shown page by page so you can check fonts, tables and images before saving. If something looks wrong in the preview, it will look the same in the PDF, so fix it in Word or Google Docs first and load the file again.</p>
      <h2>Saving as PDF on different devices</h2>
      <ul>
        <li><strong>Chrome and Edge on Windows or Mac</strong> — set Destination to “Save as PDF” (or “Microsoft Print to PDF”), then Save.</li>
        <li><strong>Safari on Mac</strong> — click the PDF button in the bottom-left corner of the print window.</li>
        <li><strong>Android</strong> — choose “Save as PDF” as the printer, then tap the round PDF button.</li>
        <li><strong>iPhone and iPad</strong> — in the print preview, pinch outward on the page to open it as a PDF, then use Share → Save to Files.</li>
      </ul>
      <h2>When fonts look different</h2>
      <p>The preview uses the fonts installed on your device. If the document uses a font you don't have, a similar one is substituted. For a CV or form where the look matters, use common fonts such as Calibri, Arial or Times New Roman, or export the PDF straight from Word with File → Save As → PDF.</p>`,

  'split-pdf': `
      <h2>Two ways to split</h2>
      <ul>
        <li><strong>Every page</strong> — each page becomes its own PDF, downloaded together as a ZIP.</li>
        <li><strong>Custom ranges</strong> — type ranges such as <code>1-3, 5, 8-10</code> to extract exactly the pages you need, each range as a separate file.</li>
      </ul>
      <h2>Common uses</h2>
      <p>Sending only the relevant pages of a long contract, separating scanned documents that were captured in one batch, or pulling a single chapter out of a book or manual. To remove pages instead of extracting them, use <a href="/delete-pdf-pages">Delete PDF Pages</a>.</p>
      <h2>Three split modes</h2>
      <ul>
        <li><strong>Custom ranges</strong> — type <code>1-3, 4-6, 7</code> and you get three files. An open range such as <code>5-</code> means “page 5 to the end”.</li>
        <li><strong>Every page</strong> — one PDF per page, handy for scanned batches where each page is a separate receipt or certificate.</li>
        <li><strong>Every N pages</strong> — cut a document into equal chunks, for example every 2 pages for double-sided forms, or every 10 pages to stay under an email attachment limit.</li>
      </ul>
      <p>If the result is a single file it downloads straight away; several files are offered together as a ZIP. Each file is named after the original with the pages it contains, such as <em>report-pages-4-6.pdf</em>, so you can tell them apart.</p>
      <h2>Split or delete?</h2>
      <p>Splitting keeps the original untouched and creates new files from the pages you pick. If you just want the same document without a few pages, <a href="/delete-pdf-pages">Delete PDF Pages</a> is quicker, and <a href="/organize-pdf">Organize PDF</a> lets you see thumbnails while you decide.</p>
      <h2>Password-protected PDFs</h2>
      <p>A PDF that asks for a password when you open it cannot be split until the password is removed. Open it in your PDF reader with the password, print it to a new PDF (“Save as PDF”), and split that copy.</p>`,

  'compress-image': `
      <h2>How image compression works</h2>
      <p>JPG and WebP images can be stored at different quality levels. Lowering the quality slightly removes detail your eyes barely notice and can cut the file size by 50–80%. The before/after sizes are shown for every image so you can find the right balance.</p>
      <h2>Tips for the smallest files</h2>
      <ul>
        <li><strong>Resize first.</strong> A 4000-pixel phone photo shown on a website at 1200 pixels wastes most of its size — use <a href="/resize-image">Resize Image</a>.</li>
        <li><strong>Choose the right format.</strong> WebP is usually 25–35% smaller than JPG at the same quality and works in all modern browsers. Keep PNG for logos and screenshots with sharp edges.</li>
        <li>Quality around 70–80% is the sweet spot for photos; below 60% blocky artefacts start to show.</li>
      </ul>
      <h2>Compress to an exact size: 100 KB, 50 KB or 20 KB</h2>
      <p>Many job portals, exam forms and visa applications ask for a photo “under 100 KB” or a signature “under 20 KB”. Switch the mode to <strong>Target size (KB)</strong> and type the limit. The tool searches for the highest quality that fits; if the image still won't fit, it scales the dimensions down step by step until it does. If even that can't reach the target, the result is marked “could not reach target size” so you never upload a file that will be rejected.</p>
      <h2>Compress by quality</h2>
      <p>In <strong>By quality</strong> mode you choose the trade-off yourself. If compressing would actually make a file bigger (some images are already well optimised), the original is kept and marked “already optimized”, so you never lose quality for nothing.</p>
      <h2>Max width: the biggest saving</h2>
      <p>Phone photos are often 4000 pixels wide, far more than any web page or form needs. Setting <strong>Max width</strong> to 1920 (or 1200 for blogs) usually cuts the size more than any quality setting, with no visible loss on screen.</p>
      <h2>Batch compression</h2>
      <p>Add a whole set of photos at once. You see the before and after size and the saving for each one, and can download them individually or together as a ZIP. The output format can stay the same or change to JPG, PNG or WebP.</p>`,

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
      <h2>Ready-made sizes</h2>
      <p>Pick a preset instead of typing numbers: Instagram post (1080 × 1080) and portrait (1080 × 1350), Stories, Reels and TikTok (1080 × 1920), YouTube thumbnail (1280 × 720) and banner (2560 × 1440), Facebook cover (820 × 312), link-share image (1200 × 630), X/Twitter header (1500 × 500), LinkedIn banner (1584 × 396), profile picture (400 × 400), Full HD and 4K.</p>
      <h2>Fit, crop or stretch?</h2>
      <p>When the new size has a different shape from your photo, you have to choose what gives. <strong>Fit inside</strong> keeps the whole picture and the original proportions, so one side may come out smaller than you asked for. <strong>Crop to exact size</strong> fills the frame and trims the edges evenly from the centre — the right choice for banners and thumbnails. <strong>Stretch</strong> forces the exact size and distorts the picture, so it is rarely what you want.</p>
      <h2>Resizing many images at once</h2>
      <p>Add several photos and they are all resized with the same settings. Each file is renamed with its new size (for example <em>holiday-1080x1080.jpg</em>) and you can download them together as a ZIP. You can also change the format while resizing, such as turning large PNG screenshots into much smaller JPG or WebP files.</p>
      <h2>Size in pixels vs size in KB</h2>
      <p>Pixel size is how big the picture is; KB is how much space the file takes. A form that says “under 200 KB” is asking about file size — use <a href="/compress-image">Compress Image</a> with a target size instead.</p>`,

  'remove-background': `
      <h2>AI background removal in your browser</h2>
      <p>A small AI model trained to separate people and objects from their background runs directly in your browser. The first time, it downloads the model (a few MB); after that, removing a background takes a few seconds. You get a transparent PNG, or you can fill the background with a solid colour such as white for ID and passport photos.</p>
      <h2>For the cleanest cut-out</h2>
      <ul>
        <li>Use a photo where the subject is in focus and clearly separated from the background.</li>
        <li>Good, even lighting helps more than a high resolution.</li>
        <li>Fine details such as flyaway hair are the hardest part for any tool — a plain background behind the subject gives the best edges.</li>
      </ul>
      <h2>Four kinds of background</h2>
      <ul>
        <li><strong>Transparent</strong> — a PNG cut-out you can place on any design, slide or product listing.</li>
        <li><strong>White</strong> — the usual requirement for marketplace product photos and many ID photos.</li>
        <li><strong>Color</strong> — any colour from the picker, for profile pictures and branded images.</li>
        <li><strong>Blur</strong> — keeps the original scene but softens it behind the subject, like a portrait-mode photo.</li>
      </ul>
      <p>You can switch between them after the cut-out is made without running the AI again, and the result is always saved as a full-resolution PNG.</p>
      <h2>The first run takes longer</h2>
      <p>The first time you use the tool, your browser downloads the AI model, and a progress bar shows how much is left. After that it stays cached, so later photos are processed in seconds. A recent version of Chrome, Edge or Firefox on a laptop or desktop gives the fastest results; on older phones it can take a little while.</p>
      <h2>Passport and ID photos</h2>
      <p>Removing the background is only one requirement — the photo also has to be the right size with the head in the right position. The <a href="/passport-photo-maker">Passport Photo Maker</a> handles the sizing; use a plain white or light background here first if your original was taken against a busy wall.</p>`,

  'image-to-text': `
      <h2>Extract text from images and scans (OCR)</h2>
      <p>Optical character recognition (OCR) reads the letters in a photo or screenshot and turns them into text you can copy, edit and search. Choose the language of the text first — English, Urdu, Arabic, Hindi, Bengali, Persian, Spanish, French, German and more are supported, including English + Urdu for mixed documents.</p>
      <h2>Getting accurate results</h2>
      <ul>
        <li>Take the photo straight on, with the page filling the frame and no shadows.</li>
        <li>Higher contrast (dark text on a light background) works best; crop away anything that isn't text.</li>
        <li>Handwriting and decorative fonts are much harder than printed text — always proofread the result.</li>
      </ul>
      <h2>Scanned PDFs work too</h2>
      <p>Besides photos and screenshots you can choose a scanned PDF. Every page is read in turn and the text is joined into one result, with progress shown page by page. When it finishes you see a <strong>confidence</strong> score — above about 85% the text usually needs only light proofreading; much lower means the image was blurry, skewed or in a different language than the one you picked.</p>
      <h2>Supported languages</h2>
      <p>English, Urdu, Arabic, Hindi, Bengali, Persian, Spanish, French, German, Portuguese, Italian, Russian, Turkish, Indonesian, Vietnamese, Chinese (Simplified and Traditional), Japanese and Korean, plus a combined English + Urdu mode for bilingual documents. The first time you use a language, its recognition data is downloaded once and then reused.</p>
      <h2>What OCR can and can't do</h2>
      <ul>
        <li>It extracts plain text. Tables come out as lines of text, and bold, colours and layout are not kept.</li>
        <li>Neat printed text in a normal font is read very accurately. Handwriting, stylised logos and text over busy photos are unreliable.</li>
        <li>Screenshots are ideal input: they are sharp, straight and high-contrast. Paste one directly with <kbd>Ctrl</kbd> + <kbd>V</kbd>.</li>
      </ul>
      <p>Copy the result to the clipboard or download it as a .txt file. To turn the text into an editable document, paste it into Word or Google Docs.</p>`,

  'heic-to-jpg': `
      <h2>What is a HEIC file?</h2>
      <p>iPhones save photos as <strong>HEIC</strong> (High Efficiency Image Container) because it takes about half the space of JPG. The problem is that many Windows programs, websites and upload forms don't accept HEIC. Converting to JPG makes the photo open everywhere.</p>
      <h2>Converting several photos</h2>
      <p>Add as many HEIC files as you like; each is converted to JPG and you can download them together as a ZIP.</p>
      <p>Want your iPhone to save JPG from now on? Go to <strong>Settings → Camera → Formats</strong> and choose <strong>Most Compatible</strong>.</p>
      <h2>JPG or PNG, and which quality?</h2>
      <p>JPG is the right choice for photos: it opens everywhere and keeps the files small. The quality slider starts at 92%, which is visually identical to the original; drop it to 80% if you are sending many photos by email. PNG keeps every pixel but makes files several times larger, so only use it if a website specifically asks for PNG.</p>
      <h2>Live Photos and bursts</h2>
      <p>Some HEIC files contain more than one image, such as a burst or the frames of a Live Photo. The converter saves every image inside the file, so you may get a few JPGs from one HEIC. Keep the one you want and delete the rest.</p>
      <h2>Getting HEIC photos off an iPhone</h2>
      <ul>
        <li><strong>AirDrop or iCloud Photos</strong> to a Mac usually converts to JPG automatically. Windows PCs, Android phones and many web forms are where HEIC causes trouble.</li>
        <li><strong>USB cable to Windows</strong> — in Settings → Photos → Transfer to Mac or PC, “Automatic” converts on transfer, while “Keep Originals” gives you HEIC files to convert here.</li>
        <li><strong>Sending through WhatsApp or email</strong> also converts photos to JPG, but at lower quality than converting the originals here.</li>
      </ul>
      <p>Large batches are fine: add a whole folder at once and download everything as one ZIP when it finishes.</p>`,

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
      <p>These are static QR codes: they never expire and don't depend on any service staying online.</p>
      <h2>Eight kinds of QR code</h2>
      <ul>
        <li><strong>Website URL</strong> and <strong>plain text</strong>.</li>
        <li><strong>Wi-Fi</strong> — network name, password and security type (WPA/WPA2/WPA3, WEP or open), including hidden networks. Guests point their camera at it and join.</li>
        <li><strong>WhatsApp</strong> — opens a chat with your number and an optional pre-filled message. Popular on shop counters and business cards.</li>
        <li><strong>Email</strong> with subject and message, <strong>phone call</strong>, <strong>SMS</strong> with a message, and <strong>contact card (vCard)</strong> with name, phone, email, company and job title.</li>
      </ul>
      <h2>Error correction and logos</h2>
      <p>QR codes store extra recovery data so they still scan when part of them is dirty, scratched or covered. Low recovers about 7% of the code, Medium 15%, Quartile 25% and High 30%. When you add a logo in the middle, error correction switches to High automatically, because the logo covers part of the code. Keep logos small and test the result.</p>
      <h2>Size and file format</h2>
      <p>Download a PNG at 256, 512, 1024 or 2048 pixels for screens and documents, or an SVG for print — SVG stays perfectly sharp at any size, from a sticker to a banner. A transparent background option is available for placing the code on a coloured design. You can also copy the image straight to the clipboard and paste it into Word, Canva or a chat.</p>
      <p>The text under the preview shows how many characters the code holds. Shorter content gives a simpler code that scans faster, so use a short URL where you can.</p>`,

  'password-generator': `
      <h2>What makes a password strong?</h2>
      <p>Length matters more than anything else. Every extra character multiplies the number of guesses an attacker needs. A random 16-character password using letters, numbers and symbols would take longer than the age of the universe to brute-force; an 8-character one can fall in hours.</p>
      <h2>Random characters or a passphrase?</h2>
      <ul>
        <li><strong>Random password</strong> (e.g. <code>t7#Vq2!mLp9@xR4s</code>) — maximum strength per character. Ideal with a password manager.</li>
        <li><strong>Passphrase</strong> — several random words such as <code>Lamp-River-Orbit-Velvet-42</code>. Easier to type and remember, and still very strong at 5+ words.</li>
      </ul>
      <p>Use “avoid look-alikes” if you'll have to type the password by hand. Passwords are generated with your browser's cryptographically secure random number generator and are never sent anywhere — and never reuse the same password on two sites.</p>
      <h2>Settings you can change</h2>
      <ul>
        <li><strong>Length</strong> from 4 to 64 characters. The tool's default of 16 is a good minimum for important accounts.</li>
        <li><strong>Character types</strong> — uppercase, lowercase, numbers and symbols. Every type you tick is guaranteed to appear at least once, which satisfies sites that demand “one number and one symbol”.</li>
        <li><strong>Avoid look-alikes</strong> leaves out I, l, 1, O and 0, which are easy to misread when typing a password from paper or another screen.</li>
        <li><strong>Passphrase mode</strong> builds 3 to 10 random words with a separator of your choice (hyphen, dot, underscore, space or none), optional capitals and an optional number.</li>
      </ul>
      <h2>What “bits of entropy” means</h2>
      <p>The strength label shows how many guesses an attacker would need, measured in bits: every extra bit doubles the work. Around 60 bits resists casual attacks, 80 bits is strong, and 100+ bits is beyond any realistic brute-force attack. A 16-character password using all four character types is about 105 bits.</p>
      <h2>Five more to choose from</h2>
      <p>Under the main password you get five more alternatives with the same settings, each with its own Copy button — useful when a site rejects one character, or when you are setting up several accounts at once.</p>
      <p>Already have a password and want to know how good it is? Try the <a href="/password-strength-checker">Password Strength Checker</a>.</p>`,

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
      <p>BMI doesn't distinguish muscle from fat, so athletes can score as “overweight” while being very fit, and it isn't designed for children or pregnancy. Waist size and the <a href="/body-fat-calculator">Body Fat Calculator</a> add useful context. For health decisions, talk to a doctor.</p>
      <h2>Metric or imperial</h2>
      <p>Enter your height in centimetres and weight in kilograms, or switch to US units for feet, inches and pounds. Along with your BMI and category, the result shows the <strong>healthy weight range for your height</strong>, so you can see how far you are from it in your own units, and a colour scale showing where you sit.</p>
      <h2>Asian BMI cut-offs</h2>
      <p>Tick <strong>Use Asian BMI cut-offs</strong> if you are of South or East Asian origin. Research shows health risks such as type 2 diabetes start at a lower BMI in these populations, so the categories become: healthy below 23, overweight from 23, and obese from 27.5. Many doctors in Pakistan, India, China and other Asian countries use these values.</p>
      <h2>BMI is for adults</h2>
      <p>This calculator uses adult ranges. Children's and teenagers' BMI is read against growth charts for their age and sex, so ask a doctor or use your country's child BMI tool for anyone under 18. BMI also isn't designed for pregnancy.</p>
      <p>Want a fuller picture? Try the <a href="/body-fat-calculator">body fat calculator</a> or see the <a href="/blog/healthy-bmi-chart">healthy BMI chart by height</a>.</p>`,

  'age-calculator': `
      <h2>Exact age in years, months and days</h2>
      <p>Enter your date of birth to see your exact age, the total number of months, weeks and days you have lived, the weekday you were born on and a countdown to your next birthday. Change the “age at” date to find your age on a past or future date — useful for exam, job and visa forms that ask for age on a specific cut-off date.</p>
      <h2>How age is counted</h2>
      <p>Age is counted in completed years, then completed months, then the remaining days. If you were born on 29 February, most countries treat 28 February (or 1 March) as your birthday in non-leap years; the calculator follows the calendar exactly so you can see both dates.</p>
      <h2>Everything the calculator shows</h2>
      <ul>
        <li>Your exact age in years, months and days, and the <strong>day of the week</strong> you were born.</li>
        <li>Your age as a total in months, weeks, days and hours.</li>
        <li>A countdown to your <strong>next birthday</strong>, the date it falls on and the age you will turn.</li>
        <li>Your Western <strong>zodiac sign</strong> and Chinese zodiac animal.</li>
      </ul>
      <h2>Age on a specific date</h2>
      <p>Admissions, sports leagues, job adverts and visa rules often set an age limit “as on” a cut-off date, for example 1 January or the last date of applications. Change the <strong>Age on this date</strong> field to that date and the calculator shows your age on that day instead of today — the number the form is really asking for.</p>
      <h2>Why online calculators sometimes disagree by a day</h2>
      <p>Months have different lengths, so “1 month” from 31 January has no exact equivalent. This calculator counts completed calendar months first and then the remaining days, the same way a person would count on a calendar. Some calculators instead divide the total number of days by an average month length, which can give a result a day or two different.</p>
      <p>Need the gap between any two dates rather than an age? Use <a href="/date-difference-calculator">Days Between Dates</a>, which can also count working days.</p>`,

  'percentage-calculator': `
      <h2>Three percentage questions, solved</h2>
      <ul>
        <li><strong>What is X% of Y?</strong> — multiply: 15% of 2,400 = 2,400 × 0.15 = <strong>360</strong>.</li>
        <li><strong>X is what percent of Y?</strong> — divide and ×100: 45 out of 60 = 45 ÷ 60 × 100 = <strong>75%</strong>.</li>
        <li><strong>Percentage change</strong> — (new − old) ÷ old × 100: from 80 to 100 is <strong>+25%</strong>; from 100 to 80 is <strong>−20%</strong>.</li>
      </ul>
      <h2>A common mistake</h2>
      <p>Percentage changes don't cancel out. A price that rises 20% and then falls 20% ends up 4% lower than where it started (100 → 120 → 96), because the second percentage is taken from a bigger number. For discounts and sale prices, the <a href="/discount-calculator">Discount Calculator</a> does the maths for you.</p>
      <h2>Six calculators on one page</h2>
      <ul>
        <li><strong>What is X% of Y?</strong> — tips, tax, commission and discounts.</li>
        <li><strong>X is what % of Y?</strong> — what share one number is of another.</li>
        <li><strong>% change from X to Y</strong> — shows clearly whether it is an increase or a decrease.</li>
        <li><strong>Marks obtained out of total</strong> — exam percentage, for example 445 out of 550 = 80.91%.</li>
        <li><strong>Add X% to Y</strong> — a price plus tax, or a salary plus a raise.</li>
        <li><strong>Subtract X% from Y</strong> — a sale price after a discount.</li>
      </ul>
      <p>Each row calculates as you type, with no button to press.</p>
      <h2>Percent vs percentage points</h2>
      <p>If an interest rate goes from 5% to 6%, it has risen by 1 <em>percentage point</em> but by 20 <em>percent</em> (because 1 is 20% of 5). News reports and bank offers often mix these up, so check which one is meant before comparing figures.</p>
      <h2>Reverse percentages</h2>
      <p>To find the price before tax was added, divide rather than subtract: a price of 118 including 18% tax was 118 ÷ 1.18 = 100 before tax, not 118 − 18% = 96.76. The <a href="/gst-calculator">GST / VAT calculator</a> does this for you.</p>`,

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
      <p>Need to fit a strict character limit? The <a href="/character-counter">Character Counter</a> focuses on characters only.</p>
      <h2>What each number means</h2>
      <ul>
        <li><strong>Words</strong> are runs of letters or numbers, so “well-known” and “don't” each count as one word, and stand-alone symbols such as “–” or “&amp;” are not counted. Arabic, Urdu, Hindi and other scripts are counted too.</li>
        <li><strong>Sentences</strong> end with a full stop, question mark or exclamation mark (including Arabic and Urdu question marks). <strong>Paragraphs</strong> are separated by a blank line.</li>
        <li><strong>Reading time</strong> assumes 238 words per minute, the average for adults reading silently. <strong>Speaking time</strong> assumes 150 words per minute, a comfortable presentation pace.</li>
        <li><strong>Unique words</strong> shows how varied your vocabulary is — a very low number in a long text often means repetition.</li>
      </ul>
      <h2>Top keywords and platform limits</h2>
      <p>Below the text box you see the ten words you use most (common words such as “the” and “and” are ignored), with how often each appears as a percentage. Next to it, bars show how your text compares with real limits: an X post, an SEO title and meta description, an SMS, an Instagram caption, a YouTube title, a LinkedIn post and the part of a Facebook post shown before “See more”.</p>
      <h2>Your text is kept for you</h2>
      <p>What you type is saved in your own browser, so it is still there if you close the tab by accident. Click <strong>Clear</strong> when you are done, especially on a shared computer.</p>
      <p>Working to a time limit rather than a word limit? The <a href="/words-to-minutes">Words to Minutes</a> calculator lets you pick your own speaking speed.</p>`,

  'loan-calculator': `
      <h2>How the EMI is calculated</h2>
      <p>An EMI (equated monthly instalment) is the fixed monthly payment that pays off a loan with interest over its term. The formula is <code>EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)</code>, where P is the loan amount, r the monthly interest rate (annual rate ÷ 12 ÷ 100) and n the number of months.</p>
      <p>Example: 1,000,000 at 12% a year for 5 years (60 months) → r = 0.01 → EMI ≈ <strong>22,244</strong> a month, and about 334,667 paid in interest in total.</p>
      <h2>Reading the schedule</h2>
      <p>In the early months most of each payment goes to interest; later, most goes to the principal. That's why paying extra early in the loan saves the most interest. Compare offers by total interest, not just the monthly amount — a longer term lowers the EMI but usually costs much more overall.</p>
      <h2>Monthly or yearly schedule</h2>
      <p>The repayment table can show every month or a summary per year. Each row lists the payment, how much went to principal and to interest, and the balance still owed. A pie chart shows the split between the amount you borrowed and the total interest — often an eye-opener on long loans. Enter the tenure in years or in months, whichever your loan offer uses.</p>
      <h2>Comparing two loan offers</h2>
      <ol>
        <li>Enter the first offer and note the monthly EMI and total interest.</li>
        <li>Change only the rate or the tenure for the second offer.</li>
        <li>Compare the <strong>total payment</strong>, not just the monthly EMI. A longer tenure lowers the EMI but almost always costs more in total.</li>
      </ol>
      <h2>What the EMI doesn't include</h2>
      <p>Processing fees, insurance, taxes and late-payment charges are not part of the formula. Ask the lender for the annual percentage rate (APR), which includes most fees, and use it as the rate here for a truer comparison. For home loans with property tax and insurance, use the <a href="/mortgage-calculator">mortgage calculator</a>.</p>`,

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
      <p>Your data stays in your browser, so it is safe to format API responses containing tokens or personal data.</p>
      <h2>Beautify, minify or explore as a tree</h2>
      <p><strong>Format / Beautify</strong> re-indents the JSON with 2 spaces, 4 spaces or tabs. <strong>Minify</strong> removes every unnecessary space and line break, which makes API payloads and config values smaller. <strong>Tree view</strong> shows the data as collapsible objects and arrays — the quickest way to understand a large API response you didn't write.</p>
      <h2>Sort keys for clean comparisons</h2>
      <p>Tick <strong>Sort keys</strong> to put every object's keys in alphabetical order, at every level. Two JSON files with the same data but keys in a different order then format identically, so you can paste both into <a href="/text-compare">Text Compare</a> and see only the real differences.</p>
      <h2>Reading the error message</h2>
      <p>When the JSON is invalid you get the parser's reason plus the exact line and column, for example “Unexpected token } (line 14, column 3)”. The real mistake is usually just before that point — most often a missing comma at the end of the previous line, or an extra one before a closing bracket.</p>
      <h2>Copy or download</h2>
      <p>Copy the result to the clipboard, or download it as a .json file. The size shown after a successful check is the size of the JSON as entered, which helps when an API or database field has a size limit.</p>`,

  'pdf-to-png': `
      <h2>Sharp PNG images from every page</h2>
      <p>Turn every page of a PDF into a separate PNG image. PNG is lossless, so text, lines and diagrams stay perfectly sharp — the best choice for slides, charts and anything you will edit later. Download single pages or all of them as a ZIP, with no watermark.</p>
      <h2>Choosing the resolution</h2>
      <ul>
        <li><strong>Medium (150 DPI)</strong> — screens, websites and presentations.</li>
        <li><strong>High (220 DPI)</strong> — zooming in on small text.</li>
        <li><strong>Print (300 DPI)</strong> — printing.</li>
      </ul>
      <h2>Common uses</h2>
      <ul>
        <li><strong>Signatures</strong> — export the page with your signature, then cut it out with <a href="/crop-image">Crop Image</a>.</li>
        <li><strong>Logos</strong> — turn a logo supplied as a PDF into an image for a website or social profile.</li>
        <li><strong>No Acrobat</strong> — exporting images from Adobe Acrobat needs the paid Pro version; this works on Windows, Mac and phones for free.</li>
      </ul>
      <p>Pages are rendered on a white background. For a transparent background, convert first, then remove the white with the <a href="/remove-background">Background Remover</a>.</p>`,

  'rotate-pdf': `
      <h2>Rotate pages and keep them that way</h2>
      <p>Scanned a page sideways or upside down? Rotate PDF pages 90° right, 90° left or 180° and download a new file, so they stay the right way up every time the document is opened. Viewers such as Google Drive or a browser's PDF reader only turn the page on your screen; the file itself stays wrong.</p>
      <h2>Which pages?</h2>
      <ul>
        <li><strong>All pages</strong> — fix a whole document scanned in the wrong orientation.</li>
        <li><strong>Odd or even pages</strong> — useful for double-sided scans where every other page came out upside down.</li>
        <li><strong>Custom pages</strong> — enter a list such as <code>2, 5-7</code>.</li>
      </ul>
      <p>PDF pages always rotate in 90° steps (90, 180 or 270), in every reader. No Adobe Acrobat is needed: it works in Chrome, Edge, Firefox and Safari on computers and phones, with no watermark, no file limit and no account.</p>`,

  'organize-pdf': `
      <h2>Rearrange pages visually</h2>
      <p>Drag and drop page thumbnails to put them in the right order, turn sideways pages with ↻, and remove pages you don't need with ✕. When it looks right, save a new PDF — no software to install and no paid editor.</p>
      <h2>What you can do</h2>
      <ul>
        <li><strong>Reorder</strong> — fix pages that were scanned out of order.</li>
        <li><strong>Rotate</strong> — straighten individual pages that came out sideways.</li>
        <li><strong>Delete</strong> — drop blank or duplicate pages in the same step.</li>
      </ul>
      <h2>Pages from several files</h2>
      <p>If the pages are spread across documents, combine them first with <a href="/merge-pdf">Merge PDF</a>, then rearrange them here. For a printed booklet, don't arrange the pages by hand — the <a href="/pdf-booklet-maker">PDF Booklet Maker</a> works out the printing order for you.</p>
      <p>Once your pages are in order, you can convert the result with <a href="/pdf-to-word">PDF to Word</a> or <a href="/pdf-to-jpg">PDF to JPG</a>.</p>`,

  'delete-pdf-pages': `
      <h2>Remove pages from a PDF</h2>
      <p>Type the pages you want to remove — for example <code>2, 5-7, 12</code> — and download a new PDF without them. No Adobe subscription, no sign-up and no watermark, on Windows, Mac, Linux, Chromebooks and phones alike.</p>
      <h2>On Mac and iPhone</h2>
      <p>On a Mac you can also delete pages in Preview (View → Thumbnails, select a page, press Delete). On an iPhone or Android phone, this page works in Safari or Chrome with no app. Unlike viewing a PDF in Google Drive, you get a new file you can keep.</p>
      <h2>Tips</h2>
      <ul>
        <li>To remove pages and also reorder the rest, use <a href="/organize-pdf">Organize PDF</a> instead.</li>
        <li>Want to keep only a few pages? <a href="/split-pdf">Split PDF</a> can extract them directly.</li>
        <li>Useful for trimming contracts, scanned books and bank statements before you send them.</li>
      </ul>`,

  'add-page-numbers': `
      <h2>Number the pages of any PDF</h2>
      <p>Upload a document and choose where the numbers go — top or bottom, left, centre or right — and how they look: <code>1</code>, <code>Page 1</code>, <code>1 of 10</code>, <code>Page 1 of 10</code> or <code>- 1 -</code>. You can also set the starting number, font size, margin and colour. The result has no watermark.</p>
      <h2>No Acrobat needed</h2>
      <p>Adobe Acrobat can number pages through its header and footer tools, but only in the paid Pro version. On a Mac, Preview has no page-numbering feature at all. This tool does the job in any browser on Windows, Mac, Linux or a phone.</p>
      <h2>Useful options</h2>
      <ul>
        <li><strong>Skip the first page</strong> — leave the cover unnumbered.</li>
        <li><strong>Start at</strong> any number — continue numbering from a previous document.</li>
        <li>For printing, use a margin of 28–40 pt so printers don't cut the numbers off.</li>
      </ul>
      <p>Roman numerals for front matter aren't supported yet. If your preface needs them, number the main section here and keep the preface as a separate file. To send someone straight to a page, add <code>#page=5</code> to the end of a link to the PDF — most viewers open it at that page.</p>`,

  'watermark-pdf': `
      <h2>A text watermark on every page</h2>
      <p>Type your watermark — CONFIDENTIAL, DRAFT, COPY or your company name — and choose the font size, colour, opacity and angle. Place it once in the <strong>centre</strong> of each page, or <strong>tiled</strong> across the whole page so it can't simply be cropped out. No sign-up, and no watermark of our own.</p>
      <h2>Why watermark a PDF?</h2>
      <ul>
        <li>Mark drafts and confidential reports before sharing them.</li>
        <li>Protect designs, quotes and portfolios sent to clients.</li>
        <li>Stamp copies of ID documents with “For visa application only”.</li>
      </ul>
      <h2>No Adobe Acrobat needed</h2>
      <p>It works in any browser on Windows, Mac and phones, and your file is never uploaded.</p>
      <h2>Good to know</h2>
      <ul>
        <li>This adds text watermarks. For a logo, add it to the images with <a href="/watermark-image">Watermark Image</a> before building the PDF.</li>
        <li>A watermark discourages copying, but it isn't encryption.</li>
        <li>We don't offer watermark removal, because removing other people's watermarks is usually not permitted.</li>
        <li>If you plan to edit the document, convert and edit it first, then add the watermark last.</li>
      </ul>`,

  'pdf-to-text': `
      <h2>Extract all the text from a PDF</h2>
      <p>Pull the text out of a PDF so you can copy it, search it or save it as a .txt file. Tick <strong>Add page separators</strong> to keep track of which page each part came from. Useful for reports, books, papers and contracts, and for PDFs that block normal text selection.</p>
      <h2>Text for AI chat tools</h2>
      <p>ChatGPT, Claude and other AI assistants work best with clean text. Extract it here, check it, then paste it into the chat.</p>
      <h2>Good to know</h2>
      <ul>
        <li><strong>Scanned PDFs</strong> are pictures of text, so there's nothing to extract — use <a href="/image-to-text">Image to Text (OCR)</a> instead.</li>
        <li>Columns and tables are flattened into plain lines — fine for reading or AI, less so for keeping the layout. For an editable layout, try <a href="/pdf-to-word">PDF to Word</a>.</li>
        <li>Want it read aloud? Extract it here, then paste it into <a href="/text-to-speech">Text to Speech</a>.</li>
      </ul>
      <p>Developers can do this in Python with libraries such as pypdf; for one-off files, this page is quicker.</p>`,

  'sign-pdf': `
      <h2>Sign a document without printing it</h2>
      <p>Open your document, create a signature and click where it should go. You can <strong>draw</strong> it with a mouse or finger, <strong>type</strong> it in a handwriting font, or <strong>upload</strong> a picture of your real signature. Then download the signed file — no account, no email address and no watermark.</p>
      <h2>On any device</h2>
      <ul>
        <li><strong>iPhone and Android</strong> — draw your signature with your finger for the most natural result.</li>
        <li><strong>Windows and Mac</strong> — type it, draw it on a trackpad, or upload a scan.</li>
        <li>It works in Chrome, Edge, Firefox and Safari, with nothing to install and no Adobe Acrobat needed.</li>
      </ul>
      <p>It's ideal for rental agreements, offer letters and school forms you need to send back today: open the form, place the signature next to the signature line, and download.</p>
      <h2>Is it legally valid?</h2>
      <p>A drawn or typed signature is an <em>electronic signature</em>, which most countries accept for everyday agreements — for example under the US ESIGN Act and the EU's eIDAS rules. Some documents, such as wills, property deeds and certain government forms, need a wet-ink or certified digital signature, so check if in doubt. Because everything stays on your device, the contract isn't shared with a third-party service.</p>`,

  'crop-image': `
      <h2>Crop to any size or shape</h2>
      <p>Drag the frame over your photo, or choose a ratio to lock its shape: free, 1:1, 4:3, 3:4, 16:9, 9:16, 3:2 or a ⭕ circle. You can also type the exact width and height in pixels. Download as JPG, PNG or WebP.</p>
      <h2>Common crops</h2>
      <ul>
        <li><strong>Instagram</strong> — 1:1 for square posts; for 4:5 portrait posts, choose 3:4 and adjust.</li>
        <li><strong>Profile pictures</strong> — choose ⭕ circle; it saves as a transparent PNG, ready for Discord, WhatsApp or LinkedIn.</li>
        <li><strong>YouTube thumbnail</strong> — 16:9, then resize to 1280 × 720.</li>
        <li><strong>YouTube banner</strong> — 16:9 at 2560 × 1440, keeping key content in the centre.</li>
        <li><strong>TikTok and phone wallpapers</strong> — 9:16 vertical.</li>
        <li><strong>Passport photos</strong> — use the <a href="/passport-photo-maker">Passport Photo Maker</a>, which crops to official sizes.</li>
      </ul>
      <h2>Quicker than a photo editor</h2>
      <p>For a quick crop there's no need to open Photoshop, Canva or Illustrator, and it is simpler than the built-in tools on many computers, such as Preview on a Mac. No watermark and no sign-up.</p>`,

  'image-converter': `
      <h2>Convert between JPG, PNG and WebP</h2>
      <p>Convert photos and graphics between the formats people use every day, several at a time, right in your browser. Choose the quality, and pick a background colour for transparent areas when converting to JPG, which can't store transparency.</p>
      <h2>Which format should I use?</h2>
      <ul>
        <li><strong>JPG</strong> — photos; small files that open everywhere and the format most upload forms ask for.</li>
        <li><strong>PNG</strong> — logos, screenshots and anything with transparency or sharp text.</li>
        <li><strong>WebP</strong> — about 30% smaller than JPG, ideal for websites.</li>
      </ul>
      <h2>Other conversions</h2>
      <ul>
        <li>iPhone photos — use <a href="/heic-to-jpg">HEIC to JPG</a>.</li>
        <li>Several images into one document — use <a href="/jpg-to-pdf">JPG to PDF</a>.</li>
        <li>SVG is a vector format, so a photo can't truly become an SVG; logos are best redrawn as vectors.</li>
      </ul>
      <h2>Getting the right size</h2>
      <p>Combine it with <a href="/resize-image">Resize Image</a> when a site needs exact dimensions — for example a 3000 × 3000 album cover, a 1080 × 1350 Instagram post, a square WhatsApp profile picture or a 2560 × 1440 YouTube banner.</p>`,

  'png-to-jpg': `
      <h2>Convert PNG images to JPG</h2>
      <p>Change PNG images into JPG, several at a time. For photos, JPG files are usually much smaller than PNG, and every website, upload form and email client accepts them.</p>
      <h2>What happens to transparency?</h2>
      <p>JPG can't store transparent areas, so they are filled with a colour of your choice. White is the default — ideal for product photos, logos in documents and ID uploads — but you can pick any other colour.</p>
      <h2>Quality and size</h2>
      <p>A quality of around 85–92% suits photos; lower it to shrink files further. For websites, combine it with <a href="/resize-image">Resize Image</a> so pictures aren't larger than they are displayed.</p>
      <p>It works in the browser on iPhone, Android, Windows and Mac, with no software and no watermark.</p>`,

  'jpg-to-png': `
      <h2>Convert JPG photos to PNG</h2>
      <p>Turn JPG and JPEG images into PNG files, several at a time. PNG is lossless, so once converted, the image stops losing quality every time it is edited and saved — useful for graphics you'll keep working on. Renaming a file's extension doesn't convert it; this does.</p>
      <h2>Will the background be transparent?</h2>
      <p>Not by itself — a JPG has no transparency to keep. For a transparent background, convert here and then use the <a href="/remove-background">Background Remover</a>.</p>
      <h2>When PNG is the better choice</h2>
      <ul>
        <li><strong>Signatures</strong> — convert a photographed signature, then remove the paper background; or draw one with the <a href="/signature-generator">Signature Generator</a>.</li>
        <li><strong>Logos</strong> — PNG keeps edges crisp on websites and in documents.</li>
        <li><strong>Graphics with text</strong> for websites, and images for printing where you want no further compression.</li>
      </ul>
      <p>PNG files are larger than JPG for photos, so keep ordinary photos as JPG unless you need one of these benefits.</p>`,

  'webp-to-jpg': `
      <h2>Turn WebP images into JPG</h2>
      <p>Saved an image from a website and got a .webp file that won't open or upload? Convert it to an ordinary JPG that works everywhere — Word, PowerPoint, older photo viewers and upload forms.</p>
      <h2>Many files at once</h2>
      <p>Add as many files as you like, convert them in one click, and download them together as a ZIP. Transparent areas are filled with white (or a colour you choose), because JPG can't store transparency.</p>
      <h2>On Windows and Mac</h2>
      <p>On a Mac it saves opening each file in Preview and exporting it, and there is no browser extension to install.</p>
      <h2>Why websites use WebP</h2>
      <p>WebP files are about 25–35% smaller than JPG at the same quality, so websites use them to load faster. Not every program can open them, though. If you need to keep transparency, convert to PNG with <a href="/webp-to-png">WebP to PNG</a> instead.</p>`,

  'webp-to-png': `
      <h2>WebP to PNG, transparency kept</h2>
      <p>Change WebP images into PNG files that every editor and app can open. Unlike JPG, PNG supports transparency, so see-through areas stay intact — ideal for logos, stickers and cut-out product shots.</p>
      <h2>Many images at once</h2>
      <p>Drop a whole folder of images, convert them with one click, and download them together as a ZIP. It runs in the browser on Windows, Mac and Linux, with no extension to install.</p>
      <h2>An image on a website</h2>
      <p>Open the image link in your browser, right-click → Save image as, then drop the saved .webp file here.</p>
      <h2>PNG or JPG?</h2>
      <p>Choose PNG for graphics, screenshots and anything transparent. For photos where small files matter, choose JPG with <a href="/webp-to-jpg">WebP to JPG</a>.</p>`,

  'jpg-to-webp': `
      <h2>Smaller images, same quality</h2>
      <p>WebP images are typically 25–35% smaller than JPG at the same visual quality, so websites load faster and score better in Google's page-speed tests. Convert your photos in seconds for blogs, online shops and portfolios.</p>
      <h2>Many images at once</h2>
      <p>Add dozens of images and download them all together as a ZIP. It works on Windows, Mac, Linux and phones.</p>
      <h2>Choosing quality</h2>
      <p>A quality of around 75–85% usually looks the same as the original JPG while saving the most space. Go higher for detailed product photos.</p>
      <h2>Using WebP on your site</h2>
      <ul>
        <li>All modern browsers display WebP. For very old browsers, use a <code>&lt;picture&gt;</code> element with a JPG fallback.</li>
        <li>WordPress, Shopify and most site builders accept WebP uploads directly.</li>
        <li>Working in Photoshop or Canva? Export as JPG and convert here.</li>
      </ul>`,

  'rotate-image': `
      <h2>Rotate and mirror in one click</h2>
      <p>Use <strong>⟲ Rotate left</strong> and <strong>⟳ Rotate right</strong> for 90° turns, and <strong>⇋ Flip horizontal</strong> or <strong>⇵ Flip vertical</strong> to mirror the picture. Every change previews instantly; <strong>Reset</strong> takes you back to the original, and <strong>Download</strong> saves the result into the image itself.</p>
      <h2>Mirroring a photo</h2>
      <p>Flip horizontal swaps left and right. It fixes selfies that the front camera saved reversed, and text photographed in a mirror. Flip vertical turns a picture upside down, the same as rotating it 180°.</p>
      <h2>Common uses</h2>
      <ul>
        <li>Fix sideways phone photos before uploading them to forms that ignore the photo's rotation setting.</li>
        <li>Mirror a design for T-shirt transfers and iron-on prints, which must be printed reversed.</li>
        <li>Create symmetrical designs, or change the direction a subject faces in a layout.</li>
      </ul>
      <h2>Better than rotating inside documents</h2>
      <p>Word, PowerPoint and Google Docs can rotate a picture on the page, but the change often can't be saved as a separate image. Here you download a corrected file you can use anywhere. It works on iPhone, Android and computers with nothing to install.</p>`,

  'image-to-base64': `
      <h2>Images as text, and back</h2>
      <p>Base64 turns an image file into plain text, so it can be embedded directly in HTML, CSS, JSON or an email without a separate file. This tool works both ways: <strong>Image → Base64</strong> to encode, and <strong>Base64 → Image</strong> to turn a string back into a picture. PNG, JPG, GIF, WebP and SVG are supported.</p>
      <h2>Outputs you can copy</h2>
      <ul>
        <li>The raw Base64 string.</li>
        <li>A <strong>data URL</strong> starting with <code>data:image/png;base64,</code>, which works anywhere a URL does.</li>
        <li>A ready <code>&lt;img src="…"&gt;</code> tag for pages that must be a single file.</li>
        <li>A CSS <code>background-image</code> snippet.</li>
      </ul>
      <h2>When to use Base64 images</h2>
      <p>Good for small icons, email signatures and templates, Markdown documents, and offline single-file pages. Avoid it for large photos: Base64 is about 33% bigger than the original file and can't be cached separately by browsers.</p>
      <p>In Python, <code>base64.b64encode(open("logo.png","rb").read()).decode()</code> does the same job in a script.</p>`,

  'watermark-image': `
      <h2>Protect your photos before posting</h2>
      <p>Add your own text — your name, @handle, website or “©” — and set the colour, size, opacity, angle and an optional shadow. Place it in a corner, in the centre, or <strong>tiled</strong> across the whole photo so it can't be cropped out. We don't add a watermark of our own on top.</p>
      <h2>Logo watermarks</h2>
      <p>Switch to <strong>Logo watermark</strong>, upload a transparent PNG of your logo, and place it the same way. Ideal for photographers, online sellers and property listings.</p>
      <h2>Many photos at once</h2>
      <p>Add all your photos together and the same watermark is applied to each one; then download them together as a ZIP.</p>
      <h2>No editing software needed</h2>
      <p>There's no need to open Photoshop, Lightroom, Canva or Paint, or to fight with Word or PowerPoint. It works in any browser, including on Android phones and iPhone.</p>`,

  'photo-filters': `
      <h2>Adjust and filter your photos</h2>
      <p>Change <strong>brightness</strong>, <strong>contrast</strong> and <strong>saturation</strong>, add <strong>blur</strong>, rotate the hue, and apply classic effects — <strong>greyscale</strong> (black &amp; white), <strong>sepia</strong> (vintage) and <strong>invert</strong>. Changes preview instantly, and <strong>Original</strong> or <strong>Reset</strong> takes you back at any time.</p>
      <h2>Quick recipes</h2>
      <ul>
        <li><strong>Vintage</strong> — sepia, slightly lower saturation, a touch more contrast.</li>
        <li><strong>Moody black &amp; white</strong> — greyscale plus extra contrast.</li>
        <li><strong>Bright and airy</strong> — raise the brightness a little and lower the contrast.</li>
        <li><strong>Dreamy background</strong> — a small amount of blur.</li>
      </ul>
      <h2>Quick edits without an app</h2>
      <p>There's nothing to download, and it works on phones and computers without a Photoshop subscription. It doesn't track faces like Snapchat-style camera filters; for clean, classic adjustments it's quicker. No watermark is added.</p>`,

  'meme-generator': `
      <h2>Make a meme in seconds</h2>
      <p>Upload any picture, type your <strong>top text</strong> and <strong>bottom text</strong>, and download. You can change the font size, text colour and outline colour, and switch UPPERCASE on or off for the classic white-text-with-black-outline style. No watermark is added.</p>
      <h2>Using famous templates</h2>
      <p>Find the template you want — the Drake format, Bernie Sanders, Forrest Gump and so on — save the image, and add your captions here. Your own photos work just as well.</p>
      <h2>Tips for funny memes</h2>
      <ul>
        <li>Keep the text short — one line at the top and one at the bottom reads best on phones.</li>
        <li>Use a thick outline so the text is readable on any background.</li>
        <li>Square or 4:5 images look best on Instagram; crop first with <a href="/crop-image">Crop Image</a>.</li>
      </ul>
      <p>This makes image memes. For animated memes, turn a video clip into a GIF with <a href="/video-to-gif">Video to GIF</a> first. It works in the browser on iPhone, Android and computers.</p>`,

  'favicon-generator': `
      <h2>Make a favicon from text or an image</h2>
      <p>A favicon is the small icon shown in browser tabs, bookmarks and Google search results. You can create one two ways:</p>
      <ul>
        <li><strong>From text or emoji</strong> — type a letter or emoji, choose colours, a square, rounded or circle shape, and a font.</li>
        <li><strong>From an image</strong> — upload your logo as PNG, JPG or SVG and get every size.</li>
      </ul>
      <p>You get favicon.ico plus PNG sizes: 16×16, 32×32, 180×180 for Apple touch icons, and 192 and 512 for Android and installable web apps (PWAs).</p>
      <h2>Adding it to your site</h2>
      <ul>
        <li><strong>WordPress</strong> — Appearance → Customize → Site Identity → Site Icon (upload the 512 PNG).</li>
        <li><strong>Shopify</strong> — Online Store → Themes → Customize → Theme settings → Favicon.</li>
        <li><strong>Blogger</strong> — Layout → Favicon → Edit.</li>
        <li><strong>Next.js and React</strong> — put the files in <code>public/</code> (or <code>app/</code> for Next.js) and add the <code>&lt;link&gt;</code> tags.</li>
      </ul>`,

  'image-color-picker': `
      <h2>Pick any colour from a picture</h2>
      <p>Upload a photo, screenshot or logo and click anywhere on it to pick the exact colour. The code is shown in <strong>HEX</strong>, <strong>RGB</strong> and <strong>HSL</strong>, the colours you pick are kept in a list, and the <strong>main colours in the image</strong> are shown automatically as a ready-made palette.</p>
      <h2>Who uses it</h2>
      <ul>
        <li><strong>Designers</strong> matching a brand colour from a logo or photo.</li>
        <li><strong>Developers</strong> copying a hex code straight into CSS.</li>
        <li><strong>Painters and crafters</strong> matching a colour at the paint shop.</li>
      </ul>
      <h2>Colours from a website or your screen</h2>
      <p>Take a screenshot (Windows: Win + Shift + S; Mac: Cmd + Shift + 4), then paste or upload it here. For an image on a web page, save it first. Any PNG, JPG or WebP works.</p>
      <p>Want colours that go with the one you picked? Try the <a href="/color-palette-generator">Color Palette Generator</a>.</p>`,

  'svg-to-png': `
      <h2>Turn vector files into PNG images</h2>
      <p>SVG files are vectors: they stay sharp at any size, but many apps, social networks and document editors can't open them. This renders your SVG into a crisp PNG at the width you choose — high-resolution output for print, or small icons for apps.</p>
      <h2>Transparent or solid background</h2>
      <p>By default the PNG keeps a transparent background, which suits logos and icons. Tick “Fill background” for white (or any colour) when the image will go into a document or slide.</p>
      <h2>Choosing the size</h2>
      <p>Set the output width and the height follows the SVG's proportions. As a guide: 512 px for app icons, 1200 px for web graphics, and 3000 px or more for printing.</p>
      <h2>An SVG on a website</h2>
      <p>Open the SVG's link, save the file (Ctrl/Cmd + S), and drop it here.</p>
      <p>There's no need for Inkscape or Illustrator — it works on Windows, Mac and phones.</p>`,

  'passport-photo-maker': `
      <h2>Official passport photo sizes at home</h2>
      <p>Take a photo against a plain wall and upload it. The tool crops it to the official size for your country, lets you set the background colour (white is standard), and prepares a sheet for printing — no studio fee and no app.</p>
      <h2>Sizes included</h2>
      <ul>
        <li><strong>35 × 45 mm</strong> — UK, EU, Pakistan, India, Australia and most countries.</li>
        <li><strong>2 × 2 in (51 × 51 mm)</strong> — USA and Indian visas.</li>
        <li><strong>50 × 70 mm</strong> Canada · <strong>33 × 48 mm</strong> China · <strong>40 × 60 mm</strong> Saudi Arabia · <strong>35 × 50 mm</strong> Malaysia · <strong>40 × 50 mm</strong> UAE visa.</li>
      </ul>
      <p>The same sizes work for visa applications and many ID cards.</p>
      <h2>Printing</h2>
      <p>Download a 4 × 6 inch (10 × 15 cm) sheet to print cheaply at any photo kiosk, or an A4 sheet for a home printer. Print at 100% scale so the size stays exact.</p>
      <h2>Tips for a photo that gets accepted</h2>
      <ul>
        <li>Use even lighting, with no shadows on your face or the background.</li>
        <li>Look straight at the camera with a neutral expression, and avoid glare on glasses.</li>
        <li>Need a white background? Use the <a href="/remove-background">Background Remover</a> first.</li>
      </ul>
      <p>It runs in the browser on Windows, Mac and phones.</p>`,

  'collage-maker': `
      <h2>Make a collage from your photos</h2>
      <p>Add your photos, choose a layout, and download the finished collage. You can set the number of columns, the spacing between photos, rounded corners and the background colour. No sign-up and no watermark.</p>
      <h2>Sizes for every use</h2>
      <ul>
        <li><strong>Square 1080 × 1080</strong> — Instagram feed posts.</li>
        <li><strong>Portrait 1080 × 1350</strong> — taller Instagram and Facebook posts.</li>
        <li><strong>Story 1080 × 1920</strong> — Instagram and WhatsApp stories, or a phone wallpaper.</li>
        <li><strong>Landscape 1920 × 1080</strong> — a desktop or laptop background.</li>
        <li><strong>Large square 2400 × 2400</strong> — printing for photo books and frames.</li>
      </ul>
      <h2>Tips for a great collage</h2>
      <ul>
        <li>Use an even number of photos for tidy rows, or 3, 6 or 9 for square grids.</li>
        <li>A little spacing and rounded corners give a modern look.</li>
        <li>Pick a background colour from one of your photos so everything matches.</li>
      </ul>
      <p>It runs in the browser on Windows, Mac, Android and iPhone, so there is no app to install.</p>`,

  'video-converter': `
      <h2>MP4, WebM, MOV, MKV and AVI</h2>
      <p>Convert a video into the format you need: <strong>MP4</strong>, WebM, MOV, MKV or AVI. Converting to MP4 fixes the most common problem — a file that won't play on a phone, TV or social app. Choose <strong>High</strong>, <strong>Balanced</strong> or <strong>Small file</strong> quality, or tick <strong>Fast mode</strong> to keep the original codecs where possible, which is much quicker and loses no quality.</p>
      <h2>Which format?</h2>
      <ul>
        <li><strong>MP4</strong> — plays everywhere; best for WhatsApp, YouTube, Instagram and Discord.</li>
        <li><strong>WebM</strong> — smaller files for websites.</li>
        <li><strong>MOV</strong> — Apple editing apps. <strong>MKV</strong> — keeps multiple audio and subtitle tracks.</li>
      </ul>
      <h2>On any device</h2>
      <p>It runs in the browser on Windows, Mac, Linux, Chromebook, Android and iPhone, so there is no software to download. Everyday files of a few hundred MB work well on a modern computer.</p>
      <h2>Audio and GIFs</h2>
      <p>Need the sound only? Use <a href="/video-to-mp3">Video to MP3</a>. Want a short loop? Try <a href="/video-to-gif">Video to GIF</a>.</p>
      <p>The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-compressor': `
      <h2>Make videos smaller</h2>
      <p>Compress by <strong>level</strong> (Light, Recommended, Strong, Maximum) or by <strong>target size</strong>: type the size you need and the compressor works out the right bitrate. You can also lower the resolution (1080p, 720p, 480p, 360p) and the audio quality, or remove the audio entirely. No watermark is added.</p>
      <h2>Fitting Discord's upload limit</h2>
      <p>Discord limits uploads on free accounts (10 MB at the time of writing). Set the target size to about 9.5 MB to stay safely under it. Nitro subscribers can upload much larger files.</p>
      <h2>Other common limits</h2>
      <ul>
        <li><strong>Email</strong> — Gmail attachments max out at 25 MB.</li>
        <li><strong>Instagram and WhatsApp</strong> — 720p at the Recommended level looks sharp on phones.</li>
      </ul>
      <h2>Keeping the quality</h2>
      <p>For the best-looking result, use <strong>Light</strong> or <strong>Recommended</strong> and keep the original resolution. Phone videos are recorded at very high bitrates, so they often shrink by 50–70% with no visible difference.</p>
      <p>It runs in the browser on computers and phones, so there is nothing to install. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-to-mp3': `
      <h2>Take the sound out of any video</h2>
      <p>Extract the audio from a video and save it as <strong>MP3</strong>, M4A, WAV or OGG, at quality from 96 kbps (small) to 320 kbps (best). Useful for lectures, podcasts recorded on video, interviews and music clips you own.</p>
      <h2>Quality guide</h2>
      <ul>
        <li><strong>320 kbps</strong> — best for music.</li>
        <li><strong>192 kbps</strong> — great quality in a smaller file.</li>
        <li><strong>96–128 kbps</strong> — speech, lectures and podcasts.</li>
      </ul>
      <h2>Make a ringtone</h2>
      <p>Extract the audio here, then cut the best 30 seconds with the <a href="/mp3-cutter">MP3 Cutter</a>.</p>
      <h2>On any device</h2>
      <p>It runs in the browser on Android, iPhone and computers, with no app or software to download.</p>
      <p>Please only convert videos you own or have permission to use. This tool converts files on your device; it doesn't download from YouTube or other sites.</p>
      <p>The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'mp4-to-mp3': `
      <h2>Take the audio out of an MP4</h2>
      <p>Extract the sound from an MP4 video and save it as MP3, M4A, WAV or OGG. Choose 320 kbps for music or 128 kbps for speech. Useful for lectures, recordings and voice notes that were saved as video.</p>
      <h2>Large files</h2>
      <p>Because the conversion happens on your own device, there is no upload limit. Files of several hundred MB work fine on a modern laptop, as long as it has enough memory.</p>
      <h2>On any device</h2>
      <p>It runs in the browser on Windows, Mac, Android and iPhone, so there is no converter software to download.</p>
      <h2>Adding the audio to a music app</h2>
      <p>To play your own recordings in Spotify, convert them here and add them as local files (Settings → Local files). Only convert content you own or have the right to use.</p>
      <p>The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-trimmer': `
      <h2>Cut the start and end of a video</h2>
      <p>Set the <strong>start</strong> and <strong>end</strong> times and download only the part you want. There are two modes: <strong>Fast</strong> (no re-encoding — instant, with no quality loss, cutting at the nearest keyframe) and <strong>Frame-accurate</strong> (re-encodes for an exact cut). No watermark is added.</p>
      <h2>Popular uses</h2>
      <ul>
        <li><strong>WhatsApp Status</strong> — trim to 60 seconds or less.</li>
        <li><strong>Discord</strong> — keep the clip short to fit the upload limit, then shrink it with the <a href="/video-compressor">Video Compressor</a> if needed.</li>
        <li>Remove the slow start of a screen recording or lecture.</li>
      </ul>
      <h2>Large files</h2>
      <p>There is no upload limit, and Fast mode handles big recordings quickly because it just copies the selected part. It runs in the browser on Windows, Mac, Linux and Android.</p>
      <p>Need to change the frame shape as well? Trim here, then crop in a video editor.</p>
      <p>The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'video-to-gif': `
      <h2>Sharp GIFs from video clips</h2>
      <p>Choose a video, set the start time and length, then pick the width (320–800 px) and frame rate (8–20 fps). A colour palette is built for each clip, so the GIF looks sharp rather than grainy.</p>
      <h2>Keeping the file small</h2>
      <ul>
        <li>GIFs get big fast — keep clips to 2–6 seconds.</li>
        <li><strong>480 px at 12–15 fps</strong> is the best balance for chats and websites.</li>
        <li>Even a 4K source works: the GIF is scaled to the width you choose.</li>
      </ul>
      <h2>Platform tips</h2>
      <ul>
        <li><strong>Discord</strong> — 320–480 px for reactions. An animated banner needs Nitro and a 600 × 240 crop, and stickers must be under 512 KB.</li>
        <li><strong>Reddit, WhatsApp, Instagram and TikTok</strong> — short loops of a few seconds work best.</li>
      </ul>
      <p>It runs in the browser on computers and phones, including Safari on iPhone. The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'audio-converter': `
      <h2>Convert between all common audio formats</h2>
      <p>Convert music, voice notes and recordings between MP3, WAV, M4A, AAC, OGG, FLAC and OPUS, and choose the bitrate from 64 to 320 kbps. MP3 gives the widest compatibility, WAV is best for editing, and FLAC keeps a lossless copy for archiving.</p>
      <h2>Which format?</h2>
      <ul>
        <li><strong>MP3</strong> — plays everywhere. <strong>M4A / AAC</strong> — iPhone and Apple Music.</li>
        <li><strong>WAV / FLAC</strong> — lossless; best for editing and archiving.</li>
        <li><strong>OGG / OPUS</strong> — good quality at small sizes; OPUS is the format WhatsApp uses for voice notes.</li>
      </ul>
      <h2>WhatsApp voice notes and video</h2>
      <p>Convert a WhatsApp .opus voice note to MP3 to play it on any device or attach it to an email. To take the sound out of a video, use <a href="/video-to-mp3">Video to MP3</a>.</p>
      <h2>Nothing to install</h2>
      <p>It runs in the browser on Windows, Mac, Android and iPhone. The audio is converted as it is, with no AI processing or changes to the sound. To add your own tracks to Spotify as local files, convert them to MP3 first.</p>
      <p>The first conversion downloads the audio and video engine (about 30 MB) once; after that it's fast.</p>`,

  'mp3-cutter': `
      <h2>Cut a clip and make a ringtone</h2>
      <p>Choose the start and end of the part you want, add an optional 2-second <strong>fade in</strong> or <strong>fade out</strong>, and save as MP3, M4A or WAV. It's the quickest way to turn the best part of a song into a ringtone or alert sound.</p>
      <h2>Ringtones for Android and iPhone</h2>
      <ul>
        <li><strong>Android</strong> — save as MP3 and choose it in Settings → Sound → Ringtone.</li>
        <li><strong>iPhone</strong> — save as M4A, rename it to <code>.m4r</code>, and add it with Finder or iTunes (or GarageBand on the phone). Keep it under 30 seconds, as iPhones require.</li>
      </ul>
      <h2>On any computer</h2>
      <p>It runs in the browser on Windows 10 and 11, Mac and Linux, so there is nothing to download or install.</p>
      <h2>Joining clips</h2>
      <p>This tool cuts audio; joining clips together isn't available yet. To make a mashup, cut each part here first, then join them in an audio editor.</p>
      <p>The first time you use it, the audio engine (about 30 MB) is downloaded once; after that it's fast.</p>`,

  'mute-video': `
      <h2>Remove the sound from a video</h2>
      <p>Choose a video and click <strong>Remove audio</strong>: you get the same video with its audio track removed completely. Because the picture isn't re-encoded, it's fast and there is no quality loss. No watermark, no sign-up.</p>
      <h2>Why remove the audio?</h2>
      <ul>
        <li><strong>Instagram and TikTok</strong> — post a silent clip so you can add licensed music in the app.</li>
        <li><strong>Privacy and copyright</strong> — remove background noise, private conversations or copyrighted music before sharing.</li>
        <li><strong>Presentations and children</strong> — a clean, quiet clip that won't interrupt.</li>
      </ul>
      <h2>Muted for good, everywhere</h2>
      <p>Social apps can mute a video only while you watch it. This tool removes the audio from the file itself, so it stays silent wherever you upload it — no need to open an editor such as CapCut, Canva or DaVinci Resolve for one simple job. It works on iPhone, Android and computers.</p>
      <p>Want to keep only the sound instead? Use <a href="/video-to-mp3">Video to MP3</a>.</p>
      <p>The first conversion downloads the video engine (about 30 MB) once; after that it's fast.</p>`,

  'screen-recorder': `
      <h2>Record your screen in the browser</h2>
      <p>Record your whole screen, a single window or one browser tab, with your <strong>microphone</strong> and the <strong>system or tab audio</strong>. Choose the quality (720p, 1080p or 2K) and an optional 3- or 5-second countdown, then pause, resume and stop. The video plays back on the page and downloads in one click — with no watermark and no time limit.</p>
      <h2>On a computer</h2>
      <p>It works on Windows 10 and 11, Mac and Chromebook in Chrome, Edge or Firefox, with no extension or app. On a Mac, allow your browser under System Settings → Privacy &amp; Security → Screen Recording.</p>
      <h2>On phones and tablets</h2>
      <p>Mobile browsers don't allow websites to record the screen. On iPhone and iPad, use Control Center → Screen Recording; on Android, use the Screen record tile in Quick Settings.</p>
      <h2>Tips</h2>
      <ul>
        <li>Record a single tab for the cleanest audio in tutorials and online classes.</li>
        <li>For gaming, 1080p works well; very fast games may need dedicated software such as OBS.</li>
        <li>Recordings save as WebM in Chrome and Edge — convert to MP4 with the <a href="/video-converter">Video Converter</a> if you need to.</li>
      </ul>
      <p>Everything is recorded on your own computer, and nothing is uploaded.</p>`,

  'voice-recorder': `
      <h2>Record your voice in the browser</h2>
      <p>Click <strong>Start recording</strong>, speak, then pause or stop. Your recordings are listed on the page so you can play them back, download them as <strong>MP3</strong> or <strong>WAV</strong>, or delete them. No sign-up, no time limit and no app.</p>
      <h2>What people use it for</h2>
      <ul>
        <li><strong>Lectures</strong> — ask the lecturer's permission first.</li>
        <li><strong>Meetings and interviews</strong>, and quick voice memos.</li>
        <li><strong>Singing practice</strong> and podcast tests — WAV keeps the full quality.</li>
        <li><strong>Children</strong> recording stories and songs for family.</li>
      </ul>
      <h2>On any device</h2>
      <p>It works in Safari on iPhone, in Chrome on Android, and on computers with any USB or headset microphone. Check your microphone first with the <a href="/mic-test">Mic Test</a>.</p>
      <p>Before buying a separate voice recorder, try your phone with this page — it often does the job for free. Recordings stay on your device and nothing is uploaded.</p>`,

  'webcam-test': `
      <h2>Check your camera in seconds</h2>
      <p>Click <strong>Start camera</strong> and allow access: you'll see a live preview plus your camera's details — <strong>resolution</strong>, <strong>frame rate</strong>, <strong>aspect ratio</strong> and how many <strong>cameras were found</strong>. Switch between cameras, take a test photo, or record a short clip to check the quality. Nothing to install.</p>
      <h2>Before an exam or meeting</h2>
      <ul>
        <li><strong>Online and proctored exams</strong> — check that the camera works and your face is well lit before the exam starts.</li>
        <li><strong>Zoom and Teams calls</strong> — confirm the right camera is selected.</li>
      </ul>
      <p>Checking sound too? Run the <a href="/mic-test">Mic Test</a> next.</p>
      <h2>Troubleshooting</h2>
      <ul>
        <li><strong>Black screen?</strong> Close other apps using the camera (Zoom, Teams, the Camera app) and try again.</li>
        <li><strong>Windows 11</strong> — check Settings → Privacy &amp; security → Camera, and allow your browser. On a <strong>Mac</strong>, check System Settings → Privacy &amp; Security → Camera.</li>
        <li><strong>Mirrored preview?</strong> That's normal — most apps show you a mirror image, while others see you the right way round.</li>
      </ul>
      <p>It works on laptops, desktop PCs and phones in a modern browser. Nothing is recorded or uploaded unless you choose to save a test photo or clip.</p>`,

  'mic-test': `
      <h2>Check that your microphone works</h2>
      <p>Click <strong>Start mic test</strong>, allow access and speak: a live level meter and waveform show whether your microphone is picking up sound. Choose a different <strong>device</strong> if you have several, and see the <strong>sample rate</strong>, <strong>channels</strong>, <strong>echo cancellation</strong> and <strong>noise suppression</strong> settings. To hear yourself, use <strong>Record 5-second sample</strong> and play it back.</p>
      <h2>Before a call or game</h2>
      <ul>
        <li>Test before Discord, Zoom or game voice chat so you know others can hear you.</li>
        <li>With AirPods, headphones or earphones, make sure the headset microphone is selected rather than the laptop's built-in one.</li>
        <li>It works in the browser on Windows, Mac, Android and iPhone.</li>
      </ul>
      <h2>Background noise and stereo</h2>
      <p>Stay silent for a few seconds: the meter should drop to near zero. Hiss or hum suggests a noisy room, a faulty cable or a low-quality microphone. For a stereo microphone, check that the channels value shows 2.</p>
      <p>Need something to say? The classic is “Testing, one, two, three.” Everything stays on your device and nothing is uploaded.</p>`,

  'text-to-speech': `
      <h2>Have any text read aloud</h2>
      <p>Paste or type text, choose a voice and language, and press play. Adjust the <strong>speed</strong>, <strong>pitch</strong> and <strong>volume</strong> to suit you. It uses the voices built into your device and browser, so there is no account, no word limit and no cost.</p>
      <h2>Languages and voices</h2>
      <p>English (US, UK and India), Urdu, Hindi, Arabic, Bengali, Punjabi, Persian, Spanish, French, German, Portuguese, Italian, Russian, Turkish, Indonesian, Malay, Chinese, Japanese, Korean and more — the exact voices depend on your device. Chrome often offers Google voices, while Edge offers Microsoft's very natural-sounding ones. These are standard system voices, not AI voice clones.</p>
      <h2>Ways to use it</h2>
      <ul>
        <li><strong>Reading</strong> articles, emails and study notes aloud — easier on the eyes.</li>
        <li><strong>PDFs and books</strong> — copy the text with <a href="/pdf-to-text">PDF to Text</a>, then paste it here. The same works for Google Docs and e-books you own.</li>
        <li><strong>Speaking for you</strong> — for people who can't speak, in calls or on Discord (play it through your microphone with a virtual audio cable).</li>
        <li><strong>Voiceovers</strong> for short videos and edits.</li>
      </ul>
      <p>It works in Chrome, Edge and Safari with no extension or app.</p>`,

  'speech-to-text': `
      <h2>Type with your voice</h2>
      <p>Click <strong>Start listening</strong>, allow the microphone, and speak: your words appear as text that you can edit, copy or download as a .txt file. In English, say “comma”, “period”, “question mark” or “new line” to add punctuation. No account needed.</p>
      <h2>Supported browsers and privacy</h2>
      <p>Voice typing uses your browser's built-in speech recognition and works in Google Chrome, Microsoft Edge and Safari. In Chrome and Edge, the audio is processed by the browser maker's speech service (Google or Microsoft) to produce the text, so avoid dictating anything highly confidential.</p>
      <h2>Who it helps</h2>
      <ul>
        <li><strong>Writers</strong> — books, essays and long emails; speaking is about three times faster than typing.</li>
        <li><strong>Deaf and hard-of-hearing people</strong> — live captions of what someone is saying.</li>
        <li><strong>Google Docs users</strong> — dictate here and paste, or use Docs' own Tools → Voice typing in Chrome.</li>
      </ul>
      <h2>On any device</h2>
      <p>It works in the browser on Windows, Mac, Android and iPhone, with no app to install. Choose another language from the Language list; to translate the result, paste it into a translation tool.</p>`,

  'cgpa-calculator': `
      <h2>Two ways to calculate</h2>
      <p>Calculate your <strong>Cumulative Grade Point Average</strong> by entering each <strong>semester's GPA</strong> with its credit hours, or by entering <strong>individual course grades</strong>. It handles any number of semesters, from two to eight or more.</p>
      <h2>The formula</h2>
      <p>CGPA is a credit-weighted average: <code>CGPA = Σ(GPA × credits) ÷ Σ credits</code>. A 3.2 GPA over 18 credits and a 3.8 GPA over 15 credits gives (57.6 + 57) ÷ 33 = <strong>3.47</strong>. Simply averaging the GPAs would be wrong whenever semesters have different credit loads.</p>
      <h2>4.0 and 10-point scales</h2>
      <ul>
        <li><strong>4.0 scale</strong> — used in the USA, by HEC-recognised universities in Pakistan, and by many Malaysian universities.</li>
        <li><strong>10-point scale</strong> — used by most Indian universities for engineering, arts and science programmes, and for CBSE and state-board school results.</li>
      </ul>
      <p>Need a percentage? Use <a href="/cgpa-to-percentage">CGPA to Percentage</a>. Universities sometimes round or weight courses differently, so confirm important results with your exam office — this gives you a reliable estimate.</p>`,

  'gpa-calculator': `
      <h2>Semester and cumulative GPA</h2>
      <p>Add your courses with their <strong>credits</strong> and <strong>grades</strong> to get your semester GPA. Enter your <strong>current CGPA</strong> and the <strong>credits completed so far</strong> to see your new cumulative GPA as well. Choose the 4.0 scale (USA, HEC Pakistan) or the 10-point scale (India).</p>
      <h2>How GPA is calculated</h2>
      <p>Multiply each course's grade points by its credits, add them up, and divide by the total credits. An A (4.0) in a 3-credit class and a B (3.0) in a 4-credit class: (12 + 12) ÷ 7 = <strong>3.43</strong>.</p>
      <h2>College, university and high school</h2>
      <ul>
        <li><strong>College and university</strong> — most US schools use the 4.0 scale shown here.</li>
        <li><strong>High school and middle school</strong> — these are unweighted 4.0 GPAs. Schools that give extra points for AP or honours classes use a weighted scale (often 5.0); add those adjustments by hand.</li>
        <li><strong>Medical school applications</strong> — AMCAS recalculates your GPA from every course you have taken, so enter each class separately.</li>
        <li><strong>Several terms or schools</strong> — enter your cumulative GPA and credits so far, then add this term's courses.</li>
      </ul>
      <p>Only have percentages? <a href="/cgpa-to-percentage">CGPA to Percentage</a> converts both ways.</p>`,

  'grade-calculator': `
      <h2>Your current weighted grade</h2>
      <p>Add each assessment — assignments, quizzes, midterm, labs — with your <strong>score %</strong> and its <strong>weight %</strong> to see your current weighted grade. A 90% on a quiz worth 10% counts for less than 75% on an exam worth 40%, which is exactly how teachers calculate it.</p>
      <h2>What do I need on the final?</h2>
      <p>Enter the <strong>final exam weight</strong> and your <strong>target overall grade</strong>, and the calculator tells you the score you need. Example: 82% so far, a final worth 30%, and a target of 85% → you need <strong>92%</strong> on the final.</p>
      <h2>Points instead of percentages</h2>
      <p>If your class uses points, convert each item to a percentage (points earned ÷ points possible × 100) and use the weight of its category.</p>
      <h2>Who it's for</h2>
      <p>Students can track any course through the semester and plan for tests, quizzes and assignments. Teachers can check a student's standing quickly. For your overall average across all courses, use the <a href="/gpa-calculator">GPA Calculator</a>.</p>`,

  'ats-resume-checker': `
      <h2>Check your resume against a job description</h2>
      <p>Upload your resume (PDF, DOCX or TXT) or paste it, then paste the job description. You get an <strong>ATS score</strong>, the <strong>keywords you're missing</strong>, and a checklist covering sections, contact details, length, action verbs, measurable results and writing style. No login is needed, and your resume is not uploaded.</p>
      <h2>What is an ATS?</h2>
      <p>ATS stands for <strong>Applicant Tracking System</strong>: software employers use to collect, read and rank resumes. Many resumes are filtered out before a person sees them, usually because they lack key terms from the job advert or use a layout the software can't read.</p>
      <h2>How to raise your score</h2>
      <ul>
        <li>Check your resume against each job you apply for. A resume tailored to the advert beats one generic version.</li>
        <li>Add missing skills only if you really have them, using the exact wording from the advert.</li>
        <li>Use standard headings (Experience, Education, Skills), a single column, and no text inside images or tables.</li>
        <li>Start bullet points with action verbs and add numbers, such as “reduced costs by 15%”.</li>
      </ul>
      <h2>Any career stage</h2>
      <p>The checks work the same for a first job or internship as for a senior role, in any field. It focuses on matching what an ATS looks for rather than grammar, so run a spell check as well. Need a clean, ATS-friendly layout? Try the <a href="/resume-builder">Resume Builder</a>.</p>`,

  'resume-builder': `
      <h2>Build a resume and download a PDF</h2>
      <p>Fill in your details — summary, experience, education, skills, projects, certifications and languages — and watch your resume update as you type. Choose a template (<strong>Modern</strong>, <strong>Classic</strong>, <strong>Compact</strong>, <strong>Sans</strong> or <strong>Serif</strong>) and download a clean PDF. No account, no watermark and no paywall at the download step.</p>
      <h2>Readable by applicant tracking systems</h2>
      <p>Every template is single-column with standard headings and real text, so applicant tracking systems can read it. Check it against a job advert with the <a href="/ats-resume-checker">ATS Resume Checker</a>.</p>
      <h2>Tips for every stage</h2>
      <ul>
        <li><strong>Students</strong> — lead with education and projects.</li>
        <li><strong>School leavers and teenagers</strong> — volunteering, clubs and part-time work all count.</li>
        <li><strong>No work experience yet</strong> — use the Projects section for coursework, freelance or personal projects.</li>
        <li><strong>Nurses and other licensed roles</strong> — put licences and certifications where they are easy to see.</li>
        <li><strong>Veterans</strong> — describe military roles in civilian terms and skills.</li>
      </ul>
      <h2>You stay in control</h2>
      <p>It works on any device, with nothing to download. It doesn't write or invent experience for you — every word is yours. Your data stays in your browser.</p>`,

  'text-to-handwriting': `
      <h2>Typed text in realistic handwriting</h2>
      <p>Type or paste your text and it is written out in handwriting on paper. Choose the <strong>handwriting style</strong>, <strong>ink</strong> colour (blue, black, red or green), <strong>paper</strong> (ruled, plain or grid), text size, a red margin line, and <strong>natural variation</strong> so the letters aren't all identical. Download the pages as images or a PDF.</p>
      <h2>Assignments</h2>
      <p>Blue ink on ruled paper with a red margin looks most like a school notebook. Check your teacher's rules first — some assignments must be written by hand.</p>
      <h2>Notes and other uses</h2>
      <ul>
        <li><strong>GoodNotes and Notability</strong> — download as PDF and import it.</li>
        <li><strong>Maths</strong> — grid paper suits worked solutions.</li>
        <li><strong>Other scripts</strong> — Latin-script text works best; Hindi and other scripts depend on suitable fonts being installed on your device.</li>
      </ul>`,

  'citation-generator': `
      <h2>Format a reference in seconds</h2>
      <p>Pick a style and a source type — <strong>website</strong>, <strong>book</strong> or <strong>journal article</strong> — fill in the details, and copy a correctly formatted reference. No ads and no sign-up.</p>
      <h2>Styles included</h2>
      <ul>
        <li><strong>APA 7</strong> — the edition most universities now require.</li>
        <li><strong>MLA 9</strong> — common in the humanities.</li>
        <li><strong>Chicago</strong> — notes and bibliography.</li>
        <li><strong>Harvard</strong> — common in the UK, Australia and Pakistan.</li>
      </ul>
      <p>AMA and ACS styles aren't included yet. For those, follow your department's guide or the Purdue OWL, which is an excellent reference for every major style.</p>
      <h2>Citing different sources</h2>
      <ul>
        <li><strong>Web pages</strong> — include the author or organisation, the date published and the date you accessed it.</li>
        <li><strong>Books</strong> — publisher, year and edition; add the DOI or URL for e-books.</li>
        <li><strong>Journal articles</strong> — journal name, volume, issue, pages and DOI.</li>
        <li><strong>YouTube videos, PDF reports and images</strong> — use the Website type with the creator, title and URL.</li>
      </ul>
      <p>Always double-check names and dates against the source — a citation generator can only format what you enter.</p>`,

  'mortgage-calculator': `
      <h2>Your full monthly payment</h2>
      <p>Enter the home price, down payment, interest rate and loan term (10–30 years), then add yearly property tax, home insurance and monthly HOA fees. You'll see your full monthly payment — principal and interest plus escrow costs — and the total interest over the life of the loan.</p>
      <h2>The formula</h2>
      <p>Principal and interest: <code>M = P × r(1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)</code>, where r is the monthly rate and n the number of payments. Example: $300,000 at 6.5% for 30 years → about <strong>$1,896</strong> a month before taxes and insurance.</p>
      <h2>Paying off early</h2>
      <p>Extra payments aren't modelled directly. To see what paying faster saves, compare a 30-year term with a 15- or 20-year term: the difference in total interest shows how much you could save.</p>
      <h2>Other situations</h2>
      <ul>
        <li><strong>Refinancing</strong> — enter your remaining balance as the price, with zero down payment.</li>
        <li><strong>Investment property, second homes and land</strong> — use the higher rates and larger down payments these loans usually need.</li>
        <li><strong>VA loans</strong> — set the down payment to 0. Mobile home loans work the same way with their own rate.</li>
        <li><strong>Commercial property</strong> — commercial loans often have shorter terms, so try 10–20 years.</li>
      </ul>
      <p>Property tax varies a lot between states and counties, so enter your county's rate for an accurate figure.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'compound-interest-calculator': `
      <h2>Growth with regular contributions</h2>
      <p>Enter your starting amount, a <strong>monthly contribution</strong>, the yearly interest rate and the number of years, then choose how often interest compounds — yearly, half-yearly, quarterly, monthly or daily. You'll see the final balance, how much you put in, and how much came from interest.</p>
      <h2>The formula</h2>
      <p>Compound interest is <code>A = P(1 + r/n)ⁿᵗ</code>. Example: $10,000 at 8% compounded monthly for 10 years grows to about <strong>$22,196</strong> — more than doubling with no extra deposits. Add $200 a month and it reaches roughly $58,800. Official calculators such as the SEC's investor.gov use the same calculation.</p>
      <h2>Retirement and investing</h2>
      <ul>
        <li><strong>Retirement planning</strong> — try 6–8% a year for a diversified long-term portfolio.</li>
        <li><strong>401(k) and IRA accounts</strong> — enter your monthly contribution including any employer match.</li>
        <li><strong>Stocks and funds</strong> — returns vary from year to year, so test a range of rates rather than one number.</li>
        <li><strong>Certificates of deposit</strong> — use the CD's fixed rate and term.</li>
      </ul>
      <p>For loan repayments, the <a href="/loan-calculator">Loan EMI Calculator</a> is the right tool. Withdrawals, inflation and rising contributions aren't modelled here; to allow for inflation, subtract the expected rate (say 3%) from your return.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'simple-interest-calculator': `
      <h2>Interest and total amount</h2>
      <p>Enter the principal, the yearly interest rate and the time — in <strong>years</strong>, <strong>months</strong> or <strong>days</strong> — to get the interest and the total amount.</p>
      <h2>The formula</h2>
      <p><code>SI = P × R × T ÷ 100</code>. Example: 50,000 at 10% a year for 3 years → 50,000 × 10 × 3 ÷ 100 = <strong>15,000</strong> interest, 65,000 in total. Unlike compound interest, the interest is never added to the principal, so the balance grows in a straight line.</p>
      <h2>Days, months and dates</h2>
      <ul>
        <li><strong>Days</strong> — interest for 90 days = P × R × 90 ÷ 36,500.</li>
        <li><strong>Months</strong> — 18 months = 1.5 years.</li>
        <li><strong>Between two dates</strong> — count the days with <a href="/date-difference-calculator">Days Between Dates</a>, then enter them here.</li>
      </ul>
      <h2>Loans and savings</h2>
      <p>Many personal and car loans in the US charge simple interest, so this gives a useful estimate of the interest. For the monthly payment itself, use the <a href="/loan-calculator">Loan EMI Calculator</a>. It also works for simple-interest savings, deposits and certificates of deposit.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'sip-calculator': `
      <h2>Monthly investing with an annual step-up</h2>
      <p>Enter your monthly investment, expected yearly return and time period. Add an optional <strong>annual step-up</strong> — raising your SIP by, say, 10% each year — to see the effect of investing more as your income grows.</p>
      <h2>The formula</h2>
      <p><code>FV = P × [((1 + i)ⁿ − 1) ÷ i] × (1 + i)</code>, where i is the monthly return and n the number of months. Example: 5,000 a month at 12% for 10 years → about <strong>11.6 lakh</strong> (1,161,695), from 6 lakh invested.</p>
      <h2>Why time matters most</h2>
      <p>Compounding rewards patience. Compare 10, 20 and 30 years: the last decade usually adds more than the first two combined.</p>
      <h2>Mutual funds, lump sums and other currencies</h2>
      <ul>
        <li><strong>Mutual funds</strong> — as rough long-term assumptions, use 10–12% a year for equity funds and 6–8% for debt funds.</li>
        <li><strong>One-time lump sums</strong> — use the <a href="/compound-interest-calculator">Compound Interest Calculator</a> with no monthly contribution.</li>
        <li>It works the same in rupees, dollars or any other currency.</li>
      </ul>
      <p>The results match what broker and bank SIP calculators show, without logging in. Returns are never guaranteed.</p>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'discount-calculator': `
      <h2>Sale price, savings and tax</h2>
      <p>Enter the original price and the discount, as a percentage or an amount, to see how much you save and what you'll pay. Add an <strong>extra discount</strong> (such as “extra 10% off at checkout”) and <strong>sales tax</strong> to get the real final price.</p>
      <h2>The formula</h2>
      <p><code>Sale price = Price × (1 − discount%)</code>. Stacked discounts multiply rather than add: 20% off followed by an extra 10% off is <strong>28%</strong> off in total, not 30%. Example: $80 → 20% off = $64 → extra 10% = $57.60 → plus 8% tax = <strong>$62.21</strong>.</p>
      <h2>Everyday uses</h2>
      <ul>
        <li>Checking a sale before you buy.</li>
        <li>Senior and student discounts at restaurants and pharmacies.</li>
        <li>Any currency — the maths is the same for rupees, dollars or euros.</li>
        <li>School maths homework on discounts uses exactly these steps.</li>
      </ul>
      <h2>In Excel</h2>
      <p>Use <code>=A2*(1-B2)</code>, with the price in A2 and the discount as a percentage in B2.</p>`,

  'tip-calculator': `
      <h2>Tip, total and each person's share</h2>
      <p>Enter the bill, pick a tip (10%, 15%, 18%, 20%, 25% or a custom amount) and the number of people. You'll see the tip, the total and what each person pays, with an option to <strong>round up</strong> each share.</p>
      <h2>The formula</h2>
      <p>Tip = bill × tip %, and each person pays (bill + tip) ÷ people. A quick mental trick for 20%: move the decimal point one place and double it ($45 → $4.50 → $9).</p>
      <h2>How much to tip in the US</h2>
      <ul>
        <li><strong>Restaurants</strong> — 15–20% is standard; 18–20% is usual in big cities such as New York.</li>
        <li><strong>Hair and nail salons</strong> — 15–20%.</li>
        <li><strong>Tattoo artists</strong> — 15–25%, depending on the work.</li>
        <li><strong>Food delivery</strong> — 15–20%, more in bad weather or for long distances.</li>
      </ul>
      <p>Customs differ by country — in much of Europe and Asia, service is included or a small round-up is enough. On iPhone, add this page to the Home Screen and it works like an app.</p>`,

  'gst-calculator': `
      <h2>Add tax or take it out</h2>
      <p>Choose <strong>Add tax</strong> to get the price including GST or VAT, or <strong>Remove tax</strong> to split a tax-inclusive price into its net amount and the tax. Ready-made rates include 5% (GST India, VAT UAE), 12%, 18% and 28% (GST India), 15% (VAT Saudi Arabia), 17% and 18% (GST Pakistan) and 20% (VAT UK), plus any custom rate.</p>
      <h2>The formulas</h2>
      <ul>
        <li><strong>Add tax:</strong> total = amount × (1 + rate). 1,000 + 18% = <strong>1,180</strong>.</li>
        <li><strong>Remove tax:</strong> net = total ÷ (1 + rate). 1,180 ÷ 1.18 = 1,000, so the tax is 180. A common mistake is taking 18% of 1,180 (212.40), which is wrong.</li>
      </ul>
      <h2>Rates in other countries</h2>
      <ul>
        <li><strong>Australia</strong> 10%; <strong>New Zealand</strong> 15%.</li>
        <li><strong>Canada</strong> — 5% federal GST; some provinces add their own tax or use HST instead (13% in Ontario).</li>
        <li><strong>Europe</strong> — Germany 19%, France 20%, Spain 21%, Italy 22%, Ireland 23%.</li>
        <li><strong>South Africa</strong> 15%; <strong>Philippines</strong> 12%.</li>
      </ul>
      <p>The US has state sales tax instead of VAT; enter your state's rate as a custom rate. Rates change, so check your tax authority's current figure.</p>`,

  'profit-margin-calculator': `
      <h2>Margin, markup and profit</h2>
      <p>Enter what you know — <strong>cost and selling price</strong>, <strong>cost and target margin</strong>, or <strong>cost and markup</strong> — and the calculator fills in the rest: profit, margin % and markup %.</p>
      <h2>The formulas</h2>
      <ul>
        <li><strong>Margin</strong> = (price − cost) ÷ price × 100.</li>
        <li><strong>Markup</strong> = (price − cost) ÷ cost × 100.</li>
      </ul>
      <p>Example: cost 60, price 100 → profit 40, margin <strong>40%</strong>, markup <strong>66.7%</strong>. Margin can never reach 100%, and mixing up margin and markup is the most common pricing mistake. To hit a 40% margin on a $60 cost, the price is 60 ÷ (1 − 0.40) = <strong>$100</strong>.</p>
      <h2>Tips for different businesses</h2>
      <ul>
        <li><strong>Online shops and dropshipping</strong> — include shipping and platform fees in the cost.</li>
        <li><strong>Restaurants</strong> — dishes often target a 60–70% gross margin.</li>
        <li><strong>Service businesses</strong> — use your hourly cost, including overheads.</li>
        <li>Any currency works the same way; add VAT or GST separately.</li>
      </ul>
      <p>In Excel, the margin is <code>=(B2-A2)/B2</code> with the cost in A2 and the price in B2. “Margin” in forex trading means something different and isn't covered here.</p>`,

  'salary-calculator': `
      <h2>Convert pay between any periods</h2>
      <p>Enter what you're paid and how often — per hour, day, week, two weeks, month or year — plus your hours per week, days per week and any unpaid weeks off. The calculator converts it into every other period. For example, $25 an hour is about <strong>$52,000</strong> a year at 40 hours a week for 52 weeks.</p>
      <h2>Before tax</h2>
      <p>The results are <strong>gross pay</strong>, before tax. Take-home pay depends on federal, state and local taxes. In the US, some states such as Texas and Florida have no state income tax, while others such as California and New York do — so the same salary leaves different amounts in your pocket.</p>
      <h2>Other uses</h2>
      <ul>
        <li><strong>Pay rises</strong> — compare your current and new pay in every period.</li>
        <li><strong>Term-time jobs</strong> such as teaching — add the unpaid weeks.</li>
        <li><strong>Mortgage planning</strong> — lenders often prefer housing costs below 28% of your gross monthly income.</li>
        <li><strong>Job offers in different cities</strong> — compare them with local living costs in mind.</li>
      </ul>
      <p class="small muted">Results are estimates for planning. For loans, investments and taxes, confirm the exact figures with your bank, provider or a qualified adviser.</p>`,

  'currency-converter': `
      <h2>Convert with daily exchange rates</h2>
      <p>Pick two currencies and an amount to convert instantly — dollars, euros, pounds, rupees, dirhams, riyals and most other world currencies. Press ⇄ to swap them. Rates come from ExchangeRate-API and are refreshed daily, which is ideal for travel budgets, online shopping and invoices.</p>
      <h2>Popular conversions</h2>
      <ul>
        <li>Euros, pounds and Canadian dollars to US dollars, and back.</li>
        <li>Mexican pesos to dollars for trips to Mexico.</li>
        <li>Travel budgets in Thai baht, euros or Icelandic króna.</li>
      </ul>
      <h2>Good to know</h2>
      <ul>
        <li>These are mid-market rates. Banks, card companies and exchange counters add a margin, so you'll usually get a little less.</li>
        <li>Historical rates aren't available here. For a rate on a past date, ask your bank or use a historical rates service such as OANDA.</li>
        <li>Converting between time zones rather than currencies? Use the <a href="/time-zone-converter">Time Zone Converter</a>.</li>
      </ul>
      <p>Bookmark it on your phone and it works like an app, with nothing to install.</p>`,

  'fuel-cost-calculator': `
      <h2>What will the trip cost?</h2>
      <p>Enter the distance, your vehicle's fuel efficiency and the fuel price to see how much fuel you'll use and what it will cost. Tick <strong>round trip</strong> to double it, and use <strong>split between</strong> to see each person's share. Units work both ways: <strong>km and litres</strong> (km per litre or litres per 100 km) or <strong>miles and gallons</strong>.</p>
      <h2>The formula</h2>
      <p>Cost = distance ÷ efficiency × price. Example: 450 km in a car doing 14 km/l with fuel at 270 per litre → 32.1 litres → about <strong>8,680</strong>. In US units: 300 miles at 30 mpg and $3.50 a gallon → 10 gallons → <strong>$35</strong>.</p>
      <h2>For an accurate estimate</h2>
      <ul>
        <li>Get the distance from Google Maps and enter it here.</li>
        <li>Use your real consumption, not the brochure figure. Motorway driving is usually more efficient than city driving.</li>
        <li>For diesel, enter the diesel price; large trucks often manage around 6–7 mpg.</li>
        <li>Choosing between two vehicles? Run it twice with each one's efficiency to see which is cheaper.</li>
      </ul>
      <p>It works for cars, motorbikes and vans, from a daily commute to a long holiday drive.</p>`,

  'calorie-calculator': `
      <h2>Daily calories for your goal</h2>
      <p>Enter your age, sex, height, weight and <strong>activity level</strong>, then choose a goal. The calculator estimates your daily calories using the <strong>Mifflin-St Jeor</strong> equation — the most accurate standard formula for most adults — multiplied by your activity level, then adjusts for your goal.</p>
      <h2>Losing weight</h2>
      <p>Eating about 500 calories a day below maintenance loses roughly 0.5 kg (1 lb) a week. Larger cuts are hard to sustain and can cost muscle. Women get lower figures than men of the same size because of differences in body composition.</p>
      <h2>Gaining weight or muscle</h2>
      <p>Add about 250–500 calories a day, and pair it with strength training and enough protein — around 1.6 g per kg of body weight.</p>
      <h2>Counting what you eat</h2>
      <p>This tool tells you how many calories you need. To know how many you eat, read nutrition labels or use a food database, then compare with your target. One food calorie (kcal) equals 4,184 joules; the “4.184 joules” figure you may see refers to the small calorie.</p>
      <p>Children's needs depend on growth, so ask a paediatrician rather than using an adult formula. The same goes for pets — ask your vet.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'bmr-calculator': `
      <h2>What is BMR?</h2>
      <p>Your basal metabolic rate is the number of calories your body burns at complete rest just to stay alive — breathing, circulation and keeping warm. This calculator uses the <strong>Mifflin-St Jeor</strong> equation. If you also enter your body fat percentage, it uses <strong>Katch-McArdle</strong>, which is more accurate for lean or muscular people.</p>
      <h2>The formula</h2>
      <p>Mifflin-St Jeor: men = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5; women use −161 instead of +5. Example: a 30-year-old man weighing 80 kg at 180 cm → <strong>1,780</strong> kcal a day. These are the same equations most major health sites refer to.</p>
      <h2>Using BMR to manage weight</h2>
      <p>BMR is not your daily calorie need — multiply it by your activity level, or use the <a href="/calorie-calculator">Calorie Calculator</a>. To lose weight, eat a little below your total daily needs, but not below your BMR for long periods.</p>
      <p>For teenagers who are still growing, the result is only a rough guide, and the equations are not meant for children.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'body-fat-calculator': `
      <h2>Body fat from a tape measure</h2>
      <p>This calculator uses the <strong>U.S. Navy method</strong>, so all you need is a tape measure. Enter your height, neck and waist (at the navel) — plus hips for women — in centimetres or inches. No scale, machine or calipers needed.</p>
      <h2>Military fitness checks</h2>
      <p>The Navy tape method is used in military fitness assessments, and the Army and Air Force use similar tape approaches. If you are preparing for one, follow your service's current regulations, as the exact rules change.</p>
      <h2>Healthy ranges</h2>
      <ul>
        <li><strong>Men</strong>: about 8–19% is healthy for adults; athletes are often 6–13%.</li>
        <li><strong>Women</strong>: about 21–32% is healthy; athletes are often 14–20%.</li>
      </ul>
      <h2>How accurate is it?</h2>
      <p>Tape methods are usually within 3–4% of lab results if you measure carefully: same spot each time, tape snug but not tight, stomach relaxed. Skinfold calipers, bioimpedance scales and DEXA scans can be more precise; gyms and clinics offer them. The formula isn't designed for children or teenagers, and it may read slightly high for athletes with very large necks.</p>
      <p>The formula uses the logarithm of waist minus neck (plus hips for women) against height.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'ideal-weight-calculator': `
      <h2>Four classic formulas</h2>
      <p>Enter your height and sex to see your ideal weight by the four best-known formulas — <strong>Devine</strong>, <strong>Robinson</strong>, <strong>Miller</strong> and <strong>Hamwi</strong> — plus the healthy weight range for a BMI of 18.5–24.9. Results are shown in kilograms and pounds.</p>
      <h2>How the formulas work</h2>
      <p>The Devine formula is 50 kg + 2.3 kg per inch over 5 feet for men, and 45.5 kg + 2.3 kg per inch for women. A man of 5'10" → <strong>73 kg</strong> (161 lb). The formulas disagree by a few kilograms, which is why the BMI range is the most useful guide.</p>
      <h2>Men, women and age</h2>
      <p>Each formula uses a different base weight for men and women. None of them includes age; older adults are often advised that a slightly higher BMI is fine.</p>
      <h2>Asian and South Asian adults</h2>
      <p>The WHO suggests health risks start at a lower BMI (around 23) for Asian populations, including people of Indian and Pakistani origin, so aim for the lower half of the range.</p>
      <h2>Limits</h2>
      <p>These formulas ignore muscle and frame size, so athletes will get a figure that is too low. They aren't meant for children, who are assessed with growth charts — or for pets, where a vet uses a body-condition score.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'pregnancy-calculator': `
      <h2>Your due date and how far along you are</h2>
      <p>Calculate from the <strong>first day of your last period</strong> (LMP) or from your <strong>conception date</strong>, and adjust for your average cycle length. You'll see your estimated due date, how many weeks and days pregnant you are, your trimester and the key milestones ahead.</p>
      <h2>How the due date is worked out</h2>
      <p>The standard method, Naegele's rule, adds 280 days (40 weeks) to the first day of your last period, adjusted if your cycle is longer or shorter than 28 days. This is the date most clinics use first.</p>
      <h2>From conception or ovulation</h2>
      <p>If you know when you conceived or ovulated, the due date is the conception date + 266 days.</p>
      <h2>IVF, irregular cycles and scans</h2>
      <ul>
        <li><strong>IVF</strong> — use the conception option, with your transfer date minus the embryo's age. A 5-day embryo transferred on 1 March means conception on 24 February.</li>
        <li><strong>Irregular periods</strong> — set your typical cycle length, but an early ultrasound gives the most reliable date.</li>
        <li><strong>Ultrasound dating</strong> from your scan always takes priority over this estimate.</li>
      </ul>
      <p>Only about 4% of babies arrive exactly on the due date; most come within two weeks either side. Twins share the same due date but often arrive around 36–37 weeks.</p>
      <p class="small muted">For general information only — not medical advice. Talk to your doctor or midwife about your pregnancy.</p>`,

  'ovulation-calculator': `
      <h2>Your fertile window</h2>
      <p>Enter the first day of your last period and your average cycle length. The calculator estimates your ovulation day, your <strong>fertile window</strong> (from 5 days before ovulation to the day after), your next period, and the earliest day to take a pregnancy test — for the next six cycles.</p>
      <h2>How it's calculated</h2>
      <p>Ovulation usually happens about 14 days <em>before</em> your next period. In a 28-day cycle that's around day 14; in a 30-day cycle, around day 16. Sperm can survive for up to five days, which is why the fertile window starts before ovulation.</p>
      <h2>Trying to get pregnant</h2>
      <p>Focus on the two to three days before ovulation. Ovulation test strips or tracking your basal body temperature add more certainty. Once pregnant, use the <a href="/pregnancy-calculator">Pregnancy Due Date Calculator</a> to estimate the due date.</p>
      <h2>Irregular cycles and PCOS</h2>
      <p>If your periods are irregular, or you have PCOS, ovulation varies from cycle to cycle and any calendar estimate is less reliable. Use your average cycle as a starting point and confirm with tests or your doctor.</p>
      <h2>Choosing a boy or girl?</h2>
      <p>Timing methods that claim to influence a baby's sex are popular but not scientifically proven, and no calendar can make twins more likely.</p>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor about your personal situation.</p>`,

  'water-intake-calculator': `
      <h2>A daily water target for you</h2>
      <p>Enter your body weight, how many minutes you exercise a day, and whether you live in a hot or humid climate. The calculator starts from about 35 ml per kg of body weight and adds water for exercise and heat, giving a daily target in litres or ounces.</p>
      <h2>The formula</h2>
      <p>Weight (kg) × 35 ml, plus extra for activity and heat. Example: 70 kg × 35 ml = <strong>2.45 litres</strong> a day before exercise. Food provides about 20% of most people's water, and tea, coffee and milk count too.</p>
      <h2>Men, women and age</h2>
      <p>Men usually get a higher figure than women because of body size; once weight is known, height makes little difference. Older adults feel less thirsty, so drinking regularly matters more with age.</p>
      <h2>Special situations</h2>
      <ul>
        <li><strong>Athletes</strong> — add roughly 0.4–0.8 litres per hour of training, more in the heat.</li>
        <li><strong>Creatine</strong> draws water into the muscles, so many people add about half a litre a day.</li>
        <li><strong>Weight loss</strong> — a glass of water before meals can help you feel full.</li>
        <li><strong>Pregnancy</strong> — needs rise to around 2.3–3 litres a day; ask your midwife.</li>
        <li>Not designed for children or pets — ask a doctor or vet.</li>
      </ul>
      <p class="small muted">For general information only — not medical advice. Talk to a doctor or registered dietitian about your personal needs.</p>`,

  'sleep-calculator': `
      <h2>Wake up at the end of a sleep cycle</h2>
      <p>Sleep runs in cycles of about 90 minutes, and waking at the end of a cycle feels much easier than waking in the middle of deep sleep. Choose <strong>Wake up at…</strong> to find good bedtimes, <strong>Go to bed at…</strong> to find good wake-up times, or <strong>Sleep now</strong>. Adjust the <strong>time to fall asleep</strong> — about 15 minutes for most people.</p>
      <h2>How much sleep do you need?</h2>
      <ul>
        <li><strong>Adults</strong>: 7–9 hours (5–6 cycles). Needs are similar for men and women.</li>
        <li><strong>Teenagers</strong>: 8–10 hours — aim for 6 cycles.</li>
        <li><strong>Children aged 6–12</strong>: 9–12 hours; a fixed bedtime helps most.</li>
        <li><strong>Toddlers</strong> (11–14 hours including naps) and <strong>babies</strong> (12–16 hours) sleep in shorter cycles, so treat the calculator as a rough guide only.</li>
      </ul>
      <p>These ranges follow the American Academy of Sleep Medicine's recommendations by age.</p>
      <h2>Naps and travel</h2>
      <ul>
        <li><strong>Naps</strong>: 20 minutes for a quick boost, or a full 90-minute cycle. Avoid 45–60 minutes, which tends to end in deep sleep.</li>
        <li><strong>Jet lag</strong>: shift your bedtime by an hour a day before you fly, and get morning daylight at your destination.</li>
      </ul>`,

  'scientific-calculator': `
      <h2>A full scientific calculator</h2>
      <p>It handles everything from basic arithmetic to trigonometry and logarithms: <strong>sin</strong>, <strong>cos</strong>, <strong>tan</strong> and their inverses, <strong>log</strong> and <strong>ln</strong>, square roots, powers (x², xʸ), π, e, percentages, scientific notation (EXP), the previous answer (Ans), memory (MC, MR) and a history of your calculations. Switch between degrees (DEG) and radians, and type with your keyboard or click the buttons.</p>
      <h2>For school and college</h2>
      <ul>
        <li><strong>Maths homework</strong> — fractions, powers and percentages.</li>
        <li><strong>Geometry</strong> — trig functions in degrees for angles and triangles.</li>
        <li><strong>Chemistry</strong> — logs for pH, and EXP for scientific notation (6.022 EXP 23).</li>
        <li><strong>Statistics</strong> — for mean, median and standard deviation, use the <a href="/average-calculator">Average Calculator</a>.</li>
        <li><strong>Calculus</strong> — handy for evaluating expressions; a graphing tool such as Desmos is better for plotting functions.</li>
      </ul>
      <h2>Exams</h2>
      <p>Most exams require a physical calculator — popular models include the Casio fx-991 series and the TI-30XS. Use this page to practise until you have one.</p>`,

  'fraction-calculator': `
      <h2>Fractions, mixed numbers and whole numbers</h2>
      <p>Add, subtract, multiply and divide fractions — including <strong>mixed numbers</strong> such as 2 ¾ — by entering the whole number, numerator and denominator. The answer is shown <strong>simplified</strong>, as a mixed number, as a decimal and as a percentage. Negative fractions work too.</p>
      <h2>How fraction maths works</h2>
      <ul>
        <li><strong>Add and subtract</strong> — find a common denominator: 1/3 + 1/4 = 4/12 + 3/12 = <strong>7/12</strong>.</li>
        <li><strong>Multiply</strong> — multiply across: 2/3 × 3/5 = 6/15 = <strong>2/5</strong>.</li>
        <li><strong>Divide</strong> — flip the second fraction and multiply: 3/4 ÷ 1/2 = 3/4 × 2 = <strong>1 ½</strong>.</li>
        <li><strong>Simplify</strong> — divide the top and bottom by their greatest common divisor.</li>
      </ul>
      <h2>Tape-measure maths</h2>
      <p>It adds measurements in inches for building and woodworking projects: 5 ⅜" + 2 ¾" = <strong>8 ⅛"</strong>.</p>
      <h2>For students</h2>
      <p>Check homework and see the decimal and percentage at the same time. To work with three fractions, combine the first two, then combine the result with the third. Exponents aren't supported; raise the numerator and denominator separately instead.</p>`,

  'average-calculator': `
      <h2>Mean, median, mode and more</h2>
      <p>Paste or type your numbers, separated by commas, spaces or new lines, to get the <strong>average (mean)</strong>, <strong>median</strong>, <strong>mode</strong>, <strong>range</strong>, sum, count, minimum and maximum, plus the <strong>standard deviation</strong> (population and sample), variance and geometric mean.</p>
      <h2>The formula</h2>
      <p>Mean = sum ÷ count. For 70, 85, 90 and 95: 340 ÷ 4 = <strong>85</strong>. The median is the middle value once the numbers are sorted (87.5 here), and the mode is the value that appears most often.</p>
      <h2>Grades and percentages</h2>
      <p>Enter your marks or percentages to see your mean score. If assignments carry different weights, use the <a href="/grade-calculator">Grade Calculator</a>; for a grade point average, use the <a href="/gpa-calculator">GPA Calculator</a>.</p>
      <h2>Average buy price of shares</h2>
      <p>When you buy the same stock at different prices, the simple average is wrong — you need a weighted average: total cost ÷ total shares. 10 shares at $50 plus 30 at $40 → $1,700 ÷ 40 = <strong>$42.50</strong>, not $45.</p>
      <h2>Other everyday averages</h2>
      <ul>
        <li>Fuel economy of a car or bike: kilometres driven ÷ litres used.</li>
        <li>Times: convert minutes and seconds to decimals before averaging.</li>
        <li>Batting average in baseball: hits ÷ at-bats.</li>
        <li>Average speed over a route: total distance ÷ total time.</li>
      </ul>
      <p>In Excel or Google Sheets, the formula is <code>=AVERAGE(A1:A10)</code>.</p>`,

  'unit-converter': `
      <h2>Ten categories of units</h2>
      <p>Convert between metric and imperial units for <strong>length</strong>, <strong>weight</strong>, <strong>temperature</strong>, <strong>area</strong>, <strong>volume</strong>, <strong>speed</strong>, <strong>time</strong>, <strong>digital storage</strong>, <strong>pressure</strong> and <strong>energy</strong>. Type a value, choose the units, and press ⇄ to swap. Results update as you type.</p>
      <h2>Popular conversions</h2>
      <ul>
        <li><strong>Length</strong> — 25.4 mm = 1 inch; also cm, m, km, ft, yd and miles.</li>
        <li><strong>Weight</strong> — 1 kg = 2.205 lb; also grams, ounces, stones, tola and maund.</li>
        <li><strong>Volume</strong> — litres, millilitres, US gallons, cups and fluid ounces.</li>
        <li><strong>Land area</strong> — m², ft², square yards, acres, hectares, marla and kanal.</li>
        <li><strong>Pressure</strong> — bar, psi, kPa and atm, for example for tyre pressures.</li>
        <li><strong>Energy</strong> — kWh, kJ and kcal, for example for electricity bills.</li>
      </ul>
      <h2>How conversion works</h2>
      <p>Most conversions are a single multiplication: value × factor (miles × 1.609 = km). Temperature is the exception: °F = °C × 9/5 + 32. Every unit available is listed in each category's menu.</p>
      <p>For money, use the <a href="/currency-converter">Currency Converter</a>.</p>`,

  'random-number-generator': `
      <h2>Random numbers in any range</h2>
      <p>Set a <strong>minimum</strong> and <strong>maximum</strong>, choose <strong>how many</strong> numbers you want and any decimal places, and generate. Tick <strong>No duplicates</strong> for unique numbers and <strong>Sort results</strong> to list them in order. Numbers come from your browser's cryptographically secure generator, so they are genuinely unpredictable.</p>
      <h2>Common ranges</h2>
      <p>1–10 and 1–100 are the most popular. For a dice roll, use 1–6 or try the <a href="/dice-roller">Dice Roller</a>. Any range works — just type it in.</p>
      <h2>Lotteries, raffles and games</h2>
      <ul>
        <li><strong>Lottery picks</strong> — Powerball is 5 unique numbers from 1–69 plus 1 from 1–26; Mega Millions is 5 from 1–70 plus 1 from 1–24. Every combination has exactly the same odds.</li>
        <li><strong>Raffles</strong> — number the tickets and draw winners with no duplicates.</li>
        <li><strong>Football squares and fantasy draft order</strong> — generate 0–9 or 1–12 with no repeats.</li>
        <li><strong>Picking names</strong> — number your list, or use <a href="/spin-the-wheel">Spin the Wheel</a>.</li>
      </ul>
      <h2>In Excel</h2>
      <p><code>=RANDBETWEEN(1,100)</code> works, but it recalculates every time the sheet changes. To keep a fixed list, generate it here and paste it in.</p>`,

  'roman-numeral-converter': `
      <h2>Numbers to Roman numerals and back</h2>
      <p>Type a number from 1 to 3999 to get its Roman numerals, or type Roman numerals to get the number, with a step-by-step breakdown: 2026 = M + M + X + X + V + I = <strong>MMXXVI</strong>.</p>
      <h2>Dates and birthdays</h2>
      <p>Convert each part of a date separately: the day, the month and the year. For example, 14 August 1995 = <strong>XIV · VIII · MCMXCV</strong>, and the year 2020 is MMXX.</p>
      <h2>Tattoos</h2>
      <p>A tattoo has to be exactly right, so double-check the result and the separators (dots or spaces) before your appointment. The standard form never repeats a symbol more than three times: 4 is IV, not IIII (except on some clock faces).</p>
      <h2>How Roman numerals work</h2>
      <p>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. A smaller numeral before a larger one subtracts (IX = 9, XC = 90, CM = 900); otherwise the values add up. If you're coding a converter yourself, for example in Python, a loop over the same value table does the job.</p>`,

  'lcm-gcd-calculator': `
      <h2>LCM and GCD of any set of numbers</h2>
      <p>Enter two or more numbers, separated by commas or spaces, to get the <strong>LCM</strong> (least common multiple) and the <strong>GCD</strong> — also called the HCF or GCF (greatest common factor). Each number's prime factorisation is listed alongside, so you can check your working.</p>
      <h2>Worked examples</h2>
      <ul>
        <li>24 = 2³ × 3 and 36 = 2² × 3². The LCM takes the highest powers: 2³ × 3² = <strong>72</strong>. The GCD takes the lowest: 2² × 3 = <strong>12</strong>.</li>
        <li>The LCM of 8, 24 and 36 is also 2³ × 3² = <strong>72</strong>.</li>
        <li>Shortcut for two numbers: LCM = a × b ÷ GCD → 24 × 36 ÷ 12 = 72.</li>
      </ul>
      <h2>Methods taught in school</h2>
      <ul>
        <li><strong>Prime factorisation</strong> — break each number into primes, as above.</li>
        <li><strong>Division (Euclid's algorithm)</strong> — divide, keep the remainder, repeat: 36 ÷ 24 = 1 r 12; 24 ÷ 12 = 2 r 0 → GCD 12.</li>
        <li><strong>Ladder method</strong> — divide all the numbers by common primes in a ladder, then multiply the numbers down the side and along the bottom for the LCM.</li>
      </ul>
      <p>In Python, <code>math.gcd()</code> and <code>math.lcm()</code> do the same job.</p>`,

  'quadratic-equation-solver': `
      <h2>Roots with full working</h2>
      <p>Enter the coefficients <strong>a</strong>, <strong>b</strong> and <strong>c</strong> of ax² + bx + c = 0 to get both roots, the discriminant and a <strong>step-by-step</strong> solution. Real and complex roots are both handled.</p>
      <h2>The quadratic formula</h2>
      <p><code>x = (−b ± √(b² − 4ac)) ÷ 2a</code>. The discriminant b² − 4ac tells you what to expect: positive → two real roots; zero → one repeated root; negative → two complex roots.</p>
      <h2>Example</h2>
      <p>x² − 5x + 6 = 0 → a = 1, b = −5, c = 6 → discriminant = 25 − 24 = 1 → x = (5 ± 1) ÷ 2 → <strong>x = 3</strong> or <strong>x = 2</strong>.</p>
      <h2>By factoring</h2>
      <p>The same equation factors as (x − 2)(x − 3) = 0. Factoring is quicker when the roots are whole numbers; the formula always works. Use the solver to check that your factors give the same roots.</p>
      <h2>On a calculator, in Excel or Python</h2>
      <p>On a TI-84, use the PlySmlt2 app. In Excel, one root is <code>=(-B1+SQRT(B1^2-4*A1*C1))/(2*A1)</code>. In Python, use <code>cmath.sqrt</code> so complex roots work too.</p>`,

  'date-difference-calculator': `
      <h2>Count the days between two dates</h2>
      <p>Pick a start and an end date to see the gap in days — and the same gap in years, months and days, in weeks, and as <strong>business days</strong>. Tick <strong>Include end date</strong> to count both the first and last day (handy for holidays and hotel stays), and choose which days are your weekend: Saturday &amp; Sunday, Friday &amp; Saturday, Friday only or Sunday only.</p>
      <h2>Example</h2>
      <p>1 January 2026 → 25 December 2026 = <strong>358 days</strong> (51 weeks and 1 day, or 11 months and 24 days), of which <strong>256</strong> are weekdays. Business days skip weekends only, not public holidays, so subtract any holidays yourself. The result also shows both dates with their weekdays.</p>
      <h2>The same calculation elsewhere</h2>
      <p>The difference is simply end date − start date:</p>
      <ul>
        <li><strong>Excel</strong> — <code>=B2-A2</code> or <code>=DAYS(B2,A2)</code>; for working days, <code>=NETWORKDAYS(A2,B2)</code>.</li>
        <li><strong>Google Sheets</strong> — <code>=DAYS(B2,A2)</code> or <code>=DATEDIF(A2,B2,"D")</code>.</li>
        <li><strong>SQL Server</strong> — <code>DATEDIFF(day, start_date, end_date)</code>; <strong>MySQL</strong> — <code>DATEDIFF(end_date, start_date)</code>.</li>
        <li><strong>Oracle</strong> — subtract the dates directly: <code>end_date - start_date</code>.</li>
        <li><strong>Snowflake</strong> — <code>DATEDIFF(day, start_date, end_date)</code>.</li>
        <li><strong>Power BI (DAX)</strong> — <code>DATEDIFF([Start], [End], DAY)</code>; <strong>Power Query</strong> — <code>Duration.Days([End] - [Start])</code>.</li>
      </ul>`,

  'date-calculator': `
      <h2>Add or subtract time from a date</h2>
      <p>Pick a start date, choose <strong>Add</strong> or <strong>Subtract</strong>, and enter any mix of years, months, weeks and days. You'll get the resulting date with its weekday, the ISO date (YYYY-MM-DD), its day of the year, and how many days away it is — ideal for deadlines.</p>
      <h2>Examples</h2>
      <ul>
        <li>21 October 2026 + 90 days = <strong>Tuesday, 19 January 2027</strong>.</li>
        <li>31 January + 1 month = <strong>28 February</strong> (29 in a leap year) — the calculator stays inside the shorter month instead of spilling into March.</li>
        <li>Today + 6 weeks for a follow-up appointment.</li>
      </ul>
      <h2>Deadlines, medication and pregnancy</h2>
      <ul>
        <li><strong>Legal deadlines</strong> — “within 30 days of service” means the service date + 30 days. Courts often extend deadlines that land on weekends or holidays, so check the rules that apply to you.</li>
        <li><strong>Medication</strong> — when a 28-day pack or a 90-day prescription runs out.</li>
        <li><strong>Pregnancy</strong> — the <a href="/pregnancy-calculator">Pregnancy Due Date Calculator</a> works out weeks and the due date for you.</li>
        <li><strong>Age</strong> — the <a href="/age-calculator">Age Calculator</a> gives exact years, months and days.</li>
      </ul>
      <h2>Counting days between two dates</h2>
      <p>To go the other way and count the days, including working days, between two dates, use <a href="/date-difference-calculator">Days Between Dates</a>.</p>
      <h2>In Excel</h2>
      <p><code>=A2+90</code> adds days, <code>=EDATE(A2,3)</code> adds months and <code>=WORKDAY(A2,10)</code> adds 10 working days. Any year from 1 to 9999 works here.</p>`,

  'time-calculator': `
      <h2>Three ways to calculate time</h2>
      <ul>
        <li><strong>Hours between two times</strong> — enter a start and end time and an <strong>unpaid break</strong>. You get the total in hours and minutes, in <strong>decimal hours</strong> and in minutes; add an hourly rate to see the pay. Overnight shifts (22:00 → 06:00) are handled automatically.</li>
        <li><strong>Add or subtract time</strong> — for example 08:45 + 3 h 20 m = 12:05 PM, with a “+1 day” note if you cross midnight.</li>
        <li><strong>Total of many durations</strong> — one per line, such as <code>1:30</code>, <code>2h 15m</code> or <code>45m</code>, with the total and the average.</li>
      </ul>
      <h2>A working day with lunch</h2>
      <p>9:00 to 17:30 with a 30-minute lunch → <strong>8h 00m</strong> (8.00 decimal hours) — the figure most timesheets need.</p>
      <h2>A working week and payroll</h2>
      <p>Switch to “Total of many durations” and enter each day: 8:00, 7:45, 8:30, 8:00, 6:15 → <strong>38h 30m</strong>. Payroll systems use decimal hours, so it shows 38.50 as well (see also <a href="/hours-to-decimal">Hours to Decimal</a>).</p>
      <h2>Minutes and seconds</h2>
      <p>For a total in minutes, enter lines such as <code>45m</code>. For minutes and seconds, type h:mm:ss, such as <code>0:04:30</code>; totals are rounded to the minute.</p>
      <h2>Dividing time, dates and time zones</h2>
      <p>To divide time, use decimal hours: 7.5 h ÷ 3 = 2.5 h = 2h 30m (the average in the list mode does this for you). For the gap between two dates, use <a href="/date-difference-calculator">Days Between Dates</a>; for time zones, the <a href="/time-zone-converter">Time Zone Converter</a>.</p>`,

  'stopwatch': `
      <h2>A stopwatch with lap times</h2>
      <p>Press <strong>Start</strong> — or the <kbd>Space</kbd> bar — and the stopwatch counts to the hundredth of a second. Press <kbd>L</kbd> or <strong>Lap</strong> to record split times, and <kbd>R</kbd> to reset. Each lap shows its own time and the running total; with three or more laps, the fastest is highlighted green and the slowest red.</p>
      <h2>Accurate timing</h2>
      <p>Time is measured with your browser's high-resolution clock, so it stays accurate even if the display briefly stutters. Press <kbd>F11</kbd> for a full-screen view. To count down instead, use the <a href="/countdown-timer">Countdown Timer</a>, which has an alarm and its own full-screen button.</p>
      <h2>Sport, study and the classroom</h2>
      <ul>
        <li><strong>Running and swimming</strong> — press Lap for each lap or each kilometre and see who improved.</li>
        <li><strong>Rubik's cube</strong> — Space starts and stops it, just like a cube timer.</li>
        <li><strong>Chess</strong> — time a whole game or a single move (a two-sided chess clock is a different tool).</li>
        <li><strong>Study sessions</strong> — or try the <a href="/pomodoro-timer">Pomodoro Timer</a>.</li>
        <li><strong>Classroom activities</strong> — large, simple numbers that everyone can read.</li>
        <li><strong>A game</strong> — try stopping it at exactly 10.00 seconds.</li>
      </ul>`,

  'countdown-timer': `
      <h2>A timer with an alarm</h2>
      <p>Click a preset — 1, 3, 5, 10, 15, 20, 30 or 45 minutes, or 1 hour — or set any hours, minutes and seconds, then press <strong>Start</strong>. A progress bar shows the time left, the browser tab shows it too, and when it reaches zero an alarm rings until you stop it. The ⛶ button makes it full screen.</p>
      <h2>Classrooms, children and talks</h2>
      <ul>
        <li><strong>In class</strong> — go full screen on the projector so everyone can see the time left for an activity.</li>
        <li><strong>At home</strong> — screen-time limits, tidy-up races and homework blocks.</li>
        <li><strong>Presentations</strong> — keep it full screen on a second display, or switch to it between slides.</li>
      </ul>
      <h2>Live streams and Discord</h2>
      <p>For a “starting in 5 minutes” screen, add this page to OBS as a Window Capture or Browser Source and crop to the timer. For a Discord event, share your screen, or post a countdown that updates by itself with the <a href="/discord-timestamp-generator">Discord Timestamp Generator</a>.</p>
      <h2>On phones and computers</h2>
      <p>It works in any browser, and on iPhone you can add it to the Home Screen so it opens like an app. Keep the tab open and the volume up to hear the alarm.</p>
      <h2>Counting down to a date</h2>
      <p>This timer counts down a length of time. To count the days until a wedding, exam or New Year, use <a href="/date-difference-calculator">Days Between Dates</a>.</p>`,

  'pomodoro-timer': `
      <h2>Focus in 25-minute sessions</h2>
      <p>Press <strong>Start</strong> for a 25-minute focus session. When the timer rings, take a 5-minute short break; every fourth break is a 15-minute long break. The timer counts your completed sessions, shows the countdown in the browser tab, and can start the next session automatically. Change the focus, short-break and long-break lengths in ⚙️ Settings — they are remembered on this device.</p>
      <h2>What is the Pomodoro Technique?</h2>
      <p>It was created by Francesco Cirillo in the late 1980s. “Pomodoro” is Italian for tomato — he used a tomato-shaped kitchen timer. The idea is simple: short, timed bursts of focus on a single task, with regular breaks to beat procrastination and fatigue.</p>
      <h2>Making it work for you</h2>
      <ul>
        <li><strong>Studying</strong> — one subject per session; use the break to stand up and stretch rather than scroll.</li>
        <li><strong>ADHD</strong> — many people find shorter sessions easier to start, such as 15 minutes of work and a 5-minute break; set them in Settings.</li>
        <li><strong>Children's homework</strong> — try 10–15 minute focus blocks.</li>
      </ul>
      <h2>On your computer</h2>
      <p>It runs in the browser on Windows and Mac with nothing to install. Keep it in a tab beside your notes or Notion workspace, and allow notifications to get an alert when a session ends. Unlike a fixed-length YouTube timer video, you can adjust and pause it.</p>`,

  'time-zone-converter': `
      <h2>One moment, every city on your list</h2>
      <p>Pick a date and time and the time zone it's in, and see the same moment in every city on your list — with each place's date, UTC offset and a ☀️/🌙 day-or-night icon. Add any city or time zone from the full world list, remove the ones you don't need, and press <strong>Now</strong> for the current time everywhere. Your list is remembered on this device. Daylight saving time is applied automatically for the date you choose, so results stay correct all year.</p>
      <h2>Why the date matters</h2>
      <p>A 9:00 AM meeting in New York is <strong>7:30 PM</strong> in India in winter (EST, UTC−5) but <strong>6:30 PM</strong> in summer (EDT, UTC−4), because India (UTC+5:30) doesn't use daylight saving. US time zones — Eastern, Central, Mountain and Pacific — all shift in this way.</p>
      <h2>Planning meetings</h2>
      <p>Add every attendee's city and move the time until it shows ☀️ for everyone. It's just as useful when travelling, to check the local time when you land.</p>
      <h2>Forex market hours</h2>
      <p>Convert the trading session openings to your own time. In UTC during the northern winter: Sydney about 21:00–06:00, Tokyo 00:00–09:00, London 08:00–17:00 and New York 13:00–22:00 — about an hour earlier when daylight saving is on.</p>
      <h2>Discord and Excel</h2>
      <ul>
        <li><strong>Discord</strong> — the <a href="/discord-timestamp-generator">Discord Timestamp Generator</a> shows a time in each reader's own time zone.</li>
        <li><strong>Excel</strong> — add the offset as a fraction of a day: <code>=A2+5/24</code>, or <code>=A2+TIME(5,30,0)</code> for +5:30.</li>
      </ul>`,

  'alarm-clock': `
      <h2>Alarms with sound and labels</h2>
      <p>Set a time, give the alarm a label such as “Wake up” or “Take medicine”, and choose a sound: Classic, Beep, Bell or Digital. You can add several alarms and switch each one on or off. When one rings, choose <strong>Stop</strong> or <strong>Snooze 5 min</strong>; it keeps ringing until you do. Alarms are saved in this browser, and the page shows a large live clock with today's date.</p>
      <h2>Make sure it rings</h2>
      <ul>
        <li>Keep this tab open and your computer awake. The alarm plays in your browser, so a laptop that has gone to sleep can't ring.</li>
        <li>Turn the volume up. For heavy sleepers, Digital or Beep through external speakers is the loudest option.</li>
        <li>Allow notifications so a pop-up appears even when you are in another tab.</li>
      </ul>
      <h2>At home, at work and in class</h2>
      <p>Students use it to mark the end of study blocks, and teachers to signal tidy-up time. On a projector or spare screen, the large clock also works as a classroom or exam-room clock.</p>
      <h2>Alarm or timer?</h2>
      <p>An alarm rings at a time of day; a timer rings after a length of time. For “ring in 20 minutes”, use the <a href="/countdown-timer">Countdown Timer</a> instead.</p>`,

  'day-of-week-calculator': `
      <h2>Which weekday is any date?</h2>
      <p>Enter any date, past or future, to see the day of the week. You also get its place in the month (“the third Saturday”), the day of the year, the ISO week number, and how many days ago or away it is.</p>
      <h2>What day were you born?</h2>
      <p>Type your date of birth — 15 January 2000, for example, was a <strong>Saturday</strong> — and you'll also see the line from the old nursery rhyme for your day (“Saturday's child works hard for a living”). Try your birthday in a future year to see which day your next party falls on.</p>
      <h2>Famous dates</h2>
      <ul>
        <li>4 July 1776, the US Declaration of Independence — a <strong>Thursday</strong>.</li>
        <li>6 June 1944, D-Day — a <strong>Tuesday</strong>.</li>
        <li>20 July 1969, the Moon landing — a Sunday.</li>
        <li>11 September 2001 — a <strong>Tuesday</strong>.</li>
        <li>In 2026, 4 July and Halloween both fall on a Saturday, and Christmas Day on a Friday.</li>
      </ul>
      <h2>Working it out by hand</h2>
      <p>The classic formula is Zeller's congruence: <code>h = (q + ⌊13(m+1)/5⌋ + K + ⌊K/4⌋ + ⌊J/4⌋ + 5J) mod 7</code>, where q is the day, m the month (March = 3 … February = 14 of the previous year), K the year of the century and J the century; h = 0 is Saturday. For mental arithmetic, try John Conway's Doomsday rule: 4/4, 6/6, 8/8, 10/10 and 12/12 always fall on the same weekday in any year.</p>
      <h2>In Excel</h2>
      <p>Use <code>=TEXT(A2,"dddd")</code> for the day's name or <code>=WEEKDAY(A2)</code> for a number (1 = Sunday).</p>
      <h2>Old dates</h2>
      <p>Dates before 1582 are calculated on the modern Gregorian calendar extended backwards. Historians usually quote older dates on the Julian calendar, so convert a historical date to Gregorian first. Browser date pickers start at year 1, so dates BC aren't supported.</p>`,

  'character-counter': `
      <h2>Characters with and without spaces</h2>
      <p>Type or paste your text and the counts update instantly: characters <strong>including spaces</strong> and without, words, sentences, paragraphs, reading and speaking time, plus your most-used words. Your text is saved in your browser, so it's still there if you close the tab.</p>
      <h2>Limits for social media and SMS</h2>
      <p>Bars show how close you are to each platform's limit and turn red when you go over:</p>
      <ul>
        <li><strong>X (Twitter)</strong> — 280 characters per post (longer posts need X Premium). X counts each emoji as 2.</li>
        <li><strong>Instagram</strong> — 2,200 characters per caption; only about the first 125 show before “more”.</li>
        <li><strong>SMS</strong> — 160 characters per message, or 70 if it contains emoji or non-Latin letters.</li>
        <li>Also: SEO meta title (60) and description (160), YouTube title (100), LinkedIn post (3,000) and Facebook's “See more” cut-off (477).</li>
      </ul>
      <h2>Essays and personal statements</h2>
      <p>Paste your draft to watch the total against an application limit — the UCAS personal statement, for example, allows 4,000 characters including spaces. The word count is shown alongside.</p>
      <h2>In Word and Excel</h2>
      <ul>
        <li><strong>Word</strong> — Review → Word Count shows characters with and without spaces.</li>
        <li><strong>Excel</strong> — <code>=LEN(A1)</code>; without spaces, <code>=LEN(SUBSTITUTE(A1," ",""))</code>.</li>
      </ul>
      <p>Prefer counting words first? Use the <a href="/word-counter">Word Counter</a>.</p>`,

  'case-converter': `
      <h2>Change text case in one click</h2>
      <p>Paste your text and click a button: <strong>UPPER CASE</strong>, <strong>lower case</strong>, <strong>Title Case</strong>, <strong>Sentence case</strong>, Capitalize Each Word, <strong>camelCase</strong>, PascalCase, <strong>snake_case</strong>, kebab-case, CONSTANT_CASE, aLtErNaTiNg or iNVERSE. Then copy the result.</p>
      <h2>Fix text typed with Caps Lock on</h2>
      <p>Paste it and click <strong>lower case</strong> or <strong>Sentence case</strong> to fix it at once. Going the other way, UPPER CASE is useful for headings, labels and codes.</p>
      <h2>Title case rules</h2>
      <p>Title Case follows the common rule used by AP-style guides: short articles, conjunctions and prepositions (a, an, the, and, but, for, of, on, to, by…) stay lowercase unless they are the first word. Chicago style also lowercases longer prepositions such as “with” and “between”, so adjust those by hand if you follow it.</p>
      <p>Sentence case capitalises only the first word and names — “How to write a great headline” — while title case capitalises the main words — “How to Write a Great Headline”. Sentence case here also fixes a lone “i” to “I”.</p>
      <h2>In Word, Excel, Google Docs and Python</h2>
      <ul>
        <li><strong>Word</strong> — select the text and press Shift + F3 to cycle between cases.</li>
        <li><strong>Excel</strong> — <code>=LOWER(A1)</code>, <code>=UPPER(A1)</code> and <code>=PROPER(A1)</code>.</li>
        <li><strong>Google Docs</strong> — Format → Text → Capitalisation.</li>
        <li><strong>Python</strong> — <code>s.lower()</code>, <code>s.upper()</code> and <code>s.title()</code>.</li>
      </ul>`,

  'lorem-ipsum-generator': `
      <h2>Placeholder text in any amount</h2>
      <p>Choose what to generate — <strong>paragraphs</strong>, <strong>sentences</strong>, <strong>words</strong> or <strong>list items</strong> — and how many, up to 500. Tick “Start with Lorem ipsum dolor sit amet…” for the classic opening, and “Wrap in HTML tags” to get <code>&lt;p&gt;</code> paragraphs or a <code>&lt;ul&gt;</code> list. The word and character count is shown under the result.</p>
      <h2>For designers and developers</h2>
      <ul>
        <li><strong>HTML</strong> — wrap the output in tags, ready to paste into a page.</li>
        <li><strong>Figma and other design tools</strong> — generate a few sentences and paste them into a text layer.</li>
        <li><strong>Typography</strong> — paragraphs with varied sentence lengths show how a typeface really sets.</li>
        <li><strong>Headings</strong> — generate paragraphs, then add your own <code>&lt;h2&gt;</code> headings between them.</li>
      </ul>
      <h2>To an exact length</h2>
      <p>Choose Words and enter the exact number. For a character limit, generate a few more words than you need, check the character count shown, and trim — roughly 6 characters per word, including the space.</p>
      <h2>In Word and PowerPoint</h2>
      <p>Microsoft Word has a built-in formula: type <code>=lorem(3,5)</code> and press Enter for 3 paragraphs of 5 sentences. It works in PowerPoint text boxes too. This page gives more control, plus HTML output.</p>
      <h2>Where it comes from</h2>
      <p>Lorem ipsum is scrambled Latin from Cicero's <em>De finibus bonorum et malorum</em> (45 BC), used by printers since the 1500s because it looks like real text without distracting readers. This generator sticks to the classic text, which clients won't mistake for real copy.</p>`,

  'text-compare': `
      <h2>See exactly what changed</h2>
      <p>Paste the original text on the left and the changed version on the right, then click <strong>Compare</strong>. Every line is lined up: removed lines turn red, added lines green, and changed lines yellow, with the exact <strong>words</strong> that changed highlighted. A summary counts the added, removed and modified lines. Options let you ignore case and extra spaces. Nothing is uploaded.</p>
      <h2>Code, documents and contracts</h2>
      <ul>
        <li><strong>Code and config files</strong> — compare two versions of a script or settings file. Format JSON first with the <a href="/json-formatter">JSON Formatter</a> so the lines match up.</li>
        <li><strong>Drafts</strong> — see exactly which words an editor changed in an essay, contract or policy.</li>
        <li><strong>Long files</strong> — a few thousand lines work fine in the browser; split very long files into sections.</li>
      </ul>
      <h2>Similarity, not plagiarism checking</h2>
      <p>The number of unchanged lines shows how similar two texts are. It compares only the two texts you give it — it doesn't search the web for copied content.</p>
      <h2>Comparing follower lists</h2>
      <p>Two lists with one name per line can be compared here. For Instagram, the <a href="/instagram-unfollowers-tracker">Instagram Unfollowers Tracker</a> reads your official data export and shows who doesn't follow you back automatically.</p>
      <h2>In other programs</h2>
      <ul>
        <li><strong>Notepad++</strong> — install the “Compare” plugin from Plugins Admin.</li>
        <li><strong>VS Code</strong> — select two files in Explorer, right-click and choose “Compare Selected”.</li>
        <li><strong>Excel</strong> — <code>=EXACT(A1,B1)</code> tells you whether two cells match exactly.</li>
      </ul>`,

  'remove-duplicate-lines': `
      <h2>Clean up a list in one step</h2>
      <p>Paste a list and duplicate lines are removed instantly, keeping the first copy of each line in its original order. Options: <strong>Ignore case</strong> (so “Apple” and “apple” count as the same), <strong>Trim spaces</strong>, <strong>Remove empty lines</strong> and <strong>Sort A → Z</strong>. You see how many lines were removed. Useful for lists of emails, keywords, URLs or names.</p>
      <h2>From a text file</h2>
      <p>Open the file, copy everything, paste it here, then copy the result back. Nothing is uploaded.</p>
      <h2>In other programs</h2>
      <ul>
        <li><strong>Excel</strong> — Data → Remove Duplicates.</li>
        <li><strong>Notepad++</strong> — Edit → Line Operations → Remove Duplicate Lines.</li>
        <li><strong>VS Code</strong> — run “Delete Duplicate Lines” from the Command Palette (Ctrl + Shift + P).</li>
        <li><strong>Sublime Text</strong> — Edit → Permute Lines → Unique.</li>
        <li><strong>Vim</strong> — <code>:sort u</code> (this also sorts the lines).</li>
      </ul>
      <h2>On Linux</h2>
      <p><code>sort -u file.txt</code> removes duplicates but changes the order. To keep the original order, use <code>awk '!seen[$0]++' file.txt</code> — the same thing this page does.</p>
      <h2>Lines in drawings</h2>
      <p>Duplicate lines in CAD and design files are a different problem: in AutoCAD the <code>OVERKILL</code> command deletes overlapping geometry, and in Illustrator you can select overlapping paths and merge them with Pathfinder.</p>`,

  'sort-lines': `
      <h2>Sort a list in one click</h2>
      <p>Paste a list with one item per line and choose how to sort it: <strong>A → Z</strong> or Z → A, <strong>numbers ascending</strong> or descending, <strong>shortest first</strong> or longest first, <strong>reverse order</strong>, or <strong>shuffle</strong> randomly. Options: <strong>Natural sort</strong> (so “Apple 2” comes before “Apple 10”), ignore case, and remove empty lines.</p>
      <h2>Names, words and references</h2>
      <ul>
        <li><strong>Names by surname</strong> — write them as “Last, First” before sorting.</li>
        <li><strong>Words on a single line</strong> — put each word on its own line first.</li>
        <li><strong>Reference lists</strong> — APA and MLA lists are ordered by the first author's surname, so paste one reference per line and sort A → Z.</li>
      </ul>
      <h2>In other programs</h2>
      <ul>
        <li><strong>Word</strong> — Home → Sort (A→Z).</li>
        <li><strong>Excel</strong> — Data → Sort A to Z.</li>
        <li><strong>Google Docs</strong> has no built-in sort; paste the list here, sort it, and paste it back.</li>
        <li><strong>Notepad++</strong> — Edit → Line Operations → Sort Lines Lexicographically Ascending.</li>
        <li><strong>VS Code</strong> — Command Palette → “Sort Lines Ascending”.</li>
        <li><strong>Sublime Text</strong> — Edit → Sort Lines (F9).</li>
        <li><strong>Linux</strong> — <code>sort file.txt</code>; add <code>-V</code> for natural order.</li>
      </ul>
      <p>Your list stays in your browser.</p>`,

  'reverse-text': `
      <h2>Flip text four ways</h2>
      <p>Type or paste your text and choose: <strong>Reverse text</strong> (write it backwards — “hello” → “olleh”), <strong>Reverse each word</strong> (keeping the word order), <strong>Reverse word order</strong> (“one two three” → “three two one”) or <strong>Reverse line order</strong>. Emoji and accented letters stay intact, so you can copy the result into any app.</p>
      <h2>Hebrew and Arabic text</h2>
      <p>Right-to-left text sometimes appears backwards when pasted into apps or design tools that don't support right-to-left languages. Reverse it here, then paste it again. This only flips the order; it doesn't translate anything.</p>
      <h2>Mirror text for printing and cameras</h2>
      <p>Backwards letters aren't the same as a mirror image. For iron-on transfers, teleprompter glass or a sign that should read correctly in a selfie video, make an image of your text and flip it horizontally with <a href="/rotate-image">Rotate &amp; Flip Image</a>.</p>
      <h2>In other apps</h2>
      <ul>
        <li><strong>Word</strong> — to mirror a text box, use Format Shape → 3-D Rotation → X Rotation 180°.</li>
        <li><strong>Excel 365</strong> — <code>=TEXTJOIN("",TRUE,MID(A1,SEQUENCE(LEN(A1),,LEN(A1),-1),1))</code>.</li>
        <li><strong>Photoshop</strong> — Edit → Transform → Flip Horizontal mirrors a text layer.</li>
        <li><strong>CapCut</strong> — paste backwards text from here into a text layer, or mirror the clip in the editor.</li>
      </ul>
      <p>It's also fun for secret messages, puzzles and drama games.</p>`,

  'fancy-text-generator': `
      <h2>30+ text styles to copy and paste</h2>
      <p>Type your text and see it in more than 30 styles at once: <strong>bold</strong>, <em>italic</em>, cursive script, gothic (Fraktur), double-struck, monospace, circled, squared, small caps, superscript, upside down, strikethrough, underline, and decorated styles with sparkles ✨, hearts ♡ and wings ꧁༺ ༻꧂. Click any style to copy it.</p>
      <h2>How it works</h2>
      <p>These aren't real fonts. Each letter is swapped for a look-alike Unicode character (such as the mathematical bold 𝐀), so the style survives when you paste it somewhere you can't change the font. Two cautions: screen readers may read these letters oddly, and search engines may not match them, so keep important words in plain text.</p>
      <h2>Social media</h2>
      <p>The styles work in Instagram and TikTok bios, names and captions, Facebook posts, and WhatsApp statuses and group names.</p>
      <h2>Discord and games</h2>
      <p>Most styles work in Discord nicknames and channel names. Games are stricter: Roblox's filter blocks them, and Fortnite, BGMI, Mobile Legends and Call of Duty Mobile may reject them or show boxes. Each game has its own rules, so try another style if one is refused. For a name that looks blank, see <a href="/invisible-character">Invisible Character</a>.</p>
      <h2>Colours</h2>
      <p>Plain text can't carry colour, so coloured text isn't possible in bios. On Discord, coloured text works inside <code>ansi</code> code blocks.</p>`,

  'remove-line-breaks': `
      <h2>Fix text copied from PDFs and emails</h2>
      <p>Text copied from a PDF or an email often breaks in the middle of sentences. Paste it here and choose <strong>Remove, but keep paragraphs</strong> (the usual choice), <strong>Remove all</strong> line breaks, or <strong>Replace with comma</strong> to turn a column of items into a comma-separated list. Options also join hyphenated words split across lines (“sen-<br>tences” → “sentences”) and remove extra spaces. Nothing is uploaded.</p>
      <h2>In Word</h2>
      <p>Press Ctrl + H, search for <code>^p</code> (paragraph mark) or <code>^l</code> (manual line break), and replace with a space. Be careful: <code>^p</code> also removes your real paragraph breaks, which is why “keep paragraphs” here is easier.</p>
      <h2>In Excel</h2>
      <ul>
        <li><strong>Find and Replace</strong> — Ctrl + H, click in “Find what” and press Ctrl + J (an invisible line break), then replace with a space.</li>
        <li><strong>Formulas</strong> — <code>=SUBSTITUTE(A1,CHAR(10)," ")</code>, or <code>=CLEAN(A1)</code> to strip them entirely.</li>
      </ul>
      <h2>In Google Docs and Notepad++</h2>
      <ul>
        <li><strong>Google Docs</strong> — paste the text here first, then paste the clean version into your document.</li>
        <li><strong>Notepad++</strong> — select the lines and press Ctrl + J (Join Lines), or use Ctrl + H in Extended mode to replace <code>\\r\\n</code> with a space.</li>
      </ul>`,

  'find-and-replace': `
      <h2>Replace every match at once</h2>
      <p>Paste your text, type what to <strong>Find</strong> and what to <strong>Replace with</strong>, and every match is replaced, with a count of how many changes were made. Options: <strong>Match case</strong>, <strong>Whole words only</strong> (so “cat” doesn't change “category”) and <strong>Regular expression</strong> for advanced patterns, with <code>$1</code> to reuse captured groups.</p>
      <h2>Regular expression examples</h2>
      <ul>
        <li>Find <code>\\s+</code> → replace with one space: collapses repeated spaces.</li>
        <li>Find <code>(\\w+)@example\\.com</code> → <code>$1@newdomain.com</code>: change an email domain.</li>
        <li>Find <code>(\\d{2})/(\\d{2})/(\\d{4})</code> → <code>$3-$2-$1</code>: turn 21/10/2026 into 2026-10-21.</li>
      </ul>
      <h2>In other programs</h2>
      <ul>
        <li><strong>Word and Excel</strong> — Ctrl + H.</li>
        <li><strong>AutoCAD</strong> — the <code>FIND</code> command.</li>
        <li><strong>InDesign</strong> — Edit → Find/Change.</li>
        <li><strong>Illustrator</strong> — Edit → Find and Replace.</li>
        <li><strong>Revit</strong> — Annotate → Find/Replace.</li>
      </ul>
      <h2>In a PDF</h2>
      <p>PDFs can't be edited like a text file. Extract the text with <a href="/pdf-to-text">PDF to Text</a> or convert it with <a href="/pdf-to-word">PDF to Word</a>, make your replacements here or in Word, then save it as a PDF again.</p>
      <h2>Text on a web page or form</h2>
      <p>No browser extension is needed: copy the text here, replace, and paste it back.</p>`,

  'keyword-density-checker': `
      <h2>Your most-used words and phrases</h2>
      <p>Paste an article or page and see your most-used <strong>single words</strong>, <strong>2-word phrases</strong> and <strong>3-word phrases</strong>, each with its count and density, plus the total and unique word count. Tick “Ignore common words” to hide words like “the” and “and”, and set a minimum word length.</p>
      <h2>What is keyword density?</h2>
      <p>It is the share of your words taken up by a word or phrase: count ÷ total words × 100. In a 1,000-word article, a phrase used 10 times has a density of 1%.</p>
      <h2>Is there an ideal density?</h2>
      <p>No. Google has said it doesn't use a target density, and repeating a keyword unnaturally is “keyword stuffing”, which breaks its spam policies. Most well-written pages end up around 0.5–2% for their main phrase without trying. Treat this tool as a check for overuse, not a goal: write for the reader, use related words naturally, and answer their questions.</p>
      <h2>How to use it</h2>
      <p>Paste your draft before publishing, look at the top 1-, 2- and 3-word lists, and make sure your main topic appears — but that nothing stands out as suspiciously high. If one phrase dominates, rewrite those sentences in plainer language. Your text stays in your browser.</p>`,

  'morse-code-translator': `
      <h2>Text to Morse and back</h2>
      <p>Type text to get Morse code, or paste dots and dashes to get text — the direction is detected automatically. Letters are separated by spaces and words by <code>/</code>. Press <strong>🔊 Play Morse</strong> to hear it as beeps, at any speed from 5 to 35 words per minute. Example: SOS = <code>... --- ...</code>.</p>
      <h2>Decoding Morse</h2>
      <p>Paste the code using dots (.) and dashes (-); “·” and “−” work too. Unknown codes show as �, so typos are easy to spot.</p>
      <h2>Numbers and punctuation</h2>
      <p>1 = <code>.----</code>, 2 = <code>..---</code>, 3 = <code>...--</code>, 4 = <code>....-</code>, 5 = <code>.....</code>, 6 = <code>-....</code>, 7 = <code>--...</code>, 8 = <code>---..</code>, 9 = <code>----.</code>, 0 = <code>-----</code>. Punctuation such as . , ? ! / @ is supported too.</p>
      <h2>Decoding sound, light or pictures</h2>
      <p>The tool translates text you type. For Morse in an audio clip, a video, a flashing light or a picture, write down the short (dot) and long (dash) signals and paste them here. A dash lasts three times as long as a dot, and longer gaps separate letters and words.</p>
      <h2>Puzzles, children and radio</h2>
      <ul>
        <li><strong>Game puzzles</strong> — type the dots and dashes you find in a clue or Easter egg.</li>
        <li><strong>Children</strong> — write secret messages and play them aloud; slower speeds are easier to learn.</li>
        <li><strong>Amateur radio practice</strong> — listen at 15–20 words per minute and write down what you hear.</li>
      </ul>`,

  'binary-translator': `
      <h2>Text to binary and back</h2>
      <p>Type text and click <strong>Text → Binary</strong> to get each character as 8-bit binary, or paste binary and click <strong>Binary → Text</strong> to decode it. You can also convert text to and from <strong>hex</strong> and <strong>decimal</strong> codes. Text is encoded as UTF-8, so accented letters and emoji work too.</p>
      <h2>Example</h2>
      <p>“Hello” in binary is <code>01001000 01100101 01101100 01101100 01101111</code> — H = 72, e = 101, l = 108, o = 111 in decimal. Every 8 bits make one byte, and each byte is the code of a letter. For plain English text these codes are the same as ASCII.</p>
      <h2>Binary numbers</h2>
      <p>This page translates text. To convert a binary <em>number</em> to decimal, use the <a href="/number-base-converter">Number Base Converter</a>. For example, 101 in binary = 1×4 + 0×2 + 1×1 = <strong>5</strong>.</p>
      <h2>IP addresses</h2>
      <p>Convert each part of an IP address separately in the Number Base Converter: 192 = 11000000 and 168 = 10101000, so 192.168.1.1 = 11000000.10101000.00000001.00000001.</p>
      <h2>Binary in a picture</h2>
      <p>This tool can't read images. Copy the 0s and 1s from the picture — the text recognition built into most phone cameras works well — and paste them here. General translation sites don't decode binary properly.</p>`,

  'text-repeater': `
      <h2>Repeat text as many times as you need</h2>
      <p>Type a word, emoji or message, choose how many times to repeat it, and pick a separator: <strong>new line</strong>, <strong>space</strong>, <strong>comma</strong>, <strong>none</strong> or a <strong>custom</strong> separator. Tick <strong>Number each line</strong> to add 1., 2., 3. Then copy the result. A hundred or a thousand repetitions take about a second.</p>
      <h2>Messages and social posts</h2>
      <p>Repeat a “Happy birthday 🎉” or a row of hearts for WhatsApp, or make fun comments, captions and emoji lines for Instagram, Snapchat or YouTube — then paste. Please use it for fun, not to spam people: apps may limit or block very long or repeated messages.</p>
      <h2>Practical uses</h2>
      <ul>
        <li>Testing forms and layouts with long input.</li>
        <li>Making numbered lists or templates (with Number each line).</li>
        <li>Writing lines, worksheets and handwriting practice sheets.</li>
      </ul>
      <p>The output is capped at about 5 million characters so your browser stays responsive.</p>`,

  'online-notepad': `
      <h2>Notes that save themselves</h2>
      <p>Start typing and every change is saved automatically in your browser, so your notes are still here when you come back. Create as many notes as you like with <strong>+ New note</strong>, switch between them in the list, and <strong>download</strong> any note as a .txt file or copy it. A live word count shows as you type. No account and no ads.</p>
      <h2>Private by design</h2>
      <p>Your notes are stored only in this browser on this device — never on our servers. That also means clearing your browser data deletes them, and they don't sync between devices, so download anything important.</p>
      <h2>Good for</h2>
      <ul>
        <li>Drafts, to-do lists and ideas, without distractions.</li>
        <li>Typing practice — try the <a href="/typing-speed-test">Typing Speed Test</a> too.</li>
        <li>Children, as there is nothing to sign up for or install.</li>
        <li>Late-night writing: the site follows your device's dark-mode setting.</li>
        <li>Keeping code snippets as plain text; download as .txt and rename to .html if needed. It doesn't run or highlight code.</li>
      </ul>
      <h2>What it doesn't do</h2>
      <p>There is no share link — copy the text or download the file to send it. It's for typed text, so drawing and pen input aren't supported. Bookmark the page and it works like an app on any device.</p>`,

  'words-to-minutes': `
      <h2>How long will your speech take?</h2>
      <p>Enter your word count — or paste your speech to count it automatically — and choose a speaking pace: <strong>slow</strong> (100 words per minute), <strong>average</strong> (130), <strong>fast</strong> (160) or your own. You'll see how long the speech will take, plus the silent reading time at about 238 words per minute. Switch to <strong>Minutes → words</strong> to find how many words you need for a set time.</p>
      <h2>A 1,000-word speech</h2>
      <p>At an average 130 words per minute, 1,000 words take about <strong>7 minutes 42 seconds</strong> — between 6¼ minutes at a fast pace and 10 minutes at a slow one. Read silently, it takes about 4 minutes. A 700-word speech takes about 5 minutes 23 seconds.</p>
      <h2>Words for a set time</h2>
      <p>A 5-minute speech or presentation is about <strong>650 words</strong> at an average pace (500–800 depending on speed), and a 10-minute speech about 1,300. Toastmasters speeches of 5–7 minutes are roughly 650–900 words.</p>
      <h2>Speaking speed</h2>
      <p>Most presenters speak at 120–150 words per minute, and up to 160 in conversation. Pausing for effect lowers your average — which is a good thing. Aim for 120–140 for a presentation, and practise out loud with a timer: your own measured pace is the best number to enter here.</p>`,

  'base64-encode-decode': `
      <h2>Encode and decode Base64</h2>
      <p>Paste text and click <strong>Encode to Base64</strong>, or paste Base64 and click <strong>Decode from Base64</strong>. Text is handled as UTF-8, so accents, Arabic, Urdu and emoji survive the round trip. Tick <strong>URL-safe Base64</strong> to use <code>-</code> and <code>_</code> instead of <code>+</code> and <code>/</code>, as JWTs and URLs require. You can also drop any file to get it as a Base64 data URL.</p>
      <h2>Example</h2>
      <p>“Hello” → <code>SGVsbG8=</code>. Base64 turns every 3 bytes into 4 characters, so encoded data is about 33% larger. It is an encoding, not encryption: anyone can decode it, and there is no such thing as Base64 “with a key”. Use real encryption for secrets.</p>
      <h2>In code and on the command line</h2>
      <ul>
        <li><strong>Python</strong> — <code>base64.b64encode(s.encode()).decode()</code> and <code>base64.b64decode(b).decode()</code>.</li>
        <li><strong>JavaScript</strong> — <code>btoa()</code> and <code>atob()</code> only handle Latin-1, so encode UTF-8 with <code>TextEncoder</code> first; in Node.js, <code>Buffer.from(s).toString('base64')</code>.</li>
        <li><strong>Java 8+</strong> — <code>Base64.getEncoder().encodeToString(bytes)</code> and <code>Base64.getDecoder().decode(s)</code>.</li>
        <li><strong>PHP</strong> — <code>base64_encode()</code> and <code>base64_decode()</code>.</li>
        <li><strong>Linux and macOS terminal</strong> — <code>base64 file.txt</code> to encode, <code>base64 -d</code> to decode.</li>
        <li><strong>C and C++</strong> — there's no standard function; use a library such as OpenSSL's <code>EVP_EncodeBlock</code>.</li>
        <li><strong>Notepad++</strong> — Plugins → MIME Tools → Base64 Encode / Decode.</li>
      </ul>`,

  'url-encode-decode': `
      <h2>Encode and decode URLs</h2>
      <p>Paste text or a link and choose <strong>Encode (component)</strong> for a single value such as a search term or parameter, <strong>Encode full URL</strong> to keep <code>:/?&amp;=</code> intact, or <strong>Decode</strong> to turn <code>%20</code>-style codes back into text (a <code>+</code> is read as a space too). Paste a full URL and you'll also see its parts — protocol, host, path, query and hash — with every query parameter listed in a table.</p>
      <h2>What is URL encoding?</h2>
      <p>URLs can only contain certain characters, so others are written as % followed by their UTF-8 bytes in hex. Common ones:</p>
      <ul>
        <li>Space: <code>%20</code> (or <code>+</code> in form data).</li>
        <li>Forward slash <code>%2F</code>; ampersand <code>%26</code>; question mark <code>%3F</code>; hash <code>%23</code>.</li>
        <li>Characters beyond ASCII use UTF-8: é = <code>%C3%A9</code>.</li>
      </ul>
      <p>Example: “free online tools &amp; more/?” → <code>free%20online%20tools%20%26%20more%2F%3F</code>. Decoding reverses it.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>JavaScript</strong> — <code>encodeURIComponent()</code> and <code>decodeURIComponent()</code>.</li>
        <li><strong>Python</strong> — <code>urllib.parse.quote()</code> and <code>unquote()</code>.</li>
        <li><strong>Java</strong> — <code>URLEncoder.encode(s, StandardCharsets.UTF_8)</code> (spaces become +).</li>
        <li><strong>PHP</strong> — <code>rawurlencode()</code> (%20) or <code>urlencode()</code> (+).</li>
        <li><strong>C#</strong> — <code>Uri.EscapeDataString()</code> and <code>Uri.UnescapeDataString()</code>.</li>
        <li><strong>Excel</strong> has <code>=ENCODEURL()</code> but no decode function, so paste the text here.</li>
      </ul>
      <p>For SVG data URIs in CSS, use Encode (component) on the SVG code.</p>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'html-entity-encoder': `
      <h2>Encode and decode HTML entities</h2>
      <p>Paste text and click <strong>Encode HTML</strong> to escape the five special characters — <code>&amp;</code> → <code>&amp;amp;</code>, <code>&lt;</code> → <code>&amp;lt;</code>, <code>&gt;</code> → <code>&amp;gt;</code>, <code>"</code> → <code>&amp;quot;</code> and <code>'</code> → <code>&amp;#39;</code> — or <strong>Decode HTML</strong> to turn entities back into plain text. Tick “Also encode non-ASCII characters” to write © or emoji as numeric entities such as <code>&amp;#169;</code>.</p>
      <h2>What are HTML entities?</h2>
      <p>They are codes that display a character the browser would otherwise treat as markup, or one that is hard to type. Some common ones:</p>
      <ul>
        <li>Ampersand <code>&amp;amp;</code> · less than <code>&amp;lt;</code> · greater than <code>&amp;gt;</code></li>
        <li>Single quote <code>&amp;#39;</code> (or <code>&amp;apos;</code>) · double quote <code>&amp;quot;</code></li>
        <li>Non-breaking space <code>&amp;nbsp;</code> · © <code>&amp;copy;</code> · ™ <code>&amp;trade;</code> · → <code>&amp;rarr;</code></li>
      </ul>
      <h2>Why escaping matters</h2>
      <p>If text typed by users is shown on a page without escaping, someone can inject scripts — a cross-site scripting (XSS) attack. Always escape text before inserting it into HTML; the five characters above are the ones that matter. This page is handy for checking output and for preparing snippets, such as showing code in a blog post.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>JavaScript</strong> — set <code>element.textContent</code> instead of <code>innerHTML</code>, or replace the five characters.</li>
        <li><strong>PHP</strong> — <code>htmlspecialchars($s, ENT_QUOTES)</code>; decode with <code>html_entity_decode()</code>.</li>
        <li><strong>C#</strong> — <code>WebUtility.HtmlEncode()</code> and <code>HtmlDecode()</code>.</li>
      </ul>`,

  'uuid-generator': `
      <h2>Version 4 and version 7 UUIDs</h2>
      <p>Choose <strong>v4 (random)</strong> or <strong>v7 (time-ordered)</strong>, how many you need (up to 10,000), and options for <strong>UPPERCASE</strong>, <strong>no hyphens</strong> or <strong>{braces}</strong> (GUID style). Copy them all or download a .txt file. UUIDs are made with your browser's cryptographically secure random generator.</p>
      <h2>Which version?</h2>
      <p>Version 4 contains 122 random bits, so the chance of a duplicate is effectively zero. Version 7 puts a millisecond timestamp first, so new IDs sort in the order they were created, which keeps database indexes fast. Use v7 for primary keys and v4 for everything else. Every UUID has the form 8-4-4-4-12 hex digits, such as <code>f47ac10b-58cc-4372-a567-0e02b2c3d479</code> — the “4” at the start of the third group marks version 4.</p>
      <h2>Minecraft</h2>
      <p>Minecraft Bedrock add-ons need unique v4 UUIDs in every <code>manifest.json</code> — one for the header and one for each module. Generate a few here and paste them in. A Minecraft Java player UUID is different: it comes from the player's account and can't be generated.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>Python</strong> — <code>import uuid; uuid.uuid4()</code>.</li>
        <li><strong>JavaScript and React</strong> — <code>crypto.randomUUID()</code> in modern browsers and Node.js.</li>
        <li><strong>Java</strong> — <code>UUID.randomUUID()</code>.</li>
        <li><strong>PostgreSQL</strong> — <code>gen_random_uuid()</code> (version 13+); <code>uuidv7()</code> arrives in PostgreSQL 18.</li>
        <li><strong>Postman</strong> — the <code>{{$guid}}</code> or <code>{{$randomUUID}}</code> variable.</li>
        <li><strong>Excel</strong> — generate a list here and paste it into a column.</li>
      </ul>`,

  'hash-generator': `
      <h2>MD5, SHA-1, SHA-256 and SHA-512</h2>
      <p>Type or paste text to see its <strong>MD5</strong>, <strong>SHA-1</strong>, <strong>SHA-256</strong>, <strong>SHA-384</strong> and <strong>SHA-512</strong> hashes instantly, or drop a file to get its checksums. Paste an expected hash into “Verify” and a ✓ appears next to the matching algorithm.</p>
      <h2>Examples</h2>
      <p>For the text “hello world”: MD5 = <code>5eb63bbbe01eeed093cb22bb8f5acdc3</code>; SHA-256 = <code>b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9</code>. Change one letter and the hash changes completely. Hashing only works one way — a hash can't be turned back into the original text.</p>
      <h2>Verify a download</h2>
      <p>Drop the file you downloaded, paste the checksum from the publisher's website, and look for the ✓. On Windows you can also run <code>Get-FileHash file.iso</code> in PowerShell, or <code>certutil -hashfile file.iso SHA256</code>.</p>
      <h2>Passwords and keys</h2>
      <p>Plain MD5 or SHA hashes aren't safe for storing passwords — attackers can test billions per second. Real systems use a slow, salted algorithm such as bcrypt or Argon2. To add a salt here, include it in the text yourself. Keyed hashes (HMAC) aren't included.</p>
      <h2>In Python</h2>
      <p><code>hashlib.sha256("text".encode()).hexdigest()</code> gives the same result as this page for the same text.</p>`,

  'jwt-decoder': `
      <h2>Read a JSON Web Token</h2>
      <p>Paste a JWT, with or without “Bearer ”, to see its <strong>header</strong> (algorithm and type), its <strong>payload</strong> (claims), and the issued-at, not-before and expiry times in your local time and UTC. A badge shows whether the token has <strong>expired</strong>.</p>
      <h2>Decoded on your device</h2>
      <p>Tokens can grant access to accounts, so never paste them into sites that upload them. Here the decoding happens in your browser and nothing is sent anywhere.</p>
      <h2>Decoding is not verifying</h2>
      <p>A JWT's header and payload are just Base64URL-encoded JSON, so anyone can read them — never put secrets in a payload. Checking the <em>signature</em> needs the secret or public key. This page decodes but doesn't verify, so always verify signatures in your server code, and sign new tokens there with a library.</p>
      <h2>In code</h2>
      <ul>
        <li><strong>Python</strong> (PyJWT) — <code>jwt.decode(token, options={"verify_signature": False})</code> to inspect; verify in production.</li>
        <li><strong>JavaScript</strong> — the <code>jwt-decode</code> npm package, or <code>JSON.parse(atob(token.split('.')[1]))</code> for simple tokens.</li>
        <li><strong>Java / Spring Boot</strong> — <code>JwtDecoder</code> in Spring Security, or the jjwt library.</li>
        <li><strong>Flutter</strong> — the <code>jwt_decoder</code> package.</li>
        <li><strong>Command line</strong> — <code>cut -d. -f2 | base64 -d</code> (add padding if needed); in PowerShell, split on “.” and Base64-decode the second part.</li>
        <li><strong>Postman</strong> — <code>JSON.parse(atob(token.split('.')[1]))</code> in a test script.</li>
      </ul>
      <p>Every JWT has the form <code>header.payload.signature</code>, whether it comes from Microsoft Entra ID, Auth0 or your own server.</p>`,

  'regex-tester': `
      <h2>Test regular expressions live</h2>
      <p>Type a regular expression and its flags (<code>g</code>, <code>i</code>, <code>m</code>, <code>s</code>, <code>u</code>, <code>y</code>), and every match in your test text is highlighted as you type, with a match count and a table of <strong>capture groups</strong>. Add a replacement (using <code>$1</code> or <code>$&lt;name&gt;</code>) to preview the result. Ready-made patterns for email, URL, phone, date, IPv4, hex colour and numbers get you started. Everything runs in your browser.</p>
      <h2>JavaScript behaviour</h2>
      <p>The tester uses the browser's JavaScript engine, so results match JavaScript exactly — named groups, lookbehind and Unicode property escapes such as <code>\\p{L}</code> all work.</p>
      <h2>Other languages</h2>
      <p>Everyday syntax — character classes, quantifiers, groups, alternation, anchors — works the same in Python, Java, C#/.NET, PowerShell and R. Watch for these differences:</p>
      <ul>
        <li><strong>Python</strong> writes named groups as <code>(?P&lt;name&gt;…)</code>; use <code>(?&lt;name&gt;…)</code> here.</li>
        <li><strong>Java and .NET</strong> support possessive quantifiers and atomic groups, which JavaScript doesn't.</li>
        <li><strong>sed and grep</strong> use POSIX regex, which has no <code>\\d</code> or lookarounds — use <code>[0-9]</code> instead.</li>
      </ul>
      <h2>Useful patterns</h2>
      <ul>
        <li>Whole numbers: <code>^\\d+$</code>; decimals: <code>-?\\d+(\\.\\d+)?</code></li>
        <li>Anything that isn't a letter, digit or space: <code>[^a-zA-Z0-9\\s]</code></li>
      </ul>`,

  'color-picker': `
      <h2>Every colour format at once</h2>
      <p>Pick a colour from the swatch or type one — HEX, RGB, HSL or a CSS name like “teal” — and get <strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, <strong>HSV</strong> and <strong>CMYK</strong>, each with a copy button. You also get 11 <strong>tints and shades</strong> (click to copy) and the <strong>WCAG contrast</strong> ratio with white and black text, marked AA or AAA.</p>
      <h2>Hex to RGB and back</h2>
      <p>Type either format and copy the other. To convert by hand, split the hex code into pairs and convert each from base 16: <code>#4F46E5</code> → 4F = 79, 46 = 70, E5 = 229 → <code>rgb(79, 70, 229)</code>. RGB to hex reverses it. For transparency, add the alpha yourself: <code>rgba(79, 70, 229, 0.5)</code> or the 8-digit hex <code>#4F46E580</code>. CMYK here is a simple conversion — ask your printer for exact print values.</p>
      <h2>For websites and CSS</h2>
      <p>The swatch opens your system's colour wheel; in Chrome and Edge on a computer it includes an eyedropper for picking any colour on your screen. Check contrast before using a colour for text: WCAG AA needs 4.5:1 for normal text and 3:1 for large text.</p>
      <h2>In other apps</h2>
      <ul>
        <li><strong>From a photo</strong> — upload it to the <a href="/image-color-picker">Image Color Picker</a> and click any pixel.</li>
        <li><strong>Photoshop</strong> — press I for the Eyedropper; the hex code is in the Color Picker dialog.</li>
        <li><strong>Canva</strong> — click a colour, then the + tile, and paste a hex code.</li>
        <li><strong>Word</strong> — Font Color → More Colors → Custom shows RGB and Hex.</li>
      </ul>`,

  'color-palette-generator': `
      <h2>Five-colour palettes from colour theory</h2>
      <p>Pick a base colour and a harmony — <strong>analogous</strong>, <strong>complementary</strong>, <strong>split-complementary</strong>, <strong>triadic</strong>, <strong>tetradic</strong>, <strong>monochrome</strong> or <strong>random</strong> — and get a five-colour palette. Click a colour to copy its hex code, 🔒 lock the ones you like, and press <kbd>Space</kbd> for a new random palette. You can copy all codes or a ready-made block of CSS variables.</p>
      <h2>Start from your own colour</h2>
      <p>Set your brand colour or any hex code as the base and switch between harmonies: monochrome gives tints and shades of it, complementary adds its opposite for accents, and analogous gives calm neighbouring colours.</p>
      <h2>Start from a photo</h2>
      <p>Upload the picture to the <a href="/image-color-picker">Image Color Picker</a>, which extracts its main colours, then paste one here as the base to build a matching scheme.</p>
      <h2>Ideas for different projects</h2>
      <ul>
        <li><strong>Brands and websites</strong> — one main colour, one accent and neutrals. Check text contrast with the <a href="/color-picker">Color Picker</a>.</li>
        <li><strong>Rooms</strong> — the classic 60-30-10 rule: 60% main colour, 30% secondary, 10% accent.</li>
        <li><strong>Weddings and invitations</strong> — analogous palettes feel soft and romantic.</li>
        <li><strong>Outfits</strong> — complementary pairs make bold combinations.</li>
        <li><strong>Markers, colouring and game builds</strong> — match each hex code to your closest marker or block colour.</li>
      </ul>`,

  'css-gradient-generator': `
      <h2>Linear, radial and conic gradients</h2>
      <p>Choose <strong>linear</strong> (at any angle), <strong>radial</strong> (circle or ellipse) or <strong>conic</strong>, add as many colour stops as you like and drag their positions, then copy the CSS. The code includes a solid fallback colour for very old browsers. Press 🎲 Random for inspiration.</p>
      <h2>More colours and transparency</h2>
      <ul>
        <li><strong>Three or more colours</strong> — click “+ Add color stop” and place it, for example at 50%.</li>
        <li><strong>Transparency</strong> — the colour pickers are solid, so in the copied code replace a stop with <code>transparent</code> or an <code>rgba()</code> value such as <code>rgba(79, 70, 229, 0.5)</code>.</li>
      </ul>
      <h2>Gradient text</h2>
      <p>Copy the background, then add <code>-webkit-background-clip: text; background-clip: text; color: transparent;</code> to the same element.</p>
      <h2>Tailwind and animation</h2>
      <ul>
        <li><strong>Tailwind CSS</strong> — use <code>bg-linear-to-r from-indigo-600 to-pink-500</code> (v4; <code>bg-gradient-to-r</code> in v3), or paste the exact CSS as an arbitrary value: <code>bg-[linear-gradient(135deg,#4f46e5_0%,#ec4899_100%)]</code>.</li>
        <li><strong>Animated gradients</strong> — set <code>background-size: 200% 200%</code> and animate <code>background-position</code> with <code>@keyframes</code>.</li>
      </ul>
      <h2>Matching an image or existing code</h2>
      <p>To match a picture, pick its colours with the <a href="/image-color-picker">Image Color Picker</a> and enter them as stops. To edit a gradient you already have, copy its colours and angle into the controls.</p>`,

  'box-shadow-generator': `
      <h2>Build a shadow visually</h2>
      <p>Drag the sliders for <strong>horizontal offset</strong>, <strong>vertical offset</strong>, <strong>blur</strong>, <strong>spread</strong> and <strong>opacity</strong>, pick the shadow, box and background colours, and tick <strong>Inset</strong> for an inner shadow. The preview updates live and the CSS is ready to copy.</p>
      <h2>Syntax and examples</h2>
      <p>The syntax is <code>box-shadow: [inset] x y blur spread color;</code>. Some starting points:</p>
      <ul>
        <li>Card: <code>0 4px 12px rgba(0, 0, 0, 0.1)</code></li>
        <li>Button: <code>0 2px 4px rgba(0, 0, 0, 0.2)</code></li>
        <li>Bottom edge only: <code>0 8px 6px -6px rgba(0, 0, 0, 0.3)</code> — the negative spread hides the sides. For the top edge only, use a negative y offset.</li>
        <li>Even glow on all sides: <code>0 0 12px rgba(0, 0, 0, 0.2)</code></li>
        <li>Inner shadow: <code>inset 0 2px 6px rgba(0, 0, 0, 0.25)</code></li>
      </ul>
      <p>For a smoother, more realistic look, combine two or three soft shadows separated by commas. On dark themes shadows barely show, so a lighter border or a soft glow often works better.</p>
      <h2>Tailwind, drop-shadow and React Native</h2>
      <ul>
        <li><strong>Tailwind CSS</strong> — use an arbitrary value: <code>shadow-[0_4px_12px_rgba(0,0,0,0.1)]</code>.</li>
        <li><strong>drop-shadow</strong> — <code>filter: drop-shadow(0 4px 6px rgba(0,0,0,.3))</code> follows the shape of transparent PNGs and SVGs, but has no spread or inset.</li>
        <li><strong>React Native</strong> 0.76+ (New Architecture) accepts the same <code>boxShadow</code> string.</li>
      </ul>
      <h2>Shadow not showing?</h2>
      <p>Check that the parent doesn't have <code>overflow: hidden</code> (it clips shadows), that the colour isn't fully transparent, and that the element actually has a width and height.</p>`,

  'code-minifier': `
      <h2>Minify or beautify code</h2>
      <p>Choose <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>HTML</strong> or <strong>JSON</strong>, paste your code and click <strong>📦 Minify</strong> — or <strong>✨ Beautify</strong> to make minified code readable again. You see the size before and after and the percentage saved. JavaScript uses Terser, the minifier behind most build tools, which also shortens local variable names safely.</p>
      <h2>What minifying does</h2>
      <p>Minifying removes comments, spaces and line breaks — and for JavaScript, renames local variables — so files download faster without changing what they do. A typical stylesheet shrinks by 20–40%, and your server's gzip compression comes on top of that.</p>
      <ul>
        <li><strong>CSS</strong> — strips comments and whitespace and shortens values such as <code>0px</code> to <code>0</code>.</li>
        <li><strong>JavaScript</strong> — compresses and shortens names with Terser.</li>
        <li><strong>HTML</strong> — removes comments and the whitespace between tags.</li>
      </ul>
      <h2>Back to readable code</h2>
      <p>Click Beautify to re-indent minified code so you can read it. Original variable names and comments can't be recovered once they have been removed, so always keep your readable source files.</p>
      <h2>Minifying automatically</h2>
      <ul>
        <li><strong>VS Code</strong> — install a minify extension, or use a build tool such as Vite or esbuild that minifies for you.</li>
        <li><strong>WordPress</strong> — caching plugins such as Autoptimize or LiteSpeed Cache have a minify option.</li>
      </ul>`,

  'unix-timestamp-converter': `
      <h2>Timestamps to dates and back</h2>
      <p>See the current Unix timestamp ticking live (with a copy button), convert a <strong>timestamp to a date</strong>, or pick a <strong>date to get its timestamp</strong>. Results show your local time, <strong>UTC</strong>, ISO 8601, and how long ago or ahead it is.</p>
      <h2>Seconds or milliseconds</h2>
      <p>Paste either — 13-digit <strong>milliseconds</strong> are detected automatically. Example: <code>1767225600</code> = <strong>1 January 2026, 00:00:00 UTC</strong>; in milliseconds, <code>1767225600000</code>. Fun fact: 32-bit systems overflow at <code>2147483647</code> — 19 January 2038, 03:14:07 UTC.</p>
      <h2>Time zones</h2>
      <p>A Unix timestamp has no time zone — it's the number of seconds since 1 January 1970 UTC. The converter shows it in UTC and in your device's own zone. For another zone such as EST (UTC−5, −4 in summer), CST (UTC−6, −5 in summer) or IST (UTC+5:30), take the UTC time and use the <a href="/time-zone-converter">Time Zone Converter</a>.</p>
      <h2>In Excel</h2>
      <p><code>=A1/86400+DATE(1970,1,1)</code>, then format the cell as a date and time. Add <code>+5.5/24</code> for IST or <code>-5/24</code> for EST. For milliseconds, divide by 86,400,000 instead.</p>
      <h2>In Python and Discord</h2>
      <p>In Python: <code>datetime.fromtimestamp(ts, tz=timezone.utc)</code>. For Discord, the <a href="/discord-timestamp-generator">Discord Timestamp Generator</a> writes the <code>&lt;t:1767225600:F&gt;</code> code that shows in each reader's own time.</p>`,

  'markdown-to-html': `
      <h2>Live preview and clean HTML</h2>
      <p>Type or paste Markdown on the left and see the rendered preview and the HTML output as you type. GitHub-flavoured Markdown is supported: headings, bold and italic, links, images, lists, task lists, blockquotes, code blocks and <strong>tables</strong>. Copy the HTML or <strong>download a complete .html file</strong> with simple styling.</p>
      <h2>Tables and code</h2>
      <ul>
        <li>Pipe tables such as <code>| Name | Price |</code> with a <code>|---|---|</code> line become proper <code>&lt;table&gt;</code> markup.</li>
        <li>Fenced code with a language (<code>&#96;&#96;&#96;js</code>) gets a <code>class="language-js"</code>, so you can add Prism or highlight.js for syntax highlighting.</li>
      </ul>
      <h2>Styling and email</h2>
      <p>The downloaded file has basic styles; replace them with your own stylesheet. For email, copy the HTML into your email builder, and keep it simple, as many email clients ignore stylesheets. Mermaid diagrams and LaTeX maths aren't rendered here.</p>
      <h2>In code and on the command line</h2>
      <ul>
        <li><strong>Python</strong> — <code>pip install markdown</code>, then <code>markdown.markdown(text)</code>.</li>
        <li><strong>JavaScript</strong> — the <code>marked</code> library (the same one this page uses): <code>marked.parse(text)</code>.</li>
        <li><strong>VS Code</strong> — Ctrl + Shift + V previews Markdown; extensions such as “Markdown All in One” can export HTML.</li>
        <li><strong>Command line</strong> — <code>pandoc input.md -o output.html</code>.</li>
      </ul>
      <p class="small muted">🔒 Everything runs in your browser — nothing you paste is uploaded.</p>`,

  'csv-to-json': `
      <h2>CSV to JSON and back</h2>
      <p>Paste CSV or open a .csv file to get a JSON array, or switch to <strong>JSON → CSV</strong> to go the other way. The delimiter is detected automatically — comma, semicolon, tab or pipe — and quoted fields containing commas or line breaks are handled correctly. Options: <strong>first row is header</strong> (gives an array of objects) and <strong>detect numbers &amp; booleans</strong> (so <code>22</code> becomes a number, not <code>"22"</code>). Copy or download the result.</p>
      <h2>Example</h2>
      <p><code>name,age</code> / <code>Ayesha,22</code> → <code>[{"name": "Ayesha", "age": 22}]</code>. Values with leading zeros, such as phone numbers starting <code>0300…</code>, are kept as text.</p>
      <h2>From Excel</h2>
      <p>Save the sheet as CSV (File → Save As → CSV), or simply copy the cells — Excel copies them as tab-separated text, which is detected automatically — and paste here.</p>
      <h2>Government filing portals</h2>
      <p>Tax portals such as India's GST and income tax systems need JSON in their own exact format, created by their official offline utilities (for example the GST Returns Offline Tool). Generic JSON from this page won't upload there — use the official tool for filing.</p>
      <h2>In Python</h2>
      <p><code>json.dumps(list(csv.DictReader(open("data.csv"))))</code>, or with pandas, <code>df.to_json(orient="records")</code>. Once this page has loaded, your data never leaves your device.</p>`,

  'number-base-converter': `
      <h2>Binary, decimal, octal and hex together</h2>
      <p>Type a number in any box — <strong>decimal</strong>, <strong>binary</strong>, <strong>octal</strong> or <strong>hexadecimal</strong> — and the others update instantly. A custom box converts to and from any base from 2 to 36. It handles very large and negative numbers, accepts prefixes such as <code>0x</code> and <code>0b</code>, and shows how many bits the number needs. Whole numbers only.</p>
      <h2>Binary to decimal by hand</h2>
      <p>Multiply each digit by its power of 2 and add them up: 1101 = 1×8 + 1×4 + 0×2 + 1×1 = <strong>13</strong>, and 1010 = 8 + 2 = <strong>10</strong>. Four bits cover 0000 = 0 to 1111 = 15.</p>
      <h2>Decimal to binary by hand</h2>
      <p>Divide by 2 repeatedly and read the remainders from bottom to top: 25 → 12 r1 → 6 r0 → 3 r0 → 1 r1 → 0 r1 = <strong>11001</strong>. Likewise, 10 = <strong>1010</strong>.</p>
      <h2>Hexadecimal</h2>
      <p>Hex digits go 0–9, then A–F for 10–15. FF = 15×16 + 15 = <strong>255</strong>, and 255 = FF. Web colours work the same way: rgb(255, 128, 0) → FF, 80, 00 → <code>#FF8000</code>. For comparison, 255 is 377 in octal and 11111111 in binary.</p>
      <h2>In Excel and Python</h2>
      <ul>
        <li><strong>Excel</strong> — <code>=BIN2DEC("1101")</code>, <code>=HEX2DEC("FF")</code>, <code>=DEC2BIN(25)</code> and <code>=DEC2HEX(255)</code>.</li>
        <li><strong>Python</strong> — <code>int("1101", 2)</code>, <code>bin(25)</code> and <code>int("ff", 16)</code>.</li>
      </ul>`,

  'sql-formatter': `
      <h2>Format SQL in any dialect</h2>
      <p>Paste a query and click <strong>✨ Format</strong> to get clean, indented SQL. Choose the dialect — <strong>Standard SQL</strong>, <strong>MySQL</strong>, <strong>MariaDB</strong>, <strong>PostgreSQL</strong>, <strong>SQL Server (T-SQL)</strong>, <strong>Oracle PL/SQL</strong>, <strong>SQLite</strong> or <strong>BigQuery</strong> — the keyword case (UPPERCASE, lowercase or as typed) and 2- or 4-space indents. If the query uses another dialect's syntax, it switches automatically. Click <strong>Minify</strong> to squeeze it onto one line.</p>
      <h2>PostgreSQL and Snowflake</h2>
      <p>Choose PostgreSQL to keep <code>::</code> casts and <code>$1</code> parameters intact. For Snowflake, use Standard SQL, which is very close to its syntax.</p>
      <h2>In your editor</h2>
      <ul>
        <li><strong>SQL Server Management Studio</strong> has no built-in formatter; paste here, or use a paid add-in such as Redgate SQL Prompt.</li>
        <li><strong>VS Code and Cursor</strong> — install a SQL formatting extension, then press Shift + Alt + F.</li>
        <li><strong>DBeaver</strong> — Ctrl + Shift + F formats the current query.</li>
        <li><strong>Notepad++ and Visual Studio</strong> — use a plugin or extension, or paste here and copy the result back.</li>
      </ul>
      <p class="small muted">🔒 Your query stays in your browser — nothing you paste is uploaded, so it's safe for production SQL.</p>`,

  'internet-speed-test': `
      <h2>Download, upload, ping and jitter</h2>
      <p>Press <strong>Start test</strong> to measure your <strong>download</strong> and <strong>upload</strong> speed, <strong>ping</strong> and <strong>jitter</strong> in about 20 seconds. The test runs against Cloudflare's global network, shows your internet provider and approximate location, and ends with a plain-English verdict on what your connection can handle. A full test uses about 50–200 MB of data.</p>
      <h2>What speed do I need?</h2>
      <ul>
        <li><strong>Streaming video</strong> — about 5 Mbps for HD and 15–25 Mbps for 4K, per stream.</li>
        <li><strong>Live streaming on Twitch</strong> — upload matters: 1080p at 60 fps streams at about 6 Mbps, so aim for 8–10 Mbps upload.</li>
        <li><strong>Video calls</strong> such as Zoom — 3–4 Mbps in both directions for HD video.</li>
        <li><strong>Online gaming</strong> — 10–25 Mbps is plenty; a ping under 50 ms and low jitter matter far more than raw speed.</li>
      </ul>
      <h2>Comparing with your provider's test</h2>
      <p>Most providers have their own speed test, but those often measure to the provider's own servers. Testing against an independent network gives a more realistic figure to compare with the speed on your bill. On satellite internet such as Starlink, test at different times of day, as speeds vary with load and weather.</p>
      <h2>For the most accurate result</h2>
      <p>It works in any browser on a phone or computer. Pause downloads and streaming on other devices first, and test over a cable as well as Wi-Fi to see whether Wi-Fi is the bottleneck. On mobile data, remember the test uses data.</p>`,

  'what-is-my-ip': `
      <h2>Your public IP address</h2>
      <p>This page shows your <strong>public IP address</strong> straight away — the address websites see — with a copy button, plus your approximate <strong>location</strong>, <strong>internet provider</strong>, time zone and coordinates. The location is usually the city of your provider's equipment, not your home. We don't store your IP.</p>
      <h2>IPv4 or IPv6</h2>
      <p>If your connection uses IPv6, you'll see a longer address with colons. IPv4 addresses are four numbers, such as 203.0.113.42; if this page shows IPv6, your IPv4 address may be different.</p>
      <h2>Phones, computers and routers</h2>
      <ul>
        <li><strong>On a phone</strong> — open this page on the phone. On Wi-Fi it shows your router's public IP; on mobile data, your carrier's.</li>
        <li><strong>On a computer</strong> — every device on your Wi-Fi shares the same public IP. The <em>local</em> IP (such as 192.168.1.5) is shown by <code>ipconfig</code> on Windows, or in System Settings → Network on a Mac.</li>
        <li><strong>Your router</strong> — its address is the “Default Gateway” in <code>ipconfig</code>, usually 192.168.0.1 or 192.168.1.1.</li>
      </ul>
      <h2>Checking a VPN</h2>
      <p>With a VPN switched on, this page should show the VPN server's address and city instead of yours. If you still see your real location, the VPN isn't working.</p>
      <h2>Hosting a game server</h2>
      <p>For friends outside your home to join a game you host, they connect to your public IP and you forward the game's port on your router:</p>
      <ul>
        <li><strong>Minecraft</strong> — port 25565 (Java) or 19132 UDP (Bedrock).</li>
        <li><strong>Terraria</strong> — port 7777.</li>
        <li><strong>Palworld</strong> dedicated server — port 8211 UDP.</li>
      </ul>
      <p>Friends on the same Wi-Fi should use your local IP instead.</p>`,

  'youtube-thumbnail-downloader': `
      <h2>Every thumbnail size from one link</h2>
      <p>Paste a YouTube link — a normal video, a Short, a live stream, an embed or a youtu.be link — and see the thumbnail in every size: <strong>HD (1280×720)</strong>, <strong>SD (640×480)</strong>, High (480×360), Medium (320×180) and Small (120×90). Click to download any of them as a JPG.</p>
      <h2>From a link or a video ID</h2>
      <p>Paste the full address, or just the 11-character video ID. Behind the scenes, thumbnails are stored at <code>https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg</code>.</p>
      <h2>What's the highest quality?</h2>
      <p>1280×720 is the largest size YouTube stores, so 4K thumbnails don't exist. HD only appears if the creator uploaded an HD thumbnail; otherwise SD is the best available, and sizes that don't exist are hidden.</p>
      <h2>Shorts and live streams</h2>
      <p>They work the same way — paste the Short or live-stream link.</p>
      <h2>On a phone</h2>
      <p>Open this page in your phone's browser, paste the link and tap Download. Android saves the image to Downloads; on iPhone, long-press the image and choose Save to Photos. On a computer, no app or extension is needed.</p>
      <h2>Using thumbnails</h2>
      <p>Downloading for reference is fine, but thumbnails belong to their creators, so ask permission before reusing one. YouTube thumbnails don't include the play button; add it yourself if you need it.</p>`,

  'meta-tag-generator': `
      <h2>SEO, Open Graph and Twitter Card tags</h2>
      <p>Fill in your page title, meta description, URL, share image, site name, X handle and author, choose the content type and search-engine setting, and copy ready-made HTML. You get the SEO tags (title, description, robots, canonical), <strong>Open Graph</strong> tags for Facebook, WhatsApp and LinkedIn, and <strong>Twitter Card</strong> tags — with a live Google search preview, a social share preview and character counters.</p>
      <h2>Title and description</h2>
      <p>The title (50–60 characters) and the meta description (120–160 characters) usually become your headline and snippet on Google. They don't directly raise rankings, but a clear title and description earn more clicks. Google ignores the keywords meta tag, so it's optional here.</p>
      <p>Example description: “Merge, compress and convert PDFs for free in your browser. No sign-up, no watermarks — your files never leave your device.” (122 characters.) Lead with what the page does and why it's useful.</p>
      <h2>Open Graph tags</h2>
      <p>Open Graph tags control the title, description and image shown when your link is shared. This writes <code>og:title</code>, <code>og:description</code>, <code>og:image</code>, <code>og:url</code>, <code>og:type</code>, <code>og:site_name</code> and <code>og:locale</code>. For example: <code>&lt;meta property="og:image" content="https://example.com/og.jpg"&gt;</code> — use an image of 1200 × 630 pixels.</p>
      <h2>Adding the tags to your site</h2>
      <p>Paste the code inside the <code>&lt;head&gt;</code> of each page, with a unique title and description for every page.</p>
      <ul>
        <li><strong>Website builders</strong> — use your platform's SEO settings, or paste into a custom head-code box.</li>
        <li><strong>Blogger</strong> — Theme → Edit HTML, paste inside <code>&lt;head&gt;</code>; also fill in “Search description” in Settings.</li>
        <li><strong>WordPress</strong> — an SEO plugin such as Yoast or Rank Math adds these tags for you.</li>
      </ul>
      <p>The generator doesn't read an existing page, so fill in the fields yourself. YouTube video tags are a different thing and aren't covered here.</p>`,

  'utm-builder': `
      <h2>Build tagged campaign links</h2>
      <p>Enter your website URL and the campaign details — <strong>source</strong>, <strong>medium</strong> and <strong>campaign name</strong>, plus optional term, content and ID — and copy a tagged link. One-click presets fill in Facebook, Instagram, WhatsApp, LinkedIn, Email, Google Ads and YouTube. Spaces become underscores, and an option makes everything lowercase so “Facebook” and “facebook” don't split your reports.</p>
      <h2>What the parameters mean</h2>
      <p>UTM parameters are labels added to a link so Google Analytics knows where a visitor came from:</p>
      <ul>
        <li><code>utm_source</code> — who sent the traffic (facebook, newsletter, google).</li>
        <li><code>utm_medium</code> — the type of traffic (social, email, cpc).</li>
        <li><code>utm_campaign</code> — your campaign name (summer_sale).</li>
        <li><code>utm_term</code>, <code>utm_content</code>, <code>utm_id</code> — keyword, ad variation and campaign ID.</li>
      </ul>
      <p>Example: <code>https://example.com/landing-page?utm_source=facebook&amp;utm_medium=social&amp;utm_campaign=summer_sale</code>.</p>
      <h2>Good practice</h2>
      <p>Choose one naming style and stick to it, keep everything lowercase, and never put UTM tags on links within your own site — they restart the visit and muddle your reports. UTM tags are free to use.</p>
      <h2>Where to see the results</h2>
      <ul>
        <li><strong>GA4</strong> — Reports → Acquisition → Traffic acquisition (session source / medium and campaign).</li>
        <li><strong>Google Ads</strong> — auto-tagging already tracks clicks; use UTMs for other platforms.</li>
        <li><strong>Meta ads</strong> — use source facebook or instagram, and medium paid_social.</li>
        <li><strong>LinkedIn</strong> posts and ads, and <strong>Instagram</strong> bio links, work the same way.</li>
      </ul>
      <h2>In a spreadsheet</h2>
      <p><code>=A2&amp;"?utm_source="&amp;B2&amp;"&amp;utm_medium="&amp;C2&amp;"&amp;utm_campaign="&amp;D2</code> builds the same link from columns.</p>`,

  'robots-txt-generator': `
      <h2>Build a robots.txt file</h2>
      <p>Choose whether robots may crawl everything or nothing, list paths to block (one per line) and paths to always allow, add an optional crawl delay and your sitemap URL, and tick <strong>Block AI training crawlers</strong> to add rules for GPTBot, ClaudeBot, CCBot, Google-Extended and other AI bots. Copy the result or download it as a ready <strong>robots.txt</strong> file.</p>
      <h2>What is robots.txt?</h2>
      <p>It is a plain text file at the root of your site that tells crawlers which pages they may visit. Before crawling, a bot reads <code>yoursite.com/robots.txt</code> and follows the rules for its user-agent. It must sit at the root of the domain; it won't work in a sub-folder.</p>
      <h2>Example</h2>
      <pre class="out-box">User-agent: *
Disallow: /admin/
Allow: /admin/help/

Sitemap: https://example.com/sitemap.xml</pre>
      <p><code>Disallow: /</code> blocks the whole site, and an empty <code>Disallow:</code> allows everything. Google ignores Crawl-delay; Bing respects it.</p>
      <h2>AI crawlers</h2>
      <p>The AI option adds a <code>Disallow: /</code> group for each AI crawler. Be aware that it also blocks AI search bots such as OAI-SearchBot and PerplexityBot, so your pages may stop appearing in AI answers — remove those lines if you want that traffic.</p>
      <h2>Blogger, WordPress and Cloudflare</h2>
      <ul>
        <li><strong>Blogger</strong> — Settings → Crawlers and indexing → turn on “Enable custom robots.txt”, then paste. Keep <code>Disallow: /search</code> so label pages aren't indexed.</li>
        <li><strong>WordPress</strong> serves a virtual file; edit it with your SEO plugin's file editor, or upload a real file to the site root.</li>
        <li><strong>Cloudflare</strong> can add AI-bot rules to your robots.txt automatically; check the result after turning it on.</li>
      </ul>
      <h2>Do you need one?</h2>
      <p>Not strictly — without one, everything may be crawled — but it's good practice for the sitemap line. It isn't security or a legal barrier: it's a request that well-behaved bots follow. To keep a page out of Google, use a <code>noindex</code> tag instead. Never block CSS, JavaScript or pages you want to rank, and check your file with Search Console's robots.txt report.</p>`,

  'slug-generator': `
      <h2>Clean URL slugs from titles</h2>
      <p>Paste one title per line to get clean, SEO-friendly slugs instantly — lowercase words joined by <strong>hyphens</strong> (or underscores), with accents removed (“Café” → “cafe”), “&amp;” turned into “and” and punctuation stripped. Options let you <strong>remove stop words</strong> (a, the, of…) and set a <strong>maximum length</strong> that cuts at a whole word. Several titles can be converted at once.</p>
      <h2>Example</h2>
      <p>“10 Best Free Online Tools for Students in 2026!” → <code>10-best-free-online-tools-for-students-in-2026</code>; with stop words removed, <code>10-best-free-online-tools-students-2026</code>.</p>
      <h2>What is a slug?</h2>
      <p>The slug is the readable last part of an address that identifies a page: in <code>example.com/blog/merge-pdf-files</code>, it's <code>merge-pdf-files</code>. The path is everything after the domain (<code>/blog/merge-pdf-files</code>); the slug is just the page's own part.</p>
      <h2>Good practice</h2>
      <ul>
        <li>Lowercase, with words separated by hyphens — Google recommends hyphens over underscores.</li>
        <li>Short and descriptive; 3–6 words is plenty.</li>
        <li>Leave dates out of evergreen content so the URL never looks out of date.</li>
        <li>Don't change a published slug without a 301 redirect.</li>
      </ul>
      <h2>WordPress, Shopify and Wix</h2>
      <ul>
        <li><strong>WordPress</strong> — edit the “URL” or “Permalink” field in the post sidebar, and set Settings → Permalinks to “Post name”.</li>
        <li><strong>Shopify</strong> — on the product or page, edit “Search engine listing” → URL handle, and tick the redirect box.</li>
        <li><strong>Wix</strong> — open the page's SEO settings and edit the URL slug.</li>
      </ul>
      <h2>In code</h2>
      <ul>
        <li><strong>Python</strong> — the <code>python-slugify</code> package; in Django, <code>django.utils.text.slugify()</code>.</li>
        <li><strong>JavaScript</strong> — the <code>slugify</code> npm package.</li>
        <li><strong>PHP / Laravel</strong> — <code>Str::slug($title)</code>.</li>
      </ul>`,

  'screen-resolution': `
      <h2>Your screen at a glance</h2>
      <p>This page shows your <strong>screen resolution</strong> instantly — plus the physical pixels behind any display scaling, your browser window (viewport) size, the available screen area, device pixel ratio, colour depth, orientation and <strong>aspect ratio</strong>. It works on any phone, tablet or computer and updates as you resize the window.</p>
      <h2>Pixels, inches and aspect ratio</h2>
      <p>The main number is in pixels, such as 1920 × 1080. On a scaled display — Windows at 150%, or any Retina screen — the page also shows the real physical pixels. Screen <em>size</em> is different: it's the diagonal in inches. Pixels per inch = diagonal pixels ÷ diagonal inches, so a 15.6" Full HD laptop is about 141 PPI. 1920 × 1080 is a 16:9 aspect ratio; 2560 × 1600 is 16:10.</p>
      <h2>Common resolutions</h2>
      <ul>
        <li><strong>4K</strong> — 3840 × 2160. <strong>2K</strong> usually means 2560 × 1440 (QHD) on monitors; the cinema standard is 2048 × 1080.</li>
        <li><strong>Most laptops</strong> — 1920 × 1080; premium models go higher.</li>
        <li><strong>Steam Deck</strong> — 1280 × 800 (LCD and OLED).</li>
        <li><strong>MacBook Air</strong> — 13-inch (M2 and later) 2560 × 1664; 15-inch 2880 × 1864.</li>
        <li><strong>MacBook Pro</strong> — 14-inch 3024 × 1964; 16-inch 3456 × 2234.</li>
        <li><strong>iPhone</strong> — 15 Pro 2556 × 1179; 15 Pro Max 2796 × 1290; 16 Pro Max and 17 Pro Max 2868 × 1320.</li>
      </ul>
      <h2>Finding it in your settings</h2>
      <ul>
        <li><strong>Windows 10 and 11</strong> — Settings → System → Display → Display resolution.</li>
        <li><strong>Mac</strong> — System Settings → Displays (hover over a size to see its resolution).</li>
        <li><strong>Android</strong> — many phones show it in Settings → Display → Screen resolution.</li>
      </ul>`,

  'browser-info': `
      <h2>Everything about your browser on one page</h2>
      <p>This page detects your <strong>browser and version</strong>, your operating system (including Windows 10 vs 11, Android and iOS versions), whether you're on a phone or a computer, and your language, time zone, CPU cores, memory, graphics card and screen size. It also checks whether cookies, a touch screen and Do Not Track are enabled, and shows your full user agent with a copy button — handy when a support team asks what you are using.</p>
      <h2>On a phone or tablet</h2>
      <p>Open this page in the app you normally browse with, and the answer is shown at the top. On an iPhone or iPad it is usually Safari, unless you installed Chrome or another browser and opened the page there.</p>
      <h2>Default browsers by device</h2>
      <ul>
        <li>iPhone, iPad and Mac — Safari.</li>
        <li>Windows — Microsoft Edge.</li>
        <li>Most Android phones — Chrome. Samsung phones also include Samsung Internet.</li>
        <li>Games consoles such as the PS5 and TV platforms such as Roku have no official general-purpose web browser.</li>
      </ul>
      <h2>Window size, cache and settings</h2>
      <ul>
        <li>Your browser window's size is on the <a href="/screen-resolution">Screen Resolution</a> page.</li>
        <li>The cache stores copies of websites so they load faster. To clear it in Chrome, Edge or Firefox, press Ctrl + Shift + Delete.</li>
        <li>Browser settings are in the menu (⋮ or ⋯) → Settings; this page shows the key ones, such as cookies and language.</li>
      </ul>`,

  'dead-pixel-test': `
      <h2>Full-screen colour test</h2>
      <p>Press <strong>Start full-screen test</strong> and your screen fills with one colour at a time: black, white, red, green, blue, grey, cyan, magenta and yellow. Click or press → for the next colour, ← to go back and Esc to exit. Look closely for dots that don't match.</p>
      <h2>Dead, stuck or hot?</h2>
      <ul>
        <li><strong>Dead pixel</strong> — always black; easiest to see on the white screen.</li>
        <li><strong>Stuck pixel</strong> — always one colour (red, green or blue); look on black and the other colours.</li>
        <li><strong>Hot pixel</strong> — always white; shows up on black.</li>
      </ul>
      <p>Clean your screen first so dust isn't mistaken for a faulty pixel.</p>
      <h2>Can it be fixed?</h2>
      <p>Stuck pixels can sometimes be revived by rapidly flashing colours over them for a few minutes, or by gently massaging the spot through a soft cloth with the screen off. Truly dead pixels usually can't be fixed — check your warranty, as many brands replace screens with a certain number of bad pixels.</p>
      <h2>Monitors, laptops and TVs</h2>
      <p>Test a new display within its return window. On a TV, open this page in the TV's browser or connect a laptop by HDMI.</p>
      <h2>Phones and tablets</h2>
      <p>It works on Android phones and tablets and on iPad. On iPhone, Safari doesn't allow true full screen, so the colour fills the browser window — scroll to hide the bars and check the edges separately.</p>
      <h2>OLED burn-in and cameras</h2>
      <p>On OLED screens, the grey screen also reveals burn-in — faint ghost images of keyboards or status bars. Camera sensors are tested differently: take a photo with the lens cap on and look for bright dots.</p>`,

  'cps-test': `
      <h2>Clicks per second</h2>
      <p>Choose a time — <strong>1, 5, 10, 30 or 60 seconds</strong> — then click the big box as fast as you can. The timer starts with your first click, and you'll see your live clicks, time left and CPS, then a final score with a rank from “Warming up” to “Lightning fast”. Your best score for each duration is saved on this device.</p>
      <h2>Right-clicks, phones and short bursts</h2>
      <ul>
        <li><strong>Right-clicks</strong> count too, and the context menu is blocked inside the box so it doesn't get in the way.</li>
        <li><strong>On a phone</strong>, tap with one or two fingers.</li>
        <li>The <strong>1-second test</strong> measures a burst; longer tests show your real stamina.</li>
      </ul>
      <h2>Keyboard and controllers</h2>
      <p>To test how fast you can press the spacebar or another key, use the <a href="/spacebar-counter">Spacebar Counter</a>. Game controllers can't be tested here — use the <a href="/gamepad-tester">Gamepad Tester</a> to check their buttons.</p>
      <h2>Minecraft and PvP practice</h2>
      <p>Most players click 6–8 CPS normally. Jitter clicking (tensing your arm) reaches 10–14, butterfly clicking (two fingers alternating) 15–20, and drag clicking even more — though some servers limit high CPS.</p>
      <p>If single clicks sometimes count twice, your mouse switch may be failing — check it with the <a href="/mouse-double-click-test">Mouse Double Click Test</a>.</p>`,

  'white-screen': `
      <h2>A plain white screen, full screen</h2>
      <p>Click the preview to fill your whole screen with pure white. You can also choose black, warm white, red, green, blue, yellow, orange, pink, purple, grey, cyan or any custom colour; in full screen, use ← → to switch. Click or press Esc to exit. Turn your screen brightness up for the brightest result.</p>
      <h2>As a light</h2>
      <ul>
        <li><strong>Video calls</strong> — a second monitor or tablet showing white makes a soft fill light (warm white is flattering).</li>
        <li><strong>Photos</strong> — a simple light source for product photos and make-up.</li>
        <li><strong>In a pinch</strong> — a phone or laptop at full brightness lights up a dark room.</li>
      </ul>
      <h2>Tracing, cleaning and testing</h2>
      <ul>
        <li><strong>Tracing</strong> — put paper over a tablet showing white and use it like a lightbox.</li>
        <li><strong>Cleaning</strong> — white shows dust and specks on the glass clearly (black shows smudges better).</li>
        <li><strong>Testing a screen</strong> — look for uneven brightness, a colour tint or dead pixels; for a full colour cycle, try the <a href="/dead-pixel-test">Dead Pixel Test</a>.</li>
      </ul>
      <h2>Projectors and devices</h2>
      <p>On a projector, a white screen helps you focus the image and check its brightness and colour — handy for outdoor movie nights. It works in the browser on iPhone, Android and Windows, with no app.</p>
      <h2>White backgrounds for edits</h2>
      <p>Need a plain white image or video clip? Go full screen and take a screenshot, or record the screen.</p>`,

  'black-screen': `
      <h2>A plain black screen, full screen</h2>
      <p>Click the preview to fill your whole screen with pure black. You can also pick white, warm white, red, green, blue or any custom colour, or press ← → in full screen to switch. Click or press Esc to exit. It works on any device without an app.</p>
      <h2>Everyday uses</h2>
      <ul>
        <li><strong>OLED screens</strong> — black pixels are switched off, so it rests the panel and saves battery while keeping the device awake.</li>
        <li><strong>At night</strong> — a dark screen when a tab must stay open, such as music or white noise.</li>
        <li><strong>Projectors</strong> — blank the projection between slides or talks without switching it off.</li>
      </ul>
      <h2>Cleaning and backlight bleed</h2>
      <p>Black makes fingerprints and streaks on the glass easy to see. In a dark room it also reveals backlight bleed — light leaking at the edges of LCD screens.</p>
      <h2>Video edits and stories</h2>
      <p>Need a black frame for a video intro or a social media story? Go full screen and take a screenshot for an image, or screen-record it for a video clip.</p>
      <h2>On phones and laptops</h2>
      <p>It works on Windows, Mac, Android and iPhone. On iPhone, Safari doesn't allow true full screen, so the black fills the browser window instead.</p>
      <h2>Is your screen going black by itself?</h2>
      <p>This page can't fix that. On Windows, press Win + Ctrl + Shift + B to restart the graphics driver. On an iPhone, force-restart it: press volume up, then volume down, then hold the side button.</p>`,

  'spacebar-counter': `
      <h2>How fast can you press space?</h2>
      <p>Pick a time — <strong>5, 10, 30 or 60 seconds</strong>, or <strong>No limit</strong> — and press the spacebar as fast as you can. The count, time left and presses per second update live, and your best score for each time is saved. Holding the key down doesn't count, so every press is real. On a phone, tap the box.</p>
      <h2>Short sprints and longer tests</h2>
      <p>The result is presses per second, like clicks per second for a mouse. The 5-second test is a sprint, and 10 seconds is the classic challenge. A 1-second test would be too short to be fair, so 5 seconds is the minimum here.</p>
      <h2>How fast is fast?</h2>
      <p>Most people manage 5–7 presses per second; 8 or more is fast, and 10 or more is excellent. Alternating two fingers or both thumbs is quicker than using one. Online “world records” vary by site and rules, so aim to beat your own best first.</p>
      <h2>Counting without a timer</h2>
      <p><strong>No limit</strong> mode turns it into a simple counter for anything. To test a mouse instead, use the <a href="/cps-test">CPS Test</a>.</p>`,

  'qr-code-scanner': `
      <h2>Scan with your camera or an image</h2>
      <p>Click <strong>Scan with camera</strong> and point your camera at a QR code — it's read instantly with a beep. No camera handy? Drop a screenshot or photo, choose a file, or paste an image with Ctrl + V. You can copy the result, open links (with a reminder to check them first, as QR codes can lead to scam sites), and see the network name in Wi-Fi codes. A history lists everything you scanned in this session, and decoding happens on your device.</p>
      <h2>QR codes on your screen</h2>
      <p>Reading from an image is ideal when the code is already on your screen — in an email, a PDF or a website — where you can't point a camera at it. Take a screenshot (Win + Shift + S on Windows, Cmd + Shift + 4 on a Mac) and paste it here.</p>
      <h2>On a computer</h2>
      <p>Use a screenshot as above, or hold a printed code up to your webcam. It works in Safari, Chrome and Edge.</p>
      <h2>On a phone</h2>
      <p>Open this page and allow the camera; it uses the rear camera. iPhone's Camera app and Android's camera or Google Lens can also read QR codes — this page is handy when they aren't available, or for scanning images.</p>
      <p>It reads QR codes, not ordinary barcodes. To make your own code, use the <a href="/qr-code-generator">QR Code Generator</a>.</p>`,

  'barcode-generator': `
      <h2>Make a barcode in seconds</h2>
      <p>Choose a type — <strong>Code 128</strong>, <strong>EAN-13</strong>, <strong>EAN-8</strong>, <strong>UPC-A</strong>, <strong>Code 39</strong>, <strong>ITF-14</strong>, Codabar, MSI or Pharmacode — enter the value, and adjust the bar width, height, colour and whether the number shows underneath. The barcode updates as you type and warns you if the value isn't valid for that type. Download a high-resolution <strong>PNG</strong>, or an <strong>SVG</strong> that stays sharp at any print size. No watermark, no sign-up.</p>
      <h2>Which barcode should I use?</h2>
      <ul>
        <li><strong>Code 128</strong> holds any letters and numbers compactly — the best choice for inventory, asset tags and shipping labels.</li>
        <li><strong>EAN-13</strong> (worldwide) or <strong>UPC-A</strong> (USA and Canada) for products sold in shops. Real retail numbers must come from GS1; made-up numbers won't be accepted by stores or Amazon.</li>
        <li>A book's ISBN-13 is an EAN-13: enter the 13 digits without hyphens.</li>
        <li>ITF-14 for outer cartons; Code 39 only for older systems that require it.</li>
      </ul>
      <h2>In Excel and Word</h2>
      <p>Download each barcode as PNG or SVG and use Insert → Pictures. For hundreds of codes, a barcode font or label software is faster, but for a few labels this saves installing anything.</p>
      <h2>Point-of-sale systems, links and passwords</h2>
      <ul>
        <li>For a POS system such as Square, use the same value you enter as the item's SKU or barcode, so the scanner finds it.</li>
        <li>For website links, phones scan QR codes far more easily — use the <a href="/qr-code-generator">QR Code Generator</a>.</li>
        <li>Don't put usernames or passwords in a barcode: anyone with a scanner can read it.</li>
      </ul>`,

  'password-strength-checker': `
      <h2>How long would it take to crack?</h2>
      <p>Type a password to see its strength, its estimated entropy in bits, and how long it would take to crack — both in a <strong>fast offline attack</strong> (10 billion guesses per second, as with stolen password databases) and an <strong>online attack</strong> (100 guesses per second against a login page). A checklist shows what's missing (12+ characters, uppercase, lowercase, numbers, symbols), and warnings flag common passwords, repeated characters, sequences such as “123” or “qwerty”, and years.</p>
      <h2>Is it safe to type my password here?</h2>
      <p>The check runs entirely in your browser — the password is never sent anywhere or stored. Even so, it's good practice to test a similar password rather than your real one.</p>
      <h2>What makes a password strong</h2>
      <p>Every extra character multiplies the number of guesses an attacker needs, so length beats complexity: a four-word passphrase such as “maple-orbit-candle-river” is far stronger than “P@ss1”. Avoid names, dates and common words with a number on the end — attackers try those first. Use a different password for every site, and a password manager to remember them. To create one, use the <a href="/password-generator">Password Generator</a>, then check it here.</p>
      <h2>Building your own checker</h2>
      <p>A password strength checker is a classic cyber-security student project. The logic this page uses is a good starting point: count the character types, estimate entropy as length × log₂(pool size), then subtract for common passwords, repeats and sequences.</p>
      <ul>
        <li><strong>Python</strong> — regular expressions for each character class and <code>math.log2</code>; the <code>zxcvbn</code> package gives realistic estimates.</li>
        <li><strong>JavaScript</strong> — the zxcvbn library works in the browser; update a meter on every input event.</li>
        <li><strong>Java or C</strong> — the same rules with <code>Character.isUpperCase()</code> or <code>isupper()</code> loops.</li>
      </ul>`,

  'spin-the-wheel': `
      <h2>A random picker you can watch</h2>
      <p>Type your entries, one per line, and click the wheel or <strong>Spin</strong>. It spins for about five seconds with a ticking sound and lands on a random winner. Tick the option to remove the winner after each spin for draws with several prizes. Shuffle or sort the list in one click; your entries are saved for next time, and a history lists every winner.</p>
      <h2>Picking names</h2>
      <p>Ideal for choosing who goes first, picking a student to answer, assigning chores or drawing Secret Santa pairs.</p>
      <h2>Giveaways</h2>
      <p>For an Instagram giveaway, paste the usernames of everyone who entered, then screen-record the spin so followers can see the draw was fair.</p>
      <h2>More ideas</h2>
      <ul>
        <li><strong>Yes or no</strong> — enter “Yes” and “No” (add “Maybe” for fun).</li>
        <li><strong>Numbers</strong> — enter 1 to 10; for large ranges, the <a href="/random-number-generator">Random Number Generator</a> is quicker.</li>
        <li><strong>Colours</strong> — type colour names for art prompts or games.</li>
        <li><strong>Dinner</strong> — list restaurants or recipes and let the wheel end the debate.</li>
        <li><strong>Game challenges</strong> — drop spots, loadout rules or characters to try in Fortnite, Roblox and other games.</li>
        <li><strong>The classroom</strong> — topics, questions or rewards.</li>
      </ul>
      <p class="small muted">Results use your browser's cryptographically secure random generator, so every outcome is equally likely.</p>`,

  'coin-flip': `
      <h2>Heads or tails, instantly</h2>
      <p>Click the coin or <strong>Flip coin</strong> to toss it with a 3D spin. You'll see <strong>Heads!</strong> or <strong>Tails!</strong>, a running count with percentages, and your last 40 results. <strong>Flip 10 times</strong> tosses ten at once.</p>
      <h2>Let the coin decide</h2>
      <p>Stuck between two options — which film to watch, where to eat, yes or no? Agree what heads and tails mean before you flip, then let chance decide. For two people choosing who goes first or who pays, decide who is heads first.</p>
      <h2>Best of three, or a hundred flips</h2>
      <ul>
        <li><strong>Best of three</strong> settles arguments fairly, and the counter keeps score.</li>
        <li>Press “Flip 10 times” ten times for <strong>100 flips</strong> and watch the percentages settle near 50/50 — the law of large numbers in action.</li>
      </ul>
      <p class="small muted">Results use your browser's cryptographically secure random generator, so every outcome is equally likely.</p>`,

  'dice-roller': `
      <h2>Roll D4 to D100</h2>
      <p>Choose how many dice to roll (1 to 10) and the type — <strong>D4</strong>, <strong>D6</strong>, <strong>D8</strong>, <strong>D10</strong>, <strong>D12</strong>, <strong>D20</strong> or <strong>D100</strong> — and press <strong>Roll</strong>. Six-sided dice show real pips, and you get the total plus a history of recent rolls, such as “2d6: 4+3=7”.</p>
      <h2>Dungeons &amp; Dragons</h2>
      <ul>
        <li><strong>D20</strong> — attack rolls, saving throws and ability checks. For advantage, roll two D20s and keep the higher.</li>
        <li><strong>Character stats</strong> — roll four D6, drop the lowest, and repeat six times.</li>
        <li><strong>D100</strong> — percentile rolls for loot tables and wild magic.</li>
        <li><strong>Damage</strong> — 2d6 for a greatsword, 8d6 for a fireball.</li>
      </ul>
      <h2>Board games and wargames</h2>
      <ul>
        <li>One D6 for most board games; two D6 for Monopoly, where matching numbers are doubles.</li>
        <li>Warhammer 40,000 uses lots of D6 — roll up to 10 at once and count the hits.</li>
      </ul>
      <h2>Games at home and online</h2>
      <p>For children, adding up the dice makes an easy maths game. For an online game night, roll here and share your screen. You can also use it for decisions — number six dinner ideas and roll a D6.</p>
      <p class="small muted">Results use your browser's cryptographically secure random generator, so every outcome is equally likely.</p>`,

  'signature-generator': `
      <h2>Draw or type your signature</h2>
      <p>Choose <strong>✍️ Draw</strong> to sign with a mouse, finger or stylus, or <strong>⌨️ Type</strong> to write your name in nine handwriting-style fonts. Pick black, blue or red ink and the pen size, then <strong>download a transparent PNG</strong> (or tick white background), or copy the image to paste straight into a document. Your signature never leaves your device.</p>
      <h2>A signature from your name</h2>
      <p>Type your name and click the style you like. The script fonts — Great Vibes, Allura, Alex Brush, Pinyon Script and more — give a cursive look in seconds. For a truly handwritten result, use Draw mode on a phone or tablet with your finger.</p>
      <h2>For PDFs, Word and other documents</h2>
      <ul>
        <li><strong>PDF</strong> — download the PNG, then place it on your document with <a href="/sign-pdf">Sign PDF</a>.</li>
        <li><strong>Word</strong> — Insert → Pictures, then set Wrap Text to “In Front of Text” to position it over the line.</li>
        <li><strong>Forms and letters</strong> — the transparent background sits neatly on any page.</li>
      </ul>
      <h2>Email signatures</h2>
      <p>Add the PNG as an image in your email signature settings; in Outlook, search Settings for “Signatures”.</p>
      <h2>Copy and paste</h2>
      <p>Click “Copy image” and paste with Ctrl + V into Word, Google Docs, an email or a chat. For contracts that need a verified identity, use a certified e-signature service.</p>`,

  'invoice-generator': `
      <h2>Create a professional invoice</h2>
      <p>Fill in your business details and your client's, the invoice number, date and due date, then add line items with quantity and rate. Set any currency, a discount %, tax %, shipping and notes, add your <strong>logo</strong> and pick an accent colour. The preview updates as you type, and <strong>Download PDF</strong> saves a clean A4 invoice (choose “Save as PDF” in the print window). Everything is saved in your browser, and <strong>New invoice</strong> keeps your details and moves on to the next invoice number. No watermark and no sign-up.</p>
      <h2>What an invoice should include</h2>
      <p>Your name and contact details, the client's details, a unique invoice number, the issue and due dates, the itemised services or products, subtotal, discount, tax, total, and payment instructions in the notes (bank details or a payment link). This template includes all of them.</p>
      <h2>Tips for different kinds of work</h2>
      <ul>
        <li><strong>Freelancers</strong> — list hours or projects as items, and put payment terms such as “Net 14” in the notes.</li>
        <li><strong>Contractors</strong> — separate labour and materials into their own lines.</li>
        <li><strong>Small businesses</strong> — add your logo and tax number for a professional look.</li>
        <li><strong>Content creators</strong> — invoice brands for posts, reels and usage rights.</li>
        <li><strong>Travel agencies and hotels</strong> — itemise rooms, nights, tickets and services.</li>
      </ul>
      <h2>Compared with accounting apps</h2>
      <p>Full accounting software tracks payments and clients but needs an account. For simple invoicing, this works in any browser on a computer or phone. Your data stays on your device, so download each PDF to keep your records.</p>`,

  'todo-list': `
      <h2>A simple list that saves itself</h2>
      <p>Type a task and press Enter to add it. Tick tasks off as you finish them, click any task to edit it, and delete with ✕. Filter by <strong>All</strong>, <strong>Active</strong> or <strong>Completed</strong>, and clear finished tasks in one click. A counter shows how many are left. Your list is saved automatically in this browser, so it's there when you come back — no account needed.</p>
      <h2>Planning your day</h2>
      <p>A daily list works best when it's short: choose three must-do tasks, then add smaller ones. Start with the hardest task while your energy is highest, and break big jobs into steps you can finish in under an hour.</p>
      <h2>If you have ADHD</h2>
      <p>Keep the list visible and small. Write tasks as actions (“email Sara about rent”, not “rent”), tick off even tiny wins, and pair it with the <a href="/pomodoro-timer">Pomodoro Timer</a> to get started. Clearing completed tasks stops the list feeling overwhelming.</p>
      <h2>Students and children</h2>
      <ul>
        <li><strong>Students</strong> — homework, revision topics and deadlines, earliest due first.</li>
        <li><strong>School</strong> — one task per subject, ticked off after each study session.</li>
        <li><strong>Children</strong> — morning routines and chores; ticking boxes is motivating.</li>
      </ul>
      <h2>Writing good tasks</h2>
      <p>Put one action per line, start with a verb, and add a deadline if there is one — “Pay electricity bill by Friday” rather than a vague goal. If you prefer a spreadsheet, three columns are enough: Task, Due date and Done.</p>
      <p>Lists are stored per browser and device, so use the same browser each time.</p>`,

  'tally-counter': `
      <h2>Count anything with a tap</h2>
      <p>Tap the big <strong>+</strong> button to count, <strong>−</strong> to undo and <strong>↺</strong> to reset. On a keyboard, press <kbd>Space</kbd> or <kbd>↑</kbd> to count up and <kbd>↓</kbd> to count down. Name your counter, set a step size (count by 2s, 5s or 10s) and switch on a click sound. Everything is saved automatically, so your count survives a refresh.</p>
      <h2>Several counters at once</h2>
      <p>Click <strong>+ Add counter</strong> to track several things side by side, each with its own name and +/− buttons, plus a grand total — cars and bikes in a traffic count, items by type in a stock take, or scores, laps and reps for two or three people.</p>
      <h2>Prayer and dhikr</h2>
      <p>It works for tasbih and dhikr (33 or 99 counts), rosary prayers, and naam jap with 108 repetitions for a mala. Turn on the click sound so you can count without looking.</p>
      <h2>Other uses</h2>
      <ul>
        <li>People at an event door, laps on a track, stitches and rows in knitting, birds or plants in a survey.</li>
        <li>Inventory — count by 6s or 12s with the step setting.</li>
      </ul>
      <p>A metal hand clicker or finger-ring counter works without a screen; this page is a free alternative on your phone, with multiple counters and a saved total.</p>`,
};

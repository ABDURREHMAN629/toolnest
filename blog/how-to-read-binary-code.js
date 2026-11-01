module.exports = {
  title: 'How to Read Binary Code: Numbers, Letters and a Full A–Z Chart',
  desc: 'Learn to read binary in minutes — how place values work, how to turn binary into numbers and letters, a full A–Z binary alphabet chart, and how to translate text both ways.',
  date: '2026-11-01',
  tools: ['binary-translator', 'number-base-converter', 'morse-code-translator'],
  faq: [
    ['What does 01001000 01101001 mean?', 'It spells "Hi". 01001000 is 72, the code for capital H, and 01101001 is 105, the code for lowercase i.'],
    ['Why are letters 8 digits long in binary?', 'Each letter is stored in one byte, which is 8 bits. A byte can hold 256 different values (0–255), which is enough for every English letter, digit and punctuation mark in ASCII.'],
    ['How do you write your name in binary?', 'Look up each letter in the binary alphabet chart (capital and lowercase letters have different codes) and write the 8-bit codes in order, with a space between letters. Or type your name into the binary translator and copy the result.'],
    ['Is binary read left to right?', 'Yes, you write and read the digits left to right, but the place values grow from right to left: the rightmost digit is worth 1, then 2, 4, 8 and so on.'],
    ['What is 1010 in binary?', '1010 in binary is 10 in decimal: 8 + 0 + 2 + 0.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> binary uses only 0 and 1. Each position is worth double the one to its right — <strong>128, 64, 32, 16, 8, 4, 2, 1</strong> for an 8-digit byte. Add up the values where there's a 1: <code>01000001</code> = 64 + 1 = 65, which is the letter <strong>A</strong>. Every letter, number and symbol has its own 8-bit code.</p></blockquote>

<p>Binary looks like a wall of zeros and ones, but there's only one idea to learn: place value. Once that clicks you can turn binary into numbers, and then into letters, by hand. Or paste it into the translator below and skip the maths.</p>
{{tool:binary-translator}}

<h2>Step 1: Understand place values</h2>
<p>In everyday decimal numbers, each place is worth ten times the one to its right: ones, tens, hundreds. Binary works the same way, but each place is worth <strong>two times</strong> the one to its right.</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Position</th><th>8th</th><th>7th</th><th>6th</th><th>5th</th><th>4th</th><th>3rd</th><th>2nd</th><th>1st</th></tr></thead>
<tbody><tr><td>Value</td><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody>
</table></div>

<h2>Step 2: Convert binary to a number</h2>
<p>Write the place values above the digits, then add up the values wherever there's a 1. Ignore the 0s.</p>
<ul>
<li><code>1010</code> = 8 + 2 = <strong>10</strong></li>
<li><code>1111</code> = 8 + 4 + 2 + 1 = <strong>15</strong></li>
<li><code>00101101</code> = 32 + 8 + 4 + 1 = <strong>45</strong></li>
<li><code>11111111</code> = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = <strong>255</strong>, the biggest number one byte can hold</li>
</ul>
<p>To go the other way (decimal to binary), keep subtracting the largest place value that fits. For 45: 32 fits (13 left), 16 doesn't, 8 fits (5 left), 4 fits (1 left), 2 doesn't, 1 fits. That gives <code>101101</code>, or <code>00101101</code> as a full byte. The <a href="/number-base-converter">number base converter</a> does binary, octal, decimal and hex conversions instantly.</p>

<h2>Step 3: Convert binary to letters</h2>
<p>Computers store text as numbers using a code table called <strong>ASCII</strong> (and its modern superset, UTF-8). Capital A is 65, B is 66, and so on; lowercase a is 97. So to read a letter, convert the byte to a number and look it up.</p>
<p>Example: <code>01001000 01101001</code></p>
<ul>
<li><code>01001000</code> = 64 + 8 = 72 = <strong>H</strong></li>
<li><code>01101001</code> = 64 + 32 + 8 + 1 = 105 = <strong>i</strong></li>
</ul>
<p>It says "Hi". A space between words is <code>00100000</code> (32).</p>

<h2>Binary alphabet chart (A–Z)</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Letter</th><th>Uppercase</th><th>Lowercase</th><th>Letter</th><th>Uppercase</th><th>Lowercase</th></tr></thead>
<tbody>
<tr><td>A</td><td>01000001</td><td>01100001</td><td>N</td><td>01001110</td><td>01101110</td></tr>
<tr><td>B</td><td>01000010</td><td>01100010</td><td>O</td><td>01001111</td><td>01101111</td></tr>
<tr><td>C</td><td>01000011</td><td>01100011</td><td>P</td><td>01010000</td><td>01110000</td></tr>
<tr><td>D</td><td>01000100</td><td>01100100</td><td>Q</td><td>01010001</td><td>01110001</td></tr>
<tr><td>E</td><td>01000101</td><td>01100101</td><td>R</td><td>01010010</td><td>01110010</td></tr>
<tr><td>F</td><td>01000110</td><td>01100110</td><td>S</td><td>01010011</td><td>01110011</td></tr>
<tr><td>G</td><td>01000111</td><td>01100111</td><td>T</td><td>01010100</td><td>01110100</td></tr>
<tr><td>H</td><td>01001000</td><td>01101000</td><td>U</td><td>01010101</td><td>01110101</td></tr>
<tr><td>I</td><td>01001001</td><td>01101001</td><td>V</td><td>01010110</td><td>01110110</td></tr>
<tr><td>J</td><td>01001010</td><td>01101010</td><td>W</td><td>01010111</td><td>01110111</td></tr>
<tr><td>K</td><td>01001011</td><td>01101011</td><td>X</td><td>01011000</td><td>01111000</td></tr>
<tr><td>L</td><td>01001100</td><td>01101100</td><td>Y</td><td>01011001</td><td>01111001</td></tr>
<tr><td>M</td><td>01001101</td><td>01101101</td><td>Z</td><td>01011010</td><td>01111010</td></tr>
</tbody></table></div>
<p>Notice the pattern: uppercase letters start with <code>010</code> and lowercase with <code>011</code>. The last five digits are the letter's position in the alphabet — A is <code>00001</code> (1), Z is <code>11010</code> (26). That's the shortcut people use to read binary messages quickly.</p>
<p>Digits have their own codes too: the character "0" is <code>00110000</code> (48), "1" is <code>00110001</code>, up to "9" at <code>00111001</code>.</p>

<h2>How to translate text to binary</h2>
<ol>
<li>Type or paste your text into the <a href="/binary-translator">binary translator</a>.</li>
<li>Click <strong>Text → Binary</strong>. Each character becomes an 8-bit group, separated by spaces.</li>
<li>To decode, paste the 0s and 1s and click <strong>Binary → Text</strong>. Spaces between bytes are optional — a continuous string of 0s and 1s is split into groups of eight automatically.</li>
</ol>
<p>The translator uses UTF-8, so emoji and accented letters work too — they just take two to four bytes each instead of one. It can also convert text to hexadecimal, which is the shorter way programmers usually write bytes.</p>

<h2>Where you'll actually meet binary</h2>
<ul>
<li><strong>Puzzles, escape rooms and geocaches</strong> often hide messages in binary — the A–Z chart above is all you need.</li>
<li><strong>Networking:</strong> IP addresses and subnet masks are binary underneath. 255.255.255.0 is 24 ones followed by 8 zeros, which is why it's written /24.</li>
<li><strong>File permissions:</strong> Unix permissions like 755 are three groups of three bits (read, write, execute).</li>
<li><strong>Binary clocks and watches</strong> show each digit of the time as a column of lights with values 8, 4, 2, 1 — add up the lit ones.</li>
</ul>
<p>If you like codes, try the <a href="/morse-code-translator">Morse code translator</a> too — it turns text into dots and dashes and can play them as sound.</p>
`,
};

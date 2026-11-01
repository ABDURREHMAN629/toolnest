module.exports = {
  title: 'How to Convert HEX to RGB (and Back): Formula, Chart and Examples',
  desc: 'Convert HEX color codes to RGB by hand or instantly — how hex digits work, a chart of common colors, 8-digit hex with transparency, and code for CSS, JavaScript and Python.',
  date: '2026-11-01',
  tools: ['color-picker', 'color-palette-generator', 'image-color-picker'],
  faq: [
    ['What is #FFFFFF in RGB?', '#FFFFFF is rgb(255, 255, 255), which is white. #000000 is rgb(0, 0, 0), black.'],
    ['How do I convert HEX to RGB manually?', 'Split the code into three pairs (RR, GG, BB). Convert each pair from base 16 to base 10: multiply the first digit by 16 and add the second, where A = 10 through F = 15. #4F46E5 → 4×16+15 = 79, 4×16+6 = 70, 14×16+5 = 229 → rgb(79, 70, 229).'],
    ['What does a 3-digit hex code mean?', 'It is shorthand where each digit is doubled. #F0C is the same as #FF00CC, which is rgb(255, 0, 204).'],
    ['What is an 8-digit hex color?', 'The last two digits are the alpha (opacity) channel: 00 is fully transparent and FF fully opaque. #4F46E580 is the same color at about 50% opacity, rgba(79, 70, 229, 0.5).'],
    ['Is HEX or RGB better for CSS?', 'They describe exactly the same colors, so it is a matter of preference. HEX is shorter; rgb() is easier to read and to adjust, and supports opacity directly as rgb(79 70 229 / 50%).'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> a HEX color like <code>#4F46E5</code> is three pairs of hexadecimal digits — red <code>4F</code>, green <code>46</code>, blue <code>E5</code>. Convert each pair to a number from 0 to 255 to get RGB: <code>4F</code> = 79, <code>46</code> = 70, <code>E5</code> = 229, so <code>#4F46E5</code> = <strong>rgb(79, 70, 229)</strong>. Type any code in the converter below to get HEX, RGB, HSL, HSV and CMYK at once.</p></blockquote>

<p>HEX and RGB are two ways of writing the same thing: how much red, green and blue light makes up a color on screen. Designers often get a HEX code from a brand guide or Figma, then need RGB for a slide deck, an app, or CSS with transparency. Here's how the conversion works.</p>
{{tool:color-picker}}

<h2>How hexadecimal digits work</h2>
<p>Hexadecimal is base 16. It uses the digits 0–9 and then the letters A–F for the values 10 to 15:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Hex</th><th>0–9</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr></thead>
<tbody><tr><td>Decimal</td><td>0–9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr></tbody>
</table></div>
<p>A two-digit hex number is <strong>(first digit × 16) + second digit</strong>. The lowest, <code>00</code>, is 0 and the highest, <code>FF</code>, is 15 × 16 + 15 = 255 — exactly the range of one RGB channel.</p>

<h2>How to convert HEX to RGB by hand</h2>
<p>Take <code>#FF5733</code>:</p>
<ol>
<li>Split it into pairs: <code>FF</code> · <code>57</code> · <code>33</code>.</li>
<li>Red: F = 15, so 15 × 16 + 15 = <strong>255</strong>.</li>
<li>Green: 5 × 16 + 7 = <strong>87</strong>.</li>
<li>Blue: 3 × 16 + 3 = <strong>51</strong>.</li>
</ol>
<p>So <code>#FF5733</code> = <strong>rgb(255, 87, 51)</strong>, a bright orange-red.</p>

<h2>How to convert RGB to HEX</h2>
<p>Reverse the process. For each channel, divide by 16: the whole number is the first hex digit and the remainder is the second.</p>
<ul>
<li>Red 79 → 79 ÷ 16 = 4 remainder 15 → <code>4F</code></li>
<li>Green 70 → 4 remainder 6 → <code>46</code></li>
<li>Blue 229 → 14 remainder 5 → <code>E5</code></li>
</ul>
<p>Result: <strong>#4F46E5</strong>.</p>

<h2>HEX to RGB chart for common colors</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Color</th><th>HEX</th><th>RGB</th></tr></thead>
<tbody>
<tr><td>White</td><td>#FFFFFF</td><td>rgb(255, 255, 255)</td></tr>
<tr><td>Black</td><td>#000000</td><td>rgb(0, 0, 0)</td></tr>
<tr><td>Gray</td><td>#808080</td><td>rgb(128, 128, 128)</td></tr>
<tr><td>Red</td><td>#FF0000</td><td>rgb(255, 0, 0)</td></tr>
<tr><td>Lime green</td><td>#00FF00</td><td>rgb(0, 255, 0)</td></tr>
<tr><td>Blue</td><td>#0000FF</td><td>rgb(0, 0, 255)</td></tr>
<tr><td>Gold</td><td>#FFD700</td><td>rgb(255, 215, 0)</td></tr>
<tr><td>Orange</td><td>#FFA500</td><td>rgb(255, 165, 0)</td></tr>
<tr><td>Purple</td><td>#800080</td><td>rgb(128, 0, 128)</td></tr>
<tr><td>Indigo (WebToolNest)</td><td>#4F46E5</td><td>rgb(79, 70, 229)</td></tr>
</tbody></table></div>

<h2>3-digit and 8-digit hex codes</h2>
<ul>
<li><strong>3-digit shorthand:</strong> each digit is doubled. <code>#FFF</code> = <code>#FFFFFF</code>; <code>#F0C</code> = <code>#FF00CC</code> = rgb(255, 0, 204).</li>
<li><strong>8-digit hex (#RRGGBBAA):</strong> the last pair is opacity, from <code>00</code> (invisible) to <code>FF</code> (solid). <code>80</code> = 128 ÷ 255 ≈ 50%, so <code>#4F46E580</code> = rgba(79, 70, 229, 0.5).</li>
</ul>
<div class="table-wrap"><table class="table">
<thead><tr><th>Opacity</th><th>100%</th><th>90%</th><th>75%</th><th>50%</th><th>25%</th><th>10%</th><th>0%</th></tr></thead>
<tbody><tr><td>Hex alpha</td><td>FF</td><td>E6</td><td>BF</td><td>80</td><td>40</td><td>1A</td><td>00</td></tr></tbody>
</table></div>

<h2>HEX to RGB in code</h2>
<p><strong>CSS</strong> accepts both, so you can write the same color either way:</p>
<pre><code>color: #4F46E5;
color: rgb(79 70 229);
color: rgb(79 70 229 / 50%); /* with 50% opacity */</code></pre>
<p><strong>JavaScript:</strong></p>
<pre><code>const hexToRgb = hex =&gt; {
  const h = hex.replace('#', '');
  return [0, 2, 4].map(i =&gt; parseInt(h.slice(i, i + 2), 16));
};
hexToRgb('#4F46E5'); // [79, 70, 229]</code></pre>
<p><strong>Python:</strong></p>
<pre><code>def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

hex_to_rgb('#4F46E5')  # (79, 70, 229)</code></pre>
<p><strong>Excel:</strong> with the hex code (without #) in A1, <code>=HEX2DEC(MID(A1,1,2))</code>, <code>=HEX2DEC(MID(A1,3,2))</code> and <code>=HEX2DEC(MID(A1,5,2))</code> give red, green and blue.</p>

<h2>Beyond RGB: HSL and CMYK</h2>
<p><strong>HSL</strong> (hue, saturation, lightness) is easier for adjusting colors — to make a lighter tint, just raise the lightness. <strong>CMYK</strong> is for print; screen colors converted to CMYK may look duller on paper, so ask your printer for a proof. The <a href="/color-picker">color picker &amp; converter</a> shows all of these, plus tints, shades and a WCAG contrast check so your text stays readable.</p>
<p>Need a full set of matching colors? The <a href="/color-palette-generator">color palette generator</a> builds harmonious palettes from one base color, and the <a href="/image-color-picker">image color picker</a> pulls exact HEX codes from any photo or screenshot.</p>
`,
};

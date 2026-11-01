module.exports = {
  title: 'Roman Numerals Chart 1–100 (Plus Years and Big Numbers)',
  desc: 'A complete Roman numerals chart from 1 to 100, the seven symbols and rules, how to write years like 2026 (MMXXVI), and how to read any Roman numeral step by step.',
  date: '2026-11-01',
  tools: ['roman-numeral-converter', 'number-to-words'],
  faq: [
    ['What is 2026 in Roman numerals?', '2026 is MMXXVI: MM (2000) + XX (20) + VI (6).'],
    ['Why is 4 written IV and not IIII?', 'Standard Roman numerals use subtraction to avoid four of the same symbol in a row: IV means 5 − 1. Clocks are a famous exception — many clock faces show IIII instead of IV for visual balance.'],
    ['Is there a zero in Roman numerals?', 'No. The Romans had no symbol for zero. Medieval writers sometimes used the word "nulla" (nothing) or the letter N, but there is no zero in the standard system.'],
    ['What is the largest Roman numeral?', 'With the standard symbols, the largest number you can write is 3,999 (MMMCMXCIX). Bigger numbers use a bar over a symbol, which multiplies it by 1,000 — a barred V is 5,000.'],
    ['How do you write 1000 in Roman numerals?', '1,000 is M. 2,000 is MM and 3,000 is MMM.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> Roman numerals use seven letters — <strong>I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1,000</strong>. Add the values from left to right, but when a smaller symbol comes <em>before</em> a bigger one, subtract it: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</p></blockquote>

<p>You see Roman numerals on clocks, in book chapters, movie credits, Super Bowl titles, outlines, tattoos and the names of kings and popes. The full chart is below, followed by the rules so you can read or write any number yourself.</p>
{{tool:roman-numeral-converter}}

<h2>The seven Roman numeral symbols</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Symbol</th><th>I</th><th>V</th><th>X</th><th>L</th><th>C</th><th>D</th><th>M</th></tr></thead>
<tbody><tr><td>Value</td><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1,000</td></tr></tbody>
</table></div>

<h2>Roman numerals chart 1–100</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>1–10</th><th>11–20</th><th>21–30</th><th>31–40</th><th>41–50</th></tr></thead>
<tbody>
<tr><td>1 = I</td><td>11 = XI</td><td>21 = XXI</td><td>31 = XXXI</td><td>41 = XLI</td></tr>
<tr><td>2 = II</td><td>12 = XII</td><td>22 = XXII</td><td>32 = XXXII</td><td>42 = XLII</td></tr>
<tr><td>3 = III</td><td>13 = XIII</td><td>23 = XXIII</td><td>33 = XXXIII</td><td>43 = XLIII</td></tr>
<tr><td>4 = IV</td><td>14 = XIV</td><td>24 = XXIV</td><td>34 = XXXIV</td><td>44 = XLIV</td></tr>
<tr><td>5 = V</td><td>15 = XV</td><td>25 = XXV</td><td>35 = XXXV</td><td>45 = XLV</td></tr>
<tr><td>6 = VI</td><td>16 = XVI</td><td>26 = XXVI</td><td>36 = XXXVI</td><td>46 = XLVI</td></tr>
<tr><td>7 = VII</td><td>17 = XVII</td><td>27 = XXVII</td><td>37 = XXXVII</td><td>47 = XLVII</td></tr>
<tr><td>8 = VIII</td><td>18 = XVIII</td><td>28 = XXVIII</td><td>38 = XXXVIII</td><td>48 = XLVIII</td></tr>
<tr><td>9 = IX</td><td>19 = XIX</td><td>29 = XXIX</td><td>39 = XXXIX</td><td>49 = XLIX</td></tr>
<tr><td>10 = X</td><td>20 = XX</td><td>30 = XXX</td><td>40 = XL</td><td>50 = L</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="table">
<thead><tr><th>51–60</th><th>61–70</th><th>71–80</th><th>81–90</th><th>91–100</th></tr></thead>
<tbody>
<tr><td>51 = LI</td><td>61 = LXI</td><td>71 = LXXI</td><td>81 = LXXXI</td><td>91 = XCI</td></tr>
<tr><td>52 = LII</td><td>62 = LXII</td><td>72 = LXXII</td><td>82 = LXXXII</td><td>92 = XCII</td></tr>
<tr><td>53 = LIII</td><td>63 = LXIII</td><td>73 = LXXIII</td><td>83 = LXXXIII</td><td>93 = XCIII</td></tr>
<tr><td>54 = LIV</td><td>64 = LXIV</td><td>74 = LXXIV</td><td>84 = LXXXIV</td><td>94 = XCIV</td></tr>
<tr><td>55 = LV</td><td>65 = LXV</td><td>75 = LXXV</td><td>85 = LXXXV</td><td>95 = XCV</td></tr>
<tr><td>56 = LVI</td><td>66 = LXVI</td><td>76 = LXXVI</td><td>86 = LXXXVI</td><td>96 = XCVI</td></tr>
<tr><td>57 = LVII</td><td>67 = LXVII</td><td>77 = LXXVII</td><td>87 = LXXXVII</td><td>97 = XCVII</td></tr>
<tr><td>58 = LVIII</td><td>68 = LXVIII</td><td>78 = LXXVIII</td><td>88 = LXXXVIII</td><td>98 = XCVIII</td></tr>
<tr><td>59 = LIX</td><td>69 = LXIX</td><td>79 = LXXIX</td><td>89 = LXXXIX</td><td>99 = XCIX</td></tr>
<tr><td>60 = LX</td><td>70 = LXX</td><td>80 = LXXX</td><td>90 = XC</td><td>100 = C</td></tr>
</tbody></table></div>

<h2>The rules for writing Roman numerals</h2>
<ol>
<li><strong>Write from largest to smallest and add.</strong> XVI = 10 + 5 + 1 = 16. MDC = 1000 + 500 + 100 = 1,600.</li>
<li><strong>Don't repeat a symbol more than three times.</strong> 3 is III, but 4 is IV, not IIII. V, L and D are never repeated at all (10 is X, not VV).</li>
<li><strong>A smaller symbol before a larger one is subtracted.</strong> Only six pairs are used: IV (4), IX (9), XL (40), XC (90), CD (400) and CM (900).</li>
<li><strong>Only I, X and C are subtracted, and only from the next two symbols up.</strong> That's why 99 is XCIX (90 + 9), not IC, and 49 is XLIX, not IL.</li>
</ol>

<h2>How to convert a number to Roman numerals</h2>
<p>Break the number into thousands, hundreds, tens and ones, convert each part, and join them. For <strong>1,984</strong>:</p>
<ul>
<li>1,000 = M</li>
<li>900 = CM</li>
<li>80 = LXXX</li>
<li>4 = IV</li>
</ul>
<p>So 1,984 = <strong>MCMLXXXIV</strong>. The <a href="/roman-numeral-converter">Roman numeral converter</a> does this for any number from 1 to 3,999 and also works in reverse.</p>

<h2>How to read a Roman numeral</h2>
<p>Go left to right. If a symbol is smaller than the one after it, subtract it; otherwise add it. For <strong>MCMXC</strong>: M (1000) + CM (900) + XC (90) = <strong>1,990</strong>. For <strong>CDXLIV</strong>: CD (400) + XL (40) + IV (4) = <strong>444</strong>.</p>

<h2>Years in Roman numerals</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Year</th><th>Roman numerals</th><th>Year</th><th>Roman numerals</th></tr></thead>
<tbody>
<tr><td>1990</td><td>MCMXC</td><td>2020</td><td>MMXX</td></tr>
<tr><td>1999</td><td>MCMXCIX</td><td>2024</td><td>MMXXIV</td></tr>
<tr><td>2000</td><td>MM</td><td>2025</td><td>MMXXV</td></tr>
<tr><td>2001</td><td>MMI</td><td>2026</td><td>MMXXVI</td></tr>
<tr><td>2010</td><td>MMX</td><td>2027</td><td>MMXXVII</td></tr>
</tbody></table></div>
<p>Writing a birth year or wedding date for a tattoo? Convert the day, month and year separately and separate them with dots: 14 March 2026 becomes <strong>XIV.III.MMXXVI</strong>. Double-check with the converter before anything permanent.</p>

<h2>Big numbers: 1,000 and beyond</h2>
<p>M is 1,000, so standard Roman numerals stop at <strong>3,999 = MMMCMXCIX</strong>. For larger numbers the Romans drew a bar (a <em>vinculum</em>) over a numeral to multiply it by 1,000 — a barred X is 10,000 and a barred M is 1,000,000. These are rarely needed today outside puzzles and trivia.</p>
`,
};

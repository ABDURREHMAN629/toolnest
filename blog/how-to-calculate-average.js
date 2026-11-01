module.exports = {
  title: 'How to Calculate Average: Mean, Median, Mode and Weighted Average',
  desc: 'How to calculate an average step by step, with examples — the mean, median and mode, weighted averages for grades, averaging percentages correctly, and the Excel formulas.',
  date: '2026-11-01',
  tools: ['average-calculator', 'grade-calculator', 'percentage-calculator'],
  faq: [
    ['What is the formula for average?', 'Average (mean) = sum of all values ÷ number of values. For 4, 8 and 9: (4 + 8 + 9) ÷ 3 = 7.'],
    ['What is the difference between mean and average?', 'In everyday use they are the same thing — the sum divided by the count. Strictly, "average" can also mean the median or mode, so statisticians say "mean" when they mean the sum-divided-by-count average.'],
    ['How do I calculate a weighted average?', 'Multiply each value by its weight, add the results, then divide by the total of the weights. For a test worth 60% scored 80 and homework worth 40% scored 95: (80 × 60 + 95 × 40) ÷ 100 = 86.'],
    ['Can you average percentages?', 'Only if each percentage is based on the same total. Otherwise add up the underlying numbers first: 45/50 and 8/10 average to 53/60 = 88.3%, not (90% + 80%) ÷ 2 = 85%.'],
    ['How do I calculate an average in Excel?', 'Use =AVERAGE(A1:A10). For a weighted average use =SUMPRODUCT(A1:A10,B1:B10)/SUM(B1:B10), where column B holds the weights.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> to calculate an average, <strong>add all the numbers together, then divide by how many numbers there are</strong>. For 12, 15 and 21: 12 + 15 + 21 = 48, and 48 ÷ 3 = <strong>16</strong>. Paste any list into the calculator below to get the mean, median, mode and more at once.</p></blockquote>

<p>"Average" usually means the <strong>mean</strong>, but there are three common kinds of average, and choosing the right one matters — especially when a few numbers are much bigger or smaller than the rest. Here's how to calculate each, with examples.</p>
{{tool:average-calculator}}

<h2>How to calculate the mean (the usual average)</h2>
<ol>
<li><strong>Add up all the values.</strong></li>
<li><strong>Count how many values there are.</strong></li>
<li><strong>Divide the total by the count.</strong></li>
</ol>
<p>Example — test scores of 72, 85, 90, 64 and 89:</p>
<ul>
<li>Sum: 72 + 85 + 90 + 64 + 89 = 400</li>
<li>Count: 5</li>
<li>Mean: 400 ÷ 5 = <strong>80</strong></li>
</ul>

<h2>How to find the median</h2>
<p>The median is the <strong>middle value</strong> when the numbers are sorted. Sort them, then:</p>
<ul>
<li><strong>Odd count:</strong> take the middle one. For 3, 7, <strong>9</strong>, 12, 40 the median is 9.</li>
<li><strong>Even count:</strong> average the two middle ones. For 3, 7, <strong>9, 12</strong>, 40, 55 the median is (9 + 12) ÷ 2 = 10.5.</li>
</ul>
<p>The median is better than the mean when there are outliers. If five people earn 30k, 32k, 35k, 38k and 400k, the mean is 107k — which describes nobody — but the median of 35k is a fair "typical" salary.</p>

<h2>How to find the mode</h2>
<p>The mode is the value that appears <strong>most often</strong>. In 2, 4, 4, 5, 7, 4, 9 the mode is 4. A list can have two modes (bimodal) or no mode at all if every value appears once. The mode is the only average that works for non-numbers — the most common shoe size sold, or the most popular answer in a survey.</p>

<h2>Mean vs median vs mode: which should you use?</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Average</th><th>Best for</th><th>Weak spot</th></tr></thead>
<tbody>
<tr><td>Mean</td><td>Test scores, temperatures, most everyday data</td><td>Pulled up or down by outliers</td></tr>
<tr><td>Median</td><td>House prices, salaries, anything with extreme values</td><td>Ignores how far apart the values are</td></tr>
<tr><td>Mode</td><td>Most common choice, size or category</td><td>May not exist, or there may be several</td></tr>
</tbody></table></div>
<p>The <a href="/average-calculator">average calculator</a> shows all three, plus the sum, range, minimum and maximum, standard deviation and geometric mean, so you can compare them side by side.</p>

<h2>How to calculate a weighted average</h2>
<p>Use a weighted average when some values count more than others — like a final exam worth more than a quiz.</p>
<p><strong>Weighted average = (value₁ × weight₁ + value₂ × weight₂ + …) ÷ (sum of the weights)</strong></p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Assessment</th><th class="num">Score</th><th class="num">Weight</th><th class="num">Score × weight</th></tr></thead>
<tbody>
<tr><td>Homework</td><td class="num">92</td><td class="num">20%</td><td class="num">1,840</td></tr>
<tr><td>Midterm</td><td class="num">78</td><td class="num">30%</td><td class="num">2,340</td></tr>
<tr><td>Final exam</td><td class="num">85</td><td class="num">50%</td><td class="num">4,250</td></tr>
<tr><td><strong>Total</strong></td><td></td><td class="num"><strong>100%</strong></td><td class="num"><strong>8,430</strong></td></tr>
</tbody></table></div>
<p>Weighted average: 8,430 ÷ 100 = <strong>84.3</strong>. The simple mean of the three scores would be 85 — close, but not the grade you'd actually get. For course grades, the <a href="/grade-calculator">grade calculator</a> does the weighting for you and tells you what you need on the final.</p>

<h2>How to average percentages correctly</h2>
<p>You can only average percentages directly if they're out of the same total. Otherwise, go back to the raw numbers:</p>
<ul>
<li>Quiz 1: 45 out of 50 = 90%</li>
<li>Quiz 2: 8 out of 10 = 80%</li>
<li>Wrong: (90 + 80) ÷ 2 = 85%</li>
<li>Right: (45 + 8) ÷ (50 + 10) = 53 ÷ 60 = <strong>88.3%</strong></li>
</ul>
<p>The bigger quiz deserves more influence, and adding the raw scores gives it that. For more percentage maths, see <a href="/blog/how-to-calculate-percentage">how to calculate percentages</a> or use the <a href="/percentage-calculator">percentage calculator</a>.</p>

<h2>How to calculate an average in Excel and Google Sheets</h2>
<ul>
<li><code>=AVERAGE(A2:A20)</code> — the mean of a range (blank cells are ignored, zeros are counted).</li>
<li><code>=MEDIAN(A2:A20)</code> and <code>=MODE(A2:A20)</code> — median and mode.</li>
<li><code>=AVERAGEIF(B2:B20,"Paid",C2:C20)</code> — the average of column C only where column B says "Paid".</li>
<li><code>=SUMPRODUCT(A2:A10,B2:B10)/SUM(B2:B10)</code> — a weighted average, with values in column A and weights in column B.</li>
</ul>

<h2>Everyday averages</h2>
<ul>
<li><strong>Average speed:</strong> total distance ÷ total time. Driving 120 km in 1.5 hours is 80 km/h on average — not the average of the speeds you saw on the speedometer.</li>
<li><strong>Fuel average (mileage):</strong> distance driven ÷ fuel used. 450 km on 30 litres is 15 km per litre.</li>
<li><strong>Monthly average:</strong> add the monthly totals and divide by the number of months. Spending of 820, 760 and 905 over three months averages 828.33 a month.</li>
</ul>
`,
};

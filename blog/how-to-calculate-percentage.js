module.exports = {
  title: 'How to Calculate a Percentage: Formulas, Examples and Excel',
  desc: 'Every percentage formula you need, with worked examples: percentage of a number, what percent one number is of another, percentage increase and decrease, discounts, marks and Excel formulas.',
  date: '2026-10-26',
  tools: ['percentage-calculator', 'discount-calculator', 'grade-calculator'],
  faq: [
    ['What is the formula for percentage?', 'Percentage = (part ÷ whole) × 100. For example, 30 out of 120 is 30 ÷ 120 × 100 = 25%.'],
    ['How do I calculate a percentage increase?', 'Subtract the old value from the new value, divide by the old value and multiply by 100. From 80 to 100 is (100 − 80) ÷ 80 × 100 = 25% increase.'],
    ['How do I work out 15% of a number quickly?', 'Find 10% by moving the decimal point one place left, then add half of that. 15% of 64 is 6.4 + 3.2 = 9.6.'],
    ['How do I remove a percentage to get the original price?', 'Divide by (1 + the percentage as a decimal). If a price including 20% tax is 120, the price before tax is 120 ÷ 1.20 = 100. Don\'t subtract 20% of 120 — that gives the wrong answer.'],
    ['What is the difference between percent and percentage points?', 'Percentage points measure the simple difference between two percentages. Going from 10% to 15% is a rise of 5 percentage points, but a 50% increase.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> percentage = <strong>(part ÷ whole) × 100</strong>. To find a percentage <em>of</em> a number, multiply: <strong>X% of Y = X ÷ 100 × Y</strong>. For change over time: <strong>(new − old) ÷ old × 100</strong>.</p></blockquote>

<p>"Per cent" means "per hundred", so a percentage is just a fraction out of 100. Almost every percentage question is one of six types. Here's the formula for each, a worked example, and how to do it in Excel or Google Sheets.</p>

<h2>1. What is X% of a number?</h2>
<p><strong>Formula:</strong> X ÷ 100 × number.</p>
<p><strong>Example:</strong> what is 20% of 150? → 20 ÷ 100 × 150 = <strong>30</strong>.</p>
<p><strong>Mental shortcut:</strong> 10% is the number with the decimal point moved one place left (10% of 150 = 15). Double it for 20%, halve it for 5%. So 15% of 64 = 6.4 + 3.2 = 9.6.</p>

<h2>2. X is what percent of Y?</h2>
<p><strong>Formula:</strong> X ÷ Y × 100.</p>
<p><strong>Example:</strong> 30 is what percent of 120? → 30 ÷ 120 × 100 = <strong>25%</strong>.</p>
<p>The same formula works out your marks: 445 marks out of 550 is 445 ÷ 550 × 100 = <strong>80.91%</strong>.</p>
{{tool:percentage-calculator}}

<h2>3. Percentage increase or decrease</h2>
<p><strong>Formula:</strong> (new value − old value) ÷ old value × 100. A positive result is an increase; a negative result is a decrease.</p>
<ul>
<li><strong>Increase:</strong> from 80 to 100 → (100 − 80) ÷ 80 × 100 = <strong>25% increase</strong>.</li>
<li><strong>Decrease:</strong> from 100 to 80 → (80 − 100) ÷ 100 × 100 = <strong>20% decrease</strong>.</li>
</ul>
<p>Notice the two answers differ: going up 25% and then down 20% gets you back where you started, because each change is measured from a different starting value.</p>

<h2>4. Adding a percentage (tax, tips, raises)</h2>
<p><strong>Formula:</strong> number × (1 + X ÷ 100).</p>
<p><strong>Example:</strong> add 15% to 200 → 200 × 1.15 = <strong>230</strong>. A 5% pay rise on 3,000 → 3,000 × 1.05 = 3,150.</p>

<h2>5. Subtracting a percentage (discounts)</h2>
<p><strong>Formula:</strong> number × (1 − X ÷ 100).</p>
<p><strong>Example:</strong> 25% off 80 → 80 × 0.75 = <strong>60</strong>. Two discounts multiply rather than add: 20% off and then a further 10% off is 0.8 × 0.9 = 0.72, so 28% off in total — not 30%. The <a href="/discount-calculator">discount calculator</a> handles extra discounts and sales tax for you.</p>

<h2>6. Reverse percentage (finding the original number)</h2>
<p><strong>Formula:</strong> final value ÷ (1 + X ÷ 100) for an increase, or ÷ (1 − X ÷ 100) for a decrease.</p>
<ul>
<li>A price of 120 includes 20% tax. Original price = 120 ÷ 1.20 = <strong>100</strong>.</li>
<li>After a 25% discount you paid 60. Original price = 60 ÷ 0.75 = <strong>80</strong>.</li>
</ul>
<p>A very common mistake is to take the percentage of the final price (20% of 120 = 24, giving 96). That's wrong, because the 20% was calculated on the original price, not the final one.</p>

<h2>Percentage error</h2>
<p>Used in science classes: <strong>|measured − actual| ÷ actual × 100</strong>. If you measure gravity as 9.6 m/s² and the accepted value is 9.81 m/s², the error is |9.6 − 9.81| ÷ 9.81 × 100 ≈ <strong>2.14%</strong>.</p>

<h2>Percentages in Excel and Google Sheets</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Task</th><th>Formula (A1 and B1 are cells)</th></tr></thead>
<tbody>
<tr><td>A1 percent of B1</td><td><code>=A1/100*B1</code> (or <code>=A1*B1</code> if A1 is formatted as %)</td></tr>
<tr><td>A1 as a percent of B1</td><td><code>=A1/B1</code>, then format the cell as Percentage</td></tr>
<tr><td>Percentage change from A1 to B1</td><td><code>=(B1-A1)/A1</code>, formatted as Percentage</td></tr>
<tr><td>Add 15% to A1</td><td><code>=A1*1.15</code></td></tr>
<tr><td>Remove 20% tax from A1</td><td><code>=A1/1.2</code></td></tr>
</tbody></table></div>
<p>Tip: when a cell is formatted as Percentage, Excel stores 25% as 0.25 — so don't multiply by 100 as well, or you'll see 2500%.</p>

<h2>Percent vs percentage points</h2>
<p>If an interest rate rises from 4% to 5%, it went up by <strong>1 percentage point</strong> — but that's a <strong>25% increase</strong> in the rate (1 ÷ 4 × 100). News reports mix these up often, so check which one is meant.</p>

<h2>Everyday percentage questions</h2>
<ul>
<li><strong>Tips:</strong> 18% of a 45 bill = 0.18 × 45 = 8.10.</li>
<li><strong>Grades:</strong> 42 out of 50 = 84%. For weighted coursework, use the <a href="/grade-calculator">grade calculator</a>.</li>
<li><strong>Savings:</strong> saving 600 of a 3,000 monthly income = 20%.</li>
<li><strong>Battery or progress:</strong> 3.2 GB downloaded of 8 GB = 40% done.</li>
</ul>
`,
};

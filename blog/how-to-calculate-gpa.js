module.exports = {
  title: 'How to Calculate Your GPA (Step by Step) and Convert It to a Percentage',
  desc: 'Learn the GPA formula with a worked example, how cumulative GPA works across semesters, and how to convert a 4.0 or 10-point GPA to a percentage.',
  date: '2026-10-27',
  tools: ['gpa-calculator', 'cgpa-calculator', 'cgpa-to-percentage'],
  faq: [
    ['What is a good GPA?', 'On a 4.0 scale, 3.0 (a B average) is generally considered good, 3.5 or above is strong, and 3.7–4.0 is excellent. What counts as good depends on your school and what you are applying for.'],
    ['What is the difference between GPA and CGPA?', 'GPA usually means your grade point average for one semester or term. CGPA (cumulative GPA) is the average across all your semesters, weighted by credit hours.'],
    ['How do I convert a 3.5 GPA to a percentage?', 'Using the simple proportional method on a 4.0 scale, 3.5 ÷ 4 × 100 = 87.5%. Your university may use a different official formula, so check your transcript or student handbook.'],
    ['How do I convert CGPA to percentage for CBSE?', 'CBSE uses CGPA × 9.5. For example, a CGPA of 8.2 is 8.2 × 9.5 = 77.9%.'],
    ['Do all courses count equally in my GPA?', 'No. Courses are weighted by their credit hours, so a 4-credit course affects your GPA more than a 1-credit course.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> multiply each course's grade points by its credit hours, add those numbers up, and divide by your total credit hours. <strong>GPA = Σ (grade points × credits) ÷ Σ credits.</strong> A free <a href="/gpa-calculator">GPA calculator</a> does it for you as you type.</p></blockquote>

<p>Your grade point average (GPA) turns all your course grades into a single number. It's used for scholarships, graduate school applications, honours lists and job applications. The good news: it's simple to calculate once you know the formula.</p>

<h2>Step 1: Convert each grade to grade points</h2>
<p>Most universities in the USA and many other countries, including those following Pakistan's HEC scale, use a 4.0 scale like this:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Grade</th><th class="num">Points</th><th>Grade</th><th class="num">Points</th></tr></thead>
<tbody>
<tr><td>A+ / A</td><td class="num">4.00</td><td>C+</td><td class="num">2.33</td></tr>
<tr><td>A-</td><td class="num">3.67</td><td>C</td><td class="num">2.00</td></tr>
<tr><td>B+</td><td class="num">3.33</td><td>C-</td><td class="num">1.67</td></tr>
<tr><td>B</td><td class="num">3.00</td><td>D+</td><td class="num">1.33</td></tr>
<tr><td>B-</td><td class="num">2.67</td><td>D</td><td class="num">1.00</td></tr>
<tr><td></td><td></td><td>F</td><td class="num">0.00</td></tr>
</tbody></table></div>
<p>Some schools use slightly different values (for example 3.7 for an A-, or 4.3 for an A+), so check your own grading policy.</p>

<h2>Step 2: Multiply by credit hours and divide</h2>
<p>Here's a worked example for one semester:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Course</th><th>Grade</th><th class="num">Points</th><th class="num">Credits</th><th class="num">Points × credits</th></tr></thead>
<tbody>
<tr><td>Mathematics</td><td>A</td><td class="num">4.00</td><td class="num">3</td><td class="num">12.00</td></tr>
<tr><td>Physics</td><td>B+</td><td class="num">3.33</td><td class="num">4</td><td class="num">13.32</td></tr>
<tr><td>English</td><td>A-</td><td class="num">3.67</td><td class="num">3</td><td class="num">11.01</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td class="num"><strong>10</strong></td><td class="num"><strong>36.33</strong></td></tr>
</tbody></table></div>
<p><strong>GPA = 36.33 ÷ 10 = 3.63.</strong></p>
<p>Notice that Physics, with 4 credits, pulls the average more than the 3-credit courses. That's why doing well in high-credit courses matters most.</p>
<p>Enter your courses, grades and credits into the calculator to get your GPA instantly, along with the matching letter grade and percentage:</p>
{{tool:gpa-calculator}}

<h2>How cumulative GPA (CGPA) works</h2>
<p>Your cumulative GPA combines every semester, weighted by credit hours — it is <em>not</em> a simple average of your semester GPAs.</p>
<p>Example: you have a CGPA of 3.40 from 60 credits, and you just earned a 3.63 over 10 credits. Your new CGPA is:</p>
<p><strong>(3.40 × 60 + 3.63 × 10) ÷ (60 + 10) = 240.3 ÷ 70 ≈ 3.43</strong></p>
<p>As you complete more credits, each new semester moves your CGPA less — which is why early semesters matter. The <a href="/gpa-calculator">GPA calculator</a> can add a semester to your current CGPA, and the <a href="/cgpa-calculator">CGPA calculator</a> combines several semesters at once.</p>
{{tool:cgpa-calculator}}

<h2>Weighted vs unweighted GPA</h2>
<p>An <strong>unweighted GPA</strong> uses the standard 0–4.0 scale for every course. Many US high schools also report a <strong>weighted GPA</strong>, which adds extra points for harder classes — commonly +0.5 for honors and +1.0 for AP or IB courses — so it can go above 4.0. Colleges usually see both. The calculators here give unweighted GPA; to estimate a weighted GPA, add your school's bonus to each eligible course's points before multiplying by credits.</p>

<h2>Other grading scales</h2>
<ul>
<li><strong>10-point scale</strong> (common in India): O = 10, A+ = 9, A = 8, B+ = 7, B = 6, C = 5, P = 4, F = 0.</li>
<li><strong>5.0 scale</strong> (used in some countries and universities): A = 5, B = 4, C = 3, D = 2, E = 1, F = 0.</li>
</ul>
<p>The method is the same on every scale: grade points × credits, added up, divided by total credits.</p>

<h2>How to convert GPA or CGPA to a percentage</h2>
<p>There's no single worldwide formula — always use your university's official method if it has one (it's often printed on the transcript). Common methods are:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Scale</th><th>Method</th><th>Example</th></tr></thead>
<tbody>
<tr><td>4.0 scale</td><td>GPA ÷ 4 × 100</td><td>3.5 → 87.5%</td></tr>
<tr><td>5.0 scale</td><td>GPA ÷ 5 × 100</td><td>4.2 → 84%</td></tr>
<tr><td>10-point (CBSE and many Indian universities)</td><td>CGPA × 9.5</td><td>8.2 → 77.9%</td></tr>
<tr><td>10-point (VTU)</td><td>(CGPA − 0.75) × 10</td><td>8.2 → 74.5%</td></tr>
</tbody></table></div>
<p>The converter supports all of these and also works backwards, from percentage to CGPA:</p>
{{tool:cgpa-to-percentage}}

<h2>How to raise your GPA</h2>
<ul>
<li><strong>Focus on high-credit courses</strong> — they carry the most weight.</li>
<li><strong>Check retake policies.</strong> Many universities replace a failed or low grade when you retake the course.</li>
<li><strong>Plan your target.</strong> Use the calculator to see what grades you need this semester to reach a goal CGPA.</li>
<li><strong>Act early.</strong> The fewer credits you have, the more each semester can change your CGPA.</li>
</ul>
`,
};

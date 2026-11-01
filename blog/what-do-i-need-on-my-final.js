module.exports = {
  title: 'What Do I Need on My Final? The Formula and a Quick Calculator',
  desc: 'Work out exactly what score you need on your final exam to pass or get an A — the formula, worked examples, a target chart, and what to do if the grade you want is out of reach.',
  date: '2026-11-01',
  tools: ['grade-calculator', 'gpa-calculator', 'average-calculator'],
  faq: [
    ['What is the formula for the grade I need on my final?', 'Required final score = (target grade − current grade × (1 − final weight)) ÷ final weight, with the weight written as a decimal. With an 82% current grade, a final worth 25% and a target of 80%: (80 − 82 × 0.75) ÷ 0.25 = 74%.'],
    ['What do I need on my final to pass?', 'Use the same formula with your school\'s passing grade as the target — often 60% or 70%. If your current grade is already well above it, you may need surprisingly little, but check your syllabus for a minimum score on the final itself.'],
    ['What if I need more than 100% on the final?', 'Then that target can\'t be reached from the final alone. Ask about extra credit, dropped lowest scores, or whether any assignments can still be resubmitted, and aim for the next grade boundary down.'],
    ['How much does a final worth 20% affect my grade?', 'Every 10 points you score on a final worth 20% changes your course grade by 2 points. A final worth 40% moves your grade 4 points for every 10.'],
    ['Does my current grade include the final?', 'No — for this calculation your current grade should be your weighted grade on everything except the final. Many school portals show exactly this number.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> <strong>Needed on final = (target − current × (1 − w)) ÷ w</strong>, where <em>w</em> is the final's weight as a decimal. With a current grade of 82%, a final worth 25%, and a target of 80%: (80 − 82 × 0.75) ÷ 0.25 = <strong>74%</strong>. Enter your own numbers in the calculator below.</p></blockquote>

<p>Finals week is easier to plan when you know exactly what you're aiming for. Maybe you only need a 58 to keep your B — or maybe an A is still possible if you put in the work. Here's how to calculate it.</p>
{{tool:grade-calculator}}

<h2>What you need to know first</h2>
<ol>
<li><strong>Your current grade</strong> — your weighted grade on everything before the final. Most student portals (Canvas, Blackboard, PowerSchool) show it.</li>
<li><strong>How much the final is worth</strong> — check the syllabus. Finals are commonly worth 15–40% of the course grade.</li>
<li><strong>Your target grade</strong> — the lowest percentage for the letter grade you want (for example 90% for an A or 80% for a B on a common US scale).</li>
</ol>

<h2>The final grade formula, step by step</h2>
<p>Say your current grade is <strong>78%</strong>, the final is worth <strong>40%</strong>, and you want at least <strong>80%</strong> in the course.</p>
<ol>
<li>Write the weight as a decimal: 40% = 0.40. Everything else is worth 1 − 0.40 = 0.60.</li>
<li>Multiply your current grade by the "everything else" share: 78 × 0.60 = 46.8. That's the part of your course grade you've already earned.</li>
<li>Subtract it from your target: 80 − 46.8 = 33.2. That's what the final still has to contribute.</li>
<li>Divide by the final's weight: 33.2 ÷ 0.40 = <strong>83%</strong>.</li>
</ol>
<p>You need 83% on the final to finish with an 80%.</p>

<h2>Final exam target charts</h2>
<p><strong>Current grade 82%, final worth 25%:</strong></p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Target course grade</th><th class="num">Needed on final</th></tr></thead>
<tbody>
<tr><td>A (90%)</td><td class="num">114% — not reachable</td></tr>
<tr><td>B (80%)</td><td class="num">74%</td></tr>
<tr><td>C (70%)</td><td class="num">34%</td></tr>
<tr><td>D (60%)</td><td class="num">Already secured</td></tr>
</tbody></table></div>
<p><strong>Current grade 78%, final worth 40%:</strong></p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Target course grade</th><th class="num">Needed on final</th></tr></thead>
<tbody>
<tr><td>A (90%)</td><td class="num">108% — not reachable</td></tr>
<tr><td>B (80%)</td><td class="num">83%</td></tr>
<tr><td>C (70%)</td><td class="num">58%</td></tr>
<tr><td>D (60%)</td><td class="num">33%</td></tr>
</tbody></table></div>
<p>Notice how the weight changes everything: a heavy final gives you more room to move your grade, in either direction.</p>

<h2>How to use the grade calculator</h2>
<ol>
<li>Add each assessment — assignments, quizzes, midterm, labs — with your score and its weight.</li>
<li>The calculator shows your <strong>current weighted grade</strong> and the matching letter grade.</li>
<li>Under "What do I need on the final?", enter the final's weight and your target. You'll see the score you need, or a message if the target is out of reach or already secured.</li>
</ol>
<p>If your weights don't add up to 100% yet (because the final hasn't happened), that's expected — the calculator weights what you've entered so far.</p>

<h2>If the grade you want is out of reach</h2>
<ul>
<li><strong>Ask about extra credit</strong> or replacement policies — some courses let the final replace your lowest midterm.</li>
<li><strong>Check for dropped scores.</strong> Many syllabuses drop the lowest quiz or homework, which raises your current grade.</li>
<li><strong>Look for late work</strong> that can still be submitted for partial credit.</li>
<li><strong>Aim for the next boundary.</strong> Securing a solid B+ protects your GPA far more than a missed A becoming a C.</li>
</ul>

<h2>How the final affects your GPA</h2>
<p>Your final course grade becomes the letter grade that goes into your GPA, weighted by the course's credit hours. A 4-credit course moves your GPA more than a 1-credit lab. Once you know your likely letter grades, put them into the <a href="/gpa-calculator">GPA calculator</a> to see your semester GPA, or read <a href="/blog/how-to-calculate-gpa">how GPA is calculated</a>.</p>
<p>Need a simple average of a list of scores instead of a weighted one? The <a href="/average-calculator">average calculator</a> handles that, and our guide to <a href="/blog/how-to-calculate-average">calculating averages</a> explains when to use each.</p>
`,
};

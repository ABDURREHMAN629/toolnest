module.exports = {
  title: 'How Many Calories Should I Eat a Day? Calculator and Chart',
  desc: 'Work out how many calories you need a day to maintain, lose or gain weight — BMR and TDEE explained, the Mifflin-St Jeor formula with examples, activity levels and safe calorie targets.',
  date: '2026-11-01',
  tools: ['calorie-calculator', 'bmr-calculator', 'bmi-calculator', 'water-intake-calculator'],
  faq: [
    ['How many calories should a woman eat a day?', 'Most adult women need roughly 1,600–2,400 calories a day, depending on age, size and activity, according to the Dietary Guidelines for Americans. A calorie calculator gives a personal estimate from your height, weight, age and activity level.'],
    ['How many calories should a man eat a day?', 'Most adult men need roughly 2,000–3,000 calories a day. Younger, taller and more active men are at the top of that range.'],
    ['How many calories should I eat to lose weight?', 'A common approach is about 500 calories a day below your maintenance calories, which leads to roughly 0.5 kg (1 lb) of weight loss a week. Most guidance advises not going below about 1,200 calories a day for women or 1,500 for men without medical supervision.'],
    ['What is the difference between BMR and TDEE?', 'BMR (basal metabolic rate) is what your body burns at complete rest. TDEE (total daily energy expenditure) is BMR plus everything you do — walking, working, exercise — and is the number to base your eating on.'],
    ['How accurate are calorie calculators?', 'They are good estimates for most people, often within about 10% of measured values, but individuals vary. Use the result as a starting point, track your weight for two or three weeks, and adjust by 100–200 calories if needed.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> most adult women need about <strong>1,600–2,400 calories a day</strong> and most men about <strong>2,000–3,000</strong>. Your exact number depends on your age, sex, height, weight and how active you are. To lose about 0.5 kg (1 lb) a week, eat around <strong>500 calories less</strong> than your maintenance level. Get your personal numbers below.</p></blockquote>

<p>The "2,000 calories a day" on food labels is a reference value, not a personal target. A small, inactive person might maintain weight on 1,600, while a tall, active one needs 3,000 or more. Here's how to find your own number.</p>
{{tool:calorie-calculator}}

<h2>Step 1: Your BMR (calories at rest)</h2>
<p>Your <strong>basal metabolic rate</strong> is the energy your body uses just to keep you alive — breathing, circulation, keeping warm — if you rested all day. The most widely used formula is <strong>Mifflin-St Jeor</strong>:</p>
<ul>
<li><strong>Men:</strong> BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5</li>
<li><strong>Women:</strong> BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161</li>
</ul>
<p>Example: a 30-year-old woman, 165 cm and 68 kg → 680 + 1,031 − 150 − 161 = <strong>1,400 calories</strong>.</p>
<p>The <a href="/bmr-calculator">BMR calculator</a> also shows the Harris-Benedict result and, if you know your body fat percentage, the Katch-McArdle formula.</p>

<h2>Step 2: Multiply by your activity level (TDEE)</h2>
<p>Your <strong>total daily energy expenditure</strong> adds everything you do on top of resting. Multiply your BMR by the factor that best matches your typical week:</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Activity level</th><th class="num">Multiply BMR by</th><th class="num">Example woman (BMR 1,400)</th><th class="num">Example man (BMR 1,763)</th></tr></thead>
<tbody>
<tr><td>Sedentary — desk job, little exercise</td><td class="num">1.2</td><td class="num">1,680</td><td class="num">2,115</td></tr>
<tr><td>Light — exercise 1–3 days/week</td><td class="num">1.375</td><td class="num">1,925</td><td class="num">2,423</td></tr>
<tr><td>Moderate — exercise 3–5 days/week</td><td class="num">1.55</td><td class="num">2,170</td><td class="num">2,732</td></tr>
<tr><td>Active — exercise 6–7 days/week</td><td class="num">1.725</td><td class="num">2,415</td><td class="num">3,040</td></tr>
<tr><td>Very active — hard training or a physical job</td><td class="num">1.9</td><td class="num">2,660</td><td class="num">3,349</td></tr>
</tbody></table></div>
<p>The example man is 35 years old, 178 cm and 82 kg. Be honest about activity: most people with office jobs are "sedentary" or "light" even if they go to the gym a couple of times a week.</p>

<h2>Step 3: Adjust for your goal</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Goal</th><th>Daily calories</th><th>Expected change</th></tr></thead>
<tbody>
<tr><td>Lose weight</td><td>TDEE − 500</td><td>About 0.5 kg (1 lb) a week</td></tr>
<tr><td>Lose weight slowly</td><td>TDEE − 250</td><td>About 0.25 kg (½ lb) a week</td></tr>
<tr><td>Maintain</td><td>TDEE</td><td>Stable weight</td></tr>
<tr><td>Gain weight slowly</td><td>TDEE + 250</td><td>About 0.25 kg (½ lb) a week</td></tr>
<tr><td>Gain weight</td><td>TDEE + 500</td><td>About 0.5 kg (1 lb) a week</td></tr>
</tbody></table></div>
<p>For our moderately active example woman, that's about <strong>1,670 calories a day</strong> to lose 0.5 kg a week. The <a href="/calorie-calculator">calorie calculator</a> shows a full table like this for your own numbers.</p>

<h2>How low is too low?</h2>
<p>Very low-calorie diets make it hard to get enough protein, vitamins and minerals, and they often lead to muscle loss and rebound weight gain. General guidance is not to go below about <strong>1,200 calories a day for women</strong> or <strong>1,500 for men</strong> unless a doctor is supervising. The calculator flags any target below these levels with ⚠️.</p>
<p>If you're pregnant, breastfeeding, under 18, have diabetes or another medical condition, or have a history of eating disorders, talk to a doctor or registered dietitian before changing how much you eat.</p>

<h2>Why your results may differ</h2>
<ul>
<li><strong>Formulas are averages.</strong> Two people of the same size can burn a few hundred calories a day differently.</li>
<li><strong>Muscle burns more than fat,</strong> so muscular people usually need more than the formula says.</li>
<li><strong>Your needs fall as you lose weight.</strong> Recalculate after every 4–5 kg (10 lb) of change.</li>
<li><strong>Tracking is imperfect.</strong> Portion sizes, cooking oil and drinks are easy to underestimate.</li>
</ul>
<p>The practical approach: eat at your estimated target for 2–3 weeks, weigh yourself at the same time a few times a week, and adjust by 100–200 calories if your weight isn't moving the way you expect.</p>

<h2>Quality matters too</h2>
<p>Calories decide whether you gain or lose weight, but what you eat decides how you feel. Prioritise protein (it keeps you fuller and protects muscle), vegetables, fruit, whole grains and enough water — the <a href="/water-intake-calculator">water intake calculator</a> estimates how much you need. To see whether your current weight is in the healthy range for your height, check your <a href="/bmi-calculator">BMI</a> or read <a href="/blog/healthy-bmi-chart">what a healthy BMI is</a>.</p>
`,
};

module.exports = {
  title: 'What Is a Healthy BMI? BMI Chart for Women and Men by Height',
  desc: 'The healthy BMI range explained, a chart of healthy weights for every height in pounds and kilograms, Asian BMI cut-offs, BMI for children, and what BMI can and can\'t tell you.',
  date: '2026-11-01',
  tools: ['bmi-calculator', 'ideal-weight-calculator', 'body-fat-calculator'],
  faq: [
    ['What is a healthy BMI?', 'For adults, a BMI from 18.5 to 24.9 is classed as a healthy weight by the World Health Organization. Under 18.5 is underweight, 25 to 29.9 is overweight, and 30 or above is obese.'],
    ['Is the healthy BMI different for women and men?', 'No. Adult BMI categories are the same for women and men. Women tend to have more body fat than men at the same BMI, which is one reason BMI is a screening tool rather than a diagnosis.'],
    ['What is a healthy weight for 5\'4" female?', 'For a height of 5\'4" (163 cm), a BMI of 18.5–24.9 corresponds to roughly 108–145 lb (49–66 kg). The same range applies to men of that height.'],
    ['Why are BMI cut-offs lower for Asian people?', 'Research shows that people of South Asian, Chinese and other East Asian backgrounds tend to develop type 2 diabetes and heart disease at a lower BMI. Many health bodies therefore use 23 as the overweight threshold and 27.5 as the obese threshold for these groups.'],
    ['Does BMI work for children?', 'Not with adult cut-offs. Children and teens (2–19) are assessed with BMI-for-age percentiles, which compare them to other children of the same age and sex.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> for adults, a <strong>healthy BMI is 18.5 to 24.9</strong>. Below 18.5 is underweight, 25–29.9 is overweight and 30 or more is obese. The ranges are the same for women and men. Enter your height and weight below to see your BMI and the healthy weight range for your height.</p></blockquote>

<p>Body mass index (BMI) is a quick way to check whether your weight is in a healthy range for your height. Doctors use it as a first screening step because it's simple and free — but it's not a measure of body fat, and it doesn't tell the whole story. Here's what the numbers mean.</p>
{{tool:bmi-calculator}}

<h2>BMI categories for adults</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>BMI</th><th>Category (WHO)</th><th>Asian cut-offs</th></tr></thead>
<tbody>
<tr><td>Below 18.5</td><td>Underweight</td><td>Below 18.5</td></tr>
<tr><td>18.5 – 24.9</td><td><strong>Healthy weight</strong></td><td>18.5 – 22.9</td></tr>
<tr><td>25 – 29.9</td><td>Overweight</td><td>23 – 27.4</td></tr>
<tr><td>30 – 34.9</td><td>Obese (class 1)</td><td rowspan="3">27.5 and above</td></tr>
<tr><td>35 – 39.9</td><td>Obese (class 2)</td></tr>
<tr><td>40 and above</td><td>Obese (class 3)</td></tr>
</tbody></table></div>

<h2>Healthy weight chart by height</h2>
<p>This chart shows the weight range that gives a BMI of 18.5–24.9 at each height. It applies to both women and men.</p>
<div class="table-wrap"><table class="table">
<thead><tr><th>Height</th><th class="num">Healthy weight (lb)</th><th class="num">Healthy weight (kg)</th></tr></thead>
<tbody>
<tr><td>4'10" (147 cm)</td><td class="num">89 – 119</td><td class="num">40 – 54</td></tr>
<tr><td>5'0" (152 cm)</td><td class="num">95 – 127</td><td class="num">43 – 58</td></tr>
<tr><td>5'2" (157 cm)</td><td class="num">101 – 136</td><td class="num">46 – 62</td></tr>
<tr><td>5'4" (163 cm)</td><td class="num">108 – 145</td><td class="num">49 – 66</td></tr>
<tr><td>5'6" (168 cm)</td><td class="num">115 – 154</td><td class="num">52 – 70</td></tr>
<tr><td>5'8" (173 cm)</td><td class="num">122 – 164</td><td class="num">55 – 74</td></tr>
<tr><td>5'10" (178 cm)</td><td class="num">129 – 174</td><td class="num">58 – 79</td></tr>
<tr><td>6'0" (183 cm)</td><td class="num">136 – 184</td><td class="num">62 – 83</td></tr>
<tr><td>6'2" (188 cm)</td><td class="num">144 – 194</td><td class="num">65 – 88</td></tr>
<tr><td>6'4" (193 cm)</td><td class="num">152 – 205</td><td class="num">69 – 93</td></tr>
</tbody></table></div>
<p>Your exact range for any height appears in the <a href="/bmi-calculator">BMI calculator</a> under "Healthy weight for your height".</p>

<h2>How BMI is calculated</h2>
<ul>
<li><strong>Metric:</strong> BMI = weight (kg) ÷ height (m)². For 68 kg and 1.70 m: 68 ÷ (1.70 × 1.70) = 68 ÷ 2.89 = <strong>23.5</strong>.</li>
<li><strong>Imperial:</strong> BMI = 703 × weight (lb) ÷ height (in)². For 150 lb and 5'5" (65 in): 703 × 150 ÷ 4,225 = <strong>25.0</strong>.</li>
</ul>

<h2>Is a healthy BMI different for women and men?</h2>
<p>The adult categories are identical for everyone 20 and over. What differs is body composition: at the same BMI, women typically carry more body fat than men, and very muscular people of either sex can have a "overweight" BMI while being lean. If you want a closer look at body composition, the <a href="/body-fat-calculator">body fat calculator</a> estimates body fat percentage from simple tape measurements.</p>

<h2>Asian BMI cut-offs</h2>
<p>Studies have found that people of South Asian (Pakistani, Indian, Bangladeshi, Sri Lankan) and East Asian backgrounds face higher risks of type 2 diabetes and heart disease at lower BMIs. Based on a World Health Organization expert consultation, many health services — including the UK's NHS guidance — use <strong>23</strong> as the point to take action on weight and <strong>27.5</strong> as the higher-risk threshold for these groups. Tick "Use Asian BMI cut-offs" in the calculator to apply them.</p>

<h2>BMI for children and teenagers</h2>
<p>Adult categories don't apply to anyone under 20, because children's body fat changes as they grow and differs between boys and girls. Instead, a child's BMI is compared with others of the same age and sex using growth charts:</p>
<ul>
<li>Below the 5th percentile — underweight</li>
<li>5th to below the 85th percentile — healthy weight</li>
<li>85th to below the 95th percentile — overweight</li>
<li>95th percentile and above — obese</li>
</ul>
<p>Your child's doctor or school nurse can plot this on the correct chart.</p>

<h2>What BMI doesn't tell you</h2>
<ul>
<li><strong>Muscle vs fat:</strong> athletes and bodybuilders can have a high BMI with little body fat.</li>
<li><strong>Where fat is stored:</strong> fat around the waist carries more health risk. A waist measurement under half your height is a useful extra check.</li>
<li><strong>Age:</strong> older adults lose muscle, so a "healthy" BMI can hide low muscle mass.</li>
<li><strong>Pregnancy:</strong> BMI isn't used to judge weight during pregnancy.</li>
</ul>
<p>BMI is a starting point for a conversation with a healthcare professional, not a diagnosis. If you're outside the healthy range, a doctor can look at blood pressure, blood sugar, waist size and family history to give you the full picture.</p>

<h2>Next steps</h2>
<p>The <a href="/ideal-weight-calculator">ideal weight calculator</a> compares the classic ideal-weight formulas for your height. If you're planning to change your weight, see <a href="/blog/how-many-calories-should-i-eat-a-day">how many calories you need a day</a>.</p>
`,
};

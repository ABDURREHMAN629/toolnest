module.exports = {
  title: 'What Is Keyword Density? Formula, Ideal Percentage and How to Check It',
  desc: 'Keyword density explained: the formula, what percentage is "good" for SEO in 2026, why there is no magic number, how to check any article, and what to do instead of keyword stuffing.',
  date: '2026-11-01',
  tools: ['keyword-density-checker', 'word-counter', 'meta-tag-generator'],
  faq: [
    ['What is a good keyword density for SEO?', 'There is no official ideal. Google has said keyword density is not a ranking factor. As a rule of thumb, most well-written articles end up around 0.5–2% for their main keyword. If yours is well above 3%, read the text aloud — it probably sounds repetitive.'],
    ['How do you calculate keyword density?', 'Divide the number of times the keyword appears by the total number of words, then multiply by 100. A keyword used 12 times in a 1,000-word article has a density of 1.2%.'],
    ['How many times should I use a keyword in 1,000 words?', 'Usually somewhere between 5 and 20 times for the exact phrase, including the title, an early paragraph and one or two headings. Focus on covering the topic fully; variations and related words count too.'],
    ['What is keyword stuffing?', 'Repeating a keyword unnaturally to try to rank — in sentences that don\'t read well, in long lists, or hidden on the page. Google treats it as spam and it can lower your rankings.'],
    ['Does keyword density count multi-word phrases?', 'It can. For a two-word phrase, count how many times the phrase appears and divide by the total word count. The keyword density checker shows one-, two- and three-word phrases separately.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> keyword density is the percentage of words in a page that are your target keyword: <strong>(times the keyword appears ÷ total words) × 100</strong>. There's no perfect number — Google says it isn't a ranking factor — but natural, well-written pages usually land around <strong>0.5–2%</strong> for their main phrase.</p></blockquote>

<p>Keyword density is one of the oldest ideas in SEO. In the early 2000s, repeating a keyword more often really did help a page rank, so people stuffed pages full of them. Search engines have long since moved on, but density is still a useful sanity check: too low and the page may not be clearly about the topic, too high and it reads like spam.</p>
{{tool:keyword-density-checker}}

<h2>The keyword density formula</h2>
<p><strong>Keyword density = (number of times the keyword appears ÷ total number of words) × 100</strong></p>
<ul>
<li>"Coffee grinder" appears 9 times in a 1,200-word article → 9 ÷ 1,200 × 100 = <strong>0.75%</strong></li>
<li>"Budget" appears 25 times in an 800-word post → 25 ÷ 800 × 100 = <strong>3.1%</strong> (probably too repetitive)</li>
</ul>
<p>Some tools count a two-word phrase as two words when they calculate density, which gives a higher percentage. Either way, use the number as a guide, not a target.</p>

<h2>What is a good keyword density?</h2>
<div class="table-wrap"><table class="table">
<thead><tr><th>Density for the main keyword</th><th>What it usually means</th></tr></thead>
<tbody>
<tr><td>Under 0.3%</td><td>The page may not clearly say what it's about. Check the keyword is in the title, the first paragraph and at least one heading.</td></tr>
<tr><td>0.5% – 2%</td><td>Typical of natural, well-written content.</td></tr>
<tr><td>2% – 3%</td><td>Fine for short pages and product descriptions; on long articles, read it aloud to check it isn't repetitive.</td></tr>
<tr><td>Over 3%</td><td>Likely to read as keyword stuffing. Replace some uses with pronouns, synonyms and related terms.</td></tr>
</tbody></table></div>
<p>These ranges are rules of thumb, not Google rules. A page can rank first with a density of 0.4% if it answers the question better than anything else.</p>

<h2>How to check keyword density</h2>
<ol>
<li>Copy the text of your article or web page (just the main content, not the menu and footer).</li>
<li>Paste it into the <a href="/keyword-density-checker">keyword density checker</a>.</li>
<li>Leave <strong>Ignore common words</strong> on so "the", "and" and "of" don't fill the list.</li>
<li>Look at the one-word, two-word and three-word tables. Your main keyword should be near the top; if a word you didn't intend to target is dominating, that's what the page looks like it's about.</li>
</ol>
<p>The checker also shows total and unique word counts. For a fuller breakdown — characters, sentences, reading time — use the <a href="/word-counter">word counter</a>.</p>

<h2>Where your keyword matters more than how often</h2>
<p>Placement does more than repetition. Make sure your main keyword (or a close variation) appears in:</p>
<ul>
<li><strong>The title tag</strong> — ideally near the start. It's what shows as the blue link in Google.</li>
<li><strong>The H1 heading</strong> at the top of the page.</li>
<li><strong>The first 100 words</strong>, so readers and search engines know immediately what the page covers.</li>
<li><strong>One or two subheadings</strong> where it fits naturally.</li>
<li><strong>The URL</strong> — short and readable, like <code>/coffee-grinder-guide</code>.</li>
<li><strong>The meta description</strong> — it doesn't affect ranking directly, but Google bolds matching words in results, which helps clicks. The <a href="/meta-tag-generator">meta tag generator</a> helps you write one at the right length.</li>
</ul>

<h2>What to do instead of keyword stuffing</h2>
<ul>
<li><strong>Use variations.</strong> "Coffee grinder", "burr grinder", "grind coffee beans", "grinder for espresso" — modern search engines understand they're related.</li>
<li><strong>Answer the related questions</strong> people search for. Google's "People also ask" box and autocomplete suggestions are a free list of them.</li>
<li><strong>Cover the topic completely.</strong> A page that explains what, why, how, how much and common mistakes will naturally use the right words.</li>
<li><strong>Write for the reader.</strong> If a sentence only exists to fit the keyword in, delete it.</li>
</ul>

<h2>Keyword density for a 1,000-word article</h2>
<p>At 1% density, a 1,000-word article uses its main keyword about <strong>10 times</strong>; at 2%, about 20. In practice that's: once in the title, once in the H1, once in the opening paragraph, once or twice in subheadings, and a handful of times in the body where it reads naturally. Not sure how long your article is in pages? See <a href="/blog/how-many-pages-is-1000-words">how many pages 1,000 words is</a>.</p>
`,
};

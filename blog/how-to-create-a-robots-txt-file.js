module.exports = {
  title: 'How to Create a Robots.txt File (With Examples for WordPress and Shopify)',
  desc: 'What robots.txt does, how to create one in minutes, ready-to-copy examples, how to block AI crawlers, where to upload it on WordPress and Shopify, and the mistakes that hide sites from Google.',
  date: '2026-11-01',
  tools: ['robots-txt-generator', 'meta-tag-generator'],
  faq: [
    ['Where do I put robots.txt?', 'In the root of your domain, so it loads at https://yourdomain.com/robots.txt. A robots.txt file in a subfolder is ignored. Each subdomain (like blog.yourdomain.com) needs its own file.'],
    ['Does robots.txt stop a page from appearing in Google?', 'Not reliably. It stops Google from crawling the page, but a blocked URL can still be indexed (without a description) if other sites link to it. To keep a page out of search results, allow crawling and add a noindex meta tag instead.'],
    ['Do I need a robots.txt file?', 'It\'s not required — without one, search engines crawl everything they can find. But a simple file that allows everything and lists your sitemap is recommended, and it stops 404 errors in your logs.'],
    ['How do I block ChatGPT and other AI crawlers?', 'Add a separate group for each AI crawler, such as "User-agent: GPTBot" followed by "Disallow: /". The robots.txt generator can add the common AI crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended and others) with one checkbox.'],
    ['How do I test my robots.txt?', 'Open yourdomain.com/robots.txt in a browser to check it is live, then check Google Search Console under Settings → robots.txt, which shows the version Google fetched and any errors.'],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> robots.txt is a plain text file at <code>yourdomain.com/robots.txt</code> that tells search engine crawlers which parts of your site they may visit. A safe file for most sites is just three lines: <code>User-agent: *</code>, <code>Disallow:</code> (with nothing after it, meaning "allow everything"), and <code>Sitemap: https://yourdomain.com/sitemap.xml</code>.</p></blockquote>

<p>Every time Googlebot, Bingbot or another crawler visits your site, it checks robots.txt first. Getting this one small file right helps search engines spend their time on your important pages. Getting it wrong can hide your whole website from Google. Here's how to create one safely.</p>
{{tool:robots-txt-generator}}

<h2>How robots.txt works</h2>
<p>A robots.txt file is made of <strong>groups</strong>. Each group starts with a <code>User-agent</code> line naming the crawler (or <code>*</code> for all crawlers), followed by rules:</p>
<ul>
<li><code>Disallow: /path/</code> — don't crawl anything that starts with this path.</li>
<li><code>Allow: /path/</code> — an exception inside a disallowed folder.</li>
<li><code>Sitemap: https://…</code> — where your XML sitemap lives (can go anywhere in the file).</li>
<li><code>Crawl-delay: 10</code> — seconds between requests. Bing and Yandex respect it; <strong>Google ignores it</strong>.</li>
</ul>
<p>Paths are case-sensitive and match from the start of the URL. <code>Disallow: /admin</code> also blocks <code>/admin-login</code> and <code>/administrator</code>, so end folder paths with a slash when you mean just the folder.</p>

<h2>How to create a robots.txt file in 3 steps</h2>
<ol>
<li><strong>Generate it.</strong> In the <a href="/robots-txt-generator">robots.txt generator</a>, choose whether to allow or block all robots by default, list any folders to keep crawlers out of, add your sitemap URL, and optionally tick the box to block AI training crawlers.</li>
<li><strong>Download it.</strong> Click download to get a file named exactly <code>robots.txt</code> (all lowercase, plain text, UTF-8).</li>
<li><strong>Upload it to the root of your site</strong> so it opens at <code>https://yourdomain.com/robots.txt</code>, then open that address in your browser to check.</li>
</ol>

<h2>Robots.txt examples you can copy</h2>
<h3>Allow everything (recommended for most sites)</h3>
<pre><code>User-agent: *
Disallow:

Sitemap: https://www.example.com/sitemap.xml</code></pre>

<h3>Block a few private folders</h3>
<pre><code>User-agent: *
Disallow: /admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /search

Sitemap: https://www.example.com/sitemap.xml</code></pre>

<h3>Block AI training crawlers but allow search engines</h3>
<pre><code>User-agent: *
Disallow:

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

Sitemap: https://www.example.com/sitemap.xml</code></pre>
<p>Google-Extended controls whether Google can use your content for its Gemini models; blocking it does <strong>not</strong> affect your Google Search rankings. Blocking AI crawlers is a business choice — some sites want the visibility that AI answers can bring, others don't want their content used for training.</p>

<h3>Block the whole site (staging or development sites only)</h3>
<pre><code>User-agent: *
Disallow: /</code></pre>
<p>⚠️ This is the single most common robots.txt disaster: a developer blocks the staging site, and the same file gets copied to the live site. If your traffic suddenly drops to zero after a redesign, check robots.txt first.</p>

<h2>Robots.txt on WordPress</h2>
<p>WordPress creates a <em>virtual</em> robots.txt automatically. To customise it:</p>
<ul>
<li><strong>Yoast SEO:</strong> Yoast → Tools → File editor → Create robots.txt file, paste your rules and save.</li>
<li><strong>Rank Math:</strong> Rank Math → General Settings → Edit robots.txt.</li>
<li><strong>Without a plugin:</strong> upload a robots.txt file to your site's root folder (where wp-config.php is) with your host's file manager or FTP. A real file overrides the virtual one.</li>
</ul>
<p>A typical WordPress file blocks <code>/wp-admin/</code> but allows <code>/wp-admin/admin-ajax.php</code>, because some themes and plugins need it. Don't block <code>/wp-content/</code> or <code>/wp-includes/</code> — Google needs your CSS and JavaScript to render pages properly.</p>

<h2>Robots.txt on Shopify</h2>
<p>Shopify generates a sensible robots.txt for every store, blocking cart, checkout and internal search pages. To change it, go to Online Store → Themes → Edit code → Add a new template → choose <strong>robots.txt</strong>. This creates <code>robots.txt.liquid</code>, where you can add rules. Most stores never need to.</p>

<h2>Common robots.txt mistakes</h2>
<ul>
<li><strong>Using robots.txt to hide a page from Google.</strong> Blocked pages can still be indexed from links. Use a <code>noindex</code> meta tag instead — the <a href="/meta-tag-generator">meta tag generator</a> can create one — and make sure the page is <em>not</em> blocked, or Google will never see the tag.</li>
<li><strong>Blocking CSS, JavaScript or images</strong> that pages need to render.</li>
<li><strong>Putting the file in the wrong place</strong> — it must be at the root, not <code>/blog/robots.txt</code>.</li>
<li><strong>Wrong file name</strong> — it must be <code>robots.txt</code>, lowercase, not <code>Robots.TXT</code> or <code>robots.txt.txt</code>.</li>
<li><strong>Treating it as security.</strong> robots.txt is public and only well-behaved bots follow it. Protect private areas with a password, not a Disallow line.</li>
</ul>

<h2>How to check your robots.txt is working</h2>
<ol>
<li>Visit <code>yourdomain.com/robots.txt</code> — you should see your rules as plain text.</li>
<li>In Google Search Console, open <strong>Settings → robots.txt</strong> to see when Google last fetched it and whether there were errors.</li>
<li>Use <strong>URL Inspection</strong> on an important page; it tells you if robots.txt is blocking it.</li>
</ol>
`,
};

# Going live: domain, hosting, search and earning

The code is ready. These steps need your own accounts and payment, so you do them yourself. Total cost: about **$10–15 per year** for the domain. Hosting is free.

## 1. Buy a domain (about 15 minutes)

- Choose a short `.com` that is easy to spell. Avoid hyphens and numbers. `toolnest.com` is almost certainly taken. Try names like `toolnest.app`, `gettoolnest.com`, `usetoolnest.com` or a new brand name.
- **Buy it at Cloudflare Registrar** (dash.cloudflare.com → Domain Registration → Register). It charges cost price with no markup and no renewal price jump, and DNS is already in the same place as your hosting. If Cloudflare doesn't sell your extension, use Namecheap or Porkbun and then add the domain to Cloudflare (free plan).

## 2. Host on Cloudflare Pages (free, built for heavy traffic)

Cloudflare Pages serves static sites from 300+ data centres with **unlimited bandwidth and requests** on the free plan. Every page here is static, so the site can handle millions of visits without a server to scale or pay for.

1. dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git** → choose `ABDURREHMAN629/toolnest`.
2. Build settings: framework **None**, build command `node build.js`, output directory `site`. Under environment variables, set `NODE_VERSION` = `20`.
3. Deploy. You get a `*.pages.dev` URL. Check that it works.
4. **Custom domains → Set up a domain** → enter `www.yourdomain.com`, then add the bare `yourdomain.com` too. Cloudflare creates the DNS records and the HTTPS certificate.
5. Send the bare domain to `www`: Rules → **Redirect Rules** → template "Redirect from root to WWW". Then everyone, including Google, sees only one version of each page.

## 3. Point the code at the domain

In `site.config.js` set:

```js
url: 'https://www.yourdomain.com',
```

Commit and push. Cloudflare rebuilds automatically on every push to `main`. All canonical links, the sitemap and robots.txt now use the new domain.

## 4. Turn off the old GitHub Pages copy

GitHub Pages is still publishing the same site at `abdurrehman629.github.io/toolnest`. Once the new domain works:

- Delete `.github/workflows/pages.yml`, then go to GitHub → repo **Settings → Pages** → **Unpublish site**.

Until you do this, Google sees two copies of every page. The canonical tags point to the new domain, which limits the damage, but one clean copy is better.

## 5. Get into Google and Bing (the start of organic traffic)

1. **Google Search Console** (search.google.com/search-console) → add a **Domain** property → verify with the DNS TXT record (Cloudflare can add it in one click).
2. Sitemaps → submit `https://www.yourdomain.com/sitemap.xml`.
3. URL Inspection → request indexing for the homepage and your 10 most important tools.
4. **Bing Webmaster Tools** (bing.com/webmasters) → "Import from Google Search Console". This also covers DuckDuckGo, Yahoo and ChatGPT search, which use Bing's index.
5. In Cloudflare, turn on **Crawler Hints** (Caching → Configuration). Bing and Yandex then hear about changes immediately.

Expect Google to take **2–8 weeks** to index most pages. Expect real traffic to take **3–6 months**. A new domain has no reputation yet. That is normal for every new site, and no setting fixes it faster.

## 6. Analytics and earning

- **Google Analytics 4**: create a property and put the `G-…` ID in `gaId`.
- **Google AdSense**: apply once the site is on the custom domain and has some traffic. AdSense does not accept `github.io` addresses. The About, Contact, Privacy and Terms pages it requires are already built. After approval, put your `ca-pub-…` ID in `adsenseClient` and push. Auto Ads and `ads.txt` are generated for you.
- Before you get approved, you can still earn a little by recommending related products, for example a PDF editor or a VPN, through affiliate links on the matching tool pages.

## 7. How to actually rank (what matters most)

Search for "merge pdf" or "compress image" and you will see iLovePDF, Smallpdf and Adobe. A new site will not beat them for years. **Win the long tail first**, then move up:

1. **Target specific searches with less competition** that this site already serves well: *cgpa to percentage 9.5*, *attendance calculator 75%*, *zakat calculator 2026 Pakistan*, *number to words lakh crore*, *text to handwriting for assignment*, *ATS resume checker free*. Students in Pakistan and India search these constantly. Few strong sites target them.
2. **Write unique content for each important tool.** At the moment most tool pages share the same template text, and Google ranks near-identical pages low. `content.js` lets you add a real guide to any tool: how it works, the formula, a worked example, common mistakes. Four are done as examples: CGPA to Percentage, Attendance, Zakat and Number to Words. Add 2–3 a week, starting with the tools in point 1. 300–800 useful words per page is a good target.
3. **Watch Search Console every week.** Under Performance → Queries, look for searches where you show up in positions 8–30. Improve those pages: answer the exact question in the text and add that wording to the title. This is the highest-return SEO work there is.
4. **Earn real links without spamming.** Answer questions on Reddit or Quora where a tool really solves the problem. Post the open-source repo on Product Hunt, Hacker News ("Show HN") and dev.to. Submit to free-tool directories such as AlternativeTo and SaaSHub. Share student tools in university groups. Avoid buying links or bulk "SEO packages": Google penalises them.
5. **Keep it fast.** Pages are plain HTML and already very fast. Don't add heavy scripts or ad slots that push the tool below the first screen. Speed and usability are ranking signals, and visitors who stay are what make ad money.

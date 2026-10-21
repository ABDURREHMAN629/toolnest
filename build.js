const fs = require('fs');
const path = require('path');
const config = require('./site.config');
const { CATEGORIES, TOOLS } = require('./site/assets/js/registry.js');
const CONTENT = require('./content.js');

const OUT = path.join(__dirname, 'site');
const VERSION = Date.now().toString(36);
const today = new Date().toISOString().slice(0, 10);
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const toolBySlug = Object.fromEntries(TOOLS.map(t => [t.slug, t]));
const COUNT = Math.floor(TOOLS.filter(t => !t.of).length / 10) * 10;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Clean URLs (no .html): Cloudflare Pages, Netlify and GitHub Pages all serve /merge-pdf from merge-pdf.html.
const SITE = config.url.replace(/\/$/, '');
const BASE = new URL(SITE).pathname.replace(/\/?$/, '/');
const abs = p => `${SITE}/${p === 'index.html' ? '' : p.replace(/\.html$/, '')}`;
const year = new Date().getFullYear();
const owner = config.owner || {};
const waLink = config.whatsapp ? `https://wa.me/${config.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi, I'm messaging from ${config.name}`)}` : '';

function head({ title, desc, file, extraHead = '', jsonld = [], noindex = false }) {
  const ga = config.gaId ? `
<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(config.gaId)}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${esc(config.gaId)}');</script>` : '';
  const ads = config.adsenseClient ? `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(config.adsenseClient)}" crossorigin="anonymous"></script>` : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${esc(abs(file))}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(config.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(abs(file))}">
<meta property="og:image" content="${SITE}/assets/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">${config.googleVerification ? `
<meta name="google-site-verification" content="${esc(config.googleVerification)}">` : ''}${config.bingVerification ? `
<meta name="msvalidate.01" content="${esc(config.bingVerification)}">` : ''}
<meta name="theme-color" content="#4f46e5">
<link rel="icon" href="${BASE}assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${BASE}assets/css/style.css?v=${VERSION}">
<script>window.BASE=${JSON.stringify(BASE)};try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>${ga}${ads}
${jsonld.map(j => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}${extraHead}
</head>
<body>
${header()}`;
}

function header() {
  const cats = CATEGORIES.map(c => `<a href="${BASE}${c.slug}"><span>${c.icon}</span>${esc(c.name)}</a>`).join('');
  return `<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="${BASE}" aria-label="${esc(config.name)} home"><span class="logo-mark">◆</span>${esc(config.name)}</a>
    <nav class="main-nav">
      <div class="dropdown">
        <button class="nav-btn" aria-haspopup="true" aria-expanded="false">All Tools <span aria-hidden="true">▾</span></button>
        <div class="dropdown-menu">${cats}</div>
      </div>
      <a class="nav-link hide-sm" href="${BASE}pdf-tools">PDF</a>
      <a class="nav-link hide-sm" href="${BASE}image-tools">Image</a>
      <a class="nav-link hide-sm" href="${BASE}video-audio-tools">Video</a>
      <a class="nav-link hide-sm" href="${BASE}student-tools">Student</a>
    </nav>
    <div class="header-search">
      <input type="search" id="site-search" placeholder="Search ${COUNT}+ tools…" autocomplete="off" aria-label="Search tools">
      <div class="search-results" id="search-results" role="listbox"></div>
    </div>
    <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">🌓</button>
  </div>
</header>`;
}

function footer(scripts = '') {
  const cols = CATEGORIES.map(c => {
    const list = TOOLS.filter(t => t.cat === c.id && !t.of).slice(0, 6)
      .map(t => `<li><a href="${BASE}${t.slug}">${esc(t.name)}</a></li>`).join('');
    return `<div><h4><a href="${BASE}${c.slug}">${esc(c.name)}</a></h4><ul>${list}</ul></div>`;
  }).join('');
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="${BASE}"><span class="logo-mark">◆</span>${esc(config.name)}</a>
        <p>${esc(config.tagline)}. ${COUNT}+ free tools that run right in your browser — no sign-up, no uploads, no limits.</p>
      </div>
      <div class="footer-links"><a href="${BASE}about">About</a><a href="${BASE}contact">Contact</a><a href="${BASE}privacy-policy">Privacy Policy</a><a href="${BASE}terms">Terms of Use</a><a href="${BASE}sitemap.xml">Sitemap</a>${waLink ? `<a href="${waLink}" rel="noopener" target="_blank">💬 WhatsApp</a>` : ''}</div>
    </div>
    <div class="footer-cols">${cols}</div>
    <p class="copyright">© ${year} ${esc(config.name)}. All rights reserved.</p>
  </div>
</footer>
<script src="${BASE}assets/js/registry.js?v=${VERSION}"></script>
<script src="${BASE}assets/js/core.js?v=${VERSION}"></script>
${scripts}
<script src="${BASE}assets/js/assistant.js?v=${VERSION}" defer></script>
</body>
</html>
`;
}

function card(t) {
  const c = catById[t.cat];
  return `<a class="tool-card-link" href="${BASE}${t.slug}" data-slug="${t.slug}" data-search="${esc((t.name + ' ' + t.kw + ' ' + c.name).toLowerCase())}">
  <span class="tool-icon" style="--c:${c.color}">${t.icon}</span>
  <span class="tool-card-body"><strong>${esc(t.name)}</strong><span>${esc(t.desc)}</span></span>
</a>`;
}

function faqs(t) {
  const c = catById[t.cat];
  const n = t.name;
  const list = [[`Is the ${n} free to use?`, `Yes. ${n} on ${config.name} is completely free, with no sign-up, no watermark and no daily limits.`]];
  if (['pdf', 'image', 'media'].includes(c.id)) {
    list.push([`Are my files uploaded to a server?`, `No. ${n} processes your files directly in your web browser on your own device. Your files are never uploaded, stored or seen by anyone, which makes it safe for private and confidential documents.`]);
    list.push([`Is there a file size limit?`, `There is no fixed limit, but very large files depend on your device's memory and speed. Files up to a few hundred MB usually work well on a modern computer.`]);
  } else if (['finance', 'health', 'math', 'student'].includes(c.id)) {
    list.push([`How accurate is the ${n}?`, `${n} uses standard, widely accepted formulas and calculates instantly as you type. Results are for general information — for important ${c.id === 'health' ? 'medical' : c.id === 'finance' ? 'financial' : 'academic'} decisions, please confirm with a qualified professional or your institution.`]);
    list.push([`Is my data saved anywhere?`, `No. Everything you enter stays in your browser. Nothing is sent to or stored on our servers.`]);
  } else if (c.id === 'web') {
    list.push([`Is my data stored?`, `No. Most checks run entirely in your browser. Tools that must contact a network service — such as the speed test or IP lookup — only send what is needed to get the result, and we never store it.`]);
  } else {
    list.push([`Is my data private?`, `Yes. ${n} runs entirely in your browser. Your text and data are not uploaded or stored on our servers.`]);
  }
  list.push([`Does ${n} work on mobile phones?`, `Yes. ${config.name} works in any modern browser on Android, iPhone, iPad, Windows, Mac and Linux. There is nothing to install.`]);
  return list;
}

const BENEFITS = {
  default: [['🔒', 'Private', 'Runs in your browser — nothing is uploaded.'], ['⚡', 'Fast', 'Instant results, no waiting in queues.'], ['💸', 'Free', 'No sign-up, no watermark, no limits.'], ['📱', 'Anywhere', 'Works on phone, tablet and desktop.']],
};

const pages = [];
function write(file, html) {
  fs.mkdirSync(path.dirname(path.join(OUT, file)), { recursive: true });
  fs.writeFileSync(path.join(OUT, file), html);
  pages.push(file);
}

for (const t of TOOLS) {
  const c = catById[t.cat];
  const base = t.of ? toolBySlug[t.of] : t;
  const file = `${t.slug}.html`;
  const title = t.title ? `${t.title} | ${config.name}` : `${t.name} – Free Online ${/calculator/i.test(t.name) ? 'Calculator' : 'Tool'} | ${config.name}`;
  const fq = faqs(t);
  const related = TOOLS.filter(x => x.cat === t.cat && x.slug !== t.slug && !x.of).slice(0, 8);
  const more = TOOLS.filter(x => x.popular && x.cat !== t.cat).slice(0, 6);
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: t.name, url: abs(file), description: t.desc, applicationCategory: c.id === 'dev' ? 'DeveloperApplication' : 'UtilitiesApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, ...(owner.name ? { author: { '@type': 'Person', name: owner.name, url: abs('about.html'), sameAs: (owner.links || []).map(l => l[1]) } } : {}) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: abs('index.html') }, { '@type': 'ListItem', position: 2, name: c.name, item: abs(c.slug + '.html') }, { '@type': 'ListItem', position: 3, name: t.name, item: abs(file) }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: fq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const preset = t.preset ? JSON.stringify(t.preset).replace(/</g, '\\u003c') : '{}';
  write(file, head({ title, desc: t.desc, file, jsonld }) + `
<main class="container page">
  <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${BASE}">Home</a><span>›</span><a href="${BASE}${c.slug}">${esc(c.name)}</a><span>›</span><span>${esc(t.name)}</span></nav>
  <div class="tool-head">
    <span class="tool-icon lg" style="--c:${c.color}">${t.icon}</span>
    <div>
      <h1>${esc(t.name)}</h1>
      <p class="lead">${esc(t.desc)}</p>
      ${owner.name ? `<p class="small muted" style="margin:6px 0 0">Built and maintained by <a href="${BASE}about">${esc(owner.name)}</a> · Free, no sign-up</p>` : ''}
    </div>
  </div>
  <section id="tool" class="tool-app" data-tool="${base.slug}" aria-label="${esc(t.name)} tool">
    <div class="tool-loading">Loading ${esc(t.name)}…</div>
    <noscript><p class="notice error">Please enable JavaScript to use this tool.</p></noscript>
  </section>
  <div class="trust-row">${BENEFITS.default.map(([i, h, p]) => `<div><span>${i}</span><strong>${h}</strong><small>${p}</small></div>`).join('')}</div>
  <div class="content-grid">
    <article class="prose">
      <h2>How to use the ${esc(t.name)}</h2>
      <ol class="steps">${t.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      <h2>About this tool</h2>
      <p>${esc(t.desc)} ${esc(t.name)} is part of ${esc(config.name)}'s collection of free ${esc(c.name.toLowerCase())}. ${['pdf', 'image', 'media'].includes(c.id) ? 'All processing happens locally in your browser, so your files stay private and nothing is uploaded.' : 'It works instantly in your browser with no account and no installation.'}</p>${CONTENT[t.slug] || ''}
      <h2>Frequently asked questions</h2>
      <div class="faq">${fq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
    </article>
    <aside class="sidebar">
      <h3>More ${esc(c.name)}</h3>
      <ul class="side-list">${related.map(r => `<li><a href="${BASE}${r.slug}"><span>${r.icon}</span>${esc(r.name)}</a></li>`).join('')}</ul>
      <a class="side-more" href="${BASE}${c.slug}">View all ${esc(c.name)} →</a>
      <h3>Popular tools</h3>
      <ul class="side-list">${more.map(r => `<li><a href="${BASE}${r.slug}"><span>${r.icon}</span>${esc(r.name)}</a></li>`).join('')}</ul>
    </aside>
  </div>
</main>
` + footer(`<script src="${BASE}assets/js/tools/${catById[base.cat].id}.js?v=${VERSION}"></script>
<script>Tools.mount(${JSON.stringify(base.slug)}, document.getElementById('tool'), ${preset});</script>`));
}

for (const c of CATEGORIES) {
  const list = TOOLS.filter(t => t.cat === c.id);
  const file = `${c.slug}.html`;
  write(file, head({
    title: `${c.name} – ${list.length} Free Online ${c.name} | ${config.name}`, desc: c.desc, file,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: c.name, description: c.desc, url: abs(file) }],
  }) + `
<main class="container page">
  <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${BASE}">Home</a><span>›</span><span>${esc(c.name)}</span></nav>
  <div class="tool-head">
    <span class="tool-icon lg" style="--c:${c.color}">${c.icon}</span>
    <div><h1>${esc(c.name)}</h1><p class="lead">${esc(c.desc)}</p></div>
  </div>
  <div class="tool-grid">${list.map(card).join('')}</div>
  <section class="cat-strip"><h2>Explore other categories</h2><div class="chips">${CATEGORIES.filter(x => x.id !== c.id).map(x => `<a class="chip" href="${BASE}${x.slug}">${x.icon} ${esc(x.name)}</a>`).join('')}</div></section>
</main>
` + footer());
}

{
  const popular = TOOLS.filter(t => t.popular);
  const desc = `${COUNT}+ free online tools in one place: PDF converter, image compressor, video converter, CGPA calculator, ATS resume checker, QR code generator and more. No sign-up, works in your browser.`;
  write('index.html', head({
    title: `${config.name} – ${COUNT}+ Free Online Tools: PDF, Image, Video, Calculators`, desc, file: 'index.html',
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: config.name, url: abs('index.html'), potentialAction: { '@type': 'SearchAction', target: `${SITE}/?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
      { '@context': 'https://schema.org', '@type': 'Organization', name: config.name, url: abs('index.html'), logo: `${SITE}/assets/img/logo.png`, email: config.contactEmail, description: desc },
    ],
  }) + `
<main>
  <section class="hero">
    <div class="container">
      <h1>Every tool you need, <span class="grad">free &amp; in one place</span></h1>
      <p class="lead">${COUNT}+ fast, private online tools for PDFs, images, videos, calculators, students, developers and everyday tasks. No sign-up. Your files never leave your device.</p>
      <div class="hero-search">
        <input type="search" id="home-search" placeholder="Search tools — try “compress pdf”, “cgpa” or “qr code”" autocomplete="off" aria-label="Search all tools">
      </div>
      <p class="hero-ask">Not sure which tool you need? <button type="button" class="link-btn" data-ask>✨ Ask the AI assistant</button></p>
      <div class="chips center">${CATEGORIES.map(c => `<a class="chip" href="#${c.id}">${c.icon} ${esc(c.name)}</a>`).join('')}</div>
    </div>
  </section>
  <div class="container page">
    <section id="no-results" class="notice" hidden>No tools match your search. Try a different word, or <button type="button" class="link-btn" data-ask="home-search">ask the AI assistant</button> to find the right tool.</section>
    <section class="home-section" data-section>
      <div class="section-head"><h2>🔥 Most popular tools</h2></div>
      <div class="tool-grid">${popular.map(card).join('')}</div>
    </section>
    ${CATEGORIES.map(c => `<section class="home-section" id="${c.id}" data-section>
      <div class="section-head"><h2>${c.icon} ${esc(c.name)}</h2><a href="${BASE}${c.slug}">View all →</a></div>
      <div class="tool-grid">${TOOLS.filter(t => t.cat === c.id).map(card).join('')}</div>
    </section>`).join('\n')}
    <section class="why">
      <h2>Why people use ${esc(config.name)}</h2>
      <div class="trust-row">${BENEFITS.default.map(([i, h, p]) => `<div><span>${i}</span><strong>${h}</strong><small>${p}</small></div>`).join('')}</div>
    </section>
  </div>
</main>
` + footer());
}

function staticPage(file, title, desc, body) {
  write(file, head({ title: `${title} | ${config.name}`, desc, file }) + `
<main class="container page narrow prose">
  <h1>${esc(title)}</h1>
  ${body}
</main>
` + footer());
}
staticPage('about.html', 'About Us', `About ${config.name} — free online tools built by ${owner.name || 'an independent developer'}.`, `
  <p>${esc(config.name)} is a collection of ${COUNT}+ free online tools for the tasks people do every day: converting and compressing PDFs, editing images, converting videos, calculating grades and loans, writing, coding and more.</p>
  ${owner.name ? `<h2>Who builds ${esc(config.name)}</h2>
  <p>Hi, I'm <strong>${esc(owner.name)}</strong>, ${/^[aeiou]/i.test(owner.role || 'developer') ? 'an' : 'a'} ${esc(owner.role || 'developer')} from ${esc(owner.location || 'Pakistan')}. I design, build and maintain every tool on this site myself.</p>
  <p>In my day job I build business software for manufacturing: I developed a complete ERP system for a textile company — production planning, inventory and reporting — together with an AI assistant that lets staff ask it questions by text or voice, and a computer-vision safety system that stops factory machines when a person comes too close. I also build e-commerce stores, Android apps and web apps, and I'm available for freelance projects worldwide.</p>
  <p>I started ${esc(config.name)} because simple everyday jobs — merging a PDF, compressing a photo, moving contacts to a new phone — kept sending me to websites that upload your private files, bury the tool under ads, or ask you to sign up first. So I built the tools I wanted to use: fast, free, and running inside your own browser so your files never leave your device.</p>
  ${(owner.links || []).length || waLink ? `<p>${[...(owner.links || []).map(([l, u]) => `<a href="${esc(u)}" rel="noopener" target="_blank">${esc(l)}</a>`), waLink ? `<a href="${waLink}" rel="noopener" target="_blank">WhatsApp</a>` : ''].filter(Boolean).join(' · ')}</p>` : ''}` : ''}
  <h2>Our approach</h2>
  <ul><li><strong>Privacy first.</strong> Almost every tool runs entirely in your browser. Files you open are processed on your own device and are never uploaded to us.</li>
  <li><strong>Free forever.</strong> No account, no watermarks, no daily limits.</li>
  <li><strong>Fast and simple.</strong> Each tool does one job well, with a clean interface that works on phones and computers.</li></ul>
  <p>Have an idea for a new tool? <a href="${BASE}contact">Let us know</a>.</p>`);
staticPage('contact.html', 'Contact Us', `Contact the ${config.name} team.`, `
  <p>We'd love to hear from you — whether you found a bug, want to suggest a new tool or have a business enquiry.</p>
  <p>Email: <a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a></p>
  ${waLink ? `<p><a class="btn" href="${waLink}" rel="noopener" target="_blank" style="background:#25D366;border-color:#25D366;color:#fff">💬 Chat on WhatsApp</a></p>` : ''}
  ${config.contactPhone ? `<p>Phone: <a href="tel:${esc(config.contactPhone.replace(/[^\d+]/g, ''))}">${esc(config.contactPhone)}</a></p>` : ''}
  <p>We usually reply within 2 business days.</p>`);
staticPage('privacy-policy.html', 'Privacy Policy', `Privacy policy for ${config.name}.`, `
  <p><em>Last updated: ${today}</em></p>
  <h2>Files and data you use in our tools</h2>
  <p>Our tools are designed to run inside your web browser. Files you select (PDFs, images, videos, audio, documents) and text you type are processed locally on your device and are <strong>not uploaded</strong> to our servers. Some features download helper components (for example the video engine, OCR language data or the background-removal AI model) from public content delivery networks; these downloads do not include your files.</p>
  <h2>Tools that use online services</h2>
  <p>A few tools must contact a third-party service to work: the currency converter (exchange rates from ExchangeRate-API), What Is My IP (IP lookup from ipwho.is), the internet speed test (Cloudflare speed test servers) and the YouTube thumbnail downloader (YouTube image servers). Those services receive your IP address as part of the normal web request.</p>
  <h2>Local storage</h2>
  <p>Some tools save your preferences or content (such as notes, to-do items or theme choice) in your browser's local storage so they are there next time. This data stays on your device and you can clear it at any time through your browser settings.</p>
  <h2>Analytics and advertising</h2>
  <p>We may use analytics services (such as Google Analytics) to understand how the site is used and advertising services (such as Google AdSense) to keep the tools free. These providers may use cookies to serve and measure ads. Google's use of advertising cookies enables it and its partners to serve ads based on your visits to this and other sites. You can opt out of personalised advertising at <a href="https://adssettings.google.com" rel="nofollow noopener">Google Ads Settings</a>.</p>
  <h2>Contact</h2>
  <p>Questions about this policy? Email <a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a>.</p>`);
staticPage('terms.html', 'Terms of Use', `Terms of use for ${config.name}.`, `
  <p><em>Last updated: ${today}</em></p>
  <p>By using ${esc(config.name)} you agree to these terms.</p>
  <h2>Use of the tools</h2>
  <p>The tools are provided free of charge, "as is", without warranties of any kind. Calculators give estimates for general information only and are not financial, medical, legal or academic advice. Always check important results.</p>
  <h2>Your content</h2>
  <p>You keep all rights to the files and text you use with our tools. You are responsible for making sure you have the right to process them.</p>
  <h2>Acceptable use</h2>
  <p>Do not use the site to break the law, infringe copyright or attempt to disrupt the service.</p>
  <h2>Changes</h2>
  <p>We may update these terms and the tools at any time. Continued use means you accept the updated terms.</p>`);
write('404.html', head({ title: `Page not found | ${config.name}`, desc: 'Page not found', file: '404.html', noindex: true }) + `
<main class="container page narrow center-text">
  <h1>Page not found</h1>
  <p class="lead">The page you're looking for doesn't exist. Try searching for a tool above or go back to the <a href="${BASE}">home page</a>.</p>
</main>
` + footer());

const urls = pages.filter(p => p !== '404.html');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(p => `  <url><loc>${esc(abs(p))}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
// ads.txt is required for AdSense to pay out at full rate
if (config.adsenseClient) fs.writeFileSync(path.join(OUT, 'ads.txt'), `google.com, ${config.adsenseClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0
`);
// AI search and assistant crawlers are welcomed by name so ChatGPT, Claude, Perplexity, Gemini, Copilot etc. can read and cite the tools.
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Amazonbot', 'meta-externalagent', 'DuckAssistBot', 'CCBot'];
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\n${AI_BOTS.map(b => `User-agent: ${b}`).join('\n')}\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// llms.txt (https://llmstxt.org): a plain-Markdown map of the site for AI assistants.
fs.writeFileSync(path.join(OUT, 'llms.txt'), `# ${config.name}

> ${COUNT}+ free online tools that run entirely in the browser: PDF, image, video and audio converters, calculators, student, developer and everyday utilities. No sign-up, no watermarks, no limits, and files are processed on the visitor's own device instead of being uploaded.

- Website: ${SITE}/
- Contact: ${config.contactEmail}
- Every tool is free and works on phones and computers.

${CATEGORIES.map(c => `## ${c.name}

${c.desc}

${TOOLS.filter(t => t.cat === c.id).map(t => `- [${t.name}](${abs(t.slug + '.html')}): ${t.desc}`).join('\n')}`).join('\n\n')}

## About

- [About ${config.name}](${abs('about.html')})
- [Privacy policy](${abs('privacy-policy.html')})
`);

const distinct = TOOLS.filter(t => !t.of).length;
console.log(`Built ${pages.length} pages: ${distinct} tools + ${TOOLS.length - distinct} format pages, ${CATEGORIES.length} categories → ./site`);

const fs = require('fs');
const path = require('path');
const config = require('./site.config');
const { CATEGORIES, TOOLS } = require('./site/assets/js/registry.js');

const OUT = path.join(__dirname, 'site');
const VERSION = Date.now().toString(36);
const today = new Date().toISOString().slice(0, 10);
const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const toolBySlug = Object.fromEntries(TOOLS.map(t => [t.slug, t]));
const COUNT = Math.floor(TOOLS.filter(t => !t.of).length / 10) * 10;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const abs = p => `${config.url}/${p === 'index.html' ? '' : p}`;
const year = new Date().getFullYear();

function head({ title, desc, file, extraHead = '', jsonld = [] }) {
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
<link rel="canonical" href="${esc(abs(file))}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(config.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(abs(file))}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#4f46e5">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="assets/css/style.css?v=${VERSION}">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>${ga}${ads}
${jsonld.map(j => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}${extraHead}
</head>
<body>
${header()}`;
}

function header() {
  const cats = CATEGORIES.map(c => `<a href="${c.slug}.html"><span>${c.icon}</span>${esc(c.name)}</a>`).join('');
  return `<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="index.html" aria-label="${esc(config.name)} home"><span class="logo-mark">◆</span>${esc(config.name)}</a>
    <nav class="main-nav">
      <div class="dropdown">
        <button class="nav-btn" aria-haspopup="true" aria-expanded="false">All Tools <span aria-hidden="true">▾</span></button>
        <div class="dropdown-menu">${cats}</div>
      </div>
      <a class="nav-link hide-sm" href="pdf-tools.html">PDF</a>
      <a class="nav-link hide-sm" href="image-tools.html">Image</a>
      <a class="nav-link hide-sm" href="video-audio-tools.html">Video</a>
      <a class="nav-link hide-sm" href="student-tools.html">Student</a>
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
      .map(t => `<li><a href="${t.slug}.html">${esc(t.name)}</a></li>`).join('');
    return `<div><h4><a href="${c.slug}.html">${esc(c.name)}</a></h4><ul>${list}</ul></div>`;
  }).join('');
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="logo" href="index.html"><span class="logo-mark">◆</span>${esc(config.name)}</a>
        <p>${esc(config.tagline)}. ${COUNT}+ free tools that run right in your browser — no sign-up, no uploads, no limits.</p>
      </div>
      <div class="footer-links"><a href="about.html">About</a><a href="contact.html">Contact</a><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms of Use</a><a href="sitemap.xml">Sitemap</a></div>
    </div>
    <div class="footer-cols">${cols}</div>
    <p class="copyright">© ${year} ${esc(config.name)}. All rights reserved.</p>
  </div>
</footer>
<script src="assets/js/registry.js?v=${VERSION}"></script>
<script src="assets/js/core.js?v=${VERSION}"></script>
${scripts}
</body>
</html>
`;
}

function card(t) {
  const c = catById[t.cat];
  return `<a class="tool-card-link" href="${t.slug}.html" data-search="${esc((t.name + ' ' + t.kw + ' ' + c.name).toLowerCase())}">
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
  const title = t.title || `${t.name} – Free Online ${/calculator/i.test(t.name) ? 'Calculator' : 'Tool'} | ${config.name}`;
  const fq = faqs(t);
  const related = TOOLS.filter(x => x.cat === t.cat && x.slug !== t.slug && !x.of).slice(0, 8);
  const more = TOOLS.filter(x => x.popular && x.cat !== t.cat).slice(0, 6);
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: t.name, url: abs(file), description: t.desc, applicationCategory: c.id === 'dev' ? 'DeveloperApplication' : 'UtilitiesApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: abs('index.html') }, { '@type': 'ListItem', position: 2, name: c.name, item: abs(c.slug + '.html') }, { '@type': 'ListItem', position: 3, name: t.name, item: abs(file) }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: fq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const preset = t.preset ? JSON.stringify(t.preset).replace(/</g, '\\u003c') : '{}';
  write(file, head({ title, desc: t.desc, file, jsonld }) + `
<main class="container page">
  <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>›</span><a href="${c.slug}.html">${esc(c.name)}</a><span>›</span><span>${esc(t.name)}</span></nav>
  <div class="tool-head">
    <span class="tool-icon lg" style="--c:${c.color}">${t.icon}</span>
    <div>
      <h1>${esc(t.name)}</h1>
      <p class="lead">${esc(t.desc)}</p>
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
      <p>${esc(t.desc)} ${esc(t.name)} is part of ${esc(config.name)}'s collection of free ${esc(c.name.toLowerCase())}. ${['pdf', 'image', 'media'].includes(c.id) ? 'All processing happens locally in your browser, so your files stay private and nothing is uploaded.' : 'It works instantly in your browser with no account and no installation.'}</p>
      <h2>Frequently asked questions</h2>
      <div class="faq">${fq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
    </article>
    <aside class="sidebar">
      <h3>More ${esc(c.name)}</h3>
      <ul class="side-list">${related.map(r => `<li><a href="${r.slug}.html"><span>${r.icon}</span>${esc(r.name)}</a></li>`).join('')}</ul>
      <a class="side-more" href="${c.slug}.html">View all ${esc(c.name)} →</a>
      <h3>Popular tools</h3>
      <ul class="side-list">${more.map(r => `<li><a href="${r.slug}.html"><span>${r.icon}</span>${esc(r.name)}</a></li>`).join('')}</ul>
    </aside>
  </div>
</main>
` + footer(`<script src="assets/js/tools/${catById[base.cat].id}.js?v=${VERSION}"></script>
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
  <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>›</span><span>${esc(c.name)}</span></nav>
  <div class="tool-head">
    <span class="tool-icon lg" style="--c:${c.color}">${c.icon}</span>
    <div><h1>${esc(c.name)}</h1><p class="lead">${esc(c.desc)}</p></div>
  </div>
  <div class="tool-grid">${list.map(card).join('')}</div>
  <section class="cat-strip"><h2>Explore other categories</h2><div class="chips">${CATEGORIES.filter(x => x.id !== c.id).map(x => `<a class="chip" href="${x.slug}.html">${x.icon} ${esc(x.name)}</a>`).join('')}</div></section>
</main>
` + footer());
}

{
  const popular = TOOLS.filter(t => t.popular);
  const desc = `${COUNT}+ free online tools in one place: PDF converter, image compressor, video converter, CGPA calculator, ATS resume checker, QR code generator and more. No sign-up, works in your browser.`;
  write('index.html', head({
    title: `${config.name} – ${COUNT}+ Free Online Tools: PDF, Image, Video, Calculators`, desc, file: 'index.html',
    jsonld: [{ '@context': 'https://schema.org', '@type': 'WebSite', name: config.name, url: abs('index.html'), potentialAction: { '@type': 'SearchAction', target: `${config.url}/?q={search_term_string}`, 'query-input': 'required name=search_term_string' } }],
  }) + `
<main>
  <section class="hero">
    <div class="container">
      <h1>Every tool you need, <span class="grad">free &amp; in one place</span></h1>
      <p class="lead">${COUNT}+ fast, private online tools for PDFs, images, videos, calculators, students, developers and everyday tasks. No sign-up. Your files never leave your device.</p>
      <div class="hero-search">
        <input type="search" id="home-search" placeholder="Search tools — try “compress pdf”, “cgpa” or “qr code”" autocomplete="off" aria-label="Search all tools">
      </div>
      <div class="chips center">${CATEGORIES.map(c => `<a class="chip" href="#${c.id}">${c.icon} ${esc(c.name)}</a>`).join('')}</div>
    </div>
  </section>
  <div class="container page">
    <section id="no-results" class="notice" hidden>No tools match your search. Try a different word.</section>
    <section class="home-section" data-section>
      <div class="section-head"><h2>🔥 Most popular tools</h2></div>
      <div class="tool-grid">${popular.map(card).join('')}</div>
    </section>
    ${CATEGORIES.map(c => `<section class="home-section" id="${c.id}" data-section>
      <div class="section-head"><h2>${c.icon} ${esc(c.name)}</h2><a href="${c.slug}.html">View all →</a></div>
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
staticPage('about.html', 'About Us', `About ${config.name} — free online tools that run in your browser.`, `
  <p>${esc(config.name)} is a collection of ${COUNT}+ free online tools for the tasks people do every day: converting and compressing PDFs, editing images, converting videos, calculating grades and loans, writing, coding and more.</p>
  <h2>Our approach</h2>
  <ul><li><strong>Privacy first.</strong> Almost every tool runs entirely in your browser. Files you open are processed on your own device and are never uploaded to us.</li>
  <li><strong>Free forever.</strong> No account, no watermarks, no daily limits.</li>
  <li><strong>Fast and simple.</strong> Each tool does one job well, with a clean interface that works on phones and computers.</li></ul>
  <p>Have an idea for a new tool? <a href="contact.html">Let us know</a>.</p>`);
staticPage('contact.html', 'Contact Us', `Contact the ${config.name} team.`, `
  <p>We'd love to hear from you — whether you found a bug, want to suggest a new tool or have a business enquiry.</p>
  <p>Email: <a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a></p>
  ${config.contactPhone ? `<p>Phone / WhatsApp: <a href="tel:${esc(config.contactPhone.replace(/[^\d+]/g, ''))}">${esc(config.contactPhone)}</a></p>` : ''}
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
write('404.html', head({ title: `Page not found | ${config.name}`, desc: 'Page not found', file: '404.html' }) + `
<main class="container page narrow center-text">
  <h1>Page not found</h1>
  <p class="lead">The page you're looking for doesn't exist. Try searching for a tool above or go back to the <a href="index.html">home page</a>.</p>
</main>
` + footer());

const urls = pages.filter(p => p !== '404.html');
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(p => `  <url><loc>${esc(abs(p))}</loc><lastmod>${today}</lastmod><priority>${p === 'index.html' ? '1.0' : toolBySlug[p.replace('.html', '')] ? '0.8' : '0.6'}</priority></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${config.url}/sitemap.xml\n`);

const distinct = TOOLS.filter(t => !t.of).length;
console.log(`Built ${pages.length} pages: ${distinct} tools + ${TOOLS.length - distinct} format pages, ${CATEGORIES.length} categories → ./site`);

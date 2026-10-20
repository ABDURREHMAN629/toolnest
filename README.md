# WebToolNest — 160+ free online tools

A fast, static website with **163 tools** (plus 9 extra format pages like *PNG to JPG*, *MP4 to MP3* and *Black Screen*) across 12 categories. Every tool runs **in the visitor's browser**: files are never uploaded, there is no server or database, and hosting is free.

## Quick start

```bash
npm start
```

This builds the pages and serves the site at http://localhost:8080 (under the same path as the live site, for example http://localhost:8080/toolnest/). Node.js 18+ is the only requirement — there are no npm dependencies.

| Command | What it does |
|---|---|
| `npm run build` | Regenerates every HTML page, `sitemap.xml` and `robots.txt` into `site/` |
| `npm run serve` | Serves `site/` locally (supports pretty URLs like `/merge-pdf`) |
| `npm start` | Build + serve |

## Before you go live

**Full step-by-step guide (domain, hosting, Search Console, AdSense, ranking): [GO-LIVE.md](GO-LIVE.md).**

1. Open **`site.config.js`** and set your site `name`, your real domain in `url` (used for canonical links and the sitemap), and `contactEmail`.
2. Optional: add your Google Analytics ID (`gaId`) and Google AdSense publisher ID (`adsenseClient`). AdSense Auto Ads are enabled automatically when the ID is set.
3. Run `npm run build`.
4. Deploy the **`site/`** folder (see below).
5. Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://yourdomain.com/sitemap.xml`.

## Deploying (all free)

The output is plain HTML/CSS/JS, so any static host works:

- **Cloudflare Pages** — build command `node build.js`, output directory `site`. Recommended (fast, unlimited bandwidth).
- **Netlify** — already configured by `netlify.toml`; just connect the folder or repo.
- **Vercel** — framework "Other", build command `node build.js`, output directory `site`.
- **GitHub Pages / any web host** — run `npm run build` and upload the contents of `site/`.

Note: the site must be served over **HTTPS** (all hosts above do this). Camera, microphone, screen recording and some hashing features require HTTPS. Opening the HTML files directly from disk (`file://`) is not supported — use `npm start` for local testing.

## Project structure

```
site.config.js          Site name, domain, analytics/ads IDs
content.js              Hand-written long-form guides per tool (the main SEO lever)
build.js                Static page generator (tool pages, categories, sitemap, legal pages)
serve.js                Local dev server
site/                   ← deploy this folder
  assets/css/style.css  Design system (light + dark mode)
  assets/js/registry.js All tools: name, category, description, how-to steps, keywords
  assets/js/core.js     Shared UI kit: file picker, calculators, text tools, downloads, search, theme
  assets/js/assistant.js  "Ask AI" chat assistant that recommends tools
  assets/js/tools/*.js  Tool implementations, one file per category
  *.html                Generated pages (do not edit by hand — run the build)
test/                   Local browser test helpers (not deployed)
```

## Adding a tool

1. Add one line to `site/assets/js/registry.js` with the slug, name, category, icon, description and 3 how-to steps.
2. Implement it in the matching `site/assets/js/tools/<category>.js` with `Tools.define('your-slug', root => { ... })`. For calculators, `UI.calc(root, { fields, compute })` does most of the work; for text transforms use `UI.textTool`.
3. Run `npm run build`. The page, sitemap entry, search entry and related-tool links are created automatically. The AI assistant picks the new tool up from the registry too — good keywords (`kw`) help it match the way people phrase requests.

## AI assistant

Every page has an **✨ Ask AI** button (bottom right). Visitors describe what they want in plain words — *"make my PDF smaller for email"*, *"usd to pkr"*, *"how old am I"* — and the assistant replies with the best matching tools. Each result shows what the tool does, its how-to steps, privacy notes (runs in the browser, uses an online service, needs camera or microphone permission, and so on) and a button to open it. It also answers common questions (is it free, are my files safe, does it work on phones), lists categories, and offers "Show more" and "Tools like this" follow-ups.

It runs entirely in the browser using `registry.js`: no API key, no server and no cost. It understands synonyms (photo → image, join → merge, CV → resume), typos (*compres pdf*), format pairs (*jpeg into png*) and word variants. The conversation is kept for the browser tab session, so it survives moving between pages. To tune matching, edit the `SYN` (synonyms) and `PHRASES` tables at the top of `assistant.js`.

The home page also links to it from the hero, and both search boxes offer it when a search finds nothing.

You can test it from the browser console with `Assistant.rank('compress pdf')` (scores) or `Assistant.answer('compress pdf')` (full reply).

## SEO built in

Each tool gets its own page with a unique title and meta description, canonical URL, Open Graph tags, a "How to use" section, FAQs, and JSON-LD structured data (WebApplication, BreadcrumbList, FAQPage). Category pages, internal links, `sitemap.xml`, `robots.txt`, About, Contact, Privacy Policy and Terms pages (needed for AdSense approval) are generated too.

## External services & libraries

Libraries load on demand from public CDNs (cdnjs / jsDelivr), only on the tool that needs them: pdf-lib, PDF.js, JSZip, FFmpeg.wasm (video tools, ~31 MB downloaded once per visit), Tesseract.js (OCR), Transformers.js with the Apache-2.0 MODNet model (background remover), heic2any, mammoth, docx, docx-preview, qrcode-generator, jsQR, JsBarcode, lamejs, UPNG, marked, sql-formatter and Terser.

A few tools need an online service to work:

| Tool | Service |
|---|---|
| Currency Converter | [ExchangeRate-API](https://www.exchangerate-api.com) open endpoint (attribution shown on the page) |
| What Is My IP / speed-test provider info | [ipwho.is](https://ipwho.is), fallback [GeoJS](https://www.geojs.io) |
| Internet Speed Test | Cloudflare speed-test endpoints (`speed.cloudflare.com`) |
| YouTube Thumbnail Downloader | YouTube's public thumbnail images (`i.ytimg.com`) |

Everything else works without any API keys.

## All tools

**PDF (14):** Merge PDF, Split PDF, Compress PDF, PDF to JPG (+PDF to PNG), JPG to PDF, PDF to Word, Word to PDF, Rotate PDF, Organize PDF, Delete PDF Pages, Add Page Numbers, Watermark PDF, PDF to Text, Sign PDF

**Image (17):** Compress Image, Resize Image, Crop Image, Image Converter (+PNG↔JPG, WebP→JPG/PNG, JPG→WebP), HEIC to JPG, Rotate & Flip, Background Remover (AI), Image to Text (OCR), Image to Base64, Watermark Image, Photo Editor & Filters, Meme Generator, Favicon Generator, Image Color Picker, SVG to PNG, Passport Photo Maker, Collage Maker

**Video & Audio (14):** Video Converter, Video Compressor, Video to MP3 (+MP4 to MP3), Video Trimmer, Video to GIF, Audio Converter, MP3 Cutter, Mute Video, Screen Recorder, Voice Recorder, Webcam Test, Mic Test, Text to Speech, Speech to Text

**Student & Career (10):** CGPA Calculator, GPA Calculator, Grade Calculator, CGPA to Percentage, Attendance Calculator, ATS Resume Checker, Resume Builder, Text to Handwriting, Citation Generator, Typing Speed Test

**Finance (13):** Loan EMI, Mortgage, Compound Interest, Simple Interest, SIP, Discount, Tip, GST/VAT, Profit Margin, Salary, Currency Converter, Zakat, Fuel Cost

**Health (9):** BMI, Calorie (TDEE), BMR, Body Fat, Ideal Weight, Pregnancy Due Date, Ovulation, Water Intake, Sleep

**Math (10):** Percentage, Scientific Calculator, Fraction, Average & Statistics, Unit Converter, Random Number, Number to Words (lakh/crore & international), Roman Numerals, LCM & GCD, Quadratic Solver

**Date & Time (14):** Age Calculator, Days Between Dates, Date Calculator, Time Calculator, Stopwatch, Countdown Timer, Pomodoro Timer, Time Zone Converter, Alarm Clock, What Week Is It (week number), Day of the Week, Hijri Date Converter, Military Time Converter, Time to Decimal

**Text (17):** Word Counter (+Character Counter), Case Converter, Lorem Ipsum, Text Compare (Diff), Remove Duplicate Lines, Sort Lines, Reverse Text, Fancy Text Generator, Remove Line Breaks, Find & Replace, Keyword Density, Morse Code, Binary Translator, Text Repeater, Online Notepad, Invisible Character, Words to Minutes

**Developer (18):** JSON Formatter, Base64, URL Encode/Decode, HTML Entities, UUID (v4/v7), Hash (MD5/SHA), JWT Decoder, Regex Tester, Color Picker, Palette Generator, CSS Gradient, Box Shadow, HTML/CSS/JS Minifier, Unix Timestamp, Markdown to HTML, CSV↔JSON, Number Base Converter, SQL Formatter

**Web & Device (14):** Internet Speed Test, What Is My IP, YouTube Thumbnail Downloader, Meta Tag Generator, UTM Builder, Robots.txt Generator, Slug Generator, Screen Resolution, Browser Info, Keyboard Tester, Dead Pixel Test, CPS Test, White Screen (+Black Screen), Spacebar Counter

**Utilities (13):** QR Code Generator, QR Code Scanner, Barcode Generator, Password Generator, Password Strength Checker, Spin the Wheel, Coin Flip, Dice Roller, Signature Generator, Invoice Generator, To-Do List, Tally Counter, Qibla Direction Finder

## Testing

With `npm start` running, open any page and run in the browser console:

```js
await UI.script('/__test/smoke.js');
await smoke('pdf');   // mounts every tool in a category and reports errors
```

To check that calculators give **correct answers**, load every category script and run the known-answer tests (about 90 checks with independently worked-out results — CGPA formulas, attendance, zakat, number to words, week numbers, Hijri dates, Qibla bearings, military time and more):

```js
for (const c of CATEGORIES) await UI.script(BASE + 'assets/js/tools/' + c.id + '.js');
await UI.script('/__test/known-answers.js');
await knownAnswers();   // { passed, total, fails: [...] }
```

Run it after changing any calculator. Add a check to `test/known-answers.js` whenever you add a tool.

`test/harness.js` adds helpers (`runTool`, `mkPdf`, `mkImg`) for end-to-end checks with generated files.

For tests with real-world files, run `node test/fetch-material.js` once. It downloads about 18 MB of public sample files into `test/material/` (git-ignored, never deployed). They include Mozilla PDF.js test PDFs, Awesome-CV résumés, mammoth.js Word files, Nokia HEIF photos, OpenCV and face_recognition images, Big Buck Bunny and jsQR QR photos. Then load `/__test/real.js` and `/__test/checks.js` in the browser console and use `realFile('paper.pdf')` etc.

// Tells Bing, Yandex, Seznam and Naver about every page in the sitemap via IndexNow (https://www.indexnow.org).
// Run after a deploy that adds or changes pages:  npm run indexnow
const fs = require('fs');
const path = require('path');
const config = require('./site.config');

const site = new URL(config.url);
const keyFile = fs.readdirSync(path.join(__dirname, 'site')).find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('IndexNow key file (site/<32 hex>.txt) not found');
const key = keyFile.slice(0, -4);
const urlList = [...fs.readFileSync(path.join(__dirname, 'site', 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: site.host, key, keyLocation: `${site.origin}/${keyFile}`, urlList }),
}).then(r => console.log(`IndexNow: HTTP ${r.status} for ${urlList.length} URLs`));

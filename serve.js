const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'site');
const BASE = new URL(require('./site.config').url.replace(/\/$/, '')).pathname.replace(/\/?$/, '/');
const port = +process.argv[2] || +process.env.PORT || 8080;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json', '.webp': 'image/webp' };

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (BASE !== '/' && p === BASE.slice(0, -1)) { res.writeHead(301, { Location: BASE }); return res.end(); }
  if (BASE !== '/' && p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  if (p.endsWith('/')) p += 'index.html';
  const base = p.startsWith('/__test/') ? path.join(__dirname, 'test') : root;
  if (base !== root) p = p.slice('/__test'.length);
  let file = path.join(base, path.normalize(p));
  if (!file.startsWith(base)) { res.writeHead(403); return res.end(); }
  if (!path.extname(file) && fs.existsSync(file + '.html')) file += '.html';
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': types['.html'] });
      return res.end(fs.existsSync(path.join(root, '404.html')) ? fs.readFileSync(path.join(root, '404.html')) : 'Not found');
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
}).listen(port, () => console.log(`Serving ./site at http://localhost:${port}${BASE}`));

(function () {
  const { esc, fmt } = UI;
  const rnd = n => { const lim = Math.floor(4294967296 / n) * n, a = new Uint32Array(1); let x; do { crypto.getRandomValues(a); x = a[0]; } while (x >= lim); return x % n; };

  const utf8bin = s => String.fromCharCode(...new TextEncoder().encode(s));
  const vEsc = s => String(s || '').replace(/([\\;,:"])/g, '\\$1');
  Tools.define('qr-code-generator', root => {
    let logo = null;
    root.innerHTML = `<div class="grid-2" style="align-items:start"><div class="stack"><div class="type"></div><div class="row data"></div><details class="card-sub"><summary style="cursor:pointer;font-weight:600">🎨 Design</summary><div class="row mt design"></div><div class="logo mt"></div></details></div>
      <div class="stack" style="align-items:center;position:sticky;top:80px"><div class="preview" style="padding:16px;min-height:300px;width:100%"><canvas class="cv" style="max-width:100%;image-rendering:pixelated"></canvas></div><div class="small muted info"></div>
      <div class="btn-row" style="justify-content:center"><button class="btn png">⬇ PNG</button><button class="btn secondary svg">⬇ SVG</button><button class="btn ghost cp">📋 Copy image</button></div></div></div>`;
    const $ = UI.q(root);
    const TYPES = { url: [{ id: 'url', label: 'Website URL', type: 'text', value: 'https://example.com', full: true }], text: [{ id: 'text', label: 'Text', type: 'textarea', rows: 4, value: 'Hello from WebToolNest!', full: true }],
      wifi: [{ id: 'ssid', label: 'Network name (SSID)', type: 'text', value: 'MyHomeWiFi' }, { id: 'pass', label: 'Password', type: 'text', value: '' }, { id: 'enc', label: 'Security', type: 'select', value: 'WPA', options: [['WPA', 'WPA/WPA2/WPA3'], ['WEP', 'WEP'], ['nopass', 'No password']] }, { id: 'hidden', label: 'Hidden network', type: 'checkbox', value: false }],
      whatsapp: [{ id: 'phone', label: 'WhatsApp number (with country code)', type: 'text', value: '+92 300 1234567' }, { id: 'msg', label: 'Message (optional)', type: 'textarea', rows: 3, value: 'Hi! I found you through your QR code.', full: true }],
      email: [{ id: 'to', label: 'Email address', type: 'text', value: 'hello@example.com' }, { id: 'sub', label: 'Subject', type: 'text', value: '' }, { id: 'body', label: 'Message', type: 'textarea', rows: 3, value: '', full: true }],
      phone: [{ id: 'tel', label: 'Phone number', type: 'text', value: '+92 300 1234567' }], sms: [{ id: 'tel', label: 'Phone number', type: 'text', value: '+92 300 1234567' }, { id: 'msg', label: 'Message', type: 'textarea', rows: 3, value: '', full: true }],
      vcard: [{ id: 'fn', label: 'First name', type: 'text', value: 'Ayesha' }, { id: 'ln', label: 'Last name', type: 'text', value: 'Khan' }, { id: 'tel', label: 'Phone', type: 'text', value: '+92 300 1234567' }, { id: 'email', label: 'Email', type: 'text', value: 'ayesha@example.com' }, { id: 'org', label: 'Company', type: 'text', value: '' }, { id: 'title', label: 'Job title', type: 'text', value: '' }, { id: 'web', label: 'Website', type: 'text', value: '' }, { id: 'addr', label: 'Address', type: 'text', value: '' }] };
    let type = 'url', form;
    const design = UI.fields($('.design'), [{ id: 'size', label: 'Size', type: 'select', value: '1024', options: [['256', '256 px'], ['512', '512 px'], ['1024', '1024 px'], ['2048', '2048 px']] }, { id: 'ecl', label: 'Error correction', type: 'select', value: 'M', options: [['L', 'Low (7%)'], ['M', 'Medium (15%)'], ['Q', 'Quartile (25%)'], ['H', 'High (30%)']] }, { id: 'style', label: 'Style', type: 'select', value: 'square', options: [['square', 'Square'], ['rounded', 'Rounded'], ['dots', 'Dots']] }, { id: 'fg', label: 'Color', type: 'color', value: '#111827' }, { id: 'bg', label: 'Background', type: 'color', value: '#ffffff' }, { id: 'transparent', label: 'Transparent background', type: 'checkbox', value: false }, { id: 'margin', label: 'Quiet zone', type: 'range', value: 2, min: 0, max: 8 }], () => draw());
    $('.logo').append(UI.dropzone({ accept: 'image/*', compact: true, icon: '🖼️', title: 'Add a logo in the center (optional)', hint: 'Error correction switches to High automatically', onFiles: async ([f]) => { logo = await UI.loadImage(f); design.set('ecl', 'H'); draw(); } }));
    const content = () => {
      const v = form.get();
      switch (type) {
        case 'url': return v.url.trim() && !/^[a-z]+:/i.test(v.url.trim()) ? 'https://' + v.url.trim() : v.url.trim();
        case 'text': return v.text;
        case 'wifi': return `WIFI:T:${v.enc};S:${vEsc(v.ssid)};${v.enc !== 'nopass' ? `P:${vEsc(v.pass)};` : ''}${v.hidden ? 'H:true;' : ''};`;
        case 'whatsapp': return `https://wa.me/${v.phone.replace(/\D/g, '')}${v.msg ? '?text=' + encodeURIComponent(v.msg) : ''}`;
        case 'email': { const q = [v.sub && 'subject=' + encodeURIComponent(v.sub), v.body && 'body=' + encodeURIComponent(v.body)].filter(Boolean).join('&'); return `mailto:${v.to}${q ? '?' + q : ''}`; }
        case 'phone': return 'tel:' + v.tel.replace(/[^\d+]/g, '');
        case 'sms': return `SMSTO:${v.tel.replace(/[^\d+]/g, '')}:${v.msg}`;
        default: return ['BEGIN:VCARD', 'VERSION:3.0', `N:${vEsc(v.ln)};${vEsc(v.fn)}`, `FN:${vEsc((v.fn + ' ' + v.ln).trim())}`, v.org && 'ORG:' + vEsc(v.org), v.title && 'TITLE:' + vEsc(v.title), v.tel && 'TEL;TYPE=CELL:' + v.tel, v.email && 'EMAIL:' + v.email, v.web && 'URL:' + v.web, v.addr && 'ADR:;;' + vEsc(v.addr), 'END:VCARD'].filter(Boolean).join('\n');
      }
    };
    let matrix = null;
    const draw = async () => {
      const qrcode = await UI.lib('qrcode'), d = design.get(), txt = content();
      if (!txt) { matrix = null; $('.info').textContent = 'Enter some content.'; return; }
      try { const q = qrcode(0, d.ecl); q.addData(utf8bin(txt), 'Byte'); q.make(); const n = q.getModuleCount(); matrix = Array.from({ length: n }, (_, r) => Array.from({ length: n }, (_, c) => q.isDark(r, c))); }
      catch (e) { matrix = null; $('.info').textContent = '⚠️ Too much data for a QR code. Shorten your content.'; return; }
      const c = $('.cv'), size = +d.size; c.width = c.height = size; render(c.getContext('2d'), size, d);
      c.style.width = '300px'; $('.info').textContent = `${matrix.length}×${matrix.length} modules · ${txt.length} characters`;
    };
    const render = (x, size, d) => {
      const n = matrix.length, tot = n + d.margin * 2, cell = size / tot;
      x.clearRect(0, 0, size, size); if (!d.transparent) { x.fillStyle = d.bg; x.fillRect(0, 0, size, size); }
      x.fillStyle = d.fg;
      const finder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
      for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
        if (!matrix[r][c]) continue;
        const X = (c + d.margin) * cell, Y = (r + d.margin) * cell;
        if (d.style === 'dots' && !finder(r, c)) { x.beginPath(); x.arc(X + cell / 2, Y + cell / 2, cell * 0.42, 0, Math.PI * 2); x.fill(); }
        else if (d.style === 'rounded' && !finder(r, c)) { x.beginPath(); x.roundRect ? x.roundRect(X + cell * 0.05, Y + cell * 0.05, cell * 0.9, cell * 0.9, cell * 0.35) : x.rect(X, Y, cell, cell); x.fill(); }
        else x.fillRect(Math.floor(X), Math.floor(Y), Math.ceil(cell), Math.ceil(cell));
      }
      if (logo) { const L = size * 0.22, p = L * 0.08; x.fillStyle = d.transparent ? '#fff' : d.bg; x.fillRect((size - L) / 2 - p, (size - L) / 2 - p, L + 2 * p, L + 2 * p); const k = Math.min(L / logo.naturalWidth, L / logo.naturalHeight); x.drawImage(logo, (size - logo.naturalWidth * k) / 2, (size - logo.naturalHeight * k) / 2, logo.naturalWidth * k, logo.naturalHeight * k); }
    };
    const buildForm = () => { form = UI.fields($('.data'), TYPES[type], UI.debounce(draw, 120)); draw(); };
    $('.type').append(UI.seg([['url', '🔗 URL'], ['text', '📝 Text'], ['wifi', '📶 WiFi'], ['whatsapp', '💬 WhatsApp'], ['email', '✉️ Email'], ['phone', '📞 Phone'], ['sms', '💌 SMS'], ['vcard', '👤 Contact']], 'url', t => { type = t; buildForm(); }));
    $('.png').onclick = async () => { if (!matrix) return; UI.download(await UI.canvasBlob($('.cv')), `qr-code-${type}.png`); };
    $('.svg').onclick = () => {
      if (!matrix) return; const d = design.get(), n = matrix.length, tot = n + d.margin * 2; let path = '';
      matrix.forEach((row, r) => row.forEach((on, c) => { if (on) path += `M${c + d.margin},${r + d.margin}h1v1h-1z`; }));
      UI.downloadText(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tot} ${tot}" width="${d.size}" height="${d.size}" shape-rendering="crispEdges">${d.transparent ? '' : `<rect width="100%" height="100%" fill="${d.bg}"/>`}<path d="${path}" fill="${d.fg}"/></svg>`, `qr-code-${type}.svg`, 'image/svg+xml');
      if (logo) UI.toast('Note: the logo is only included in the PNG download');
    };
    $('.cp').onclick = async () => { try { await navigator.clipboard.write([new ClipboardItem({ 'image/png': await UI.canvasBlob($('.cv')) })]); UI.toast('✓ QR code copied'); } catch (e) { UI.toast('Copy not supported — use Download instead'); } };
    buildForm();
  });

  Tools.define('qr-code-scanner', root => {
    root.innerHTML = `<div class="stack"><div class="btn-row"><button class="btn lg cam">📷 Scan with camera</button><button class="btn ghost stop" hidden>Stop camera</button></div><div class="dz"></div>
      <div style="position:relative;max-width:520px"><video class="v" playsinline muted style="width:100%;border-radius:14px;background:#000" hidden></video><div class="frame" hidden style="position:absolute;inset:18%;border:3px solid #fff;border-radius:18px;box-shadow:0 0 0 999px rgba(0,0,0,.35)"></div></div>
      <div class="err"></div><div class="out stack"></div><div class="hist stack"></div></div>`;
    const $ = UI.q(root), v = $('.v');
    let stream = null, raf = 0, last = '', detector = null;
    try { if ('BarcodeDetector' in window) detector = new BarcodeDetector({ formats: ['qr_code'] }); } catch (e) { detector = null; }
    const show = text => {
      if (!text || text === last) return; last = text; UI.beep(1200, 0.08, 0.2);
      const url = /^https?:\/\//i.test(text), wifi = text.match(/^WIFI:.*S:([^;]*);/i);
      $('.out').innerHTML = `<div class="notice success">✓ QR code found</div><div class="out-box" style="font-family:var(--font);font-size:1rem">${esc(text)}</div><div class="btn-row"><button class="btn cp">📋 Copy</button>${url ? `<a class="btn secondary" href="${esc(text)}" target="_blank" rel="noopener nofollow">↗ Open link</a>` : ''}</div>${url ? '<p class="small muted">Check the link carefully before opening it — QR codes can lead to scam websites.</p>' : ''}${wifi ? `<p class="small">📶 WiFi network: <strong>${esc(wifi[1])}</strong></p>` : ''}`;
      $('.out .cp').onclick = () => UI.copy(text);
      $('.hist').prepend(UI.h(`<div class="file-item"><div class="thumb">🔳</div><div class="meta"><div class="name">${esc(text.slice(0, 120))}</div><div class="sub">${new Date().toLocaleTimeString()}</div></div></div>`));
    };
    const decode = async src => {
      if (detector) { try { const r = await detector.detect(src); if (r[0]) return r[0].rawValue; } catch (e) { } }
      const jsQR = await UI.lib('jsqr'), w = src.videoWidth || src.naturalWidth || src.width, h = src.videoHeight || src.naturalHeight || src.height;
      if (!w) return null; const k = Math.min(1, 1000 / Math.max(w, h)), c = UI.canvas(w * k, h * k), x = c.getContext('2d', { willReadFrequently: true });
      x.drawImage(src, 0, 0, c.width, c.height); const r = jsQR(x.getImageData(0, 0, c.width, c.height).data, c.width, c.height, { inversionAttempts: 'attemptBoth' });
      return r ? r.data : null;
    };
    const stop = () => { cancelAnimationFrame(raf); if (stream) stream.getTracks().forEach(t => t.stop()); stream = null; v.hidden = true; $('.frame').hidden = true; $('.stop').hidden = true; $('.cam').hidden = false; };
    $('.cam').onclick = () => UI.busy($('.cam'), async () => {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 1280 } } });
      v.srcObject = stream; await v.play(); v.hidden = false; $('.frame').hidden = false; $('.stop').hidden = false; $('.cam').hidden = true; last = '';
      await UI.lib('jsqr');
      let busy = false;
      const loop = async () => { if (!stream) return; if (!busy && v.readyState >= 2) { busy = true; const t = await decode(v); busy = false; if (t) show(t); } raf = requestAnimationFrame(loop); };
      loop();
    }, 'Starting camera…', $('.err'));
    $('.stop').onclick = stop;
    $('.dz').append(UI.dropzone({ accept: 'image/*', compact: true, icon: '🖼️', title: 'Or scan a QR code from an image', hint: 'Screenshot or photo · paste with Ctrl+V', paste: true, onFiles: ([f]) => UI.busy(null, async () => { last = ''; const img = await UI.loadImage(f); const t = await decode(img); if (t) show(t); else UI.notice($('.out'), 'No QR code found in this image. Try a clearer or closer picture.', 'warn'); }, '', $('.err')) }));
  });

  const BC = [['CODE128', 'Code 128 (any text)', 'TOOLNEST-2026'], ['EAN13', 'EAN-13 (retail)', '590123412345'], ['EAN8', 'EAN-8', '9638507'], ['UPC', 'UPC-A (USA retail)', '03600029145'], ['CODE39', 'Code 39', 'ABC-1234'], ['ITF14', 'ITF-14 (cartons)', '1540014128876'], ['codabar', 'Codabar', 'A40156B'], ['MSI', 'MSI', '1234567'], ['pharmacode', 'Pharmacode', '1234']];
  Tools.define('barcode-generator', root => {
    root.innerHTML = '<div class="stack"><div class="row opts"></div><div class="preview" style="background:#fff;padding:20px;min-height:180px"><svg class="bc"></svg></div><div class="err"></div><div class="btn-row"><button class="btn png">⬇ PNG</button><button class="btn secondary svg">⬇ SVG</button></div></div>';
    const $ = UI.q(root);
    let lastFmt = 'CODE128';
    const form = UI.fields($('.opts'), [{ id: 'fmt', label: 'Barcode type', type: 'select', value: 'CODE128', options: BC.map(([v, l]) => [v, l]) }, { id: 'val', label: 'Value', type: 'text', value: 'TOOLNEST-2026', cls: 'grow' }, { id: 'w', label: 'Bar width', type: 'range', value: 2, min: 1, max: 4 }, { id: 'h', label: 'Height', type: 'range', value: 100, min: 30, max: 200, unit: 'px' }, { id: 'text', label: 'Show text', type: 'checkbox', value: true }, { id: 'col', label: 'Bar color', type: 'color', value: '#000000' }], v => { if (v.fmt !== lastFmt) { lastFmt = v.fmt; form.set('val', BC.find(b => b[0] === v.fmt)[2]); } draw(); });
    let ok = false;
    const opts = o => ({ format: o.fmt, width: o.w, height: o.h, displayValue: o.text, lineColor: o.col, background: '#ffffff', margin: 12, fontSize: 18, valid: x => { ok = x; } });
    const draw = async () => {
      const JB = await UI.lib('jsbarcode'), o = form.get(); ok = false;
      try { JB($('.bc'), o.val, opts(o)); } catch (e) { ok = false; }
      $('.bc').style.display = ok ? '' : 'none';
      $('.err').innerHTML = ok ? '' : `<div class="notice error">⚠️ "${esc(o.val)}" is not valid for ${esc(BC.find(b => b[0] === o.fmt)[1])}. ${o.fmt.startsWith('EAN') || o.fmt === 'UPC' ? 'Use digits only (the last check digit is optional).' : ''}</div>`;
    };
    $('.png').onclick = async () => { if (!ok) return; const JB = await UI.lib('jsbarcode'), c = document.createElement('canvas'), o = form.get(); JB(c, o.val, { ...opts(o), width: o.w * 2, height: o.h * 2, fontSize: 36, margin: 24 }); UI.download(await UI.canvasBlob(c), `barcode-${o.val}.png`); };
    $('.svg').onclick = () => { if (ok) UI.downloadText(new XMLSerializer().serializeToString($('.bc')), `barcode-${form.get().val}.svg`, 'image/svg+xml'); };
    draw();
  });

  const WORDS = 'apple river stone cloud tiger maple ocean pixel rocket garden silver candle forest window planet bridge coffee dragon violet thunder lemon falcon harbor meadow crystal shadow summer winter autumn spring castle marble copper velvet orbit canyon desert island jungle valley glacier breeze ember lantern mirror puzzle ribbon saddle tunnel walnut zebra anchor bamboo cactus dolphin feather ginger hammer igloo jacket kettle ladder magnet needle olive pepper quartz radar salmon teapot umbrella vortex wagon yogurt basket cobalt lotus mango nectar parrot quill raven sapphire tulip unicorn waffle'.split(' ');
  const strength = bits => bits < 40 ? ['Weak', '#dc2626', 25] : bits < 60 ? ['Fair', '#f59e0b', 50] : bits < 80 ? ['Strong', '#16a34a', 75] : ['Very strong', '#059669', 100];
  Tools.define('password-generator', root => {
    root.innerHTML = `<div class="stack"><div class="mode"></div><div class="card-sub"><div class="copy-row"><input class="input mono pw" readonly style="font-size:1.25rem;font-weight:600"><button class="btn cp">📋 Copy</button><button class="btn secondary re" title="Generate new">↻</button></div><div class="meter mt"><i class="bar"></i></div><div class="small muted mt sinfo"></div></div><div class="row opts"></div><div class="field"><label>More passwords</label><div class="more stack" style="gap:6px"></div></div><p class="small muted">🔒 Generated in your browser with a cryptographically secure random generator. Nothing is sent or stored.</p></div>`;
    const $ = UI.q(root);
    let mode = 'random';
    const form = UI.fields($('.opts'), [{ id: 'len', label: 'Length', type: 'range', value: 16, min: 4, max: 64, show: () => mode === 'random' }, { id: 'up', label: 'Uppercase (A-Z)', type: 'checkbox', value: true, show: () => mode === 'random' }, { id: 'lo', label: 'Lowercase (a-z)', type: 'checkbox', value: true, show: () => mode === 'random' }, { id: 'num', label: 'Numbers (0-9)', type: 'checkbox', value: true, show: () => mode === 'random' }, { id: 'sym', label: 'Symbols (!@#$…)', type: 'checkbox', value: true, show: () => mode === 'random' }, { id: 'sim', label: 'Avoid look-alikes (Il1O0)', type: 'checkbox', value: true, show: () => mode === 'random' },
      { id: 'words', label: 'Number of words', type: 'range', value: 4, min: 3, max: 10, show: () => mode === 'phrase' }, { id: 'sep', label: 'Separator', type: 'select', value: '-', options: [['-', 'Hyphen -'], ['.', 'Dot .'], ['_', 'Underscore _'], [' ', 'Space'], ['', 'None']], show: () => mode === 'phrase' }, { id: 'cap', label: 'Capitalize words', type: 'checkbox', value: true, show: () => mode === 'phrase' }, { id: 'addnum', label: 'Add a number', type: 'checkbox', value: true, show: () => mode === 'phrase' }], () => gen());
    $('.mode').append(UI.seg([['random', '🔀 Random password'], ['phrase', '📖 Memorable passphrase']], 'random', m => { mode = m; form.refresh(); gen(); }));
    const make = () => {
      const o = form.get();
      if (mode === 'phrase') { const w = Array.from({ length: o.words }, () => { const x = WORDS[rnd(WORDS.length)]; return o.cap ? x[0].toUpperCase() + x.slice(1) : x; }); if (o.addnum) w.push(String(rnd(100))); return [w.join(o.sep), Math.log2(WORDS.length) * o.words + (o.addnum ? 6.6 : 0)]; }
      let sets = [o.up && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', o.lo && 'abcdefghijklmnopqrstuvwxyz', o.num && '0123456789', o.sym && '!@#$%^&*()-_=+[]{};:,.?/~'].filter(Boolean);
      if (o.sim) sets = sets.map(s => s.replace(/[Il1O0o|]/g, ''));
      if (!sets.length) return ['Select at least one character type', 0];
      const all = sets.join(''), chars = sets.map(s => s[rnd(s.length)]);
      while (chars.length < o.len) chars.push(all[rnd(all.length)]);
      for (let i = chars.length - 1; i > 0; i--) { const j = rnd(i + 1); [chars[i], chars[j]] = [chars[j], chars[i]]; }
      return [chars.slice(0, o.len).join(''), o.len * Math.log2(all.length)];
    };
    const gen = () => {
      const [pw, bits] = make(), [label, col, w] = strength(bits);
      $('.pw').value = pw; $('.bar').style.width = w + '%'; $('.bar').style.background = col;
      $('.sinfo').innerHTML = `<strong style="color:${col}">${label}</strong> · ${Math.round(bits)} bits of entropy`;
      $('.more').innerHTML = Array.from({ length: 5 }, () => make()[0]).map(p => `<div class="copy-row"><input class="input mono" readonly value="${esc(p)}"><button class="btn sm ghost" data-p="${esc(p)}">Copy</button></div>`).join('');
    };
    $('.more').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (b) UI.copy(b.dataset.p); });
    $('.cp').onclick = () => UI.copy($('.pw').value, 'Password copied'); $('.re').onclick = gen;
    gen();
  });

  const COMMON = '123456 password 12345678 qwerty 123456789 12345 1234 111111 1234567 dragon 123123 baseball abc123 football monkey letmein 696969 shadow master 666666 qwertyuiop 123321 mustang 1234567890 michael 654321 superman 1qaz2wsx 7777777 121212 000000 qazwsx 123qwe killer trustno1 jordan jennifer zxcvbnm asdfgh hunter buster soccer harley batman andrew tigger sunshine iloveyou 2000 charlie robert thomas hockey ranger daniel starwars klaster 112233 george computer michelle jessica pepper 1111 zxcvbn 555555 11111111 131313 freedom 777777 pass maggie 159753 aaaaaa ginger princess joshua cheese amanda summer love ashley nicole chelsea biteme matthew access yankees 987654321 dallas austin thunder taylor matrix pakistan admin welcome login passw0rd password1 qwerty123 iloveyou1 abc12345'.split(' ');
  const crackTime = s => { if (s < 1) return 'instantly'; const u = [[31536000 * 100, 'centuries'], [31536000, 'years'], [2592000, 'months'], [86400, 'days'], [3600, 'hours'], [60, 'minutes'], [1, 'seconds']]; const [d, n] = u.find(([x]) => s >= x); return n === 'centuries' && s > 31536000 * 1e6 ? 'millions of years' : `${Math.round(s / d)} ${n}`; };
  Tools.define('password-strength-checker', root => {
    root.innerHTML = `<div class="stack"><div class="copy-row"><input class="input mono pw" type="password" placeholder="Type a password to check" autocomplete="off" style="font-size:1.2rem"><button class="btn ghost eye">👁 Show</button></div><div class="meter"><i class="bar"></i></div><div class="out"></div><p class="small muted">🔒 Your password is checked only in this browser tab — it is never sent anywhere or saved. Want a strong one? Use our <a href="password-generator">Password Generator</a>.</p></div>`;
    const $ = UI.q(root);
    const check = () => {
      const p = $('.pw').value; if (!p) { $('.out').innerHTML = ''; $('.bar').style.width = 0; return; }
      let pool = 0; if (/[a-z]/.test(p)) pool += 26; if (/[A-Z]/.test(p)) pool += 26; if (/\d/.test(p)) pool += 10; if (/[^a-zA-Z0-9]/.test(p)) pool += 33;
      let bits = p.length * Math.log2(Math.max(pool, 2)); const issues = [];
      const low = p.toLowerCase();
      if (COMMON.includes(low) || COMMON.includes(low.replace(/[0-9!@#$]+$/, ''))) { bits = Math.min(bits, 10); issues.push('This is one of the most common passwords — attackers try it first.'); }
      if (/(.)\1{2,}/.test(p)) { bits -= 10; issues.push('Avoid repeated characters like "aaa" or "111".'); }
      if (/(012|123|234|345|456|567|678|789|abc|bcd|cde|qwe|wer|asd|zxc)/i.test(p)) { bits -= 8; issues.push('Avoid sequences like "123", "abc" or keyboard patterns like "qwerty".'); }
      if (/(19|20)\d{2}/.test(p)) { bits -= 5; issues.push('Avoid years and dates — they are easy to guess.'); }
      bits = Math.max(0, bits);
      const tips = [[p.length >= 12, 'At least 12 characters'], [/[A-Z]/.test(p), 'Uppercase letter'], [/[a-z]/.test(p), 'Lowercase letter'], [/\d/.test(p), 'Number'], [/[^a-zA-Z0-9]/.test(p), 'Symbol']];
      const [label, col, w] = strength(bits), guesses = Math.pow(2, bits) / 2;
      $('.bar').style.width = w + '%'; $('.bar').style.background = col;
      $('.out').innerHTML = UI.resultsHTML([{ k: 'Strength', v: `<span>${label}</span>`, main: true, s: `${Math.round(bits)} bits of entropy` }, { k: 'Fast offline attack', v: crackTime(guesses / 1e10), s: '10 billion guesses/second' }, { k: 'Online attack', v: crackTime(guesses / 100), s: '100 guesses/second' }]) + `<div class="grid-2 mt"><div class="card-sub"><h3>Checklist</h3>${tips.map(([ok, t]) => `<div>${ok ? '✅' : '⬜'} ${t}</div>`).join('')}</div><div class="card-sub"><h3>Warnings</h3>${issues.map(i => `<div class="small">⚠️ ${i}</div>`).join('') || '<div class="small muted">No common patterns found.</div>'}</div></div>`;
    };
    $('.pw').addEventListener('input', check);
    $('.eye').onclick = () => { const t = $('.pw').type === 'password'; $('.pw').type = t ? 'text' : 'password'; $('.eye').textContent = t ? '🙈 Hide' : '👁 Show'; };
  });

  const WHEEL_COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16', '#06b6d4', '#e11d48'];
  Tools.define('spin-the-wheel', root => {
    root.innerHTML = `<div class="grid-2" style="align-items:start"><div class="stack" style="align-items:center"><div style="position:relative;width:min(100%,460px)"><canvas class="wh" width="920" height="920" style="width:100%;cursor:pointer"></canvas><div style="position:absolute;right:-6px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:18px solid transparent;border-bottom:18px solid transparent;border-right:34px solid var(--text)"></div></div><button class="btn lg spin">🎡 Spin!</button><div class="win w-100"></div></div>
      <div class="stack"><div class="field"><label>Entries (one per line)</label><textarea class="textarea list" style="min-height:280px"></textarea></div><div class="btn-row"><button class="btn sm secondary shuf">🔀 Shuffle</button><button class="btn sm secondary sort">A→Z Sort</button><label class="check"><input type="checkbox" class="rm"> Remove winner after spin</label></div><div class="small muted cnt"></div><h3 style="margin:8px 0 0">Results</h3><ol class="hist small" style="margin:0"></ol></div></div>`;
    const $ = UI.q(root), cv = $('.wh'), x = cv.getContext('2d');
    $('.list').value = UI.store.get('wheel', 'Ali\nAyesha\nHamza\nFatima\nUsman\nZainab\nBilal\nMaryam').toString();
    let angle = 0, spinning = false;
    const items = () => $('.list').value.split('\n').map(s => s.trim()).filter(Boolean);
    const draw = () => {
      const it = items(), n = Math.max(it.length, 1), R = 450, C = 460, seg = Math.PI * 2 / n;
      x.clearRect(0, 0, 920, 920);
      it.forEach((t, i) => {
        const a0 = angle + i * seg; x.beginPath(); x.moveTo(C, C); x.arc(C, C, R, a0, a0 + seg); x.closePath(); x.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length]; if (n > 1 && i === n - 1 && n % WHEEL_COLORS.length === 1) x.fillStyle = WHEEL_COLORS[5]; x.fill(); x.strokeStyle = '#fff'; x.lineWidth = 3; x.stroke();
        x.save(); x.translate(C, C); x.rotate(a0 + seg / 2); x.fillStyle = '#fff'; x.font = `bold ${Math.max(16, Math.min(40, 600 / n))}px system-ui`; x.textAlign = 'right'; x.textBaseline = 'middle'; x.fillText(t.length > 18 ? t.slice(0, 17) + '…' : t, R - 24, 0); x.restore();
      });
      if (!it.length) { x.fillStyle = '#e5e7eb'; x.beginPath(); x.arc(C, C, R, 0, Math.PI * 2); x.fill(); }
      x.beginPath(); x.arc(C, C, 42, 0, Math.PI * 2); x.fillStyle = '#fff'; x.fill(); x.lineWidth = 6; x.strokeStyle = '#1f2937'; x.stroke();
      $('.cnt').textContent = `${it.length} entries`;
    };
    const spin = () => {
      const it = items(); if (spinning || it.length < 2) return it.length < 2 && UI.toast('Add at least 2 entries');
      spinning = true; $('.win').innerHTML = '';
      const start = angle, total = Math.PI * 2 * (6 + Math.random() * 4) + Math.random() * Math.PI * 2, dur = 5200, t0 = performance.now();
      let lastSeg = -1;
      const step = now => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 4); angle = start + total * e; draw();
        const n = it.length, seg = Math.PI * 2 / n, idx = Math.floor((((-angle) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2) / seg);
        if (idx !== lastSeg) { lastSeg = idx; UI.beep(900, 0.02, 0.08, 'square'); }
        if (p < 1) return requestAnimationFrame(step);
        spinning = false; const winner = it[idx];
        UI.alarm(1);
        $('.win').innerHTML = `<div class="notice success text-center" style="font-size:1.4rem">🎉 <strong>${esc(winner)}</strong></div>`;
        $('.hist').insertAdjacentHTML('afterbegin', `<li>${esc(winner)}</li>`);
        if ($('.rm').checked) { const arr = items(); arr.splice(arr.indexOf(winner), 1); $('.list').value = arr.join('\n'); save(); draw(); }
      };
      requestAnimationFrame(step);
    };
    const save = () => UI.store.set('wheel', $('.list').value);
    $('.list').addEventListener('input', () => { save(); draw(); });
    $('.shuf').onclick = () => { const a = items(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } $('.list').value = a.join('\n'); save(); draw(); };
    $('.sort').onclick = () => { $('.list').value = items().sort((a, b) => a.localeCompare(b)).join('\n'); save(); draw(); };
    $('.spin').onclick = spin; cv.onclick = spin;
    draw();
  });

  Tools.define('coin-flip', root => {
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="coin" style="width:180px;height:180px;position:relative;transform-style:preserve-3d;transition:transform 1.4s cubic-bezier(.2,.8,.3,1);cursor:pointer">
      <div style="position:absolute;inset:0;border-radius:50%;display:grid;place-items:center;font:800 1.6rem var(--font);color:#713f12;background:radial-gradient(circle at 35% 30%,#fde68a,#eab308 60%,#a16207);box-shadow:inset 0 0 0 8px #ca8a04;backface-visibility:hidden">HEADS</div>
      <div style="position:absolute;inset:0;border-radius:50%;display:grid;place-items:center;font:800 1.6rem var(--font);color:#334155;background:radial-gradient(circle at 35% 30%,#f1f5f9,#94a3b8 60%,#475569);box-shadow:inset 0 0 0 8px #64748b;backface-visibility:hidden;transform:rotateY(180deg)">TAILS</div></div>
      <div class="big-num res" style="font-size:2rem;min-height:1.2em"></div><div class="btn-row"><button class="btn lg go">🪙 Flip coin</button><button class="btn secondary ten">Flip 10 times</button><button class="btn ghost rst">Reset</button></div><div class="results w-100 stats"></div><div class="small muted hist text-center"></div></div>`;
    const $ = UI.q(root);
    let rot = 0, h = 0, t = 0, hist = [], busy = false;
    const stats = () => { const n = h + t; $('.stats').innerHTML = UI.resultsHTML([{ k: 'Heads', v: `${h} (${n ? Math.round(h / n * 100) : 0}%)` }, { k: 'Tails', v: `${t} (${n ? Math.round(t / n * 100) : 0}%)` }, { k: 'Total flips', v: n }]); $('.hist').textContent = hist.slice(-40).join(' '); };
    const flip = () => {
      if (busy) return; busy = true; const heads = rnd(2) === 0;
      rot = rot - (rot % 360) + 1800 + (heads ? 0 : 180);
      setTimeout(() => { busy = false; heads ? h++ : t++; hist.push(heads ? 'H' : 'T'); $('.res').textContent = heads ? 'Heads!' : 'Tails!'; stats(); }, 1400);
    };
    $('.go').onclick = flip; $('.coin').onclick = flip;
    $('.ten').onclick = () => { const r = Array.from({ length: 10 }, () => rnd(2) === 0); r.forEach(x => { x ? h++ : t++; hist.push(x ? 'H' : 'T'); }); $('.res').textContent = `${r.filter(Boolean).length} heads, ${r.filter(x => !x).length} tails`; stats(); };
    $('.rst').onclick = () => { h = t = 0; hist = []; $('.res').textContent = ''; stats(); };
    stats();
  });

  const PIPS = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  Tools.define('dice-roller', root => {
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="row opts" style="justify-content:center"></div><div class="dice row" style="justify-content:center;gap:12px;min-height:110px;align-items:center"></div><div class="big-num tot" style="font-size:2rem"></div><button class="btn lg go">🎲 Roll</button><div class="small muted hist text-center"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'n', label: 'Number of dice', type: 'select', value: '2', options: ['1', '2', '3', '4', '5', '6', '8', '10'] }, { id: 's', label: 'Dice type', type: 'select', value: '6', options: [['4', 'D4'], ['6', 'D6'], ['8', 'D8'], ['10', 'D10'], ['12', 'D12'], ['20', 'D20'], ['100', 'D100']] }]);
    const hist = [];
    const roll = () => {
      const o = form.get(), n = +o.n, s = +o.s, box = $('.dice');
      let k = 0; const anim = setInterval(() => {
        const r = Array.from({ length: n }, () => rnd(s) + 1);
        box.innerHTML = r.map(v => s === 6 ? `<span style="font-size:96px;line-height:1">${PIPS[v - 1]}</span>` : `<span style="width:84px;height:84px;display:grid;place-items:center;border-radius:16px;background:var(--primary);color:#fff;font:800 2rem var(--font);box-shadow:var(--shadow)">${v}</span>`).join('');
        if (++k >= 8) { clearInterval(anim); const tot = r.reduce((a, b) => a + b, 0); $('.tot').textContent = n > 1 ? `Total: ${tot}` : ''; hist.push(`${n}d${s}: ${r.join('+')}${n > 1 ? '=' + tot : ''}`); $('.hist').textContent = hist.slice(-8).reverse().join(' · '); }
      }, 60);
    };
    $('.go').onclick = roll; roll();
  });

  const SIG_FONTS = ['Great Vibes', 'Dancing Script', 'Sacramento', 'Allura', 'Alex Brush', 'Pinyon Script', 'Mr Dafoe', 'Herr Von Muellerhoff', 'Caveat'];
  Tools.define('signature-generator', root => {
    root.innerHTML = `<div class="stack"><div class="mode"></div>
      <div class="draw stack"><canvas class="pad" style="width:100%;height:240px;border:2px dashed var(--border);border-radius:14px;background:#fff;cursor:crosshair"></canvas><div class="btn-row"><button class="btn sm ghost clr">Clear</button><span class="small muted">Sign above with your mouse, finger or stylus</span></div></div>
      <div class="type stack" hidden><input class="input name" value="Abdur Rehman" placeholder="Type your name" style="font-size:1.1rem"><div class="fonts thumbs" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))"></div></div>
      <div class="row"><div class="field small"><label>Ink color</label><div class="inks"></div></div><div class="field small"><label>Pen size</label><input type="range" class="pen" min="1" max="8" step="0.5" value="3"></div><label class="check"><input type="checkbox" class="wbg"> White background (instead of transparent)</label></div>
      <div class="btn-row"><button class="btn lg dl">⬇ Download PNG</button><button class="btn secondary cp">📋 Copy image</button></div></div>`;
    const $ = UI.q(root);
    const pad = UI.signaturePad($('.pad'), { color: '#111827', width: 3 });
    let mode = 'draw', ink = '#111827', font = SIG_FONTS[0];
    $('.mode').append(UI.seg([['draw', '✍️ Draw'], ['type', '⌨️ Type']], 'draw', m => { mode = m; $('.draw').hidden = m !== 'draw'; $('.type').hidden = m !== 'type'; if (m === 'draw') pad.fit(); else drawFonts(); }));
    $('.inks').append(UI.seg([['#111827', 'Black'], ['#1d3a8a', 'Blue'], ['#7f1d1d', 'Red']], ink, c => { ink = c; pad.color = c; drawFonts(); }));
    $('.pen').oninput = e => { pad.width = +e.target.value; };
    $('.clr').onclick = () => pad.clear();
    const typed = (f, big) => { const name = $('.name').value.trim() || 'Signature', s = big ? 140 : 60, c = UI.canvas(10, 10); let x = c.getContext('2d'); x.font = `${s}px "${f}"`; c.width = x.measureText(name).width + s; c.height = s * 1.8; x = c.getContext('2d'); x.font = `${s}px "${f}"`; x.fillStyle = ink; x.textBaseline = 'middle'; x.fillText(name, s / 2, c.height / 2); return c; };
    const drawFonts = async () => {
      await Promise.all(SIG_FONTS.map(f => UI.font(f)));
      $('.fonts').innerHTML = ''; SIG_FONTS.forEach(f => { const card = UI.h(`<div class="thumb-card" style="cursor:pointer;${f === font ? 'border-color:var(--primary);box-shadow:0 0 0 2px var(--primary-soft)' : ''}"></div>`); const c = typed(f); c.style.cssText = 'width:100%;height:70px;object-fit:contain;background:#fff'; card.append(c, UI.h(`<div class="tc-label">${f}</div>`)); card.onclick = () => { font = f; drawFonts(); }; $('.fonts').append(card); });
    };
    $('.name').addEventListener('input', UI.debounce(drawFonts, 200));
    const result = () => {
      let c = mode === 'draw' ? pad.trimmed() : UI.trimCanvas(typed(font, true), 20);
      if (!c) throw new Error('Draw your signature first.');
      if ($('.wbg').checked) { const w = UI.canvas(c.width, c.height), x = w.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, w.width, w.height); x.drawImage(c, 0, 0); c = w; }
      return c;
    };
    $('.dl').onclick = () => UI.busy($('.dl'), async () => UI.download(await UI.canvasBlob(result()), 'signature.png'));
    $('.cp').onclick = () => UI.busy($('.cp'), async () => { await navigator.clipboard.write([new ClipboardItem({ 'image/png': await UI.canvasBlob(result()) })]); UI.toast('✓ Signature copied'); });
  });

  const INV_DEFAULT = () => ({ from: 'Your Business Name\n123 Main Street, Lahore\nhello@business.com · +92 300 1234567', to: 'Client Name\nClient Company\nclient@email.com', no: 'INV-0001', date: new Date().toISOString().slice(0, 10), due: new Date(Date.now() + 14 * 864e5).toISOString().slice(0, 10), cur: 'Rs', tax: 0, disc: 0, ship: 0, notes: 'Thank you for your business!\nPayment via bank transfer within 14 days.', items: [{ d: 'Website design', q: 1, r: 45000 }, { d: 'Logo design', q: 1, r: 15000 }, { d: 'Hosting (12 months)', q: 12, r: 1500 }], color: '#4f46e5', logo: '' });
  Tools.define('invoice-generator', root => {
    let d = UI.store.get('invoice', null) || INV_DEFAULT();
    root.innerHTML = `<div class="stack"><div class="btn-row"><button class="btn pdf">⬇ Download PDF</button><button class="btn ghost new">New invoice</button><span class="small muted">Saved automatically in your browser.</span></div>
      <div class="grid-2" style="align-items:start"><div class="stack form"></div><div style="position:sticky;top:80px"><div class="small muted" style="margin-bottom:6px">Preview</div><div class="pv" style="border:1px solid var(--border);box-shadow:var(--shadow);background:#fff;border-radius:6px;max-height:calc(100vh - 140px);overflow:auto"></div></div></div></div>`;
    const $ = UI.q(root);
    const totals = () => { const sub = d.items.reduce((a, i) => a + (UI.num(i.q) || 0) * (UI.num(i.r) || 0), 0), disc = sub * (UI.num(d.disc) || 0) / 100, tax = (sub - disc) * (UI.num(d.tax) || 0) / 100, ship = UI.num(d.ship) || 0; return { sub, disc, tax, ship, total: sub - disc + tax + ship }; };
    const money = n => `${esc(d.cur)} ${fmt(n, 2, 2)}`;
    const html = () => { const t = totals(), e = s => esc(s).replace(/\n/g, '<br>');
      return `<div style="font-family:'Segoe UI',Arial,sans-serif;color:#1f2937;padding:40px;font-size:10.5pt;line-height:1.5;background:#fff">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px"><div>${d.logo ? `<img src="${d.logo}" style="max-height:70px;max-width:200px;margin-bottom:10px"><br>` : ''}<div>${e(d.from)}</div></div><div style="text-align:right"><div style="font-size:26pt;font-weight:800;color:${d.color};letter-spacing:.04em">INVOICE</div><div><strong>${e(d.no)}</strong></div><div>Date: ${e(d.date)}</div><div>Due: ${e(d.due)}</div></div></div>
        <div style="margin:26px 0 16px"><div style="font-size:9pt;color:#6b7280;text-transform:uppercase;letter-spacing:.08em">Bill to</div><div>${e(d.to)}</div></div>
        <table style="width:100%;border-collapse:collapse"><thead><tr style="background:${d.color};color:#fff"><th style="text-align:left;padding:8px">Description</th><th style="padding:8px;text-align:right">Qty</th><th style="padding:8px;text-align:right">Rate</th><th style="padding:8px;text-align:right">Amount</th></tr></thead><tbody>${d.items.map(i => `<tr style="border-bottom:1px solid #e5e7eb"><td style="padding:8px">${e(i.d)}</td><td style="padding:8px;text-align:right">${fmt(UI.num(i.q) || 0, 2)}</td><td style="padding:8px;text-align:right">${money(UI.num(i.r) || 0)}</td><td style="padding:8px;text-align:right">${money((UI.num(i.q) || 0) * (UI.num(i.r) || 0))}</td></tr>`).join('')}</tbody></table>
        <div style="display:flex;justify-content:flex-end;margin-top:14px"><table style="min-width:260px">${[['Subtotal', t.sub], t.disc && [`Discount (${d.disc}%)`, -t.disc], t.tax && [`Tax (${d.tax}%)`, t.tax], t.ship && ['Shipping', t.ship]].filter(Boolean).map(([k, v]) => `<tr><td style="padding:4px 8px;color:#6b7280">${k}</td><td style="padding:4px 8px;text-align:right">${money(v)}</td></tr>`).join('')}<tr><td style="padding:8px;font-weight:800;border-top:2px solid ${d.color}">Total due</td><td style="padding:8px;text-align:right;font-weight:800;font-size:13pt;border-top:2px solid ${d.color}">${money(t.total)}</td></tr></table></div>
        ${d.notes ? `<div style="margin-top:30px;font-size:9.5pt;color:#4b5563"><div style="font-size:9pt;color:#6b7280;text-transform:uppercase;letter-spacing:.08em">Notes</div>${e(d.notes)}</div>` : ''}</div>`; };
    const drawForm = () => {
      $('.form').innerHTML = `<div class="card-sub stack"><div class="row"><div class="field"><label>From (your details)</label><textarea class="textarea" data-f="from" style="min-height:90px">${esc(d.from)}</textarea></div><div class="field"><label>Bill to</label><textarea class="textarea" data-f="to" style="min-height:90px">${esc(d.to)}</textarea></div></div>
        <div class="row"><div class="field"><label>Invoice #</label><input class="input" data-f="no" value="${esc(d.no)}"></div><div class="field"><label>Date</label><input class="input" type="date" data-f="date" value="${esc(d.date)}"></div><div class="field"><label>Due date</label><input class="input" type="date" data-f="due" value="${esc(d.due)}"></div></div>
        <div class="row"><div class="field small"><label>Currency</label><input class="input" data-f="cur" value="${esc(d.cur)}"></div><div class="field small"><label>Accent</label><input type="color" data-f="color" value="${esc(d.color)}"></div><div class="field logo-dz"></div></div></div>
        <div class="card-sub stack"><strong>Items</strong>${d.items.map((it, i) => `<div class="row" style="flex-wrap:nowrap"><input class="input" data-i="${i}" data-k="d" value="${esc(it.d)}" placeholder="Description" style="flex:3"><input class="input" type="number" data-i="${i}" data-k="q" value="${esc(it.q)}" placeholder="Qty" style="flex:0 0 70px"><input class="input" type="number" data-i="${i}" data-k="r" value="${esc(it.r)}" placeholder="Rate" style="flex:1"><button class="btn sm ghost" data-rm="${i}">✕</button></div>`).join('')}<div><button class="btn sm secondary add">+ Add item</button></div></div>
        <div class="card-sub row"><div class="field small"><label>Discount %</label><input class="input" type="number" data-f="disc" value="${esc(d.disc)}"></div><div class="field small"><label>Tax %</label><input class="input" type="number" data-f="tax" value="${esc(d.tax)}"></div><div class="field small"><label>Shipping</label><input class="input" type="number" data-f="ship" value="${esc(d.ship)}"></div><div class="field" style="flex-basis:100%"><label>Notes / payment terms</label><textarea class="textarea" data-f="notes" style="min-height:70px">${esc(d.notes)}</textarea></div></div>`;
      $('.logo-dz').append(UI.dropzone({ accept: 'image/*', compact: true, icon: '🏷️', title: d.logo ? 'Change logo' : 'Add logo', hint: 'PNG or JPG', onFiles: async ([f]) => { const img = await UI.loadImage(f), k = Math.min(1, 400 / img.naturalWidth), c = UI.canvas(img.naturalWidth * k, img.naturalHeight * k); c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); d.logo = c.toDataURL('image/png'); render(); } }));
    };
    const render = () => { $('.pv').innerHTML = html(); UI.store.set('invoice', d); };
    root.addEventListener('input', e => { const t = e.target; if (t.dataset.f) d[t.dataset.f] = t.value; else if (t.dataset.k) d.items[+t.dataset.i][t.dataset.k] = t.value; render(); });
    root.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; if (b.classList.contains('add')) { d.items.push({ d: '', q: 1, r: 0 }); drawForm(); render(); } if (b.dataset.rm != null) { d.items.splice(+b.dataset.rm, 1); drawForm(); render(); } });
    $('.new').onclick = () => { if (!confirm('Start a new invoice? The current one will be cleared.')) return; const keep = { from: d.from, logo: d.logo, cur: d.cur, color: d.color }; const n = (d.no.match(/\d+$/) || ['0'])[0]; d = { ...INV_DEFAULT(), ...keep, no: d.no.replace(/\d+$/, String(+n + 1).padStart(n.length, '0')), items: [{ d: '', q: 1, r: 0 }], to: '' }; drawForm(); render(); };
    $('.pdf').onclick = () => {
      const fr = document.createElement('iframe'); fr.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0'; document.body.appendChild(fr);
      const doc = fr.contentDocument; doc.open(); doc.write(`<!doctype html><html><head><title>${esc(d.no)}</title><style>@page{size:A4;margin:0}body{margin:0}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}</style></head><body>${html()}</body></html>`); doc.close();
      setTimeout(() => { fr.contentWindow.focus(); fr.contentWindow.print(); setTimeout(() => fr.remove(), 2000); }, 300);
      UI.toast('Choose "Save as PDF" in the print window', 3500);
    };
    drawForm(); render();
  });

  Tools.define('todo-list', root => {
    let todos = UI.store.get('todos', [{ id: 1, t: 'Try the Merge PDF tool', done: true }, { id: 2, t: 'Calculate my CGPA', done: false }, { id: 3, t: 'Check my resume with the ATS checker', done: false }]), filter = 'all';
    root.innerHTML = `<div class="stack" style="max-width:680px;margin:0 auto"><div class="copy-row"><input class="input nt" placeholder="What do you need to do? Press Enter to add" style="font-size:1.05rem"><button class="btn add">+ Add</button></div>
      <div class="row" style="justify-content:space-between;align-items:center"><div class="flt"></div><button class="btn sm ghost clr">Clear completed</button></div><ul class="list list-plain stack" style="gap:6px"></ul><div class="small muted cnt"></div></div>`;
    const $ = UI.q(root);
    const save = () => UI.store.set('todos', todos);
    const draw = () => {
      const list = todos.filter(t => filter === 'all' || (filter === 'done' ? t.done : !t.done));
      $('.list').innerHTML = list.map(t => `<li class="file-item" data-id="${t.id}"><input type="checkbox" class="tg" ${t.done ? 'checked' : ''} style="width:20px;height:20px;accent-color:var(--primary)"><div class="meta"><div class="name txt" contenteditable="true" spellcheck="false" style="white-space:normal;outline:none;${t.done ? 'text-decoration:line-through;opacity:.55' : ''}">${esc(t.t)}</div></div><button class="btn sm ghost del" title="Delete">✕</button></li>`).join('') || `<li class="muted small text-center" style="padding:20px">${filter === 'done' ? 'No completed tasks yet.' : 'Nothing to do — enjoy your day! 🎉'}</li>`;
      const left = todos.filter(t => !t.done).length; $('.cnt').textContent = `${left} task${left === 1 ? '' : 's'} left · ${todos.length - left} done`;
    };
    const add = () => { const v = $('.nt').value.trim(); if (!v) return; todos.unshift({ id: Date.now(), t: v, done: false }); $('.nt').value = ''; save(); draw(); };
    $('.add').onclick = add; $('.nt').addEventListener('keydown', e => { if (e.key === 'Enter') add(); });
    $('.flt').append(UI.seg([['all', 'All'], ['active', 'Active'], ['done', 'Completed']], 'all', f => { filter = f; draw(); }));
    $('.clr').onclick = () => { todos = todos.filter(t => !t.done); save(); draw(); };
    $('.list').addEventListener('change', e => { const li = e.target.closest('[data-id]'); if (li && e.target.classList.contains('tg')) { const t = todos.find(x => x.id === +li.dataset.id); t.done = e.target.checked; save(); draw(); } });
    $('.list').addEventListener('click', e => { const li = e.target.closest('[data-id]'); if (li && e.target.closest('.del')) { todos = todos.filter(x => x.id !== +li.dataset.id); save(); draw(); } });
    $('.list').addEventListener('focusout', e => { const li = e.target.closest('[data-id]'); if (li && e.target.classList.contains('txt')) { const t = todos.find(x => x.id === +li.dataset.id), v = e.target.textContent.trim(); if (v) t.t = v; else todos = todos.filter(x => x !== t); save(); draw(); } });
    $('.list').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.classList.contains('txt')) { e.preventDefault(); e.target.blur(); } });
    draw();
  });

  Tools.define('tally-counter', root => {
    const st = UI.store.get('tally', null) || { counters: [{ name: 'Counter 1', n: 0 }], active: 0, step: 1, sound: false };
    root.innerHTML = `<div class="stack">
      <div class="card-sub stack" style="align-items:center;text-align:center">
        <input class="input cname" aria-label="Counter name" style="max-width:320px;text-align:center;font-weight:600">
        <div class="big" aria-live="polite" style="font:800 clamp(4rem,16vw,7.5rem)/1 var(--font);font-variant-numeric:tabular-nums;letter-spacing:-.03em">0</div>
        <div class="btn-row" style="justify-content:center">
          <button class="btn secondary dec" aria-label="Decrease" style="width:84px;height:84px;font-size:2.2rem;border-radius:50%">−</button>
          <button class="btn inc" aria-label="Increase" style="width:120px;height:120px;font-size:3rem;border-radius:50%">+</button>
          <button class="btn ghost zero" aria-label="Reset to zero" style="width:84px;height:84px;border-radius:50%">↺</button>
        </div>
        <div class="small muted">Keyboard: <kbd>Space</kbd> or <kbd>↑</kbd> to count up, <kbd>↓</kbd> to count down</div>
      </div>
      <div class="row"><div class="field"><label>Step</label><input class="input step" type="number" min="1" value="1"></div>
        <div class="field" style="justify-content:flex-end"><label class="check"><input type="checkbox" class="snd"> Click sound</label></div>
        <div class="field" style="justify-content:flex-end"><button class="btn secondary add">+ Add counter</button></div></div>
      <div class="list stack" style="gap:8px"></div>
      <div class="total small muted"></div></div>`;
    const $ = UI.q(root);
    const save = () => UI.store.set('tally', st);
    const cur = () => st.counters[st.active];
    const draw = () => {
      if (!st.counters[st.active]) st.active = 0;
      $('.big').textContent = UI.fmt(cur().n, 6);
      if (document.activeElement !== $('.cname')) $('.cname').value = cur().name;
      $('.step').value = st.step; $('.snd').checked = st.sound;
      $('.list').innerHTML = st.counters.length > 1 ? st.counters.map((c, i) => `<div class="row" style="flex-wrap:nowrap;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;border:1px solid ${i === st.active ? 'var(--primary)' : 'var(--border)'};background:var(--card)">
        <button class="btn sm ghost" data-sel="${i}" style="flex:1;justify-content:flex-start">${esc(c.name)}</button><strong style="min-width:56px;text-align:right">${UI.fmt(c.n, 6)}</strong>
        <button class="btn sm secondary" data-d="${i}" aria-label="Decrease ${esc(c.name)}">−</button><button class="btn sm" data-i="${i}" aria-label="Increase ${esc(c.name)}">+</button><button class="btn sm ghost" data-rm="${i}" aria-label="Remove ${esc(c.name)}">✕</button></div>`).join('') : '';
      $('.total').textContent = st.counters.length > 1 ? `Total of all counters: ${UI.fmt(st.counters.reduce((s, c) => s + c.n, 0), 6)}` : '';
      save();
    };
    const bump = (i, dir) => {
      const c = st.counters[i], s = Math.max(1, Math.round(st.step) || 1);
      c.n = Math.round((c.n + dir * s) * 1e6) / 1e6;
      if (st.sound) UI.beep(dir > 0 ? 1200 : 600, 0.04, 0.15, 'square');
      draw();
    };
    $('.inc').onclick = () => bump(st.active, 1);
    $('.dec').onclick = () => bump(st.active, -1);
    $('.zero').onclick = () => { cur().n = 0; draw(); };
    $('.cname').addEventListener('input', e => { cur().name = e.target.value || 'Counter'; draw(); });
    $('.step').addEventListener('input', e => { st.step = Math.max(1, Math.round(UI.num(e.target.value)) || 1); save(); });
    $('.snd').addEventListener('change', e => { st.sound = e.target.checked; save(); });
    $('.add').onclick = () => { st.counters.push({ name: 'Counter ' + (st.counters.length + 1), n: 0 }); st.active = st.counters.length - 1; draw(); };
    $('.list').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.sel != null) st.active = +b.dataset.sel;
      else if (b.dataset.i != null) return bump(+b.dataset.i, 1);
      else if (b.dataset.d != null) return bump(+b.dataset.d, -1);
      else if (b.dataset.rm != null) { st.counters.splice(+b.dataset.rm, 1); if (st.active >= st.counters.length) st.active = st.counters.length - 1; }
      draw();
    });
    const onKey = e => {
      if (!root.isConnected) { document.removeEventListener('keydown', onKey); return; }
      const t = e.target;
      if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable || (t.tagName === 'BUTTON' && !root.contains(t)))) return;
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === '+') { e.preventDefault(); if (t && t.blur && root.contains(t)) t.blur(); bump(st.active, 1); }
      else if (e.key === 'ArrowDown' || e.key === '-') { e.preventDefault(); bump(st.active, -1); }
    };
    document.addEventListener('keydown', onKey);
    draw();
  });

  const KAABA = [21.422487, 39.826206];
  const CITIES = [
    ['Karachi, Pakistan', 24.8607, 67.0011], ['Lahore, Pakistan', 31.5204, 74.3587], ['Islamabad, Pakistan', 33.6844, 73.0479], ['Rawalpindi, Pakistan', 33.5651, 73.0169],
    ['Faisalabad, Pakistan', 31.4504, 73.135], ['Multan, Pakistan', 30.1575, 71.5249], ['Peshawar, Pakistan', 34.0151, 71.5249], ['Quetta, Pakistan', 30.1798, 66.975],
    ['Delhi, India', 28.6139, 77.209], ['Mumbai, India', 19.076, 72.8777], ['Hyderabad, India', 17.385, 78.4867], ['Kolkata, India', 22.5726, 88.3639],
    ['Dhaka, Bangladesh', 23.8103, 90.4125], ['Kabul, Afghanistan', 34.5553, 69.2075], ['Tehran, Iran', 35.6892, 51.389], ['Dubai, UAE', 25.2048, 55.2708],
    ['Abu Dhabi, UAE', 24.4539, 54.3773], ['Doha, Qatar', 25.2854, 51.531], ['Riyadh, Saudi Arabia', 24.7136, 46.6753], ['Jeddah, Saudi Arabia', 21.4858, 39.1925],
    ['Madinah, Saudi Arabia', 24.5247, 39.5692], ['Kuwait City, Kuwait', 29.3759, 47.9774], ['Muscat, Oman', 23.588, 58.3829], ['Istanbul, Türkiye', 41.0082, 28.9784],
    ['Cairo, Egypt', 30.0444, 31.2357], ['Casablanca, Morocco', 33.5731, -7.5898], ['Lagos, Nigeria', 6.5244, 3.3792], ['Nairobi, Kenya', -1.2921, 36.8219],
    ['Johannesburg, South Africa', -26.2041, 28.0473], ['Jakarta, Indonesia', -6.2088, 106.8456], ['Kuala Lumpur, Malaysia', 3.139, 101.6869], ['Singapore', 1.3521, 103.8198],
    ['London, UK', 51.5074, -0.1278], ['Birmingham, UK', 52.4862, -1.8904], ['Manchester, UK', 53.4808, -2.2426], ['Paris, France', 48.8566, 2.3522],
    ['Berlin, Germany', 52.52, 13.405], ['Amsterdam, Netherlands', 52.3676, 4.9041], ['New York, USA', 40.7128, -74.006], ['Chicago, USA', 41.8781, -87.6298],
    ['Houston, USA', 29.7604, -95.3698], ['Los Angeles, USA', 34.0522, -118.2437], ['Toronto, Canada', 43.6532, -79.3832], ['Sydney, Australia', -33.8688, 151.2093],
  ];
  const rad = d => d * Math.PI / 180, deg = r => r * 180 / Math.PI;
  const qibla = (lat, lon) => {
    const [la2, lo2] = KAABA.map(rad), la1 = rad(lat), dl = lo2 - rad(lon);
    const b = (deg(Math.atan2(Math.sin(dl) * Math.cos(la2), Math.cos(la1) * Math.sin(la2) - Math.sin(la1) * Math.cos(la2) * Math.cos(dl))) + 360) % 360;
    const h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dl / 2) ** 2;
    return { bearing: b, km: 2 * 6371.0088 * Math.asin(Math.sqrt(h)) };
  };
  const POINTS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

  Tools.define('qibla-direction', root => {
    const saved = UI.store.get('qibla', null);
    let lat = saved ? saved.lat : 24.8607, lon = saved ? saved.lon : 67.0011, place = saved ? saved.place : 'Karachi, Pakistan', heading = null, listening = false;
    root.innerHTML = `<div class="stack">
      <div class="row"><div class="field grow"><label>City</label><select class="select city"><option value="">— Choose a city —</option>${CITIES.map((c, i) => `<option value="${i}">${esc(c[0])}</option>`).join('')}</select></div>
        <div class="field" style="justify-content:flex-end"><button class="btn secondary loc">📍 Use my location</button></div></div>
      <div class="row"><div class="field"><label>Latitude</label><input class="input lat" type="number" step="any"></div><div class="field"><label>Longitude</label><input class="input lon" type="number" step="any"></div></div>
      <div class="err"></div>
      <div class="grid-2" style="align-items:center">
        <div style="display:grid;place-items:center"><svg class="dial" viewBox="0 0 220 220" width="260" height="260" role="img" aria-label="Qibla compass" style="max-width:100%">
          <g class="rose" style="transition:transform .25s ease-out;transform-origin:110px 110px">
            <circle cx="110" cy="110" r="86" fill="var(--card)" stroke="var(--border)" stroke-width="2"/>
            ${Array.from({ length: 72 }, (_, i) => `<line x1="110" y1="24" x2="110" y2="${i % 18 === 0 ? 34 : i % 2 ? 28 : 31}" stroke="var(--muted)" stroke-width="${i % 18 === 0 ? 2.5 : 1}" transform="rotate(${i * 5} 110 110)"/>`).join('')}
            ${[['N', 0], ['E', 90], ['S', 180], ['W', 270]].map(([l, a]) => `<text x="110" y="18" text-anchor="middle" font-size="15" font-weight="800" fill="${l === 'N' ? '#dc2626' : 'var(--text)'}" font-family="system-ui,sans-serif" transform="rotate(${a} 110 110)">${l}</text>`).join('')}
            <g class="arrow" style="transform-origin:110px 110px"><line x1="110" y1="110" x2="110" y2="66" stroke="#059669" stroke-width="6" stroke-linecap="round"/><polygon points="110,50 100,68 120,68" fill="#059669"/><text x="110" y="46" text-anchor="middle" font-size="16">🕋</text></g>
            <circle cx="110" cy="110" r="7" fill="var(--text)"/>
          </g></svg></div>
        <div class="out"></div></div>
      <div class="btn-row"><button class="btn live">🧭 Use phone compass</button><span class="small muted face"></span></div>
      <p class="small muted">🔒 Your location is used only on your device to calculate the direction — it is never sent anywhere.</p></div>`;
    const $ = UI.q(root);
    const draw = () => {
      if (!(Math.abs(lat) <= 90 && Math.abs(lon) <= 180)) { $('.out').innerHTML = '<div class="notice error">Enter a valid latitude (−90 to 90) and longitude (−180 to 180).</div>'; return; }
      const { bearing, km } = qibla(lat, lon), p = POINTS[Math.round(bearing / 22.5) % 16];
      $('.arrow').style.transform = `rotate(${bearing}deg)`;
      $('.rose').style.transform = heading == null ? '' : `rotate(${-heading}deg)`;
      $('.out').innerHTML = UI.resultsHTML([
        { k: 'Qibla direction', v: `${bearing.toFixed(1)}°`, main: true, s: `${p} — clockwise from true north${place ? ' · ' + esc(place) : ''}` },
        { k: 'Distance to the Kaaba', v: `${UI.fmt(km, 0)} km`, s: `${UI.fmt(km * 0.621371, 0)} miles` },
        { k: 'Your coordinates', v: `${lat.toFixed(4)}, ${lon.toFixed(4)}` },
      ]);
      if (heading != null) {
        const off = ((bearing - heading + 540) % 360) - 180;
        $('.face').textContent = Math.abs(off) <= 5 ? '✅ You are facing the Qibla' : `Turn ${off > 0 ? 'right' : 'left'} ${Math.abs(off).toFixed(0)}°`;
      }
      UI.store.set('qibla', { lat, lon, place });
    };
    const setPos = (a, b, name) => { lat = a; lon = b; place = name || ''; $('.lat').value = +a.toFixed(5); $('.lon').value = +b.toFixed(5); draw(); };
    $('.lat').value = lat; $('.lon').value = lon;
    const ci = CITIES.findIndex(c => c[0] === place); if (ci >= 0) $('.city').value = ci;
    $('.city').onchange = e => { const c = CITIES[+e.target.value]; if (c) setPos(c[1], c[2], c[0]); };
    root.addEventListener('input', e => { if (e.target.matches('.lat, .lon')) { lat = UI.num($('.lat').value); lon = UI.num($('.lon').value); place = ''; $('.city').value = ''; draw(); } });
    $('.loc').onclick = () => {
      UI.notice($('.err'), '');
      if (!navigator.geolocation) return UI.notice($('.err'), 'Location is not available in this browser. Choose a city or enter coordinates.', 'error');
      $('.loc').disabled = true;
      navigator.geolocation.getCurrentPosition(p => { $('.loc').disabled = false; $('.city').value = ''; setPos(p.coords.latitude, p.coords.longitude, 'Your location'); },
        e => { $('.loc').disabled = false; UI.notice($('.err'), e.code === 1 ? 'Location permission was denied. Choose a city or type your coordinates instead.' : 'Could not get your location. Choose a city or type your coordinates.', 'error'); },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 600000 });
    };
    const onOrient = e => {
      if (!root.isConnected) { window.removeEventListener('deviceorientationabsolute', onOrient); window.removeEventListener('deviceorientation', onOrient); return; }
      const h = e.webkitCompassHeading != null ? e.webkitCompassHeading : (e.absolute && e.alpha != null ? (360 - e.alpha) % 360 : null);
      if (h == null) return;
      heading = h; draw();
    };
    $('.live').onclick = async () => {
      if (listening) return;
      if (typeof DeviceOrientationEvent === 'undefined') return UI.notice($('.err'), 'This device has no compass. Use the direction in degrees with a physical compass instead.', 'warn');
      try { if (typeof DeviceOrientationEvent.requestPermission === 'function' && await DeviceOrientationEvent.requestPermission() !== 'granted') throw new Error('denied'); }
      catch (e) { return UI.notice($('.err'), 'Compass permission was not granted.', 'error'); }
      listening = true;
      window.addEventListener('deviceorientationabsolute', onOrient); window.addEventListener('deviceorientation', onOrient);
      $('.face').textContent = 'Hold your phone flat. Move it in a figure 8 to calibrate.';
      setTimeout(() => { if (heading == null) UI.notice($('.err'), 'No compass readings from this device. On a computer, use the degrees shown with a physical compass.', 'warn'); }, 3000);
    };
    draw();
  });
})();

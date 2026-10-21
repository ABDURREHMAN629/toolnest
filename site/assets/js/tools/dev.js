(function () {
  const { esc } = UI;
  const enc = new TextEncoder(), dec = new TextDecoder();

  function jsonTree(v, key) {
    const k = key != null ? `<span style="color:var(--primary)">${esc(JSON.stringify(key))}</span>: ` : '';
    if (v && typeof v === 'object') {
      const arr = Array.isArray(v), ent = Object.entries(v);
      return `<details open style="margin-left:${key != null ? 16 : 0}px"><summary style="cursor:pointer">${k}${arr ? `[ ] <span class="muted">${ent.length} items</span>` : `{ } <span class="muted">${ent.length} keys</span>`}</summary>${ent.map(([kk, vv]) => jsonTree(vv, arr ? +kk : kk)).join('')}</details>`;
    }
    const col = typeof v === 'string' ? '#16a34a' : typeof v === 'number' ? '#d97706' : '#9333ea';
    return `<div style="margin-left:${key != null ? 16 : 0}px">${k}<span style="color:${col}">${esc(JSON.stringify(v))}</span></div>`;
  }
  const sortKeys = v => Array.isArray(v) ? v.map(sortKeys) : v && typeof v === 'object' ? Object.fromEntries(Object.keys(v).sort().map(k => [k, sortKeys(v[k])])) : v;
  function parseJSON(t) {
    try { return JSON.parse(t); } catch (e) {
      const m = e.message.match(/position (\d+)/); let where = '';
      if (m) { const pos = +m[1], before = t.slice(0, pos), line = before.split('\n').length, col = pos - before.lastIndexOf('\n'); where = ` (line ${line}, column ${col})`; }
      throw new Error('Invalid JSON: ' + e.message.replace(/^JSON\.parse: /, '').replace(/ in JSON at position \d+.*$/, '') + where);
    }
  }
  Tools.define('json-formatter', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end"><div class="field small"><label>Indent</label><select class="select ind"><option value="2">2 spaces</option><option value="4">4 spaces</option><option value="tab">Tab</option></select></div><label class="check"><input type="checkbox" class="sk"> Sort keys</label>
      <div class="btn-row"><button class="btn fmt">Format / Beautify</button><button class="btn secondary min">Minify</button><button class="btn ghost tree">🌳 Tree view</button><button class="btn ghost cp">📋 Copy</button><button class="btn ghost dl">⬇ Download</button></div></div>
      <textarea class="textarea mono io" style="min-height:340px" spellcheck="false">{"name":"WebToolNest","tools":150,"free":true,"categories":["PDF","Image","Video"],"owner":{"country":"Pakistan","since":2026}}</textarea><div class="msg"></div><div class="tv card-sub mono small" hidden style="max-height:420px;overflow:auto"></div></div>`;
    const $ = UI.q(root), io = $('.io');
    const go = mode => {
      $('.tv').hidden = true;
      try {
        let v = parseJSON(io.value); if ($('.sk').checked) v = sortKeys(v);
        if (mode === 'tree') { $('.tv').innerHTML = jsonTree(v); $('.tv').hidden = false; }
        else io.value = mode === 'min' ? JSON.stringify(v) : JSON.stringify(v, null, $('.ind').value === 'tab' ? '\t' : +$('.ind').value);
        UI.notice($('.msg'), `✓ Valid JSON · ${UI.fmtBytes(enc.encode(io.value).length)}`, 'success');
      } catch (e) { UI.notice($('.msg'), '⚠️ ' + esc(e.message), 'error'); }
    };
    $('.fmt').onclick = () => go('fmt'); $('.min').onclick = () => go('min'); $('.tree').onclick = () => go('tree');
    $('.cp').onclick = () => UI.copy(io.value); $('.dl').onclick = () => UI.downloadText(io.value, 'data.json', 'application/json');
    go('fmt');
  });

  const b64dec = s => { s = s.trim().replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const bin = atob(s); return dec.decode(Uint8Array.from(bin, c => c.charCodeAt(0))); };
  Tools.define('base64-encode-decode', root => {
    const tt = UI.textTool(root, {
      sample: 'Hello, World! سلام 👋', live: false, mono: true,
      options: [{ id: 'url', label: 'URL-safe Base64', type: 'checkbox', value: false }],
      actions: [{ label: 'Encode to Base64', run: (t, o) => { let s = ''; const bytes = enc.encode(t); for (let i = 0; i < bytes.length; i += 8192) s += String.fromCharCode(...bytes.subarray(i, i + 8192)); const b = btoa(s); return o.url ? b.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') : b; } }, { label: 'Decode from Base64', run: t => { try { return b64dec(t); } catch (e) { throw new Error('This is not valid Base64.'); } } }],
    });
    const dz = UI.dropzone({ accept: '*/*', compact: true, icon: '📎', title: 'Encode a file to Base64', hint: 'Any file type — processed locally', onFiles: async ([f]) => { const uri = await UI.readFile(f, 'dataURL'); tt.inp.value = `(${f.name}, ${UI.fmtBytes(f.size)})`; tt.out.value = uri; root.querySelector('.tt-info').textContent = 'Data URI — remove the "data:...;base64," prefix if you need only the Base64 part.'; } });
    root.firstElementChild.append(dz);
  });

  Tools.define('url-encode-decode', root => {
    const tt = UI.textTool(root, {
      sample: 'https://example.com/search?q=free online tools&lang=ur&page=2#results', live: false, mono: true,
      actions: [{ label: 'Encode (component)', run: t => encodeURIComponent(t) }, { label: 'Encode full URL', run: t => encodeURI(t) }, { label: 'Decode', run: t => { try { return decodeURIComponent(t.replace(/\+/g, ' ')); } catch (e) { throw new Error('Malformed encoded text.'); } } }],
    });
    const parts = UI.h('<div class="parts"></div>'); root.firstElementChild.append(parts);
    const show = () => {
      let u; try { u = new URL(tt.inp.value.trim()); } catch (e) { parts.innerHTML = ''; return; }
      const rows = [['Protocol', u.protocol], ['Host', u.host], ['Path', u.pathname], ['Query', u.search], ['Hash', u.hash]].filter(r => r[1]);
      const q = [...u.searchParams];
      parts.innerHTML = `<div class="card-sub"><h3>URL parts</h3><div class="table-wrap"><table class="table"><tbody>${rows.map(([k, v]) => `<tr><td>${k}</td><td class="mono" style="white-space:normal">${esc(v)}</td></tr>`).join('')}</tbody></table></div>${q.length ? `<h3 class="mt">Query parameters</h3><div class="table-wrap"><table class="table"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>${q.map(([k, v]) => `<tr><td class="mono">${esc(k)}</td><td class="mono" style="white-space:normal">${esc(v)}</td></tr>`).join('')}</tbody></table></div>` : ''}</div>`;
    };
    tt.inp.addEventListener('input', show); show();
  });

  Tools.define('html-entity-encoder', root => {
    UI.textTool(root, {
      sample: '<p class="note">Fish & Chips © 2026 — "Free" tools</p>', live: false, mono: true,
      options: [{ id: 'all', label: 'Also encode non-ASCII characters', type: 'checkbox', value: false }],
      actions: [{ label: 'Encode HTML', run: (t, o) => { let s = t.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); if (o.all) s = s.replace(/[^\x00-\x7e]/gu, c => `&#${c.codePointAt(0)};`); return s; } }, { label: 'Decode HTML', run: t => { const d = new DOMParser().parseFromString(`<!doctype html><body><textarea>${t.replace(/<\/textarea/gi, '&lt;/textarea')}</textarea>`, 'text/html'); return d.querySelector('textarea').value; } }],
    });
  });

  const uuidv7 = () => { const b = crypto.getRandomValues(new Uint8Array(16)); let ts = Date.now(); for (let i = 5; i >= 0; i--) { b[i] = ts % 256; ts = Math.floor(ts / 256); } b[6] = 0x70 | (b[6] & 0x0f); b[8] = 0x80 | (b[8] & 0x3f); const h = [...b].map(x => x.toString(16).padStart(2, '0')).join(''); return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`; };
  const uuidv4 = () => crypto.randomUUID ? crypto.randomUUID() : (() => { const b = crypto.getRandomValues(new Uint8Array(16)); b[6] = 0x40 | (b[6] & 15); b[8] = 0x80 | (b[8] & 63); const h = [...b].map(x => x.toString(16).padStart(2, '0')).join(''); return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`; })();
  Tools.define('uuid-generator', root => {
    root.innerHTML = '<div class="stack"><div class="row opts"></div><div class="btn-row"><button class="btn go">Generate</button><button class="btn ghost cp">📋 Copy all</button><button class="btn ghost dl">⬇ Download</button></div><textarea class="textarea mono out" style="min-height:260px" readonly></textarea></div>';
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'v', label: 'Version', type: 'seg', value: '4', options: [['4', 'v4 (random)'], ['7', 'v7 (time-ordered)']] }, { id: 'n', label: 'How many', type: 'number', value: 10, min: 1, max: 10000 }, { id: 'up', label: 'UPPERCASE', type: 'checkbox', value: false }, { id: 'nh', label: 'No hyphens', type: 'checkbox', value: false }, { id: 'br', label: '{Braces}', type: 'checkbox', value: false }], () => gen());
    const gen = () => { const o = form.get(); $('.out').value = Array.from({ length: UI.clamp(Math.round(o.n || 1), 1, 10000) }, () => { let u = o.v === '7' ? uuidv7() : uuidv4(); if (o.nh) u = u.replace(/-/g, ''); if (o.up) u = u.toUpperCase(); return o.br ? `{${u}}` : u; }).join('\n'); };
    $('.go').onclick = gen; $('.cp').onclick = () => UI.copy($('.out').value); $('.dl').onclick = () => UI.downloadText($('.out').value, 'uuids.txt'); gen();
  });

  function md5(bytes) {
    const K = new Uint32Array(64), S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
    for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
    const len = bytes.length, nb = ((len + 8) >> 6) + 1, w = new Uint32Array(nb * 16);
    for (let i = 0; i < len; i++) w[i >> 2] |= bytes[i] << ((i % 4) * 8);
    w[len >> 2] |= 0x80 << ((len % 4) * 8); w[nb * 16 - 2] = (len * 8) >>> 0; w[nb * 16 - 1] = Math.floor(len / 0x20000000);
    let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
    for (let b = 0; b < nb; b++) {
      let A = a0, B = b0, C = c0, D = d0;
      for (let i = 0; i < 64; i++) {
        let F, g;
        if (i < 16) { F = (B & C) | (~B & D); g = i; } else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) % 16; } else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; } else { F = C ^ (B | ~D); g = (7 * i) % 16; }
        F = (F + A + K[i] + w[b * 16 + g]) >>> 0; A = D; D = C; C = B;
        const s = S[(i >> 4) * 4 + (i % 4)]; B = (B + ((F << s) | (F >>> (32 - s)))) >>> 0;
      }
      a0 = (a0 + A) >>> 0; b0 = (b0 + B) >>> 0; c0 = (c0 + C) >>> 0; d0 = (d0 + D) >>> 0;
    }
    return [a0, b0, c0, d0].map(x => [0, 8, 16, 24].map(s => ((x >>> s) & 255).toString(16).padStart(2, '0')).join('')).join('');
  }
  const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  Tools.define('hash-generator', root => {
    root.innerHTML = `<div class="stack"><textarea class="textarea txt" style="min-height:120px" placeholder="Type or paste text to hash…">hello world</textarea><div class="dz"></div>
      <div class="row"><label class="check"><input type="checkbox" class="up"> UPPERCASE</label><div class="field grow"><label>Verify: paste an expected hash</label><input class="input mono cmp" placeholder="optional"></div></div><div class="out stack"></div></div>`;
    const $ = UI.q(root);
    let bytes = enc.encode($('.txt').value), label = 'text';
    const run = async () => {
      const algos = [['MD5', () => md5(bytes)], ...['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'].map(a => [a, async () => crypto.subtle ? hex(await crypto.subtle.digest(a, bytes)) : 'Requires HTTPS'])];
      const res = []; for (const [n, f] of algos) res.push([n, await f()]);
      const up = $('.up').checked, cmp = $('.cmp').value.trim().toLowerCase();
      $('.out').innerHTML = `<div class="small muted">Hashing ${esc(label)} (${UI.fmtBytes(bytes.length)})</div>` + res.map(([n, h]) => `<div class="field"><label>${n}${cmp && cmp === h ? ' <span class="badge ok">✓ match</span>' : ''}</label><div class="copy-row"><input class="input mono" readonly value="${up ? h.toUpperCase() : h}"><button class="btn sm secondary" data-h="${up ? h.toUpperCase() : h}">Copy</button></div></div>`).join('') + (cmp && !res.some(r => r[1] === cmp) ? '<div class="notice error">✗ The expected hash does not match any algorithm.</div>' : '');
      $('.out').querySelectorAll('[data-h]').forEach(b => b.onclick = () => UI.copy(b.dataset.h));
    };
    $('.txt').addEventListener('input', () => { bytes = enc.encode($('.txt').value); label = 'text'; run(); });
    $('.up').onchange = run; $('.cmp').addEventListener('input', run);
    $('.dz').append(UI.dropzone({ compact: true, icon: '📎', title: 'Or hash a file (checksum)', hint: 'Any file — processed locally', onFiles: async ([f]) => { bytes = new Uint8Array(await f.arrayBuffer()); label = f.name; run(); } }));
    run();
  });
  Tools._md5 = s => md5(enc.encode(s));

  Tools.define('jwt-decoder', root => {
    const sample = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' + btoa(JSON.stringify({ sub: '1234567890', name: 'Ayesha Khan', role: 'admin', iat: 1767225600, exp: 1798761600 })).replace(/=+$/, '') + '.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    root.innerHTML = `<div class="stack"><textarea class="textarea mono tok" style="min-height:110px" spellcheck="false">${sample}</textarea><div class="out stack"></div><p class="small muted">🔒 Decoding happens in your browser. The signature is not verified — never trust a token's contents without verifying it on your server.</p></div>`;
    const $ = UI.q(root);
    const run = () => {
      const t = $('.tok').value.trim().replace(/^Bearer\s+/i, ''), p = t.split('.');
      if (p.length < 2) { UI.notice($('.out'), 'A JWT has three parts separated by dots: header.payload.signature', 'error'); return; }
      try {
        const [h, pl] = [p[0], p[1]].map(x => JSON.parse(b64dec(x)));
        const fmtT = s => `${new Date(s * 1000).toLocaleString()} (${new Date(s * 1000).toISOString()})`;
        const times = ['iat', 'nbf', 'exp'].filter(k => typeof pl[k] === 'number').map(k => `<tr><td>${{ iat: 'Issued at', nbf: 'Not before', exp: 'Expires' }[k]}</td><td>${fmtT(pl[k])}</td></tr>`).join('');
        const status = typeof pl.exp === 'number' ? (pl.exp * 1000 < Date.now() ? '<span class="badge bad">Expired</span>' : '<span class="badge ok">Not expired</span>') : '<span class="badge">No expiry</span>';
        $('.out').innerHTML = `<div class="row" style="align-items:center">${status}<span class="badge">alg: ${esc(h.alg || '?')}</span></div><div class="grid-2"><div class="field"><label>Header</label><pre class="out-box">${esc(JSON.stringify(h, null, 2))}</pre></div><div class="field"><label>Payload</label><pre class="out-box">${esc(JSON.stringify(pl, null, 2))}</pre></div></div>${times ? `<div class="table-wrap"><table class="table"><tbody>${times}</tbody></table></div>` : ''}<div class="field"><label>Signature</label><div class="out-box">${esc(p[2] || '(none)')}</div></div>`;
      } catch (e) { UI.notice($('.out'), '⚠️ Could not decode this token. Make sure you pasted the whole JWT.', 'error'); }
    };
    $('.tok').addEventListener('input', run); run();
  });

  const PATTERNS = [['Email', '[\\w.+-]+@[\\w-]+\\.[\\w.]+'], ['URL', 'https?:\\/\\/[^\\s/$.?#].[^\\s]*'], ['Phone', '\\+?\\d[\\d\\s()-]{7,}\\d'], ['Date (YYYY-MM-DD)', '\\d{4}-\\d{2}-\\d{2}'], ['IPv4', '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'], ['Hex color', '#(?:[0-9a-fA-F]{3}){1,2}\\b'], ['Numbers', '-?\\d+(?:\\.\\d+)?']];
  Tools.define('regex-tester', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end;flex-wrap:nowrap"><div class="field grow"><label>Regular expression</label><div class="input-wrap"><span style="position:absolute;left:12px;color:var(--muted)">/</span><input class="input mono re" style="padding-left:22px" value="[\\w.+-]+@[\\w-]+\\.[\\w.]+"></div></div><div class="field" style="flex:0 0 110px"><label>Flags</label><input class="input mono fl" value="gi"></div></div>
      <div class="chips pats">${PATTERNS.map(([n, p]) => `<button class="chip" data-p="${esc(p)}">${n}</button>`).join('')}</div>
      <div class="field"><label>Test string</label><textarea class="textarea mono txt" style="min-height:150px">Contact us at hello@toolnest.com or support@example.org.
Sales: sales.team+pk@company.co.uk — not an email: test@@bad</textarea></div>
      <div class="field"><label>Highlighted matches</label><div class="out-box hl" style="min-height:60px"></div></div><div class="msg"></div>
      <div class="field"><label>Replace with (use $1, $&lt;name&gt;)</label><input class="input mono rep" value="[email hidden]"></div><div class="field"><label>Replace result</label><div class="out-box rr"></div></div><div class="groups"></div></div>`;
    const $ = UI.q(root);
    const run = () => {
      let re; const flags = $('.fl').value.replace(/[^gimsuyd]/g, '');
      try { re = new RegExp($('.re').value, flags); } catch (e) { UI.notice($('.msg'), '⚠️ ' + esc(e.message), 'error'); $('.hl').textContent = $('.txt').value; return; }
      const t = $('.txt').value, all = flags.includes('g') ? [...t.matchAll(re)] : (t.match(re) ? [t.match(re)] : []);
      let html = '', last = 0;
      all.forEach(m => { if (m[0] === '' ) return; html += esc(t.slice(last, m.index)) + `<mark>${esc(m[0])}</mark>`; last = m.index + m[0].length; });
      $('.hl').innerHTML = html + esc(t.slice(last));
      UI.notice($('.msg'), `${all.length} match${all.length === 1 ? '' : 'es'}`, all.length ? 'success' : '');
      $('.rr').textContent = t.replace(re, $('.rep').value);
      $('.groups').innerHTML = all.length && all.some(m => m.length > 1) ? `<div class="table-wrap"><table class="table"><thead><tr><th>#</th><th>Match</th>${all[0].slice(1).map((_, i) => `<th>Group ${i + 1}</th>`).join('')}</tr></thead><tbody>${all.slice(0, 200).map((m, i) => `<tr><td>${i + 1}</td><td class="mono">${esc(m[0])}</td>${m.slice(1).map(g => `<td class="mono">${esc(g ?? '')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : '';
    };
    root.addEventListener('input', run);
    $('.pats').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (b) { $('.re').value = b.dataset.p; run(); } });
    run();
  });

  const cx = document.createElement('canvas').getContext('2d');
  const parseColor = s => { cx.fillStyle = '#000'; cx.fillStyle = s; const v = cx.fillStyle; if (v[0] === '#') return [1, 3, 5].map(i => parseInt(v.slice(i, i + 2), 16)); const m = v.match(/[\d.]+/g); return m ? m.slice(0, 3).map(Number) : null; };
  const toHex = (r, g, b) => '#' + [r, g, b].map(x => Math.round(UI.clamp(x, 0, 255)).toString(16).padStart(2, '0')).join('');
  const rgb2hsl = (r, g, b) => { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; let h = 0, s = 0; if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; } return [h, s * 100, l * 100]; };
  const hsl2rgb = (h, s, l) => { s /= 100; l /= 100; const k = n => (n + h / 30) % 12, a = s * Math.min(l, 1 - l), f = n => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1)); return [f(0) * 255, f(8) * 255, f(4) * 255]; };
  const lum = (r, g, b) => { const c = [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
  const contrast = (a, b) => { const [x, y] = [lum(...a), lum(...b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  const textOn = rgb => lum(...rgb) > 0.4 ? '#000' : '#fff';

  Tools.define('color-picker', root => {
    root.innerHTML = `<div class="grid-2" style="align-items:start"><div class="stack"><div class="sw" style="height:180px;border-radius:16px;border:1px solid var(--border);display:grid;place-items:center;font:700 1.4rem var(--mono)"></div>
      <div class="row" style="align-items:flex-end;flex-wrap:nowrap"><input type="color" class="pick" style="width:64px;height:46px"><div class="field grow"><label>Type any color (HEX, RGB, HSL or name)</label><input class="input mono txt" value="#4f46e5"></div></div><div class="codes stack"></div></div>
      <div class="stack"><h3 style="margin:0">Tints & shades</h3><div class="ts" style="display:grid;grid-template-columns:repeat(11,1fr);gap:4px"></div><h3 style="margin:8px 0 0">Contrast (WCAG)</h3><div class="ct"></div></div></div>`;
    const $ = UI.q(root);
    const set = rgb => {
      const [r, g, b] = rgb.map(Math.round), hx = toHex(r, g, b), [h, s, l] = rgb2hsl(r, g, b);
      const mx = Math.max(r, g, b) / 255, hsv = [h, mx ? (1 - Math.min(r, g, b) / 255 / mx) * 100 : 0, mx * 100];
      const k = 1 - mx, cmyk = k === 1 ? [0, 0, 0, 100] : [r, g, b].map(v => (1 - v / 255 - k) / (1 - k) * 100).concat(k * 100);
      $('.sw').style.background = hx; $('.sw').style.color = textOn(rgb); $('.sw').textContent = hx.toUpperCase(); $('.pick').value = hx;
      const codes = [['HEX', hx.toUpperCase()], ['RGB', `rgb(${r}, ${g}, ${b})`], ['HSL', `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`], ['HSV', `hsv(${Math.round(hsv[0])}, ${Math.round(hsv[1])}%, ${Math.round(hsv[2])}%)`], ['CMYK', `cmyk(${cmyk.map(Math.round).join('%, ')}%)`]];
      $('.codes').innerHTML = codes.map(([n, v]) => `<div class="copy-row"><span class="badge" style="width:58px;text-align:center;align-self:center">${n}</span><input class="input mono" readonly value="${v}"><button class="btn sm secondary" data-v="${v}">Copy</button></div>`).join('');
      $('.codes').querySelectorAll('[data-v]').forEach(bt => bt.onclick = () => UI.copy(bt.dataset.v));
      $('.ts').innerHTML = [95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5].map(L => { const c = hsl2rgb(h, s, L), x = toHex(...c); return `<div class="swatch" title="${x}" data-x="${x}" style="aspect-ratio:1;background:${x};padding:0"></div>`; }).join('');
      $('.ts').querySelectorAll('[data-x]').forEach(d => d.onclick = () => { UI.copy(d.dataset.x.toUpperCase()); });
      const cw = contrast(rgb, [255, 255, 255]), cb = contrast(rgb, [0, 0, 0]), badge = c => `${c >= 7 ? '<span class="badge ok">AAA</span>' : c >= 4.5 ? '<span class="badge ok">AA</span>' : c >= 3 ? '<span class="badge warn">AA Large</span>' : '<span class="badge bad">Fail</span>'}`;
      $('.ct').innerHTML = `<div class="grid-2"><div class="card-sub" style="background:${hx};color:#fff"><strong>White text</strong><div>${cw.toFixed(2)}:1 ${badge(cw)}</div></div><div class="card-sub" style="background:${hx};color:#000"><strong>Black text</strong><div>${cb.toFixed(2)}:1 ${badge(cb)}</div></div></div>`;
    };
    $('.pick').addEventListener('input', e => { $('.txt').value = e.target.value; set(parseColor(e.target.value)); });
    $('.txt').addEventListener('input', e => { const c = parseColor(e.target.value.trim()); if (c && e.target.value.trim()) set(c); });
    set(parseColor('#4f46e5'));
  });

  Tools.define('color-palette-generator', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end"><div class="field small"><label>Base color</label><input type="color" class="base" value="#0ea5e9"></div><div class="field"><label>Harmony</label><select class="select mode"><option value="analogous">Analogous</option><option value="complementary">Complementary</option><option value="split">Split complementary</option><option value="triadic">Triadic</option><option value="tetradic">Tetradic</option><option value="mono">Monochromatic</option><option value="random">Random</option></select></div><button class="btn go">🎲 Generate</button></div>
      <div class="pal" style="display:grid;grid-template-columns:repeat(5,1fr);gap:0;border-radius:16px;overflow:hidden;min-height:220px"></div><div class="small muted">Click a color to copy it · 🔒 lock colors you like · press <kbd>Space</kbd> to generate</div><div class="field"><label>CSS variables</label><pre class="out-box css"></pre></div><div class="btn-row"><button class="btn ghost cpall">📋 Copy HEX list</button><button class="btn ghost cpcss">📋 Copy CSS</button></div></div>`;
    const $ = UI.q(root);
    let cols = [], locked = [false, false, false, false, false];
    const gen = () => {
      const [h0, s0, l0] = rgb2hsl(...parseColor($('.base').value)), m = $('.mode').value, r = () => Math.random();
      const H = { analogous: [-40, -20, 0, 20, 40], complementary: [0, 0, 180, 180, 0], split: [0, 150, 210, 150, 0], triadic: [0, 120, 240, 0, 120], tetradic: [0, 90, 180, 270, 0], mono: [0, 0, 0, 0, 0] }[m];
      const L = { complementary: [l0, 85, l0, 30, 20], split: [l0, l0, l0, 85, 20], triadic: [l0, l0, l0, 88, 25], tetradic: [l0, l0, l0, l0, 92], mono: [20, 35, 50, 68, 85] }[m];
      const next = Array.from({ length: 5 }, (_, i) => m === 'random' ? toHex(...hsl2rgb(r() * 360, 45 + r() * 45, 30 + r() * 50)) : toHex(...hsl2rgb((h0 + H[i] + 360) % 360, s0, L ? L[i] : l0)));
      cols = next.map((c, i) => locked[i] && cols[i] ? cols[i] : c); draw();
    };
    const draw = () => {
      $('.pal').innerHTML = cols.map((c, i) => `<div data-i="${i}" style="background:${c};color:${textOn(parseColor(c))};display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding:12px;cursor:pointer;gap:6px"><button class="lk" data-l="${i}" style="background:none;border:0;font-size:1.2rem;cursor:pointer">${locked[i] ? '🔒' : '🔓'}</button><strong class="mono">${c.toUpperCase()}</strong></div>`).join('');
      const css = `:root {\n${cols.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}\n}`; $('.css').textContent = css;
    };
    $('.pal').addEventListener('click', e => { const l = e.target.closest('[data-l]'); if (l) { e.stopPropagation(); locked[+l.dataset.l] = !locked[+l.dataset.l]; draw(); return; } const d = e.target.closest('[data-i]'); if (d) UI.copy(cols[+d.dataset.i].toUpperCase()); });
    $('.go').onclick = gen; $('.base').oninput = gen; $('.mode').onchange = gen;
    $('.cpall').onclick = () => UI.copy(cols.join(', ').toUpperCase()); $('.cpcss').onclick = () => UI.copy($('.css').textContent);
    document.addEventListener('keydown', e => { if (e.code === 'Space' && root.isConnected && !/INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement.tagName)) { e.preventDefault(); $('.mode').value = 'random'; gen(); } });
    gen();
  });

  Tools.define('css-gradient-generator', root => {
    let stops = [['#4f46e5', 0], ['#ec4899', 100]];
    root.innerHTML = `<div class="stack"><div class="pv" style="height:220px;border-radius:16px;border:1px solid var(--border)"></div><div class="row opts"></div><div class="stops stack"></div><div><button class="btn sm secondary add">+ Add color stop</button></div>
      <div class="field"><label>CSS code</label><pre class="out-box css"></pre></div><div class="btn-row"><button class="btn cp">📋 Copy CSS</button><button class="btn ghost rnd">🎲 Random</button></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'type', label: 'Type', type: 'seg', value: 'linear', options: [['linear', 'Linear'], ['radial', 'Radial'], ['conic', 'Conic']] }, { id: 'angle', label: 'Angle', type: 'range', value: 135, min: 0, max: 360, unit: '°', show: v => v.type !== 'radial' }, { id: 'shape', label: 'Shape', type: 'select', value: 'circle', options: ['circle', 'ellipse'], show: v => v.type === 'radial' }], () => draw());
    const drawStops = () => { $('.stops').innerHTML = stops.map(([c, p], i) => `<div class="row" style="align-items:center;flex-wrap:nowrap"><input type="color" data-i="${i}" data-k="0" value="${c}"><input type="range" data-i="${i}" data-k="1" min="0" max="100" value="${p}"><span class="small" style="width:44px">${p}%</span>${stops.length > 2 ? `<button class="btn sm ghost" data-rm="${i}">✕</button>` : ''}</div>`).join(''); draw(); };
    const css = () => { const o = form.get(), s = [...stops].sort((a, b) => a[1] - b[1]).map(([c, p]) => `${c} ${p}%`).join(', '); return o.type === 'linear' ? `linear-gradient(${o.angle}deg, ${s})` : o.type === 'radial' ? `radial-gradient(${o.shape}, ${s})` : `conic-gradient(from ${o.angle}deg, ${s})`; };
    const draw = () => { const g = css(); $('.pv').style.background = g; $('.css').textContent = `background: ${stops[0][0]};\nbackground: ${g};`; };
    $('.stops').addEventListener('input', e => { const i = e.target.dataset.i; if (i == null) return; stops[+i][+e.target.dataset.k] = e.target.dataset.k === '1' ? +e.target.value : e.target.value; if (e.target.dataset.k === '1') e.target.nextElementSibling.textContent = e.target.value + '%'; draw(); });
    $('.stops').addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (b) { stops.splice(+b.dataset.rm, 1); drawStops(); } });
    $('.add').onclick = () => { stops.push([toHex(Math.random() * 255, Math.random() * 255, Math.random() * 255), 50]); drawStops(); };
    $('.rnd').onclick = () => { stops = [[toHex(...hsl2rgb(Math.random() * 360, 80, 60)), 0], [toHex(...hsl2rgb(Math.random() * 360, 80, 55)), 100]]; form.set('angle', Math.round(Math.random() * 360)); drawStops(); };
    $('.cp').onclick = () => UI.copy($('.css').textContent);
    drawStops();
  });

  Tools.define('box-shadow-generator', root => {
    root.innerHTML = `<div class="grid-2" style="align-items:start"><div class="row opts"></div><div class="stack"><div class="stage" style="height:260px;display:grid;place-items:center;border-radius:16px;border:1px solid var(--border)"><div class="box" style="width:150px;height:150px;border-radius:18px"></div></div><div class="field"><label>CSS code</label><pre class="out-box css"></pre></div><button class="btn cp">📋 Copy CSS</button></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'x', label: 'Horizontal offset', type: 'range', value: 0, min: -60, max: 60, unit: 'px', cls: 'grow' }, { id: 'y', label: 'Vertical offset', type: 'range', value: 12, min: -60, max: 60, unit: 'px', cls: 'grow' }, { id: 'blur', label: 'Blur', type: 'range', value: 32, min: 0, max: 120, unit: 'px', cls: 'grow' }, { id: 'spread', label: 'Spread', type: 'range', value: -6, min: -50, max: 50, unit: 'px', cls: 'grow' }, { id: 'op', label: 'Opacity', type: 'range', value: 25, min: 0, max: 100, unit: '%', cls: 'grow' }, { id: 'col', label: 'Shadow color', type: 'color', value: '#0f172a' }, { id: 'box', label: 'Box color', type: 'color', value: '#ffffff' }, { id: 'bg', label: 'Background', type: 'color', value: '#eef2ff' }, { id: 'inset', label: 'Inset', type: 'checkbox', value: false }], () => draw());
    const draw = () => { const o = form.get(), [r, g, b] = parseColor(o.col), sh = `${o.inset ? 'inset ' : ''}${o.x}px ${o.y}px ${o.blur}px ${o.spread}px rgba(${r}, ${g}, ${b}, ${(o.op / 100).toFixed(2)})`; $('.box').style.boxShadow = sh; $('.box').style.background = o.box; $('.stage').style.background = o.bg; $('.css').textContent = `box-shadow: ${sh};`; };
    $('.cp').onclick = () => UI.copy($('.css').textContent); draw();
  });

  const minCSS = s => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>~+])\s*/g, '$1').replace(/;}/g, '}').replace(/(^|[^\d])0(px|em|rem|%)/g, '$10').trim();
  const beautyCSS = s => minCSS(s).replace(/{/g, ' {\n').replace(/;/g, ';\n').replace(/}/g, '\n}\n\n').split('\n').map(l => {
    l = l.trim(); if (!l || l.endsWith('{') || l === '}') return l;
    return '  ' + l.replace(/:\s*/, ': ') + (l.endsWith(';') ? '' : ';');
  }).join('\n').replace(/\n{3,}/g, '\n\n').replace(/,(?=[^\n]*{)/g, ', ').trim();
  const minHTML = s => s.replace(/<!--(?!\[if)[\s\S]*?-->/g, '').replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').trim();
  Tools.define('code-minifier', root => {
    root.innerHTML = `<div class="stack"><div class="lang"></div><div class="grid-2"><div class="field"><label>Input code</label><textarea class="textarea mono in" style="min-height:300px" spellcheck="false"></textarea></div><div class="field"><label>Output</label><textarea class="textarea mono out" style="min-height:300px" readonly></textarea></div></div>
      <div class="btn-row"><button class="btn min">📦 Minify</button><button class="btn secondary beau">✨ Beautify</button><button class="btn ghost cp">📋 Copy</button><span class="small muted info"></span></div><div class="err"></div></div>`;
    const $ = UI.q(root);
    const SAMPLES = { css: '/* Main button */\n.button {\n  color: #ffffff;\n  background-color: #4f46e5;\n  padding: 10px 20px;\n  margin: 0px;\n}\n\n.button:hover {\n  opacity: 0.9;\n}', js: '// Add two numbers\nfunction addNumbers(firstNumber, secondNumber) {\n  const result = firstNumber + secondNumber;\n  console.log("The result is", result);\n  return result;\n}\n\naddNumbers(5, 10);', html: '<!-- Header -->\n<div class="card">\n    <h1>  Hello   World </h1>\n    <p>\n      Free online tools\n    </p>\n</div>', json: '{\n  "name": "WebToolNest",\n  "version": 1,\n  "tags": ["free", "online"]\n}' };
    let lang = 'css';
    $('.lang').append(UI.seg([['css', 'CSS'], ['js', 'JavaScript'], ['html', 'HTML'], ['json', 'JSON']], 'css', v => { lang = v; $('.in').value = SAMPLES[v]; $('.out').value = ''; $('.info').textContent = ''; }));
    $('.in').value = SAMPLES.css;
    const info = () => { const a = enc.encode($('.in').value).length, b = enc.encode($('.out').value).length; $('.info').textContent = `${UI.fmtBytes(a)} → ${UI.fmtBytes(b)} (${a ? Math.round((1 - b / a) * 100) : 0}% smaller)`; };
    const run = beautify => UI.busy(beautify ? $('.beau') : $('.min'), async () => {
      const s = $('.in').value; let out;
      if (lang === 'css') out = beautify ? beautyCSS(s) : minCSS(s);
      else if (lang === 'json') out = beautify ? JSON.stringify(parseJSON(s), null, 2) : JSON.stringify(parseJSON(s));
      else if (lang === 'html') out = beautify ? s.replace(/>\s*</g, '>\n<').trim() : minHTML(s);
      else { const T = await UI.lib('terser'); const r = await T.minify(s, beautify ? { compress: false, mangle: false, format: { beautify: true, comments: true } } : { compress: true, mangle: true }); out = r.code; }
      $('.out').value = out; info();
    }, 'Working…', $('.err'));
    $('.min').onclick = () => run(false); $('.beau').onclick = () => run(true); $('.cp').onclick = () => UI.copy($('.out').value);
  });

  Tools.define('unix-timestamp-converter', root => {
    root.innerHTML = `<div class="stack"><div class="card-sub row" style="align-items:center;justify-content:space-between"><div><div class="small muted">Current Unix timestamp</div><div class="big-num now" style="font-size:2rem;text-align:left"></div></div><button class="btn sm secondary cpn">Copy</button></div>
      <div class="grid-2" style="align-items:start"><div class="stack"><h3 style="margin:0">Timestamp → date</h3><input class="input mono ts" placeholder="e.g. 1767225600 or 1767225600000"><div class="o1"></div></div>
      <div class="stack"><h3 style="margin:0">Date → timestamp</h3><input class="input dt" type="datetime-local" step="1"><div class="o2"></div></div></div></div>`;
    const $ = UI.q(root);
    const tick = () => { if (!root.isConnected) return clearInterval(iv); $('.now').textContent = Math.floor(Date.now() / 1000); };
    const iv = setInterval(tick, 1000); tick();
    $('.cpn').onclick = () => UI.copy($('.now').textContent);
    const rel = ms => { const s = Math.round((ms - Date.now()) / 1000), a = Math.abs(s), u = a < 60 ? [s, 'second'] : a < 3600 ? [Math.round(s / 60), 'minute'] : a < 86400 ? [Math.round(s / 3600), 'hour'] : a < 2592000 ? [Math.round(s / 86400), 'day'] : a < 31536000 ? [Math.round(s / 2592000), 'month'] : [Math.round(s / 31536000), 'year']; return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(...u); };
    const t2d = () => {
      const v = $('.ts').value.trim(); if (!v) { $('.o1').innerHTML = ''; return; }
      if (!/^-?\d+(\.\d+)?$/.test(v)) { UI.notice($('.o1'), 'Enter a number.', 'error'); return; }
      const n = +v, ms = Math.abs(n) > 1e11 ? n : n * 1000, d = new Date(ms);
      $('.o1').innerHTML = UI.resultsHTML([{ k: Math.abs(n) > 1e11 ? 'Milliseconds detected' : 'Seconds detected', v: esc(d.toLocaleString()), main: true, s: rel(ms) }, { k: 'UTC', v: d.toUTCString() }, { k: 'ISO 8601', v: d.toISOString() }]);
    };
    const d2t = () => { if (!$('.dt').value) return; const d = new Date($('.dt').value); $('.o2').innerHTML = UI.resultsHTML([{ k: 'Unix timestamp (seconds)', v: Math.floor(d / 1000), main: true }, { k: 'Milliseconds', v: d.getTime() }, { k: 'ISO 8601 (UTC)', v: d.toISOString() }]); };
    $('.ts').addEventListener('input', t2d); $('.dt').addEventListener('input', d2t);
    $('.ts').value = Math.floor(Date.now() / 1000); const n = new Date(); $('.dt').value = new Date(n - n.getTimezoneOffset() * 6e4).toISOString().slice(0, 19); t2d(); d2t();
  });

  Tools.define('markdown-to-html', root => {
    root.innerHTML = `<div class="stack"><div class="grid-2"><div class="field"><label>Markdown</label><textarea class="textarea mono md" style="min-height:380px" spellcheck="false"># Hello, Markdown!

Write **bold**, *italic* and \`inline code\`.

## A list
- Free online tools
- Works in your browser
- [Visit WebToolNest](https://www.webtoolnest.com)

| Tool | Category |
|------|----------|
| Merge PDF | PDF |
| CGPA Calculator | Student |

\`\`\`js
console.log("Hello");
\`\`\`

> Tip: the preview updates as you type.</textarea></div><div class="field"><label>Preview</label><iframe class="pv" sandbox style="width:100%;min-height:380px;border:1px solid var(--border);border-radius:10px;background:#fff"></iframe></div></div>
      <div class="field"><label>HTML output</label><textarea class="textarea mono html" style="min-height:160px" readonly></textarea></div><div class="btn-row"><button class="btn cp">📋 Copy HTML</button><button class="btn secondary dl">⬇ Download .html</button></div></div>`;
    const $ = UI.q(root);
    const style = '<style>body{font-family:system-ui,sans-serif;line-height:1.6;padding:12px 18px;color:#111}table{border-collapse:collapse}td,th{border:1px solid #ddd;padding:6px 10px}pre{background:#f4f4f5;padding:10px;border-radius:8px;overflow:auto}code{background:#f4f4f5;padding:1px 4px;border-radius:4px}blockquote{border-left:4px solid #ddd;margin:0;padding-left:12px;color:#555}img{max-width:100%}</style>';
    const run = UI.debounce(async () => { const m = await UI.lib('marked'); const html = m.parse($('.md').value, { gfm: true, breaks: false }); $('.html').value = html; $('.pv').srcdoc = style + html; }, 150);
    $('.md').addEventListener('input', run);
    $('.cp').onclick = () => UI.copy($('.html').value);
    $('.dl').onclick = () => UI.downloadText(`<!doctype html>\n<html><head><meta charset="utf-8"><title>Document</title>${style}</head><body>\n${$('.html').value}\n</body></html>`, 'document.html', 'text/html');
    run();
  });

  function parseCSV(text, delim) {
    const rows = []; let row = [], f = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"' && f === '') q = true;
      else if (c === delim) { row.push(f); f = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
      else f += c;
    }
    if (f !== '' || row.length) { row.push(f); rows.push(row); }
    return rows.filter(r => r.length > 1 || r[0].trim() !== '');
  }
  const typed = v => v === '' ? '' : /^-?\d+(\.\d+)?$/.test(v) && !/^-?0\d/.test(v) ? +v : v === 'true' ? true : v === 'false' ? false : v === 'null' ? null : v;
  Tools.define('csv-to-json', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:flex-end"><div class="field"><label>Convert</label><div class="dir"></div></div><div class="row opts"></div></div><div class="dz"></div>
      <div class="grid-2"><div class="field"><label class="lin">CSV input</label><textarea class="textarea mono in" style="min-height:280px" spellcheck="false">name,city,age,student
Ayesha Khan,Lahore,22,true
"Ali, Jr.",Karachi,25,false
Sara,"Islamabad",19,true</textarea></div><div class="field"><label class="lout">JSON output</label><textarea class="textarea mono out" style="min-height:280px" readonly></textarea></div></div>
      <div class="btn-row"><button class="btn cp">📋 Copy</button><button class="btn secondary dl">⬇ Download</button><span class="small muted info"></span></div><div class="err"></div></div>`;
    const $ = UI.q(root);
    let dir = 'c2j';
    const form = UI.fields($('.opts'), [{ id: 'delim', label: 'Delimiter', type: 'select', value: 'auto', options: [['auto', 'Auto-detect'], [',', 'Comma (,)'], [';', 'Semicolon (;)'], ['\t', 'Tab'], ['|', 'Pipe (|)']] }, { id: 'head', label: 'First row is header', type: 'checkbox', value: true }, { id: 'types', label: 'Detect numbers & booleans', type: 'checkbox', value: true }], () => run());
    $('.dir').append(UI.seg([['c2j', 'CSV → JSON'], ['j2c', 'JSON → CSV']], 'c2j', v => { dir = v; $('.lin').textContent = v === 'c2j' ? 'CSV input' : 'JSON input'; $('.lout').textContent = v === 'c2j' ? 'JSON output' : 'CSV output'; $('.in').value = $('.out').value || $('.in').value; run(); }));
    const run = () => {
      $('.err').innerHTML = ''; const o = form.get(), t = $('.in').value;
      try {
        if (dir === 'c2j') {
          const first = t.split('\n')[0] || '', d = o.delim === 'auto' ? [',', ';', '\t', '|'].map(c => [c, first.split(c).length]).sort((a, b) => b[1] - a[1])[0][0] : o.delim;
          const rows = parseCSV(t, d); if (!rows.length) { $('.out').value = ''; return; }
          const v = x => (o.types ? typed(x) : x);
          const data = o.head ? rows.slice(1).map(r => Object.fromEntries(rows[0].map((h, i) => [h.trim() || `column${i + 1}`, v(r[i] ?? '')]))) : rows.map(r => r.map(v));
          $('.out').value = JSON.stringify(data, null, 2); $('.info').textContent = `${data.length} rows · ${rows[0].length} columns`;
        } else {
          let data = parseJSON(t); if (!Array.isArray(data)) data = [data];
          const d = o.delim === 'auto' ? ',' : o.delim, cell = x => { let s = x == null ? '' : typeof x === 'object' ? JSON.stringify(x) : String(x); return /["\n\r]/.test(s) || s.includes(d) ? `"${s.replace(/"/g, '""')}"` : s; };
          if (data.every(r => Array.isArray(r))) $('.out').value = data.map(r => r.map(cell).join(d)).join('\n');
          else { const keys = [...new Set(data.flatMap(r => Object.keys(r || {})))]; $('.out').value = [keys.map(cell).join(d), ...data.map(r => keys.map(k => cell((r || {})[k])).join(d))].join('\n'); }
          $('.info').textContent = `${data.length} rows`;
        }
      } catch (e) { UI.notice($('.err'), '⚠️ ' + esc(e.message), 'error'); }
    };
    $('.in').addEventListener('input', UI.debounce(run, 200));
    $('.dz').append(UI.dropzone({ accept: '.csv,.json,.txt,.tsv', compact: true, icon: '📄', title: 'Open a CSV or JSON file', onFiles: async ([f]) => { $('.in').value = await UI.readFile(f); run(); } }));
    $('.cp').onclick = () => UI.copy($('.out').value);
    $('.dl').onclick = () => UI.downloadText($('.out').value, dir === 'c2j' ? 'data.json' : 'data.csv', dir === 'c2j' ? 'application/json' : 'text/csv');
    run();
  });

  Tools.define('number-base-converter', root => {
    const bases = [['Decimal', 10], ['Binary', 2], ['Octal', 8], ['Hexadecimal', 16]];
    root.innerHTML = `<div class="stack">${bases.map(([n, b]) => `<div class="field"><label>${n} (base ${b})</label><div class="copy-row"><input class="input mono" data-b="${b}" value="${b === 10 ? '255' : ''}" autocomplete="off"><button class="btn sm secondary" data-c="${b}">Copy</button></div></div>`).join('')}
      <div class="row" style="align-items:flex-end"><div class="field small"><label>Custom base</label><input class="input cb" type="number" min="2" max="36" value="36"></div><div class="field grow"><label>Value in custom base</label><input class="input mono" data-b="custom" autocomplete="off"></div></div><div class="msg small"></div></div>`;
    const $ = UI.q(root);
    const DIG = '0123456789abcdefghijklmnopqrstuvwxyz';
    const parseBig = (s, b) => { s = s.trim().toLowerCase().replace(/[\s_]/g, ''); const neg = s.startsWith('-'); if (neg) s = s.slice(1); const pre = { 2: '0b', 8: '0o', 16: '0x' }[b]; if (pre && s.startsWith(pre)) s = s.slice(2); if (!s) return null; let n = 0n; for (const ch of s) { const d = DIG.indexOf(ch); if (d < 0 || d >= b) throw new Error(`"${ch}" is not a valid base-${b} digit`); n = n * BigInt(b) + BigInt(d); } return neg ? -n : n; };
    const toBase = (n, b) => (n < 0n ? '-' : '') + (n < 0n ? -n : n).toString(b);
    const update = src => {
      const cb = UI.clamp(Math.round(UI.num($('.cb').value) || 36), 2, 36);
      try {
        const b = src.dataset.b === 'custom' ? cb : +src.dataset.b, n = parseBig(src.value, b);
        root.querySelectorAll('[data-b]').forEach(i => { if (i !== src) i.value = n == null ? '' : toBase(n, i.dataset.b === 'custom' ? cb : +i.dataset.b).toUpperCase(); });
        $('.msg').textContent = n != null ? `${n.toString(2).replace('-', '').length} bits` : '';
      } catch (e) { $('.msg').innerHTML = `<span style="color:var(--danger)">⚠️ ${esc(e.message)}</span>`; }
    };
    root.addEventListener('input', e => { if (e.target.dataset.b) update(e.target); else if (e.target.classList.contains('cb')) update(root.querySelector('[data-b="10"]')); });
    root.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (b) UI.copy(root.querySelector(`[data-b="${b.dataset.c}"]`).value); });
    update(root.querySelector('[data-b="10"]'));
  });

  Tools.define('sql-formatter', root => {
    root.innerHTML = `<div class="stack"><div class="row opts"></div><div class="grid-2"><div class="field"><label>SQL input</label><textarea class="textarea mono in" style="min-height:300px" spellcheck="false">select u.id, u.name, count(o.id) as orders from users u left join orders o on o.user_id = u.id where u.created_at >= '2026-01-01' and u.status = 'active' group by u.id, u.name having count(o.id) > 5 order by orders desc limit 10;</textarea></div><div class="field"><label>Formatted SQL</label><textarea class="textarea mono out" style="min-height:300px" readonly></textarea></div></div>
      <div class="btn-row"><button class="btn go">✨ Format</button><button class="btn secondary min">Minify</button><button class="btn ghost cp">📋 Copy</button></div><div class="err"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'lang', label: 'Dialect', type: 'select', value: 'sql', options: [['sql', 'Standard SQL'], ['mysql', 'MySQL'], ['mariadb', 'MariaDB'], ['postgresql', 'PostgreSQL'], ['tsql', 'SQL Server (T-SQL)'], ['plsql', 'Oracle PL/SQL'], ['sqlite', 'SQLite'], ['bigquery', 'BigQuery']] }, { id: 'kc', label: 'Keywords', type: 'select', value: 'upper', options: [['upper', 'UPPERCASE'], ['lower', 'lowercase'], ['preserve', 'Keep as is']] }, { id: 'tab', label: 'Indent', type: 'select', value: '2', options: [['2', '2 spaces'], ['4', '4 spaces']] }]);
    const fmtSQL = () => UI.busy($('.go'), async () => {
      const F = await UI.lib('sqlformatter'), o = form.get();
      const order = [o.lang, ...['mysql', 'postgresql', 'tsql', 'sqlite', 'plsql', 'mariadb', 'bigquery'].filter(l => l !== o.lang)];
      let firstErr;
      for (const language of order) {
        try {
          $('.out').value = F.format($('.in').value, { language, keywordCase: o.kc, tabWidth: +o.tab });
          if (language !== o.lang) { form.set('lang', language); UI.toast(`Detected ${language.toUpperCase()} syntax — dialect switched`); }
          return;
        } catch (e) { firstErr = firstErr || e; }
      }
      throw new Error(String(firstErr.message).split('. This likely')[0]);
    }, 'Formatting…', $('.err'));
    $('.go').onclick = fmtSQL;
    $('.min').onclick = () => { $('.out').value = $('.in').value.replace(/--[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').trim(); };
    $('.cp').onclick = () => UI.copy($('.out').value);
    fmtSQL();
  });
})();

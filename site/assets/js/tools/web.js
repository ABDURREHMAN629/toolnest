(function () {
  const { esc, fmt } = UI;
  const flag = cc => cc && cc.length === 2 ? String.fromCodePoint(...[...cc.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : '';
  async function ipInfo() {
    try { const j = await (await fetch('https://ipwho.is/', { cache: 'no-store' })).json(); if (j.success === false) throw new Error(j.message); return { ip: j.ip, type: j.type, city: j.city, region: j.region, country: j.country, cc: j.country_code, isp: j.connection && j.connection.isp, org: j.connection && j.connection.org, asn: j.connection && j.connection.asn, tz: j.timezone && j.timezone.id, lat: j.latitude, lon: j.longitude }; }
    catch (e) { const j = await (await fetch('https://get.geojs.io/v1/ip/geo.json', { cache: 'no-store' })).json(); return { ip: j.ip, type: j.ip.includes(':') ? 'IPv6' : 'IPv4', city: j.city, region: j.region, country: j.country, cc: j.country_code, isp: j.organization_name, org: j.organization, asn: j.asn, tz: j.timezone, lat: +j.latitude, lon: +j.longitude }; }
  }

  Tools.define('internet-speed-test', root => {
    const CF = 'https://speed.cloudflare.com/';
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="gauge" style="width:250px;height:250px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary) 0deg, var(--bg-soft) 0deg)"><div style="width:206px;height:206px;border-radius:50%;background:var(--card);display:grid;place-items:center;text-align:center"><div><div class="big-num val" style="font-size:3.2rem">0</div><div class="muted">Mbps</div><div class="small muted phase">Ready</div></div></div></div>
      <button class="btn lg go">🚀 Start test</button><div class="results w-100 res"></div><div class="verdict w-100"></div><p class="small muted text-center">Measured against Cloudflare's global network. For the most accurate result, pause downloads and streaming on your devices. A test uses about 50–200 MB of data.</p></div>`;
    const $ = UI.q(root);
    const tiles = r => { $('.res').innerHTML = UI.resultsHTML([{ k: '⬇ Download', v: r.down != null ? r.down.toFixed(1) + ' Mbps' : '—' }, { k: '⬆ Upload', v: r.up != null ? r.up.toFixed(1) + ' Mbps' : '—' }, { k: 'Ping', v: r.ping != null ? Math.round(r.ping) + ' ms' : '—' }, { k: 'Jitter', v: r.jit != null ? r.jit.toFixed(1) + ' ms' : '—' }, r.isp && { k: 'Provider', v: esc(r.isp), s: esc(r.loc || '') }]); };
    const show = (mbps, phase) => { $('.val').textContent = mbps < 10 ? mbps.toFixed(1) : Math.round(mbps); $('.phase').textContent = phase; const deg = Math.min(360, Math.log10(1 + mbps) / Math.log10(1001) * 360); $('.gauge').style.background = `conic-gradient(var(--primary) ${deg}deg, var(--bg-soft) 0deg)`; };
    const measure = async (phase, ms, worker) => {
      const ctl = new AbortController(), t0 = performance.now(); let bytes = 0, done = false;
      const tick = setInterval(() => { const s = (performance.now() - t0) / 1000; if (s > 0.3) show(bytes * 8 / s / 1e6, phase); }, 200);
      const stop = setTimeout(() => { done = true; ctl.abort(); }, ms);
      await Promise.all(Array.from({ length: 4 }, () => worker(ctl.signal, n => { bytes += n; }, () => done))).catch(() => {});
      clearInterval(tick); clearTimeout(stop); const s = (performance.now() - t0) / 1000;
      return bytes * 8 / s / 1e6;
    };
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      const r = {}; tiles(r); $('.verdict').innerHTML = '';
      ipInfo().then(i => { r.isp = i.isp; r.loc = [i.city, i.country].filter(Boolean).join(', '); tiles(r); }).catch(() => {});
      show(0, 'Measuring ping…'); const pings = [];
      for (let i = 0; i < 12; i++) {
        const url = CF + '__down?bytes=0&r=' + Math.random(), t = performance.now();
        await (await fetch(url, { cache: 'no-store' })).arrayBuffer();
        const e = performance.getEntriesByName(url).pop();
        pings.push(e && e.requestStart > 0 && e.responseStart > e.requestStart ? e.responseStart - e.requestStart : performance.now() - t);
      }
      pings.shift(); r.ping = Math.min(...pings); r.jit = pings.slice(1).reduce((a, p, i) => a + Math.abs(p - pings[i]), 0) / (pings.length - 1); tiles(r);
      r.down = await measure('Testing download…', 9000, async (signal, add, over) => {
        let size = 1e6;
        while (!over()) {
          const res = await fetch(`${CF}__down?bytes=${size}&r=${Math.random()}`, { cache: 'no-store', signal }); const rd = res.body.getReader();
          for (;;) { const { done, value } = await rd.read(); if (done) break; add(value.length); }
          size = Math.min(size * 2, 50e6);
        }
      }); tiles(r);
      const blob = new Uint8Array(4e6); crypto.getRandomValues(blob.subarray(0, 65536));
      r.up = await measure('Testing upload…', 8000, async (signal, add, over) => {
        let size = 2.5e5;
        while (!over()) { await fetch(CF + '__up', { method: 'POST', body: blob.subarray(0, size), signal, cache: 'no-store' }); add(size); size = Math.min(size * 2, 4e6); }
      });
      show(r.down, 'Download speed'); tiles(r);
      const d = r.down, use = d >= 100 ? 'Excellent — great for 4K streaming, large downloads and many devices at once.' : d >= 25 ? 'Very good — smooth HD/4K streaming, gaming and video calls.' : d >= 10 ? 'Good — fine for HD streaming and video calls.' : d >= 3 ? 'Basic — OK for browsing and SD video; HD may buffer.' : 'Slow — browsing and messaging only.';
      $('.verdict').innerHTML = `<div class="notice ${d >= 10 ? 'success' : 'warn'}">${use}</div>`;
    }, 'Testing…');
  });

  Tools.define('what-is-my-ip', root => {
    root.innerHTML = '<div class="stack"><div class="out"><div class="notice">Looking up your IP address…</div></div><p class="small muted">Location is approximate (usually the city of your internet provider) and is provided by ipwho.is. We do not store your IP address.</p></div>';
    (async () => {
      try {
        const i = await ipInfo();
        root.querySelector('.out').innerHTML = UI.resultsHTML([{ k: `Your public ${esc(i.type || 'IP')} address`, v: `<span class="ipv">${esc(i.ip)}</span> <button class="btn sm cp" style="background:rgba(255,255,255,.2);color:#fff;vertical-align:middle">Copy</button>`, main: true }, { k: 'Location', v: `${flag(i.cc)} ${esc([i.city, i.region].filter(Boolean).join(', '))}`, s: esc(i.country || '') }, { k: 'Internet provider', v: esc(i.isp || '—'), s: i.asn ? 'AS' + esc(String(i.asn).replace(/^AS/i, '')) : '' }, { k: 'Time zone', v: esc(i.tz || '—') }, { k: 'Coordinates', v: isFinite(i.lat) ? `${i.lat.toFixed(2)}, ${i.lon.toFixed(2)}` : '—', s: isFinite(i.lat) ? `<a href="https://www.openstreetmap.org/?mlat=${i.lat}&mlon=${i.lon}#map=10/${i.lat}/${i.lon}" target="_blank" rel="noopener">View on map ↗</a>` : '' }]);
        root.querySelector('.cp').onclick = () => UI.copy(i.ip);
      } catch (e) { UI.notice(root.querySelector('.out'), '⚠️ Could not look up your IP. An ad blocker or network filter may be blocking the request.', 'error'); }
    })();
  });

  const ytId = s => { s = s.trim(); if (/^[\w-]{11}$/.test(s)) return s; const m = s.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/|\/live\/|\/v\/)([\w-]{11})/); return m ? m[1] : null; };
  Tools.define('youtube-thumbnail-downloader', root => {
    root.innerHTML = '<div class="stack"><div class="copy-row"><input class="input url" placeholder="Paste a YouTube video or Shorts link, e.g. https://youtu.be/…"><button class="btn go">Get thumbnails</button></div><div class="out"></div><p class="small muted">Thumbnails belong to their creators. Only use them where you have the right to, e.g. for your own videos, reviews or commentary.</p></div>';
    const $ = UI.q(root);
    const SIZES = [['maxresdefault', 'HD (1280×720)'], ['sddefault', 'SD (640×480)'], ['hqdefault', 'High (480×360)'], ['mqdefault', 'Medium (320×180)'], ['default', 'Small (120×90)']];
    const go = () => {
      const id = ytId($('.url').value); if (!id) return UI.notice($('.out'), 'Please paste a valid YouTube video link.', 'error');
      $('.out').innerHTML = `<div class="thumbs" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${SIZES.map(([k, l]) => `<div class="thumb-card" data-k="${k}"><img src="https://i.ytimg.com/vi/${id}/${k}.jpg" alt="${l} thumbnail" crossorigin="anonymous"><div class="tc-label">${l}</div><button class="btn sm">⬇ Download</button></div>`).join('')}</div>`;
      $('.out').querySelectorAll('.thumb-card').forEach(c => {
        const img = c.querySelector('img');
        img.onload = () => { if (img.naturalWidth === 120 && c.dataset.k !== 'default') c.remove(); };
        img.onerror = () => c.remove();
        c.querySelector('button').onclick = e => UI.busy(e.currentTarget, async () => { const r = await fetch(img.src); UI.download(await r.blob(), `youtube-${id}-${c.dataset.k}.jpg`); }, 'Saving…');
      });
    };
    $('.go').onclick = go; $('.url').addEventListener('keydown', e => e.key === 'Enter' && go());
    $('.url').addEventListener('paste', () => setTimeout(go, 50));
  });

  Tools.define('meta-tag-generator', root => {
    root.innerHTML = '<div class="grid-2" style="align-items:start"><div class="row opts"></div><div class="stack"><div class="small muted">Google search preview</div><div class="card-sub serp" style="font-family:Arial,sans-serif"></div><div class="small muted">Social share preview</div><div class="card-sub soc" style="padding:0;overflow:hidden"></div><div class="field"><label>Your meta tags</label><textarea class="textarea mono code" style="min-height:300px" readonly></textarea></div><button class="btn cp">📋 Copy tags</button></div></div>';
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [
      { id: 'title', label: 'Page title (50–60 characters)', type: 'text', value: 'Free Online Tools – PDF, Image & Video | WebToolNest', full: true },
      { id: 'desc', label: 'Meta description (120–160 characters)', type: 'textarea', rows: 3, value: '150+ free online tools: merge and compress PDFs, convert images and videos, calculate CGPA and more. No sign-up, fast and private.', full: true },
      { id: 'url', label: 'Page URL', type: 'text', value: 'https://example.com/', full: true }, { id: 'image', label: 'Share image URL (1200×630)', type: 'text', value: 'https://example.com/og-image.jpg', full: true },
      { id: 'site', label: 'Site name', type: 'text', value: 'WebToolNest' }, { id: 'tw', label: 'X / Twitter handle', type: 'text', value: '@toolnest' }, { id: 'author', label: 'Author', type: 'text', value: '' }, { id: 'kw', label: 'Keywords (optional)', type: 'text', value: '' },
      { id: 'type', label: 'Content type', type: 'select', value: 'website', options: ['website', 'article', 'product', 'profile'] }, { id: 'robots', label: 'Search engines', type: 'select', value: 'index, follow', options: ['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow'] }, { id: 'lang', label: 'Language', type: 'text', value: 'en' },
    ], () => draw());
    const draw = () => {
      const o = form.get(), e = s => esc(s || '').replace(/&#39;/g, "'");
      const tags = [`<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`, `<title>${e(o.title)}</title>`, `<meta name="description" content="${e(o.desc)}">`, o.kw && `<meta name="keywords" content="${e(o.kw)}">`, o.author && `<meta name="author" content="${e(o.author)}">`, `<meta name="robots" content="${o.robots}">`, o.url && `<link rel="canonical" href="${e(o.url)}">`, '\n', '<!-- Open Graph / Facebook / WhatsApp / LinkedIn -->', `<meta property="og:type" content="${o.type}">`, `<meta property="og:title" content="${e(o.title)}">`, `<meta property="og:description" content="${e(o.desc)}">`, o.url && `<meta property="og:url" content="${e(o.url)}">`, o.image && `<meta property="og:image" content="${e(o.image)}">`, o.site && `<meta property="og:site_name" content="${e(o.site)}">`, o.lang && `<meta property="og:locale" content="${e(o.lang.replace('-', '_'))}">`, '\n', '<!-- X / Twitter -->', `<meta name="twitter:card" content="${o.image ? 'summary_large_image' : 'summary'}">`, o.tw && `<meta name="twitter:site" content="${e(o.tw)}">`, `<meta name="twitter:title" content="${e(o.title)}">`, `<meta name="twitter:description" content="${e(o.desc)}">`, o.image && `<meta name="twitter:image" content="${e(o.image)}">`].filter(Boolean);
      $('.code').value = tags.join('\n').replace(/\n{3,}/g, '\n\n');
      const tl = o.title.length, dl = o.desc.length, warn = (n, a, b) => `<span class="badge ${n >= a && n <= b ? 'ok' : 'warn'}">${n} chars</span>`;
      let host = ''; try { host = new URL(o.url).hostname; } catch (er) { host = o.url; }
      $('.serp').innerHTML = `<div style="font-size:.85rem;color:#4d5156">${esc(host)}</div><div style="color:#1a0dab;font-size:1.2rem;line-height:1.3">${esc(o.title.length > 60 ? o.title.slice(0, 58) + '…' : o.title)}</div><div style="color:#4d5156;font-size:.9rem">${esc(o.desc.length > 160 ? o.desc.slice(0, 157) + '…' : o.desc)}</div><div class="row mt small">Title ${warn(tl, 30, 60)} Description ${warn(dl, 110, 160)}</div>`;
      $('.soc').innerHTML = `${o.image ? `<div style="aspect-ratio:1.91;background:var(--bg-soft) url('${esc(o.image)}') center/cover"></div>` : ''}<div style="padding:10px 14px"><div class="small muted">${esc(host.toUpperCase())}</div><strong>${esc(o.title)}</strong><div class="small muted">${esc(o.desc.slice(0, 110))}</div></div>`;
    };
    $('.cp').onclick = () => UI.copy($('.code').value); draw();
  });

  Tools.define('utm-builder', root => {
    root.innerHTML = '<div class="stack"><div class="chips pre"></div><div class="row opts"></div><div class="field"><label>Your campaign URL</label><div class="copy-row"><input class="input mono out" readonly><button class="btn cp">📋 Copy</button></div></div><div class="msg small"></div></div>';
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'url', label: 'Website URL *', type: 'text', value: 'https://example.com/landing-page', full: true }, { id: 'source', label: 'Campaign source * (utm_source)', type: 'text', value: 'facebook' }, { id: 'medium', label: 'Campaign medium * (utm_medium)', type: 'text', value: 'social' }, { id: 'campaign', label: 'Campaign name * (utm_campaign)', type: 'text', value: 'summer_sale' }, { id: 'term', label: 'Campaign term (utm_term)', type: 'text', value: '' }, { id: 'content', label: 'Campaign content (utm_content)', type: 'text', value: '' }, { id: 'id', label: 'Campaign ID (utm_id)', type: 'text', value: '' }, { id: 'lower', label: 'Convert values to lowercase', type: 'checkbox', value: true }], () => draw());
    [['Facebook', 'facebook', 'social'], ['Instagram', 'instagram', 'social'], ['WhatsApp', 'whatsapp', 'social'], ['LinkedIn', 'linkedin', 'social'], ['Email', 'newsletter', 'email'], ['Google Ads', 'google', 'cpc'], ['YouTube', 'youtube', 'video']].forEach(([n, s, m]) => { const b = UI.h(`<button class="chip">${n}</button>`); b.onclick = () => { form.set('source', s); form.set('medium', m); draw(); }; $('.pre').append(b); });
    const draw = () => {
      const o = form.get(); let u;
      try { u = new URL(/^https?:\/\//i.test(o.url) ? o.url : 'https://' + o.url); } catch (e) { $('.out').value = ''; $('.msg').textContent = 'Enter a valid website URL.'; return; }
      ['source', 'medium', 'campaign', 'term', 'content', 'id'].forEach(k => { let v = o[k].trim(); if (o.lower) v = v.toLowerCase(); v = v.replace(/\s+/g, '_'); if (v) u.searchParams.set('utm_' + k, v); else u.searchParams.delete('utm_' + k); });
      $('.out').value = u.toString(); $('.msg').textContent = !o.source || !o.medium || !o.campaign ? '⚠️ Source, medium and campaign are recommended for Google Analytics.' : '';
    };
    $('.cp').onclick = () => UI.copy($('.out').value); draw();
  });

  const AI_BOTS = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'CCBot', 'PerplexityBot', 'Bytespider', 'Applebot-Extended', 'meta-externalagent'];
  Tools.define('robots-txt-generator', root => {
    root.innerHTML = '<div class="grid-2" style="align-items:start"><div class="row opts"></div><div class="stack"><div class="field"><label>robots.txt</label><textarea class="textarea mono out" style="min-height:360px" readonly></textarea></div><div class="btn-row"><button class="btn dl">⬇ Download robots.txt</button><button class="btn ghost cp">📋 Copy</button></div><p class="small muted">Upload the file to the root of your website, e.g. https://example.com/robots.txt</p></div></div>';
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'def', label: 'Default for all robots', type: 'seg', value: 'allow', options: [['allow', 'Allow all'], ['block', 'Block all']], full: true }, { id: 'dis', label: 'Disallowed paths (one per line)', type: 'textarea', rows: 5, value: '/admin/\n/cgi-bin/\n/search\n/*?sessionid=', full: true }, { id: 'allow', label: 'Always allowed paths (optional)', type: 'textarea', rows: 2, value: '', full: true }, { id: 'delay', label: 'Crawl delay', type: 'select', value: '', options: [['', 'None'], ['5', '5 seconds'], ['10', '10 seconds'], ['30', '30 seconds']] }, { id: 'ai', label: 'Block AI training crawlers (GPTBot, ClaudeBot, CCBot…)', type: 'checkbox', value: false, full: true }, { id: 'sitemap', label: 'Sitemap URL', type: 'text', value: 'https://example.com/sitemap.xml', full: true }], () => draw());
    const draw = () => {
      const o = form.get(), lines = ['User-agent: *'];
      if (o.def === 'block') lines.push('Disallow: /'); else { const d = o.dis.split('\n').map(x => x.trim()).filter(Boolean); d.length ? d.forEach(p => lines.push('Disallow: ' + p)) : lines.push('Disallow:'); }
      o.allow.split('\n').map(x => x.trim()).filter(Boolean).forEach(p => lines.push('Allow: ' + p));
      if (o.delay) lines.push('Crawl-delay: ' + o.delay);
      if (o.ai) AI_BOTS.forEach(b => lines.push('', 'User-agent: ' + b, 'Disallow: /'));
      if (o.sitemap.trim()) lines.push('', 'Sitemap: ' + o.sitemap.trim());
      $('.out').value = lines.join('\n') + '\n';
    };
    $('.dl').onclick = () => UI.downloadText($('.out').value, 'robots.txt'); $('.cp').onclick = () => UI.copy($('.out').value); draw();
  });

  const SLUG_STOP = new Set('a an the and or but of to in on at by for with from is are was were be it this that'.split(' '));
  Tools.define('slug-generator', root => {
    UI.textTool(root, {
      sample: '10 Best Free Online Tools for Students in 2026!\nCafé Crème & Résumé Tips — A Complete Guide',
      inputLabel: 'Titles (one per line)', outputLabel: 'URL slugs',
      options: [{ id: 'sep', label: 'Separator', type: 'select', value: '-', options: [['-', 'Hyphen (-)'], ['_', 'Underscore (_)']] }, { id: 'stop', label: 'Remove stop words (a, the, of…)', type: 'checkbox', value: false }, { id: 'max', label: 'Max length', type: 'number', value: 80, min: 10 }],
      run(t, o) {
        return t.split('\n').map(l => {
          let w = l.normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim().split(/\s+/).filter(Boolean);
          if (o.stop) { const f = w.filter(x => !SLUG_STOP.has(x)); if (f.length) w = f; }
          let s = w.join(o.sep); if (o.max > 0 && s.length > o.max) s = s.slice(0, o.max).replace(new RegExp(`\\${o.sep}[^\\${o.sep}]*$`), '');
          return s;
        }).join('\n');
      },
    });
  });

  Tools.define('screen-resolution', root => {
    const draw = () => {
      const s = screen, d = devicePixelRatio || 1;
      root.innerHTML = UI.resultsHTML([{ k: 'Your screen resolution', v: `${s.width} × ${s.height}`, main: true, s: d !== 1 ? `Physical pixels: ${Math.round(s.width * d)} × ${Math.round(s.height * d)} (scaling ${Math.round(d * 100)}%)` : 'CSS pixels' }, { k: 'Browser window (viewport)', v: `${innerWidth} × ${innerHeight}` }, { k: 'Available screen', v: `${s.availWidth} × ${s.availHeight}` }, { k: 'Device pixel ratio', v: d }, { k: 'Color depth', v: s.colorDepth + '-bit' }, { k: 'Orientation', v: (s.orientation && s.orientation.type || (s.width > s.height ? 'landscape' : 'portrait')).replace('-primary', '') }, { k: 'Aspect ratio', v: (() => { const g = (a, b) => b ? g(b, a % b) : a, k = g(s.width, s.height); return `${s.width / k}:${s.height / k}`; })() }]) + '<p class="small muted mt">Resize your browser window to see the viewport update live.</p>';
    };
    draw(); addEventListener('resize', UI.debounce(draw, 100));
  });

  Tools.define('browser-info', root => {
    (async () => {
      const ua = navigator.userAgent, uad = navigator.userAgentData;
      let hi = {}; try { if (uad && uad.getHighEntropyValues) hi = await uad.getHighEntropyValues(['platformVersion', 'fullVersionList', 'model', 'architecture']); } catch (e) { }
      const b = (() => { const list = hi.fullVersionList || (uad && uad.brands) || []; const br = list.find(x => /Edge|Opera|Brave|Chrome|Chromium/.test(x.brand) && !/Not/.test(x.brand) && x.brand !== 'Chromium') || list.find(x => x.brand === 'Chromium'); if (br) return `${br.brand.replace('Google ', '')} ${br.version}`; const m = ua.match(/(Firefox|Edg|OPR|SamsungBrowser|Chrome|Version)\/([\d.]+)/); if (!m) return 'Unknown'; return ({ Edg: 'Microsoft Edge', OPR: 'Opera', Version: /Safari/.test(ua) ? 'Safari' : 'Browser', SamsungBrowser: 'Samsung Internet' }[m[1]] || m[1]) + ' ' + m[2]; })();
      const os = /Windows NT 10/.test(ua) ? (uad && uad.platform === 'Windows' && parseInt(hi.platformVersion) >= 13 ? 'Windows 11' : 'Windows 10/11') : /Windows/.test(ua) ? 'Windows' : /Android ([\d.]+)/.test(ua) ? 'Android ' + ua.match(/Android ([\d.]+)/)[1] : /iPhone|iPad/.test(ua) ? 'iOS ' + ((ua.match(/OS ([\d_]+)/) || [])[1] || '').replace(/_/g, '.') : /Mac OS X/.test(ua) ? 'macOS' : /CrOS/.test(ua) ? 'ChromeOS' : /Linux/.test(ua) ? 'Linux' : 'Unknown';
      const mobile = uad ? uad.mobile : /Mobi|Android|iPhone/.test(ua);
      let gpu = '—'; try { const gl = document.createElement('canvas').getContext('webgl'); const ext = gl.getExtension('WEBGL_debug_renderer_info'); gpu = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'Hidden'; } catch (e) { }
      const yes = v => v ? '✅ Yes' : '❌ No';
      root.innerHTML = UI.resultsHTML([{ k: 'Your browser', v: esc(b), main: true, s: `${esc(os)} · ${mobile ? 'Mobile' : 'Desktop'}${hi.model ? ' · ' + esc(hi.model) : ''}` }, { k: 'Operating system', v: esc(os) }, { k: 'Language', v: esc((navigator.languages || [navigator.language]).join(', ')) }, { k: 'Time zone', v: esc(Intl.DateTimeFormat().resolvedOptions().timeZone) }, { k: 'CPU cores', v: navigator.hardwareConcurrency || '—' }, { k: 'Memory', v: navigator.deviceMemory ? `≥ ${navigator.deviceMemory} GB` : '—' }, { k: 'Graphics', v: esc(gpu) }, { k: 'Screen', v: `${screen.width}×${screen.height} @${devicePixelRatio}x` }, { k: 'Cookies enabled', v: yes(navigator.cookieEnabled) }, { k: 'Touch screen', v: yes(navigator.maxTouchPoints > 0) }, { k: 'Online', v: yes(navigator.onLine) }, { k: 'Do Not Track', v: navigator.doNotTrack === '1' ? 'On' : 'Off' }])
        + `<div class="field mt"><label>User agent</label><div class="copy-row"><textarea class="textarea mono" style="min-height:70px" readonly>${esc(ua)}</textarea><button class="btn sm secondary cp">Copy</button></div></div>`;
      root.querySelector('.cp').onclick = () => UI.copy(ua);
    })();
  });

  // Keyboard layouts are built from rows of keys measured in "units" (1u = one letter key), then drawn with
  // percentage positions so the whole board scales to any width. [code, label, width, height, dy]; a bare number is a gap.
  const KR = {
    num: [['Backquote', '`'], ...'1234567890'.split('').map(d => ['Digit' + d, d]), ['Minus', '-'], ['Equal', '=']],
    q: [...'QWERTYUIOP'.split('').map(c => ['Key' + c, c]), ['BracketLeft', '['], ['BracketRight', ']']],
    a: [...'ASDFGHJKL'.split('').map(c => ['Key' + c, c]), ['Semicolon', ';'], ['Quote', "'"]],
    z: [...'ZXCVBNM'.split('').map(c => ['Key' + c, c]), ['Comma', ','], ['Period', '.'], ['Slash', '/']],
  };
  const fkeys = (a, b, w = 1) => Array.from({ length: b - a + 1 }, (_, i) => ['F' + (a + i), 'F' + (a + i), w]);
  function place(out, y, x, items, h = 1) {
    for (const it of items) {
      if (typeof it === 'number') { x += it; continue; }
      const [code, label, w = 1, kh = h, dy = 0] = it;
      out.push({ code, label: label || code, x, y: y + dy, w, h: kh });
      x += w;
    }
    return x;
  }
  // Inverted-T arrow cluster with half-height keys, as on most laptops. Optional keys above ← and → (ThinkPad PgUp/PgDn).
  const halfArrows = (out, x, y, above) => {
    if (above) { out.push({ code: above[0], label: above[1], x, y, w: 1, h: 0.5 }, { code: above[2], label: above[3], x: x + 2, y, w: 1, h: 0.5 }); }
    out.push({ code: 'ArrowUp', label: '↑', x: x + 1, y, w: 1, h: 0.5 }, { code: 'ArrowLeft', label: '←', x, y: y + 0.5, w: 1, h: 0.5 }, { code: 'ArrowDown', label: '↓', x: x + 1, y: y + 0.5, w: 1, h: 0.5 }, { code: 'ArrowRight', label: '→', x: x + 2, y: y + 0.5, w: 1, h: 0.5 });
  };
  // The four alphanumeric rows shared by every layout. Returns the y of the bottom row.
  function letterRows(out, y, { iso, mac, right = [] }) {
    const L = mac ? { bs: 'delete', tab: 'tab', caps: 'caps lock', enter: 'return', shift: 'shift' } : { bs: 'Backspace', tab: 'Tab', caps: 'Caps Lock', enter: 'Enter', shift: 'Shift' };
    const w = right.length ? 14 : 15; // compact boards shorten right Shift to fit ↑
    place(out, y, 0, [...KR.num, ['Backspace', L.bs, 2], ...(right[0] || [])]);
    if (iso) {
      place(out, y + 1, 0, [['Tab', L.tab, 1.5], ...KR.q]);
      out.push({ code: 'Enter', label: L.enter, x: 13.75, y: y + 1, w: 1.25, h: 2 });
      place(out, y + 1, 15, right[1] || []);
      place(out, y + 2, 0, [['CapsLock', L.caps, 1.75], ...KR.a, ['Backslash', '#']]);
      place(out, y + 2, 15, right[2] || []);
      place(out, y + 3, 0, [['ShiftLeft', L.shift, 1.25], ['IntlBackslash', '\\'], ...KR.z, ['ShiftRight', L.shift, w === 15 ? 2.75 : 1.75], ...(right[3] || [])]);
    } else {
      place(out, y + 1, 0, [['Tab', L.tab, 1.5], ...KR.q, ['Backslash', '\\', 1.5], ...(right[1] || [])]);
      place(out, y + 2, 0, [['CapsLock', L.caps, 1.75], ...KR.a, ['Enter', L.enter, 2.25], ...(right[2] || [])]);
      place(out, y + 3, 0, [['ShiftLeft', L.shift, 2.25], ...KR.z, ['ShiftRight', L.shift, w === 15 ? 2.75 : 1.75], ...(right[3] || [])]);
    }
    return y + 4;
  }
  const DESK_BOTTOM = [['ControlLeft', 'Ctrl', 1.25], ['MetaLeft', 'Win', 1.25], ['AltLeft', 'Alt', 1.25], ['Space', 'Space', 6.25], ['AltRight', 'Alt', 1.25], ['MetaRight', 'Win', 1.25], ['ContextMenu', 'Menu', 1.25], ['ControlRight', 'Ctrl', 1.25]];
  const FN = [null, 'Fn'];
  const numpad = (out, x, y) => {
    place(out, y, x, [['NumLock', 'Num'], ['NumpadDivide', '/'], ['NumpadMultiply', '*'], ['NumpadSubtract', '−']]);
    place(out, y + 1, x, [['Numpad7', '7'], ['Numpad8', '8'], ['Numpad9', '9'], ['NumpadAdd', '+', 1, 2]]);
    place(out, y + 2, x, [['Numpad4', '4'], ['Numpad5', '5'], ['Numpad6', '6']]);
    place(out, y + 3, x, [['Numpad1', '1'], ['Numpad2', '2'], ['Numpad3', '3'], ['NumpadEnter', 'Enter', 1, 2]]);
    place(out, y + 4, x, [['Numpad0', '0', 2], ['NumpadDecimal', '.']]);
  };
  const KB_LAYOUTS = {
    full: { name: 'Full-size (100%) with numpad', group: 'Desktop' },
    tkl: { name: 'Tenkeyless (TKL, 87%)', group: 'Desktop' },
    '75': { name: '75% compact', group: 'Desktop' },
    '65': { name: '65% compact', group: 'Desktop' },
    '60': { name: '60% mini', group: 'Desktop' },
    laptop: { name: 'Windows laptop (Dell, HP, ASUS, Acer…)', group: 'Laptop', numpadOpt: true },
    lenovo: { name: 'Lenovo ThinkPad / IdeaPad', group: 'Laptop', numpadOpt: true },
    mac: { name: 'Apple MacBook', group: 'Laptop' },
  };
  function buildKeyboard(id, { iso = false, pad = false } = {}) {
    const k = [];
    if (id === 'full' || id === 'tkl' || id === '60') {
      if (id !== '60') {
        place(k, 0, 0, [['Escape', 'Esc'], 1, ...fkeys(1, 4), 0.5, ...fkeys(5, 8), 0.5, ...fkeys(9, 12)]);
        place(k, 0, 15.25, [['PrintScreen', 'PrtSc'], ['ScrollLock', 'ScrLk'], ['Pause', 'Pause']]);
      }
      const y = id === '60' ? 0 : 1.5;
      const yb = letterRows(k, y, { iso });
      place(k, yb, 0, DESK_BOTTOM);
      if (id !== '60') {
        place(k, y, 15.25, [['Insert', 'Ins'], ['Home', 'Home'], ['PageUp', 'PgUp']]);
        place(k, y + 1, 15.25, [['Delete', 'Del'], ['End', 'End'], ['PageDown', 'PgDn']]);
        place(k, y + 3, 16.25, [['ArrowUp', '↑']]);
        place(k, yb, 15.25, [['ArrowLeft', '←'], ['ArrowDown', '↓'], ['ArrowRight', '→']]);
      }
      if (id === 'full') numpad(k, 18.5, y);
    } else if (id === '75' || id === '65') {
      let y = 0;
      if (id === '75') { place(k, 0, 0, [['Escape', 'Esc'], 0.25, ...fkeys(1, 4), 0.25, ...fkeys(5, 8), 0.25, ...fkeys(9, 12), 0.25, ['PrintScreen', 'PrtSc'], ['Delete', 'Del']]); y = 1.25; }
      const yb = letterRows(k, y, { iso, right: [[[id === '75' ? 'Home' : 'Delete', id === '75' ? 'Home' : 'Del']], [['PageUp', 'PgUp']], [['PageDown', 'PgDn']], [['ArrowUp', '↑'], ['End', 'End']]] });
      place(k, yb, 0, [['ControlLeft', 'Ctrl', 1.25], ['MetaLeft', 'Win', 1.25], ['AltLeft', 'Alt', 1.25], ['Space', 'Space', 6.25], ['AltRight', 'Alt'], FN, ['ControlRight', 'Ctrl'], ['ArrowLeft', '←'], ['ArrowDown', '↓'], ['ArrowRight', '→']]);
    } else if (id === 'mac') {
      place(k, 0, 0, [['Escape', 'esc', 1.5], ...fkeys(1, 12, 1.0417), [null, 'Touch ID']], 0.6);
      const yb = letterRows(k, 0.75, { iso, mac: true });
      place(k, yb, 0, [FN, ['ControlLeft', 'control'], ['AltLeft', 'option'], ['MetaLeft', 'command', 1.25], ['Space', '', 5.5], ['MetaRight', 'command', 1.25], ['AltRight', 'option']]);
      halfArrows(k, 12, yb);
    } else { // Windows laptops; Lenovo moves Fn to the far left, PrtSc next to the arrows and PgUp/PgDn above ← →
      const len = id === 'lenovo';
      place(k, 0, 0, [['Escape', 'Esc', 15 / 16], ...fkeys(1, 12, 15 / 16), ...(len ? [['Home', 'Home', 15 / 16], ['End', 'End', 15 / 16], ['Delete', 'Del', 15 / 16]] : [['PrintScreen', 'PrtSc', 15 / 16], ['Insert', 'Ins', 15 / 16], ['Delete', 'Del', 15 / 16]])], 0.6);
      const yb = letterRows(k, 0.75, { iso });
      place(k, yb, 0, len
        ? [FN, ['ControlLeft', 'Ctrl', 1.25], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', 'Space', 4.75], ['AltRight', 'Alt'], ['PrintScreen', 'PrtSc'], ['ControlRight', 'Ctrl']]
        : [['ControlLeft', 'Ctrl', 1.25], FN, ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', 'Space', 4.75], ['AltRight', 'Alt'], ['ContextMenu', 'Menu'], ['ControlRight', 'Ctrl']]);
      halfArrows(k, 12, yb, len ? ['PageUp', 'PgUp', 'PageDown', 'PgDn'] : null);
      if (pad) numpad(k, 15.25, 0.75);
    }
    return k;
  }

  Tools.define('keyboard-tester', (root, preset) => {
    const opts = Object.entries(KB_LAYOUTS);
    const groups = [...new Set(opts.map(([, l]) => l.group))];
    let layout = preset.layout || UI.store.get('kb-layout', 'full'), iso = !!UI.store.get('kb-iso', false), pad = preset.pad != null ? preset.pad : !!UI.store.get('kb-pad', false);
    if (!KB_LAYOUTS[layout]) layout = 'full';
    root.innerHTML = `<style>
      .kbt-wrap{overflow-x:auto;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:14px}
      .kbt{position:relative;min-width:620px;container-type:inline-size}
      .kbt .k{position:absolute;padding:.22%;box-sizing:border-box}
      .kbt .k>span{display:flex;align-items:center;justify-content:center;width:100%;height:100%;box-sizing:border-box;border:1px solid var(--border);border-bottom-width:3px;border-radius:7px;background:var(--card);font-weight:600;font-size:.62rem;font-size:min(1.25cqw,.85rem);line-height:1.05;text-align:center;user-select:none;transition:background .08s,color .08s;overflow:hidden;white-space:nowrap}
      .kbt .k.ok>span{background:var(--success-soft);border-color:var(--success)}
      .kbt .k.down>span{background:var(--primary);color:#fff;border-color:var(--primary)}
      .kbt .k.nd>span{opacity:.45;border-style:dashed}
      .kbt .k.miss>span{border-color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger)}
      .kbt .k.chat>span{background:var(--danger-soft);border-color:var(--danger)}
    </style>
    <div class="stack">
      <div class="row" style="align-items:flex-end">
        <div class="field"><label>Keyboard layout</label><select class="select lay">${groups.map(g => `<optgroup label="${g}">${opts.filter(([, l]) => l.group === g).map(([id, l]) => `<option value="${id}"${id === layout ? ' selected' : ''}>${esc(l.name)}</option>`).join('')}</optgroup>`).join('')}</select></div>
        <div class="field" style="justify-content:flex-end"><label class="check"><input type="checkbox" class="iso"${iso ? ' checked' : ''}> UK / EU (ISO) layout</label></div>
        <div class="field padf" style="justify-content:flex-end"><label class="check"><input type="checkbox" class="pad"${pad ? ' checked' : ''}> Numeric keypad (15–17" laptops)</label></div>
        <div class="field" style="justify-content:flex-end"><button class="btn ghost rst">↻ Reset</button></div>
      </div>
      ${preset.focus === 'rollover' ? '<div class="notice">👻 <strong>Ghosting test:</strong> hold down several keys at the same time — try <kbd>W</kbd>+<kbd>A</kbd>+<kbd>Shift</kbd>+<kbd>Space</kbd>, or roll your fingers across a whole row. Every key you hold should turn blue. If one stays grey while others are held, your keyboard is ghosting (it has limited key rollover).</div>' : ''}
      <div class="results live"></div>
      <div class="kbt-wrap"><div class="kbt"></div></div>
      <div class="small muted">Press every key: tested keys turn <span style="color:var(--success);font-weight:700">green</span>, keys being held turn <span style="color:var(--primary);font-weight:700">blue</span>. Dashed keys (Fn, Touch ID) work inside the keyboard itself and can't be seen by any website — test them through their shortcuts (e.g. Fn + brightness). <span class="other"></span></div>
      <div class="btn-row"><button class="btn sm secondary showmiss">Highlight untested keys</button><span class="small muted chatinfo"></span></div>
    </div>`;
    const $ = UI.q(root);
    let keys = [], byCode = new Map(), tested = new Set(), held = new Set(), maxHeld = 0, other = new Set(), chatter = new Map(), lastUp = new Map(), last = null;
    const draw = () => {
      keys = buildKeyboard(layout, { iso, pad: pad && KB_LAYOUTS[layout].numpadOpt });
      const W = Math.max(...keys.map(k => k.x + k.w)), H = Math.max(...keys.map(k => k.y + k.h));
      const kb = $('.kbt'); kb.style.aspectRatio = `${W} / ${H}`;
      kb.innerHTML = keys.map((k, i) => `<div class="k${k.code ? '' : ' nd'}" data-i="${i}" title="${k.code ? esc(k.code) : 'Not detectable by browsers'}" style="left:${k.x / W * 100}%;top:${k.y / H * 100}%;width:${k.w / W * 100}%;height:${k.h / H * 100}%"><span>${esc(k.label)}</span></div>`).join('');
      byCode = new Map();
      keys.forEach((k, i) => { if (k.code) { if (!byCode.has(k.code)) byCode.set(k.code, []); byCode.get(k.code).push(kb.children[i]); } });
      $('.padf').hidden = !KB_LAYOUTS[layout].numpadOpt;
      paint(); stats();
    };
    const paint = () => byCode.forEach((els, code) => els.forEach(el => { el.classList.toggle('ok', tested.has(code)); el.classList.toggle('down', held.has(code)); el.classList.toggle('chat', chatter.has(code)); }));
    const stats = () => {
      const total = byCode.size, done = [...byCode.keys()].filter(c => tested.has(c)).length;
      $('.live').innerHTML = UI.resultsHTML([
        { k: 'Keys tested', v: `${done} / ${total}`, main: done === total && total > 0, s: done === total && total ? 'Every key works ✅' : `${total - done} left` },
        { k: 'Last key', v: last ? esc(last.key === ' ' ? 'Space' : last.key) : '—', s: last ? `code ${esc(last.code)} · keyCode ${last.keyCode}` : 'Press any key' },
        { k: 'Held at once', v: `${held.size}`, s: `Max so far: ${maxHeld} keys${maxHeld >= 6 ? ' — good rollover' : ''}` },
        { k: 'Double-press warnings', v: `${chatter.size}`, s: chatter.size ? 'Some keys fired twice' : 'None detected' },
      ]);
      $('.other').innerHTML = other.size ? `Other keys detected: ${[...other].map(c => `<kbd>${esc(c)}</kbd>`).join(' ')}` : '';
      $('.chatinfo').innerHTML = chatter.size ? `⚠️ Possible key chatter (one press registered twice within 25 ms): ${[...chatter.keys()].map(c => `<kbd>${esc(c)}</kbd>`).join(' ')}` : '';
    };
    const onDown = e => {
      if (!root.isConnected) return cleanup();
      if (!(e.ctrlKey && /^(KeyR|KeyW|KeyT|KeyN)$/.test(e.code))) e.preventDefault();
      if (!e.code) return;
      if (!e.repeat) { const t = lastUp.get(e.code); if (t && performance.now() - t < 25) chatter.set(e.code, (chatter.get(e.code) || 0) + 1); }
      last = e; tested.add(e.code); held.add(e.code); maxHeld = Math.max(maxHeld, held.size);
      if (!byCode.has(e.code)) other.add(e.code);
      paint(); stats();
    };
    const onUp = e => {
      if (!root.isConnected) return cleanup();
      if (!e.code) return;
      if (!tested.has(e.code)) { tested.add(e.code); last = e; if (!byCode.has(e.code)) other.add(e.code); } // PrintScreen only fires keyup on Windows
      held.delete(e.code); lastUp.set(e.code, performance.now());
      if (/^Meta/.test(e.code)) held.clear(); // macOS drops keyup events for keys pressed while ⌘ is down
      paint(); stats();
    };
    const onBlur = () => { held.clear(); paint(); stats(); };
    const cleanup = () => { document.removeEventListener('keydown', onDown); document.removeEventListener('keyup', onUp); window.removeEventListener('blur', onBlur); };
    document.addEventListener('keydown', onDown); document.addEventListener('keyup', onUp); window.addEventListener('blur', onBlur);
    $('.lay').onchange = e => { layout = e.target.value; if (!preset.layout) UI.store.set('kb-layout', layout); draw(); e.target.blur(); };
    $('.iso').onchange = e => { iso = e.target.checked; UI.store.set('kb-iso', iso); draw(); e.target.blur(); };
    $('.pad').onchange = e => { pad = e.target.checked; UI.store.set('kb-pad', pad); draw(); e.target.blur(); };
    $('.rst').onclick = e => { tested.clear(); held.clear(); other.clear(); chatter.clear(); lastUp.clear(); maxHeld = 0; last = null; root.querySelectorAll('.kbt .miss').forEach(x => x.classList.remove('miss')); paint(); stats(); e.currentTarget.blur(); };
    $('.showmiss').onclick = e => { byCode.forEach((els, code) => els.forEach(el => el.classList.toggle('miss', !tested.has(code)))); e.currentTarget.blur(); };
    draw();
  });

  Tools.define('dead-pixel-test', root => {
    const COLORS = [['#000000', 'Black'], ['#ffffff', 'White'], ['#ff0000', 'Red'], ['#00ff00', 'Green'], ['#0000ff', 'Blue'], ['#808080', 'Gray'], ['#00ffff', 'Cyan'], ['#ff00ff', 'Magenta'], ['#ffff00', 'Yellow']];
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="row" style="justify-content:center">${COLORS.map(([c, n]) => `<div title="${n}" style="width:44px;height:44px;border-radius:10px;background:${c};border:1px solid var(--border)"></div>`).join('')}</div>
      <button class="btn lg go">▶ Start full-screen test</button><p class="small muted text-center">Click or press → to change color, ← to go back, Esc to exit. Look closely for dots that stay black (dead) or stay one bright color (stuck). Clean your screen first so dust isn't mistaken for a pixel.</p></div>`;
    root.querySelector('.go').onclick = () => {
      const ov = UI.h('<div style="position:fixed;inset:0;z-index:9999;cursor:none;display:grid;place-items:center"><div class="tip" style="background:rgba(0,0,0,.6);color:#fff;padding:12px 18px;border-radius:12px;font:600 1rem system-ui;transition:opacity .6s">Click / → next color · ← back · Esc exit</div></div>');
      let i = 0; const paint = () => { ov.style.background = COLORS[i][0]; };
      const close = () => { document.removeEventListener('keydown', key); if (document.fullscreenElement) document.exitFullscreen(); ov.remove(); };
      const key = e => { if (e.key === 'Escape') close(); else if (e.key === 'ArrowLeft') { i = (i + COLORS.length - 1) % COLORS.length; paint(); } else if (e.key === 'ArrowRight' || e.key === ' ') { i = (i + 1) % COLORS.length; paint(); } };
      ov.onclick = () => { i = (i + 1) % COLORS.length; paint(); };
      document.addEventListener('keydown', key); document.body.append(ov); paint();
      ov.requestFullscreen && ov.requestFullscreen().catch(() => {});
      document.addEventListener('fullscreenchange', function f() { if (!document.fullscreenElement && ov.isConnected) { close(); document.removeEventListener('fullscreenchange', f); } });
      setTimeout(() => { const t = ov.querySelector('.tip'); if (t) t.style.opacity = 0; }, 2500);
    };
  });

  Tools.define('cps-test', root => {
    let dur = 5, clicks = 0, t0 = 0, iv = null, done = false;
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="dur"></div><div class="results w-100 live"></div>
      <button class="pad" style="width:100%;height:280px;border-radius:18px;border:2px dashed var(--primary);background:var(--primary-soft);color:var(--text);font:700 1.5rem var(--font);cursor:pointer;user-select:none;touch-action:manipulation">Click here to start</button><div class="final w-100"></div></div>`;
    const $ = UI.q(root), best = () => UI.store.get('cps-best-' + dur, 0);
    const live = () => { const el = t0 ? Math.min(dur, (performance.now() - t0) / 1000) : 0; $('.live').innerHTML = UI.resultsHTML([{ k: 'Clicks', v: clicks }, { k: 'Time left', v: (dur - el).toFixed(1) + 's' }, { k: 'CPS', v: el > 0.05 ? (clicks / el).toFixed(2) : '0.00' }, { k: `Best (${dur}s)`, v: best().toFixed(2) + ' CPS' }]); };
    const reset = () => { clearInterval(iv); clicks = 0; t0 = 0; done = false; $('.pad').textContent = 'Click here to start'; $('.final').innerHTML = ''; live(); };
    $('.dur').append(UI.seg([['1', '1 sec'], ['5', '5 sec'], ['10', '10 sec'], ['30', '30 sec'], ['60', '60 sec']], '5', v => { dur = +v; reset(); }));
    $('.pad').addEventListener('pointerdown', e => {
      e.preventDefault(); if (done) return;
      if (!t0) { t0 = performance.now(); iv = setInterval(() => { live(); if (performance.now() - t0 >= dur * 1000) finish(); }, 50); }
      clicks++; $('.pad').textContent = clicks; live();
    });
    const finish = () => {
      clearInterval(iv); done = true; const cps = clicks / dur, b = best(); if (cps > b) UI.store.set('cps-best-' + dur, cps);
      const rank = cps >= 10 ? 'Lightning fast ⚡' : cps >= 8 ? 'Very fast 🐆' : cps >= 6 ? 'Fast 🐇' : cps >= 4 ? 'Average 🐢' : 'Warming up 🐌';
      $('.pad').textContent = 'Done!';
      $('.final').innerHTML = UI.resultsHTML([{ k: 'Your click speed', v: cps.toFixed(2) + ' CPS', main: true, s: `${clicks} clicks in ${dur} seconds · ${rank}${cps > b ? ' · New best!' : ''}` }]) + '<div class="btn-row mt" style="justify-content:center"><button class="btn again">↻ Try again</button></div>';
      $('.final .again').onclick = reset; live();
    };
    live();
  });

  const SCREENS = [['#ffffff', 'White'], ['#000000', 'Black'], ['#ffe2bd', 'Warm white'], ['#ff0000', 'Red'], ['#00ff00', 'Green'], ['#0000ff', 'Blue'], ['#ffff00', 'Yellow'], ['#ff8800', 'Orange'], ['#ff69b4', 'Pink'], ['#8000ff', 'Purple'], ['#808080', 'Gray'], ['#00ffff', 'Cyan']];
  Tools.define('white-screen', (root, preset) => {
    let color = preset.color || '#ffffff';
    root.innerHTML = `<div class="stack">
      <button class="screen-prev" aria-label="Show full screen" style="width:100%;height:clamp(200px,40vh,360px);border-radius:16px;border:1px solid var(--border);cursor:pointer;display:grid;place-items:center;font:600 1.05rem var(--font);box-shadow:var(--shadow)"><span class="lbl" style="padding:10px 18px;border-radius:999px;background:rgba(0,0,0,.55);color:#fff">⛶ Click to go full screen</span></button>
      <div class="chips sw">${SCREENS.map(([c, n]) => `<button type="button" class="chip" data-c="${c}"><span style="width:16px;height:16px;border-radius:50%;background:${c};border:1px solid var(--border);display:inline-block"></span>${n}</button>`).join('')}</div>
      <div class="row"><div class="field"><label>Custom color</label><input type="color" class="custom" value="${color}"></div>
        <div class="field" style="justify-content:flex-end"><button class="btn lg go">⛶ Full screen</button></div></div>
      <p class="small muted">Tip: in full screen use ← → to change colors, and click or press Esc to exit. Turn your screen brightness up for the brightest light.</p></div>`;
    const $ = UI.q(root);
    const paint = () => { $('.screen-prev').style.background = color; $('.custom').value = color; root.querySelectorAll('.sw .chip').forEach(b => b.style.borderColor = b.dataset.c === color ? 'var(--primary)' : ''); };
    root.addEventListener('click', e => { const b = e.target.closest('.sw [data-c]'); if (b) { color = b.dataset.c; paint(); } });
    $('.custom').addEventListener('input', e => { color = e.target.value; paint(); });
    const full = () => {
      const ov = document.createElement('div'), hint = document.createElement('div');
      ov.className = 'screen-overlay';
      ov.style.cssText = `position:fixed;inset:0;z-index:10000;background:${color};cursor:none`;
      hint.textContent = 'Click or press Esc to exit · ← → change color';
      hint.style.cssText = 'position:absolute;left:50%;bottom:32px;transform:translateX(-50%);padding:10px 18px;border-radius:999px;background:rgba(0,0,0,.6);color:#fff;font:600 .95rem var(--font);transition:opacity .6s;pointer-events:none;cursor:default';
      ov.append(hint); document.body.append(ov);
      let idx = Math.max(0, SCREENS.findIndex(s => s[0] === color)), hideT;
      const show = () => { hint.style.opacity = 1; ov.style.cursor = 'default'; clearTimeout(hideT); hideT = setTimeout(() => { hint.style.opacity = 0; ov.style.cursor = 'none'; }, 2200); };
      const close = () => { clearTimeout(hideT); document.removeEventListener('keydown', key, true); document.removeEventListener('fullscreenchange', fsc); ov.remove(); if (document.fullscreenElement) document.exitFullscreen().catch(() => { }); paint(); };
      const key = e => {
        if (e.key === 'Escape') { e.preventDefault(); close(); }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === ' ') { e.preventDefault(); idx = (idx + (e.key === 'ArrowLeft' ? -1 : 1) + SCREENS.length) % SCREENS.length; color = SCREENS[idx][0]; ov.style.background = color; show(); }
      };
      const fsc = () => { if (!document.fullscreenElement) close(); };
      ov.addEventListener('click', close); ov.addEventListener('mousemove', show);
      document.addEventListener('keydown', key, true);
      if (ov.requestFullscreen) ov.requestFullscreen().then(() => document.addEventListener('fullscreenchange', fsc)).catch(() => { });
      show();
    };
    $('.screen-prev').onclick = full; $('.go').onclick = full;
    paint();
  });

  Tools.define('spacebar-counter', root => {
    let dur = 10, count = 0, t0 = 0, iv = null, done = false;
    root.innerHTML = `<div class="stack" style="align-items:center"><div class="dur"></div><div class="results w-100 live"></div>
      <button class="pad" style="width:100%;height:260px;border-radius:18px;border:2px dashed var(--primary);background:var(--primary-soft);color:var(--text);font:700 1.5rem var(--font);cursor:pointer;user-select:none;touch-action:manipulation">Press <kbd>SPACE</kbd> to start<br><small style="font-weight:500;font-size:.9rem;color:var(--muted)">or tap here on a phone</small></button>
      <div class="final w-100"></div><button class="btn ghost sm reset">↻ Reset</button></div>`;
    const $ = UI.q(root), key = () => 'space-best-' + dur, best = () => UI.store.get(key(), 0);
    const live = () => {
      const el = t0 ? (performance.now() - t0) / 1000 : 0, lim = dur ? Math.min(dur, el) : el;
      $('.live').innerHTML = UI.resultsHTML([{ k: 'Presses', v: count }, dur ? { k: 'Time left', v: (dur - lim).toFixed(1) + 's' } : { k: 'Time', v: el.toFixed(1) + 's' }, { k: 'Per second', v: lim > 0.05 ? (count / lim).toFixed(2) : '0.00' }, dur && { k: `Best (${dur}s)`, v: best() ? best().toFixed(2) + '/s' : '—' }]);
    };
    const reset = () => { clearInterval(iv); count = 0; t0 = 0; done = false; $('.pad').innerHTML = 'Press <kbd>SPACE</kbd> to start<br><small style="font-weight:500;font-size:.9rem;color:var(--muted)">or tap here on a phone</small>'; $('.final').innerHTML = ''; live(); };
    const finish = () => {
      clearInterval(iv); done = true; const rate = count / dur, b = best(); if (rate > b) UI.store.set(key(), rate);
      $('.pad').textContent = 'Done!'; live();
      $('.final').innerHTML = UI.resultsHTML([{ k: 'Your spacebar speed', v: rate.toFixed(2) + ' per second', main: true, s: `${count} presses in ${dur} seconds${rate > b ? ' · New best! 🏆' : ''}` }]);
    };
    const hit = () => {
      if (done) return;
      if (!t0) { t0 = performance.now(); iv = setInterval(() => { live(); if (dur && performance.now() - t0 >= dur * 1000) finish(); }, 50); }
      count++; $('.pad').textContent = count; live();
    };
    $('.dur').append(UI.seg([['5', '5 sec'], ['10', '10 sec'], ['30', '30 sec'], ['60', '60 sec'], ['0', 'No limit']], '10', v => { dur = +v; reset(); $('.pad').focus(); }));
    $('.reset').onclick = () => { reset(); $('.pad').focus(); };
    $('.pad').addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') { e.preventDefault(); hit(); } });
    const onKey = e => {
      if (!root.isConnected) { document.removeEventListener('keydown', onKey); clearInterval(iv); return; }
      if (e.code !== 'Space' && e.key !== ' ') return;
      const t = e.target;
      if (t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable || (t.tagName === 'BUTTON' && !root.contains(t)))) return;
      e.preventDefault();
      if (t && t.tagName === 'BUTTON' && t !== $('.pad')) $('.pad').focus();
      if (!e.repeat) hit();
    };
    document.addEventListener('keydown', onKey);
    live();
  });

  // Controller tester: reads the browser Gamepad API about 60 times a second.
  const PAD_NAMES = {
    xbox: ['A', 'B', 'X', 'Y', 'LB', 'RB', 'LT', 'RT', 'View', 'Menu', 'L-stick', 'R-stick', 'D-pad ↑', 'D-pad ↓', 'D-pad ←', 'D-pad →', 'Xbox', 'Share'],
    ps: ['✕ Cross', '○ Circle', '□ Square', '△ Triangle', 'L1', 'R1', 'L2', 'R2', 'Create', 'Options', 'L3', 'R3', 'D-pad ↑', 'D-pad ↓', 'D-pad ←', 'D-pad →', 'PS', 'Touchpad'],
    nin: ['B', 'A', 'Y', 'X', 'L', 'R', 'ZL', 'ZR', '−', '+', 'L-stick', 'R-stick', 'D-pad ↑', 'D-pad ↓', 'D-pad ←', 'D-pad →', 'Home', 'Capture'],
  };
  const padStyle = id => /054c|playstation|dualsense|dualshock|wireless controller/i.test(id) ? 'ps' : /057e|nintendo|pro controller|joy-con/i.test(id) ? 'nin' : 'xbox';
  const driftVerdict = m => m < 0.05 ? ['✅ Centred', 'var(--success)'] : m < 0.12 ? ['🟡 Slight offset', 'var(--warn, #d97706)'] : ['🔴 Drift likely', 'var(--danger)'];

  Tools.define('gamepad-tester', (root, preset) => {
    root.innerHTML = `<div class="stack">
      <div class="notice status">🎮 Connect your controller (USB or Bluetooth), then <strong>press any button</strong> — browsers only show a controller after a button press.</div>
      <div class="pads row" hidden></div>
      <div class="work stack" hidden>
        <div class="small muted ident"></div>
        <div class="grid-2">
          ${['Left', 'Right'].map((s, i) => `<div class="card-sub stack" style="align-items:center"><strong>${s} stick</strong>
            <canvas class="stick s${i}" width="220" height="220" style="width:180px;height:180px;border-radius:50%;background:var(--bg);border:1px solid var(--border)"></canvas>
            <div class="small mono sv${i}">X 0.000 · Y 0.000</div><div class="small sd${i}" style="font-weight:700"></div></div>`).join('')}
        </div>
        <div class="row" style="align-items:center"><button class="btn drift">⏱ 5-second drift test</button><button class="btn secondary rumble">📳 Test vibration</button><button class="btn ghost clr">Clear stick trails</button></div>
        <div class="driftout"></div>
        <div><strong>Triggers</strong><div class="trig grid-2 mt"></div></div>
        <div><strong>Buttons</strong><div class="btns mt" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:8px"></div></div>
        <details class="small"><summary>Raw axes values</summary><div class="axes mono mt"></div></details>
      </div></div>`;
    const $ = UI.q(root);
    let idx = null, raf = 0, trails = [[], []], driftRun = null;
    const pads = () => [...(navigator.getGamepads ? navigator.getGamepads() : [])].filter(Boolean);
    const draw = (c, x, y, trail) => {
      const g = c.getContext('2d'), r = c.width / 2 - 14, cx = c.width / 2, cy = c.height / 2;
      g.clearRect(0, 0, c.width, c.height);
      g.strokeStyle = 'rgba(128,128,128,.35)'; g.lineWidth = 1;
      [1, 0.12].forEach(f => { g.beginPath(); g.arc(cx, cy, r * f, 0, Math.PI * 2); g.stroke(); });
      g.beginPath(); g.moveTo(cx - r, cy); g.lineTo(cx + r, cy); g.moveTo(cx, cy - r); g.lineTo(cx, cy + r); g.stroke();
      g.fillStyle = 'rgba(79,70,229,.35)'; trail.forEach(([tx, ty]) => g.fillRect(cx + tx * r - 1, cy + ty * r - 1, 2, 2));
      g.fillStyle = '#4f46e5'; g.beginPath(); g.arc(cx + x * r, cy + y * r, 9, 0, Math.PI * 2); g.fill();
    };
    const renderPicker = list => {
      $('.pads').hidden = list.length < 2;
      $('.pads').innerHTML = list.map(p => `<button class="btn sm ${p.index === idx ? '' : 'ghost'}" data-i="${p.index}">🎮 ${esc(p.id.replace(/\(.*?\)/g, '').trim().slice(0, 40) || 'Controller ' + (p.index + 1))}</button>`).join('');
    };
    const frame = () => {
      if (!root.isConnected) return cancelAnimationFrame(raf);
      const list = pads();
      if (idx == null || !list.some(p => p.index === idx)) idx = list.length ? list[0].index : null;
      const gp = list.find(p => p.index === idx);
      if (!gp) { $('.work').hidden = true; $('.status').hidden = false; $('.pads').hidden = true; raf = requestAnimationFrame(frame); return; }
      if ($('.work').hidden) { $('.work').hidden = false; $('.status').hidden = true; renderPicker(list); }
      const style = padStyle(gp.id), names = PAD_NAMES[style];
      $('.ident').textContent = `${gp.id} · ${gp.buttons.length} buttons · ${gp.axes.length} axes · mapping: ${gp.mapping || 'non-standard'}`;
      for (let s = 0; s < 2; s++) {
        const x = gp.axes[s * 2] || 0, y = gp.axes[s * 2 + 1] || 0, m = Math.hypot(x, y), t = trails[s];
        t.push([x, y]); if (t.length > 600) t.shift();
        draw($('.s' + s), x, y, t);
        $('.sv' + s).textContent = `X ${x.toFixed(3)} · Y ${y.toFixed(3)} · offset ${m.toFixed(3)}`;
        if (driftRun) driftRun.max[s] = Math.max(driftRun.max[s], m);
      }
      const isStd = gp.mapping === 'standard';
      $('.trig').innerHTML = [6, 7].map(i => { const v = gp.buttons[i] ? gp.buttons[i].value : 0; return `<div><div class="small">${isStd ? names[i] : 'Button ' + i}: ${(v * 100).toFixed(0)}%</div><div class="progress"><div style="width:${v * 100}%"></div></div></div>`; }).join('');
      $('.btns').innerHTML = gp.buttons.map((b, i) => `<div style="padding:10px 6px;border-radius:10px;text-align:center;font-weight:600;font-size:.82rem;border:1px solid ${b.pressed ? 'var(--primary)' : 'var(--border)'};background:${b.pressed ? 'var(--primary)' : b.touched ? 'var(--primary-soft)' : 'var(--card)'};color:${b.pressed ? '#fff' : 'inherit'}">${esc(isStd && names[i] ? names[i] : 'Button ' + i)}${b.value > 0 && b.value < 1 ? ` ${(b.value * 100).toFixed(0)}%` : ''}</div>`).join('');
      $('.axes').textContent = gp.axes.map((a, i) => `axis ${i}: ${a.toFixed(4)}`).join('   ');
      raf = requestAnimationFrame(frame);
    };
    const restDrift = () => { const gp = pads().find(p => p.index === idx); if (!gp) return; for (let s = 0; s < 2; s++) { const m = Math.hypot(gp.axes[s * 2] || 0, gp.axes[s * 2 + 1] || 0), [v, c] = driftVerdict(m); $('.sd' + s).innerHTML = `<span style="color:${c}">${v}</span> <span class="muted" style="font-weight:400">(at rest: ${m.toFixed(3)})</span>`; } };
    const restT = setInterval(() => { if (!root.isConnected) return clearInterval(restT); restDrift(); }, 500);
    $('.pads').onclick = e => { const b = e.target.closest('[data-i]'); if (b) { idx = +b.dataset.i; trails = [[], []]; renderPicker(pads()); } };
    $('.clr').onclick = () => { trails = [[], []]; };
    $('.drift').onclick = e => {
      const btn = e.currentTarget; if (driftRun) return;
      driftRun = { max: [0, 0] }; let left = 5; btn.disabled = true;
      $('.driftout').innerHTML = '<div class="notice">🙌 Let go of both sticks and put the controller down… <strong class="cd">5</strong></div>';
      const t = setInterval(() => {
        left--; const cd = root.querySelector('.cd'); if (cd) cd.textContent = left;
        if (left > 0) return;
        clearInterval(t); btn.disabled = false;
        const r = driftRun.max; driftRun = null;
        $('.driftout').innerHTML = UI.resultsHTML(r.map((m, s) => { const [v] = driftVerdict(m); return { k: `${s ? 'Right' : 'Left'} stick — worst offset at rest`, v: m.toFixed(3), main: m >= 0.12, s: v + (m >= 0.12 ? ' — games may move on their own unless you raise the deadzone' : m >= 0.05 ? ' — within what most games\' deadzones ignore' : ' — no drift') }; }));
      }, 1000);
    };
    $('.rumble').onclick = async () => {
      const gp = pads().find(p => p.index === idx), act = gp && gp.vibrationActuator;
      if (!act || !act.playEffect) return UI.toast('This browser or controller does not support vibration from websites — try Chrome or Edge.', 4000);
      try { await act.playEffect('dual-rumble', { duration: 900, strongMagnitude: 1, weakMagnitude: 1 }); UI.toast('📳 Did it vibrate? Both motors were set to 100%.'); } catch (e) { UI.toast('Vibration failed: ' + e.message, 4000); }
    };
    const onConn = () => renderPicker(pads());
    window.addEventListener('gamepadconnected', onConn); window.addEventListener('gamepaddisconnected', onConn);
    if (!navigator.getGamepads) $('.status').innerHTML = '⚠️ This browser does not support game controllers. Please use Chrome, Edge, Firefox or Safari.';
    if (preset.focus === 'drift') $('.status').innerHTML += '<br>Then let go of the sticks and click <strong>5-second drift test</strong>.';
    raf = requestAnimationFrame(frame);
  });

  // Mouse tester: counts presses per button and flags two presses closer together than a human can click.
  Tools.define('mouse-double-click-test', root => {
    const BTN = ['Left', 'Middle (wheel)', 'Right', 'Back (side)', 'Forward (side)'];
    root.innerHTML = `<div class="stack">
      <div class="row" style="align-items:flex-end"><div class="field"><label>Double-click threshold</label><div class="thr"></div></div><div class="field" style="justify-content:flex-end"><button class="btn ghost rst">↻ Reset</button></div></div>
      <div class="pad" tabindex="0" style="height:240px;border-radius:18px;border:2px dashed var(--primary);background:var(--primary-soft);display:grid;place-items:center;text-align:center;user-select:none;cursor:pointer;touch-action:none"><div><div style="font-size:1.4rem;font-weight:700" class="ptxt">Click here with each mouse button</div><div class="small muted">Click slowly and normally — single clicks only. Scroll the wheel here too.</div></div></div>
      <div class="results verdict"></div>
      <div class="table-wrap"><table class="table"><thead><tr><th>Button</th><th>Clicks</th><th>Double-click faults</th><th>Shortest gap</th></tr></thead><tbody class="tb"></tbody></table></div>
      <div class="small muted wheel"></div>
      <div class="small mono log" style="white-space:pre-wrap"></div></div>`;
    const $ = UI.q(root);
    let thr = 80, st, wheel, log;
    const reset = () => { st = BTN.map(() => ({ n: 0, bad: 0, min: Infinity, last: 0, lastUp: 0 })); wheel = { up: 0, down: 0 }; log = []; render(); };
    $('.thr').append(UI.seg([['50', '50 ms'], ['80', '80 ms'], ['120', '120 ms']], '80', v => { thr = +v; render(); }));
    const render = () => {
      const tot = st.reduce((a, b) => a + b.n, 0), bad = st.reduce((a, b) => a + b.bad, 0);
      $('.tb').innerHTML = st.map((s, i) => `<tr${s.bad ? ' style="color:var(--danger);font-weight:700"' : ''}><td>${BTN[i]}</td><td>${s.n}</td><td>${s.bad}${s.bad ? ' ⚠️' : ''}</td><td>${isFinite(s.min) ? Math.round(s.min) + ' ms' : '—'}</td></tr>`).join('');
      $('.verdict').innerHTML = !tot ? '' : UI.resultsHTML([bad
        ? { k: 'Result', v: `${bad} suspected double-click${bad > 1 ? 's' : ''}`, main: true, s: `${st.map((s, i) => s.bad ? BTN[i] : '').filter(Boolean).join(', ')} registered two clicks within ${thr} ms. That is almost always a worn switch inside the mouse.` }
        : { k: 'Result', v: '✅ No double-clicking', main: true, s: `${tot} clicks tested. ${tot < 30 ? 'Keep clicking — faults often show up only after 30–100 clicks.' : 'Your buttons look healthy.'}` }]);
      $('.wheel').textContent = wheel.up + wheel.down ? `Scroll wheel: ${wheel.up} up · ${wheel.down} down${wheel.up && wheel.down ? '' : ' — scroll both ways to test it'}` : '';
      $('.log').textContent = log.slice(-8).join('\n');
    };
    const pad = $('.pad');
    pad.addEventListener('mousedown', e => {
      e.preventDefault(); const b = e.button, s = st[b]; if (!s) return;
      const now = performance.now(), gap = s.last ? now - s.last : null;
      s.n++; if (gap != null) { s.min = Math.min(s.min, gap); if (gap < thr) s.bad++; }
      s.last = now;
      log.push(`${BTN[b].padEnd(16)} ${gap == null ? 'first click' : Math.round(gap) + ' ms after previous'}${gap != null && gap < thr ? '   ⚠️ DOUBLE' : ''}`);
      $('.ptxt').textContent = `${BTN[b]} click #${s.n}`;
      pad.style.background = gap != null && gap < thr ? 'var(--danger-soft)' : 'var(--primary-soft)';
      render();
    });
    ['mouseup', 'auxclick', 'contextmenu'].forEach(ev => pad.addEventListener(ev, e => e.preventDefault()));
    pad.addEventListener('wheel', e => { e.preventDefault(); if (e.deltaY < 0) wheel.up++; else if (e.deltaY > 0) wheel.down++; render(); }, { passive: false });
    $('.rst').onclick = reset;
    reset();
  });
})();

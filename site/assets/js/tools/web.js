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
      { id: 'title', label: 'Page title (50–60 characters)', type: 'text', value: 'Free Online Tools – PDF, Image & Video | ToolNest', full: true },
      { id: 'desc', label: 'Meta description (120–160 characters)', type: 'textarea', rows: 3, value: '150+ free online tools: merge and compress PDFs, convert images and videos, calculate CGPA and more. No sign-up, fast and private.', full: true },
      { id: 'url', label: 'Page URL', type: 'text', value: 'https://example.com/', full: true }, { id: 'image', label: 'Share image URL (1200×630)', type: 'text', value: 'https://example.com/og-image.jpg', full: true },
      { id: 'site', label: 'Site name', type: 'text', value: 'ToolNest' }, { id: 'tw', label: 'X / Twitter handle', type: 'text', value: '@toolnest' }, { id: 'author', label: 'Author', type: 'text', value: '' }, { id: 'kw', label: 'Keywords (optional)', type: 'text', value: '' },
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

  const KB = [
    [['Escape', 'Esc', 1.5], ['F1'], ['F2'], ['F3'], ['F4'], ['F5'], ['F6'], ['F7'], ['F8'], ['F9'], ['F10'], ['F11'], ['F12'], ['Delete', 'Del', 1.5]],
    [['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', '⌫ Back', 2]],
    [['Tab', 'Tab', 1.5], ...'QWERTYUIOP'.split('').map(c => ['Key' + c, c]), ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\', 1.5]],
    [['CapsLock', 'Caps', 1.8], ...'ASDFGHJKL'.split('').map(c => ['Key' + c, c]), ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter ⏎', 2.2]],
    [['ShiftLeft', 'Shift', 2.4], ...'ZXCVBNM'.split('').map(c => ['Key' + c, c]), ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ShiftRight', 'Shift', 2.6]],
    [['ControlLeft', 'Ctrl', 1.4], ['MetaLeft', 'Win', 1.2], ['AltLeft', 'Alt', 1.2], ['Space', 'Space', 6.2], ['AltRight', 'Alt', 1.2], ['ContextMenu', 'Menu', 1.2], ['ControlRight', 'Ctrl', 1.4], ['ArrowLeft', '←'], ['ArrowUp', '↑'], ['ArrowDown', '↓'], ['ArrowRight', '→']],
  ];
  Tools.define('keyboard-tester', root => {
    root.innerHTML = `<div class="stack"><div class="row" style="align-items:center;justify-content:space-between"><div class="small">Press any key. Last key: <strong class="last">—</strong> <span class="muted info"></span></div><div class="btn-row"><span class="badge cnt">0 keys tested</span><button class="btn sm ghost rst">Reset</button></div></div>
      <div class="kb scroll-x" style="padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:14px">${KB.map(r => `<div style="display:flex;gap:5px;margin-bottom:5px;min-width:720px">${r.map(([code, label, w]) => `<div class="k" data-code="${code}" style="flex:${w || 1};height:46px;display:grid;place-items:center;border:1px solid var(--border);border-bottom-width:3px;border-radius:8px;background:var(--card);font-size:.8rem;font-weight:600;user-select:none;transition:background .1s">${esc(label || code)}</div>`).join('')}</div>`).join('')}</div>
      <p class="small muted">Tested keys turn green. Keys that stay grey after pressing may be faulty. Some keys (Fn, Print Screen, media keys) cannot be detected by browsers.</p></div>`;
    const $ = UI.q(root), tested = new Set();
    const onKey = e => {
      if (!root.isConnected) return document.removeEventListener('keydown', onKey);
      if (!(e.ctrlKey && /^(KeyR|KeyW|KeyT|F5)$/.test(e.code))) e.preventDefault();
      tested.add(e.code);
      const el = root.querySelector(`[data-code="${e.code}"]`);
      if (el) { el.style.background = 'var(--primary)'; el.style.color = '#fff'; setTimeout(() => { el.style.background = 'var(--success-soft)'; el.style.color = ''; el.style.borderColor = 'var(--success)'; }, 140); }
      $('.last').textContent = e.key === ' ' ? 'Space' : e.key; $('.info').textContent = `code: ${e.code} · keyCode: ${e.keyCode}`; $('.cnt').textContent = `${tested.size} keys tested`;
    };
    document.addEventListener('keydown', onKey);
    $('.rst').onclick = () => { tested.clear(); root.querySelectorAll('.k').forEach(k => { k.style.background = ''; k.style.borderColor = ''; }); $('.cnt').textContent = '0 keys tested'; };
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
})();

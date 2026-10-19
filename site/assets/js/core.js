(function () {
  'use strict';

  const impl = {};
  window.Tools = {
    define(slug, fn) { impl[slug] = fn; },
    mount(slug, el, preset) {
      el.innerHTML = '';
      const fn = impl[slug];
      if (!fn) { el.innerHTML = '<p class="notice error">This tool failed to load. Please refresh the page.</p>'; return; }
      try { fn(el, preset || {}); } catch (e) {
        console.error(e);
        el.innerHTML = `<p class="notice error">Something went wrong while loading this tool: ${esc(e.message)}</p>`;
      }
    },
    has: slug => !!impl[slug],
  };

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let uidN = 0;
  const uid = () => 'u' + (++uidN);

  const UI = window.UI = {
    esc, uid,
    h(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; },
    q(root) { return sel => root.querySelector(sel); },
    num(v) { if (v === '' || v == null) return NaN; return parseFloat(String(v).replace(/,/g, '')); },
    fmt(n, max = 2, min = 0) {
      if (n == null || !isFinite(n)) return '—';
      return Number(n).toLocaleString('en-US', { maximumFractionDigits: max, minimumFractionDigits: min });
    },
    money(n, cur = '') { return (cur ? cur + ' ' : '') + UI.fmt(n, 2, 2); },
    fmtBytes(b) {
      if (!isFinite(b)) return '—';
      const u = ['B', 'KB', 'MB', 'GB']; let i = 0;
      while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; }
      return (i ? b.toFixed(b < 10 ? 2 : 1) : b) + ' ' + u[i];
    },
    fmtTime(sec, ms = false) {
      sec = Math.max(0, sec);
      const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = Math.floor(sec % 60);
      const p = n => String(n).padStart(2, '0');
      let out = (h ? h + ':' + p(m) : m) + ':' + p(s);
      if (ms) out += '.' + p(Math.floor(sec * 100 % 100));
      return out;
    },
    baseName(name) { return String(name).replace(/\.[^.]+$/, ''); },
    ext(type) { return ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/svg+xml': 'svg', 'application/pdf': 'pdf' })[type] || 'bin'; },
    clamp(v, a, b) { return Math.min(b, Math.max(a, v)); },
    debounce(fn, ms = 200) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; },
    store: {
      get(k, d) { try { const v = localStorage.getItem('tn:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
      set(k, v) { try { localStorage.setItem('tn:' + k, JSON.stringify(v)); } catch (e) { } },
    },
  };

  let toastEl, toastT;
  UI.toast = (msg, ms = 2200) => {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; toastEl.setAttribute('role', 'status'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), ms);
  };
  UI.copy = async (text, msg = 'Copied to clipboard') => {
    try { await navigator.clipboard.writeText(text); }
    catch (e) {
      const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    UI.toast('✓ ' + msg);
  };
  UI.notice = (el, msg, type = '') => { el.innerHTML = msg ? `<div class="notice ${type}">${msg}</div>` : ''; };
  UI.busy = async (btn, fn, label = 'Working…', errEl) => {
    const old = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner"></span> ${esc(label)}`; }
    if (errEl) errEl.innerHTML = '';
    try { return await fn(); }
    catch (e) {
      console.error(e);
      const m = (e && e.message) || String(e);
      if (errEl) UI.notice(errEl, '⚠️ ' + esc(m), 'error'); else UI.toast('⚠️ ' + m, 4000);
    } finally { if (btn) { btn.disabled = false; btn.innerHTML = old; } }
  };
  UI.progress = () => {
    const el = UI.h('<div class="stack" style="gap:6px"><div class="progress"><div></div></div><div class="small muted"></div></div>');
    const bar = el.querySelector('.progress > div'), lab = el.querySelector('.small');
    return { el, set(p, text) { bar.style.width = Math.round(UI.clamp(p, 0, 1) * 100) + '%'; if (text != null) lab.textContent = text; } };
  };

  UI.download = (data, filename) => {
    const url = typeof data === 'string' ? data : URL.createObjectURL(data);
    const a = document.createElement('a'); a.href = url; a.download = filename; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    if (typeof data !== 'string') setTimeout(() => URL.revokeObjectURL(url), 60000);
  };
  UI.downloadText = (text, filename, type = 'text/plain') => UI.download(new Blob([text], { type: type + ';charset=utf-8' }), filename);
  UI.readFile = (file, as = 'text') => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result); r.onerror = () => rej(r.error);
    if (as === 'dataURL') r.readAsDataURL(file); else if (as === 'arrayBuffer') r.readAsArrayBuffer(file); else r.readAsText(file);
  });
  UI.loadImage = src => new Promise((res, rej) => {
    const img = new Image();
    const url = src instanceof Blob ? URL.createObjectURL(src) : src;
    img.onload = () => res(img);
    img.onerror = () => rej(new Error('Could not open this image. Please use a JPG, PNG, WebP, GIF, BMP or SVG file.'));
    img.src = url;
  });
  UI.canvasBlob = (canvas, type = 'image/png', q = 0.92) => new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error('Could not export image')), type, q));
  UI.canvas = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };

  UI.dropzone = (o) => {
    const el = UI.h(`<label class="dropzone${o.compact ? ' compact' : ''}">
      <span class="dz-icon">${o.icon || '📁'}</span>
      <span><strong>${esc(o.title || (o.multiple ? 'Choose files' : 'Choose a file'))}</strong><br><small>${esc(o.hint || 'or drag & drop here')}</small></span>
      <input type="file" hidden ${o.multiple ? 'multiple' : ''} accept="${esc(o.accept || '*/*')}"></label>`);
    const input = el.querySelector('input');
    const emit = files => { files = [...files]; if (!files.length) return; o.onFiles(o.multiple ? files : [files[0]]); };
    input.addEventListener('change', () => { emit(input.files); input.value = ''; });
    ['dragenter', 'dragover'].forEach(ev => el.addEventListener(ev, e => { e.preventDefault(); el.classList.add('drag'); }));
    ['dragleave', 'drop'].forEach(ev => el.addEventListener(ev, e => { e.preventDefault(); el.classList.remove('drag'); }));
    el.addEventListener('drop', e => emit(e.dataTransfer.files));
    if (o.paste) {
      document.addEventListener('paste', e => {
        if (!el.isConnected || /^(INPUT|TEXTAREA)$/.test(document.activeElement && document.activeElement.tagName)) return;
        const files = [...(e.clipboardData && e.clipboardData.files || [])];
        if (files.length) emit(files);
      });
    }
    el.pick = () => input.click();
    return el;
  };

  UI.fileRow = ({ name, sub = '', thumb = '', icon = '📄', blob, filename, extra = '' }) => {
    const el = UI.h(`<div class="file-item">
      ${thumb ? `<img class="thumb" src="${thumb}" alt="">` : `<div class="thumb">${icon}</div>`}
      <div class="meta"><div class="name" title="${esc(name)}">${esc(name)}</div><div class="sub">${sub}</div></div>
      <div class="actions">${extra}${blob ? '<button class="btn sm dl">Download</button>' : ''}</div></div>`);
    if (blob) el.querySelector('.dl').onclick = () => UI.download(blob, filename || name);
    return el;
  };

  UI.zip = async (files, zipName) => {
    const JSZip = await UI.lib('jszip');
    const zip = new JSZip(); const used = {};
    files.forEach(f => { let n = f.name; if (used[n]) { n = UI.baseName(n) + '-' + (used[n]++) + n.slice(UI.baseName(n).length); } else used[n] = 1; zip.file(n, f.blob); });
    UI.download(await zip.generateAsync({ type: 'blob' }), zipName);
  };

  UI.parseRanges = (str, max) => {
    const out = new Set();
    String(str).split(/[,;\s]+/).filter(Boolean).forEach(part => {
      const m = part.match(/^(\d*)\s*-\s*(\d*)$/);
      if (m) { const a = m[1] ? +m[1] : 1, b = m[2] ? +m[2] : max; for (let i = Math.max(1, a); i <= Math.min(max, b); i++) out.add(i); }
      else if (/^\d+$/.test(part) && +part >= 1 && +part <= max) out.add(+part);
    });
    return [...out].sort((a, b) => a - b);
  };

  const CDN = 'https://cdnjs.cloudflare.com/ajax/libs/', JSD = 'https://cdn.jsdelivr.net/npm/';
  const LIBS = {
    pdflib: [CDN + 'pdf-lib/1.17.1/pdf-lib.min.js', 'PDFLib'],
    pdfjs: [CDN + 'pdf.js/3.11.174/pdf.min.js', 'pdfjsLib'],
    jszip: [CDN + 'jszip/3.10.1/jszip.min.js', 'JSZip'],
    qrcode: [CDN + 'qrcode-generator/1.4.4/qrcode.min.js', 'qrcode'],
    jsqr: [JSD + 'jsqr@1.4.0/dist/jsQR.min.js', 'jsQR'],
    jsbarcode: [CDN + 'jsbarcode/3.11.6/JsBarcode.all.min.js', 'JsBarcode'],
    mammoth: [CDN + 'mammoth/1.6.0/mammoth.browser.min.js', 'mammoth'],
    docx: [JSD + 'docx@8.5.0/build/index.umd.js', 'docx'],
    docxpreview: [JSD + 'docx-preview@0.3.2/dist/docx-preview.min.js', 'docx', ['jszip']],
    heic2any: [JSD + 'heic2any@0.0.4/dist/heic2any.min.js', 'heic2any'],
    tesseract: [JSD + 'tesseract.js@5.1.1/dist/tesseract.min.js', 'Tesseract'],
    marked: [CDN + 'marked/12.0.2/marked.min.js', 'marked'],
    sqlformatter: [JSD + 'sql-formatter@15.4.0/dist/sql-formatter.min.js', 'sqlFormatter'],
    terser: [JSD + 'terser@5.31.0/dist/bundle.min.js', 'Terser'],
    pako: [CDN + 'pako/1.0.11/pako.min.js', 'pako'],
    upng: [CDN + 'upng-js/2.1.0/UPNG.min.js', 'UPNG', ['pako']],
    lamejs: [CDN + 'lamejs/1.2.1/lame.min.js', 'lamejs'],
  };
  const scriptCache = {};
  UI.script = src => scriptCache[src] || (scriptCache[src] = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = src; s.async = true; s.crossOrigin = 'anonymous';
    s.onload = res; s.onerror = () => { delete scriptCache[src]; rej(new Error('Could not load a required component. Check your internet connection and try again.')); };
    document.head.appendChild(s);
  }));
  UI.lib = async name => {
    const [src, global, deps] = LIBS[name];
    if (deps) for (const d of deps) await UI.lib(d);
    if (window[global] && name !== 'docx' && name !== 'docxpreview') return window[global];
    await UI.script(src);
    if (name === 'pdfjs') window.pdfjsLib.GlobalWorkerOptions.workerSrc = CDN + 'pdf.js/3.11.174/pdf.worker.min.js';
    return window[global];
  };

  UI.fetchBlob = async (url, onProgress, type) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Download failed (' + res.status + ')');
    const total = +res.headers.get('content-length') || 0;
    if (!res.body || !onProgress) return new Blob([await res.arrayBuffer()], { type });
    const reader = res.body.getReader(); const chunks = []; let got = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value); got += value.length;
      onProgress(total ? Math.min(0.99, got / total) : 0, got);
    }
    return new Blob(chunks, { type });
  };

  UI.openPdf = async (file) => {
    const pdfjs = await UI.lib('pdfjs');
    const data = new Uint8Array(await file.arrayBuffer());
    try { return await pdfjs.getDocument({ data }).promise; }
    catch (e) { throw new Error(/password/i.test(e.message) ? 'This PDF is password protected. Please unlock it first.' : 'Could not read this PDF. The file may be damaged.'); }
  };
  UI.renderPage = async (pdf, n, scale = 1) => {
    const page = await pdf.getPage(n);
    const vp = page.getViewport({ scale });
    const c = UI.canvas(vp.width, vp.height);
    const ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
    await page.render({ canvasContext: ctx, viewport: vp, intent: 'print' }).promise;
    page.cleanup();
    return c;
  };
  UI.loadPdfLib = async (file) => {
    const { PDFDocument } = await UI.lib('pdflib');
    try { return await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true }); }
    catch (e) { throw new Error(`Could not read "${file.name}". The file may be damaged or not a PDF.`); }
  };
  UI.savePdf = async (doc, filename) => UI.download(new Blob([await doc.save()], { type: 'application/pdf' }), filename);

  let ffPromise = null, ffListener = null;
  UI.ffmpeg = (onStatus) => {
    ffListener = onStatus || ffListener;
    if (!ffPromise) ffPromise = (async () => {
      const base = JSD + '@ffmpeg/';
      await UI.script(base + 'ffmpeg@0.12.10/dist/umd/ffmpeg.js');
      const blobUrl = async (url, type, label) => URL.createObjectURL(await UI.fetchBlob(url, label ? (p, got) => ffListener && ffListener(`${label} (${(got / 1048576).toFixed(1)} MB)`, p) : null, type));
      const ff = new window.FFmpegWASM.FFmpeg();
      const classWorkerURL = await blobUrl(base + 'ffmpeg@0.12.10/dist/umd/814.ffmpeg.js', 'text/javascript');
      const coreURL = await blobUrl(base + 'core@0.12.6/dist/esm/ffmpeg-core.js', 'text/javascript');
      const wasmURL = await blobUrl(base + 'core@0.12.6/dist/esm/ffmpeg-core.wasm', 'application/wasm', 'Downloading video engine');
      ffListener && ffListener('Starting video engine…', 1);
      await ff.load({ classWorkerURL, coreURL, wasmURL });
      return ff;
    })().catch(e => { ffPromise = null; throw new Error('Could not start the video engine: ' + (e.message || e)); });
    return ffPromise;
  };
  UI.ffmpegTerminate = () => { if (ffPromise) { ffPromise.then(f => f.terminate()).catch(() => {}); ffPromise = null; } };

  function fieldHTML(f, id) {
    const v = f.value == null ? '' : f.value;
    const opt = o => Array.isArray(o) ? o : [o, o];
    let ctl;
    switch (f.type) {
      case 'select':
        ctl = `<select class="select" id="${id}">${f.options.map(o => { const [val, lab] = opt(o); return `<option value="${esc(val)}"${String(val) === String(v) ? ' selected' : ''}>${esc(lab)}</option>`; }).join('')}</select>`; break;
      case 'seg':
        ctl = `<div class="seg" id="${id}" data-value="${esc(v)}">${f.options.map(o => { const [val, lab] = opt(o); return `<button type="button" data-v="${esc(val)}" class="${String(val) === String(v) ? 'on' : ''}">${esc(lab)}</button>`; }).join('')}</div>`; break;
      case 'checkbox':
        return `<div class="field ${f.cls || ''}" data-fid="${f.id}" style="justify-content:flex-end"><label class="check"><input type="checkbox" id="${id}" ${v ? 'checked' : ''}> ${esc(f.label)}</label></div>`;
      case 'textarea':
        ctl = `<textarea class="textarea ${f.mono ? 'mono' : ''}" id="${id}" rows="${f.rows || 6}" placeholder="${esc(f.placeholder || '')}" spellcheck="false">${esc(v)}</textarea>`; break;
      case 'range':
        ctl = `<div class="row" style="align-items:center;flex-wrap:nowrap"><input type="range" id="${id}" min="${f.min}" max="${f.max}" step="${f.step || 1}" value="${esc(v)}"><output class="small" style="min-width:48px;text-align:right">${esc(v)}${esc(f.unit || '')}</output></div>`; break;
      case 'color':
        ctl = `<input type="color" id="${id}" value="${esc(v)}">`; break;
      default: {
        const t = f.type || 'number';
        const input = `<input class="input" type="${t}" id="${id}" value="${esc(v)}"${f.min != null ? ` min="${f.min}"` : ''}${f.max != null ? ` max="${f.max}"` : ''}${t === 'number' ? ` step="${f.step || 'any'}" inputmode="decimal"` : ''} placeholder="${esc(f.placeholder || '')}">`;
        ctl = f.unit ? `<div class="input-wrap">${input}<span class="unit">${esc(f.unit)}</span></div>` : input;
      }
    }
    return `<div class="field ${f.cls || ''}" data-fid="${f.id}"${f.full ? ' style="flex-basis:100%"' : ''}><label for="${id}">${esc(f.label)}</label>${ctl}${f.hint ? `<small class="muted">${esc(f.hint)}</small>` : ''}</div>`;
  }

  UI.fields = (container, fields, onChange) => {
    const ids = {};
    container.innerHTML = fields.map(f => { ids[f.id] = uid(); return fieldHTML(f, ids[f.id]); }).join('');
    const el = id => container.querySelector('#' + ids[id]);
    const get = () => {
      const v = {};
      fields.forEach(f => {
        const e = el(f.id);
        if (f.type === 'checkbox') v[f.id] = e.checked;
        else if (f.type === 'seg') v[f.id] = e.dataset.value;
        else if (!f.type || f.type === 'number' || f.type === 'range') v[f.id] = UI.num(e.value);
        else v[f.id] = e.value;
      });
      return v;
    };
    const refresh = () => {
      const v = get();
      fields.forEach(f => {
        const wrap = container.querySelector(`[data-fid="${f.id}"]`);
        if (f.show) wrap.hidden = !f.show(v);
        if (f.type === 'range') wrap.querySelector('output').textContent = el(f.id).value + (f.unit || '');
      });
      return v;
    };
    if (container._fieldsAbort) container._fieldsAbort.abort();
    const signal = (container._fieldsAbort = new AbortController()).signal;
    container.addEventListener('click', e => {
      const b = e.target.closest('.seg button'); if (!b || !container.contains(b)) return;
      const seg = b.parentElement; seg.dataset.value = b.dataset.v;
      seg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      onChange && onChange(refresh());
    }, { signal });
    container.addEventListener('input', () => onChange && onChange(refresh()), { signal });
    container.addEventListener('change', () => onChange && onChange(refresh()), { signal });
    refresh();
    return {
      get, el, refresh,
      set(id, val) {
        const e = el(id); const f = fields.find(x => x.id === id);
        if (f.type === 'checkbox') e.checked = !!val;
        else if (f.type === 'seg') { e.dataset.value = val; e.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.v === String(val))); }
        else e.value = val;
        refresh();
      },
    };
  };

  UI.resultsHTML = items => `<div class="results">${items.filter(Boolean).map(r => `<div class="result${r.main ? ' main' : ''}"><div class="k">${esc(r.k)}</div><div class="v">${r.v}</div>${r.s ? `<div class="s">${r.s}</div>` : ''}</div>`).join('')}</div>`;

  UI.calc = (root, spec) => {
    root.innerHTML = `<div class="stack"><div class="row calc-fields"></div>${spec.button ? `<div><button class="btn calc-go">${esc(spec.button)}</button></div>` : ''}<div class="calc-out" aria-live="polite"></div></div>`;
    const out = root.querySelector('.calc-out');
    const update = () => {
      const v = form.get();
      let r;
      try { r = spec.compute(v); } catch (e) { console.error(e); r = { html: `<div class="notice error">${esc(e.message)}</div>` }; }
      if (r == null) { out.innerHTML = `<div class="notice">${esc(spec.empty || 'Enter your values above to see the result.')}</div>`; return; }
      if (typeof r === 'string') { out.innerHTML = r; return; }
      out.innerHTML = (r.results ? UI.resultsHTML(r.results) : '') + (r.html || '') + (r.note ? `<p class="small muted mt">${r.note}</p>` : '');
      spec.after && spec.after(out, v);
    };
    const form = UI.fields(root.querySelector('.calc-fields'), spec.fields, spec.button ? null : update);
    if (spec.button) root.querySelector('.calc-go').onclick = update;
    update();
    return { form, update, out };
  };

  UI.textTool = (root, spec) => {
    root.innerHTML = `<div class="stack">
      ${spec.options ? '<div class="row tt-opts"></div>' : ''}
      <div class="grid-2">
        <div class="field"><label>${esc(spec.inputLabel || 'Input')}</label><textarea class="textarea ${spec.mono ? 'mono' : ''} tt-in" placeholder="${esc(spec.placeholder || 'Type or paste your text here…')}" spellcheck="${spec.mono ? 'false' : 'true'}">${esc(spec.sample || '')}</textarea><div class="small muted tt-stats"></div></div>
        <div class="field"><label>${esc(spec.outputLabel || 'Output')}</label><textarea class="textarea ${spec.mono ? 'mono' : ''} tt-out" readonly spellcheck="false"></textarea><div class="small muted tt-info"></div></div>
      </div>
      <div class="btn-row">
        ${(spec.actions || []).map((a, i) => `<button class="btn ${i ? 'secondary' : ''}" data-act="${i}">${esc(a.label)}</button>`).join('')}
        <button class="btn ghost tt-copy">📋 Copy output</button>
        <button class="btn ghost tt-dl">⬇ Download</button>
        <button class="btn ghost tt-swap" title="Move output to input">⇅ Use output as input</button>
        <button class="btn ghost tt-clear">Clear</button>
      </div></div>`;
    const $ = UI.q(root);
    const inp = $('.tt-in'), out = $('.tt-out');
    const opts = spec.options ? UI.fields($('.tt-opts'), spec.options, () => spec.live !== false && run()) : { get: () => ({}) };
    let last = spec.actions ? 0 : -1;
    const run = (i = last) => {
      last = i;
      const fn = i >= 0 && spec.actions ? spec.actions[i].run : spec.run;
      try {
        const r = fn ? fn(inp.value, opts.get()) : '';
        if (r && typeof r === 'object') { out.value = r.text; $('.tt-info').innerHTML = r.info || ''; } else { out.value = r == null ? '' : r; $('.tt-info').innerHTML = ''; }
      } catch (e) { out.value = ''; $('.tt-info').innerHTML = `<span style="color:var(--danger)">⚠️ ${esc(e.message)}</span>`; }
      if (spec.stats) $('.tt-stats').innerHTML = spec.stats(inp.value);
    };
    root.querySelectorAll('[data-act]').forEach(b => b.onclick = () => run(+b.dataset.act));
    inp.addEventListener('input', () => { if (spec.live !== false) run(); else if (spec.stats) $('.tt-stats').innerHTML = spec.stats(inp.value); });
    $('.tt-copy').onclick = () => out.value && UI.copy(out.value);
    $('.tt-dl').onclick = () => out.value && UI.downloadText(out.value, spec.filename || 'output.txt');
    $('.tt-swap').onclick = () => { inp.value = out.value; run(); };
    $('.tt-clear').onclick = () => { inp.value = ''; out.value = ''; run(); inp.focus(); };
    if (spec.live !== false || inp.value) run();
    return { inp, out, run, opts };
  };

  UI.seg = (options, value, onChange) => {
    const el = UI.h(`<div class="seg">${options.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<button type="button" data-v="${esc(v)}" class="${v === value ? 'on' : ''}">${esc(l)}</button>`; }).join('')}</div>`);
    el.value = value;
    el.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      el.value = b.dataset.v; el.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); onChange && onChange(el.value);
    });
    return el;
  };

  const fontCache = {};
  UI.font = (family, weights = '400') => fontCache[family] || (fontCache[family] = (async () => {
    const l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, '+')}:wght@${weights}&display=swap`;
    document.head.appendChild(l);
    await new Promise(r => { l.onload = r; l.onerror = r; });
    try { await document.fonts.load(`40px "${family}"`); } catch (e) { }
  })());

  UI.signaturePad = (canvas, opts = {}) => {
    const ctx = canvas.getContext('2d');
    let drawing = false, last = null, empty = true;
    const st = { color: opts.color || '#111827', width: opts.width || 3 };
    const fit = () => {
      const r = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      if (!r.width) return;
      const old = empty ? null : canvas.toDataURL();
      canvas.width = r.width * dpr; canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (old) UI.loadImage(old).then(img => ctx.drawImage(img, 0, 0, r.width, r.height));
    };
    const pos = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, p: e.pressure || 0.5 }; };
    canvas.style.touchAction = 'none';
    canvas.addEventListener('pointerdown', e => { drawing = true; last = pos(e); canvas.setPointerCapture(e.pointerId); ctx.beginPath(); ctx.fillStyle = st.color; ctx.arc(last.x, last.y, st.width / 2, 0, Math.PI * 2); ctx.fill(); empty = false; });
    canvas.addEventListener('pointermove', e => {
      if (!drawing) return;
      const p = pos(e);
      ctx.strokeStyle = st.color; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.lineWidth = st.width * (e.pointerType === 'pen' ? 0.6 + p.p : 1);
      ctx.beginPath(); ctx.moveTo(last.x, last.y);
      const mx = (last.x + p.x) / 2, my = (last.y + p.y) / 2;
      ctx.quadraticCurveTo(last.x, last.y, mx, my); ctx.lineTo(p.x, p.y); ctx.stroke();
      last = p; empty = false;
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => canvas.addEventListener(ev, () => { drawing = false; }));
    requestAnimationFrame(fit);
    window.addEventListener('resize', UI.debounce(fit, 150));
    return {
      set color(c) { st.color = c; }, set width(w) { st.width = w; },
      clear() { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.restore(); empty = true; },
      isEmpty: () => empty, fit,
      trimmed: () => UI.trimCanvas(canvas),
    };
  };

  UI.trimCanvas = (src, pad = 6) => {
    const { width: w, height: h } = src;
    const d = src.getContext('2d').getImageData(0, 0, w, h).data;
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      if (d[(y * w + x) * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    }
    if (x1 < 0) return null;
    x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad); x1 = Math.min(w - 1, x1 + pad); y1 = Math.min(h - 1, y1 + pad);
    const c = UI.canvas(x1 - x0 + 1, y1 - y0 + 1);
    c.getContext('2d').drawImage(src, x0, y0, c.width, c.height, 0, 0, c.width, c.height);
    return c;
  };

  let actx;
  UI.beep = (freq = 880, dur = 0.25, vol = 0.3, type = 'sine') => {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type; o.frequency.value = freq; g.gain.value = vol;
      g.gain.setValueAtTime(vol, actx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
      o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + dur);
    } catch (e) { }
  };
  UI.alarm = (times = 6) => { for (let i = 0; i < times; i++) { setTimeout(() => UI.beep(988, 0.18, 0.35, 'square'), i * 400); setTimeout(() => UI.beep(784, 0.18, 0.35, 'square'), i * 400 + 200); } };

  function initTheme() {
    const btn = document.getElementById('theme-toggle'); if (!btn) return;
    const isDark = () => { const t = document.documentElement.getAttribute('data-theme'); return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; };
    const paint = () => { btn.textContent = isDark() ? '☀️' : '🌙'; };
    btn.onclick = () => { const t = isDark() ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', t); try { localStorage.setItem('theme', t); } catch (e) { } paint(); };
    paint();
  }

  function initMenu() {
    document.querySelectorAll('.dropdown').forEach(d => {
      const b = d.querySelector('.nav-btn');
      b.onclick = e => { e.stopPropagation(); const o = d.classList.toggle('open'); b.setAttribute('aria-expanded', o); };
    });
    document.addEventListener('click', e => { document.querySelectorAll('.dropdown.open').forEach(d => { if (!d.contains(e.target)) d.classList.remove('open'); }); });
  }

  function score(t, q) {
    const n = t.name.toLowerCase(), k = (t.kw + ' ' + t.slug.replace(/-/g, ' ')).toLowerCase(), d = t.desc.toLowerCase();
    let s = 0;
    for (const w of q.split(/\s+/).filter(Boolean)) {
      if (n.startsWith(w)) s += 10; else if (n.includes(w)) s += 7; else if (k.includes(w)) s += 5; else if (d.includes(w)) s += 1; else return 0;
    }
    if (n === q) s += 20;
    return s + (t.popular ? 0.5 : 0);
  }
  UI.searchTools = q => {
    q = q.trim().toLowerCase(); if (!q || !window.TOOLS) return [];
    return window.TOOLS.map(t => [score(t, q), t]).filter(x => x[0] > 0).sort((a, b) => b[0] - a[0]).map(x => x[1]);
  };

  function initSearch() {
    const input = document.getElementById('site-search'), box = document.getElementById('search-results');
    if (!input || !window.TOOLS) return;
    const cats = Object.fromEntries((window.CATEGORIES || []).map(c => [c.id, c]));
    let active = -1;
    const render = () => {
      const res = UI.searchTools(input.value).slice(0, 8);
      active = -1;
      if (!input.value.trim()) { box.classList.remove('show'); return; }
      box.innerHTML = res.length ? res.map(t => `<a href="${t.slug}.html" role="option"><span class="tool-icon" style="--c:${cats[t.cat].color};width:34px;height:34px;font-size:1rem">${t.icon}</span><span><strong>${esc(t.name)}</strong><small>${esc(cats[t.cat].name)}</small></span></a>`).join('') : '<div class="empty">No tools found. Try another word.</div>';
      box.classList.add('show');
    };
    input.addEventListener('input', render);
    input.addEventListener('focus', render);
    input.addEventListener('keydown', e => {
      const links = [...box.querySelectorAll('a')];
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); if (!links.length) return;
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach((l, i) => l.classList.toggle('active', i === active));
      } else if (e.key === 'Enter') {
        const l = links[active] || links[0]; if (l) location.href = l.href;
      } else if (e.key === 'Escape') { box.classList.remove('show'); input.blur(); }
    });
    document.addEventListener('click', e => { if (!e.target.closest('.header-search')) box.classList.remove('show'); });
    document.addEventListener('keydown', e => {
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); input.focus(); }
    });
  }

  function initHomeSearch() {
    const input = document.getElementById('home-search'); if (!input) return;
    const sections = [...document.querySelectorAll('[data-section]')];
    const none = document.getElementById('no-results');
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      const hits = new Set(UI.searchTools(q).map(t => t.slug + '.html'));
      let any = false;
      sections.forEach(s => {
        let n = 0;
        s.querySelectorAll('.tool-card-link').forEach(a => { const ok = !q || hits.has(a.getAttribute('href')); a.hidden = !ok; if (ok) n++; });
        s.hidden = !n; if (n) any = true;
      });
      none.hidden = any;
    };
    input.addEventListener('input', filter);
    const q = new URLSearchParams(location.search).get('q');
    if (q) { input.value = q; filter(); }
  }

  window.addEventListener('unhandledrejection', e => { console.error(e.reason); });
  const init = () => { initTheme(); initMenu(); initSearch(); initHomeSearch(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

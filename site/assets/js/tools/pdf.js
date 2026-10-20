(function () {
  const { esc } = UI;
  const isPdf = f => f && (f.type === 'application/pdf' || /\.pdf$/i.test(f.name));

  function pdfTool(root, spec) {
    root.innerHTML = `<div class="stack">
      <div class="pick"></div>
      <div class="work stack" hidden>
        <div class="cur"></div>
        ${spec.fields ? '<div class="row opts"></div>' : ''}
        <div class="extra"></div>
        <div class="btn-row"><button class="btn lg go">${esc(spec.button)}</button></div>
        <div class="err"></div>
        <div class="out stack"></div>
      </div></div>`;
    const $ = UI.q(root);
    let bytes = null, jsDoc = null;
    const ctx = {
      $, out: $('.out'), extra: $('.extra'), file: null, pages: 0,
      bytes: () => bytes,
      pdflib: async () => { const { PDFDocument } = await UI.lib('pdflib'); return PDFDocument.load(bytes, { ignoreEncryption: true }); },
      pdfjs: async () => {
        if (!jsDoc) {
          const pdfjs = await UI.lib('pdfjs');
          try { jsDoc = await pdfjs.getDocument({ data: bytes.slice(0) }).promise; }
          catch (e) { throw new Error(/password/i.test(e.message) || e.name === 'PasswordException' ? 'This PDF is password-protected. Remove the password (open it and save/print it as a new PDF) and try again.' : 'Could not read this PDF. The file may be damaged.'); }
        }
        return jsDoc;
      },
    };
    const dz = UI.dropzone({
      accept: 'application/pdf,.pdf', icon: '📄', title: 'Choose a PDF file', hint: 'or drag & drop it here',
      onFiles: async ([f]) => {
        if (!isPdf(f)) return UI.toast('Please choose a PDF file');
        ctx.file = f; jsDoc = null; ctx.out.innerHTML = ''; $('.err').innerHTML = '';
        bytes = new Uint8Array(await f.arrayBuffer());
        try {
          const doc = await ctx.pdflib(); ctx.pages = doc.getPageCount();
        } catch (e) { UI.notice($('.err'), '⚠️ Could not read this PDF. It may be damaged or password protected.', 'error'); ctx.pages = 0; }
        $('.cur').innerHTML = '';
        const row = UI.fileRow({ name: f.name, sub: `${UI.fmtBytes(f.size)}${ctx.pages ? ' · ' + ctx.pages + ' page' + (ctx.pages > 1 ? 's' : '') : ''}`, icon: '📄', extra: '<button class="btn sm ghost">Change file</button>' });
        row.querySelector('button').onclick = () => dz.pick();
        $('.cur').append(row);
        $('.pick').hidden = true; $('.work').hidden = false;
        if (spec.onFile) await UI.busy(null, () => spec.onFile(ctx), '', $('.err'));
      },
    });
    $('.pick').append(dz);
    const opts = spec.fields ? UI.fields($('.opts'), spec.fields, v => spec.onOpts && spec.onOpts(v, ctx)) : null;
    ctx.opts = () => (opts ? opts.get() : {});
    ctx.form = opts;
    $('.go').onclick = () => UI.busy($('.go'), async () => { ctx.out.innerHTML = ''; await spec.run(ctx, ctx.opts()); }, spec.busy || 'Processing…', $('.err'));
    return ctx;
  }

  const outName = (f, suffix, ext = 'pdf') => `${UI.baseName(f.name)}${suffix}.${ext}`;
  const pdfBlob = async (doc) => new Blob([await doc.save({ useObjectStreams: true })], { type: 'application/pdf' });
  function showResult(ctx, blob, name, msg) {
    ctx.out.append(UI.h(`<div class="notice success">✓ ${msg || 'Done!'} ${blob ? `New size: <strong>${UI.fmtBytes(blob.size)}</strong>` : ''}</div>`));
    if (blob) { ctx.out.append(UI.fileRow({ name, sub: UI.fmtBytes(blob.size), icon: '✅', blob })); UI.download(blob, name); }
  }
  function showMany(ctx, files, zipName) {
    const list = UI.h('<div class="file-list"></div>');
    files.forEach(f => list.append(UI.fileRow({ name: f.name, sub: UI.fmtBytes(f.blob.size), icon: f.icon || '📄', thumb: f.thumb, blob: f.blob })));
    const bar = UI.h(`<div class="btn-row"><button class="btn success">⬇ Download all (ZIP)</button><span class="muted small">${files.length} files</span></div>`);
    bar.querySelector('button').onclick = e => UI.busy(e.currentTarget, () => UI.zip(files, zipName), 'Zipping…');
    ctx.out.append(bar, list);
  }
  function fileOrderList(container, files, onChange, thumbOf) {
    const render = () => {
      container.innerHTML = '';
      files.forEach((f, i) => {
        const row = UI.fileRow({ name: f.name, sub: UI.fmtBytes(f.size), icon: '📄', thumb: thumbOf ? thumbOf(f) : '', extra: `<button class="btn sm ghost" title="Move up" ${i ? '' : 'disabled'}>↑</button><button class="btn sm ghost" title="Move down" ${i < files.length - 1 ? '' : 'disabled'}>↓</button><button class="btn sm ghost" title="Remove">✕</button>` });
        const [up, down, rm] = row.querySelectorAll('.actions button');
        up.onclick = () => { [files[i - 1], files[i]] = [files[i], files[i - 1]]; render(); };
        down.onclick = () => { [files[i + 1], files[i]] = [files[i], files[i + 1]]; render(); };
        rm.onclick = () => { files.splice(i, 1); render(); };
        container.append(row);
      });
      onChange();
    };
    return render;
  }
  async function textImage(text, { size = 48, color = '#000', font = 'Helvetica, Arial, sans-serif', bold = true }) {
    const c = UI.canvas(10, 10), x = c.getContext('2d');
    const f = `${bold ? 'bold ' : ''}${size * 4}px ${font}`;
    x.font = f; const w = Math.ceil(x.measureText(text).width) + size; const h = Math.ceil(size * 4 * 1.3);
    c.width = w; c.height = h; x.font = f; x.fillStyle = color; x.textBaseline = 'middle'; x.fillText(text, size / 2, h / 2);
    return { bytes: await (await UI.canvasBlob(c)).arrayBuffer(), w: w / 4, h: h / 4 };
  }

  Tools.define('merge-pdf', root => {
    const files = [];
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="file-list"></div><div class="btn-row"><button class="btn lg go" disabled>Merge PDF</button><span class="small muted info"></span></div><div class="err"></div></div>`;
    const $ = UI.q(root);
    const render = fileOrderList($('.file-list'), files, () => {
      $('.go').disabled = files.length < 2;
      $('.info').textContent = files.length ? `${files.length} file(s) · ${UI.fmtBytes(files.reduce((a, f) => a + f.size, 0))}${files.length < 2 ? ' · add at least 2 files' : ''}` : '';
    });
    $('.dz').append(UI.dropzone({ accept: 'application/pdf,.pdf', multiple: true, icon: '📄', title: 'Choose PDF files', hint: 'or drag & drop them here — add as many as you like', onFiles: fs => { const ok = fs.filter(isPdf); if (ok.length < fs.length) UI.toast('Some files were skipped (not PDF)'); files.push(...ok); render(); } }));
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      const { PDFDocument } = await UI.lib('pdflib');
      const out = await PDFDocument.create();
      for (const f of files) {
        const src = await UI.loadPdfLib(f);
        (await out.copyPages(src, src.getPageIndices())).forEach(p => out.addPage(p));
      }
      const blob = await pdfBlob(out);
      UI.download(blob, 'merged.pdf');
      UI.notice($('.err'), `✓ Merged ${files.length} files into <strong>merged.pdf</strong> (${out.getPageCount()} pages, ${UI.fmtBytes(blob.size)}).`, 'success');
    }, 'Merging…', $('.err'));
  });

  Tools.define('split-pdf', root => {
    pdfTool(root, {
      button: 'Split PDF',
      fields: [
        { id: 'mode', label: 'Split mode', type: 'seg', value: 'ranges', options: [['ranges', 'Custom ranges'], ['each', 'Every page'], ['fixed', 'Every N pages']], full: true },
        { id: 'ranges', label: 'Page ranges (each range becomes a new PDF)', type: 'text', value: '1-2, 3-', placeholder: 'e.g. 1-3, 4-6, 7', show: v => v.mode === 'ranges', cls: 'grow' },
        { id: 'n', label: 'Pages per file', type: 'number', value: 2, min: 1, show: v => v.mode === 'fixed' },
      ],
      async run(ctx, o) {
        const { PDFDocument } = await UI.lib('pdflib');
        const src = await ctx.pdflib(), total = src.getPageCount();
        let groups = [];
        if (o.mode === 'each') groups = Array.from({ length: total }, (_, i) => [i + 1]);
        else if (o.mode === 'fixed') { const n = Math.max(1, o.n || 1); for (let i = 1; i <= total; i += n) groups.push(Array.from({ length: Math.min(n, total - i + 1) }, (_, k) => i + k)); }
        else groups = o.ranges.split(',').map(r => UI.parseRanges(r, total)).filter(g => g.length);
        if (!groups.length) throw new Error(`Enter valid page ranges between 1 and ${total}.`);
        const files = [];
        for (const g of groups) {
          const d = await PDFDocument.create();
          (await d.copyPages(src, g.map(p => p - 1))).forEach(p => d.addPage(p));
          const label = g.length === 1 ? `page-${g[0]}` : `pages-${g[0]}-${g[g.length - 1]}`;
          files.push({ name: outName(ctx.file, '-' + label), blob: await pdfBlob(d) });
        }
        if (files.length === 1) showResult(ctx, files[0].blob, files[0].name, 'Pages extracted.');
        else { ctx.out.append(UI.h(`<div class="notice success">✓ Split into ${files.length} PDF files.</div>`)); showMany(ctx, files, outName(ctx.file, '-split', 'zip')); }
      },
    });
  });

  function pngUnfilter(data, w, bpp) {
    const row = w * bpp, rows = Math.floor(data.length / (row + 1)), out = new Uint8Array(rows * row);
    for (let y = 0; y < rows; y++) {
      const t = data[y * (row + 1)], src = y * (row + 1) + 1, dst = y * row;
      for (let x = 0; x < row; x++) {
        const a = x >= bpp ? out[dst + x - bpp] : 0, b = y ? out[dst - row + x] : 0, c = y && x >= bpp ? out[dst - row + x - bpp] : 0;
        let v = data[src + x];
        if (t === 1) v += a; else if (t === 2) v += b; else if (t === 3) v += (a + b) >> 1;
        else if (t === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
        out[dst + x] = v & 255;
      }
    }
    return out;
  }
  async function recompressImages(doc, { maxDim, q, gray, onProgress }) {
    const { PDFName, PDFRawStream, PDFArray, PDFDict } = await UI.lib('pdflib');
    const N = n => PDFName.of(n), ctx = doc.context, num = o => { o = ctx.lookup(o); return o && o.asNumber ? o.asNumber() : 0; };
    const imgs = ctx.enumerateIndirectObjects().filter(([, o]) => o instanceof PDFRawStream && ctx.lookup(o.dict.get(N('Subtype'))) === N('Image'));
    let done = 0, changed = 0;
    for (const [ref, obj] of imgs) {
      onProgress && onProgress(done++ / imgs.length, `Optimizing image ${done} of ${imgs.length}…`);
      try {
        const d = obj.dict;
        let filter = ctx.lookup(d.get(N('Filter')));
        if (filter instanceof PDFArray) filter = filter.size() === 1 ? ctx.lookup(filter.get(0)) : null;
        const w = num(d.get(N('Width'))), h = num(d.get(N('Height')));
        if (!w || !h || w * h < 4096 || d.get(N('ImageMask')) || d.get(N('Decode'))) continue;
        const cs = ctx.lookup(d.get(N('ColorSpace')));
        let comps = 0;
        if (cs === N('DeviceRGB')) comps = 3; else if (cs === N('DeviceGray')) comps = 1; else if (cs === N('DeviceCMYK')) comps = 4;
        else if (cs instanceof PDFArray && ctx.lookup(cs.get(0)) === N('ICCBased')) { const n = num(ctx.lookup(cs.get(1)).dict.get(N('N'))); if (n === 3 || n === 1 || n === 4) comps = n; }
        if (!comps || (comps === 4 && filter !== N('DCTDecode'))) continue;
        let src;
        if (filter === N('DCTDecode')) src = await UI.loadImage(new Blob([obj.contents], { type: 'image/jpeg' }));
        else if (filter === N('FlateDecode') && num(d.get(N('BitsPerComponent'))) === 8) {
          const pako = await UI.lib('pako');
          let raw = pako.inflate(obj.contents);
          let parms = ctx.lookup(d.get(N('DecodeParms'))); if (parms instanceof PDFArray) parms = ctx.lookup(parms.get(0));
          const pred = parms instanceof PDFDict ? num(parms.get(N('Predictor'))) || 1 : 1;
          if (pred >= 10) raw = pngUnfilter(raw, w, comps); else if (pred !== 1) continue;
          if (raw.length < w * h * comps) continue;
          const id = new ImageData(w, h), px = id.data;
          for (let p = 0, s = 0; p < w * h; p++, s += comps) { px[p * 4] = raw[s]; px[p * 4 + 1] = raw[s + (comps === 3 ? 1 : 0)]; px[p * 4 + 2] = raw[s + (comps === 3 ? 2 : 0)]; px[p * 4 + 3] = 255; }
          src = UI.canvas(w, h); src.getContext('2d').putImageData(id, 0, 0);
        } else continue;
        const k = Math.min(1, maxDim / Math.max(w, h)), c = UI.canvas(w * k, h * k), x = c.getContext('2d');
        x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.imageSmoothingQuality = 'high';
        if (gray || comps === 1) x.filter = 'grayscale(1)';
        x.drawImage(src, 0, 0, c.width, c.height);
        const bytes = new Uint8Array(await (await UI.canvasBlob(c, 'image/jpeg', q)).arrayBuffer());
        if (bytes.length >= obj.contents.length * 0.92) continue;
        const dict = { Type: 'XObject', Subtype: 'Image', Width: c.width, Height: c.height, ColorSpace: 'DeviceRGB', BitsPerComponent: 8, Filter: 'DCTDecode' };
        const smask = d.get(N('SMask')); if (smask) dict.SMask = smask;
        ctx.assign(ref, ctx.stream(bytes, dict));
        changed++;
      } catch (e) { console.warn('Skipped an image while compressing', e); }
    }
    return changed;
  }

  Tools.define('compress-pdf', root => {
    const ctx = pdfTool(root, {
      button: 'Compress PDF', busy: 'Compressing…',
      fields: [
        { id: 'level', label: 'Compression level', type: 'seg', value: 'medium', full: true, options: [['lossless', 'Lossless'], ['medium', 'Recommended'], ['high', 'Strong'], ['extreme', 'Extreme']] },
        { id: 'gray', label: 'Convert images to grayscale (smaller)', type: 'checkbox', value: false, show: v => v.level !== 'lossless' },
      ],
      onOpts: v => hint(v), onFile: () => hint(ctx.opts()),
      async run(ctx, o) {
        const before = ctx.file.size;
        const prog = UI.progress(); ctx.out.append(prog.el);
        let blob;
        if (o.level === 'extreme') {
          const { PDFDocument } = await UI.lib('pdflib');
          const pdf = await ctx.pdfjs(), out = await PDFDocument.create();
          for (let i = 1; i <= pdf.numPages; i++) {
            prog.set((i - 1) / pdf.numPages, `Compressing page ${i} of ${pdf.numPages}…`);
            const vp = (await pdf.getPage(i)).getViewport({ scale: 1 });
            let c = await UI.renderPage(pdf, i, 1.1);
            if (o.gray) { const g = UI.canvas(c.width, c.height), gx = g.getContext('2d'); gx.filter = 'grayscale(1)'; gx.drawImage(c, 0, 0); c = g; }
            const jpg = await out.embedJpg(await (await UI.canvasBlob(c, 'image/jpeg', 0.45)).arrayBuffer());
            out.addPage([vp.width, vp.height]).drawImage(jpg, { x: 0, y: 0, width: vp.width, height: vp.height });
          }
          blob = await pdfBlob(out);
        } else {
          const doc = await ctx.pdflib();
          if (o.level !== 'lossless') await recompressImages(doc, { maxDim: o.level === 'high' ? 1300 : 2000, q: o.level === 'high' ? 0.5 : 0.68, gray: o.gray, onProgress: (p, t) => prog.set(p, t) });
          prog.set(1, 'Saving…');
          blob = await pdfBlob(doc);
        }
        prog.el.remove();
        if (blob.size >= before * 0.98) {
          ctx.out.append(UI.h(`<div class="notice warn">This PDF is already well optimized — we could not make it noticeably smaller (${UI.fmtBytes(blob.size)} vs ${UI.fmtBytes(before)}). ${o.level !== 'extreme' ? 'Try the <strong>Extreme</strong> level for scanned documents.' : ''}</div>`));
          return;
        }
        ctx.out.append(UI.h(`<div class="results"><div class="result"><div class="k">Original</div><div class="v">${UI.fmtBytes(before)}</div></div><div class="result"><div class="k">Compressed</div><div class="v">${UI.fmtBytes(blob.size)}</div></div><div class="result"><div class="k">Saved</div><div class="v" style="color:var(--success)">${Math.round((1 - blob.size / before) * 100)}%</div></div></div>`));
        showResult(ctx, blob, outName(ctx.file, '-compressed'), 'PDF compressed.');
      },
    });
    function hint(v) {
      UI.notice(ctx.extra, {
        lossless: 'Optimizes the PDF structure only. Quality is identical; savings are usually small.',
        medium: 'Recompresses photos and scans inside the PDF. Text stays sharp and selectable. Best for most files.',
        high: 'Stronger photo compression and lower image resolution. Text stays sharp and selectable.',
        extreme: 'Turns every page into a compressed image — the smallest possible file, but text is no longer selectable. Good for scanned documents.',
      }[v.level]);
    }
  });

  Tools.define('pdf-to-jpg', (root, preset) => {
    pdfTool(root, {
      button: 'Convert to images', busy: 'Converting…',
      fields: [
        { id: 'format', label: 'Format', type: 'seg', value: preset.format || 'jpg', options: [['jpg', 'JPG'], ['png', 'PNG']] },
        { id: 'dpi', label: 'Resolution', type: 'select', value: '150', options: [['72', 'Low (72 DPI)'], ['150', 'Medium (150 DPI)'], ['220', 'High (220 DPI)'], ['300', 'Print (300 DPI)']] },
        { id: 'pages', label: 'Pages (blank = all)', type: 'text', value: '', placeholder: 'e.g. 1-3, 5' },
      ],
      async run(ctx, o) {
        const pdf = await ctx.pdfjs();
        const list = o.pages.trim() ? UI.parseRanges(o.pages, pdf.numPages) : Array.from({ length: pdf.numPages }, (_, i) => i + 1);
        if (!list.length) throw new Error('No valid pages selected.');
        const type = o.format === 'png' ? 'image/png' : 'image/jpeg';
        const prog = UI.progress(); ctx.out.append(prog.el);
        const files = [];
        for (const [k, n] of list.entries()) {
          prog.set(k / list.length, `Rendering page ${n}…`);
          const c = await UI.renderPage(pdf, n, (+o.dpi) / 72);
          const blob = await UI.canvasBlob(c, type, 0.92);
          files.push({ name: outName(ctx.file, `-page-${n}`, o.format), blob, thumb: URL.createObjectURL(blob), icon: '🖼️' });
        }
        prog.el.remove();
        ctx.out.append(UI.h(`<div class="notice success">✓ Converted ${files.length} page(s) to ${o.format.toUpperCase()}.</div>`));
        if (files.length === 1) { ctx.out.append(UI.fileRow(files[0])); UI.download(files[0].blob, files[0].name); }
        else showMany(ctx, files, outName(ctx.file, '-images', 'zip'));
      },
    });
  });

  Tools.define('jpg-to-pdf', root => {
    const files = [];
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="file-list"></div>
      <div class="row opts"></div><div class="btn-row"><button class="btn lg go" disabled>Convert to PDF</button></div><div class="err"></div></div>`;
    const $ = UI.q(root);
    const thumbs = new WeakMap();
    const render = fileOrderList($('.file-list'), files, () => { $('.go').disabled = !files.length; }, f => { if (!thumbs.has(f)) thumbs.set(f, URL.createObjectURL(f)); return thumbs.get(f); });
    $('.dz').append(UI.dropzone({ accept: 'image/*', multiple: true, icon: '🖼️', title: 'Choose images', hint: 'JPG, PNG, WebP, GIF, BMP — or paste with Ctrl+V', paste: true, onFiles: fs => { files.push(...fs.filter(f => f.type.startsWith('image/'))); render(); } }));
    const opts = UI.fields($('.opts'), [
      { id: 'size', label: 'Page size', type: 'select', value: 'a4', options: [['a4', 'A4'], ['letter', 'US Letter'], ['legal', 'US Legal'], ['fit', 'Same as image']] },
      { id: 'orient', label: 'Orientation', type: 'select', value: 'auto', options: [['auto', 'Auto'], ['portrait', 'Portrait'], ['landscape', 'Landscape']], show: v => v.size !== 'fit' },
      { id: 'margin', label: 'Margin', type: 'select', value: '20', options: [['0', 'None'], ['20', 'Small'], ['40', 'Large']] },
      { id: 'q', label: 'Image quality', type: 'select', value: '0.92', options: [['0.75', 'Smaller file'], ['0.92', 'High'], ['1', 'Maximum']] },
    ]);
    const SIZES = { a4: [595.28, 841.89], letter: [612, 792], legal: [612, 1008] };
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      const { PDFDocument } = await UI.lib('pdflib');
      const o = opts.get(), doc = await PDFDocument.create(), m = +o.margin;
      for (const f of files) {
        const img = await UI.loadImage(f);
        const c = UI.canvas(img.naturalWidth, img.naturalHeight), x = c.getContext('2d');
        const png = f.type === 'image/png';
        if (!png) { x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); }
        x.drawImage(img, 0, 0);
        const bytes = await (await UI.canvasBlob(c, png ? 'image/png' : 'image/jpeg', +o.q)).arrayBuffer();
        const emb = png ? await doc.embedPng(bytes) : await doc.embedJpg(bytes);
        let pw, ph;
        if (o.size === 'fit') { pw = img.naturalWidth * 0.75 + m * 2; ph = img.naturalHeight * 0.75 + m * 2; }
        else {
          [pw, ph] = SIZES[o.size];
          const land = o.orient === 'landscape' || (o.orient === 'auto' && img.naturalWidth > img.naturalHeight);
          if (land) [pw, ph] = [ph, pw];
        }
        const s = Math.min((pw - m * 2) / emb.width, (ph - m * 2) / emb.height, o.size === 'fit' ? Infinity : 10);
        const w = emb.width * s, h = emb.height * s;
        doc.addPage([pw, ph]).drawImage(emb, { x: (pw - w) / 2, y: (ph - h) / 2, width: w, height: h });
      }
      const blob = await pdfBlob(doc);
      UI.download(blob, files.length === 1 ? UI.baseName(files[0].name) + '.pdf' : 'images.pdf');
      UI.notice($('.err'), `✓ Created a ${files.length}-page PDF (${UI.fmtBytes(blob.size)}).`, 'success');
    }, 'Creating PDF…', $('.err'));
  });

  Tools.define('pdf-to-word', root => {
    pdfTool(root, {
      button: 'Convert to Word', busy: 'Converting…',
      async run(ctx) {
        const pdf = await ctx.pdfjs();
        const D = await UI.lib('docx');
        const prog = UI.progress(); ctx.out.append(prog.el);
        const children = []; let chars = 0;
        for (let n = 1; n <= pdf.numPages; n++) {
          prog.set((n - 1) / pdf.numPages, `Reading page ${n} of ${pdf.numPages}…`);
          const page = await pdf.getPage(n);
          const tc = await page.getTextContent();
          const items = tc.items.filter(i => i.str !== undefined).map(i => ({ s: i.str, x: i.transform[4], y: i.transform[5], w: i.width || 0, h: Math.abs(i.transform[3]) || i.height || 10, eol: i.hasEOL, font: (tc.styles[i.fontName] || {}).fontFamily || '' }));
          const lines = [];
          for (const it of items) {
            const ln = lines.find(l => Math.abs(l.y - it.y) < Math.max(1.5, Math.min(it.h, l.h0) * 0.4));
            if (ln) ln.items.push(it); else lines.push({ y: it.y, h0: it.h, items: [it] });
          }
          lines.sort((a, b) => b.y - a.y);
          lines.forEach(l => { l.items.sort((a, b) => a.x - b.x); l.text = l.items.map((i, k) => { const p = l.items[k - 1]; const gap = p ? i.x - (p.x + p.w) : 0; return (p && gap > Math.min(i.h, p.h) * 0.15 && !/s$/.test(p.s) && !/^s/.test(i.s) ? ' ' : '') + i.s; }).join('').replace(/\s+/g, ' ').trim(); l.h = Math.max(...l.items.map(i => i.h)); l.x = l.items[0].x; });
          const body = lines.filter(l => l.text);
          const sizes = body.map(l => l.h).sort((a, b) => a - b);
          const med = sizes[Math.floor(sizes.length / 2)] || 11;
          let para = null;
          const flush = () => { if (!para) return; const heading = para.h > med * 1.25; children.push(new D.Paragraph({ children: [new D.TextRun({ text: para.text, bold: heading, size: Math.round(Math.min(48, Math.max(16, para.h * 2))) })], spacing: { after: 160 }, heading: heading ? (para.h > med * 1.6 ? D.HeadingLevel.HEADING_1 : D.HeadingLevel.HEADING_2) : undefined })); chars += para.text.length; para = null; };
          let prevY = null;
          for (const l of body) {
            const gap = prevY == null ? 0 : prevY - l.y;
            const newPara = !para || gap > l.h * 1.7 || Math.abs(l.h - para.h) > 1.5 || /^[•\-–▪●]\s?/.test(l.text);
            if (newPara) { flush(); para = { text: l.text, h: l.h }; } else para.text += (para.text.endsWith('-') ? '' : ' ') + l.text;
            prevY = l.y;
          }
          flush();
          if (n < pdf.numPages) children.push(new D.Paragraph({ children: [new D.PageBreak()] }));
        }
        prog.el.remove();
        if (chars < 20) throw new Error('No selectable text was found. This PDF is probably scanned — use the Image to Text (OCR) tool to extract its text first.');
        const doc = new D.Document({ creator: 'WebToolNest', styles: { default: { document: { run: { font: 'Calibri' } } } }, sections: [{ children }] });
        const blob = await D.Packer.toBlob(doc);
        showResult(ctx, blob, outName(ctx.file, '', 'docx'), 'Converted to Word.');
        ctx.out.append(UI.h('<p class="small muted">Text, headings and paragraphs are converted. Complex layouts, tables and images may need small manual touch-ups.</p>'));
      },
    });
  });

  Tools.define('word-to-pdf', root => {
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="err"></div>
      <div class="ready stack" hidden><div class="btn-row"><button class="btn lg print">⬇ Save as PDF</button><button class="btn ghost again">Choose another file</button></div>
      <p class="small muted">In the print window, set <strong>Destination</strong> to <strong>"Save as PDF"</strong>, then click Save. Tip: turn off "Headers and footers" in More settings.</p>
      <div class="preview" style="display:block;max-height:640px;overflow:auto;padding:12px;background:#e5e7eb"><div class="doc"></div></div></div></div>`;
    const $ = UI.q(root);
    let name = 'document';
    const dz = UI.dropzone({
      accept: '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document', icon: '📝', title: 'Choose a Word file (.docx)',
      onFiles: ([f]) => UI.busy(null, async () => {
        if (!/\.docx$/i.test(f.name)) throw new Error(/\.doc$/i.test(f.name) ? 'Old .doc files are not supported. Open it in Word and "Save As" .docx first.' : 'Please choose a .docx file.');
        name = UI.baseName(f.name);
        const docx = await UI.lib('docxpreview');
        $('.doc').innerHTML = '';
        await docx.renderAsync(await f.arrayBuffer(), $('.doc'), null, { inWrapper: true, breakPages: true, ignoreLastRenderedPageBreak: true, experimental: true, useBase64URL: true });
        $('.ready').hidden = false; dz.hidden = true;
      }, '', $('.err')),
    });
    $('.dz').append(dz);
    $('.again').onclick = () => { dz.hidden = false; $('.ready').hidden = true; dz.pick(); };
    $('.print').onclick = () => {
      const sec = $('.doc section.docx');
      const w = sec ? sec.style.width || '210mm' : '210mm', h = sec ? sec.style.minHeight || '297mm' : '297mm';
      const styles = [...document.querySelectorAll('style')].filter(s => /docx/.test(s.textContent)).map(s => s.outerHTML).join('');
      const fr = document.createElement('iframe');
      fr.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
      document.body.appendChild(fr);
      const d = fr.contentDocument;
      d.open();
      d.write(`<!doctype html><html><head><title>${esc(name)}</title>${styles}<style>@page{size:${w} ${h};margin:0}html,body{margin:0;padding:0;background:#fff}.docx-wrapper{background:none!important;padding:0!important;display:block!important}.docx-wrapper>section.docx{box-shadow:none!important;margin:0!important;page-break-after:always;break-after:page}</style></head><body>${$('.doc').innerHTML}</body></html>`);
      d.close();
      setTimeout(() => { fr.contentWindow.focus(); fr.contentWindow.print(); setTimeout(() => fr.remove(), 2000); }, 400);
    };
  });

  Tools.define('rotate-pdf', root => {
    pdfTool(root, {
      button: 'Rotate PDF', busy: 'Rotating…',
      fields: [
        { id: 'angle', label: 'Rotation', type: 'seg', value: '90', options: [['90', '↻ 90° right'], ['180', '180°'], ['270', '↺ 90° left']] },
        { id: 'which', label: 'Pages', type: 'select', value: 'all', options: [['all', 'All pages'], ['odd', 'Odd pages'], ['even', 'Even pages'], ['custom', 'Custom pages']] },
        { id: 'pages', label: 'Custom pages', type: 'text', value: '1', placeholder: 'e.g. 1, 3-5', show: v => v.which === 'custom' },
      ],
      async run(ctx, o) {
        const { degrees } = await UI.lib('pdflib');
        const doc = await ctx.pdflib(), n = doc.getPageCount();
        const sel = o.which === 'custom' ? UI.parseRanges(o.pages, n) : Array.from({ length: n }, (_, i) => i + 1).filter(p => o.which === 'all' || (o.which === 'odd' ? p % 2 : !(p % 2)));
        if (!sel.length) throw new Error('No valid pages selected.');
        sel.forEach(p => { const pg = doc.getPage(p - 1); pg.setRotation(degrees((pg.getRotation().angle + +o.angle) % 360)); });
        showResult(ctx, await pdfBlob(doc), outName(ctx.file, '-rotated'), `Rotated ${sel.length} page(s).`);
      },
    });
  });

  Tools.define('organize-pdf', root => {
    let state = [];
    const ctx = pdfTool(root, {
      button: 'Save PDF', busy: 'Saving…',
      async onFile(ctx) {
        const pdf = await ctx.pdfjs();
        state = Array.from({ length: pdf.numPages }, (_, i) => ({ i, rot: 0, del: false }));
        ctx.extra.innerHTML = '<p class="small muted">Drag pages to reorder them, or use the buttons. ↻ rotates, ✕ removes a page.</p><div class="thumbs"></div>';
        const grid = ctx.extra.querySelector('.thumbs');
        const canvases = [];
        for (let i = 1; i <= Math.min(pdf.numPages, 300); i++) canvases.push(await UI.renderPage(pdf, i, 0.35));
        let dragFrom = null;
        const draw = () => {
          grid.innerHTML = '';
          state.forEach((s, k) => {
            const card = UI.h(`<div class="thumb-card${s.del ? ' removed' : ''}" draggable="true"><div class="tc-label">Page ${s.i + 1}</div><div class="tc-actions"><button title="Move left">←</button><button title="Rotate">↻</button><button title="${s.del ? 'Restore' : 'Delete'}">${s.del ? '↺' : '✕'}</button><button title="Move right">→</button></div></div>`);
            const cv = canvases[s.i]; const img = new Image(); img.src = cv ? cv.toDataURL('image/jpeg', 0.7) : '';
            img.style.transform = `rotate(${s.rot}deg)`; img.style.transition = 'transform .2s';
            card.prepend(img);
            const [l, r, d, rt] = card.querySelectorAll('button');
            l.onclick = () => { if (k) { [state[k - 1], state[k]] = [state[k], state[k - 1]]; draw(); } };
            rt.onclick = () => { if (k < state.length - 1) { [state[k + 1], state[k]] = [state[k], state[k + 1]]; draw(); } };
            r.onclick = () => { s.rot = (s.rot + 90) % 360; draw(); };
            d.onclick = () => { s.del = !s.del; draw(); };
            card.addEventListener('dragstart', () => { dragFrom = k; card.style.opacity = '.4'; });
            card.addEventListener('dragend', () => { card.style.opacity = ''; });
            card.addEventListener('dragover', e => e.preventDefault());
            card.addEventListener('drop', e => { e.preventDefault(); if (dragFrom == null || dragFrom === k) return; const [m] = state.splice(dragFrom, 1); state.splice(k, 0, m); dragFrom = null; draw(); });
            grid.append(card);
          });
        };
        draw();
      },
      async run(ctx) {
        const { PDFDocument, degrees } = await UI.lib('pdflib');
        const keep = state.filter(s => !s.del);
        if (!keep.length) throw new Error('You removed every page. Keep at least one page.');
        const src = await ctx.pdflib(), out = await PDFDocument.create();
        const pages = await out.copyPages(src, keep.map(s => s.i));
        pages.forEach((p, k) => { if (keep[k].rot) p.setRotation(degrees((p.getRotation().angle + keep[k].rot) % 360)); out.addPage(p); });
        showResult(ctx, await pdfBlob(out), outName(ctx.file, '-organized'), `Saved ${keep.length} page(s).`);
      },
    });
    return ctx;
  });

  Tools.define('delete-pdf-pages', root => {
    pdfTool(root, {
      button: 'Delete pages', busy: 'Removing…',
      fields: [{ id: 'pages', label: 'Pages to delete', type: 'text', value: '', placeholder: 'e.g. 2, 5-7, 10', cls: 'grow' }],
      async run(ctx, o) {
        const doc = await ctx.pdflib(), n = doc.getPageCount();
        const del = UI.parseRanges(o.pages, n);
        if (!del.length) throw new Error(`Enter the page numbers to delete (1 to ${n}).`);
        if (del.length >= n) throw new Error('You cannot delete every page.');
        del.slice().reverse().forEach(p => doc.removePage(p - 1));
        showResult(ctx, await pdfBlob(doc), outName(ctx.file, '-edited'), `Removed ${del.length} page(s); ${n - del.length} remain.`);
      },
    });
  });

  Tools.define('add-page-numbers', root => {
    pdfTool(root, {
      button: 'Add page numbers', busy: 'Numbering…',
      fields: [
        { id: 'pos', label: 'Position', type: 'select', value: 'bc', options: [['bc', 'Bottom center'], ['br', 'Bottom right'], ['bl', 'Bottom left'], ['tc', 'Top center'], ['tr', 'Top right'], ['tl', 'Top left']] },
        { id: 'fmt', label: 'Format', type: 'select', value: '{n}', options: [['{n}', '1'], ['Page {n}', 'Page 1'], ['{n} of {t}', '1 of 10'], ['Page {n} of {t}', 'Page 1 of 10'], ['- {n} -', '- 1 -']] },
        { id: 'start', label: 'Start at', type: 'number', value: 1, min: 0 },
        { id: 'size', label: 'Font size', type: 'number', value: 11, min: 6, max: 48 },
        { id: 'margin', label: 'Margin (pt)', type: 'number', value: 28, min: 0 },
        { id: 'color', label: 'Color', type: 'color', value: '#333333' },
        { id: 'skip', label: 'Skip first page (cover)', type: 'checkbox', value: false },
      ],
      async run(ctx, o) {
        const { StandardFonts, rgb } = await UI.lib('pdflib');
        const doc = await ctx.pdflib(), font = await doc.embedFont(StandardFonts.Helvetica);
        const pages = doc.getPages(), [r, g, b] = [1, 3, 5].map(i => parseInt(o.color.slice(i, i + 2), 16) / 255);
        const counted = pages.length - (o.skip ? 1 : 0);
        pages.forEach((p, i) => {
          if (o.skip && i === 0) return;
          const n = (o.start || 1) + i - (o.skip ? 1 : 0);
          const text = o.fmt.replace('{n}', n).replace('{t}', counted + (o.start || 1) - 1);
          const { x: bx, y: by, width, height } = p.getMediaBox();
          const tw = font.widthOfTextAtSize(text, o.size), m = o.margin;
          const x = bx + (o.pos[1] === 'c' ? (width - tw) / 2 : o.pos[1] === 'r' ? width - m - tw : m);
          const y = by + (o.pos[0] === 'b' ? m : height - m - o.size);
          p.drawText(text, { x, y, size: o.size, font, color: rgb(r, g, b) });
        });
        showResult(ctx, await pdfBlob(doc), outName(ctx.file, '-numbered'), 'Page numbers added.');
      },
    });
  });

  Tools.define('watermark-pdf', root => {
    pdfTool(root, {
      button: 'Add watermark', busy: 'Adding watermark…',
      fields: [
        { id: 'text', label: 'Watermark text', type: 'text', value: 'CONFIDENTIAL', cls: 'grow' },
        { id: 'size', label: 'Font size', type: 'number', value: 60, min: 8, max: 300 },
        { id: 'color', label: 'Color', type: 'color', value: '#e11d48' },
        { id: 'opacity', label: 'Opacity', type: 'range', value: 25, min: 5, max: 100, unit: '%' },
        { id: 'angle', label: 'Angle', type: 'range', value: 45, min: -90, max: 90, unit: '°' },
        { id: 'layout', label: 'Layout', type: 'seg', value: 'center', options: [['center', 'Center'], ['tile', 'Tiled']] },
      ],
      async run(ctx, o) {
        if (!o.text.trim()) throw new Error('Enter the watermark text.');
        const { degrees } = await UI.lib('pdflib');
        const doc = await ctx.pdflib();
        const ti = await textImage(o.text, { size: o.size, color: o.color });
        const img = await doc.embedPng(ti.bytes);
        const th = o.angle * Math.PI / 180, cos = Math.cos(th), sin = Math.sin(th);
        const place = (p, cx, cy) => p.drawImage(img, { x: cx - (ti.w / 2) * cos + (ti.h / 2) * sin, y: cy - (ti.w / 2) * sin - (ti.h / 2) * cos, width: ti.w, height: ti.h, rotate: degrees(o.angle), opacity: o.opacity / 100 });
        doc.getPages().forEach(p => {
          const { x, y, width, height } = p.getMediaBox();
          if (o.layout === 'center') place(p, x + width / 2, y + height / 2);
          else { const sx = ti.w * 0.9 + 60, sy = ti.h * 3 + 40; let row = 0; for (let yy = y + sy / 2; yy < y + height + sy / 2; yy += sy, row++) for (let xx = x + (row % 2 ? 0 : sx / 2); xx < x + width + sx / 2; xx += sx) place(p, xx, yy); }
        });
        showResult(ctx, await pdfBlob(doc), outName(ctx.file, '-watermarked'), 'Watermark added.');
      },
    });
  });

  Tools.define('pdf-to-text', root => {
    pdfTool(root, {
      button: 'Extract text', busy: 'Extracting…',
      fields: [{ id: 'sep', label: 'Add page separators', type: 'checkbox', value: true }],
      async run(ctx, o) {
        const pdf = await ctx.pdfjs(); let text = '';
        for (let n = 1; n <= pdf.numPages; n++) {
          const tc = await (await pdf.getPage(n)).getTextContent();
          let pageText = '';
          let prev = null;
          tc.items.forEach(i => {
            if (prev && !prev.hasEOL && i.str && prev.str && !/\s$/.test(prev.str) && !/^\s/.test(i.str)) {
              if (Math.abs(i.transform[5] - prev.transform[5]) > Math.abs(i.transform[3]) * 0.5) pageText += '\n';
              else if (i.transform[4] - (prev.transform[4] + prev.width) > Math.abs(i.transform[3]) * 0.15) pageText += ' ';
            }
            pageText += i.str + (i.hasEOL ? '\n' : ''); prev = i;
          });
          text += (o.sep ? `\n----- Page ${n} -----\n` : '\n') + pageText.replace(/[ \t]+\n/g, '\n').trim() + '\n';
        }
        text = text.trim();
        if (text.replace(/-+ Page \d+ -+/g, '').trim().length < 5) throw new Error('No text found. This PDF looks scanned — try the Image to Text (OCR) tool on its pages.');
        const words = (text.match(/\S+/g) || []).length;
        ctx.out.innerHTML = `<div class="notice success">✓ Extracted ${UI.fmt(words, 0)} words from ${pdf.numPages} page(s).</div><textarea class="textarea" style="min-height:320px"></textarea><div class="btn-row"><button class="btn cp">📋 Copy text</button><button class="btn secondary dl">⬇ Download .txt</button></div>`;
        ctx.out.querySelector('textarea').value = text;
        ctx.out.querySelector('.cp').onclick = () => UI.copy(text);
        ctx.out.querySelector('.dl').onclick = () => UI.downloadText(text, outName(ctx.file, '', 'txt'));
      },
    });
  });

  Tools.define('sign-pdf', root => {
    let pageNo = 1, placements = [], sigURL = null, sigRatio = 3;
    const ctx = pdfTool(root, {
      button: 'Apply signature & download', busy: 'Signing…',
      async onFile(ctx) {
        placements = []; pageNo = 1;
        ctx.extra.innerHTML = `<div class="grid-2" style="align-items:start">
          <div class="stack">
            <div class="seg-wrap"></div>
            <div class="draw stack"><canvas class="pad" style="width:100%;height:170px;border:1px dashed var(--border);border-radius:10px;background:#fff"></canvas>
              <div class="btn-row"><input type="color" class="pc" value="#1d3a8a"><button class="btn sm ghost clr">Clear</button><span class="small muted">Draw your signature above</span></div></div>
            <div class="type stack" hidden><input class="input tname" placeholder="Type your name" value=""><select class="select tfont"><option>Dancing Script</option><option>Great Vibes</option><option>Caveat</option><option>Sacramento</option></select></div>
            <div class="upl" hidden></div>
            <div class="notice small">Then <strong>click on the page</strong> to place your signature. Drag to move it, use the slider to resize. You can place it on several pages.</div>
            <div class="field"><label>Signature size</label><input type="range" class="sz" min="8" max="60" value="26"></div>
          </div>
          <div class="stack"><div class="row" style="align-items:center"><button class="btn sm ghost prev">‹ Prev</button><span class="small pg"></span><button class="btn sm ghost next">Next ›</button></div>
            <div class="stage" style="position:relative;width:100%;max-width:560px;border:1px solid var(--border);box-shadow:var(--shadow);cursor:crosshair;line-height:0"></div></div></div>`;
        const $ = UI.q(ctx.extra);
        const pad = UI.signaturePad($('.pad'), { color: '#1d3a8a', width: 2.6 });
        $('.pc').oninput = e => { pad.color = e.target.value; };
        $('.clr').onclick = () => pad.clear();
        let mode = 'draw', upImg = null;
        $('.seg-wrap').append(UI.seg([['draw', '✍️ Draw'], ['type', '⌨️ Type'], ['upload', '🖼️ Upload']], 'draw', m => { mode = m; $('.draw').hidden = m !== 'draw'; $('.type').hidden = m !== 'type'; $('.upl').hidden = m !== 'upload'; if (m === 'draw') pad.fit(); }));
        $('.upl').append(UI.dropzone({ accept: 'image/*', compact: true, icon: '🖼️', title: 'Upload signature image', hint: 'PNG with transparent background works best', onFiles: async ([f]) => { upImg = await UI.loadImage(f); UI.toast('Signature image loaded'); } }));
        const makeSig = async () => {
          let c;
          if (mode === 'draw') { if (pad.isEmpty()) throw new Error('Draw your signature first.'); c = pad.trimmed(); }
          else if (mode === 'type') {
            const name = $('.tname').value.trim(); if (!name) throw new Error('Type your name first.');
            const fam = $('.tfont').value; await UI.font(fam);
            c = UI.canvas(10, 10); let x = c.getContext('2d'); x.font = `110px "${fam}"`;
            c.width = x.measureText(name).width + 40; c.height = 170; x = c.getContext('2d'); x.font = `110px "${fam}"`; x.fillStyle = $('.pc').value; x.textBaseline = 'middle'; x.fillText(name, 20, 85);
            c = UI.trimCanvas(c);
          } else { if (!upImg) throw new Error('Upload a signature image first.'); c = UI.canvas(upImg.naturalWidth, upImg.naturalHeight); c.getContext('2d').drawImage(upImg, 0, 0); }
          sigRatio = c.width / c.height; sigURL = c.toDataURL('image/png');
        };
        const pdf = await ctx.pdfjs();
        const stage = $('.stage');
        const showPage = async () => {
          $('.pg').textContent = `Page ${pageNo} of ${pdf.numPages}`;
          const c = await UI.renderPage(pdf, pageNo, 1.4);
          c.style.width = '100%'; c.style.height = 'auto';
          stage.innerHTML = ''; stage.append(c);
          placements.filter(p => p.page === pageNo).forEach(addOverlay);
        };
        const addOverlay = (p) => {
          const im = UI.h(`<div style="position:absolute;left:${p.x * 100}%;top:${p.y * 100}%;width:${p.w * 100}%;cursor:move;outline:1px dashed #4f46e5;line-height:0"><img src="${p.url}" style="width:100%;pointer-events:none"><button style="position:absolute;top:-10px;right:-10px;width:22px;height:22px;border-radius:50%;border:0;background:#ef4444;color:#fff;cursor:pointer;line-height:1">×</button></div>`);
          im.querySelector('button').onclick = e => { e.stopPropagation(); placements = placements.filter(x => x !== p); im.remove(); };
          im.addEventListener('pointerdown', e => {
            if (e.target.tagName === 'BUTTON') return;
            e.preventDefault(); e.stopPropagation(); im.setPointerCapture(e.pointerId);
            const r = stage.getBoundingClientRect(), sx = e.clientX, sy = e.clientY, ox = p.x, oy = p.y;
            const mv = ev => { p.x = UI.clamp(ox + (ev.clientX - sx) / r.width, 0, 1 - p.w); p.y = UI.clamp(oy + (ev.clientY - sy) / r.height, 0, 1); im.style.left = p.x * 100 + '%'; im.style.top = p.y * 100 + '%'; };
            const up = () => { im.removeEventListener('pointermove', mv); im.removeEventListener('pointerup', up); };
            im.addEventListener('pointermove', mv); im.addEventListener('pointerup', up);
          });
          im.addEventListener('click', e => e.stopPropagation());
          stage.append(im);
        };
        stage.addEventListener('click', e => UI.busy(null, async () => {
          await makeSig();
          const r = stage.getBoundingClientRect(), w = +$('.sz').value / 100;
          const p = { page: pageNo, url: sigURL, ratio: sigRatio, w, x: UI.clamp((e.clientX - r.left) / r.width - w / 2, 0, 1 - w), y: UI.clamp((e.clientY - r.top) / r.height - (w * r.width / sigRatio) / r.height / 2, 0, 1) };
          placements.push(p); addOverlay(p);
        }));
        $('.prev').onclick = () => { if (pageNo > 1) { pageNo--; showPage(); } };
        $('.next').onclick = () => { if (pageNo < pdf.numPages) { pageNo++; showPage(); } };
        await showPage();
      },
      async run(ctx) {
        if (!placements.length) throw new Error('Click on the page to place your signature first.');
        const doc = await ctx.pdflib();
        const cache = {};
        for (const p of placements) {
          const img = cache[p.url] || (cache[p.url] = await doc.embedPng(await (await fetch(p.url)).arrayBuffer()));
          const page = doc.getPage(p.page - 1), { x: bx, y: by, width, height } = page.getMediaBox();
          const w = p.w * width, h = w / p.ratio;
          page.drawImage(img, { x: bx + p.x * width, y: by + height - p.y * height - h, width: w, height: h });
        }
        showResult(ctx, await pdfBlob(doc), outName(ctx.file, '-signed'), `Signature applied in ${placements.length} place(s).`);
      },
    });
    return ctx;
  });
})();

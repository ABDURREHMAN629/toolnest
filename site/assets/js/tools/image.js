(function () {
  const { esc } = UI;
  const FORMAT_OPTS = [['image/jpeg', 'JPG'], ['image/png', 'PNG'], ['image/webp', 'WebP']];
  const canEncode = t => ['image/jpeg', 'image/png', 'image/webp'].includes(t);

  function resample(src, w, h, bg) {
    w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h));
    let cur = src, cw = src.naturalWidth || src.width, ch = src.naturalHeight || src.height;
    while (cw / 2 >= w * 1.05 && ch / 2 >= h * 1.05) {
      const c = UI.canvas(cw / 2, ch / 2), x = c.getContext('2d');
      x.imageSmoothingQuality = 'high'; x.drawImage(cur, 0, 0, c.width, c.height);
      cur = c; cw = c.width; ch = c.height;
    }
    const out = UI.canvas(w, h), x = out.getContext('2d');
    if (bg) { x.fillStyle = bg; x.fillRect(0, 0, w, h); }
    x.imageSmoothingQuality = 'high'; x.drawImage(cur, 0, 0, w, h);
    return out;
  }
  function flatten(c, bg = '#ffffff') {
    const o = UI.canvas(c.width, c.height), x = o.getContext('2d');
    x.fillStyle = bg; x.fillRect(0, 0, o.width, o.height); x.drawImage(c, 0, 0); return o;
  }
  async function encode(c, type, q = 0.9, pngColors = 0) {
    if (type === 'image/jpeg') c = flatten(c);
    if (type === 'image/png' && pngColors) {
      const UPNG = await UI.lib('upng');
      const d = c.getContext('2d').getImageData(0, 0, c.width, c.height);
      return new Blob([UPNG.encode([d.data.buffer], c.width, c.height, pngColors)], { type: 'image/png' });
    }
    return UI.canvasBlob(c, type, q);
  }
  const pct = (a, b) => { const p = Math.round((1 - b / a) * 100); return p > 0 ? `<span style="color:var(--success);font-weight:700">−${p}%</span>` : `<span class="muted">+${-p}%</span>`; };

  function batchTool(root, spec) {
    const items = [];
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="file-list in-list"></div>
      ${spec.fields ? '<div class="row opts"></div>' : ''}<div class="extra"></div>
      <div class="btn-row"><button class="btn lg go" disabled>${esc(spec.button)}</button><button class="btn ghost clear" hidden>Clear all</button></div>
      <div class="err"></div><div class="out stack"></div></div>`;
    const $ = UI.q(root);
    const ctx = { $, extra: $('.extra') };
    const form = spec.fields ? UI.fields($('.opts'), spec.fields, v => spec.onOpts && spec.onOpts(v, ctx)) : null;
    ctx.form = form; ctx.opts = () => (form ? form.get() : {});
    const renderIn = () => {
      const list = $('.in-list'); list.innerHTML = '';
      items.forEach((it, i) => {
        const row = UI.fileRow({ name: it.file.name, sub: UI.fmtBytes(it.file.size), thumb: it.thumb, icon: '🖼️', extra: '<button class="btn sm ghost" title="Remove">✕</button>' });
        row.querySelector('button').onclick = () => { items.splice(i, 1); renderIn(); };
        list.append(row);
      });
      $('.go').disabled = !items.length; $('.clear').hidden = items.length < 2;
    };
    $('.dz').append(UI.dropzone({
      accept: spec.accept || 'image/*', multiple: true, icon: '🖼️', title: spec.title || 'Choose images', hint: spec.hint || 'or drag & drop · paste with Ctrl+V · batch supported', paste: true,
      onFiles: fs => { fs.forEach(f => items.push({ file: f, thumb: spec.noThumb ? '' : URL.createObjectURL(f) })); renderIn(); $('.out').innerHTML = ''; },
    }));
    $('.clear').onclick = () => { items.length = 0; renderIn(); $('.out').innerHTML = ''; };
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      const out = $('.out'); out.innerHTML = '';
      const o = ctx.opts(), results = [], errors = [];
      const prog = UI.progress(); out.append(prog.el);
      let tin = 0, tout = 0;
      for (const [k, it] of items.entries()) {
        prog.set(k / items.length, `Processing ${k + 1} of ${items.length}: ${it.file.name}`);
        try {
          const r = await spec.process(it.file, o, (p, t) => prog.set((k + p) / items.length, t));
          (Array.isArray(r) ? r : [r]).forEach(x => { results.push(x); tin += x.orig || it.file.size; tout += x.blob.size; });
        } catch (e) { console.error(e); errors.push(`${esc(it.file.name)}: ${esc(e.message)}`); }
      }
      prog.el.remove();
      if (errors.length) out.append(UI.h(`<div class="notice error">⚠️ ${errors.join('<br>')}</div>`));
      if (!results.length) return;
      out.append(UI.h(`<div class="notice success">✓ ${results.length} image(s) ready.${spec.savings ? ` Total: ${UI.fmtBytes(tin)} → <strong>${UI.fmtBytes(tout)}</strong> ${pct(tin, tout)}` : ''}</div>`));
      if (results.length > 1) {
        const b = UI.h('<div class="btn-row"><button class="btn success">⬇ Download all (ZIP)</button></div>');
        b.querySelector('button').onclick = e => UI.busy(e.currentTarget, () => UI.zip(results, spec.zipName || 'images.zip'), 'Zipping…');
        out.append(b);
      }
      const list = UI.h('<div class="file-list"></div>');
      results.forEach(r => list.append(UI.fileRow({ name: r.name, thumb: URL.createObjectURL(r.blob), blob: r.blob, sub: `${r.dim ? r.dim + ' · ' : ''}${r.orig ? UI.fmtBytes(r.orig) + ' → ' : ''}<strong>${UI.fmtBytes(r.blob.size)}</strong> ${r.orig && spec.savings ? pct(r.orig, r.blob.size) : ''}${r.note ? ' · ' + esc(r.note) : ''}` })));
      out.append(list);
      if (results.length === 1) UI.download(results[0].blob, results[0].name);
    }, spec.busy || 'Processing…', $('.err'));
    return ctx;
  }

  function singleImage(root, { title, accept, onImage, icon }) {
    root.innerHTML = '<div class="stack"><div class="dz"></div><div class="work stack" hidden></div><div class="err"></div></div>';
    const $ = UI.q(root);
    const dz = UI.dropzone({
      accept: accept || 'image/*', icon: icon || '🖼️', title: title || 'Choose an image', hint: 'or drag & drop · paste with Ctrl+V', paste: true,
      onFiles: ([f]) => UI.busy(null, async () => {
        const img = await UI.loadImage(f);
        $('.dz').hidden = true; $('.work').hidden = false;
        await onImage(img, f, $('.work'), () => { $('.dz').hidden = false; dz.pick(); });
      }, '', $('.err')),
    });
    $('.dz').append(dz);
  }
  const typeOf = f => (canEncode(f.type) ? f.type : 'image/png');

  Tools.define('compress-image', root => {
    batchTool(root, {
      button: 'Compress images', busy: 'Compressing…', savings: true, zipName: 'compressed-images.zip',
      fields: [
        { id: 'mode', label: 'Compression mode', type: 'seg', value: 'quality', options: [['quality', 'By quality'], ['target', 'Target size (KB)']] },
        { id: 'q', label: 'Quality', type: 'range', value: 70, min: 10, max: 100, unit: '%', show: v => v.mode === 'quality' },
        { id: 'kb', label: 'Max size per image', type: 'number', value: 100, min: 5, unit: 'KB', show: v => v.mode === 'target' },
        { id: 'format', label: 'Output format', type: 'select', value: 'same', options: [['same', 'Same as input'], ...FORMAT_OPTS] },
        { id: 'maxw', label: 'Max width (optional)', type: 'number', value: '', placeholder: 'e.g. 1920', unit: 'px' },
      ],
      async process(file, o) {
        const img = await UI.loadImage(file);
        let w = img.naturalWidth, h = img.naturalHeight;
        if (o.maxw > 0 && w > o.maxw) { h = h * o.maxw / w; w = o.maxw; }
        const type = o.format === 'same' ? typeOf(file) : o.format;
        let c = resample(img, w, h), blob;
        if (o.mode === 'target') {
          const target = Math.max(1, o.kb || 100) * 1024;
          for (let attempt = 0; attempt < 10; attempt++) {
            if (type === 'image/png') {
              for (const colors of [256, 128, 64, 32, 16]) { blob = await encode(c, type, 1, colors); if (blob.size <= target) break; }
            } else {
              let lo = 0.05, hi = 0.95, best = null;
              for (let i = 0; i < 7; i++) { const m = (lo + hi) / 2; const b = await encode(c, type, m); if (b.size <= target) { best = b; lo = m; } else hi = m; }
              blob = best || await encode(c, type, 0.05);
            }
            if (blob.size <= target) break;
            c = resample(c, c.width * 0.8, c.height * 0.8);
          }
        } else {
          const colors = o.q >= 95 ? 0 : o.q >= 60 ? 256 : o.q >= 40 ? 128 : o.q >= 25 ? 64 : 32;
          blob = await encode(c, type, o.q / 100, type === 'image/png' ? colors : 0);
        }
        let note = '';
        if (o.mode === 'quality' && blob.size >= file.size && type === file.type && c.width === img.naturalWidth) { blob = file; note = 'already optimized — kept original'; }
        if (o.mode === 'target' && blob.size > Math.max(1, o.kb) * 1024) note = 'could not reach target size';
        return { blob, orig: file.size, name: `${UI.baseName(file.name)}-compressed.${UI.ext(type)}`, dim: `${c.width}×${c.height}`, note };
      },
    });
  });

  const PRESETS = [['custom', 'Custom size'], ['1080x1080', 'Instagram post (1080×1080)'], ['1080x1350', 'Instagram portrait (1080×1350)'], ['1080x1920', 'Story / Reels / TikTok (1080×1920)'], ['1280x720', 'YouTube thumbnail (1280×720)'], ['2560x1440', 'YouTube banner (2560×1440)'], ['820x312', 'Facebook cover (820×312)'], ['1200x630', 'Facebook / OG share (1200×630)'], ['1500x500', 'X / Twitter header (1500×500)'], ['1584x396', 'LinkedIn banner (1584×396)'], ['400x400', 'Profile picture (400×400)'], ['1920x1080', 'Full HD (1920×1080)'], ['3840x2160', '4K UHD (3840×2160)']];
  Tools.define('resize-image', root => {
    let lastPreset = 'custom';
    batchTool(root, {
      button: 'Resize images', busy: 'Resizing…', zipName: 'resized-images.zip',
      fields: [
        { id: 'mode', label: 'Resize by', type: 'seg', value: 'px', options: [['px', 'Pixels'], ['pct', 'Percentage']], full: true },
        { id: 'preset', label: 'Preset', type: 'select', value: 'custom', options: PRESETS, show: v => v.mode === 'px', cls: 'grow' },
        { id: 'w', label: 'Width', type: 'number', value: 1280, unit: 'px', show: v => v.mode === 'px' },
        { id: 'h', label: 'Height', type: 'number', value: '', placeholder: 'auto', unit: 'px', show: v => v.mode === 'px' },
        { id: 'fit', label: 'When both are set', type: 'select', value: 'fit', options: [['fit', 'Fit inside (keep ratio)'], ['cover', 'Crop to exact size'], ['stretch', 'Stretch to exact size']], show: v => v.mode === 'px' },
        { id: 'pct', label: 'Scale', type: 'range', value: 50, min: 5, max: 300, unit: '%', show: v => v.mode === 'pct' },
        { id: 'format', label: 'Format', type: 'select', value: 'same', options: [['same', 'Same as input'], ...FORMAT_OPTS] },
        { id: 'q', label: 'Quality', type: 'range', value: 90, min: 10, max: 100, unit: '%' },
      ],
      onOpts(v, ctx) {
        if (v.preset !== lastPreset) { lastPreset = v.preset; if (v.preset !== 'custom') { const [w, h] = v.preset.split('x'); ctx.form.set('w', w); ctx.form.set('h', h); ctx.form.set('fit', 'cover'); } }
      },
      hint: 'Leave height empty to keep the aspect ratio',
      async process(file, o) {
        const img = await UI.loadImage(file);
        const W0 = img.naturalWidth, H0 = img.naturalHeight, type = o.format === 'same' ? typeOf(file) : o.format;
        let c;
        if (o.mode === 'pct') c = resample(img, W0 * o.pct / 100, H0 * o.pct / 100);
        else {
          let w = o.w > 0 ? o.w : 0, h = o.h > 0 ? o.h : 0;
          if (!w && !h) throw new Error('Enter a width or height.');
          if (!w) w = W0 * h / H0; else if (!h) h = H0 * w / W0;
          else if (o.fit === 'fit') { const s = Math.min(w / W0, h / H0); w = W0 * s; h = H0 * s; }
          else if (o.fit === 'cover') {
            const s = Math.max(w / W0, h / H0), big = resample(img, W0 * s, H0 * s);
            c = UI.canvas(w, h); c.getContext('2d').drawImage(big, (c.width - big.width) / 2, (c.height - big.height) / 2);
          }
          if (!c) c = resample(img, w, h);
        }
        const blob = await encode(c, type, o.q / 100);
        return { blob, orig: file.size, name: `${UI.baseName(file.name)}-${c.width}x${c.height}.${UI.ext(type)}`, dim: `${W0}×${H0} → ${c.width}×${c.height}` };
      },
    });
  });

  Tools.define('image-converter', (root, preset) => {
    const ctx = batchTool(root, {
      button: 'Convert images', busy: 'Converting…', zipName: 'converted-images.zip', accept: preset.accept || 'image/*',
      fields: [
        { id: 'to', label: 'Convert to', type: 'seg', value: preset.to || 'image/jpeg', options: FORMAT_OPTS },
        { id: 'q', label: 'Quality', type: 'range', value: 92, min: 10, max: 100, unit: '%', show: v => v.to !== 'image/png' },
        { id: 'bg', label: 'Background (for transparent areas)', type: 'color', value: '#ffffff', show: v => v.to === 'image/jpeg' },
      ],
      async process(file, o) {
        const img = await UI.loadImage(file);
        let c = resample(img, img.naturalWidth, img.naturalHeight);
        if (o.to === 'image/jpeg') c = flatten(c, o.bg);
        const blob = await encode(c, o.to, o.q / 100);
        return { blob, orig: file.size, name: `${UI.baseName(file.name)}.${UI.ext(o.to)}`, dim: `${c.width}×${c.height}` };
      },
    });
    if (preset.accept) UI.notice(ctx.extra, `Tip: you can also convert other formats here — just choose a different output.`);
  });

  Tools.define('heic-to-jpg', root => {
    batchTool(root, {
      button: 'Convert HEIC', busy: 'Converting…', accept: '.heic,.heif,image/heic,image/heif', title: 'Choose HEIC / HEIF photos', noThumb: true, zipName: 'converted-photos.zip',
      hint: 'Photos from iPhone and iPad · batch supported',
      fields: [
        { id: 'to', label: 'Convert to', type: 'seg', value: 'image/jpeg', options: [['image/jpeg', 'JPG'], ['image/png', 'PNG']] },
        { id: 'q', label: 'Quality', type: 'range', value: 92, min: 10, max: 100, unit: '%', show: v => v.to === 'image/jpeg' },
      ],
      async process(file, o) {
        const heic2any = await UI.lib('heic2any');
        let out;
        try { out = await heic2any({ blob: file, toType: o.to, quality: o.q / 100, multiple: true }); }
        catch (e) { throw new Error('Could not convert — the file may not be a valid HEIC image.'); }
        const list = Array.isArray(out) ? out : [out];
        return list.map((blob, i) => ({ blob, orig: file.size / list.length, name: `${UI.baseName(file.name)}${list.length > 1 ? '-' + (i + 1) : ''}.${UI.ext(o.to)}` }));
      },
    });
  });

  Tools.define('crop-image', root => {
    singleImage(root, {
      onImage(img, file, work, change) {
        const W = img.naturalWidth, H = img.naturalHeight;
        work.innerHTML = `<div class="row" style="align-items:center"><div class="asp"></div></div>
          <div style="display:flex;justify-content:center"><div class="area" style="position:relative;line-height:0;user-select:none;touch-action:none;overflow:hidden;max-width:100%">
            <img class="src" src="${img.src}" style="max-width:100%;max-height:540px;display:block" draggable="false">
            <div class="box" style="position:absolute;border:2px solid #fff;box-shadow:0 0 0 9999px rgba(0,0,0,.55);cursor:move;outline:1px solid rgba(0,0,0,.3)">
              ${['nw', 'ne', 'sw', 'se'].map(h => `<span data-h="${h}" style="position:absolute;width:16px;height:16px;background:#fff;border:2px solid #4f46e5;border-radius:50%;${h[0] === 'n' ? 'top' : 'bottom'}:-9px;${h[1] === 'w' ? 'left' : 'right'}:-9px;cursor:${h}-resize"></span>`).join('')}
            </div></div></div>
          <div class="row"><div class="field small"><label>Width</label><input class="input cw" type="number"></div><div class="field small"><label>Height</label><input class="input ch" type="number"></div>
          <div class="field small"><label>Format</label><select class="select fmt">${FORMAT_OPTS.map(([v, l]) => `<option value="${v}" ${v === typeOf(file) ? 'selected' : ''}>${l}</option>`).join('')}</select></div></div>
          <div class="btn-row"><button class="btn lg go">✂️ Crop & download</button><button class="btn ghost chg">Choose another image</button></div>`;
        const $ = UI.q(work), box = $('.box'), im = $('.src');
        let ratio = 0, circle = false, r = { x: W * 0.1, y: H * 0.1, w: W * 0.8, h: H * 0.8 };
        const scale = () => im.clientWidth / W;
        const draw = () => {
          const s = scale();
          Object.assign(box.style, { left: r.x * s + 'px', top: r.y * s + 'px', width: r.w * s + 'px', height: r.h * s + 'px', borderRadius: circle ? '50%' : '0' });
          $('.cw').value = Math.round(r.w); $('.ch').value = Math.round(r.h);
        };
        const fix = () => {
          r.w = UI.clamp(r.w, 10, W); r.h = UI.clamp(r.h, 10, H);
          if (ratio) { r.h = r.w / ratio; if (r.h > H) { r.h = H; r.w = H * ratio; } }
          r.x = UI.clamp(r.x, 0, W - r.w); r.y = UI.clamp(r.y, 0, H - r.h);
        };
        const setRatio = v => {
          circle = v === 'circle'; ratio = v === 'free' ? 0 : circle ? 1 : (([a, b]) => a / b)(v.split(':').map(Number));
          if (ratio) { const cx = r.x + r.w / 2, cy = r.y + r.h / 2; r.w = Math.min(W, H * ratio) * 0.85; r.h = r.w / ratio; r.x = cx - r.w / 2; r.y = cy - r.h / 2; }
          if (circle) $('.fmt').value = 'image/png';
          fix(); draw();
        };
        $('.asp').append(UI.seg([['free', 'Free'], ['1:1', '1:1'], ['4:3', '4:3'], ['3:4', '3:4'], ['16:9', '16:9'], ['9:16', '9:16'], ['3:2', '3:2'], ['circle', '⭕ Circle']], 'free', setRatio));
        box.addEventListener('pointerdown', e => {
          e.preventDefault(); box.setPointerCapture(e.pointerId);
          const mode = e.target.dataset.h || 'move', sx = e.clientX, sy = e.clientY, st = { ...r }, s = scale();
          const mv = ev => {
            const dx = (ev.clientX - sx) / s, dy = (ev.clientY - sy) / s;
            r = { ...st };
            if (mode === 'move') { r.x += dx; r.y += dy; }
            else {
              if (mode.includes('e')) r.w = st.w + dx;
              if (mode.includes('w')) { r.w = st.w - dx; r.x = st.x + dx; }
              if (mode.includes('s')) r.h = st.h + dy;
              if (mode.includes('n')) { r.h = st.h - dy; r.y = st.y + dy; }
              if (ratio) { const nh = r.w / ratio; if (mode.includes('n')) r.y = st.y + st.h - nh; r.h = nh; }
              if (r.x < 0) { r.w += r.x; r.x = 0; } if (r.y < 0) { r.h += r.y; r.y = 0; }
              if (r.x + r.w > W) r.w = W - r.x; if (r.y + r.h > H) r.h = H - r.y;
              if (ratio) { if (r.w / r.h > ratio) r.w = r.h * ratio; else r.h = r.w / ratio; }
            }
            fix(); draw();
          };
          const up = () => { box.removeEventListener('pointermove', mv); box.removeEventListener('pointerup', up); };
          box.addEventListener('pointermove', mv); box.addEventListener('pointerup', up);
        });
        $('.cw').onchange = () => { r.w = +$('.cw').value || r.w; if (ratio) r.h = r.w / ratio; fix(); draw(); };
        $('.ch').onchange = () => { r.h = +$('.ch').value || r.h; if (ratio) r.w = r.h * ratio; fix(); draw(); };
        window.addEventListener('resize', draw);
        im.complete ? draw() : im.onload = draw;
        $('.chg').onclick = change;
        $('.go').onclick = async () => {
          const c = UI.canvas(r.w, r.h), x = c.getContext('2d');
          if (circle) { x.beginPath(); x.ellipse(c.width / 2, c.height / 2, c.width / 2, c.height / 2, 0, 0, Math.PI * 2); x.clip(); }
          x.drawImage(img, r.x, r.y, r.w, r.h, 0, 0, c.width, c.height);
          const t = $('.fmt').value;
          UI.download(await encode(c, t, 0.92), `${UI.baseName(file.name)}-cropped.${UI.ext(t)}`);
        };
      },
    });
  });

  Tools.define('rotate-image', root => {
    singleImage(root, {
      onImage(img, file, work, change) {
        let rot = 0, fine = 0, fh = false, fv = false;
        work.innerHTML = `<div class="btn-row"><button class="btn secondary" data-a="l">⟲ Rotate left</button><button class="btn secondary" data-a="r">⟳ Rotate right</button><button class="btn secondary" data-a="h">⇋ Flip horizontal</button><button class="btn secondary" data-a="v">⇵ Flip vertical</button><button class="btn ghost" data-a="reset">Reset</button></div>
          <div class="row"><div class="field grow"><label>Fine angle: <span class="fa">0°</span></label><input type="range" class="fine" min="-45" max="45" step="0.5" value="0"></div><div class="field small"><label>Background</label><input type="color" class="bg" value="#ffffff"></div><label class="check"><input type="checkbox" class="tr" checked> Transparent</label></div>
          <div class="preview"><canvas class="cv"></canvas></div>
          <div class="btn-row"><select class="select fmt" style="max-width:140px">${FORMAT_OPTS.map(([v, l]) => `<option value="${v}" ${v === typeOf(file) ? 'selected' : ''}>${l}</option>`).join('')}</select><button class="btn lg go">⬇ Download</button><button class="btn ghost chg">Choose another image</button></div>`;
        const $ = UI.q(work);
        const render = () => {
          const a = (rot + fine) * Math.PI / 180, w = img.naturalWidth, h = img.naturalHeight;
          const W = Math.abs(w * Math.cos(a)) + Math.abs(h * Math.sin(a)), H = Math.abs(w * Math.sin(a)) + Math.abs(h * Math.cos(a));
          const c = $('.cv'); c.width = Math.round(W); c.height = Math.round(H);
          const x = c.getContext('2d'); x.clearRect(0, 0, c.width, c.height);
          if (!$('.tr').checked) { x.fillStyle = $('.bg').value; x.fillRect(0, 0, c.width, c.height); }
          x.save(); x.translate(c.width / 2, c.height / 2); x.rotate(a); x.scale(fh ? -1 : 1, fv ? -1 : 1);
          x.drawImage(img, -w / 2, -h / 2); x.restore();
          $('.fa').textContent = fine + '°';
        };
        work.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
          const a = b.dataset.a;
          if (a === 'l') rot -= 90; if (a === 'r') rot += 90; if (a === 'h') fh = !fh; if (a === 'v') fv = !fv;
          if (a === 'reset') { rot = 0; fine = 0; fh = fv = false; $('.fine').value = 0; }
          render();
        });
        $('.fine').oninput = e => { fine = +e.target.value; render(); };
        $('.bg').oninput = render; $('.tr').onchange = render;
        $('.chg').onclick = change;
        $('.go').onclick = async () => { const t = $('.fmt').value; UI.download(await encode($('.cv'), t, 0.92), `${UI.baseName(file.name)}-rotated.${UI.ext(t)}`); };
        render();
      },
    });
  });

  let segmenter = null;
  Tools.define('remove-background', root => {
    singleImage(root, {
      title: 'Choose a photo',
      async onImage(img, file, work, change) {
        work.innerHTML = `<div class="status"></div><div class="grid-2"><div class="field"><label>Original</label><div class="preview"><img class="a" src="${img.src}"></div></div><div class="field"><label>Background removed</label><div class="preview b"><span class="muted">Working…</span></div></div></div>
          <div class="row res" hidden><div class="field"><label>New background</label><div class="bgseg"></div></div><div class="field small"><label>Color</label><input type="color" class="col" value="#4f46e5"></div></div>
          <div class="btn-row res" hidden><button class="btn lg go">⬇ Download PNG</button><button class="btn ghost chg">Try another photo</button></div>`;
        const $ = UI.q(work);
        work.querySelectorAll('.chg').forEach(b => b.onclick = change);
        const prog = UI.progress(); $('.status').append(prog.el);
        const files = {};
        try {
          if (!segmenter) segmenter = (async () => {
            const T = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.5');
            T.env.allowLocalModels = false;
            return T.pipeline('background-removal', 'Xenova/modnet', {
              dtype: 'fp32',
              progress_callback: p => {
                if (p.status === 'progress' && p.total) { files[p.file] = [p.loaded, p.total]; const v = Object.values(files); const l = v.reduce((a, x) => a + x[0], 0), t = v.reduce((a, x) => a + x[1], 0); prog.set(l / t, `Downloading AI model (one time): ${UI.fmtBytes(l)} / ${UI.fmtBytes(t)}`); }
              },
            });
          })().catch(e => { segmenter = null; throw e; });
          prog.set(0.05, 'Loading AI model…');
          const seg = await segmenter;
          prog.set(0.95, 'Removing background…');
          const [out] = await seg(img.src);
          const maskC = out.toCanvas();
          const W = img.naturalWidth, H = img.naturalHeight;
          const res = UI.canvas(W, H), rx = res.getContext('2d');
          rx.drawImage(img, 0, 0);
          rx.globalCompositeOperation = 'destination-in';
          rx.drawImage(maskC, 0, 0, W, H);
          prog.el.remove();
          let bgMode = 'none';
          const compose = () => {
            const c = UI.canvas(W, H), x = c.getContext('2d');
            if (bgMode === 'white') { x.fillStyle = '#fff'; x.fillRect(0, 0, W, H); }
            if (bgMode === 'color') { x.fillStyle = $('.col').value; x.fillRect(0, 0, W, H); }
            if (bgMode === 'blur') { x.filter = `blur(${Math.round(Math.max(W, H) / 80)}px)`; x.drawImage(img, 0, 0); x.filter = 'none'; }
            x.drawImage(res, 0, 0); return c;
          };
          const paint = () => { const c = compose(); c.style.maxWidth = '100%'; $('.b').innerHTML = ''; $('.b').append(c); };
          $('.bgseg').append(UI.seg([['none', 'Transparent'], ['white', 'White'], ['color', 'Color'], ['blur', 'Blur']], 'none', m => { bgMode = m; paint(); }));
          $('.col').oninput = () => { if (bgMode === 'color') paint(); };
          work.querySelectorAll('.res').forEach(e => { e.hidden = false; });
          paint();
          $('.go').onclick = async () => UI.download(await UI.canvasBlob(compose(), 'image/png'), `${UI.baseName(file.name)}-no-bg.png`);
        } catch (e) {
          console.error(e); prog.el.remove();
          UI.notice($('.status'), '⚠️ Could not run the AI model: ' + esc(e.message || e) + '. Please use an up-to-date Chrome, Edge or Firefox.', 'error');
          work.querySelectorAll('.res')[1].hidden = false;
        }
      },
    });
  });

  const OCR_LANGS = [['eng', 'English'], ['eng+urd', 'English + Urdu'], ['urd', 'Urdu'], ['ara', 'Arabic'], ['hin', 'Hindi'], ['ben', 'Bengali'], ['fas', 'Persian'], ['spa', 'Spanish'], ['fra', 'French'], ['deu', 'German'], ['por', 'Portuguese'], ['ita', 'Italian'], ['rus', 'Russian'], ['tur', 'Turkish'], ['ind', 'Indonesian'], ['vie', 'Vietnamese'], ['chi_sim', 'Chinese (Simplified)'], ['chi_tra', 'Chinese (Traditional)'], ['jpn', 'Japanese'], ['kor', 'Korean']];
  Tools.define('image-to-text', root => {
    let file = null;
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="cur"></div><div class="row opts"></div>
      <div class="btn-row"><button class="btn lg go" disabled>🔍 Extract text</button></div><div class="err"></div><div class="out stack"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [{ id: 'lang', label: 'Text language', type: 'select', value: 'eng', options: OCR_LANGS }]);
    $('.dz').append(UI.dropzone({
      accept: 'image/*,application/pdf', icon: '🔍', title: 'Choose an image or scanned PDF', hint: 'JPG, PNG, WebP, screenshots or PDF · paste with Ctrl+V', paste: true,
      onFiles: ([f]) => { file = f; $('.cur').innerHTML = ''; $('.cur').append(UI.fileRow({ name: f.name, sub: UI.fmtBytes(f.size), thumb: f.type.startsWith('image/') ? URL.createObjectURL(f) : '', icon: '📄' })); $('.go').disabled = false; $('.out').innerHTML = ''; },
    }));
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      const out = $('.out'); out.innerHTML = '';
      const prog = UI.progress(); out.append(prog.el);
      prog.set(0.02, 'Loading OCR engine…');
      const T = await UI.lib('tesseract');
      let images = [file];
      if (/pdf$/i.test(file.type) || /\.pdf$/i.test(file.name)) {
        const pdf = await UI.openPdf(file); images = [];
        for (let i = 1; i <= Math.min(pdf.numPages, 30); i++) images.push(await UI.renderPage(pdf, i, 2));
      }
      let page = 0;
      const worker = await T.createWorker(form.get().lang, 1, { logger: m => { if (m.status === 'recognizing text') prog.set((page + m.progress) / images.length, `Reading text… ${images.length > 1 ? `page ${page + 1}/${images.length}` : Math.round(m.progress * 100) + '%'}`); else prog.set(0.05, m.status.replace(/^./, c => c.toUpperCase()) + '…'); } });
      let text = '', conf = 0;
      for (; page < images.length; page++) {
        const { data } = await worker.recognize(images[page]);
        text += (images.length > 1 ? `\n--- Page ${page + 1} ---\n` : '') + data.text; conf += data.confidence;
      }
      await worker.terminate();
      prog.el.remove();
      text = text.trim();
      if (!text) throw new Error('No text was found in this image. Try a clearer image or choose the correct language.');
      out.innerHTML = `<div class="notice success">✓ Text extracted · confidence ${Math.round(conf / images.length)}%</div><textarea class="textarea" style="min-height:300px" dir="auto"></textarea><div class="btn-row"><button class="btn cp">📋 Copy</button><button class="btn secondary dl">⬇ Download .txt</button></div>`;
      out.querySelector('textarea').value = text;
      out.querySelector('.cp').onclick = () => UI.copy(out.querySelector('textarea').value);
      out.querySelector('.dl').onclick = () => UI.downloadText(out.querySelector('textarea').value, UI.baseName(file.name) + '.txt');
    }, 'Extracting…', $('.err'));
  });

  Tools.define('image-to-base64', root => {
    root.innerHTML = `<div class="stack"><div class="tabs"></div><div class="p1 stack"><div class="dz"></div><div class="o1 stack"></div></div>
      <div class="p2 stack" hidden><textarea class="textarea mono b64" placeholder="Paste a Base64 string or data:image/... URI here"></textarea><div class="btn-row"><button class="btn dec">Decode to image</button></div><div class="o2 stack"></div></div></div>`;
    const $ = UI.q(root);
    $('.tabs').append(UI.seg([['enc', 'Image → Base64'], ['dec', 'Base64 → Image']], 'enc', v => { $('.p1').hidden = v !== 'enc'; $('.p2').hidden = v !== 'dec'; }));
    $('.dz').append(UI.dropzone({
      accept: 'image/*', icon: '🧬', title: 'Choose an image', paste: true, onFiles: async ([f]) => {
        const uri = await UI.readFile(f, 'dataURL');
        const b64 = uri.split(',')[1];
        const blocks = [['Data URI', uri], ['Base64 only', b64], ['HTML <img>', `<img src="${uri}" alt="">`], ['CSS background', `background-image: url("${uri}");`]];
        $('.o1').innerHTML = `<div class="row" style="align-items:center"><img src="${uri}" style="max-height:90px;border-radius:8px;border:1px solid var(--border)"><div class="small muted">${esc(f.name)} · ${UI.fmtBytes(f.size)} → Base64 ${UI.fmtBytes(b64.length)}</div></div>` +
          blocks.map(([l], i) => `<div class="field"><label>${esc(l)}</label><div class="copy-row"><textarea class="textarea mono" style="min-height:70px" readonly data-i="${i}"></textarea><button class="btn sm secondary" data-c="${i}">Copy</button></div></div>`).join('');
        blocks.forEach(([, v], i) => { $(`[data-i="${i}"]`).value = v; $(`[data-c="${i}"]`).onclick = () => UI.copy(v); });
      },
    }));
    $('.dec').onclick = async () => {
      let s = $('.b64').value.trim().replace(/\s+/g, '');
      if (!s) return UI.toast('Paste a Base64 string first');
      if (!s.startsWith('data:')) {
        const head = atob(s.slice(0, 16).replace(/-/g, '+').replace(/_/g, '/'));
        const mime = head.startsWith('\x89PNG') ? 'image/png' : head.startsWith('GIF') ? 'image/gif' : head.startsWith('RIFF') ? 'image/webp' : head.includes('<svg') || head.startsWith('<?xml') ? 'image/svg+xml' : 'image/jpeg';
        s = `data:${mime};base64,${s}`;
      }
      try {
        const img = await UI.loadImage(s);
        const blob = await (await fetch(s)).blob();
        $('.o2').innerHTML = `<div class="preview"><img src="${s}"></div><div class="small muted">${img.naturalWidth}×${img.naturalHeight} · ${UI.fmtBytes(blob.size)}</div><div><button class="btn dl">⬇ Download image</button></div>`;
        $('.o2 .dl').onclick = () => UI.download(blob, 'decoded.' + UI.ext(blob.type));
      } catch (e) { UI.notice($('.o2'), '⚠️ This is not a valid Base64 image.', 'error'); }
    };
  });

  Tools.define('watermark-image', root => {
    singleImage(root, {
      onImage(img, file, work, change) {
        let logo = null;
        work.innerHTML = `<div class="tabs"></div><div class="row opts"></div><div class="logo-dz" hidden></div><div class="preview"><canvas class="cv"></canvas></div>
          <div class="btn-row"><button class="btn lg go">⬇ Download</button><button class="btn ghost chg">Choose another image</button></div>`;
        const $ = UI.q(work);
        let kind = 'text';
        const form = UI.fields($('.opts'), [
          { id: 'text', label: 'Watermark text', type: 'text', value: '© Your Name', cls: 'grow', show: () => kind === 'text' },
          { id: 'color', label: 'Color', type: 'color', value: '#ffffff', show: () => kind === 'text' },
          { id: 'size', label: 'Size', type: 'range', value: 6, min: 1, max: 40, unit: '%' },
          { id: 'opacity', label: 'Opacity', type: 'range', value: 60, min: 5, max: 100, unit: '%' },
          { id: 'angle', label: 'Angle', type: 'range', value: 0, min: -90, max: 90, unit: '°' },
          { id: 'pos', label: 'Position', type: 'select', value: 'br', options: [['br', 'Bottom right'], ['bl', 'Bottom left'], ['tr', 'Top right'], ['tl', 'Top left'], ['c', 'Center'], ['bc', 'Bottom center'], ['tile', 'Tiled (repeat)']] },
          { id: 'shadow', label: 'Text shadow', type: 'checkbox', value: true, show: () => kind === 'text' },
        ], () => render());
        $('.tabs').append(UI.seg([['text', 'Text watermark'], ['logo', 'Logo watermark']], 'text', v => { kind = v; $('.logo-dz').hidden = v !== 'logo'; form.refresh(); render(); }));
        $('.logo-dz').append(UI.dropzone({ accept: 'image/*', compact: true, icon: '🏷️', title: 'Upload logo (PNG)', onFiles: async ([f]) => { logo = await UI.loadImage(f); render(); } }));
        const render = () => {
          const o = form.get(), W = img.naturalWidth, H = img.naturalHeight, c = $('.cv');
          c.width = W; c.height = H; const x = c.getContext('2d'); x.drawImage(img, 0, 0);
          const unit = Math.max(W, H) * o.size / 100;
          let mw, mh, drawMark;
          if (kind === 'text') {
            x.font = `bold ${unit}px system-ui, Arial, sans-serif`; mw = x.measureText(o.text).width; mh = unit;
            drawMark = () => { x.font = `bold ${unit}px system-ui, Arial, sans-serif`; x.fillStyle = o.color; x.textBaseline = 'middle'; x.textAlign = 'center'; if (o.shadow) { x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = unit / 6; } x.fillText(o.text, 0, 0); x.shadowBlur = 0; };
          } else {
            if (!logo) return; mw = unit * 3; mh = mw * logo.naturalHeight / logo.naturalWidth;
            drawMark = () => x.drawImage(logo, -mw / 2, -mh / 2, mw, mh);
          }
          const pad = Math.max(W, H) * 0.03;
          const at = (cx, cy) => { x.save(); x.globalAlpha = o.opacity / 100; x.translate(cx, cy); x.rotate(o.angle * Math.PI / 180); drawMark(); x.restore(); };
          const P = { br: [W - pad - mw / 2, H - pad - mh / 2], bl: [pad + mw / 2, H - pad - mh / 2], tr: [W - pad - mw / 2, pad + mh / 2], tl: [pad + mw / 2, pad + mh / 2], c: [W / 2, H / 2], bc: [W / 2, H - pad - mh / 2] };
          if (o.pos === 'tile') { const sx = mw + unit * 3, sy = mh + unit * 3; let row = 0; for (let yy = sy / 2; yy < H + sy; yy += sy, row++) for (let xx = row % 2 ? 0 : sx / 2; xx < W + sx; xx += sx) at(xx, yy); }
          else at(...P[o.pos]);
        };
        render();
        $('.chg').onclick = change;
        $('.go').onclick = async () => { const t = typeOf(file); UI.download(await encode($('.cv'), t, 0.92), `${UI.baseName(file.name)}-watermarked.${UI.ext(t)}`); };
      },
    });
  });

  const FILTER_PRESETS = { none: {}, bw: { grayscale: 100, contrast: 115 }, vintage: { sepia: 55, contrast: 95, brightness: 105, saturate: 80 }, warm: { sepia: 25, saturate: 125, brightness: 103 }, cool: { hue: 190, saturate: 90, brightness: 103 }, vivid: { saturate: 160, contrast: 115 }, fade: { contrast: 80, brightness: 112, saturate: 75 }, dramatic: { contrast: 145, brightness: 90, saturate: 110 } };
  Tools.define('photo-filters', root => {
    singleImage(root, {
      onImage(img, file, work, change) {
        const defs = { brightness: 100, contrast: 100, saturate: 100, blur: 0, grayscale: 0, sepia: 0, hue: 0, invert: 0 };
        work.innerHTML = `<div class="presets chips"></div><div class="grid-2" style="align-items:start"><div class="preview"><img class="pv" src="${img.src}"></div><div class="row opts"></div></div>
          <div class="btn-row"><button class="btn lg go">⬇ Download</button><button class="btn ghost reset">Reset</button><button class="btn ghost chg">Choose another image</button></div>`;
        const $ = UI.q(work);
        const fields = [['brightness', 'Brightness', 0, 200, '%'], ['contrast', 'Contrast', 0, 200, '%'], ['saturate', 'Saturation', 0, 300, '%'], ['blur', 'Blur', 0, 20, 'px'], ['grayscale', 'Grayscale', 0, 100, '%'], ['sepia', 'Sepia', 0, 100, '%'], ['hue', 'Hue rotate', 0, 360, '°'], ['invert', 'Invert', 0, 100, '%']]
          .map(([id, label, min, max, unit]) => ({ id, label, type: 'range', min, max, value: defs[id], unit, cls: 'grow' }));
        const form = UI.fields($('.opts'), fields, () => apply());
        const css = (o, scale = 1) => `brightness(${o.brightness}%) contrast(${o.contrast}%) saturate(${o.saturate}%) blur(${o.blur * scale}px) grayscale(${o.grayscale}%) sepia(${o.sepia}%) hue-rotate(${o.hue}deg) invert(${o.invert}%)`;
        const apply = () => { $('.pv').style.filter = css(form.get(), ($('.pv').clientWidth || 500) / 1000); };
        Object.keys(FILTER_PRESETS).forEach(k => {
          const b = UI.h(`<button class="chip">${k === 'none' ? 'Original' : k === 'bw' ? 'B&W' : k[0].toUpperCase() + k.slice(1)}</button>`);
          b.onclick = () => { const p = { ...defs, ...FILTER_PRESETS[k] }; Object.entries(p).forEach(([id, v]) => form.set(id, v)); apply(); };
          $('.presets').append(b);
        });
        $('.reset').onclick = () => { Object.entries(defs).forEach(([id, v]) => form.set(id, v)); apply(); };
        $('.chg').onclick = change;
        $('.go').onclick = async () => {
          const c = UI.canvas(img.naturalWidth, img.naturalHeight), x = c.getContext('2d');
          const o = form.get();
          if ('filter' in x) { x.filter = css(o, img.naturalWidth / 1000); x.drawImage(img, 0, 0); }
          else { x.drawImage(img, 0, 0); pixelFilter(x, c.width, c.height, o); }
          const t = typeOf(file);
          UI.download(await encode(c, t, 0.92), `${UI.baseName(file.name)}-edited.${UI.ext(t)}`);
        };
      },
    });
  });
  function pixelFilter(x, w, h, o) {
    const d = x.getImageData(0, 0, w, h), p = d.data;
    const b = o.brightness / 100, c = o.contrast / 100, s = o.saturate / 100, g = o.grayscale / 100, sp = o.sepia / 100, inv = o.invert / 100;
    for (let i = 0; i < p.length; i += 4) {
      let r = p[i] * b, gg = p[i + 1] * b, bb = p[i + 2] * b;
      r = (r - 128) * c + 128; gg = (gg - 128) * c + 128; bb = (bb - 128) * c + 128;
      const l = 0.2126 * r + 0.7152 * gg + 0.0722 * bb;
      r = l + (r - l) * s; gg = l + (gg - l) * s; bb = l + (bb - l) * s;
      const l2 = 0.2126 * r + 0.7152 * gg + 0.0722 * bb; r += (l2 - r) * g; gg += (l2 - gg) * g; bb += (l2 - bb) * g;
      const sr = r * .393 + gg * .769 + bb * .189, sg = r * .349 + gg * .686 + bb * .168, sb = r * .272 + gg * .534 + bb * .131;
      r += (sr - r) * sp; gg += (sg - gg) * sp; bb += (sb - bb) * sp;
      r += (255 - 2 * r) * inv; gg += (255 - 2 * gg) * inv; bb += (255 - 2 * bb) * inv;
      p[i] = r; p[i + 1] = gg; p[i + 2] = bb;
    }
    x.putImageData(d, 0, 0);
  }

  Tools.define('meme-generator', root => {
    UI.font('Anton');
    singleImage(root, {
      title: 'Choose an image for your meme',
      onImage(img, file, work, change) {
        work.innerHTML = `<div class="grid-2" style="align-items:start"><div class="preview"><canvas class="cv"></canvas></div><div class="row opts"></div></div>
          <div class="btn-row"><button class="btn lg go">⬇ Download meme</button><button class="btn ghost chg">Choose another image</button></div>`;
        const $ = UI.q(work);
        const form = UI.fields($('.opts'), [
          { id: 'top', label: 'Top text', type: 'text', value: 'WHEN THE CODE WORKS', full: true },
          { id: 'bottom', label: 'Bottom text', type: 'text', value: 'ON THE FIRST TRY', full: true },
          { id: 'size', label: 'Font size', type: 'range', value: 10, min: 4, max: 20, unit: '%' },
          { id: 'color', label: 'Text color', type: 'color', value: '#ffffff' },
          { id: 'stroke', label: 'Outline color', type: 'color', value: '#000000' },
          { id: 'upper', label: 'UPPERCASE', type: 'checkbox', value: true },
        ], () => render());
        const wrap = (x, text, maxW) => { const words = text.split(/\s+/); const lines = []; let line = ''; for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; } if (line) lines.push(line); return lines; };
        const render = () => {
          const o = form.get(), c = $('.cv'), W = Math.min(img.naturalWidth, 1600), H = Math.round(img.naturalHeight * W / img.naturalWidth);
          c.width = W; c.height = H; const x = c.getContext('2d'); x.drawImage(img, 0, 0, W, H);
          const fs = W * o.size / 100;
          x.font = `${fs}px Impact, Anton, "Arial Black", sans-serif`; x.textAlign = 'center'; x.lineJoin = 'round';
          x.fillStyle = o.color; x.strokeStyle = o.stroke; x.lineWidth = fs / 8;
          const put = (text, top) => {
            if (!text) return; if (o.upper) text = text.toUpperCase();
            const lines = wrap(x, text, W * 0.94), lh = fs * 1.1;
            lines.forEach((l, i) => {
              const y = top ? fs * 0.15 + lh * (i + 1) - fs * 0.15 : H - fs * 0.25 - lh * (lines.length - 1 - i);
              x.strokeText(l, W / 2, y); x.fillText(l, W / 2, y);
            });
          };
          put(o.top, true); put(o.bottom, false);
        };
        render(); document.fonts && document.fonts.ready.then(render);
        UI.font('Anton').then(render);
        $('.chg').onclick = change;
        $('.go').onclick = async () => UI.download(await encode($('.cv'), 'image/jpeg', 0.92), 'meme.jpg');
      },
    });
  });

  async function buildIco(canvases) {
    const pngs = await Promise.all(canvases.map(c => UI.canvasBlob(c, 'image/png').then(b => b.arrayBuffer())));
    const head = 6 + 16 * pngs.length, buf = new ArrayBuffer(head + pngs.reduce((a, b) => a + b.byteLength, 0)), dv = new DataView(buf);
    dv.setUint16(0, 0, true); dv.setUint16(2, 1, true); dv.setUint16(4, pngs.length, true);
    let off = head;
    pngs.forEach((p, i) => {
      const s = canvases[i].width, e = 6 + 16 * i;
      dv.setUint8(e, s >= 256 ? 0 : s); dv.setUint8(e + 1, s >= 256 ? 0 : s); dv.setUint16(e + 4, 1, true); dv.setUint16(e + 6, 32, true);
      dv.setUint32(e + 8, p.byteLength, true); dv.setUint32(e + 12, off, true);
      new Uint8Array(buf, off, p.byteLength).set(new Uint8Array(p)); off += p.byteLength;
    });
    return new Blob([buf], { type: 'image/x-icon' });
  }
  Tools.define('favicon-generator', root => {
    let src = null;
    root.innerHTML = `<div class="stack"><div class="tabs"></div><div class="dz"></div><div class="row opts"></div>
      <div class="sizes row" style="align-items:flex-end"></div><div class="btn-row"><button class="btn lg go">⬇ Download favicon package (ZIP)</button><button class="btn secondary ico">⬇ favicon.ico only</button></div>
      <div class="field"><label>Add this to your HTML &lt;head&gt;</label><pre class="out-box snip"></pre></div></div>`;
    const $ = UI.q(root);
    let mode = 'text';
    const form = UI.fields($('.opts'), [
      { id: 'text', label: 'Text or emoji', type: 'text', value: 'T', show: () => mode === 'text' },
      { id: 'fg', label: 'Text color', type: 'color', value: '#ffffff', show: () => mode === 'text' },
      { id: 'bg', label: 'Background', type: 'color', value: '#4f46e5' },
      { id: 'transparent', label: 'Transparent background', type: 'checkbox', value: false, show: () => mode === 'image' },
      { id: 'shape', label: 'Shape', type: 'select', value: 'rounded', options: [['square', 'Square'], ['rounded', 'Rounded'], ['circle', 'Circle']] },
      { id: 'font', label: 'Font', type: 'select', value: 'system-ui', options: [['system-ui', 'Sans-serif'], ['Georgia, serif', 'Serif'], ['ui-monospace, monospace', 'Monospace']], show: () => mode === 'text' },
    ], () => draw());
    $('.tabs').append(UI.seg([['text', 'From text / emoji'], ['image', 'From image']], 'text', v => { mode = v; $('.dz').hidden = v !== 'image'; form.refresh(); draw(); }));
    $('.dz').hidden = true;
    $('.dz').append(UI.dropzone({ accept: 'image/*', compact: true, icon: '⭐', title: 'Choose an image (square works best)', onFiles: async ([f]) => { src = await UI.loadImage(f); draw(); } }));
    const SIZES = [16, 32, 48, 64, 128, 180, 192, 512];
    const make = (s) => {
      const o = form.get(), c = UI.canvas(s, s), x = c.getContext('2d');
      const r = o.shape === 'circle' ? s / 2 : o.shape === 'rounded' ? s * 0.2 : 0;
      x.beginPath(); x.roundRect ? x.roundRect(0, 0, s, s, r) : x.rect(0, 0, s, s); x.closePath();
      if (!(mode === 'image' && o.transparent)) { x.fillStyle = o.bg; x.fill(); }
      x.save(); x.clip();
      if (mode === 'image') { if (src) { const k = Math.max(s / src.naturalWidth, s / src.naturalHeight); const w = src.naturalWidth * k, h = src.naturalHeight * k; x.imageSmoothingQuality = 'high'; x.drawImage(resample(src, w, h), (s - w) / 2, (s - h) / 2); } }
      else { const t = o.text || ' '; let fs = s * (t.length > 2 ? 0.42 : t.length > 1 ? 0.55 : 0.7); x.font = `700 ${fs}px ${o.font}`; const tw = x.measureText(t).width; if (tw > s * 0.86) { fs *= s * 0.86 / tw; x.font = `700 ${fs}px ${o.font}`; } x.fillStyle = o.fg; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(t, s / 2, s / 2 + fs * 0.05); }
      x.restore(); return c;
    };
    const draw = () => {
      $('.sizes').innerHTML = '';
      [16, 32, 64, 180].forEach(s => { const c = make(s); c.style.cssText = `width:${Math.max(s, 32)}px;height:${Math.max(s, 32)}px;image-rendering:${s < 32 ? 'pixelated' : 'auto'};border:1px solid var(--border);border-radius:6px`; const w = UI.h(`<div class="text-center small muted"></div>`); w.append(c, UI.h(`<div>${s}×${s}</div>`)); $('.sizes').append(w); });
    };
    $('.snip').textContent = `<link rel="icon" href="/favicon.ico" sizes="any">\n<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n<link rel="manifest" href="/site.webmanifest">`;
    $('.ico').onclick = async () => UI.download(await buildIco([16, 32, 48].map(make)), 'favicon.ico');
    $('.go').onclick = e => UI.busy(e.currentTarget, async () => {
      const files = [{ name: 'favicon.ico', blob: await buildIco([16, 32, 48].map(make)) }];
      for (const s of SIZES) {
        const name = s === 180 ? 'apple-touch-icon.png' : s === 192 ? 'android-chrome-192x192.png' : s === 512 ? 'android-chrome-512x512.png' : `favicon-${s}x${s}.png`;
        files.push({ name, blob: await UI.canvasBlob(make(s)) });
      }
      files.push({ name: 'site.webmanifest', blob: new Blob([JSON.stringify({ name: '', short_name: '', icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }, { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }], theme_color: form.get().bg, background_color: '#ffffff', display: 'standalone' }, null, 2)], { type: 'application/json' }) });
      await UI.zip(files, 'favicon-package.zip');
    }, 'Building…');
    draw();
  });

  const hex = (r, g, b) => '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  const toHsl = (r, g, b) => { r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, s = 0; const l = (mx + mn) / 2; if (mx !== mn) { const d = mx - mn; s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; } return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`; };
  function palette(img, k = 8) {
    const c = resample(img, 80, 80 * img.naturalHeight / img.naturalWidth), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    const buckets = {};
    for (let i = 0; i < d.length; i += 4) { if (d[i + 3] < 128) continue; const key = (d[i] >> 4) + ',' + (d[i + 1] >> 4) + ',' + (d[i + 2] >> 4); const b = buckets[key] || (buckets[key] = [0, 0, 0, 0]); b[0] += d[i]; b[1] += d[i + 1]; b[2] += d[i + 2]; b[3]++; }
    const cols = Object.values(buckets).sort((a, b) => b[3] - a[3]).map(b => [b[0] / b[3], b[1] / b[3], b[2] / b[3]].map(Math.round));
    const out = [];
    for (const col of cols) { if (out.every(o => Math.hypot(o[0] - col[0], o[1] - col[1], o[2] - col[2]) > 48)) out.push(col); if (out.length >= k) break; }
    return out;
  }
  Tools.define('image-color-picker', root => {
    singleImage(root, {
      onImage(img, file, work, change) {
        work.innerHTML = `<div class="grid-2" style="align-items:start"><div class="stack"><div class="preview" style="cursor:crosshair"><canvas class="cv"></canvas></div><div class="btn-row"><button class="btn ghost chg">Choose another image</button>${window.EyeDropper ? '<button class="btn secondary eye">💧 Pick from screen</button>' : ''}</div></div>
          <div class="stack"><div class="row" style="align-items:center"><div class="sw" style="width:72px;height:72px;border-radius:14px;border:1px solid var(--border)"></div><div class="small muted">Hover to preview, click to pick a color.</div></div><div class="codes stack"></div><h3 style="margin:8px 0 0">Main colors in this image</h3><div class="pal grid-auto" style="grid-template-columns:repeat(4,1fr)"></div><h3 style="margin:8px 0 0">Picked colors</h3><div class="hist chips"></div></div></div>`;
        const $ = UI.q(work), c = $('.cv');
        const W = Math.min(img.naturalWidth, 1400), H = Math.round(img.naturalHeight * W / img.naturalWidth);
        c.width = W; c.height = H; const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0, W, H);
        const show = (r, g, b) => {
          const hx = hex(r, g, b); $('.sw').style.background = hx;
          $('.codes').innerHTML = [['HEX', hx.toUpperCase()], ['RGB', `rgb(${r}, ${g}, ${b})`], ['HSL', toHsl(r, g, b)]].map(([k, v]) => `<div class="copy-row"><input class="input mono" readonly value="${v}" aria-label="${k}"><button class="btn sm secondary" data-v="${v}">Copy ${k}</button></div>`).join('');
          $('.codes').querySelectorAll('button').forEach(b => b.onclick = () => UI.copy(b.dataset.v));
          return hx;
        };
        const at = e => { const r = c.getBoundingClientRect(); const px = Math.floor((e.clientX - r.left) * W / r.width), py = Math.floor((e.clientY - r.top) * H / r.height); const d = x.getImageData(UI.clamp(px, 0, W - 1), UI.clamp(py, 0, H - 1), 1, 1).data; return [d[0], d[1], d[2]]; };
        let locked = false;
        c.addEventListener('mousemove', e => { if (!locked) show(...at(e)); });
        c.addEventListener('mouseleave', () => { locked = false; });
        const addHist = hx => { const b = UI.h(`<button class="chip"><span style="width:14px;height:14px;border-radius:4px;background:${hx};display:inline-block"></span>${hx.toUpperCase()}</button>`); b.onclick = () => UI.copy(hx.toUpperCase()); $('.hist').prepend(b); };
        c.addEventListener('click', e => { const hx = show(...at(e)); locked = true; addHist(hx); UI.copy(hx.toUpperCase(), `Copied ${hx.toUpperCase()}`); });
        palette(img).forEach(([r, g, b]) => { const hx = hex(r, g, b); const s = UI.h(`<div class="swatch" style="background:${hx};color:${(r * 299 + g * 587 + b * 114) / 1000 > 140 ? '#000' : '#fff'}">${hx.toUpperCase()}</div>`); s.onclick = () => { show(r, g, b); UI.copy(hx.toUpperCase()); }; $('.pal').append(s); });
        const p0 = palette(img, 1)[0]; if (p0) show(...p0);
        $('.chg').onclick = change;
        if ($('.eye')) $('.eye').onclick = async () => { try { const r = await new EyeDropper().open(); const v = r.sRGBHex; const n = parseInt(v.slice(1), 16); show(n >> 16, (n >> 8) & 255, n & 255); addHist(v); } catch (e) { } };
      },
    });
  });

  Tools.define('svg-to-png', root => {
    let svgText = '';
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="field"><label>…or paste SVG code</label><textarea class="textarea mono code" style="min-height:110px" placeholder="<svg ...>...</svg>"></textarea></div>
      <div class="row opts"></div><div class="preview pv"><span class="muted">Preview appears here</span></div><div class="btn-row"><button class="btn lg go">⬇ Download</button></div><div class="err"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [
      { id: 'w', label: 'Output width', type: 'number', value: 1024, unit: 'px' },
      { id: 'fmt', label: 'Format', type: 'seg', value: 'image/png', options: FORMAT_OPTS },
      { id: 'bgOn', label: 'Fill background', type: 'checkbox', value: false },
      { id: 'bg', label: 'Background', type: 'color', value: '#ffffff', show: v => v.bgOn || v.fmt === 'image/jpeg' },
    ], () => render());
    $('.dz').append(UI.dropzone({ accept: '.svg,image/svg+xml', icon: '🔷', title: 'Choose an SVG file', compact: true, onFiles: async ([f]) => { svgText = await UI.readFile(f); $('.code').value = svgText; render(); } }));
    $('.code').addEventListener('input', UI.debounce(() => { svgText = $('.code').value; render(); }, 300));
    let canvas = null;
    const render = async () => {
      $('.err').innerHTML = ''; canvas = null;
      if (!svgText.trim()) return;
      try {
        const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml'), svg = doc.documentElement;
        if (svg.nodeName !== 'svg') throw new Error('Invalid SVG code.');
        const vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
        let iw = parseFloat(svg.getAttribute('width')) || vb[2] || 300, ih = parseFloat(svg.getAttribute('height')) || vb[3] || 150;
        if (!svg.getAttribute('viewBox')) svg.setAttribute('viewBox', `0 0 ${iw} ${ih}`);
        const o = form.get(), W = o.w > 0 ? Math.min(o.w, 8000) : iw, H = Math.round(W * ih / iw);
        svg.setAttribute('width', W); svg.setAttribute('height', H);
        const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' }));
        const img = await UI.loadImage(url);
        canvas = UI.canvas(W, H); const x = canvas.getContext('2d');
        if (o.bgOn || o.fmt === 'image/jpeg') { x.fillStyle = o.bg; x.fillRect(0, 0, W, H); }
        x.drawImage(img, 0, 0, W, H);
        const pv = canvas.cloneNode(); pv.getContext('2d').drawImage(canvas, 0, 0); pv.style.maxWidth = '100%';
        $('.pv').innerHTML = ''; $('.pv').append(pv);
      } catch (e) { UI.notice($('.err'), '⚠️ ' + esc(e.message || 'Could not render this SVG.'), 'error'); }
    };
    $('.go').onclick = async () => { if (!canvas) return UI.toast('Add an SVG first'); const t = form.get().fmt; UI.download(await UI.canvasBlob(canvas, t, 0.95), `image-${canvas.width}x${canvas.height}.${UI.ext(t)}`); };
  });

  const PASSPORT = [['35x45', '35 × 45 mm — UK, EU, Pakistan, India, Australia, most countries'], ['50.8x50.8', '2 × 2 in (51 × 51 mm) — USA, India visa'], ['50x70', '50 × 70 mm — Canada'], ['33x48', '33 × 48 mm — China'], ['40x60', '40 × 60 mm — Saudi Arabia'], ['35x50', '35 × 50 mm — Malaysia'], ['40x50', '40 × 50 mm — UAE visa']];
  Tools.define('passport-photo-maker', root => {
    singleImage(root, {
      title: 'Choose a clear, front-facing photo',
      onImage(img, file, work, change) {
        work.innerHTML = `<div class="row opts"></div><div class="grid-2" style="align-items:start">
          <div class="stack" style="align-items:center"><div class="stage" style="position:relative;touch-action:none;cursor:grab;line-height:0;box-shadow:var(--shadow-lg)"><canvas class="cv"></canvas></div><div class="small muted text-center">Drag the photo to position it. Fit the head inside the oval, eyes on the line.</div></div>
          <div class="stack"><div class="field"><label>Zoom</label><input type="range" class="zoom" min="0.3" max="4" step="0.01" value="1"></div>
          <div class="notice small">Tips: plain white or light background, even lighting, neutral expression, no glasses glare. Need a white background? Use our <a href="remove-background">Background Remover</a> first.</div>
          <div class="btn-row"><button class="btn lg one">⬇ Single photo</button><button class="btn lg success sheet">⬇ Print sheet</button></div><button class="btn ghost chg">Choose another photo</button></div></div>`;
        const $ = UI.q(work);
        const form = UI.fields($('.opts'), [
          { id: 'size', label: 'Photo size', type: 'select', value: '35x45', options: PASSPORT, cls: 'grow' },
          { id: 'sheet', label: 'Print sheet', type: 'select', value: '4x6', options: [['4x6', '4 × 6 in (10 × 15 cm)'], ['a4', 'A4 paper']] },
          { id: 'bg', label: 'Fill color', type: 'color', value: '#ffffff' },
        ], () => { setup(); draw(); });
        let pw, ph, Vw, Vh, zoom = 1, ox = 0, oy = 0;
        const setup = () => {
          [pw, ph] = form.get().size.split('x').map(Number);
          Vh = 380; Vw = Math.round(Vh * pw / ph);
          const c = $('.cv'); c.width = Vw * 2; c.height = Vh * 2; c.style.width = Vw + 'px'; c.style.height = Vh + 'px';
          const base = Math.max(Vw / img.naturalWidth, Vh / img.naturalHeight); zoom = base; $('.zoom').min = base * 0.5; $('.zoom').max = base * 5; $('.zoom').value = base;
          ox = (Vw - img.naturalWidth * zoom) / 2; oy = (Vh - img.naturalHeight * zoom) / 2;
        };
        const paint = (x, W, H, guides) => {
          const k = W / Vw;
          x.fillStyle = form.get().bg; x.fillRect(0, 0, W, H);
          x.imageSmoothingQuality = 'high'; x.drawImage(img, ox * k, oy * k, img.naturalWidth * zoom * k, img.naturalHeight * zoom * k);
          if (guides) {
            x.strokeStyle = 'rgba(79,70,229,.9)'; x.setLineDash([8, 6]); x.lineWidth = 2;
            x.beginPath(); x.ellipse(W / 2, H * 0.45, W * 0.3, H * 0.34, 0, 0, Math.PI * 2); x.stroke();
            x.beginPath(); x.moveTo(W * 0.15, H * 0.42); x.lineTo(W * 0.85, H * 0.42); x.stroke(); x.setLineDash([]);
          }
        };
        const draw = () => paint($('.cv').getContext('2d'), $('.cv').width, $('.cv').height, true);
        $('.zoom').oninput = e => { const nz = +e.target.value, cx = Vw / 2, cy = Vh / 2; ox = cx - (cx - ox) * nz / zoom; oy = cy - (cy - oy) * nz / zoom; zoom = nz; draw(); };
        const st = $('.stage');
        st.addEventListener('pointerdown', e => {
          st.setPointerCapture(e.pointerId); const sx = e.clientX, sy = e.clientY, ox0 = ox, oy0 = oy;
          const mv = ev => { ox = ox0 + ev.clientX - sx; oy = oy0 + ev.clientY - sy; draw(); };
          const up = () => { st.removeEventListener('pointermove', mv); st.removeEventListener('pointerup', up); };
          st.addEventListener('pointermove', mv); st.addEventListener('pointerup', up);
        });
        const photo = () => { const W = Math.round(pw / 25.4 * 300), H = Math.round(ph / 25.4 * 300); const c = UI.canvas(W, H); paint(c.getContext('2d'), W, H, false); return c; };
        $('.one').onclick = async () => UI.download(await UI.canvasBlob(photo(), 'image/jpeg', 0.95), `passport-photo-${form.get().size}mm.jpg`);
        $('.sheet').onclick = async () => {
          const p = photo(), [SW, SH] = form.get().sheet === 'a4' ? [2480, 3508] : [1200, 1800];
          const cols = Math.floor(SW / p.width), rows = Math.floor(SH / p.height);
          const gap = Math.max(0, Math.min(24, (SW - cols * p.width) / (cols + 1), (SH - rows * p.height) / (rows + 1)));
          if (!cols || !rows) return UI.toast('This photo size does not fit on the selected sheet');
          const s = UI.canvas(SW, SH), x = s.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, SW, SH);
          const mx = (SW - cols * p.width - (cols - 1) * gap) / 2, my = (SH - rows * p.height - (rows - 1) * gap) / 2;
          for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const X = mx + c * (p.width + gap), Y = my + r * (p.height + gap); x.drawImage(p, X, Y); x.strokeStyle = '#bbb'; x.lineWidth = 1; x.strokeRect(X - 0.5, Y - 0.5, p.width + 1, p.height + 1); }
          UI.download(await UI.canvasBlob(s, 'image/jpeg', 0.95), `passport-photos-sheet-${cols * rows}.jpg`);
          UI.toast(`✓ ${cols * rows} photos on one sheet — print at 100% scale`);
        };
        $('.chg').onclick = change;
        setup(); draw();
      },
    });
  });

  Tools.define('collage-maker', root => {
    const imgs = [];
    root.innerHTML = `<div class="stack"><div class="dz"></div><div class="thumbs list"></div><div class="row opts"></div><div class="preview pv"><span class="muted">Add at least 2 photos</span></div><div class="btn-row"><button class="btn lg go" disabled>⬇ Download collage</button></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [
      { id: 'size', label: 'Canvas', type: 'select', value: '1080x1080', options: [['1080x1080', 'Square 1080×1080'], ['1080x1350', 'Portrait 1080×1350'], ['1920x1080', 'Landscape 1920×1080'], ['1080x1920', 'Story 1080×1920'], ['2400x2400', 'Large square 2400×2400']] },
      { id: 'cols', label: 'Columns', type: 'select', value: 'auto', options: [['auto', 'Auto'], '1', '2', '3', '4'] },
      { id: 'gap', label: 'Spacing', type: 'range', value: 12, min: 0, max: 60, unit: 'px' },
      { id: 'radius', label: 'Corner radius', type: 'range', value: 8, min: 0, max: 80, unit: 'px' },
      { id: 'bg', label: 'Background', type: 'color', value: '#ffffff' },
    ], () => render());
    const list = () => {
      $('.list').innerHTML = '';
      imgs.forEach((im, i) => {
        const card = UI.h(`<div class="thumb-card"><img src="${im.src}"><div class="tc-actions"><button title="Move left">←</button><button title="Remove">✕</button><button title="Move right">→</button></div></div>`);
        const [l, rm, r] = card.querySelectorAll('button');
        l.onclick = () => { if (i) { [imgs[i - 1], imgs[i]] = [imgs[i], imgs[i - 1]]; list(); render(); } };
        r.onclick = () => { if (i < imgs.length - 1) { [imgs[i + 1], imgs[i]] = [imgs[i], imgs[i + 1]]; list(); render(); } };
        rm.onclick = () => { imgs.splice(i, 1); list(); render(); };
        $('.list').append(card);
      });
    };
    $('.dz').append(UI.dropzone({ accept: 'image/*', multiple: true, icon: '🧩', title: 'Add photos', hint: '2–12 photos work best', paste: true, onFiles: async fs => { for (const f of fs) { try { imgs.push(await UI.loadImage(f)); } catch (e) { UI.toast(e.message); } } list(); render(); } }));
    let canvas;
    const render = () => {
      $('.go').disabled = imgs.length < 1;
      if (!imgs.length) return;
      const o = form.get(), [W, H] = o.size.split('x').map(Number), n = imgs.length;
      const cols = o.cols === 'auto' ? Math.ceil(Math.sqrt(n)) : Math.min(+o.cols, n), rows = Math.ceil(n / cols), g = o.gap * (W / 1080);
      canvas = UI.canvas(W, H); const x = canvas.getContext('2d'); x.fillStyle = o.bg; x.fillRect(0, 0, W, H);
      const ch = (H - g * (rows + 1)) / rows;
      let k = 0;
      for (let r = 0; r < rows; r++) {
        const inRow = Math.min(cols, n - k), cw = (W - g * (inRow + 1)) / inRow;
        for (let c = 0; c < inRow; c++, k++) {
          const im = imgs[k], X = g + c * (cw + g), Y = g + r * (ch + g);
          const s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight), sw = cw / s, sh = ch / s;
          x.save(); x.beginPath(); x.roundRect ? x.roundRect(X, Y, cw, ch, o.radius * (W / 1080)) : x.rect(X, Y, cw, ch); x.clip();
          x.drawImage(im, (im.naturalWidth - sw) / 2, (im.naturalHeight - sh) / 2, sw, sh, X, Y, cw, ch); x.restore();
        }
      }
      const pv = UI.canvas(W, H); pv.getContext('2d').drawImage(canvas, 0, 0); pv.style.maxWidth = '100%'; pv.style.maxHeight = '520px';
      $('.pv').innerHTML = ''; $('.pv').append(pv);
    };
    $('.go').onclick = async () => UI.download(await UI.canvasBlob(canvas, 'image/jpeg', 0.92), 'collage.jpg');
  });

  // Image splitter for Instagram: crops the photo to the grid's shape, cuts equal tiles and numbers them in posting order.
  const TILE_SHAPES = { square: [1080, 1080, '1:1 square (1080×1080)'], portrait: [1080, 1350, '4:5 portrait (1080×1350)'], grid34: [1080, 1440, '3:4 grid (1080×1440)'], original: [0, 0, 'Original (no crop)'] };
  Tools.define('image-splitter', (root, preset) => {
    singleImage(root, {
      title: 'Choose a photo to split',
      onImage(img, file, work, change) {
        const W = img.naturalWidth, H = img.naturalHeight;
        let mode = preset.mode || 'grid', rows = preset.rows || 1, cols = preset.cols || 3, shape = 'square', px = 50, py = 50, tiles = [];
        work.innerHTML = `<div class="row" style="align-items:flex-end"><div class="field"><label>Split for</label><div class="mode"></div></div></div>
          <div class="row opts"></div>
          <div class="row" style="align-items:flex-end"><div class="field"><label>Move image left / right</label><input type="range" class="px" min="0" max="100" value="50"></div><div class="field"><label>Move image up / down</label><input type="range" class="py" min="0" max="100" value="50"></div></div>
          <canvas class="pv" style="max-width:100%;max-height:520px;border-radius:10px;border:1px solid var(--border);align-self:center"></canvas>
          <div class="notice small hint"></div>
          <div class="btn-row"><button class="btn lg go">⬇ Download all tiles (ZIP)</button><button class="btn ghost chg">Choose another photo</button></div>
          <div class="out"></div>`;
        const $ = UI.q(work);
        const optsFor = () => mode === 'carousel'
          ? [{ id: 'cols', label: 'Number of slides', type: 'select', value: String(Math.max(2, cols)), options: ['2', '3', '4', '5', '6', '7', '8', '10'] }]
          : mode === 'grid'
            ? [{ id: 'rows', label: 'Rows (3 posts each)', type: 'select', value: String(rows), options: [['1', '1 row — 3 posts'], ['2', '2 rows — 6 posts'], ['3', '3 rows — 9 posts'], ['4', '4 rows — 12 posts'], ['5', '5 rows — 15 posts']] }]
            : [{ id: 'rows', label: 'Rows', type: 'number', value: rows, min: 1, max: 10 }, { id: 'cols', label: 'Columns', type: 'number', value: cols, min: 1, max: 10 }];
        let form;
        const setMode = () => {
          if (mode === 'grid') cols = 3; if (mode === 'carousel') { rows = 1; cols = Math.max(2, cols); }
          form = UI.fields($('.opts'), [...optsFor(), { id: 'shape', label: 'Tile shape', type: 'select', value: shape, options: Object.entries(TILE_SHAPES).map(([k, v]) => [k, v[2]]) }], v => { if (v.rows) rows = UI.clamp(v.rows | 0, 1, 10); if (v.cols) cols = UI.clamp(v.cols | 0, 1, 10); shape = v.shape; draw(); });
          draw();
        };
        // posting order: profile grid = bottom-right first (Instagram shows newest top-left); carousel/custom = reading order
        const order = (r, c) => mode === 'grid' ? (rows - 1 - r) * cols + (cols - 1 - c) + 1 : r * cols + c + 1;
        const crop = () => {
          const [tw, th] = TILE_SHAPES[shape];
          if (!tw) return { sx: 0, sy: 0, sw: W, sh: H, tw: Math.round(W / cols), th: Math.round(H / rows) };
          const want = (cols * tw) / (rows * th);
          let sw = W, sh = W / want; if (sh > H) { sh = H; sw = H * want; }
          return { sx: (W - sw) * px / 100, sy: (H - sh) * py / 100, sw, sh, tw, th };
        };
        const draw = () => {
          const k = crop(), cv = $('.pv'), s = Math.min(1, 900 / Math.max(k.sw, k.sh));
          cv.width = Math.round(k.sw * s); cv.height = Math.round(k.sh * s);
          const g = cv.getContext('2d'); g.drawImage(img, k.sx, k.sy, k.sw, k.sh, 0, 0, cv.width, cv.height);
          g.strokeStyle = '#fff'; g.lineWidth = 3; g.font = `bold ${Math.round(Math.min(cv.width / cols, cv.height / rows) / 5)}px system-ui`; g.textAlign = 'center'; g.textBaseline = 'middle';
          for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
            const x = c * cv.width / cols, y = r * cv.height / rows, w = cv.width / cols, h = cv.height / rows;
            g.strokeRect(x, y, w, h);
            g.fillStyle = 'rgba(0,0,0,.55)'; g.beginPath(); g.arc(x + w / 2, y + h / 2, Math.min(w, h) / 6, 0, Math.PI * 2); g.fill();
            g.fillStyle = '#fff'; g.fillText(order(r, c), x + w / 2, y + h / 2);
          }
          $('.hint').innerHTML = mode === 'grid'
            ? `📲 <strong>Post in number order: 1 first, ${rows * cols} last.</strong> Instagram puts your newest post at the top-left, so posting the bottom-right tile first makes the full picture appear on your profile. Don't post anything else in between.`
            : mode === 'carousel' ? `📲 Add all ${cols} images to <strong>one post</strong> in order 1 → ${cols}. When people swipe, the picture continues seamlessly from slide to slide.`
              : `${rows * cols} tiles, numbered left to right, top to bottom.`;
        };
        const makeTiles = async () => {
          const k = crop(), list = [], fw = k.sw / cols, fh = k.sh / rows;
          for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
            const cv = UI.canvas(k.tw, k.th), g = cv.getContext('2d');
            g.imageSmoothingQuality = 'high'; g.drawImage(img, k.sx + c * fw, k.sy + r * fh, fw, fh, 0, 0, cv.width, cv.height);
            const n = order(r, c);
            list.push({ n, name: `${UI.baseName(file.name)}-${String(n).padStart(2, '0')}.jpg`, blob: await UI.canvasBlob(cv, 'image/jpeg', 0.93), thumb: cv.toDataURL('image/jpeg', 0.5) });
          }
          return list.sort((a, b) => a.n - b.n);
        };
        $('.mode').append(UI.seg([['grid', 'Profile grid'], ['carousel', 'Carousel (swipe)'], ['custom', 'Custom grid']], mode, v => { mode = v; setMode(); }));
        $('.px').oninput = e => { px = +e.target.value; draw(); };
        $('.py').oninput = e => { py = +e.target.value; draw(); };
        $('.chg').onclick = change;
        $('.go').onclick = e => UI.busy(e.currentTarget, async () => {
          tiles = await makeTiles();
          const list = UI.h('<div class="file-list"></div>');
          tiles.forEach(t => list.append(UI.fileRow({ name: t.name, sub: `Post #${t.n} · ${UI.fmtBytes(t.blob.size)}`, thumb: t.thumb, blob: t.blob })));
          $('.out').innerHTML = ''; $('.out').append(list);
          await UI.zip(tiles.map(t => ({ name: t.name, blob: t.blob })), `${UI.baseName(file.name)}-${mode === 'carousel' ? 'carousel' : 'grid'}.zip`);
        }, 'Cutting tiles…');
        setMode();
      },
    });
  });
})();

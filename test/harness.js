window.__dl = []; UI.download = (d, n) => window.__dl.push({ n, size: d.size ?? d.length, d });
window.__p = [];
const _busy = UI.busy; UI.busy = (...a) => { const p = _busy(...a); __p.push(p); return p; };
const _dz = UI.dropzone; UI.dropzone = o => _dz({ ...o, onFiles: fs => { const p = Promise.resolve(o.onFiles(fs)); __p.push(p); return p; } });
window.settle = async () => { for (let i = 0; i < 20; i++) { const n = __p.length; await Promise.allSettled(__p); await new Promise(r => queueMicrotask(r)); await new Promise(r => { const c = new MessageChannel(); c.port1.onmessage = r; c.port2.postMessage(0); }); if (__p.length === n) return; } };
window.setFiles = (input, files) => { const dt = new DataTransfer(); files.forEach(f => dt.items.add(f)); input.files = dt.files; input.dispatchEvent(new Event('change')); };
window.mkPdf = async (pages = 2, name) => { const { PDFDocument, StandardFonts } = await UI.lib('pdflib'); const d = await PDFDocument.create(); const f = await d.embedFont(StandardFonts.Helvetica); for (let i = 0; i < pages; i++) { const p = d.addPage([595, 842]); p.drawText('Heading Title ' + (i + 1), { x: 50, y: 760, size: 28, font: f }); for (let l = 0; l < 15; l++) p.drawText('This is line ' + l + ' of a paragraph with some lorem ipsum dolor sit amet text.', { x: 50, y: 700 - l * 16, size: 12, font: f }); } return new File([await d.save()], name || ('test' + pages + '.pdf'), { type: 'application/pdf' }); };
window.mkImg = async (w = 800, h = 600, type = 'image/png', name) => { const c = UI.canvas(w, h), x = c.getContext('2d'); const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#f43f5e'); g.addColorStop(1, '#3b82f6'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = '#fff'; x.font = 'bold 60px Arial'; x.fillText('Hello OCR 123', 40, h / 2); return new File([await UI.canvasBlob(c, type, 0.95)], name || ('img.' + UI.ext(type)), { type }); };
window.setVal = (el, sel, v) => { const i = el.querySelector(sel); i.value = v; i.dispatchEvent(new Event('input', { bubbles: true })); i.dispatchEvent(new Event('change', { bubbles: true })); };
window.runTool = async (slug, files, setup, opts = {}) => {
  __dl.length = 0; __p.length = 0;
  const el = document.createElement('div'); el.className = 'tool-app'; document.body.appendChild(el);
  let error = null;
  try {
    Tools.mount(slug, el, opts.preset);
    if (files) { setFiles(el.querySelector('input[type=file]'), files); await settle(); }
    if (setup) { await setup(el); await settle(); }
    const go = opts.btn === false ? null : el.querySelector(opts.btn || '.go');
    if (go) { go.click(); await settle(); for (let i = 0; i < (opts.polls ?? 4) && !__dl.length; i++) { await new Promise(r => setTimeout(r, 250)); await settle(); } }
  } catch (e) { error = e.message; }
  const res = { dl: __dl.map(x => x.n + ' (' + x.size + ')'), err: error || ((el.querySelector('.err') || {}).innerText || ''), out: ((el.querySelector(opts.outSel || '.out') || {}).innerText || '').replace(/\s+/g, ' ').slice(0, 220) };
  if (opts.inspect) res.x = await opts.inspect(el);
  if (!opts.keep) el.remove(); else res.el = el;
  return res;
};
'harness ready';

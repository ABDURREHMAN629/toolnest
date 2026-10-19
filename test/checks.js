(function () {
  window.pdfInfo = async (blob, pagesForText = [1]) => {
    const pdf = await UI.openPdf(new File([blob], 'x.pdf'));
    const { PDFDocument } = await UI.lib('pdflib');
    const doc = await PDFDocument.load(await blob.arrayBuffer(), { ignoreEncryption: true });
    const text = {};
    for (const n of pagesForText) if (n <= pdf.numPages) text[n] = (await (await pdf.getPage(n)).getTextContent()).items.map(i => i.str).join(' ');
    return { pages: pdf.numPages, rotations: doc.getPages().map(p => p.getRotation().angle), text, size: blob.size };
  };
  window.pdfInk = async (blob, n = 1) => {
    const pdf = await UI.openPdf(new File([blob], 'x.pdf')), c = await UI.renderPage(pdf, n, 0.5), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
    let ink = 0; for (let i = 0; i < d.length; i += 4) if (d[i] < 235 || d[i + 1] < 235 || d[i + 2] < 235) ink++;
    return ink / (d.length / 4);
  };
  window.imgInfo = async blob => { const img = await UI.loadImage(blob); return { w: img.naturalWidth, h: img.naturalHeight, size: blob.size, type: blob.type }; };
  window.mediaInfo = (blob, kind = 'video') => new Promise(res => {
    const m = document.createElement(kind); m.preload = 'metadata'; m.muted = true;
    m.onloadedmetadata = () => res({ duration: +m.duration.toFixed(2), w: m.videoWidth, h: m.videoHeight, size: blob.size, type: blob.type });
    m.onerror = () => res({ error: 'not playable in this browser', size: blob.size, type: blob.type });
    setTimeout(() => res({ error: 'metadata timeout', size: blob.size }), 15000);
    m.src = URL.createObjectURL(blob);
  });
  window.audioInfo = async blob => { const ac = new AudioContext(); try { const b = await ac.decodeAudioData(await blob.arrayBuffer()); return { duration: +b.duration.toFixed(2), channels: b.numberOfChannels, rate: b.sampleRate, size: blob.size }; } catch (e) { return { error: e.message, size: blob.size }; } finally { ac.close(); } };
  window.zipList = async blob => { const JSZip = await UI.lib('jszip'); const z = await JSZip.loadAsync(blob); return Promise.all(Object.values(z.files).filter(f => !f.dir).map(async f => ({ name: f.name, blob: await f.async('blob') }))); };
  window.lastFiles = () => __dl.map(x => ({ name: x.n, blob: x.d }));
  window.zipFromTool = async el => { __dl.length = 0; const b = [...el.querySelectorAll('button')].find(x => /ZIP/.test(x.textContent)); if (!b) return []; b.click(); await settle(); for (let i = 0; i < 20 && !__dl.length; i++) { await new Promise(r => setTimeout(r, 250)); } return __dl.length ? zipList(__dl[0].d) : []; };
})();
'checks ready';

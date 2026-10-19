(function () {
  const MIME = { pdf: 'application/pdf', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', bmp: 'image/bmp', tif: 'image/tiff', ico: 'image/x-icon', svg: 'image/svg+xml', heic: 'image/heic', mp4: 'video/mp4', webm: 'video/webm', ogv: 'video/ogg', avi: 'video/x-msvideo', flv: 'video/x-flv', wmv: 'video/x-ms-wmv', mp3: 'audio/mpeg', wav: 'audio/wav', md: 'text/markdown', csv: 'text/csv', json: 'application/json', js: 'text/javascript', css: 'text/css', html: 'text/html', sql: 'text/plain' };
  window.realFile = async name => {
    const r = await fetch('/__test/material/' + name);
    if (!r.ok) throw new Error('Missing test file ' + name + ' — run node test/fetch-material.js');
    return new File([await r.blob()], name, { type: MIME[name.split('.').pop().toLowerCase()] || '' });
  };
  window.realText = async name => (await realFile(name)).text();
  window.REPORT = [];
  window.check = (name, ok, detail = '') => { REPORT.push(`${ok ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`); return ok; };
})();
'real material loader ready';

window.smoke = async (cat, wait = 250) => {
  const out = [];
  for (const t of TOOLS.filter(x => x.cat === cat)) {
    const slug = t.of || t.slug, el = document.createElement('div'), errs = [];
    el.className = 'tool-app'; document.body.appendChild(el);
    const onErr = e => errs.push((e.error && e.error.message) || e.message || String(e.reason));
    window.addEventListener('error', onErr); window.addEventListener('unhandledrejection', onErr);
    try { Tools.mount(slug, el, t.preset || {}); } catch (e) { errs.push(e.message); }
    await new Promise(r => setTimeout(r, wait));
    window.removeEventListener('error', onErr); window.removeEventListener('unhandledrejection', onErr);
    const notice = el.querySelector('.notice.error');
    out.push({ slug: t.slug, ok: Tools.has(slug) && !errs.length && !notice && el.querySelectorAll('*').length > 3, nodes: el.querySelectorAll('*').length, err: errs.join('; ') || (notice ? notice.textContent.slice(0, 120) : '') });
    el.remove();
  }
  return out;
};
'smoke ready';

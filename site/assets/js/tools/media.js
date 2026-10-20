(function () {
  const { esc } = UI;
  const VIDEO_ACCEPT = 'video/*,.mkv,.avi,.mov,.flv,.wmv,.3gp,.m4v,.ts,.mts';
  const AUDIO_ACCEPT = 'audio/*,.mp3,.wav,.m4a,.aac,.ogg,.oga,.flac,.opus,.wma,.amr,.aiff';
  const MIME = { mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', mkv: 'video/x-matroska', avi: 'video/x-msvideo', gif: 'image/gif', mp3: 'audio/mpeg', wav: 'audio/wav', m4a: 'audio/mp4', aac: 'audio/aac', ogg: 'audio/ogg', flac: 'audio/flac', opus: 'audio/ogg' };
  const EVEN = ['-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2'];
  const extOf = name => (String(name).split('.').pop() || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const parseTime = s => { s = String(s).trim(); if (!s) return NaN; return s.split(':').reduce((a, p) => a * 60 + parseFloat(p || 0), 0); };
  const fmtT = s => { if (!isFinite(s)) return '0:00'; const m = Math.floor(s / 60), sec = (s % 60).toFixed(1).padStart(4, '0'); return `${m}:${sec}`; };
  const AUDIO_CODEC = (fmt, br) => ({
    mp3: ['-c:a', 'libmp3lame', '-b:a', br + 'k'], wav: ['-c:a', 'pcm_s16le'], m4a: ['-c:a', 'aac', '-b:a', br + 'k'], aac: ['-c:a', 'aac', '-b:a', br + 'k'],
    ogg: ['-c:a', 'libvorbis', '-b:a', br + 'k'], flac: ['-c:a', 'flac'],
    opus: ['-c:a', 'opus', '-strict', '-2', '-b:a', br + 'k', '-ar', '48000'],
  })[fmt];

  function ffTool(root, spec) {
    root.innerHTML = `<div class="stack"><div class="pick"></div><div class="work stack" hidden>
      <div class="cur"></div><div class="pv"></div><div class="row opts"></div><div class="extra"></div>
      <div class="btn-row"><button class="btn lg go">${esc(spec.button)}</button><button class="btn ghost stop" hidden>Cancel</button></div>
      <div class="status"></div><div class="err"></div><div class="out stack"></div></div>
      <p class="small muted">🔒 Your file is processed on your device with a video engine (~30 MB) that downloads once per visit. Long or high-resolution files can take a few minutes — keep this tab open.</p></div>`;
    const $ = UI.q(root);
    const ctx = { $, file: null, meta: {}, extra: $('.extra') };
    const form = spec.fields ? UI.fields($('.opts'), spec.fields, v => spec.onOpts && spec.onOpts(v, ctx)) : null;
    if (!spec.fields) $('.opts').remove();
    ctx.form = form;
    const dz = UI.dropzone({
      accept: spec.accept || VIDEO_ACCEPT, icon: spec.icon || '🎬', title: spec.title || 'Choose a video file', hint: spec.hint || 'MP4, MOV, WebM, MKV, AVI and more · or drag & drop',
      onFiles: async ([f]) => {
        ctx.file = f; $('.out').innerHTML = ''; $('.err').innerHTML = '';
        const url = URL.createObjectURL(f);
        const audio = spec.audio || f.type.startsWith('audio/');
        $('.pv').innerHTML = audio ? `<audio controls src="${url}" style="width:100%"></audio>` : `<video controls playsinline src="${url}" style="width:100%;max-height:360px;border-radius:12px;background:#000"></video>`;
        const m = ctx.media = $('.pv').firstElementChild;
        ctx.meta = await new Promise(res => { m.onloadedmetadata = () => res({ duration: m.duration, width: m.videoWidth, height: m.videoHeight }); m.onerror = () => { $('.pv').innerHTML = '<div class="notice small">Preview is not available for this format in your browser, but it can still be converted.</div>'; res({}); }; setTimeout(() => res({}), 5000); });
        const info = [UI.fmtBytes(f.size), ctx.meta.duration ? UI.fmtTime(ctx.meta.duration) : '', ctx.meta.width ? `${ctx.meta.width}×${ctx.meta.height}` : ''].filter(Boolean).join(' · ');
        $('.cur').innerHTML = '';
        const row = UI.fileRow({ name: f.name, sub: info, icon: audio ? '🎵' : '🎬', extra: '<button class="btn sm ghost">Change file</button>' });
        row.querySelector('button').onclick = () => dz.pick();
        $('.cur').append(row);
        $('.pick').hidden = true; $('.work').hidden = false;
        spec.onFile && spec.onFile(ctx);
      },
    });
    $('.pick').append(dz);
    $('.go').onclick = () => UI.busy($('.go'), async () => {
      const o = form ? form.get() : {};
      const jobs = [].concat(spec.build(o, ctx));
      const prog = UI.progress(); $('.status').innerHTML = ''; $('.status').append(prog.el); $('.out').innerHTML = '';
      let cancelled = false;
      $('.stop').hidden = false; $('.stop').onclick = () => { cancelled = true; UI.ffmpegTerminate(); };
      const logs = [];
      const process = async () => {
        const ff = await UI.ffmpeg((t, p) => prog.set(p, t));
        const inName = 'input.' + (extOf(ctx.file.name) || 'bin');
        prog.set(0, 'Reading file…');
        await ff.writeFile(inName, new Uint8Array(await ctx.file.arrayBuffer()));
        const onLog = ({ message }) => { logs.push(message); if (logs.length > 40) logs.shift(); };
        const onProg = ({ progress }) => { const p = UI.clamp(progress, 0, 1); prog.set(p, `Processing… ${Math.round(p * 100)}%`); };
        ff.on('log', onLog); ff.on('progress', onProg);
        let data = null, used = null;
        try {
          for (const j of jobs) {
            const args = j.args.map(a => a === '$IN' ? inName : a);
            logs.length = 0;
            const code = await ff.exec(args);
            const input = logs.join('\n').split(/Output #0|Stream mapping/)[0];
            if (code === 0 && (!j.requires || j.requires(input))) { try { data = await ff.readFile(j.out); } catch (e) { data = null; } }
            try { await ff.deleteFile(j.out); } catch (e) { }
            if (data && data.length) { used = j; break; }
          }
        } finally { ff.off('log', onLog); ff.off('progress', onProg); }
        try { await ff.deleteFile(inName); } catch (e) { }
        return { data, used };
      };
      try {
        let data, used;
        try { ({ data, used } = await process()); }
        catch (e) {
          if (cancelled || !/RuntimeError|out of bounds|unreachable|abort/i.test(e && (e.message || e))) throw e;
          UI.ffmpegTerminate(); prog.set(0, 'Restarting the video engine…');
          ({ data, used } = await process());
        }
        if (!used) {
          console.warn(logs.join('\n'));
          const hint = logs.reverse().find(l => /error|invalid|not supported|unknown|no such|could not/i.test(l));
          throw new Error('Processing failed.' + (hint ? ' ' + hint : ' This file or format may not be supported.'));
        }
        const blob = new Blob([data.buffer], { type: used.mime });
        const url = URL.createObjectURL(blob), out = $('.out');
        const isImg = used.mime.startsWith('image/'), isAud = used.mime.startsWith('audio/');
        out.append(UI.h(`<div class="notice success">✓ Done! ${UI.fmtBytes(ctx.file.size)} → <strong>${UI.fmtBytes(blob.size)}</strong>${spec.showSavings && blob.size < ctx.file.size ? ` <span style="color:var(--success);font-weight:700">(−${Math.round((1 - blob.size / ctx.file.size) * 100)}%)</span>` : ''}</div>`));
        out.append(UI.h(isImg ? `<div class="preview"><img src="${url}"></div>` : isAud ? `<audio controls src="${url}" style="width:100%"></audio>` : `<video controls playsinline src="${url}" style="width:100%;max-height:360px;border-radius:12px;background:#000"></video>`));
        out.append(UI.fileRow({ name: used.name, sub: UI.fmtBytes(blob.size), icon: isImg ? '🖼️' : isAud ? '🎵' : '🎬', blob }));
        UI.download(blob, used.name);
      } catch (e) {
        if (cancelled) throw new Error('Cancelled.');
        throw e;
      } finally { $('.stop').hidden = true; prog.el.remove(); }
    }, 'Processing…', $('.err'));
    return ctx;
  }

  function rangeHelpers(ctx) {
    const f = ctx.form, d = ctx.meta.duration;
    if (isFinite(d)) { f.set('start', '0:00'); f.set('end', fmtT(d)); }
    ctx.extra.innerHTML = '<div class="btn-row"><button class="btn sm secondary s">⏮ Set start = current time</button><button class="btn sm secondary e">Set end = current time ⏭</button><button class="btn sm ghost p">▶ Preview selection</button><span class="small muted len"></span></div>';
    const q = UI.q(ctx.extra), m = ctx.media;
    const len = () => { const v = f.get(); const L = parseTime(v.end) - parseTime(v.start); q('.len').textContent = isFinite(L) && L > 0 ? `Selection: ${fmtT(L)}` : ''; };
    q('.s').onclick = () => { if (m) { f.set('start', fmtT(m.currentTime)); len(); } };
    q('.e').onclick = () => { if (m) { f.set('end', fmtT(m.currentTime)); len(); } };
    q('.p').onclick = () => {
      if (!m) return; const v = f.get(), s = parseTime(v.start), e = parseTime(v.end);
      m.currentTime = s; m.play();
      const stop = () => { if (m.currentTime >= e) { m.pause(); m.removeEventListener('timeupdate', stop); } };
      m.addEventListener('timeupdate', stop);
    };
    ctx.form.el('start').addEventListener('input', len); ctx.form.el('end').addEventListener('input', len); len();
  }
  const rangeOf = (o, ctx) => {
    const s = parseTime(o.start) || 0, e = parseTime(o.end);
    const end = isFinite(e) ? e : ctx.meta.duration;
    if (!(end > s)) throw new Error('The end time must be after the start time.');
    return [s, end - s];
  };

  Tools.define('video-converter', root => {
    ffTool(root, {
      button: 'Convert video',
      fields: [
        { id: 'format', label: 'Convert to', type: 'seg', value: 'mp4', options: [['mp4', 'MP4'], ['webm', 'WebM'], ['mov', 'MOV'], ['mkv', 'MKV'], ['avi', 'AVI']] },
        { id: 'q', label: 'Quality', type: 'select', value: 'medium', options: [['high', 'High'], ['medium', 'Balanced'], ['low', 'Small file']] },
        { id: 'fast', label: 'Fast mode — keep original codecs if possible', type: 'checkbox', value: true, show: v => ['mp4', 'mov', 'mkv'].includes(v.format) },
      ],
      build(o, ctx) {
        const out = 'output.' + o.format, name = UI.baseName(ctx.file.name) + '.' + o.format, mime = MIME[o.format];
        const crf = { high: 20, medium: 24, low: 29 }[o.q];
        const x264 = [...EVEN, '-c:v', 'libx264', '-preset', 'superfast', '-crf', String(crf), '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k'];
        const enc = {
          mp4: [...x264, '-movflags', '+faststart'], mov: x264, mkv: x264,
          webm: ['-c:v', 'libvpx', '-deadline', 'realtime', '-cpu-used', '8', '-crf', String(crf + 6), '-b:v', '2M', '-c:a', 'libvorbis'],
          avi: ['-c:v', 'mpeg4', '-q:v', String({ high: 3, medium: 5, low: 8 }[o.q]), '-c:a', 'libmp3lame', '-b:a', '160k'],
        }[o.format];
        const jobs = [];
        const playable = s => /Video: (h264|hevc|av1)/.test(s) && (!/Audio:/.test(s) || /Audio: (aac|mp3)/.test(s));
        if (o.fast && ['mp4', 'mov', 'mkv'].includes(o.format)) jobs.push({ args: ['-i', '$IN', '-map', '0:v:0?', '-map', '0:a:0?', '-c', 'copy', ...(o.format === 'mp4' ? ['-movflags', '+faststart'] : []), out], out, mime, name, requires: o.format === 'mkv' ? null : playable });
        jobs.push({ args: ['-i', '$IN', ...enc, out], out, mime, name });
        return jobs;
      },
    });
  });

  Tools.define('video-compressor', root => {
    ffTool(root, {
      button: 'Compress video', showSavings: true,
      fields: [
        { id: 'mode', label: 'Compress by', type: 'seg', value: 'level', options: [['level', 'Compression level'], ['size', 'Target file size']] },
        { id: 'level', label: 'Level', type: 'select', value: 'medium', options: [['light', 'Light — best quality'], ['medium', 'Recommended'], ['strong', 'Strong'], ['max', 'Maximum — smallest']], show: v => v.mode === 'level' },
        { id: 'mb', label: 'Target size', type: 'number', value: 16, min: 1, unit: 'MB', show: v => v.mode === 'size', hint: 'WhatsApp 16 MB · Discord 10 MB · Email 25 MB' },
        { id: 'res', label: 'Resolution', type: 'select', value: '720', options: [['orig', 'Keep original'], ['1080', '1080p'], ['720', '720p (HD)'], ['480', '480p'], ['360', '360p']] },
        { id: 'audio', label: 'Audio', type: 'select', value: '96', options: [['128', 'Keep (128 kbps)'], ['96', 'Good (96 kbps)'], ['64', 'Low (64 kbps)'], ['none', 'Remove audio']] },
      ],
      build(o, ctx) {
        const vf = o.res !== 'orig' ? ['-vf', `scale=-2:'trunc(min(${o.res},ih)/2)*2'`] : EVEN;
        const aud = o.audio === 'none' ? ['-an'] : ['-c:a', 'aac', '-b:a', o.audio + 'k'];
        let rate;
        if (o.mode === 'size') {
          const d = ctx.meta.duration;
          if (!d) throw new Error('Could not read the video length. Use "Compression level" mode instead.');
          const total = (o.mb * 8 * 1024 * 1024 * 0.94) / d, vb = Math.max(80000, total - (o.audio === 'none' ? 0 : +o.audio * 1000));
          rate = ['-b:v', Math.round(vb / 1000) + 'k', '-maxrate', Math.round(vb * 1.4 / 1000) + 'k', '-bufsize', Math.round(vb * 2 / 1000) + 'k'];
        } else rate = ['-crf', String({ light: 24, medium: 28, strong: 32, max: 36 }[o.level])];
        const name = UI.baseName(ctx.file.name) + '-compressed.mp4';
        return { args: ['-i', '$IN', ...vf, '-c:v', 'libx264', '-preset', 'veryfast', ...rate, '-pix_fmt', 'yuv420p', ...aud, '-movflags', '+faststart', 'output.mp4'], out: 'output.mp4', mime: 'video/mp4', name };
      },
    });
  });

  Tools.define('video-to-mp3', (root, preset) => {
    ffTool(root, {
      button: 'Extract audio',
      fields: [
        { id: 'fmt', label: 'Audio format', type: 'seg', value: preset.format || 'mp3', options: [['mp3', 'MP3'], ['m4a', 'M4A'], ['wav', 'WAV'], ['ogg', 'OGG']] },
        { id: 'br', label: 'Quality', type: 'select', value: '192', options: [['320', '320 kbps (best)'], ['256', '256 kbps'], ['192', '192 kbps'], ['128', '128 kbps'], ['96', '96 kbps (small)']], show: v => v.fmt !== 'wav' },
      ],
      build(o, ctx) {
        const out = 'output.' + o.fmt;
        return { args: ['-i', '$IN', '-vn', ...AUDIO_CODEC(o.fmt, o.br), out], out, mime: MIME[o.fmt], name: UI.baseName(ctx.file.name) + '.' + o.fmt };
      },
    });
  });

  Tools.define('video-trimmer', root => {
    ffTool(root, {
      button: 'Trim video',
      fields: [
        { id: 'start', label: 'Start (m:ss)', type: 'text', value: '0:00' },
        { id: 'end', label: 'End (m:ss)', type: 'text', value: '' },
        { id: 'mode', label: 'Mode', type: 'select', value: 'fast', options: [['fast', 'Fast (no re-encoding)'], ['precise', 'Frame-accurate (re-encode)']] },
      ],
      onFile: rangeHelpers,
      build(o, ctx) {
        const [s, d] = rangeOf(o, ctx), ext = extOf(ctx.file.name);
        if (o.mode === 'fast' && ['mp4', 'mov', 'mkv', 'webm', 'm4v'].includes(ext)) {
          const out = 'output.' + ext;
          return [{ args: ['-ss', String(s), '-i', '$IN', '-t', String(d), '-map', '0', '-c', 'copy', '-avoid_negative_ts', 'make_zero', out], out, mime: MIME[ext] || 'video/mp4', name: `${UI.baseName(ctx.file.name)}-trimmed.${ext}` },
            { args: ['-ss', String(s), '-i', '$IN', '-t', String(d), ...EVEN, '-c:v', 'libx264', '-preset', 'superfast', '-crf', '20', '-c:a', 'aac', 'output.mp4'], out: 'output.mp4', mime: 'video/mp4', name: `${UI.baseName(ctx.file.name)}-trimmed.mp4` }];
        }
        return { args: ['-ss', String(s), '-i', '$IN', '-t', String(d), ...EVEN, '-c:v', 'libx264', '-preset', 'superfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-movflags', '+faststart', 'output.mp4'], out: 'output.mp4', mime: 'video/mp4', name: `${UI.baseName(ctx.file.name)}-trimmed.mp4` };
      },
    });
  });

  Tools.define('video-to-gif', root => {
    ffTool(root, {
      button: 'Create GIF',
      fields: [
        { id: 'start', label: 'Start (m:ss)', type: 'text', value: '0:00' },
        { id: 'dur', label: 'Length', type: 'number', value: 5, min: 0.5, max: 30, unit: 'sec' },
        { id: 'w', label: 'Width', type: 'select', value: '480', options: [['320', '320 px'], ['480', '480 px'], ['640', '640 px'], ['800', '800 px']] },
        { id: 'fps', label: 'Frame rate', type: 'select', value: '12', options: [['8', '8 fps (smallest)'], ['12', '12 fps'], ['15', '15 fps'], ['20', '20 fps (smooth)']] },
      ],
      onFile(ctx) {
        ctx.extra.innerHTML = '<button class="btn sm secondary">⏮ Start from current video time</button>';
        ctx.extra.querySelector('button').onclick = () => ctx.media && ctx.form.set('start', fmtT(ctx.media.currentTime));
      },
      build(o, ctx) {
        const s = parseTime(o.start) || 0, d = UI.clamp(o.dur || 5, 0.5, 30);
        return { args: ['-ss', String(s), '-t', String(d), '-i', '$IN', '-vf', `fps=${o.fps},scale=${o.w}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=4`, '-loop', '0', 'output.gif'], out: 'output.gif', mime: 'image/gif', name: UI.baseName(ctx.file.name) + '.gif' };
      },
    });
  });

  Tools.define('audio-converter', root => {
    ffTool(root, {
      button: 'Convert audio', audio: true, accept: AUDIO_ACCEPT + ',' + VIDEO_ACCEPT, icon: '🎧', title: 'Choose an audio file', hint: 'MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WMA and more',
      fields: [
        { id: 'fmt', label: 'Convert to', type: 'seg', value: 'mp3', options: [['mp3', 'MP3'], ['wav', 'WAV'], ['m4a', 'M4A'], ['aac', 'AAC'], ['ogg', 'OGG'], ['flac', 'FLAC'], ['opus', 'OPUS']] },
        { id: 'br', label: 'Bitrate', type: 'select', value: '192', options: [['320', '320 kbps'], ['256', '256 kbps'], ['192', '192 kbps'], ['128', '128 kbps'], ['96', '96 kbps'], ['64', '64 kbps']], show: v => !['wav', 'flac'].includes(v.fmt) },
      ],
      build(o, ctx) {
        const out = 'output.' + o.fmt;
        return { args: ['-i', '$IN', '-vn', ...AUDIO_CODEC(o.fmt, o.br), out], out, mime: MIME[o.fmt], name: UI.baseName(ctx.file.name) + '.' + o.fmt };
      },
    });
  });

  Tools.define('mp3-cutter', root => {
    ffTool(root, {
      button: 'Cut audio', audio: true, accept: AUDIO_ACCEPT, icon: '🎼', title: 'Choose an audio file', hint: 'MP3, WAV, M4A, OGG, FLAC…',
      fields: [
        { id: 'start', label: 'Start (m:ss)', type: 'text', value: '0:00' },
        { id: 'end', label: 'End (m:ss)', type: 'text', value: '' },
        { id: 'fmt', label: 'Save as', type: 'select', value: 'mp3', options: [['mp3', 'MP3'], ['m4a', 'M4A (iPhone ringtone: rename to .m4r)'], ['wav', 'WAV']] },
        { id: 'fin', label: 'Fade in (2s)', type: 'checkbox', value: false },
        { id: 'fout', label: 'Fade out (2s)', type: 'checkbox', value: false },
      ],
      onFile: rangeHelpers,
      build(o, ctx) {
        const [s, d] = rangeOf(o, ctx);
        const fades = [o.fin ? 'afade=t=in:st=0:d=2' : '', o.fout ? `afade=t=out:st=${Math.max(0, d - 2).toFixed(2)}:d=2` : ''].filter(Boolean).join(',');
        const out = 'output.' + o.fmt;
        return { args: ['-ss', String(s), '-i', '$IN', '-t', String(d), '-vn', ...(fades ? ['-af', fades] : []), ...AUDIO_CODEC(o.fmt, 192), out], out, mime: MIME[o.fmt], name: `${UI.baseName(ctx.file.name)}-cut.${o.fmt}` };
      },
    });
  });

  Tools.define('mute-video', root => {
    ffTool(root, {
      button: 'Remove audio',
      build(o, ctx) {
        const ext = ['mp4', 'mov', 'mkv', 'webm', 'm4v', 'avi'].includes(extOf(ctx.file.name)) ? extOf(ctx.file.name) : 'mp4';
        const out = 'output.' + ext, name = `${UI.baseName(ctx.file.name)}-muted.${ext}`;
        return [{ args: ['-i', '$IN', '-map', '0:v', '-c:v', 'copy', '-an', out], out, mime: MIME[ext] || 'video/mp4', name },
          { args: ['-i', '$IN', ...EVEN, '-c:v', 'libx264', '-preset', 'superfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-an', 'output.mp4'], out: 'output.mp4', mime: 'video/mp4', name: `${UI.baseName(ctx.file.name)}-muted.mp4` }];
      },
    });
  });

  const pickMime = list => list.find(m => window.MediaRecorder && MediaRecorder.isTypeSupported(m)) || '';
  const noMedia = root => { root.innerHTML = '<div class="notice error">Your browser does not support this feature. Please use the latest Chrome, Edge, Firefox or Safari.</div>'; };
  const timerText = ms => UI.fmtTime(ms / 1000);

  function wavBlob(buf) {
    const ch = Math.min(2, buf.numberOfChannels), len = buf.length * ch * 2, dv = new DataView(new ArrayBuffer(44 + len));
    const w = (o, s) => [...s].forEach((c, i) => dv.setUint8(o + i, c.charCodeAt(0)));
    w(0, 'RIFF'); dv.setUint32(4, 36 + len, true); w(8, 'WAVE'); w(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, ch, true);
    dv.setUint32(24, buf.sampleRate, true); dv.setUint32(28, buf.sampleRate * ch * 2, true); dv.setUint16(32, ch * 2, true); dv.setUint16(34, 16, true); w(36, 'data'); dv.setUint32(40, len, true);
    const data = [...Array(ch)].map((_, i) => buf.getChannelData(i));
    for (let i = 0, o = 44; i < buf.length; i++) for (let c = 0; c < ch; c++, o += 2) { const s = Math.max(-1, Math.min(1, data[c][i])); dv.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7fff, true); }
    return new Blob([dv], { type: 'audio/wav' });
  }
  async function mp3Blob(buf, kbps = 128) {
    const lame = await UI.lib('lamejs');
    const ch = Math.min(2, buf.numberOfChannels), enc = new lame.Mp3Encoder(ch, buf.sampleRate, kbps), out = [];
    const toI16 = a => { const r = new Int16Array(a.length); for (let i = 0; i < a.length; i++) { const s = Math.max(-1, Math.min(1, a[i])); r[i] = s < 0 ? s * 0x8000 : s * 0x7fff; } return r; };
    const L = toI16(buf.getChannelData(0)), R = ch > 1 ? toI16(buf.getChannelData(1)) : null;
    for (let i = 0; i < L.length; i += 1152) { const m = R ? enc.encodeBuffer(L.subarray(i, i + 1152), R.subarray(i, i + 1152)) : enc.encodeBuffer(L.subarray(i, i + 1152)); if (m.length) out.push(new Uint8Array(m)); }
    const end = enc.flush(); if (end.length) out.push(new Uint8Array(end));
    return new Blob(out, { type: 'audio/mpeg' });
  }
  const decode = async blob => { const ac = new (window.AudioContext || window.webkitAudioContext)(); try { return await ac.decodeAudioData(await blob.arrayBuffer()); } finally { ac.close(); } };

  function liveMeter(stream, canvas, meterEl, onLevel) {
    const ac = new (window.AudioContext || window.webkitAudioContext)(), src = ac.createMediaStreamSource(stream), an = ac.createAnalyser();
    an.fftSize = 2048; src.connect(an);
    const buf = new Uint8Array(an.fftSize); let raf, on = true;
    const draw = () => {
      if (!on) return;
      an.getByteTimeDomainData(buf);
      let peak = 0; for (const v of buf) peak = Math.max(peak, Math.abs(v - 128));
      const lvl = Math.min(1, peak / 100);
      if (meterEl) meterEl.style.width = (lvl * 100).toFixed(1) + '%';
      onLevel && onLevel(lvl);
      if (canvas) {
        const x = canvas.getContext('2d'), W = canvas.width = canvas.clientWidth * 2, H = canvas.height = canvas.clientHeight * 2;
        x.clearRect(0, 0, W, H); x.lineWidth = 3; x.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary') || '#4f46e5';
        x.beginPath(); for (let i = 0; i < buf.length; i += 4) { const X = i / buf.length * W, Y = buf[i] / 255 * H; i ? x.lineTo(X, Y) : x.moveTo(X, Y); } x.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { on = false; cancelAnimationFrame(raf); ac.close(); };
  }

  Tools.define('screen-recorder', root => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      root.innerHTML = '<div class="notice warn">Screen recording is supported on desktop browsers (Chrome, Edge, Firefox, Safari). Mobile browsers do not allow websites to record the screen — please use your phone\'s built-in screen recorder.</div>';
      return;
    }
    root.innerHTML = `<div class="stack"><div class="row opts"></div>
      <div class="btn-row"><button class="btn lg start">⏺ Start recording</button><button class="btn lg secondary pause" hidden>⏸ Pause</button><button class="btn lg danger stop" hidden>⏹ Stop</button><span class="big-num timer" style="font-size:1.6rem" hidden>0:00</span></div>
      <video class="live" muted playsinline style="width:100%;max-height:380px;border-radius:12px;background:#000" hidden></video>
      <div class="err"></div><div class="out stack"></div></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [
      { id: 'mic', label: 'Record microphone', type: 'checkbox', value: true },
      { id: 'sys', label: 'Record system / tab audio', type: 'checkbox', value: true },
      { id: 'q', label: 'Quality', type: 'select', value: '1080', options: [['1080', 'Full HD (1080p)'], ['720', 'HD (720p)'], ['1440', '2K (1440p)']] },
      { id: 'cd', label: 'Countdown', type: 'select', value: '3', options: [['0', 'None'], ['3', '3 seconds'], ['5', '5 seconds']] },
    ]);
    let rec, streams = [], t0, acc = 0, tick, ac;
    const cleanup = () => { streams.forEach(s => s.getTracks().forEach(t => t.stop())); streams = []; clearInterval(tick); if (ac) ac.close(); ac = null; $('.live').hidden = true; $('.pause').hidden = $('.stop').hidden = true; $('.start').hidden = false; };
    $('.start').onclick = () => UI.busy($('.start'), async () => {
      const o = form.get(), h = +o.q;
      const display = await navigator.mediaDevices.getDisplayMedia({ video: { frameRate: 30, height: { ideal: h }, width: { ideal: Math.round(h * 16 / 9) } }, audio: o.sys });
      streams.push(display);
      let mic = null;
      if (o.mic) { mic = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }).catch(() => { UI.toast('Microphone not available — recording without it'); return null; }); if (mic) streams.push(mic); }
      const tracks = [...display.getVideoTracks()];
      const aud = [display, mic].filter(s => s && s.getAudioTracks().length);
      if (aud.length > 1) { ac = new AudioContext(); const dest = ac.createMediaStreamDestination(); aud.forEach(s => ac.createMediaStreamSource(s).connect(dest)); tracks.push(...dest.stream.getAudioTracks()); }
      else if (aud.length) tracks.push(...aud[0].getAudioTracks());
      const stream = new MediaStream(tracks);
      for (let i = +o.cd; i > 0; i--) { $('.timer').hidden = false; $('.timer').textContent = `Starting in ${i}…`; await new Promise(r => setTimeout(r, 1000)); }
      const mime = pickMime(['video/mp4;codecs=avc1,mp4a.40.2', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4']);
      rec = new MediaRecorder(stream, { mimeType: mime || undefined, videoBitsPerSecond: h >= 1440 ? 8e6 : h >= 1080 ? 5e6 : 3e6 });
      const chunks = [];
      rec.ondataavailable = e => e.data.size && chunks.push(e.data);
      rec.onstop = () => {
        const type = rec.mimeType || 'video/webm', ext = type.includes('mp4') ? 'mp4' : 'webm', blob = new Blob(chunks, { type });
        cleanup();
        const url = URL.createObjectURL(blob), name = `screen-recording-${new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-')}.${ext}`;
        $('.out').prepend(UI.h(`<div class="card-sub stack"><video controls playsinline src="${url}" style="width:100%;max-height:380px;border-radius:10px;background:#000"></video></div>`));
        $('.out .card-sub').append(UI.fileRow({ name, sub: `${UI.fmtBytes(blob.size)} · ${timerText(acc)}`, icon: '🎬', blob }));
        if (ext === 'webm') $('.out .card-sub').append(UI.h('<p class="small muted">Need MP4? Open the <a href="video-converter">Video Converter</a> and convert this WebM file.</p>'));
      };
      display.getVideoTracks()[0].addEventListener('ended', () => rec && rec.state !== 'inactive' && rec.stop());
      rec.start(1000); acc = 0; t0 = Date.now();
      const live = $('.live'); live.srcObject = display; live.hidden = false; live.play().catch(() => {});
      $('.start').hidden = true; $('.pause').hidden = $('.stop').hidden = false; $('.timer').hidden = false; $('.pause').textContent = '⏸ Pause';
      tick = setInterval(() => { $('.timer').textContent = '🔴 ' + timerText(acc + (rec.state === 'recording' ? Date.now() - t0 : 0)); }, 250);
    }, 'Starting…', $('.err'));
    $('.pause').onclick = () => {
      if (rec.state === 'recording') { rec.pause(); acc += Date.now() - t0; $('.pause').textContent = '▶ Resume'; }
      else { rec.resume(); t0 = Date.now(); $('.pause').textContent = '⏸ Pause'; }
    };
    $('.stop').onclick = () => { if (rec.state === 'recording') acc += Date.now() - t0; rec.stop(); };
  });

  Tools.define('voice-recorder', root => {
    if (!navigator.mediaDevices || !window.MediaRecorder) return noMedia(root);
    root.innerHTML = `<div class="stack"><div class="text-center stack" style="align-items:center">
      <div class="big-num timer">0:00</div><canvas class="wave" style="width:100%;height:90px"></canvas>
      <div class="btn-row" style="justify-content:center"><button class="btn lg rec">🎙️ Start recording</button><button class="btn lg secondary pause" hidden>⏸ Pause</button><button class="btn lg danger stop" hidden>⏹ Stop</button></div></div>
      <div class="err"></div><h3 class="hl" hidden>Your recordings</h3><div class="list stack"></div></div>`;
    const $ = UI.q(root);
    let rec, stream, stopMeter, t0, acc = 0, tick, n = 0;
    $('.rec').onclick = () => UI.busy($('.rec'), async () => {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      stopMeter = liveMeter(stream, $('.wave'));
      rec = new MediaRecorder(stream, { mimeType: pickMime(['audio/webm;codecs=opus', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/webm']) || undefined });
      const chunks = [];
      rec.ondataavailable = e => e.data.size && chunks.push(e.data);
      rec.onstop = () => {
        stream.getTracks().forEach(t => t.stop()); stopMeter(); clearInterval(tick);
        $('.rec').hidden = false; $('.pause').hidden = $('.stop').hidden = true;
        const type = rec.mimeType || 'audio/webm', ext = type.includes('mp4') ? 'm4a' : type.includes('ogg') ? 'ogg' : 'webm';
        const blob = new Blob(chunks, { type }), name = `recording-${++n}`, url = URL.createObjectURL(blob);
        const card = UI.h(`<div class="card-sub stack"><div class="row" style="align-items:center;justify-content:space-between"><strong>🎙️ ${name}</strong><span class="small muted">${timerText(acc)} · ${UI.fmtBytes(blob.size)}</span></div><audio controls src="${url}" style="width:100%"></audio>
          <div class="btn-row"><button class="btn sm o">⬇ ${ext.toUpperCase()}</button><button class="btn sm secondary w">⬇ WAV</button><button class="btn sm secondary m">⬇ MP3</button><button class="btn sm ghost d">Delete</button></div></div>`);
        const q = UI.q(card);
        q('.o').onclick = () => UI.download(blob, `${name}.${ext}`);
        q('.w').onclick = e => UI.busy(e.currentTarget, async () => UI.download(wavBlob(await decode(blob)), `${name}.wav`), 'Converting…');
        q('.m').onclick = e => UI.busy(e.currentTarget, async () => UI.download(await mp3Blob(await decode(blob)), `${name}.mp3`), 'Encoding…');
        q('.d').onclick = () => card.remove();
        $('.list').prepend(card); $('.hl').hidden = false;
      };
      rec.start(500); acc = 0; t0 = Date.now();
      $('.rec').hidden = true; $('.pause').hidden = $('.stop').hidden = false; $('.pause').textContent = '⏸ Pause';
      tick = setInterval(() => { $('.timer').textContent = timerText(acc + (rec.state === 'recording' ? Date.now() - t0 : 0)); }, 200);
    }, 'Starting…', $('.err'));
    $('.pause').onclick = () => { if (rec.state === 'recording') { rec.pause(); acc += Date.now() - t0; $('.pause').textContent = '▶ Resume'; } else { rec.resume(); t0 = Date.now(); $('.pause').textContent = '⏸ Pause'; } };
    $('.stop').onclick = () => { if (rec.state === 'recording') acc += Date.now() - t0; rec.stop(); };
  });

  Tools.define('webcam-test', root => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return noMedia(root);
    root.innerHTML = `<div class="stack"><div class="btn-row"><button class="btn lg start">📷 Start camera</button><select class="select dev" style="max-width:280px" hidden></select><label class="check mir" hidden><input type="checkbox" checked> Mirror</label></div>
      <div class="err"></div><div class="grid-2" style="align-items:start"><div class="stack"><video class="v" autoplay muted playsinline style="width:100%;border-radius:12px;background:#000;transform:scaleX(-1)" hidden></video>
      <div class="btn-row act" hidden><button class="btn snap">📸 Take photo</button><button class="btn secondary rec">⏺ Record clip</button><button class="btn ghost off">Stop camera</button></div></div>
      <div class="stack"><div class="results info"></div><div class="status"></div></div></div><div class="shots thumbs"></div></div>`;
    const $ = UI.q(root), v = $('.v');
    let stream, rec, fps = 0;
    const stop = () => { if (stream) stream.getTracks().forEach(t => t.stop()); stream = null; v.hidden = true; $('.act').hidden = true; };
    const start = async (deviceId) => {
      stop();
      stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: deviceId ? { exact: deviceId } : undefined, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: false });
      v.srcObject = stream; v.hidden = false; $('.act').hidden = false; $('.mir').hidden = false;
      const devs = (await navigator.mediaDevices.enumerateDevices()).filter(d => d.kind === 'videoinput');
      const cur = stream.getVideoTracks()[0];
      $('.dev').innerHTML = devs.map((d, i) => `<option value="${esc(d.deviceId)}" ${d.label === cur.label ? 'selected' : ''}>${esc(d.label || 'Camera ' + (i + 1))}</option>`).join(''); $('.dev').hidden = devs.length < 2;
      let frames = 0, t = performance.now();
      const count = () => { if (!stream) return; frames++; const now = performance.now(); if (now - t > 1000) { fps = Math.round(frames * 1000 / (now - t)); frames = 0; t = now; info(); } v.requestVideoFrameCallback ? v.requestVideoFrameCallback(count) : requestAnimationFrame(count); };
      count();
      const info = () => { if (!stream) return; const s = cur.getSettings(); $('.info').innerHTML = UI.resultsHTML([{ k: 'Status', v: '✅ Working', main: true, s: esc(cur.label || 'Camera') }, { k: 'Resolution', v: `${s.width || v.videoWidth}×${s.height || v.videoHeight}` }, { k: 'Frame rate', v: (fps || Math.round(s.frameRate || 0)) + ' fps' }, { k: 'Aspect ratio', v: s.aspectRatio ? s.aspectRatio.toFixed(2) : '—' }, { k: 'Cameras found', v: devs.length }]); };
      v.onloadedmetadata = info; info();
    };
    $('.start').onclick = () => UI.busy($('.start'), () => start(), 'Starting…', $('.err'));
    $('.dev').onchange = () => UI.busy(null, () => start($('.dev').value), '', $('.err'));
    $('.mir input').onchange = e => { v.style.transform = e.target.checked ? 'scaleX(-1)' : 'none'; };
    $('.off').onclick = stop;
    $('.snap').onclick = async () => {
      const c = UI.canvas(v.videoWidth, v.videoHeight), x = c.getContext('2d');
      if ($('.mir input').checked) { x.translate(c.width, 0); x.scale(-1, 1); }
      x.drawImage(v, 0, 0); const blob = await UI.canvasBlob(c, 'image/jpeg', 0.92);
      const card = UI.h(`<div class="thumb-card"><img src="${URL.createObjectURL(blob)}"><button class="btn sm">⬇ Save</button></div>`);
      card.querySelector('button').onclick = () => UI.download(blob, `webcam-${Date.now()}.jpg`);
      $('.shots').prepend(card);
    };
    $('.rec').onclick = () => {
      if (rec && rec.state === 'recording') { rec.stop(); return; }
      const chunks = []; rec = new MediaRecorder(stream, { mimeType: pickMime(['video/mp4', 'video/webm;codecs=vp9', 'video/webm']) || undefined });
      rec.ondataavailable = e => e.data.size && chunks.push(e.data);
      rec.onstop = () => { $('.rec').textContent = '⏺ Record clip'; const blob = new Blob(chunks, { type: rec.mimeType }); const ext = rec.mimeType.includes('mp4') ? 'mp4' : 'webm'; $('.status').innerHTML = ''; $('.status').append(UI.h(`<video controls src="${URL.createObjectURL(blob)}" style="width:100%;border-radius:10px"></video>`), UI.fileRow({ name: `webcam-clip.${ext}`, sub: UI.fmtBytes(blob.size), icon: '🎬', blob })); };
      rec.start(); $('.rec').textContent = '⏹ Stop recording';
    };
  });

  Tools.define('mic-test', root => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return noMedia(root);
    root.innerHTML = `<div class="stack"><div class="btn-row"><button class="btn lg start">🎤 Start mic test</button><select class="select dev" style="max-width:300px" hidden></select></div><div class="err"></div>
      <div class="live stack" hidden><div class="notice verdict">Say something…</div><div class="meter"><i class="lvl"></i></div><canvas class="wave" style="width:100%;height:110px;background:var(--bg);border:1px solid var(--border);border-radius:10px"></canvas>
      <div class="results info"></div><div class="btn-row"><button class="btn secondary rec">⏺ Record 5-second sample</button><button class="btn ghost off">Stop test</button></div><div class="play"></div></div></div>`;
    const $ = UI.q(root);
    let stream, stopMeter, heard = false;
    const stop = () => { if (stream) stream.getTracks().forEach(t => t.stop()); if (stopMeter) stopMeter(); stream = null; $('.live').hidden = true; };
    const start = async (id) => {
      stop(); heard = false;
      stream = await navigator.mediaDevices.getUserMedia({ audio: id ? { deviceId: { exact: id } } : true });
      $('.live').hidden = false;
      stopMeter = liveMeter(stream, $('.wave'), $('.lvl'), lvl => { if (lvl > 0.08 && !heard) { heard = true; $('.verdict').className = 'notice success verdict'; $('.verdict').textContent = '✅ Your microphone is working — we can hear you!'; } });
      const tr = stream.getAudioTracks()[0], s = tr.getSettings();
      $('.info').innerHTML = UI.resultsHTML([{ k: 'Device', v: esc(tr.label || 'Default microphone') }, { k: 'Sample rate', v: s.sampleRate ? s.sampleRate + ' Hz' : '—' }, { k: 'Channels', v: s.channelCount || '—' }, { k: 'Echo cancel', v: s.echoCancellation ? 'On' : 'Off' }, { k: 'Noise suppress', v: s.noiseSuppression ? 'On' : 'Off' }]);
      const devs = (await navigator.mediaDevices.enumerateDevices()).filter(d => d.kind === 'audioinput');
      $('.dev').innerHTML = devs.map((d, i) => `<option value="${esc(d.deviceId)}" ${d.label === tr.label ? 'selected' : ''}>${esc(d.label || 'Microphone ' + (i + 1))}</option>`).join(''); $('.dev').hidden = devs.length < 2;
      setTimeout(() => { if (stream && !heard) { $('.verdict').className = 'notice warn verdict'; $('.verdict').innerHTML = 'We can\'t hear anything yet. Speak louder, check that the mic is not muted, or pick another device.'; } }, 6000);
    };
    $('.start').onclick = () => UI.busy($('.start'), () => start(), 'Starting…', $('.err'));
    $('.dev').onchange = () => UI.busy(null, () => start($('.dev').value), '', $('.err'));
    $('.off').onclick = stop;
    $('.rec').onclick = () => {
      const chunks = [], r = new MediaRecorder(stream);
      r.ondataavailable = e => chunks.push(e.data);
      r.onstop = () => { $('.rec').disabled = false; $('.rec').textContent = '⏺ Record 5-second sample'; $('.play').innerHTML = `<audio controls autoplay src="${URL.createObjectURL(new Blob(chunks, { type: r.mimeType }))}" style="width:100%"></audio>`; };
      r.start(); $('.rec').disabled = true; let s = 5; $('.rec').textContent = `Recording… ${s}`;
      const t = setInterval(() => { s--; $('.rec').textContent = `Recording… ${s}`; if (s <= 0) { clearInterval(t); r.stop(); } }, 1000);
    };
  });

  Tools.define('text-to-speech', root => {
    const synth = window.speechSynthesis;
    if (!synth) return noMedia(root);
    root.innerHTML = `<div class="stack"><textarea class="textarea txt" style="min-height:200px" placeholder="Type or paste the text you want to hear…">Welcome! This free text to speech tool reads your text aloud using the voices built into your device. Try a different voice, speed or pitch below.</textarea>
      <div class="row"><div class="field small"><label>Language</label><select class="select lang"></select></div><div class="field grow"><label>Voice</label><select class="select voice"></select></div></div>
      <div class="row opts"></div>
      <div class="btn-row"><button class="btn lg play">▶ Speak</button><button class="btn secondary pause">⏸ Pause</button><button class="btn ghost stop">⏹ Stop</button><span class="small muted st"></span></div>
      <p class="small muted">Voices come from your device and browser — Chrome and Edge offer the most natural online voices. Tip: on Windows, Edge's "Natural" voices sound the best.</p></div>`;
    const $ = UI.q(root);
    const form = UI.fields($('.opts'), [
      { id: 'rate', label: 'Speed', type: 'range', value: 1, min: 0.5, max: 2, step: 0.1, unit: '×' },
      { id: 'pitch', label: 'Pitch', type: 'range', value: 1, min: 0, max: 2, step: 0.1 },
      { id: 'vol', label: 'Volume', type: 'range', value: 1, min: 0, max: 1, step: 0.1 },
    ]);
    let voices = [];
    const fill = () => {
      voices = synth.getVoices(); if (!voices.length) return;
      const langs = [...new Set(voices.map(v => v.lang.split('-')[0]))].sort();
      const nav = (navigator.language || 'en').split('-')[0];
      const names = new Intl.DisplayNames(['en'], { type: 'language' });
      const cur = $('.lang').value || (langs.includes(nav) ? nav : 'en');
      $('.lang').innerHTML = langs.map(l => `<option value="${l}" ${l === cur ? 'selected' : ''}>${esc(names.of(l) || l)}</option>`).join('');
      fillVoices();
    };
    const fillVoices = () => {
      const list = voices.filter(v => v.lang.split('-')[0] === $('.lang').value);
      list.sort((a, b) => (/natural|neural|online|google/i.test(b.name) ? 1 : 0) - (/natural|neural|online|google/i.test(a.name) ? 1 : 0));
      $('.voice').innerHTML = list.map(v => `<option value="${esc(v.name)}">${esc(v.name)} (${v.lang})</option>`).join('');
    };
    fill(); synth.onvoiceschanged = fill; $('.lang').onchange = fillVoices;
    $('.play').onclick = () => {
      synth.cancel();
      const text = $('.txt').value.trim(); if (!text) return UI.toast('Type some text first');
      const o = form.get(), voice = voices.find(v => v.name === $('.voice').value);
      const parts = text.match(/[^.!?。\n]+[.!?。]*\s*|\n+/g) || [text];
      const chunks = []; let cur = '';
      parts.forEach(p => { if ((cur + p).length > 220 && cur) { chunks.push(cur); cur = p; } else cur += p; }); if (cur.trim()) chunks.push(cur);
      chunks.forEach((c, i) => {
        const u = new SpeechSynthesisUtterance(c);
        if (voice) { u.voice = voice; u.lang = voice.lang; }
        u.rate = o.rate; u.pitch = o.pitch; u.volume = o.vol;
        u.onstart = () => { $('.st').textContent = `Speaking… (${i + 1}/${chunks.length})`; };
        if (i === chunks.length - 1) u.onend = () => { $('.st').textContent = 'Finished.'; };
        synth.speak(u);
      });
    };
    $('.pause').onclick = () => { if (synth.paused) { synth.resume(); $('.pause').textContent = '⏸ Pause'; } else { synth.pause(); $('.pause').textContent = '▶ Resume'; } };
    $('.stop').onclick = () => { synth.cancel(); $('.st').textContent = 'Stopped.'; };
  });

  const STT_LANGS = [['en-US', 'English (US)'], ['en-GB', 'English (UK)'], ['en-IN', 'English (India)'], ['ur-PK', 'Urdu (Pakistan)'], ['hi-IN', 'Hindi'], ['ar-SA', 'Arabic'], ['bn-BD', 'Bengali'], ['pa-IN', 'Punjabi'], ['fa-IR', 'Persian'], ['es-ES', 'Spanish'], ['fr-FR', 'French'], ['de-DE', 'German'], ['pt-BR', 'Portuguese (Brazil)'], ['it-IT', 'Italian'], ['ru-RU', 'Russian'], ['tr-TR', 'Turkish'], ['id-ID', 'Indonesian'], ['ms-MY', 'Malay'], ['zh-CN', 'Chinese (Mandarin)'], ['ja-JP', 'Japanese'], ['ko-KR', 'Korean'], ['nl-NL', 'Dutch'], ['pl-PL', 'Polish'], ['vi-VN', 'Vietnamese'], ['th-TH', 'Thai']];
  Tools.define('speech-to-text', root => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { root.innerHTML = '<div class="notice warn">Voice typing is not supported in this browser. Please open this page in <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong> or <strong>Safari</strong>.</div>'; return; }
    root.innerHTML = `<div class="stack"><div class="row"><div class="field"><label>Language</label><select class="select lang">${STT_LANGS.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></div>
      <div class="field" style="flex:0 0 auto"><label>&nbsp;</label><button class="btn lg mic">🎙️ Start listening</button></div></div>
      <div class="notice small st">Click "Start listening" and allow microphone access. Say "comma", "period", "question mark" or "new line" to add punctuation (English).</div>
      <textarea class="textarea out-t" dir="auto" style="min-height:240px" placeholder="Your words will appear here…"></textarea><div class="small muted interim" style="min-height:1.4em;font-style:italic"></div>
      <div class="btn-row"><button class="btn secondary cp">📋 Copy</button><button class="btn secondary dl">⬇ Download .txt</button><button class="btn ghost clr">Clear</button><span class="small muted wc"></span></div></div>`;
    const $ = UI.q(root);
    const nav = navigator.language || 'en-US'; const m = STT_LANGS.find(([v]) => v === nav) || STT_LANGS.find(([v]) => v.startsWith(nav.split('-')[0])); if (m) $('.lang').value = m[0];
    let rec = null, on = false;
    const punct = t => t.replace(/\s*\bcomma\b/gi, ',').replace(/\s*\b(period|full stop)\b/gi, '.').replace(/\s*\bquestion mark\b/gi, '?').replace(/\s*\bexclamation mark\b/gi, '!').replace(/\s*\bnew line\b\s*/gi, '\n');
    const count = () => { $('.wc').textContent = ($('.out-t').value.match(/\S+/g) || []).length + ' words'; };
    const begin = () => {
      rec = new SR(); rec.lang = $('.lang').value; rec.continuous = true; rec.interimResults = true;
      rec.onresult = e => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) { const ta = $('.out-t'); let t = punct(r[0].transcript.trim()); if (ta.value && !/\s$/.test(ta.value) && !/^[,.?!\n]/.test(t)) t = ' ' + t; ta.value += t; ta.scrollTop = ta.scrollHeight; count(); }
          else interim += r[0].transcript;
        }
        $('.interim').textContent = interim;
      };
      rec.onerror = e => { if (e.error === 'not-allowed') { on = false; UI.notice($('.st'), '⚠️ Microphone access was blocked. Allow it in your browser\'s address bar and try again.', 'error'); } else if (e.error !== 'no-speech' && e.error !== 'aborted') UI.toast('Speech error: ' + e.error); };
      rec.onend = () => { if (on) { try { rec.start(); } catch (e) { } } else { $('.mic').textContent = '🎙️ Start listening'; $('.mic').classList.remove('danger'); $('.interim').textContent = ''; } };
      rec.start();
    };
    $('.mic').onclick = () => {
      if (on) { on = false; rec && rec.stop(); return; }
      on = true; begin(); $('.mic').textContent = '⏹ Stop listening'; $('.mic').classList.add('danger');
      $('.st').className = 'notice small success st'; $('.st').textContent = '🔴 Listening… speak now.';
    };
    $('.lang').onchange = () => { if (on) { rec.onend = null; rec.stop(); begin(); } };
    $('.out-t').addEventListener('input', count);
    $('.cp').onclick = () => UI.copy($('.out-t').value);
    $('.dl').onclick = () => UI.downloadText($('.out-t').value, 'transcript.txt');
    $('.clr').onclick = () => { $('.out-t').value = ''; count(); };
  });
})();

(function () {
  'use strict';
  if (!window.TOOLS || !window.CATEGORIES) return;

  const TOOLS = window.TOOLS, CATS = window.CATEGORIES;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));
  const bySlug = Object.fromEntries(TOOLS.map(t => [t.slug, t]));
  const words = s => String(s).toLowerCase().split(/[^a-z0-9+#]+/).filter(Boolean);
  const uniq = a => a.filter((x, i) => a.indexOf(x) === i);
  const logo = document.querySelector('.site-header .logo');
  const SITE = (logo && logo.textContent.replace(/[^\w\s]/g, '').trim()) || 'ToolNest';
  const TOTAL = TOOLS.filter(t => !t.of).length;
  const BASE = window.BASE || '';
  const countIn = id => TOOLS.filter(t => t.cat === id && !t.of).length;

  const FILE_CATS = new Set(['pdf', 'image', 'media']);
  const ONLINE = {
    'currency-converter': 'Gets live exchange rates from ExchangeRate-API',
    'what-is-my-ip': 'Looks up your IP address with ipwho.is',
    'internet-speed-test': "Measures speed against Cloudflare's test servers",
    'youtube-thumbnail-downloader': "Loads thumbnails from YouTube's image servers",
  };
  const FFMPEG = new Set(['video-converter', 'video-compressor', 'video-to-mp3', 'video-trimmer', 'video-to-gif', 'audio-converter', 'mp3-cutter', 'mute-video']);
  const EXTRA = {
    'remove-background': ['🤖 Uses an AI model that downloads on first use'],
    'image-to-text': ['⬇️ Downloads the OCR engine on first use'],
    'webcam-test': ['📷 Asks for camera permission'],
    'mic-test': ['🎙️ Asks for microphone permission'],
    'voice-recorder': ['🎙️ Asks for microphone permission'],
    'speech-to-text': ['🎙️ Asks for microphone permission', '⚠️ Not supported in Firefox'],
    'screen-recorder': ['🖥️ Asks for screen-sharing permission', '⚠️ Works on desktop browsers only'],
    'qibla-direction': ['📍 Uses your location only if you allow it — it never leaves your device'],
  };

  const STOP = new Set(('i im ive me my mine myself we our you your u a an the of for in on at by with and or but is are am was were be been being it its this that these those ' +
    'can could would should will shall do does did have has had got please pls plz want wanna need needs needed like looking look help find show give gimme get let lets ' +
    'use using used tool tools online free website site app some any something thing things way there here just also so then than about from onto ' +
    'which what where who how when why whats hi hello hey thanks thank anyone kindly quickly quick easy easily best good simple fast many much work works working ' +
    'similar related alternative alternatives other another all list into one two three four five six multiple several few between').split(' '));

  const SOFT = {
    make: 'generator maker builder', create: 'generator maker builder', generate: 'generator', build: 'builder', maker: 'generator maker', generator: 'generator maker',
    calculate: 'calculator', calc: 'calculator', calculator: 'calculator', compute: 'calculator',
    check: 'checker test tester', test: 'test tester checker', checker: 'checker test',
    convert: 'converter convert', converter: 'converter convert', change: 'converter convert', turn: 'converter convert', transform: 'converter convert',
    file: 'file', files: 'file', document: 'file', documents: 'file', add: 'add', put: 'add', insert: 'add',
    instagram: '', whatsapp: '', facebook: '', tiktok: '', twitter: '', linkedin: '', email: '', gmail: '',
  };

  const SYN = {
    photo: 'image', photos: 'image', picture: 'image', pictures: 'image', pic: 'image', pics: 'image', img: 'image', images: 'image', selfie: 'image photo', screenshot: 'image',
    jpeg: 'jpg', heif: 'heic', iphone: 'heic', docx: 'word', doc: 'word', txt: 'text', pdfs: 'pdf',
    join: 'merge combine', combine: 'merge', merging: 'merge',
    shrink: 'compress reduce', reduce: 'compress', smaller: 'compress reduce', minimize: 'compress', optimize: 'compress', optimise: 'compress', lighter: 'compress', decrease: 'compress reduce', kb: 'compress size', mb: 'compress size',
    cut: 'trim cutter', trim: 'cut trimmer', clip: 'trim cut', shorten: 'trim cut',
    separate: 'split', divide: 'split', extract: 'extract split',
    erase: 'remove delete', delete: 'remove', bg: 'background', backdrop: 'background', transparent: 'background transparent',
    scan: 'scanner reader', read: 'reader scan', reader: 'scanner',
    movie: 'video', film: 'video', mov: 'video', mkv: 'video', avi: 'video', webm: 'video', reel: 'video', song: 'audio mp3', music: 'audio mp3', sound: 'audio', wav: 'audio', m4a: 'audio', ogg: 'audio', ringtone: 'mp3 cutter',
    record: 'recorder', recording: 'recorder', capture: 'recorder', mic: 'microphone', microphone: 'mic', camera: 'webcam', cam: 'webcam', webcam: 'camera',
    speak: 'speech', aloud: 'speech', voice: 'speech voice', dictate: 'speech', dictation: 'speech', narrate: 'speech',
    cv: 'resume', biodata: 'resume', resume: 'cv', ats: 'resume ats', job: 'resume',
    marks: 'grade percentage', mark: 'grade percentage', grades: 'grade', result: 'grade', exam: 'grade', semester: 'gpa', sgpa: 'cgpa', bunk: 'attendance', lectures: 'attendance',
    cite: 'citation', reference: 'citation', references: 'citation', bibliography: 'citation', apa: 'citation', mla: 'citation',
    handwritten: 'handwriting', assignment: 'handwriting', wpm: 'typing', keyboard: 'keyboard key',
    money: 'currency', dollar: 'currency', dollars: 'currency', rupee: 'currency', rupees: 'currency', pkr: 'currency', inr: 'currency', usd: 'currency', euro: 'currency', eur: 'currency', gbp: 'currency', exchange: 'currency',
    emi: 'loan', installment: 'loan emi', instalment: 'loan emi', car: 'loan', borrow: 'loan', house: 'mortgage', home: 'mortgage loan', property: 'mortgage',
    tax: 'gst vat tax', vat: 'gst', invest: 'investment', investing: 'investment', saving: 'savings', returns: 'interest investment', mutual: 'sip', fund: 'sip',
    sale: 'discount', off: 'discount', offer: 'discount', restaurant: 'tip', waiter: 'tip', bill: 'invoice tip', receipt: 'invoice', quotation: 'invoice',
    profit: 'margin', markup: 'margin', wage: 'salary', hourly: 'salary', income: 'salary',
    petrol: 'fuel', gas: 'fuel', diesel: 'fuel', mileage: 'fuel', trip: 'fuel', nisab: 'zakat',
    weight: 'weight bmi', overweight: 'bmi', obese: 'bmi', fat: 'fat body', diet: 'calorie', calories: 'calorie', kcal: 'calorie', metabolism: 'bmr', metabolic: 'bmr',
    pregnant: 'pregnancy', baby: 'pregnancy', due: 'pregnancy due', period: 'ovulation', fertile: 'ovulation', hydration: 'water', drink: 'water', bedtime: 'sleep', wake: 'sleep',
    percent: 'percentage', mean: 'average', median: 'average', statistics: 'average', stats: 'average', fractions: 'fraction',
    cm: 'unit', inch: 'unit', inches: 'unit', kg: 'unit', lbs: 'unit', pound: 'unit', mile: 'unit', miles: 'unit', km: 'unit', meter: 'unit', meters: 'unit', feet: 'unit', foot: 'unit', celsius: 'unit', fahrenheit: 'unit', litre: 'unit', liter: 'unit', gallon: 'unit', temperature: 'unit', units: 'unit',
    cheque: 'number words', roman: 'roman numeral', hcf: 'gcd', quadratic: 'quadratic equation', equation: 'quadratic', lottery: 'random',
    birthday: 'age birth', born: 'age birth', dob: 'age birth', old: 'age', days: 'days date', weeks: 'date', months: 'date', deadline: 'countdown', study: 'pomodoro', focus: 'pomodoro', timezone: 'time zone', alarm: 'alarm clock', minutes: 'timer time', seconds: 'timer stopwatch', options: 'picker wheel',
    london: 'zone', dubai: 'zone', karachi: 'zone', lahore: 'zone', delhi: 'zone', mumbai: 'zone', tokyo: 'zone', sydney: 'zone', paris: 'zone', york: 'zone', toronto: 'zone', singapore: 'zone', riyadh: 'zone', gmt: 'zone', utc: 'zone', pst: 'zone', est: 'zone', ist: 'zone', pkt: 'zone',
    count: 'counter', counter: 'count', letters: 'character', characters: 'character', chars: 'character', words: 'word',
    uppercase: 'case', lowercase: 'case', capital: 'case', capitalize: 'case', caps: 'case',
    duplicates: 'duplicate', dedupe: 'duplicate', unique: 'duplicate', alphabetical: 'sort', alphabetize: 'sort', order: 'sort',
    compare: 'compare diff', difference: 'compare diff', diff: 'compare', backwards: 'reverse', fonts: 'fancy font', font: 'fancy', stylish: 'fancy', cool: 'fancy', essay: 'word text', article: 'word text', paragraph: 'word text',
    placeholder: 'lorem', dummy: 'lorem', notes: 'notepad', note: 'notepad', repeat: 'repeater',
    beautify: 'formatter beautifier', prettify: 'formatter beautifier', pretty: 'formatter', format: 'formatter format', validate: 'validator',
    encode: 'encoder encode', decode: 'decoder decode', escape: 'encoder', md5: 'hash', sha256: 'hash', sha: 'hash', checksum: 'hash', guid: 'uuid',
    token: 'jwt', regexp: 'regex', expression: 'regex', colour: 'color', colors: 'color', colours: 'color', hex: 'color hex', rgb: 'color',
    minify: 'minifier', epoch: 'timestamp', unix: 'timestamp', md: 'markdown', spreadsheet: 'csv', excel: 'csv', query: 'sql', database: 'sql',
    wifi: 'internet speed', internet: 'internet speed', net: 'internet', bandwidth: 'internet speed', ping: 'speed', yt: 'youtube', thumbnail: 'thumbnail youtube',
    seo: 'seo meta', permalink: 'slug', campaign: 'utm', resolution: 'resolution screen', monitor: 'screen', display: 'screen', click: 'cps click', clicks: 'cps click',
    qrcode: 'qr', ean: 'barcode', upc: 'barcode', pwd: 'password', passcode: 'password', strong: 'strength', weak: 'strength',
    spin: 'wheel', pick: 'picker random', choose: 'picker random', decide: 'wheel', toss: 'coin', die: 'dice',
    sign: 'sign signature', signature: 'sign signature', esign: 'sign', todo: 'todo task', task: 'todo', tasks: 'todo', checklist: 'todo',
    visa: 'passport', ico: 'favicon', icon: 'favicon', logo: 'watermark', stamp: 'watermark', blur: 'filters', grayscale: 'filters', brightness: 'filters', edit: 'editor filters', editor: 'filters',
    grid: 'collage', eyedropper: 'color picker', flip: 'rotate flip', mirror: 'flip',
    blank: 'invisible blank', empty: 'invisible blank', hidden: 'invisible', islamic: 'hijri', arabic: 'hijri', muslim: 'hijri qibla', ramadan: 'hijri', eid: 'hijri',
    kaaba: 'qibla', makkah: 'qibla', mecca: 'qibla', namaz: 'qibla', prayer: 'qibla', salah: 'qibla', ampm: 'military', timesheet: 'decimal hours', payroll: 'decimal',
    presentation: 'speech minutes', flashlight: 'white light', torch: 'white light', tasbih: 'tally', clicker: 'tally spacebar', weekday: 'day week',
  };

  const PHRASES = [
    [/\b(\d+)(kb|mb|px|cm|kg)\b/g, '$1 $2'],
    [/\bmake (it |them |the file |the |my )?(smaller|lighter)\b/g, 'compress'],
    [/\breduce (the |file |my )?size\b/g, 'compress size'],
    [/\b(remove|erase|delete) (the |a )?(bg|background)\b/g, 'remove background'],
    [/\bhow old\b/g, 'age calculator'],
    [/\bhow many days\b/g, 'days between dates'],
    [/\bhow much water\b/g, 'water intake'],
    [/\bwhat(?: is|s)? my ip\b/g, 'what is my ip'],
    [/\b(read|say|speak) (it |this |text |my text )?(out )?(a)?loud\b/g, 'text to speech'],
    [/\bvoice typing\b/g, 'speech to text'],
    [/\b(heads or tails|toss a coin|flip a coin)\b/g, 'coin flip'],
    [/\broll (a |the )?dic?e\b/g, 'dice roller'],
    [/\bqr code\b/g, 'qr'],
    [/\bscreen ?shot\b/g, 'screenshot'],
  ];

  const FORMAT_ALIAS = { jpeg: 'jpg', photo: 'image', picture: 'image', pic: 'image', img: 'image', images: 'image', photos: 'image', docx: 'word', doc: 'word', txt: 'text', heif: 'heic', md: 'markdown', voice: 'speech' };

  const CAT_WORDS = {
    pdf: ['pdf'], image: ['image', 'photo', 'picture', 'pic'], media: ['video', 'videos', 'audio', 'media', 'music'],
    student: ['student', 'students', 'career', 'study', 'college', 'university', 'school', 'academic'], finance: ['finance', 'financial', 'money', 'business'],
    health: ['health', 'fitness', 'medical'], math: ['math', 'maths', 'mathematics'], time: ['date', 'time', 'dates'], text: ['text', 'writing', 'writer'],
    dev: ['developer', 'developers', 'dev', 'coding', 'programming', 'programmer', 'code'], web: ['web', 'device', 'seo', 'network'], utility: ['utility', 'utilities', 'everyday', 'misc'],
  };
  const CAT_FILLER = new Set(['tool', 'tools', 'calculator', 'calculators', 'converter', 'converters', 'generator', 'generators', 'stuff', 'category', 'section']);

  const index = TOOLS.map(t => {
    const c = catById[t.cat];
    const nameArr = words(t.name);
    const kwArr = words(t.kw + ' ' + t.slug);
    return {
      t, family: t.of || t.slug, nameW: new Set(nameArr), nameArr, kwW: new Set(kwArr), kwArr,
      catW: new Set(words(c.name + ' ' + c.id)), descW: words(t.desc), stepW: words(t.steps.join(' ')),
      phrase: ' ' + words(t.name + ' ' + t.kw + ' ' + t.slug.replace(/-/g, ' ')).join(' ') + ' ',
    };
  });
  const VOCAB = new Set();
  index.forEach(x => [x.nameW, x.kwW, x.catW].forEach(s => s.forEach(w => VOCAB.add(w))));
  Object.keys(SYN).concat(Object.keys(SOFT), Object.values(CAT_WORDS).flat()).forEach(w => VOCAB.add(w));

  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i]; let low = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (cur[j] < low) low = cur[j];
      }
      if (low > max) return max + 1;
      prev = cur;
    }
    return prev[b.length];
  }

  function fix(w) {
    if (VOCAB.has(w) || STOP.has(w) || /^\d+$/.test(w)) return w;
    const stems = [w.replace(/ies$/, 'y'), w.replace(/es$/, ''), w.replace(/s$/, ''), w.replace(/ing$/, ''), w.replace(/ing$/, 'e'), w.replace(/ed$/, ''), w.replace(/ed$/, 'e'), w.replace(/ion$/, 'e'), w.replace(/ion$/, ''), w.replace(/or$/, 'er'), w.replace(/er$/, '')];
    for (const s of stems) if (s !== w && s.length > 1 && VOCAB.has(s)) return s;
    if (w.length < 4) return w;
    const max = w.length >= 7 ? 2 : 1;
    let best = w, bd = max + 1;
    for (const v of VOCAB) {
      if (v.length < 3) continue;
      const d = lev(w, v, max);
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }

  function normalize(raw) {
    let s = ' ' + String(raw).toLowerCase().replace(/[’']/g, '').replace(/→|->|=>/g, ' to ') + ' ';
    for (const [re, rep] of PHRASES) s = s.replace(re, ' ' + rep + ' ');
    return words(s).map(fix);
  }

  function pairs(tokens) {
    const out = [];
    for (let i = 1; i < tokens.length - 1; i++) {
      if (tokens[i] !== 'to' && tokens[i] !== 'into') continue;
      const a = tokens[i - 1], b = (tokens[i + 1] === 'a' || tokens[i + 1] === 'an') && tokens[i + 2] ? tokens[i + 2] : tokens[i + 1];
      out.push([a, b], [FORMAT_ALIAS[a] || a, FORMAT_ALIAS[b] || b]);
    }
    return out;
  }

  function groupsOf(tokens) {
    const seen = new Set(), groups = [];
    for (const w of tokens) {
      if (STOP.has(w) || w === 'to' || /^\d+$/.test(w) || seen.has(w)) continue;
      seen.add(w);
      if (w in SOFT) groups.push({ w, alts: SOFT[w].split(' ').filter(Boolean), soft: true });
      else groups.push({ w, alts: SYN[w] ? SYN[w].split(' ').filter(x => x !== w) : [], soft: false });
    }
    return groups;
  }

  function wordScore(x, w) {
    if (x.nameW.has(w)) return 10;
    if (w.length >= 3 && x.nameArr.some(n => n.startsWith(w))) return 7;
    if (x.kwW.has(w)) return 6;
    if (w.length >= 3 && x.kwArr.some(n => n.startsWith(w))) return 4;
    if (x.catW.has(w)) return 3;
    if (x.descW.includes(w) || (w.length >= 4 && x.descW.some(n => n.startsWith(w)))) return 1.5;
    if (x.stepW.includes(w)) return 0.8;
    return 0;
  }

  function rank(tokens) {
    const groups = groupsOf(tokens).filter(g => [g.w].concat(g.alts).some(w => index.some(x => wordScore(x, w) > 0))), pr = pairs(tokens);
    const hard = groups.filter(g => !g.soft).length;
    const scored = index.map(x => {
      let sum = 0, hit = 0;
      for (const g of groups) {
        let s = wordScore(x, g.w);
        for (const a of g.alts) s = Math.max(s, wordScore(x, a) * 0.85);
        if (g.soft) s *= 0.4; else if (s >= 1.5) hit++;
        sum += s;
      }
      let boost = 0;
      for (const [a, b] of pr) {
        if (x.t.slug === `${a}-to-${b}`) boost = Math.max(boost, 40);
        else if (x.phrase.includes(` ${a} to ${b} `)) boost = Math.max(boost, 25);
      }
      const cov = hard ? hit / hard : (sum > 0 ? 1 : 0);
      const score = sum * (0.3 + 0.7 * cov * cov) + boost + (sum > 0 && x.t.popular ? 0.4 : 0);
      return { x, score, cov: boost ? 1 : cov };
    }).filter(r => r.score >= 3).sort((a, b) => b.score - a.score);
    const fam = new Set(), out = [];
    for (const r of scored) if (!fam.has(r.x.family)) { fam.add(r.x.family); out.push(r); }
    const top = out[0] ? out[0].score : 0;
    return out.filter(r => r.score >= top * 0.28);
  }

  function categoryIntent(tokens) {
    if (pairs(tokens).length) return null;
    const filler = tokens.some(w => CAT_FILLER.has(w) || w === 'tools');
    const rest = tokens.filter(w => !STOP.has(w) && !CAT_FILLER.has(w) && w !== 'to' && w !== 'and');
    if (!rest.length || rest.length > 2 || (rest.length > 1 && !filler)) return null;
    for (const [id, list] of Object.entries(CAT_WORDS)) if (rest.every(w => list.includes(w))) return catById[id];
    return null;
  }

  const RX = {
    greet: /^\s*(hi+|hello+|hey+|hiya|yo|salam|salaam|assalam[ou]* ?alaikum|aoa|hola|good (morning|afternoon|evening)|greetings)\b[\s!.,]*(there|bot|assistant|toolnest)?[\s!.]*$/i,
    thanks: /^\s*(thanks?|thank you|thx|ty|shukriya|jazakallah|great|awesome|perfect|nice|cool|ok(ay)?|got it)[\s!.,]*(so much|a lot|bro|man|bot)?[\s!.]*$/i,
    more: /^\s*(show |see |any )?(more|others?|next|other options|more options|more tools|anything else)\s*[?!.]*$/i,
    help: /(what can you do|who are you|what are you|how (do|does) (this|you) work|what is this|^\s*help( me)?\s*[?!.]*$|how can you help)/i,
    cats: /(categor(y|ies)|what tools|which tools|all (the )?tools|list (of |all )?(the )?tools|how many tools|tools (do )?you have)/i,
    contact: /(contact|e-?mail (you|us|the team)|support team|report (a )?bug|found a bug|feedback|suggest(ion)? (a )?(new )?tool|request (a )?(new )?tool|add (a )?(new )?tool)/i,
    question: /^\s*(is|are|does|do|can|will|would|how|what about)\b/i,
    privacy: /(\bsafe\b|privacy|private|(is (it|this)|are (they|my files)) secure|\bupload(ed|s)?\b|\bstored?\b|saved? my|my (data|files?)|\bservers?\b|confidential)/i,
    free: /(\bfree\b|\bcost\b|pricing|\bpaid\b|subscription|sign ?up|\baccount\b|log ?in|\bregister\b|premium)/i,
    mobile: /(\bmobile\b|\bphones?\b|android|iphone|\bipad\b|\btablet\b|\binstall\b|download (the )?app)/i,
    size: /(size limit|how (big|large)|max(imum)? (file )?size|large files?|big files?)/i,
  };

  const FAQ = {
    privacy: `Your files stay on your device. PDF, image, video and audio tools process everything **right in your browser** — nothing is uploaded or stored on a server. Only four tools contact an online service to work: Currency Converter, What Is My IP, Internet Speed Test and YouTube Thumbnail Downloader.`,
    free: `Yes — every tool on ${SITE} is **completely free**, with no sign-up, no watermark and no daily limits.`,
    mobile: `Yes — ${SITE} works in any modern browser on **Android, iPhone, iPad, Windows, Mac and Linux**. There's nothing to install. (The Screen Recorder is the one exception: it needs a desktop browser.)`,
    size: `There's **no fixed file size limit**. Files are processed on your own device, so very large files depend on its memory and speed — files up to a few hundred MB usually work well on a modern computer.`,
  };

  const here = (() => {
    const m = location.pathname.match(/([^/]+?)(?:\.html)?$/);
    return m && bySlug[m[1]] ? bySlug[m[1]] : null;
  })();

  function popularIn(catId, n, skipFamily) {
    const list = TOOLS.filter(t => t.cat === catId && !t.of && t.slug !== skipFamily);
    return list.filter(t => t.popular).concat(list.filter(t => !t.popular)).slice(0, n).map(t => t.slug);
  }

  function welcome() {
    if (here) return {
      from: 'bot',
      text: `Hi! 👋 I'm the ${SITE} assistant. You're using **${here.name}** — ask me how it works, or tell me anything else you want to do and I'll find the right tool.`,
      chips: [`How does ${here.name} work?`, `Tools like ${here.name}`, 'Are my files safe?', 'What can you do?'],
    };
    return {
      from: 'bot',
      text: `Hi! 👋 I'm the ${SITE} assistant. Tell me what you want to do — like *"make my PDF smaller"* or *"calculate my GPA"* — and I'll find the right tool, explain how it works and give you a link to open it.`,
      chips: ['Compress a PDF for email', 'Remove image background', 'Convert video to MP3', 'Calculate my CGPA', 'Check my resume for ATS'],
    };
  }

  const firstSentence = s => { const m = s.match(/^.*?[.!?](\s|$)/); return (m ? m[0] : s).trim(); };

  function answer(raw, state) {
    const q = raw.trim();
    const tokens = normalize(q);
    const meaningful = tokens.filter(w => !STOP.has(w) && w !== 'to');

    if (RX.greet.test(q)) return { from: 'bot', text: `Hello! 👋 What would you like to do today? Describe the task in your own words and I'll point you to the right tool.`, chips: ['Merge PDF files', 'Resize a photo', 'Convert HEIC to JPG', 'BMI calculator'] };
    if (RX.thanks.test(q)) return { from: 'bot', text: `You're welcome! 😊 Ask me anytime you need another tool.`, chips: ['What can you do?'] };

    if (RX.more.test(q)) {
      const last = state.last;
      if (last && last.slugs.length > last.shown) {
        const next = last.slugs.slice(last.shown, last.shown + 4);
        last.shown += next.length;
        return { from: 'bot', text: `Here are more tools that could help:`, tools: next, open: -1, chips: last.slugs.length > last.shown ? ['Show more'] : [] };
      }
      return { from: 'bot', text: `That's everything I found for your last question. Try describing the task differently, or browse the categories.`, chips: ['Show all categories'] };
    }

    if (RX.help.test(q) && meaningful.length <= 2) return {
      from: 'bot',
      text: `I help you find the right tool among ${TOTAL} free tools on ${SITE}. Just describe what you need — for example **"convert my iPhone photos to JPG"**, **"what's my loan EMI"** or **"cut a song for a ringtone"**. I'll show the best matching tools, a summary of how each one works, and a link to open it.`,
      chips: ['Show all categories', 'Are my files safe?', 'Is it free?'],
    };

    if (RX.cats.test(q) && !meaningful.some(w => !CAT_FILLER.has(w) && !/^categor/.test(w))) return {
      from: 'bot', text: `${SITE} has **${TOTAL} tools** in ${CATS.length} categories. Pick one to browse, or just tell me what you need:`,
      links: CATS.map(c => ({ href: BASE + c.slug, label: `${c.icon} ${c.name} (${countIn(c.id)})` })),
    };

    if (RX.contact.test(q)) return {
      from: 'bot', text: `You can reach the ${SITE} team through the contact page — bug reports and ideas for new tools are very welcome.`,
      links: [{ href: BASE + 'contact', label: '✉️ Contact us' }],
    };

    const results = rank(tokens);
    const top = results[0];
    const confident = !!top && top.cov >= 0.99 && top.score >= 8;

    const faqKey = ['size', 'privacy', 'free', 'mobile'].find(k => RX[k].test(q));
    if (faqKey && (!confident || RX.question.test(q))) {
      const out = { from: 'bot', text: FAQ[faqKey] };
      if (confident) { out.tools = [top.x.t.slug]; out.open = 0; state.last = null; }
      else out.chips = ['What can you do?', 'Show all categories'];
      return out;
    }

    const cat = categoryIntent(tokens);
    if (cat) {
      const slugs = popularIn(cat.id, 12);
      state.last = { slugs, shown: 4 };
      return {
        from: 'bot', text: `**${cat.icon} ${cat.name}** — ${cat.desc} Here are the most-used ones:`,
        tools: slugs.slice(0, 4), open: -1,
        links: [{ href: BASE + cat.slug, label: `Browse all ${countIn(cat.id)} ${cat.name} →` }],
        chips: ['Show more'],
      };
    }

    if (!results.length) {
      state.last = null;
      return {
        from: 'bot',
        text: `I couldn't find a tool for that yet. 🤔 Try describing it another way — mention the file type (PDF, image, video) or what you want to calculate. You can also suggest it as a new tool.`,
        chips: ['Show all categories', 'What can you do?'],
        links: [{ href: BASE + 'contact', label: '💡 Suggest a tool' }],
      };
    }

    let slugs = results.map(r => r.x.t.slug);
    const t = bySlug[slugs[0]];
    const related = confident && /\b(similar|related|alternatives?|like|instead)\b/i.test(q);
    if (related) {
      const fam = t.of || t.slug;
      slugs = uniq([t.slug].concat(slugs.slice(1).filter(s => bySlug[s].cat === t.cat), popularIn(t.cat, 12, fam)));
    }
    slugs = slugs.slice(0, 12);
    state.last = { slugs, shown: Math.min(4, slugs.length) };
    const clear = confident && (!results[1] || top.score >= results[1].score * 1.6);
    let text;
    if (related) text = `Here's **${t.name}** and other ${catById[t.cat].name} you might like:`;
    else if (confident && /^\s*(how|what)\b.*\b(work|works|use|does|do)\b/i.test(q)) text = `Here's how **${t.name}** works:`;
    else if (clear && slugs.length === 1) text = `**${t.name}** is exactly what you need. ${firstSentence(t.desc)}`;
    else if (clear) text = `Best match: **${t.name}**. ${firstSentence(t.desc)} I've also listed a few related tools.`;
    else if (confident) text = `I found ${Math.min(4, slugs.length)} tools that can help with that:`;
    else text = `I'm not completely sure what you mean, but these are the closest matches:`;
    return { from: 'bot', text, tools: slugs.slice(0, 4), open: 0, chips: slugs.length > 4 ? ['Show more'] : [] };
  }

  function facts(t) {
    const base = t.of || t.slug;
    const f = [ONLINE[t.slug] ? '🌐 ' + ONLINE[t.slug] : FILE_CATS.has(t.cat) ? '🔒 Runs in your browser — files are never uploaded' : '🔒 Works entirely in your browser'];
    if (FFMPEG.has(base)) f.push('⬇️ First use downloads the video engine (~31 MB, once per visit)');
    f.push(...(EXTRA[base] || []));
    f.push(base === 'screen-recorder' ? '💸 Free · no sign-up' : '💸 Free · no sign-up · works on phone & desktop');
    return f;
  }

  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[\s(])\*(.+?)\*(?=[\s).,!?]|$)/g, '$1<em>$2</em>');

  function toolCard(slug, open) {
    const t = bySlug[slug]; if (!t) return '';
    const c = catById[t.cat];
    const isHere = here && here.slug === t.slug;
    return `<div class="ai-tool">
      <div class="ai-tool-top"><span class="tool-icon" style="--c:${c.color}">${t.icon}</span><div><a class="ai-tool-name" href="${BASE}${t.slug}">${esc(t.name)}</a><small>${esc(c.name)}</small></div></div>
      <p class="ai-tool-desc">${esc(t.desc)}</p>
      <details${open ? ' open' : ''}><summary>How it works</summary>
        <ol class="ai-steps">${t.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
        <ul class="ai-facts">${facts(t).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      </details>
      ${isHere ? `<a class="btn sm secondary block" href="#tool" data-ai-close>You're on this tool ↑</a>` : `<a class="btn sm block" href="${BASE}${t.slug}">Open ${esc(t.name)} →</a>`}
    </div>`;
  }

  function renderMsg(m) {
    if (m.from === 'user') return `<div class="ai-msg user"><div class="ai-bubble">${esc(m.text)}</div></div>`;
    let h = `<div class="ai-msg bot"><div class="ai-bubble">${md(m.text)}</div>`;
    if (m.tools && m.tools.length) h += `<div class="ai-tools">${m.tools.map((s, i) => toolCard(s, i === m.open)).join('')}</div>`;
    if (m.links && m.links.length) h += `<div class="ai-links">${m.links.map(l => `<a class="chip" href="${esc(l.href)}">${esc(l.label)}</a>`).join('')}</div>`;
    if (m.chips && m.chips.length) h += `<div class="ai-chips">${m.chips.map(c => `<button type="button" class="chip" data-ai-q="${esc(c)}">${esc(c)}</button>`).join('')}</div>`;
    return h + '</div>';
  }

  const KEY = 'tn:assistant';
  let state = { msgs: [], last: null };
  try { const s = JSON.parse(sessionStorage.getItem(KEY)); if (s && Array.isArray(s.msgs)) state = s; } catch (e) { }
  const persist = () => { try { state.msgs = state.msgs.slice(-40); sessionStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { } };

  const fab = document.createElement('button');
  fab.type = 'button'; fab.className = 'ai-fab';
  fab.setAttribute('aria-expanded', 'false'); fab.setAttribute('aria-controls', 'ai-panel'); fab.setAttribute('aria-label', `Ask the ${SITE} assistant`);
  fab.innerHTML = '<span aria-hidden="true">✨</span><span class="ai-fab-label">Ask AI</span>';

  const panel = document.createElement('section');
  panel.id = 'ai-panel'; panel.className = 'ai-panel'; panel.hidden = true;
  panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', `${SITE} assistant`);
  panel.innerHTML = `<header class="ai-head">
      <span class="ai-avatar" aria-hidden="true">✨</span>
      <div class="ai-title"><strong>${esc(SITE)} Assistant</strong><small>Finds the right tool for you</small></div>
      <button type="button" class="icon-btn ai-reset" title="New chat" aria-label="Start a new chat">↺</button>
      <button type="button" class="icon-btn ai-close" title="Close" aria-label="Close assistant">✕</button>
    </header>
    <div class="ai-body" aria-live="polite"></div>
    <form class="ai-form" autocomplete="off">
      <input type="text" class="ai-input" placeholder="Ask about a tool or task…" aria-label="Your question" maxlength="300">
      <button type="submit" class="btn ai-send" aria-label="Send">➤</button>
    </form>`;
  document.body.append(fab, panel);

  const body = panel.querySelector('.ai-body'), input = panel.querySelector('.ai-input');
  const instant = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function paint() {
    if (!state.msgs.length) state.msgs.push(welcome());
    body.innerHTML = state.msgs.map(renderMsg).join('');
    body.scrollTop = body.scrollHeight;
  }
  function open(prefill) {
    panel.hidden = false; fab.setAttribute('aria-expanded', 'true'); document.documentElement.classList.add('ai-open');
    paint();
    if (prefill) ask(prefill); else setTimeout(() => input.focus(), 30);
  }
  function close() {
    panel.hidden = true; fab.setAttribute('aria-expanded', 'false'); document.documentElement.classList.remove('ai-open');
    fab.focus();
  }

  let busy = false;
  function ask(text) {
    text = String(text || '').trim().slice(0, 300); if (!text || busy) return;
    busy = true;
    state.msgs.push({ from: 'user', text });
    body.insertAdjacentHTML('beforeend', renderMsg({ from: 'user', text }) + '<div class="ai-msg bot ai-typing" aria-hidden="true"><div class="ai-bubble"><span></span><span></span><span></span></div></div>');
    body.scrollTop = body.scrollHeight;
    input.value = '';
    let reply;
    try { reply = answer(text, state); } catch (e) { console.error(e); reply = { from: 'bot', text: 'Sorry, something went wrong. Please try asking in a different way.' }; }
    setTimeout(() => {
      state.msgs.push(reply); persist();
      const typing = body.querySelector('.ai-typing'); if (typing) typing.remove();
      body.insertAdjacentHTML('beforeend', renderMsg(reply));
      const prev = body.lastElementChild.previousElementSibling;
      body.scrollTop = prev ? prev.offsetTop - 8 : body.scrollHeight;
      busy = false; input.focus();
    }, instant ? 0 : 380);
  }

  fab.addEventListener('click', () => panel.hidden ? open() : close());
  panel.querySelector('.ai-close').addEventListener('click', close);
  panel.querySelector('.ai-reset').addEventListener('click', () => { state = { msgs: [], last: null }; persist(); paint(); input.focus(); });
  panel.querySelector('.ai-form').addEventListener('submit', e => { e.preventDefault(); ask(input.value); });
  panel.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); close(); } });
  panel.addEventListener('click', e => {
    const chip = e.target.closest('[data-ai-q]');
    if (chip) return ask(chip.getAttribute('data-ai-q'));
    if (e.target.closest('[data-ai-close]')) close();
  });
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-ask]'); if (!b) return;
    e.preventDefault();
    const src = b.getAttribute('data-ask'), el = src && document.getElementById(src);
    const q = el && el.value ? el.value.trim() : '';
    if (panel.hidden) open(q); else if (q) ask(q);
  });

  window.Assistant = {
    open, close,
    ask: q => (panel.hidden ? open(q) : ask(q)),
    answer: q => answer(q, { msgs: [], last: null }),
    rank: q => rank(normalize(q)).map(r => [r.x.t.slug, +r.score.toFixed(1), +r.cov.toFixed(2)]),
  };
})();

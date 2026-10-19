const fs = require('fs');
const path = require('path');

const GH = 'https://raw.githubusercontent.com/';
const SMALL = GH + 'mathiasbynens/small/master/';
const LIST = {
  'paper.pdf': GH + 'mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf',
  'images.pdf': GH + 'mozilla/pdf.js/master/test/pdfs/images.pdf',
  'cmykjpeg.pdf': GH + 'mozilla/pdf.js/master/test/pdfs/cmykjpeg.pdf',
  'freeculture.pdf': GH + 'mozilla/pdf.js/master/test/pdfs/freeculture.pdf',
  'encrypted-attachment.pdf': GH + 'mozilla/pdf.js/master/test/pdfs/encrypted-attachment.pdf',
  'tiny.pdf': SMALL + 'pdf.pdf',
  'resume.pdf': GH + 'posquit0/Awesome-CV/master/examples/resume.pdf',
  'cv.pdf': GH + 'posquit0/Awesome-CV/master/examples/cv.pdf',
  'tables.docx': GH + 'mwilliamson/mammoth.js/master/test/test-data/tables.docx',
  'tiny-picture.docx': GH + 'mwilliamson/mammoth.js/master/test/test-data/tiny-picture.docx',
  'simple-list.docx': GH + 'mwilliamson/mammoth.js/master/test/test-data/simple-list.docx',
  'footnotes.docx': GH + 'mwilliamson/mammoth.js/master/test/test-data/footnotes.docx',
  'portrait.jpg': GH + 'ageitgey/face_recognition/master/examples/obama.jpg',
  'portrait2.jpg': GH + 'ageitgey/face_recognition/master/examples/biden.jpg',
  'two-people.jpg': GH + 'ageitgey/face_recognition/master/examples/two_people.jpg',
  'sports.jpg': GH + 'opencv/opencv/4.x/samples/data/messi5.jpg',
  'starry-night.jpg': GH + 'opencv/opencv/4.x/samples/data/starry_night.jpg',
  'fruits.jpg': GH + 'opencv/opencv/4.x/samples/data/fruits.jpg',
  'opencv-logo.png': GH + 'opencv/opencv/4.x/samples/data/opencv-logo.png',
  'text-image.png': GH + 'opencv/opencv/4.x/samples/data/imageTextN.png',
  'sudoku.png': GH + 'opencv/opencv/4.x/samples/data/sudoku.png',
  'lossless.webp': GH + 'webmproject/libwebp-test-data/main/lossless1.webp',
  'alpha.webp': GH + 'webmproject/libwebp-test-data/main/alpha_filter_1_method_1.webp',
  'autumn.heic': GH + 'nokiatech/heif/gh-pages/content/images/autumn_1440x960.heic',
  'collection.heic': GH + 'nokiatech/heif/gh-pages/content/images/random_collection_1440x960.heic',
  'transparent.gif': SMALL + 'gif-transparent.gif', 'tiny.bmp': SMALL + 'bmp.bmp', 'tiny.tif': SMALL + 'tiff.tif',
  'transparent.png': SMALL + 'png-transparent.png', 'tiny.svg': SMALL + 'svg.svg',
  'github-icon.svg': 'https://cdn.jsdelivr.net/npm/simple-icons@13.0.0/icons/github.svg',
  'clip.mp4': GH + 'ageitgey/face_recognition/master/examples/short_hamilton_clip.mp4',
  'bunny.webm': GH + 'mediaelement/mediaelement-files/master/big_buck_bunny.webm',
  'megamind.avi': GH + 'opencv/opencv/4.x/samples/data/Megamind.avi',
  'tiny.flv': SMALL + 'FlashVideo.flv', 'tiny.wmv': SMALL + 'WindowsMediaVideo.wmv', 'tiny-audio.mp4': SMALL + 'mp4-with-audio.mp4',
  'song.mp3': GH + 'mdn/webaudio-examples/main/audio-basics/outfoxing.mp3',
  'tiny.wav': SMALL + 'wav.wav', 'tiny.mp3': SMALL + 'mp3.mp3',
  'jquery-3.7.1.min.js': 'https://code.jquery.com/jquery-3.7.1.min.js',
  'readme-4.17.20.md': GH + 'lodash/lodash/4.17.20/README.md', 'readme-4.17.21.md': GH + 'lodash/lodash/4.17.21/README.md',
  'node-readme.md': GH + 'nodejs/node/main/README.md', 'marked-readme.md': GH + 'markedjs/marked/master/README.md',
  'countries.csv': GH + 'datasets/country-codes/main/data/country-codes.csv',
  'react-package.json': 'https://cdn.jsdelivr.net/npm/react@18.3.1/package.json',
  'axios.js': 'https://cdn.jsdelivr.net/npm/axios@1.7.2/dist/axios.js', 'normalize.css': 'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css',
  'page.html': SMALL + 'html5.html', 'employees.sql': GH + 'datacharmer/test_db/master/employees.sql',
};
for (const n of [0, 1, 2, 3, 5, 8, 13, 21]) {
  LIST[`qr-${n}.png`] = GH + `cozmo/jsQR/master/tests/end-to-end/${n}/input.png`;
  LIST[`qr-${n}.json`] = GH + `cozmo/jsQR/master/tests/end-to-end/${n}/output.json`;
}

(async () => {
  const dir = path.join(__dirname, 'material');
  fs.mkdirSync(dir, { recursive: true });
  const manifest = {};
  for (const [name, url] of Object.entries(LIST)) {
    const file = path.join(dir, name);
    if (fs.existsSync(file) && fs.statSync(file).size > 0) { manifest[name] = url; continue; }
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const r = await fetch(url, { signal: AbortSignal.timeout(180000) });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
        manifest[name] = url;
        console.log(`ok   ${name} (${Math.round(fs.statSync(file).size / 1024)} KB)`);
        break;
      } catch (e) { console.log(`retry ${name}: ${e.message}`); if (attempt === 3) console.log(`FAIL ${name}`); }
    }
  }
  fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Done: ${Object.keys(manifest).length}/${Object.keys(LIST).length} files`);
})();

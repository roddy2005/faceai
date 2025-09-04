// Downloads FaceAPI models into public/models using jsDelivr
const fs = require('fs');
const path = require('path');
const https = require('https');

const base = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model/';
const outDir = path.join(__dirname, '..', 'public', 'models');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = [
  'tiny_face_detector_model-weights_manifest.json',
  'tiny_face_detector_model.bin',
  'face_landmark_68_model-weights_manifest.json',
  'face_landmark_68_model.bin',
  'face_expression_model-weights_manifest.json',
  'face_expression_model.bin'
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => reject(err));
  });
}

(async () => {
  for (const f of files) {
    const url = base + f;
    const dest = path.join(outDir, f);
    if (fs.existsSync(dest)) { console.log('exists', f); continue; }
    console.log('downloading', url);
    await download(url, dest);
  }
  console.log('models ready at', outDir);
})().catch(err => { console.error(err); process.exit(1); });

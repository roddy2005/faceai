const fs = require('fs');
const path = require('path');

const src = require.resolve('@vladmandic/face-api/dist/face-api.js');
const out = path.join(__dirname, '..', 'public', 'face-api.min.js');
fs.copyFileSync(src, out);
console.log('copied', src, '->', out);

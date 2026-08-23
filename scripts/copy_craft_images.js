const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'WhatsApp Unknown 2026-08-21 at 9.54.00 PM');
const destDir = path.join(__dirname, '..', 'public', 'craft');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

console.log('Total files found:', files.length);

const manifest = files.map((file, idx) => {
  const ext = path.extname(file);
  const num = String(idx + 1).padStart(2, '0');
  const cleanName = 'craft_' + num + ext;
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, cleanName));
  const stats = fs.statSync(path.join(srcDir, file));
  return {
    id: 'craft-' + num,
    original: file,
    path: '/craft/' + cleanName,
    fileName: cleanName,
    size: stats.size
  };
});

fs.writeFileSync(path.join(destDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Successfully copied', manifest.length, 'files to public/craft and generated manifest.json');

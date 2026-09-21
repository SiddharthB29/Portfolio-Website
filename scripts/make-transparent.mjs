/**
 * One-time script: converts the red-ink-on-black artworks to true
 * transparency so they float on the desk with no CSS blend tricks.
 *
 * Alpha comes from CHROMA (how red-dominant a pixel is), not luminance —
 * the artworks' "black" backgrounds carry gray speckle noise that a
 * luminance ramp turns into a dark haze, while red ink always survives.
 * RGB is then un-premultiplied so semi-transparent edges keep the ink hue.
 *
 * Usage: node scripts/make-transparent.mjs
 */
import { PNG } from 'pngjs';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const jobs = [
  ['src/assets/itachi.png', 'src/assets/ink/itachi.png'],
  ['src/assets/konohanew.png', 'src/assets/ink/konohanew.png'],
  ['src/assets/newkurama.png', 'src/assets/ink/newkurama.png'],
];

/** smoothstep between edges a..b */
const smooth = (x, a, b) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

mkdirSync('src/assets/ink', { recursive: true });

for (const [src, out] of jobs) {
  const png = PNG.sync.read(readFileSync(src));
  const { width, height, data } = png;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // red dominance 0..1: gray/black speckles -> 0, red ink -> high
    const chroma = (Math.max(0, r - g) + Math.max(0, r - b)) / 510;

    // a touch of luminance keeps very bright highlights (e.g. eyes) solid
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const a = Math.max(smooth(chroma, 0.05, 0.22), smooth(lum, 0.5, 0.8));

    if (a <= 0.004) {
      data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0;
      continue;
    }

    // un-premultiply against black so semi-transparent ink keeps its color
    data[i] = Math.min(255, Math.round(r / a));
    data[i + 1] = Math.min(255, Math.round(g / a));
    data[i + 2] = Math.min(255, Math.round(b / a));
    data[i + 3] = Math.round(a * 255);
  }

  writeFileSync(out, PNG.sync.write(png));
  console.log(`ok ${out} (${width}x${height})`);
}

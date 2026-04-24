// Generate the Open Graph / social share cover image.
// Run with: `npm run gen:og`
//
// Produces `public/og.png` (1200×630) in the brand's dark editorial style.
// Tweak the SVG below and re-run to refresh — no external deps beyond sharp.

import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '..', 'public', 'og.png')

const BG   = '#0f0f0f'
const INK  = '#f4f2ed'
const MUTE = 'rgba(232,232,232,0.6)'
const LIME = '#d4f541'

// Fallback chain chosen to match the live site as closely as possible on
// whichever machine runs this script — Cormorant Garamond if installed,
// otherwise macOS/Linux serif fallbacks. Inter → system-ui. JetBrains Mono
// → SF Mono / Monaco.
const SERIF = `'Cormorant Garamond', 'EB Garamond', 'Palatino', 'Hoefler Text', Georgia, serif`
const SANS  = `'Inter', system-ui, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif`
const MONO  = `'JetBrains Mono', 'SF Mono', 'Menlo', 'Monaco', monospace`

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}"/>

  <!-- Top eyebrow with lime-accented 1s -->
  <g transform="translate(80, 96)">
    <circle cx="0" cy="-5" r="5" fill="${LIME}"/>
    <text x="16" y="0" font-family="${MONO}" font-size="15" font-weight="700" letter-spacing="2.4" fill="${INK}" dominant-baseline="middle">EXH<tspan fill="${LIME}">1</tspan>B<tspan fill="${LIME}">1</tspan>T &#8212; FREE FOR PHOTOGRAPHERS</text>
  </g>

  <!-- URL top-right -->
  <text x="1120" y="91" font-family="${MONO}" font-size="14" fill="rgba(232,232,232,0.5)" letter-spacing="0.6" text-anchor="end">exh1b1t.github.io</text>

  <!-- Main editorial headline -->
  <g transform="translate(80, 260)">
    <text font-family="${SERIF}" font-size="96" font-weight="400" fill="${INK}" letter-spacing="-2">
      <tspan x="0" dy="0">A portfolio site</tspan>
      <tspan x="0" dy="100">you actually <tspan font-style="italic">own.</tspan></tspan>
    </text>
  </g>

  <!-- Lime tick -->
  <rect x="80" y="520" width="48" height="3" fill="${LIME}"/>

  <!-- Supporting line -->
  <text x="80" y="568" font-family="${SANS}" font-size="21" fill="${MUTE}" letter-spacing="-0.2">Drag, drop, publish. No code. No subscription. No catch.</text>
</svg>`

mkdirSync(dirname(OUT), { recursive: true })

await sharp(Buffer.from(svg), { density: 144 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(OUT)

// Also emit the raw SVG next to it for easier future editing.
writeFileSync(OUT.replace(/\.png$/, '.svg'), svg)

console.log(`✔ wrote ${OUT}`)

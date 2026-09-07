import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const imagesDir = path.join(distDir, 'images')

const cssFile = fs.readdirSync(path.join(distDir, 'assets')).find(f => f.endsWith('.css'))
const jsFile = fs.readdirSync(path.join(distDir, 'assets')).find(f => f.endsWith('.js'))

const css = fs.readFileSync(path.join(distDir, 'assets', cssFile), 'utf-8')
let js = fs.readFileSync(path.join(distDir, 'assets', jsFile), 'utf-8')

// Build data-URI map for every image in dist/images
const mime = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.png': 'image/png' }
const imageFiles = fs.readdirSync(imagesDir)
for (const file of imageFiles) {
  const ext = path.extname(file).toLowerCase()
  const type = mime[ext]
  if (!type) continue
  const bytes = fs.readFileSync(path.join(imagesDir, file))
  const dataUri = `data:${type};base64,${bytes.toString('base64')}`
  const needle = `/images/${file}`
  const count = js.split(needle).length - 1
  js = js.split(needle).join(dataUri)
  console.log(`replaced ${count}x  ${needle}  (${(bytes.length / 1024).toFixed(0)} KB)`)
}

// favicon
const faviconPath = path.join(distDir, 'favicon.svg')
let faviconDataUri = ''
if (fs.existsSync(faviconPath)) {
  const svg = fs.readFileSync(faviconPath, 'utf-8')
  faviconDataUri = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

const html = `<meta charset="utf-8">
<title>ConectaWeb</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="hz:slide-selector" content="body">
${faviconDataUri ? `<link rel="icon" href="${faviconDataUri}">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`

const outPath = path.resolve('artifact-preview.html')
fs.writeFileSync(outPath, html)
console.log('wrote', outPath, (fs.statSync(outPath).size / 1024 / 1024).toFixed(2), 'MB')

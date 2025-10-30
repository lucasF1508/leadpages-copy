// scripts/build-gone.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Usa fetch nativo (Node 18+) o cae a node-fetch
const _fetch = global.fetch || (await import('node-fetch')).default

// === Rutas SIEMPRE relativas a este archivo ===
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')           // .../leadpages-marketing-site
const webDir   = path.join(repoRoot, 'apps', 'web')      // .../apps/web

// === ENVs ===
const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const apiVer    = process.env.SANITY_STUDIO_API_VERSION || '2023-10-01'
const token     = process.env.SANITY_STUDIO_API_READ_TOKEN || ''

const datasetsRaw =
  process.env.SANITY_STUDIO_API_DATASETS ||
  process.env.SANITY_STUDIO_API_DATASET

if (!projectId || !datasetsRaw) {
  console.error('[build-gone] Faltan SANITY_STUDIO_API_PROJECT_ID o DATASET(S)')
  process.exit(1)
}

const datasets = datasetsRaw.split(',').map(s => s.trim()).filter(Boolean)
const headers  = token ? { Authorization: `Bearer ${token}` } : undefined

// Ajustá _type si fuese otro
const QUERY = `*[
  _type == "post" && to410 == true &&
  defined(slug.current) && !(_id in path("drafts.**"))
]{"path": "/blog/" + slug.current}`

async function fetchList(ds) {
  const base = `https://${projectId}.api.sanity.io/v${apiVer}/data/query/${ds}`
  const url  = `${base}?query=${encodeURIComponent(QUERY)}`
  const res  = await _fetch(url, { headers })
  if (!res.ok) {
    const msg = await res.text()
    throw new Error(`Sanity ${ds} -> ${res.status}: ${msg}`)
  }
  const json = await res.json()
  return (json?.result || [])
    .map(x => (x.path || '').replace(/\/$/,'').toLowerCase())
    .filter(Boolean)
}

console.log(`[build-gone] project=${projectId} version=${apiVer} token=${token ? 'yes' : 'no'}`)
console.log(`[build-gone] datasets=${datasets.join(', ')}`)

const union = new Set()
for (const ds of datasets) {
  try {
    const list = await fetchList(ds)
    console.log(`[build-gone] ${ds}: ${list.length} items`)
    list.forEach(p => union.add(p))
  } catch (e) {
    console.error(`[build-gone] ERROR en ${ds}:`, e.message)
  }
}
const merged = Array.from(union).sort()

// 1) JSON para inspección
const outJson = path.join(webDir, 'gone.json')
fs.mkdirSync(path.dirname(outJson), { recursive: true })
fs.writeFileSync(outJson, JSON.stringify(merged, null, 2), 'utf8')
console.log(`[build-gone] wrote ${outJson} (${merged.length} items)`)

// 2) Módulo para el middleware
const outModule = path.join(webDir, 'src', 'gone.generated.js')
fs.mkdirSync(path.dirname(outModule), { recursive: true })
fs.writeFileSync(
  outModule,
  `const goneList = ${JSON.stringify(merged, null, 2)};\nexport default goneList;\n`,
  'utf8'
)
console.log(`[build-gone] wrote ${outModule}`)

// 3) Stamp
const stamp = path.join(webDir, '.gone-build-stamp.txt')
fs.writeFileSync(stamp, `${new Date().toISOString()}  items=${merged.length}\n`, 'utf8')
console.log(`[build-gone] wrote ${stamp}`)

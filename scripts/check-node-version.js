const fs = require('fs')

// Acepta "20.x" o rangos semver como ">=20.0.0". Comprueba que la Node actual cumple.
function currentNodeSatisfies(pkgNodeVersion) {
  const current = process.version.replace(/^v/, '')
  const majorRegex = /^(\d+)\.x$/
  const match = pkgNodeVersion.match(majorRegex)
  if (match) {
    const requiredMajor = parseInt(match[1], 10)
    const currentMajor = parseInt(current.split('.')[0], 10)
    if (requiredMajor !== currentMajor) return false
    const disallowedMajors = [18]
    if (disallowedMajors.includes(currentMajor)) return false
    return true
  }
  // Rango semver (ej. >=20.0.0): comprobar que current >= 20.0.0
  const rangeMatch = pkgNodeVersion.trim().match(/^>=(\d+)\.(\d+)\.(\d+)$/)
  if (rangeMatch) {
    const [, a, b, c] = rangeMatch
    const min = [parseInt(a, 10), parseInt(b, 10), parseInt(c, 10)]
    const cur = current.split('.').map((n) => parseInt(n, 10))
    for (let i = 0; i < 3; i++) {
      if (cur[i] > min[i]) return true
      if (cur[i] < min[i]) return false
    }
    return true
  }
  return false
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const pkgNodeVersion = pkg.engines?.node

if (!pkgNodeVersion) {
  console.error('Error: No node engine specified in package.json')
  process.exit(1)
}

if (!currentNodeSatisfies(pkgNodeVersion)) {
  console.error(
    `Error: Node version does not satisfy package.json engines.\nCurrent: ${process.version}\nRequired: ${pkgNodeVersion}`
  )
  process.exit(1)
}

console.log('✔ Node version satisfies package.json engines')

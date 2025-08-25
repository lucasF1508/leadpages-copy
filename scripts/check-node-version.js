const fs = require('fs')

function isValidMajorVersion(pkgNodeVersion, nvmrcVersion) {
  const majorRegex = /^(\d+)\.x$/
  const fullVersionRegex = /^v?(\d+)\.(\d+)\.(\d+)$/ // allows optional 'v'

  const majorMatch = pkgNodeVersion.match(majorRegex)
  const fullMatch = nvmrcVersion.match(fullVersionRegex)

  if (!majorMatch || !fullMatch) {
    return false // Invalid format
  }

  const major = parseInt(majorMatch[1], 10)
  const fullMajor = parseInt(fullMatch[1], 10)

  // Disallow mismatched major versions
  if (major !== fullMajor) {
    return false
  }

  // Explicitly disallow listed major versions
  const disallowedMajors = [18] // Add more disallowed majors here
  if (disallowedMajors.includes(fullMajor)) {
    return false
  }

  return true
}

const nvmrcVersion = fs.readFileSync('.nvmrc', 'utf8').trim()
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const pkgNodeVersion = pkg.engines?.node

if (!pkgNodeVersion) {
  console.error('Error: No node engine specified in package.json')
  process.exit(1)
}

if (!isValidMajorVersion(pkgNodeVersion, nvmrcVersion)) {
  console.error(
    `Error: Node version mismatch.\n.nvmrc: ${nvmrcVersion}\npackage.json: ${pkgNodeVersion}`
  )
  process.exit(1)
}

console.log('✔ Node version in .nvmrc matches package.json')

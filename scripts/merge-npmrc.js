/**
 * Copies auth from NPM_RC in .env.local to .npmrc so yarn/npm can install
 * @lp packages from the private registry. Run before yarn install if you get 401.
 *
 * Usage: node scripts/merge-npmrc.js
 */
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const envPath = path.join(root, '.env.local')
const npmrcPath = path.join(root, '.npmrc')

if (!fs.existsSync(envPath)) {
  console.log('No .env.local found. If you get 401 on install, create .env.local with NPM_RC (auth for @lp registry).')
  process.exit(0)
}

const content = fs.readFileSync(envPath, 'utf8')
const match = content.match(/NPM_RC\s*=\s*["']((?:[^"'\\]|\\.)*)["']/)
if (!match) {
  console.log('NPM_RC is not in .env.local.')
  process.exit(0)
}

let npmRcValue = match[1].replace(/\\n/g, '\n').trim()

const existing = fs.existsSync(npmrcPath) ? fs.readFileSync(npmrcPath, 'utf8') : ''
if (existing.includes('_authToken') && existing.includes('leadpages.jfrog')) {
  console.log('.npmrc already has leadpages.jfrog auth.')
  process.exit(0)
}

const toWrite = existing.trim() ? existing.trim() + '\n' + npmRcValue : npmRcValue
fs.writeFileSync(npmrcPath, toWrite, 'utf8')
console.log('NPM_RC auth copied to .npmrc. You can run yarn install.')

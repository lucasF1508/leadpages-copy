const sharp = require('sharp')
const toIco = require('to-ico')
const fs = require('fs')
const findUp = require('find-up')
const path = require('path')

require('dotenv').config({
  path: findUp.sync([`.env.${process.env.NODE_ENV}`, '.env.local', '.env']),
})

module.exports = {
  generate: async () => {
    const { manifest, folderPath, icon } = require('config/favicon')

    const faviconSvg = sharp(path.join(folderPath, icon), { density: 10000 })
    const tempPng = await faviconSvg.resize(32, 32).toBuffer()
    const file = [tempPng]
    const icoFormat = await toIco(file)

    fs.writeFileSync(path.join(folderPath, 'favicon.ico'), icoFormat)

    faviconSvg.resize(512, 512).toFile(path.join(folderPath, 'icon-512.png'))
    faviconSvg.resize(192, 192).toFile(path.join(folderPath, 'icon-192.png'))
    faviconSvg
      .resize(140, 140)
      .extend({
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .toFile(path.join(folderPath, 'apple-touch-icon.png'))

    const manifestString = JSON.stringify(
      {
        ...manifest,
        icons: [
          { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
          { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
        ],
      },
      null,
      2
    )

    fs.writeFile(
      path.join(folderPath, 'manifest.webmanifest'),
      manifestString,
      (err) => {
        if (err) {
          throw err
        }
      },
      () => {
        console.log(`Favicon files generated to: `, folderPath)
      }
    )
  },
}

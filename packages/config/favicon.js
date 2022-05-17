// Your Favicon SVG must be a square SVG and placed in the folderPath directory
// Output based on: https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
const path = require('path')
const name = process.env.SANITY_STUDIO_PROJECT_NAME

module.exports = {
  icon: 'favicon.svg',
  folderPath: path.join(__dirname, '../../apps/web/public/favicon/'),
  manifest: {
    name,
    short_name: name,
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  },
}

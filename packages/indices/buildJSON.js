/* eslint-disable no-console */
const jsonfile = require('jsonfile')

module.exports = {
  init: async ({ files } = {}) => {
    console.log(`Building static json files`)

    const builtFiles = files.map(async ({ path, data }) => {
      const file = await jsonfile.writeFileSync(path, data)
      console.log(`Built: ${path}`)
      return file
    })

    const allSettled = await Promise.allSettled(builtFiles)
    console.log(`Finished Building static json files`)

    return allSettled
  },
}

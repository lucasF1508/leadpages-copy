const fs = require('fs')

const buildJSON = (name: string, data: any, path = './migration/files/') => {
  fs.writeFileSync(`${path}${name}.json`, JSON.stringify(data))
}

export default buildJSON

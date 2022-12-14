import Papa from 'papaparse'
import axios from 'axios'
import slugify from '../slugify'

const fetchCSVFeed = async ({
  fileUrl,
  feedOptions: { jsonMethod = 'get', jsonHeaders = [] },
}) => {
  const headers = jsonHeaders.reduce(
    (result, { header, value }) => ({ ...result, [header]: value }),
    {}
  )

  const resp = await axios({ url: fileUrl, headers, method: jsonMethod }).catch(
    ({ response }) => {
      const { status, statusText, data } = response
      const error = { status: 'Error', code: status, message: statusText, data }
      console.error(error)
      return { data: { error } }
    }
  )

  const { data } = Papa.parse(resp.data, {
    header: true,
    transform: (value) => {
      switch (value) {
        case 'Crit':
          return 'criticalHit'
        case 'Fumble':
          return 'criticalFumble'
        default:
          return value
      }
    },
    transformHeader: (header) => slugify(header),
  })

  return data
}

export default fetchCSVFeed

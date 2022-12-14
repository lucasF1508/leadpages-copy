import axios from 'axios'

const fetchJsonFeed = async ({
  url,
  feedOptions: { jsonMethod = 'get', jsonHeaders = [] },
}) => {
  const headers = jsonHeaders.reduce(
    (result, { header, value }) => ({ ...result, [header]: value }),
    {}
  )
  const { data } = await axios({ url, headers, method: jsonMethod }).catch(
    ({ response }) => {
      const { status, statusText, data: responseData } = response
      const error = {
        status: 'Error',
        code: status,
        message: statusText,
        data: responseData,
      }
      console.error(error)
      return { data: { error } }
    }
  )

  return data
}

export default fetchJsonFeed

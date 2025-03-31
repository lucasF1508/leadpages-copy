// eslint-disable-next-line import/no-import-module-exports
import { formApiSubmission } from '@/lib/forms/hubspotHelpers'

const sendHubspot = async (req, res) => {
  const { body: data = {}, method } = req

  if (!['POST'].includes(method)) {
    return res.status(405).send('Method Not Allowed')
  }

  const response = await formApiSubmission(data)

  if (response.error) {
    const { code } = response.error
    return res.status(code || 500).json({
      ...response,
    })
  }

  return res.status(200).json({
    ...response,
    data,
  })
}

export default sendHubspot

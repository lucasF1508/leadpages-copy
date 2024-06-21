// eslint-disable-next-line import/no-import-module-exports
import { formApiSubmission } from '@lib/forms/hubspotHelpers'

module.exports = async (req, res) => {
  const { method, body: data = {} } = req

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

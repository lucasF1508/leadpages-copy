import { getFreeTrialCheckoutUrl } from '@/lib/utils/getFreeTrialCheckoutUrl'

const fetchTrialUrl = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { type, email } = req.body
      const endpoint = getFreeTrialCheckoutUrl(type, true)

      const requestOptions = {
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        redirect: 'follow',
      }

      const data = await fetch(endpoint, requestOptions)
        .then((response) => response.text())
        .then((result) => JSON.parse(result))

      return res.json(data)
    } catch (e) {
      // eslint-disable-next-line
      console.log(`Failed :: Error: ${e.message}`)
      return res.status(500).json({ message: e.message, statusCode: 500 })
    }
  } else {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }
}

export default fetchTrialUrl

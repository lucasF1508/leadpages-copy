import _ from 'lodash'

const { DEVELOPMENT_TRAIL_SIGNUP_ENDPOINT } = process.env
const { VERCEL_ENV } = process.env

export const freeTrialEndpoints = {
  standardAnnual: 'lamghdv4qr14',
  standardMonthly: 'fvnp9stiiu14',
  proAnnual: 'jh4rs6oedh14',
  proMonthly: 'rv7qq6f68t14',
}

const fetchTrialUrl = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { type } = req.body
      const endpoint = freeTrialEndpoints[type]

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(_.omit(req.body, 'type')),
        redirect: 'follow',
      }

      const data = await fetch(
        VERCEL_ENV !== 'development'
          ? `https://my.leadpages.com/order-leadpages/${endpoint}/t/d3yy2ARDnfEVTPU7/?request=new-signup`
          : DEVELOPMENT_TRAIL_SIGNUP_ENDPOINT,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => JSON.parse(result))

      res.json(data)
    } catch (e) {
      // eslint-disable-next-line
      console.log(`Failed :: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default fetchTrialUrl

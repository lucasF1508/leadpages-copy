import omit from 'lodash/omit'
import {getFreeTrialCheckoutUrl} from '@/lib/utils/getFreeTrialCheckoutUrl'

const { DEVELOPMENT_TRAIL_SIGNUP_ENDPOINT } = process.env
const { VERCEL_ENV } = process.env

export const freeTrialEndpoints = {
  proAnnual: 'jh4rs6oedh14',
  proMonthly: 'rv7qq6f68t14',
  standardAnnual: 'lamghdv4qr14',
  standardMonthly: 'fvnp9stiiu14',
}

const fetchTrialUrl = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { type } = req.body
      const endpoint = getFreeTrialCheckoutUrl(type)


      const requestOptions = {
        body: JSON.stringify(omit(req.body, 'type')),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        redirect: 'follow',
      }

      const data = await fetch(
        VERCEL_ENV !== 'development'
          ? [endpoint,'request=new-signup'].join('?')
          : DEVELOPMENT_TRAIL_SIGNUP_ENDPOINT,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => JSON.parse(result))

      res.json(data)
    } catch (e) {
      // eslint-disable-next-line
      console.log(`Failed :: Error: ${e.message}`)
      res.status(500).json({ message: e.message, statusCode: 500 })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default fetchTrialUrl

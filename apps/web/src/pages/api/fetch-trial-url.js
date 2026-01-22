import { getFreeTrialCheckoutUrl } from '@/lib/utils/getFreeTrialCheckoutUrl'

const fetchTrialUrl = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { type, email, extraParams } = req.body
      
      // DEBUG: Log para verificar que se reciben los parámetros
      if (extraParams && Object.keys(extraParams).length > 0) {
        console.log('[fetch-trial-url API] Parámetros recibidos:', extraParams)
      }
      
      const endpoint = getFreeTrialCheckoutUrl(type, true, extraParams)

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

      // Preserve extraParams (like XID or other affiliate params) in the returned URL
      if (data && data['order-url'] && extraParams && Object.keys(extraParams).length > 0) {
        const url = new URL(data['order-url'])
        Object.entries(extraParams).forEach(([key, value]) => {
          if (value) url.searchParams.set(key, value)
        })
        data['order-url'] = url.toString()
        
        // DEBUG: Log para verificar que se preservaron los parámetros
        console.log('[fetch-trial-url API] URL final con parámetros:', data['order-url'])
        const paramsInUrl = Object.keys(extraParams).every(key => 
          data['order-url'].includes(`${key}=${encodeURIComponent(extraParams[key])}`)
        )
        console.log('[fetch-trial-url API] ¿Todos los parámetros están en la URL?', paramsInUrl)
      }

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

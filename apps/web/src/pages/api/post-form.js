const { URLSearchParams } = require('url')

const sendForm = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { url, data } = JSON.parse(req.body)

      const encodedParams = new URLSearchParams()
      Object.keys(data).forEach((key) => {
        encodedParams.set(key, data[key])
      })

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedParams,
      }

      const response = await fetch(url, options).catch((err) =>
        // eslint-disable-next-line
        console.error('Node Fetch Error:' + err)
      )

      const html = await response.text()

      res.status(200).send(html)
    } catch (e) {
      // eslint-disable-next-line
      console.log(`Form Sending Failed :: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default sendForm

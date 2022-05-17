const mailchimp = require('@mailchimp/mailchimp_marketing')
const md5 = require('md5')

const { MC_API_KEY, MC_AUDIENCE_ID, MC_SERVER_PREFIX } = process.env

if (!MC_API_KEY) {
  console.error('No MC_API_KEY found in .env file for Mailchimp')
}

if (!MC_SERVER_PREFIX) {
  console.error('No MC_SERVER_PREFIX found in .env file for Mailchimp')
}

if (!MC_AUDIENCE_ID) {
  console.error('No MC_AUDIENCE_ID found in .env file for Mailchimp')
}

mailchimp.setConfig({
  apiKey: MC_API_KEY,
  server: MC_SERVER_PREFIX,
})

const mailchimpApi = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email } = JSON.parse(req.body)
      const subscriberHash = md5(email.toLowerCase())

      const response = await mailchimp.lists.setListMember(
        MC_AUDIENCE_ID,
        subscriberHash,
        {
          email_address: email,
          status_if_new: 'subscribed',
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        }
      )
      res.status(200).json(response || {})
    } catch (e) {
      // eslint-disable-next-line
      console.log(`Mailchimp Add Subscriber:: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default mailchimpApi

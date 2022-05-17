/* eslint-disable */
import sgMail from '@sendgrid/mail'

const {
  SENDGRID_URL,
  SENDGRID_API_KEY,
  SENDGRID_VERIFIED_SENDER,
  SENDGRID_TEMPLATE_ID,
} = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export const send = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const { replyTo, sendTo, subject, title, formData, attachments } = req.body

  const to = [{ email: sendTo }]
  const reply_to = replyTo ? { email: replyTo } : null
  const template_id = SENDGRID_TEMPLATE_ID

  const from = {
    name: SENDGRID_URL,
    email: SENDGRID_VERIFIED_SENDER,
  }

  const dateData = {
    timeStamp: new Date().toISOString(),
    dateFormat: 'h:mm A - DD MMMM YYYY',
    timezoneOffset: '-0700',
  }

  const dynamic_template_data = {
    url: SENDGRID_URL,
    title: title || subject,
    subject: subject || `Form Submission from ${SENDGRID_URL}`,
    formData,
    dateData,
  }

  const personalizations = [{ to, dynamic_template_data }]
  const payload = {
    personalizations,
    from,
    reply_to,
    template_id,
    attachments,
  }

  const mailResponse = sgMail
    .send(payload)
    .then((response) => {
      console.log(response)
      res.status(200).json({ message: 'Email Sent' })
    })
    .catch((error) => {
      console.log(error)
      console.log(JSON.stringify(error, null, 2))
      res.status(error.code || 500).json({ message: 'Error', error })
    })

  return mailResponse
}

export default send

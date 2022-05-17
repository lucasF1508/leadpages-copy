export const sendMailchimpData = async ({ data }) => {
  const response = await fetch('api/mailchimp-api', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  const res = await response.json()
  return res
}

export default sendMailchimpData

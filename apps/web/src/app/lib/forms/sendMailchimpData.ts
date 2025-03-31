import type { FieldValues } from '@types'

export const sendMailchimpData = async ({ data }: { data: FieldValues }) => {
  const response = await fetch('api/mailchimp-api', {
    body: JSON.stringify(data),
    method: 'POST',
  })
  const res = await response.json()
  return res
}

export default sendMailchimpData

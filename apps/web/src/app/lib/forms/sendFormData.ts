import type { FieldValues } from '@types'
import { extractAttachments, getField, shapeFormData } from './utils'

export interface SendFormDataProps {
  data: FieldValues
  replyTo?: string
  sendTo: string
  subject?: string
  title?: string
}

const sendFormData = async ({
  data,
  replyTo: _replyTo,
  sendTo,
  subject: _subject,
  title,
}: SendFormDataProps) => {
  const replyTo = _replyTo || getField(data, 'email') || sendTo
  const subject = _subject || getField(data, 'subject') || sendTo
  const attachments = await extractAttachments(data)
  const formData = shapeFormData(data)

  const payload = {
    ...data,
    attachments,
    formData,
    replyTo,
    sendTo,
    subject,
    title,
  }

  try {
    const response = await fetch(`/api/send`, {
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error(`HTTP error in sendFormData, status: ${response.status}`)
    }

    const responseData = await response.json()
    return {
      message: 'Sending form was successful',
      response: responseData,
      status: 'success',
    }
  } catch (error) {
    return {
      message: error.message,
      response: error,
      status: 'error',
    }
  }
}

export default sendFormData

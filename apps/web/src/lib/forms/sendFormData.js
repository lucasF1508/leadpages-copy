import axios from 'axios'
import startCase from 'lodash/startCase'
import camelCase from 'lodash/camelCase'

const readInputFile = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => resolve(event.target.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

const extractAttachments = async (data, fields) => {
  const fileFields = fields.filter(({ _type }) => _type.includes('file'))

  if (!fileFields.length) {
    return []
  }

  const files = fileFields
    .map(({ label }) => {
      const key = camelCase(label)
      if (!data[key]) return false
      const [file] = data[key]
      return file
    })
    .filter(Boolean)

  const base64Files = files.map(async (file) => {
    const attachment = await readInputFile(file)
    const [, base64] = attachment.split(',')
    return {
      content: base64,
      filename: file?.name,
      type: file?.type,
      disposition: 'attachment',
    }
  })

  const attachments = await Promise.all(base64Files)
  return attachments
}

const getEmailField = (data) =>
  data[Object.keys(data).find((key) => key.includes('email'))]
const getSubjectField = (data, title) => {
  const dataSubject = Object.keys(data).find((key) => key.includes('subject'))
  return dataSubject ? startCase(data[dataSubject]) : title
}
const shapeFormData = (data) =>
  Object.keys(data).map((key) => ({
    title: startCase(key),
    value: data[key] instanceof FileList ? data[key][0].name : data[key],
  }))

const sendFormData = async ({
  data,
  fields,
  sendTo,
  replyTo: orgReplyTo,
  subject: orgSubject,
  title,
}) => {
  const replyTo = orgReplyTo || getEmailField(data) || sendTo
  const subject = orgSubject
    ? startCase(orgSubject)
    : getSubjectField(data, title) || sendTo
  const attachments = await extractAttachments(data, fields)
  const formData = shapeFormData(data)

  return axios({
    method: 'POST',
    url: `/api/send`,
    data: {
      ...data,
      replyTo,
      sendTo,
      subject,
      formData,
      title,
      attachments,
    },
  })
    .then((response) => ({
      status: 'success',
      response,
    }))
    .catch((error) => ({
      status: 'error',
      response: {
        ...error.response.data,
        error: error.response.data.error.message,
      },
    }))
}

export default sendFormData

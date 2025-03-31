import type { FieldValues } from '@types'
import startCase from 'lodash/startCase'

export const getField = (data: FieldValues, fieldKey: string) =>
  data[Object.keys(data).find((key) => key.includes(fieldKey)) || '']

export const shapeFormData = (
  data: FieldValues
): { title: string; value: string }[] =>
  Object.keys(data).map((key) => ({
    title: startCase(key),
    value: data[key] instanceof FileList ? data[key]?.[0]?.name : data[key] || '',
  }))

export const readInputFile = async (
  file: Blob
): Promise<ArrayBuffer | null | string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => resolve(event?.target?.result ?? null)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

export const extractAttachments = async (
  data: FieldValues
): Promise<
  {
    content: null | string
    disposition: string
    filename: null | string
    type: null | string
  }[]
> => {
  const files = Object.keys(data).reduce((array, key) => {
    if (data[key] instanceof FileList) {
      return [...array, data[key][0]]
    }

    return array
  }, [])

  const base64Files = files.map(async (file) => {
    const attachment = file && await readInputFile(file)

    if (attachment) {
      const [, base64] = (attachment as string).split(',')
      return {
        content: base64 || null,
        disposition: 'attachment',
        filename: file?.name || null,
        type: file?.type || null,
      }
    }

    return {
      content: null,
      disposition: 'attachment',
      filename: null,
      type: null,
    }
  })

  const attachments = await Promise.all(base64Files)
  return attachments
}

// import { serializeError } from 'serialize-error'

export const date = (value) => {
  try {
    const [day] = new Date(value).toISOString().split('T')
    return day
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return value
  }
}

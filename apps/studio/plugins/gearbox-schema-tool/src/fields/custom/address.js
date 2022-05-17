import field from '../field'

const apiKey = process.env.SANITY_STUDIO_GOOGLE_API_KEY

export const address = ({ options = {}, ...props } = {}) =>
  field('address', {
    options: {
      apiKey,
      types: ['address'],
      ...options,
    },
    ...props,
  })

export default address

import field from '../field'
import string from './string'

export const image = (props = {}) =>
  field('image', {
    options: { hotspot: true },
    fields: [
      string({
        name: 'altText',
        description: 'Overrides the image alt text set in the Media Manager.',
      }),
    ],
    ...props,
  })

export default image

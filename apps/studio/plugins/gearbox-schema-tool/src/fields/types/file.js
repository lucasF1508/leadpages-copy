import field from '../field'

export const file = (props = {}) =>
  field('file', {
    fields: [
      {
        type: 'file',
        name: 'file',
      },
    ],
    ...props,
  })

export default file

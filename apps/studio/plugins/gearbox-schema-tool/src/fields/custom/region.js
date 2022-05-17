import multiReference from './multiReference'

export const region = ({ name = 'regions', ...props } = {}) =>
  multiReference('region', {
    name,
    ...props,
  })

export default region

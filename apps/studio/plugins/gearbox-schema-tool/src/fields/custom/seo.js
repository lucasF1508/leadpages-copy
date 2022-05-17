import field from '../field'

export const seo = ({ title = ' ', fieldset = 'seo', ...props } = {}) =>
  field('seo', {
    title,
    fieldset,
    ...props,
  })

export default seo

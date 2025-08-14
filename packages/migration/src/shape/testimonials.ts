import { omit } from "lodash"

const shapeTestimonials = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['variant', 'limit'])

  return {
    ...filteredFields,
    _type: 'testimonialBlock'
  }
}

export default shapeTestimonials
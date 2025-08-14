import { omit } from "lodash"

const shapeFeaturedTemplates = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['images'])
  const [image] = component.images.large || []

  return {
    ...filteredFields,
    _type: 'mediaWithText',
    media: {
      condition: 'image',
      image
    },
  }
}

export default shapeFeaturedTemplates
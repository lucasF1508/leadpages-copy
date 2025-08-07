import { omit } from "lodash"

const shapeMedia = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['align', 'maxWidth'])

  return {
    ...filteredFields,
  }
}

export default shapeMedia
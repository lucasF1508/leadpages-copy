import plainTextToPortable from "@src/utils/plainTextToPortable"
import { omit } from "lodash"

const shapeServicePoints = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['animate', 'servicePoints'])

  return {
    ...filteredFields,
    _type: 'featureCards',
    cards: component.servicePoints?.map((item: Record<string, any>) => ({
        ...(omit(item, ['heading', 'text', 'image'])),
        _type: 'card',
        content: [...plainTextToPortable(item.heading, 'h5'), ...plainTextToPortable(item.text, 'normal'),],
        icon: item.image
      })),
  }
}

export default shapeServicePoints
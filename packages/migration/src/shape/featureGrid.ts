import plainTextToPortable from "@src/utils/plainTextToPortable"
import { omit } from "lodash"

const shapeFeatureGrid = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['itemsPerRow', 'showSectionLink', 'backgroundColor', 'asCards', 'align', 'items'])

  return {
    ...filteredFields,
    _type: 'featureCards',
    cards: component.items?.map((item: Record<string, any>) => ({
        ...(omit(item, ['hideLabel', 'title', 'media', 'link'])),
        _type: 'card',
        content: [...plainTextToPortable(item.title, 'h3'), ...plainTextToPortable(item.content, 'normal'),],
        icon: item.media.image
      })),
  }
}

export default shapeFeatureGrid
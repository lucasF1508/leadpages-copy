import parseLinks from "@src/utils/parseLinks"
import plainTextToPortable from "@src/utils/plainTextToPortable"
import { omit } from "lodash"

const shapeBanner = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['backgroundColor', 'componentColor', 'imagePosition', 'linkIsHidden', 'pill', 'body', 'heading', 'image'])

  return {
    ...filteredFields,
    _type: 'mediaWithText',
    content: [...plainTextToPortable(component?.heading, 'h4'), ...plainTextToPortable(component?.body, 'normal'),],
    links: parseLinks(component?.links),
    media: {
      condition: component.media?.condition || 'image',
      image: component.image,
    },
    pillContent: component.pill
  }
}

export default shapeBanner
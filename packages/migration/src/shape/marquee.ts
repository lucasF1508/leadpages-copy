import addMarksAndMarkDefsToAllBlocks from "@src/utils/addMarksAndMarkDefsToAllBlocks"
import updateMarkDefByKey from "@src/utils/updateMarkdefByKey"
import { omit } from "lodash"
import shapeMarksAndDefs from "./marksAndDefs"

const shapeMarquee = (component: Record<string, any>): Record<string, any> => {
  const marquee = {
    ...omit(component, [
      'hasShadow',
      'height',
      'spaceBetween',
      'images',
      'content'
    ]),
    logos: (component.images || []).map((_image: Record<string, any>) => {
      const {image, link} = _image

       return {
        ...image,
        _type: 'image',
        link,
        maxHeight: component.height
       }
    })
  }

  const content = {
    _type: 'textBlock',
    content: shapeMarksAndDefs(
      component.content,
      addMarksAndMarkDefsToAllBlocks(['align']),
      updateMarkDefByKey('7f2f729ec662', { linkStyle: 'button-solid' })
    ),
  }

  return [content, marquee]
}

export default shapeMarquee
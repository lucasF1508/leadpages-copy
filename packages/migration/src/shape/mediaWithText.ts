import mapBlockContent from "@src/map/map-block-content"
import parseLinks from "@src/utils/parseLinks"
import { omit } from "lodash"

const map = {
  columns: (item: any) => {
    const {items} = item
    if (!items || !Array.isArray(items) || items.length === 0) {
      return item
    }

    const mappedItems = items.flatMap((column: any) => {
      const {content, title} = column

    return [{
      _type: "block",
      "children": [
        {
          "_type": "span",
          "marks": [
            "strong"
          ],
          "text": title
        }
      ],
      "markDefs": [],
      "style": "normal"
    }, {
      _type: "block",
      "children": [
        {
          "_type": "span",
          "marks": [],
          "text": content
        }
      ],
      "markDefs": [],
      "style": "normal"
    }]})
    
    return mappedItems
  },
  h2: (item: any) => ({
    ...item,
    style: 'h4',
  })
}

const shapeMediaWithText = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, [
    "backgroundColor",
    "align",
    "width",
    "priority",
    "alignImage",
    "alignText",
    "contentOptions"
  ])

  return {
    ...filteredFields,
    alignContent: component.align,
    content: mapBlockContent(component.content, map),
    links: parseLinks(component.links),
  }
}

export default shapeMediaWithText
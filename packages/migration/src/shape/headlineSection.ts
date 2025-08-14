import mapBlockContent from "@src/map/map-block-content"
import addMarksAndMarkDefsToAllBlocks from "@src/utils/addMarksAndMarkDefsToAllBlocks"
import { omit } from "lodash"
import shapeMarksAndDefs from "./marksAndDefs"


const shapeHeadlineSection = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['backgroundColor', 'hasSocialize'])
  const mappedContent = mapBlockContent(component.content)

  const content = shapeMarksAndDefs(
    mappedContent,
    addMarksAndMarkDefsToAllBlocks(['align']),
  )

  return {
    ...filteredFields,
    _type: 'textBlock',
    content
  }
}

export default shapeHeadlineSection
import addMarksAndMarkDefsToAllBlocks from "@src/utils/addMarksAndMarkDefsToAllBlocks"
import { omit } from "lodash"
import shapeMarksAndDefs from "./marksAndDefs"

const shapeHeadlineSection = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['backgroundColor'])

  const content = shapeMarksAndDefs(
    component.content, 
    addMarksAndMarkDefsToAllBlocks(['align']),  
  )

  return {
    ...filteredFields,
    _type: 'textBlock',
    content
  }
}

export default shapeHeadlineSection
import mapBlockContent from "@src/map/map-block-content"
import { omit } from "lodash"

const map = {
  h1: (item: any) => ({
    ...item,
    style: 'h1-hero',
  }),
}

const shapeHeroDefault = (hero: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(hero, ['backgroundImage', 'align', 'backgroundOptions', 'imageAlign', 'size'])
  const content = mapBlockContent(filteredFields.content, map)

  return {
    ...filteredFields,
    _type: 'heroWithMedia',
    content
  }
}

export default shapeHeroDefault
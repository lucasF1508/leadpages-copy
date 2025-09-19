import mapBlockContent from "@src/map/map-block-content"
import parseLinks from "@src/utils/parseLinks"
import { omit } from "lodash"

const map = {
  h1: (item: any) => ({
    ...item,
    style: 'h1-hero',
  }),
}

const shapeHeroSimple = (hero: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(hero, ['backgroundImage', 'align', 'backgroundOptions', 'imageAlign', 'maxWidth', 'size'])
  const content = mapBlockContent(filteredFields.content, map)

  return {
    ...filteredFields,
    _type: 'heroSimple',
    content,
    labelMobileOnly: hero.labelMobileOnly || false,
    links: parseLinks(hero.links),
    mediaDesktopOnly: hero.mediaDesktopOnly || false,
  }
}

export default shapeHeroSimple
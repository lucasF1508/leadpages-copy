import shapeHeroDefault from "@src/shape/heroDefault"

const mapHero = (hero: { [key: string]: any }): { [key: string]: any } | null => {
  if (!hero || !hero._type) {
    console.warn('Invalid hero object passed to mapHero.')
    return null
  }

  switch (hero._type) {
    case 'heroDefault':
      const heroWithMedia = shapeHeroDefault(hero)
      return heroWithMedia
    default:
      // eslint-disable-next-line no-console
      console.log(`Skipping hero of type ${hero._type}, no mapper exists.`)
      return null
  }
}

export default mapHero
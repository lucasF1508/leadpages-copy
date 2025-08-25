import shapeHeroDefault from "@src/shape/heroDefault"
import shapeHeroSimple from "@src/shape/heroSimple"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const heroMappers: Record<string, (hero: any) => any> = {
  heroDefault: shapeHeroDefault,
  heroSimple: shapeHeroSimple,
}

export default heroMappers
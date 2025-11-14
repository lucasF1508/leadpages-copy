import shapeHeroBlog from "@src/shape/heroBlog"
import shapeHeroDefault from "@src/shape/heroDefault"
import shapeHeroSimple from "@src/shape/heroSimple"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const heroMappers: Record<string, (hero: any) => any> = {
  heroBlog: shapeHeroBlog,
  heroDefault: shapeHeroDefault,
  heroSimple: shapeHeroSimple,
}

export default heroMappers
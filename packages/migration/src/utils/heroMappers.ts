import shapeHeroDefault from "@src/shape/heroDefault"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const heroMappers: Record<string, (hero: any) => any> = {
  heroDefault: shapeHeroDefault,
}

export default heroMappers
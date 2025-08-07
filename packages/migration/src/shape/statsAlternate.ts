import { omit } from "lodash"

const shapeStatsAlternate = (component: Record<string, any>): Record<string, any> => {
  const filteredFields = omit(component, ['transparent', 'featuredImage', 'imageBackgroundColor', 'backgroundColor'])

  return {
    ...filteredFields,
    _type: 'textWithStats',
    stats: component.stats?.map((stat: Record<string, any>) => ({
      ...(omit(stat, ['label'])),
      content: stat.label,
      statSize: stat.statSize || 'small',
    })),
  }
}

export default shapeStatsAlternate
import { BsArrowsExpand as icon } from 'react-icons/bs'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import * as allHeroesSchema from './heroes'

const heroesSchema = getTemplateSchemas({
  schema: allHeroesSchema,
})

export const schemaHeroes = F.array({
  icon,
  name: 'hero',
  of: [
    ...heroesSchema.map(({ name, title }) => F.field(name, { name, title })),
  ],
  validation: (Rule) => Rule.required().max(1),
})

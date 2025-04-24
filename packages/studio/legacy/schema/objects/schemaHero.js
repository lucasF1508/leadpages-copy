import {BsArrowsExpand as icon} from 'react-icons/bs'
import {getTemplateSchemas} from '@/utils'
import {F} from '@/legacy/schema/tool'
import * as allHeroesSchema from './heroes'

const heroesSchema = getTemplateSchemas({
  schema: allHeroesSchema,
})

export const schemaHeroes = F.array({
  icon,
  name: 'hero',
  of: [...heroesSchema.map(({name, title}) => F.field(name, {name, title}))],
  validation: (Rule) =>
    Rule.custom((field, {parent}) => {
      const {redirectToLegacy, archiveOf} = parent || {}

      if (!!redirectToLegacy || archiveOf) {
        return true
      }

      return field?.length === 1 ? true : 'A single Hero is required.'
    }),
})

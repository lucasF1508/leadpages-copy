import { BsCurrencyDollar as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroPricing = F.object({
  name: 'heroPricing',
  title: 'Pricing Hero (Legacy)',
  icon,
  fields: [
    F.string({ name: 'supertitle' }),
    F.string({ name: 'title' }),
    F.text({ name: 'text' }),
  ],
  preview: P.titleImage({ subtitle: 'text' }),
})

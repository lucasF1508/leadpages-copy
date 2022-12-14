import { BsPlug as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCategoryIntegration = {
  icon,
  name: 'categoryIntegration',
  title: 'Integration Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fieldsets: [FS.fieldset('meta')],
  fields: [
    F.number({
      name: 'categoryOrder',
      hidden: true,
      initialValue: -1,
    }),
    ...F.fieldDefaults(),
  ],
  preview: P.titleImage({
    prepare: ({ title }) => ({ title, subtitle: 'Category' }),
  }),
}

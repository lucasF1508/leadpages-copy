import { BsPatchCheck as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCategoryFeature = {
  icon,
  name: 'categoryFeature',
  title: 'Feature Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fieldsets: [FS.fieldset('meta'), FS.seo()],
  fields: [F.title({ group: 'content' }), F.slug({ group: 'meta' })],
  preview: P.titleImage({
    prepare: ({ title }) => ({ title, subtitle: 'Category' }),
  }),
}

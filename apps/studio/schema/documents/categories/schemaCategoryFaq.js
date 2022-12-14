import { BsQuestionCircle as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCategoryFaq = {
  icon,
  name: 'categoryFaq',
  title: 'FAQ Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fieldsets: [FS.fieldset('meta')],
  fields: [...F.fieldDefaults()],
  preview: P.titleImage({
    prepare: ({ title }) => ({ title, subtitle: 'Category' }),
  }),
}

import { BsNewspaper as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCategoryPost = {
  icon,
  name: 'categoryPost',
  title: 'Post Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.fieldset('meta'), FS.seo()],
  fields: [...F.fieldDefaults(), ...G.group('seo', [F.seo()])],
  preview: P.titleImage({
    prepare: ({ title }) => ({ title, subtitle: 'Category' }),
  }),
}

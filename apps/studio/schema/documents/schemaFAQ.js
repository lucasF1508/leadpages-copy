import { BsQuestionCircle as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFAQ = {
  icon,
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults(),
    ...G.group('content', [F.hero(), F.field('components', {})]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

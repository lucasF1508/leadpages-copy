import { BsPencil as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPublisher = {
  icon,
  name: 'publisher',
  title: 'Publisher',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults({ title: { title: 'Name' } }),
    ...G.group('content', [
      F.image({ name: 'headshot' }),
      F.string({ name: 'jobTitle' }),
      F.field('blockContentBare', { name: 'bio' }),
      F.string({ name: 'email' }),
      F.string({ name: 'linkedInUrl', title: 'LinkedIn URL' }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

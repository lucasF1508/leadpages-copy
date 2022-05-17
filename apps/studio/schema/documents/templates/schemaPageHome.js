import { AiOutlineHome as icon } from 'react-icons/ai'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPageHome = {
  icon,
  name: 'pageHome',
  title: 'Home Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [
    FS.fieldset('meta', { collapsed: false }),
    FS.fieldset('hero', { collapsed: false }),
    FS.fieldset('content', { collapsed: false }),
    FS.seo(),
  ],
  fields: [
    ...F.fieldDefaults({
      slug: {
        readOnly: true,
        initialValue: {
          current: 'home',
        },
      },
    }),
    ...G.group('content', [F.field('hero'), F.field('components')]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

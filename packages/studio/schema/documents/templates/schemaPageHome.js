import {AiOutlineHome as icon} from 'react-icons/ai'
import {F, P, G} from '@/schema/tool'

export const schemaPageHome = {
  icon,
  name: 'pageHome',
  title: 'Home Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...F.fieldDefaultsCustom({parent: {hidden: true}}),
    ...G.group('content', [
      F.field('hero'),
      F.field('components'),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

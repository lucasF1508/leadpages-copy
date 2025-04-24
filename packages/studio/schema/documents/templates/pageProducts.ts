import {FaTshirt as icon} from 'react-icons/fa'
import {F, FS, G} from '@/schema/tool'

export const pageProducts = {
  icon,
  name: 'pageProducts',
  title: 'Products Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fieldsets: [
    FS.define('meta', {collapsed: false}),
    FS.define('content', {collapsed: false}),
    FS.seo(),
  ],
  fields: [
    ...G.group('content', [
      F.title(),
      F.field('hero'),
      F.message('This page is automatically populated with all products'),
      F.field('components'),
    ]),
    ...G.group('meta', [
      F.slug({
        readOnly: true,
        initialValue: {
          current: 'products',
        },
      }),
      F.field('path'),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
}

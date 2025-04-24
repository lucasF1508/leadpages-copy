import {AiOutlineHome as icon} from 'react-icons/ai'
import {F, FS, G, P} from '@/schema/tool'

export const pageHome = {
  icon,
  name: 'pageHome',
  title: 'Home Page',
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
      F.field('components')
    ]),
    ...G.group('meta', [
      F.slug({
        readOnly: true,
        initialValue: {
          current: '/',
        },
      }),
      F.field('path'),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

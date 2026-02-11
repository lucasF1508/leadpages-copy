import {BsNewspaper as icon} from 'react-icons/bs'
import {F, FS, G, P} from '@/schema/tool'

export const pageTemplates = {
  icon,
  name: 'pageTemplates',
  title: 'Template Gallery Settings',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fieldsets: [FS.seo(), FS.define('meta', {collapsed: false})],
  fields: [
    ...G.group('content', [
      F.title(),
      F.object({
        name: 'hero',
        fields: [
          F.string({name: 'label'}),
          F.field('blockContentHero', {name: 'heading'}),
          F.text({name: 'content'}),
        ],
      }),
      F.field('components'),
    ]),
    ...G.group('meta', [F.slug(), F.field('path')]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

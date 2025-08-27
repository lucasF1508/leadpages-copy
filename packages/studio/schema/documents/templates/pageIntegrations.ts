import {BsNewspaper as icon} from 'react-icons/bs'
import {F, FS, G, P} from '@/schema/tool'

export const pageIntegrations = {
  icon,
  name: 'pageIntegrations',
  title: 'Integrations Page',
  type: 'document',
  groups: [
    ...G.fieldGroupDefaults(),
    G.define('no-results', {title: 'No Results'}),
    G.define('seo', {title: 'SEO'}),
  ],
  fieldsets: [FS.seo(), FS.define('meta', {collapsed: false})],
  fields: [
    ...G.group('content', [
      F.title(),
      F.object({
        name: 'hero',
        fields: [F.field('blockContentHero', {name: 'heading'}), F.text({name: 'content'})],
      }),
      F.dropdown(['integration'], {
        name: 'archiveOf',
        readOnly: true,
        hidden: true,
      }),
    ]),
    ...G.group('no-results', [
      F.object({
        name: 'noResults',
        fields: [
          F.string({name: 'heading'}),
          F.field('blockContentSimple', {name: 'content'}),
          F.link(),
        ],
      }),
    ]),
    ...G.group('meta', [F.slug({readOnly: true}), F.field('path')]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

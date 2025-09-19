import { LuAlignJustify as icon } from "react-icons/lu";
import { F, G, P } from '@/schema/tool'

export const heroSimple = F.object({
  icon,
  name: 'heroSimple',
  groups: [
    G.define('content', { title: 'Content', default: true }),
    G.define('media', { title: 'Media' }),
  ],
  fields: [
    ...G.group('content', [
      F.string({ name: 'pill' }),
      F.string({ name: 'label' }),
      F.checkbox({
        name: 'labelMobileOnly',
        title: 'Show Label Only on Mobile',
        description: 'When enabled, overline/label text will only be visible on mobile devices',
        initialValue: false,
      }),
      F.field('blockContentHero', {
        name: 'content',
      }),
      F.links({
        signUpOption: true,
      }),
    ]),
    ...G.group('media', [
      F.media(),
      F.checkbox({
        name: 'mediaDesktopOnly',
        title: 'Show Media Only on Desktop',
        description: 'When enabled, media will only be visible on desktop devices (768px+)',
        initialValue: false,
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
      media: 'media',
    },
    prepare({ heading = '', content }) {
      const subtitle = content ? P.richText(content) : ''
      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
      }
    },
  },
})

import { LuSparkles as icon } from 'react-icons/lu'
import { F, G } from '@/schema/tool'

export const heroLandingGenerator = F.object({
  icon,
  name: 'heroLandingGenerator',
  title: 'Hero Landing Generator',
  groups: [
    G.define('content', { title: 'Content', default: true }),
    G.define('carousel', { title: 'Background Carousel' }),
  ],
  fields: [
    ...G.group('carousel', [
      F.boolean({
        name: 'cardsStatic',
        title: 'Static background cards',
        description:
          'When ON, background cards are static. When OFF, cards scroll from right to left (marquee).',
        initialValue: true,
      }),
      F.array({
        name: 'carouselImages',
        title: 'Background Carousel Images',
        description:
          'Images for the automatic background carousel. Add multiple images; they will transition slowly. If empty, gradient placeholders are used.',
        of: [F.image({ options: { hotspot: true } })],
        options: { layout: 'grid' },
      }),
    ]),
    ...G.group('content', [
      F.field('blockContentHero', {
        name: 'heading',
        title: 'Heading',
        description:
          'Use format styles (H1–H4) for line breaks. Select text and apply "Brand Green (Highlight)" for the green accent (e.g. "Convert.").',
      }),
      F.string({
        name: 'subtitle',
        title: 'Subtitle',
        description: 'Subtitle text below the heading',
      }),
      F.string({
        name: 'inputPlaceholder',
        title: 'Input Placeholder',
        description: 'Placeholder for the URL input',
      }),
      F.string({
        name: 'ctaLabel',
        title: 'CTA Button Label',
        description: 'Generate button text',
      }),
      F.string({
        name: 'ctaUrl',
        title: 'CTA URL',
        description: 'URL for the generate button',
      }),
      F.string({
        name: 'disclaimer',
        title: 'Disclaimer',
        description: 'Small text below the form',
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      const firstBlock = Array.isArray(heading) ? heading[0] : null
      const text = firstBlock?.children?.map((c: { text?: string }) => c?.text || '').join('') || ''
      return {
        title: 'Hero Landing Generator',
        subtitle: text || 'Edit heading…',
      }
    },
  },
})

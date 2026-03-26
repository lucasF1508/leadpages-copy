import { MdCampaign as icon } from 'react-icons/md'
import { F, P } from '@/schema/tool'

export const bannerCta = F.object({
  fields: [
    F.radio(['light', 'dark'], {
      name: 'variant',
      title: 'Theme',
      description: 'Light or dark version',
      initialValue: 'light',
    }),
    F.string({
      name: 'title',
      title: 'Title',
      description: 'Main heading text (e.g., Start building, free for 14 days.)',
      validation: (Rule) => Rule.required(),
    }),

    F.string({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Secondary text below the title',
    }),

    F.string({
      name: 'ctaLabel',
      title: 'Button Label',
      description: 'Text for the button (e.g., Start Free Trial)',
      validation: (Rule) => Rule.required(),
    }),

    F.string({
      name: 'ctaHref',
      title: 'Button Link',
      description: 'URL for the button',
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon,
  name: 'bannerCta',
  preview: {
    select: {
      title: 'title',
      ctaLabel: 'ctaLabel',
    },
    prepare: ({ title, ctaLabel }) => ({
      media: icon,
      subtitle: ctaLabel || '',
      title: title || 'Banner CTA',
    }),
  },
  title: 'Banner CTA',
})

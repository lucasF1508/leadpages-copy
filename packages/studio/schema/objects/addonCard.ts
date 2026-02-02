import { F, P } from '@/schema/tool'
import { BsGrid3X3Gap as icon } from 'react-icons/bs'

export const addonCard = F.object({
  name: 'addonCard',
  title: 'Add-on Card',
  icon,
  fields: [
    F.image({ name: 'icon', title: 'Icon' }),
    F.string({ name: 'title', title: 'Title', validation: (Rule) => Rule.required() }),
    F.field('blockContentSimple', { name: 'description', title: 'Description' }),

    F.string({ name: 'pricePrefix', title: 'Price prefix (e.g. From)' }),
    F.string({ name: 'price', title: 'Price number (e.g. 15)' }),
    F.string({ name: 'priceUnit', title: 'Unit (e.g. USD/mo)' }),
    F.string({ name: 'priceNote', title: 'Price note (e.g. per user)' }),

    F.string({ name: 'ctaLabel', title: 'CTA label' }),
    F.field('link', { name: 'ctaLink', title: 'CTA link' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'price', media: 'icon' },
    prepare: ({ title, subtitle, media }) => ({
      title: title || 'Add-on Card',
      subtitle,
      media,
    }),
  },
})

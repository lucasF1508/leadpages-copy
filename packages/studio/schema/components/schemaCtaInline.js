import {BsCapslock as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaCtaInline = F.object({
  icon,
  title: 'CTA',
  name: 'ctaInline',
  fields: [
    F.reference('cta', {title: 'Call to Action'}),
    F.boolean({
      title: 'Rounded Corners',
      name: 'rounded',
      description: 'Selecting this option will prevent the background color from being full width',
    }),
    F.string({
      name: 'bgColor',
      initialValue: 'purple',
      options: {
        list: [
          {title: 'Navy', value: 'navy'},
          {title: 'Dark Purple', value: 'purpleDark'},
          {
            title: 'Purple',
            value: 'purple',
          },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
  preview: {
    select: {
      title: 'cta.title',
    },
    prepare: ({title = '(empty)'}) => ({title: `CTA: ${title}`}),
  },
})

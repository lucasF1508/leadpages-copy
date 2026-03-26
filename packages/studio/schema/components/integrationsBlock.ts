import {F, P} from '@/schema/tool'
import {BiPlug as icon} from 'react-icons/bi'

export const integrationsBlock = F.object({
  name: 'integrationsBlock',
  title: 'Integrations Block',
  icon,
  fields: [
    F.radio(['dark', 'light'], {
      name: 'variant',
      title: 'Theme',
      description: 'Dark or light version of the block',
      initialValue: 'light',
    }),
    F.string({
      name: 'overline',
      title: 'Overline Text',
      description: 'Optional small uppercase text above the heading',
    }),
    F.field('blockContentHero', {name: 'heading'}),
    F.field('blockContentHero', {name: 'subheading'}),
    F.string({
      name: 'label',
      title: 'Label',
      description: 'Text between subheading and button (e.g., 90+ integrations. Zero Zapier tax...)',
    }),
    F.links({
      name: 'cta',
      title: 'Call to Action Button',
      signUpOption: false,
    }),
    F.image({
      name: 'image',
      title: 'Integration Logos Image',
      description: 'Upload the integration logos image (single image with all logos)',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      overline: 'overline',
      image: 'image',
    },
    prepare({heading, subheading, overline, image}) {
      const title = heading ? P.richText(heading) : 'Integrations'
      const subtitle = subheading ? P.richText(subheading) : overline || ''
      return {
        title: title || 'Integrations',
        subtitle: subtitle || '',
        media: image?.asset || icon,
      }
    },
  },
})

import {F} from '@/schema/tool'
import {AiOutlineMail as icon} from 'react-icons/ai'

export const emailSignature = F.object({
  icon,
  title: 'Email Signature Generator',
  name: 'emailSignature',
  fields: [
    F.string({
      name: 'heading',
      title: 'Heading',
      initialValue: 'Email Signature Generator',
    }),
    F.string({
      name: 'subtitle',
      title: 'Subtitle',
      initialValue: 'Create professional email signatures in minutes',
    }),
    F.string({
      name: 'hubspotFormId',
      title: 'Hubspot Form ID',
      description: 'Form ID from Hubspot (e.g., c3520deb-f584-401a-9f62-e51f5e6eefe3)',
      initialValue: 'c3520deb-f584-401a-9f62-e51f5e6eefe3',
    }),
    F.string({
      name: 'hubspotPortalId',
      title: 'Hubspot Portal ID',
      description: 'Portal ID from Hubspot (e.g., 21794907)',
      initialValue: '21794907',
    }),
    F.string({
      name: 'hubspotRegion',
      title: 'Hubspot Region',
      description: 'Region for Hubspot (e.g., na1)',
      initialValue: 'na1',
    }),
    F.boolean({
      name: 'enableStickyHeader',
      title: 'Enable Sticky Header',
      description: 'Make the header stick to the top when scrolling',
      initialValue: true,
    }),
    F.boolean({
      name: 'enableStickyPreview',
      title: 'Enable Sticky Preview',
      description: 'Make the preview panel stick when scrolling',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'subtitle',
    },
    prepare({heading = 'Email Signature Generator', subtitle}) {
      return {
        title: heading,
        subtitle: subtitle || 'Create professional email signatures',
        media: icon,
      }
    },
  },
})


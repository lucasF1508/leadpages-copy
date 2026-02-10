import {F} from '@/schema/tool'
import {AiOutlineForm as icon} from 'react-icons/ai'

export const hubspotForm = F.object({
  icon,
  title: 'Hubspot Form',
  name: 'hubspotForm',
  fields: [
    F.string({
      name: 'heading',
      title: 'Heading (optional)',
      description: 'Optional heading above the form',
    }),
    F.string({
      name: 'hubspotFormId',
      title: 'Hubspot Form ID',
      description: 'Form ID from Hubspot (e.g., c1c36444-2286-488c-8543-2150c34ed5dc)',
      validation: (Rule) => Rule.required(),
    }),
    F.string({
      name: 'hubspotPortalId',
      title: 'Hubspot Portal ID',
      description: 'Portal ID from Hubspot (e.g., 21794907)',
      initialValue: '21794907',
      validation: (Rule) => Rule.required(),
    }),
    F.string({
      name: 'hubspotRegion',
      title: 'Hubspot Region',
      description: 'Region for Hubspot (e.g., na1)',
      initialValue: 'na1',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      formId: 'hubspotFormId',
    },
    prepare({heading, formId}) {
      return {
        title: heading || 'Hubspot Form',
        subtitle: formId ? `Form ID: ${formId.substring(0, 8)}...` : 'No form ID',
        media: icon,
      }
    },
  },
})


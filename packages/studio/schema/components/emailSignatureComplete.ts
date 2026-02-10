import {F} from '@/schema/tool'
import {AiOutlineMail as icon} from 'react-icons/ai'

export const emailSignatureComplete = F.object({
  icon,
  title: 'Email Signature Complete',
  name: 'emailSignatureComplete',
  fields: [
    F.string({
      name: 'hubspotFormId',
      title: 'Hubspot Form ID',
      initialValue: 'c3520deb-f584-401a-9f62-e51f5e6eefe3',
      validation: (Rule) => Rule.required(),
    }),
    F.string({
      name: 'hubspotPortalId',
      title: 'Hubspot Portal ID',
      initialValue: '21794907',
      validation: (Rule) => Rule.required(),
    }),
    F.string({
      name: 'hubspotRegion',
      title: 'Hubspot Region',
      initialValue: 'na1',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      formId: 'hubspotFormId',
    },
    prepare({formId}) {
      return {
        title: 'Email Signature Complete',
        subtitle: formId ? `Form: ${formId.substring(0, 12)}...` : 'Email Signature Landing Page',
        media: icon,
      }
    },
  },
})


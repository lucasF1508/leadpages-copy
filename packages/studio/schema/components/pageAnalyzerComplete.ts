import {F} from '@/schema/tool'
import {AiOutlineBarChart as icon} from 'react-icons/ai'

export const pageAnalyzerComplete = F.object({
  icon,
  title: 'Page Analyzer Complete',
  name: 'pageAnalyzerComplete',
  fields: [
    F.string({
      name: 'hubspotFormId',
      title: 'Hubspot Form ID',
      initialValue: 'c1c36444-2286-488c-8543-2150c34ed5dc',
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
        title: 'Page Analyzer Complete',
        subtitle: formId ? `Form: ${formId.substring(0, 12)}...` : 'Landing Page Analyzer',
        media: icon,
      }
    },
  },
})


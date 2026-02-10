import {F} from '@/schema/tool'
import {AiOutlineBarChart as icon} from 'react-icons/ai'

export const pageAnalyzer = F.object({
  icon,
  title: 'Page Analyzer',
  name: 'pageAnalyzer',
  fields: [
    F.string({
      name: 'heading',
      title: 'Heading',
      initialValue: 'Page Analyzer',
    }),
    F.string({
      name: 'subtitle',
      title: 'Subtitle',
      initialValue: 'Analyze your landing pages and improve conversion rates',
    }),
    F.string({
      name: 'hubspotFormId',
      title: 'Hubspot Form ID',
      description: 'Form ID from Hubspot (e.g., c1c36444-2286-488c-8543-2150c34ed5dc)',
      initialValue: 'c1c36444-2286-488c-8543-2150c34ed5dc',
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
    F.array({
      name: 'features',
      title: 'Features',
      of: [
        F.object({
          name: 'feature',
          fields: [
            F.string({name: 'title', title: 'Title'}),
            F.text({name: 'description', title: 'Description'}),
          ],
        }),
      ],
      initialValue: [
        {
          title: 'Performance Analysis',
          description: 'Get detailed insights into your page performance',
        },
        {
          title: 'Conversion Optimization',
          description: 'Learn how to improve your conversion rates',
        },
        {
          title: 'Best Practices',
          description: 'Receive recommendations based on industry standards',
        },
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'subtitle',
    },
    prepare({heading = 'Page Analyzer', subtitle}) {
      return {
        title: heading,
        subtitle: subtitle || 'Analyze your landing pages',
        media: icon,
      }
    },
  },
})


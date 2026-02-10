import {F, G} from '@/schema/tool'
import {MdAnalytics as icon} from 'react-icons/md'

export const analyzerInput = F.object({
  icon,
  title: 'Analyzer Input',
  name: 'analyzerInput',
  groups: [G.define('content', {title: 'Content', default: true})],
  fields: [
    ...G.group('content', [
      F.string({
        name: 'toggleLabel',
        title: 'Toggle Label',
        initialValue: 'AI-Powered Analysis',
      }),
      F.text({
        name: 'toggleDescription',
        title: 'Toggle Description',
        rows: 2,
        initialValue:
          'AI will automatically detect your page type and analyze it based on CRO best practices specific to that page type',
      }),
      F.string({
        name: 'inputPlaceholder',
        title: 'Input Placeholder',
        initialValue: 'https://example.com',
      }),
      F.string({
        name: 'buttonText',
        title: 'Button Text',
        initialValue: 'Analyze Now',
      }),
      F.string({
        name: 'hubspotFormId',
        title: 'Hubspot Form ID (optional)',
        description: 'If provided, the Hubspot form will be embedded below the analyzer',
      }),
      F.string({
        name: 'hubspotPortalId',
        title: 'Hubspot Portal ID',
        initialValue: '21794907',
      }),
      F.string({
        name: 'hubspotRegion',
        title: 'Hubspot Region',
        initialValue: 'na1',
      }),
    ]),
  ],
  preview: {
    select: {
      toggleLabel: 'toggleLabel',
      buttonText: 'buttonText',
    },
    prepare({toggleLabel, buttonText}) {
      return {
        title: toggleLabel || 'Analyzer Input',
        subtitle: buttonText || 'Analyze Now',
        media: icon,
      }
    },
  },
})


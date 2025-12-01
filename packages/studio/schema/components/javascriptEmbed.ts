import {FiCode as icon} from 'react-icons/fi'
import {F, G, P} from '@/schema/tool'

export const javascriptEmbed = F.object({
  name: 'javascriptEmbed',
  title: 'JavaScript Embed',
  icon,
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.text({
        name: 'code',
        title: 'JavaScript Code',
        description: 'Paste your JavaScript embed code here (e.g., HubSpot forms, tracking scripts, etc.)',
        validation: (Rule: any) => Rule.required(),
      }),
    ]),
  ],
  preview: {
    select: {
      code: 'code',
    },
    prepare: ({code}: any) => {
      const preview = code ? code.slice(0, 80) : 'No code'
      return {
        title: 'JavaScript Embed',
        subtitle: preview,
        media: icon,
      }
    },
  },
})


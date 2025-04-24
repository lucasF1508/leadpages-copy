import {FiCode as icon} from 'react-icons/fi'
import {F, G, P} from '@/legacy/schema/tool'

export const schemaEmbed = F.object({
  name: 'embed',
  title: 'Embed',
  icon,
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.text({
        name: 'code',
        description:
          "When adding podcast iFrames please ensure the url is in the 'src' property and not 'data-src'.",
      }),
    ]),
    ...G.group('options', [
      F.checkbox({
        name: 'isResponsive',
        title: 'Force Responsive Embed',
        initialValue: false,
      }),
      F.string({
        name: 'ratio',
        title: 'Ratio',
        initialValue: '16:9',
        hidden: ({parent}) => !parent?.isResponsive,
      }),
    ]),
  ],
  preview: {
    select: {
      code: 'code',
      ratio: 'ratio',
      isResponsive: 'isResponsive',
    },
    prepare: ({code, ratio, isResponsive}) => {
      const prefix = isResponsive ? `Ratio: ${ratio} => ` : ''
      return {
        title: `${prefix}${code}`,
        media: icon,
      }
    },
  },
})

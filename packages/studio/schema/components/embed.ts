import {FiCode as icon} from 'react-icons/fi'
import {F, G, P} from '@/schema/tool'

export const embed = F.object({
  name: 'embed',
  title: 'Embed',
  icon,
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [F.text({name: 'code'})]),
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

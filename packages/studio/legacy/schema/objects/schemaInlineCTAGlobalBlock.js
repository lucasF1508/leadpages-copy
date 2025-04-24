import {F, P} from '@/legacy/schema/tool'
import {BsCapslock as icon} from 'react-icons/bs'

export const schemaInlineCTAGlobalBlock = {
  icon,
  title: 'Inline CTA',
  name: 'schemaInlineCTAGlobalBlock',
  type: 'object',
  fields: [
    F.reference('inlineCTAGlobal', {
      name: 'cta',
      title: 'Reference to Global Blog CTA',
    }),
  ],
  preview: P.preview({
    title: 'cta.content',
    media: 'cta.image',
    prepare: ({title, media}) => {
      return {
        title: title ? P.richText([title]) : 'Inline CTA',
        media: media || icon,
      }
    },
  }),
}

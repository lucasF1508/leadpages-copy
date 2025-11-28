import {F, P} from '@/schema/tool'
import {BsMusicNoteBeamed as icon} from 'react-icons/bs'

export const audio = {
  icon,
  name: 'audio',
  title: 'Audio',
  type: 'object',
  fields: [
    F.url({
      name: 'src',
      title: 'Audio File URL',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      src: 'src',
    },
    prepare: ({src}: any) => ({
      title: 'Audio',
      subtitle: src || 'No URL',
      media: icon,
    }),
  },
}


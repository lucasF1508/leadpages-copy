import {F} from '@/schema/tool'
import {BsArrowLeftRight as icon} from 'react-icons/bs'

export const cardsPreviousNext = {
  icon,
  name: 'cardsPreviousNext',
  title: 'Cards Previous/Next',
  type: 'object',
  fields: [
    F.string({
      name: 'heading',
      placeholder: 'ie. Keep comparing',
    }),
    F.object({
      name: 'previous',
      title: 'Previous Card',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        F.string({
          name: 'heading',
          placeholder: 'ie. Back To',
        }),
        F.link({
          name: 'link',
        }),
      ],
    }),
    F.object({
      name: 'next',
      title: 'Next Card',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        F.string({
          name: 'heading',
          placeholder: 'ie. Compare',
        }),
        F.link({
          name: 'link',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      previousHeading: 'previous.heading',
      nextHeading: 'next.heading',
    },
    prepare: ({heading, previousHeading, nextHeading}: any) => ({
      title: heading || 'Cards Previous/Next',
      subtitle: `Previous: ${previousHeading || 'N/A'} | Next: ${nextHeading || 'N/A'}`,
      media: icon,
    }),
  },
}


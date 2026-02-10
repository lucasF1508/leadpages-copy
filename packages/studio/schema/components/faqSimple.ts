import {F} from '@/schema/tool'
import {BsQuestionCircle as icon} from 'react-icons/bs'

export const faqSimple = F.object({
  icon,
  title: 'FAQ Simple',
  name: 'faqSimple',
  fields: [
    F.string({
      name: 'heading',
      title: 'Heading',
      initialValue: 'Frequently Asked Questions',
    }),
    F.text({
      name: 'subtitle',
      title: 'Subtitle (optional)',
      rows: 2,
    }),
    F.array({
      name: 'faqs',
      title: 'Questions',
      of: [
        F.object({
          name: 'faq',
          fields: [
            F.string({
              name: 'question',
              title: 'Question',
              validation: (Rule) => Rule.required(),
            }),
            F.field('blockContent', {
              name: 'answer',
              title: 'Answer',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      faqs: 'faqs',
    },
    prepare({heading, faqs}) {
      const count = faqs?.length || 0
      return {
        title: heading || 'FAQ Simple',
        subtitle: `${count} questions`,
        media: icon,
      }
    },
  },
})


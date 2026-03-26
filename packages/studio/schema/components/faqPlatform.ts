import { BsQuestionCircle as icon } from 'react-icons/bs'
import { F } from '@/schema/tool'

export const faqPlatform = F.object({
  fields: [
    F.radio(['dark', 'light'], {
      name: 'variant',
      title: 'Theme',
      description: 'Dark or light version',
      initialValue: 'dark',
    }),
    F.string({
      name: 'label',
      title: 'Label',
      description: 'Small uppercase text above the heading (e.g., FAQS)',
    }),
    F.string({
      name: 'heading',
      title: 'Heading',
      description: 'Main heading for the FAQ section (e.g., FAQ)',
      validation: (Rule) => Rule.required(),
    }),
    F.string({
      name: 'subheading',
      title: 'Subheading',
      description: 'Description text below the heading (e.g., Get your questions answered.)',
    }),
    F.array({
      name: 'questions',
      title: 'Questions',
      description: 'FAQ questions',
      of: [
        F.object({
          name: 'question',
          title: 'Question',
          fields: [
            F.string({
              name: 'title',
              title: 'Question Title',
              description: 'The question text',
              validation: (Rule) => Rule.required(),
            }),
            F.field('blockContent', {
              name: 'content',
              title: 'Answer',
              description: 'The answer content with rich text formatting',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare({ title }) {
              return {
                title: title || 'Untitled Question',
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  icon,
  name: 'faqPlatform',
  preview: {
    select: {
      title: 'heading',
      questions: 'questions',
    },
    prepare({ title, questions }) {
      const questionCount = questions?.length || 0
      return {
        title: title || 'FAQ Platform',
        subtitle: `${questionCount} questions`,
        media: icon,
      }
    },
  },
  title: 'FAQ Platform',
})

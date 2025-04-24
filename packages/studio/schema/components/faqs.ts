import {BsQuestionCircle as icon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const faqs = F.object({
  icon,
  name: 'faqs',
  title: 'Frequently Asked Questions',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.field('blockContent', {name: 'content'}),  
      F.array({
        name: 'faqs',
        of: [
          F.reference('faq', {
            name: 'question', 
          }),
        ],
      })
    ]),
  ],
  preview: {
    select: {
      faqs: 'faqs',
    },
    prepare({faqs}) {
      return {
        title: 'Frequently Asked Questions',
        subtitle: `${faqs?.length || 0} questions`,
      }
    },
  },
})

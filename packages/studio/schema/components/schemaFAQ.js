import {BsQuestionCircle as icon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const schemaFaqs = F.object({
  icon,
  name: 'faqs',
  title: 'FAQs',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.radio(['all', 'category', 'select'], {
        name: 'selection',
        initialValue: 'all',
      }),
      F.message('All FAQs will be displayed.', {
        hidden: ({parent}) => parent?.selection !== 'all',
      }),
      F.reference('categoryFaq', {
        name: 'category',
        hidden: ({parent}) => parent?.selection !== 'category',
      }),
      F.multiReference('faq', {
        name: 'faqs',
        title: 'FAQs',
        hidden: ({parent}) => parent?.selection !== 'select',
      }),
    ]),
    ...G.group('options', [
      F.boolean({
        name: 'showSectionLink',
        initialValue: true,
      }),
    ]),
  ],
  preview: P.titleImage({
    selection: 'selection',
    prepare: ({selection}) => ({
      title: `FAQ${selection && `: ${selection}`}`,
    }),
  }),
})

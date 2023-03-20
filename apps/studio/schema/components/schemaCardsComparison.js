import { IoIosGitCompare as icon } from 'react-icons/io'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCardsComparison = F.object({
  icon,
  name: 'cardsComparison',
  title: 'Comparison Cards',
  fields: [
    F.radio(['all', 'select'], {
      name: 'selection',
      initialValue: 'all',
    }),
    F.message('All comparisons will be displayed.', {
      hidden: ({ parent }) => parent?.selection !== 'all',
    }),
    F.multiReference('comparison', {
      name: 'comparisons',
      hidden: ({ parent }) => parent?.selection !== 'select',
    }),
  ],
  preview: {
    prepare: ({ title = 'Comparison Cards' }) => ({
      title,
    }),
  },
})

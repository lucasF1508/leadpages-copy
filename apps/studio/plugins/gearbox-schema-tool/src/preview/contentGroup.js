import { richText } from './richText'

export const contentGroup = ({ select = {}, prepare = () => ({}) } = {}) => ({
  select: {
    label: 'label',
    heading: 'heading',
    content: 'content',
    link: 'link',
    ...select,
  },
  prepare: ({ heading, content, label = '', ...rest }) => {
    const subtitle = content ? richText(content) : ''

    return {
      title: heading || subtitle || label,
      subtitle: heading ? subtitle : label,
      ...prepare({ heading, content, label, ...rest }),
    }
  },
})

import preview from './preview'

export const arrayTitle = ({
  select = 'items',
  defaultTitle = 'Items (empty)',
  ...props
}) =>
  preview({
    select,
    prepare: ({ select = [] }) => {
      const title = select.map((item) => item.title).join(', ')
      return {
        title: title || defaultTitle,
      }
    },
    ...props,
  })

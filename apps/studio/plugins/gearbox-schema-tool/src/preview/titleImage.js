import preview from './preview'

export const titleImage = (props) =>
  preview({
    title: 'title',
    media: 'image',
    ...props,
  })

export default titleImage

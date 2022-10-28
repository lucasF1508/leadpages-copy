export const richTextImage = ({ content = [] }) => {
  if (!content || !Array.isArray(content)) return content

  const [mediaBlock] = content.filter(
    ({ _type, condition }) => _type === 'media' && condition === 'image'
  )

  return mediaBlock?.image
}

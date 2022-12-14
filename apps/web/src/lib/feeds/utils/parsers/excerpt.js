import truncateWords from '@utils/truncateWords'

export const excerpt = (value) => {
  const content = truncateWords(value.replace(/(<([^>]+)>)/gi, ''), 35)

  return content
}

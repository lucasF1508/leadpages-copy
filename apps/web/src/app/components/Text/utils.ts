import type { ContentType } from '@/types'

export const hasContent = (content?: ContentType) => {
  if (!Array.isArray(content)) {
    return !!content
  }

  if (
    Array.isArray(content) &&
    content?.length === 1 &&
    content[0]?.children?.length === 1 &&
    !content[0]?.children[0]?.text
  ) {
    return false
  }

  return true
}

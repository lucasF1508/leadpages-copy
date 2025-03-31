import type { PortableTextBlock } from '@types'

export const setStyleNone = (heading: PortableTextBlock[] | string) =>
  Array.isArray(heading)
    ? heading.map((block) => ({ ...block, style: 'none' }))
    : heading

import type { Slug } from '@sanity/types'

export interface CategoryType {
  _id: string
  path?: string
  slug?: Slug
  title?: string
}

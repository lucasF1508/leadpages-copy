import type {Slug} from 'sanity'

declare module 'sanity' {
  export interface SanityDocument {
    slug?: Slug
    path?: string
  }

  export interface SanityDocumentLike {
    slug?: Slug
    path?: string
  }
}

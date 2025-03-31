import type { Reference, SanityDocument, Slug } from '@sanity/types'

export type Params = Record<string, any>

export type Query = {
  params?: Params
  query: string
}

// TODO: type this better with Sanity stuff
export type Data = {
  [key: string]: any
}

export type PaginationType = {
  currentPage: number
  docType?: string
  found?: number
  perPage?: number
  totalPages: number
}

declare module '@sanity/types' {
  export interface SanityDocument {
    slug?: Slug
  }
}

export type { Reference, SanityDocument, Slug }

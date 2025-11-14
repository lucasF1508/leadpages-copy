// components/relatedContent/RelatedContent.types.ts

export type RelatedPost = {
    _key: string
    title?: string
    image: { alt?: string; asset?: any; height?: number; src?: string; width?: number }
    author: string
    date: string
    url: string
}

export type RelatedContentProps = {
    heading: string
    items: RelatedPost[]
}

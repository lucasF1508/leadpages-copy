// components/blog/BestOfBlog.types.ts

export type BestOfBlogItem = {
    excerpt?: string
    href: string
    // Puede venir como {src,...} o como objeto Sanity con asset
    image?: { alt?: string; asset?: any; height?: number; src?: string; width?: number }
    tag?: string
    title: string
}

export type BestOfBlogProps = {
    className?: string
    cta?: { href: string; label: string; target?: '_blank' | '_self' }
    heading: string
    items: BestOfBlogItem[]
    subheading?: string
}


import type { Metadata } from 'next'
import { query, categoryPostsQuery, categoriesQuery } from '@/lib/queries'
import { draftMode } from 'next/headers'
import BlogSearchLayout from '@/components/BlogSearchLayout'

// Dynamic rendering (search needs to be dynamic anyway)
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Search Blog | Leadpages',
  description: 'Search articles about landing pages, lead generation, and digital marketing',
}

export default async function BlogSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const preview = draftMode().isEnabled
  const { q: searchQuery } = await searchParams

  // Get all posts
  const posts = await query(categoryPostsQuery(), {
    preview,
    params: {},
  })?.data

  // Get all categories
  const categories = await query(categoriesQuery, {
    preview,
    params: {},
  })?.data

  return (
    <BlogSearchLayout 
      posts={posts || []} 
      categories={categories || []}
      initialSearchTerm={searchQuery || ''}
    />
  )
}


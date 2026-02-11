import type { ResolvingMetadata, Metadata } from 'next'
import { getStaticPathsParams } from '@/lib/queries'
import { query, authorPostsQuery, authorQuery } from '@/lib/queries'
import { draftMode } from 'next/headers'
import BlogAuthorLayout from '@/components/BlogAuthorLayout'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { notFound } from 'next/navigation'

// Dynamic rendering to avoid build timeouts
export const dynamic = 'force-dynamic'

export async function generateMetadata(
  { params }: { params: Promise<{ author: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { author } = await params
  const authorSlug = Array.isArray(author) ? author[0] : author

  const authorData = await query(authorQuery, {
    preview: draftMode().isEnabled,
    params: { slug: authorSlug },
  })?.data

  if (!authorData) {
    return {
      title: 'Author Not Found',
    }
  }

  return {
    title: `${authorData.title} | Blog | Leadpages`,
    description: authorData.seo?.seoDescription || `Articles by ${authorData.title}`,
  }
}

export default async function BlogAuthorPage({
  params,
}: {
  params: Promise<{ author: string }>
}) {
  const { author } = await params
  const authorSlug = Array.isArray(author) ? author[0] : author
  const preview = draftMode().isEnabled

  // Get author data
  const authorData = await query(authorQuery, {
    preview,
    params: { slug: authorSlug },
  })?.data

  if (!authorData) {
    notFound()
  }

  // Get posts by this author (limit to 9)
  const posts = await query(authorPostsQuery(authorSlug), {
    preview,
    params: {},
  })?.data

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: authorData.title || authorData.name || 'Author', path: `/blog/author/${authorSlug}` },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogAuthorLayout
        author={authorData}
        posts={posts || []}
      />
    </>
  )
}


import type { ResolvingMetadata } from 'next'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'
import { query, postQuery } from '@/lib/queries'
import { draftMode } from 'next/headers'
import BlogPostLayout from '@/components/BlogPostLayout'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

// ISR with 1 hour revalidation for better performance
export const revalidate = 3600

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug } = await params
  const slugString = Array.isArray(slug) ? slug[0] : slug
  
  return await generateMetadataStatic({ 
    parent, 
    path: `/blog/${slugString}`, 
    types: ['post'] 
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const slugString = Array.isArray(slug) ? slug[0] : slug

  const post = await query(postQuery, {
    preview: draftMode().isEnabled,
    params: { slug: slugString },
  })?.data

  if (!post) {
    return <div>Post not found</div>
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    ...(post.primaryCategory
      ? [{
          name: post.primaryCategory.title,
          path: post.primaryCategory.url || `/blog/category/${post.primaryCategory.slug?.current}`,
        }]
      : []),
    { name: post.title, path: `/blog/${slugString}` },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogPostLayout post={post} />
    </>
  )
}


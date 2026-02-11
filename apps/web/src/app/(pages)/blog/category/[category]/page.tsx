import type { ResolvingMetadata, Metadata } from 'next'
import { getStaticPathsParams } from '@/lib/queries'
import { query, categoryPostsQuery, categoryQuery, categoriesQuery } from '@/lib/queries'
import { draftMode } from 'next/headers'
import BlogCategoryLayout from '@/components/BlogCategoryLayout'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import { notFound } from 'next/navigation'

// Dynamic rendering to avoid build timeouts
export const dynamic = 'force-dynamic'

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { category } = await params
  const categorySlug = Array.isArray(category) ? category[0] : category

  const categoryData = await query(categoryQuery, {
    preview: draftMode().isEnabled,
    params: { slug: categorySlug },
  })?.data

  if (!categoryData) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${categoryData.title} | Blog | Leadpages`,
    description: categoryData.seo?.seoDescription || `Articles about ${categoryData.title}`,
  }
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const categorySlug = Array.isArray(category) ? category[0] : category
  const preview = draftMode().isEnabled

  // Get category data
  const categoryData = await query(categoryQuery, {
    preview,
    params: { slug: categorySlug },
  })?.data

  if (!categoryData) {
    notFound()
  }

  // Get posts for this category
  const posts = await query(categoryPostsQuery(categorySlug), {
    preview,
    params: {},
  })?.data

  // Get all categories for sidebar
  const categories = await query(categoriesQuery, {
    preview,
    params: {},
  })?.data

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: categoryData.title, path: `/blog/category/${categorySlug}` },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogCategoryLayout
        category={categoryData}
        posts={posts || []}
        categories={categories || []}
      />
    </>
  )
}


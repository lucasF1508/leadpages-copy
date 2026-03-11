import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import TemplatePreview from '@/components/TemplatePreview'
import { getStaticPathsParams, query, runQuery } from '@/lib/queries'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'

const queryData = (slug: string) =>
  query(
    `*[slug.current == '${slug}' || _id == '${slug}'] | order(_updatedAt desc) [0]`,
    {
      preview: draftMode().isEnabled,
    }
  )

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug: _slug } = await params

  const slugFromId = await runQuery(
    `*[_type =='template' && kind == "LeadpageTemplate" && _id == $slug ][0].slug.current`,
    {
      params: { slug: _slug },
    }
  )

  const slug = slugFromId || _slug

  return await generateMetadataStatic({
    canonical: `/templates/landing-page-template-new/${slug}`,
    parent,
    slug,
    types: ['template'],
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    const data = (await queryData(slug).data) || {}

    if (!data?._id) {
      notFound()
    }

    return <TemplatePreview data={data} />
  } catch (e) {
    console.error(`[templates/preview] Failed for slug "${slug}":`, e)
    notFound()
  }
}

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const params = await getStaticPathsParams({
      filter: 'kind == "LeadpageTemplate"',
      type: 'template',
    })
    const ids = await runQuery(
      `*[_type == "template" && kind == "LeadpageTemplate"]._id`
    )

    const slugPaths = params.map(({ params: { slug } }: any) => ({
      slug,
    }))

    const idPaths = Array.isArray(ids) ? ids.map((slug: string) => ({ slug })) : []

    return [...slugPaths, ...idPaths]
  } catch (e) {
    console.warn('[templates/preview] generateStaticParams failed:', e)
    return []
  }
}

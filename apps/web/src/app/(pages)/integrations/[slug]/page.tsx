import type { ResolvingMetadata } from 'next'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'
import { query, componentsQuery, joinPath } from '@/lib/queries'
import { draftMode } from 'next/headers'
import Layout from '@/components/Layout'

export const dynamicParams = false
const types = ['integration']

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ types })
  const paths = params.map(({ params: { slug } }: any) => ({
    slug,
  }))

  return paths
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug = '' } = await params
  const path = joinPath(['integrations', slug])

  return await generateMetadataStatic({ parent, path, types })
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug = '' } = await params
  const path = joinPath(['integrations', slug])

  const { components, hero } =
    (await query(
      `*[_type in $types && path == $path] | order(_updatedAt desc) [0]
    {
      ...,
      ${componentsQuery}
    }
  `,
      {
        preview: draftMode().isEnabled,
        params: {
          path,
          types,
        },
      }
    ).data) || {}

  return <Layout data={{ hero, components }} />
}

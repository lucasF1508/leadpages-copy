import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { query } from '@/lib/queries'
import { getStaticPathsParams } from '@/lib/queries'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { TemplateKind } from '@/types/template-constants'

const types = ['template']
const kind = TemplateKind.Leadpage

export async function generateStaticParams() {
  try {
    const templates = await getStaticPathsParams({
      filter: `kind == "${kind}"`,
      types,
    })

    return (templates || []).map(({ params: { slug } }: any) => ({
      slug: slug || '',
    })).filter(({ slug }: { slug: string }) => slug)
  } catch (error) {
    console.error('Error generating static params for landing-page-template-full:', error)
    return []
  }
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug: _slug } = await params
  const slug = Array.isArray(_slug) ? _slug : [_slug]

  return await generateMetadataStatic({
    parent,
    slug: slug?.join('/'),
    types,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Fetch template data to get previewUrl
  const template = await query(
    `*[_type == 'template' && kind == $kind && slug.current == $slug] | order(_updatedAt desc) [0] {
      previewUrl,
      title,
      _id
    }`,
    {
      params: {
        kind,
        slug,
      },
      preview: draftMode().isEnabled,
    }
  ).data

  if (!template?.previewUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template no encontrado</h1>
          <p className="text-gray-600">No se encontró un previewUrl para este template.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src={template.previewUrl}
        className="w-full h-full border-0"
        title={`${template.title || 'Template'} - Full Preview`}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        allowFullScreen
      />
    </div>
  )
}


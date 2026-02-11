import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import Layout from '@/components/Layout'
import { getStaticPathsParams } from '@/lib/queries'
import { fetchInspirationData } from '@/lib/queries/fetchInspirationData'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { TemplateKind } from '@/types/template-constants'

const types = ['template']

export async function generateStaticParams() {
  // Obtener solo templates de Leadpage sin Mandrel ID válido
  const leadpageTemplates = await getStaticPathsParams({
    filter: `kind == "${TemplateKind.Leadpage}" && (!defined(id) || id == null || id == '' || id match "*example*" || id match "*test*" || id match "*ejemplo*" || id match "*prueba*" || length(id) < 10) && !defined(lastMandrelUpdate) && !defined(originalCreatedAt)`,
    types,
  })

  const paths = leadpageTemplates.map(({ params: { slug } }: any) => ({
    slug,
  }))

  return paths
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

  // Fetch template data (Leadpage templates without Mandrel ID)
  const result = await fetchInspirationData({
    kind: TemplateKind.Leadpage,
    slug,
  })

  // Si no encuentra resultados, mostrar error
  if (!result.components.length && !result.hero.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template no encontrado</h1>
          <p className="text-gray-600 mb-2">No se encontró un template con el slug: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code></p>
          <p className="text-sm text-gray-500">Verifica que el template esté publicado en Sanity CMS.</p>
        </div>
      </div>
    )
  }

  return <Layout data={{ components: result.components, hero: result.hero }} />
}

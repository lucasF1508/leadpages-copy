// src/apps/web/src/lib/utils/generateMetadata/generateMetadataStatic.ts
import type { Metadata, ResolvingMetadata } from 'next'
import config from 'config'
import { draftMode } from 'next/headers'
import { runQuery } from '@/lib/queries'
import { parseImageRef } from '@/lib/utils/parseImageRef'

interface GenerateMetadataStaticProps {
  canonical?: string
  parent?: ResolvingMetadata
  path?: string
  slug?: string
  types?: string[]
}

const configTypes = config?.studio?.docTypes

const cleanPath = (p?: string) => {
  const raw = p || '/'
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`
  return withSlash.split(/[?#]/, 1)[0] || '/'
}

export const generateMetadataStatic = async ({
  canonical,
  parent,
  path = '',
  slug = '',
  types = configTypes,
}: GenerateMetadataStaticProps): Promise<Metadata> => {
  const [data] = await runQuery(
    `*[(path == $path || slug.current == $slug) && _type in $types]{
      ...(seo),
      "seoTitle": coalesce(seo.seoTitle, title)
    }`,
    {
      params: { path, slug, types },
      preview: draftMode().isEnabled,
    }
  )

  const parentProps = await parent

  const {
    seoDescription: description,
    seoImage: image,
    seoTitle: title,
  } = data || {}

  const imgUrl = image ? (parseImageRef(image)?.url ?? null) : null

 const canonicalPath = cleanPath(
  canonical ?? (path?.startsWith('/') ? path : `/${path}`) ?? (slug ? `/${slug}` : '/')
)

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      ...(parentProps?.alternates?.languages
        ? { languages: parentProps.alternates.languages }
        : {}),
      ...(parentProps?.alternates?.media
        ? { media: parentProps.alternates.media }
        : {}),
      ...(parentProps?.alternates?.types
        ? { types: parentProps.alternates.types }
        : {}),
      canonical: canonicalPath,
    },
    openGraph: {
      ...parentProps?.openGraph,
      ...(title ? { title } : {}),
      description: description || parentProps?.description,
      images: [
        ...(imgUrl ? [{ height: 630, url: imgUrl, width: 1200 }] : []),
        ...((parentProps?.openGraph?.images as any[]) || []),
      ].filter(Boolean),
      url: canonicalPath,
    } as Metadata['openGraph'],
    twitter: {
      ...parentProps?.twitter,
      ...(title ? { title } : {}),
      description: description || parentProps?.description,
      images: [
        ...(imgUrl ? [imgUrl] : []),
        ...((parentProps?.twitter?.images as unknown as string[]) || []),
      ].filter(Boolean) as string[],
    } as Metadata['twitter'],
  }
}

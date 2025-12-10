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
  if (!p) return '/'
  
  // Si es una URL completa (con protocolo), extraer solo la ruta
  if (/^(https?:)?\/\//.test(p)) {
    try {
      const urlObj = new URL(p.startsWith('//') ? `https:${p}` : p)
      const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'
      const siteUrlObj = new URL(siteUrl)
      
      // Si es un enlace interno (mismo dominio), retornar solo la ruta
      if (urlObj.origin === siteUrlObj.origin) {
        const pathname = urlObj.pathname
        return pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
      }
      
      // Si es externa, retornar la URL completa normalizada
      const pathname = urlObj.pathname
      const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
      return `https://${urlObj.host}${normalizedPathname}${urlObj.search}${urlObj.hash}`
    } catch {
      // Si falla el parsing, intentar extraer la ruta si parece ser interna
      const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'
      const siteDomain = siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
      if (p.includes(siteDomain)) {
        const match = p.match(/https?:\/\/[^\/]+(\/.*)/)
        if (match && match[1]) {
          const pathParts = match[1].split(/[?#]/, 1)
          const path = pathParts[0]
          if (path) {
            return path === '/' ? '/' : path.replace(/\/+$/, '')
          }
        }
      }
    }
  }
  
  // Para rutas relativas, normalizar
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
  const withLeadingSlash = path?.startsWith('/') ? path : path ? `/${path}` : ''
  const withoutTrailingSlash =
    withLeadingSlash === '/' ? '/' : withLeadingSlash.replace(/\/+$/g, '') || '/'
  const normalizedPath = withoutTrailingSlash
  const alternatePath = normalizedPath.replace(/^\/+/g, '')
  const legacyPath = alternatePath.replace(/\/+$/g, '')
  const [data] = await runQuery(
    `*[((path == $path || path == $alternatePath || path == $legacyPath) || slug.current == $slug) && _type in $types]{
      ...(seo),
      "seoTitle": coalesce(seo.seoTitle, title)
    }`,
    {
      params: {
        alternatePath,
        legacyPath,
        path: normalizedPath,
        slug,
        types,
      },
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
    canonical ?? (normalizedPath || (slug ? `/${slug}` : '/'))
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

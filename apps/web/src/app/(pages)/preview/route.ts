import type { NextRequest } from 'next/server';
import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'
import { query } from '@/lib/queries'

const { SANITY_STUDIO_PREVIEW_SECRET } = process.env

interface DocumentFields {
  kind: string
  slug: string
  url: string
}

export async function GET(request: NextRequest) {
  // Ensure fresh draft mode state
  draftMode().disable()

  const { searchParams } = request.nextUrl
  const secret = searchParams.get('secret')
  const path = searchParams.get('path')
  const type = searchParams.get('type')

  if (secret !== SANITY_STUDIO_PREVIEW_SECRET) {
    return NextResponse.json(
      { message: 'Preview Unavailable - Invalid token' },
      { status: 401 }
    )
  }

  if (!path) {
    return NextResponse.json(
      { message: 'Preview Unavailable - Invalid Path' },
      { status: 401 }
    )
  }

  let doc: DocumentFields | null = null

  // Función helper para buscar documento
  const searchDoc = async (searchPath: string, searchType: string | null) => {
    try {
      // Si tenemos type, buscar con filtro de tipo
      if (searchType) {
        const result = await query(
          `*[_type == $type && path == $path] | order(_updatedAt desc) [0] {
            "url": path,
            "slug": slug.current,
            kind
          }`,
          {
            params: {
              path: searchPath,
              type: searchType,
            },
            preview: true,
          }
        ).data
        return result || null
      } else {
        // Si no hay type, buscar sin filtro de tipo
        const result = await query(
          `*[path == $path] | order(_updatedAt desc) [0] {
            "url": path,
            "slug": slug.current,
            kind,
            "_type": _type
          }`,
          {
            params: {
              path: searchPath,
            },
            preview: true,
          }
        ).data
        return result || null
      }
    } catch (error) {
      console.error('Error searching for document:', error)
      return null
    }
  }

  // Buscar primero con el path original
  doc = await searchDoc(path, type)

  // Si no encuentra, intentar con path normalizado (sin trailing slash)
  if (!doc && path !== '/') {
    const normalizedPath = path.replace(/\/+$/, '')
    doc = await searchDoc(normalizedPath, type)
  }

  // Si aún no encuentra, intentar con path con trailing slash
  if (!doc && path !== '/' && !path.endsWith('/')) {
    const pathWithSlash = path + '/'
    doc = await searchDoc(pathWithSlash, type)
  }

  const { url } = (doc as DocumentFields) || {}
  const origin = request.nextUrl.origin

  // Si no hay url, usar el path original
  const targetUrl = url || path
  const absoluteUrl = new URL(targetUrl, origin).toString()

  draftMode().enable()

  return NextResponse.redirect(absoluteUrl, 307)
}

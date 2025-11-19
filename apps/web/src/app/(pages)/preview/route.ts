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

  // Buscar primero con el path original
  let doc = await query(`*[_type == $type && path == $path] | order(_updatedAt desc) [0] {
      "url": path,
      "slug": slug.current,
      kind
    }`, {
    params: {
      path,
      type,
    },
    preview: true,
  })
    .data || {}

  // Si no encuentra, intentar con path normalizado (sin trailing slash)
  if (!doc && path !== '/') {
    const normalizedPath = path.replace(/\/+$/, '')
    doc = await query(`*[_type == $type && path == $path] | order(_updatedAt desc) [0] {
        "url": path,
        "slug": slug.current,
        kind
      }`, {
      params: {
        path: normalizedPath,
        type,
      },
      preview: true,
    })
      .data || {}
  }

  // Si aún no encuentra, intentar con path con trailing slash
  if (!doc && path !== '/' && !path.endsWith('/')) {
    const pathWithSlash = path + '/'
    doc = await query(`*[_type == $type && path == $path] | order(_updatedAt desc) [0] {
        "url": path,
        "slug": slug.current,
        kind
      }`, {
      params: {
        path: pathWithSlash,
        type,
      },
      preview: true,
    })
      .data || {}
  }

  const { url } = doc as DocumentFields
  const origin = request.nextUrl.origin

  // Si no hay url, usar el path original
  const targetUrl = url || path
  const absoluteUrl = new URL(targetUrl, origin).toString()

  draftMode().enable()

  return NextResponse.redirect(absoluteUrl, 307)
}

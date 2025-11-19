import getClient from 'client'
import { getTemplateUrl } from '@lib/utils/templates'

const { SANITY_STUDIO_PREVIEW_SECRET } = process.env
const { NEXT_PUBLIC_URL } = process.env
const client = getClient({ preview: true })

const preview = async (req, res) => {
  res.clearPreviewData()
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== SANITY_STUDIO_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Preview Unavailable - Invalid token' })
  }

  if (!req.query.path) {
    return res.status(401).json({ message: 'Preview Unavailable - Invalid Path' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const originalPath = req.query.path
  
  // Buscar primero con el path exacto que viene
  let document = await client.fetch(
    `*[_type == $type && path == $path][0]{"url": path, "slug": slug.current, kind}`,
    {
      path: originalPath,
      type: req.query.type,
    }
  ).catch(() => null)

  // Si no encuentra, intentar con path normalizado (sin trailing slash)
  if (!document && originalPath !== '/' && originalPath.endsWith('/')) {
    const normalizedPath = originalPath.replace(/\/+$/, '')
    document = await client.fetch(
      `*[_type == $type && path == $path][0]{"url": path, "slug": slug.current, kind}`,
      {
        path: normalizedPath,
        type: req.query.type,
      }
    ).catch(() => null)
  }

  // Si aún no encuentra, intentar con path con trailing slash
  if (!document && originalPath !== '/' && !originalPath.endsWith('/')) {
    const pathWithSlash = originalPath + '/'
    document = await client.fetch(
      `*[_type == $type && path == $path][0]{"url": path, "slug": slug.current, kind}`,
      {
        path: pathWithSlash,
        type: req.query.type,
      }
    ).catch(() => null)
  }

  // Si aún no encuentra, buscar por path sin importar el tipo (útil para pageArchive, pageHome, etc.)
  if (!document) {
    document = await client.fetch(
      `*[path == $path][0]{"url": path, "slug": slug.current, kind, "_type": _type}`,
      {
        path: originalPath,
      }
    ).catch(() => null)
    
    if (document) {
      // Actualizar el tipo para que coincida con el documento encontrado
      req.query.type = document._type
    } else if (originalPath !== '/' && !originalPath.endsWith('/')) {
      // Intentar también con trailing slash
      const pathWithSlash = originalPath + '/'
      document = await client.fetch(
        `*[path == $path][0]{"url": path, "slug": slug.current, kind, "_type": _type}`,
        {
          path: pathWithSlash,
        }
      ).catch(() => null)
      
      if (document) {
        req.query.type = document._type
      }
    }
  }

  const {
    slug,
    url,
    kind: templateType,
  } = document || {}

  // Enable Preview Mode by setting the cookies
  res.setPreviewData(
    {},
    {
      maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
    }
  )

  const proto = process.env.NODE_ENV === 'development' ? `http://` : `https://`
  const { host } = req.headers

  if (req?.query?.fetch === 'true') {
    const corsOrigin =
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3333`
        : NEXT_PUBLIC_URL

    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Si no encontramos el documento, devolver error
    if (!document) {
      return res.status(404).json({ 
        message: 'Document not found',
        path: originalPath,
        type: req.query.type
      })
    }

    // Usar url del documento si existe, sino usar el path de la query
    const targetUrl = url || originalPath
    const absoluteUrl = new URL(`${proto}${host}${targetUrl}`).toString()
    
    const previewHtml = await fetch(absoluteUrl, {
      credentials: `include`,
      headers: { Cookie: req.headers.cookie },
    })
      .then((previewRes) => {
        if (!previewRes.ok) {
          throw new Error(`Preview fetch failed with status ${previewRes.status}`)
        }
        return previewRes.text()
      })
      .catch(() => null)

    if (previewHtml) {
      return res.send(previewHtml)
    } else {
      return res.status(500).json({ 
        message: 'Failed to fetch preview HTML',
        targetUrl: absoluteUrl
      })
    }
  }

  // Si no hay url, usar el path original
  if (!url) {
    return res.redirect(307, originalPath)
  }

  if (templateType) {
    const templateUrl = new URL(
      `${proto}${host}${getTemplateUrl(templateType, slug)}`
    ).toString()

    return res.redirect(307, templateUrl)
  }

  return res.redirect(307, url)
}

export default preview

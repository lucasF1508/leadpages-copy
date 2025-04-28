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
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const {
    slug,
    url,
    kind: templateType,
  } = (await client.fetch(
    `*[_type == $type && path == $path][0]{"url": path, "slug": slug.current, kind}`,
    {
      path: req.query.path,
      type: req.query.type,
    }
  )) || {}

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

    const absoluteUrl = new URL(`${proto}${host}${url}`).toString()
    const previewHtml = await fetch(absoluteUrl, {
      credentials: `include`,
      headers: { Cookie: req.headers.cookie },
    })
      .then((previewRes) => previewRes.text())
      .catch((err) => console.error(err))

    return res.send(previewHtml)
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

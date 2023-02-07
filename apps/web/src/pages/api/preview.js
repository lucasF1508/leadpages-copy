import getClient from 'client'

const { SANITY_STUDIO_PREVIEW_SECRET } = process.env
const { NEXT_PUBLIC_URL } = process.env
const client = getClient({ preview: true })

const preview = async (req, res) => {
  res.clearPreviewData()
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== SANITY_STUDIO_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const { slug, url } =
    (await client.fetch(
      `*[_type == $type && slug.current == $slug][0]{"url": path, "slug": slug.current}`,
      {
        slug: req.query.slug,
        type: req.query.type,
      }
    )) || {}

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!slug) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData(
    {},
    {
      maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
    }
  )

  if (req?.query?.fetch === 'true') {
    const corsOrigin =
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3333`
        : NEXT_PUBLIC_URL

    res.setHeader('Access-Control-Allow-Origin', corsOrigin)
    res.setHeader('Access-Control-Allow-Credentials', true)

    const proto =
      process.env.NODE_ENV === 'development' ? `http://` : `https://`
    const { host } = req.headers
    const absoluteUrl = new URL(`${proto}${host}${url}`).toString()
    const previewHtml = await fetch(absoluteUrl, {
      credentials: `include`,
      headers: { Cookie: req.headers.cookie },
    })
      .then((previewRes) => previewRes.text())
      .catch((err) => console.error(err))

    return res.send(previewHtml)
  }

  return res.redirect(307, url)
}

export default preview

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET

export const resolveProductionUrl = (document) => {
  if (!previewSecret) {
    console.error(
      'SANITY_STUDIO_PREVIEW_SECRET Not defined in .env file.',
      previewSecret
    )
  }

  const projectUrl = window?.location.origin.includes('localhost')
    ? 'http://localhost:3000'
    : window?.location.origin

  if (!document.slug || !projectUrl || !previewSecret) {
    return null
  }

  let url = `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}&type=${document._type}`

  if (!url.startsWith('http')) {
    url = `https://${url}`
  }

  return url
}

export default resolveProductionUrl

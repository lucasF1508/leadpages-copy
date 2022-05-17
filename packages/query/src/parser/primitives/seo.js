export const seo = {
  seoTitle: 'coalesce(seo.seoTitle, @.title)',
  seoImage: `seo.seoImage{..., asset->}`,
  seoDescription: 'seo.seoDescription',
  hasCustomSeoTitle: 'defined(seo.seoTitle)',
}

export default seo

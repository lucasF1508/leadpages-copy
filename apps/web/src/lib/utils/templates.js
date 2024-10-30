const getKindTitle = (kind) =>
  kind === 'SiteTemplate' ? 'Website' : 'Landing Page'

const getKindSlug = (kind) =>
  kind === 'SiteTemplate' ? 'website-templates' : 'templates'

const getKindSlugSecondary = (kind) =>
  kind === 'SiteTemplate' ? 'website-template' : 'landing-page-template'

const getKindQueryParam = (kind) => (kind === 'SiteTemplate' ? 'site' : 'page')

const getTemplatePreviewUrl = (kind, slug, _id) =>
  `/${getKindSlug(kind)}/preview/${slug || _id}`

const getTemplateUrl = (kind, slug) =>
  `/${getKindSlug(kind)}/${getKindSlugSecondary(kind)}/${slug}`

export {
  getKindSlug,
  getKindTitle,
  getTemplatePreviewUrl,
  getKindQueryParam,
  getTemplateUrl,
}

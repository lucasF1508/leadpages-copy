import { TemplateKind } from "@/types/template"

const getKindTitle = (kind: TemplateKind) =>
  kind === 'SiteTemplate' ? 'Website' : 'Landing Page'

const getKindSlug = (kind: TemplateKind) =>
  kind === 'SiteTemplate' ? 'website-templates' : 'templates'

const getKindSlugSecondary = (kind: TemplateKind) =>
  kind === 'SiteTemplate' ? 'website-template' : 'landing-page-template-new'

const getKindQueryParam = (kind: TemplateKind) => (kind === 'SiteTemplate' ? 'site' : 'page')

const getTemplatePreviewUrl = (kind: TemplateKind, slug: string, _id: string) =>
  `/${getKindSlug(kind)}/preview/${slug || _id}`

const getTemplateUrl = (kind: TemplateKind, slug: string) =>
  `/${getKindSlug(kind)}/${getKindSlugSecondary(kind)}/${slug}`

export {
  getKindQueryParam,
  getKindSlug,
  getKindTitle,
  getTemplatePreviewUrl,
  getTemplateUrl,
}

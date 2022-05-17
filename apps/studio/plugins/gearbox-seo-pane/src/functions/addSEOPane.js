import SeoPane from 'sanity-plugin-seo-pane'
import resolveProductionUrl from 'part:@sanity/production-preview/resolve-production-url'

export const addSeoPane = ({
  keywords = `seo.seoKeywords`,
  synonyms = `seo.seoSynonyms`,
  url = (doc) => resolveProductionUrl(doc),
  title = 'Yoast SEO Audit',
  deskStructure: S,
}) =>
  S.view
    .component(SeoPane)
    .options({
      keywords,
      synonyms,
      url,
    })
    .title(title)

export default addSeoPane

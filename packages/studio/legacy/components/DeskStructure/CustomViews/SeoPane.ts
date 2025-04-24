import {SEOPane} from 'sanity-plugin-seo-pane'
import {getPreviewUrl} from '@/utils/getPreviewUrl'
import {StructureBuilder} from 'sanity/structure'

const SeoPane = (S: StructureBuilder) =>
  S.view
    .component(SEOPane)
    .options({
      keywords: `seo.seoKeywords`,
      synonyms: `seo.seoSynonyms`,
      url: getPreviewUrl,
    })
    .title('SEO')

export default SeoPane

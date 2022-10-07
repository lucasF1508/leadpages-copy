import GB from 'part:gearbox-desk-tool/structure-builder'

export const excludeDocs = [
  'media.tag',
  'vimeo.videoAsset',
  'footer',
  'seoSite',
  'companyInfo',
  'siteSettings',
  'mockData',
  'navigation',
  'generalSettings',
  'siteRedirects',
  'feed',
  'form',
  // 'product', // hide product documents
]

export const listItemsMainDocs = ({ exclude }) =>
  GB.documentTypeListItems({
    exclude: [...excludeDocs, ...exclude],
  })

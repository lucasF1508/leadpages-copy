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
  // 'product', // hide product documents
  // 'form', // hide form documents
]

export const listItemsMainDocs = ({ exclude }) =>
  GB.documentTypeListItems({
    exclude: [...excludeDocs, ...exclude],
  })

import S from '@sanity/desk-tool/structure-builder'
import GB from 'part:gearbox-desk-tool/structure-builder'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import addPreviewPane from 'part:gearbox-live-preview/add-preview-pane'
import addSEOPane from 'part:gearbox-seo-pane/add-seo-pane'
import { RiLayoutBottom2Line, RiNewspaperFill } from 'react-icons/ri'
import { BsNewspaper } from 'react-icons/bs'
import {
  AiOutlineHome,
  AiOutlineFileText,
  AiOutlineRetweet,
} from 'react-icons/ai'
import { listItemSiteSettings, listItemsMainDocs } from './listItems'

const isDevelopment = process.env.NODE_ENV === 'development'

const allTemplatesTypes = getTemplateSchemas().map(({ name }) => name)

export const deskStructure = () =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              GB.singletonListItem('pageHome', { title: 'Home' }).icon(
                AiOutlineHome
              ),
              GB.singletonListItem('pageArchive', {
                title: 'Archive',
              }).icon(BsNewspaper),
              S.documentTypeListItem('page').title('Dynamic Pages'),
              S.listItem()
                .title('Legacy Pages')
                .icon(AiOutlineRetweet)
                .child(
                  S.documentList()
                    .title('Legacy Pages')
                    .filter('_type == "page" && redirectToLegacy == true')
                ),
            ])
        )
        .icon(AiOutlineFileText),
      S.documentTypeListItem('post'),
      S.documentTypeListItem('customer').title('Customers'),
      S.documentTypeListItem('comparison').title('Comparisons'),
      S.divider(),
      S.documentTypeListItem('integration').title('Integrations'),
      S.documentTypeListItem('career').title('Careers'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('faq').title('FAQs'),
      S.documentTypeListItem('press'),
      S.documentTypeListItem('alertBar').title('Alert Bars'),
      S.documentTypeListItem('cta').title('CTAs'),
      S.divider(),
      S.documentTypeListItem('navigation').title('Navigation'),
      GB.singletonListItem('footer').icon(RiLayoutBottom2Line),
      GB.categoriesListItem('category'),
      GB.singletonListItem('postSettings').icon(RiNewspaperFill),
      listItemSiteSettings,
      ...(isDevelopment
        ? [S.documentTypeListItem('feed').title('Importer')]
        : []),
    ])

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (allTemplatesTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      addPreviewPane({
        deskStructure: S,
      }),
      addSEOPane({
        deskStructure: S,
      }),
    ])
  }

  return S.document().views([S.view.form()])
}

export default deskStructure

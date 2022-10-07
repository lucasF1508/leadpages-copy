import S from '@sanity/desk-tool/structure-builder'
import GB from 'part:gearbox-desk-tool/structure-builder'
import {
  getPageTemplateTypes,
  getTemplateSchemas,
} from 'part:gearbox-utils/utils'
import addPreviewPane from 'part:gearbox-live-preview/add-preview-pane'
import addSEOPane from 'part:gearbox-seo-pane/add-seo-pane'
import { RiLayoutBottom2Line } from 'react-icons/ri'
import { BsNewspaper } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineFileText } from 'react-icons/ai'
import { listItemSiteSettings, listItemsMainDocs } from './listItems'

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
      S.divider(),
      S.documentTypeListItem('navigation').title('Navigation'),
      GB.singletonListItem('footer').icon(RiLayoutBottom2Line),
      GB.categoriesListItem('category'),
      listItemSiteSettings,
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

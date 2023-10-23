import S from '@sanity/desk-tool/structure-builder'
import GB from 'part:gearbox-desk-tool/structure-builder'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import addSEOPane from 'part:gearbox-seo-pane/add-seo-pane'
import {
  BsFilePerson,
  BsQuestionCircle,
  BsPlug,
  BsCollection,
} from 'react-icons/bs'
import { MdCallSplit } from 'react-icons/md'
import { AiOutlineFileText, AiOutlineRetweet } from 'react-icons/ai'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { RiLayoutBottom2Fill } from 'react-icons/ri'
import { listItemSiteSettings } from './listItems'

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
              S.documentTypeListItem('pageHome').title('Home'),
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
      S.listItem()
        .title('A/B Tests')
        .child(
          S.list()
            .title('A/B Tests')
            .items([
              S.listItem()
                .title('Draft Tests')
                .child(
                  S.documentList()
                    .title('Draft Tests')
                    .filter(
                      '_type == "experiments" && completed == false && (_id in path("drafts.**"))'
                    )
                ),
              S.listItem()
                .title('Active Tests')
                .child(
                  S.documentList()
                    .title('Active Tests')
                    .filter(
                      '_type == "experiments" && completed == false && !(_id in path("drafts.**"))'
                    )
                ),
              S.listItem()
                .title('Completed Tests')
                .child(
                  S.documentList()
                    .title('Completed Tests')
                    .filter(
                      '_type == "experiments" && completed == true && (_id in path("drafts.**"))'
                    )
                ),
            ])
        )
        .icon(MdCallSplit),
      S.documentTypeListItem('publisher').title('Authors'),
      orderableDocumentListDeskItem({
        type: 'customer',
        title: 'Customers',
        icon: BsFilePerson,
      }),
      orderableDocumentListDeskItem({
        type: 'comparison',
        title: 'Comparisons',
        icon: BsCollection,
      }),
      S.documentTypeListItem('integration').title('Integrations').icon(BsPlug),
      S.divider(),
      S.documentTypeListItem('pageArchive').title('Archives'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      orderableDocumentListDeskItem({
        type: 'faq',
        title: 'FAQs',
        icon: BsQuestionCircle,
      }),
      S.documentTypeListItem('feature').title('Features'),
      S.documentTypeListItem('cta').title('CTAs'),
      S.divider(),
      GB.singletonListItem('footer').icon(RiLayoutBottom2Fill),
      GB.categoriesListItem('category'),
      listItemSiteSettings,
      ...(isDevelopment
        ? [S.documentTypeListItem('feed').title('Importer')]
        : []),
    ])

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (allTemplatesTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      addSEOPane({
        deskStructure: S,
      }),
    ])
  }

  return S.document().views([S.view.form()])
}

export default deskStructure

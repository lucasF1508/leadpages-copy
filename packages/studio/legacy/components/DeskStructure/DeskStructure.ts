import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import config from 'config'
import {BsArchive, BsFilePerson, BsQuestionCircle, BsCollection} from 'react-icons/bs'
import {AiOutlineFileText, AiOutlineRetweet} from 'react-icons/ai'
import {MdBusiness, MdSettings} from 'react-icons/md'
import {BsGraphUp, BsArrowLeftRight, BsNewspaper, BsCodeSlash, BsSignpost2} from 'react-icons/bs'
import SingletonListItem from './SingletonListItem'
import CategoriesListItem from './CategoriesListItem'
import IframePreview from './CustomViews/IframePreview'
import SeoPane from './CustomViews/SeoPane'
import {StructureBuilder} from 'sanity/structure'
import {ConfigContext} from 'sanity'
import {TbAppWindow} from 'react-icons/tb'

const pageTemplates = config?.studio?.docTypes

export const structure = async (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title('Menu')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      SingletonListItem({type: 'postSettings', icon: BsNewspaper, S}),
      S.documentTypeListItem('publisher').title('Authors'),
      orderableDocumentListDeskItem({
        type: 'customer',
        title: 'Customers',
        icon: BsFilePerson,
        context,
        S,
      }),
      orderableDocumentListDeskItem({
        type: 'comparison',
        title: 'Comparisons',
        icon: BsCollection,
        context,
        S,
      }),

      S.divider(),
      // S.documentTypeListItem('pageArchive').title('Archives'),
      S.listItem()
        .title('Archives')
        .child(
          S.documentList()
            .title('Archives')
            .filter('_type == "pageArchive" && slug.current != "integrations"')
        )
        .icon(BsArchive),
      orderableDocumentListDeskItem({
        type: 'faq',
        title: 'FAQs',
        icon: BsQuestionCircle,
        context,
        S,
      }),
      S.documentTypeListItem('feature').title('Features'),
      S.listItem()
        .title('CTAs')
        .child(
          S.list()
            .title('CTAs')
            .items([
              S.documentTypeListItem('cta').title('Primary CTAs'),
              S.documentTypeListItem('inlineCTAGlobal').title('Blog CTAs'),
            ])
        )
        .icon(AiOutlineFileText),

      S.divider(),
      CategoriesListItem({type: 'category', title: 'Categories', S, context}),
      SingletonListItem({
        type: 'leadboxes',
        title: "Pop-up's & Alert Bars",
        icon: TbAppWindow,
        S,
      }),
    ])

export const defaultDocumentNode = (S: StructureBuilder, {schemaType}: {schemaType: string}) => {
  if (pageTemplates.includes(schemaType)) {
    return S.document().views([S.view.form(), IframePreview(S, {schemaType}), SeoPane(S)])
  }

  return S.document().views([S.view.form()])
}

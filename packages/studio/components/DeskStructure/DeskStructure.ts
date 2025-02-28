import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import config from 'config'
import {RiLayoutBottom2Line} from 'react-icons/ri'
import {BsFilePerson, BsQuestionCircle, BsPlug, BsCollection} from 'react-icons/bs'
import {MdCallSplit, MdOutlineSmartButton} from 'react-icons/md'
import {AiOutlineFileText, AiOutlineRetweet, AiOutlineSetting} from 'react-icons/ai'
import {MdBusiness, MdSettings} from 'react-icons/md'
import {BsGraphUp, BsArrowLeftRight, BsNewspaper, BsCodeSlash, BsSignpost2} from 'react-icons/bs'
import SingletonListItem from './SingletonListItem'
import CategoriesListItem from './CategoriesListItem'
import IframePreview from './CustomViews/IframePreview'
import SeoPane from './CustomViews/SeoPane'
import templatesListItems from '../../utils/templatesListItems'
import {StructureBuilder} from 'sanity/structure'
import {ConfigContext} from 'sanity'
import {TbAppWindow} from 'react-icons/tb'

const pageTemplates = config?.studio?.docTypes

export const structure = async (S: StructureBuilder, context: ConfigContext) => {
  templatesListItems(context)

  return S.list()
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

      S.documentTypeListItem('post').title('Posts'),
      S.listItem()
        .title('Templates')
        .child(
          S.list()
            .title('Templates')
            .items([
              S.listItem()
                .title('Leadpage Templates')
                .icon(AiOutlineFileText)
                .child(
                  S.documentList()
                    .title('Leadpage Templates')
                    .filter('_type == "template" && kind == "LeadpageTemplate"')
                ),
              S.listItem()
                .title('Website Templates')
                .icon(AiOutlineFileText)
                .child(
                  S.documentList()
                    .title('Website Templates')
                    .filter('_type == "template" && kind == "SiteTemplate"')
                ),
              S.documentTypeListItem('templateCategory').title('Template Categories'),
              S.divider(),
              SingletonListItem({
                type: 'templateSettings',
                documentId: 'templateSettings',
                S,
              }).icon(AiOutlineSetting),
              SingletonListItem({
                type: 'templateSettings',
                title: 'Website Template Settings',
                documentId: 'websiteTemplateSettings',
                S,
              }).icon(AiOutlineSetting),
            ])
        )
        .icon(AiOutlineFileText),
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
                    .filter('_type == "experiments" && completed')
                ),
            ])
        )
        .icon(MdCallSplit),
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
      S.documentTypeListItem('integration').title('Integrations').icon(BsPlug),
      S.divider(),
      S.documentTypeListItem('pageArchive').title('Archives'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
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
      SingletonListItem({type: 'navigation', title: 'Navigation', icon: MdOutlineSmartButton, S}),
      SingletonListItem({type: 'footer', title: 'Footer', icon: RiLayoutBottom2Line, S}),
      CategoriesListItem({type: 'category', title: 'Categories', S, context}),
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              SingletonListItem({type: 'companyInfo', icon: MdBusiness, S}),
              SingletonListItem({type: 'seoSite', title: 'SEO', icon: BsGraphUp, S}),
              SingletonListItem({
                type: 'leadboxes',
                title: "Pop-up's & Alert Bars",
                icon: TbAppWindow,
                S,
              }),
              SingletonListItem({type: 'postSettings', icon: BsNewspaper, S}),
              SingletonListItem({
                type: 'globalHeaderFooter',
                title: 'Global Header/Footer',
                icon: BsCodeSlash,
                S,
              }),
              SingletonListItem({
                type: 'siteRedirects',
                title: 'Static Redirects',
                icon: BsArrowLeftRight,
                S,
              }),
              SingletonListItem({
                type: 'promoCodes',
                title: 'Promo Code Redirects',
                icon: BsSignpost2,
                S,
              }),
            ])
        )
        .icon(MdSettings),
    ])
}

export const defaultDocumentNode = (S: StructureBuilder, {schemaType}: {schemaType: string}) => {
  if (pageTemplates.includes(schemaType)) {
    return S.document().views([S.view.form(), IframePreview(S, {schemaType}), SeoPane(S)])
  }

  return S.document().views([S.view.form()])
}

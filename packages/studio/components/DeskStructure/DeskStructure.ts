import {MdBusiness, MdOutlineSmartButton, MdSettings} from 'react-icons/md'
import {BsGraphUp} from 'react-icons/bs'
import config from 'config'
import {AiOutlineHome} from 'react-icons/ai'
import IframePreview from './CustomViews/IframePreview'
import SeoPane from './CustomViews/SeoPane'
import {StructureBuilder} from 'sanity/structure'
import {BsPlug} from 'react-icons/bs'
import {ConfigContext} from 'sanity'
import {BiCategory} from 'react-icons/bi'
import SingletonListItem from './SingletonListItem'
import {RiLayoutBottom2Line} from 'react-icons/ri'
import {GrStatusInfo} from 'react-icons/gr'
import {PiSidebar} from 'react-icons/pi'
import CategoriesListItem from './CategoriesListItem'
import syncTemplateData from '@/utils/syncTemplateData'
import {AiOutlineFileText, AiOutlineSetting} from 'react-icons/ai'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const pageTemplates = config?.studio?.docTypes

export const structure = (S: StructureBuilder, context: ConfigContext) => {
  syncTemplateData(context)

  return S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Home')
        .icon(AiOutlineHome)
        .child(
          S.document()
            .schemaType('pageHome')
            .documentId('pageHome')
            .views([S.view.form(), IframePreview(S), SeoPane(S)])
        ),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),
      S.documentTypeListItem('testimonial'),
      S.documentTypeListItem('faq'),
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
                    .title('Leadpage Templates Gallery')
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
                type: 'pageTemplates',
                title: 'Leadpage Template Gallery',
                documentId: 'pageTemplates',
                S,
              }).icon(PiSidebar),
              SingletonListItem({
                type: 'pageTemplates',
                title: 'Website Template Gallery',
                documentId: 'pageWebsiteTemplates',
                S,
              }).icon(PiSidebar),
              S.divider(),
              SingletonListItem({
                type: 'templateSettings',
                title: 'Template Settings',
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
        .title('Integrations')
        .child(
          S.list()
            .title('Integrations')
            .items([
              S.documentTypeListItem('integration').title('Integrations'),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'categoryIntegration',
                title: 'Integration Categories',
                icon: BiCategory,
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: 'categoryIntegrationStatus',
                title: 'Integration Status',
                icon: GrStatusInfo,
                S,
                context,
              }),
              S.divider(),
              SingletonListItem({
                type: 'pageIntegrations',
                title: 'Integrations Page',
                documentId: 'pageIntegrations',
                S,
              }).icon(PiSidebar),
            ])
        )
        .icon(BsPlug),
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
              SingletonListItem({type: 'seoSite', title: 'SEO', icon: BsGraphUp, S}),
              S.documentTypeListItem('siteRedirect').title('Site Redirects'),
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

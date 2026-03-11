// studio/structure.ts (or studio/plugins/desk/structure.ts)
// Complete, cleaned up, with Posts and Authors added

import {MdBusiness, MdOutlineSmartButton, MdSettings} from 'react-icons/md'
import {BsGraphUp, BsPlug, BsNewspaper, BsPencil, BsArchive, BsFlag} from 'react-icons/bs'
import config from 'config'
import {AiOutlineHome, AiOutlineFileText} from 'react-icons/ai'
import IframePreview from './CustomViews/IframePreview'
import SeoPane from './CustomViews/SeoPane'
import {StructureBuilder} from 'sanity/structure'
import {ConfigContext} from 'sanity'
import {BiCategory} from 'react-icons/bi'
import SingletonListItem from './SingletonListItem'
import {RiLayoutBottom2Line} from 'react-icons/ri'
import {GrStatusInfo} from 'react-icons/gr'
import {PiSidebar} from 'react-icons/pi'
import CategoriesListItem from './CategoriesListItem'
import syncTemplateData from '@/utils/syncTemplateData'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const pageTemplates = config?.studio?.docTypes

export const structure = (S: StructureBuilder, context: ConfigContext) => {
  // Make sure template config is synced before building the menu
  syncTemplateData(context)

  return S.list()
    .title('Menu')
    .items([
      // ===========================
      // HOME (singleton)
      // ===========================
      S.listItem()
        .title('Home')
        .icon(AiOutlineHome)
        .child(
          S.document()
            .schemaType('pageHome')
            .documentId('pageHome')
            .views([S.view.form(), IframePreview(S), SeoPane(S)])
        ),

      // List of Home copies (pageHome with a different URL, e.g. /home-copy)
      S.listItem()
        .title('Home (copies with different URL)')
        .icon(AiOutlineHome)
        .child(
          S.documentList()
            .title('Home copies')
            .filter('_type == "pageHome" && _id != "pageHome"')
            .schemaType('pageHome')
        ),

      S.divider(),

      // ===========================
      // PAGES
      // ===========================
      S.documentTypeListItem('page').title('Pages'),

      S.divider(),

      // ===========================
      // BLOG BLOCK (NEW)
      // ===========================
      // Posts list
      S.listItem()
        .title('Posts')
        .icon(BsNewspaper)
        .child(S.documentTypeList('post').title('Posts')),

      // Authors (backed by `publisher` documents)
      S.listItem()
        .title('Authors')
        .icon(BsPencil)
        .child(S.documentTypeList('publisher').title('Authors')),

      // Optional: Post Categories
      S.listItem()
        .title('Post Categories')
        .icon(BiCategory)
        .child(S.documentTypeList('categoryPost').title('Post Categories')),

      S.divider(),

      // ===========================
      // ARCHIVES
      // ===========================
      S.listItem()
        .title('Archives')
        .icon(BsArchive)
        .child(
          S.documentList()
            .title('Archives')
            .filter('_type == "pageArchive" && slug.current != "integrations"')
        ),

      S.divider(),

      // ===========================
      // OTHER CONTENT TYPES
      // ===========================
      S.documentTypeListItem('testimonial'),
      S.documentTypeListItem('faq'),

      // ===========================
      // TEMPLATES
      // ===========================
      S.listItem()
        .title('Templates')
        .child(
          S.list()
            .title('Templates')
            .items([
              S.listItem()
                .title('Page Templates')
                .icon(AiOutlineFileText)
                .child(
                  S.documentList()
                    .title('Page Templates')
                    .filter('_type == "template" && kind == "LeadpageTemplate"')
                ),
              S.listItem()
                .title('Section Templates')
                .icon(AiOutlineFileText)
                .child(
                  S.documentList()
                    .title('Section Templates')
                    .filter('_type == "template" && kind == "SiteTemplate"')
                ),
              S.documentTypeListItem('templateCategory').title('Template Categories'),
              S.divider(),
              // Template Gallery Settings singleton
              SingletonListItem({
                type: 'pageTemplates',
                title: 'Template Gallery Settings',
                documentId: 'pageTemplates',
                S,
              }).icon(PiSidebar),
            ])
        )
        .icon(AiOutlineFileText),

      // ===========================
      // INTEGRATIONS
      // ===========================
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

      // ===========================
      // NAV & FOOTER
      // ===========================
      SingletonListItem({type: 'navigation', title: 'Navigation', icon: MdOutlineSmartButton, S}),
      SingletonListItem({type: 'websiteBanner', title: 'Website Banner', icon: BsFlag, S}),
      SingletonListItem({type: 'footer', title: 'Footer', icon: RiLayoutBottom2Line, S}),

      // ===========================
      // LEGACY CATEGORIES (site-wide)
      // ===========================
      CategoriesListItem({type: 'category', title: 'Categories', S, context}),

      // ===========================
      // SITE SETTINGS
      // ===========================
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

// Default document views
export const defaultDocumentNode = (S: StructureBuilder, {schemaType}: {schemaType: string}) => {
  if (pageTemplates.includes(schemaType)) {
    return S.document().views([S.view.form(), IframePreview(S, {schemaType}), SeoPane(S)])
  }
  return S.document().views([S.view.form()])
}

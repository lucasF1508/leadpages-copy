import {MdOutlineSmartButton, MdSettings} from 'react-icons/md'
import {BsGraphUp} from 'react-icons/bs'
import config from 'config'
import {AiOutlineHome} from 'react-icons/ai'
import IframePreview from './CustomViews/IframePreview'
import SeoPane from './CustomViews/SeoPane'
import {StructureBuilder} from 'sanity/structure'
import {ConfigContext} from 'sanity'
import SingletonListItem from './SingletonListItem'
import { RiLayoutBottom2Line } from 'react-icons/ri'

const pageTemplates = config?.studio?.docTypes

export const structure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
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
      S.divider(),
      SingletonListItem({type: 'navigation', title: 'Navigation', icon: MdOutlineSmartButton, S}),
      SingletonListItem({type: 'footer', title: 'Footer', icon: RiLayoutBottom2Line, S}),
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings')
            .items([
              SingletonListItem({type: 'seoSite', title: 'SEO', icon: BsGraphUp, S}),
            ])
      )
      .icon(MdSettings),
    ])

export const defaultDocumentNode = (S: StructureBuilder, {schemaType}: {schemaType: string}) => {
  if (pageTemplates.includes(schemaType)) {
    return S.document().views([S.view.form(), IframePreview(S, {schemaType}), SeoPane(S)])
  }

  return S.document().views([S.view.form()])
}

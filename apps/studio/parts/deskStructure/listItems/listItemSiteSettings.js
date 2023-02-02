import S from '@sanity/desk-tool/structure-builder'
import GB from 'part:gearbox-desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import {
  BsGraphUp,
  BsArrowLeftRight,
  BsNewspaper,
  BsCodeSlash,
} from 'react-icons/bs'

export const listItemSiteSettings = S.listItem()
  .title('Site Settings')
  .child(
    S.list()
      .title('Site Settings')
      .items([
        GB.singletonListItem('companyInfo').icon(MdBusiness),
        GB.singletonListItem('seoSite', { title: 'SEO' }).icon(BsGraphUp),
        GB.singletonListItem('siteRedirects', { title: 'Redirects' }).icon(
          BsArrowLeftRight
        ),
        GB.singletonListItem('postSettings').icon(BsNewspaper),
        GB.singletonListItem('globalHeaderFooter', {
          title: 'Global Header/Footer',
        }).icon(BsCodeSlash),
      ])
  )
  .icon(MdSettings)

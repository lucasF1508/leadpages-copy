import S from '@sanity/desk-tool/structure-builder'
import GB from 'part:gearbox-desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { BsGraphUp, BsArrowLeftRight, BsLightning } from 'react-icons/bs'
import { RiNewspaperFill } from 'react-icons/ri'

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
        GB.singletonListItem('postSettings').icon(RiNewspaperFill),
        // GB.singletonListItem('mockData').icon(BsLightning),
      ])
  )
  .icon(MdSettings)

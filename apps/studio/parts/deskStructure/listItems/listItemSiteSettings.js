import S from '@sanity/desk-tool/structure-builder'
import GB from 'part:gearbox-desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import {
  BsGraphUp,
  BsArrowLeftRight,
  BsNewspaper,
  BsCodeSlash,
  BsSignpost2,
} from 'react-icons/bs'
import { TbAppWindow } from 'react-icons/tb'

export const listItemSiteSettings = S.listItem()
  .title('Site Settings')
  .child(
    S.list()
      .title('Site Settings')
      .items([
        GB.singletonListItem('companyInfo').icon(MdBusiness),
        GB.singletonListItem('seoSite', { title: 'SEO' }).icon(BsGraphUp),
        GB.singletonListItem('leadboxes', {
          title: 'Leadboxes & Alert Bars',
        }).icon(TbAppWindow),
        GB.singletonListItem('postSettings').icon(BsNewspaper),
        GB.singletonListItem('globalHeaderFooter', {
          title: 'Global Header/Footer',
        }).icon(BsCodeSlash),
        GB.singletonListItem('siteRedirects', {
          title: 'Static Redirects',
        }).icon(BsArrowLeftRight),
        GB.singletonListItem('promoCodes', {
          title: 'Promo Code Redirects',
        }).icon(BsSignpost2),
      ])
  )
  .icon(MdSettings)

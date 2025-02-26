import {BsGraphUp as icon} from 'react-icons/bs'
import {F, P} from '@/schema/tool'

export const schemaSeoSite = {
  icon,
  name: 'seoSite',
  title: 'SEO',
  type: 'document',
  //__experimental_actions: ['update', 'publish' /*'create', 'delete' */],
  fields: [
    F.string({name: 'siteName'}),
    F.string({
      name: 'seoTitlePattern',
      description:
        'This pattern will be used if no Seo Title is provided on each page. %PAGE_TITLE% and %SITE_NAME% will get replaced dynamically.',
    }),
    F.image({
      name: 'seoImageDefault',
      title: 'Default SEO Share Image',
    }),
  ],
}

import {BsGraphUp as icon} from 'react-icons/bs'
import {F, P} from '@/schema/tool'

export const seoSite = {
  icon,
  name: 'seoSite',
  title: 'SEO',
  type: 'document',
  //__experimental_actions: ['update', 'publish' /*'create', 'delete' */],
  fields: [
    F.string({name: 'siteName'}),
    F.string({
      name: 'seoTitleDefault',
    }),
    F.text({
      name: 'seoDescriptionDefault',
      rows: 3,
    }),
    F.string({
      name: 'seoTitlePattern',
      initialValue: '%s | Leadpages',
      description:
        '%s will get replaced dynamically with the page title using the default title on pages where no seoTitle is provided.',
    }),
    F.image({
      name: 'seoImageDefault',
      title: 'Default SEO Share Image',
    }),
  ],
}

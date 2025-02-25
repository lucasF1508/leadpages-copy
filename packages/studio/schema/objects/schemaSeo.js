import {BsGraphUp as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaSeo = F.object({
  icon,
  name: 'seo',
  fields: [
    F.string({name: 'seoTitle', title: 'SEO Page Title'}),
    F.text({
      name: 'seoDescription',
      title: 'SEO Page Description',
    }),
    F.image({name: 'seoImage', title: 'SEO Share Image'}),
    F.string({name: 'seoKeywords', title: 'SEO Keywords (For Audit)'}),
    F.string({name: 'seoSynonyms', title: 'SEO Synonyms (For Audit)'}),
  ],
})

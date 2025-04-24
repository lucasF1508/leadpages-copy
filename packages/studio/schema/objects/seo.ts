import {BsGraphUp as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'
import {type PortableTextBlock, useFormValue} from 'sanity'
import {toPlainText} from '@portabletext/react'

export const schemaSeo = F.object({
  icon,
  name: 'seo',
  fields: [
    F.string({
      name: 'seoTitle',
      title: 'SEO Page Title',
      components: {
        input: (props) => {
          const placeholder = (useFormValue(['title']) as string) || ''
          return props.renderDefault({
            ...props,
            elementProps: {...props.elementProps, placeholder},
          })
        },
      },
    }),
    F.text({
      name: 'seoDescription',
      title: 'SEO Page Description',
      components: {
        input: (props) => {
          const contentBlocks = useFormValue(['content']) as PortableTextBlock[]
          let excerpt = (useFormValue(['excerpt']) as string) || ''

          if (!excerpt && contentBlocks) {
            const content = toPlainText(contentBlocks).replace(/\s+/g, ' ').trim()
            excerpt = content.length > 153 ? content.slice(0, 153) + '...' : content
          }

          return props.renderDefault({
            ...props,
            elementProps: {...props.elementProps, placeholder: excerpt || ''},
          })
        },
      },
    }),
    F.image({name: 'seoImage', title: 'SEO Share Image'}),
    F.string({name: 'seoKeywords', title: 'SEO Keywords (For Audit)'}),
    F.string({name: 'seoSynonyms', title: 'SEO Synonyms (For Audit)'}),
  ],
})

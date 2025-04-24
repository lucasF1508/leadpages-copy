import type {PortableTextTextBlock} from 'sanity'
import capitalize from 'lodash/capitalize'
import { LiaMoneyCheckAltSolid as icon } from "react-icons/lia";
import {F, G} from '@/schema/tool'

export type UpsellPrepareProps = {
  content?: PortableTextTextBlock[]
}

export const upsell = F.object({
  icon,
  title: 'Product Upsell Card',
  name: 'upsell',
  groups: [G.define('content', {default: true}), G.define('options')],
  fields: [
    ...G.group('content', [
      F.string({name: 'pill'}),
      F.field('blockContentSimple', {name: 'content'}),  
    ]),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}: UpsellPrepareProps) => {
      if (!content) {
        return {
          title: 'Product Upsell Card',
          media: icon,
        }
      }

      const [first, ...blocks] = content.filter((blocks) => blocks._type === 'block')
      const title = first?.children?.map((child) => child.text).join('')

      return {
        title: capitalize(title) || 'Product Upsell Card',
        subtitle: blocks?.map(({children}) => children?.map(({text}) => text)).join(''),
        media: icon,
      }
    },
  },
})

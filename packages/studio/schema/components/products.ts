import {FaTshirt as icon} from 'react-icons/fa'
import {F} from '@/schema/tool'

export const products = F.conditional('Select the link type', {
  icon,
  name: 'products',
  conditions: {
    all: [],
    select: [F.multiReference(['product'], {name: 'products'})],
  },
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Products',
        media: icon,
      }
    },
  },
})

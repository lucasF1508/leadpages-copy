import { FaTshirt as icon } from 'react-icons/fa'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaProducts = F.conditional('Select the link type', {
  icon,
  name: 'products',
  conditions: {
    all: [],
    select: [F.multiReference(['product'], { name: 'products' })],
  },
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Products',
      }
    },
  },
})

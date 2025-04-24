import {FaTshirt as icon} from 'react-icons/fa'
import {F, FS, P} from '@/schema/tool'

export const schemaPageProducts = {
  icon,
  name: 'pageProducts',
  title: 'Products Page',
  type: 'document',
  fields: [
    ...F.fieldDefaultsCustom({
      slug: {
        readOnly: true,
        initialValue: {
          current: 'products',
        },
      },
    }),
    F.field('hero'),
    F.message('This page is automatically populated with all products'),
    F.docOrder('product', {
      options: {
        field: 'productsOrder',
      },
    }),
    F.seo(),
  ],
}

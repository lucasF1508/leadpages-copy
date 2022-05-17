import { FaTshirt as icon } from 'react-icons/fa'
import { F, FS, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaProduct = {
  icon,
  name: 'product',
  title: 'Products',
  type: 'document',
  initialValue: {
    productsOrder: -1,
  },
  orderings: [
    {
      title: 'Products Order',
      name: 'productsOrderAsc',
      by: [{ field: 'productsOrder', direction: 'asc' }],
    },
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: true })],
  fields: [
    ...F.fieldDefaults(),
    F.number({
      name: 'productsOrder',
      hidden: true,
    }),
    F.image({ name: 'image', title: 'Feature Image' }),
    F.array({
      name: 'gallery',
      options: {
        layout: 'grid',
      },
      of: F.image(),
    }),
    F.number({
      name: 'price',
      required: true,
    }),
    F.excerpt({ title: 'Short Description' }),
    F.blockContent({
      name: 'description',
      title: 'Full Description',
    }),
    F.accordionItems({ name: 'details' }),
    F.seo(),
  ],
  preview: P.titleImage(),
}

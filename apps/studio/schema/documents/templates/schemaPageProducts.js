import { FaTshirt as icon } from 'react-icons/fa'
import { F, FS, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPageProducts = {
  icon,
  name: 'pageProducts',
  title: 'Products Page',
  type: 'document',
  fieldsets: [
    FS.fieldset('meta', { collapsed: true }),
    FS.fieldset('hero', { collapsed: false }),
    FS.fieldset('content', { collapsed: false }),
    FS.seo(),
  ],
  fields: [
    ...F.fieldDefaults({
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

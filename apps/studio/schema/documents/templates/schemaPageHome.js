import { AiOutlineHome as icon } from 'react-icons/ai'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'
import * as homeComponentsSchema from '../../components/home'

const componentsSchema = getTemplateSchemas({
  schema: homeComponentsSchema,
})

export const schemaPageHome = {
  icon,
  name: 'pageHome',
  title: 'Home Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [
    FS.fieldset('meta', { collapsed: false }),
    FS.fieldset('content', { collapsed: false }),
    FS.seo(),
  ],
  fields: [
    ...F.fieldDefaults({
      slug: {
        readOnly: true,
        initialValue: {
          current: 'home',
        },
      },
    }),
    ...G.group('content', [
      F.field('hero'),
      F.components(componentsSchema),
      F.reference('cta', { name: 'cta', title: 'Call to Action' }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}

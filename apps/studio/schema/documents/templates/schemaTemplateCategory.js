import { MdOutlineCategory as icon } from 'react-icons/md'
import { F, FS, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTemplateCategory = {
  name: 'templateCategory',
  title: 'Category Template',
  type: 'document',
  icon,
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo()],
  fields: [
    ...G.group('content', [
      ...F.fieldDefaults({
        slug: { validation: (Rule) => Rule.required() },
        title: {
          title: 'Category Name',
          validation: (Rule) => Rule.required(),
        },
        parent: { hidden: true },
        path: { hidden: true },
        htmlFooter: { hidden: true },
      }),
      F.string({
        name: 'templateType',
        options: {
          layout: 'radio',
          direction: 'horizontal',
          list: [
            { title: 'Landing Page Template', value: 'landingPage' },
            { title: 'Website Template', value: 'website' },
          ],
        },
        initialValue: 'landingPage',
        validation: (Rule) => Rule.required(),
      }),
      F.string({
        name: 'heroTitle',
      }),
      F.field('blockContentSimple', {
        name: 'heroContent',
      }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'templateType',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle === 'landingPage' ? 'Landing Page' : 'Website',
      }
    },
  },
}

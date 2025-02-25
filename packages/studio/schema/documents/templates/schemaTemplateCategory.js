import {MdOutlineCategory as icon} from 'react-icons/md'
import {F, FS, G} from '@/schema/tool'

export const schemaTemplateCategory = {
  name: 'templateCategory',
  title: 'Category Template',
  type: 'document',
  icon,
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...G.group('content', [
      ...F.fieldDefaultsCustom({
        slug: {validation: (Rule) => Rule.required()},
        title: {
          title: 'Category Name',
          validation: (Rule) => Rule.required(),
        },
        parent: {hidden: true},
        path: {hidden: true},
        htmlFooter: {hidden: true},
      }),
      F.string({
        name: 'templateType',
        options: {
          layout: 'radio',
          direction: 'horizontal',
          list: [
            {title: 'Landing Page Template', value: 'landingPage'},
            {title: 'Website Template', value: 'website'},
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
    ...G.group('meta', [
      F.datetime({
        name: 'modified',
        readOnly: true,
        hidden: ({parent}) => !parent?.modified,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
    ]),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'templateType',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle === 'landingPage' ? 'Landing Page' : 'Website',
      }
    },
  },
}

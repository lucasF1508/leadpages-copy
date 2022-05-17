import { isUniqueAcrossAllDocuments } from 'part:gearbox-utils/utils'
import {
  FiNavigation as icon,
  FiChevronDown as menuItemIcon,
} from 'react-icons/fi'
import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import { F, FS } from 'part:gearbox-schema-tool/schema-builder'

const pageTemplates = getTemplateTypes()

export const schemaNavigation = {
  icon,
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  parseType: 'navigation',
  fieldsets: [FS.fieldset('meta', { collapsed: true })],
  fields: [
    F.string({ name: 'title', title: 'Menu Name' }),
    ...FS.fieldsetGroup('meta', [
      F.slug({
        isUnique: isUniqueAcrossAllDocuments,
        readOnly: true,
      }),
    ]),
    F.array({
      name: 'menu',
      title: 'Menu Items',
      of: [
        F.object({
          name: 'menuItem',
          title: 'Menu Item',
          fields: [
            F.link(pageTemplates, {
              name: 'link',
              title: 'Menu Link',
              conditions: {
                dropdown: [],
              },
            }),
            F.array({
              name: 'columns',
              title: 'Menu Dropdown',
              description: 'Choose up to three columns.',
              of: [
                F.field('menuColumnPrimary', {
                  title: 'Primary Column',
                }),
                F.field('menuColumnSecondary', {
                  title: 'Secondary Column',
                }),
                F.field('menuColumnFeatured', {
                  title: 'Featured Column',
                }),
              ],
              hidden: ({ document, parent }) =>
                document?.slug?.current !== 'primary-navigation' ||
                parent?.link?.condition !== 'dropdown',
              validation: (Rule) =>
                Rule.max(3).error(
                  'You may only have a maximum of three sub-menu columns.'
                ),
            }),
          ],
          preview: {
            select: {
              label: 'link.label',
              condition: 'link.condition',
            },
            prepare: ({ label = 'Menu Item', condition }) => ({
              title: label,
              media: condition === 'dropdown' ? menuItemIcon : icon,
            }),
          },
        }),
      ],
    }),
    F.link(pageTemplates, {
      name: 'cta',
      title: 'Call to Action',
      hidden: ({ document }) =>
        document?.slug?.current !== 'primary-navigation',
      conditions: {
        none: [],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({ title, media: icon }),
  },
}

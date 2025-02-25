import {isUniqueAcrossAllDocuments} from '@/utils/schema'
import {FiNavigation as icon, FiChevronDown as menuItemIcon} from 'react-icons/fi'
import {F, G} from '@/schema/tool'

export const schemaNavigation = {
  icon,
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  parseType: 'navigation',
  groups: G.fieldGroupDefaults(),
  fields: [
    ...G.group('meta', [
      F.slug({
        isUnique: isUniqueAcrossAllDocuments,
        readOnly: true,
      }),
    ]),
    ...G.group('content', [
      F.string({
        name: 'title',
        title: 'Menu Name',
        hidden: ({document}) => document?.slug?.current === 'primary-navigation',
      }),
      F.array({
        name: 'menu',
        title: 'Main Menu Items',
        of: [
          F.object({
            name: 'menuItem',
            title: 'Menu Item',
            groups: [...G.fieldGroupDefaults(), G.define('sidebar')],
            fields: [
              ...G.group('content', [
                F.link({
                  name: 'link',
                  title: 'Menu Link',
                  args: {
                    linkStyle: false,
                    hasIcon: false,
                  },
                  conditions: {
                    dropdown: [],
                    download: false,
                    leadpagesTrigger: false,
                  },
                }),
                F.radio(['primary', 'templates'], {
                  name: 'dropdownType',
                  title: 'Mega Nav Menu Type',
                  hidden: ({parent}) => parent?.link?.condition !== 'dropdown',
                  initialValue: 'primary',
                }),
                F.array({
                  name: 'rows',
                  title: 'Mega-Nav Sections',
                  description: 'Create up to three sections.',
                  of: [
                    F.field('menuRowPrimary', {
                      title: 'Primary Section',
                      name: 'primaryRow',
                    }),
                    F.field('menuRowCards', {
                      title: 'Card Section',
                      name: 'cardRow',
                    }),
                  ],
                  hidden: ({parent}) =>
                    parent?.link?.condition !== 'dropdown' || parent?.dropdownType !== 'primary',
                  validation: (Rule) =>
                    Rule.max(3).error('You may only have a maximum of three sub-menu rows.'),
                }),
                F.array({
                  name: 'templateRows',
                  title: 'Template-Nav Sections',
                  description: 'Create up to three sections.',
                  of: [
                    F.field('menuRowTemplates', {
                      title: 'Templates Section',
                      name: 'templateRow',
                    }),
                  ],
                  hidden: ({parent}) =>
                    parent?.link?.condition !== 'dropdown' || parent?.dropdownType !== 'templates',
                  validation: (Rule) =>
                    Rule.max(3).error('You may only have a maximum of three sub-menu rows.'),
                }),
              ]),
              ...G.group('sidebar', [
                F.field('menuColumnFeatured', {
                  name: 'menuColumnFeatured',
                  title: 'Sidebar',
                  hidden: ({parent}) =>
                    parent?.link?.condition !== 'dropdown' || parent?.dropdownType === 'templates',
                }),
                F.image({
                  name: 'templateBackgroundImage',
                  hidden: ({parent}) =>
                    parent?.link?.condition !== 'dropdown' || parent?.dropdownType !== 'templates',
                }),
                F.array({
                  name: 'templateCarouselIdleImages',
                  hidden: ({parent}) =>
                    parent?.link?.condition !== 'dropdown' || parent?.dropdownType !== 'templates',
                  of: [F.image()],
                  validation: (Rule) =>
                    Rule.max(3)
                      .min(2)
                      .error(
                        'You may only have a minimum of 2 and a maximum of 3 carousel images.'
                      ),
                }),
              ]),
            ],
            preview: {
              select: {
                label: 'link.label',
                condition: 'link.condition',
              },
              prepare: ({label = 'Menu Item', condition}) => ({
                title: label,
                media: condition === 'dropdown' ? menuItemIcon : icon,
              }),
            },
          }),
        ],
      }),
      F.array({
        name: 'buttons',
        of: [
          F.link({
            name: 'button',
            args: {
              linkStyle: true,
            },
          }),
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({title, media: icon}),
  },
}

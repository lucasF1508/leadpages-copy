import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const sidebarLinks = F.array({
  name: 'sidebarLinks',
  of: [
    F.object({
      name: 'section',
      fields: [
        F.string({
          name: 'title',
          title: 'Section Title',
        }),
        F.array({
          name: 'links',
          of: [
            F.object({
              name: 'link',
              fields: [
                F.string({
                  name: 'heading',
                  title: 'Scroll-to Heading',
                  description:
                    'Full heading of the section to scroll to (eg. The Guide to Landing Pages).',
                }),
                F.string({
                  name: 'title',
                  placeholder: 'Optional',
                  description:
                    'Title to display in the sidebar. Defaults to the heading above.',
                }),
              ],
              preview: P.preview({
                title: 'title',
                heading: 'heading',
                prepare: ({ title, heading }) => ({
                  title: title || heading,
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  ],
})

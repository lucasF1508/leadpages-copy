import {F, P} from '@/legacy/schema/tool'
import {AiOutlineUnorderedList as icon, AiOutlineLink as linkIcon} from 'react-icons/ai'

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
              name: 'linkItem',
              fields: [
                F.boolean({name: 'isPageLink', initialValue: false}),
                F.string({
                  name: 'heading',
                  title: 'Scroll-to Heading',
                  description:
                    'Full heading of the section to scroll to (eg. The Guide to Landing Pages).',
                  hidden: ({parent}) => parent?.isPageLink === true,
                }),
                F.string({
                  name: 'title',
                  placeholder: 'Optional',
                  description: 'Title to display in the sidebar. Defaults to the heading above.',
                  hidden: ({parent}) => parent?.isPageLink === true,
                }),
                F.link({
                  args: {
                    linkStyle: false,
                    hasIcon: false,
                  },
                  hidden: ({parent}) => parent?.isPageLink === false,
                }),
              ],
              preview: P.preview({
                title: 'title',
                heading: 'heading',
                linkLabel: 'link.label',
                pageTitle: 'link.page.title',
                prepare: ({title, heading, linkLabel, pageTitle}) => ({
                  title: title || heading || linkLabel || pageTitle,
                  media: linkIcon,
                }),
              }),
            }),
          ],
        }),
      ],
      preview: P.preview({
        title: 'title',

        prepare: ({title}) => ({
          title,
          media: icon,
        }),
      }),
    }),
  ],
})

import {AiOutlineFileText as icon, AiOutlineRetweet as redirectIcon} from 'react-icons/ai'
import {F, FS, P, G} from '@/schema/tool'

export const schemaPage = {
  icon,
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'}), G.define('options')],
  fields: [
    ...F.fieldDefaultsCustom(),
    ...G.group('content', [
      F.field('hero'),
      F.field('components', {
        hidden: ({parent}) => parent.hasSidebar === true,
      }),
      F.blockContent({
        hidden: ({parent}) => parent.hasSidebar !== true,
      }),
      F.field('sidebarLinks', {
        hidden: ({parent}) => parent.hasSidebar !== true,
      }),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
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
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description: 'Enable to redirect to a legacy Leadpages page, if it exists.',
      }),
      F.boolean({
        name: 'hasSidebar',
        title: 'Toggle Sidebar Page',
        description:
          'Swaps page components for long-form content editor and displays sidebar links for page sections/links.',
      }),
      F.object({
        name: 'options',
        fields: [
          F.boolean({name: 'slimFooter', initialValue: false}),
          F.boolean({
            name: 'simplifiedHeader',
            title: 'Landing Page Header',
            initialValue: false,
          }),
          F.boolean({name: 'underlaidMenu', initialValue: false}),
          F.boolean({
            name: 'noLogin',
            title: 'Hide Login Button',
            initialValue: false,
          }),
          F.boolean({name: 'hideSignUpButton', initialValue: false}),
          F.boolean({name: 'hideBar', initialValue: false}),
          F.boolean({
            name: 'customCtaLink',
            title: 'Custom CTA Link',
            initialValue: false,
          }),
          F.link({
            name: 'link',
            title: 'CTA Link',
            hidden: ({parent}) => !parent?.customCtaLink,
          }),
        ],
      }),
    ]),
  ],
  preview: P.titleImage({
    redirect: 'redirectToLegacy',
    subtitle: 'parent.title',
    prepare: ({title, subtitle, media, redirect}) => ({
      title,
      subtitle,
      media: redirect ? redirectIcon : media || icon,
    }),
  }),
}

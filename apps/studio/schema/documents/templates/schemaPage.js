import {
  AiOutlineFileText as icon,
  AiOutlineRetweet as redirectIcon,
} from 'react-icons/ai'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPage = {
  icon,
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('seo', { title: 'SEO' }),
    G.fieldGroup('options', { title: 'Page Options' }),
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults(),
    ...G.group('content', [
      F.field('hero'),
      F.field('components', {}),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description:
          'Enable to redirect to a legacy Leadpages page, if it exists.',
        initialValue: true,
      }),
      F.object({
        name: 'options',
        fields: [
          F.boolean({ name: 'slimFooter', initialValue: false }),
          F.boolean({ name: 'underlaidMenu', initialValue: false }),
          F.boolean({
            name: 'noLogin',
            title: 'Hide Login Button',
            initialValue: false,
          }),
          F.boolean({ name: 'hideSignUpButton', initialValue: false }),
          F.boolean({ name: 'hideBar', initialValue: false }),
        ],
      }),
    ]),
  ],
  preview: P.titleImage({
    redirect: 'redirectToLegacy',
    prepare: ({ title, media, redirect }) => ({
      title,
      media: redirect ? redirectIcon : media || icon,
    }),
  }),
}

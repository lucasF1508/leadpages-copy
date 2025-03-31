import type {
  FieldReturn,
  RadioField,
  RadioList,
  LinkField,
  ArrayField,
} from '@gearbox-built/sanity-schema-tool'
import {F, G, withConfig} from '@gearbox-built/sanity-schema-tool'
import config from 'config'
import ImageInput from '@/components/Input/ImageInput'
import LinkInput from '@/components/Input/LinkInput'
import {lottieArgs} from './lottie'
import {defineField} from 'sanity'

// Add your custom types here for autocomplete
declare module '@gearbox-built/sanity-schema-tool' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace F {
    const dropdown: typeof customTypes.F.dropdown
    const rawLink: typeof customTypes.F.rawLink
    const accordionItems: typeof customTypes.F.accordionItems
    const fieldDefaultsCustom: typeof customTypes.F.fieldDefaultsCustom
    const links: typeof customTypes.F.links
  }
  export namespace G {
    const postDefaults: typeof customTypes.G.postDefaults
    const componentDefaults: typeof customTypes.G.componentDefaults
  }
}

export const customTypes = {
  F: {
    dropdown: (list: RadioList, props: RadioField): FieldReturn =>
      F.string({options: {list, layout: 'dropdown'}}, props),
    fieldDefaultsCustom: ({
      title: _title = {},
      slug: _slug = {},
      path = {},
      parent = {},
      htmlFooter = {},
    } = {}) =>
      [
        F.message(
          '⚠ ️The current page is set to redirect to a legacy version of the page. To disable this redirect, disable the <b>Redirect to legacy page</b> option in the <b>Page Options</b> tab and redeploy the website.',
          {
            name: 'redirectMessage',
            hidden: ({parent}) => parent?.redirectToLegacy != true,
            group: 'content',
          }
        ),
        F.title({group: 'content', ..._title}),
        _slug && F.slug({group: 'meta', ..._slug}),
        parent &&
          F.reference('page', {
            name: 'parent',
            title: 'Parent Page',
            group: 'meta',
            description: `Set parent page for nested URL structures. Path will prepend parent page's path.`,
            ...parent,
          }),
        path &&
          defineField({
            type: 'path',
            name: 'path',
            title: 'Path',
            readOnly: true,
            group: 'meta',
            description: `Automatically updates.`,
            ...path,
          }),
        F.text({
          name: 'htmlFooter',
          title: 'Footer HTML',
          group: 'meta',
          description: 'HTML to be inserted before the closing body tag on this page only.',
          ...htmlFooter,
        }),
      ].filter(Boolean),
    rawLink: (props?: Partial<LinkField>) =>
      F.link(
        {
          args: {
            linkSize: false,
            linkStyle: false,
          },
          initialValue: undefined,
          fields: undefined,
        },
        props
      ),
    links: (
      props?: Partial<ArrayField> & {signUpOption?: boolean},
      linkProps?: Partial<LinkField>,
      additionalFields = []
    ) => {
      const {signUpOption} = props || {}
      return F.array(
        {
          name: 'links',
          of: [
            F.link(linkProps),
            ...(signUpOption ? [F.field('signUp')] : []),
            ...(additionalFields || []),
          ],
        },
        {
          ...props,
          validation: signUpOption
            ? (Rule) => [
                Rule.custom((field) =>
                  field?.some((link: any) => link._type === 'signUp') && field.length > 1
                    ? 'When signup link is present, the CTA cannot contain other links'
                    : true
                ),
                ...(Array.isArray(props?.validation)
                  ? props.validation
                  : props?.validation
                  ? [props.validation]
                  : []),
              ]
            : props?.validation,
        }
      )
    },
    accordionItems: (name: string, of?: any[], props?: Partial<ArrayField>) =>
      F.array({
        name,
        of: [
          F.object({
            name: 'accordionItem',
            fields: [F.title(), F.blockContent()],
          }),
          ...(of || []),
        ],
        ...props,
      }),
  },
  G: {
    postDefaults: () => [G.define('content'), G.define('media'), G.meta()],
    componentDefaults: () => [G.define('content'), G.define('media'), G.options()],
  },
}

const pageTemplates = config?.studio?.docTypes

export default withConfig(
  {
    image: {
      components: {input: ImageInput},
      fields: [F.string({name: 'lqip', hidden: true})],
    },
    media: {
      conditions: {
        lottie: [],
        wistia: [],
      },
      fields: [
        ...G.group('content', [...lottieArgs]),
        F.string({
          name: 'maxWidth',
          description: 'eg. auto, 100px, 100%, etc.',
          group: 'options',
          hidden: ({parent}) => parent?.condition === 'none' || parent?.condition === 'lottie',
        }),
        F.string({
          group: 'content',
          name: 'wistiaId',
          description: 'ID of the Wistia video you wish to load (eg. ago55021i9).',
          hidden: ({parent}) => parent?.condition !== 'wistia',
        }),
      ],
    },
    hero: {
      args: {
        link: false,
        content: false,
        heading: false,
      },
      fields: [F.field('blockContentHero', {name: 'content', group: 'content'})],
    },
    link: {
      conditions: {
        leadpagesTrigger: [],
      },
      args: {
        condition: {
          required: false,
        },
      },
      fields: [
        F.string({name: 'dataGtm', title: 'data-gtm', group: 'options'}),
        F.string({
          name: 'ariaLabel',
          title: 'aria-label',
          group: 'options',
        }),
        F.string({
          name: 'popUpId',
          group: 'content',
          hidden: ({parent}) => parent?.condition !== 'leadpagesTrigger',
        }),
        F.string({
          name: 'leadpagesDomain',
          group: 'content',
          hidden: ({parent}) => parent?.condition !== 'leadpagesTrigger',
        }),
        F.boolean({
          name: 'hasIcon',
          title: 'Has Icon',
          initialValue: false,
          group: 'options',
        }),
      ],
      types: pageTemplates,
      components: {
        input: LinkInput,
      },
    },
    slug: {
      required: false,
    },
  },
  customTypes
)

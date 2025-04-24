// import config from 'config'
import type {LinkField, ArrayField} from '@gearbox-built/sanity-schema-tool'
import {F, G, withConfig} from '@gearbox-built/sanity-schema-tool'
import ImageInput from '@/components/Input/ImageInput'
import LinkInput from '@/components/Input/LinkInput'
import {lottieArgs} from './lottie'

declare module '@gearbox-built/sanity-schema-tool' {
  export namespace F {
    const rawLink: typeof customTypes.F.rawLink
    const links: typeof customTypes.F.links
  }
}

export const customTypes = {
  F: {
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
  },
  G: {
    postDefaults: () => [G.content(), G.define('media'), G.meta()],
    componentDefaults: () => [G.content(), G.define('media'), G.options()],
  },
}

// Config used by both legacy and new studio, once migrated this can be pulled from the package
// const pageTemplates = config?.studio?.docTypes
const pageTemplates = [
  'page',
  'pageHome',
  // 'post',
  // 'pageArchive',
  // 'customer',
  // 'integration',
  // 'comparison',
  // 'publisher',
]

export default withConfig(
  {
    image: {
      components: {input: ImageInput},
      fields: [F.string({name: 'lqip', hidden: true})],
    },
    media: {
      conditions: {
        lottie: [],
      },
      fields: G.group('content', lottieArgs),
    },
    link: {
      conditions: {
        leadpagesTrigger: [],
      },
      args: {
        condition: {
          required: false,
        },
        url: {
          hidden: ({parent}) => !['external', 'internal'].includes(parent?.condition),
          //TODO: Is there a way to provide a dynamic desctiption depending on the condition?
          description: 'Internal links must have a relative url to work correctly.',
        },
        page: {
          hidden: true,
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

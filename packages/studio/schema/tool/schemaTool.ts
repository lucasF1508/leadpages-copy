/* eslint-disable @typescript-eslint/no-namespace */
import ImageInput from '@/components/Input/ImageInput'
import LinkInput from '@/components/Input/LinkInput'
import {lottieArgs} from './lottie'
import type {ArrayField, LinkField, PortableTextBlock} from '@gearbox-built/sanity-schema-tool'
import {F, G, P, withConfig} from '@gearbox-built/sanity-schema-tool'
import partition from 'lodash/partition'
import {BiImageAdd as imageIcon} from 'react-icons/bi'
import {BsCameraVideo as videoIcon} from 'react-icons/bs'
import {type Image as ImageType} from 'sanity'

declare module '@gearbox-built/sanity-schema-tool' {
  export namespace F {
    const rawLink: typeof customTypes.F.rawLink
    const links: typeof customTypes.F.links
  }
  export namespace P {
    const richHeading: typeof customTypes.P.richHeading
    const richMedia: typeof customTypes.P.richMedia
    const mediaIcon: typeof customTypes.P.mediaIcon
  }
}

export const customTypes = {
  F: {
    links: (
      props?: Partial<ArrayField> & {signUpOption?: boolean; linkStyle?: boolean},
      linkProps?: Partial<LinkField>,
      additionalFields = []
    ) => {
      const {signUpOption, linkStyle = true} = props || {}
      return F.array(
        {
          name: 'links',
          of: [
            F.link({
              ...linkProps,
              fields: [
                ...(linkStyle
                  ? [
                      F.dropdown(
                        [
                          'button-solid',
                          'button-outline',
                          'button-secondary',
                          'text',
                          'text-secondary',
                        ],
                        {
                          name: 'linkStyle',
                          initialValue: 'inline',
                          group: 'options',
                        }
                      ),
                    ]
                  : []),
              ],
              args: {
                ...linkProps?.args,
                linkStyle: false,
                linkSize: false,
              },
            }),
            ...(signUpOption ? [F.field('signUp')] : []),
            ...(additionalFields || []),
          ],
          validation: (Rule) => [
            ...(signUpOption
              ? [
                  Rule.max(1),
                  Rule.custom((field) =>
                    field?.some((link: any) => link._type === 'signUp') && field.length > 1
                      ? 'When signup link is present, the CTA cannot contain other links'
                      : true
                  ),
                ]
              : []),
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
  P: {
    richHeading: (content?: PortableTextBlock[], headingStyle: string = 'h2'): [string, string] => {
      if (!content) return ['', '']

      const headingFilterRegex = /^h\d/
      const [heading, body] = content
        ? partition(content, (block) =>
            headingStyle !== 'all'
              ? block.style === headingStyle
              : headingFilterRegex.test(block.style as string)
          )
        : []
      const title = heading ? P.richText(heading) : ''
      const subtitle = body ? P.richText(body) : ''
      return [title, subtitle]
    },
    richMedia: (content?: PortableTextBlock[]): any => {
      if (!content || !Array.isArray(content) || !content?.length) return undefined
      const media: any = content.find((block) => block._type === 'media')

      if (!media) return undefined

      return media?.condition && ['illustration', 'image'].includes(media?.condition)
        ? media?.image || imageIcon
        : videoIcon
    },
    mediaIcon: (media: {condition?: string; image?: ImageType} | undefined): any =>
      media?.condition && ['illustration', 'image'].includes(media?.condition)
        ? media?.image || imageIcon
        : videoIcon,
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
        wistia: [],
      },
      fields: [
        ...G.group('content', [...lottieArgs]),
        F.string({
          group: 'content',
          name: 'wistiaId',
          description: 'ID of the Wistia video you wish to load (eg. ago55021i9).',
          hidden: ({parent}) => parent?.condition !== 'wistia',
        }),
      ],
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

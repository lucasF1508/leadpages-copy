import React from 'react'
import { BsImages as icon, BsCameraVideo as videoIcon } from 'react-icons/bs'
import startCase from 'lodash/startCase'
import getConditions from '../../utils/getConditions'
import * as F from '../../fields'
import * as G from '../../groups'

export const media = ({
  fields: fieldsOrg = [],
  args: argsOrg = {},
  preview = {},
  groups = [],
  conditions: conditionsOrg = {},
  name = 'media',
  ...props
} = {}) => {
  const args = {
    image: {},
    video: {},
    lottie: {},
    lottieArgs: {},
    caption: {},
    ratio: {},
    ...argsOrg,
  }

  const [conditions, conditionValues] = getConditions({
    image: [],
    video: [],
    lottie: [],
    ...conditionsOrg,
  })

  const fields = [
    F.radio(conditions, {
      name: 'condition',
      title: 'Type',
      group: 'content',
      initialValue: 'image',
    }),
    args.image
      ? F.image({
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'image',
          ...args.image,
        })
      : '',
    args.video
      ? F.video({
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'video',
          ...args.video,
        })
      : '',
    args.lottie
      ? F.file({
          group: 'content',
          name: 'lottie',
          hidden: ({ parent }) => parent.condition !== 'lottie',
          ...args.lottie,
        })
      : '',
    ...(args.lottieArgs
      ? [
          F.checkbox({
            name: 'autoplay',
            initialValue: true,
            group: 'options',
            hidden: ({ parent }) =>
              parent.condition !== 'lottie' ||
              parent?.playOnScroll ||
              parent?.startInView,
          }),
          F.checkbox({
            name: 'playOnScroll',
            group: 'options',
            initialValue: false,
            hidden: ({ parent }) =>
              parent.condition !== 'lottie' ||
              parent?.startInView ||
              parent?.autoplay,
          }),
          F.checkbox({
            name: 'startInView',
            initialValue: false,
            group: 'options',
            hidden: ({ parent }) =>
              parent.condition !== 'lottie' ||
              parent?.playOnScroll ||
              parent?.autoplay,
          }),
          F.object({
            name: 'offset',
            title: 'Visibility Offset',
            group: 'options',
            initialValue: { start: 0, end: 1 },
            options: { columns: 2 },
            description: (
              <span>
                These values are relative to the size of the lottie animation.{' '}
                <br />
                <br />
                eg: The following would start at 25% and end at 100% of the
                animation being visible in the browser
                <br />
                <pre
                  style={{
                    display: 'block',
                    background: '#efefef',
                    padding: '0.5rem',
                  }}
                >
                  start: 0.25 <br />
                  end: 1
                </pre>
              </span>
            ),
            fields: [
              F.number({
                name: 'start',
                validation: (Rule) => Rule.positive().max(1),
              }),
              F.number({
                name: 'end',
                validation: (Rule) => Rule.positive().max(1),
              }),
            ],
            hidden: ({ parent }) =>
              parent.condition !== 'lottie' ||
              (!parent?.playOnScroll && !parent?.startInView),
          }),
          F.checkbox({
            name: 'loop',
            initialValue: true,
            group: 'options',
            hidden: ({ parent }) =>
              parent.condition !== 'lottie' ||
              parent?.playOnScroll ||
              parent?.yoyo,
          }),
          F.checkbox({
            name: 'yoyo',
            initialValue: false,
            group: 'options',
            hidden: ({ parent }) =>
              parent.condition !== 'lottie' ||
              parent?.playOnScroll ||
              parent?.loop,
          }),
          F.object({
            name: 'advancedConfig',
            group: 'options',
            hidden: ({ parent }) => parent.condition !== 'lottie',
            options: {
              collapsible: true,
              collapsed: true,
            },
            fields: [
              F.checkbox({
                name: 'controlBar',
                initialValue: false,
                description:
                  'This will display an play bar to help understand the lottie animation',
              }),
              F.text({
                name: 'config',
                title: 'JSON Lottie Config',
                description: (
                  <span>
                    This can be used to orchestrate individual files, and will
                    disable all the above options.
                    <br />
                    <br /> The config needs to be valid JSON object.{' '}
                    <a
                      href="https://lottiefiles.com/interactivity"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Refer to Lottie interactivity for options.
                    </a>
                    <br />
                    eg:{' '}
                    <pre
                      style={{
                        display: 'block',
                        background: '#efefef',
                        padding: '0.5rem',
                      }}
                    >
                      {JSON.stringify(
                        {
                          mode: 'scroll',
                          actions: [
                            {
                              visibility: [0, 1],
                              type: 'seek',
                              frames: [0, 250],
                            },
                          ],
                        },
                        null,
                        2
                      )}
                    </pre>
                  </span>
                ),
              }),
            ],
          }),
        ]
      : []),
    args.caption
      ? F.string({
          name: 'caption',
          group: 'content',
          hidden: ({ parent }) => parent.condition === 'none',
          ...args.caption,
        })
      : '',
    args.ratio
      ? F.string({
          name: 'ratio',
          group: 'options',
          hidden: ({ parent }) =>
            parent.condition === 'none' || parent.condition === 'lottie',
          ...args.ratio,
        })
      : '',
    ...conditionValues.flat(),
    ...fieldsOrg,
  ].filter(Boolean)

  return F.object({
    icon,
    name,
    ...props,
    parseType: 'media',
    groups: [...G.fieldGroupComponentOptions(), ...groups],
    fields,
    preview: {
      select: {
        condition: 'condition',
        image: 'image',
        video: 'video',
        url: 'url',
        imageFileName: 'image.asset.originalFilename',
        lottieFileName: 'lottie.asset.originalFilename',
        ratio: 'ratio',
        caption: 'caption',
      },
      prepare: ({
        condition,
        image,
        lottieFileName,
        video,
        imageFileName,
        ratio,
        caption,
      }) => {
        let title = ''
        switch (condition) {
          case 'image':
            title = imageFileName
            break
          case 'video':
            title = video?.name
            break
          case 'lottie':
            title = lottieFileName
            break
          default:
            title = condition ? startCase(condition) : ''
            break
        }
        return {
          title: title || 'Media (Empty)',
          subtitle: caption || ratio || '',
          media: condition === 'image' ? image : videoIcon,
        }
      },
      ...preview,
    },
  })
}

export default media

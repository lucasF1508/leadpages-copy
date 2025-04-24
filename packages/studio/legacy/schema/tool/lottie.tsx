import React from 'react'
import {F} from '@gearbox-built/sanity-schema-tool'
import LottieFileInput from '@/legacy/components/Input/LottieFileInput'

export const lottieArgs = [
  F.file({
    name: 'lottie',
    components: {input: LottieFileInput},
    group: 'content',
    hidden: ({parent, ...props}) => parent?.condition !== 'lottie',
  }),
  F.checkbox({
    name: 'loader',
    initialValue: false,
    description: 'Show a loader while the animation is loading',
    hidden: ({parent}) => parent?.condition !== 'lottie',
  }),
  F.checkbox({
    name: 'autoplay',
    initialValue: true,
    hidden: ({parent}) =>
      parent?.condition !== 'lottie' || parent?.playOnScroll || parent?.startInView,
  }),
  F.checkbox({
    name: 'playOnScroll',
    initialValue: false,
    hidden: ({parent}) => parent?.condition !== 'lottie' || parent?.startInView || parent?.autoplay,
  }),
  F.checkbox({
    name: 'startInView',
    initialValue: false,
    hidden: ({parent}) =>
      parent?.condition !== 'lottie' || parent?.playOnScroll || parent?.autoplay,
  }),
  F.object({
    name: 'offset',
    title: 'Visibility Offset',
    initialValue: {start: 0, end: 1},
    options: {columns: 2},
    description: (
      <span>
        These values are relative to the size of the lottie animation. <br />
        <br />
        eg: The following would start at 25% and end at 100% of the animation being visible in the
        browser
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
    hidden: ({parent}) =>
      parent?.condition !== 'lottie' || (!parent?.playOnScroll && !parent?.startInView),
  }),
  F.checkbox({
    name: 'loop',
    initialValue: true,
    hidden: ({parent}) => parent?.condition !== 'lottie' || parent?.playOnScroll || parent?.yoyo,
  }),
  F.checkbox({
    name: 'yoyo',
    initialValue: false,
    hidden: ({parent}) => parent?.condition !== 'lottie' || parent?.playOnScroll || parent?.loop,
  }),
  F.object({
    name: 'advancedConfig',
    hidden: ({parent}) => parent?.condition !== 'lottie',
    options: {
      collapsible: true,
      collapsed: true,
    },
    fields: [
      F.checkbox({
        name: 'controlBar',
        initialValue: false,
        description: 'This will display an play bar to help understand the lottie animation',
      }),
      F.text({
        name: 'config',
        title: 'JSON Lottie Config',
        description: (
          <span>
            This can be used to orchestrate individual files, and will disable all the above
            options.
            <br />
            <br /> The config needs to be valid JSON object.{' '}
            <a href="https://lottiefiles.com/interactivity" rel="noreferrer" target="_blank">
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

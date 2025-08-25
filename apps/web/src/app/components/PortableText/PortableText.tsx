import type { SerializedBlock } from '@portabletext/react'
import type { PortableTextBlock } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import { PortableText } from '@portabletext/react'
import { FiCheckCircle as CheckIcon } from '@react-icons/all-files/fi/FiCheckCircle'
import ComponentTypes from './components'
// Marks
import Align from './marks/Align'
import Color from './marks/Color'
import Link from './marks/Link'
import MaxWidth from './marks/MaxWidth'
import {
  createBlockStyles,
  createColorMarks,
  getClassNameFromBlockStyles,
} from './utils'

export type PortableTextClassNames = {
  [key: string]: ClassValue
  blockquote?: ClassValue
  bulletItem?: ClassValue
  bulletList?: ClassValue
  checkmarkItem?: ClassValue
  checkmarkList?: ClassValue
  embed?: ClassValue
  h1?: ClassValue
  h2?: ClassValue
  h3?: ClassValue
  h4?: ClassValue
  h5?: ClassValue
  large?: ClassValue
  media?: {
    media?: ClassValue
    root?: ClassValue
  }
  normal?: ClassValue
  numberItem?: ClassValue
  numberList?: ClassValue
  pageAnchor?: ClassValue
  small?: ClassValue
  socialLinks?: ClassValue
  table?: ClassValue
  xsmall?: ClassValue
}

export interface PortableTextProps {
  blockStyles?: BlockStylesType
  classNames?: PortableTextClassNames
  content?: PortableTextBlock[]
}

export interface Blockprops extends SerializedBlock {
  value: PortableTextBlock
}

export type BlockStylesType = {
  [K in keyof NonNullable<PortableTextProps['classNames']>]: {
    className: string
    tag: keyof JSX.IntrinsicElements
  }
}
export type ColorMarksType = typeof colorMarks

// When the design system changed hands there was an update to the mappings.
// These were the original mapping and then need to be imported to components that require larger blockStyles
export const defaultLargeBlockStyles: BlockStylesType = {
  h1: {
    className: 'type-title-t4 sm:type-title-t3 md:type-title-t2',
    tag: 'h2',
  },
  h2: {
    className: 'type-title-t6 sm:type-title-t4 md:type-title-t3',
    tag: 'h2',
  },
  h3: {
    className: 'type-title-t7 sm:type-title-t5 md:type-title-t4',
    tag: 'h3',
  },
  h4: { className: 'type-h2 md:type-h1', tag: 'h4' },
  h5: { className: 'type-h3 md:type-h2', tag: 'h5' },
  h6: { className: 'type-h4 md:type-h3', tag: 'h6' },
}

export const defaultBlockStyles: BlockStylesType = {
  'h1-home': { className: 'type-title-t1', tag: 'h1' },
  'h1-hero': {
    className: 'type-title-t4 sm:type-title-t3 md:type-title-t2',
    tag: 'h1',
  },
  'h2-hero': {
    className: 'type-title-t6 sm:type-title-t4 md:type-title-t3',
    tag: 'h1',
  },
  'h3-hero': {
    className: 'type-title-t7 sm:type-title-t5 md:type-title-t4',
    tag: 'h1',
  },
  'h4-hero': { className: 'type-h2 md:type-h1', tag: 'h1' },
  h1: {
    className: 'type-title-t6 sm:type-title-t5 md:type-title-t4',
    tag: 'h2',
  },
  h2: {
    className: 'type-title-t7 sm:type-title-t6 md:type-title-t5',
    tag: 'h2',
  },
  h3: {
    className: 'type-h2 md:type-h1',
    tag: 'h3',
  },
  h4: { className: 'type-h5 sm:type-h4 md:type-h2', tag: 'h4' },
  h5: { className: 'type-h6 sm:type-h5 md:type-h3', tag: 'h5' },
  h6: { className: 'type-h6 md:type-h4', tag: 'h6' },
  large: {
    className: 'text-body-muted type-body-md sm:type-body-lg',
    tag: 'p',
  },
  normal: { className: 'text-body-muted type-body-sm md:type-body', tag: 'p' },
  small: {
    className: 'text-body-muted type-body-xs md:type-body-sm',
    tag: 'p',
  },
  xsmall: { className: 'text-body-muted type-body-xs', tag: 'p' },
  blockquote: { className: 'type-quote-xs sm:type-quote-sm', tag: 'p' },
}

export const colorMarks = {
  highlight: 'text-theme',
  primary: 'text-brand-primary',
  secondary: 'text-brand-secondary',
} as const

const _PortableText = ({
  blockStyles: _blockStyles = {},
  classNames = {},
  content = [],
}: PortableTextProps) => {
  const blockStyles = {
    ...defaultBlockStyles,
    ..._blockStyles,
  }
  return (
    <PortableText
      components={{
        // Styles require className of portable-text and refer to src/design/css/components/portable-text.css
        block: createBlockStyles({ blockStyles, classNames }),
        list: {
          bullet: ({ children }) => (
            <ul className={clsx('list list-bullet', classNames?.bulletList)}>
              {children}
            </ul>
          ),
          checkmark: ({ children }) => (
            <ul className={clsx('list list-check', classNames?.checkmarkList)}>
              {children}
            </ul>
          ),
          number: ({ children }) => (
            <ol className={clsx('list list-number', classNames?.numberList)}>
              {children}
            </ol>
          ),
        },
        listItem: {
          bullet: ({ children, value }) => (
            <li
              className={clsx(
                getClassNameFromBlockStyles(
                  value?.style,
                  classNames?.bulletItem
                )
              )}
            >
              {children}
            </li>
          ),
          checkmark: ({ children, value }) => (
            <li
              className={clsx(
                getClassNameFromBlockStyles(
                  value?.style,
                  classNames?.checkmarkItem
                )
              )}
            >
              <CheckIcon className="list-check-icon" />
              {children}
            </li>
          ),
          number: ({ children, value }) => (
            <li
              className={clsx(
                getClassNameFromBlockStyles(
                  value?.style,
                  classNames?.numberItem
                )
              )}
            >
              {children}
            </li>
          ),
        },
        marks: {
          ...createColorMarks(colorMarks),
          textGradient: Color,
          align: Align,
          maxWidth: MaxWidth,
          link: Link,
        },
        types: ComponentTypes({ classNames }),
      }}
      value={content}
    />
  )
}

export default _PortableText

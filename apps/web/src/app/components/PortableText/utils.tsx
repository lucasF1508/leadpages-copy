import type {
  BlockStylesType,
  Blockprops,
  ColorMarksType,
  PortableTextClassNames,
} from './PortableText'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import { defaultBlockStyles } from './PortableText'

export const createTag = (
  tag: keyof JSX.IntrinsicElements,
  className: ClassValue,
  { children, node, value }: Blockprops,
  fallbackTag = 'span'
) => {
  const hasAlign = value.children.some(({ marks = [] }) =>
    marks.includes('align')
  )
  return React.createElement(
    node?.level && node.level > 0 ? fallbackTag : tag,
    { className: clsx(className, hasAlign && 'text-center') },
    children
  )
}

export const createBlockStyles = ({
  blockStyles,
  classNames,
}: {
  blockStyles: BlockStylesType
  classNames?: PortableTextClassNames
}) =>
  Object.entries(blockStyles).reduce((obj, [key, value]) => {
    const { className, tag } = value
    return {
      ...obj,
      [key]: (props: Blockprops) =>
        createTag(tag, clsx(className, classNames?.[key]), props),
    }
  }, {})

export const createColorMarks = (colorMarks: ColorMarksType) =>
  Object.entries(colorMarks).reduce(
    (obj, [key, value]) => ({
      ...obj,
      [key]: ({ children }: { children: React.ReactNode }) => (
        <span className={clsx(value)}>{children}</span>
      ),
    }),
    {}
  )

export const getClassNameFromBlockStyles = (
  style: string | undefined,
  classNames?: ClassValue
) =>
  style && style in defaultBlockStyles
    ? clsx(defaultBlockStyles[style as keyof typeof defaultBlockStyles]?.className, classNames)
    : clsx(classNames);

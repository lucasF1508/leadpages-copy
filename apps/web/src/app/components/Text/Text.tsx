import type { PortableTextProps } from '@/components/PortableText'
import type { ContentType } from '@types'
import type { ReactNode } from 'react'
import React, { createElement } from 'react'
import clsx from 'clsx'
import isString from 'lodash/isString'
import PortableText from '@/components/PortableText'

type TextElements = keyof JSX.IntrinsicElements

export interface BaseTextProps
  extends Pick<PortableTextProps, 'blockStyles' | 'classNames'> {
  baseStyles?: boolean
  content?: ContentType
}

export type TextProps<T extends TextElements> = {
  as?: T
} & BaseTextProps &
  Omit<React.ComponentProps<T>, 'content'>

const Text = <T extends TextElements>({
  as: _as,
  baseStyles = true,
  blockStyles,
  children,
  className: _className = '',
  classNames,
  content,
  ...props
}: TextProps<T>) => {
  if (!children && !content) return null

  const className = clsx(baseStyles && 'portable-text', _className)
  const as = _as || 'article'

  // Runtime check to warn about incorrect 'as' prop usage
  if (!isString(content) && as === 'p') {
    console.warn(
      "The 'p' tag is not allowed when passing Portable Text to the content prop."
    )
  }

  const elementProps: [string, object, ReactNode?] = isString(content)
    ? [
        as,
        {
          ...props,
          className,
          dangerouslySetInnerHTML: { __html: content },
        },
      ]
    : [
        as,
        {
          ...props,
          className,
        },
        children || (
          <PortableText
            blockStyles={blockStyles}
            classNames={classNames}
            content={content}
          />
        ),
      ]
  return createElement(...elementProps)
}

export default Text

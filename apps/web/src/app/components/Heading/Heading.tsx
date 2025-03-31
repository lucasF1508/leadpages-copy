import type { PortableTextBlock } from '@types'
import React from 'react'
import { type ClassValue, clsx } from 'clsx'
import {defaultBlockStyles} from '@/components/PortableText'
import Text from '@/components/Text'
import { setStyleNone } from './utils'

type HeadingElements =
  | 'blockquote'
  | 'em'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong'

interface HeadingProps
  extends Omit<
    React.ComponentProps<HeadingElements>,
    'className' | 'content' | 'style'
  > {
  as?: HeadingElements
  baseStyles?: boolean
  className?: ClassValue
  content?: PortableTextBlock[]
  heading?: string
  style?: string
}

const Heading = ({
  as = 'h2',
  baseStyles = false,
  className,
  content,
  heading,
}: HeadingProps) => (
  <Text
    as={as}
    baseStyles={baseStyles}
    className={clsx(className || defaultBlockStyles?.h2?.className)}
    content={setStyleNone(heading || content || '')}
  />
)

export default Heading

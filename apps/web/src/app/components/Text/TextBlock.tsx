import type {TextProps} from './Text';
import React from 'react'
import Text from './Text'
import { ContentType, LinkType } from '@/types'
import {Links} from '@/components/Link'
import clsx from 'clsx'

const TextBlock = ({content, links, alignment}: {content: ContentType, links: LinkType[], alignment: string}) => 
  <div className={clsx('flex flex-col gap-2', alignment === 'start' ? 'items-start' : 'items-center')}>
    <Text className='xs:px-3 sm:px-0' content={content}/>
    <Links links={links} />
  </div>

export default TextBlock

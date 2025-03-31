import type {TextProps} from './Text';
import React from 'react'
import Text from './Text'
import { ContentType, LinkType } from '@/types'
import Links from '@/components/Links'

const TextBlock = ({content, links}: {content: ContentType, links: LinkType[]}) => 
  <div className='flex flex-col gap-2 items-center'>
    <Text className='xs:px-3 sm:px-0' content={content}/>
    <Links links={links} />
  </div>

export default TextBlock

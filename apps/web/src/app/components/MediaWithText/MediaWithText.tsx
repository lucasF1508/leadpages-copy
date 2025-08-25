import type { ContentType, LinkType, MediaType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Media, { hasMedia } from '@/components/Media'
import { defaultLargeBlockStyles } from '@/components/PortableText'
import Text from '@/components/Text'
import { Links, hasLinks } from '../Link'

export type MediaWithTextType = {
  _key: string
  alignContent?: 'left' | 'right'
  className?: ClassValue
  content?: ContentType
  links?: LinkType[]
  media: MediaType
  pillContent?: string
}

const MediaWithText = ({
  alignContent,
  content,
  links,
  media,
  pillContent,
}: MediaWithTextType) => (
  <div
    className={clsx(
      'flex flex-col md:flex-nowrap gap-y-7 gap-x-4 items-center justify-center xs:px-3 md:px-0 max-w-[30rem] md:max-w-none mx-auto h-full w-full',
      alignContent === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
    )}
  >
    {hasMedia(media) && (
      <div
        className={clsx(
          'flex-[1_1_auto] w-auto md:w-full md:max-w-cols7 text-green-300 md:mx-0',
          alignContent === 'left' ? 'mr-0 -ml-6' : 'ml-0 -mr-6'
        )}
      >
        <Media media={media} priority />
      </div>
    )}
    <div className="flex flex-[1_1_auto] w-full md:max-w-cols4 lg:max-w-cols5">
      <div>
        {pillContent && (
          <div className="inline-block mb-2 rounded-lg theme-light:bg-gradient-purple theme-dark:bg-gradient-purple-invert type-overline-xxs py-[0.25rem] px-1.5 text-light">
            {pillContent}
          </div>
        )}
        {content && (
          <Text
            as="div"
            blockStyles={defaultLargeBlockStyles}
            className="[&>*]:max-md:!mb-2"
            classNames={{
              large: 'max-md:!mt-2',
              normal: 'max-md:!mt-2',
              small: 'max-md:!mt-2 last:!mb-0',
            }}
            content={content}
          />
        )}
        {hasLinks(links) && (
          <Links
            className="mt-2 gap-2 flex flex-row justify-start"
            links={links}
          />
        )}
      </div>
    </div>
  </div>
)

export default MediaWithText

import type { ContentType, LinkType, MediaType } from '@types'
import type { BlockStylesType } from '@/components/PortableText'
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
  blockStyles?: BlockStylesType
  className?: ClassValue
  content?: ContentType
  disableContainer?: boolean
  links?: LinkType[]
  linkButtonVariant?: 'default' | 'green' | null
  media: MediaType
  pillContent?: string
  variant?: 'light' | 'dark'
}

const linkButtonVariantClasses = {
  default:
    '[&_.link-button-solid]:!rounded-[40px] [&_.link-button-solid]:!bg-[#603EFF] [&_.link-button-solid]:!text-white [&_.link-button-solid]:!border-[#603EFF] [&_.link-button-solid_.link-label]:!text-white [&_.link-button-solid_.link-icon]:!text-white [&_.link-button-solid_.link-icon_svg]:!stroke-white [&_.link-button-solid:hover]:!bg-[#7d4fe0] [&_.link-button-solid:hover_.link-label]:!text-white [&_.link-button-solid:hover_.link-icon]:!text-white [&_.link-button-solid:hover_.link-icon_svg]:!stroke-white [&_.link-w-icon]:!bg-[#603EFF] [&_.link-w-icon]:!text-white [&_.link-w-icon]:!border-[#603EFF] [&_.link-w-icon]:inline-flex [&_.link-w-icon]:items-center [&_.link-w-icon]:gap-2 [&_.link-w-icon]:!rounded-[40px] [&_.link-w-icon]:px-2.5 [&_.link-w-icon]:h-6 [&_.link-w-icon]:font-medium [&_.link-w-icon]:!no-underline [&_.link-w-icon_.link-label]:!text-white [&_.link-w-icon_.link-icon_svg]:!stroke-white [&_.link-w-icon:hover]:!bg-[#7d4fe0] [&_.link-w-icon:hover_.link-label]:!text-white [&_.link-text]:!bg-[#603EFF] [&_.link-text]:!text-white [&_.link-text]:!border-[#603EFF] [&_.link-text]:inline-flex [&_.link-text]:items-center [&_.link-text]:gap-2 [&_.link-text]:!rounded-[40px] [&_.link-text]:px-2.5 [&_.link-text]:h-6 [&_.link-text]:font-medium [&_.link-text]:!no-underline [&_.link-text_.link-label]:!text-white [&_.link-text_.link-icon_svg]:!stroke-white [&_.link-text:hover]:!bg-[#7d4fe0] [&_.link-inline]:!bg-[#603EFF] [&_.link-inline]:!text-white [&_.link-inline]:!border-[#603EFF] [&_.link-inline]:inline-flex [&_.link-inline]:items-center [&_.link-inline]:gap-2 [&_.link-inline]:!rounded-[40px] [&_.link-inline]:px-2.5 [&_.link-inline]:h-6 [&_.link-inline]:font-medium [&_.link-inline]:!no-underline [&_.link-inline_.link-label]:!text-white [&_.link-inline_.link-icon_svg]:!stroke-white [&_.link-inline:hover]:!bg-[#7d4fe0]',
  green:
    '[&_.link-button-solid]:!rounded-[40px] [&_.link-button-solid]:!bg-button-surface-solid [&_.link-button-solid]:!text-button-text-solid [&_.link-button-solid]:!border-button-surface-solid [&_.link-button-solid_.link-label]:!text-button-text-solid [&_.link-button-solid_.link-icon]:!text-button-text-solid [&_.link-button-solid_.link-icon_svg]:!stroke-button-text-solid [&_.link-button-solid:hover]:!bg-button-surface-solid-hover [&_.link-button-solid:hover_.link-label]:!text-button-text-solid [&_.link-button-solid:hover_.link-icon]:!text-button-text-solid [&_.link-button-solid:hover_.link-icon_svg]:!stroke-button-text-solid [&_.link-w-icon]:!bg-button-surface-solid [&_.link-w-icon]:!text-button-text-solid [&_.link-w-icon]:!border-button-surface-solid [&_.link-w-icon]:inline-flex [&_.link-w-icon]:items-center [&_.link-w-icon]:gap-2 [&_.link-w-icon]:!rounded-[40px] [&_.link-w-icon]:px-2.5 [&_.link-w-icon]:h-6 [&_.link-w-icon]:font-medium [&_.link-w-icon]:!no-underline [&_.link-w-icon_.link-label]:!text-button-text-solid [&_.link-w-icon_.link-icon]:!text-button-text-solid [&_.link-w-icon_.link-icon_svg]:!stroke-button-text-solid [&_.link-w-icon_.link-icon-background]:!hidden [&_.link-w-icon:hover]:!bg-button-surface-solid-hover [&_.link-w-icon:hover_.link-label]:!text-button-text-solid [&_.link-w-icon:hover_.link-icon]:!text-button-text-solid [&_.link-w-icon:hover_.link-icon_svg]:!stroke-button-text-solid [&_.link-text]:!bg-button-surface-solid [&_.link-text]:!text-button-text-solid [&_.link-text]:!border-button-surface-solid [&_.link-text]:inline-flex [&_.link-text]:items-center [&_.link-text]:gap-2 [&_.link-text]:!rounded-[40px] [&_.link-text]:px-2.5 [&_.link-text]:h-6 [&_.link-text]:font-medium [&_.link-text]:!no-underline [&_.link-text_.link-label]:!text-button-text-solid [&_.link-text_.link-icon]:!text-button-text-solid [&_.link-text_.link-icon_svg]:!stroke-button-text-solid [&_.link-text_.link-icon-background]:!hidden [&_.link-text:hover]:!bg-button-surface-solid-hover [&_.link-text:hover_.link-label]:!text-button-text-solid [&_.link-text:hover_.link-icon]:!text-button-text-solid [&_.link-text:hover_.link-icon_svg]:!stroke-button-text-solid [&_.link-inline]:!bg-button-surface-solid [&_.link-inline]:!text-button-text-solid [&_.link-inline]:!border-button-surface-solid [&_.link-inline]:inline-flex [&_.link-inline]:items-center [&_.link-inline]:gap-2 [&_.link-inline]:!rounded-[40px] [&_.link-inline]:px-2.5 [&_.link-inline]:h-6 [&_.link-inline]:font-medium [&_.link-inline]:!no-underline [&_.link-inline_.link-label]:!text-button-text-solid [&_.link-inline_.link-icon]:!text-button-text-solid [&_.link-inline_.link-icon_svg]:!stroke-button-text-solid [&_.link-inline_.link-icon-background]:!hidden [&_.link-inline:hover]:!bg-button-surface-solid-hover [&_.link-inline:hover_.link-label]:!text-button-text-solid [&_.link-inline:hover_.link-icon]:!text-button-text-solid [&_.link-inline:hover_.link-icon_svg]:!stroke-button-text-solid',
}

const MediaWithText = ({
  alignContent,
  blockStyles = defaultLargeBlockStyles,
  className,
  content,
  disableContainer,
  links,
  linkButtonVariant,
  media,
  pillContent,
  variant = 'dark',
}: MediaWithTextType) => {
  const isDark = variant === 'dark'
  const useContainer = isDark && !disableContainer

  return (
    <div
      className={clsx(
        'mb-6 flex flex-col md:flex-nowrap gap-y-7 gap-x-4 items-center justify-center xs:px-3 md:px-0 mx-auto h-full w-full',
        !disableContainer && 'max-w-[30rem] md:max-w-none',
        useContainer && 'py-10 sm:py-12 md:py-16 rounded-2xl px-4 sm:px-6 md:px-8 bg-[#1A1B23]',
        alignContent === 'left' ? 'md:flex-row-reverse' : 'md:flex-row',
        !useContainer && 'order-1',
        disableContainer && 'max-w-none w-full',
        className
      )}
    >
      {hasMedia(media) && (
        <div
          className={clsx(
            'order-2 flex-[1_1_auto] w-auto md:w-full md:max-w-cols7 md:mx-0',
            alignContent === 'left' ? 'mr-0 -ml-6' : 'ml-0 -mr-6',
            useContainer && 'rounded-2xl overflow-hidden bg-[#24262E] p-4'
          )}
        >
          <Media media={media} priority />
        </div>
      )}
      <div
        className={clsx(
          'flex flex-[1_1_auto] w-full md:max-w-cols4 lg:max-w-cols5 order-1',
          isDark && '[&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_p]:!text-[#C7CAD1] [&_.link-button-ghost_.link-label]:!text-white [&_.link-button-ghost_.link-icon_svg]:!stroke-white'
        )}
      >
        <div className="mwt-prose">
          {pillContent && (
            <div
              className={clsx(
                'inline-block mb-2 rounded-lg type-overline-xxs py-[0.25rem] px-1.5',
                isDark
                  ? 'bg-button-surface-solid !text-button-text-solid'
                  : 'theme-light:bg-gradient-purple theme-dark:bg-gradient-purple-invert !text-white'
              )}
            >
              {pillContent}
            </div>
          )}
          {content && (
            <Text
              as="div"
              blockStyles={blockStyles}
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
              className={clsx(
                'mt-2 gap-2 flex flex-row justify-start',
                !linkButtonVariant && linkButtonVariantClasses.green,
                linkButtonVariant && linkButtonVariantClasses[linkButtonVariant],
                !isDark && [
                  '[&_.link-button-solid_.link-label]:!text-white [&_.link-button-solid_.link-icon]:!text-white [&_.link-button-solid_.link-icon_svg]:!stroke-white',
                  '[&_.link-w-icon_.link-label]:!text-white [&_.link-w-icon_.link-icon]:!text-white [&_.link-w-icon_.link-icon_svg]:!stroke-white',
                  '[&_.link-inline_.link-label]:!text-white [&_.link-inline_.link-icon]:!text-white [&_.link-inline_.link-icon_svg]:!stroke-white',
                  '[&_.link-text_.link-label]:!text-white [&_.link-text_.link-icon]:!text-white [&_.link-text_.link-icon_svg]:!stroke-white'
                ]
              )}
              links={links}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaWithText

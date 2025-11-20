import type { ContentType, ImageType, LinkType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Text from '@/components/Text'

export interface StartATrialProps {
  backgroundImage?: ImageType
  className?: ClassValue
  classNames?: {
    heading?: ClassValue
    inner?: ClassValue
    root?: ClassValue
  }
  content?: ContentType
  desktopOrientation?: 'horizontal' | 'vertical'
  heading?: string
  link?: LinkType
  mobileAlignment?: 'center' | 'left'
}

const StartATrialHorizontal = ({
  content,
  heading,
  image,
  link,
  mobileAlignment = 'center',
}: {
  image?: ImageType
} & StartATrialProps) => (
  <div className="flex flex-col md:flex-row gap-4">
    <div
      className={clsx(
        'sm:max-w-[40rem] flex-[1_1_100%] md:flex-[1_1_auto] z-content',
        mobileAlignment === 'center' && 'max-md:text-center max-md:mx-auto'
      )}
    >
      <Heading
        className={clsx(
          'type-title-t7 sm:type-title-t6 md:type-title-t6 mb-3 md:!max-w-[48rem]',
          mobileAlignment === 'center' &&
            'max-md:max-w-[10.294em] max-md:mx-auto'
        )}
        heading={heading}
      />
      <Text className="text-body-muted max-w-[32rem]" content={content} />
      {link && (
        <div
          className={clsx(
            'mt-[2.75rem]',
            mobileAlignment === 'center' && 'max-md:flex max-md:justify-center'
          )}
        >
          <Link
            {...link}
            linkStyle="button-solid"
            hasIcon={true}
          />
        </div>
      )}
    </div>
    <div
      className={clsx(
        'relative -mx-3 sm:-mx-6 -mb-7 md:ml-0 max-sm:aspect-[272/204] max-md:aspect-[648/486] md:w-full md:-my-7 flex-1'
      )}
    >
      <Image
        className={clsx(
          'absolute top-0 md:top-1/2 left-0 bottom-0 md:-translate-y-1/2 w-full md:h-full md:overflow-visible'
        )}
        image={image}
      />
    </div>
  </div>
)

const StartATrialVertical = ({
  content,
  heading,
  image,
  link,
}: {
  image?: ImageType
} & StartATrialProps) => (
  <div className="flex flex-col gap-4">
    <div className={clsx('z-content max-w-cols8 mx-auto text-center')}>
        <Heading
          className={clsx(
            'type-title-t7 sm:type-title-t6 md:type-title-t6 mb-3 md:!max-w-[48rem] mx-auto'
          )}
          heading={heading}
        />
      <Text className="text-body-muted max-w-[32rem]" content={content} />
      {link && (
        <div className={clsx('mt-[2.75rem]')}>
          <Link
            {...link}
            linkStyle="button-solid"
            hasIcon={true}
          />
        </div>
      )}
    </div>
    <div
      className={clsx(
        'relative -mx-3 sm:-mx-6 aspect-[1216/280] w-full -my-7 flex-1'
      )}
    >
      <Image
        className={clsx(
          'absolute top-0 left-0 bottom-0 w-full overflow-visible'
        )}
        image={image}
      />
    </div>
  </div>
)

const StartATrial = ({
  backgroundImage,
  className,
  classNames,
  content = [],
  desktopOrientation = 'vertical',
  heading = '',
  link,
  mobileAlignment = 'center',
}: StartATrialProps) => {
  // Normalizar el link: si viene de Sanity puede tener internal con path/slug
  const normalizedLink = link
    ? {
        ...link,
        url:
          link.url ||
          (link as any).internal?.path ||
          ((link as any).internal?.slug
            ? `/${(link as any).internal.slug}`
            : undefined),
        condition: link.condition || 'internal',
      }
    : null

  if (!normalizedLink || !normalizedLink.url) {
    return null
  }

  const StartATrialComponent =
    desktopOrientation === 'horizontal'
      ? StartATrialHorizontal
      : StartATrialVertical

  return (
    <div className={clsx('relative', className, classNames?.root)}>
      <div
        className={clsx(
          'bg-surface-neutral-medium/30 rounded-xl overflow-hidden border-border-muted relative backdrop-blur-lg py-7 px-3 sm:px-6',
          classNames?.inner
        )}
      >
        <StartATrialComponent
          content={content}
          heading={heading}
          image={backgroundImage}
          link={normalizedLink}
          mobileAlignment={mobileAlignment}
        />
      </div>
      <div className="z-under bg-[radial-gradient(ellipse_at_center,_#372A6E_0%,_rgba(0,0,0,0)_75%)] absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 aspect-[1/1] h-[75%]" />
    </div>
  )
}

export default StartATrial

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const StartATrialComponent = dynamic(() => import('@/components/StartATrial'))

const StartATrial = ({
  value,
}: {
  value?: {
    backgroundImage?: any
    content?: any
    desktopOrientation?: 'horizontal' | 'vertical'
    heading?: string
    link?: any
  }
}) => {
  if (!value) {
    return null
  }

  // Normalizar el link: puede venir de Sanity con internal reference
  let normalizedLink = value.link
  if (value.link) {
    const internal = (value.link as any).internal
    normalizedLink = {
      ...value.link,
      url:
        value.link.url ||
        internal?.path ||
        (internal?.slug ? `/${internal.slug}` : undefined),
      condition: value.link.condition || 'internal',
    }
  }

  // El componente requiere link con url para renderizarse
  if (!normalizedLink || !normalizedLink.url) {
    return null
  }

  return (
    <div className={clsx('relative my-8 first:mt-0 last:mb-0')}>
      <StartATrialComponent
        backgroundImage={value?.backgroundImage}
        content={value?.content || []}
        desktopOrientation={value?.desktopOrientation}
        heading={value?.heading || ''}
        link={normalizedLink}
      />
    </div>
  )
}

export default StartATrial


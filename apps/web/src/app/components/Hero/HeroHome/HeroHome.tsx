'use client'

import type { ImageType, LinkType, PortableTextBlock } from '@types'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import popupGraph from '@public/lottie/popup-graph.json'
import popupWriteAi from '@public/lottie/popup-write-with-ai.json'
import { motion, spring, useAnimate } from 'motion/react'
import { Links } from '@/components/Link'
import Lottie from '@/components/Lottie'
import Video from '@/components/Video'
import PortableText, {
  defaultBlockStyles,
  type BlockStylesType,
} from '@/components/PortableText'
import HeroGradient from '../HeroGradient/HeroGradientHome'
import { useProcessLinksWithVerifone } from '@/hooks/useProcessLinksWithVerifone'

export interface HeroHomeProps {
  className?: string
  classNames?: {
    media?: string
    root?: string
  }
  content?: string | PortableTextBlock[]
  graph?: ImageType
  heading?: string | PortableTextBlock[]
  links?: LinkType[]
}

const video = {
  controls: false,
  loop: false,
  video: {
    condition: 'url',
    height: 1118,
    thumbnail: 'https://customer-4yowinxxlegi56v8.cloudflarestream.com/7b6ee0fce0d1988bb99cf21d125a3b15/thumbnails/thumbnail.jpg',
    url: 'https://customer-4yowinxxlegi56v8.cloudflarestream.com/7b6ee0fce0d1988bb99cf21d125a3b15/manifest/video.m3u8',
    width: 1978,
  }
}

const graph = {
  advancedConfig: {
    controlBar: true
  },
  autoplay: true,
  condition: 'lottie',
  loader: false,
  loop: false,
  lottie: {
    animationName: 'graph',
    file: popupGraph,
    frameRate: 30,
    frames: 450,
    height: 236,
    width: 314
  }
}

// Evita <h1> dentro de <h1>: en el hero el título va en un solo <h1>, el PT usa span
const d = defaultBlockStyles
const heroHeadingBlockStyles: BlockStylesType = {
  ...defaultBlockStyles,
  'h1-home': { className: d['h1-home']!.className, tag: 'span' },
  'h1-hero': { className: d['h1-hero']!.className, tag: 'span' },
  'h2-hero': { className: d['h2-hero']!.className, tag: 'span' },
  'h3-hero': { className: d['h3-hero']!.className, tag: 'span' },
  'h4-hero': { className: d['h4-hero']!.className, tag: 'span' },
  h1: { className: d.h1!.className, tag: 'span' },
  h2: { className: d.h2!.className, tag: 'span' },
  h3: { className: d.h3!.className, tag: 'span' },
  h4: { className: d.h4!.className, tag: 'span' },
  h5: { className: d.h5!.className, tag: 'span' },
  h6: { className: d.h6!.className, tag: 'span' },
}

const writeWithAi = {
  advancedConfig: {
    controlBar: false
  },
  autoplay: true,
  condition: 'lottie',
  loader: false,
  loop: false,
  lottie: {
    animationName: 'popUp',
    file: popupWriteAi,
    frameRate: 30,
    frames: 450,
    height: 62,
    width: 337
  }
}

const HeroHome = ({
  className,
  classNames,
  content,
  heading,
  links,
}: HeroHomeProps) => {
  const [playing, setPlaying] = useState(false)
  const [scope, animate] = useAnimate()

  const processedLinks = useProcessLinksWithVerifone(links)

  const handleOnReady = () => {
    setTimeout(() => setPlaying(true), 1200)
  }

  useEffect(() => {
    const enterAnimation = async () => {
      animate('h1', { opacity: 1, y: [-24, 0] }, { bounce: 0.2, duration: 0.8, type: 'spring' })
      animate('p', { opacity: 1, y: [-24, 0] }, { bounce: 0.2, delay: 0.2, duration: 0.8, type: 'spring' })
      animate('.frame', {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        y: '0%',
        z: 0
      }, { bounce: 0.2, delay: 0.6, duration: 2, type: spring })
      if (scope.current?.querySelector('#links')) {
        animate('#links', { opacity: 1, y: [-24, 0] }, { bounce: 0.2, delay: 0.4, duration: 0.8, type: 'spring' })
      }
    }
    setTimeout(() => enterAnimation(), 200)
  }, [])

  return (
    <div
      className={clsx(
        'box-pt box-px relative w-full overflow-hidden pt-1.5',
        className,
        classNames?.root
      )}
      ref={scope}
    >
      <div className="max-w-base z-content relative mx-auto flex w-full flex-col gap-2 px-2 text-center sm:gap-3">
        <h1 className="type-title-t7 sm:type-title-t5 md:type-title-t3 lg:type-title-t1 max-w-cols10 mx-auto w-full opacity-0">
          {Array.isArray(heading) && heading.length > 0 ? (
            <PortableText blockStyles={heroHeadingBlockStyles} content={heading} />
          ) : (
            typeof heading === 'string' ? heading : null
          )}
        </h1>
        <p className="type-body-md sm:type-body-lg max-w-cols8 mx-auto w-full opacity-0">
          {Array.isArray(content) && content.length > 0 ? (
            <PortableText content={content} />
          ) : (
            typeof content === 'string' ? content : null
          )}
        </p>
        {processedLinks && processedLinks.length > 0 && (
          <div
            className={clsx(
              'w-full opacity-0',
              '[&_form]:flex [&_form]:w-full [&_form]:max-w-full [&_form]:flex-wrap [&_form]:items-center [&_form]:justify-center [&_form]:gap-3 [&_form]:md:flex-nowrap',
              '[&_input]:!rounded-[40px] [&_input]:!border-0 [&_input]:!h-6 [&_input]:md:max-w-[20rem]',
              '[&_button]:!rounded-[40px]',
              '[&_.link-button-solid]:!rounded-[40px] [&_.link-button-outline]:!rounded-[40px] [&_.link-button-secondary]:!rounded-[40px]'
            )}
            id="links"
          >
            <Links
              className="flex w-full flex-wrap items-center justify-center gap-3 md:flex-nowrap"
              links={processedLinks}
            />
          </div>
        )}
      </div>
      <div className="max-w-cols10 box-mt relative mx-auto w-[87.5%]">
        <HeroGradient className="absolute left-1/2 top-0 z-[-10] max-w-none -translate-x-1/2 -translate-y-1/2 transform w-[237.85%]" />
        <motion.div style={{ perspective: 750, transformStyle: 'preserve-3d' }}>
          <motion.div
            className="frame overflow-hidden rounded-t-[0.375rem] [box-shadow:_0px_2.75px_64.55px_0px_#A08FFBCC] bg-[#161819]"
            initial={{ rotateX: 45, scale: 1.1, y: '-40%', z: -30 }}
            key="card"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Video {...video} className="z-content" onReady={handleOnReady} playing={playing} priority />
          </motion.div>
        </motion.div>
        {playing && writeWithAi && (
          <motion.div className="z-above-content absolute left-[calc(63/1008*-100%)] top-[23.5%] w-[calc(345/1008*100%)]">
            <Lottie {...writeWithAi} />
          </motion.div>
        )}
        {playing && graph && (
          <motion.div className="z-above-content absolute right-[calc(60/1008*-100%)] top-[40%] w-[calc(314/1008*100%)] overflow-hidden rounded-[calc(20/314*100%)]">
            <Lottie {...graph} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default HeroHome
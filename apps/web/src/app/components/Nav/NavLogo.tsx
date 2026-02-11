'use client'

import type { AnimationItem, AnimationSegment } from 'lottie-web'
import React, { useEffect, useRef, useState, type ComponentType } from 'react'
import clsx from 'clsx'
import LogoLottie from '@public/Leadpages-Logo-V2.json'
import { navStore } from '@/stores/navStore'

// LogoLottie segments
const markIn: AnimationSegment = [0, 30]
const typeIn: AnimationSegment = [30, 60]
const fullLogoInitialize: AnimationSegment = [0, 60]
const fullLogoHoverIn: AnimationSegment = [60, 75]
const fullLogoHoverOut: AnimationSegment = [75, 90]
const typeOut: AnimationSegment = [90, 120]
const markHoverIn: AnimationSegment = [120, 135]
const markHoverOut: AnimationSegment = [135, 150]

const NavLogo = () => {
  const lottie = useRef<AnimationItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [Player, setPlayer] = useState<ComponentType<any> | null>(null)
  const isSticky = navStore((state) => state.isSticky)

  useEffect(() => {
    import('@lottiefiles/react-lottie-player').then((mod) => {
      setPlayer(() => mod.Player)
    })
  }, [])

  const getInstance = (instance: AnimationItem) => {
    lottie.current = instance
    setIsLoading(false)
  }

  const mouseEnter = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return
    }

    const frames = isSticky ? markHoverIn : fullLogoHoverIn
    lottie.current.playSegments(frames, false)
  }

  const mouseLeave = () => {
    if (!lottie?.current) {
      console.error('Lottie not initialized. Lottie:', lottie?.current)
      return
    }

    const frames = isSticky ? markHoverOut : fullLogoHoverOut
    lottie.current.playSegments(frames, false)
  }

  useEffect(() => {
    if (isLoading) return

    lottie?.current?.playSegments(isSticky ? markIn : fullLogoInitialize, true)
  }, [isLoading])

  useEffect(() => {
    if (isLoading) return

    const frames = isSticky ? typeOut : typeIn
    lottie?.current?.playSegments(frames, true)
  }, [isSticky])

  return (
      <div
        className={
          clsx(
            "relative cursor-pointer h-[2rem] transition-all ease-[cubic-bezier(0.68, -0.55, 0.35, 3.00)] [&_svg_*]:fill-current",
            "[&>div]:absolute [&>div]:top-0 [&>div]:left-0 [&>div]:bottom-0 [&>div]:w-[9.5rem]",
            isSticky ? "w-[2rem] delay-500 duration-[400ms]" : "w-[9.5rem] delay-0 duration-300",
          )
        }
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {Player && (
          <Player
            autoplay={false}
            id={`nav-logo`}
            keepLastFrame
            lottieRef={(instance: AnimationItem) => getInstance(instance)}
            src={LogoLottie}
          />
        )}
    </div>
  )
}

export default React.memo(NavLogo)

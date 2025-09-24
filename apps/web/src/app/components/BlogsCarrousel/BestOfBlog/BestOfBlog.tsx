'use client'

import type { BestOfBlogItem, BestOfBlogProps } from '../BestOfBlog.types'
import { useCallback, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from '@/components/Link'
import { defaultLargeBlockStyles } from '@/components/PortableText'
import Text from '@/components/Text'
import BlogFeatureCard from '../BlogFeatureCard'
import BlogNextPeek from '../BlogNextPeek'

type Props = {
  autoPlay?: boolean
  intervalMs?: number
} & BestOfBlogProps

export default function BestOfBlog({
  autoPlay = true,
  className,
  cta,
  heading,
  intervalMs = 7000,
  items,
  subheading,
}: Props) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const count = items.length
  if (!count) return null

  const nextIndex = useMemo(() => (current + 1) % count, [current, count])

  const goTo = useCallback(
    (i: number) => {
      setCurrent(((i % count) + count) % count)
    },
    [count]
  )

  const goNext = useCallback(() => goTo(current + 1), [current, goTo])
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo])

  // AUTOPLAY
  useEffect(() => {
    if (!autoPlay || paused || count <= 1) return
    const id = setInterval(() => setCurrent((c) => (c + 1) % count), intervalMs)
    return () => clearInterval(id)
  }, [autoPlay, paused, count, intervalMs])

  // Teclado (← →) cuando la sección tiene foco
  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    }
  }

  const renderDots = (arr: BestOfBlogItem[]) => (
    <div className="flex items-center gap-1">
      {arr.map((_, i) => {
        const active = i === current
        return (
          <button
            aria-current={active ? 'true' : undefined}
            aria-label={`Go to slide ${i + 1}`}
            className="inline-flex h-4 w-1.5 items-center justify-center rounded-full p-0 m-0 bg-transparent border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            key={i}
            onClick={() => goTo(i)}
            type="button"
          >
            <span
              aria-hidden
              className={clsx(
                'block rounded-full transition-colors',
                active ? 'bg-white' : 'bg-white/40 hover:bg-white/55'
              )}
              style={{ height: 10, width: 10 }}
            />
          </button>
        )
      })}
    </div>
  )

  // Header (mismo look que veníamos usando)
  const headerBlocks = useMemo(() => {
    const blocks: any[] = []
    if (heading) {
      blocks.push({
        _type: 'block',
        children: [{ _type: 'span', text: String(heading) }],
        markDefs: [],
        style: 'h2',
      })
    }
    if (subheading) {
      blocks.push({
        _type: 'block',
        children: [{ _type: 'span', text: String(subheading) }],
        markDefs: [],
        style: 'normal',
      })
    }
    return blocks
  }, [heading, subheading])

  return (
    <section
      aria-labelledby="best-of-blog-heading"
      className={clsx(
        'relative w-full px-4 py-8 md:py-12',
        className
      )}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      tabIndex={0}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <Text
                as="div"
                blockStyles={defaultLargeBlockStyles}
                className="space-y-2"
                classNames={{
                  h2: 'font-display font-extrabold tracking-tight text-white leading-[1.05] text-[clamp(2.25rem,5.5vw,3.75rem)]',
                  normal: 'text-base md:text-lg text-white/70',
                }}
                content={headerBlocks as any}
                id="best-of-blog-heading"
              />
              {count > 1 && <div className="mt-4">{renderDots(items)}</div>}
            </div>

            {cta?.href && cta?.label && (
              <div className="md:pt-1.5">
                <Link
                  className="rounded-md"
                  linkStyle="button-solid"
                  target={cta.target === '_blank' ? true : undefined}
                  url={cta.href}
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_clamp(9rem,18vw,16rem)] lg:grid-cols-[minmax(0,1fr)_clamp(10rem,16vw,18rem)] items-stretch gap-3">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="h-full"
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: 8 }}
                key={current}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <BlogFeatureCard className="h-full" item={items[current]!} />
              </motion.div>
            </AnimatePresence>

            <div className="hidden md:flex items-stretch">
              <AnimatePresence initial={false}>
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full h-full"
                  exit={{ opacity: 0, x: -12 }}
                  initial={{ opacity: 0, x: 12 }}
                  key={`peek-${nextIndex}`}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BlogNextPeek
                    className="w-full h-full"
                    nextItem={items[nextIndex]!}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {count > 1 && (
            <>
              <button
                aria-label="Previous"
                className={clsx(
                  'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1',
                  'inline-flex h-10 w-10 items-center justify-center rounded-md',
                  'bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20',
                  'text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                  'md:h-11 md:w-11'
                )}
                onClick={goPrev}
                type="button"
              >
                <span aria-hidden>←</span>
              </button>

              <button
                aria-label="Next"
                className={clsx(
                  'absolute right-0 top-1/2 -translate-y-1/2 translate-x-1',
                  'inline-flex h-10 w-10 items-center justify-center rounded-md',
                  'bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20',
                  'text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                  'md:h-11 md:w-11'
                )}
                onClick={goNext}
                type="button"
              >
                <span aria-hidden>→</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

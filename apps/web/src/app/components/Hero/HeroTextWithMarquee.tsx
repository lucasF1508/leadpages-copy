import type { HeroBaseProps } from './HeroBase'
import type { MarqueeProps } from '@/components/Marquee'
import React from 'react'
import Marquee from '@/components/Marquee'
import HeroBase from './HeroBase'

export interface HeroTextWithMarqueeProps extends HeroBaseProps {
  marquee?: MarqueeProps
}

const HeroTextWithMarquee = ({
  content,
  heading,
  label,
  links,
  marquee,
}: HeroTextWithMarqueeProps) => (
  <>
    <HeroBase content={content} heading={heading} label={label} links={links} />
    {marquee && (
      <div className="overflow-hidden">
        <Marquee {...marquee} maxHeight={64} />
      </div>
    )}
  </>
)

export default HeroTextWithMarquee

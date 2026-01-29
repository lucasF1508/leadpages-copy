import type { HeroHomeProps } from './HeroHome'
import type { HeroPricingProps } from './HeroPricing/HeroPricing'
import type { HeroWithMediaProps } from './HeroWithMedia'
import HeroBanner from './HeroBanner'
import HeroBase from './HeroBase'
import HeroBlog from './HeroBlog'
import HeroComparisons from './HeroComparisons'
import HeroHome from './HeroHome'
import HeroPricing from './HeroPricing'
import HeroSimple from './HeroSimple'
import HeroTemplate from './HeroTemplate'
import HeroTextWithMarquee from './HeroTextWithMarquee'
import HeroWithMedia from './HeroWithMedia'
import { HeroHomeNewProps } from './HeroHome'
import HeroHomeNew from './HeroHome/HeroHomeNew'

interface HeroProps {
  hero: (HeroHomeProps | HeroPricingProps | HeroWithMediaProps | HeroHomeNewProps) & any[]
}

// TODO Expand as more Hero types are added.
const Hero = ({ hero }: HeroProps) => {
  if (!hero) return null
  const [heroProps] = Array.isArray(hero) ? hero : [hero]

  switch (heroProps?._type) {
    case 'heroBase':
      return <HeroBase {...heroProps} />
    case 'heroBlog':
      return <HeroBlog {...heroProps} />
    case 'heroComparisons':
      return <HeroComparisons {...heroProps} />
    case 'heroHome':
      return <HeroHome {...heroProps} />
    case 'heroPricing':
      return <HeroPricing {...heroProps} />
    case 'heroSimple':
      return <HeroSimple {...heroProps} />
    case 'heroBanner':
      return <HeroBanner {...heroProps} />
    case 'heroTemplate':
      return <HeroTemplate {...heroProps} />
    case 'heroTextWithMarquee':
      return <HeroTextWithMarquee {...heroProps} />
    case 'heroHomeNew':
      return <HeroHomeNew {...heroProps} />
    default:
      return <HeroWithMedia {...heroProps} />
  }
}

export default Hero
export type { HeroHomeProps, HeroProps }

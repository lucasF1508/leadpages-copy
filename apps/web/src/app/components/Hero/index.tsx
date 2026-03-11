import type { HeroPricingProps } from './HeroPricing/HeroPricing'
import type { HeroWithMediaProps } from './HeroWithMedia'
import HeroBanner from './HeroBanner'
import HeroBase from './HeroBase'
import HeroBlog from './HeroBlog'
import HeroComparisons from './HeroComparisons'
import HeroHome, { HeroHomeNew, type HeroHomeNewProps, type HeroHomeProps } from './HeroHome'
import HeroLandingGenerator, {
  type HeroLandingGeneratorProps,
} from './HeroLandingGenerator'
import HeroInspiration, { type HeroInspirationProps } from './HeroInspiration'
import HeroPageAnalyzer from './HeroPageAnalyzer'
import HeroPlatformPage, { type HeroPlatformPageProps } from './HeroPlatformPage'
import HeroPricing from './HeroPricing'
import HeroSimple from './HeroSimple'
import HeroTemplate from './HeroTemplate'
import HeroTextWithMarquee from './HeroTextWithMarquee'
import HeroWithMedia from './HeroWithMedia'

interface HeroProps {
  hero: (
    | HeroHomeNewProps
    | HeroHomeProps
    | HeroInspirationProps
    | HeroLandingGeneratorProps
    | HeroPlatformPageProps
    | HeroPricingProps
    | HeroWithMediaProps
  ) & any[]
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
    case 'heroHomeNew':
      return <HeroHomeNew {...heroProps} />
    case 'heroInspiration':
      return <HeroInspiration {...heroProps} />
    case 'heroLandingGenerator':
      return <HeroLandingGenerator {...heroProps} />
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
    case 'heroPageAnalyzer':
      return <HeroPageAnalyzer {...heroProps} />
    case 'heroPlatformPage':
      return <HeroPlatformPage {...heroProps} />
    default:
      return <HeroWithMedia {...heroProps} />
  }
}

export default Hero
export type { HeroHomeProps, HeroProps }

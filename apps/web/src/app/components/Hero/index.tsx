import type { HeroHomeProps } from './HeroHome'
import HeroHome from './HeroHome'
import HeroWithMedia from './HeroWithMedia'
import { HeroWithMediaProps } from './HeroWithMedia'

interface HeroProps {
  hero: (HeroHomeProps | HeroWithMediaProps) & any[]
}

// TODO Expand as more Hero types are added.
const Hero = ({ hero }: HeroProps) => {
  if (!hero) return null
  const [heroProps] = Array.isArray(hero) ? hero : [hero]

  switch (heroProps?._type) {
    case 'heroHome':
      return <HeroHome {...heroProps} />
    default:
      return <HeroWithMedia {...heroProps} />
  }
}

export default Hero
export type { HeroHomeProps, HeroProps }

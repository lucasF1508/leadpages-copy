import type { HeroHomeProps } from './HeroHome'
import HeroHome from './HeroHome'

interface HeroProps {
  hero: HeroHomeProps
}

// TODO Expand as more Hero types are added.
const Hero = ({ hero }: HeroProps) => {
  if (!hero) return null
  const [heroProps] = Array.isArray(hero) ? hero : [hero]

  switch (heroProps?._type) {
    case 'heroHome':
    default:
      return <HeroHome {...heroProps} />
  }
}

export default Hero
export type { HeroHomeProps, HeroProps }

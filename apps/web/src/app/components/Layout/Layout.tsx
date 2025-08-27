import type { HeroProps } from '@/components/Hero'
import type { RackProps } from '@/components/Rack'
import Hero from '@/components/Hero'
import Rack from '@/components/Rack'

export interface LayoutProps {
  data?: {
    components?: RackProps['components']
    hero?: HeroProps[]
  }
}

const Layout = ({ data }: LayoutProps) => {
  const { components, hero } = data || {}

  return (
    <>
      {!!hero?.length && <Hero hero={hero} />}
      {!!components?.length && <Rack components={components} />}
    </>
  )
}

export default Layout

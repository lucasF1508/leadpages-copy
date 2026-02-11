'use client'

import React, { createContext, useContext, useState } from 'react'
import type { HeroProps } from '@/components/Hero'
import type { RackProps } from '@/components/Rack'
import Hero from '@/components/Hero'
import Rack from '@/components/Rack'

// Context para compartir el estado de mobile/desktop entre Hero y Components
export const DeviceViewContext = createContext<{
  isMobile: boolean
  setIsMobile: (value: boolean) => void
}>({
  isMobile: false,
  setIsMobile: () => {},
})

export const useDeviceView = () => useContext(DeviceViewContext)

export interface LayoutProps {
  data?: {
    components?: RackProps['components']
    hero?: HeroProps[]
  }
}

const Layout = ({ data }: LayoutProps) => {
  const { components, hero } = data || {}
  const [isMobile, setIsMobile] = useState(false)

  return (
    <DeviceViewContext.Provider value={{ isMobile, setIsMobile }}>
      {!!hero?.length && <Hero hero={hero} />}
      {!!components?.length && <Rack components={components} />}
    </DeviceViewContext.Provider>
  )
}

export default Layout

import { SpeedInsights as SpeedInsightsDefault } from '@vercel/speed-insights/react'
import { useRouter } from 'next/router'

const SpeedInsights = () => {
  const router = useRouter()
  return <SpeedInsightsDefault route={router.pathname} />
}

export default SpeedInsights

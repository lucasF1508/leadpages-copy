import { useRouter } from 'next/router'
import Script from 'next/script'

import OptimizeAntiFlicker from './OptimizeAntiFlicker'
import OptimizeScript from './OptimizeScript'

const controlSplitTestPaths = []
const variantSplitTestPaths = []
export const currentSplitTestPaths = [
  ...controlSplitTestPaths,
  ...variantSplitTestPaths,
]

const Optimize = () => {
  if (currentSplitTestPaths.length === 0) {
    return null
  }

  const { asPath } = useRouter()
  const [value] = asPath.split('?')
  const needsAntiFlicker = controlSplitTestPaths.indexOf(value) !== -1
  const needsOptimize = currentSplitTestPaths.indexOf(value) !== -1

  return (
    <>
      <Script id="dataLayer">window.dataLayer = window.dataLayer || []</Script>
      {needsAntiFlicker && <OptimizeAntiFlicker />}
      {needsOptimize && <OptimizeScript />}
    </>
  )
}

export default Optimize

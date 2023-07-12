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
  const { asPath } = useRouter()
  const needsAntiFlicker = controlSplitTestPaths.indexOf(asPath) !== -1
  const needsOptimize = currentSplitTestPaths.indexOf(asPath) !== -1

  return (
    <>
      <Script id="dataLayer">window.dataLayer = window.dataLayer || []</Script>
      {needsAntiFlicker && <OptimizeAntiFlicker />}
      {needsOptimize && <OptimizeScript />}
    </>
  )
}

export default Optimize

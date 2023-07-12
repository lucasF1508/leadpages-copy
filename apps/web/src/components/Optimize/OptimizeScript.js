import Script from 'next/script'

const { NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID } = process.env

const OptimizeScript = () => (
  <>
    {/* optimize Init */}
    {NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID && (
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=${NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID}`}
      />
    )}
  </>
)

export default OptimizeScript

import Head from 'next/head'

const { NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID } = process.env

const OptimizeScript = () => (
  <Head>
    {/* optimize Init */}
    {NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID && (
      // eslint-disable-next-line @next/next/no-sync-scripts
      <script
        src={`https://www.googleoptimize.com/optimize.js?id=${NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID}`}
      />
    )}
  </Head>
)

export default OptimizeScript

// components
import SEO from '@legacy/components/SEO'
import Head from 'next/head'

const Custom404 = () => (
  <>
    <SEO
      title="This page doesn’t exist [404 Error]"
      description="This page helps visitors to a broken link find their way home again. Use Leadpages for your 404 error pages."
      ogtitle="Sweet 404 Page from Leadpages"
      ogdescription="Do you lose traffic from bad links? Here’s an example 404 Error page from Leadpages to help visitors find what they’re looking for."
    />
    <Head>
      <meta
        property="og:url"
        content="https://lps.lpages.co/404-page-error-not-found/"
      />
      <link
        rel="opengraph"
        href="https://lps.lpages.co/404-page-error-not-found/"
      />
      <script src="//lps.lpages.co/_/js/404-page-error-not-found/" async />
    </Head>
  </>
)

export default Custom404

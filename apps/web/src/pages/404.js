// components
import Head from 'next/head'

const Custom404 = () => (
  <Head>
    <meta
      property="og:url"
      content="https://lps.lpages.co/404-page-error-not-found/"
    />
    <meta property="og:title" content="Sweet 404 Page from Leadpages" />
    <meta
      property="og:description"
      content="Do you lose traffic from bad links? Here’s an example 404 Error page from Leadpages to help visitors find what they’re looking for."
    />
    <link
      rel="opengraph"
      href="https://lps.lpages.co/404-page-error-not-found/"
    />
    <script src="//lps.lpages.co/_/js/404-page-error-not-found/" async />
  </Head>
)

export async function getStaticProps() {
  return {
    props: {
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            seoTitle: `This page doesn’t exist [404 Error]`,
            seoDescription: `This page helps visitors to a broken link find their way home again. Use Leadpages for your 404 error pages.`,
          },
        },
      ],
    },
  }
}

export default Custom404

import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'

const SEO = ({
  title,
  description,
  image,
  pathname,
  keywords,
  publishDate,
  modifyDate,
  ogtitle,
  ogdescription,
  ogimage,
  ogurl,
  ogtype,
  canonical,
  noIndex = false,
}) => {
  const siteUrl = 'TEST siteUrl'
  const twitterUsername = 'TEST twitterUsername'

  const seo = {
    title,
    description,
    image: image ? `${image}` : null,
    keywords,
    url: `${siteUrl}${pathname || '/'}`,
    canonical: canonical ? `${siteUrl}${canonical}` : '',
    noIndex,
  }
  return (
    <Head>
      {/* STANDARD METADATA */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {/* dates are in ISO8601 format with time in UTC, ie 2021-01-01T00:00:00+0000 */}
      {publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {modifyDate && (
        <meta property="article:modified_time" content={modifyDate} />
      )}

      {/* OPEN GRAPH METADATA FOR FACEBOOK, ET AL. (https://bit.ly/3cpW1GB) */}
      <meta property="og:title" content={ogtitle || seo.title} />
      <meta
        property="og:description"
        content={ogdescription || seo.description}
      />
      <meta property="og:image" content={ogimage || seo.image} />
      {seo.url && <meta property="og:url" content={ogurl || seo.url} />}
      {ogtype && <meta property="og:type" content={ogtype} />}

      {/* OPEN GRAPH METADATA FOR TWITTER (https://bit.ly/2yi67dU) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogtitle || seo.title} />
      <meta
        name="twitter:description"
        content={ogdescription || seo.description}
      />
      <meta name="twitter:image" content={ogimage || seo.image} />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {/* prevents webcrawlers from indexing the page (https://bit.ly/3cnArCt) */}
      {seo.noIndex && <meta name="robots" content="noindex" />}
      {/* specifies a canonical page (https://bit.ly/2K8ohBD) */}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
    </Head>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  keywords: PropTypes.string,
  publishDate: PropTypes.string,
  modifyDate: PropTypes.string,
  ogtitle: PropTypes.string,
  ogdescription: PropTypes.string,
  ogimage: PropTypes.string,
  ogurl: PropTypes.string,
  ogtype: PropTypes.string,
  noIndex: PropTypes.bool,
  canonical: PropTypes.string,
}

SEO.defaultProps = {
  title: 'Leadpages | Website & Landing Page Software Small Businesses',
  description:
    'A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated.',
  image: 'https://static.leadpages.com/images/og/og-homepage.jpg',
  pathname: null,
  keywords:
    'leadpages, free trial, landing page builder, pop-ups, form builder, free trial, lead pages, landing pages, alert bars, sticky bars, free',
  publishDate: '',
  modifyDate: '',
  ogtitle: '',
  ogdescription: '',
  ogimage: '',
  ogurl: '',
  ogtype: '',
  noIndex: false,
  canonical: '',
}

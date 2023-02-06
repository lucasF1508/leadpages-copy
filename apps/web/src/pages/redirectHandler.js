import React from 'react'
import legacyRedirects from '@public/indices/legacySiteRedirects.json'
import blogRedirects from '@public/indices/legacyBlogRedirects.json'

const redirects = { ...blogRedirects, ...legacyRedirects }

const Page = ({ errorCode }) => <div>`${errorCode}`</div>

export const getServerSideProps = async (context) => {
  const { query } = context
  const path = query?.path?.join('/')

  if (Object.keys(redirects).includes(path)) {
    const rule = redirects[path]

    return {
      redirect: {
        destination: rule?.destination || rule,
        statusCode: rule?.statusCode || 308,
      },
    }
  }

  return {
    notFound: true,
  }
}

export default Page

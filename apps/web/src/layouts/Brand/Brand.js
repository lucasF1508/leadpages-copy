import React from 'react'
// components
// import BrandPageContent from '@legacy/components/resources/BrandPageContent'
// import BrandPageHeader from '@legacy/components/headers/BrandPageHeader'
// import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'

const BrandPage = () => (
  <>
    <SEO
      pathname="/product/brand"
      title="Guide to the Leadpages Brand"
      description="Our brand is both our personality and our promise. Use these guidelines whenever you work with the Leadpages brand, logo, content, and trademark."
      image="https://static.leadpages.com/images/og/og-brand.jpg"
    />
    {/* <BrandPageHeader />
    <BrandPageContent /> */}
    {/* <ReadyToGrow
      title="Leadpages brand Assets"
      headline="Jump on the brand wagon"
      caption="Here’s all the beauty of our brand boxed up neatly and ready for download."
      showCTA={false}
      showDownloader
    /> */}
  </>
)

export default BrandPage

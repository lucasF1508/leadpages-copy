import React from 'react'
// components
import BrandPageContent from '@legacy/components/resources/BrandPageContent'
import BrandPageHeader from '@legacy/components/headers/BrandPageHeader'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'

const BrandPage = () => (
  <>
    <BrandPageHeader />
    <BrandPageContent />
    <ReadyToGrow
      title="Leadpages brand Assets"
      headline="Jump on the brand wagon"
      caption="Here’s all the beauty of our brand boxed up neatly and ready for download."
      showCTA={false}
      showDownloader
    />
  </>
)

export default BrandPage

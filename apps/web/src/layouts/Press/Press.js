import React from 'react'
// components
import BrandAssets from '../../legacy/components/press/BrandAssets'
import PressArticles from '../../legacy/components/press/PressArticles'
import Layout from '../../legacy/components/Layout'
import OurStory from '../../legacy/components/press/OurStory'
// import PressHeader from '../../legacy/components/headers/PressHeader'
import ReadyToGrow from '../../legacy/components/product/ReadyToGrow'
// import SEO from '../../legacy/components/SEO'
import SpeakingInquiries from '../../legacy/components/press/SpeakingInquiries'
// import Stats from '../../legacy/components/press/Stats'
// import ThreeColumn from '../../legacy/components/press/ThreeColumn'

const Press = () => (
  <Layout>
    {/* <SEO
      pathname="/press"
      title="Press & Media Kit | Leadpages"
      description="Don't want to miss anything at Leadpages? Keep updated with our announcements, press releases, and media coverage right here."
    /> */}
    {/* <PressHeader /> */}
    <OurStory />
    <PressArticles />
    {/* <ThreeColumn /> */}
    <BrandAssets />
    <SpeakingInquiries />
    {/* <Stats /> */}
    <ReadyToGrow />
  </Layout>
)

export default Press

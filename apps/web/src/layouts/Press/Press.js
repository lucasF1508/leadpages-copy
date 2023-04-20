import React from 'react'
// components
import BrandAssets from '@legacy/components/press/BrandAssets'
import PressArticles from '@legacy/components/press/PressArticles'
import OurStory from '@legacy/components/press/OurStory'
import PressHeader from '@legacy/components/headers/PressHeader'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SpeakingInquiries from '@legacy/components/press/SpeakingInquiries'
import Stats from '@legacy/components/press/Stats'
import ThreeColumn from '@legacy/components/press/ThreeColumn'

const Press = () => (
  <>
    <PressHeader />
    <OurStory />
    <PressArticles />
    <ThreeColumn />
    <BrandAssets />
    <SpeakingInquiries />
    <Stats />
    <ReadyToGrow />
  </>
)

export default Press

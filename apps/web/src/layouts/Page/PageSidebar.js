import React from 'react'
import { styled } from '@design'
import Hero from '@components/Hero'
import CTA from '@components/Cta'
import Rack from '@components/Rack'
import Pinion from '@components/Pinion'
import Text from '@components/Text'
import SidebarPage from '@components/Sidebar/SidebarPage'
import { withSidebar } from '@components/Sidebar/SidebarProvider'

const $SidebarPageContainer = styled('div', {
  '@>m': {
    d: 'grid',
    gridTemplateColumns: '$cols3 auto',
  },
})

const PageSidebar = ({ hero, content, cta, sidebarLinks, excerpt, title }) => {
  const { compareLogo } = excerpt || {}
  return (
    <>
      {hero && <Hero hero={hero} />}
      <$SidebarPageContainer>
        {sidebarLinks?.length && (
          <SidebarPage
            pageTitle={title}
            links={sidebarLinks}
            compareLogo={compareLogo}
            useScrollLink
          />
        )}
        <Rack>
          <Pinion maxWidth="content">
            <Text content={content} isPost={true} displayIds />
          </Pinion>
        </Rack>
      </$SidebarPageContainer>
      {cta && <CTA {...cta} />}
    </>
  )
}

export default withSidebar(PageSidebar)

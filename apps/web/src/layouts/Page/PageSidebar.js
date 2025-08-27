import React from 'react'
import { styled } from '@design'
import CTA from '@components/Cta'
import Hero from '@components/Hero'
import Pinion from '@components/Pinion'
import Rack from '@components/Rack'
import SidebarPage from '@components/Sidebar/SidebarPage'
import { withSidebar } from '@components/Sidebar/SidebarProvider'
import Text from '@components/Text'

const $SidebarPageContainer = styled('div', {
  mw: '$extended',
  mx: 'auto',

  '@>m': {
    box: [{ property: 'px' }],
    d: 'grid',
    gridTemplateColumns: '$cols3 auto',
  },
})

const $SidebarPinion = styled(Pinion, {
  '@>m': {
    pr: 0,
    pl: '$2',
  },
})

const PageSidebar = ({
  hero,
  content,
  cta,
  children,
  sidebarLinks,
  excerpt,
  title,
}) => {
  const { compareLogo } = excerpt || {}

  return (
    <>
      {hero && <Hero hero={hero} />}
      <$SidebarPageContainer>
        {sidebarLinks?.length ? (
          <SidebarPage
            compareLogo={compareLogo}
            links={sidebarLinks}
            pageTitle={title}
            // useScrollLink
          />
        ) : (
          <div></div>
        )}
        <Rack>
          <$SidebarPinion maxWidth="content">
            {children || (
              <Text content={content} displayIds usePostTokens={true} />
            )}
          </$SidebarPinion>
        </Rack>
      </$SidebarPageContainer>
      {cta && <CTA {...cta} />}
    </>
  )
}

export default withSidebar(PageSidebar)

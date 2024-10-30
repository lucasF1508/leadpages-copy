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
            pageTitle={title}
            links={sidebarLinks}
            compareLogo={compareLogo}
            // useScrollLink
          />
        ) : (
          <div></div>
        )}
        <Rack>
          <$SidebarPinion maxWidth="content">
            {children || (
              <Text content={content} usePostTokens={true} displayIds />
            )}
          </$SidebarPinion>
        </Rack>
      </$SidebarPageContainer>
      {cta && <CTA {...cta} />}
    </>
  )
}

export default withSidebar(PageSidebar)

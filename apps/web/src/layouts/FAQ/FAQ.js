import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@design'
// components
import Accordion from '@legacy/components/accordions/Accordion'
import FAQHeader from '@legacy/components/headers/FAQHeader'
import Layout from '@legacy/components/Layout'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
// images
import downArrow from '@legacy/assets/images/global/arrow_down_large.svg'
import close from '@legacy/assets/images/global/x_close.svg'
// data
import { faqPageData } from '@legacy/data/faq_data'

const OuterContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '$white',
  position: 'relative',
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 1,
  background: '$white',
})

const BodyContainer = styled('div', {
  display: 'flex',
  paddingTop: '3rem',
})

const MainContainer = styled('div', {
  maxWidth: '1140px',

  '@media (max-width: 768px)': {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    marginLeft: '35%',
    width: '65%',
    paddingRight: '4rem',
    paddingLeft: '4rem',
  },

  '@media (min-width: 993px)': {
    marginLeft: '30%',
    width: '70%',
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const SidebarContainer = styled('div', {
  position: 'absolute',
  top: '6rem',
  transition: 'position 0.3s ease',
  paddingRight: '4rem',
  marginLeft: '4rem',
  minWidth: '132px',
  maxWidth: '132px',
  borderRight: '1px solid rgba(15, 12, 9, 0.08)',

  '@media (max-width: 768px)': {
    display: 'none',
  },

  variants: {
    scrolled: {
      true: {
        position: 'fixed',
        top: '85px',
        transition: 'position 0.3s ease',
      },
    },
  },
})

const SidebarHeading = styled('div', {
  color: 'rgba(15, 12, 9, 0.5)',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  paddingBottom: '1rem',

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
  },
})

const FAQsMobileMenuContainer = styled('div', {
  display: 'none',
  position: 'fixed',
  top: '0px',
  width: '100%',
  zIndex: 1501,
  height: '72px',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  variants: {
    scrolled: {
      true: {
        '@media (max-width: 768px)': {
          display: 'block',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
})

const MainMenuFlexbox = styled('div', {
  marginTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
  display: 'flex',
  justifyContent: 'space-between',
})

const MainMenuHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const MainMenuIcon = styled('img', {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
})

const MainMenuSubmenu = styled('div', {
  zIndex: 150,
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
})

const SubmenuHeader = styled('div', {
  height: '72px',
  width: '100%',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
})

const SubmenuHeaderFlexbox = styled('div', {
  paddingTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
  display: 'flex',
  justifyContent: 'space-between',
})

const SubmenuHeaderHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const SubmenuHeaderIcon = styled('img', {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
})

const SubmenuContent = styled('div', {
  width: '100%',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  paddingTop: '1rem',
  paddingLeft: '2.5rem',
  paddingRight: '2.5rem',
  paddingBottom: '1rem',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
})

const SubmenuLink = styled('div', {
  marginBottom: '0.75rem',
  color: '$textAlt',

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
  },
})

const SidebarScrollLink = styled(ScrollLink, {
  '&.activeFAQsLink': {
    color: '$primary',
  },
})

const SubmenuScrollLink = styled(ScrollLink, {
  display: 'none',
  zIndex: 101,

  '&.activeFAQsSection': {
    display: 'block',
    transition: 'all 0.3s ease',
  },
})

const ListContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '6rem',

  '@<s': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
})

const FAQSection = styled('div', {
  marginTop: '3rem',
  paddingRight: '2%',
})

const Section = styled('div', {
  paddingTop: '1rem',
  width: '100%',
  paddingTop: '85px',
  marginTop: '-85px',
  marginBottom: '5.5rem',

  '@<m': {
    marginBottom: '6.25rem',
  },
})

const SectionTitle = styled('div', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  marginBottom: '24px',

  '@<s': {
    paddingBottom: '1rem',
  },

  '@>m': {
    marginBottom: '24px',
  },
})

const FAQPage = () => {
  const [FAQsSidebarScrolled, setFAQsSidebarScrolled] = useState(false)
  const [FAQsMainMenuScrolled, setFAQsMainMenuScrolled] = useState(false)
  const [showFAQsSubMenu, setShowFAQsSubMenu] = useState(false)

  const categories = []
  faqPageData.forEach((el) =>
    categories.indexOf(el.category) === -1 ? categories.push(el.category) : null
  )

  const toggleSubMenu = () => {
    setShowFAQsSubMenu(!showFAQsSubMenu)
  }

  const handleFAQsScroll = () => {
    const mainContainerTop = document
      .getElementById('maincontainer')
      .getBoundingClientRect().top
    const containerHeight = document.getElementById('container').scrollHeight
    const sidebarHeight = document.getElementById('sidebar').clientHeight
    const scrollOffset = containerHeight - sidebarHeight
    if (
      window.innerWidth > 768 &&
      mainContainerTop <= 92 &&
      window.scrollY < scrollOffset
    ) {
      setFAQsSidebarScrolled(true)
    } else if (
      window.innerWidth <= 768 &&
      window.scrollY > 323 &&
      window.scrollY < scrollOffset
    ) {
      setFAQsMainMenuScrolled(true)
    } else {
      setFAQsSidebarScrolled(false)
      setFAQsMainMenuScrolled(false)
      setShowFAQsSubMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleFAQsScroll)
    return () => window.removeEventListener('scroll', handleFAQsScroll)
  })

  return (
    <>
      <SEO
        pathname="/faq"
        title="Get Answers to All Your Questions About Leadpages"
        description="Browse all of Leadpages frequently asked questions and get answers to and insight about landing pages, free trials, integrations, billing, and more."
      />
      <FAQHeader />
      <OuterContainer id="container">
        <InnerContainer>
          <SidebarContainer
            id="sidebar"
            scrolled={FAQsSidebarScrolled}
            className={FAQsSidebarScrolled ? 'FAQsSidebarScrolled' : ''}
          >
            {categories.map((item) => (
              <SidebarHeading key={item}>
                <SidebarScrollLink
                  activeClass="activeFAQsLink"
                  to={item}
                  spy
                  smooth
                  duration={500}
                >
                  {item}
                </SidebarScrollLink>
              </SidebarHeading>
            ))}
          </SidebarContainer>
          <FAQsMobileMenuContainer
            scrolled={FAQsMainMenuScrolled}
            className={FAQsMainMenuScrolled ? 'FAQsMobileMenuScrolled' : ''}
            onClick={toggleSubMenu}
          >
            <MainMenuFlexbox>
              <MainMenuHeading>
                {categories.map((item) => (
                  <SubmenuScrollLink
                    key={item}
                    activeClass="activeFAQsSection"
                    to={item}
                    spy
                    smooth
                    duration={500}
                  >
                    {item}
                  </SubmenuScrollLink>
                ))}
              </MainMenuHeading>
              <MainMenuIcon src={downArrow.src} alt="down arrow" />
            </MainMenuFlexbox>
          </FAQsMobileMenuContainer>
          {showFAQsSubMenu && (
            <MainMenuSubmenu>
              <SubmenuHeader>
                <SubmenuHeaderFlexbox>
                  <SubmenuHeaderHeading>
                    Jump to a Section...
                  </SubmenuHeaderHeading>
                  <SubmenuHeaderIcon
                    src={close}
                    alt="close x"
                    onClick={toggleSubMenu}
                  />
                </SubmenuHeaderFlexbox>
              </SubmenuHeader>
              <SubmenuContent>
                {categories.map((item) => (
                  <SubmenuLink>
                    <ScrollLink
                      activeClass="activeFAQsLink"
                      to={item}
                      spy
                      smooth
                      duration={500}
                      onClick={toggleSubMenu}
                    >
                      {item}
                    </ScrollLink>
                  </SubmenuLink>
                ))}
              </SubmenuContent>
            </MainMenuSubmenu>
          )}
          <BodyContainer>
            <MainContainer id="maincontainer">
              <ListContainer>
                {categories.map((categoryTitle) => (
                  <Section name={categoryTitle} key={categoryTitle}>
                    <FAQSection>
                      <SectionTitle>{categoryTitle}</SectionTitle>
                      <Accordion
                        data={faqPageData.filter(
                          (item) => item.category === categoryTitle
                        )}
                      />
                    </FAQSection>
                  </Section>
                ))}
              </ListContainer>
            </MainContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
      <ReadyToGrow />
    </>
  )
}

export default FAQPage

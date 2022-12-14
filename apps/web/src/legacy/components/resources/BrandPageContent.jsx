import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@design'
// utilities
import shouldDisplayVideo from '@legacy/utils/should-display-video'
// images
import close from '@legacy/assets/images/global/x_close.svg'
import downArrow from '@legacy/assets/images/global/arrow_down_large.svg'
import logoPurple from '@legacy/assets/images/global/leadpages-symbol_purple.svg'
import logoWhite from '@legacy/assets/images/global/leadpages-symbol_white.svg'
import wordmarkPurple from '@legacy/assets/images/global/leadpages-wordmark_purple.svg'
import wordmarkWhite from '@legacy/assets/images/global/leadpages-wordmark_white.svg'
import productScreenshotsImage from '@legacy/assets/images/totems/product-screenshots.jpg'
import ourPhotographyImage from '@legacy/assets/images/totems/our-photography.jpg'
import Link from 'next/link'

// videos
const wordmarkLoopWebm =
  'https://static.leadpages.com/mktg/videos/leadpages-wordmark-loop.webm'
const wordmarkLoopMp4 =
  'https://static.leadpages.com/mktg/videos/leadpages-wordmark-loop.mp4'

const OuterContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '$white',
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

  '@<s': {
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    paddingLeft: '3rem',
    paddingRight: '3rem',
  },

  '@>m': {
    marginLeft: '30%',
    width: '70%',
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const Section = styled('div', {
  width: '100%',
  paddingTop: '85px',
  marginTop: '-85px',
  marginBottom: '5.5rem',

  '@>m': {
    marginBottom: '6.25rem',
  },

  '@<s': {
    width: 'inherit',
    paddingLeft: '3rem',
    paddingRight: '3rem',
  },
})

const SectionTitle = styled('div', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  paddingBottom: '2rem',
  borderBottom: '1px solid $colors$lightGray',
  marginBottom: '2rem',
})

const SectionContentFlexbox = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})

const SidebarContainer = styled('div', {
  '@<m': {
    display: 'none',
  },

  '@>m': {
    position: 'absolute',
    top: '48px',
    paddingRight: '6rem',
    marginLeft: '6rem',
    minWidth: '200px',
    maxWidth: '200px',
  },

  '&.sidebarScrolled': {
    position: 'fixed',
    top: '85px',
    transition: 'position 0.3s ease',
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

const MainMenuContainer = styled('div', {
  display: 'none',
  position: 'fixed',
  top: '0px',
  width: '100%',
  zIndex: 1501,
  height: '72px',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '@<m': {
    '&.mainMenuScrolled': {
      display: 'block',
      transition: 'all 0.3s ease',
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

const GeneralScrollLink = styled(ScrollLink, {
  '&.activeLink': {
    color: '$primary',
    textDecoration: 'none',
  },
})

const SubmenuScrollLink = styled(ScrollLink, {
  display: 'none',
  zIndex: 101,

  '&.activeSection': {
    display: 'block',
    transition: 'all 0.3s ease',
  },
})

const InlineScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'inherit',
  borderBottom: '2px solid $colors$purpleLight',
  cursor: 'pointer',

  '&:hover': {
    color: '$primary',
    borderBottom: '2px solid $colors$primary',
  },
})

const SubsectionContentHolder = styled('div', {
  margin: 'auto',
  width: '100%',
  margin: 0,

  '@<s': {
    marginTop: '1rem',
  },
})

const SubsectionTitle = styled('h4', {
  fontSize: '18px',
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  color: '$text',
  marginBottom: '2rem',
})

const SubsectionParagraph = styled('p', {
  color: '$textAlt',
  marginBottom: '1rem',
  width: '90%',
  lineHeight: '24px',
  fontSize: '16px',

  '@<s': {
    width: '100%',
  },
})

const WordmarkLoopHolder = styled('div', {
  width: '60%',
  margin: '2rem 20%',

  '@<s': {
    width: '80%',
    margin: '2rem 10%',
  },
})

const WordmarkLoopVideo = styled('video', {
  display: 'block',
  width: '100%',
  margin: 'auto',
})

const SubsectionULHolder = styled('div', {
  color: '$textAlt',
  margin: '2rem 0',
  width: '90%',
  marginLeft: '48px',

  ul: {
    margin: '1rem 0',
  },

  li: {
    margin: '0.5rem 0',
  },

  '@<s': {
    marginLeft: '24px',
  },
})

const SubsectionImageHolder = styled('div', {
  height: '160px',
  display: 'flex',
  justifyContent: 'center',

  '&:nth-of-type(1)': {
    marginTop: '2rem',
  },

  '@<s': {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '70px',
  },
})

const WordmarkImage = styled('img', {
  width: '229px',

  '@<s': {
    width: '133px',
  },
})

const SubsectionImageFlexRow = styled('div', {
  margin: '3rem 0',
  display: 'flex',
  height: '105px',

  '@<s': {
    margin: '2rem 0',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '70px',
  },
})

const SubsectionImageFlexRowItem = styled('div', {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
})

const LogoImage = styled('img', {
  width: '50px',

  '@<s': {
    width: '35px',
  },
})

const SubsectionDownloadLink = styled('a', {
  color: '$primary',
  fontWeight: 500,
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  textDecoration: 'none',
  margin: '2rem 0',
  display: 'block',
})

const SubsectionSpanLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'inherit',
  borderBottom: '2px solid $colors$purpleLight',

  '&:hover': {
    color: '$primary',
    borderBottom: '2px solid $colors$primary',
  },
})

const RightArrow = styled('img', {
  transform: 'rotate(270deg)',
  border: '1px solid transparent',
  filter: `invert(23%) sepia(33%) saturate(6076%) hue-rotate(244deg)
    brightness(107%) contrast(107%)`,
  fontWeight: 500,
})

const SubsectionCirclesFlexRow = styled('div', {
  margin: '3rem 0',
  display: 'flex',
  height: '239px',

  '@<s': {
    flexWrap: 'wrap',
    height: 'inherit',
    margin: '2rem 0',
  },
})

const SubsectionCirclesFlexRowItem = styled('div', {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',

  '&:nth-child(1)': {
    borderRight: '1px solid $colors$lightGray',
  },

  '@<s': {
    height: '250px',
    width: '100%',

    '&:nth-child(1)': {
      borderRight: 'none',
      borderBottom: '1px solid $colors$lightGray',
    },
  },
})

const LargeColorCircle = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '239px',
  borderRadius: '100%',

  '@<s': {
    width: '204px',
    height: '204px',
    alignSelf: 'center',
  },
})

const LargeCircleTitle = styled('p', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  color: 'white',
  fontSize: '18px',
  alignSelf: 'center',
})

const SmallColorCircleHolder = styled('div', {
  width: '239px',
  height: '239px',
  display: 'flex',
  flexFlow: 'row wrap',

  '@<s': {
    height: '250px',
    width: '250px',
    marginTop: '1.5rem',
  },
})

const SmallCircleHolder = styled('div', {
  display: 'flex',
  width: '49%',
  height: '49%',
  justifyContent: 'center',
  alignItems: 'center',

  '&:nth-of-type(1)': {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  '&:nth-of-type(2)': {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  '&:nth-of-type(3)': {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  '&:nth-of-type(4)': {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  '@<s': {
    justifyContent: 'center !important',
    alignItems: 'center !important',

    '&:nth-of-type(3)': {
      alignItems: 'flex-start !important',
    },

    '&:nth-of-type(4)': {
      alignItems: 'flex-start !important',
    },
  },
})

const SmallColorCircle = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '113px',
  height: '113px',
  borderRadius: '100%',

  '@<s': {
    width: '100px',
    height: '100px',
  },
})

const SmallCircleTitle = styled('p', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  color: 'white',
  fontSize: '16px',
  alignSelf: 'center',
})

const SubsectionBrandAssetsFlexRow = styled('div', {
  margin: '1rem 0',
  display: 'flex',
  height: '256px',
  width: '90%',

  '@<s': {
    flexWrap: 'wrap',
    height: 'inherit',
    width: '100%',
  },
})

const SubsectionBrandAssetsFlexRowItem = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '@<s': {
    width: '100%',
    alignItems: 'left',

    '&:nth-of-type(1)': {
      marginBottom: '2rem',
    },
  },
})

const SubsectionBrandAssetsImage = styled('img', {
  width: '90%',
  maxWidth: '250px',

  '@<s': {
    width: '100%',
    maxWidth: '300px',
  },
})

const SectionContent_Name = () => {
  const [displayVideo, setDisplayVideo] = useState(false)
  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  return (
    <>
      <SubsectionTitle>What’s in a name?</SubsectionTitle>
      <SubsectionParagraph>
        “Leadpages” is one word with one capital Letter. Once upon a time, we
        were LeadPages—but that’s a little confusing, don’t you think?
      </SubsectionParagraph>
      <WordmarkLoopHolder>
        {displayVideo && (
          <WordmarkLoopVideo autoPlay playsinline muted loop>
            <source src={wordmarkLoopWebm} type="video/webm" />
            <source src={wordmarkLoopMp4} type="video/mp4" />
          </WordmarkLoopVideo>
        )}
      </WordmarkLoopHolder>
      <SubsectionTitle>What are we all about?</SubsectionTitle>
      <SubsectionParagraph>
        Leadpages is a best-in-class digital lead generation platform that
        enables entrepreneurs and marketers to easily publish web pages,
        confidently generate leads, and consistently transform clicks into
        customers. From websites and landing pages to pop-ups and alert bars,
        Leadpages helps you get in business and stay in business online.
      </SubsectionParagraph>
    </>
  )
}

const SectionContent_Logo = () => (
  <>
    <SubsectionParagraph>
      Creating high-converting web pages is the foundation of business and
      that's what our logo represents. We give customers the tools to create a
      sequence of pages, steps, or actions that users take on the journey from
      click to conversion.
    </SubsectionParagraph>
    <SubsectionImageHolder css={{ bc: '#f9f9f9' }}>
      <WordmarkImage
        src={wordmarkPurple.src}
        alt="Leadpages wordmark in purple"
      />
    </SubsectionImageHolder>
    <SubsectionImageHolder css={{ bc: '#603eff' }}>
      <WordmarkImage
        src={wordmarkWhite.src}
        alt="Leadpages wordmark in white"
      />
    </SubsectionImageHolder>
    <SubsectionImageFlexRow>
      <SubsectionImageFlexRowItem css={{ bc: '#f9f9f9' }}>
        <LogoImage src={logoPurple.src} alt="Leadpages logo in purple" />
      </SubsectionImageFlexRowItem>
      <SubsectionImageFlexRowItem css={{ bc: '#603eff' }}>
        <LogoImage src={logoWhite.src} alt="Leadpages logo in white" />
      </SubsectionImageFlexRowItem>
    </SubsectionImageFlexRow>
    <SubsectionDownloadLink
      href="https://www.dropbox.com/sh/hrxxartmk5etwds/AADIzTPUIld_-zgC2CxB8GRua?dl=1"
      alt="Download Leadpages logos"
    >
      Download Logos{'   '}
      <RightArrow src={downArrow.src}></RightArrow>
    </SubsectionDownloadLink>

    <SubsectionParagraph>
      Have a question or want to make use of our logo marks in a way not covered
      by these guidelines?
    </SubsectionParagraph>
    <SubsectionParagraph>
      Please&nbsp;
      <Link href="/contact" passHref>
        <SubsectionSpanLink>contact us</SubsectionSpanLink>
      </Link>
      &nbsp; and include a link to a visual mockup of the intended use.
    </SubsectionParagraph>
  </>
)

const SectionContent_Colors = () => (
  <>
    <SubsectionTitle>Purple is primary.</SubsectionTitle>
    <SubsectionParagraph>
      Vibrant, bold, and steeped in meaning, purple uniquely represents our
      Minneapolis roots: home of the Vikings and music legend Prince.
    </SubsectionParagraph>
    <SubsectionParagraph>
      The Leadpages color palette represents endless opportunity and is complete
      with bright, saturated color as well as natural tones. The diverse
      spectrum of tints and shades reflects not only the dynamic nature of our
      users, but also the community they create.
    </SubsectionParagraph>
    <SubsectionCirclesFlexRow>
      <SubsectionCirclesFlexRowItem>
        <LargeColorCircle css={{ bc: '#603eff' }}>
          <LargeCircleTitle>#603EFF</LargeCircleTitle>
        </LargeColorCircle>
      </SubsectionCirclesFlexRowItem>
      <SubsectionCirclesFlexRowItem>
        <SmallColorCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle css={{ bc: '#43E0F0' }}>
              <SmallCircleTitle>#43E0F0</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle id="f65b1c" css={{ bc: '#F65B1C' }}>
              <SmallCircleTitle>#F65B1C</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle id="4dd7523" css={{ bc: '#4D7523' }}>
              <SmallCircleTitle>#4D7523</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle id="e28f44" css={{ bc: '#E28F44' }}>
              <SmallCircleTitle>#E28F44</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
        </SmallColorCircleHolder>
      </SubsectionCirclesFlexRowItem>
    </SubsectionCirclesFlexRow>
  </>
)

const SectionContent_BrandAssets = () => (
  <>
    <SubsectionParagraph>
      Through dynamic graphic shapes and photography, we highlight the people we
      serve and the things they create on the Leadpages platform.
    </SubsectionParagraph>
    <SubsectionBrandAssetsFlexRow>
      <SubsectionBrandAssetsFlexRowItem>
        <SubsectionBrandAssetsImage
          src={productScreenshotsImage.src}
          alt="Leadpages product screenshots"
        />
      </SubsectionBrandAssetsFlexRowItem>
      <SubsectionBrandAssetsFlexRowItem>
        <SubsectionBrandAssetsImage
          src={ourPhotographyImage.src}
          alt="Leadpages photography"
        />
      </SubsectionBrandAssetsFlexRowItem>
    </SubsectionBrandAssetsFlexRow>
    <SubsectionParagraph>
      Here’s all the beauty of our brand boxed up neatly and ready for download.
    </SubsectionParagraph>
    <SubsectionDownloadLink
      href="https://www.dropbox.com/sh/bopv26efyxrvq2l/AADZ4y0MeChxUWFbpkuMTlmVa?dl=1"
      alt="Download Leadpages multimedia images"
    >
      Download Brand Assets{'   '}
      <RightArrow src={downArrow.src}></RightArrow>
    </SubsectionDownloadLink>
  </>
)

const SectionContent_Legal = () => (
  <>
    <SubsectionTitle>A friendly legal reminder.</SubsectionTitle>
    <SubsectionParagraph>
      These graphics, trademarks, and brand identity are the intellectual
      property of Leadpages. Because our brand is our most valuable asset,
      consistency is key. Whenever and wherever you use these assets and
      trademarks—whether online or off—please follow all the usage guidelines
      provided here.
    </SubsectionParagraph>
    <SubsectionParagraph>
      These guidelines apply to all Leadpages employees, customers, affiliate
      partners, and third parties.
    </SubsectionParagraph>
    <SubsectionTitle>Please do:</SubsectionTitle>
    <SubsectionULHolder>
      <ul>
        <li>
          Get our name right: Leadpages. (
          <InlineScrollLink
            activeClass="activeLink"
            to={'Name'}
            spy
            smooth
            duration={500}
          >
            Here’s more on that
          </InlineScrollLink>
          )
        </li>
        <li>
          Make use of all Leadpages brand assets provided in these guidelines.
        </li>
      </ul>
    </SubsectionULHolder>
    <SubsectionTitle>Please don’t:</SubsectionTitle>
    <SubsectionULHolder>
      <ul>
        <li>Modify or alter these files in any way.</li>
        <li>
          Use these graphics in any way that implies a relationship,
          affiliation, partnership, or endorsement by Leadpages of your product,
          service, or business.
        </li>
        <li>
          Use these graphics as part of your own product, service, or business.
        </li>
      </ul>
    </SubsectionULHolder>
  </>
)

const SectionContent_Questions = () => (
  <>
    <SubsectionParagraph>
      If you have questions about the Leadpages brand and how to use it,
      please&nbsp;
      <Link href="/contact" passHref>
        <SubsectionSpanLink>reach out to our team</SubsectionSpanLink>
      </Link>
      . When in doubt we’re here to help.
    </SubsectionParagraph>
  </>
)

const BrandPageContent = () => {
  const [isSidebarScrolled, setIsSidebarScrolled] = useState(false)
  const [isMainMenuScrolled, setIsMainMenuScrolled] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)

  const handleSidebarScrolled = () => {
    if (typeof window !== 'undefined') {
      if (
        window.innerWidth < 769 &&
        window.scrollY > 690 &&
        window.scrollY < scrollOffset
      ) {
        setIsSidebarScrolled(true)
        setIsMainMenuScrolled(true)
      } else if (
        window.innerWidth < 1150 &&
        window.innerWidth >= 769 &&
        window.scrollY > 526 &&
        window.scrollY < scrollOffset
      ) {
        setIsSidebarScrolled(true)
        setIsMainMenuScrolled(true)
      } else if (
        window.innerWidth >= 1150 &&
        window.scrollY > 627 &&
        window.scrollY < scrollOffset
      ) {
        setIsSidebarScrolled(true)
        setIsMainMenuScrolled(true)
      } else {
        setIsSidebarScrolled(false)
        setIsMainMenuScrolled(false)
        setShowSubMenu(false)
      }
    }
  }

  const classSidebarScrolled = isSidebarScrolled ? 'sidebarScrolled' : ''
  const classMainMenuScrolled = isMainMenuScrolled ? 'mainMenuScrolled' : ''
  const sections = [
    {
      sidebarName: 'Name',
      contentName: 'Our Name',
      content: <SectionContent_Name />,
    },
    {
      sidebarName: 'Logo',
      contentName: 'Our Logo',
      content: <SectionContent_Logo />,
    },
    {
      sidebarName: 'Color Palette',
      contentName: 'Our Colors',
      content: <SectionContent_Colors />,
    },
    {
      sidebarName: 'Brand Assets',
      contentName: 'Brand Assets',
      content: <SectionContent_BrandAssets />,
    },
    {
      sidebarName: 'Legal',
      contentName: 'Legal',
      content: <SectionContent_Legal />,
    },
    {
      sidebarName: 'Questions',
      contentName: 'Questions',
      content: <SectionContent_Questions />,
    },
  ]

  useEffect(() => {
    const containerHeight = document.getElementById('container').scrollHeight
    const sidebarHeight = document.getElementById('sidebar').clientHeight
    const scrollOffsetCalculated = containerHeight + sidebarHeight
    setScrollOffset(scrollOffsetCalculated)
    window.addEventListener('scroll', handleSidebarScrolled)
    return function cleanup() {
      window.removeEventListener('scroll', handleSidebarScrolled)
    }
  })

  return (
    <OuterContainer id="container">
      <InnerContainer>
        <SidebarContainer id="sidebar" className={classSidebarScrolled}>
          {sections.map((item, index) => (
            <SidebarHeading key={index}>
              <GeneralScrollLink
                activeClass="activeLink"
                to={item.sidebarName}
                spy
                smooth
                duration={500}
              >
                {item.sidebarName}
              </GeneralScrollLink>
            </SidebarHeading>
          ))}
        </SidebarContainer>
        <MainMenuContainer
          className={classMainMenuScrolled}
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <MainMenuFlexbox>
            <MainMenuHeading>
              {sections.map((item, index) => (
                <SubmenuScrollLink
                  key={index}
                  activeClass="activeSection"
                  to={item.sidebarName}
                  spy
                  smooth
                  duration={500}
                >
                  {item.sidebarName}
                </SubmenuScrollLink>
              ))}
            </MainMenuHeading>
            <MainMenuIcon src={downArrow.src} alt="down arrow" />
          </MainMenuFlexbox>
        </MainMenuContainer>
        {showSubMenu && (
          <MainMenuSubmenu>
            <SubmenuHeader>
              <SubmenuHeaderFlexbox>
                <SubmenuHeaderHeading>
                  Jump to a Section...
                </SubmenuHeaderHeading>
                <SubmenuHeaderIcon
                  src={close.src}
                  alt="close x"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                />
              </SubmenuHeaderFlexbox>
            </SubmenuHeader>
            <SubmenuContent>
              {sections.map((item, index) => (
                <SubmenuLink key={index}>
                  <GeneralScrollLink
                    activeClass="activeLink"
                    to={item.sidebarName}
                    spy
                    smooth
                    duration={500}
                    onClick={() => setShowSubMenu(!showSubMenu)}
                  >
                    {item.sidebarName}
                  </GeneralScrollLink>
                </SubmenuLink>
              ))}
            </SubmenuContent>
          </MainMenuSubmenu>
        )}
        <BodyContainer>
          <MainContainer>
            {sections.map((item, index) => (
              <Section name={item.sidebarName} key={index}>
                <SectionTitle>{item.contentName}</SectionTitle>
                <SectionContentFlexbox>
                  <SubsectionContentHolder>
                    {item.content}
                  </SubsectionContentHolder>
                </SectionContentFlexbox>
              </Section>
            ))}
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export default BrandPageContent

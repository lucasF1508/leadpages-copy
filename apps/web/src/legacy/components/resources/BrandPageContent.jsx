import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// utilities
import shouldDisplayVideo from '../../utils/should-display-video';
// images
import close from '../../assets/images/global/x_close.svg';
import downArrow from '../../assets/images/global/arrow_down_large.svg';
import logoPurple from '../../assets/images/global/leadpages-symbol_purple.svg';
import logoWhite from '../../assets/images/global/leadpages-symbol_white.svg';
import wordmarkPurple from '../../assets/images/global/leadpages-wordmark_purple.svg';
import wordmarkWhite from '../../assets/images/global/leadpages-wordmark_white.svg';
// videos
const wordmarkLoopWebm = 'https://static.leadpages.com/mktg/videos/leadpages-wordmark-loop.webm';
const wordmarkLoopMp4 = 'https://static.leadpages.com/mktg/videos/leadpages-wordmark-loop.mp4';

const OuterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  background: #fff;
`;

const BodyContainer = styled.div`
  display: flex;
  padding-top: 3rem;
`;

const MainContainer = styled.div`
  max-width: 1140px;
  @media (max-width: 576px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 992px) {
    margin-left: 30%;
    width: 70%;
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const Section = styled.div`
  padding-top: 1rem;
  width: 100%;
  padding-top: 85px;
  margin-top: -85px;
  margin-bottom: 5.5rem;
  @media (min-width: 992px) {
    margin-bottom: 6.25rem;
  }
  @media (max-width: 576px) {
    width: inherit;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const SectionTitle = styled.div`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  padding-bottom: 2rem;
  border-bottom: 1px solid #edecec;
  margin-bottom: 2rem;
`;

const SectionContentFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SidebarContainer = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
  @media (min-width: 992px) {
    position: absolute;
    top: 48px;
    padding-right: 6rem;
    margin-left: 6rem;
    min-width: 200px;
    max-width: 200px;
  }
  &.sidebarScrolled {
    position: fixed;
    top: 85px;
    transition: position 0.3s ease;
  }
`;

const SidebarHeading = styled.div`
  color: rgba(15, 12, 9, 0.5);
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 1rem;
  &:hover {
    color: #603eff;
    cursor: pointer;
  }
`;

const MainMenuContainer = styled.div`
  display: none;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  height: 72px;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  @media (max-width: 991px) {
    &.mainMenuScrolled {
      display: block;
      transition: all 0.3s ease;
    }
  }
`;

const MainMenuFlexbox = styled.div`
  margin-top: 24px;
  margin-left: 32px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
`;

const MainMenuHeading = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const MainMenuIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const MainMenuSubmenu = styled.div`
  z-index: 150;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;

const SubmenuHeader = styled.div`
  height: 72px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
`;

const SubmenuHeaderFlexbox = styled.div`
  padding-top: 24px;
  margin-left: 32px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
`;

const SubmenuHeaderHeading = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const SubmenuHeaderIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const SubmenuContent = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  padding-top: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 1rem;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

const SubmenuLink = styled.div`
  margin-bottom: 0.75rem;
  color: #575452;
  &:hover {
    color: #603eff;
    cursor: pointer;
  }
`;

const GeneralScrollLink = styled(ScrollLink)`
  &.activeLink {
    color: #603eff;
    text-decoration: none;
  }
`;

const SubmenuScrollLink = styled(ScrollLink)`
  display: none;
  z-index: 101;
  &.activeSection {
    display: block;
    transition: all 0.3s ease;
  }
`;

const InlineScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  border-bottom: 2px solid #d1c6f9;
  cursor: pointer;
  &:hover {
    color: #603eff;
    border-bottom: 2px solid #603eff;
  }
`;

const SubsectionContentHolder = styled.div`
  margin: auto;
  width: 100%;
  margin: 0;
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
`;

const SubsectionTitle = styled.h4`
  font-size: 18px;
  font-family: 'Apercu Pro';
  font-weight: 500;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const SubsectionParagraph = styled.p`
  color: #575452;
  margin-bottom: 1rem;
  width: 90%;
  line-height: 24px;
  font-size: 16px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const WordmarkLoopHolder = styled.div`
  width: 60%;
  margin: 2rem 20%;
  @media (max-width: 576px) {
    width: 80%;
    margin: 2rem 10%;
  }
`;

const WordmarkLoopVideo = styled.video`
  display: block;
  width: 100%;
  margin: auto;
`;

const SubsectionULHolder = styled.div`
  color: #575452;
  margin: 2rem 0;
  width: 90%;
  margin-left: 48px;
  ul {
    margin: 1rem 0;
  }
  li {
    margin: 0.5rem 0;
  }
  @media (max-width: 576px) {
    margin-left: 24px;
  }
`;

const SubsectionImageHolder = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  &:nth-of-type(1) {
    margin-top: 2rem;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 70px;
  }
`;

const WordmarkImage = styled.img`
  width: 229px;
  @media (max-width: 576px) {
    width: 133px;
  }
`;

const SubsectionImageFlexRow = styled.div`
  margin: 3rem 0;
  display: flex;
  height: 105px;
  @media (max-width: 576px) {
    margin: 2rem 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 70px;
  }
`;

const SubsectionImageFlexRowItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 50px;
  @media (max-width: 576px) {
    width: 35px;
  }
`;

const SubsectionDownloadLink = styled.a`
  color: #603eff;
  font-weight: 500;
  font-family: 'Apercu Pro';
  font-size: 18px;
  text-decoration: none;
  margin: 2rem 0;
  display: block;
`;

const SubsectionSpanLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
  border-bottom: 2px solid #d1c6f9;
  &:hover {
    color: #603eff;
    border-bottom: 2px solid #603eff;
  }
`;

const RightArrow = styled.img`
  transform: rotate(270deg);
  border: 1px solid transparent;
  filter: invert(23%) sepia(33%) saturate(6076%) hue-rotate(244deg) brightness(107%) contrast(107%);
  font-weight: 500;
`;

const SubsectionCirclesFlexRow = styled.div`
  margin: 3rem 0;
  display: flex;
  height: 239px;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    height: inherit;
    margin: 2rem 0;
  }
`;

const SubsectionCirclesFlexRowItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  &:nth-child(1) {
    border-right: 1px solid #edecec;
  }
  @media (max-width: 576px) {
    height: 250px;
    width: 100%;
    &:nth-child(1) {
      border-right: none;
      border-bottom: 1px solid #edecec;
    }
  }
`;

const LargeColorCircle = styled.div`
  display: flex;
  justify-content: center;
  width: 239px;
  border-radius: 100%;
  @media (max-width: 576px) {
    width: 204px;
    height: 204px;
    align-self: center;
  }
`;

const LargeCircleTitle = styled.p`
  font-family: 'Apercu Pro';
  font-weight: 500;
  color: white;
  font-size: 18px;
  align-self: center;
`;

const SmallColorCircleHolder = styled.div`
  width: 239px;
  height: 239px;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 576px) {
    height: 250px;
    width: 250px;
    margin-top: 1.5rem;
  }
`;

const SmallCircleHolder = styled.div`
  display: flex;
  width: 49%;
  height: 49%;
  justify-content: center;
  align-items: center;
  &:nth-of-type(1) {
    justify-content: flex-start;
    align-items: flex-start;
  }
  &:nth-of-type(2) {
    justify-content: flex-end;
    align-items: flex-start;
  }
  &:nth-of-type(3) {
    justify-content: flex-start;
    align-items: flex-end;
  }
  &:nth-of-type(4) {
    justify-content: flex-end;
    align-items: flex-end;
  }
  @media (max-width: 576px) {
    justify-content: center !important;
    align-items: center !important;
    &:nth-of-type(3) {
      align-items: flex-start !important;
    }
    &:nth-of-type(4) {
      align-items: flex-start !important;
    }
  }
`;

const SmallColorCircle = styled.div`
  display: flex;
  justify-content: center;
  width: 113px;
  height: 113px;
  border-radius: 100%;

  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`;

const SmallCircleTitle = styled.p`
  font-family: 'Apercu Pro';
  font-weight: 500;
  color: white;
  font-size: 16px;
  align-self: center;
`;

const SubsectionBrandAssetsFlexRow = styled.div`
  margin: 1rem 0;
  display: flex;
  height: 256px;
  width: 90%;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    height: inherit;
    width: 100%;
  }
`;

const SubsectionBrandAssetsFlexRowItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 576px) {
    width: 100%;
    align-items: left;
    &:nth-of-type(1) {
      margin-bottom: 2rem;
    }
  }
`;

const SubsectionBrandAssetsImage = styled(GatsbyImage)`
  width: 90%;
  max-width: 250px;
  @media (max-width: 576px) {
    width: 100%;
    max-width: 300px;
  }
`;

const SectionContent_Name = () => {
  const displayVideo = shouldDisplayVideo();
  return (
    <>
      <SubsectionTitle>What’s in a name?</SubsectionTitle>
      <SubsectionParagraph>
        “Leadpages” is one word with one capital Letter. Once upon a time, we were LeadPages—but
        that’s a little confusing, don’t you think?
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
        Leadpages is a best-in-class digital lead generation platform that enables entrepreneurs and
        marketers to easily publish web pages, confidently generate leads, and consistently
        transform clicks into customers. From websites and landing pages to pop-ups and alert bars,
        Leadpages helps you get in business and stay in business online.
      </SubsectionParagraph>
    </>
  );
};

const SectionContent_Logo = () => (
  <>
    <SubsectionParagraph>
      Creating high-converting web pages is the foundation of business and that's what our logo
      represents. We give customers the tools to create a sequence of pages, steps, or actions that
      users take on the journey from click to conversion.
    </SubsectionParagraph>
    <SubsectionImageHolder style={{ backgroundColor: '#f9f9f9' }}>
      <WordmarkImage src={wordmarkPurple} alt="Leadpages wordmark in purple" />
    </SubsectionImageHolder>
    <SubsectionImageHolder style={{ backgroundColor: '#603eff' }}>
      <WordmarkImage src={wordmarkWhite} alt="Leadpages wordmark in white" />
    </SubsectionImageHolder>
    <SubsectionImageFlexRow>
      <SubsectionImageFlexRowItem style={{ backgroundColor: '#f9f9f9' }}>
        <LogoImage src={logoPurple} alt="Leadpages logo in purple" />
      </SubsectionImageFlexRowItem>
      <SubsectionImageFlexRowItem style={{ backgroundColor: '#603eff' }}>
        <LogoImage src={logoWhite} alt="Leadpages logo in white" />
      </SubsectionImageFlexRowItem>
    </SubsectionImageFlexRow>
    <SubsectionDownloadLink
      href="https://www.dropbox.com/sh/hrxxartmk5etwds/AADIzTPUIld_-zgC2CxB8GRua?dl=1"
      alt="Download Leadpages logos"
    >
      Download Logos{'   '}
      <RightArrow src={downArrow}></RightArrow>
    </SubsectionDownloadLink>

    <SubsectionParagraph>
      Have a question or want to make use of our logo marks in a way not covered by these
      guidelines?
    </SubsectionParagraph>
    <SubsectionParagraph>
      Please&nbsp;
      <SubsectionSpanLink to="/contact">contact us</SubsectionSpanLink>&nbsp; and include a link to
      a visual mockup of the intended use.
    </SubsectionParagraph>
  </>
);

const SectionContent_Colors = () => (
  <>
    <SubsectionTitle>Purple is primary.</SubsectionTitle>
    <SubsectionParagraph>
      Vibrant, bold, and steeped in meaning, purple uniquely represents our Minneapolis roots: home
      of the Vikings and music legend Prince.
    </SubsectionParagraph>
    <SubsectionParagraph>
      The Leadpages color palette represents endless opportunity and is complete with bright,
      saturated color as well as natural tones. The diverse spectrum of tints and shades reflects
      not only the dynamic nature of our users, but also the community they create.
    </SubsectionParagraph>
    <SubsectionCirclesFlexRow>
      <SubsectionCirclesFlexRowItem>
        <LargeColorCircle style={{ backgroundColor: '#603eff' }}>
          <LargeCircleTitle>#603EFF</LargeCircleTitle>
        </LargeColorCircle>
      </SubsectionCirclesFlexRowItem>
      <SubsectionCirclesFlexRowItem>
        <SmallColorCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle style={{ backgroundColor: '#43E0F0' }}>
              <SmallCircleTitle>#43E0F0</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle id="f65b1c" style={{ backgroundColor: '#F65B1C' }}>
              <SmallCircleTitle>#F65B1C</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle id="4dd7523" style={{ backgroundColor: '#4D7523' }}>
              <SmallCircleTitle>#4D7523</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
          <SmallCircleHolder>
            <SmallColorCircle id="e28f44" style={{ backgroundColor: '#E28F44' }}>
              <SmallCircleTitle>#E28F44</SmallCircleTitle>
            </SmallColorCircle>
          </SmallCircleHolder>
        </SmallColorCircleHolder>
      </SubsectionCirclesFlexRowItem>
    </SubsectionCirclesFlexRow>
  </>
);

const SectionContent_BrandAssets = () => {
  const images = useStaticQuery(graphql`
    query BrandPageContentQuery {
      productScreenshotsImage: file(
        relativePath: { eq: "assets/images/totems/product-screenshots.jpg" }
      ) {
        ...constrained
      }
      ourPhotographyImage: file(relativePath: { eq: "assets/images/totems/our-photography.jpg" }) {
        ...constrained
      }
    }
  `);
  return (
    <>
      <SubsectionParagraph>
        Through dynamic graphic shapes and photography, we highlight the people we serve and the
        things they create on the Leadpages platform.
      </SubsectionParagraph>
      <SubsectionBrandAssetsFlexRow>
        <SubsectionBrandAssetsFlexRowItem>
          <SubsectionBrandAssetsImage
            image={getImage(images.productScreenshotsImage)}
            alt="Leadpages product screenshots"
          />
        </SubsectionBrandAssetsFlexRowItem>
        <SubsectionBrandAssetsFlexRowItem>
          <SubsectionBrandAssetsImage
            image={getImage(images.ourPhotographyImage)}
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
        <RightArrow src={downArrow}></RightArrow>
      </SubsectionDownloadLink>
    </>
  );
};

const SectionContent_Legal = () => (
  <>
    <SubsectionTitle>A friendly legal reminder.</SubsectionTitle>
    <SubsectionParagraph>
      These graphics, trademarks, and brand identity are the intellectual property of Leadpages.
      Because our brand is our most valuable asset, consistency is key. Whenever and wherever you
      use these assets and trademarks—whether online or off—please follow all the usage guidelines
      provided here.
    </SubsectionParagraph>
    <SubsectionParagraph>
      These guidelines apply to all Leadpages employees, customers, affiliate partners, and third
      parties.
    </SubsectionParagraph>
    <SubsectionTitle>Please do:</SubsectionTitle>
    <SubsectionULHolder>
      <ul>
        <li>
          Get our name right: Leadpages. (
          <InlineScrollLink activeClass="activeLink" to={'Name'} spy smooth duration={500}>
            Here’s more on that
          </InlineScrollLink>
          )
        </li>
        <li>Make use of all Leadpages brand assets provided in these guidelines.</li>
      </ul>
    </SubsectionULHolder>
    <SubsectionTitle>Please don’t:</SubsectionTitle>
    <SubsectionULHolder>
      <ul>
        <li>Modify or alter these files in any way.</li>
        <li>
          Use these graphics in any way that implies a relationship, affiliation, partnership, or
          endorsement by Leadpages of your product, service, or business.
        </li>
        <li>Use these graphics as part of your own product, service, or business.</li>
      </ul>
    </SubsectionULHolder>
  </>
);

const SectionContent_Questions = () => (
  <>
    <SubsectionParagraph>
      If you have questions about the Leadpages brand and how to use it, please&nbsp;
      <SubsectionSpanLink to="/contact">reach out to our team</SubsectionSpanLink>. When in doubt
      we’re here to help.
    </SubsectionParagraph>
  </>
);

class BrandPageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarScrolled: false,
      isMainMenuScrolled: false,
      showSubMenu: false,
      scrollOffset: 0,
    };
  }

  componentDidMount() {
    const containerHeight = document.getElementById('container').scrollHeight;
    const sidebarHeight = document.getElementById('sidebar').clientHeight;
    const scrollOffset = containerHeight + sidebarHeight;
    this.setState({ scrollOffset });
    window.addEventListener('scroll', this.handleSidebarScrolled);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSidebarScrolled);
  }

  toggleSubMenu = () => {
    const { showSubMenu } = this.state;
    this.setState({ showSubMenu: !showSubMenu });
  };

  setSidebar = isSidebarScrolled => this.setState({ isSidebarScrolled });

  setMainMenu = isMainMenuScrolled => this.setState({ isMainMenuScrolled });

  setSubMenu = showSubMenu => this.setState({ showSubMenu });

  handleSidebarScrolled = () => {
    const { scrollOffset } = this.state;
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 769 && window.scrollY > 690 && window.scrollY < scrollOffset) {
        this.setSidebar(true);
        this.setMainMenu(true);
      } else if (
        window.innerWidth < 1150 &&
        window.innerWidth >= 769 &&
        window.scrollY > 526 &&
        window.scrollY < scrollOffset
      ) {
        this.setSidebar(true);
        this.setMainMenu(true);
      } else if (
        window.innerWidth >= 1150 &&
        window.scrollY > 627 &&
        window.scrollY < scrollOffset
      ) {
        this.setSidebar(true);
        this.setMainMenu(true);
      } else {
        this.setSidebar(false);
        this.setMainMenu(false);
        this.setSubMenu(false);
      }
    }
  };

  render() {
    const { isSidebarScrolled, isMainMenuScrolled, showSubMenu } = this.state;
    const classSidebarScrolled = isSidebarScrolled ? 'sidebarScrolled' : '';
    const classMainMenuScrolled = isMainMenuScrolled ? 'mainMenuScrolled' : '';
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
    ];
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
          <MainMenuContainer className={classMainMenuScrolled} onClick={this.toggleSubMenu}>
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
              <MainMenuIcon src={downArrow} alt="down arrow" />
            </MainMenuFlexbox>
          </MainMenuContainer>
          {showSubMenu && (
            <MainMenuSubmenu>
              <SubmenuHeader>
                <SubmenuHeaderFlexbox>
                  <SubmenuHeaderHeading>Jump to a Section...</SubmenuHeaderHeading>
                  <SubmenuHeaderIcon src={close} alt="close x" onClick={this.toggleSubMenu} />
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
                      onClick={this.toggleSubMenu}
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
                    <SubsectionContentHolder>{item.content}</SubsectionContentHolder>
                  </SectionContentFlexbox>
                </Section>
              ))}
            </MainContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default BrandPageContent;

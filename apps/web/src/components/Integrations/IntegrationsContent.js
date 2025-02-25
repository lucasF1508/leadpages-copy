import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import debounce from 'lodash.debounce'
import { styled } from '@design'
import { GATSBY_IMAGE } from '@legacy/constants/types'
// components
import closeXSVG from '@legacy/assets/images/global/x_close.svg'
import downArrowSVG from '@legacy/assets/images/global/arrow_down_large.svg'
import SearchFilter from '@legacy/components/search/SearchFilter'
import Tooltip from '@legacy/components/tooltips/Tooltip_GreatWhite'
// images

const OuterContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '$grayAlt',
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 1,
  background: '$grayAlt',
  minHeight: '200px',
})

const BodyContainer = styled('div', {
  display: 'flex',
  paddingTop: '2rem',
})

const MainContainer = styled('div', {
  maxWidth: '1140px',

  '@media (max-width: 768px)': {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
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

const Section = styled('div', {
  paddingTop: '1rem',
  width: '100%',
  paddingTop: '85px',
  marginTop: '-85px',
  marginBottom: '5.5rem',

  '@media (min-width: 992px)': {
    marginBottom: '6.25rem',
  },
})

const SectionTitle = styled('div', {
  color: '$text',
  fontFamily: `'Value Serif'`,
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  marginBottom: '24px',

  '@media (max-width: 576px)': {
    paddingBottom: '1rem',
    borderBottom: '1px solid #edecec',
  },

  '@media (min-width: 992px)': {
    marginBottom: '24px',
  },
})

const SectionIntegration = styled('div', {
  marginTop: '3rem',
  paddingRight: '2%',
})

const SectionIntegrationTitle = styled('div', {
  paddingBottom: '0.5rem',
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
})

const SectionIntegrationCopy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
})

const SectionIntegrationConnection = styled('div', {
  marginBottom: '20px',
  lineHeight: '18px',

  button: {
    color: '$textAlt',
    fontSize: '12px',
    fontFamily: 'Apercu Pro',
  },
})

const SidebarContainer = styled('div', {
  position: 'absolute',
  top: '32px',
  minHeight: '150px',
  paddingBottom: '2rem',

  '&.scrolled': {
    position: 'fixed !important',
    top: '91px !important',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },

  '@media (min-width: 769px) and (max-width: 875px)': {
    paddingRight: '4rem',
    marginLeft: '4rem',
    minWidth: '200px',
    maxWidth: '200px',
    borderRight: '1px solid rgba(15, 12, 9, 0.08)',
  },

  '@media (min-width: 876px) and (max-width: 992px)': {
    paddingRight: '4rem',
    marginLeft: '4rem',
    minWidth: '200px',
    maxWidth: '200px',
    borderRight: '1px solid rgba(15, 12, 9, 0.08)',
  },

  '@media (min-width: 993px)': {
    paddingRight: '4rem',
    marginLeft: '6rem',
    minWidth: '200px',
    maxWidth: '200px',
    borderRight: '1px solid rgba(15, 12, 9, 0.08)',
  },
})

const SidebarHeading = styled('div', {
  color: 'rgba(15, 12, 9, 0.5)',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  paddingBottom: '0.25rem',
  paddingTop: '0.25rem',
  marginTop: '0.25rem',
  marginBottom: '0.25rem',
})

const IntegrationsMobileMenuContainer = styled('div', {
  display: 'none',
  position: 'fixed',
  top: '0px',
  width: '100%',
  zIndex: 1501,
  height: '72px',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '&.scrolled': {
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
})

const MainMenuFlexbox = styled('div', {
  marginTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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
  zIndex: 1501,
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
  alignItems: 'center',
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
  background: '#fff',
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
  '&.activeIntegrationsLink': {
    color: '$primary',
  },

  '> .heading': {
    '&:hover': {
      color: '$primary',
      cursor: 'pointer',
    },
  },

  marginTop: '0.25rem',
  marginBottom: '0.25rem',
})

const SubmenuScrollLink = styled(ScrollLink, {
  display: 'none',
  zIndex: 1501,

  '&.activeIntegrationsSection': {
    display: 'block',
    transition: 'all 0.3s ease',
  },
})

const StyledLink = styled('a', {
  textDecoration: 'none',
})

const SubpageCardArrow = styled('img', {
  position: 'absolute',
  top: '3.5rem',
  right: '3.5rem',
  transform: 'rotate(-90deg)',
})

const IntegrationContainer = styled('div', {
  position: 'relative',
  background: '$white',
  marginBottom: '24px',
  width: '100%',
  transition: 'all 0.3s ease 0s',

  '&.hasSubpage': {
    boxShadow: `0 0 2px 0 rgba(15, 12, 9, 0.04),
      0 2px 4px 0 rgba(15, 12, 9, 0.08)`,

    '&:hover': {
      boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
        0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
    },

    [`&:hover ${SectionIntegrationTitle}`]: {
      color: '$primary',
    },

    [`&:hover ${SubpageCardArrow}`]: {
      filter: `invert(36%) sepia(74%) saturate(7035%) hue-rotate(245deg)
        brightness(99%) contrast(105%)`,
    },
  },
})

const IntegrationFlexbox = styled('div', {
  padding: '3rem',

  '@media (max-width: 400px)': {
    padding: '10%',
  },

  '@media (min-width: 577px)': {
    display: 'flex',
  },
})

const IntegrationTextContainer = styled('div', {})

const IntegrationImageContainer = styled('div', {
  width: '48px',
  height: '48px',
  paddingRight: '48px',

  '@media (max-width: 576px)': {
    marginBottom: '16px',
  },
})

const IntegrationImage = styled(Image, {
  width: '48px',
  height: '48px',
})

const NoIntegrationsContainer = styled('div', {
  textAlign: 'center',
  margin: '2rem auto',
  paddingLeft: '2rem',

  '@media (max-width: 767px)': {
    paddingLeft: '1rem',
  },
})

const NoIntegrationsHeading = styled('div', {
  fontFamily: `'Value Serif'`,
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  color: '$text',
  marginBottom: '2rem',

  '@media (max-width: 576px)': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const NoIntegrationsCaption = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  marginBottom: '3.3rem',

  '@media (max-width: 576px)': {
    fontSize: '1rem',
  },
})

const OutboundLink = styled('a', {
  textDecoration: 'none',
  color: '$black',
})

const NoIntegrationsButton = styled('button', {
  width: '278px',
  height: '48px',
  color: '$primary',
  backgroundColor: 'transparent',
  border: '3px solid $colors$secondary',
  borderRadius: '48px',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  marginBottom: '2.5rem',
  transition: 'all 0.3s ease',

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  '@media (max-width: 340px)': {
    width: '80%',
    minWidth: '140px',
  },
})

class IntegrationsContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredIntegrations: props.integrations,
      filteredCategories: props.categories,
      integrationsSidebarScrolled: false,
      integrationsMainMenuScrolled: false,
      showIntegrationsSubMenu: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleIntegrationsScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleIntegrationsScroll)
  }

  toggleSubMenu = () => {
    const { showIntegrationsSubMenu } = this.state
    this.setState({ showIntegrationsSubMenu: !showIntegrationsSubMenu })
  }

  setSidebar = (integrationsSidebarScrolled) =>
    this.setState({ integrationsSidebarScrolled })

  setMainMenu = (integrationsMainMenuScrolled) =>
    this.setState({ integrationsMainMenuScrolled })

  setSubMenu = (showIntegrationsSubMenu) =>
    this.setState({ showIntegrationsSubMenu })

  setFilteredCategories = (categories) =>
    this.setState({ filteredCategories: categories })

  setFilteredIntegrations = (filteredData) =>
    this.setState({ filteredIntegrations: filteredData })

  handleIntegrationsScroll = () => {
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
      this.setSidebar(true)
    } else if (
      window.innerWidth <= 768 &&
      window.scrollY > 323 &&
      window.scrollY < scrollOffset
    ) {
      this.setMainMenu(true)
    } else {
      this.setSidebar(false)
      this.setMainMenu(false)
      this.setSubMenu(false)
    }
  }

  handleFilteredData = (filteredData, searchQuery) => {
    // Get distinct category values from filtered data
    let distinctCategories = [
      ...new Set(filteredData.map((feature) => feature.category)),
    ]
    distinctCategories = Array.from(distinctCategories)

    this.setFilteredCategories(distinctCategories.sort())
    this.setFilteredIntegrations(filteredData)

    if (searchQuery && searchQuery !== '') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'integrationsSearched',
        integrationsSearchQuery: searchQuery,
      })
    }
  }

  render() {
    const {
      integrationsSidebarScrolled,
      integrationsMainMenuScrolled,
      filteredCategories,
      showIntegrationsSubMenu,
      filteredIntegrations,
    } = this.state
    const { integrations } = this.props
    const classSidebarScrolled = integrationsSidebarScrolled ? 'scrolled' : ''
    const classMainMenuScrolled = integrationsMainMenuScrolled ? 'scrolled' : ''

    return (
      <div>
        <OuterContainer id="container">
          <InnerContainer>
            <SidebarContainer
              id="sidebar"
              scrolled={integrationsSidebarScrolled}
              className={classSidebarScrolled}
            >
              <SearchFilter
                handleFilteredData={debounce(this.handleFilteredData, 200)}
                dataSet={integrations}
                searchableProperties={['integration']}
              />
              {filteredCategories?.map((item) => (
                <SidebarScrollLink
                  key={item}
                  activeClass="activeIntegrationsLink"
                  to={item}
                  spy
                  smooth
                  duration={200}
                >
                  <SidebarHeading className="heading">{item}</SidebarHeading>
                </SidebarScrollLink>
              ))}
            </SidebarContainer>
            <IntegrationsMobileMenuContainer
              scrolled={integrationsMainMenuScrolled}
              className={classMainMenuScrolled}
              onClick={this.toggleSubMenu}
            >
              <MainMenuFlexbox>
                <MainMenuHeading>
                  {filteredCategories?.map((item) => (
                    <SubmenuScrollLink
                      key={item}
                      activeClass="activeIntegrationsSection"
                      to={item}
                      spy
                      smooth
                      duration={200}
                    >
                      {item}
                    </SubmenuScrollLink>
                  ))}
                </MainMenuHeading>
                <MainMenuIcon src={downArrowSVG.src} alt="down arrow" />
              </MainMenuFlexbox>
            </IntegrationsMobileMenuContainer>
            {showIntegrationsSubMenu && (
              <MainMenuSubmenu>
                <SubmenuHeader>
                  <SubmenuHeaderFlexbox>
                    <SubmenuHeaderHeading>
                      Jump to a Section...
                    </SubmenuHeaderHeading>
                    <SubmenuHeaderIcon
                      src={closeXSVG.src}
                      alt="close x"
                      onClick={this.toggleSubMenu}
                    />
                  </SubmenuHeaderFlexbox>
                </SubmenuHeader>
                <SubmenuContent>
                  {filteredCategories?.map((item) => (
                    <ScrollLink
                      key={item}
                      activeClass="activeIntegrationsLink"
                      to={item}
                      spy
                      smooth
                      duration={200}
                      onClick={this.toggleSubMenu}
                    >
                      <SubmenuLink>{item}</SubmenuLink>
                    </ScrollLink>
                  ))}
                </SubmenuContent>
              </MainMenuSubmenu>
            )}

            <BodyContainer>
              <MainContainer id="maincontainer">
                {filteredCategories?.map((item) => (
                  <Section name={item} key={item}>
                    <SectionTitle>{item}</SectionTitle>
                    <SectionIntegration>
                      {/* eslint-disable-next-line array-callback-return, consistent-return */}

                      {filteredIntegrations.map((eachIntegration) => {
                        const {
                          integration,
                          category,
                          description,
                          connection,
                          tooltip,
                          icon,
                          subpage,
                        } = eachIntegration

                        if (category === item) {
                          return (
                            <>
                              {/* Subpage included here */}
                              {subpage ? (
                                <Link href={subpage.route} passHref>
                                  <StyledLink>
                                    <IntegrationContainer
                                      key={integration}
                                      className="hasSubpage"
                                    >
                                      <SubpageCardArrow
                                        src={downArrowSVG.src}
                                      />
                                      <IntegrationFlexbox>
                                        <IntegrationImageContainer>
                                          <IntegrationImage
                                            image={icon}
                                            alt={`${`${integration} logo`}`}
                                          />
                                        </IntegrationImageContainer>
                                        <IntegrationTextContainer>
                                          <SectionIntegrationTitle
                                            key={integration}
                                            className="hasSubpage"
                                          >
                                            {integration}
                                          </SectionIntegrationTitle>
                                          <SectionIntegrationConnection>
                                            <Tooltip title={connection}>
                                              <span>{tooltip}</span>
                                            </Tooltip>
                                          </SectionIntegrationConnection>
                                          <SectionIntegrationCopy>
                                            {description}
                                          </SectionIntegrationCopy>
                                        </IntegrationTextContainer>
                                      </IntegrationFlexbox>
                                    </IntegrationContainer>
                                  </StyledLink>
                                </Link>
                              ) : (
                                <IntegrationContainer key={integration}>
                                  <IntegrationFlexbox>
                                    <IntegrationImageContainer>
                                      <IntegrationImage
                                        image={icon}
                                        alt={`${`${integration} logo`}`}
                                      />
                                    </IntegrationImageContainer>
                                    <IntegrationTextContainer>
                                      <SectionIntegrationTitle
                                        key={integration}
                                      >
                                        {integration}
                                      </SectionIntegrationTitle>
                                      <SectionIntegrationConnection>
                                        <Tooltip title={connection}>
                                          <span>{tooltip}</span>
                                        </Tooltip>
                                      </SectionIntegrationConnection>
                                      <SectionIntegrationCopy>
                                        {description}
                                      </SectionIntegrationCopy>
                                    </IntegrationTextContainer>
                                  </IntegrationFlexbox>
                                </IntegrationContainer>
                              )}
                            </>
                          )
                        }
                      })}
                    </SectionIntegration>
                  </Section>
                ))}
                {filteredCategories?.length === 0 && (
                  <NoIntegrationsContainer>
                    <NoIntegrationsHeading>
                      Don’t see what you’re looking for?
                    </NoIntegrationsHeading>
                    <NoIntegrationsCaption>
                      Unlock more possibilities with Zapier!
                      <br />
                      <br />
                      Connect your Leadpages account to hundreds of apps when
                      you get started with a free Zapier account.
                    </NoIntegrationsCaption>
                    <OutboundLink
                      href="https://zapier.com/apps/leadpages/integrations"
                      alt="Zapier Leadpages Integrations"
                      target="_blank"
                    >
                      <NoIntegrationsButton>
                        See What’s Possible
                      </NoIntegrationsButton>
                    </OutboundLink>
                  </NoIntegrationsContainer>
                )}
              </MainContainer>
            </BodyContainer>
          </InnerContainer>
        </OuterContainer>
      </div>
    )
  }
}

IntegrationsContent.propTypes = {
  integrations: PropTypes.arrayOf(
    PropTypes.shape({
      integration: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      connection: PropTypes.string.isRequired,
      tooltip: PropTypes.string.isRequired,
      icon: GATSBY_IMAGE.isRequired,
    }).isRequired
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default IntegrationsContent

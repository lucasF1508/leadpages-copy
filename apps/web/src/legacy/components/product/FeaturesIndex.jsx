import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import debounce from 'lodash/debounce'
// components
import SearchFilter from '@legacy/components/search/SearchFilter'
// images
import close from '@legacy/assets/images/global/x_close.svg'
import downArrow from '@legacy/assets/images/global/arrow_down_large.svg'

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
  zIndex: '$content',
  background: '$white',
  display: 'flex',
  alignItems: 'flex-start',
})

const BodyContainer = styled('div', {
  display: 'flex',
  paddingTop: '3rem',
})

const MainContainer = styled('div', {
  maxWidth: '1140px',

  '@<s': {
    mx: '24px',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    px: '3rem',
  },

  '@media (min-width: 992px)': {
    pr: '6rem',
    pl: '3rem',
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
})

const SectionTitle = styled('div', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',

  '@<s': {
    paddingBottom: '1rem',
    borderBottom: '1px solid $colors$lightGray',
  },

  '@>m': {
    marginBottom: '-3rem',
  },
})

const SectionFlexbox = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'start',
})

const SectionFeature = styled('div', {
  marginTop: '3rem',
  paddingRight: '3%',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px)': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },

  '@>m': {
    marginTop: '6rem',
    flex: '0 0 30%',
    maxWidth: '30%',
  },
})

const SectionFeatureTitle = styled('div', {
  paddingBottom: '0.5rem',
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
})

const SectionFeatureCopy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',

  a: {
    textDecoration: 'underline',
    c: 'revert',
  },
})

const SidebarContainer = styled('div', {
  position: 'sticky',
  top: 85,

  '@media (max-width: 991px)': {
    display: 'none',
  },

  '@>m': {
    mt: '48px',
    paddingRight: '6rem',
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

  '@media (max-width: 991px)': {
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
  zIndex: '$overlay',
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
  py: '1rem',
  px: '2.5rem',
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
  zIndex: '$cover',

  '&.activeSection': {
    display: 'block',
    transition: 'all 0.3s ease',
  },
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
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
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

  '@<s': {
    fontSize: '1rem',
  },
})

const InboundLink = styled(Link, {
  a: {
    textDecoration: 'none',
    color: '$black',
  },
})

const NoIntegrationsButton = styled('button', {
  width: '278px',
  height: '48px',
  color: '$primary',
  backgroundColor: 'transparent',
  border: '3px solid $colors$purpleLight',
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

  '@<xs': {
    width: '80%',
    minWidth: '140px',
  },
})

class FeaturesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMainMenuScrolled: false,
      showSubMenu: false,
      scrollOffset: 0,
      filteredCategories: props.categories,
      filteredFeatures: props.data,
      searchQuery: '',
    }
  }

  componentDidMount() {
    const containerHeight = document.getElementById('container').scrollHeight
    const sidebarHeight = document.getElementById('sidebar').clientHeight
    const scrollOffset = containerHeight - sidebarHeight
    this.setState({ scrollOffset })
    window.addEventListener('scroll', this.handleSidebarScrolled)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSidebarScrolled)
  }

  toggleSubMenu = () => {
    const { showSubMenu } = this.state
    this.setState({ showSubMenu: !showSubMenu })
  }

  setMainMenu = (isMainMenuScrolled) => this.setState({ isMainMenuScrolled })

  setSubMenu = (showSubMenu) => this.setState({ showSubMenu })

  setFilteredCategories = (categories) =>
    this.setState({ filteredCategories: categories })

  setFilteredFeatures = (filteredData) =>
    this.setState({ filteredFeatures: filteredData })

  setSearchQuery = (searchQuery) => this.setState({ searchQuery })

  handleSidebarScrolled = () => {
    const { scrollOffset } = this.state
    if (typeof window !== 'undefined') {
      if (
        window.innerWidth < 1150 &&
        window.scrollY > 415 &&
        window.scrollY < scrollOffset
      ) {
        this.setMainMenu(true)
      } else if (
        window.innerWidth >= 1150 &&
        window.scrollY > 415 &&
        window.scrollY < scrollOffset
      ) {
        this.setMainMenu(true)
      } else {
        this.setMainMenu(false)
        this.setSubMenu(false)
      }
    }
  }

  handleFilteredData = (filteredData, searchQuery) => {
    // Get distinct category values from filtered data
    let distinctCategories = [
      ...new Set(filteredData.map((feature) => feature.category)),
    ]
    distinctCategories = Array.from(distinctCategories)

    this.setFilteredCategories(distinctCategories)
    this.setFilteredFeatures(filteredData)
    this.setSearchQuery(searchQuery)

    if (searchQuery && searchQuery !== '') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'featureIndexSearched',
        featureIndexSearchQuery: searchQuery,
      })
    }
  }

  render() {
    const {
      isMainMenuScrolled,
      filteredCategories,
      showSubMenu,
      filteredFeatures,
      searchQuery,
    } = this.state

    const { data } = this.props
    const classMainMenuScrolled = isMainMenuScrolled ? 'mainMenuScrolled' : ''
    return (
      <OuterContainer id="container">
        <InnerContainer>
          <SidebarContainer id="sidebar">
            <SearchFilter
              handleFilteredData={debounce(this.handleFilteredData, 300)}
              dataSet={data}
              searchableProperties={['feature', 'description']}
            />
            {filteredCategories.map((item) => (
              <SidebarHeading key={item}>
                <GeneralScrollLink
                  activeClass="activeLink"
                  to={item}
                  spy
                  smooth
                  duration={500}
                >
                  {item}
                </GeneralScrollLink>
              </SidebarHeading>
            ))}
          </SidebarContainer>

          {/* Mobile menu */}
          <MainMenuContainer
            className={classMainMenuScrolled}
            onClick={this.toggleSubMenu}
          >
            <MainMenuFlexbox>
              <MainMenuHeading>
                {filteredCategories.map((item) => (
                  <SubmenuScrollLink
                    key={item}
                    activeClass="activeSection"
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
                    onClick={this.toggleSubMenu}
                  />
                </SubmenuHeaderFlexbox>
              </SubmenuHeader>
              <SubmenuContent>
                {filteredCategories.map((item) => (
                  <SubmenuLink key={item}>
                    <GeneralScrollLink
                      activeClass="activeLink"
                      to={item}
                      spy
                      smooth
                      duration={500}
                      onClick={this.toggleSubMenu}
                    >
                      {item}
                    </GeneralScrollLink>
                  </SubmenuLink>
                ))}
              </SubmenuContent>
            </MainMenuSubmenu>
          )}

          <BodyContainer>
            <MainContainer id="maincontainer">
              {filteredCategories.map((item) => (
                <Section name={item} key={item}>
                  <SectionTitle>{item}</SectionTitle>
                  <SectionFlexbox>
                    {/* eslint-disable-next-line consistent-return, array-callback-return */}
                    {filteredFeatures.map((feature) => {
                      if (feature.category === item) {
                        return (
                          <SectionFeature key={feature.feature}>
                            <SectionFeatureTitle>
                              {/* eslint-disable-next-line react/no-danger */}
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: feature.feature,
                                }}
                              />
                            </SectionFeatureTitle>
                            <SectionFeatureCopy>
                              {/* eslint-disable-next-line react/no-danger */}
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: feature.description,
                                }}
                              />
                            </SectionFeatureCopy>
                          </SectionFeature>
                        )
                      }
                    })}
                  </SectionFlexbox>
                </Section>
              ))}
              {/* Empty search result message  */}
              {filteredFeatures.length === 0 && (
                <NoIntegrationsContainer>
                  <NoIntegrationsHeading>
                    We couldn&apos;t find any search results for &quot;
                    {searchQuery}&quot;
                  </NoIntegrationsHeading>
                  <NoIntegrationsCaption>
                    Try a new search, or reach out to our team with questions
                    about a specific feature.
                  </NoIntegrationsCaption>
                  <InboundLink href="/contact" aria-label="contact us">
                    <a>
                      <NoIntegrationsButton>Contact us</NoIntegrationsButton>
                    </a>
                  </InboundLink>
                </NoIntegrationsContainer>
              )}
            </MainContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

FeaturesIndex.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      feature: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeaturesIndex

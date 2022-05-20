import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';
// components
import SearchFilter from '../search/SearchFilter';
import Tooltip from '../tooltips/Tooltip_GreatWhite';
// images
import closeXSVG from '../../assets/images/global/x_close.svg';
import downArrowSVG from '../../assets/images/global/arrow_down_large.svg';

const OuterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  background: #f7f7f7;
  min-height: 200px;
`;

const BodyContainer = styled.div`
  display: flex;
  padding-top: 2rem;
`;

const MainContainer = styled.div`
  max-width: 1140px;
  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    margin-left: 35%;
    width: 65%;
    padding-right: 4rem;
    padding-left: 4rem;
  }
  @media (min-width: 993px) {
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
`;

const SectionTitle = styled.div`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  margin-bottom: 24px;
  @media (max-width: 576px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #edecec;
  }
  @media (min-width: 992px) {
    margin-bottom: 24px;
  }
`;

const SectionIntegration = styled.div`
  margin-top: 3rem;
  padding-right: 2%;
`;

const SectionIntegrationTitle = styled.div`
  padding-bottom: 0.5rem;
  color: #0f0c09;
  font-family: Apercu Pro;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

const SectionIntegrationCopy = styled.div`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 14px;
  line-height: 20px;
`;

const SectionIntegrationConnection = styled.div`
  color: #575452;
  font-size: 12px;
  line-height: 18px;
  font-family: Apercu Pro;
  margin-bottom: 20px;
`;

const SidebarContainer = styled.div`
  position: absolute;
  top: 32px;
  min-height: 150px;
  padding-bottom: 2rem;
  &.scrolled {
    position: fixed !important;
    top: 91px !important;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 875px) {
    padding-right: 4rem;
    margin-left: 4rem;
    min-width: 200px;
    max-width: 200px;
    border-right: 1px solid rgba(15, 12, 9, 0.08);
  }
  @media (min-width: 876px) and (max-width: 992px) {
    padding-right: 4rem;
    margin-left: 4rem;
    min-width: 200px;
    max-width: 200px;
    border-right: 1px solid rgba(15, 12, 9, 0.08);
  }
  @media (min-width: 993px) {
    padding-right: 4rem;
    margin-left: 6rem;
    min-width: 200px;
    max-width: 200px;
    border-right: 1px solid rgba(15, 12, 9, 0.08);
  }
`;

const SidebarHeading = styled.div`
  color: rgba(15, 12, 9, 0.5);
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

const IntegrationsMobileMenuContainer = styled.div`
  display: none;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1501;
  height: 72px;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  &.scrolled {
    @media (max-width: 768px) {
      display: block;
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
  font-family: Apercu Pro;
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
  z-index: 1501;
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
  font-family: Apercu Pro;
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
  font-family: Apercu Pro;
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

const SidebarScrollLink = styled(ScrollLink)`
  &.activeIntegrationsLink {
    color: #603eff;
  }
  > .heading {
    &:hover {
      color: #603eff;
      cursor: pointer;
    }
  }
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

const SubmenuScrollLink = styled(ScrollLink)`
  display: none;
  z-index: 1501;
  &.activeIntegrationsSection {
    display: block;
    transition: all 0.3s ease;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SubpageCardArrow = styled.img`
  position: absolute;
  top: 3.5rem;
  right: 3.5rem;
  transform: rotate(-90deg);
`;

const IntegrationContainer = styled.div`
  position: relative;
  background: #fff;
  margin-bottom: 24px;
  width: 100%;
  transition: all 0.3s ease 0s;

  &.hasSubpage {
    box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
    }
    &:hover ${SectionIntegrationTitle} {
      color: #603eff;
    }
    &:hover ${SubpageCardArrow} {
      filter: invert(36%) sepia(74%) saturate(7035%) hue-rotate(245deg) brightness(99%)
        contrast(105%);
    }
  }
`;

const IntegrationFlexbox = styled.div`
  padding: 3rem;
  @media (max-width: 400px) {
    padding: 10%;
  }
  @media (min-width: 577px) {
    display: flex;
  }
`;

const IntegrationTextContainer = styled.div``;

const IntegrationImageContainer = styled.div`
  width: 48px;
  height: 48px;
  padding-right: 48px;
  @media (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

const IntegrationImage = styled(GatsbyImage)`
  width: 48px;
  height: 48px;
`;

const NoIntegrationsContainer = styled.div`
  text-align: center;
  margin: 2rem auto;
  padding-left: 2rem;
  @media (max-width: 767px) {
    padding-left: 1rem;
  }
`;

const NoIntegrationsHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  color: #0f0c09;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const NoIntegrationsCaption = styled.div`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 3.3rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const OutboundLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const NoIntegrationsButton = styled.button`
  width: 278px;
  height: 48px;
  color: #603eff;
  background-color: transparent;
  border: 3px solid #d1c5f9;
  border-radius: 48px;
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  margin-bottom: 2.5rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #603eff;
    color: #ffffff;
    cursor: pointer;
    border: 3px solid #603eff;
  }
  @media (max-width: 340px) {
    width: 80%;
    min-width: 140px;
  }
`;

class IntegrationsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredIntegrations: props.integrations,
      filteredCategories: props.categories,
      integrationsSidebarScrolled: false,
      integrationsMainMenuScrolled: false,
      showIntegrationsSubMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleIntegrationsScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleIntegrationsScroll);
  }

  toggleSubMenu = () => {
    const { showIntegrationsSubMenu } = this.state;
    this.setState({ showIntegrationsSubMenu: !showIntegrationsSubMenu });
  };

  setSidebar = integrationsSidebarScrolled => this.setState({ integrationsSidebarScrolled });

  setMainMenu = integrationsMainMenuScrolled => this.setState({ integrationsMainMenuScrolled });

  setSubMenu = showIntegrationsSubMenu => this.setState({ showIntegrationsSubMenu });

  setFilteredCategories = categories => this.setState({ filteredCategories: categories });

  setFilteredIntegrations = filteredData => this.setState({ filteredIntegrations: filteredData });

  handleIntegrationsScroll = () => {
    const mainContainerTop = document.getElementById('maincontainer').getBoundingClientRect().top;
    const containerHeight = document.getElementById('container').scrollHeight;
    const sidebarHeight = document.getElementById('sidebar').clientHeight;
    const scrollOffset = containerHeight - sidebarHeight;
    if (window.innerWidth > 768 && mainContainerTop <= 92 && window.scrollY < scrollOffset) {
      this.setSidebar(true);
    } else if (window.innerWidth <= 768 && window.scrollY > 323 && window.scrollY < scrollOffset) {
      this.setMainMenu(true);
    } else {
      this.setSidebar(false);
      this.setMainMenu(false);
      this.setSubMenu(false);
    }
  };

  handleFilteredData = (filteredData, searchQuery) => {
    // Get distinct category values from filtered data
    let distinctCategories = [...new Set(filteredData.map(feature => feature.category))];
    distinctCategories = Array.from(distinctCategories);

    this.setFilteredCategories(distinctCategories);
    this.setFilteredIntegrations(filteredData);

    if (searchQuery && searchQuery !== '') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'integrationsSearched',
        integrationsSearchQuery: searchQuery,
      });
    }
  };

  render() {
    const {
      integrationsSidebarScrolled,
      integrationsMainMenuScrolled,
      filteredCategories,
      showIntegrationsSubMenu,
      filteredIntegrations,
    } = this.state;
    const { integrations } = this.props;
    const classSidebarScrolled = integrationsSidebarScrolled ? 'scrolled' : '';
    const classMainMenuScrolled = integrationsMainMenuScrolled ? 'scrolled' : '';

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
              {filteredCategories.map(item => (
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
                  {filteredCategories.map(item => (
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
                <MainMenuIcon src={downArrowSVG} alt="down arrow" />
              </MainMenuFlexbox>
            </IntegrationsMobileMenuContainer>
            {showIntegrationsSubMenu && (
              <MainMenuSubmenu>
                <SubmenuHeader>
                  <SubmenuHeaderFlexbox>
                    <SubmenuHeaderHeading>Jump to a Section...</SubmenuHeaderHeading>
                    <SubmenuHeaderIcon src={closeXSVG} alt="close x" onClick={this.toggleSubMenu} />
                  </SubmenuHeaderFlexbox>
                </SubmenuHeader>
                <SubmenuContent>
                  {filteredCategories.map(item => (
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
                {filteredCategories.map(item => (
                  <Section name={item} key={item}>
                    <SectionTitle>{item}</SectionTitle>
                    <SectionIntegration>
                      {/* eslint-disable-next-line array-callback-return, consistent-return */}

                      {filteredIntegrations.map(eachIntegration => {
                        const {
                          integration,
                          category,
                          description,
                          connection,
                          tooltip,
                          icon,
                          subpage,
                        } = eachIntegration;
                        if (category === item) {
                          return (
                            <>
                              {/* Subpage included here */}
                              {subpage ? (
                                <StyledLink to={subpage.route}>
                                  <IntegrationContainer key={integration} className="hasSubpage">
                                    <SubpageCardArrow src={downArrowSVG} />
                                    <IntegrationFlexbox>
                                      <IntegrationImageContainer>
                                        <IntegrationImage
                                          image={icon}
                                          alt={`${integration + ' logo'}`}
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
                                          <Tooltip title={tooltip}>
                                            <span>{connection}</span>
                                          </Tooltip>
                                        </SectionIntegrationConnection>
                                        <SectionIntegrationCopy>
                                          {description}
                                        </SectionIntegrationCopy>
                                      </IntegrationTextContainer>
                                    </IntegrationFlexbox>
                                  </IntegrationContainer>
                                </StyledLink>
                              ) : (
                                <IntegrationContainer key={integration}>
                                  <IntegrationFlexbox>
                                    <IntegrationImageContainer>
                                      <IntegrationImage
                                        image={icon}
                                        alt={`${integration + ' logo'}`}
                                      />
                                    </IntegrationImageContainer>
                                    <IntegrationTextContainer>
                                      <SectionIntegrationTitle key={integration}>
                                        {integration}
                                      </SectionIntegrationTitle>
                                      <SectionIntegrationConnection>
                                        <Tooltip title={tooltip}>
                                          <span>{connection}</span>
                                        </Tooltip>
                                      </SectionIntegrationConnection>
                                      <SectionIntegrationCopy>{description}</SectionIntegrationCopy>
                                    </IntegrationTextContainer>
                                  </IntegrationFlexbox>
                                </IntegrationContainer>
                              )}
                            </>
                          );
                        }
                      })}
                    </SectionIntegration>
                  </Section>
                ))}
                {filteredCategories.length === 0 && (
                  <NoIntegrationsContainer>
                    <NoIntegrationsHeading>
                      Don’t see what you’re looking for?
                    </NoIntegrationsHeading>
                    <NoIntegrationsCaption>
                      Unlock more possibilities with Zapier!
                      <br />
                      <br />
                      Connect your Leadpages account to hundreds of apps when you get started with a
                      free Zapier account.
                    </NoIntegrationsCaption>
                    <OutboundLink
                      href="https://zapier.com/apps/leadpages/integrations"
                      alt="Zapier Leadpages Integrations"
                      target="_blank"
                    >
                      <NoIntegrationsButton>See What’s Possible</NoIntegrationsButton>
                    </OutboundLink>
                  </NoIntegrationsContainer>
                )}
              </MainContainer>
            </BodyContainer>
          </InnerContainer>
        </OuterContainer>
      </div>
    );
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
    }).isRequired,
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IntegrationsContent;

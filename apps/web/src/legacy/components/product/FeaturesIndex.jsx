import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'gatsby';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
// components
import SearchFilter from '../search/SearchFilter';
// images
import close from '../../assets/images/global/x_close.svg';
import downArrow from '../../assets/images/global/arrow_down_large.svg';

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
    margin-left: 24px;
    margin-right: 24px;
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
`;

const SectionTitle = styled.div`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  @media (max-width: 576px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #edecec;
  }
  @media (min-width: 992px) {
    margin-bottom: -3rem;
  }
`;

const SectionFlexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const SectionFeature = styled.div`
  margin-top: 3rem;
  padding-right: 3%;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
  @media (min-width: 992px) {
    margin-top: 6rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }
`;

const SectionFeatureTitle = styled.div`
  padding-bottom: 0.5rem;
  color: #0f0c09;
  font-family: 'Apercu Pro';
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

const SectionFeatureCopy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
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
    border-right: 1px solid rgba(15, 12, 9, 0.08);
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
  z-index: 1501;
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

const InboundLink = styled(Link)`
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

class FeaturesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarScrolled: false,
      isMainMenuScrolled: false,
      showSubMenu: false,
      scrollOffset: 0,
      filteredCategories: props.categories,
      filteredFeatures: props.data,
      searchQuery: '',
    };
  }

  componentDidMount() {
    const containerHeight = document.getElementById('container').scrollHeight;
    const sidebarHeight = document.getElementById('sidebar').clientHeight;
    const scrollOffset = containerHeight - sidebarHeight;
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

  setFilteredCategories = categories => this.setState({ filteredCategories: categories });

  setFilteredFeatures = filteredData => this.setState({ filteredFeatures: filteredData });

  setSearchQuery = searchQuery => this.setState({ searchQuery });

  handleSidebarScrolled = () => {
    const { scrollOffset } = this.state;
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1150 && window.scrollY > 415 && window.scrollY < scrollOffset) {
        this.setSidebar(true);
        this.setMainMenu(true);
      } else if (
        window.innerWidth >= 1150 &&
        window.scrollY > 415 &&
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

  handleFilteredData = (filteredData, searchQuery) => {
    // Get distinct category values from filtered data
    let distinctCategories = [...new Set(filteredData.map(feature => feature.category))];
    distinctCategories = Array.from(distinctCategories);

    this.setFilteredCategories(distinctCategories);
    this.setFilteredFeatures(filteredData);
    this.setSearchQuery(searchQuery);

    if (searchQuery && searchQuery !== '') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'featureIndexSearched',
        featureIndexSearchQuery: searchQuery,
      });
    }
  };

  render() {
    const {
      isSidebarScrolled,
      isMainMenuScrolled,
      filteredCategories,
      showSubMenu,
      filteredFeatures,
      searchQuery,
    } = this.state;

    const { data } = this.props;
    const classSidebarScrolled = isSidebarScrolled ? 'sidebarScrolled' : '';
    const classMainMenuScrolled = isMainMenuScrolled ? 'mainMenuScrolled' : '';
    return (
      <OuterContainer id="container">
        <InnerContainer>
          <SidebarContainer id="sidebar" className={classSidebarScrolled}>
            <SearchFilter
              handleFilteredData={debounce(this.handleFilteredData, 300)}
              dataSet={data}
              searchableProperties={['feature', 'description']}
            />
            {filteredCategories.map(item => (
              <SidebarHeading key={item}>
                <GeneralScrollLink activeClass="activeLink" to={item} spy smooth duration={500}>
                  {item}
                </GeneralScrollLink>
              </SidebarHeading>
            ))}
          </SidebarContainer>

          {/* Mobile menu */}
          <MainMenuContainer className={classMainMenuScrolled} onClick={this.toggleSubMenu}>
            <MainMenuFlexbox>
              <MainMenuHeading>
                {filteredCategories.map(item => (
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
                {filteredCategories.map(item => (
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
              {filteredCategories.map(item => (
                <Section name={item} key={item}>
                  <SectionTitle>{item}</SectionTitle>
                  <SectionFlexbox>
                    {/* eslint-disable-next-line consistent-return, array-callback-return */}
                    {filteredFeatures.map(feature => {
                      if (feature.category === item) {
                        return (
                          <SectionFeature key={feature.feature}>
                            <SectionFeatureTitle>
                              {/* eslint-disable-next-line react/no-danger */}
                              <div dangerouslySetInnerHTML={{ __html: feature.feature }} />
                            </SectionFeatureTitle>
                            <SectionFeatureCopy>
                              {/* eslint-disable-next-line react/no-danger */}
                              <div dangerouslySetInnerHTML={{ __html: feature.description }} />
                            </SectionFeatureCopy>
                          </SectionFeature>
                        );
                      }
                    })}
                  </SectionFlexbox>
                </Section>
              ))}
              {/* Empty search result message  */}
              {filteredFeatures.length === 0 && (
                <NoIntegrationsContainer>
                  <NoIntegrationsHeading>
                    We couldn&apos;t find any search results for &quot;{searchQuery}&quot;
                  </NoIntegrationsHeading>
                  <NoIntegrationsCaption>
                    Try a new search, or reach out to our team with questions about a specific
                    feature.
                  </NoIntegrationsCaption>
                  <InboundLink to="/contact" alt="contact us">
                    <NoIntegrationsButton>Contact us</NoIntegrationsButton>
                  </InboundLink>
                </NoIntegrationsContainer>
              )}
            </MainContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

FeaturesIndex.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      feature: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeaturesIndex;

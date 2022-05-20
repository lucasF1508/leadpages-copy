import styled from 'styled-components';

// Components
import Wistia_CustomerFeatureVideo from '../videos/Wistia_CustomerFeatureVideo';
import SiloSidebar from './SiloSidebar';
// Styles
import { Image, ParagraphLarge, ParagraphSmall, SectionTitle, H3, H4 } from './SiloGlobalStyles';

export const SidebarStyled = styled(SiloSidebar)`
  border-right: none;
  max-width: 250px;

  @media (min-width: 992px) {
    margin-left: 4.4rem;
  }
`;

export const StyledParagraphLarge = styled(ParagraphLarge)`
  margin-bottom: 2rem;
`;

export const StyledSectionTitleH2 = styled(SectionTitle)`
  margin: 0;
  padding-top: 4.5rem;
  padding-bottom: 1.5rem;
`;

export const StyledH3 = styled(H3)`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
  margin-top: 3rem;
  width: 80%;
  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.07px;
    line-height: 24px;
    width: 100%;
  }
`;

export const StyledH4 = styled(H4)``;

export const StyledParagraphSmall = styled(ParagraphSmall)`
  margin-bottom: 0;
  padding-bottom: 1.5rem;
`;

// TODO: GET ACTUAL FONT SIZE FROM DESIGN
export const StyledParagraphExtraSmall = styled(StyledParagraphSmall)`
  font-size: 17px;
`;

export const StyledWistia = styled(Wistia_CustomerFeatureVideo)`
  margin: 3.6rem 0 5.1rem 0;
`;

export const StyledImage = styled(Image)`
  margin: 3.6rem 0 5.1rem 0;
`;

export const SectionWrapper = styled.div``;

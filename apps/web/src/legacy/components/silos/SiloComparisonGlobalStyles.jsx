import { styled } from '@design'
// Components
import Wistia_CustomerFeatureVideo from '@legacy/components/videos/Wistia_CustomerFeatureVideo'
import SiloSidebar from './SiloSidebar'
// Styles
import {
  StyledImageComponent,
  ParagraphLarge,
  ParagraphSmall,
  SectionTitle,
  H3,
  H4,
} from './SiloGlobalStyles'

export const SidebarStyled = styled(SiloSidebar, {
  borderRight: 'none',
  maxWidth: '250px',

  '@>m': {
    marginLeft: '4.4rem',
  },
})

export const StyledParagraphLarge = styled(ParagraphLarge, {
  marginBottom: '2rem',
})

export const StyledSectionTitleH2 = styled(SectionTitle, {
  margin: 0,
  paddingTop: '4.5rem',
  paddingBottom: '1.5rem',
})

export const StyledH3 = styled(H3, {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  marginBottom: '2rem',
  marginTop: '3rem',
  width: '80%',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    letterSpacing: '-0.07px',
    lineHeight: '24px',
    width: '100%',
  },
})

export const StyledH4 = styled(H4, {})

export const StyledParagraphSmall = styled(ParagraphSmall, {
  marginBottom: 0,
  paddingBottom: '1.5rem',
})

// TODO: GET ACTUAL FONT SIZE FROM DESIGN
export const StyledParagraphExtraSmall = styled(StyledParagraphSmall, {
  fontSize: '17px',
})

export const StyledWistia = styled(Wistia_CustomerFeatureVideo, {
  margin: '3.6rem 0 5.1rem 0',
})

export const StyledImage = styled(StyledImageComponent, {
  margin: '3.6rem 0 5.1rem 0',
})

export const SectionWrapper = styled('div', {})

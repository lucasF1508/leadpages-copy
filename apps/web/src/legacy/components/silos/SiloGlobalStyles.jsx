import { styled } from '@design'
import { Link as ScrollLink } from 'react-scroll'
import Image from '@components/Image'

export const OuterContainer = styled('div', {
  width: '100%',
  height: '100%',
  background: '$white',
  position: 'relative',
})

export const InnerContainer = styled('div', {
  maxWidth: '1440px',
  mx: 'auto',
  zIndex: 1,
  background: '$white',
})

export const BodyContainer = styled('div', {
  display: 'flex',
  paddingTop: '3rem',
})

export const MainContainer = styled('div', {
  maxWidth: '816px',
  py: '3rem',
  overflowX: 'auto',

  '@<s': {
    px: '24px',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    px: '3rem',
  },

  '@>m': {
    marginLeft: '30%',
    width: '70%',
    px: '6rem',
  },
})

export const SectionContainer = styled('div', {
  marginTop: '96px',

  '&.first': {
    marginTop: '0 !important',
  },
})

export const PageTitle = styled('h1', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  color: '$text',
  width: '80%',

  '@media (max-width: 768px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
    marginBottom: '2rem',
    width: '100%',
  },

  '@media (min-width: 769px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
    marginBottom: '41px',
  },
})

export const SectionTitle = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '40px',
  lineHeight: '48px',
  color: '$text',
  marginBottom: '1.5rem',
})

export const PageSupertitle = styled('div', {
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  color: '$black',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '1rem',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const H2 = styled('h2', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '24px',
  letterSpacing: '-0.08px',
  lineHeight: '1.75em',
  marginBottom: '18px',
  marginTop: '42px',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const H3 = styled('h3', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  marginBottom: '16px',
  marginTop: '36px',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const H4 = styled('h4', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '16px',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const ParagraphLarge = styled('p', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '22px',
  lineHeight: '36px',
  marginBottom: '60px',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
    fontSize: '18px',
    lineHeight: '28px',
  },
})

export const ParagraphAccent = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.17px',
  lineHeight: '40px',
  color: '#0b236d',
  marginBottom: '60px',
  width: '80%',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    letterSpacing: '-0.07px',
    lineHeight: '24px',
    width: '100%',
  },
})

export const ParagraphSmall = styled('p', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  marginBottom: '45px',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
    fontSize: '18px',
    lineHeight: '28px',
  },
})

export const TextTitle = styled('h1', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  color: '$text',
  width: '80%',

  '@media (max-width: 768px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
    marginBottom: '2rem',
    width: '100%',
  },

  '@media (min-width: 769px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
    marginBottom: '41px',
  },
})

export const TextSupertitle = styled('div', {
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  color: '$black',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '1rem',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const UL = styled('ul', {
  marginTop: '24px',
  marginBottom: '45px',
  marginLeft: '32px',
  width: 'calc(80% - 32px)',

  '@media (max-width: 768px)': {
    width: 'calc(100% - 32px)',
  },
})

export const OL = styled('ol', {
  marginTop: '24px',
  marginBottom: '45px',
  marginLeft: '32px',
  width: 'calc(80% - 32px)',

  '@media (max-width: 768px)': {
    width: 'calc(100% - 32px)',
  },
})

export const ListItem = styled('li', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '18px',
})

export const ArticleLink = styled('a', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  paddingBottom: '2px',
  borderBottom: '3px solid $colors$purpleLight',
  transition: 'all 0.3s ease',

  '&:hover': {
    borderBottom: '3px solid $colors$primary',
    color: '$primary',
  },
})

export const HeaderLink = styled(ArticleLink, {
  color: '$text',
  fontFamily: 'inherit',
})

export const SiloScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  paddingBottom: '2px',
  borderBottom: '3px solid $colors$purpleLight',
  transition: 'all 0.3s ease',

  '&:hover': {
    borderBottom: '3px solid $colors$primary',
    color: '$primary',
    cursor: 'pointer',
  },
})

export const StyledLink = styled('a', {
  color: 'rgba(15, 12, 9, 0.5)',
  cursor: 'pointer',

  '&:hover': {
    color: '$primary',
  },
})

export const OutboundLink = styled('a', {
  textDecoration: 'none',
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  paddingBottom: '2px',
  borderBottom: '3px solid $colors$purpleLight',
  transition: 'all 0.3s ease',

  '&:hover': {
    borderBottom: '3px solid $colors$primary',
    color: '$primary',
  },
})

export const TemplateLink = styled('a', {})

export const StyledImageComponent = styled(Image, {
  width: '100%',
  marginBottom: '72px',
})

export const TemplateImage = styled(Image, {
  maxWidth: '652px',
})

export const Image1 = styled(Image, {
  width: '100%',
  marginBottom: '72px',
  maxWidth: '652px',
})

export const Image2 = styled(Image, {
  width: '100%',
  marginBottom: '30px',
  maxWidth: '652px',
})

export const Image3 = styled(Image, {
  width: '100%',
  marginBottom: '30px',
})

export const DesktopVideoHolder = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: '48px',
  marginBottom: '72px',
  maxWidth: '652px',
})

export const DesktopOnlyVideo = styled('video', {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  maxWidth: '652px',
  zIndex: 1,

  '@media (max-width: 568px)': {
    display: 'none',
  },
})

export const DesktopFallbackImage = styled(Image, {
  /* position: absolute; */
  top: 0,
  left: 0,
  width: '100%',
  maxWidth: '652px',
  display: 'block',

  '@media (max-width: 568px)': {
    display: 'none',
  },
})

export const MobileOnlyImage = styled(Image, {
  width: '100%',
  marginBottom: '72px',
  maxWidth: '652px',

  '@media (min-width: 569px)': {
    display: 'none !important',
  },
})

export const ImageWithBorder = styled(Image, {
  width: '100%',
  marginBottom: '72px',
  border: '1px solid #c3c2c1',
})

export const ImageWithBorder2 = styled(Image, {
  width: '100%',
  marginBottom: '72px',
  border: '1px solid #c3c2c1',
})

export const SmallImage = styled(Image, {
  width: '95%',
  maxWidth: '542px',
  marginBottom: '36px',

  '&:hover': {
    boxShadow:
      '0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
  },
})

export const SmallImage2 = styled(Image, {
  width: '100%',
  maxWidth: '542px',
  marginBottom: '72px',

  '&:hover': {
    boxShadow:
      '0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
  },
})

export const BGImageWrapper = styled('div', {
  '@media (max-width: 568px)': {
    flex: '0 0 70%',
    maxWidth: '70%',
    position: 'relative',
    marginLeft: 'auto',
  },

  '@media (min-width: 569px)': {
    marginBottom: '0rem',
    flex: '0 0 40%',
    maxWidth: '40%',
    width: '40%',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
})

export const BGImage = styled(Image, {
  width: '100%',
  marginBottom: '-7px',
})

export const TextContainer = styled('div', {
  alignSelf: 'center',

  '@media (max-width: 768px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
    paddingTop: '5%',
    px: '10%',
    marginBottom: '2rem',
  },

  '@media (min-width: 769px)': {
    flex: '0 0 50%',
    maxWidth: '50%',
    width: '50%',
    px: '5%',
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  minHeight: '562px',

  '@media (max-width: 568px)': {
    display: 'block',
  },
  backgroundColor: '$darkBlue',
  position: 'relative',
  marginTop: '54px',
  marginBottom: '72px',
})

export const Title = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '12px',
  letterSpacing: '0px',
  lineHeight: '18px',
  color: '$white',
  my: '2rem',
})

export const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$white',
  marginBottom: '2rem',
})

export const Button = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '3rem',
  px: '10%',
  border: '3px solid $colors$primary',
  borderRadius: '27px',
  backgroundColor: '$primary',
  color: '$white',
  cursor: 'pointer',
  fontFamily: 'Apercu Pro',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.875rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease',

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },
})

export const DefinitionHolder = styled('div', {
  backgroundColor: '$gray',
  width: '80%',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  h3: {
    marginBottom: '0px',
    padding: '24px',
    paddingBottom: '18px',
    width: '100%',
    boxSizing: 'border-box',
  },

  '& p:nth-child(2)': {
    fontSize: '14px',
    padding: '24px',
    paddingTop: '0px',
    marginBottom: '18px',
    width: '100%',
    boxSizing: 'border-box',
  },

  '& p:nth-child(3)': {
    fontStyle: 'italic',
    fontSize: '18px',
    padding: '24px',
    paddingTop: '0px',
    boxSizing: 'border-box',
    width: '100%',
  },
})

export const TemplatePreviewHolder = styled('div', {
  minWidth: '200px',
  minHeight: '200px',
  height: '815px',
  position: 'relative',
  marginTop: '2rem',
  boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25)',
  cursor: 'default !important',
  overflow: 'scroll',

  '@media (max-width: 770px)': {
    display: 'none',
  },

  '&.solotemplate': {
    marginBottom: '4rem',
  },
})

export const StaticPreviewImage = styled('img', {
  width: '100%',
  marginTop: '2rem',
  boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25)',
})

export const StaticTemplateLink = styled('a', {
  '@media (min-width: 771px)': {
    display: 'none',
  },
})

export const IframeWrapper = styled('div', {
  transition: '0.8s all ease',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  cursor: 'pointer',
})

export const SmallHeadline = styled('div', {
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',
  color: '$text',
  marginBottom: '1rem',
})

export const PurpleText = styled('span', {
  color: '$primary',
})

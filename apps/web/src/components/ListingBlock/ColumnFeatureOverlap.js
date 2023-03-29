import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from '@components/Link'

const OuterContainer = styled('div', {
  position: 'relative',
  maxWidth: '$extended',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '4rem',

  '@>s': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const InnerContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'start',

  '@media (max-width: 768px)': {
    display: 'block',
  },
})

const ColumnSection = styled('div', {
  position: 'relative',
  display: 'flex',
  WebkitBoxFlex: 0,
  MsFlex: '0 0 48%',
  flex: '0 0 48%',
  width: '100%',
  minHeight: '1px',
  maxWidth: '48%',
  textDecoration: 'none',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

const TextSection = styled(ColumnSection, {
  zIndex: 4,
  alignSelf: 'center',
  marginLeft: '-10%',
  padding: '5%',
  background: '$white',

  '@media (max-width: 768px)': {
    marginLeft: '-5%',
  },
})

const Title = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '24px',
  lineHeight: '30px',
  fontWeight: 500,
  marginBottom: '1.25rem',
  color: '$text',

  '@media (max-width: 844px)': {
    paddingTop: '20px',
  },
})

const MainText = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '1.25rem',
  color: '$textAlt',
})

const Supertitle = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  marginBottom: '1.25rem',
  color: '$darkBlue',
  background: '$tealLight',
  textTransform: 'uppercase',
  textAlign: 'center',
  borderRadius: '3px',
  display: 'inline-block',
  padding: '4px 8px',

  '@media (max-width: 844px)': {
    marginTop: '30px',
  },
})

const TextContainer = styled('div', {
  zIndex: 2,
  position: 'relative',
  background: '$white',
  width: '100%',
})

const ColumnFeatureOverlap = ({
  overline,
  title,
  excerpt,
  image,
  path,
  link,
  ctaLabel,
}) => (
  <OuterContainer>
    <InnerContainer>
      <ColumnSection>
        {image && <Image image={image} alt={image?.altText} />}
      </ColumnSection>
      <TextSection>
        <TextContainer>
          <Supertitle>{overline}</Supertitle>
          {title && <Title>{title}</Title>}
          {excerpt && <MainText>{excerpt}</MainText>}
          {path ? (
            <Link
              condition="internal"
              linkStyle="button"
              url={path}
              label={ctaLabel}
            />
          ) : (
            link && <Link linkStyle="button" {...link} />
          )}
        </TextContainer>
      </TextSection>
    </InnerContainer>
  </OuterContainer>
)

export default ColumnFeatureOverlap

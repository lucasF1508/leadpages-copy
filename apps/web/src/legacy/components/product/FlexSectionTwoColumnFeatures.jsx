import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'

const OuterContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})

const FlexRow = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const InnerContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  px: '3rem',

  '@>m': {
    px: '6rem',
  },

  variants: {
    flexReverse: {
      true: {
        flexDirection: 'row-reverse',
      },
      false: {
        flexDirection: 'row',
      },
    },
  },
})

const FlexRowItem6 = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
  justifyContent: 'space-between',
  textAlign: 'left',
  marginRight: '1%',

  '@>s': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const TextContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const HeadingContainer = styled(FlexRowItem6, {
  marginTop: '4rem',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const CopyContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexWrap: 'wrap',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const ImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const FlexRowItem6Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1.25rem',
  color: '$text',
})

const FlexRowItem6Copy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '3rem',
})

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  color: '$text',
  marginBottom: '2rem',
  textAlign: 'left',

  '@media (max-width: 767px)': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
    textAlign: 'center',
  },
})

const TransformCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginTop: '2rem',
  marginBottom: '4rem',
})

const BackgroundImageContainer = styled('img', {
  position: 'absolute',
  bottom: 0,
  zIndex: -1,
  overflowX: 'hidden',
  height: '90%',

  '@media (max-width: 991px)': {
    maxHeight: '55%',
  },

  '@media (max-width: 480px)': {
    display: 'none',
  },

  variants: {
    flexReverse: {
      false: {
        right: 0,
      },
    },
  },
})

const FlexSectionTwoColumnFeatures = ({
  flexReverse,
  bgImage,
  bgImageAlt,
  bgImageOffsetLeft,
  bgImageOffsetRight,
  mainHeading,
  mainCaption,
  feature1Heading,
  feature1Caption,
  feature2Heading,
  feature2Caption,
  feature3Heading,
  feature3Caption,
  image,
  imageAlt,
}) => (
  <OuterContainer>
    <BackgroundImageContainer
      src={bgImage.src}
      alt={bgImageAlt}
      flexReverse={flexReverse}
      css={{
        ...(bgImageOffsetRight
          ? { '&.rightoffset': { right: bgImageOffsetRight } }
          : {}),
        ...(bgImageOffsetLeft
          ? { '&.leftoffset': { left: bgImageOffsetLeft } }
          : {}),
      }}
      className={`${flexReverse && bgImageOffsetLeft ? 'leftoffset' : ''} ${
        !flexReverse && bgImageOffsetRight ? 'rightoffset' : ''
      }`}
    />
    <InnerContainer flexReverse={flexReverse}>
      <TextContainer>
        <HeadingContainer>
          <Heading>{mainHeading}</Heading>
          <TransformCopy>{mainCaption}</TransformCopy>
        </HeadingContainer>
        <CopyContainer>
          <FlexRowItem6>
            <FlexRowItem6Heading>{feature1Heading}</FlexRowItem6Heading>
            <FlexRowItem6Copy>{feature1Caption}</FlexRowItem6Copy>
          </FlexRowItem6>
          <FlexRowItem6>
            <FlexRowItem6Heading>{feature2Heading}</FlexRowItem6Heading>
            <FlexRowItem6Copy>{feature2Caption}</FlexRowItem6Copy>
          </FlexRowItem6>
          <FlexRowItem6>
            <FlexRowItem6Heading>{feature3Heading}</FlexRowItem6Heading>
            <FlexRowItem6Copy>{feature3Caption}</FlexRowItem6Copy>
          </FlexRowItem6>
        </CopyContainer>
      </TextContainer>
      <ImageContainer>
        <Image image={image} alt={imageAlt} />
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
)

FlexSectionTwoColumnFeatures.propTypes = {
  flexReverse: PropTypes.bool,
  bgImage: PropTypes.node.isRequired,
  bgImageAlt: PropTypes.string.isRequired,
  bgImageOffsetLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  bgImageOffsetRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  mainHeading: PropTypes.string.isRequired,
  mainCaption: PropTypes.string.isRequired,
  feature1Heading: PropTypes.string.isRequired,
  feature1Caption: PropTypes.string.isRequired,
  feature2Heading: PropTypes.string,
  feature2Caption: PropTypes.string,
  feature3Heading: PropTypes.string,
  feature3Caption: PropTypes.string,
  image: Image.isRequired,
  imageAlt: PropTypes.string.isRequired,
}

FlexSectionTwoColumnFeatures.defaultProps = {
  flexReverse: false,
  bgImageOffsetLeft: false,
  bgImageOffsetRight: false,
  feature2Heading: '',
  feature2Caption: '',
  feature3Heading: '',
  feature3Caption: '',
}

export default FlexSectionTwoColumnFeatures

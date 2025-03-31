import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
// images
import foregroundImage from '@legacy/assets/images/product/a-b-testing/a-b-testing_leadmeter_analytics-820px@2x.png'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
})

const InnerContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  justifyContent: 'flex-end',
  flexFlow: 'row wrap',
  width: '100%',

  '@media (max-width: 1023px)': {
    marginBottom: '3rem',
  },

  '@<s': {
    flexFlow: 'column-reverse wrap',
  },
})

const ColumnsContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexFlow: 'column wrap',
  maxHeight: '400px',
  marginTop: '2rem',
  marginRight: '15vw',

  '@media (max-width: 1023px)': {
    maxHeight: 'none',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '@>s': {
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: '0rem',
    maxWidth: '50%',
  },
})

const ColumnItem = styled('div', {
  position: 'relative',
  width: '244px',
  marginTop: '1rem',
  mx: '1rem',
  marginBottom: 0,
  textAlign: 'left',

  '@media (max-width: 1023px)': {
    marginTop: '2rem',
  },
})

const ItemHeader = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
})

const ItemText = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
})

const CTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'left',
  fontWeight: 500,
  marginBottom: '1rem',
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const ImageContainer = styled('div', {
  position: 'relative',
  right: 0,
  marginBottom: 0,
  width: '50vw',
  maxWidth: '661px',
  minWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  '@media (max-width: 1023px)': {
    alignSelf: 'center',
    maxWidth: '70%',
    minWidth: 'auto',
  },

  '@<s': {
    alignSelf: 'flex-end',
    width: '100%',
    maxWidth: '100%',
    minWidth: 'auto',
  },
})

const CustomImage = styled(Image, {
  width: '100%',
  maxWidth: '661px',

  '@<s': {
    maxWidth: '95%',
    alignSelf: 'flex-end',
  },
})

const ColumnsLeft = (props) => (
  <OuterContainer>
    <InnerContainer>
      <ColumnsContainer>
        {props.columnItems.map(
          ({ header, text, internalLink: link }, index) => (
            <ColumnItem key={index}>
              <ItemHeader>{header}</ItemHeader>
              <ItemText>{text}</ItemText>
              {link && (
                <Link href={link.route} aria-label={link.altText}>
                  <CTA>
                    {`${link.text}`}
                    <ArrowRightPurple
                      src={rightArrowPurple.src}
                      alt="purple right arrow"
                    />
                  </CTA>
                </Link>
              )}
            </ColumnItem>
          )
        )}
      </ColumnsContainer>
      <ImageContainer>
        <CustomImage
          image={foregroundImage}
          alt="leadmeter with a/b testing and analytics"
        />
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
)

export default ColumnsLeft

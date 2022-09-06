import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { RPImage } from '@legacy/constants/types'

const OuterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})

const FlexContainer = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  maxWidth: '1140px',
  padding: '3rem 6rem 8rem 6rem',

  '@media (max-width: 768px)': {
    padding: '5rem 2.4rem 3.5rem 3.4rem',
  },

  '@media (max-width: 425px)': {
    display: 'block',
    padding: '3.8rem 1.8rem 4.5rem 1.8rem',
  },
})

const ThreeColFlexItem = styled('div', {
  flex: '25%',
  marginRight: '3.3rem',
  marginBottom: '4.2rem',

  '&:nth-child(3n)': {
    marginRight: 0,
    marginBottom: 0,
  },

  '@media (max-width: 768px)': {
    marginBottom: '2.2rem',
    marginRight: '2.2rem',

    '&:nth-child(3n)': {
      marginRight: '2.2rem',
    },
  },

  '@media (max-width: 630px)': {
    flex: '1 0 39%',

    '&:nth-child(2n)': {
      marginRight: 0,
    },
  },

  '@media (max-width: 425px)': {
    maxWidth: '100%',

    marginRight: 0,
    marginBottom: '2.7rem',

    '&:nth-child(3n)': {
      marginRight: 0,
      marginBottom: '2.7rem',
    },
  },
})

const FourColFlexItem = styled('div', {
  flex: 1,
  marginRight: '3.3rem',
  marginBottom: '4.2rem',

  '&:nth-child(4n)': {
    marginRight: 0,
    marginBottom: 0,
  },

  '@media (max-width: 768px)': {
    marginBottom: '2.2rem',
    marginRight: '2.2rem',
    flex: '0 0 43%',

    '&:nth-child(4n)': {
      marginRight: '2.2rem',
    },
  },

  '@media (max-width: 625px)': {
    flex: '1 0 42%',

    '&:nth-child(2n)': {
      marginRight: 0,
    },
  },

  '@media (max-width: 425px)': {
    maxWidth: '100%',

    marginRight: 0,
    marginBottom: '2.7rem',

    '&:nth-child(4n)': {
      marginRight: 0,
      marginBottom: '2.7rem',
    },
  },
})

const Headline = styled('h2', {
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',

  '@media (max-width: 425px)': {},
})

const Description = styled('p', {
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
})

const StyledImage = styled(Image, {
  marginBottom: '1rem',
  maxHeight: '48px',
  maxWidth: '238px',
})

const IntegrationBenefits = ({ integrationInfo }) => {
  const columnCount = integrationInfo.length

  return (
    <OuterContainer>
      <FlexContainer>
        {columnCount % 4 === 0 ? (
          <>
            {integrationInfo.map((info) => (
              <FourColFlexItem key={info.headline}>
                {info.image && (
                  <StyledImage
                    image={info.image}
                    style={info.additionalStyle}
                  />
                )}
                <Headline>{info.headline}</Headline>
                <Description>{info.description}</Description>
              </FourColFlexItem>
            ))}
          </>
        ) : (
          <>
            {integrationInfo.map((info) => (
              <ThreeColFlexItem key={info.headline}>
                {info.image && (
                  <StyledImage
                    image={info.image}
                    style={info.additionalStyle}
                  />
                )}
                <Headline>{info.headline}</Headline>
                <Description>{info.description}</Description>
              </ThreeColFlexItem>
            ))}
          </>
        )}
      </FlexContainer>
    </OuterContainer>
  )
}

IntegrationBenefits.propTypes = {
  integrationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: RPImage.isRequired,
      headline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      additionalStyle: PropTypes.shape({ maxWidth: PropTypes.string }),
    })
  ).isRequired,
}

export default IntegrationBenefits

import React from 'react'
import PropTypes from 'prop-types'
import Link from '@components/Link'
import { styled } from '@design'

// Images
import arrowRightPurpleSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const InnerContainer = styled('div', {
  d: 'grid',
  maxWidth: '1140px',
  gap: '2rem',

  variants: {
    itemsPerRow: {
      1: {
        gtc: '1fr',
      },
      2: {
        gtc: '1fr 1fr',
      },
      3: {
        gtc: '1fr 1fr 1fr',
      },
    },
  },

  defaultVariants: {
    itemsPerRow: 2,
  },
})

const TextBlock = styled('div', {
  width: '100%',
  maxWidth: '300px',

  '@media (max-width: 900px)': {
    maxWidth: '250px',
  },

  '@media (max-width: 600px)': {
    maxWidth: '100%',
  },
})

const Heading = styled('div', {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
  color: '$text',
})

const MainText = styled('div', {
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
  color: '$textAlt',
})

const TextColumns = ({ items, itemsPerRow = 2 }) => (
  <OuterContainer>
    <InnerContainer itemsPerRow={{ '@initial': 1, '@>s': itemsPerRow }}>
      {items.map(({ title, content, link }, index) => (
        <TextBlock key={index}>
          {title && <Heading>{title}</Heading>}
          {content && <MainText>{content}</MainText>}
          {link && (
            <Link
              css={{ fontSize: '1rem', fontWeight: '$medium' }}
              hasIcon
              {...link}
            />
          )}
        </TextBlock>
      ))}
    </InnerContainer>
  </OuterContainer>
)

TextColumns.propTypes = {
  textBlockArray: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
      linkType: PropTypes.string,
      linkText: PropTypes.string,
      linkRoute: PropTypes.string,
      linkAltText: PropTypes.string,
    })
  ).isRequired,
}

export default TextColumns

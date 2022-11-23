import React from 'react'
import Link from '@components/Link'
import { styled } from '@design'

const OuterContainer = styled('div', {
  position: 'relative',
})

const InnerContainer = styled('div', {
  d: 'grid',
  jc: 'center',
  maxWidth: '1140px',
  gap: '2rem',
  mx: 'auto',

  variants: {
    itemsPerRow: {
      1: {
        gtc: '300px',
        '@<900': { gtc: '250px' },
        '@<600': { gtc: '1fr' },
      },
      2: {
        gtc: 'repeat(2, 300px)',
        '@<900': { gtc: 'repeat(2, 250px)' },
        '@<600': { gtc: 'repeat(2, 1fr)' },
      },
      3: {
        gtc: 'repeat(3, 300px)',
        '@<900': { gtc: 'repeat(3, 250px)' },
        '@<600': { gtc: 'repeat(3, 1fr)' },
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

export default TextColumns

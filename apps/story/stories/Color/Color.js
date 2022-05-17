import React from 'react'
import { styled, theme } from '@design'
import startCase from 'lodash/startCase'
import Heading from '@components/Heading'
import Color from 'color'

const { colors } = theme
const regex = /var\(\--\w*\-\w*\)/
const getTokenColor = (token) => {
  const isVar = colors[token].value.match(regex)
  if (isVar) {
    const varColor = colors[token].value
      .replace('var(--colors-', '')
      .replace(')', '')

    return getTokenColor(varColor)
  }

  return colors[token]?.value
}

const $Color = styled('div', {
  w: '100%',
})

const $Row = styled('div', {
  w: '100%',
  mt: '$10',

  '&:first-child': {
    mt: '$5',
  },
})

const $ColorCards = styled('div', {
  d: 'grid',
  gtc: 'repeat(auto-fill, minmax(10rem, 1fr))',
  gcg: '$2',
  grg: '$4',
  w: '100%',
  mb: '$4',
  o: 'visible',
})

const $ColorCard = styled('div', {
  br: '4px',
  w: '12rem',
  o: 'hidden',
  ta: 'center',
  bs: '$card',

  '&::before': {
    content: `''`,
    d: 'block',
    pb: '100%',
  },
})

const $ColorCardContent = styled('div', {
  p: '0.75rem $1',
  b: '1px solid $colors$grey3',
})

const $ColorCardHeading = styled('div', {
  fontWeight: 400,
  fontFamily: `'Open Sans', sans-serif`,
  fontSize: '0.875rem',
  letterSpacing: '0.02em',
})

const $ColorCardText = styled('div', {
  fontWeight: 400,
  fontFamily: `'Open Sans', sans-serif`,
  fontSize: '0.75rem',
  tt: 'uppercase',
  letterSpacing: '0.05em',

  variants: {
    secondary: {
      true: {
        fontSize: '0.50rem',
      },
    },
  },
})

export const Row = ({ heading, cards }) => (
  <$Row>
    <Heading tagStyle="h1" heading={heading} css={{ ta: 'left', mb: '$4' }} />
    <$ColorCards>
      {Object.keys(cards).map((key) => {
        const { name, color, cssVar } = cards[key]

        return (
          <$ColorCard key={key} css={{ '&::before': { bc: color } }}>
            <$ColorCardContent>
              <$ColorCardHeading>{name}</$ColorCardHeading>
              <$ColorCardText>{color}</$ColorCardText>
              {cssVar && <$ColorCardText secondary>{cssVar}</$ColorCardText>}
            </$ColorCardContent>
          </$ColorCard>
        )
      })}
    </$ColorCards>
  </$Row>
)

const Colors = ({ className }) => {
  const tokens = {}
  const palette = Object.keys(colors)
    .map((key) => {
      const colorValue = getTokenColor(key)
      const isToken = colors[key].value.match(regex)

      if (isToken) {
        tokens[key] = {
          name: startCase(key),
          color: Color(colorValue).hex(),
          cssVar: colors[key].value,
        }
        return false
      }

      return {
        [key]: {
          name: startCase(key),
          color: Color(colorValue).hex(),
        },
      }
    })
    .filter(Boolean)
    .reduce((obj, field) => ({ ...obj, ...field }), {})

  const rows = [
    {
      heading: 'Tokens',
      cards: tokens,
    },
    {
      heading: 'Palette',
      cards: palette,
    },
  ]

  return (
    <$Color className={className}>
      {rows.map(({ heading, cards }) => (
        <Row key={heading} heading={heading} cards={cards} />
      ))}
    </$Color>
  )
}

export default Colors

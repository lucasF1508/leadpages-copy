import React from 'react'
import { styled } from '@design'
import { theme } from '@design'
import { type } from '@design/tokens/type'
import { breakpoints as screenSizes } from '@design/tokens/mediaQueries'
import Heading from '@components/Heading'
import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'
import startCase from 'lodash/startCase'
import merge from 'lodash/merge'

export const $Typography = styled('div', {
  w: '100%',
  d: 'grid',
  gtc: '1fr',
  grg: '$4',
})

export const $TypographyRow = styled('div', {
  w: '100%',
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'stretch',
  mb: '$4',
  ml: '-$2',
  mr: '-$2',

  '@>m': {
    ff: 'row wrap',
  },
})

export const $TypographyItem = styled('div', {
  f: '1 1 100%',
  p: '$4',
  bs: '$card',
  mb: '$4',
  ml: '$2',
  mr: '$2',

  '@>m': {
    f: '0 1 calc((100% - $space$8) / 2)',
  },
})

export const $TypographyElement = styled('div', {
  h: '100%',
  w: '100%',
  d: 'flex',
  ff: 'column',
  jc: 'flex-start',
  ai: 'flex-start',
})

export const $TypographyElementInfo = styled('div', {
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'flex-start',
  mt: 'auto',
  mb: '-$1',
  ml: '-$1',
  mr: '-$1',
  pt: '$2',
  fontSize: '0.575rem',
  lh: '1.5',
  letterSpacing: '0.05em',
  fontWeight: 600,
  fontFamily: `'Open Sans', sans-serif`,

  '& > span': {
    d: 'block',
    f: '0 1 calc(33% - $space$2)',
    ml: '$1',
    mr: '$1',
    mb: '$1',
  },
})

export const $BreakpointSectionWrapper = styled('div', {
  d: 'flex',
  ff: 'column wrap',
  w: '100%',
  ai: 'center',
  b: '$base',
  p: '$1',
  bs: '$dropdown',

  '& > h6': {
    fontSize: '0.75rem',
    textDecoration: 'underline',
    mb: '$1',
  },
})

export const $BreakpointSection = styled('div', {
  mb: '$1',
  ta: 'center',
})

export const mapContent = (element) =>
  startCase(
    element.charAt(0) === 'h' ? element.replace('h', 'Heading') : element
  )

export const removeDollarSigns = (token) => token.replace(/\$/g, ' ').trim()

export const mapLabelSizes = (obj) => {
  const fontSize = `${parseFloat(obj?.fontSize) * 16}px / ${obj?.fontSize}`
  const lineHeight = `${Number((obj?.lineHeight * 100).toFixed(2))}%`

  return { fontSize, lineHeight }
}

export const mapLabelStyles = (type, obj) => {
  const { fonts, fontWeights } = type
  const { baseStyles, letterSpacing = 0 } = obj || {}
  const { fontWeight } = baseStyles
  const fontFamily = startCase(removeDollarSigns(fonts.base).split(' ').at(-1))
  const configuredFontWeight = `${startCase(removeDollarSigns(fontWeight))} / ${
    fontWeights[removeDollarSigns(fontWeight)]
  }`
  const letterSpacingAsPercent = `${Number(
    (parseFloat(letterSpacing).toFixed(4) * 100).toFixed(2)
  )}%`

  return {
    letterSpacing: letterSpacingAsPercent,
    fontFamily,
    fontWeight: configuredFontWeight,
  }
}

export const filterMediaQueries = (element, isMediaQuery = true) => {
  return Object.keys(element)
    .filter((key) => (isMediaQuery ? key.includes('@') : !key.includes('@')))
    .reverse()
    .reduce((obj, key) => {
      obj[key] = element[key]
      return obj
    }, {})
}

export const screenSizeFromMediaQueryLetter = (mediaQuery) => {
  const letter = mediaQuery.split('').at(-1)
  const screenSize = screenSizes[letter]

  return `${mediaQuery.replace(letter, screenSize)}px`
}

export const configureBreakpointStyles = (obj) => {
  const breakpointStyles = Object.entries(obj).map((declaration) => {
    const [property, value] = declaration
    return `${startCase(property)}: ${value}`
  })
  return breakpointStyles.join(' / ')
}

const Typography = ({ className }) => {
  const { fontSizes, fontStyles } = type
  const elements = merge(fontSizes, fontStyles)

  const rows = Object.keys(elements)
    .map((element) => {
      const content = mapContent(element)
      const elementStyle = elements[element]
      const breakpoints = filterMediaQueries(elementStyle)
      const baseStyles = filterMediaQueries(elementStyle, false)
      const styles = { baseStyles, ...breakpoints }
      return {
        content,
        key: element,
        styles,
        breakpoints,
        labels: {
          sizes: mapLabelSizes(baseStyles),
          styles: mapLabelStyles(type, styles),
        },
      }
    })
    .sort((a, b) => {
      if (a.content.includes('Heading') && !b.content.includes('Heading')) {
        return -1
      }
      return 1
    })
  return (
    <$Typography className={className}>
      {rows.map(({ content, labels, styles, breakpoints }) => {
        return (
          <$TypographyRow>
            {Object.keys(styles).map((size) => (
              <$TypographyItem>
                <$TypographyElement>
                  <Heading heading={content} css={styles[size]} />
                  <$TypographyElementInfo>
                    {[
                      ...Object.keys(labels.sizes),
                      ...Object.keys(labels.styles),
                    ].map((property) => {
                      return (
                        <span key={kebabCase(property)}>
                          {upperFirst(kebabCase(property))}:{' '}
                          {labels?.styles[property] || labels.sizes[property]}
                        </span>
                      )
                    })}
                    {!!Object.keys(breakpoints).length && (
                      <$BreakpointSectionWrapper>
                        <Heading tag="h6">Breakpoint Styles</Heading>
                        {Object.keys(breakpoints).map((breakpoint) => {
                          return (
                            <$BreakpointSection>
                              <span key={breakpoint} className={className}>
                                {`${screenSizeFromMediaQueryLetter(
                                  breakpoint
                                )} => ${configureBreakpointStyles(
                                  breakpoints[breakpoint]
                                )}`}
                              </span>
                            </$BreakpointSection>
                          )
                        })}
                      </$BreakpointSectionWrapper>
                    )}
                  </$TypographyElementInfo>
                </$TypographyElement>
              </$TypographyItem>
            ))}
          </$TypographyRow>
        )
      })}
    </$Typography>
  )
}

export default Typography

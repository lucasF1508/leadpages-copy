import React from 'react'
import { styled } from '@design'
import Media from '@components/Media'
import Text from '@components/Text'

import Quotes from '@components/Testimonial/Quotes'

import TextQuote from './TextQuote'

const $MediaTextQuote = styled('div', {
  '@>m': {
    box: { property: 'mx', multiplier: -0.6 },
  },
  '@>l': {
    mx: 'unset',
  },
})

const $FlexImageInner = styled('div', {
  w: '100%',
  d: 'flex',
  ai: 'center',
  h: '100%',
  f: '1 0 50%',

  '@>1400': {
    mw: '25.125rem',
  },
})

const $Image = styled('div', {
  width: '100%',
  height: '100%',
  d: 'flex',
  ai: 'center',
})

const $MediaTextQuoteSection = styled('div', {
  d: 'flex',
  ff: 'column',
  ai: 'center',
  jc: 'center',

  '&:nth-child(even)': {
    ff: 'column-reverse',
  },

  '@>769': {
    ff: 'row',

    '&:nth-child(even)': {
      ff: 'row',
    },
  },

  '> :first-of-type': {
    '@>1400': {
      flex: '0 0 35.75rem',
    },
  },

  variants: {
    isFirstSection: {
      true: {
        [`& ${$Image}`]: {
          borderTopLeftRadius: '3.125rem',
          overflow: 'hidden',
        },
      },
    },
    isLastSection: {
      true: {
        [`& ${$FlexImageInner}`]: {
          borderBottomRightRadius: '3.125rem',
          overflow: 'hidden',
        },
      },
    },
  },
})

const $MediaTextQuoteColumn = styled('div', {
  width: '100%',

  variants: {
    isFlex: {
      true: {
        d: 'flex',
        ai: 'center',
        as: 'stretch',
      },
    },
  },
})

const $Text = styled('div', {
  mb: '3.625rem',

  '@>1025': {
    mb: '5.5rem',
  },

  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lh: 1.2,
    letterSpacing: '-0.005em',

    '@>769': {
      fontSize: '1.75rem',
    },

    '@>1400': {
      fontSize: '2rem',
    },
  },
  '& p': {
    fontSize: '1rem',
    lh: 1.5,

    '@>1400': {
      fontSize: '1.125rem',
      lh: 1.6,
    },
  },
})

const $FlexImage = styled('div', {
  d: 'flex',
  ai: 'center',
  as: 'stretch',
  w: '100%',
})

const $Quote = styled('div', {
  d: 'none',
  position: 'relative',
  mx: 'auto',

  '@>1400': {
    d: 'block',
  },

  variants: {
    isMobile: {
      true: {
        d: 'block',

        '@>1400': {
          d: 'none',
        },
      },
      false: {
        '@>1400': {
          pr: 0,
        },
      },
    },
    alignEnd: {
      true: {
        alignSelf: 'flex-end',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
      },
    },
  },
})

const $ContentFirst = styled('div', {
  paddingTop: '3rem',
  paddingBottom: '2.5rem',

  '@>769': {
    pr: '3.75rem',
    mw: '26.5rem',
    mx: 'auto',
  },

  '@>l': {
    pr: '4.75rem',
  },

  '@>1400': {
    pr: 0,
    paddingTop: '4.625rem',
    paddingBottom: '4.625rem',
  },
})

const $ContentLast = styled('div', {
  paddingTop: '3rem',
  paddingBottom: '2.5rem',

  '@>769': {
    mw: '36rem',
    mx: 'auto',
    pl: '2.85rem',
  },

  '@>m': {
    pl: '3rem',
  },

  '@>l': {
    pl: '4.5rem',
  },

  '@>1400': {
    pl: '6.875rem',
    paddingTop: '6.625rem',
    paddingBottom: '6.125rem',
  },
})

const MediaTextQuote = ({ children, ...props }) => {
  const { sections } = props

  return (
    <$MediaTextQuote>
      {sections.map(
        (
          { backgroundColor, image, quoteColor, _key, testimonial, content },
          i
        ) => {
          const {
            authorTitle,
            authorName,
            testimonial: quote,
          } = testimonial || {}

          const author = authorName || authorTitle
          const title = authorName && authorTitle

          const isOdd = i % 2 === 0
          const first = isOdd ? { image } : { content, quote, author }
          const second = isOdd ? { content, quote, author } : { image }

          const quoteImage = Quotes[quoteColor || 'lavenderLight']

          return (
            <$MediaTextQuoteSection
              odd={true}
              key={_key}
              isFirstSection={i === 0}
              isLastSection={i === sections.length - 1}
            >
              <$MediaTextQuoteColumn isFlex>
                {first.image ? (
                  <$Image
                    css={{ backgroundColor: `$colors$${backgroundColor}` }}
                  >
                    <Media media={{ ...image, startInView: true }} />
                  </$Image>
                ) : (
                  <$ContentFirst>
                    <$Text css={{ '@>1400': { mb: 0 } }}>
                      <Text content={content} />
                    </$Text>
                    <$Quote isMobile>
                      <TextQuote
                        quote={quote}
                        author={author}
                        quoteImage={quoteImage}
                      />
                    </$Quote>
                  </$ContentFirst>
                )}
              </$MediaTextQuoteColumn>
              <$MediaTextQuoteColumn isFlex={!!second.image}>
                {second.image && (
                  <$FlexImage>
                    <$FlexImageInner
                      css={{
                        backgroundColor: `$colors$${backgroundColor}`,
                      }}
                    >
                      <Media media={{ ...image, startInView: true }} />
                    </$FlexImageInner>
                    <$Quote
                      alignEnd
                      isMobile={false}
                      css={{
                        maxWidth: '14.375rem',
                        '@>1400': { pl: '4.375rem' },
                      }}
                    >
                      <TextQuote
                        quote={quote}
                        author={author}
                        quoteImage={quoteImage}
                      />
                    </$Quote>
                  </$FlexImage>
                )}
                {!second.image && (
                  <$ContentLast>
                    <$Text>
                      <Text content={content} />
                    </$Text>
                    <div style={{ position: 'relative' }}>
                      <TextQuote
                        quote={quote}
                        author={author}
                        title={title}
                        quoteImage={quoteImage}
                      />
                    </div>
                  </$ContentLast>
                )}
              </$MediaTextQuoteColumn>
            </$MediaTextQuoteSection>
          )
        }
      )}
    </$MediaTextQuote>
  )
}

export default MediaTextQuote

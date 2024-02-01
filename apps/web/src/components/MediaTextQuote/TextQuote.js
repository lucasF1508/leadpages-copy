import { styled } from '@design'

const $TextQuote = styled('div', {
  position: 'relative',
})

const $Quotes = styled('div', {
  position: 'absolute',
  zIndex: '$under',
  top: 0,
  left: 0,
  transform: 'translate(-60%, -45%)',
})

const $Text = styled('div', {
  fontSize: '0.75rem',
  letterSpacing: 'initial',
  textTransform: 'none',
  fontWeight: 400,
  lh: '1.5',

  variants: {
    large: {
      false: {
        '@>1400': { fontSize: '0.875rem' },
      },
      true: {
        '@>m': { fontSize: '0.875rem' },
        '@>1400': { fontSize: '1rem' },
      },
    },
  },
})

const TextQuote = ({ quote, author, quoteImage, title }) => (
  <$TextQuote>
    {quoteImage && (
      <$Quotes>
        <img src={quoteImage.src} alt="arrow down" />
      </$Quotes>
    )}
    <$Text css={{ color: '$textAlt', pb: '1.5rem' }} large>
      {quote}
    </$Text>
    {author && <$Text large={false}>{author}</$Text>}
    {title && (
      <$Text large={false} css={{ c: '$textAlt' }}>
        {title}
      </$Text>
    )}
  </$TextQuote>
)

export default TextQuote

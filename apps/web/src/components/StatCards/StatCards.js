import Heading from '@components/Heading'
import Text from '@components/Text'
import { styled } from '@design'

const $Stats = styled('div', {
  box: { property: 'mt', multiplier: 1.5 },
  d: 'flex',
  ff: 'column',
  ai: 'center',
  jc: 'center',
  gap: '$3',

  '@>700': {
    ff: 'row nowrap',
    ai: 'stretch',
  },
})

const $Stat = styled('div', {
  p: '$3 $2 $3 $3',
  f: '0 1 auto',
  border: '3px solid $colors$text',
  mx: 'auto',
  w: '100%',
  mw: '18rem',
  backgroundColor: '$statCards',

  '@>700': {
    f: '0 1 calc((100% - 1.5rem) / 3)',
    mx: 'unset',
    mw: 'unset',
  },

  '@>m': {
    p: '$4',
  },

  '&:first-child': {
    btlr: '2.5rem',

    '@>900': {
      btlr: '3.125rem',
    },
  },
  '&:last-child': {
    bbrr: '2.5rem',

    '@>900': {
      bbrr: '3.125rem',
    },
  },
})

const StatCards = ({ stats }) => (
  <$Stats>
    {!!stats.length &&
      stats.map((stat) => (
        <$Stat key={stat.heading}>
          <Heading
            css={{
              c: '$tealLighter',
              fw: '$bold',
              lineHeight: 1.15,
              type: '3xl',

              '@>m': {
                type: '5xl',
              },

              '@>l': {
                type: '7xl',
              },
            }}
            heading={stat.heading}
          />
          <Text
            as="p"
            css={{
              mt: '$1_5',
              type: 'sm',
              lh: 1.5,
              '@>m': {
                lh: 1.3,
                type: 'lg',
              },
            }}
            content={stat.content}
          />
        </$Stat>
      ))}
  </$Stats>
)

export default StatCards

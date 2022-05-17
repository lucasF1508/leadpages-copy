import React from 'react'
import { styled } from '@design'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Avatar from '@components/Avatar'

const $Team = styled('section', {
  d: 'flex',
  ff: 'column nowrap',
  ai: 'center',
  w: '100%',
})

const $TeamTextContent = styled('div', {
  ta: 'center',
  mb: '$4',

  '> div': {
    mw: '$small',
  },

  '@>m': {
    mb: '$6',
  },
})

const $TeamGrid = styled('div', {
  d: 'grid',
  gtc: 'repeat(2, 1fr)',
  grg: '$3',
  w: '100%',

  '@>teamMobile': {
    gtc: 'repeat(3, 1fr)',
  },

  '@>s': {
    gtc: 'repeat(4, 1fr)',
    grg: '$8',
  },

  '@>m': {
    gtc: 'repeat(6, 1fr)',
  },
})

const Team = ({ heading, content, team, ...props }) => (
  <$Team {...props}>
    {heading || content ? (
      <$TeamTextContent>
        <div>
          {heading && <Heading tag="h4" heading={heading} css={{ mb: '$2' }} />}
          {content && (
            <Text
              tagStyle="subHeading"
              content={content}
              css={{ c: '$textAlt' }}
            />
          )}
        </div>
      </$TeamTextContent>
    ) : null}
    <$TeamGrid>
      {team &&
        team.map((person) => (
          <Avatar
            key={person?._key}
            layout="vertical"
            large={true}
            {...person}
          />
        ))}
    </$TeamGrid>
  </$Team>
)

export default Team

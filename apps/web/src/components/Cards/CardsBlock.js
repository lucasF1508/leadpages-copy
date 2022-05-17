import React from 'react'
import { styled } from '@design'
import ContentGroup from '@components/ContentGroup'
import Cards from './Cards'

const $CardsBlock = styled('div', {})

const CardsBlock = ({ label, heading, content, link, cards }) => (
  <$CardsBlock>
    <ContentGroup
      label={label}
      heading={heading}
      content={content}
      link={link}
      align="left"
      css={{
        mb: '$5',
      }}
    />
    <Cards {...cards} />
  </$CardsBlock>
)
export default CardsBlock

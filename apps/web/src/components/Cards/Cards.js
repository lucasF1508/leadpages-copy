import React from 'react'
import { styled } from '@design'
import Pagination from '@components/Pagination'
import Filter from '@components/Filter'
import CardPost from './CardPost'

const $Cards = styled('div', {})

const $CardsInner = styled('div', {
  d: 'grid',
  gtc: '1fr',
  grg: '$5',
  gcg: '$5',

  '@>archiveMobile': {
    gtc: 'repeat(2, 1fr)',
  },

  '@>s': {
    gtc: 'repeat(3, 1fr)',
  },
})

const Cards = ({
  css,
  className,
  docs = [],
  hasPagination,
  pagination,
  categories = [],
}) => {
  if (!docs) return null

  return (
    <$Cards css={css} className={className}>
      {!!categories?.length && <Filter items={categories} />}
      <$CardsInner>
        {docs.map((doc) => (
          <CardPost key={doc?._key} {...doc} />
        ))}
      </$CardsInner>
      {hasPagination && pagination && <Pagination pagination={pagination} />}
    </$Cards>
  )
}

export default Cards

import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@components/Hero'

const Rack = dynamic(() => import('@components/Rack'))

const Archive = ({ hero, components, docs, pagination, categories }) => {
  const hasPagination = pagination?.totalPages > 1

  return (
    <>
      {hero && <Hero {...hero} />}
      <Rack
        components={[
          ...(components || []),
          {
            _key: 'cards',
            _type: 'cards',
            docs,
            hasPagination,
            pagination,
            categories,
            css: {
              position: 'relative',
              z: '$aboveContent',
            },
          },
        ]}
      />
    </>
  )
}

export default Archive

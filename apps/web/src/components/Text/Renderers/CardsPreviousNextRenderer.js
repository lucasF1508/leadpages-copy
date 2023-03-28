import React from 'react'
import CardsPreviousNext from '@components/Cards/CardsPreviousNext'

const CardsPreviousNextRenderer = ({
  node: { heading, next, previous } = {},
}) => <CardsPreviousNext heading={heading} next={next} previous={previous} />

export default CardsPreviousNextRenderer

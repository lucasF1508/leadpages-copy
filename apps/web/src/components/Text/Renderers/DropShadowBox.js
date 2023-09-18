import React from 'react'
import { styled } from '@design'
import Text from '../Text'
import { $ListBranded } from '../Lists/ListBranded'

const $DropShadowBox = styled('div', {
  my: '$3',
  p: '$3',
  bc: '$grayAlt',
  br: '$l',
  boxShadow: '0 0 15px $colors$grayTertiaryAlt',

  [`> article > ${$ListBranded}`]: {
    mt: '0 !important',
  },
})

const DropShadowBox = ({ node = {}, ...props }) => {
  const { content } = node

  return (
    <$DropShadowBox {...props}>
      <Text content={content} />
    </$DropShadowBox>
  )
}

export default DropShadowBox

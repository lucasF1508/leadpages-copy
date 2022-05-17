import React from 'react'
import { styled } from '@design'

const $Label = styled('span', {
  type: 'label',
})

const Label = ({ content, ...props }) => <$Label {...props}>{content}</$Label>

export default Label

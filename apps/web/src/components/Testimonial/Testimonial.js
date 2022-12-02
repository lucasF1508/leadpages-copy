import React from 'react'
import { styled } from '@design'
import Text from '@components/Text'
import Avatar from '@components/Avatar'

const $Testimonial = styled('div', {
  d: 'flex',
  ff: 'column nowrap',
  ai: 'center',
  gap: '$3',
})

const Testimonial = ({ image, content, name, title, ...props }) => (
  <$Testimonial {...props}>
    <Text tagStyle="subHeading" content={content} css={{ ta: 'center' }} />
    <Avatar image={image} name={name} title={title} />
  </$Testimonial>
)

export default Testimonial

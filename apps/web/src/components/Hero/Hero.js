import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import ContentGroup from '@components/ContentGroup'

const $Hero = styled('div', {})

const Hero = ({ label, heading, content, link, ...props }) => (
  <$Hero {...props}>
    <Pinion maxWidth="base">
      <ContentGroup
        label={label}
        heading={heading}
        content={content}
        link={link}
        align="left"
        props={{
          heading: {
            tag: 'h1',
            css: {
              mb: 0,
              textGradient: '45deg, $blue10 -20%, $purple10 40%',
              lineHeight: 1.125,
            },
          },
        }}
      />
    </Pinion>
  </$Hero>
)

export default Hero

import React from 'react'
import { styled } from '@design'
import Text from '@components/Text'
import Heading from '@components/Heading'
import Image from '@components/Image'
import SidebarCTAImage from '@images/BlogCTABackground@2x.jpg'
import Link from '@components/Link'

const $CTAContainer = styled('div', {
  position: 'relative',
  background: '$brand',
  c: '$buttonText',
  padding: '$4',
  d: 'flex',
  fd: 'column',
  gap: '$3',
})

const ArchiveRelatedCTA = ({ content: ctaContent }) => {
  const {
    ctaHeading: heading,
    ctaSubHeading: subHeading,
    ctaContent: content,
    links = [],
  } = ctaContent

  return (
    <$CTAContainer>
      <Image image={SidebarCTAImage} type="fluid" />
      <Heading
        heading={heading || 'Curious about leadpages?'}
        tag="h4"
        tagStyle="h5"
        css={{ zIndex: '$content' }}
      />
      <Text
        css={{
          fontWeight: 600,
          mb: 0,
          fontSize: '16px',
          letterSpacing: '0.65px',
        }}
      >
        {subHeading || 'Try it Risk-Free today'}
      </Text>
      <Text css={{ type: 'input', mb: 0, mw: '23.25rem' }}>
        {content ||
          `Create web pages, explore our integrations, and see if we're the right
          fit for your business.`}
      </Text>
      {links[0] && (
        <Link
          {...links[0]}
          linkStyle="buttonInverse"
          icon="internal"
          hasIcon
          css={{ px: 0, mw: '12rem' }}
        />
      )}
    </$CTAContainer>
  )
}

export default ArchiveRelatedCTA

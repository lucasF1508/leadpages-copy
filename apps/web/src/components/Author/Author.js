import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Heading from '@components/Heading'
import Text from '@components/Text'
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn'
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'

const $Author = styled('div', {
  d: 'flex',
  ff: 'column',
  ai: 'center',
  gap: '$3',
  mb: '$3',
  ta: 'center',

  '@>s': {
    mb: '$8',
  },
})

const $Headshot = styled(Image, {
  mw: '8.75rem',
})

const $AuthorJobTitle = styled('span', {
  d: 'inline-block',
  typeSizes: 'input',
  typeStyles: 'blogCard',
  c: '$textAlt',
})

const $AuthorSocial = styled('div', {
  d: 'flex',
  gap: '$2',
})

const $AuthorSocialIcon = styled('div', {
  d: 'flex',
  jc: 'center',
  ai: 'center',
  border: '3px solid $colors$purpleLight',
  br: '$round',
  w: '100%',
  boxSizing: 'border-box',
  p: '$1',
  transition: 'all 300ms',

  '&:hover': {
    bc: '$primary',
    borderColor: '$primary',

    svg: {
      fill: '$white',
    },
  },

  svg: {
    fill: '$primary',
  },
})

const Author = ({
  headshot,
  title: name,
  jobTitle,
  bio,
  email,
  linkedInUrl,
}) => {
  const socialPlatforms = [
    {
      title: 'email',
      icon: AiOutlineMail,
      url: `mailto:${email}`,
    },
    {
      title: 'linkedIn',
      icon: FaLinkedinIn,
      url: linkedInUrl,
      rel: 'noopener noreferrer',
      target: '_blank',
    },
  ]

  return (
    <$Author>
      {headshot && <$Headshot image={headshot} />}
      {name && <Heading heading={name} />}
      {jobTitle && <$AuthorJobTitle>{jobTitle}</$AuthorJobTitle>}
      {bio && (
        <Text content={bio} css={{ mw: 'calc($cols8 + $space$4)', mb: 0 }} />
      )}
      <$AuthorSocial>
        {socialPlatforms.map(
          ({ title, url, ...linkProps }) =>
            title && (
              <a key={title} href={url} aria-label={title} {...linkProps}>
                <$AuthorSocialIcon>
                  <linkProps.icon />
                </$AuthorSocialIcon>
              </a>
            )
        )}
      </$AuthorSocial>
    </$Author>
  )
}

export default Author

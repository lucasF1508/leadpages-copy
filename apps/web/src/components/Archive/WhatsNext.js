import React from 'react'
import { styled } from '@design'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'
import suggested from '@images/suggested.png'

const $WhatsNext = styled('div', {
  bc: '$grayAlt',
  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const $Heading = styled(Heading, {
  pb: '$4',
})

const $WhatsNextContent = styled('div', {
  px: '$2_5',
  py: '$4',

  [`${$Heading}`]: {
    fontFamily: '$base',
  },

  '@>s': {
    px: '$5',
  },
})

const $WhatsNextImage = styled('div', {
  width: '100%',
  maxWidth: '145px',

  '@>s': {
    maxWidth: '245px',
  },
})

const $Text = styled(Text, {
  fontFamily: '$base',
  c: '$textAlt',
  fontWeight: 300,
  fontSize: '$size$2_5',
  mb: '$3',
})

const $TitleText = styled(Text, {
  d: 'inline',
  c: '$textAlt',
  borderBottom: '1px solid $colors$primary',

  '& :hover': {
    borderBottom: '2px solid $colors$primary',
  },
})

const $TitleContent = styled('div', {
  mb: '$3',
  display: 'flex',

  a: {
    d: 'inline',
  },
})

const WhatsNext = ({ articles, image, ...props }) => (
  <$WhatsNext {...props}>
    <$WhatsNextContent>
      <$Heading
        tag="h4"
        tagStyle="h5"
        heading={'Wondering what to read next?'}
      />
      <$Text content="Here’s what we suggest:" />
      {articles.map((article) => (
        <$TitleContent key={article._id}>
          <div>
            <span>→ </span>
            <$TitleText>
              <Link url={article.path} condition="internal">
                {article.title}
              </Link>
            </$TitleText>
          </div>
        </$TitleContent>
      ))}
    </$WhatsNextContent>
    <$WhatsNextImage>
      <Image objectFit="contain" image={image || suggested} />
    </$WhatsNextImage>
  </$WhatsNext>
)

export default WhatsNext

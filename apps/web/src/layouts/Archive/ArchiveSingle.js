import React from 'react'
import { styled } from '@design'
import Pinion from '@components/Pinion'
import ArchiveBreadcrumbs from '@components/Breadcrumbs/ArchiveBreadcrumbs'
import Heading from '@components/Heading'
import Image from '@components/Image'
import ArchiveSidebar from '@components/Archive/Sidebar'
import Link from '@components/Link'
import Text from '@components/Text'
import WhatsNext from '@components/Archive/WhatsNext'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const socialSharePlatforms = [
  {
    title: 'facebook',
    icon: dynamic(() =>
      import('@react-icons/all-files/fa/FaFacebookF').then(
        ({ FaFacebookF }) => FaFacebookF
      )
    ),
    url: (url, title) =>
      `http://www.facebook.com/sharer.php?u=${url}&t=${encodeURIComponent(
        title
      )}`,
  },
  {
    title: 'twitter',
    icon: dynamic(() =>
      import('@react-icons/all-files/fa/FaTwitter').then(
        ({ FaTwitter }) => FaTwitter
      )
    ),
    url: (url, title) =>
      `https://twitter.com/intent/tweet?text=${title?.replace(
        /\s/g,
        '+'
      )}&url=${url}&via=leadpages`,
  },
  {
    title: 'linkedIn',
    icon: dynamic(() =>
      import('@react-icons/all-files/fa/FaLinkedinIn').then(
        ({ FaLinkedinIn }) => FaLinkedinIn
      )
    ),
    url: (url, title) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${title?.replace(
        /\s/g,
        '+'
      )}&source=https://www.leadpages.com/blog/`,
  },
]

export const $ArchiveGrid = styled('div', {
  d: 'grid',

  '@>sidebarTablet': {
    gridTemplateColumns: 'auto $cols3',
    gridColumnGap: '$4_5',
  },

  '@>l': {
    gridColumnGap: '$sizes$cols1',
  },
})

const $WhatsNextContainer = styled('div', {
  paddingTop: '$3',
  paddingBottom: '$3',
})

const $ArchiveLink = styled(Link, {
  c: '$primary',

  '&:hover': {
    c: '$hover',
  },
})

const $ArchiveSocialIcon = styled('button', {
  c: '$textAlt',
  border: '1px solid $colors$grayTertiary',
  borderRadius: '3px',
  width: 25,
  height: 25,
  transition: 'ease 0.3s all',

  svg: {
    c: '$grayTertiary',
    transition: 'ease 0.3s all',
    h: '$space$1_5',
    mt: 2,
  },

  '@>m': {
    width: 40,
    height: 40,
    border: '2px solid $colors$grayTertiary',

    svg: {
      h: '$space$2',
      mt: '$0_5',
    },
  },

  variants: {
    platform: {
      facebook: {
        '&:hover': {
          border: '2px solid #3b5998',
          c: '#3b5998',

          svg: {
            c: '#3b5998',
          },
        },
      },
      twitter: {
        '&:hover': {
          border: '2px solid #4099ff',
          c: '#4099ff',

          svg: {
            c: '#4099ff',
          },
        },
      },
      linkedIn: {
        '&:hover': {
          border: '2px solid #007bb6',
          c: '#007bb6',

          svg: {
            c: '#007bb6',
          },
        },
      },
    },
  },
})

const $ArchiveSocial = styled('div', {
  position: 'fixed',
  d: 'flex',
  bottom: 0,
  bc: '$white',
  w: '100%',
  jc: 'center',
  zIndex: '$cover',
  gap: '$1',
  p: '$1',
  left: 0,
  boxSizing: 'border-box',

  '@>m': {
    p: 0,
    top: '35%',
    left: '$3',
    flexDirection: 'column',
    jc: 'flex-start',
    gap: '$2',
    w: 'unset',
  },
})

const ArchiveSingle = ({
  _createdAt,
  publishedDate,
  content,
  image,
  primaryCategory,
  title,
  categories,
  publisher,
  relatedArticles,
  settings,
}) => {
  const router = useRouter()

  return (
    <Pinion component="archivePage">
      <$ArchiveSocial>
        {socialSharePlatforms.map(
          (platform) =>
            platform.title && (
              <Link
                key={platform.title}
                condition="external"
                url={platform.url(
                  process.env.NEXT_PUBLIC_URL + router.asPath,
                  title
                )}
              >
                <$ArchiveSocialIcon platform={platform.title}>
                  <platform.icon />
                </$ArchiveSocialIcon>
              </Link>
            )
        )}
      </$ArchiveSocial>
      <$ArchiveGrid>
        <div>
          <ArchiveBreadcrumbs primaryCategory={primaryCategory} />
          <Heading
            heading={title}
            tag="h1"
            tagStyle="h2"
            css={{ marginBottom: '$3' }}
          />
          {publisher && (
            <Heading
              tag="h6"
              css={{
                c: '$darkGrayAlt',
                type: 'base',
                fontSize: '15px',
                mb: '$3_5',
                fontFamily: '$apercuPro',
                fontWeight: 400,
              }}
            >
              Posted by{' '}
              <$ArchiveLink
                url={'/blog'}
                label={publisher.title}
                condition="internal"
              />
              <>&nbsp;&nbsp;</>|<>&nbsp;&nbsp;</>
              {new Date(publishedDate || _createdAt).toLocaleDateString(
                'en-US',
                {
                  month: 'short',
                  day: '2-digit',
                }
              )}
              ,{' '}
              {new Date(publishedDate || _createdAt).toLocaleDateString(
                'en-US',
                {
                  year: 'numeric',
                }
              )}
            </Heading>
          )}
          <Image image={image} css={{ mb: '$5' }} />
          <Text content={content} isPost={true} />
          {relatedArticles && relatedArticles.length > 0 && (
            <$WhatsNextContainer>
              <WhatsNext
                articles={relatedArticles}
                image={settings.relatedArticlesImage}
              />
            </$WhatsNextContainer>
          )}
        </div>
        <ArchiveSidebar categories={categories} settings={settings} />
      </$ArchiveGrid>
    </Pinion>
  )
}

export default ArchiveSingle

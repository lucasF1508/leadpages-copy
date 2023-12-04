import { useRouter } from 'next/router'
import { styled } from '@design'
import Link from '@components/Link'
import dynamic from 'next/dynamic'

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
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M10.648 7.62754L17.1535 0.0654907H15.6119L9.96323 6.63151L5.45164 0.0654907H0.248047L7.07046 9.99448L0.248047 17.9244H1.78972L7.75488 10.9905L12.5195 17.9244H17.723L10.6477 7.62754H10.648ZM8.53651 10.082L7.84526 9.09325L2.34521 1.22604H4.71313L9.15173 7.57513L9.84299 8.56383L15.6126 16.8167H13.2447L8.53651 10.0823V10.082Z"
          fill="white"
        />
      </svg>
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
  {
    title: 'pinterest',
    icon: dynamic(() =>
      import('@react-icons/all-files/fa/FaPinterest').then(
        ({ FaPinterest }) => FaPinterest
      )
    ),
    url: (url) =>
      `http://pinterest.com/pin/create/link/?url=${encodeURIComponent(url)}`,
  },
]

export const $ArchiveSocialIcon = styled('button', {
  c: '$textAlt',
  borderRadius: '$round',
  width: 36,
  height: 36,
  transition: 'ease 0.3s all',
  bc: '$colors$socialGray',

  svg: {
    c: '$white',
    transition: 'ease 0.3s all',
    h: '$space$2_5',
    w: '$space$2_5',
    mt: 2,
  },

  '@>1400': {
    width: 40,
    height: 40,
  },

  '&:hover': {
    bc: '$colors$purple',
  },

  variants: {
    platform: {
      facebook: {
        svg: {
          mt: 8,
          h: '$space$3_5',

          '@>1400': {
            h: '$space$4',
            ml: 1,
          },
        },
      },
      pinterest: {
        svg: {
          h: '$space$3',
          w: '$space$3',
        },
      },
      linkedIn: {
        svg: {
          ml: 1,
          h: '$space$3',
          w: '$space$3',
        },
      },
    },
  },
})

export const $ArchiveSocial = styled('div', {
  d: 'flex',
  fd: 'row',
  w: '100%',
  jc: 'center',
  bc: '$white',
  gap: '$2_5',

  '@>1400': {
    gap: '$3',
    bc: 'transparent',
  },
})

const ArchiveSocialShare = ({ title }) => {
  const router = useRouter()
  return (
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
  )
}

export default ArchiveSocialShare

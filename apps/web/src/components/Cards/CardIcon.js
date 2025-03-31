import React from 'react'
import { styled } from '@design'
import NextImage from 'next/legacy/image'
import Image from '@components/Image'
// images
import { FiChevronRight as Icon } from '@react-icons/all-files/fi/FiChevronRight'
import Media, { hasMedia } from '@components/Media'
import Link from '@components/Link'

const $CardIconHeading = styled('div', {
  type: 'cardHeading',
  mb: '$2',
  color: '$text',

  defaultVariants: {
    itemsPerRow: 4,
    asCards: false,
  },

  compoundVariants: [
    {
      itemsPerRow: 3,
      asCards: true,
      css: {
        fontSize: '16px',
        lineHeight: '28px',
        alignSelf: 'center',
        mb: '26px',
        flex: 1,
        textAlign: 'left',

        '@>390': {
          fontSize: '18px',
        },

        '@>s': {
          flex: 0,
          textAlign: 'center',
        },

        '@<577': {
          marginLeft: '16px',
          mb: 0,
        },
      },
    },
  ],
})

const $CardIcon = styled('div', {
  position: 'relative',
  textDecoration: 'none',
  d: 'flex',
  m: '1rem 0',

  variants: {
    align: {},
    asCards: {
      true: {},
      false: {},
    },
    itemsPerRow: {
      3: {
        w: '100%',
        px: '2%',
        jc: 'space-between',
        ta: 'center',

        '@media (min-width: 577px) and (max-width: 768px)': {
          f: '0 0 46%',
          mw: '46%',
        },

        '@media (min-width: 769px) and (max-width: 991px)': {
          f: '0 0 29%',
          mw: '29%',
        },

        '@media (min-width: 992px)': {
          f: '0 0 29%',
          mw: '29%',
          ta: 'left',
        },

        h3: {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '500',
          mb: '1rem',
          c: '$text',
        },
      },

      4: {
        ta: 'left',
        pr: '48px',

        '@media (min-width: 1200px)': {
          mw: '25%',
        },

        '@media (min-width: 1024px)': {
          mw: '20%',

          '&:nth-child(4n)': {
            pr: '0px',
          },
        },

        '@media (max-width: 1023px)': {
          ta: 'center',
          mw: '325px',

          '&:nth-child(2n)': {
            pr: '0px',
          },
        },

        '@media (max-width: 899px)': {
          mw: '38%',
        },

        '@media (max-width: 600px)': {
          mw: '100%',
          pr: '0px',
        },
      },
    },
  },

  compoundVariants: [
    {
      itemsPerRow: 3,
      align: true,
      css: {
        '@<993': {
          ta: 'left',
          jc: 'flex-start',
        },
      },
    },
    {
      itemsPerRow: 3,
      asCards: true,
      css: {
        textAlign: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        width: '100%',
        px: '3%',
        paddingTop: '5%',
        mx: 'auto',
        marginBottom: '24px',
        marginTop: 0,
        backgroundColor: '$white',
        cursor: 'pointer',

        boxShadow:
          '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',
        transition: 'all 0.3s ease',

        '&:hover': {
          boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
      0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
        },

        '@<s': {
          marginBottom: '1rem',
          paddingBottom: '5%',
        },

        '@media (min-width: 577px) and (max-width: 768px)': {
          flex: '0 0 38.3333%',
          maxWidth: '38.3333%',
        },

        '@media (min-width: 769px) and (max-width: 991px)': {
          flex: '0 0 23.3333%',
          maxWidth: '23.3333%',
        },

        '@media (min-width: 992px)': {
          flex: '0 0 23.3333%',
          maxWidth: '23.3333%',
        },

        [`&:hover ${$CardIconHeading}`]: {
          color: '$primary',
        },
      },
    },
  ],
})

const $CardIconInner = styled('div', {
  w: '100%',

  defaultVariants: {
    itemsPerRow: 4,
    asCards: false,
  },
  compoundVariants: [
    {
      itemsPerRow: 3,
      asCards: true,
      css: {
        d: 'flex',
        flexDirection: 'row',
        ai: 'center',

        '@>577': {
          flexDirection: 'column',
        },

        '@>s': {
          marginBottom: '48px',
        },
      },
    },
  ],
})

const $ImageContainer = styled('div', {
  h: '100%',
  w: '100%',
  maxHeight: '3rem',
  mw: '3rem',
  mr: 'auto',
  mb: '1rem',

  '@media (max-width: 1023px)': {
    ml: 'auto',
  },

  defaultVariants: {
    itemsPerRow: 4,
    asCards: false,
  },
  compoundVariants: [
    {
      itemsPerRow: 3,
      asCards: true,
      css: {
        mx: 'auto',
        width: '48px',
        height: '48px',
        mb: 0,

        '@>577': {
          marginBottom: '26px',
        },
      },
    },
  ],
})

const $CTA = styled('span', {
  d: 'inline-flex',
  ai: 'center',
  c: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  ta: 'left',
  fontWeight: '500',

  '&:hover': {
    c: '$indigoDark',
  },

  svg: {
    w: 20,
    h: 15,
  },

  defaultVariants: {
    itemsPerRow: 4,
    asCards: false,
  },

  compoundVariants: [
    {
      itemsPerRow: 3,
      asCards: true,
      css: {
        mb: 0,
        fontSize: '14px',
        lineHeight: 1,
        ai: 'center',
        ta: 'right',

        '@>390': {
          fontSize: '16px',
          ta: 'center',
        },

        '@>577': {
          lineHeight: '30px',
        },

        '@>s': {
          mt: '16px',
        },
      },
    },
  ],
})

const $Details = styled('div', {
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textAlt',
  mb: '$2',

  '&:last-child': {
    mb: 0,
  },

  defaultVariants: {
    itemsPerRow: 4,
    asCards: false,
  },

  compoundVariants: [
    {
      itemsPerRow: 3,
      asCards: true,
      css: {
        display: 'none',
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',

        '@>577': {
          display: 'block',
        },
      },
    },
  ],
})

const CardMedia = ({ media, image }) =>
  hasMedia(media) ? <Media media={media} /> : <Image image={image} />

const CardInner = ({
  asCards,
  title,
  icon,
  alt,
  description,
  content,
  link,
  itemsPerRow,
  image,
  media,
  hideLabel,
}) => (
  <$CardIconInner asCards={asCards} itemsPerRow={itemsPerRow}>
    {(icon || image || hasMedia(media)) && (
      <$ImageContainer asCards={asCards} itemsPerRow={itemsPerRow}>
        {icon ? (
          <NextImage
            src={icon}
            alt={alt}
            height={48}
            width={48}
            lazyBoundary="1000px"
          />
        ) : (
          <CardMedia media={media} image={image} />
        )}
      </$ImageContainer>
    )}
    {title && (
      <$CardIconHeading
        aria-level={3}
        role="heading"
        asCards={asCards}
        itemsPerRow={itemsPerRow}
      >
        {title}
      </$CardIconHeading>
    )}
    <$Details className="details" asCards={asCards} itemsPerRow={itemsPerRow}>
      {content || description}
    </$Details>
    {link && !hideLabel && (
      <$CTA asCards={asCards} itemsPerRow={itemsPerRow}>
        {link.label}
        &nbsp;
        {link.hasLinkIcon && <Icon />}
      </$CTA>
    )}
  </$CardIconInner>
)

const CardIcon = ({ align, asCards, link, itemsPerRow, ...props }) => (
  <$CardIcon align={align} asCards={asCards} itemsPerRow={itemsPerRow}>
    {link && link.url ? (
      <Link {...link} css={{ width: '100%' }} linkStyle="none">
        <CardInner
          align={align}
          asCards={asCards}
          link={link}
          itemsPerRow={itemsPerRow}
          {...props}
        />
      </Link>
    ) : (
      <CardInner
        align={align}
        asCards={asCards}
        link={link}
        itemsPerRow={itemsPerRow}
        {...props}
      />
    )}
  </$CardIcon>
)

export default CardIcon

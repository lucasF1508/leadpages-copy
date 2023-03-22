import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Image from '@components/Image'
import { RPIcon } from '@legacy/constants/types'
// images
import { FiChevronRight as Icon } from '@react-icons/all-files/fi/FiChevronRight'
import Media from '@components/Media'

const IconCardStyle_4Across = styled('div', {
  minHeight: '1px',
  position: 'relative',
  ta: 'left',
  textDecoration: 'none',
  pr: '48px',
  d: 'flex',
  m: '1rem 0',

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

  '& .details': {
    fontSize: '14px',
    lineHeight: '20px',
    c: '$textAlt',
  },

  variants: {
    align: {
      true: {
        ta: 'left',
      },
    },
  },
})

const IconCardHeading = styled('div', {
  type: 'cardHeading',
  mb: '$2',
})

const IconCardStyle_3Across = styled('div', {
  minHeight: '1px',
  position: 'relative',
  ta: 'center',
  textDecoration: 'none',
  w: '100%',
  px: '2%',
  d: 'flex',
  jc: 'space-between',
  m: '1rem 0',

  '@media (min-width: 576px) and (max-width: 768px)': {
    f: '0 0 48%',
    mw: '48%',
  },

  '@media (min-width: 769px) and (max-width: 991px)': {
    f: '0 0 29%',
    mw: '29%',
  },

  '@media (min-width: 992px)': {
    mb: 0,
    f: '0 0 29%',
    mw: '29%',
    ta: 'left',
  },

  '& .details': {
    fontSize: '14px',
    lineHeight: '20px',
    mb: '1rem',
    c: '$textAlt',
  },

  h3: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    mb: '1rem',
    c: '$text',
  },

  variants: {
    align: {
      true: {
        ta: 'left',
      },
    },
  },
})

const ImageContainer = styled('div', {
  h: '100%',
  w: '100%',
  maxHeight: '3rem',
  mw: '3rem',
  mr: 'auto',
  mb: '1rem',

  '@media (max-width: 1023px)': {
    ml: 'auto',
  },
})

const IconCardLink = styled('a', {
  textDecoration: 'none',
  c: '$primary',
})

const CTA = styled('span', {
  d: 'inline-flex',
  ai: 'center',
  c: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  ta: 'left',
  fontWeight: '500',
  mb: '2rem',

  '&:hover': {
    c: '$indigoDark',
  },

  svg: {
    w: 20,
    h: 15,
  },
})

const CardIcon = ({
  align,
  title,
  icon,
  alt,
  description,
  content,
  link,
  itemsPerRow,
  image,
  media,
}) => {
  if (itemsPerRow == 3) {
    return (
      <IconCardStyle_3Across align={align}>
        <div>
          {(icon || image || media) && (
            <ImageContainer>
              {icon ? (
                <NextImage
                  src={icon}
                  alt={alt}
                  height={48}
                  width={48}
                  lazyBoundary="501px"
                />
              ) : image ? (
                <Image image={image} />
              ) : (
                <Media media={media} />
              )}
            </ImageContainer>
          )}
          {title && (
            <IconCardHeading aria-level={3} role="heading">
              {title}
            </IconCardHeading>
          )}
          <div className="details">{content || description}</div>
          {link?.condition && (
            <NextLink href={link.url || link.route} passHref>
              <IconCardLink alt={link.altText}>
                <CTA>
                  {link.label}
                  &nbsp;
                  {link.hasLinkIcon && <Icon />}
                </CTA>
              </IconCardLink>
            </NextLink>
          )}
        </div>
      </IconCardStyle_3Across>
    )
  }

  return (
    <IconCardStyle_4Across align={align}>
      <div>
        {(icon || image) && (
          <ImageContainer>
            {icon ? (
              <NextImage
                src={icon}
                alt={alt}
                height={48}
                width={48}
                lazyBoundary="501px"
              />
            ) : (
              <Image image={image} />
            )}
          </ImageContainer>
        )}
        {title && (
          <IconCardHeading aria-level={3} role="heading">
            {title}
          </IconCardHeading>
        )}
        <div className="details">{content || description}</div>
        {link?.condition && (
          <NextLink href={link.url || link.route} passHref>
            <IconCardLink alt={link.altText}>
              <CTA>
                {link.label}
                &nbsp;
                {link.hasLinkIcon && <Icon />}
              </CTA>
            </IconCardLink>
          </NextLink>
        )}
      </div>
    </IconCardStyle_4Across>
  )
}

CardIcon.defaultProps = {
  alt: '',
  description: '',
  itemsPerRow: 4,
  link: null,
  icon: undefined,
}

CardIcon.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: RPIcon,
  alt: PropTypes.string,
  link: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    route: PropTypes.string,
    altText: PropTypes.string,
  }),
  itemsPerRow: PropTypes.number,
}

export default CardIcon

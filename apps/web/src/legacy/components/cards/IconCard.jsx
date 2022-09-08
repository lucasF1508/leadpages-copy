import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import Image from 'next/image'
import { RPIcon } from '@legacy/constants/types'
// images
import rightArrowPurpleSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

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

  h3: {
    fontSize: '16px',
    fontFamily: '$fonts$base',
    lineHeight: '24px',
    fontWeight: '500',
    mb: '1rem',
    c: '$text',
  },
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

const ArrowRightPurple = styled('div', {
  d: 'inline-block',
  w: '20px',
  h: '10px',
  filter:
    'invert(18%) sepia(97%) saturate(3719%) hue-rotate(249deg) brightness(81%) contrast(95%)',
})

const CTA = styled('span', {
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
})

const IconCard = ({ title, icon, alt, description, link, itemsPerRow }) => {
  if (itemsPerRow === 3) {
    return (
      <IconCardStyle_3Across>
        <div>
          <ImageContainer>
            <Image src={icon} alt={alt} height={48} width={48} />
          </ImageContainer>
          <h3>{title}</h3>
          <div className="details">{description}</div>
          {link && (
            <NextLink href={link.route} passHref>
              <IconCardLink alt={link.altText}>
                <CTA>
                  {link.label}
                  &nbsp;
                  <ArrowRightPurple>
                    <Image {...rightArrowPurpleSVG} />
                  </ArrowRightPurple>
                </CTA>
              </IconCardLink>
            </NextLink>
          )}
        </div>
      </IconCardStyle_3Across>
    )
  }

  return (
    <IconCardStyle_4Across>
      <div>
        <ImageContainer>
          <Image src={icon} alt={alt} height={48} width={48} />
        </ImageContainer>
        <h3>{title}</h3>
        <div className="details">{description}</div>
        {link && (
          <NextLink href={link.route} passHref>
            <IconCardLink alt={link.altText}>
              <CTA>
                {link.label}
                &nbsp;
                <ArrowRightPurple>
                  <Image {...rightArrowPurpleSVG} />
                </ArrowRightPurple>
              </CTA>
            </IconCardLink>
          </NextLink>
        )}
      </div>
    </IconCardStyle_4Across>
  )
}

IconCard.defaultProps = {
  alt: '',
  description: '',
  itemsPerRow: 4,
  link: null,
}

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: RPIcon.isRequired,
  alt: PropTypes.string,
  link: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }),
  itemsPerRow: PropTypes.number,
}

export default IconCard

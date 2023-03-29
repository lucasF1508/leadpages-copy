import React from 'react'
import { styled } from '@design'
// components
import Link from '@components/Link'
import ThreeColumn from './ThreeColumn'
import ColumnFeatureOverlap from './ColumnFeatureOverlap'

const HeadingFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '35px',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '@>m': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },

  '@<m': {
    display: 'block',
    textAlign: 'center',
  },
})

const ListingBlockContainer = styled('div', {
  paddingTop: '160px',
  maxWidth: '$extended',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
})

const CustomersHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',

  '@<m': {
    marginBottom: '27px',
  },
})

const CustomersSubHeading = styled('div', {
  fontSize: '18px',
  lineHeight: '28px',
  fontFamily: 'Apercu Pro',
  color: '$textAlt',
  marginTop: '24px',

  '@<m': {
    display: 'none',
  },
})

const ListingBlock = ({
  heading,
  subheading,
  link,
  listings: listingsOrg,
  hasFeaturedListing = false,
  ctaLabel = 'Read More',
  type = 'regular',
  overline = 'Featured',
}) => {
  const featuredListing = hasFeaturedListing && listingsOrg[0]
  const listings = hasFeaturedListing ? listingsOrg.slice(1) : listingsOrg

  return (
    <ListingBlockContainer>
      <HeadingFlexbox>
        <div>
          {heading && <CustomersHeading>{heading}</CustomersHeading>}
          {subheading && (
            <CustomersSubHeading>{subheading}</CustomersSubHeading>
          )}
        </div>
        {link && <Link linkStyle="ghost" {...link} />}
      </HeadingFlexbox>
      {featuredListing && (
        <ColumnFeatureOverlap
          ctaLabel={ctaLabel}
          overline={overline}
          {...featuredListing}
        />
      )}
      {listings && (
        <ThreeColumn listings={listings} type={type} ctaLabel={ctaLabel} />
      )}
    </ListingBlockContainer>
  )
}

export default ListingBlock

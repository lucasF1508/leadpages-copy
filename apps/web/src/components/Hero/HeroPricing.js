import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@design'
import HeadlineSection, {
  Caption,
} from '@legacy/components/layout/HeadlineSection'
import LoadingState from '@legacy/components/LoadingState'
import { AppContext } from '@app'
// Utils
import { getLocalCoupon } from '@legacy/utils/coupons'
// Images
import backgroundImageSVG from '@legacy/assets/images/shapes/wavy-line-gray_pricing.svg'

const HeadlineContainer = styled('div', {
  position: 'relative',
  background: '$white',
  mt: '-60px',
  pt: '60px',
  o: 'hidden',
  z: -1,
})

const SVGContainer = styled('img', {
  position: 'absolute',
  top: '-60vh',
  bottom: 0,
  left: 0,
  right: '5%',
  h: '120vh',
  ml: 'auto',
  z: -2,

  '@media (min-width: 768px)': {
    right: '-15%',
  },

  '@media (min-width: 992px)': {
    right: '5%',
  },

  '@media (min-width: 1300px)': {
    right: '10%',
  },

  '@media (max-width: 767px)': {
    d: 'none',
  },
})

const HeadlineCaption = styled(HeadlineSection, {
  pt: '3rem',

  [`& ${Caption}`]: {
    pb: '50px',
  },
})

const HeroPricing = ({ title, text, supertitle }) => {
  const { hasLoaded } = useContext(AppContext)
  const [couponData, setCouponData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handlePromotionsLoaded = () => {
    const coupon = getLocalCoupon()
    if (coupon?.canRedeemCoupon) setCouponData(coupon)
    setIsLoading(false)
  }

  useEffect(() => {
    if (hasLoaded) handlePromotionsLoaded()
  }, [hasLoaded])

  return isLoading ? (
    <LoadingState />
  ) : (
    <HeadlineContainer>
      <SVGContainer src={backgroundImageSVG.src} alt="background image" />
      {couponData?.canRedeemCoupon ? (
        <HeadlineCaption
          title={couponData?.headerText || null}
          caption={couponData?.subHeaderText || null}
          supertitle="Leadpages Pricing"
        />
      ) : (
        <HeadlineCaption title={title} caption={text} supertitle={supertitle} />
      )}
    </HeadlineContainer>
  )
}

export default HeroPricing

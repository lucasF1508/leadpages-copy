import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/checkouts/flexible-publishing-options-464px@2x.png'
import imageTwo from '@legacy/assets/images/product/checkouts/third-party-integrations-424px@2x.png'
import imageThree from '@legacy/assets/images/product/checkouts/customizable-form-fields-540px@2x.png'
import imageFour from '@legacy/assets/images/product/checkouts/customizable-appearance-524px@2x.png'

const OuterContainer = styled('div', {
  textAlign: 'center',
  paddingTop: '0rem',
  paddingBottom: '3rem',
  position: 'relative',
  backgroundColor: '$grayAlt',
  overflow: 'hidden',

  '@>s': {
    paddingTop: '0rem',
    paddingBottom: '3rem',
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
})

const Flexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  py: '2rem',
  px: '3rem',
})

const ReverseFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  paddingTop: '0rem',
  paddingBottom: '2rem',
  px: '3rem',

  '@>s': {
    flexDirection: 'row-reverse',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  zIndex: '$aboveContent',
  display: 'flex',
})

const FlexRow1 = styled(FlexRowItem, {
  '@>s': {
    flex: '0 0 8.33%',
    maxWidth: '8.33%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexRow4 = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 33.33%',
    maxWidth: '33.33%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexRow5 = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 41.66%',
    maxWidth: '41.66%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexImg = styled('div', {
  width: '100%',
  maxWidth: '412px',
})

const FeatureContainer = styled('div', {
  position: 'relative',
  marginTop: '2rem',

  '@media (min-width: 993px)': {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
})

const Feature = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0.5rem',
  marginTop: '2rem',
})

const FeatureCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$textAlt',
  marginTop: '1rem',
  marginBottom: '2rem',
})

const CheckoutsFeatures = () => (
  <OuterContainer>
    <InnerContainer>
      <ReverseFlexbox>
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <Feature>Flexible publishing options</Feature>
            <FeatureCopy>
              Publish your checkouts on a Leadpages webpage or embed a checkout
              pop-up on a third-party site.
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image image={imageOne} alt="Publish your checkouts" />
          </FlexImg>
        </FlexRow5>
      </ReverseFlexbox>
      <Flexbox>
        <FlexRow1 />
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <Feature>Third-party integrations</Feature>
            <FeatureCopy>
              In addition to processing their payment, send your customer data
              to a third-party integration (such as an ESP or CRM).
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image
              image={imageTwo}
              alt="Send your customer data to a third-party integration"
            />
          </FlexImg>
        </FlexRow5>
      </Flexbox>
      <ReverseFlexbox>
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <Feature>Customizable form fields</Feature>
            <FeatureCopy>
              Collect standard fields (email address, card number, expiration
              date, CVC/ CVV, and billing zip code) as well as shipping-related
              information, as well as any additional information you may desire
              (such as name, phone number, etc.).
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image
              image={imageThree}
              alt="Collect standard and customizable form fields"
            />
          </FlexImg>
        </FlexRow5>
      </ReverseFlexbox>
      <Flexbox>
        <FlexRow1 />
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <Feature>Customizable appearance</Feature>
            <FeatureCopy>
              Easily customize the buy button’s color, style, and hover state
              just like a regular form widget.
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image image={imageFour} alt="Easily customize the buy button" />
          </FlexImg>
        </FlexRow5>
      </Flexbox>
    </InnerContainer>
  </OuterContainer>
)

export default CheckoutsFeatures

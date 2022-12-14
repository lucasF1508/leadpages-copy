import React from 'react'
import NextLink from 'next/link'
import Image from '@components/Image'
import Text from '@components/Text'
import { styled } from '@design'
import cloneDeep from 'lodash/cloneDeep'

// Assets
import template1 from '@legacy/assets/images/templates/1_webinar_600px@2x.jpg'
import template2 from '@legacy/assets/images/templates/2_elevate_228px@2x.jpg'
import template3 from '@legacy/assets/images/templates/3_uncommon-ramen_688px@2x.jpg'
import template4 from '@legacy/assets/images/templates/4_rhythm_688px@2x.jpg'
import template5 from '@legacy/assets/images/templates/5_hello-health_228px@2x.jpg'
import template6 from '@legacy/assets/images/templates/6_shop-grand-opening_230px@2x.jpg'
import template7 from '@legacy/assets/images/templates/7_ult-fit_230px@2x.jpg'
import template8 from '@legacy/assets/images/templates/8_app-coming-soon_230px@2x.jpg'
import template9 from '@legacy/assets/images/templates/9_hope-webinar_688px@2x.jpg'
import template10 from '@legacy/assets/images/templates/10_change-agent_688px@2x.jpg'
import template11 from '@legacy/assets/images/templates/11_free-consultation_688px@2x.jpg'
import template12 from '@legacy/assets/images/templates/12_new-by-four_688px@2x.jpg'
import template13 from '@legacy/assets/images/templates/13_zz-sleep-app_688px@2x.jpg'
import template14 from '@legacy/assets/images/templates/14_mn-checkout-page_228px@2x.jpg'

const OuterContainer = styled('div', {
  width: '100%',
  backgroundColor: '$grayAlt',
  overflow: 'hidden',
})

const InnerContainer = styled('div', {
  position: 'relative',

  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
  },

  '@media (max-width: 1199px)': {
    marginLeft: '3rem',
    marginTop: '3rem',
  },

  '@media (min-width: 1025px)': {
    marginTop: '6rem',
  },
})

const HeadlineContainer = styled('div', {
  position: 'absolute',
  ta: 'center',

  '@media (min-width: 768px)': {
    ta: 'left',
  },

  '@media (min-width: 1025px)': {
    width: '600px',
  },

  '@media (max-width: 1024px)': {
    width: '460px',
  },

  '@media (max-width: 767px)': {
    position: 'relative',
    width: 'inherit',
    marginRight: '3rem',
  },
})

const TemplatesHolder = styled('div', {
  display: 'flex',
  flexFlow: 'row nowrap',

  '@media (min-width: 1700px)': {
    margin: 0,
  },

  '@media (max-width: 767px)': {
    marginRight: '3rem',
    justifyContent: 'center',
    marginBottom: '-16px',
    marginTop: '32px',
  },
})

const TemplatesColumn = styled('div', {
  display: 'flex',
  flexFlow: 'column-reverse nowrap',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  '@media (min-width: 1025px)': {
    marginRight: '26px',
  },

  '@media (max-width: 1024px)': {
    marginRight: '20px',
  },

  '@media (max-width: 767px)': {
    justifyContent: 'flex-end',
    marginRight: '12px',

    '&.hiddenmobile': {
      display: 'none',
    },
  },
})

const TemplateImage = styled(Image, {
  width: '100%',
  boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
    0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
})

const ImageHolder = styled('div', {
  '@media (min-width: 1025px)': {
    marginTop: '26px',

    '&.large': {
      width: '344px',
    },

    '&.medium': {
      width: '299px',
    },

    '&.small': {
      width: '113px',
    },
  },

  '@media (max-width: 1024px)': {
    marginTop: '20px',

    '&.large': {
      width: '275px',
    },

    '&.medium': {
      width: '239px',
    },

    '&.small': {
      width: '91px',
    },
  },

  '@media (max-width: 767px)': {
    marginTop: 0,
    marginBottom: '12px',

    '&.large': {
      width: '165px',
    },

    '&.medium': {
      width: '144px',
    },

    '&.small': {
      width: '54px',
    },
  },
})

const templatesArray = [
  {
    offset: {
      desktop: '-268px',
      tablet: '-217px',
      mobile: '500px',
    },
    templates: [
      {
        image: template1,
        type: 'medium',
      },
    ],
  },
  {
    offset: {
      desktop: '-16px',
      tablet: '-10px',
      mobile: '500px',
    },
    templates: [
      {
        image: template2,
        type: 'small',
      },
    ],
  },
  {
    offset: {
      desktop: '-171px',
      tablet: '-139px',
      mobile: '32px',
    },
    templates: [
      {
        image: template3,
        type: 'large',
      },
      {
        image: template4,
        type: 'large',
      },
      {
        image: template5,
        type: 'small',
      },
    ],
  },
  {
    offset: {
      desktop: '-116px',
      tablet: '-95px',
      mobile: '0px',
    },
    templates: [
      {
        image: template6,
        type: 'small',
      },
      {
        image: template7,
        type: 'small',
      },
      {
        image: template8,
        type: 'small',
      },
    ],
  },
  {
    offset: {
      desktop: '-179px',
      tablet: '-169px',
      mobile: '0px',
    },
    templates: [
      {
        image: template9,
        type: 'large',
      },
      {
        image: template10,
        type: 'large',
      },
      {
        image: template11,
        type: 'large',
      },
    ],
  },
  {
    offset: {
      desktop: '-66px',
      tablet: '0px',
      mobile: '32px',
    },
    templates: [
      {
        image: template12,
        type: 'large',
      },
      {
        image: template13,
        type: 'large',
      },
      {
        image: template14,
        type: 'small',
        alignmentOverride: 'flex-start',
      },
    ],
  },
]

const FeaturedTemplates = (props) => {
  const { content, images: _images } = props
  const sizeMap = { small: 'small', large: 'large', medium: 'large' }
  const images = cloneDeep(_images)

  return (
    <OuterContainer>
      <InnerContainer>
        <HeadlineContainer>
          <Text content={content} />
        </HeadlineContainer>
        <TemplatesHolder>
          {templatesArray.map((column, index) => (
            <TemplatesColumn
              key={index}
              offset={column.offset}
              className={index <= 1 ? 'hiddenmobile' : ''}
              css={{
                ...(column.offset
                  ? {
                      '@media (min-width: 1025px)': {
                        mb: column.offset?.desktop,
                      },
                      '@media (max-width: 1024px)': {
                        mb: column.offset?.tablet,
                      },
                      '@media (max-width: 767px)': {
                        mt: column.offset?.mobile,
                      },
                    }
                  : {}),
              }}
            >
              {column.templates.map((item, index) => {
                const image = images[sizeMap[item.type]].shift() || item.image
                const linkProps = image?.templateUrl
                  ? { as: 'a', href: image.templateUrl }
                  : {}

                return (
                  <ImageHolder
                    key={index}
                    className={item.type}
                    style={{ alignSelf: item.alignmentOverride }}
                    {...linkProps}
                  >
                    {image?.templateUrl ? (
                      <NextLink href={image.templateUrl}>
                        <TemplateImage image={image} alt="template preview" />
                      </NextLink>
                    ) : (
                      <TemplateImage image={image} alt="template preview" />
                    )}
                  </ImageHolder>
                )
              })}
            </TemplatesColumn>
          ))}
        </TemplatesHolder>
      </InnerContainer>
    </OuterContainer>
  )
}

export default FeaturedTemplates

import React, { useState, createElement } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import { scroller } from 'react-scroll'
import { VSTypography } from '@lp/ui'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// components
import { makeStyles } from '@material-ui/core/styles'
import FeatureIconsGrid from '@legacy/components/grids/FeatureIconsGrid'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import SpacerRow from '@legacy/components/SpacerRow'
// selections
import camelLifesaverIcon from '@legacy/assets/images/icons/featureicons/camel_lifesaver.png'
import coralMegaphoneIcon from '@legacy/assets/images/icons/featureicons/coral_megaphone.png'
import cyanPageIcon from '@legacy/assets/images/icons/featureicons/cyan_page.png'
import bkgSVG from '@legacy/assets/images/shapes/wavy-line-gray_contact.svg'
import Selection_AccountAccess from './Selection_AccountAccess'
import Selection_Billing from './Selection_Billing'
import Selection_ConsideringLeadpages from './Selection_ConsideringLeadpages'
import Selection_Legal from './Selection_Legal'
import Selection_Partnerships from './Selection_Partnerships'
import Selection_TechnicalSupport from './Selection_TechnicalSupport'
// images

const useStyles = makeStyles(
  (theme) => ({
    overlineText: {
      textAlign: 'center',
      marginBottom: 16,
      opacity: 0.5,
    },
    headlineText: {
      textAlign: 'center',
      marginBottom: 16,
    },
    subtitleText: {
      textAlign: 'center',
      color: theme.palette.grey[70],
      marginBottom: 32,
    },
  }),
  { classNamePrefix: 'ContactDropDown' }
)

const BackgroundOuterContainer = styled('div', {
  position: 'relative',
  marginTop: '-60px',
  py: '60px',
  backgroundColor: '$grayAlt',
  overflowX: 'hidden',
  zIndex: 0,
  minHeight: '100vh',
})

const BackgroundSVGContainer = styled('img', {
  position: 'absolute',
  right: '-12%',
  bottom: 0,
  overflowX: 'hidden',
  marginLeft: 'auto',
  height: '200vh',
  zIndex: -1,
})

const OuterContainer = styled('div', {
  position: 'relative',
  zIndex: 1,

  '@media (max-width: 767px)': {
    px: '2.5%',
  },

  '@media (min-width: 768px) and (max-width: 992px)': {
    px: '7.5%',
    paddingTop: '70px',
  },

  '@>m': {
    px: '20%',
    paddingTop: '145px',
  },
})

const InnerContainer = styled('div', {
  background: '$white',

  '@<s': {
    padding: '2rem 12.5%',
  },

  '@media (min-width: 577px) and (max-width: 992px)': {
    padding: '4rem 12.5%',
  },

  '@>m': {
    maxWidth: '1140px',
    mx: 'auto',
    padding: '6rem 12.5%',
  },

  '&.selectionmade': {
    minHeight: '500px',
  },
})

const ContentHolder = styled('div', {
  width: '100%',
  maxWidth: '350px',
  margin: 'auto',
})

const GridHolder = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
})

const selectionOptions = [
  {
    label: 'Considering Leadpages',
    selectionName: Selection_ConsideringLeadpages,
  },
  {
    label: 'Technical support',
    selectionName: Selection_TechnicalSupport,
  },
  {
    label: 'Billing',
    selectionName: Selection_Billing,
  },
  {
    label: 'Account access',
    selectionName: Selection_AccountAccess,
  },
  {
    label: 'Business partnerships',
    selectionName: Selection_Partnerships,
  },
  {
    label: 'Legal & privacy questions',
    selectionName: Selection_Legal,
  },
]

const ContactMenu = ({ submission }) => {
  const classes = useStyles()

  const [activeSelectionIndex, setActiveSelectionIndex] = useState('')

  const handleSelection = (selectionIndex) => {
    setActiveSelectionIndex(selectionIndex)
    scroller.scrollTo('formcontainer', {
      duration: 500,
      delay: 0,
      smooth: 'ease',
    })
  }

  const contactPageFeaturesArray = [
    {
      title: 'Help Center',
      description:
        'Find answers and step-by-step guidance to get the most from your account and solve any technical snags in a hurry.',
      icon: camelLifesaverIcon,
      alt: 'help center icon',
      link: {
        type: 'outbound',
        label: 'Find Answers',
        route: 'https://support.leadpages.com/',
        altText: 'Leadpages support link',
      },
    },
    {
      title: 'Blog',
      description:
        'Looking for more ideas to implement into your marketing? We have hundreds of inspiring posts to fuel your thinking.',
      icon: coralMegaphoneIcon,
      alt: 'blog icon',
      link: {
        type: 'outbound',
        label: 'Get Inspired',
        route: 'https://www.leadpages.com/blog/',
        altText: 'Leadpages blog link',
      },
    },
    {
      title: 'Resources',
      description:
        'Ready to ramp up your marketing knowledge? Check out our guides, webinars, courses, podcast episodes and more.',
      icon: cyanPageIcon,
      alt: 'resources icon',
      link: {
        type: 'internal',
        label: 'Dive In',
        route: '/marketing-resources',
        altText: 'Leadpages resources link',
      },
    },
  ]

  return (
    <BackgroundOuterContainer>
      <BackgroundSVGContainer src={bkgSVG.src} alt="a background image" />
      <OuterContainer>
        <InnerContainer
          id="formcontainer"
          className={activeSelectionIndex !== '' ? 'selectionmade' : ''}
        >
          <Typography
            className={classes.overlineText}
            variant="overline"
            component="h1"
          >
            {!submission ? 'Contact Leadpages' : 'Thanks'}
          </Typography>
          <VSTypography className={classes.headlineText} variant="h3">
            {!submission
              ? 'What can we help you with?'
              : 'We’ve received your message.'}
          </VSTypography>
          <Typography variant="subtitle1" className={classes.subtitleText}>
            {!submission
              ? 'Let us know!'
              : 'Our team will be in touch with you shortly.'}
          </Typography>
          {!submission && (
            <ContentHolder>
              <TextField
                value={activeSelectionIndex}
                onChange={(e) => handleSelection(e.target.value)}
                select
                fullWidth
              >
                {selectionOptions.map(({ label }, index) => (
                  <MenuItem key={index} value={index}>
                    {label}
                  </MenuItem>
                ))}
              </TextField>
              {activeSelectionIndex !== '' &&
                createElement(
                  selectionOptions[activeSelectionIndex].selectionName,
                  []
                )}
            </ContentHolder>
          )}
        </InnerContainer>
      </OuterContainer>
      {submission && (
        <>
          <SpacerRow size="small" />
          <HeadlineSection title="Now, back to business..." />
          <GridHolder>
            <FeatureIconsGrid
              features={contactPageFeaturesArray}
              itemsPerRow={3}
              showSectionLink={false}
            />
          </GridHolder>
        </>
      )}
    </BackgroundOuterContainer>
  )
}

export default ContactMenu

ContactMenu.propTypes = {
  submission: PropTypes.bool,
}

ContactMenu.defaultProps = {
  submission: false,
}

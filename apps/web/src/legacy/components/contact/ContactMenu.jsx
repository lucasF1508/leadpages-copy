import React, { useState, createElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { VSTypography } from '@lp/ui';
// components
import FeatureIconsGrid from '../grids/FeatureIconsGrid';
import HeadlineSection from '../layout/HeadlineSection';
import SpacerRow from '../SpacerRow';
// selections
import Selection_AccountAccess from './Selection_AccountAccess';
import Selection_Billing from './Selection_Billing';
import Selection_ConsideringLeadpages from './Selection_ConsideringLeadpages';
import Selection_Legal from './Selection_Legal';
import Selection_Partnerships from './Selection_Partnerships';
import Selection_TechnicalSupport from './Selection_TechnicalSupport';
// styling
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
// images
import bkgSVG from '../../assets/images/shapes/wavy-line-gray_contact.svg';

const useStyles = makeStyles(
  theme => ({
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
  { classNamePrefix: 'ContactDropDown' },
);

const BackgroundOuterContainer = styled.div`
  position: relative;
  margin-top: -60px;
  padding-top: 60px;
  background-color: #f7f7f7;
  overflow-x: hidden;
  z-index: 0;
  min-height: 100vh;
  padding-bottom: 60px;
`;

const BackgroundSVGContainer = styled.img`
  position: absolute;
  right: -12%;
  bottom: 0;
  overflow-x: hidden;
  margin-left: auto;
  height: 200vh;
  z-index: -1;
`;

const OuterContainer = styled.div`
  position: relative;
  z-index: 1;
  @media (max-width: 767px) {
    padding-left: 2.5%;
    padding-right: 2.5%;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    padding-left: 7.5%;
    padding-right: 7.5%;
    padding-top: 70px;
  }
  @media (min-width: 993px) {
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 145px;
  }
`;

const InnerContainer = styled.div`
  background: #fff;
  @media (max-width: 576px) {
    padding: 2rem 12.5%;
  }
  @media (min-width: 577px) and (max-width: 992px) {
    padding: 4rem 12.5%;
  }
  @media (min-width: 993px) {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding: 6rem 12.5%;
  }
  &.selectionmade {
    min-height: 500px;
  }
`;

const ContentHolder = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto;
`;

const GridHolder = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

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
];

const ContactMenu = props => {
  const { submission } = props;
  const classes = useStyles();

  const [activeSelectionIndex, setActiveSelectionIndex] = useState('');

  const handleSelection = selectionIndex => {
    setActiveSelectionIndex(selectionIndex);
    scroller.scrollTo('formcontainer', {
      duration: 500,
      delay: 0,
      smooth: 'ease',
    });
  };

  const images = useStaticQuery(graphql`
    query ContactPageQuery {
      camelLifesaverIcon: file(
        relativePath: { eq: "assets/images/icons/featureicons/camel_lifesaver.png" }
      ) {
        ...fixed
      }
      coralMegaphoneIcon: file(
        relativePath: { eq: "assets/images/icons/featureicons/coral_megaphone.png" }
      ) {
        ...fixed
      }
      cyanPageIcon: file(relativePath: { eq: "assets/images/icons/featureicons/cyan_page.png" }) {
        ...fixed
      }
    }
  `);

  const contactPageFeaturesArray = [
    {
      title: 'Help Center',
      description:
        'Find answers and step-by-step guidance to get the most from your account and solve any technical snags in a hurry.',
      icon: getImage(images.camelLifesaverIcon),
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
      icon: getImage(images.coralMegaphoneIcon),
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
      icon: getImage(images.cyanPageIcon),
      alt: 'resources icon',
      link: {
        type: 'internal',
        label: 'Dive In',
        route: '/marketing-resources',
        altText: 'Leadpages resources link',
      },
    },
  ];

  return (
    <BackgroundOuterContainer>
      <BackgroundSVGContainer src={bkgSVG} alt="a background image" />
      <OuterContainer>
        <InnerContainer
          id="formcontainer"
          className={activeSelectionIndex !== '' ? 'selectionmade' : ''}
        >
          <Typography className={classes.overlineText} variant="overline" component="h1">
            {!submission ? 'Contact Leadpages' : 'Thanks'}
          </Typography>
          <VSTypography className={classes.headlineText} variant="h3">
            {!submission ? 'What can we help you with?' : 'We’ve received your message.'}
          </VSTypography>
          <Typography variant="subtitle1" className={classes.subtitleText}>
            {!submission ? 'Let us know!' : 'Our team will be in touch with you shortly.'}
          </Typography>
          {!submission && (
            <ContentHolder>
              <TextField
                value={activeSelectionIndex}
                onChange={e => handleSelection(e.target.value)}
                select
                fullWidth
              >
                {selectionOptions.map((selection, index) => {
                  const { label } = selection;
                  return (
                    <MenuItem key={index} value={index}>
                      {label}
                    </MenuItem>
                  );
                })}
              </TextField>
              {activeSelectionIndex !== '' &&
                createElement(selectionOptions[activeSelectionIndex].selectionName, [])}
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
  );
};

export default ContactMenu;

ContactMenu.propTypes = {
  submission: PropTypes.bool,
};

ContactMenu.defaultProps = {
  submission: false,
};

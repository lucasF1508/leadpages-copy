import React, { createElement, useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import Typography from '@material-ui/core/Typography';
// styling
import { makeStyles } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const useStyles = makeStyles(() => ({
  sectionHeader: {
    margin: '16px 0',
  },
}));

const InternalLink = styled(GatsbyLink)`
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #4d32cc;
  }
`;

const OutboundLink = styled.a`
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #4d32cc;
  }
`;

const ScrollToLink = styled(ScrollLink)`
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #4d32cc;
  }
`;

const SectionHolderAnimation = keyframes`${fadeIn}`;

const SectionHolder = styled.div`
  padding: 1rem 0;
  animation: 0.5s ${SectionHolderAnimation};
`;

const FormHolder = styled.div``;

const SelectionLinks = props => {
  const classes = useStyles();
  const { parent, selection, linkArray, contactForm } = props;
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      {linkArray.map((section, index) => {
        const { sectionLinks } = section;
        return (
          <SectionHolder key={index}>
            <Typography variant="h4" className={classes.sectionHeader}>
              We think these might help:
            </Typography>
            {sectionLinks.map((item, index) => {
              const { type, text, route } = item;
              return (
                <Typography key={index} variant="h5">
                  {type === 'outbound' && (
                    <OutboundLink href={route} alt="form link" data-gtm="contact-resource-link">
                      {text}
                    </OutboundLink>
                  )}
                  {type === 'internal' && (
                    <InternalLink to={route} alt="form link" data-gtm="contact-resource-link">
                      {text}
                    </InternalLink>
                  )}
                </Typography>
              );
            })}
          </SectionHolder>
        );
      })}
      <SectionHolder id="formtop">
        {!showContactForm && (
          <>
            <Typography variant="h4" className={classes.sectionHeader}>
              Didn’t find what you’re looking for?
            </Typography>
            <Typography variant="h5">
              <ScrollToLink
                to="formtop"
                spy
                smooth
                duration={500}
                offset={-50}
                onClick={() => setShowContactForm(true)}
                data-gtm="contact-us-link"
              >
                Contact our team
              </ScrollToLink>
            </Typography>
          </>
        )}
        {showContactForm && (
          <>
            <Typography variant="h4" className={classes.sectionHeader}>
              Contact our team
            </Typography>
            <FormHolder>{createElement(contactForm, { parent, selection })}</FormHolder>
          </>
        )}
      </SectionHolder>
    </>
  );
};

export default SelectionLinks;

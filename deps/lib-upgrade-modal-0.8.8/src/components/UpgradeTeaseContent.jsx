/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { COLORS } from '../constants';
import CheckSvg from './CheckSvg';

const containerClass = css`
  display: flex;
  flex-direction: row;
  background: ${COLORS.main.secondary};
  color: ${COLORS.main.dark};
  font-family: 'Apercu Pro';
  font-size: 17px;
  font-weight: 400;
`;

const promoContainerClass = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 30px;
  flex: 1 1 50%;
  box-sizing: border-box;
  justify-content: flex-end;

  h1 {
    width: 90%;
    font-family: 'Value Serif';
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.5px;
    margin: 0 auto !important;
    flex: 1 1;
    display: flex;
    align-items: center;
  }

  @media (max-width: 991.98px) {
    display: none;
  }
`;

const mainContentClass = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 60px 30px;
  background: #ffffff;
  text-align: center;
  color: ${COLORS.text.tundora};
  flex: 1 1 50%;
  justify-content: center;
  box-sizing: border-box;

  h2 {
    color: ${COLORS.main.dark};
    font-size: 19px;
    font-weight: 500;
    line-height: 24px;
    padding: 6px 0;
  }

  ul {
    margin-top: 40px;
    margin-bottom: 50px;
    padding-left: 0;
    text-align: left;
  }

  @media (min-width: 992px) {
    width: 50%;
    padding: 0 48px;
    text-align: left;

    h2 {
      font-size: 23px;
      line-height: 32px;
    }

    ul {
      max-width: 475px;
    }
  }
`;

const descriptionClass = css`
  margin: 0;
`;

const listItemClass = css`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 20px;
  list-style-type: none;
`;

const iconWrapper = css`
  padding-right: 20px;

  svg {
    margin-top: 5px;
  }
`;

const ctaCaptionClassDefault = css`
  font-size: 13px;
  line-height: 18px;
`;

const ctaButtonClassDefault = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 42px;
  height: 42px;
  width: 300px;
  border: 3px solid ${COLORS.main.primary};
  border-radius: 32px;
  background: ${COLORS.main.primary};
  color: #ffffff;
  font-weight: 400;
  font-size: 19px;
  margin-top: 13px;
  margin-bottom: 13px;
  text-align: center;
  text-decoration: none;
  padding: 0;
  letter-spacing: 0.5px;

  &:active,
  &:hover,
  &:visited {
    color: #ffffff;
  }

  &:hover {
    background: ${COLORS.alt.primaryHover};
    border-color: ${COLORS.alt.primaryHover};
  }
`;

const imageContainerClass = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  flex: 0 0;

  img {
    max-width: 90%;
  }
`;

const learnMoreContainerClass = css`
  font-size: 15px;
  line-height: 24px;
  margin-top: 28px;

  a, a:visited {
    color: ${COLORS.main.primary};
  }
`;

const upgradeTrackingId = 'upgrade-tease-content'

const UpgradeTeaseContent = ({
  headline,
  subheadline,
  description,
  image,
  listItems,
  ctaLabel,
  ctaLink,
  ctaCaption,
  mediaUrl,
  ctaButtonClass,
  ctaCaptionClass,
  learnMoreLink,
  productName,
}) => {
  useEffect(() => {
  if (window.LPEvents) {
    window.LPEvents.trackLinks(`#${upgradeTrackingId}`, 'Opened upgrade modal', {
      Source: 'Upgrade tease',
      Product: productName,
    });
  }
}, [productName])

  return (
    <div className={containerClass}>
      <div className={promoContainerClass}>
        <h1>{headline}</h1>
  
        <div className={imageContainerClass}>
          <img
            src={`${mediaUrl}${image}`}
            alt="feature illustration"
            data-qa-selector="promo-image"
          />
        </div>
      </div>
  
      <div className={mainContentClass}>
        {subheadline && <h2>{subheadline}</h2>}
  
        {description && <p className={descriptionClass}>{description}</p>}
  
        {listItems && (
          <ul>
            {listItems.map((item, index) => (
              <li className={listItemClass} key={index}>
                <div className={iconWrapper}>
                  <CheckSvg />
                </div>
                <div> {item}</div>
              </li>
            ))}
          </ul>
        )}
  
        <div>
          <a
            className={cx([ctaButtonClassDefault, ctaButtonClass])}
            href={ctaLink}
            data-qa-selector="cta-link"
          >
            {ctaLabel} <ChevronRightIcon />
          </a>
  
          {ctaCaption && <p className={cx(ctaCaptionClassDefault, ctaCaptionClass)}>{ctaCaption}</p>}
  
          {learnMoreLink && (
            <div className={learnMoreContainerClass}>
                <a id={upgradeTrackingId} href={learnMoreLink} target="_blank" rel="noopener noreferrer">Learn More <ChevronRightIcon /></a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

UpgradeTeaseContent.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string),
  ctaButtonClass: PropTypes.string,
  ctaCaptionClass: PropTypes.string,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  learnMoreLink: PropTypes.string,
  ctaCaption: PropTypes.string,
  mediaUrl: PropTypes.string,
};

UpgradeTeaseContent.defaultProps = {
  subheadline: null,
  description: null,
  listItems: null,
  ctaCaption: null,
  mediaUrl: '',
  learnMoreLink: null,
  ctaButtonClass: '',
  ctaCaptionClass: '',
};

export default UpgradeTeaseContent;

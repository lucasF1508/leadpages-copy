import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import CtaButton from './CtaButton';
import { COLORS } from '../constants';

const planHeaderColumnClass = css`
  color: ${COLORS.text.redGrey};
  padding-bottom: 20px;
  height: 100%;
  border-left: 1px solid ${COLORS.border.midGrey};
  text-align: left;
  border-bottom: none;
  border-top: none;
  border-right: none;
  max-width: 300px;
  width: 100%;
`;

export const hideBottomBorderClass = css`
  border-bottom: none;
`;

export const hideTopBorderClass = css`
  border-top: none;
`;

const planTitleClass = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 12px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-left: 32px;
  padding-top: 18px;
`;

const planSubtitleClass = css`
  font-size: 14px;
  line-height: 20px;
  padding-left: 12px;
`;

const planDescriptionClass = css`
  color: ${COLORS.text.redGrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 0 32px;
`;

const planPriceContainerClass = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const planPriceClass = css`
  font-family: 'Value Serif';
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 48px;
`;

const upgradeButtonContainerClass = css`
  display: flex;
  justify-content: center;
`;

const PlanHeader = ({
  title,
  price,
  columnClass,
  planLabel,
  planLabelClass,
  payLabel,
  buttonLabel,
  ctaAction,
  showButton,
  isHighlighted,
  isCurrentPlan,
  hideTopBorder,
  hideBottomBorder,
  planDescription,
  isBottom,
}) => (
  <div className={cx([columnClass, isBottom && 'no-border-bottom'])}>
    <div
      className={cx([
        planHeaderColumnClass,
        'has-right-border',
        isHighlighted ? 'highlighted' : '',
        hideTopBorder ? hideTopBorderClass : '',
        isBottom ? hideBottomBorderClass : '',
      ])}
      data-qa-selector="container"
    >
      {!isBottom && (
        <div className={planLabelClass} data-qa-selector="plan-label">
          {planLabel}
        </div>
      )}

      <div className={planTitleClass} data-qa-selector="plan-title">
        {title}
      </div>
      <div
        className={planPriceContainerClass}
        data-qa-selector="plan-price-holder"
      >
        <div className={planPriceClass} data-qa-selector="plan-price">
          ${price}
        </div>

        <div
          className={planSubtitleClass}
          data-qa-selector="plan-price-frequency"
        >
          <div>per month,</div>
          <div data-qa-selector="pay-label">{payLabel}</div>
        </div>
      </div>
      {showButton && buttonLabel && (
        <div
          className={upgradeButtonContainerClass}
          data-qa-selector="upgrade-button-container"
        >
          <CtaButton
            labelText={buttonLabel}
            isPrimary={isHighlighted}
            onClick={ctaAction}
            buttonProps={{
              'data-qa-selector': `${title.toLowerCase()}-header-upgrade-button`,
            }}
          />
        </div>
      )}
      {planDescription && !isBottom && (
        <div
          className={planDescriptionClass}
          data-qa-selector="plan-description"
        >
          {planDescription}
        </div>
      )}
    </div>
  </div>
);

PlanHeader.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnClass: PropTypes.string,
  planLabel: PropTypes.string,
  planLabelClass: PropTypes.string,
  ctaAction: PropTypes.func,
  isHighlighted: PropTypes.bool,
  isCurrentPlan: PropTypes.bool,
  showButton: PropTypes.bool,
  buttonLabel: PropTypes.string,
  hideTopBorder: PropTypes.bool,
  hideBottomBorder: PropTypes.bool,
};

PlanHeader.defaultProps = {
  columnClass: '',
  planLabel: '',
  planLabelClass: '',
  isHighlighted: false,
  isCurrentPlan: false,
  showButton: false,
  buttonLabel: 'Upgrade',
  hideTopBorder: false,
  hideBottomBorder: true,
  ctaAction: () => {},
};

export default PlanHeader;

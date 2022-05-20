import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { COLORS, PLAN_NAMES } from '../constants';

const ctaButtonClass = css`
  height: 48px;
  width: 161px;
  border: 3px solid ${COLORS.alt.secondary};
  border-radius: 32px;
  background: transparent;
  color: ${COLORS.main.primary};
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  padding: 0;
  font-family: Apercu Pro;

  &:hover {
    background: ${COLORS.alt.primaryHover};
    border-color: ${COLORS.alt.primaryHover};
    color: #ffffff;
    cursor: pointer;
  }

  &.most-popular {
    background-color: ${COLORS.main.primary};
    border-color: ${COLORS.main.primary};
    color: #ffffff;

    &:hover {
      background: ${COLORS.alt.primaryHover};
      border-color: ${COLORS.alt.primaryHover};
    }
  }
`;

const labelClass = css`
  text-transform: capitalize;
  padding-top: 9px;
  font-weight: 500;
  line-height: 24px;
  font-size: 17px;
`;

const currentPlanLabel = css`
  width: 208px;
  font-size: 13px;
  line-height: 62px;
  text-align: center;
`;

const PlanCta = ({
  planKey,
  planId,
  label,
  tableItemClass,
  tableColumnClass,
  onClick,
  buttonText,
  isCurrentPlan,
}) => {
  const isHighlighted = planKey === PLAN_NAMES.PRO;

  const handleClick = e => {
    e.preventDefault();
    onClick(planId);
  };

  return (
    <div className={tableColumnClass}>
      <div className={tableItemClass}>
        <div className={labelClass} data-qa-selector="cta-label">
          {label}
        </div>

        {isCurrentPlan ? (
          <div className={currentPlanLabel}>Current Plan</div>
        ) : (
          <button
            onClick={handleClick}
            className={cx([
              ctaButtonClass,
              isHighlighted ? 'most-popular' : '',
            ])}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

PlanCta.propTypes = {
  planKey: PropTypes.string.isRequired,
  planId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  buttonText: PropTypes.string,
  isCurrentPlan: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

PlanCta.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  buttonText: 'Upgrade',
  isCurrentPlan: false,
};

export default PlanCta;

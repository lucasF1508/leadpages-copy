import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import PlanCta from './PlanCta';
import { COLORS } from './../constants';

const wide = css`
  align-items: flex-start;
  text-align: left;
  min-width: 208px;
  max-width: 300px;
`;

const footerContainer = css`
  position: fixed;
  height: 100px;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  background: #ffffff;
  color: ${COLORS.text.tundora};
  font-family: 'Apercu Pro';
  text-align: center;
  margin-top: 140px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1051;
  box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);

  @media all and (max-width: 575px) {
    display: none;
  }
`;

const barWrapper = css`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const fixedBarTable = css`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 990px;

  & div {
    border-color: rgba(1, 1, 1, 0);
  }
`;

const footer = css`
  height: auto;
  padding: 0;
  display: flex;
  align-items: center;
  flex: 1 0 168px;
`;

export const buildPlanCta = ({
  label,
  plan,
  onSelectPlan,
  tableItemClass,
  tableRowClass,
}) => (
  <PlanCta
    key={plan.id}
    planId={plan.id}
    label={label}
    onClick={onSelectPlan}
    tableItemClass={cx([tableItemClass, footer])}
    tableColumnClass={cx([tableRowClass, footer])}
    planKey={label === 'Pro' ? 'pro' : ''}
    buttonText={plan.buttonText}
    isCurrentPlan={plan.isCurrentPlan}
  />
);

const UpgradeFooter = ({
  plans,
  activePlanLevels,
  tableColumnClass,
  ...other
}) => {
  if (!plans) {
    return <div data-qa-selector="no-plans" />;
  }

  return (
    <div
      className={cx('compare-table-footer', footerContainer)}
      data-qa-selector="footer-container"
    >
      <div className={barWrapper}>
        <div className={fixedBarTable}>
          <div className={cx([tableColumnClass, wide, footer])} />

          {activePlanLevels.map(plan =>
            buildPlanCta({
              label: plan.charAt(0).toUpperCase() + plan.slice(1),
              plan: plans[plan],
              ...other,
            }),
          )}
        </div>
      </div>
    </div>
  );
};

UpgradeFooter.propTypes = {
  plans: PropTypes.object.isRequired,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  tableRowClass: PropTypes.string,
  onSelectPlan: PropTypes.func.isRequired,
};

UpgradeFooter.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  tableRowClass: '',
};

export default UpgradeFooter;

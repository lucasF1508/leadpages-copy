import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import Tooltip from './Tooltips/Tooltip_MediumNavy';
import { COLORS, PLAN_PERIODS, VERBIAGE } from '../constants';
import PlanHeader from './PlanHeader';
import RadioButtonGroup from './RadioButtonGroup';
import { wide } from './PlanFeatureRow';

const billingOptions = {
  [PLAN_PERIODS.MONTHLY]: {
    label: 'Monthly',
    value: PLAN_PERIODS.MONTHLY,
    id: 'monthly',
    footnote: 'paid monthly',
  },
  [PLAN_PERIODS.ANNUAL]: {
    label: 'Annual',
    value: PLAN_PERIODS.ANNUAL,
    id: 'annual',
    footnote: 'paid annually',
  },
};

const planHeaderLabelClass = css`
  height: 36px;
  color: ${COLORS.text.tundora};
  font-size: 12px;
  line-height: 36px;
  text-align: center;
`;

const mostPopularClass = css`
  ${planHeaderLabelClass};
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #d1c6f9;
  color: #0b236d;
`;

const planHeaderControlsClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border: none;
  align-items: center;
  align-self: center;

  //overriding a leads v3 override
  & .tip {
    color: #ffffff !important;
  }
`;

const tableRowClass = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const makePlanHeader = ({
  title,
  plan: {
    id,
    planLevel,
    period,
    description,
    monthlyPrice,
    isCurrentPlan,
    buttonText,
  },
  payLabel,
  planLabelDefault = '',
  tableColumnClass,
  isHighlighted = false,
  showButton,
  onSelectPlan,
  isBottom,
}) => (
  <PlanHeader
    key={id}
    title={title}
    planDescription={description}
    price={monthlyPrice}
    columnClass={tableColumnClass}
    planLabel={isCurrentPlan ? 'Current Plan' : planLabelDefault}
    planLabelClass={isHighlighted ? mostPopularClass : planHeaderLabelClass}
    showButton={showButton}
    ctaAction={e => {
      e.preventDefault();
      if (window.LPEvents) {
        window.LPEvents.track('Clicked upgrade', { Source: 'Upgrade modal' });
      }
      onSelectPlan(id, planLevel, period);
    }}
    buttonLabel={buttonText}
    payLabel={payLabel}
    isCurrentPlan={isCurrentPlan}
    isHighlighted={isHighlighted}
    hideTopBorder={isBottom}
    hideBottomBorder={!isBottom}
    isBottom={isBottom}
  />
);

const UpgradeTableHeader = ({
  plans,
  activePlanLevels,
  rootPlans,
  selectedValue,
  tableItemClass,
  tableColumnClass,
  onChange,
  showButtons,
  onSelectPlan,
  isBottom,
}) => {
  const options = {
    tableColumnClass,
    onSelectPlan,
    showButton: showButtons,
    payLabel: selectedValue ? billingOptions[selectedValue].footnote : '',
    isBottom,
  };

  return (
    <div className={tableRowClass} data-qa-selector="header-wrapper">
      <div
        className={cx([tableColumnClass, wide, isBottom && 'no-border-bottom'])}
      >
        <div className={cx(planHeaderControlsClass, 'annual-tip')}>
          <Tooltip
            title={VERBIAGE.upgradeTableHeader.annualDiscount}
            open={selectedValue === PLAN_PERIODS.MONTHLY}
            PopperProps={{
              disablePortal: true,
              popperOptions: {
                modifiers: {
                  flip: {
                    enabled: false,
                  },
                  preventOverflow: {
                    enabled: false,
                    boundariesElement: 'scrollParent',
                  },
                },
              },
            }}
          >
            <div>
              <RadioButtonGroup
                items={billingOptions}
                onChange={onChange}
                selectedValue={selectedValue}
                rootPlans={rootPlans}
                isBottom={isBottom}
              />
            </div>
          </Tooltip>
        </div>
      </div>

      {activePlanLevels.map(plan =>
        makePlanHeader({
          title: plan.charAt(0).toUpperCase() + plan.slice(1),
          plan: plans[plan],
          planLabelDefault: plan === 'pro' ? 'Most Popular' : '',
          isHighlighted: plan === 'pro',
          ...options,
        }),
      )}
    </div>
  );
};

UpgradeTableHeader.propTypes = {
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  plans: PropTypes.object.isRequired,
  selectedValue: PropTypes.string,
  showButtons: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSelectPlan: PropTypes.func,
  isBottom: PropTypes.bool,
};

UpgradeTableHeader.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  showButtons: false,
  selectedValue: '',
  onSelectPlan: null,
  isBottom: false,
};

export default UpgradeTableHeader;

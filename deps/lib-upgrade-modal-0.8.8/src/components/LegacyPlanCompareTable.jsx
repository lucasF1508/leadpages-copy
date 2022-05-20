import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { ALL_PLANS, COLORS, FEATURES, PLAN_PERIODS } from '../constants';
import PlanFeatureRow from './PlanFeatureRow';
import UpgradeTableHeader from './UpgradeTableHeader';

const tableContainerClass = css`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  font-family: 'Apercu Pro';
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  max-width: 990px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 119px;
`;

const tableItemBaseClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const tableItemClass = css`
  ${tableItemBaseClass};
  border-left: 1px solid ${COLORS.border.midGrey};
  padding: 18px 0 12px;
  width: 100%;
  max-width: 300px;

  svg path {
    fill: ${COLORS.main.primary};
  }
`;

const headerClass = css``;

const tableColumnClass = css`
  border-bottom: 1px solid ${COLORS.border.midGrey};
  display: flex;
  flex: 1 0 168px;
  align-items: center;
  justify-content: center;

  &.css-${headerClass.name} {
    border: none;
  }

  &:last-child {
    & .has-right-border {
      border-right: 1px solid ${COLORS.border.midGrey};
    }
  }

  &.no-border-bottom {
    border-bottom: none;
  }
`;

const tableRowClass = css`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const tableHeaderContainerClass = css`
  width: 100%;
`;

const taxNoteClass = css`
  width: 100%;
  margin: 24px auto;
  font-size: 12px;
  font-style: italic;
  color: #878584;
  opacity: 0.9;
`;

const LegacyPlanCompareTable = ({
  features,
  plans,
  onSelectPlan,
  planOrder,
  defaultBillingFrequency,
}) => {
  const [selectedBillingFrequency, setSelectedBillingFrequency] = useState(
    defaultBillingFrequency,
  );

  const visiblePlans = plans[selectedBillingFrequency];
  const visiblePlanLevels = visiblePlans
    ? Object.keys(visiblePlans).sort(function(levelA, levelB) {
        const a = visiblePlans[levelA].price;
        const b = visiblePlans[levelB].price;
        if (planOrder === 'ascending') {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
        } else if (planOrder === 'descending') {
          if (a < b) {
            return 1;
          }
          if (a > b) {
            return -1;
          }
        }
        return 0;
      })
    : [];

  const handleChange = event => {
    setSelectedBillingFrequency(event.target.value);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'billingFrequencyToggled',
      switchTo: event.target.value,
    });
  };

  return (
    <div>
      <div className={cx('compare-table-container', tableContainerClass)}>
        <div className={tableHeaderContainerClass}>
          <UpgradeTableHeader
            onChange={handleChange}
            selectedValue={selectedBillingFrequency}
            tableItemClass={tableItemClass}
            tableColumnClass={tableColumnClass}
            plans={visiblePlans}
            activePlanLevels={visiblePlanLevels}
            rootPlans={plans}
            onSelectPlan={onSelectPlan}
            showButtons
          />
        </div>

        {features &&
          features.map(({ label, subLabel, tooltip, plans }, index) => (
            <PlanFeatureRow
              key={index}
              label={label}
              subLabel={subLabel}
              tooltip={tooltip}
              selectedBillingFrequency={selectedBillingFrequency}
              plans={plans}
              activePlanLevels={visiblePlanLevels}
              tableColumnClass={tableColumnClass}
              tableRowClass={tableRowClass}
              tableItemClass={tableItemClass}
            />
          ))}
        <div className={tableHeaderContainerClass}>
          <div className={tableHeaderContainerClass}>
            <UpgradeTableHeader
              onChange={handleChange}
              selectedValue={selectedBillingFrequency}
              tableItemClass={tableItemClass}
              tableColumnClass={tableColumnClass}
              plans={visiblePlans}
              activePlanLevels={visiblePlanLevels}
              onSelectPlan={onSelectPlan}
              showButtons
              rootPlans={plans}
              isBottom
            />
          </div>
        </div>
        <p className={taxNoteClass}>Taxes may apply, where applicable</p>
      </div>
    </div>
  );
};

LegacyPlanCompareTable.propTypes = {
  features: PropTypes.array,
  plans: PropTypes.object,
  onSelectPlan: PropTypes.func.isRequired,
  planOrder: PropTypes.oneOf(['ascending', 'descending']),
  defaultBillingFrequency: PropTypes.oneOf([
    PLAN_PERIODS.ANNUAL,
    PLAN_PERIODS.MONTHLY,
  ]),
};

LegacyPlanCompareTable.defaultProps = {
  plans: ALL_PLANS,
  features: FEATURES,
  planOrder: 'ascending',
  defaultBillingFrequency: PLAN_PERIODS.ANNUAL,
};

export default LegacyPlanCompareTable;

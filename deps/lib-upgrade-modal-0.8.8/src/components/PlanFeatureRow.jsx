import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltips/Tooltip_GreatWhite';
import { css, cx } from 'emotion';
import PlanFeatureItem from './PlanFeatureItem';

const tableRowLabelClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-width: 190px;
  cursor: help;
`;

export const wide = css`
  align-items: flex-start;
  text-align: left;
  min-width: 208px;
  max-width: 300px;
`;

const featureLabelClass = css`
  font-size: 15px;
  line-height: 24px;
  padding: 0 6px;
  width: calc(100% - 12px);

  & span {
    cursor: help;
    width: 100%;
    display: block;
  }

  i {
    margin: -3px 0 0;
  }
`;

const featureSubLabelClass = css`
  font-size: 13px;
  line-height: 24px;
  opacity: 0.7;
  display: block;
  margin: -8px 0 0;
  cursor: help;
`;

const PlanFeatureRow = ({
  label,
  subLabel,
  plans,
  activePlanLevels,
  selectedBillingFrequency,
  tooltip,
  tableItemClass,
  tableColumnClass,
  tableRowClass,
}) => (
  <div className={tableRowClass} data-qa-selector="row-wrapper">
    <div className={cx([tableColumnClass, wide])} data-qa-selector="row-label">
      <div className={tableRowLabelClass}>
        <span className={featureLabelClass}>
          {tooltip && (
            <Tooltip
              title={tooltip}
              PopperProps={{ disablePortal: true }}
              data-qa-selector="tooltip"
            >
              <div>
                <span>{label} </span>
                {subLabel && (
                  <span className={featureSubLabelClass}>{subLabel}</span>
                )}
              </div>
            </Tooltip>
          )}
        </span>
      </div>
    </div>

    {activePlanLevels.map(key => (
      <PlanFeatureItem
        key={key}
        planKey={key}
        plan={plans[key]}
        selectedBillingFrequency={selectedBillingFrequency}
        tableItemClass={tableItemClass}
        tableColumnClass={tableColumnClass}
      />
    ))}
  </div>
);

PlanFeatureRow.propTypes = {
  label: PropTypes.string.isRequired,
  plans: PropTypes.objectOf(PropTypes.object).isRequired,
  tooltip: PropTypes.string,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  subLabel: PropTypes.string,
  selectedBillingFrequency: PropTypes.string.isRequired,
  activePlanLevels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PlanFeatureRow.defaultProps = {
  tooltip: '',
  tableItemClass: '',
  tableColumnClass: '',
  tableRowClass: '',
  subLabel: '',
};

export default PlanFeatureRow;

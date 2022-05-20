import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { PLAN_PERIODS, COLORS, PLAN_NAMES } from '../constants';
import CheckSvg from './CheckSvg';

const notIncludedClass = css`
  font-family: Roboto;
  font-size: 21px;
  line-height: 24px;
  color: ${COLORS.text.lightGrey};
`;

const PlanFeatureItem = ({
  planKey,
  plan,
  tableItemClass,
  tableColumnClass,
  selectedBillingFrequency,
}) => {
  const { label: description, detail, annualOnly = false } =
    plan[selectedBillingFrequency] || plan;
  let { included } = plan[selectedBillingFrequency] || plan;
  const isHighlighted = planKey === PLAN_NAMES.PRO;

  if (annualOnly && selectedBillingFrequency !== PLAN_PERIODS.ANNUAL) {
    included = false;
  }
  return (
    <div
      className={cx(tableColumnClass, isHighlighted ? 'highlighted' : '')}
      data-qa-selector="feature-item-container"
    >
      <div
        className={cx(tableItemClass, 'has-right-border')}
        data-qa-selector="feature-item"
      >
        {included ? (
          <>
            <span>{description ? description : <CheckSvg />}</span>
            {description && detail && <span>{detail}</span>}
          </>
        ) : (
          <span className={notIncludedClass}>&mdash;</span>
        )}
      </div>
    </div>
  );
};

PlanFeatureItem.propTypes = {
  planKey: PropTypes.string.isRequired,
  selectedBillingFrequency: PropTypes.string.isRequired,
  plan: PropTypes.shape({
    label: PropTypes.string,
    detail: PropTypes.string,
    included: PropTypes.bool,
  }).isRequired,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
};

PlanFeatureItem.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
};

export default PlanFeatureItem;

import React from 'react';
import { shallow } from 'enzyme';

import PlanFeatureRow from '../PlanFeatureRow';

describe('PlanFeatureRow', () => {
  let props;
  let elem;

  beforeEach(() => {
    props = {
      label: 'label',
      plans: {},
      activePlanLevels: [],
      tooltip: 'tooltip',
      tableRowClass: 'row-class',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      selectedBillingFrequency: 'ANNUAL',
    };

    elem = shallow(<PlanFeatureRow {...props} />);
  });

  it('should render PlanFeatureRow', () => {
    expect(elem);
  });

  it('should have tableRowClass on the container', () => {
    expect(elem.find('[data-qa-selector="row-wrapper"]').hasClass(props.tableRowClass));
  });

  it('should have tableColumnClass on the label', () => {
    expect(elem.find('[data-qa-selector="row-label"]').hasClass(props.tableColumnClass));
  });

  it('should have a tooltip', () => {
    expect(elem.find('[data-qa-selector="tooltip"]')).toHaveLength(1);
  });
});

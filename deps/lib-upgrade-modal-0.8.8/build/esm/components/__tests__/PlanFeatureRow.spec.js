import React from 'react';
import { shallow } from 'enzyme';
import PlanFeatureRow from '../PlanFeatureRow';
describe('PlanFeatureRow', function () {
  var props;
  var elem;
  beforeEach(function () {
    props = {
      label: 'label',
      plans: {},
      activePlanLevels: [],
      tooltip: 'tooltip',
      tableRowClass: 'row-class',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      selectedBillingFrequency: 'ANNUAL'
    };
    elem = shallow( /*#__PURE__*/React.createElement(PlanFeatureRow, props));
  });
  it('should render PlanFeatureRow', function () {
    expect(elem);
  });
  it('should have tableRowClass on the container', function () {
    expect(elem.find('[data-qa-selector="row-wrapper"]').hasClass(props.tableRowClass));
  });
  it('should have tableColumnClass on the label', function () {
    expect(elem.find('[data-qa-selector="row-label"]').hasClass(props.tableColumnClass));
  });
  it('should have a tooltip', function () {
    expect(elem.find('[data-qa-selector="tooltip"]')).toHaveLength(1);
  });
});
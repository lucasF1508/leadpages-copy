import React from 'react';
import { shallow } from 'enzyme';
import PlanFeatureItem from '../PlanFeatureItem';
describe('PlanFeatureItem', function () {
  var props;
  var elem;
  beforeEach(function () {
    props = {
      plan: {
        included: true,
        label: ''
      },
      planKey: 'standard',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      selectedBillingFrequency: 'ANNUAL'
    };
    elem = shallow( /*#__PURE__*/React.createElement(PlanFeatureItem, props));
  });
  it('should render PlanFeatureItem', function () {
    expect(elem).toBeDefined();
  });
  it('should have tableColClass on the container', function () {
    expect(elem.find('[data-qa-selector="feature-item-container"]').hasClass(props.tableColumnClass));
  });
  it('should have "highlighted" class on the container if it is a PRO plan', function () {
    props.planKey = 'pro';
    elem = shallow( /*#__PURE__*/React.createElement(PlanFeatureItem, props));
    expect(elem.find('[data-qa-selector="feature-item-container"]').hasClass('highlighted'));
  });
  it('should have tableItemClass on the wrapper div', function () {
    expect(elem.find('[data-qa-selector="feature-item"]').hasClass(props.tableItemClass));
  });
  it('should have a CheckSvg if it is included w/o a label', function () {
    expect(elem.find('CheckSvg')).toHaveLength(1);
  });
  it('should show the label if it is included', function () {
    props.plan.label = 'Label';
    elem = shallow( /*#__PURE__*/React.createElement(PlanFeatureItem, props));
    expect(elem.find('span').text()).toBe(props.plan.label);
  });
  it('should show a - if it is not included', function () {
    props.plan.included = false;
    elem = shallow( /*#__PURE__*/React.createElement(PlanFeatureItem, props));
    expect(elem.find('span').text()).toBe('—');
  });
  it('should show a - if it is included but only annual', function () {
    props.plan.annualOnly = true;
    props.selectedBillingFrequency = 'NOT_ANNUAL';
    elem = shallow( /*#__PURE__*/React.createElement(PlanFeatureItem, props));
    expect(elem.find('span').text()).toBe('—');
  });
});
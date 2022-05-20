import React from 'react';
import { shallow } from 'enzyme';
import PlanCta from '../PlanCta';
describe('PlanCta', function () {
  var props;
  var elem;
  var button;
  beforeEach(function () {
    props = {
      planKey: 'standard',
      planId: 'std',
      label: 'label',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      onClick: jest.fn(),
      buttonText: 'Upgrade',
      isCurrentPlan: false
    };
    elem = shallow( /*#__PURE__*/React.createElement(PlanCta, props));
    button = elem.find('button');
  });
  it('should render PlanCta', function () {
    expect(elem).toBeDefined();
  });
  it('should render a button with button label', function () {
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(props.buttonText);
  });
  it('should call onClick when button is clicked', function () {
    button.simulate('click', {
      preventDefault: function preventDefault() {}
    });
    expect(props.onClick).toHaveBeenCalledWith(props.planId);
  });
  it('should render a label', function () {
    expect(elem.find('[data-qa-selector="cta-label"]').text()).toEqual(props.label);
  });
  it('should not render a button if it is the current plan', function () {
    props.isCurrentPlan = true;
    elem = shallow( /*#__PURE__*/React.createElement(PlanCta, props));
    expect(elem.find('button')).toHaveLength(0);
  });
  it('should set most-popular class on button if plan is pro', function () {
    props.planKey = 'pro';
    elem = shallow( /*#__PURE__*/React.createElement(PlanCta, props));
    expect(elem.find('button').hasClass('most-popular'));
  });
});
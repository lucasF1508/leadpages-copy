import React from 'react';
import { shallow } from 'enzyme';
import UpgradeFooter from '../UpgradeFooter';
describe('UpgradeFooter', function () {
  var props;
  var elem;
  beforeEach(function () {
    props = {
      plans: {
        standard: {
          id: 'std',
          price: '99',
          buttonText: 'Upgrade',
          isCurrentPlan: false
        }
      },
      activePlanLevels: ['standard'],
      tableRowClass: 'row-class',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      onSelectPlan: jest.fn()
    };
    elem = shallow( /*#__PURE__*/React.createElement(UpgradeFooter, props));
  });
  it('should render UpgradeFooter', function () {
    expect(elem).toBeDefined();
  });
  it('should render PlanCta per plans item ', function () {
    expect(elem.find('PlanCta')).toHaveLength(1);
  });
  it('should have tableRowClass on the container', function () {
    expect(elem.find(props.tableColumnClass)).toBeDefined();
  });
});
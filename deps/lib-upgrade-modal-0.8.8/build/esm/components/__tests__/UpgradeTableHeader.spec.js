import React from 'react';
import { shallow } from 'enzyme';
import UpgradeTableHeader from '../UpgradeTableHeader';
describe('UpgradeTableHeader', function () {
  var props;
  var elem;
  beforeEach(function () {
    props = {
      plans: {
        standard: {
          id: 'std',
          price: '99',
          monthlyPrice: '17',
          buttonText: 'Upgrade',
          isCurrentPlan: false
        }
      },
      activePlanLevels: ['standard'],
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      showButtons: true,
      onChange: jest.fn(),
      onSelectPlan: jest.fn()
    };
    elem = shallow( /*#__PURE__*/React.createElement(UpgradeTableHeader, props));
  });
  it('should render UpgradeTableHeader', function () {
    expect(elem).toBeDefined();
  });
  it('should render PlanHeader per plans item ', function () {
    expect(elem.find('PlanHeader')).toHaveLength(1);
  });
  it('should have a RadioButtonGroup', function () {
    expect(elem.find('RadioButtonGroup')).toHaveLength(1);
  });
});
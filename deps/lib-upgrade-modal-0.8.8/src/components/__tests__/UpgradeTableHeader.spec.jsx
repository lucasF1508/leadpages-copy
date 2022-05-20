import React from 'react';
import { shallow } from 'enzyme';

import UpgradeTableHeader from '../UpgradeTableHeader';

describe('UpgradeTableHeader', () => {
  let props;
  let elem;

  beforeEach(() => {
    props = {
      plans: {
        standard: {
          id: 'std',
          price: '99',
          monthlyPrice: '17',
          buttonText: 'Upgrade',
          isCurrentPlan: false,
        },
      },
      activePlanLevels: ['standard'],
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      showButtons: true,
      onChange: jest.fn(),
      onSelectPlan: jest.fn(),
    };

    elem = shallow(<UpgradeTableHeader {...props} />);
  });

  it('should render UpgradeTableHeader', () => {
    expect(elem).toBeDefined();
  });

  it('should render PlanHeader per plans item ', () => {
    expect(elem.find('PlanHeader')).toHaveLength(1);
  });

  it('should have a RadioButtonGroup', () => {
    expect(elem.find('RadioButtonGroup')).toHaveLength(1);
  });
});

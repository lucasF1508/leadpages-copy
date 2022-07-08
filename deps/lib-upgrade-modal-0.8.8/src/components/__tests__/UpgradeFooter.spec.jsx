import React from 'react';
import { shallow } from 'enzyme';

import UpgradeFooter from '../UpgradeFooter';

describe('UpgradeFooter', () => {
  let props;
  let elem;

  beforeEach(() => {
    props = {
      plans: {
        standard: {
          id: 'std',
          price: '99',
          buttonText: 'Upgrade',
          isCurrentPlan: false,
        },
      },
      activePlanLevels: ['standard'],
      tableRowClass: 'row-class',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      onSelectPlan: jest.fn(),
    };

    elem = shallow(<UpgradeFooter {...props} />);
  });

  it('should render UpgradeFooter', () => {
    expect(elem).toBeDefined();
  });

  it('should render PlanCta per plans item ', () => {
    expect(elem.find('PlanCta')).toHaveLength(1);
  });

  it('should have tableRowClass on the container', () => {
    expect(elem.find(props.tableColumnClass)).toBeDefined();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { FLOWS } from '../constants';
import UpgradeModal from '../UpgradeModal';
import { PlanCompareTable } from '../components';

describe('UpgradeModal', () => {
  let wrapper;
  let props = {
    onSelectPlan: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
    flow: FLOWS.UPGRADE,
  };

  it('should render a PlanCompareTable', () => {
    wrapper = shallow(<UpgradeModal {...props} />);
    expect(wrapper.find(PlanCompareTable).length).toBe(1);
  });
});

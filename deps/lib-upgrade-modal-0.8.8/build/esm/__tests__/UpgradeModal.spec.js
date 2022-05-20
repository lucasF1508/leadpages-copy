import React from 'react';
import { shallow } from 'enzyme';
import { FLOWS } from '../constants';
import UpgradeModal from '../UpgradeModal';
import { PlanCompareTable } from '../components';
describe('UpgradeModal', function () {
  var wrapper;
  var props = {
    onSelectPlan: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
    flow: FLOWS.UPGRADE
  };
  it('should render a PlanCompareTable', function () {
    wrapper = shallow( /*#__PURE__*/React.createElement(UpgradeModal, props));
    expect(wrapper.find(PlanCompareTable).length).toBe(1);
  });
});
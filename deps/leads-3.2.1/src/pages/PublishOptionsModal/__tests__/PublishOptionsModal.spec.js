import React from 'react';
import { shallow, mount } from 'enzyme';

import PublishOptionsModal from '../PublishOptionsModal';

const DEFAULT_REQUIRED_PROPS = {
  onAfterOpen: jest.fn(),
  onClose: jest.fn(),
  onRequestClose: jest.fn(),
  setTabView: jest.fn(),
  tabView: 'Tab 1',
  tabViews: {
    tab1: 'Tab 1',
    tab2: 'Tab 2',
    tab3: 'Tab 3'
  }
};

describe('Molecules :: PublishOptionsModal', () => {
  let props;

  beforeEach(() => {
    props = { ...DEFAULT_REQUIRED_PROPS };
  });

  describe('componentWillReceiveProps', () => {
    beforeEach(() => {
      jest.spyOn(PublishOptionsModal.prototype, 'componentWillReceiveProps');
    });

    it('componentWillReceiveProps is defined', () => {
      mount(<PublishOptionsModal {...props} />);

      expect(
        PublishOptionsModal.prototype.componentWillReceiveProps
      ).toBeDefined();
    });

    it('should not call setTabView if passed tabView prop is not different from current tabView in state', () => {
      const wrapper = shallow(<PublishOptionsModal {...props} />);
      wrapper.setProps({ tabView: props.tabViews.tab1 });

      expect(
        PublishOptionsModal.prototype.componentWillReceiveProps
      ).toHaveBeenCalled();
      expect(props.setTabView).not.toHaveBeenCalled();
    });

    it('should call setTabView if passed tabView prop is different from current tabView in state', () => {
      const wrapper = shallow(<PublishOptionsModal {...props} />);
      wrapper.setProps({ tabView: props.tabViews.tab2 });

      expect(
        PublishOptionsModal.prototype.componentWillReceiveProps
      ).toHaveBeenCalled();
      expect(props.setTabView).toHaveBeenCalledTimes(1);
      expect(props.setTabView).toHaveBeenCalledWith(props.tabViews.tab2);
    });
  });
  describe('render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PublishOptionsModal {...props} />);
    });
    it('should be tabbed if there are more than two items in tabViews', () => {
      expect(wrapper.find('Header').props().tabs).toBe(true);
      expect(wrapper.find('TabLink').length).toBe(3);
    });
    it('should not be tabbed if there is only one item in tabViews', () => {
      wrapper.setProps({ tabViews: { tab1: 'Tab 1' } });
      expect(wrapper.find('Header').props().tabs).toBe(false);
      expect(wrapper.find('TabLink').length).toBe(0);
    });
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';

import PageUrlEdit from '../PageUrlEdit';
import UrlTab from '../UrlTab';

const DEFAULT_REQUIRED_PROPS = {
  assetName: 'Jim',
  onHideFromSearchChecked: jest.fn(),
  onRedirectPageChecked: jest.fn(),
  onRedirectUrlSave: jest.fn(),
  onPageUrlSaveClick: jest.fn(),
  onSlugChange: jest.fn(),
  onSelectChange: jest.fn(),
  onSelectClick: jest.fn(),
  selectOptions: [],
};

describe('Molecules :: UrlTab', () => {
  let props;

  beforeEach(() => {
    props = { ...DEFAULT_REQUIRED_PROPS };
  });

  describe('redirect options rendering', () => {
    it('should render the redirect checkbox if onRedirectUrlSaved is valued', () => {
      const wrapper = mount(<UrlTab {...props} />);
      const requireCheckbox = wrapper.find('input#url-tab-redirect-page-checkbox');
      expect(requireCheckbox.length).toBe(1);
    });

    it('should NOT render the redirect checkbox if onRedirectUrlSaved is NOT valued', () => {
      props.onRedirectUrlSave = null;
      const wrapper = mount(<UrlTab {...props} />);
      const requireCheckbox = wrapper.find({ id: 'url-tab-redirect-page-checkbox' });
      expect(requireCheckbox.length).toBe(0);
    });
  });

  describe('onRedirectCheckboxChanged', () => {
    it('should call the onRedirectPageChecked prop', () => {
      const wrapper = shallow(<UrlTab {...props} />);
      const fakeEvent = { target: { checked: false } };
      wrapper.instance().onRedirectCheckboxChanged(fakeEvent);

      expect(props.onRedirectPageChecked).toBeCalledWith(false);
    });

    it('should be wired up to the redirect checkbox via handleOnRedirectCheckboxChanged', () => {
      const wrapper = shallow(<UrlTab {...props} />);
      const requireCheckbox = wrapper.find({ id: 'url-tab-redirect-page-checkbox' });

      expect(requireCheckbox.props().onChange)
        .toBe(wrapper.instance().handleOnRedirectCheckboxChanged);
    });
  });

  describe('redirect to desktop', () => {
    it('should NOT show a redirect desktop checkbox IF redirect page is NOT checked', () => {
      const wrapper = shallow(<UrlTab {...props} />);
      const desktopCheckboxWrapper = wrapper.find({ id: 'redirect-desktop-checkbox' });

      expect(desktopCheckboxWrapper.length).toBe(0);
    });


    describe('redirectPageChecked', () => {
      beforeEach(() => {
        props.redirectPageChecked = true;
      });

      it('should default to not check the redirect to desktop box', () => {
        const wrapper = shallow(<UrlTab {...props} />);
        const desktopCheckboxWrapper = wrapper.find({ id: 'redirect-desktop-checkbox' });

        expect(desktopCheckboxWrapper.props().checked).toBeFalsy();
      });

      it('should check the redirect to desktop box if redirectToDesktop is true', () => {
        props.shouldRedirectDesktopOnly = true;
        const wrapper = shallow(<UrlTab {...props} />);
        const desktopCheckboxWrapper = wrapper.find({ id: 'redirect-desktop-checkbox' });

        expect(desktopCheckboxWrapper.props().checked).toBeTruthy();
      });

      it('should show a redirect desktop checkbox IF redirect page is checked', () => {
        const wrapper = shallow(<UrlTab {...props} />);
        const desktopCheckboxWrapper = wrapper.find({ id: 'redirect-desktop-checkbox' });

        expect(desktopCheckboxWrapper.length).toBe(1);
      });

      it('should call the onRedirectToDesktopChanged prop when the checkbox is clicked', () => {
        props.onRedirectToDesktopChanged = jest.fn();
        const fakeEvent = { target: { checked: true } };
        const wrapper = shallow(<UrlTab {...props} />);
        wrapper.find({ id: 'redirect-desktop-checkbox' })
          .simulate('change', fakeEvent);

        expect(props.onRedirectToDesktopChanged).toBeCalledWith(true);
      });
    });
  });

  describe('onPageUrlSaveClick', () => {
    it('should call the onPageUrlSaveClick prop, forwarding the args', () => {
      const wrapper = shallow(<UrlTab {...props} />);
      const pageUrlWrapper = wrapper.find(PageUrlEdit);

      pageUrlWrapper.props().onSaveClick();

      expect(props.onPageUrlSaveClick).toBeCalled();
    });
  });
});

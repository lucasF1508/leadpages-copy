import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import MultiSelect from '../MultiSelect';

describe('MultiSelect Component', () => {
  let props;
  let options;
  let wrapper;
  let instance;

  const CLASSNAME_PREFIX = 'multiselect';
  const LABEL_SELECTOR = `.${CLASSNAME_PREFIX}__label`;
  const DROPDOWN_INDICATOR_SELECTOR = `.${CLASSNAME_PREFIX}__dropdown-indicator`;

  beforeEach(() => {
    options = [{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }];

    props = {
      classNamePrefix: CLASSNAME_PREFIX,
      options,
      noOptionsMessage: jest.fn(),
      onChange: jest.fn(),
    };

    wrapper = mount(<MultiSelect {...props} />);
    instance = wrapper.instance();
  });

  describe('handleChange', () => {
    let selectedOptions;

    beforeEach(() => {
      selectedOptions = options;
    });

    it('should set selectedOptions in state', () => {
      instance.handleChange(selectedOptions, {});
      expect(instance.state.selectedOptions).toBe(options);
    });

    it('should set maxSelectedOptionsReached state to true if maxSelectedOptions is defined and selected options has hit max', () => {
      wrapper.setProps({ maxSelectedOptions: 3 });
      selectedOptions.push({ value: 'option3', label: 'Option 3' });

      instance.handleChange(selectedOptions, {});
      expect(instance.state.maxSelectedOptionsReached).toBe(true);
    });

    it('should set maxSelectedOptionsReached state to false if selected options are less than max', () => {
      wrapper.setProps({ maxSelectedOptions: 3 });

      instance.handleChange(selectedOptions, {});
      expect(instance.state.maxSelectedOptionsReached).toBe(false);
    });

    it('should trigger onChange prop function', () => {
      instance.handleChange(selectedOptions, {});
      expect(instance.props.onChange).toHaveBeenCalledWith(selectedOptions, {});
    });
  });

  describe('noOptionsMessage', () => {
    it('should trigger noOptionsMessage prop function', () => {
      instance.noOptionsMessage({});
      expect(instance.props.noOptionsMessage).toHaveBeenCalledWith({});
    });

    it('should return maxSelectedOptionsMessage if one is defined and max has been reached', () => {
      wrapper.setProps({ maxSelectedOptionsMessage: 'Max reached' });
      wrapper.setState({ maxSelectedOptionsReached: true });
      expect(instance.noOptionsMessage({})).toEqual('Max reached');
    });

    it('should not return maxSelectedOptionsMessage if one is defined but max has not been reached', () => {
      wrapper.setProps({ maxSelectedOptionsMessage: 'Max reached' });
      const result = instance.noOptionsMessage({});
      expect(result).not.toEqual('Max reached');
      expect(instance.props.noOptionsMessage).toHaveBeenCalledWith({});
    });
  });

  describe('render', () => {
    it('renders a static MultiSelect correctly', () => {
      wrapper.setProps({ isSearchable: false });
      const tree = renderer.create(wrapper).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders a creatable MultiSelect correctly', () => {
      wrapper.setProps({ isCreatable: true });
      const tree = renderer.create(wrapper).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render a label if one is supplied', () => {
      const label = 'Select an Option';
      wrapper.setProps({ label });

      expect(wrapper.find(LABEL_SELECTOR).length).toEqual(1);
      expect(wrapper.find(LABEL_SELECTOR).contains(label)).toBe(true);
    });

    it('should not render a label if one is not supplied', () => {
      expect(wrapper.find(LABEL_SELECTOR).length).toEqual(0);
    });

    it('should render a search icon as the dropdown indicator when isSearchable is true', () => {
      expect(wrapper.find(`${DROPDOWN_INDICATOR_SELECTOR} .lp-icon`).text()).toBe('search');
    });

    it('should render a down angle icon as the dropdown indicator when isSearchable is false', () => {
      wrapper.setProps({ isSearchable: false });

      expect(wrapper.find(`${DROPDOWN_INDICATOR_SELECTOR} .lp-icon`).text()).toBe('down_angle');
    });
  });
});

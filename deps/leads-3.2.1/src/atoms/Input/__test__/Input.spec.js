import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('<Input />', () => {
  it('should call onBlur function with correct value', () => {
    const onBlurSpy = jest.fn();

    const wrapper = shallow(
      <Input
        id="test-input"
        onBlur={onBlurSpy}
        placeholder="Something Borrowed"
      />
    );

    const input = wrapper.find('input#test-input');

    // Only simulates change, forcing the change event to happen
    input.simulate('blur', { target: { value: '' } });

    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });

  it('should use the default component', () => {
    const wrapper = shallow(
      <Input id="test-input" placeholder="Something Borrowed" />
    );

    expect(wrapper.find('input').length).toBe(1);
  });

  it('should use a provided component', () => {
    const wrapper = shallow(
      <Input
        id="test-input"
        placeholder="Something Borrowed"
        inputComponent="textarea"
      />
    );

    expect(wrapper.find('textarea').length).toBe(1);
  });

  it('should wrap the input if an inputWrapper is given', () => {
    const TestWrapper = () => <div>tester</div>;
    const wrapper = shallow(
      <Input
        id="test-input"
        placeholder="Something Borrowed"
        inputWrapper={TestWrapper}
      />
    );

    expect(wrapper.find(TestWrapper).length).toBe(1);
  });
});

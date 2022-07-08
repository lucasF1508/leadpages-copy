import React from 'react';
import { mount } from 'enzyme';

import Search from '../Search';

describe('<Search />', () => {
  it('should call onSubmit function with correct value', () => {
    const onSubmitSpy = jest.fn();

    const wrapper = mount(
      <Search
        id="search"
        onSubmit={onSubmitSpy}
        placeholder="Something Borrowed"
      />
    );
    const searchInput = wrapper.find('input#search');
    const searchValue = 'Testing Search';

    // Actually changes the node
    wrapper.setProps({ value: searchValue });
    // Only simulates change, forcing the change event to happen
    searchInput.simulate('change', { target: { value: searchValue } });

    wrapper.find('button').simulate('submit');

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy.mock.calls[0][1]).toEqual(searchValue);
  });

  it('should call onChange function with correct value', () => {
    const onSubmitSpy = jest.fn();
    const onChangeSpy = jest.fn();

    const wrapper = mount(
      <Search
        id="search"
        onChange={onChangeSpy}
        onSubmit={onSubmitSpy}
        placeholder="Something Borrowed"
      />
    );
    const searchInput = wrapper.find('input#search');
    const searchValue = 'Testing Search';

    wrapper.setProps({ value: searchValue });
    searchInput.simulate('change', { target: { value: searchValue } });

    expect(onChangeSpy.mock.calls.length).toEqual(1);
    expect(onChangeSpy.mock.calls[0][0].target.value).toEqual(searchValue);
  });
});

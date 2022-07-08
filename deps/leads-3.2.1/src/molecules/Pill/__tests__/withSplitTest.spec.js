import React from 'react';
import { shallow } from 'enzyme';

import { Pill, withSplitTest } from '../../Pill';

const PillWithSplitTests = withSplitTest(Pill);

describe('withSplitTest', () => {
  it('should render pill with correct split test overflow', () => {
    const mockData = [
      0.20,
      0.20,
      0.20,
      0.20,
      0.20,
      0.20,
      0.20,
    ];

    const wrapper = shallow(<PillWithSplitTests data={mockData} />);
    const overflowCount = wrapper.find('.splitSwatchOverflow').text();

    expect(wrapper.props().data.length).toEqual(7);
    expect(overflowCount).toEqual('+4');
  });
});

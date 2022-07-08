import React from 'react';
import { shallow } from 'enzyme';

import { Pill } from '../../Pill';

describe('<Pill />', () => {
  it('should render an empty pill', () => {
    const wrapper = shallow(<Pill />);

    const emptyDefaultText = wrapper.find('.pillEmptyText').text();

    expect(emptyDefaultText).toEqual('Choose Progression Point(s) to Track');
  });
});

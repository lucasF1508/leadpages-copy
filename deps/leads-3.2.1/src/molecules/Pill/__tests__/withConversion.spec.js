import React from 'react';
import { mount } from 'enzyme';

import { Pill, withConversion } from '../../Pill';

const PillWithConversion = withConversion(Pill);

describe('withConversion', () => {
  it('should render a component with conversion', () => {
    const mockData = [{
      text: 'My Webform',
      conversion: 0.10,
    }];

    const wrapper = mount(<PillWithConversion iconColor="blueDarker" data={mockData} />);
    const hasCorrectIconColor = wrapper.find('.lp-icon').hasClass('blueDarkerColor');
    const conversionText = wrapper.find('.pillHeading').text();

    expect(hasCorrectIconColor).toEqual(true);
    expect(conversionText).toEqual(mockData[0].text);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../atoms/Button';
import Toast from '../';

describe('Feedback:: Toasts', () => {
  let props;

  beforeEach(() => {
    props = {
      message: 'hello',
    };
  });

  it('should render a button with the close icon by default', () => {
    const wrapper = shallow(<Toast {...props} />);
    const button = wrapper.find(Button);

    expect(button.length).toBe(1);
    expect(button.props().icon).toEqual('close');
  });

  it('should render a "close" button with the icon override', () => {
    props.closeIcon = 'dude-car';
    const wrapper = shallow(<Toast {...props} />);
    const button = wrapper.find(Button);

    expect(button.length).toBe(1);
    expect(button.props().icon).toEqual('dude-car');
  });
});

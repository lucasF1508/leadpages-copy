import React from 'react';
import { shallow } from 'enzyme';

import FacebookIcon from '../FacebookIcon';

describe('FacebookIcon', () => {
  it('should render in default state', () => {
    const wrap = shallow(<FacebookIcon />);

    expect(wrap.getElements()).toMatchSnapshot();
  });

  it('should display the facebook svg by default', () => {
    const wrap = shallow(<FacebookIcon />);

    const facebookIcon = wrap.find('svg');
    const indicator = wrap.find('.indicator');

    expect(indicator.exists()).toEqual(false);
    expect(facebookIcon.exists()).toEqual(true);
  });

  it('should display the a thumbnail when passed `imgSrc`', () => {
    const wrap = shallow(<FacebookIcon showStatus status="active" imgSrc="http://fillmurray.com/200/300" />);


    const image = wrap.find('img');
    const facebookIcon = wrap.find('svg');

    expect(facebookIcon.exists()).toEqual(false);
    expect(image.exists()).toEqual(true);
  });
});

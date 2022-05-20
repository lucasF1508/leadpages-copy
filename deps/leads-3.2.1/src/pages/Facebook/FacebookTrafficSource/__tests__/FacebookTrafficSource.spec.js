import React from 'react';
import { shallow } from 'enzyme';

import FacebookTrafficSource from '../FacebookTrafficSource';

describe('FacebookTrafficSource', () => {
  it('should render in default state', () => {
    const wrap = shallow(<FacebookTrafficSource />);

    const title = wrap.find('.title');
    expect(title.text()).toEqual('Create a Facebook Ad');
    expect(wrap.getElements()).toMatchSnapshot();
  });

  it('should be enabled when `enabled` is passed', () => {
    const wrap = shallow(<FacebookTrafficSource enabled />);

    const enabledClass = wrap.find('.tsEnabled');

    expect(enabledClass.exists()).toEqual(true);
  });

  it('should be show name when `enabled`, and no analytics if there are none', () => {
    const ad = { id: '123', name: 'Franks Title Ad' };
    const wrap = shallow(<FacebookTrafficSource enabled ad={ad} />);

    const title = wrap.find('.trafficSourceContent');
    const analytics = wrap.find('.analytics');

    expect(title.text()).toEqual('Franks Title Ad');
    expect(analytics.exists()).toEqual(false);
  });

  it('should be show name when `enabled`, an indicator, and analytics if present', () => {
    const ad = { id: '123', name: 'Franks Title Ad', impressions: 20, clicks: 19 };
    const wrap = shallow(<FacebookTrafficSource
      analyticsDisplay={(<span>fake • data</span>)}
      enabled
      ad={ad}
      adStatus="active"
    />);
    const indicator = wrap.find('.indicator');

    const analytics = wrap.find('.analytics');
    console.log(analytics.html());

    expect(indicator.exists()).toEqual(true);
    expect(analytics.text()).toEqual('fake • data');
  });
});

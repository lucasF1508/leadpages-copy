import React from 'react';
import { shallow } from 'enzyme';

import UpgradeTeaseModal from '../UpgradeTeaseModal';
import { UpgradeTeaseContent } from '../components';

describe('UpgradeTeaseModal', () => {
  let wrapper;
  let props = {
    headline: 'Headline',
    subheadline: 'Subheadline',
    mediaUrl: '/',
    image: 'image.png',
    listItems: ['one', 'two', 'three'],
    ctaLabel: 'Label',
    ctaLink: 'link.html',
    closeAction: jest.fn(),
  };

  it('should render an UpgradeTeaseContent component', () => {
    wrapper = shallow(<UpgradeTeaseModal {...props} />);
    expect(wrapper.find(UpgradeTeaseContent).length).toBe(1);
  });
});

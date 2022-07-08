import React from 'react';
import { shallow } from 'enzyme';

import UpgradeTeaseContent from '../UpgradeTeaseContent';

const makeWrapper = (props) => shallow(<UpgradeTeaseContent {...props} />);

const selectors = {
  image: { 'data-qa-selector': 'promo-image' },
  ctaLink: { 'data-qa-selector': 'cta-link' },
};


describe('UpgradeContent', () => {
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

  beforeEach(() => {
    wrapper = makeWrapper(props);
  });

  it('should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the headline', () => {
    const headerElem = wrapper.find('h1');
    expect(headerElem.text()).toBe(props.headline);
  });

  it('should render the subheadline', () => {
    const headerElem = wrapper.find('h2');
    expect(headerElem.text()).toBe(props.subheadline);
  });

  it('should render a list from listItems', () => {
    const listElem = wrapper.find('ul li');
    expect(listElem.length).toBe(props.listItems.length);
  });

  it('should set the image src', () => {
    const imageElem = wrapper.find(selectors.image);
    expect(imageElem).toBeDefined();
    expect(imageElem.props().src).toBe(`${props.mediaUrl}${props.image}`);
  });

  it('should set the cta link and label', () => {
    const elem = wrapper.find(selectors.ctaLink);
    expect(elem).toBeDefined();
    expect(elem.props().href).toBe(props.ctaLink);
    expect(elem.text()).toMatch(props.ctaLabel);
  });
});

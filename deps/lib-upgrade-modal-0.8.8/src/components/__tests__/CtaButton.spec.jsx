import React from 'react';
import { shallow } from 'enzyme';

import CtaButton, { ctaPrimaryButtonClass } from '../CtaButton';

describe('CtaButton', () => {
  let props;
  let ctaButton;
  let elem;

  beforeEach(() => {
    props = {
      labelText: 'Button Label',
      isPrimary: false,
      ctaClassName: 'fakeClassName',
      onClick: jest.fn(),
    };

    ctaButton = shallow(<CtaButton {...props} />);
    elem = ctaButton.find('button');
  });

  it('should render a <button>', () => {
    expect(elem);
  });

  it('should run onClick when clicked', () => {
    elem.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });

  it('should have labelText as the button content', () => {
    expect(elem.text()).toEqual(props.labelText);
  });

  it('should have ctaClassName applied to button', () => {
    expect(elem.hasClass(props.ctaClassName));
  });

  it('should have the primary button styles', () => {
    const primaryButton = shallow(<CtaButton {...props} isPrimary />);
    const primaryElem = primaryButton.find('button');
    expect(primaryElem.hasClass(ctaPrimaryButtonClass));
  });
});

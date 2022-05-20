import React from 'react';
import { shallow } from 'enzyme';

import PlanHeader from '../PlanHeader';

const selectors = {
  container: { 'data-qa-selector': 'container' },
  title: { 'data-qa-selector': 'plan-title' },
  label: { 'data-qa-selector': 'plan-label' },
  payLabel: { 'data-qa-selector': 'pay-label' },
  price: { 'data-qa-selector': 'plan-price' },
  ctaButton: { 'data-qa-selector': 'upgrade-button-container' },
};

const makeWrapper = props => shallow(<PlanHeader {...props} />);

describe('PlanHeader', () => {
  let planHeader;
  let elem;

  const props = {
    title: 'Pro',
    price: '48',
    ctaAction: jest.fn(),
  };

  it('should render the title', () => {
    planHeader = makeWrapper(props);
    elem = planHeader.find(selectors.title);
    expect(elem.text()).toEqual(props.title);
  });

  it('should render the price', () => {
    planHeader = makeWrapper(props);
    elem = planHeader.find(selectors.price);
    expect(elem.text()).toEqual(`$${props.price}`);
  });

  it('should render the pay label', () => {
    const payLabel = 'Pay Label';
    planHeader = makeWrapper({ ...props, payLabel });
    elem = planHeader.find(selectors.payLabel);
    expect(elem.text()).toEqual(payLabel);
  });

  it('should render the plan label', () => {
    const planLabel = 'Plan Label';
    planHeader = makeWrapper({ ...props, planLabel });
    elem = planHeader.find(selectors.label);
    expect(elem.text()).toEqual(planLabel);
  });

  it('should hide buttons by default', () => {
    planHeader = makeWrapper(props);
    elem = planHeader.find(selectors.ctaButton);
    expect(elem.length).toBe(0);
  });

  it('should render CtaButton with showButton', () => {
    planHeader = makeWrapper({ ...props, showButton: true });
    elem = planHeader.find(selectors.ctaButton);
    expect(elem.length).toBe(1);
  });

  it('should not render CtaButton with showButton but not button label', () => {
    props.buttonLabel = '';
    planHeader = makeWrapper({ ...props, showButton: true });
    elem = planHeader.find(selectors.ctaButton);
    expect(elem.length).toBe(0);
  });

  it('should add highlighted class with isHighlighted', () => {
    planHeader = makeWrapper({ ...props, isHighlighted: true });
    elem = planHeader.find(selectors.container);
    expect(elem.hasClass('highlighted')).toBe(true);
  });
});

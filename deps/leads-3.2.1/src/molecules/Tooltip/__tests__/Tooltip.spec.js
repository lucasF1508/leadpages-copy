import React from 'react';
import { css } from 'emotion';
import { mount } from 'enzyme';
import Tooltip from '../Tooltip';
import * as styles from '../Tooltip.css.js';

describe('Tooltip', () => {
  const defaultTooltipClassName = css(styles.tooltipClassName);
  it('Should render default at top', () => {
    const wrapper = mount(<Tooltip tip="tip" />);
    const tipText = wrapper.find(`.top.${defaultTooltipClassName} .tip`).text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at top', () => {
    const wrapper = mount(<Tooltip tip="tip" top />);
    const tipText = wrapper.find(`.top.${defaultTooltipClassName} .tip`).text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at bottom', () => {
    const wrapper = mount(<Tooltip tip="tip" bottom />);
    const tipText = wrapper
      .find(`.bottom.${defaultTooltipClassName} .tip`)
      .text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at left', () => {
    const wrapper = mount(<Tooltip tip="tip" left />);
    const tipText = wrapper
      .find(`.left.${defaultTooltipClassName} .tip`)
      .text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at right', () => {
    const wrapper = mount(<Tooltip tip="tip" right />);
    const tipText = wrapper
      .find(`.right.${defaultTooltipClassName} .tip`)
      .text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at top and not need hover', () => {
    const wrapper = mount(<Tooltip tip="tip" hover={false} />);
    const tipText = wrapper.find(`.top .tip`).text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at top and be hidden if the tooltip is set to be hidden', () => {
    const tipClassName = css(styles.tipClassName, styles.topTipClassName);
    const wrapper = mount(<Tooltip tip="tip" hidden />);
    const tipText = wrapper.find(`.top .tip.${tipClassName}`).text();
    expect(tipText).toEqual('tip');
  });

  it('should be hidden by default if the tooltip is set to display on hover', () => {
    const tipClassName = css(styles.tipClassName, styles.topTipClassName);
    const wrapper = mount(<Tooltip tip="tip" hover />);
    const tipText = wrapper.find(`.top .tip.${tipClassName}`).text();
    expect(tipText).toEqual('tip');
  });

  it('should not be hidden by default if the tooltip is set to display always', () => {
    const tipClassName = css(styles.tipClassName, styles.topTipClassName);
    const wrapper = mount(<Tooltip tip="tip" hover={false} />);
    const tipText = wrapper.find(`.top .tip.is-visible.${tipClassName}`).text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at top and be span', () => {
    const wrapper = mount(<Tooltip tip="tip" />);
    const tipText = wrapper.find(`span .tip`).text();
    expect(tipText).toEqual('tip');
  });

  it('Should render at top and be div', () => {
    const wrapper = mount(<Tooltip tip="tip" isDiv />);
    const tipText = wrapper.find(`div .tip`).text();
    expect(tipText).toEqual('tip');
  });

  it('Should render an arrow by default', () => {
    const arrowClassName = css(styles.arrowClassName, styles.topArrowClassName);
    const wrapper = mount(<Tooltip tip="tip" />);
    const arrowsWrapper = wrapper.find(`span .${arrowClassName}`);
    expect(arrowsWrapper.length).toBe(1);
  });

  it('Should not show an arrow if we disable it', () => {
    const wrapper = mount(<Tooltip tip="tip" withArrow={false} />);
    const arrowsWrapper = wrapper.find(`span .${styles.arrowClassName}`);
    expect(arrowsWrapper.length).toBe(0);
  });
});

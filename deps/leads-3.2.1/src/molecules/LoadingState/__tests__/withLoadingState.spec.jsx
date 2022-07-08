import React from 'react';
import { mount } from 'enzyme';

import withLoadingState, { LOADING_STATES } from '../withLoadingState';

const TextWithLoading = withLoadingState(props => <span {...props} />);

jest.useFakeTimers();

describe('withLoadingState', () => {
  let props;
  let component;
  let instance;

  beforeEach(() => {
    props = {
      loadingState: LOADING_STATES.success,
    };

    component = mount(<TextWithLoading {...props} />);
    instance = component.instance();
  });

  describe('constructor', () => {
    it('should set showOriginalComponent to true if the loading state is not loading', () => {
      expect(instance.state.showOriginalComponent).toEqual(true);
    });

    it('should set showOriginalComponent to false if the loading state is loading', () => {
      props.loadingState = LOADING_STATES.loading;
      component = mount(<TextWithLoading {...props} />);
      instance = component.instance();
      expect(instance.state.showOriginalComponent).toEqual(false);
    });
  });

  describe('componentDidUpdate', () => {
    it('should not update state if the loading state has not changed', () => {
      instance.componentDidUpdate({ loadingState: LOADING_STATES.success });
      expect(instance.state.showOriginalComponent).toEqual(true);
    });

    it('should not update state if the loading state is not a recognized state', () => {
      component.setProps({ loadingState: 'Unreal' });
      instance.componentDidUpdate({ loadingState: LOADING_STATES.loading });
      expect(instance.state.showOriginalComponent).toEqual(true);
    });

    it('should never show original component if the loading state has changed and new loading state is loading', () => {
      component.setProps({ loadingState: LOADING_STATES.loading });
      instance.componentDidUpdate({ loadingState: LOADING_STATES.success });
      expect(instance.state.showOriginalComponent).toEqual(false);
      jest.runAllTimers();
      expect(instance.state.showOriginalComponent).toEqual(false);
    });

    it('should temporarily hide the original component if the loading state has changed and new loading state is not loading', () => {
      instance.componentDidUpdate({ loadingState: LOADING_STATES.error });
      expect(instance.state.showOriginalComponent).toEqual(false);
      jest.runAllTimers();
      expect(instance.state.showOriginalComponent).toEqual(true);
    });

    it('should set a timer and clear it after the interval', () => {
      instance.componentDidUpdate({ loadingState: LOADING_STATES.error });
      expect(instance.timeout).toBeDefined();
      jest.advanceTimersByTime(2000);
      expect(instance.timeout).toBeNull();
    });
  });

  describe('componentWillUnmount', () => {
    it('should clear any timers', () => {
      instance.componentDidUpdate({ loadingState: LOADING_STATES.error });
      instance.componentWillUnmount();
      expect(window.clearTimeout).toHaveBeenCalledWith(instance.timeout);
    });
  });
});

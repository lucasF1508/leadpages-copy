import React from 'react';
import { mount } from 'enzyme';
import Robie from '../../Robie';
import * as animations from '../animations';

jest.useFakeTimers();

describe('Robie', () => {
  let robieWrapper;
  let robie;
  let introPause;
  let scanningPause;
  let failedPause;
  beforeEach(() => {
    introPause = jest.fn();
    scanningPause = jest.fn();
    failedPause = jest.fn();
    animations.animateIntroSimple = jest.fn(({ cb }) => {
      cb();
      return { pause: introPause };
    });
    animations.animateScanning = jest.fn(({ cb }) => {
      cb();
      return { pause: scanningPause };
    });
    animations.animateFailed = jest.fn(({ cb }) => {
      expect(cb).toBeNull();
      return { pause: failedPause };
    });
  });
  describe('Defaults Props', () => {
    beforeEach(() => {
      robieWrapper = mount(<Robie />);
      robie = robieWrapper.find('#Robie').at(0);
      robieWrapper.instance().animateParams.cb = jest.fn();
    });

    it('should render correctly', () => {
      jest.runOnlyPendingTimers();
      expect(robie).toBeDefined();
    });

    it('should run animateInto after 500ms', () => {
      jest.advanceTimersByTime(500);
      expect(robieWrapper.instance().animateIntro).not.toBeNull();
      expect(animations.animateIntroSimple).toHaveBeenCalledTimes(1);
      expect(animations.animateScanning).toHaveBeenCalledTimes(1);
      expect(robieWrapper.instance().animateParams.cb).toHaveBeenCalledTimes(1);
    });
  });
  describe('Props hasFailed = true', () => {
    beforeEach(() => {
      robieWrapper = mount(<Robie hasFailed />);
      robie = robieWrapper.find('#Robie').at(0);
      robieWrapper.instance().animateParams.cb = jest.fn();
    });

    it('should render correctly', () => {
      jest.runOnlyPendingTimers();
      expect(robie).toBeDefined();
    });

    it('should run animateFailed after 500ms', () => {
      jest.advanceTimersByTime(500);
      expect(robieWrapper.instance().animateFailed).not.toBeNull();
      expect(robieWrapper.state('hasFailed')).toBe(true);
      expect(animations.animateFailed).toHaveBeenCalledTimes(1);
      expect(robieWrapper.instance().animateParams.cb).not.toHaveBeenCalled();
    });
  });
  describe('Updated Props', () => {
    beforeEach(() => {
      robieWrapper = mount(<Robie />);
      robie = robieWrapper.find('#Robie').at(0);
      robieWrapper.instance().animateParams.cb = jest.fn();
    });

    it('should run animateFailed after it updates with hasFailed true', () => {
      jest.advanceTimersByTime(500);
      robieWrapper.setProps({ hasFailed: true });
      robieWrapper.update();
      expect(robieWrapper.state('hasFailed')).toBe(true);
      expect(introPause).toHaveBeenCalledTimes(1);
      expect(scanningPause).toHaveBeenCalledTimes(1);
      expect(animations.animateFailed).toHaveBeenCalledTimes(1);
    });
    it('should set updateColors to true after it updates with new colors', () => {
      jest.advanceTimersByTime(500);
      robieWrapper.setProps({
        colors: [[1, 1, 1], [10, 10, 10], [100, 100, 100], [200, 200, 200]]
      });
      robieWrapper.update();
      expect(robieWrapper.state('updateColors')).toBe(true);
    });
  });
  describe('Robie.updateColors', () => {
    beforeEach(() => {
      robieWrapper = mount(<Robie />);
      robie = robieWrapper.find('#Robie').at(0);
      robieWrapper.instance().animateParams.cb = jest.fn();
    });

    it('should update the colors with the new colors', async () => {
      robieWrapper.setProps({
        colors: [[1, 1, 1], [10, 10, 10], [100, 100, 100], [200, 200, 200]]
      });
      await robieWrapper.instance().updateColors();
      expect(robieWrapper.state('colors')).toEqual([
        [121, 127, 137],
        [94, 92, 196],
        [1, 1, 1],
        [10, 10, 10],
        [100, 100, 100],
        [200, 200, 200]
      ]);
    });
  });
  describe('Robie.nextColor', () => {
    beforeEach(() => {
      robieWrapper = mount(<Robie />);
      robie = robieWrapper.find('#Robie').at(0);
      robieWrapper.instance().animateParams.cb = jest.fn();
      robieWrapper.instance().updateColors = jest.fn(() => Promise.resolve());
    });

    it('should run updateColors what the state value is true', async () => {
      robieWrapper.setState({ updateColors: true });
      robieWrapper.instance().nextColor();
      expect(robieWrapper.instance().updateColors).toHaveBeenCalledTimes(1);
    });

    it('should call animateScanning when there is no next color...', async () => {
      robieWrapper.setState({
        currentColor: 4,
        previousColor: 3
      });
      robieWrapper.instance().nextColor();
      expect(animations.animateScanning).toHaveBeenCalledTimes(1);
    });

    it('should call the call back and stop the animations', async () => {
      jest.advanceTimersByTime(500);
      const onComplete = jest.fn();
      robieWrapper.setProps({ onComplete });
      animations.animateScanning.mockClear();
      robieWrapper.instance().nextColor();
      expect(animations.animateScanning).not.toHaveBeenCalled();
      expect(introPause).toHaveBeenCalledTimes(1);
      expect(scanningPause).toHaveBeenCalledTimes(1);
      expect(onComplete).toHaveBeenCalledTimes(1);
    });
  });
  describe('Robie.componentWillUnmount', () => {
    beforeEach(() => {
      robieWrapper = mount(<Robie />);
      robie = robieWrapper.find('#Robie').at(0);
      robieWrapper.instance().animateParams.cb = jest.fn();
      robieWrapper.instance().updateColors = jest.fn(() => Promise.resolve());
    });

    it('should stop the animations', async () => {
      clearTimeout = jest.fn();
      jest.advanceTimersByTime(500);
      robieWrapper.setProps({ hasFailed: true });
      robieWrapper.update();
      animations.animateScanning.mockClear();
      introPause.mockClear();
      scanningPause.mockClear();
      robieWrapper.instance().componentWillUnmount();
      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(introPause).toHaveBeenCalledTimes(1);
      expect(scanningPause).toHaveBeenCalledTimes(1);
      expect(failedPause).toHaveBeenCalledTimes(1);
    });
  });
});

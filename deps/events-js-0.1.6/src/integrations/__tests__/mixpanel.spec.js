import Mixpanel from '../mixpanel';

describe('Mixpanel', () => {
  describe('constructor', () => {
    it('should default to disabled', () => {
      const mixpanel = new Mixpanel();
      expect(mixpanel.enabled).toBe(false);
    });
  });

  describe('checkEnabled', () => {
    it('should set enabled if window.mixpanel.track is available', () => {
      window.mixpanel = {};
      window.mixpanel.track = jest.fn();
      const mixpanel = new Mixpanel();
      expect(mixpanel.checkEnabled()).toBe(true);
      expect(mixpanel.enabled).toBe(true);
    });
  });

  describe('track', () => {
    it('should call the mixpanel track function with the event type, name, and properties', () => {
      window.mixpanel.track = jest.fn();
      const eventName = 'fakeEvent';
      const properties = {
        source: 'test',
      };
      const mixpanel = new Mixpanel();
      mixpanel.track(eventName, properties);
      expect(window.mixpanel.track).toHaveBeenCalledWith(eventName, properties);
    });
  });

  describe('trackLinks', () => {
    it('should call the mixpanel track_links function with the selector, event type, and properties', () => {
      window.mixpanel.track_links = jest.fn();
      const selector = '#fake-id';
      const eventName = 'fakeEvent';
      const properties = {
        source: 'test',
      };
      const mixpanel = new Mixpanel();
      mixpanel.trackLinks(selector, eventName, properties);
      expect(window.mixpanel.track_links).toHaveBeenCalledWith(selector, eventName, properties);
    });
  });

  describe('identify', () => {
    it('should call the mixpanel identify function with a user id', () => {
      window.mixpanel.identify = jest.fn();
      const userId = 'A1109T50120598';
      const mixpanel = new Mixpanel();

      mixpanel.identify(userId);
      expect(window.mixpanel.identify).toHaveBeenCalledWith(userId);
    });
  });
});

import Gtm from '../gtm';

describe('Gtm', () => {
  describe('constructor', () => {
    it('should default to disabled', () => {
      const gtm = new Gtm();
      expect(gtm.enabled).toBe(false);
    });
  });

  describe('checkEnabled', () => {
    it('should set enabled if window.dataLayer is available', () => {
      window.dataLayer = [];
      const gtm = new Gtm();
      expect(gtm.checkEnabled()).toBe(true);
      expect(gtm.enabled).toBe(true);
    });
  });

  describe('push', () => {
    it('should call window.dataLayer.push', () => {
      window.dataLayer = { push: jest.fn() };
      const eventName = 'fakeEvent';
      const properties = {
        source: 'test',
        deep: {
          stuff: 'for testing',
        },
      };
      const gtm = new Gtm();
      const obj = { event: eventName, properties };
      gtm.push(obj);
      expect(window.dataLayer.push).toHaveBeenCalledWith({ event: eventName, properties });
    });
  });

  describe('track', () => {
    it('should call the push function with the event type, name, and properties', () => {
      const eventName = 'fakeEvent';
      const properties = {
        source: 'test',
        deep: {
          stuff: 'for testing',
        },
      };
      const gtm = new Gtm();
      jest.spyOn(gtm, 'push');
      gtm.track(eventName, properties);
      expect(gtm.push).toHaveBeenCalledWith({
        event: eventName,
        source: 'test',
        deep: { stuff: 'for testing' },
      });
    });
  });
});

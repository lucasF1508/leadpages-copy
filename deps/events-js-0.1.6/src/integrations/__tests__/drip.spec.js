import Drip from '../drip';

describe('Drip', () => {
  describe('constructor', () => {
    it('should default to disabled', () => {
      const drip = new Drip();
      expect(drip.enabled).toBe(false);
    });
  });

  describe('checkEnabled', () => {
    it('should set enabled if window._dcq.push is present', () => {
      window._dcq = { push: jest.fn() };
      const drip = new Drip();
      expect(drip.checkEnabled()).toBe(true);
      expect(drip.enabled).toBe(true);
    });
  });

  describe('push', () => {
    it('should call window._dcq.push', () => {
      window._dcq = { push: jest.fn() };
      const drip = new Drip();
      drip.push(['foo', 'bar']);
      expect(window._dcq.push).toHaveBeenCalledWith(['foo', 'bar']);
    });
  });

  describe('track', () => {
    it('should call the push function with the event type, name, and properties, and format keys with whitespace', () => {
      const eventName = 'fakeEvent';
      const properties = {
        source: 'test',
        'space event': 1,
        'tab-crlf\t\r\nevent': 2,
      };
      const drip = new Drip();
      jest.spyOn(drip, 'push');
      drip.track(eventName, properties);
      const formattedProperties = { source: 'test', space_event: 1, 'tab-crlf___event': 2 };
      expect(drip.push).toHaveBeenCalledWith(['track', eventName, formattedProperties]);
    });
  });

  describe('identify', () => {
    it('should call the push function with an email address and user id', () => {
      const userId = 'A1109T50120598';
      const traits = {
        email: 'test@leadpages.net',
      };
      const drip = new Drip();
      jest.spyOn(drip, 'push');
      drip.identify(userId, traits);
      expect(drip.push).toHaveBeenCalledWith([
        'identify',
        { email: traits.email, user_id: userId },
      ]);
    });

    it('should call subscribe if a campaignId is given', () => {
      const userId = 'A1109T50120598';
      const traits = {
        email: 'test@leadpages.net',
      };
      const options = {
        campaignId: 'foocampaign',
      };
      const drip = new Drip();
      const mockPush = jest.spyOn(drip, 'push');
      drip.identify(userId, traits, options);
      expect(drip.push).toHaveBeenCalledWith([
        'identify',
        { email: traits.email, user_id: userId },
      ]);
      expect(mockPush).toHaveBeenCalledWith(['identify', { email: traits.email, user_id: userId }]);
    });

    it('should not call the push function if the email address is missing', () => {
      const userId = 'A1109T50120598';
      const drip = new Drip();
      jest.spyOn(drip, 'push');
      drip.identify(userId, {});
      expect(drip.push).not.toHaveBeenCalledWith();
    });
  });
});

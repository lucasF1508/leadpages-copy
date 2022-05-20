import { getExpiredAndInvalidate, makeExpiryDate } from '../common';

describe('getExpiredAndInvalidate', () => {
  const STORAGE_KEY = 'coupon';
  let browserExpirationDate;
  let apiExpirationDate;

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
    });
    browserExpirationDate = undefined;
    apiExpirationDate = undefined;
  });

  it('should return false if no expiration dates are provided', () => {
    expect(getExpiredAndInvalidate(STORAGE_KEY)).toBe(false);
  });

  it('should return false if both provided dates are in the future', () => {
    apiExpirationDate = '2030-12-01T00:00:00+00:00';
    browserExpirationDate = makeExpiryDate(10);

    expect(getExpiredAndInvalidate(STORAGE_KEY, browserExpirationDate, apiExpirationDate)).toBe(
      false,
    );
  });

  it('should return false if browser expiration is in the future and no api expiration is provided', () => {
    browserExpirationDate = makeExpiryDate(10);

    expect(getExpiredAndInvalidate(STORAGE_KEY, browserExpirationDate, apiExpirationDate)).toBe(
      false,
    );
  });

  it('should return false if api expiration is in the future and no browser expiration is provided', () => {
    apiExpirationDate = '2030-12-01T00:00:00+00:00';

    expect(getExpiredAndInvalidate(STORAGE_KEY, browserExpirationDate, apiExpirationDate)).toBe(
      false,
    );
  });

  it('should return true and remove the local storage key if browser expiration has passed', () => {
    jest.spyOn(window.localStorage, 'removeItem');
    browserExpirationDate = makeExpiryDate(-1);

    expect(getExpiredAndInvalidate(STORAGE_KEY, browserExpirationDate, apiExpirationDate)).toBe(
      true,
    );
    expect(window.localStorage.removeItem).toHaveBeenCalled();
  });

  it('should return true and remove the local storage key if api expiration has passed', () => {
    apiExpirationDate = '2010-12-01T00:00:00+00:00';

    expect(getExpiredAndInvalidate(STORAGE_KEY, browserExpirationDate, apiExpirationDate)).toBe(
      true,
    );
    expect(window.localStorage.removeItem).toHaveBeenCalled();
  });
});

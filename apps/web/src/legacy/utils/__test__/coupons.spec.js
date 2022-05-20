import { setLocalCoupon, COUPON_INVALID_MESSAGE, COUPON_KEY } from '../coupons';

const testCoupon = {
  code: 'fake-coupon',
};

const mockFetch = (statusCode, response) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: statusCode,
      json: () => Promise.resolve(response),
    }),
  );
};

describe('setLocalCoupon', () => {
  beforeEach(() => {
    // Add coupon param to url
    window.history.replaceState({}, '', '?coupon=fake-coupon');
  });

  afterEach(() => {
    localStorage.removeItem(COUPON_KEY);
  });

  it('should set coupon into local storage and return the valid coupon', async () => {
    mockFetch(200, { ...testCoupon });
    const newCoupon = await setLocalCoupon();
    const localCoupon = JSON.parse(localStorage.getItem(COUPON_KEY));

    expect(newCoupon).toBeDefined();
    expect(localCoupon).toEqual(newCoupon);
  });

  it('should return an invalid coupon message', async () => {
    mockFetch(404, {
      errors: {
        message: 'coupon not found',
      },
    });
    const invalidBundle = await setLocalCoupon();

    expect(invalidBundle.error.message).toEqual(COUPON_INVALID_MESSAGE);
  });
});

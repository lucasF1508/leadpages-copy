import { FLOWS } from '@lp/lib-upgrade-modal';

import { setLocalBundle, OFFER_INVALID_MESSAGE, BUNDLE_KEY } from '../bundles';

const testBundle = {
  enabled: true,
  details: {
    enabledForTrial: true,
    infoSheet: {
      enabled: true,
    },
  },
};

const mockFetch = (statusCode, response) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: statusCode,
      json: () => Promise.resolve(response),
    }),
  );
};

describe('setLocalBundle', () => {
  beforeEach(() => {
    // Add bundle param to url
    window.history.replaceState({}, '', '?bundle=fake-bundle');
  });

  it('should set bundle into local storage and return the valid bundle', async () => {
    mockFetch(200, { ...testBundle });
    const newBundle = await setLocalBundle(FLOWS.SIGNUP);
    const localBundle = JSON.parse(localStorage.getItem(BUNDLE_KEY));

    expect(newBundle).toBeDefined();
    expect(localBundle).toEqual(newBundle);
  });

  it('should return an invalid bundle message', async () => {
    mockFetch(404, {
      errors: {
        message: 'bundle not found',
      },
    });
    const invalidBundle = await setLocalBundle(FLOWS.SIGNUP);

    expect(invalidBundle.error.message).toEqual(OFFER_INVALID_MESSAGE);
  });

  it('should return an invalid bundle message if the bundle is not enabled for purchasing flow', async () => {
    mockFetch(200, { ...testBundle, details: { enabledForTrial: false } });

    const invalidBundle = await setLocalBundle(FLOWS.SIGNUP);

    expect(invalidBundle.error.message).toEqual(OFFER_INVALID_MESSAGE);
  });
});

import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

import './testing-library.extend';
import 'jest-canvas-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

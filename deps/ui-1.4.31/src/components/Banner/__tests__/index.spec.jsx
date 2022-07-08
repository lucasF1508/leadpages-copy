import React from 'react';
import { screen, render, cleanup, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Button from '@material-ui/core/Button';

import Banner from '../index';

jest.useFakeTimers();

describe('Banner', () => {
  let bannerText;

  beforeEach(() => {
    bannerText = 'Test banner';
  });

  afterEach(cleanup);

  it('should render a banner with just text', () => {
    render(<Banner bannerText={bannerText} isShown={true} />);
    expect(screen.getByText(bannerText)).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render a banner with text and a cta button', () => {
    render(<Banner bannerText={bannerText} CTA={<Button>Test CTA</Button>} isShown={true} />);

    expect(screen.getByText(bannerText)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test CTA' })).toBeInTheDocument();
  });

  it('should trigger onShown callback', () => {
    const mockShown = jest.fn();

    render(<Banner bannerText={bannerText} onShown={mockShown} />);

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(mockShown).toHaveBeenCalled();
  });
});

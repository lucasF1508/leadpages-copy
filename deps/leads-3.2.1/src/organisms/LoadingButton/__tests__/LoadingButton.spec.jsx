import React from 'react';
import { shallow } from 'enzyme';

import LoadingButton, { LOADING_STATES } from '../../LoadingButton';

describe('LoadingButton', () => {
  let loadingButton;
  let props;

  beforeEach(() => {
    props = {
      loadingState: LOADING_STATES.success,
      onClick: jest.fn(),
      isSecondary: true
    };

    loadingButton = shallow(<LoadingButton {...props} />);
  });

  it('should not disable the button if the button is not loading', () => {
    expect(loadingButton.find('Button').props().disabled).toBe(undefined);
  });

  it('should disable the button if the button is loading', () => {
    loadingButton.setProps({ loadingState: LOADING_STATES.loading });
    expect(loadingButton.find('Button').props().disabled).toBe(true);
  });

  it('should pass the buttonProps to the button', () => {
    const { onClick, isSecondary } = props;
    expect(loadingButton.find('Button').props()).toMatchObject({
      onClick,
      isSecondary
    });
  });
});

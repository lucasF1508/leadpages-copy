import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';

import withLoadingState, { LOADING_STATES } from '../../molecules/LoadingState';

const PROPS = {
  ...Button.propTypes,
  loadingState: PropTypes.string,
  successMessage: PropTypes.string
};

const DEFAULT_PROPS = {
  ...Button.defaultProps,
  loadingState: LOADING_STATES.success,
  successMessage: null,
  loadingDotsInverted: false,
  loadingDotsSize: 'sm'
};

const TextWithLoading = withLoadingState(props => <span {...props} />);

const LoadingButton = ({
  children,
  loadingState,
  successMessage,
  loadingDotsInverted,
  loadingDotsSize,
  ...propsWithoutLoadingState
}) => {
  const buttonProps = propsWithoutLoadingState;

  if (loadingState === LOADING_STATES.loading) {
    buttonProps.disabled = true;
  }

  return (
    <Button {...buttonProps}>
      <TextWithLoading
        successMessage={successMessage}
        inverted={!buttonProps.isSecondary}
        size={loadingDotsSize}
        loadingState={loadingState}
      >
        {children}
      </TextWithLoading>
    </Button>
  );
};

LoadingButton.propTypes = PROPS;
LoadingButton.defaultProps = DEFAULT_PROPS;

export default LoadingButton;
export { LOADING_STATES };

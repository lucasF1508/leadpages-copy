/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';
import LoadingDotsComp from '../../atoms/LoadingDots';
import styles from './withLoadingState.css';

export const LOADING_STATES = {
  error: 'error',
  loading: 'loading',
  success: 'success',
};

const LOADING_STATES_ARRAY = [LOADING_STATES.error, LOADING_STATES.loading, LOADING_STATES.success];

const withLoadingState = Component =>
  class LoadingState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showOriginalComponent: props.loadingState !== LOADING_STATES.loading,
      };
    }

    componentDidUpdate(prevProps) {
      const { loadingState } = this.props;

      if (
        prevProps.loadingState === loadingState ||
        !LOADING_STATES_ARRAY.some(state => loadingState === state)
      ) {
        return;
      }

      this.setState(
        () => ({ showOriginalComponent: false }),
        () => {
          // Show loading dots as long as component is loading
          if (loadingState === LOADING_STATES.loading) {
            return;
          }
          // Only show error/success states 2000ms after loading completes
          this.timeout = setTimeout(() => {
            this.setState(() => ({
              showOriginalComponent: true,
            }));
            this.timeout = null;
          }, 2000);
        },
      );
    }

    componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }

    render() {
      const { loadingState, inverted, size, successMessage, ...props } = this.props;

      const { showOriginalComponent } = this.state;

      const errorClassList = classNames('lp-icon', styles.error, {
        [`${styles.medium}`]: size === 'md',
        [`${styles.small}`]: size === 'sm',
        [`${styles.extraSmall}`]: size === 'xs',
      });

      const successClassList = classNames(styles.success, {
        [`${styles.inverse}`]: inverted,
        [`${styles.medium}`]: size === 'md',
        [`${styles.small}`]: size === 'sm',
        [`${styles.extraSmall}`]: size === 'xs',
      });

      const loadingStateClassList = classNames(styles.loadingState, {
        [`${styles.hasLoading}`]: !showOriginalComponent && loadingState === 'loading',
        [`${styles.hasSuccess}`]: !showOriginalComponent && loadingState === 'success',
        [`${styles.hasError}`]: !showOriginalComponent && loadingState === 'error',
      });

      const originalComponentClassList = classNames(styles.originalComponent, {
        [`${styles.hiddenOriginalComponent}`]: !this.state.showOriginalComponent,
      });

      const useSuccessMessage = successMessage ? (
        <span className={successClassList}>{successMessage}</span>
      ) : (
        <i className={`lp-icon ${successClassList}`} data-qa-selector="loadingDotsCheck">
          check
        </i>
      );

      return (
        <div className={loadingStateClassList}>
          <Component
            data-qa-selector="originalComponent"
            className={originalComponentClassList}
            {...props}
          />
          <LoadingDotsComp
            className={styles.loading}
            data-qa-selector="loadingDots"
            inverted={inverted}
            size={size}
          />
          {useSuccessMessage}
          <i className={errorClassList} data-qa-selector="loadingDotsError">
            error
          </i>
        </div>
      );
    }
  };

export default withLoadingState;

/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../atoms/Button';
import { RatioCardLoading, RatioCardLoadingName } from './RatioCardLoading';
import styles from './RatioCard.css';

class RatioCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoadingStatus:
        props.isLoading || props.thumbnailFullUrl ? 'loading' : 'error'
    };
  }

  handleImageLoad = () => {
    this.setState(() => ({
      imageLoadingStatus: this.props.isLoading ? 'loading' : 'success'
    }));
  };

  handleImageError = () => {
    this.setState(() => ({
      imageLoadingStatus: this.props.isLoading ? 'loading' : 'error'
    }));
  };

  render() {
    const {
      thumbnailFullUrl,
      name,
      imageRef,
      imageAlt,
      isActive,
      onClick,
      children,
      primary,
      secondary
    } = this.props;

    return (
      <div className={styles.templateCard}>
        <div className={styles.templateCardPreview}>
          <div className={styles.cardRatioManager}>
            {isActive && (
              <div
                className={styles.templateCardActive}
                data-qa-selector="active-indicator"
              />
            )}
            <div className={styles.cardRatioContainer}>
              <RatioCardLoading
                isLoading={this.state.imageLoadingStatus !== 'success'}
              />
              <img
                ref={imageRef}
                className={styles.cardThumbnail}
                src={thumbnailFullUrl}
                alt={imageAlt || name}
                onLoad={this.handleImageLoad}
                onError={this.handleImageError}
                data-qa-selector="thumbnail-image"
              />
            </div>
            {this.state.imageLoadingStatus !== 'loading' && (
              <div
                data-qa-selector="image-overlay"
                role={onClick ? 'button' : undefined}
                tabIndex={onClick ? 0 : undefined}
                onClick={onClick || undefined}
                className={classNames(styles.overlay, {
                  [styles.overlayWithOpacity]: !!(
                    primary ||
                    secondary ||
                    children
                  )
                })}
              >
                <div className={styles.overlayContainer}>
                  {!!children && children}
                  {!children &&
                    primary && (
                      <Button
                        data-qa-selector="overlay-button-primary"
                        href={primary.href}
                        to={primary.to}
                        onClick={primary.onClick}
                      >
                        {primary.text}
                      </Button>
                    )}
                  {!children &&
                    secondary && (
                      <Button
                        data-qa-selector="overlay-button-secondary"
                        className={primary ? styles.overlayButton : ''}
                        isSecondary
                        href={secondary.href}
                        to={secondary.to}
                        onClick={secondary.onClick}
                      >
                        {secondary.text}
                      </Button>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.templateCardTextContainer}>
          <RatioCardLoadingName
            isLoading={this.state.imageLoadingStatus === 'loading'}
          />
          <div
            className={`${styles.templateCardText} ${
              this.state.imageLoadingStatus === 'loading' ? '' : styles.loaded
            }`}
          >
            {name || ''}
          </div>
        </div>
      </div>
    );
  }
}

RatioCard.propTypes = {
  thumbnailFullUrl: PropTypes.string,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  imageRef: PropTypes.func,
  imageAlt: PropTypes.string,
  primary: PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),
  secondary: PropTypes.shape({
    text: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
  }),
  children: PropTypes.node
};

RatioCard.defaultProps = {
  onClick: null,
  thumbnailFullUrl: '',
  name: '',
  isLoading: false,
  isActive: false,
  primary: null,
  secondary: null,
  imageRef: () => {},
  imageAlt: '',
  children: null
};

export default RatioCard;

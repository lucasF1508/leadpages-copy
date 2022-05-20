import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  headerClassName,
  headerContainerClassName,
  headerTabsClassName,
  headerTitleClassName,
  headerCloseButtonClassName
} from './Modal.css';

import IconButton from '../../molecules/IconButton';

export const Header = ({
  children,
  tabs,
  onClose,
  isHero = false,
  noBackground = false,
  title,
  className = '',
  'data-qa-selector': dataQaSelector
}) => (
  <div
    className={cx(headerClassName, {
      [`${className}`]: className,
      [`is-hero`]: isHero,
      'no-background': noBackground
    })}
    data-qa-selector={dataQaSelector}
  >
    <div
      className={cx(headerContainerClassName, {
        [`${headerTabsClassName}`]: tabs
      })}
    >
      {title ? <h1 className={headerTitleClassName}> {title} </h1> : ''}
      {children}
      {onClose ? (
        <IconButton
          tabIndex="0"
          icon="close"
          className={headerCloseButtonClassName}
          onClick={e => {
            onClose(e);
          }}
          data-qa-selector="close-button"
          noBackground
        />
      ) : (
        ''
      )}
    </div>
  </div>
);

Header.defaultProps = {
  children: null,
  tabs: false,
  onClose: () => {},
  isHero: false,
  title: '',
  className: '',
  'data-qa-selector': 'modal-header'
};

Header.propTypes = {
  children: PropTypes.node,
  tabs: PropTypes.bool,
  onClose: PropTypes.func,
  isHero: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  'data-qa-selector': PropTypes.string
};

export default Header;

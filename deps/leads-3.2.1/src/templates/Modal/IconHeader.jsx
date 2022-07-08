import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import { colors } from '../../theme/Theme';

import {
  headerCloseButtonClassName,
  iconHeaderTitleClassName,
  iconHeaderClassName,
  iconHeaderContainerClassName,
  iconHeaderIconClassName
} from './Modal.css';

import IconButton from '../../molecules/IconButton';

const getContainerClass = bgColor => css`
  background-color: ${bgColor};
`;

const getIconClass = color => css`
  &:before {
    color: ${color};
  }
`;

export const IconHeader = ({
  onClose,
  title,
  className = '',
  'data-qa-selector': dataQaSelector,
  iconConfig = {}
}) => {
  const { color, bgColor, icon } = iconConfig;

  return (
    <div
      data-qa-selector={dataQaSelector}
      className={cx(iconHeaderClassName, className)}
    >
      <div
        data-qa-selector="icon-container"
        className={cx(iconHeaderContainerClassName, getContainerClass(bgColor))}
      >
        <div
          data-qa-selector="icon"
          className={cx(
            'lp-icon',
            `lp-icon-${icon}`,
            iconHeaderIconClassName,
            getIconClass(color)
          )}
        />
      </div>
      {title && (
        <h1 data-qa-selector="title" className={iconHeaderTitleClassName}>
          {title}
        </h1>
      )}
      {onClose && (
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
      )}
    </div>
  );
};

IconHeader.defaultProps = {
  onClose: () => {},
  title: '',
  className: '',
  'data-qa-selector': 'modal-icon-header',
  iconConfig: {
    bgColor: colors.purpleLighter,
    color: colors.purple,
    icon: 'like'
  }
};

IconHeader.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
  'data-qa-selector': PropTypes.string,
  iconConfig: PropTypes.shape({
    bgColor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string
  })
};

export default IconHeader;

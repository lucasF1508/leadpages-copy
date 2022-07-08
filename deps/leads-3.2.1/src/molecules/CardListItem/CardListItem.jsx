import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import IconButton from '../../molecules/IconButton';
import { colors } from '../../theme/Theme';

const defaultClassName = css`
  border-radius: 3px;
  background-color: #fff;
`;
const innerClassName = css`
  border-radius: 3px;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const emptyClassName = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.grey};
  color: ${colors.grey};
  cursor: pointer;

  &:hover,
  .active {
    font-weight: 700;
    border: 2px solid ${colors.blue};
    color: ${colors.blue};
  }

  .lp-icon {
    font-size: 24px;
  }
`;
const filledClassName = css`
  cursor: pointer;

  &:hover {
    .close-button {
      opacity: 1;
    }
  }
`;

const closeIconClassName = css`
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(25%, -25%);
  transition: all 0.3s ease-in;
`;

export default class CardListItem extends Component {
  displayName = 'CardListItem';
  handleRemoveItem = event => {
    event.stopPropagation();
    return this.props.removeItem();
  };
  render() {
    const {
      children,
      className,
      component: CardListItemComponent,
      removeItem,
      isAddItem,
      ...props
    } = this.props;

    return (
      <CardListItemComponent
        className={cx(
          className,
          defaultClassName,
          !isAddItem && filledClassName
        )}
        {...props}
      >
        <div className={cx(innerClassName, !isAddItem || emptyClassName)}>
          {isAddItem && (
            <div data-qa-selector="add-item" className="lp-icon">
              plus
            </div>
          )}
          {children}
        </div>
        {removeItem && (
          <IconButton
            onClick={this.handleRemoveItem}
            className={cx('close-button', closeIconClassName)}
            icon="close"
          />
        )}
      </CardListItemComponent>
    );
  }
}

CardListItem.propTypes = {
  isAddItem: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  removeItem: PropTypes.func
};

CardListItem.defaultProps = {
  isAddItem: false,
  children: null,
  className: '',
  component: 'div',
  removeItem: null
};

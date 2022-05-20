import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconButton from '../../molecules/IconButton';
import { hexCodes } from '../../theme/Color';

import styles from './Tag.css';

export default class Tag extends Component {
  state = {
    value: this.props.value,
    isEditing: false
  };

  componentWillReceiveProps({ value: nextValue }) {
    const { value } = this.props;
    if (value !== nextValue) {
      this.setState(() => ({ value: nextValue }));
    }
  }

  handleOnChange = e => {
    const value = e.target.value;
    const { onChange } = this.props;

    this.setState(() => ({ value }));
    onChange(e);
  };

  handleOnClick = () => {
    const { onClick } = this.props;
    const { inputRef } = this;

    this.setState(
      ({ isEditing }) => ({ isEditing: !isEditing }),
      () => {
        if (this.state.isEditing) {
          return inputRef.focus();
        }

        return onClick(inputRef.value);
      }
    );
  };

  handleOnKeyDown = e => {
    const { inputRef } = this;
    const { onKeyDown } = this.props;
    const value = e.target.value;
    // If 'Enter'
    if (e.keyCode === 13) {
      this.setState(() => ({ isEditing: false }));
      inputRef.blur();
      onKeyDown(value);
    }
  };

  render() {
    const { isEditing } = this.state;
    const {
      isEditable,
      onSelect,
      backgroundColor,
      borderColor,
      color
    } = this.props;

    return (
      <div
        className={classNames(styles.tagContianer, {
          [`${styles.withButton}`]: isEditable
        })}
      >
        {!isEditing && (
          <div
            tabIndex="0"
            role="button"
            onClick={onSelect}
            className={classNames(styles.inputSelect, {
              [`${styles.noPointer}`]: !isEditable
            })}
            style={{
              right: isEditable ? '21px' : 0
            }}
          />
        )}
        <input
          className={classNames(styles.tag, {
            [`${styles.inverseText}`]: !isEditing
          })}
          style={{
            border: `1px solid ${hexCodes[borderColor || backgroundColor]}`,
            backgroundColor: isEditing ? '#ffffff' : hexCodes[backgroundColor],
            color: isEditing ? '#000000' : hexCodes[color || '#ffffff']
          }}
          ref={input => {
            this.inputRef = input;
          }}
          value={this.state.value}
          onKeyDown={this.handleOnKeyDown}
          onChange={this.handleOnChange}
        />
        {isEditable && (
          <IconButton
            noBackground
            className={styles.editButton}
            icon={isEditing ? 'check' : 'edit'}
            onClick={this.handleOnClick}
          />
        )}
      </div>
    );
  }
}

Tag.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string
};

Tag.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  onSelect: () => {},
  onKeyDown: () => {},
  backgroundColor: '',
  borderColor: '',
  color: '',
  value: ''
};

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import styles from './Search.css';

export default class Search extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    inputRef: PropTypes.func
  };

  static defaultProps = {
    className: '',
    value: '',
    onSubmit() {},
    inputRef() {}
  };

  handleOnSubmit = e => {
    e.preventDefault();
    // Pass event along in case consumer needs it.
    e.persist();
    this.props.onSubmit(e, this.input.value);
  };

  clearSearch = e => {
    e.preventDefault();
    // Pass event along in case consumer needs it.
    e.persist();
    this.input.value = '';
    this.props.onSubmit(e, '');
  };

  assignInputRef = input => {
    this.input = input;
    this.props.inputRef(input);
  };

  render() {
    const { onSubmit, className, inputRef, value, ...props } = this.props;

    return (
      <div className={classNames(className, styles.searchClass, {})}>
        <form onSubmit={this.handleOnSubmit}>
          <Input inputRef={this.assignInputRef} value={value} {...props} />
          <button type="button" onClick={this.clearSearch}>
            <i className="lp-icon">
              {!!value || (this.input && this.input.value)
                ? 'close_circle'
                : 'search'}
            </i>
          </button>
        </form>
      </div>
    );
  }
}

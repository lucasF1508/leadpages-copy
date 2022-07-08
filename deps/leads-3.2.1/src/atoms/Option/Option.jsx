import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Option.css';

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.setState(() => ({
        selected: nextProps.selected,
      }));
    }
  }

  componentDidUpdate(prevProps) {
    const { active, parentRef } = this.props;

    if (!prevProps.active && active) {
      const option = this.option ? this.option : null;

      if (!option || !option.getBoundingClientRect || !parentRef.getBoundingClientRect) {
        return;
      }

      const optionRect = option.getBoundingClientRect();
      const parentRect = parentRef.getBoundingClientRect();

      if (optionRect.top < parentRect.top) {
        const diff = optionRect.top - parentRect.top;
        parentRef.scrollTop = parentRef.scrollTop + diff;
        return;
      }

      if (optionRect.bottom > parentRect.bottom) {
        const diff = optionRect.bottom - parentRect.bottom;
        parentRef.scrollTop = parentRef.scrollTop + diff;
      }
    }
  }

  render() {
    const {
      children,
      className,
      onClick,
      primaryText,
      secondaryText,
      value,
      selectedText,
      tabIndex,
      parentRef,
      active,
      ...rest
    } = this.props;

    const optionClassList = classNames(className, styles.option, {
      [`${styles.selected}`]: this.state.selected,
      [`${styles.disabled}`]: this.props.disabled,
      [`${styles.active}`]: this.props.active,
      [`${styles.hasSecondaryText}`]: !!this.props.secondaryText,
    });

    return (
      <div
        aria-selected={this.state.selected}
        className={optionClassList}
        data-value={value}
        key={value}
        onClick={onClick}
        role="option"
        tabIndex={tabIndex}
        ref={option => (this.option = option)}
        {...rest}
      >
        <div className={styles.optionInner}>
          <div
            className={classNames(styles.primaryText, styles.truncateEllipsis)}
            title={primaryText}
          >
            {children || primaryText}
          </div>
          {secondaryText && (
            <div
              className={classNames(styles.secondaryText, styles.truncateEllipsis)}
              title={secondaryText}
            >
              {secondaryText}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Option.displayName = 'Option';

Option.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  selected: PropTypes.bool,
  // selectedText is used in parent select component
  // eslint-disable-next-line react/no-unused-prop-types
  selectedText: PropTypes.string,
  value: PropTypes.string,
  tabIndex: PropTypes.number,
  parentRef: PropTypes.object,
};

Option.defaultProps = {
  active: false,
  children: null,
  className: '',
  disabled: false,
  onClick: () => {},
  primaryText: '',
  secondaryText: '',
  selected: false,
  selectedText: '',
  value: '',
  tabIndex: 0,
  parentRef: {},
};

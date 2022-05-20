import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';

import styles from './Flyout.css';

export default class Flyout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState(() => ({
        open: nextProps.open
      }));
    }
  }

  render() {
    const { children, className, ...props } = this.props;

    const flyoutClassList = classNames(styles.flyout, className, {
      [`${styles.open}`]: this.state.open
    });

    return (
      // TODO: CSSTransitionGroup maybe?
      <div className={flyoutClassList} {...props}>
        {children}
      </div>
    );
  }
}

Flyout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool
};

Flyout.defaultProps = {
  children: null,
  className: '',
  open: true
};

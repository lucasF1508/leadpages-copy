import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StickyWrapper from '../../molecules/StickyWrapper';
import styles from './SubHeader.css';

class SubHeader extends Component {
  static displayName = 'SubHeader';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]),
    className: PropTypes.string,
    childContainerClassName: PropTypes.string
  };

  static defaultProps = {
    children: null,
    className: null,
    childContainerClassName: null
  };

  constructor(props) {
    super(props);

    this.setIsStuck = this.setIsStuck.bind(this);
    this.setIsScrollingDown = this.setIsScrollingDown.bind(this);

    this.state = {
      isStuck: false,
      isScrollingDown: false
    };
  }

  setIsStuck(isStuck) {
    this.setState(() => ({
      isStuck
    }));
  }

  setIsScrollingDown(isScrollingDown) {
    this.setState(() => ({
      isScrollingDown
    }));
  }

  render() {
    let height = '60px';
    let topWhenStuck = '0px';
    // let topWhenStuck = '-72px';
    let offsetStickTrigger = 0;
    if (this.state.isStuck) {
      offsetStickTrigger = 72;
      height = '72px';
      if (this.state.isScrollingDown) {
        topWhenStuck = '72px';
        offsetStickTrigger = 72;
      }
    }
    return (
      <StickyWrapper
        setIsStuck={this.setIsStuck}
        setIsScrollingDown={this.setIsScrollingDown}
        height={height}
        topWhenStuck={topWhenStuck}
        offsetStickTrigger={offsetStickTrigger}
      >
        <div
          style={{ height }}
          className={classNames(this.props.className, styles.subHeader, {
            [`${styles.stuck}`]: this.state.isStuck
          })}
        >
          <div
            className={classNames(
              this.props.childContainerClassName,
              styles.childrenContainer
            )}
          >
            {this.props.children}
          </div>
        </div>
      </StickyWrapper>
    );
  }
}

export default SubHeader;

export const SubHeaderMain = ({ children, className }) => (
  <div className={classNames(className, styles.main)}>{children}</div>
);

SubHeaderMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

SubHeaderMain.defaultProps = {
  className: null
};

export const SubHeaderControls = ({ children, className }) => (
  <div className={className}>{children}</div>
);

SubHeaderControls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

SubHeaderControls.defaultProps = {
  className: null
};

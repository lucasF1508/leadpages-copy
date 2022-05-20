import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DivOrSpan from '../../molecules/DivOrSpan';
import styles from './CollapseWrapper.css';

const CollapseWrapper = ({
  children,
  enterTime,
  shouldCollapse,
  leaveTime,
  useDiv,
}) => (
  <CSSTransitionGroup
    transitionName={{
      enter: styles.enter,
      enterActive: styles.enterActive,
      leave: styles.leave,
      leaveActive: styles.leaveActive,
    }}
    transitionEnterTimeout={enterTime}
    transitionLeaveTimeout={leaveTime}
  >
    {!shouldCollapse ?
      <DivOrSpan
        className={styles.collapseStyle}
        useDiv={useDiv}
      >{children}</DivOrSpan>
    : null}
  </CSSTransitionGroup>
);

CollapseWrapper.propTypes = {
  shouldCollapse: PropTypes.bool,
  useDiv: PropTypes.bool,
  enterTime: PropTypes.number,
  leaveTime: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

CollapseWrapper.defaultProps = {
  shouldCollapse: false,
  useDiv: false,
  enterTime: 200,
  leaveTime: 200,
};

export default CollapseWrapper;

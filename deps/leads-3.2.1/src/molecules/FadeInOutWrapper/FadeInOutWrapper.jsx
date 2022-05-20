import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DivOrSpan from '../../molecules/DivOrSpan';
import styles from './FadeInOutWrapper.css';

const FadeInOutWrapper = ({
  children,
  isShowing,
  useDiv,
}) => (
  <CSSTransitionGroup
    transitionName={{
      enter: styles.animate,
      leave: styles.animate,
    }}
    transitionEnterTimeout={200}
    transitionLeaveTimeout={200}
  >
    {isShowing ?
      <DivOrSpan
        className={styles.fadeInOutStyle}
        useDiv={useDiv}
      >{children}</DivOrSpan>
    : null}
  </CSSTransitionGroup>
);

FadeInOutWrapper.propTypes = {
  isShowing: PropTypes.bool,
  useDiv: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

FadeInOutWrapper.defaultProps = {
  isShowing: false,
  useDiv: false,
};

export default FadeInOutWrapper;

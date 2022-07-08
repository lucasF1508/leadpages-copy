import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DivOrSpan from '../../molecules/DivOrSpan';
import styles from './SlideInOutWrapper.css';

const SlideInOutWrapper = ({
  children,
  className,
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
        className={classNames(
          className,
          styles.slideInOutStyle,
        )}
        useDiv={useDiv}
      >{children}</DivOrSpan>
    : null}
  </CSSTransitionGroup>
);

SlideInOutWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
  isShowing: PropTypes.bool,
  useDiv: PropTypes.bool,
};

SlideInOutWrapper.defaultProps = {
  className: '',
  isShowing: false,
  useDiv: false,
};

export default SlideInOutWrapper;

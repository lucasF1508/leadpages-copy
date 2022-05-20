import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import * as styles from './Tooltip.css.js';

// TODO: solve default positions, transition to enum is a way.

const { bool, node, string } = PropTypes;

const Tooltip = ({
  children,
  className,
  tipClassName,
  arrowClassName,
  tip,
  left,
  top,
  bottom,
  right,
  hover,
  hidden,
  isDiv,
  withArrow,
  ...rest
}) => {
  const tooltipAnchor = useRef(null);
  const [tooltipHovered, settooltipHovered] = useState(!hover && !hidden);

  if (
    process.env.NODE_ENV !== 'production' &&
    ((top && right) ||
      (top && bottom) ||
      (top && left) ||
      (right && bottom) ||
      (right && left) ||
      (bottom && left))
  ) {
    console.error('Tooltip has to many directions defined');
  }

  const showTooltip = () => settooltipHovered(true);
  const hideTooltip = () => settooltipHovered(false);

  useEffect(
    () => {
      if (tooltipAnchor.current && hover) {
        tooltipAnchor.current.addEventListener('mouseenter', showTooltip);
        tooltipAnchor.current.addEventListener('mouseleave', hideTooltip);
      }
      return () => {
        if (tooltipAnchor.current && hover) {
          tooltipAnchor.current.removeEventListener('mouseenter', showTooltip);
          tooltipAnchor.current.removeEventListener('mouseleave', hideTooltip);
        }
      };
    },
    [hover],
  );

  const classes = cx(
    styles.tooltipClassName,
    {
      left: left,
      top: top || (!top && !bottom && !right && !left),
      bottom: bottom,
      right: right,
    },
    className,
  );

  const tipClasses = cx(
    'tip',

    styles.tipClassName,
    {
      'is-hoverable': !!hover,
      'is-visible': !hidden && (tooltipHovered || !hover),
      [styles.leftTipClassName]: left,
      [styles.topTipClassName]: top || (!top && !bottom && !right && !left),
      [styles.bottomTipClassName]: bottom,
      [styles.rightTipClassName]: right,
    },
    tipClassName,
  );

  const arrowClasses = cx(
    styles.arrowClassName,
    {
      [styles.leftArrowClassName]: left,
      [styles.topArrowClassName]: top || (!top && !bottom && !right && !left),
      [styles.bottomArrowClassName]: bottom,
      [styles.rightArrowClassName]: right,
    },
    arrowClassName,
  );

  const TooltipComponent = isDiv ? 'div' : 'span';

  return (
    <TooltipComponent className={classes}>
      <div className={tipClasses}>
        {tip}
        {withArrow && <div className={arrowClasses} />}
      </div>
      <span
        className="tooltip-anchor"
        data-qa-selector="tooltip-anchor"
        ref={tooltipAnchor}
        {...rest}
      >
        {children}
      </span>
    </TooltipComponent>
  );
};

Tooltip.propTypes = {
  bottom: bool,
  children: node,
  className: string,
  tipClassName: string,
  arrowClassName: string,
  hidden: bool,
  hover: bool,
  isDiv: bool,
  left: bool,
  right: bool,
  tip: node,
  top: bool,
  withArrow: bool,
};

Tooltip.defaultProps = {
  bottom: false,
  children: null,
  className: '',
  tipClassName: '',
  arrowClassName: '',
  hidden: false,
  hover: true,
  isDiv: false,
  left: false,
  right: false,
  tip: null,
  top: false,
  withArrow: true,
};

export default Tooltip;

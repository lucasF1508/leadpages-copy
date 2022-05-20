import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import Tooltip from '../../molecules/Tooltip';
import OutsideClickHandler from '../../molecules/OutsideClickHandler';

const flyoutMenuClassName = css`
  position: relative;
  outline: none;
`;

const FlyoutMenu = ({
  options,
  onClickOutside,
  isOpen,
  children,
  className,
  tooltipClassName,
  toolTipArrowClassName,
  toolTipBodyClassName,
}) => {
  const flyoutRef = useRef();
  const [forceDirection, updateForceDirection] = useState({
    top: false,
    left: false,
    right: false,
  });

  useEffect(
    () => {
      const tipDom = flyoutRef.current.querySelector('.tip');
      const tipAnchorDom = flyoutRef.current.querySelector('.tooltip-anchor');
      if (!tipDom || !tipAnchorDom) return;
      const anchorBounds = tipAnchorDom.getBoundingClientRect();
      const tipBounds = tipDom.getBoundingClientRect();
      let updatedForceDirection = { top: false, left: false, right: false };
      if (anchorBounds.bottom + tipBounds.height > window.innerHeight) {
        updatedForceDirection = { top: true, left: false, right: false };
      } else if (anchorBounds.right + tipBounds.width > window.innerWidth) {
        updatedForceDirection = { top: false, left: true, right: false };
      } else if (anchorBounds.left + tipBounds.width < 0) {
        updatedForceDirection = { top: false, left: false, right: true };
      }
      updateForceDirection(updatedForceDirection);
    },
    [isOpen],
  );

  const isTop = forceDirection.top;
  const isLeft = forceDirection.left;
  const isRight = forceDirection.right;
  const isBottom = !isTop && !isLeft && !isRight;

  return (
    <div ref={flyoutRef} className={cx(flyoutMenuClassName, className)}>
      <OutsideClickHandler onOutsideClick={onClickOutside}>
        <Tooltip
          arrowClassName={toolTipArrowClassName}
          className={tooltipClassName}
          hidden={!isOpen}
          hover={false}
          bottom={isBottom}
          top={isTop}
          left={isLeft}
          right={isRight}
          tip={options}
          tipClassName={toolTipBodyClassName}
        >
          {children}
        </Tooltip>
      </OutsideClickHandler>
    </div>
  );
};

FlyoutMenu.displayname = 'FlyoutMenu';

FlyoutMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  options: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickOutside: PropTypes.func,
  toolTipClassName: PropTypes.string,
  toolTipBodyClassName: PropTypes.string,
  toolTipArrowClassName: PropTypes.string,
};

FlyoutMenu.defaultProps = {
  className: '',
  onClickOutside: () => true,
  toolTipClassName: '',
  toolTipBodyClassName: '',
  toolTipArrowClassName: '',
};

export default FlyoutMenu;

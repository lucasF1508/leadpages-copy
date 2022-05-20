import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from '@material-ui/core';

const TRANSITION_DURATION = 350;

const useStyles = makeStyles(
  ({ zIndex, transitions, palette, typography }) => ({
    root: {
      padding: 5,
      zIndex: zIndex.drawer + 1,
      fontSize: 23,
    },
    expandButton: {
      position: 'sticky',
      display: 'block',
      left: '0px',
      boxShadow: '0 10px 20px -5px rgba(9,12,18,0.1)',
      backgroundColor: palette.common.white,
      color: palette.primary.main,
      transition: transitions.create(['left', 'box-shadow'], {
        easing: 'cubic-bezier(0.4, 0, 0.2, .5)',
        duration: TRANSITION_DURATION,
      }),
      '&:hover': {
        boxShadow: '0 10px 20px -5px rgba(9,12,18,0.25)',
        backgroundColor: palette.common.white,
      },
    },
    collapseButton: {
      position: 'absolute',
      left: 198,
      backgroundColor: 'inherit',
      transition: transitions.create(['left', 'box-shadow'], {
        easing: 'cubic-bezier(0, 0, 0.2, 1)',
        duration: TRANSITION_DURATION,
      }),
      '&:hover': {
        backgroundColor: palette.common.white,
        boxShadow: '0 10px 20px -5px rgba(9,12,18,0.1)',
        color: palette.primary.main,
      },
    },
    toolTip: ({ showTooltip }: { showTooltip: boolean }) => ({
      backgroundColor: palette.common.black,
      fontSize: 12,
      lineHeight: '18px',
      color: palette.common.white,
      fontFamily: typography.fontFamily,
      padding: '3px 7px',
      visibility: showTooltip ? 'visible' : 'hidden',
    }),
  }),
  { classNamePrefix: 'SidebarToggle' },
);

export type SidebarToggle = {
  isOpen: boolean;
  onToggleSidebar: () => void;
  buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
  buttonClassName?: string;
};

export const SidebarToggle: React.FC<SidebarToggle> = ({
  isOpen,
  onToggleSidebar,
  buttonRef,
  buttonClassName,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const classes = useStyles({ showTooltip });

  const timeoutRef = useRef<number>();
  useEffect(() => {
    setShowTooltip(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Hides the tooltip during the transition open/closed
    timeoutRef.current = window.setTimeout(() => {
      setShowTooltip(true);
    }, TRANSITION_DURATION);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <Tooltip title={`${isOpen ? 'Hide' : 'Show'} Filters`} classes={{ tooltip: classes.toolTip }}>
      <IconButton
        className={clsx(
          classes.root,
          { [classes.expandButton]: !isOpen },
          { [classes.collapseButton]: isOpen },
          buttonClassName,
        )}
        data-qa-selector="SidebarToggle"
        onClick={onToggleSidebar}
        ref={buttonRef}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
    </Tooltip>
  );
};

export default SidebarToggle;

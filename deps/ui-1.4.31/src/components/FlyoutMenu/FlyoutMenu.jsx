import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowRight from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import slugify from '@lp/slugify';

const useStyles = makeStyles(
  ({ spacing }) => ({
    menu: {
      outline: 0,
    },
    submenu: {
      outline: 0,
    },
    menuItem: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    menuItemWithSubmenu: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'visible',
      paddingRight: 15,
    },
    menuItemWithSubmenuLabel: {
      paddingRight: 13,
    },
  }),
  { classNamePrefix: 'FlyoutMenu' },
);

export default function FlyoutMenu({
  placement,
  modifiers,
  menuItems,
  SubmenuProps,
  onClickAway,
  ...other
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  function handleSubmenuClose() {
    setSubmenuOpen(null);
  }

  function handleSubmenu(event, menuId) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSubmenuOpen(menuId);
  }

  return (
    <Popper placement={placement} modifiers={modifiers} role={undefined} transition {...other}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <Paper elevation={4}>
            <ClickAwayListener onClickAway={onClickAway}>
              <MenuList className={classes.menu}>
                {menuItems.map(item => {
                  const key = slugify(item.label);
                  const hasSubmenu = !!item.menuItems;
                  const submenuId = hasSubmenu ? `${key}-submenu` : null;
                  const onClick = hasSubmenu
                    ? event => handleSubmenu(event, submenuId)
                    : item.onClick;
                  const onMouseEnter = hasSubmenu
                    ? event => handleSubmenu(event, submenuId)
                    : handleSubmenuClose;
                  return (
                    !item.hidden && (
                      <MenuItem
                        key={key}
                        className={clsx(classes.menuItem, {
                          [classes.menuItemWithSubmenu]: hasSubmenu,
                        })}
                        disabled={item.disabled}
                        aria-controls={submenuOpen === submenuId ? submenuId : undefined}
                        aria-haspopup={hasSubmenu ? 'true' : undefined}
                        data-qa-selector={item.qaSelector}
                        onClick={onClick}
                        onMouseEnter={onMouseEnter}
                      >
                        <span className={clsx({ [classes.menuItemWithSubmenuLabel]: hasSubmenu })}>
                          {item.label}
                        </span>
                        {hasSubmenu && <ArrowRight />}
                        {hasSubmenu && (
                          <Popper
                            open={submenuOpen === submenuId}
                            anchorEl={anchorEl}
                            role={undefined}
                            transition
                            disablePortal
                            {...SubmenuProps}
                          >
                            {({ TransitionProps }) => (
                              <Fade {...TransitionProps}>
                                <Paper elevation={4}>
                                  <MenuList id={submenuId} className={classes.submenu}>
                                    {item.menuItems.map(
                                      subitem =>
                                        !subitem.hidden && (
                                          <MenuItem
                                            className={classes.menuItem}
                                            onClick={subitem.onClick}
                                            disabled={subitem.disabled}
                                            key={`${key}-${slugify(subitem.label)}`}
                                            data-qa-selector={subitem.qaSelector}
                                          >
                                            {subitem.label}
                                          </MenuItem>
                                        ),
                                    )}
                                  </MenuList>
                                </Paper>
                              </Fade>
                            )}
                          </Popper>
                        )}
                      </MenuItem>
                    )
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

// See Material UI Popper component API for all possible props and SubmenuProps.
// https://material-ui.com/api/popper/
FlyoutMenu.propTypes = {
  placement: PropTypes.string,
  modifiers: PropTypes.shape({}),
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      menuItems: PropTypes.arrayOf(PropTypes.shape({})),
      qaSelector: PropTypes.string,
      disabled: PropTypes.bool,
      hidden: PropTypes.bool,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  SubmenuProps: PropTypes.object,
  onClickAway: PropTypes.func.isRequired,
};

FlyoutMenu.defaultProps = {
  placement: 'bottom-start',
  modifiers: { offset: { enabled: true, offset: '0, 8' } },
  SubmenuProps: {
    placement: 'right-start',
    modifiers: { offset: { enabled: true, offset: '-8, 0' } },
  },
};

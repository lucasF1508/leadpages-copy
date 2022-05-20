import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../atoms/Button';
import Tooltip from '../../molecules/Tooltip';

import styles from './ActionMenu.css';

/**
 * ActionMenu renders a menu which has an animated opening.
 *
 * @param {Array} icons     collection of icons and tooltip descriptions
 * @param {Object} actions  object which keys map to icon names expected in the `icons` param
 *
 * @return                  ActionMenu component
 */
const ActionMenu = ({ icons, actions, isActive }) => {
  const staggerTransition = index => ({
    transition: `.3s ease .${index}s`
  });

  const actionMenuClassNames = classNames(styles.actionMenu, {
    [styles.isActive]: isActive
  });

  return (
    <div className={actionMenuClassNames}>
      <ul className={styles.actionMenuList}>
        {icons.map(
          (
            { icon, tooltip, iconClass, enabled = true, isDanger, ...rest },
            i
          ) => (
            <li style={staggerTransition(i + 1)} key={icon}>
              <Tooltip top tip={tooltip} {...rest}>
                <Button
                  data-heap={`action-menu-${icon}`}
                  icon={icon}
                  disabled={!enabled}
                  className={iconClass}
                  noHoverBackground
                  isDanger={isDanger}
                  onClick={actions[icon]}
                />
              </Tooltip>
            </li>
          )
        )}
      </ul>
      <a className={styles.expandActions}>
        <i className="lp-icon">ellipsis</i>
      </a>
    </div>
  );
};

ActionMenu.displayname = 'ActionMenu';

ActionMenu.propTypes = {
  isActive: PropTypes.bool,
  icons: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({})
};

ActionMenu.defaultProps = {
  isActive: false,
  icons: [
    { icon: 'remove_circle', tooltip: 'Remove from Funnel' },
    { icon: 'view', tooltip: 'View Page' },
    { icon: 'analytics', tooltip: 'Analytics' },
    { icon: 'edit', tooltip: 'Edit Page' }
  ],
  actions: {
    remove_circle: () => {},
    view: () => {},
    analytics: () => {},
    edit: () => {}
  }
};

export default ActionMenu;

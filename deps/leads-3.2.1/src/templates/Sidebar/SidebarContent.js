import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Sidebar.css';

const SidebarContent = ({ children, className }) => (
  <div className={styles.contentConatiner}>
    <div className={styles.contentArea}>
      <div className={classNames(
        `${styles.content}`,
        className,
      )}
      >
        {children}
      </div>
    </div>
  </div>
);

SidebarContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

SidebarContent.defaultProps = {
  className: '',
  children: null,
};


export default SidebarContent;

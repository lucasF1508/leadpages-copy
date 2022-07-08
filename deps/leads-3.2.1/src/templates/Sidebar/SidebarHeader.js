import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../atoms/Button';
import styles from './Sidebar.css';

const SidebarHeader = ({
  title,
  subtitle,
  onClose,
  onGoBack,
  children,
  className
}) => (
  <div className={classnames(styles.header, className)}>
    {!onGoBack ? null : (
      <div
        tabIndex="0"
        role="link"
        onClick={onGoBack}
        className={styles.goBack}
      >
        &lt;
      </div>
    )}
    <div className={styles.title}>
      <div className={styles.mainTitle}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
    {onClose && (
      <Button
        className={styles.closeIcon}
        icon="close"
        noBackground
        onClick={() => {
          onClose();
        }}
      />
    )}
    {children}
  </div>
);

SidebarHeader.propTypes = {
  onClose: PropTypes.func,
  onGoBack: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

SidebarHeader.defaultProps = {
  onGoBack: null,
  title: '',
  subtitle: '',
  children: null,
  onClose: null
};

export default SidebarHeader;

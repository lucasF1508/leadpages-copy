import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../atoms/Button';
import styles from './Toast.css';

export default class Toast extends React.Component {
  static severity = {
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    MESSAGE: 'MESSAGE'
  };

  static getSeverity(severity) {
    const severityIcon = {
      ERROR: (
        <div className={classnames(styles.indicator, styles.error)}>
          <i className={classnames('lp-icon', styles.indicatorIcons)}>error</i>
        </div>
      ),
      WARNING: (
        <div className={classnames(styles.indicator, styles.warning)}>
          <i className={classnames('lp-icon', styles.indicatorIcons)}>info</i>
        </div>
      ),
      MESSAGE: (
        <div className={classnames(styles.indicator, styles.message)}>
          <i className={classnames('lp-icon', styles.indicatorIcons)}>
            check_circle
          </i>
        </div>
      )
    };

    if (severityIcon[severity]) {
      return severityIcon[severity];
    }

    return null;
  }

  render() {
    const {
      className,
      message,
      href,
      to,
      onClick,
      linkText,
      severity,
      onClose,
      closeIcon
    } = this.props;

    if (!message) return null;

    return (
      <div className={classnames(className, styles.toast)}>
        {Toast.getSeverity(severity)}
        <div className={styles.content}>
          <div className={styles.toastMessage}>{message}</div>
          {linkText && (
            <div>
              <Button
                noBackground
                className={styles.toastLink}
                {...{ href, to, onClick }}
              >
                {linkText}
              </Button>
            </div>
          )}
        </div>
        <div className={styles.close}>
          <Button icon={closeIcon} noBackground onClick={onClose} />
        </div>
      </div>
    );
  }
}

Toast.propTypes = {
  className: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  href: PropTypes.string,
  to: PropTypes.string,
  linkText: PropTypes.string,
  severity: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  closeIcon: PropTypes.string
};

Toast.defaultProps = {
  className: '',
  message: null,
  href: undefined,
  to: undefined,
  linkText: '',
  severity: Toast.severity.MESSAGE,
  closeIcon: 'close',
  onClick: () => {},
  onClose: () => {}
};

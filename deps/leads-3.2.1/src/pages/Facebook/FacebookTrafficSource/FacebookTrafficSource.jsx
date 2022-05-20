/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
// The above rules are actually followed, it seems the eslint
// rule doesn't work with conditionals.

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import camelCase from 'lodash/camelCase';

import styles from './FacebookTrafficSource.css';
import FacebookIcon from '../FacebookIcon';
import Indicator from '../../../atoms/Indicator';

const facebookStatuses = {
  active: 'success',
  scheduled: 'info',
  inactive: 'info',
  notDelivering: 'info',
  completed: 'info',
  deleted: 'info',
  inReview: 'info',
  limited: 'info',
  notApproved: 'error'
};

const determineStatus = status => {
  const camelStatus = camelCase(status);
  const indicatorStatus = facebookStatuses[camelStatus];

  if (!indicatorStatus) return 'info';

  return indicatorStatus;
};

const FacebookTrafficSource = ({
  className,
  enabled,
  ad,
  adStatus,
  analyticsDisplay,
  onClick
}) => {
  const { name = '', id = null, imgSrc = null } = ad;

  return (
    <div className={styles.container}>
      <div
        tabIndex={enabled ? 0 : undefined}
        role={enabled ? 0 : undefined}
        onClick={enabled ? onClick : undefined}
        className={classNames(className, styles.trafficSourceBase, {
          [`${styles.tsEnabled}`]: enabled,
          [`${styles.populated}`]: !!id
        })}
      >
        <div className={classNames(styles.trafficSourceIcon)}>
          <FacebookIcon imgSrc={imgSrc} />
        </div>
        <div className={classNames(styles.trafficSourceContent)}>
          <div className={styles.title}>
            {id ? name : 'Create a Facebook Ad'}
          </div>
          {!!adStatus && (
            <div className={styles.analyticsDisplay}>
              <div className={styles.indicator}>
                <Indicator status={determineStatus(adStatus)} />
              </div>
              <div className={styles.analytics}>{analyticsDisplay}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FacebookTrafficSource.propTypes = {
  ad: PropTypes.shape({}),
  adStatus: PropTypes.string,
  analyticsDisplay: PropTypes.string,
  enabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

FacebookTrafficSource.defaultProps = {
  ad: {},
  adStatus: '',
  analyticsDisplay: '',
  enabled: false,
  onClick: () => {},
  className: ''
};

export default FacebookTrafficSource;

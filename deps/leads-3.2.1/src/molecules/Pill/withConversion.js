/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';
import styles from './withConversion.css';

import withColor from '../../theme/Color';

const ConversionIcon = ({ className, icon }) => (<i className={classNames('lp-icon', className)}>{icon}</i>);
const ConversionIconWrapper = ({ className, children }) => (
  <span className={classNames(styles.iconWrapper, className)}>{children}</span>
);
const IconWrapperWithColor = withColor(ConversionIconWrapper);
const IconWithColor = withColor(ConversionIcon);

const withConversion = PillWrapper => (
  ({
    data = [],
    iconWrapperColor = 'greyLighter',
    iconColor = 'greyDarker',
    icon = 'add',
    subContent = 'Progressed',
    ...rest
  }) => {
    const firstConversion = data[0] || { text: null, conversion: null };
    const hideAnalytics = firstConversion.conversion === null;

    return (
      <PillWrapper className={classNames(styles.conversion)} data={data} {...rest}>
        <IconWrapperWithColor backgroundColor={iconWrapperColor} className={styles.iconWrapper}>
          <IconWithColor color={iconColor} icon={icon} />
        </IconWrapperWithColor>
        <div className={classNames(styles.contentWrapper, {
          [`${styles.noAnalytics}`]: hideAnalytics,
        })}
        >
          <div className={styles.pillHeadingWrapper}>
            <span className={styles.pillHeading}>{firstConversion.text}</span>
            {
              data.length > 1 &&
              (
                <span className={styles.conversionsOverflow}>
                +{ data.length - 1 }
                </span>
              )

            }
          </div>
          { !hideAnalytics &&
            <div>
              <span className={styles.conversionPercent}>{firstConversion.conversion}% &nbsp;</span>
              <span className={styles.convertedText}>{subContent}</span>
            </div>
          }
        </div>
      </PillWrapper>
    );
  }
);

export default withConversion;

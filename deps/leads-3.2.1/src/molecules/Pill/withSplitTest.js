/* eslint react/prop-types: 0 */
import React from 'react';
import classNames from 'classnames';

import Label from '../../molecules/Label';
import withColor from '../../theme/Color';

import styles from './withSplitTest.css';

const LabelWithColor = withColor(Label);

/**
 * Takes a `Pill` component and composes it to
 * create a split test pill.
 *
 * @param  {Function} PillWrapper Pill React component
 * @return {Function}             "Partial application" to create withSplitTest component
 */
const withSplitTest = PillWrapper => (
  /**
   * PillWrapper Component
   * @param  {Array}  data                 sorted array of conversion points
   * @param  {Array}  backgroundColorArray sorted array of `Label` background-colors
   * @param  {Object} rest                 rest of the props from composed Pill
   * @return {Function}                    PillWrapper "Partial Application"
   */
  ({ data = [], backgroundColorArray = ['green', 'yellow', 'purple'], ...rest }) => (
    <PillWrapper className={classNames(styles.splitTest)} data={data} {...rest}>
      {
        data.map((conversion, index) => {
          if (index < 3) {
            return (
              <div key={backgroundColorArray[index] + data} className={styles.conversionWrapper}>
                <LabelWithColor
                  className={styles.splitSwatch}
                  backgroundColor={backgroundColorArray[index]}
                  iconText={index === 0 ? 'C' : `v${index.toString()}`}
                >
                  <span>{conversion * 100}%</span>
                </LabelWithColor>
              </div>
            );
          }
          return null;
        })
      }
      {
        data.length > 3 && <div className={styles.splitSwatchOverflow}>+{data.length - 3}</div>
      }
    </PillWrapper>
  )
);

export default withSplitTest;

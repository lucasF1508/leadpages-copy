import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Icons from './icons';
import withColor, { colors } from '../../theme/Color';
import styles from './Icon.css';

const iconColors = (icon) => {
  const { icons } = Icons;
  switch (icon) {
    case icons.Search:
      return colors.greyLight;
    case icons.Webinar:
      return colors.purpleLighter;
    case icons.ThankYou:
      return colors.redLighter;
    case icons.Cart:
    case icons.Ecommerce:
    case icons.Money:
    case icons.Payments:
    case icons.StandardBox:
    case icons.StandardPage:
    case icons.StandardSplitTestPage:
    case icons.StandardSplitTestBox:
      return colors.greenLighter;
    default:
      return colors.blueLighter;
  }
};

const IconShell = withColor(props => <div {...props} />);
const Icon = ({
  className,
  icon,
  isCircle,
  noBackground,
  backgroundColor,
}) => {
  const IconComp = Icons[icon];
  return (
    <IconShell
      className={classNames(className, styles.icon, {
        [`${styles.iconCircle}`]: isCircle,
      })}
      backgroundColor={backgroundColor ? colors[backgroundColor] : !noBackground && iconColors(icon)}
    >
      <IconComp />
    </IconShell>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isCircle: PropTypes.bool,
  noBackground: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
  isCircle: false,
  noBackground: false,
  backgroundColor: null,
};

export default Icon;

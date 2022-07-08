import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import withColor, { colors } from '../../theme/Color';
import {
  defaultClassName,
  secondaryButtonStyles,
  notVisible
} from './SurveyFooter.css.js';

const ColorButton = withColor(props => <Button {...props} />);

export default class SurveyFooter extends Component {
  displayName = 'SurveyFooter';
  render() {
    const {
      children,
      className,
      component: SurveyFooterComponent,
      icon,
      primaryProps,
      secondaryProps,
      ...props
    } = this.props;

    return (
      <SurveyFooterComponent
        className={cx(defaultClassName, className)}
        {...props}
      >
        <Link
          component="button"
          isSecondary
          className={cx(secondaryButtonStyles, {
            [notVisible]: !secondaryProps
          })}
          {...secondaryProps}
        >
          <i className="lp-icon">{icon}</i>
          {secondaryProps && (secondaryProps.children || secondaryProps.text)}
        </Link>
        <ColorButton
          backgroundColor={colors.green}
          className={cx({
            [notVisible]: !primaryProps
          })}
          {...primaryProps}
        >
          {primaryProps && (primaryProps.children || primaryProps.text)}
        </ColorButton>
      </SurveyFooterComponent>
    );
  }
}

SurveyFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icon: PropTypes.string,
  primaryProps: PropTypes.shape({}),
  secondaryProps: PropTypes.shape({})
};

SurveyFooter.defaultProps = {
  children: null,
  className: '',
  component: 'footer',
  icon: 'left_arrow',
  primaryProps: null,
  secondaryProps: null
};

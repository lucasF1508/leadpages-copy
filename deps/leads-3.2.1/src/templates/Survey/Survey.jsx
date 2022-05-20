import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import SurveyFooter from '../../molecules/SurveyFooter';
import {
  defaultClassName,
  surveyHeader,
  surveySubHeader,
  surveyHeaderSvg,
  contentStyles
} from './Survey.css.js';

export default class Survey extends Component {
  displayName = 'Survey';
  render() {
    const {
      children,
      className,
      component: SurveyComponent,
      header,
      subHeader,
      iconSvg,
      footer,
      ...props
    } = this.props;

    return (
      <SurveyComponent className={cx(defaultClassName, className)} {...props}>
        {iconSvg && iconSvg(surveyHeaderSvg)}
        <h1 className={surveyHeader}>{header}</h1>
        {surveyHeader && <h2 className={surveySubHeader}>{subHeader}</h2>}
        <div className={contentStyles}>{children}</div>
        {footer && <SurveyFooter {...footer} />}
      </SurveyComponent>
    );
  }
}

Survey.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  footer: PropTypes.shape({}),
  header: PropTypes.node.isRequired,
  subHeader: PropTypes.string,
  iconSvg: PropTypes.func
};

Survey.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  subHeader: '',
  iconSvg: () => {}
};

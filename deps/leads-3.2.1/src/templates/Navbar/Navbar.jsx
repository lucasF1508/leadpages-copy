import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { css } from 'emotion';
import { shadows } from '../../theme/Theme';

const defaultClassName = css`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: ${shadows.l2};
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0 19px;
`;

const logoClass = css`
  margin-right: 19px;
`;

export default class Navbar extends Component {
  displayName = 'Navbar';
  render() {
    const {
      children,
      className,
      component: NavbarComponent,
      baseUrl,
      ...props
    } = this.props;

    const logo = (
      <svg
        data-qa-selector="navbar-logo"
        className={logoClass}
        width="34px"
        height="26px"
        viewBox="0 0 34 26"
      >
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="on_boarding_nav"
            transform="translate(-24.000000, -21.000000)"
            fill="#0069FF"
          >
            <path
              d="M57.8441686,37.1622828 L53.6029379,34.9419513 L41.2173332,41.4263917 C41.0791402,41.4987235 40.9143716,41.4987235 40.7759475,41.4263917 L28.3917294,34.9419513 L24.1509608,37.1622828 C23.9496797,37.2676608 23.9496797,37.5556013 24.1509608,37.6609793 L40.7759475,46.3657512 C40.9141405,46.438083 41.0791402,46.438083 41.2173332,46.3657512 L57.8441686,37.6609793 C58.0454497,37.5556013 58.0454497,37.2676608 57.8441686,37.1622828 M27.2582233,32.2293938 L40.7759475,39.3072784 C40.9143716,39.3796102 41.0791402,39.3796102 41.2173332,39.3072784 L54.736675,32.2293938 C54.9379561,32.1240159 54.9379561,31.8360753 54.736675,31.7306974 L50.8605696,29.7012478 L41.2175643,34.7496828 C41.0793713,34.8220146 40.9146027,34.8220146 40.7761786,34.7496828 L31.1343288,29.7012478 L27.2582233,31.7306974 C27.0569422,31.8360753 27.0569422,32.1240159 27.2582233,32.2293938 M30.1977131,27.0917574 L40.7761786,32.6305695 C40.9143716,32.7031324 41.0793713,32.7031324 41.2175643,32.6308006 L51.7971853,27.0917574 C51.9984664,26.9863795 51.9984664,26.6984389 51.7971853,26.5930609 L41.2175643,21.0542488 C41.0793713,20.9819171 40.9143716,20.9819171 40.7761786,21.0542488 L30.1977131,26.5930609 C29.996432,26.6984389 29.996432,26.9863795 30.1977131,27.0917574"
              id="Page-1"
            />
          </g>
        </g>
      </svg>
    );

    return (
      <NavbarComponent
        className={classnames(className, defaultClassName)}
        {...props}
      >
        {baseUrl ? (
          <a data-qa-selector="navbar-link" href={baseUrl}>
            {logo}
          </a>
        ) : (
          logo
        )}
        {children}
      </NavbarComponent>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  baseUrl: PropTypes.string
};

Navbar.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  baseUrl: ''
};

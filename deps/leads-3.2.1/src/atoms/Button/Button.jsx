import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // TODO: REMOVE THIS DEP!!!!!!!
import classNames from 'classnames';
import { deprecationWarning } from '../../utils/dev';
import styles from './Button.css';

const Button = ({
  children,
  className,
  component: ButtonComponent,
  icon,
  isActive,
  isLoading,
  isSecondary,
  noBackground,
  noHoverBackground,
  isLinkText,
  isHighlighted,
  isDanger,
  ...rest
}) => {
  if (process.env.NODE_ENV !== 'production') {
    deprecationWarning({
      message:
        'The prop `href` will no longer be supported on button pass in `<a>` component',
      condition: ButtonComponent === 'button' && rest.href
    });
    deprecationWarning({
      message:
        'The prop `to` will no longer be supported on button pass in `<Link>` component',
      condition: ButtonComponent === 'button' && rest.to
    });
    deprecationWarning({
      message:
        'The prop `icon` will no longer be supported on button use `<IconButton>` component',
      condition: icon
    });
    deprecationWarning({
      message:
        'The prop `isLoading` will no longer be supported on button use `<LoadingButton>` component',
      condition: isLoading
    });
    deprecationWarning({
      message:
        'The prop `noBackground` will no longer be supported on button use `<Link>` component',
      condition: noBackground
    });
    deprecationWarning({
      message:
        'The prop `noHoverBackground` will no longer be supported on button use `<Link>` component',
      condition: noHoverBackground
    });
    deprecationWarning({
      message:
        'The prop `isLinkText` will no longer be supported on button use `<Link>` component',
      condition: isLinkText
    });
  }

  const classes = classNames(className, styles.buttonClass, {
    [styles.active]: isActive,
    [styles.loading]: isLoading,
    [styles.noBackgroundStyle]: noBackground,
    [styles.noHoverBackgroundStyle]: noHoverBackground,
    [styles.secondary]: isSecondary,
    [styles.iconStyle]: !!icon,
    [styles.linkText]: isLinkText,
    [styles.highlighted]: isHighlighted,
    [styles.danger]: isDanger
  });

  if (rest.to && ButtonComponent === 'button') {
    return (
      <Link className={classes} {...rest}>
        {icon && <i className="lp-icon">{icon}</i>}
        {children}
      </Link>
    );
  }

  if (rest.href && ButtonComponent === 'button') {
    return (
      <a className={classes} {...rest}>
        {icon && <i className="lp-icon">{icon}</i>}
        {children}
      </a>
    );
  }

  return (
    <ButtonComponent className={classes} {...rest}>
      {icon && <i className="lp-icon">{icon}</i>}
      {children}
    </ButtonComponent>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSecondary: PropTypes.bool,
  noBackground: PropTypes.bool,
  isDanger: PropTypes.bool,
  isLinkText: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  to: PropTypes.string
};

Button.defaultProps = {
  children: null,
  component: 'button',
  className: '',
  href: null,
  icon: '',
  isActive: false,
  isLoading: false,
  isSecondary: false,
  noBackground: false,
  noHoverBackground: false,
  isDanger: false,
  isLinkText: false,
  isHighlighted: false,
  to: null
};

export default Button;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './SubNavigation.css';
import StickyWrapper from '../../molecules/StickyWrapper';
import IconButton from '../../molecules/IconButton';

import { deprecationWarning } from '../../utils/dev';

class SubNavigation extends Component {
  static displayName = 'SubNavigation';

  static propTypes = {
    isMobile: PropTypes.bool,
    hasSubHeader: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    isMobile: false,
    hasSubHeader: false,
    children: null
  };

  constructor(props) {
    super(props);

    this.setIsStuck = this.setIsStuck.bind(this);
    this.setIsScrollingDown = this.setIsScrollingDown.bind(this);

    this.state = {
      isStuck: false,
      isScrollingDown: false
    };
  }

  setIsStuck(isStuck) {
    this.setState(() => ({
      isStuck
    }));
  }

  setIsScrollingDown(isScrollingDown) {
    this.setState(() => ({
      isScrollingDown
    }));
  }

  render() {
    const { isMobile, hasSubHeader, children, mobile, ...rest } = this.props;
    let height = '72px';
    let topWhenStuck = '0px';
    // let topWhenStuck = '-72px';
    let offsetStickTrigger = 0;
    if (isMobile) {
      offsetStickTrigger = -36;
      height = '48px';
      if (children.length !== undefined) {
        height = '96px';
        topWhenStuck = '-48px';
      }
      if (this.state.isScrollingDown) {
        topWhenStuck = '0px';
        // topWhenStuck = '-72px';
      }
    }
    if (hasSubHeader) {
      offsetStickTrigger = -72;
      if (children.length !== undefined) {
        topWhenStuck = '-72px';
      }
      if (this.state.isScrollingDown) {
        topWhenStuck = '0px';
        offsetStickTrigger = 0;
      }
    }
    return (
      <StickyWrapper
        setIsStuck={this.setIsStuck}
        setIsScrollingDown={this.setIsScrollingDown}
        height={height}
        topWhenStuck={topWhenStuck}
        offsetStickTrigger={offsetStickTrigger}
      >
        <div
          {...rest}
          className={classNames({
            [`${styles.header}`]: !mobile,
            [`${styles.headerMobile}`]: isMobile && !children.length,
            [`${styles.headerMobileWithChildren}`]: isMobile && children.length
          })}
        >
          <div className={styles.body}>{children}</div>
        </div>
      </StickyWrapper>
    );
  }
}

export default SubNavigation;

export const SubNavigationMainDefaultChildren = ({
  children,
  to,
  href,
  clickBack,
  name,
  editText
}) => (
  <div className={styles.name}>
    <IconButton
      icon="left_angle"
      noBackground
      className={classNames({
        [`${styles.visibilityHidden}`]: !href && !to && !clickBack
      })}
      href={href ? href : undefined}
      to={to ? to : undefined}
      onClick={clickBack ? clickBack : undefined}
    />
    {name && (
      <h1
        className={classNames(styles.text, {
          [`${styles.noBackButton}`]: !href && !to && !clickBack
        })}
      >
        {name}
      </h1>
    )}
    {editText && (
      <IconButton
        icon="edit"
        noBackground
        data-heap="subnavigation-edit"
        className={classNames(styles.editButton)}
        onClick={editText}
      />
    )}
    {children &&
      name && <div className={classNames(styles.editButton)}>{children}</div>}
  </div>
);

SubNavigationMainDefaultChildren.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
  clickBack: PropTypes.func,
  editText: PropTypes.func
};

SubNavigationMainDefaultChildren.defaultProps = {
  children: null,
  to: '',
  href: '',
  clickBack: null,
  editText: null
};

export class SubNavigationMain extends Component {
  constructor(props) {
    super(props);

    if (process.env.NODE_ENV !== 'production') {
      // This does not work with webpack yet but maybe will soon setup issues.
      deprecationWarning({
        condition: !!props.to || !!props.href || !!props.clickBack,
        message:
          'SubNavigationMain prop to, href, and clickBack are being deprecated in favor of children'
      });
      deprecationWarning({
        condition: !!props.name,
        message:
          'SubNavigationMain prop name is being deprecated in favor of children'
      });
      deprecationWarning({
        condition: !!props.editText,
        message:
          'SubNavigationMain prop editText is being deprecated in favor of children'
      });
    }
  }

  render() {
    const { children, name } = this.props;

    return (
      <div className={styles.main}>
        <div className={styles.info}>
          {name && <SubNavigationMainDefaultChildren {...this.props} />}
          {!name && children}
        </div>
      </div>
    );
  }
}

SubNavigationMain.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
  clickBack: PropTypes.func,
  editText: PropTypes.func
};

SubNavigationMain.defaultProps = {
  children: null,
  name: null,
  to: '',
  href: '',
  clickBack: null,
  editText: null
};

export function SubNavigationControls(props) {
  const { children, ...rest } = props;
  return (
    <div {...rest} className={styles.controls}>
      {children}
    </div>
  );
}

SubNavigationControls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

SubNavigationControls.defaultProps = {
  children: undefined
};

export function SubNavigationTabs(props) {
  const { children, isMobile, ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames({
        [`${styles.tab}`]: !isMobile,
        [`${styles.hidden}`]: isMobile
      })}
    >
      {children}
    </div>
  );
}

SubNavigationTabs.propTypes = {
  isMobile: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

SubNavigationTabs.defaultProps = {
  isMobile: false,
  children: undefined
};

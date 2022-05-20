import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import anime from 'animejs';
import classNames from 'classnames';
import styles from './Sidebar.css';

const animateSidebarIn = (sidebar, sidebarContent) => {
  anime.timeline().add({
    targets: sidebar,
    offset: 0,
    translateX: [
      { value: '100%', duration: 0, elasticity: 0 },
      { value: '10%', duration: 500, delay: 0, elasticity: 0 },
    ],
    scaleX: [
      { value: 1.05, duration: 50, delay: 50, easing: 'easeOutExpo' },
      { value: 1, duration: 450, elasticity: 0 },
    ],
    zIndex: [
      { value: 4001, duration: 0 },
      { value: 4001, duration: 400 },
    ],
  })
  .add({
    targets: sidebarContent,
    offset: 0,
    translateX: [
      { value: '10%', duration: 0, elasticity: 0 },
      { value: '0%', duration: 500, delay: 0, elasticity: 0 },
    ],
    scaleX: [
      { value: 1, duration: 50, delay: 50, easing: 'easeOutExpo' },
      { value: 1, duration: 450, elasticity: 0 },
    ],
  });
};

const animateSidebarOut = (sidebar, callback) => {
  anime({
    targets: sidebar,
    direction: 'reverse',
    translateX: [
      { value: '100%', duration: 0, elasticity: 0 },
      { value: '10%', duration: 400, delay: 0, elasticity: 0 },
    ],
    scaleX: [
      { value: 1.05, duration: 50, delay: 50, easing: 'easeOutExpo' },
      { value: 1, duration: 350, elasticity: 0 },
    ],
    zIndex: [
      { value: 3999, duration: 0 },
      { value: 3999, duration: 400 },
    ],
    complete: callback,
  });
};

class Sidebar extends Component {
  componentDidAppear() {
    animateSidebarIn(this.sidebar, this.sidebarContent);
  }
  componentDidEnter() {
    animateSidebarIn(this.sidebar, this.sidebarContent);
  }
  componentWillLeave(callback) {
    animateSidebarOut(this.sidebar, callback);
  }

  render() {
    const {
      className,
      children,
    } = this.props;
    return (
      <div
        ref={(sidebar) => { this.sidebar = sidebar; }}
        className={classNames(
          className,
          `${styles.sidebar}`,
        )}
      >
        <div
          className={classNames(
            className,
            `${styles.sidebarContent}`,
          )}
          ref={(sidebarContent) => { this.sidebarContent = sidebarContent; }}
        >
          { children }
        </div>
      </div>
    );
  }
}

const AnimatedSidebar = props => (
  <TransitionGroup component="div">
    { props.isOpen ? <Sidebar {...props} /> : null}
  </TransitionGroup>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
AnimatedSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

Sidebar.defaultProps = {
  className: '',
  isOpen: false,
  children: null,
};

export default AnimatedSidebar;

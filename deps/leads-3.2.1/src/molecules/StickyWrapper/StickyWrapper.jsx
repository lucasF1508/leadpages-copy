import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StickyWrapper extends Component {
  constructor(props) {
    super(props);

    this.lockOnScroll = this.lockOnScroll.bind(this);

    this.state = {
      isStuckOnTop: false,
      isScrollingDown: false,
      previousTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.lockOnScroll, true);
    window.addEventListener('resize', this.lockOnScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.lockOnScroll, true);
    window.removeEventListener('resize', this.lockOnScroll, true);
  }

  lockOnScroll(event) {
    window.requestAnimationFrame(() => {
      const currentTop = this.scrollLockContainer.getBoundingClientRect().top;
      const isStuckOnTop = currentTop < 1 + this.props.offsetStickTrigger;

      let isScrollingDown = this.state.isScrollingDown;
      if (event.type === 'scroll') {
        isScrollingDown = this.state.previousTop < currentTop;
      }

      if (this.props.setIsStuck && this.state.isStuckOnTop !== isStuckOnTop) {
        this.props.setIsStuck(isStuckOnTop);
      }

      if (
        this.props.setIsScrollingDown &&
        this.state.isScrollingDown !== isScrollingDown
      ) {
        this.props.setIsScrollingDown(isScrollingDown);
      }

      this.setState(() => ({
        isStuckOnTop,
        isScrollingDown,
        previousTop: currentTop,
      }));
    });
  }

  render() {
    const { isStuckOnTop } = this.state;
    return (
      <div
        ref={(scrollLockParent) => {
          this.scrollLockParent = scrollLockParent;
        }}
        style={{
          position: 'relative',
          zIndex: isStuckOnTop ? '3500' : 'initial',
          height: this.props.height,
          width: '100%',
        }}
      >
        <div
          ref={(scrollLockContainer) => {
            this.scrollLockContainer = scrollLockContainer;
          }}
        />
        <div
          style={
            !this.state.isStuckOnTop
              ? {
                transition: 'all 200ms ease-in',
              }
              : {
                position: 'fixed',
                transition: 'all 200ms ease-in',
                top: this.props.topWhenStuck,
                width: `${this.scrollLockParent.offsetWidth}px`,
              }
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

StickyWrapper.propTypes = {
  setIsStuck: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  setIsScrollingDown: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  height: PropTypes.string,
  topWhenStuck: PropTypes.string,
  offsetStickTrigger: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

StickyWrapper.defaultProps = {
  height: '72px',
  topWhenStuck: '0px',
  offsetStickTrigger: 0,
  setIsStuck: false,
  setIsScrollingDown: false,
};

export default StickyWrapper;

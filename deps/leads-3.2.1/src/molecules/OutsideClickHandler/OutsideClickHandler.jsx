import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  onOutsideClick: PropTypes.func,
  ele: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ])
};

const defaultProps = {
  children: <span />,
  onOutsideClick: () => {},
  ele: null
};

export default class OutsideClickHandler extends React.Component {
  constructor(props) {
    super(props);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  componentDidMount() {
    // `capture` flag is set to true so that a `stopPropagation` in the children
    // will not prevent all outside click handlers from firing - maja
    // this.props.ele, ios safari does not bind events to document or document.body
    let { ele } = this.props;
    if (!ele) {
      ele = document;
    }

    ele.addEventListener('click', this.onOutsideClick, { capture: true });
  }

  componentWillUnmount() {
    let { ele } = this.props;
    if (!ele) {
      ele = document;
    }
    ele.removeEventListener('click', this.onOutsideClick, { capture: true });
  }

  onOutsideClick(e) {
    const isDescendantOfRoot = this.childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      this.props.onOutsideClick(e);
    }
  }

  render() {
    return (
      <div
        ref={ref => {
          this.childNode = ref;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

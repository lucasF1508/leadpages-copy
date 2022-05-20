import React, { Children } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

// TODO: This and link could be forced to use React Router v4 and make life easier
// ie less state managment. and the url could drive the view
const TabContent = ({ className, children, activeIndex }) => (
  <div className={classNames('ui-tabs-content', className)}>
    { Children.map(children, (child, i) => {
      if (i !== activeIndex) { return null; }
      return child;
    }) }
  </div>
);

TabContent.displayName = 'TabContent';

TabContent.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

TabContent.defaultProps = {
  activeIndex: 0,
  className: '',
};

export default TabContent;

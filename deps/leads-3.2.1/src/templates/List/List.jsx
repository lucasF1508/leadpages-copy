import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './List.css';

const List = ({ children, className }) => (
  <div className={classNames(className, style.list)}>{children}</div>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

List.defaultProps = {
  className: null
};

const ListRow = ({ children, className, innerClassName, isHeader }) => (
  <div
    className={classNames(className, style.listRow, {
      [`${style.header}`]: isHeader
    })}
  >
    <div className={classNames(innerClassName, style.listShell)}>
      {children}
    </div>
  </div>
);

ListRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  isHeader: PropTypes.bool,
  className: PropTypes.string,
  innerClassName: PropTypes.string
};

ListRow.defaultProps = {
  isHeader: false,
  className: null,
  innerClassName: null
};

const ListColumn = ({
  children,
  className,
  flexGrow,
  flexShrink,
  flexBasis,
  justifyContent
}) => (
  <div
    className={classNames(className, style.listColumn)}
    style={{
      flexGrow,
      flexShrink,
      flexBasis,
      display: justifyContent !== null ? 'flex' : 'initial',
      justifyContent
    }}
  >
    {children}
  </div>
);

ListColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  flexGrow: PropTypes.oneOf(['0', '1']),
  flexShrink: PropTypes.oneOf(['0', '1']),
  flexBasis: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    null,
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'left',
    'right',
    'baseline',
    'first baseline',
    'last baseline',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset'
  ])
};

ListColumn.defaultProps = {
  children: null,
  className: null,
  flexGrow: '1',
  flexShrink: '1',
  flexBasis: '0',
  justifyContent: null
};

export { List, ListRow, ListColumn };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.List_list__3aibz {\n  width: 100%;\n\n  border-radius: 3px;\n  background-color: #ffffff\n}\n\n.List_list__3aibz .List_listRow__1msPD {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  min-height: 85px;\n  margin: -1px 0 0;\n  padding: 0 24px;\n  border: 1px solid #e4e7ed\n}\n\n.List_list__3aibz .List_listRow__1msPD:first-child {\n  border-radius: 3px 3px 0 0;\n}\n\n.List_list__3aibz .List_listRow__1msPD:last-child {\n  border-radius: 0 0 3px 3px;\n}\n\n.List_list__3aibz .List_listRow__1msPD.List_header__1vXQ_ {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0;\n  color: #797f89;\n  min-height: 60px;\n}\n\n.List_list__3aibz .List_listRow__1msPD .List_listShell__hWGyz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  width: 100%;\n}\n\n.List_list__3aibz .List_listRow__1msPD:not(.List_header__1vXQ_) .List_listColumn__2uJbl {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #4c515d;\n}\n";
var style = {"list":"List_list__3aibz","listRow":"List_listRow__1msPD","header":"List_header__1vXQ_","listShell":"List_listShell__hWGyz","listColumn":"List_listColumn__2uJbl"};
styleInject(css);

var List = function List(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames(className, style.list)
  }, children);
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string
};
List.defaultProps = {
  className: null
};

var ListRow = function ListRow(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      innerClassName = _ref2.innerClassName,
      isHeader = _ref2.isHeader;
  return React.createElement("div", {
    className: classNames(className, style.listRow, defineProperty({}, "".concat(style.header), isHeader))
  }, React.createElement("div", {
    className: classNames(innerClassName, style.listShell)
  }, children));
};

ListRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isHeader: PropTypes.bool,
  className: PropTypes.string,
  innerClassName: PropTypes.string
};
ListRow.defaultProps = {
  isHeader: false,
  className: null,
  innerClassName: null
};

var ListColumn = function ListColumn(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      flexGrow = _ref3.flexGrow,
      flexShrink = _ref3.flexShrink,
      flexBasis = _ref3.flexBasis,
      justifyContent = _ref3.justifyContent;
  return React.createElement("div", {
    className: classNames(className, style.listColumn),
    style: {
      flexGrow: flexGrow,
      flexShrink: flexShrink,
      flexBasis: flexBasis,
      display: justifyContent !== null ? 'flex' : 'initial',
      justifyContent: justifyContent
    }
  }, children);
};

ListColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  flexGrow: PropTypes.oneOf(['0', '1']),
  flexShrink: PropTypes.oneOf(['0', '1']),
  flexBasis: PropTypes.string,
  justifyContent: PropTypes.oneOf([null, 'center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right', 'baseline', 'first baseline', 'last baseline', 'space-between', 'space-around', 'space-evenly', 'stretch', 'safe center', 'unsafe center', 'inherit', 'initial', 'unset'])
};
ListColumn.defaultProps = {
  children: null,
  className: null,
  flexGrow: '1',
  flexShrink: '1',
  flexBasis: '0',
  justifyContent: null
};

exports.List = List;
exports.ListRow = ListRow;
exports.ListColumn = ListColumn;

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Autocomplete = _interopDefault(require('react-autocomplete'));
var substringMatcher = require('@lp/substring-matcher');
var Flyout = _interopDefault(require('../Flyout'));
var Input = _interopDefault(require('../Input'));
var Option = _interopDefault(require('../Option'));
var emotion = require('emotion');
var Theme = require('../Theme');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  padding: 9px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  font-size: 15px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  right: 10px;\n  top: 9px;\n  cursor: pointer;\n  outline: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  padding-right: 30px !important;\n  text-overflow: ellipsis;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  padding: 9px 0 !important;\n  margin-top: 0 !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var flyout = emotion.css(_templateObject());
var input = emotion.css(_templateObject2());
var iconCloseContainer = emotion.css(_templateObject3());
var iconClose = emotion.css(_templateObject4(), Theme.colors.greyDark);
var menuStyles = emotion.css(_templateObject5());
var menuItem = emotion.css(Theme.typographyDefs.supportContent, menuStyles);

var getHighlightedText = function getHighlightedText(text, query) {
  var parts = substringMatcher.getParts(text, query);
  return parts.map(function (part, i) {
    return React__default.createElement("span", {
      key: i,
      style: part && part.toLowerCase() === query.toLowerCase() ? {
        fontWeight: 'bold'
      } : {}
    }, part);
  });
};

var Typeahead = function Typeahead(_ref) {
  var getOptionClassName = _ref.getOptionClassName,
      getOptionLabel = _ref.getOptionLabel,
      getOptionValue = _ref.getOptionValue,
      handleOnReset = _ref.handleOnReset,
      handleOnSearch = _ref.handleOnSearch,
      handleOnSelect = _ref.handleOnSelect,
      inputProps = _ref.inputProps,
      listFooter = _ref.listFooter,
      listHeader = _ref.listHeader,
      noOptionsMessage = _ref.noOptionsMessage,
      options = _ref.options,
      query = _ref.query,
      value = _ref.value;
  return React__default.createElement(Autocomplete, {
    selectOnBlur: true,
    wrapperStyle: {
      position: 'relative',
      display: 'inline-block',
      width: '100%',
      lineHeight: '24px'
    },
    value: query,
    items: options,
    getItemValue: getOptionValue,
    onSelect: handleOnSelect,
    onChange: function onChange(e) {
      return handleOnSearch(e.target.value);
    },
    renderInput: function renderInput(_ref2) {
      var ref = _ref2.ref,
          props = objectWithoutProperties(_ref2, ["ref"]);

      return React__default.createElement(React.Fragment, null, React__default.createElement(Input, _extends_1({
        inputRef: ref
      }, inputProps, props, {
        inputSelfClass: input
      })), query && React__default.createElement("div", {
        "data-qa-selector": "clear-typeahead",
        tabIndex: "0",
        role: "button",
        className: iconCloseContainer,
        onClick: handleOnReset,
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            handleOnReset();
          }
        }
      }, React__default.createElement("i", {
        className: emotion.cx('lp-icon', iconClose)
      }, "close_circle")));
    },
    renderMenu: function renderMenu(children) {
      return React__default.createElement(Flyout, {
        className: flyout,
        open: true
      }, listHeader && React__default.createElement("div", {
        className: menuItem
      }, listHeader), children, listFooter && React__default.createElement("div", {
        className: menuItem
      }, listFooter), !options.length && React__default.createElement("div", {
        className: menuItem
      }, noOptionsMessage));
    },
    renderItem: function renderItem(item, isHighlighted) {
      var val = getOptionValue(item);
      var label = getOptionLabel(item);
      var className = getOptionClassName(item);
      return React__default.createElement(Option, {
        className: className,
        selected: value === val,
        active: isHighlighted,
        key: val
      }, getHighlightedText(label, query));
    }
  });
};

Typeahead.propTypes = {
  getOptionClassName: PropTypes.func,
  getOptionLabel: PropTypes.func.isRequired,
  getOptionValue: PropTypes.func.isRequired,
  handleOnReset: PropTypes.func,
  handleOnSearch: PropTypes.func,
  handleOnSelect: PropTypes.func,
  inputProps: PropTypes.object,
  listFooter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  listHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  noOptionsMessage: PropTypes.string,
  options: PropTypes.array.isRequired,
  query: PropTypes.string,
  value: PropTypes.any
};
Typeahead.defaultProps = {
  getOptionClassName: function getOptionClassName() {
    return '';
  },
  handleOnReset: function handleOnReset() {},
  handleOnSearch: function handleOnSearch() {},
  handleOnSelect: function handleOnSelect() {},
  inputProps: {},
  listFooter: '',
  listHeader: '',
  noOptionsMessage: 'No results found',
  optionValue: '',
  query: ''
};

module.exports = Typeahead;

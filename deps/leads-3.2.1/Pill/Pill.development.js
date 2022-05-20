'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));
var Label = _interopDefault(require('../Label'));
var withColor = _interopDefault(require('../Color'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Pill_pillBase__1I2N1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.Pill_pillEmpty__2rsX0 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 192px;\n  height: 50px;\n\n  padding: 9px 12px;\n\n  border: 1px dashed #0069ff;\n  border-radius: 3px;\n  background-color: #fff\n}\n\n.Pill_pillEmpty__2rsX0 .Pill_pillEmptyText__2aH5b {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0;\n  color: #797f89;\n  width: 125px;\n  height: 36px;\n  margin-left: 12px;\n  color: #4c515d;\n}\n\n.Pill_pillEmpty__2rsX0:hover {\n  border: 1px dashed #0069ff;\n}\n\n.Pill_pillEmpty__2rsX0 .Pill_pillEmptyIcon__1jC32 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 23px;\n  height: 23px;\n  border-radius: 15px;\n  background-color: #deecfd;\n}\n\n.Pill_pillEmpty__2rsX0 .Pill_pillEmptyIcon__1jC32 > i {\n  font-size: 12px;\n  color: #00419f;\n}\n";
var styles = {"pillBase":"Pill_pillBase__1I2N1","pillEmpty":"Pill_pillEmpty__2rsX0","pillEmptyText":"Pill_pillEmptyText__2aH5b","pillEmptyIcon":"Pill_pillEmptyIcon__1jC32"};
styleInject(css);

var Pill = function Pill(_ref) {
  var _classNames;

  var pillText = _ref.pillText,
      data = _ref.data,
      className = _ref.className,
      children = _ref.children,
      icon = _ref.icon;
  var isEmpty = data.length === 0;
  return React.createElement("div", {
    className: classNames(styles.pillBase, (_classNames = {}, defineProperty(_classNames, "".concat(className), !isEmpty), defineProperty(_classNames, "".concat(styles.pillEmpty), isEmpty), _classNames))
  }, isEmpty && React.createElement("span", {
    className: classNames(defineProperty({}, "".concat(styles.pillEmptyIcon), isEmpty))
  }, isEmpty && React.createElement("i", {
    className: "lp-icon"
  }, icon)), React.createElement("span", {
    className: classNames(defineProperty({}, "".concat(styles.pillEmptyText), isEmpty))
  }, isEmpty && pillText), !isEmpty && children);
};

Pill.defaultProps = {
  data: [],
  pillText: 'Choose Progression Point(s) to Track',
  className: '',
  children: null,
  icon: 'add'
};
Pill.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  pillText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string
};

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

var css$1 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.withConversion_conversion__2xDNH {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n\n  width: 192px;\n  height: 50px;\n\n  padding: 9px 12px;\n\n  -webkit-transition: -webkit-box-shadow 0.3s ease;\n\n  transition: -webkit-box-shadow 0.3s ease;\n\n  transition: box-shadow 0.3s ease;\n\n  transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;\n\n  border: 1px solid rgba(177, 186, 204, .4);\n  border-radius: 3px;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2);\n          box-shadow: 0 0 2px 0 rgba(0, 0, 0, .25), 0 1px 3px 0 rgba(0, 0, 0, .2);\n}\n\n.withConversion_iconWrapper__1Nfst {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 14%;\n          flex: 1 0 14%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  width: 24px;\n  height: 24px;\n\n  border-radius: 15px\n}\n\n.withConversion_iconWrapper__1Nfst > i {\n  font-size: 12px;\n}\n\n.withConversion_contentWrapper__10mIO {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n\n  letter-spacing: 0;\n\n  color: #797f89;\n\n  font-size: 13px;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 86%;\n          flex: 0 1 86%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n\n  width: 129;\n  min-width: 0;\n  height: 36px;\n\n  margin-left: 12px;\n\n  color: #4c515d\n}\n\n.withConversion_contentWrapper__10mIO.withConversion_noAnalytics__2bcLO {\n  height: auto;\n}\n\n.withConversion_pillHeadingWrapper__3z2vf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 100%;\n          flex: 1 0 100%;\n\n  max-width: 130px;\n}\n\n.withConversion_pillHeading__2nlju {\n  overflow: hidden;\n\n  padding-right: 5px;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.withConversion_conversionPercent__ptq6H {\n  font-weight: 700;\n}\n\n.withConversion_convertedText__1xY2m {\n  color: #797f89;\n}\n\n.withConversion_conversionsOverflow__1XzUp {\n  font-family: 'Akkurat';\n  font-weight: 400;\n\n  -webkit-box-flex: 0;\n\n      -ms-flex: 0 0 18px;\n\n          flex: 0 0 18px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  min-width: 20px;\n  padding: 0 5px;\n\n  color: #4c515d;\n  border-left: 1px solid #4c515d;\n}\n";
var styles$1 = {"conversion":"withConversion_conversion__2xDNH","iconWrapper":"withConversion_iconWrapper__1Nfst","contentWrapper":"withConversion_contentWrapper__10mIO","noAnalytics":"withConversion_noAnalytics__2bcLO","pillHeadingWrapper":"withConversion_pillHeadingWrapper__3z2vf","pillHeading":"withConversion_pillHeading__2nlju","conversionPercent":"withConversion_conversionPercent__ptq6H","convertedText":"withConversion_convertedText__1xY2m","conversionsOverflow":"withConversion_conversionsOverflow__1XzUp"};
styleInject(css$1);

var ConversionIcon = function ConversionIcon(_ref) {
  var className = _ref.className,
      icon = _ref.icon;
  return React.createElement("i", {
    className: classNames('lp-icon', className)
  }, icon);
};

var ConversionIconWrapper = function ConversionIconWrapper(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return React.createElement("span", {
    className: classNames(styles$1.iconWrapper, className)
  }, children);
};

var IconWrapperWithColor = withColor(ConversionIconWrapper);
var IconWithColor = withColor(ConversionIcon);

var withConversion = function withConversion(PillWrapper) {
  return function (_ref3) {
    var _ref3$data = _ref3.data,
        data = _ref3$data === void 0 ? [] : _ref3$data,
        _ref3$iconWrapperColo = _ref3.iconWrapperColor,
        iconWrapperColor = _ref3$iconWrapperColo === void 0 ? 'greyLighter' : _ref3$iconWrapperColo,
        _ref3$iconColor = _ref3.iconColor,
        iconColor = _ref3$iconColor === void 0 ? 'greyDarker' : _ref3$iconColor,
        _ref3$icon = _ref3.icon,
        icon = _ref3$icon === void 0 ? 'add' : _ref3$icon,
        _ref3$subContent = _ref3.subContent,
        subContent = _ref3$subContent === void 0 ? 'Progressed' : _ref3$subContent,
        rest = objectWithoutProperties(_ref3, ["data", "iconWrapperColor", "iconColor", "icon", "subContent"]);

    var firstConversion = data[0] || {
      text: null,
      conversion: null
    };
    var hideAnalytics = firstConversion.conversion === null;
    return React.createElement(PillWrapper, _extends_1({
      className: classNames(styles$1.conversion),
      data: data
    }, rest), React.createElement(IconWrapperWithColor, {
      backgroundColor: iconWrapperColor,
      className: styles$1.iconWrapper
    }, React.createElement(IconWithColor, {
      color: iconColor,
      icon: icon
    })), React.createElement("div", {
      className: classNames(styles$1.contentWrapper, defineProperty({}, "".concat(styles$1.noAnalytics), hideAnalytics))
    }, React.createElement("div", {
      className: styles$1.pillHeadingWrapper
    }, React.createElement("span", {
      className: styles$1.pillHeading
    }, firstConversion.text), data.length > 1 && React.createElement("span", {
      className: styles$1.conversionsOverflow
    }, "+", data.length - 1)), !hideAnalytics && React.createElement("div", null, React.createElement("span", {
      className: styles$1.conversionPercent
    }, firstConversion.conversion, "% \xA0"), React.createElement("span", {
      className: styles$1.convertedText
    }, subContent))));
  };
};

var css$2 = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.withSplitTest_splitTest__tF3TY {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  height: 38px;\n  padding: 0 0 0 9px;\n\n  border: 1px solid rgba(177, 186, 204, .4);\n  border-radius: 3px;\n\n  background-color: #ffffff;\n}\n\n.withSplitTest_conversionWrapper__1FwLo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  padding-right: 9px\n}\n\n.withSplitTest_conversionWrapper__1FwLo span {\n  margin-left: 1px;\n}\n\n.withSplitTest_splitSwatch__1_ltC {\n  font-size: 13px;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center\n}\n\n.withSplitTest_splitSwatch__1_ltC > span {\n  color: white;\n}\n\n.withSplitTest_splitSwatchOverflow__1TC2e {\n  font-family: 'Akkurat';\n  font-weight: 400;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 18px;\n          flex: 1 0 18px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  padding: 0 9px;\n\n  color: #4c515d;\n  border-left: 1px solid #4c515d;\n}\n";
var styles$2 = {"splitTest":"withSplitTest_splitTest__tF3TY","conversionWrapper":"withSplitTest_conversionWrapper__1FwLo","splitSwatch":"withSplitTest_splitSwatch__1_ltC","splitSwatchOverflow":"withSplitTest_splitSwatchOverflow__1TC2e"};
styleInject(css$2);

var LabelWithColor = withColor(Label);
/**
 * Takes a `Pill` component and composes it to
 * create a split test pill.
 *
 * @param  {Function} PillWrapper Pill React component
 * @return {Function}             "Partial application" to create withSplitTest component
 */

var withSplitTest = function withSplitTest(PillWrapper) {
  return (
    /**
     * PillWrapper Component
     * @param  {Array}  data                 sorted array of conversion points
     * @param  {Array}  backgroundColorArray sorted array of `Label` background-colors
     * @param  {Object} rest                 rest of the props from composed Pill
     * @return {Function}                    PillWrapper "Partial Application"
     */
    function (_ref) {
      var _ref$data = _ref.data,
          data = _ref$data === void 0 ? [] : _ref$data,
          _ref$backgroundColorA = _ref.backgroundColorArray,
          backgroundColorArray = _ref$backgroundColorA === void 0 ? ['green', 'yellow', 'purple'] : _ref$backgroundColorA,
          rest = objectWithoutProperties(_ref, ["data", "backgroundColorArray"]);

      return React.createElement(PillWrapper, _extends_1({
        className: classNames(styles$2.splitTest),
        data: data
      }, rest), data.map(function (conversion, index) {
        if (index < 3) {
          return React.createElement("div", {
            key: backgroundColorArray[index] + data,
            className: styles$2.conversionWrapper
          }, React.createElement(LabelWithColor, {
            className: styles$2.splitSwatch,
            backgroundColor: backgroundColorArray[index],
            iconText: index === 0 ? 'C' : "v".concat(index.toString())
          }, React.createElement("span", null, conversion * 100, "%")));
        }

        return null;
      }), data.length > 3 && React.createElement("div", {
        className: styles$2.splitSwatchOverflow
      }, "+", data.length - 3));
    }
  );
};

exports.Pill = Pill;
exports.withConversion = withConversion;
exports.withSplitTest = withSplitTest;
exports.default = Pill;

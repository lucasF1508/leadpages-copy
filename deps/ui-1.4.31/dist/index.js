'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var styles = require('@material-ui/core/styles');
var ClickAwayListener = _interopDefault(require('@material-ui/core/ClickAwayListener'));
var Fade = _interopDefault(require('@material-ui/core/Fade'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Popper = _interopDefault(require('@material-ui/core/Popper'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var MenuList = _interopDefault(require('@material-ui/core/MenuList'));
var ArrowRight = _interopDefault(require('@material-ui/icons/ArrowRight'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Box = _interopDefault(require('@material-ui/core/Box'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Link = _interopDefault(require('@material-ui/core/Link'));
var ArrowBack = _interopDefault(require('@material-ui/icons/ArrowBack'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var reactDom = require('react-dom');
var Button = _interopDefault(require('@material-ui/core/Button'));
var Collapse = _interopDefault(require('@material-ui/core/Collapse'));
var SvgIcon = _interopDefault(require('@material-ui/core/SvgIcon'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var CheckIcon = _interopDefault(require('@material-ui/icons/Check'));
var ButtonBase = _interopDefault(require('@material-ui/core/ButtonBase'));
var Accordion = _interopDefault(require('@material-ui/core/Accordion'));
var AccordionSummary = _interopDefault(require('@material-ui/core/AccordionSummary'));
var AccordionDetails = _interopDefault(require('@material-ui/core/AccordionDetails'));
var ExpandMore = _interopDefault(require('@material-ui/icons/ExpandMore'));
var HelpIcon = _interopDefault(require('@material-ui/icons/Help'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var DialogContentText = _interopDefault(require('@material-ui/core/DialogContentText'));
var DialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));
var Snackbar = _interopDefault(require('@material-ui/core/Snackbar'));
var SnackbarContent = _interopDefault(require('@material-ui/core/SnackbarContent'));
var CheckCircleOutlineIcon = _interopDefault(require('@material-ui/icons/CheckCircleOutline'));
var ErrorOutlineIcon = _interopDefault(require('@material-ui/icons/ErrorOutline'));
var WarningIcon = _interopDefault(require('@material-ui/icons/Warning'));
var InfoIcon = _interopDefault(require('@material-ui/icons/Info'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var Menu = _interopDefault(require('@material-ui/core/Menu'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var NativeSelect = _interopDefault(require('@material-ui/core/NativeSelect'));
var withStyles = _interopDefault(require('@material-ui/core/styles/withStyles'));
var RootRef = _interopDefault(require('@material-ui/core/RootRef'));
var CheckCircleIcon = _interopDefault(require('@material-ui/icons/CheckCircle'));
var CancelIcon = _interopDefault(require('@material-ui/icons/Cancel'));
var Table = _interopDefault(require('@material-ui/core/Table'));
var TableContainer = _interopDefault(require('@material-ui/core/TableContainer'));
var Breadcrumbs = _interopDefault(require('@material-ui/core/Breadcrumbs'));
var VisibilityIcon = _interopDefault(require('@material-ui/icons/Visibility'));
var VisibilityOffIcon = _interopDefault(require('@material-ui/icons/VisibilityOff'));
var Drawer = _interopDefault(require('@material-ui/core/Drawer'));
var makeStyles = _interopDefault(require('@material-ui/core/styles/makeStyles'));
var LinearProgress = _interopDefault(require('@material-ui/core/LinearProgress'));
var useTheme = _interopDefault(require('@material-ui/core/styles/useTheme'));
var ArrowForwardIosIcon = _interopDefault(require('@material-ui/icons/ArrowForwardIos'));
var Slide = _interopDefault(require('@material-ui/core/Slide'));
var CssBaseline = _interopDefault(require('@material-ui/core/CssBaseline'));

const useStyles = styles.makeStyles(({
  typography
}) => {
  return {
    h1: typography.valueSerif && typography.valueSerif.h1 || typography.h1,
    h2: typography.valueSerif && typography.valueSerif.h2 || typography.h2,
    h3: typography.valueSerif && typography.valueSerif.h3 || typography.h3,
    h4: typography.valueSerif && typography.valueSerif.h4 || typography.h4,
    h5: typography.valueSerif && typography.valueSerif.h5 || typography.h5
  };
}, {
  classNamePrefix: 'VSTypography'
});

const VSTypography = props => {
  const classes = useStyles();
  return /*#__PURE__*/React__default.createElement(Typography, Object.assign({
    classes: classes
  }, props));
};

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			if (!!mix.push) {
				for (k=0; k < mix.length; k++) {
					if (mix[k] && (y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			} else {
				for (k in mix) {
					if (mix[k] && (y = toVal(k))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else if (typeof mix !== 'boolean' && !mix.call) {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

function clsx () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x;
		}
	}
	return str;
}

var main = createCommonjsModule(function (module, exports) {
!function(d,u){module.exports=u();}("undefined"!=typeof self?self:"undefined"!=typeof commonjsGlobal?commonjsGlobal:commonjsGlobal,function(){return function(d){var u={};function f(c){if(u[c])return u[c].exports;var e=u[c]={i:c,l:!1,exports:{}};return d[c].call(e.exports,e,e.exports,f),e.l=!0,e.exports}return f.m=d,f.c=u,f.d=function(d,u,c){f.o(d,u)||Object.defineProperty(d,u,{enumerable:!0,get:c});},f.r=function(d){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0});},f.t=function(d,u){if(1&u&&(d=f(d)),8&u)return d;if(4&u&&"object"==typeof d&&d&&d.__esModule)return d;var c=Object.create(null);if(f.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:d}),2&u&&"string"!=typeof d)for(var e in d)f.d(c,e,function(u){return d[u]}.bind(null,e));return c},f.n=function(d){var u=d&&d.__esModule?function(){return d.default}:function(){return d};return f.d(u,"a",u),u},f.o=function(d,u){return Object.prototype.hasOwnProperty.call(d,u)},f.p="",f(f.s=0)}([function(d,u,f){f.r(u);var c="[".concat("[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|(?:\ud800(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf])|(?:\ud801(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67])|(?:\ud802(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91])|(?:\ud803(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45\udfe0-\udff6])|(?:\ud804(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61])|(?:\ud805(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc34\udc47-\udc4a\udc5f\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udeb8\udf00-\udf1a])|(?:\ud806(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc2b\udca0-\udcdf\udcff\udda0-\udda7\uddaa-\uddd0\udde1\udde3\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude89\ude9d\udec0-\udef8])|(?:\ud807(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2])|(?:\ud808(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udf99])|(?:\ud809(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc80-\udd43])|(?:[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879](?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udfff])|(?:\ud80d(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc2e])|(?:\ud811(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\ude46])|(?:\ud81a(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f])|(?:\ud81b(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\ude40-\ude7f\udf00-\udf4a\udf50\udf93-\udf9f\udfe0\udfe1\udfe3])|(?:\ud821(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udff7])|(?:\ud822(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udef2])|(?:\ud82c(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udd1e\udd50-\udd52\udd64-\udd67\udd70-\udefb])|(?:\ud82f(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99])|(?:\ud835(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb])|(?:\ud838(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udd00-\udd2c\udd37-\udd3d\udd4e\udec0-\udeeb])|(?:\ud83a(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udcc4\udd00-\udd43\udd4b])|(?:\ud83b(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb])|(?:\ud869(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\uded6\udf00-\udfff])|(?:\ud86d(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udf34\udf40-\udfff])|(?:\ud86e(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc1d\udc20-\udfff])|(?:\ud873(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udea1\udeb0-\udfff])|(?:\ud87a(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udfe0])|(?:\ud87e(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\ude1d])+","|").concat("[0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９]|(?:\ud800(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5])|(?:\ud801(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udca0-\udca9])|(?:\ud802(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf])|(?:\ud803(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54])|(?:\ud804(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9])|(?:\ud805(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b])|(?:\ud806(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udce0-\udcf2])|(?:\ud807(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc50-\udc6c\udd50-\udd59\udda0-\udda9\udfc0-\udfd4])|(?:\ud809(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc00-\udc6e])|(?:\ud81a(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\ude60-\ude69\udf50-\udf59\udf5b-\udf61])|(?:\ud81b(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\ude80-\ude96])|(?:\ud834(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udee0-\udef3\udf60-\udf78])|(?:\ud835(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udfce-\udfff])|(?:\ud838(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udd40-\udd49\udef0-\udef9])|(?:\ud83a(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udcc7-\udccf\udd50-\udd59])|(?:\ud83b(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4\udd01-\udd2d\udd2f-\udd3d])|(?:\ud83c(?![\udc00-\udfff]))(?:(?:[^\ud800-\udbff]|^)[\udd00-\udd0c])","]"),e="_~".concat("-"),b=new RegExp("(".concat(c,"|[").concat(e,"])+"),"g"),a=new RegExp("".concat("-","{2,}"),"g"),t=new RegExp("^[".concat(e,"]|[").concat(e,"]+$"),"g"),n=function(d){var u=d.normalize("NFKC").toLowerCase().replace(/\s+/g,"-").match(b);return null===u?"":u.join("").replace(a,"-").replace(t,"")};u.default=n;}])});
});

var slugify = /*@__PURE__*/unwrapExports(main);

const useStyles$1 = styles.makeStyles(({
  spacing
}) => ({
  menu: {
    outline: 0
  },
  submenu: {
    outline: 0
  },
  menuItem: {
    paddingLeft: 24,
    paddingRight: 24
  },
  menuItemWithSubmenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'visible',
    paddingRight: 15
  },
  menuItemWithSubmenuLabel: {
    paddingRight: 13
  }
}), {
  classNamePrefix: 'FlyoutMenu'
});

var _ref2 = /*#__PURE__*/React__default.createElement(ArrowRight, null);

function FlyoutMenu(_ref) {
  let {
    placement,
    modifiers,
    menuItems,
    SubmenuProps,
    onClickAway
  } = _ref,
      other = objectWithoutPropertiesLoose(_ref, ["placement", "modifiers", "menuItems", "SubmenuProps", "onClickAway"]);

  const classes = useStyles$1();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [submenuOpen, setSubmenuOpen] = React.useState(null);

  function handleSubmenuClose() {
    setSubmenuOpen(null);
  }

  function handleSubmenu(event, menuId) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSubmenuOpen(menuId);
  }

  return /*#__PURE__*/React__default.createElement(Popper, Object.assign({
    placement: placement,
    modifiers: modifiers,
    role: undefined,
    transition: true
  }, other), ({
    TransitionProps
  }) => /*#__PURE__*/React__default.createElement(Fade, TransitionProps, /*#__PURE__*/React__default.createElement(Paper, {
    elevation: 4
  }, /*#__PURE__*/React__default.createElement(ClickAwayListener, {
    onClickAway: onClickAway
  }, /*#__PURE__*/React__default.createElement(MenuList, {
    className: classes.menu
  }, menuItems.map(item => {
    const key = slugify(item.label);
    const hasSubmenu = !!item.menuItems;
    const submenuId = hasSubmenu ? `${key}-submenu` : null;
    const onClick = hasSubmenu ? event => handleSubmenu(event, submenuId) : item.onClick;
    const onMouseEnter = hasSubmenu ? event => handleSubmenu(event, submenuId) : handleSubmenuClose;
    return !item.hidden && /*#__PURE__*/React__default.createElement(MenuItem, {
      key: key,
      className: clsx(classes.menuItem, hasSubmenu && classes.menuItemWithSubmenu),
      disabled: item.disabled,
      "aria-controls": submenuOpen === submenuId ? submenuId : undefined,
      "aria-haspopup": hasSubmenu ? 'true' : undefined,
      "data-qa-selector": item.qaSelector,
      onClick: onClick,
      onMouseEnter: onMouseEnter
    }, /*#__PURE__*/React__default.createElement("span", {
      className: clsx(hasSubmenu && classes.menuItemWithSubmenuLabel)
    }, item.label), hasSubmenu && _ref2, hasSubmenu && /*#__PURE__*/React__default.createElement(Popper, Object.assign({
      open: submenuOpen === submenuId,
      anchorEl: anchorEl,
      role: undefined,
      transition: true,
      disablePortal: true
    }, SubmenuProps), ({
      TransitionProps
    }) => /*#__PURE__*/React__default.createElement(Fade, TransitionProps, /*#__PURE__*/React__default.createElement(Paper, {
      elevation: 4
    }, /*#__PURE__*/React__default.createElement(MenuList, {
      id: submenuId,
      className: classes.submenu
    }, item.menuItems.map(subitem => !subitem.hidden && /*#__PURE__*/React__default.createElement(MenuItem, {
      className: classes.menuItem,
      onClick: subitem.onClick,
      disabled: subitem.disabled,
      key: `${key}-${slugify(subitem.label)}`,
      "data-qa-selector": subitem.qaSelector
    }, subitem.label)))))));
  }))))));
} // See Material UI Popper component API for all possible props and SubmenuProps.
// https://material-ui.com/api/popper/

process.env.NODE_ENV !== "production" ? FlyoutMenu.propTypes = {
  placement: propTypes.string,
  modifiers: propTypes.shape({}),
  menuItems: propTypes.arrayOf(propTypes.shape({
    label: propTypes.string.isRequired,
    menuItems: propTypes.arrayOf(propTypes.shape({})),
    qaSelector: propTypes.string,
    disabled: propTypes.bool,
    hidden: propTypes.bool,
    onClick: propTypes.func
  })).isRequired,
  SubmenuProps: propTypes.object,
  onClickAway: propTypes.func.isRequired
} : void 0;
FlyoutMenu.defaultProps = {
  placement: 'bottom-start',
  modifiers: {
    offset: {
      enabled: true,
      offset: '0, 8'
    }
  },
  SubmenuProps: {
    placement: 'right-start',
    modifiers: {
      offset: {
        enabled: true,
        offset: '-8, 0'
      }
    }
  }
};

const useStyles$2 = styles.makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  shield: ({
    intensity,
    whiteWash
  }) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: whiteWash ? theme.palette.common.white : theme.palette.grey[100],
    opacity: intensity / 100,
    cursor: 'not-allowed'
  })
}));

function ClickShield(_ref) {
  let {
    isActive,
    intensity,
    whiteWash,
    children
  } = _ref,
      rest = objectWithoutPropertiesLoose(_ref, ["isActive", "intensity", "whiteWash", "children"]);

  const classes = useStyles$2({
    intensity,
    whiteWash
  });
  const child = React__default.Children.only(children);

  const _child$props = child.props,
        {
    children: childChildren,
    className: childClassName
  } = _child$props,
        childProps = objectWithoutPropertiesLoose(_child$props, ["children", "className"]);

  const newChildClassName = clsx(classes.root, childClassName);
  const shield = isActive ? /*#__PURE__*/React__default.createElement("div", {
    className: classes.shield,
    "data-qa-selector": "click-shield"
  }) : null;
  const newProps = childProps ? childProps : [];
  const newGrandChildren = childChildren ? React__default.Children.toArray(childChildren) : [];
  const Child = child.type;
  return /*#__PURE__*/React__default.createElement(Child, Object.assign({}, newProps, {
    className: newChildClassName
  }), shield, newGrandChildren);
}

process.env.NODE_ENV !== "production" ? ClickShield.propTypes = {
  isActive: propTypes.bool.isRequired,
  whiteWash: propTypes.bool,
  intensity: propTypes.number,
  children: propTypes.node.isRequired
} : void 0;
ClickShield.defaultProps = {
  whiteWash: false,
  intensity: 10
};

var tinycolor = createCommonjsModule(function (module) {
// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else {
    window.tinycolor = tinycolor;
}

})(Math);
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;

var each = forEach_1;

var color = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.red = exports.getContrastingColor = exports.isValidHex = exports.toState = exports.simpleCheckForValidColor = undefined;



var _each2 = _interopRequireDefault(each);



var _tinycolor2 = _interopRequireDefault(tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simpleCheckForValidColor = exports.simpleCheckForValidColor = function simpleCheckForValidColor(data) {
  var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  var checked = 0;
  var passed = 0;
  (0, _each2.default)(keysToCheck, function (letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === 's' || letter === 'l') {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};

var toState = exports.toState = function toState(data, oldHue) {
  var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === '000000' && rgb.a === 0;

  return {
    hsl: hsl,
    hex: transparent ? 'transparent' : '#' + hex,
    rgb: rgb,
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};

var isValidHex = exports.isValidHex = function isValidHex(hex) {
  // disable hex4 and hex8
  var lh = String(hex).charAt(0) === '#' ? 1 : 0;
  return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor2.default)(hex).isValid();
};

var getContrastingColor = exports.getContrastingColor = function getContrastingColor(data) {
  if (!data) {
    return '#fff';
  }
  var col = toState(data);
  if (col.hex === 'transparent') {
    return 'rgba(0,0,0,0.4)';
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};

var red = exports.red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

exports.default = exports;
});

var colorHelpers = /*@__PURE__*/unwrapExports(color);

var ColorWrap_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _debounce2 = _interopRequireDefault(debounce_1);



var _color2 = _interopRequireDefault(color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.handleSwatchHover = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };

      _this.state = _extends({}, _color2.default.toState(props.color, 0));

      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'render',
      value: function render() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }

        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends({}, _color2.default.toState(nextProps.color, state.oldHue));
      }
    }]);

    return ColorPicker;
  }(React__default.PureComponent || React__default.Component);

  ColorPicker.propTypes = _extends({}, Picker.propTypes);

  ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  });

  return ColorPicker;
};

exports.default = ColorWrap;
});

var Custom = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _ColorWrap2 = _interopRequireDefault(ColorWrap_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ColorWrap2.default;
});

var ColorWrap = /*@__PURE__*/unwrapExports(Custom);

// This component uses these color constants instead of the theme colors because
// the color palette does not match up with any of the colors in the current Product,
// or Marketing theme providers.
const navy = '#00044c';
const blue = '#0055cc';
const lightGray = '#B1BACC';
const lightGray25 = 'rgba(177,186,204,0.25)';
const black08 = 'rgba(0,0,0,.08)';
const black15 = 'rgba(0,0,0,0.15)';
const black50 = 'rgba(0, 0, 0, 0.50)';
const white15 = 'rgba(255,255,255,0.15)';
const white = '#FFFFFF';
const blueLightAlt = '#A4C8FD';
const blueLightAltHover = '#D1E3FE';
const blueLight = '#4692FF';
const blueDark = '#474C80';
var colors = {
  backgroundColor: navy,
  borderColor: blueDark,
  checkboardGray: black08,
  inputBackgroundColor: lightGray25,
  iconButtonColor: lightGray,
  labelColor: lightGray,
  linkColor: blueLightAlt,
  linkHoverColor: blueLightAltHover,
  scrollBarColor: blue,
  swatchSelectedColor: blueLight,
  shadow: black15,
  shadowDark: black50,
  shadowLight: white15,
  white
};

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

const useStyles$3 = styles.makeStyles(({
  typography
}) => ({
  button: {
    color: colors.linkColor,
    '&:hover': {
      color: colors.linkHoverColor
    },
    fontSize: 15,
    fontWeight: typography.fontWeightBold
  },
  label: {
    color: colors.labelColor,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    fontSize: 17,
    fontWeight: typography.fontWeightRegular
  }
}), {
  classNamePrefix: 'ColorPickerLabel'
});

const ColorPickerLabel = (_ref) => {
  let {
    text,
    labelAction,
    labelActionQaSelector,
    labelActionText,
    variant,
    className
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["text", "labelAction", "labelActionQaSelector", "labelActionText", "variant", "className"]);

  const classes = useStyles$3();
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Typography, Object.assign({
    align: "left",
    variant: variant,
    className: `${className} ${classes.label}`
  }, props), text), labelAction && labelActionText && /*#__PURE__*/React__default.createElement(Link, {
    component: "button",
    onClick: labelAction,
    className: classes.button,
    underline: "none",
    "data-qa-selector": labelActionQaSelector
  }, labelActionText));
};

process.env.NODE_ENV !== "production" ? ColorPickerLabel.propTypes = {
  text: propTypes.string.isRequired,
  labelAction: propTypes.func,
  labelActionQaSelector: propTypes.string,
  labelActionText: propTypes.string,
  variant: propTypes.string
} : void 0;
ColorPickerLabel.defaultProps = {
  labelAction: null,
  labelActionQaSelector: null,
  labelActionText: null,
  variant: 'h4'
};

const useStyles$4 = styles.makeStyles({
  input: {
    backgroundColor: colors.inputBackgroundColor,
    borderRadius: 4,
    height: 48,
    color: colors.white,
    '& input': {
      padding: '10px 12px 7px',
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: '0'
      }
    },
    '& fieldset': {
      transition: 'none'
    }
  },
  fieldLabel: {
    fontSize: 15,
    color: colors.labelColor
  }
}, {
  classNamePrefix: 'ColorPickerSketchFields'
});
const BLUR_EVENT_TYPE = 'blur';
const INPUT_TAG = 'input';

const checkIsBlurEvent = e => e.type === BLUR_EVENT_TYPE && !(e.relatedTarget && e.relatedTarget.tagName.toLowerCase() === INPUT_TAG);

const SketchFields = ({
  inputBehavior = INPUT_BEHAVIOR.CHANGE,
  selectedColor,
  opacity,
  onChange
}) => {
  const [currentColor, setCurrentColor] = React.useState(selectedColor);
  const [isColorFocused, setIsColorFocused] = React.useState(false);
  const [currentOpacity, setCurrentOpacity] = React.useState(opacity);
  const setColorFocused = React.useCallback(() => {
    setIsColorFocused(true);
  }, []);
  React.useEffect(() => {
    if (!isColorFocused) {
      setCurrentColor(selectedColor);
    }

    setCurrentOpacity(opacity);
  }, [selectedColor, opacity, isColorFocused]);
  const isBlurOnly = inputBehavior === INPUT_BEHAVIOR.BLUR_ONLY;
  const isChange = inputBehavior === INPUT_BEHAVIOR.CHANGE;

  const handleColorChange = e => {
    if (e && e.preventDefault) e.preventDefault();
    const {
      value
    } = e.target;
    setCurrentColor(value);

    if (isBlurOnly && !checkIsBlurEvent(e)) {
      return;
    } else if (isChange && e.type === BLUR_EVENT_TYPE) {
      // branch exists to preserve behavior that the color picker canvas
      // gets updated when valid colors are entered, without clobbering input field.
      setIsColorFocused(false);
    }

    const color = tinycolor(value);

    if (color.isValid()) {
      // special reformatting for typing in things like "red" or "fff"
      const hex = color.toHex().toUpperCase();

      if (isBlurOnly && hex !== value || isChange && e.type === BLUR_EVENT_TYPE) {
        setCurrentColor(hex);
      }

      color.setAlpha(currentOpacity / 100);
      return onChange(_extends_1({}, color.toRgb(), {
        source: 'rgb'
      }));
    }
  };

  const handleOpacityChange = e => {
    const {
      value
    } = e.target;
    const newOpacity = Math.min(parseInt(value, 10), 100);
    setCurrentOpacity(newOpacity);

    if (inputBehavior === INPUT_BEHAVIOR.BLUR_ONLY && !checkIsBlurEvent(e)) {
      return;
    }

    const color = tinycolor(currentColor);

    if (color.isValid() && newOpacity !== '') {
      color.setAlpha(newOpacity / 100);
      return onChange(_extends_1({}, color.toRgb(), {
        source: 'rgb'
      }));
    }
  };

  const classes = useStyles$4();
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Box, {
    mt: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 3,
    alignItems: "center"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 5
  }, /*#__PURE__*/React__default.createElement(ColorPickerLabel, {
    className: classes.fieldLabel,
    variant: "body1",
    text: "Color Code",
    id: "custom-color-text-field-label"
  })), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 7
  }, /*#__PURE__*/React__default.createElement(TextField, {
    margin: "none",
    variant: "outlined",
    inputProps: {
      'aria-labelledby': 'custom-color-text-field-label'
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    InputProps: {
      className: classes.input
    },
    value: currentColor && currentColor.replace('#', ''),
    onChange: handleColorChange,
    onBlur: handleColorChange,
    onFocus: setColorFocused
  })))), /*#__PURE__*/React__default.createElement(Box, {
    mt: 0.5
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 3,
    alignItems: "center"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 5
  }, /*#__PURE__*/React__default.createElement(ColorPickerLabel, {
    className: classes.fieldLabel,
    variant: "body1",
    text: "Opacity",
    id: "custom-opacity-text-field-label"
  })), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 7
  }, /*#__PURE__*/React__default.createElement(TextField, {
    fullWidth: true,
    margin: "none",
    variant: "outlined",
    type: "number",
    inputProps: {
      'aria-labelledby': 'custom-opacity-text-field-label',
      min: 0,
      max: 100
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    InputProps: {
      className: classes.input
    },
    value: currentOpacity,
    onChange: handleOpacityChange,
    onBlur: handleOpacityChange
  })))));
}; // Needed in builder because ProseMirror refocuses its highlighted content on change,
// messing up the input fields.


const INPUT_BEHAVIOR = {
  CHANGE: 'CHANGE',
  BLUR_ONLY: 'BLUR_ONLY'
};
process.env.NODE_ENV !== "production" ? SketchFields.propTypes = {
  selectedColor: propTypes.string.isRequired,
  opacity: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onChange: propTypes.func.isRequired,
  inputBehavior: propTypes.oneOf([INPUT_BEHAVIOR.CHANGE, INPUT_BEHAVIOR.BLUR_ONLY])
} : void 0;
SketchFields.defaultProps = {
  inputBehavior: INPUT_BEHAVIOR.CHANGE
};

/** `Object#toString` result references. */
var stringTag$1 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$1);
}

var isString_1 = isString;

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && _baseForOwn(object, _castFunction(iteratee));
}

var forOwn_1 = forOwn;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** `Object#toString` result references. */
var objectTag$1 = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$6 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$2.call(hasOwnProperty$6).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$8.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$2:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$9.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;

  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$a.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$a.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}

var map_1 = map;

var flattenNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenNames = undefined;



var _isString3 = _interopRequireDefault(isString_1);



var _forOwn3 = _interopRequireDefault(forOwn_1);



var _isPlainObject3 = _interopRequireDefault(isPlainObject_1);



var _map3 = _interopRequireDefault(map_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flattenNames = exports.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var names = [];

  (0, _map3.default)(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3.default)(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });

  return names;
};

exports.default = flattenNames;
});

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$d.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$b.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$e.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$c.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$f.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$d.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$3 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$3 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return _cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return _cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$3:
      return new Ctor;

    case numberTag$2:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$2:
      return _cloneRegExp(object);

    case setTag$3:
      return new Ctor;

    case symbolTag$2:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var mapTag$4 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$4;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

var isMap_1 = isMap;

/** `Object#toString` result references. */
var setTag$4 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$4;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$5 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$4 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$5 = '[object Set]',
    stringTag$4 = '[object String]',
    symbolTag$3 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] =
cloneableTags[boolTag$3] = cloneableTags[dateTag$3] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$5] =
cloneableTags[numberTag$3] = cloneableTags[objectTag$4] =
cloneableTags[regexpTag$3] = cloneableTags[setTag$5] =
cloneableTags[stringTag$4] = cloneableTags[symbolTag$3] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}

var cloneDeep_1 = cloneDeep;

var mergeClasses_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClasses = undefined;



var _forOwn3 = _interopRequireDefault(forOwn_1);



var _cloneDeep3 = _interopRequireDefault(cloneDeep_1);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeClasses = exports.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3.default)(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = _extends({}, styles[key], toMerge[key]);
      });
    }

    return name;
  });
  return styles;
};

exports.default = mergeClasses;
});

var autoprefix_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoprefix = undefined;



var _forOwn3 = _interopRequireDefault(forOwn_1);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },

  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },

  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },

  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};

var autoprefix = exports.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};

exports.default = autoprefix;
});

var hover_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hover = exports.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Hover, _React$Component);

    function Hover() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Hover);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function () {
        return _this.setState({ hover: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Hover;
  }(_react2.default.Component);
};

exports.default = hover;
});

var active_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.active = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var active = exports.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Active, _React$Component);

    function Active() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Active);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function () {
        return _this.setState({ active: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Active;
  }(_react2.default.Component);
};

exports.default = active;
});

var loop = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    props[name] = value;
  };

  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);

  return props;
};

exports.default = loopable;
});

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;



var _flattenNames2 = _interopRequireDefault(flattenNames_1);



var _mergeClasses2 = _interopRequireDefault(mergeClasses_1);



var _autoprefix2 = _interopRequireDefault(autoprefix_1);



var _hover3 = _interopRequireDefault(hover_1);



var _active2 = _interopRequireDefault(active_1);



var _loop3 = _interopRequireDefault(loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }

  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};

exports.default = ReactCSS;
});

var alpha = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateChange = exports.calculateChange = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
};
});

var checkboard = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkboardCache = {};

var render = exports.render = function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};

var get = exports.get = function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }

  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};
});

var checkboard$1 = /*@__PURE__*/unwrapExports(checkboard);

var Checkboard_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default);



var _reactcss2 = _interopRequireDefault(lib);



var checkboard$1 = _interopRequireWildcard(checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow,
      children = _ref.children;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard$1.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });
  return (0, React__default.isValidElement)(children) ? _react2.default.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

exports.default = Checkboard;
});

var Alpha_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alpha = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _reactcss2 = _interopRequireDefault(lib);



var alpha$1 = _interopRequireWildcard(alpha);



var _Checkboard2 = _interopRequireDefault(Checkboard_1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = alpha$1.calculateChange(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rgb = this.props.rgb;
      var styles = (0, _reactcss2.default)({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden',
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return _react2.default.createElement(
        'div',
        { style: styles.alpha },
        _react2.default.createElement(
          'div',
          { style: styles.checkboard },
          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
        ),
        _react2.default.createElement('div', { style: styles.gradient }),
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(React__default.PureComponent || React__default.Component);

exports.default = Alpha;
});

var EditableInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _reactcss2 = _interopRequireDefault(lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_ARROW_OFFSET = 1;

var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue(value) {
  return Number(String(value).replace(/%/g, ''));
};

var EditableInput = exports.EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      _this.setUpdatedValue(e.target.value, e);
    };

    _this.handleKeyDown = function (e) {
      // In case `e.target.value` is a percentage remove the `%` character
      // and update accordingly with a percentage
      // https://github.com/casesandberg/react-color/issues/383
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;

        _this.setUpdatedValue(updatedValue, e);
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({ blurValue: String(this.props.value).toUpperCase() });
        } else {
          this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'getValueObjectWithLabel',
    value: function getValueObjectWithLabel(value) {
      return _defineProperty({}, this.props.label, value);
    }
  }, {
    key: 'getArrowOffset',
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: 'setUpdatedValue',
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);

      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('input', {
          style: styles.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: 'false'
        }),
        this.props.label && !this.props.hideLabel ? _react2.default.createElement(
          'span',
          { style: styles.label, onMouseDown: this.handleMouseDown },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(React__default.PureComponent || React__default.Component);

exports.default = EditableInput;
});

var hue = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateChange = exports.calculateChange = function calculateChange(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (hsl.h !== h) {
      return {
        h: h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  }
  return null;
};
});

var Hue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _reactcss2 = _interopRequireDefault(lib);



var hue$1 = _interopRequireWildcard(hue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = hue$1.calculateChange(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$direction = this.props.direction,
          direction = _props$direction === undefined ? 'horizontal' : _props$direction;


      var styles = (0, _reactcss2.default)({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: '0 2px',
            position: 'relative',
            height: '100%',
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: direction === 'vertical' });

      return _react2.default.createElement(
        'div',
        { style: styles.hue },
        _react2.default.createElement(
          'div',
          {
            className: 'hue-' + direction,
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'style',
            null,
            '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
          ),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(React__default.PureComponent || React__default.Component);

exports.default = Hue;
});

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (isObject_1(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

var Raised_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raised = undefined;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _reactcss2 = _interopRequireDefault(lib);



var _merge2 = _interopRequireDefault(merge_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Raised = exports.Raised = function Raised(_ref) {
  var zDepth = _ref.zDepth,
      radius = _ref.radius,
      background = _ref.background,
      children = _ref.children,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      wrap: {
        position: 'relative',
        display: 'inline-block'
      },
      content: {
        position: 'relative'
      },
      bg: {
        absolute: '0px 0px 0px 0px',
        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',
        borderRadius: radius,
        background: background
      }
    },
    'zDepth-0': {
      bg: {
        boxShadow: 'none'
      }
    },

    'zDepth-1': {
      bg: {
        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
      }
    },
    'zDepth-2': {
      bg: {
        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
      }
    },
    'zDepth-3': {
      bg: {
        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
      }
    },
    'zDepth-4': {
      bg: {
        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
      }
    },
    'zDepth-5': {
      bg: {
        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
      }
    },
    'square': {
      bg: {
        borderRadius: '0'
      }
    },
    'circle': {
      bg: {
        borderRadius: '50%'
      }
    }
  }, passedStyles), { 'zDepth-1': zDepth === 1 });

  return _react2.default.createElement(
    'div',
    { style: styles.wrap },
    _react2.default.createElement('div', { style: styles.bg }),
    _react2.default.createElement(
      'div',
      { style: styles.content },
      children
    )
  );
};

Raised.propTypes = {
  background: _propTypes2.default.string,
  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),
  radius: _propTypes2.default.number,
  styles: _propTypes2.default.object
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: 1,
  radius: 2,
  styles: {}
};

exports.default = Raised;
});

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var saturation = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calculateChange = exports.calculateChange = function calculateChange(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(),
      containerWidth = _container$getBoundin.width,
      containerHeight = _container$getBoundin.height;

  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }

  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;

  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: 'hsv'
  };
};
});

var Saturation_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _reactcss2 = _interopRequireDefault(lib);



var _throttle2 = _interopRequireDefault(throttle_1);



var saturation$1 = _interopRequireWildcard(saturation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e) {
      typeof _this.props.onChange === 'function' && _this.throttle(_this.props.onChange, saturation$1.calculateChange(e, _this.props.hsl, _this.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          black: {
            absolute: '0px 0px 0px 0px',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return _react2.default.createElement(
        'div',
        {
          style: styles.color,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        _react2.default.createElement(
          'style',
          null,
          '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
        ),
        _react2.default.createElement(
          'div',
          { style: styles.white, className: 'saturation-white' },
          _react2.default.createElement('div', { style: styles.black, className: 'saturation-black' }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(React__default.PureComponent || React__default.Component);

exports.default = Saturation;
});

var interaction = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-invalid-this */


var handleFocus = exports.handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits(Focus, _React$Component);

    function Focus() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Focus);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function () {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Focus, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Span,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          _react2.default.createElement(Component, _extends({}, this.props, this.state))
        );
      }
    }]);

    return Focus;
  }(_react2.default.Component);
};
});

var Swatch_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default);



var _reactcss2 = _interopRequireDefault(lib);





var _Checkboard2 = _interopRequireDefault(Checkboard_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER = 13;

var Swatch = exports.Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onHover = _ref.onHover,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title,
      children = _ref.children,
      focus = _ref.focus,
      _ref$focusStyle = _ref.focusStyle,
      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;

  var transparent = color === 'transparent';
  var styles = (0, _reactcss2.default)({
    default: {
      swatch: _extends({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };

  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }

  return _react2.default.createElement(
    'div',
    _extends({
      style: styles.swatch,
      onClick: handleClick,
      title: title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    }, optionalEvents),
    children,
    transparent && _react2.default.createElement(_Checkboard2.default, {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    })
  );
};

exports.default = (0, interaction.handleFocus)(Swatch);
});

var common = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'Alpha', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Alpha_1).default;
  }
});



Object.defineProperty(exports, 'Checkboard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Checkboard_1).default;
  }
});



Object.defineProperty(exports, 'EditableInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(EditableInput_1).default;
  }
});



Object.defineProperty(exports, 'Hue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Hue_1).default;
  }
});



Object.defineProperty(exports, 'Raised', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Raised_1).default;
  }
});



Object.defineProperty(exports, 'Saturation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Saturation_1).default;
  }
});



Object.defineProperty(exports, 'ColorWrap', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(ColorWrap_1).default;
  }
});



Object.defineProperty(exports, 'Swatch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Swatch_1).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var index = /*@__PURE__*/unwrapExports(common);

function getColorSwatchTitle(colorObj) {
  let colorSwatchTitle = colorObj.toHexString().toUpperCase();

  if (colorObj.getAlpha() < 1) {
    colorSwatchTitle = `${colorSwatchTitle} | ${parseFloat(colorObj.getAlpha()) * 100}% opacity`;
  }

  return colorSwatchTitle;
}
const useStyles$5 = styles.makeStyles({
  swatchWrap: props => ({
    background: `url(${checkboard$1.get(colors.white, colors.checkboardGray, 8)}) center left`,
    border: `3px solid ${props.isSelected ? colors.swatchSelectedColor : colors.backgroundColor}`,
    borderRadius: 6,
    boxSizing: 'content-box',
    height: 36,
    overflow: 'hidden',
    position: 'relative',
    width: 36,
    '&::after': {
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 3,
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      pointerEvents: 'none'
    }
  })
}, {
  classNamePrefix: 'ColorPickerSwatch'
});

const ColorPickerSwatch = ({
  color,
  onClick,
  onSwatchHover,
  isSelected,
  className
}) => {
  const colorObj = tinycolor(color);
  const classes = useStyles$5({
    isSelected
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: `${classes.swatchWrap} ${className}`
  }, /*#__PURE__*/React__default.createElement(index.Swatch, {
    color: color,
    title: getColorSwatchTitle(colorObj),
    onClick: onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: `inset 0 0 0 1px ${colors.shadow}, 0 0 4px ${color}`
    }
  }));
};
process.env.NODE_ENV !== "production" ? ColorPickerSwatch.propTypes = {
  className: propTypes.string,
  color: propTypes.string.isRequired,
  onClick: propTypes.func,
  onSwatchHover: propTypes.func,
  isSelected: propTypes.bool
} : void 0;
ColorPickerSwatch.defaultProps = {
  className: null,
  isSelected: false,
  onClick: () => {},
  onSwatchHover: null
};

const useStyles$6 = styles.makeStyles({
  label: {
    padding: '0 3px'
  }
}, {
  classNamePrefix: 'ColorPickerSketchPresetColors'
});
const SketchPresetColors = ({
  colors,
  label,
  onClick,
  labelAction,
  labelActionQaSelector,
  labelActionText,
  onSwatchHover,
  selectedColor
}) => {
  const classes = useStyles$6();
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Box, {
    mb: 0.25,
    mt: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "space-between",
    alignItems: "baseline",
    className: classes.label
  }, label && /*#__PURE__*/React__default.createElement(ColorPickerLabel, {
    component: "h6",
    text: label,
    labelAction: labelAction,
    labelActionText: labelActionText,
    labelActionQaSelector: labelActionQaSelector
  }))), /*#__PURE__*/React__default.createElement(Grid, {
    container: true
  }, colors.map(c => {
    const isSelected = tinycolor.equals(tinycolor(c), selectedColor);
    return /*#__PURE__*/React__default.createElement(ColorPickerSwatch, {
      color: c,
      key: c,
      onClick: onClick,
      onHover: onSwatchHover,
      isSelected: isSelected
    });
  })));
};
process.env.NODE_ENV !== "production" ? SketchPresetColors.propTypes = {
  colors: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.shape({
    color: propTypes.string,
    title: propTypes.string
  })])).isRequired,
  label: propTypes.string,
  labelActionText: propTypes.string,
  onClick: propTypes.func,
  onSwatchHover: propTypes.func,
  selectedColor: propTypes.string
} : void 0;
SketchPresetColors.defaultProps = {
  label: null,
  labelActionText: null,
  onClick: null,
  onSwatchHover: null,
  selectedColor: null
};

const useStyles$7 = styles.makeStyles(({
  typography
}) => ({
  saturation: {
    paddingBottom: '56%',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 6,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: 3
  },
  slider: {
    border: `1px solid ${colors.borderColor}`,
    borderRadius: 3,
    maxWidth: 'calc(100% - 2px)',
    position: 'relative',
    overflow: 'hidden',
    height: 16
  },
  customColorPickerTitle: {
    flex: 1,
    textAlign: 'center',
    marginLeft: -32,
    fontSize: 17,
    fontWeight: typography.fontWeightRegular
  },
  iconButton: {
    color: colors.iconButtonColor,
    paddingLeft: 0,
    '& svg': {
      fontSize: 20
    },
    '&:hover': {
      color: colors.white
    }
  },
  selectedColor: {
    border: `1px solid ${colors.borderColor}`,
    borderRadius: 3,
    '&::after': {
      border: 'none'
    },
    '& span div': {
      cursor: 'default !important'
    }
  }
}), {
  classNamePrefix: 'CustomColorPicker'
});
const usePointerStyles = styles.makeStyles({
  pointer: {
    width: '8px',
    height: '8px',
    borderRadius: '2px',
    border: '3px solid white',
    boxSizing: 'content-box',
    transform: 'translate(-7px, 0px)',
    backgroundColor: 'transparent',
    boxShadow: `0 1px 4px 0 ${colors.shadowDark}`
  }
});

const Pointer = () => {
  const classes = usePointerStyles();
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.pointer
  });
};

var _ref = /*#__PURE__*/React__default.createElement(ArrowBack, null);

const CustomColorPicker = ({
  inputBehavior,
  selectedColor,
  onChange,
  onClose,
  renderTitle
}) => {
  const classes = useStyles$7(selectedColor);
  const {
    rgb,
    hsl,
    hsv,
    hex
  } = selectedColor;
  const rgbString = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, renderTitle ? renderTitle({
    onClose
  }) : /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    "data-qa-selector": "custom-color-picker-back",
    "aria-label": "Back",
    onClick: onClose,
    className: classes.iconButton
  }, _ref), /*#__PURE__*/React__default.createElement(ColorPickerLabel, {
    component: "h6",
    text: "Custom Color",
    className: classes.customColorPickerTitle
  })), /*#__PURE__*/React__default.createElement("div", {
    className: classes.saturation
  }, /*#__PURE__*/React__default.createElement(index.Saturation, {
    hsl: hsl,
    hsv: hsv,
    onChange: onChange
  })), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    wrap: "nowrap",
    justify: "space-between"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    item: true,
    xs: 10
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.slider,
    style: {
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React__default.createElement(index.Hue, {
    hsl: hsl,
    onChange: onChange,
    pointer: Pointer
  })), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.slider
  }, /*#__PURE__*/React__default.createElement(index.Checkboard, {
    white: colors.white
  }), /*#__PURE__*/React__default.createElement(index.Alpha, {
    rgb: rgb,
    hsl: hsl,
    onChange: onChange,
    pointer: Pointer
  }))), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(ColorPickerSwatch, {
    color: rgbString,
    className: classes.selectedColor
  }))), /*#__PURE__*/React__default.createElement(SketchFields, {
    rgb: rgb,
    hsl: hsl,
    hex: hex,
    opacity: Math.round(rgb.a * 100),
    selectedColor: hex.toUpperCase(),
    onChange: onChange,
    inputBehavior: inputBehavior
  }));
};

process.env.NODE_ENV !== "production" ? CustomColorPicker.propTypes = {
  selectedColor: propTypes.shape({}).isRequired,
  onChange: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  inputBehavior: propTypes.oneOf([INPUT_BEHAVIOR.CHANGE, INPUT_BEHAVIOR.BLUR_ONLY]),
  renderTitle: propTypes.func
} : void 0;
SketchFields.defaultProps = {
  inputBehavior: INPUT_BEHAVIOR.CHANGE,
  renderTitle: null
};

const useStyles$8 = styles.makeStyles({
  picker: {
    padding: '5px 18px 0',
    background: 'transparent',
    height: 365,
    margin: '0 auto',
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'relative',
    scrollbarWidth: 'thin',
    '-ms-overflow-style': '-ms-autohiding-scrollbar',
    ' &::-webkit-scrollbar': {
      opacity: '0',
      width: 6
    },
    '&:hover::-webkit-scrollbar': {
      opacity: 1
    },
    '&:hover::-webkit-scrollbar-track ': {
      backgroundColor: colors.shadowLight,
      opacity: 0.9
    },
    '&:hover::-webkit-scrollbar-thumb': {
      background: colors.scrollBarColor
    }
  }
}, {
  classNamePrefix: 'ColorPicker'
});

const getRgbString = color => color.toRgbString ? color.toRgbString() : tinycolor(color).toRgbString();

const getRgbStrings = (presets, newColor) => {
  const colors = newColor ? [newColor, ...presets] : presets;
  return [...new Set(colors.map(getRgbString))];
};

const Sketch = ({
  brandColors,
  brandColorsAction,
  className,
  color,
  inputBehavior,
  onChange,
  onCustomColorChoice,
  onOpenCustomColorPicker,
  onSwatchHover,
  presetColors,
  style,
  renderCustomTitle
}) => {
  const [isCustomColorPickerOpen, setIsCustomColorPickerOpen] = React.useState(false);
  const [customColorTouched, setCustomColorTouched] = React.useState(false);
  const [customColor, setCustomColor] = React.useState(colorHelpers.toState({
    hex: tinycolor(color).toHex().toUpperCase()
  }, 0));
  const classes = useStyles$8();
  const [recentColors, setRecentColors] = React.useState(getRgbStrings(presetColors));
  const handleClose = React.useCallback(() => {
    if (customColorTouched && onCustomColorChoice) {
      onCustomColorChoice(getRgbString(customColor.rgb));
    }

    setIsCustomColorPickerOpen(false);
    setRecentColors(getRgbStrings(recentColors, customColor.rgb));
  }, [customColor, recentColors, customColorTouched, onCustomColorChoice]);
  const handleOnCustomChange = React.useCallback((data, evt) => {
    if (evt) {
      evt.preventDefault();
    }

    const newColor = colorHelpers.toState(data, data.h || customColor.oldHue);

    if (!customColorTouched) {
      setCustomColorTouched(true);
    }

    setCustomColor(newColor);
    onChange(newColor.rgb);
  }, [customColor, customColorTouched, onChange]);
  const handleOpenCustomColorPicker = React.useCallback(() => {
    setCustomColor(colorHelpers.toState({
      hex: tinycolor(color).toHex().toUpperCase()
    }, 0));
    onOpenCustomColorPicker();
    setIsCustomColorPickerOpen(true);
  }, [color, onOpenCustomColorPicker]);
  return /*#__PURE__*/React__default.createElement(Paper, {
    elevation: 0,
    className: `${'sketch-picker'} ${classes.picker} ${className}`,
    "data-qa-selector": "color-picker",
    style: style
  }, !isCustomColorPickerOpen && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(SketchPresetColors, {
    colors: brandColors,
    onClick: onChange,
    onSwatchHover: onSwatchHover,
    label: "Brand Colors",
    labelAction: brandColorsAction,
    labelActionQaSelector: brandColors.length > 0 ? 'brand-colors-edit' : 'brand-colors-add',
    labelActionText: brandColors.length > 0 ? 'EDIT' : 'ADD',
    selectedColor: color
  }), /*#__PURE__*/React__default.createElement(SketchPresetColors, {
    colors: recentColors,
    onClick: onChange,
    onSwatchHover: onSwatchHover,
    label: "Recent Colors",
    labelAction: handleOpenCustomColorPicker,
    labelActionQaSelector: "recent-colors-add",
    labelActionText: "ADD",
    selectedColor: color
  })), isCustomColorPickerOpen && /*#__PURE__*/React__default.createElement(CustomColorPicker, {
    inputBehavior: inputBehavior,
    onClose: handleClose,
    selectedColor: customColor,
    onChange: handleOnCustomChange,
    renderTitle: renderCustomTitle
  }));
};

process.env.NODE_ENV !== "production" ? Sketch.propTypes = {
  brandColors: propTypes.arrayOf(propTypes.string),
  presetColors: propTypes.arrayOf(propTypes.string),
  onChange: propTypes.func.isRequired,
  onSwatchHover: propTypes.func,
  className: propTypes.string,
  brandColorsAction: propTypes.func,
  color: propTypes.string,
  onCustomColorChoice: propTypes.func,
  onOpenCustomColorPicker: propTypes.func,
  style: propTypes.shape({}),
  inputBehavior: propTypes.oneOf([INPUT_BEHAVIOR.CHANGE, INPUT_BEHAVIOR.BLUR_ONLY]),
  renderCustomTitle: propTypes.func
} : void 0;
Sketch.defaultProps = {
  brandColors: [],
  color: 'rgba(0,0,0,0)',
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
  onSwatchHover: null,
  className: null,
  brandColorsAction: null,
  onCustomColorChoice: null,
  onOpenCustomColorPicker: () => {},
  style: null,
  inputBehavior: INPUT_BEHAVIOR.CHANGE,
  renderCustomTitle: null
};
var ColorPicker = ColorWrap(Sketch);

const primaryColors = {
  indigo: '#603eff',
  indigoLight: '#bfb5ff',
  indigoLightAlt: '#d1c6f9',
  indigoDark: '#4D32CC',
  teal: '#43e0f0',
  tealLight: '#8fefef',
  orange: '#f65b1c',
  orangeLight: '#ff7d5a',
  forest: '#4d7523',
  forestLight: '#759b4e',
  terraCotta: '#e28f44',
  terraCottaLight: '#dfae78',
  greyLight: '#f8fbfc',
  white: '#ffffff'
}; // Secondary colors should always be used to support the primary palette.

const secondaryColors = {
  tan: '#f4e3cc',
  tanLight: '#fef9f1',
  brown: '#6b4e2f',
  brownLight: '#b27e52',
  pink: '#ffdcee',
  pinkLight: '#fcedf5',
  navy: '#0b236d'
}; // Legacy colors
// Full copy of @lp/leads/Color with a few additions

const legacyColors = {
  blueDarkerAccent: '#202365',
  blueDarker: '#00044c',
  blueDark: '#00419f',
  blue: '#0069ff',
  blueLightAccent: '#237DFF',
  blueLight: '#4692ff',
  blueLighter: '#deecfd',
  blueGrey: '#2c316b',
  blueMediumDark: '#474C80',
  greenDarker: '#003135',
  greenDark: '#00848e',
  green: '#47c1bf',
  greenLight: '#b7ecec',
  greenLighter: '#e0f5f5',
  redDarker: '#330101',
  redDark: '#bf0711',
  red: '#ed6347',
  redLight: '#feaf9a',
  redLighter: '#fbeae5',
  redAccent: '#FF0000',
  yellowDarker: '#573b00',
  yellowDark: '#9c6f19',
  yellow: '#eec200',
  yellowLight: '#ffea8a',
  yellowLighter: '#fcf1cd',
  purpleDarker: '#24235b',
  purpleDark: '#43418c',
  purple: '#5e5cc4',
  purpleLight: '#a09ee8',
  purpleLighter: '#dad9ff',
  greyDarker: '#4c515d',
  greyDark: '#797f89',
  grey: '#b1bacc',
  greyLight: '#e4e7ed',
  greyLighter: '#f2f4f7'
};
const whiteRGB = '255, 255, 255';
const whiteTransparentColors = {
  100: `rgba(${whiteRGB}, 1)`,
  90: `rgba(${whiteRGB}, 0.9)`,
  85: `rgba(${whiteRGB}, 0.85)`,
  80: `rgba(${whiteRGB}, 0.8)`,
  70: `rgba(${whiteRGB}, 0.7)`,
  60: `rgba(${whiteRGB}, 0.6)`,
  50: `rgba(${whiteRGB}, 0.5)`,
  40: `rgba(${whiteRGB}, 0.4)`,
  30: `rgba(${whiteRGB}, 0.3)`,
  25: `rgba(${whiteRGB}, 0.25)`,
  20: `rgba(${whiteRGB}, 0.2)`,
  18: `rgba(${whiteRGB}, 0.18)`,
  10: `rgba(${whiteRGB}, 0.1)`,
  8: `rgba(${whiteRGB}, 0.08)`,
  5: `rgba(${whiteRGB}, 0.05)`,
  4: `rgba(${whiteRGB}, 0.04)`,
  0: `rgba(${whiteRGB}, 0)`
}; // Warm Greyscale palette is for the Marketing theme.
// Should be used for text, device borders, shape graphics, and backgrounds.

const warmGreyscaleColors = {
  100: '#0f0c09',
  // for display headlines and subheads.
  70: '#575452',
  // for paragraphs or body copy, and device or screen outlines.
  50: '#878584',
  // for inactive tabs
  25: '#c3c2c1',
  // for disabled links & shape graphics.
  10: '#e7e6e6',
  // for shape graphics.
  4: '#f7f7f7',
  // for section backgrounds.
  0: '#ffffff'
};
const warmGreyscaleRGB = '15, 12, 9';
const warmGreyscaleTransparentColors = {
  100: `rgba(${warmGreyscaleRGB}, 1)`,
  90: `rgba(${warmGreyscaleRGB}, 0.9)`,
  80: `rgba(${warmGreyscaleRGB}, 0.8)`,
  70: `rgba(${warmGreyscaleRGB}, 0.7)`,
  60: `rgba(${warmGreyscaleRGB}, 0.6)`,
  50: `rgba(${warmGreyscaleRGB}, 0.5)`,
  40: `rgba(${warmGreyscaleRGB}, 0.4)`,
  30: `rgba(${warmGreyscaleRGB}, 0.3)`,
  20: `rgba(${warmGreyscaleRGB}, 0.2)`,
  14: `rgba(${warmGreyscaleRGB}, 0.14)`,
  10: `rgba(${warmGreyscaleRGB}, 0.1)`,
  8: `rgba(${warmGreyscaleRGB}, 0.08)`,
  5: `rgba(${warmGreyscaleRGB}, 0.05)`,
  4: `rgba(${warmGreyscaleRGB}, 0.04)`,
  0: `rgba(${warmGreyscaleRGB}, 0)`
}; // Cool Greyscale palette is for the Product theme.
// Should be used for text, device borders, shape graphics, and backgrounds.

const coolGreyscaleColors = {
  100: '#090c12',
  90: '#212429',
  80: '#3a3d41',
  70: '#525459',
  60: '#6b6d71',
  50: '#848588',
  40: '#9d9ea0',
  30: '#b5b6b7',
  20: '#cecfd0',
  10: '#e6e7e7',
  5: '#f3f3f3',
  0: '#ffffff'
};
const coolGreyscaleRGB = '9, 12, 18';
const coolGreyscaleTransparentColors = {
  100: `rgba(${coolGreyscaleRGB}, 1)`,
  90: `rgba(${coolGreyscaleRGB}, 0.9)`,
  80: `rgba(${coolGreyscaleRGB}, 0.8)`,
  70: `rgba(${coolGreyscaleRGB}, 0.7)`,
  60: `rgba(${coolGreyscaleRGB}, 0.6)`,
  50: `rgba(${coolGreyscaleRGB}, 0.5)`,
  40: `rgba(${coolGreyscaleRGB}, 0.4)`,
  30: `rgba(${coolGreyscaleRGB}, 0.3)`,
  20: `rgba(${coolGreyscaleRGB}, 0.2)`,
  10: `rgba(${coolGreyscaleRGB}, 0.1)`,
  8: `rgba(${coolGreyscaleRGB}, 0.08)`,
  5: `rgba(${coolGreyscaleRGB}, 0.05)`,
  4: `rgba(${coolGreyscaleRGB}, 0.04)`,
  0: `rgba(${coolGreyscaleRGB}, 0)`
};

const useStyles$9 = styles.makeStyles(theme => ({
  root: ({
    backgroundColor,
    color
  }) => ({
    backgroundColor,
    color,
    textAlign: 'center',
    padding: theme.spacing(1)
  }),
  bannerText: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1),
    lineHeight: 1
  },
  ctaContainer: {
    padding: theme.spacing(1)
  },
  ctaButton: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    '&:hover, &:focus': {
      backgroundColor: '#ccc',
      color: theme.palette.primary.dark
    }
  }
}), {
  classNamePrefix: 'Banner'
});

const Banner = (_ref) => {
  let {
    className,
    bannerText,
    CTA,
    backgroundColor,
    color,
    isShowing,
    isShown,
    onShown
  } = _ref,
      other = objectWithoutPropertiesLoose(_ref, ["className", "bannerText", "CTA", "backgroundColor", "color", "isShowing", "isShown", "onShown"]);

  const classes = useStyles$9({
    backgroundColor,
    color
  });

  const renderCTA = element => {
    const config = {};

    if (element.type === Button) {
      config.className = clsx(classes.ctaButton, CTA.props.className);
      config.size = CTA.props.size ? CTA.props.size : 'small';
    }

    return /*#__PURE__*/React__default.cloneElement(element, config);
  };

  return /*#__PURE__*/React__default.createElement(Collapse, Object.assign({
    in: isShowing,
    appear: !isShown,
    enter: !isShown,
    timeout: 300,
    onEntered: onShown
  }, other), /*#__PURE__*/React__default.createElement(Box, {
    className: clsx(className, classes.root),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "data-qa-selector": "banner-container"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.bannerText
  }, bannerText), CTA && /*#__PURE__*/React__default.createElement("div", {
    className: classes.ctaContainer
  }, renderCTA(CTA))));
};

const WrappedBanner = (_ref2) => {
  let {
    selector,
    isShown
  } = _ref2,
      props = objectWithoutPropertiesLoose(_ref2, ["selector", "isShown"]);

  const mountElement = React.useRef();
  React.useEffect(() => {
    mountElement.current = document.querySelector(selector);
  }, [selector]);
  const [isShowing, setIsShowing] = React.useState(isShown ? true : false);

  if (!isShown) {
    setTimeout(() => {
      setIsShowing(true);
    }, 0);
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, mountElement.current ? /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default.createElement(Banner, Object.assign({
    isShowing: isShowing,
    isShown: isShown
  }, props)), mountElement.current) : /*#__PURE__*/React__default.createElement(Banner, Object.assign({
    isShowing: isShowing,
    isShown: isShown
  }, props)));
};
process.env.NODE_ENV !== "production" ? WrappedBanner.propTypes = {
  className: propTypes.string,
  selector: propTypes.string,
  bannerText: propTypes.string.isRequired,
  CTA: propTypes.node,
  backgroundColor: propTypes.string,
  color: propTypes.string,
  isShown: propTypes.bool,
  onShown: propTypes.func
} : void 0;
WrappedBanner.defaultProps = {
  className: '',
  CTA: null,
  selector: null,
  backgroundColor: primaryColors.indigo,
  color: primaryColors.white,
  isShown: false,
  onShown: () => {}
};

const useStyles$a = styles.makeStyles({
  root: {
    width: 'auto',
    height: 'auto'
  }
}, {
  classNamePrefix: 'LeadpagesLogo'
});

var _ref2$1 = /*#__PURE__*/React__default.createElement("path", {
  d: "M5.84485338 5.76283507L15.805571 10.9968196c.1304897.0654248.2827278.0654248.4132175 0l9.9607176-5.23398453c.1957346-.10904134.1957346-.37074057 0-.47978191L16.2187885.04906861c-.1304897-.06542481-.2827278-.06542481-.4132175 0L5.84485338 5.28305316c-.19573462.10904134-.19573462.37074057 0 .47978191zM3.08282034 10.6042708L15.805571 17.2776011c.1304897.0654248.2827278.0654248.4132175 0l12.7227506-6.6733303c.1957347-.1090414.1957347-.3707406 0-.4797819l-3.653713-1.9191277-9.0690376 4.7760109c-.1304897.0654248-.2827278.0654248-.4132175 0L6.73653334 8.22716947l-3.653713 1.91912763c-.19573462.0872331-.19573462.3489323 0 .4579737zm28.77298986 4.6451613l-4.0016857-2.0935938-11.635336 6.1281235c-.1304897.0654248-.2827278.0654248-.4132175 0L4.14848663 13.1558383.14680097 15.2494321c-.19573463.1090413-.19573463.3707405 0 .4797819l15.63702173 8.2217174c.1304897.0654248.2827278.0654248.4132175 0l15.6370217-8.2217174c.2174829-.1090414.2174829-.3707406.0217483-.4797819z"
});

const LogoIcon = (_ref) => {
  let {
    title
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["title"]);

  const classes = useStyles$a();
  return /*#__PURE__*/React__default.createElement(SvgIcon, Object.assign({
    classes: {
      root: classes.root
    },
    titleAccess: title,
    viewBox: "0 0 32 24",
    "data-qa-selector": "leadpages-logo-icon"
  }, props), _ref2$1);
};

var _ref4 = /*#__PURE__*/React__default.createElement("path", {
  d: "M27.8762888 13.1558383l4.0048699 2.0935938c.1958904.1090413.1958904.3707405-.0217656.4797819l-15.6494645 8.2217174c-.1305936.0654248-.2829527.0654248-.4135463 0L.14691778 15.729214c-.19589037-.1090414-.19589037-.3707406 0-.4797819l4.00486991-2.0935938 11.66636021 6.1281235c.1305935.0654248.2829527.0654248.4135463 0l11.6445946-6.1281235zm91.8317932-6.82598823l-1.200409 2.04997728h-2.378993c.021826.04361654 1.440491.61063153 1.440491 2.42071785 0 2.4207179-2.117085 3.9254884-4.58338 3.9254884-.632943 0-1.287712-.1090413-1.855178-.3053157-.261908.1526578-.567466.4361653-.567466.8069059 0 .6760563.698419.8287142 1.265886.8287142l2.134332.0004976c1.117394.0056087 2.478149.0707428 3.496678.7627918.982153.6978646 1.39684 1.6574285 1.39684 2.7696502 0 3.0313494-2.99011 3.8382553-5.543708 3.8382553-1.833352 0-3.797658-.1962744-5.08537-1.9627442-.742071-1.461154-.327384-3.1840072 1.003979-3.8382553-.742072-.3925488-1.156758-1.2212631-1.156758-1.9627442 0-.9595638.458338-1.7446615 1.375014-2.3116765-.720246-.6978646-1.156758-1.6356202-1.156758-2.8132667 0-2.72603364 2.117085-4.20899593 4.692509-4.20899593h6.722291zM90.0907127 6.3080418c1.156758 0 2.0734342.39254884 2.7936797.9813721 1.3750142 1.13402999 2.0516085 2.8568832 2.0516085 5.0159019.0218256 2.2462517-.6547687 3.9909132-2.0297829 5.1249432-.6984199.567015-1.6369216.9377555-2.8155053.9377555-1.3750142 0-2.4662953-.4797819-3.0119358-1.1340299v5.2339845h-2.7718541V6.56974103h2.3789929l.1746049 1.2648796c.6765943-1.06860518 1.964306-1.52657883 3.2301921-1.52657883zm23.6611783 11.9296993l-2.403022-.0005762c-.611117.1744662-1.04763.6978646-1.04763 1.4175375 0 1.461154 1.811527 1.5920036 2.902808 1.5920036l.120053-.0003139c1.107499-.006223 2.913708-.1196315 2.913708-1.5916897 0-1.3125347-1.44082-1.4097595-2.485917-1.4169613zM82.1680118 2.40436165V18.0626988H79.789019l-.174605-1.2648796c-.6765943 1.0686052-1.964306 1.5265788-3.2301921 1.5265788-1.156758 0-2.0952598-.3925488-2.7936797-.9595638-1.3750142-1.13403-2.0297829-2.8568833-2.0297829-5.0159019 0-2.2462517.6765943-3.99091322 2.0516086-5.1249432.6984199-.567015 1.6369216-.9159473 2.7936796-.9159473 1.4623167 0 2.5099466.47978192 3.0119359 1.09041345v-4.9940936h2.7500284zm-40.3337501 0V15.3802817h5.4127543l1.5714448 2.7042253-9.8433557-.0218082V2.40436165h2.8591566zM25.3079483 8.2053612l3.6566204 1.9191277c.1958903.1090413.1958903.3707405 0 .4797819l-12.7328745 6.6733303c-.1305936.0654248-.2829528.0654248-.4135463 0L3.08527342 10.6042708c-.19589037-.1090414-.19589037-.3707406 0-.4579737l3.65662035-1.91912763 9.07625413 4.75420263c.1305935.0654248.2829527.0654248.4135463 0l9.0762541-4.7760109zm64.2589495.41435711c-2.1607366 0-2.6190747 2.04997729-2.6190747 3.70740569 0 1.6574285.4365125 3.6855975 2.6190747 3.6855975.8730249 0 1.4623167-.3925489 1.8551779-.9159473.5674662-.7414812.7202455-1.7882781.7202455-2.7914584 0-.9595639-.1527793-2.0063608-.7202455-2.76965019-.3928612-.50159019-1.0039786-.9159473-1.8551779-.9159473zm-12.6152097 0c-.8511993 0-1.4623167.39254884-1.8551779.89413903-.5674662.74148116-.7202456 1.78827806-.7202456 2.76965016s.1527794 2.0499773.7202456 2.7914584c.3928612.5015902 1.0039786.8941391 1.8551779.8941391 2.1607366 0 2.597249-2.0499773 2.597249-3.7074058 0-1.6574284-.4365124-3.64198089-2.597249-3.64198089zm36.0559279-.23989096c-1.265886 0-2.029783.89413903-2.029783 2.13721035 0 1.2430713.763897 2.1154021 2.029783 2.1154021s2.029783-.8723308 2.029783-2.1154021c0-1.24307132-.763897-2.13721035-2.029783-2.13721035zM15.8181479.04906861c.1305935-.06542481.2829527-.06542481.4135463 0l9.9686436 5.23398455c.1958904.10904134.1958904.37074057 0 .47978191l-9.9686436 5.23398453c-.1305936.0654248-.2829528.0654248-.4135463 0L5.84950428 5.76283507c-.19589037-.10904134-.19589037-.37074057 0-.47978191zM135.509833 6.32985007c2.226213 0 4.015914.93775556 4.561555 3.00954112l-2.269865.87233071c-.240082-1.15583821-1.287711-1.70104493-2.269864-1.70104493-.371036 0-.742072.02180826-1.134933.17446615-.501989.19627442-.873025.54520672-.873025 1.11222171 0 .80690597.69842.93775557 1.331363 1.04679687l2.291691.4361654c1.811526.3489323 3.18654 1.5047706 3.18654 3.2930486-.043651 2.3116765-1.898829 3.7946388-4.845288 3.7946388-.632943 0-1.375014-.087233-1.986131-.2835075-1.462317-.4797819-2.684552-1.5701953-3.011936-3.0967742l2.248039-.8069059c.240082 1.3303044 1.527793 1.9627442 2.771854 1.9627442.69842 0 1.222235-.0872331 1.636922-.327124.371035-.2180827.567466-.5233985.567466-.9159473 0-.6978646-.436513-1.0686052-1.178584-1.1994548l-2.750028-.4797819c-1.877004-.3271241-2.902808-1.6574285-2.902808-3.0967742 0-2.24625174 2.029783-3.79463883 4.627032-3.79463883zM65.0130726 6.3080418c2.9901103 0 4.801637 1.46115402 4.801637 4.3616538l-.0218257 4.5579282c0 .5233985.3055588.7196729.7638968.7196729.174605 0 .3273844-.0436166.3273844-.0436166v1.940936c-.3055588.2180827-.6329431.3925488-1.3095374.3925488-1.2004092 0-2.0297829-.7414811-2.1170854-1.6138119-.632943.9595639-1.8551779 1.7228533-3.4920995 1.7228533-2.7500285 0-4.1468683-1.7228533-4.1468683-3.5983644 0-2.1808269 1.7023986-3.4457065 3.8849608-3.5983644l3.3829715-.2398909v-.4579737c0-1.22126306-.8075481-1.91912767-2.1607367-1.91912767-1.5496191 0-2.2916903.74148115-2.4881209 1.89731937l-2.313516-.50159015c.174605-1.91912767 2.0079573-3.62017265 4.8889394-3.62017265zm35.9904514 0c2.99011 0 4.801637 1.46115402 4.801637 4.3616538l-.021826 4.5579282c0 .5233985.305559.7196729.763897.7196729.174605 0 .327384-.0436166.327384-.0436166v1.940936c-.305558.2180827-.632943.3925488-1.309537.3925488-1.200409 0-2.029783-.7414811-2.117085-1.6138119-.632943.9595639-1.855178 1.7228533-3.4920999 1.7228533-2.7500285 0-4.1468683-1.7228533-4.1468683-3.5983644 0-2.1808269 1.7023985-3.4457065 3.8849608-3.5983644l3.3829714-.2398909v-.4579737c0-1.22126306-.807548-1.91912767-2.160737-1.91912767-1.5496187 0-2.2916899.74148115-2.4881205 1.89731937l-2.313516-.50159015c.174605-1.91912767 2.0079573-3.62017265 4.8889395-3.62017265zm-47.51438-.13084961c1.9206548 0 3.4920996.82871422 4.4087757 2.39890958.6111175 1.04679691.8075481 2.24625173.7857225 3.48932303 0 .5888233-.0654769.9595638-.0654769.9595638h-7.8353984c.0218256 1.7228533 1.3313629 2.9004998 2.9246334 2.9004998 1.5496191 0 2.3571672-.7850977 2.771854-1.8100863l2.1607366.9159473c-.5674662 1.7228532-2.2916903 3.2276238-4.8889394 3.2276238-3.3393202 0-5.7619643-2.4425261-5.7619643-6.0190822 0-3.22762385 1.9861316-6.06269881 5.5000568-6.06269881zm71.107878 0c1.920654 0 3.492099.82871422 4.408775 2.39890958.611118 1.04679691.807548 2.24625173.785723 3.48932303 0 .5888233-.065477.9595638-.065477.9595638h-7.835398c.021825 1.7228533 1.331363 2.9004998 2.924633 2.9004998 1.549619 0 2.357167-.7850977 2.771854-1.8100863l2.160737.9159473c-.567467 1.7228532-2.291691 3.2276238-4.88894 3.2276238-3.33932 0-5.761964-2.4425261-5.761964-6.0190822 0-3.22762385 1.986132-6.06269881 5.500057-6.06269881zM67.0865068 12.9595638l-2.9246334.2180827c-.8293737.0654248-1.6587473.567015-1.6587473 1.5047706 0 .894139.7202455 1.4393457 1.6369216 1.4393457 1.7242242 0 2.9464591-.9377555 2.9464591-2.6388005v-.5233985zm36.0122772 0l-2.924634.2180827c-.8293734.0654248-1.658747.567015-1.658747 1.5047706 0 .894139.7202455 1.4393457 1.636922 1.4393457 1.724224 0 2.946459-.9377555 2.946459-2.6388005v-.5233985zM53.4673184 8.42344389c-1.4623167 0-2.5754234 1.04679691-2.7063772 2.61699231h5.1508469c0-.806906-.2182562-1.46115406-.6547687-1.94093597-.3928612-.41435711-1.0039786-.67605634-1.789701-.67605634zm71.1078776 0c-1.462317 0-2.575423 1.04679691-2.706377 2.61699231h5.172672c-.021825-.806906-.240081-1.46115406-.676594-1.94093597-.392861-.41435711-1.003979-.67605634-1.789701-.67605634zm18.006139-2.1808269c.807548 0 1.418665.6324398 1.418665 1.43934575 0 .80690596-.589292 1.43934576-1.418665 1.43934576-.807548 0-1.418666-.6324398-1.418666-1.43934576 0-.80690595.611118-1.43934575 1.418666-1.43934575zm0 .23989096c-.69842 0-1.156758.50159019-1.156758 1.19945479 0 .69786461.458338 1.1994548 1.156758 1.1994548.698419 0 1.156758-.50159019 1.156758-1.1994548 0-.6978646-.458339-1.19945479-1.156758-1.19945479zm.065476.41435711c.283734 0 .523815.17446615.523815.47978192 0 .19627442-.087302.3489323-.261907.43616538l.283733.58882326h-.283733l-.261908-.54520672h-.305558v.54520672h-.240082V6.89686506h.54564zm0 .26169923h-.305558v.45797365h.305558c.15278 0 .261908-.06542481.261908-.23989096 0-.15265788-.109128-.21808269-.261908-.21808269z"
});

const LogoFull = (_ref3) => {
  let {
    title
  } = _ref3,
      props = objectWithoutPropertiesLoose(_ref3, ["title"]);

  const classes = useStyles$a();
  return /*#__PURE__*/React__default.createElement(SvgIcon, Object.assign({
    classes: {
      root: classes.root
    },
    titleAccess: title,
    viewBox: "0 0 144 24",
    "data-qa-selector": "leadpages-logo-full"
  }, props), _ref4);
};

const LeadpagesLogo = (_ref5) => {
  let {
    variant,
    width
  } = _ref5,
      props = objectWithoutPropertiesLoose(_ref5, ["variant", "width"]);

  const isFull = variant === 'full';
  const logoWidth = width !== undefined ? width : variant === 'icon' ? 32 : 144;

  if (!isFull) {
    return /*#__PURE__*/React__default.createElement(LogoIcon, Object.assign({
      width: logoWidth
    }, props));
  }

  return /*#__PURE__*/React__default.createElement(LogoFull, Object.assign({
    width: logoWidth
  }, props));
}; // See Material UI SVGIcon component API for all possible props.
// https://material-ui.com/api/svg-icon/


process.env.NODE_ENV !== "production" ? LeadpagesLogo.propTypes = {
  title: propTypes.string,
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(['icon', 'full'])
} : void 0;
LeadpagesLogo.defaultProps = {
  title: 'Leadpages logo',
  variant: 'full'
};

var useSuccess = ((successCallback, successTimeout = 1000) => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  React.useEffect(() => {
    let successTimer;
    if (isSuccess) setTimeout(() => {
      setIsSuccess(false);
      successCallback();
    }, successTimeout);
    return () => clearTimeout(successTimer);
  }, [isSuccess, successCallback, successTimeout]);
  return [isSuccess, setIsSuccess];
});

const useStyles$b = styles.makeStyles(({
  palette,
  typography,
  spacing
}) => ({
  root: ({
    fullWidth
  }) => ({
    position: 'relative',
    // 'inline-block' ensures root is same width as child button, if parent container is wider.
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : 'auto'
  }),
  buttonLabelLoading: {
    color: 'transparent!important'
  },
  iconButton: ({
    isLoading
  }) => ({
    '&[class*="disabled"]': {
      backgroundColor: isLoading ? palette.greyTransparent[5] : 'inherit'
    }
  }),
  progress: ({
    isIcon
  }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: isIcon ? -18 : -12,
    marginLeft: isIcon ? -18 : -12
  }),
  successWrapper: _extends_1({
    position: 'absolute',
    top: 0,
    height: '100%'
  }, typography.label),
  successTextIcon: {
    marginLeft: -6,
    marginRight: 4
  }
}), {
  classNamePrefix: 'LoadingButton'
});

var _ref$1 = /*#__PURE__*/React__default.createElement(CheckIcon, {
  color: "primary"
});

const LoadingButton = props => {
  const {
    className,
    children,
    variant,
    isLoading,
    isSuccess,
    fullWidth,
    disabled,
    successCallback,
    successText
  } = props,
        other = objectWithoutPropertiesLoose(props, ["className", "children", "variant", "isLoading", "isSuccess", "fullWidth", "disabled", "successCallback", "successText", "successTimeout"]);

  const [showSuccess, setShowSuccess] = useSuccess(successCallback);
  const isIcon = variant === 'icon';
  const classes = useStyles$b({
    variant,
    fullWidth,
    isIcon,
    isLoading,
    showSuccess
  });
  React.useEffect(() => {
    setShowSuccess(isSuccess);
  }, [isSuccess, setShowSuccess]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: clsx(classes.root, className)
  }, !isIcon && /*#__PURE__*/React__default.createElement(Button, Object.assign({
    classes: {
      label: isLoading || showSuccess ? classes.buttonLabelLoading : null
    },
    variant: variant,
    disabled: disabled || isLoading || showSuccess,
    fullWidth: fullWidth
  }, other), children), isIcon && /*#__PURE__*/React__default.createElement(IconButton, Object.assign({
    className: classes.iconButton,
    disabled: disabled || isLoading || showSuccess,
    "data-qa-selector": "loading-button-icon"
  }, other), showSuccess ? _ref$1 : children), isLoading &&
  /*#__PURE__*/
  // NOTE: Aiming for 2px line thickness for loader at each size.
  // SVG icon for the circle loader is always 44 x 44 scaled down.
  // (44/36) * 2 = 2.4
  // (44/24) * 2 = 3.6
  React__default.createElement(CircularProgress, {
    className: classes.progress,
    size: isIcon ? 36 : 24,
    thickness: isIcon ? 2.4 : 3.6
  }), showSuccess && !isIcon && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, successText ? /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.successWrapper
  }, /*#__PURE__*/React__default.createElement(CheckIcon, {
    color: "primary",
    className: classes.successTextIcon,
    "data-qa-selector": "loading-button-success-icon"
  }), successText) : /*#__PURE__*/React__default.createElement(CheckIcon, {
    color: "primary",
    className: classes.progress
  })));
};

process.env.NODE_ENV !== "production" ? LoadingButton.propTypes = {
  className: propTypes.string,
  children: propTypes.node.isRequired,
  variant: propTypes.oneOf(['text', 'outlined', 'contained', 'icon']),
  fullWidth: propTypes.bool,
  isLoading: propTypes.bool,
  isSuccess: propTypes.bool,
  disabled: propTypes.bool,
  successCallback: propTypes.func,
  successText: propTypes.string,
  successTimeout: propTypes.number
} : void 0;
LoadingButton.defaultProps = {
  className: '',
  variant: 'contained',
  fullWidth: false,
  isLoading: false,
  disabled: false,
  successCallback: () => {},
  successText: null,
  successTimeout: 3000
};

function _defineProperty$1(obj, key, value) {
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

var responsivePropType = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object, propTypes.array]) : {};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function isPlainObject$1(item) {
  return item && _typeof$1(item) === 'object' && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends$1({}, target) : target;

  if (isPlainObject$1(target) && isPlainObject$1(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject$1(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

function merge$1(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

// For instance with the first breakpoint xs: [xs, sm[.

var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.theme) {
      console.error('Material-UI: You are calling a style function without a theme value.');
    }
  }

  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (_typeof(propValue) === 'object') {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  var output = styleFromPropValue(propValue);
  return output;
}

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return _defineProperty$1({}, cssProperty, value);
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes = process.env.NODE_ENV !== 'production' ? _defineProperty$1({}, prop, responsivePropType) : {};
  fn.filterProps = [prop];
  return fn;
}

function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return merge$1(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce(function (acc, style) {
    return _extends(acc, style.propTypes);
  }, {}) : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = style({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return _extends(_extends({}, merge$1(output, styleFunction(_extends({
        theme: props.theme
      }, props.css)))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes = process.env.NODE_ENV !== 'production' ? _extends(_extends({}, styleFunction.propTypes), {}, {
    css: propTypes.object
  }) : {};
  newStyleFunction.filterProps = ['css'].concat(_toConsumableArray(styleFunction.filterProps));
  return newStyleFunction;
}

var displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = style({
  prop: 'display'
});
var overflow = style({
  prop: 'overflow'
});
var textOverflow = style({
  prop: 'textOverflow'
});
var visibility = style({
  prop: 'visibility'
});
var whiteSpace = style({
  prop: 'whiteSpace'
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

var flexBasis = style({
  prop: 'flexBasis'
});
var flexDirection = style({
  prop: 'flexDirection'
});
var flexWrap = style({
  prop: 'flexWrap'
});
var justifyContent = style({
  prop: 'justifyContent'
});
var alignItems = style({
  prop: 'alignItems'
});
var alignContent = style({
  prop: 'alignContent'
});
var order = style({
  prop: 'order'
});
var flex = style({
  prop: 'flex'
});
var flexGrow = style({
  prop: 'flexGrow'
});
var flexShrink = style({
  prop: 'flexShrink'
});
var alignSelf = style({
  prop: 'alignSelf'
});
var justifyItems = style({
  prop: 'justifyItems'
});
var justifySelf = style({
  prop: 'justifySelf'
});
var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

var color$1 = style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = compose(color$1, bgcolor);

var position = style({
  prop: 'position'
});
var zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var top = style({
  prop: 'top'
});
var right = style({
  prop: 'right'
});
var bottom = style({
  prop: 'bottom'
});
var left = style({
  prop: 'left'
});
var positions = compose(position, zIndex, top, right, bottom, left);

var boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});

function transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = style({
  prop: 'width',
  transform: transform
});
var maxWidth = style({
  prop: 'maxWidth',
  transform: transform
});
var minWidth = style({
  prop: 'minWidth',
  transform: transform
});
var height = style({
  prop: 'height',
  transform: transform
});
var maxHeight = style({
  prop: 'maxHeight',
  transform: transform
});
var minHeight = style({
  prop: 'minHeight',
  transform: transform
});
var sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
var sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
var boxSizing = style({
  prop: 'boxSizing'
});
var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function memoize$1(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = memoize$1(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  var _prop$split = prop.split(''),
      _prop$split2 = _slicedToArray(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {
      if (process.env.NODE_ENV !== 'production') {
        if (typeof abs !== 'number') {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {
      if (process.env.NODE_ENV !== 'production') {
        if (abs > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
        }
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (process.env.NODE_ENV !== 'production') {
    console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
  }

  return function () {
    return undefined;
  };
}

function getValue$1(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue$1(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }).reduce(merge$1, {});
}

spacing.propTypes = process.env.NODE_ENV !== 'production' ? spacingKeys.reduce(function (obj, key) {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;

var fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = style({
  prop: 'letterSpacing'
});
var lineHeight = style({
  prop: 'lineHeight'
});
var textAlign = style({
  prop: 'textAlign'
});
var typography = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

const styleFunction = css(compose(borders, display, flexbox, positions, palette, boxShadow, sizing, spacing, typography));
const ShadowBoxButton = styles.styled(ButtonBase)(styleFunction, {
  name: 'ShadowBoxButton'
});

const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

const useStyles$c = styles.makeStyles(theme => {
  const {
    palette,
    transitions
  } = theme;
  const rgb = hexToRgb(palette.grey[100]).join(',');
  const shadowDefault = `0 10px 20px -5px ${palette.greyTransparent[10]}`;
  const shadowRaised = `0 10px 20px -5px rgba(${rgb}, 0.25)`;
  return {
    root: ({
      raised
    }) => ({
      overflow: 'hidden',
      backgroundColor: palette.common.white,
      boxShadow: raised === 'always' || raised === true ? shadowRaised : shadowDefault,
      padding: 24,
      transition: transitions.create('box-shadow', {
        duration: transitions.duration.shortest
      })
    }),
    hover: {
      '&:hover, &:focus': {
        boxShadow: shadowRaised,
        outline: 0
      }
    },
    buttonStates: {
      '&:hover, &.Mui-focusVisible': {
        boxShadow: shadowRaised
      }
    }
  };
}, {
  classNamePrefix: 'ShadowBox'
});

const ShadowBox = props => {
  const {
    component,
    className,
    raised
  } = props,
        other = objectWithoutPropertiesLoose(props, ["component", "className", "raised"]);

  const classes = useStyles$c({
    raised
  });

  if (component === 'button') {
    return /*#__PURE__*/React__default.createElement(ShadowBoxButton, Object.assign({
      className: clsx(classes.root, classes.buttonStates, className)
    }, other));
  }

  return /*#__PURE__*/React__default.createElement(Box, Object.assign({
    className: clsx(classes.root, className, raised === 'hover' && classes.hover)
  }, other));
};

process.env.NODE_ENV !== "production" ? ShadowBox.propTypes = {
  className: propTypes.string,
  component: propTypes.elementType,
  raised: propTypes.oneOf(['none', 'hover', 'always', true])
} : void 0;
ShadowBox.defaultProps = {
  raised: 'none'
};

const useStyles$d = styles.makeStyles(theme => ({
  summaryRoot: {
    minHeight: 54,
    padding: `0 15px 0 ${theme.spacing(3)}px `,
    '&.Mui-expanded, &[class*="MuiAccordionSummary-expanded"]': {
      minHeight: 54
    },
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: 'inherit',
      '& [class*="MuiAccordionSummary-expandIcon"]': {
        backgroundColor: theme.palette.whiteTransparent[20],
        opacity: 1
      }
    }
  },
  summaryContent: {
    margin: '17px 0',
    '&.Mui-expanded, &[class*="MuiAccordionSummary-expanded"]': {
      margin: 'inherit'
    }
  },
  summaryExpandIcon: ({
    textColor
  }) => ({
    color: textColor,
    transform: 'rotate(180deg)',
    opacity: 0.7,
    '&.Mui-expanded, &[class*="MuiAccordionSummary-expanded"]': {
      transform: 'rotate(0deg)'
    }
  }),
  accordion: ({
    backgroundColor,
    textColor
  }) => ({
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor,
    color: textColor
  }),
  heading: {
    textAlign: 'center',
    padding: '0 0 0 22px',
    width: '100%'
  },
  content: {
    padding: '0 24px 24px'
  },
  footerImage: {
    display: 'flex'
  }
}), {
  classNamePrefix: 'InfoSheet'
});

function mergeClasses(cls1, cls2) {
  const newClasses = _extends_1({}, cls1);

  Object.keys(cls2).forEach(key => {
    newClasses[key] = newClasses[key] ? `${newClasses[key]} ${cls2[key]}` : cls2[key];
  });
  return newClasses;
}

var _ref2$2 = /*#__PURE__*/React__default.createElement(ExpandMore, null);

function InfoSheet(_ref) {
  let {
    title,
    children,
    backgroundColor,
    textColor,
    footerImage,
    AccordionProps
  } = _ref,
      other = objectWithoutPropertiesLoose(_ref, ["title", "children", "backgroundColor", "textColor", "footerImage", "AccordionProps"]);

  const classes = useStyles$d({
    backgroundColor,
    textColor
  });

  const {
    classes: accordionClasses
  } = AccordionProps,
        restAccordionProps = objectWithoutPropertiesLoose(AccordionProps, ["classes"]);

  const accordionProps = _extends_1({
    square: true,
    classes: mergeClasses(accordionClasses, {
      root: classes.accordion
    })
  }, restAccordionProps);

  return /*#__PURE__*/React__default.createElement("div", other, /*#__PURE__*/React__default.createElement(Accordion, accordionProps, /*#__PURE__*/React__default.createElement(AccordionSummary, {
    expandIcon: _ref2$2,
    "aria-controls": "info-sheet-content",
    id: "info-sheet-content",
    classes: {
      root: classes.summaryRoot,
      expandIcon: classes.summaryExpandIcon,
      content: classes.summaryContent
    },
    IconButtonProps: {
      size: 'small'
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.heading
  }, typeof title === 'string' && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5"
  }, title), typeof title !== 'string' && title)), /*#__PURE__*/React__default.createElement(AccordionDetails, {
    className: classes.content
  }, children), footerImage && /*#__PURE__*/React__default.createElement("div", {
    className: classes.footerImage
  }, typeof footerImage === 'string' && /*#__PURE__*/React__default.createElement("img", {
    src: footerImage,
    alt: ""
  }), typeof footerImage !== 'string' && footerImage)));
}
process.env.NODE_ENV !== "production" ? InfoSheet.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.node.isRequired,
  backgroundColor: propTypes.string,
  textColor: propTypes.string,
  footerImage: propTypes.node,
  classes: propTypes.shape({
    root: propTypes.shape({}),
    footer: propTypes.shape({})
  }),
  AccordionProps: propTypes.shape({})
} : void 0;
InfoSheet.defaultProps = {
  backgroundColor: primaryColors.indigo,
  textColor: primaryColors.white,
  footerImage: null,
  classes: {},
  AccordionProps: {}
};

const useStyles$e = styles.makeStyles(theme => ({
  iconWrapper: {
    color: theme.palette.greyTransparent[50],
    lineHeight: '1em'
  }
}));

var _ref$2 = /*#__PURE__*/React__default.createElement(HelpIcon, null);

const LabelAndTooltip = ({
  label,
  required,
  placement,
  tooltip
}) => {
  const classes = useStyles$e();
  return /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    alignItems: "center",
    justify: "space-between"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, label, " ", required && '*'), /*#__PURE__*/React__default.createElement(Grid, {
    className: classes.iconWrapper,
    item: true
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    title: tooltip,
    placement: placement
  }, _ref$2)));
};

const InputLabelWithTooltip = props => {
  const {
    renderInputLabelEl
  } = props,
        other = objectWithoutPropertiesLoose(props, ["renderInputLabelEl"]);

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, renderInputLabelEl && /*#__PURE__*/React__default.createElement(InputLabel, other, /*#__PURE__*/React__default.createElement(LabelAndTooltip, props)), !renderInputLabelEl && /*#__PURE__*/React__default.createElement(LabelAndTooltip, props));
};

process.env.NODE_ENV !== "production" ? InputLabelWithTooltip.propTypes = {
  label: propTypes.string.isRequired,
  tooltip: propTypes.string.isRequired,
  placement: propTypes.string,
  required: propTypes.bool,
  renderInputLabelEl: propTypes.bool
} : void 0;
InputLabelWithTooltip.defaultProps = {
  placement: 'bottom',
  required: false,
  renderInputLabelEl: false
};

const useStyles$f = styles.makeStyles(({
  spacing
}) => ({
  closeButton: {
    position: 'absolute',
    top: 14,
    right: 14
  }
}), {
  classNamePrefix: 'DialogTitleWithCloseButton'
});

var _ref$3 = /*#__PURE__*/React__default.createElement(CloseIcon, null);

const DialogTitleWithCloseButton = props => {
  const {
    className,
    children,
    TitleProps,
    CloseButtonProps,
    onClose
  } = props,
        other = objectWithoutPropertiesLoose(props, ["className", "children", "TitleProps", "CloseButtonProps", "onClose"]);

  const classes = useStyles$f();
  return /*#__PURE__*/React__default.createElement(DialogTitle, Object.assign({
    className: className,
    disableTypography: true
  }, other), /*#__PURE__*/React__default.createElement(Typography, Object.assign({
    component: "h2",
    variant: "h4"
  }, TitleProps), children), /*#__PURE__*/React__default.createElement(IconButton, Object.assign({
    className: classes.closeButton,
    onClick: onClose,
    "aria-label": "close"
  }, CloseButtonProps), _ref$3));
};

process.env.NODE_ENV !== "production" ? DialogTitleWithCloseButton.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  TitleProps: propTypes.object,
  CloseButtonProps: propTypes.object,
  onClose: propTypes.func
} : void 0;
DialogTitleWithCloseButton.defaultProps = {
  className: '',
  children: null,
  TitleProps: {},
  CloseButtonProps: {},
  onClose: () => {}
};

const useStyles$g = styles.makeStyles(({
  spacing
}) => ({
  subtitle: {
    marginBottom: 20
  },
  actions: {
    padding: '8px 24px 16px'
  }
}), {
  classNamePrefix: 'ConfirmDialog'
});

function getConfirmButtonText(confirmButtonText, type) {
  return confirmButtonText !== null ? confirmButtonText : type === 'alert' ? 'Ok' : 'Yes';
}

const ConfirmDialog = props => {
  const {
    type,
    className,
    children,
    open,
    titleText,
    TitleProps,
    subtitleText,
    SubtitleProps,
    descriptionText,
    DescriptionProps,
    confirmButtonText,
    ConfirmButtonProps,
    cancelButtonText,
    CancelButtonProps,
    onClose,
    onConfirm
  } = props,
        other = objectWithoutPropertiesLoose(props, ["type", "className", "children", "open", "titleText", "TitleProps", "subtitleText", "SubtitleProps", "descriptionText", "DescriptionProps", "confirmButtonText", "ConfirmButtonProps", "cancelButtonText", "CancelButtonProps", "onClose", "onConfirm"]);

  const classes = useStyles$g();
  return /*#__PURE__*/React__default.createElement(Dialog, Object.assign({
    className: className,
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirmation-dialog-title",
    "aria-describedby": "confirmation-dialog-description"
  }, other), titleText && /*#__PURE__*/React__default.createElement(DialogTitleWithCloseButton, {
    onClose: onClose,
    TitleProps: _extends_1({
      id: 'confirmation-dialog-title'
    }, TitleProps)
  }, titleText), /*#__PURE__*/React__default.createElement(DialogContent, {
    id: "confirmation-dialog-description"
  }, !children && subtitleText && /*#__PURE__*/React__default.createElement(DialogContentText, Object.assign({
    className: classes.subtitle,
    component: "h3",
    variant: "h5"
  }, SubtitleProps), subtitleText), !children && descriptionText && /*#__PURE__*/React__default.createElement(DialogContentText, DescriptionProps, descriptionText), children), /*#__PURE__*/React__default.createElement(DialogActions, {
    className: classes.actions
  }, type !== 'alert' && /*#__PURE__*/React__default.createElement(LoadingButton, Object.assign({
    variant: "text",
    onClick: onClose,
    "data-qa-selector": "confirmation-dialog-cancel-button"
  }, CancelButtonProps), cancelButtonText), /*#__PURE__*/React__default.createElement(LoadingButton, Object.assign({
    variant: "contained",
    onClick: onConfirm,
    "data-qa-selector": "confirmation-dialog-confirm-button",
    autoFocus: true
  }, ConfirmButtonProps), getConfirmButtonText(confirmButtonText, type))));
};

process.env.NODE_ENV !== "production" ? ConfirmDialog.propTypes = {
  type: propTypes.oneOf(['confirm', 'alert']),
  className: propTypes.string,
  children: propTypes.node,
  open: propTypes.bool,
  titleText: propTypes.string,
  TitleProps: propTypes.object,
  subtitleText: propTypes.string,
  descriptionText: propTypes.oneOfType([propTypes.string, propTypes.node]),
  DescriptionProps: propTypes.object,
  confirmButtonText: propTypes.string,
  ConfirmButtonProps: propTypes.object,
  cancelButtonText: propTypes.string,
  CancelButtonProps: propTypes.object,
  onClose: propTypes.func,
  onConfirm: propTypes.func
} : void 0;
ConfirmDialog.defaultProps = {
  type: 'confirm',
  className: '',
  children: null,
  open: false,
  titleText: '',
  TitleProps: {},
  subtitleText: '',
  SubtitleProps: {},
  descriptionText: '',
  DescriptionProps: {},
  confirmButtonText: null,
  ConfirmButtonProps: {},
  cancelButtonText: 'No',
  CancelButtonProps: {},
  onClose: () => {},
  onConfirm: () => {}
};

const useStyles$h = styles.makeStyles({
  responsivePadding: {
    padding: '56.25% 0 0 0',
    position: 'relative'
  },
  responsiveWrapper: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  embed: {
    height: '100%',
    position: 'relative',
    width: '100%'
  },
  swatch: swatchOpacity => ({
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
    opacity: swatchOpacity,
    transition: 'opacity 200ms'
  }),
  still: {
    filter: 'blur(5px)',
    height: '100%',
    objectFit: 'contain;width:100%'
  }
});

const WistiaEmbed = ({
  videoId,
  embedOptions,
  onVideoPlay,
  onVideoPause,
  onVideoEnd
}) => {
  const [swatchOpacity, setSwatchOpacity] = React.useState(0);
  const classes = useStyles$h(swatchOpacity);

  const showSwatch = () => setSwatchOpacity(1);

  React.useEffect(() => {
    const id = `wistia-${videoId}`;

    if (!document.getElementById(id)) {
      const script1 = document.createElement('script');
      script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
      script1.async = true;
      script1.id = id;
      document.body.appendChild(script1);
    }

    if (!document.getElementById('wistiaJS')) {
      const script2 = document.createElement('script');
      script2.id = 'wistiaJS';
      script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script2.async = true;
      document.body.appendChild(script2);
    }

    const defaultEmbedOptions = {
      videoFoam: true
    };
    const embedConfig = {
      id: videoId,
      options: _extends_1({}, defaultEmbedOptions, embedOptions),
      onReady: video => {
        if (onVideoPlay) {
          video.bind('play', () => onVideoPlay(videoId));
        }

        if (onVideoPause) {
          video.bind('pause', () => {
            const percentWatched = video.percentWatched();
            onVideoPause(videoId, percentWatched);
          });
        }

        if (onVideoEnd) {
          video.bind('end', () => {
            const percentWatched = video.percentWatched();
            onVideoEnd(videoId, percentWatched);
          });
        }
      }
    }; // Many more player events we could subscribe to.
    // https://wistia.com/support/developers/player-api#events

    window._wq = window._wq || [];

    window._wq.push(embedConfig);

    return () => {
      // "revoke" key is an undocumented API feature provided by Wistia support.
      // This prevents an issue where onReady callback above would be triggered
      // a compounding number of times if this embed was used in a scenario where it could
      // be removed and re-added to the DOM (e.g. a modal).
      window._wq.push({
        revoke: embedConfig
      });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/React__default.createElement("div", {
    className: clsx('wistia_responsive_padding', classes.responsivePadding),
    "data-qa-selector": "wistia-embed"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: clsx('wistia_responsive_wrapper', classes.responsiveWrapper)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: clsx(`wistia_embed wistia_async_${videoId}`, classes.embed)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: clsx('wistia_swatch', classes.swatch)
  }, /*#__PURE__*/React__default.createElement("img", {
    src: `https://fast.wistia.com/embed/medias/${videoId}/swatch`,
    className: classes.still,
    alt: "",
    "aria-hidden": "true",
    onLoad: showSwatch
  })))));
};

process.env.NODE_ENV !== "production" ? WistiaEmbed.propTypes = {
  videoId: propTypes.string.isRequired,
  embedOptions: propTypes.shape({}),
  // https://wistia.com/support/developers/embed-options#options
  onVideoPlay: propTypes.func,
  onVideoPause: propTypes.func,
  onVideoEnd: propTypes.func
} : void 0;
WistiaEmbed.defaultProps = {
  embedOptions: {},
  onVideoPlay: null,
  onVideoPause: null,
  onVideoEnd: null
};

const DARK_HOVER_STATE = color => ({
  '&:hover, &.Mui-focusVisible': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color
  },
  '&:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color
  }
});

var _ref$4 = /*#__PURE__*/React__default.createElement(ErrorOutlineIcon, null);

var _ref2$3 = /*#__PURE__*/React__default.createElement(CheckCircleOutlineIcon, null);

var _ref3 = /*#__PURE__*/React__default.createElement(WarningIcon, null);

var _ref4$1 = /*#__PURE__*/React__default.createElement(InfoIcon, null);

function getIconBySeverity(severity) {
  switch (severity) {
    case 'error':
      return _ref$4;

    case 'success':
      return _ref2$3;

    case 'warning':
      return _ref3;

    case 'info':
      return _ref4$1;

    default:
      return null;
  }
}

const useStyles$i = styles.makeStyles(theme => ({
  root: ({
    severity
  }) => ({
    maxWidth: severity ? 392 : 336
  }),
  content: ({
    variant,
    hasIconCloseButton,
    severity,
    layout
  }) => _extends_1({
    backgroundColor: variant === 'light' ? theme.palette.common.white : theme.palette.grey[90],
    borderRadius: 2,
    color: variant === 'light' ? theme.palette.text.primary : 'rgba(255,255,255,0.9)',
    alignItems: hasIconCloseButton ? 'flex-start' : 'center',
    flexWrap: 'nowrap',
    padding: '6px 14px'
  }, (!severity || layout === 'message') && {
    paddingLeft: '16px'
  }),
  severityIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.greyTransparent[80],
    alignSelf: 'flex-start'
  },
  messageWrapper: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 0
  },
  message: {
    padding: '6px 0'
  },
  detail: {
    color: theme.palette.greyTransparent[70],
    '& a, & a:visited': {
      color: 'inherit'
    },
    '& a:hover, & a:focus': {
      outline: 0,
      color: theme.palette.primary.dark
    },
    '& a:active': {
      color: secondaryColors.navy
    }
  },
  button: ({
    variant
  }) => variant === 'dark' && _extends_1({
    color: theme.palette.info.light
  }, DARK_HOVER_STATE(theme.palette.info.light))
}), {
  classNamePrefix: 'Toast'
});

var _ref6 = /*#__PURE__*/React__default.createElement(CloseIcon, null);

const Toast = (_ref5) => {
  let {
    open,
    onClose,
    severity,
    message,
    detail,
    layout,
    className,
    textButtonClassName,
    iconButtonClassName,
    buttonLabel,
    hasIconCloseButton,
    variant,
    autoHideDuration
  } = _ref5,
      props = objectWithoutPropertiesLoose(_ref5, ["open", "onClose", "severity", "message", "detail", "layout", "className", "textButtonClassName", "iconButtonClassName", "buttonLabel", "hasIconCloseButton", "variant", "autoHideDuration"]);

  const classes = useStyles$i({
    variant,
    hasIconCloseButton,
    severity,
    layout
  });
  return /*#__PURE__*/React__default.createElement(Snackbar, Object.assign({
    className: clsx(classes.root, className),
    autoHideDuration: autoHideDuration,
    open: open,
    onClose: onClose
  }, props), /*#__PURE__*/React__default.createElement(SnackbarContent, {
    classes: {
      root: classes.content,
      message: classes.message
    },
    message: layout === 'alert' ? /*#__PURE__*/React__default.createElement("div", {
      className: classes.messageWrapper
    }, severity && /*#__PURE__*/React__default.createElement("div", {
      className: classes.severityIcon
    }, getIconBySeverity(severity)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Typography, {
      variant: "h6"
    }, message), detail && /*#__PURE__*/React__default.createElement(Typography, {
      className: classes.detail,
      component: "p",
      variant: "caption",
      dangerouslySetInnerHTML: {
        __html: detail
      }
    }))) : message,
    action: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, hasIconCloseButton ? /*#__PURE__*/React__default.createElement(IconButton, {
      className: clsx(classes.button, iconButtonClassName),
      "aria-label": "close",
      onClick: onClose
    }, _ref6) : /*#__PURE__*/React__default.createElement(Button, {
      className: clsx(classes.button, textButtonClassName),
      variant: "text",
      onClick: onClose
    }, buttonLabel))
  }));
};

process.env.NODE_ENV !== "production" ? Toast.propTypes = {
  autoHideDuration: propTypes.number,
  buttonLabel: propTypes.string,
  detail: propTypes.string,
  hasIconCloseButton: propTypes.bool,
  layout: propTypes.oneOf(['message', 'alert']),
  message: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  severity: propTypes.oneOf(['error', 'info', 'success', 'warning', null]),
  className: propTypes.string,
  iconButtonClassName: propTypes.string,
  textButtonClassName: propTypes.string,
  variant: propTypes.oneOf(['light', 'dark'])
} : void 0;
Toast.defaultProps = {
  autoHideDuration: 6000,
  body: null,
  className: null,
  layout: 'message',
  severity: null,
  iconButtonClassName: null,
  textButtonClassName: null,
  hasIconCloseButton: false,
  buttonLabel: 'Close',
  variant: 'dark'
};

var dist = createCommonjsModule(function (module) {
module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r});},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0});},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=176)}([function(n,e,t){n.exports=t(174)();},function(n,e){n.exports=React__default;},function(n,e){var t=Array.isArray;n.exports=t;},function(n,e,t){var r=t(40),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();n.exports=a;},function(n,e,t){var r=t(78),o=t(25),a=t(27),i=t(28);n.exports=function(n,e,t){return n=i(n),t=null==t?0:r(a(t),0,n.length),e=o(e),n.slice(t,t+e.length)==e};},function(n,e,t){var r=t(171)(t(23));n.exports=r;},function(n,e,t){var r=t(14),o=t(76),a=t(77),i=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":i&&i in Object(n)?o(n):a(n)};},function(n,e){n.exports=function(n){return null!=n&&"object"==typeof n};},function(n,e){n.exports=function(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)};},function(n,e,t){var r=t(92),o=t(95);n.exports=function(n,e){var t=o(n,e);return r(t)?t:void 0};},function(n,e,t){var r=t(111),o=t(150),a=t(157),i=t(2),u=t(158);n.exports=function(n){return "function"==typeof n?n:null==n?a:"object"==typeof n?i(n)?o(n[0],n[1]):r(n):u(n)};},function(n,e,t){var r=t(44),o=t(34);n.exports=function(n){return null!=n&&o(n.length)&&!r(n)};},function(n,e,t){var r=t(133),o=t(140),a=t(11);n.exports=function(n){return a(n)?r(n):o(n)};},function(n,e,t){var r=t(26),o=t(10),a=t(168),i=t(2);n.exports=function(n,e){return (i(n)?r:a)(n,o(e,3))};},function(n,e,t){var r=t(3).Symbol;n.exports=r;},function(n,e,t){var r=t(6),o=t(7);n.exports=function(n){return "symbol"==typeof n||o(n)&&"[object Symbol]"==r(n)};},function(n,e,t){var r=t(9)(Object,"create");n.exports=r;},function(n,e,t){var r=t(100),o=t(101),a=t(102),i=t(103),u=t(104);function c(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1]);}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,n.exports=c;},function(n,e,t){var r=t(31);n.exports=function(n,e){for(var t=n.length;t--;)if(r(n[t][0],e))return t;return -1};},function(n,e,t){var r=t(106);n.exports=function(n,e){var t=n.__data__;return r(e)?t["string"==typeof e?"string":"hash"]:t.map};},function(n,e,t){var r=t(15);n.exports=function(n){if("string"==typeof n||r(n))return n;var e=n+"";return "0"==e&&1/n==-1/0?"-0":e};},function(n,e,t){var r=t(164),o=t(167)(r);n.exports=o;},function(n,e,t){var r=t(30);function o(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var t=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=n.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(o.Cache||r),t}o.Cache=r,n.exports=o;},function(n,e,t){var r=t(43),o=t(10),a=t(27),i=Math.max;n.exports=function(n,e,t){var u=null==n?0:n.length;if(!u)return -1;var c=null==t?0:a(t);return c<0&&(c=i(u+c,0)),r(n,o(e,3),c)};},function(n,e,t){var r=t(50),o=t(163),a=t(10),i=t(2);n.exports=function(n,e){return (i(n)?r:o)(n,a(e,3))};},function(n,e,t){var r=t(14),o=t(26),a=t(2),i=t(15),u=r?r.prototype:void 0,c=u?u.toString:void 0;n.exports=function n(e){if("string"==typeof e)return e;if(a(e))return o(e,n)+"";if(i(e))return c?c.call(e):"";var t=e+"";return "0"==t&&1/e==-1/0?"-0":t};},function(n,e){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o};},function(n,e,t){var r=t(79);n.exports=function(n){var e=r(n),t=e%1;return e==e?t?e-t:e:0};},function(n,e,t){var r=t(25);n.exports=function(n){return null==n?"":r(n)};},function(n,e,t){var r=t(43),o=t(82),a=t(83);n.exports=function(n,e,t){return e==e?a(n,e,t):r(n,o,t)};},function(n,e,t){var r=t(89),o=t(105),a=t(107),i=t(108),u=t(109);function c(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1]);}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,n.exports=c;},function(n,e){n.exports=function(n,e){return n===e||n!=n&&e!=e};},function(n,e,t){var r=t(9)(t(3),"Map");n.exports=r;},function(n,e){var t=/^(?:0|[1-9]\d*)$/;n.exports=function(n,e){var r=typeof n;return !!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&t.test(n))&&n>-1&&n%1==0&&n<e};},function(n,e){n.exports=function(n){return "number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991};},function(n,e,t){var r=t(2),o=t(15),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;n.exports=function(n,e){if(r(n))return !1;var t=typeof n;return !("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=n&&!o(n))||(i.test(n)||!a.test(n)||null!=e&&n in Object(e))};},function(n,e,t){var r=t(6),o=t(2),a=t(7);n.exports=function(n){return "string"==typeof n||!o(n)&&a(n)&&"[object String]"==r(n)};},function(n,e,t){var r=t(169),o=t(21),a=t(10),i=t(170),u=t(2);n.exports=function(n,e,t){var c=u(n)?r:i,s=arguments.length<3;return c(n,a(e,4),t,s,o)};},function(n,e,t){var r=t(49),o=t(10),a=t(172),i=t(2),u=t(173);n.exports=function(n,e,t){var c=i(n)?r:a;return t&&u(n,e,t)&&(e=void 0),c(n,o(e,3))};},function(n,e){var t;function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r);}return t}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n;}finally{try{r||null==u.return||u.return();}finally{if(o)throw a}}return t}(n,e)||i(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,e){if(n){if("string"==typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return "Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,e):void 0}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var c={};function s(n,e,t){e in c||(c[e]=[]);var r=t||0;c[e][r]=n;}var p,f=(t=[]).concat.apply(t,function(n){if(Array.isArray(n))return u(n)}(p=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["American Samoa",["oceania"],"as","1684"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Anguilla",["america","carribean"],"ai","1264"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","+.. (..) ........"],["Armenia",["asia","ex-ussr"],"am","374"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","+.. ... ... ..."],["Austria",["europe","european-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994"],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","+... (..) ... .. .."],["Belgium",["europe","european-union"],"be","32","+.. ... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bermuda",["america","north-america"],"bm","1441"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","+.. (..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","european-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Cayman Islands",["america","carribean"],"ky","1345"],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","+.. ..-........."],["Colombia",["america","south-america"],"co","57"],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Cook Islands",["oceania"],"ck","682"],["Costa Rica",["america","central-america"],"cr","506","+... ....-...."],["Côte d’Ivoire",["africa"],"ci","225"],["Croatia",["europe","european-union"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","european-union"],"cy","357","+... .. ......"],["Czech Republic",["europe","european-union"],"cz","420"],["Denmark",["europe","european-union"],"dk","45","+.. .. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","+... ....-...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","european-union","ex-ussr"],"ee","372","+... .... ......"],["Ethiopia",["africa"],"et","251"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","european-union"],"fi","358","+... .. ... .. .."],["France",["europe","european-union"],"fr","33","+.. . .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","european-union"],"de","49","+.. .... ........"],["Ghana",["africa"],"gh","233"],["Gibraltar",["europe"],"gi","350"],["Greece",["europe","european-union"],"gr","30"],["Greenland",["america"],"gl","299"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","+... ....-...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","+... ....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852","+... .... ...."],["Hungary",["europe","european-union"],"hu","36"],["Iceland",["europe"],"is","354","+... ... ...."],["India",["asia"],"in","91","+.. .....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98"],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","european-union"],"ie","353","+... .. ......."],["Israel",["middle-east"],"il","972","+... ... ... ...."],["Italy",["europe","european-union"],"it","39","+.. ... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81","+.. .. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","+. ... ...-..-..",1,["313","327","7172","312","73622","321","324","336","318","315","325","311","326","310"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996"],["Laos",["asia"],"la","856"],["Latvia",["europe","european-union","ex-ussr"],"lv","371"],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","european-union","ex-ussr"],"lt","370"],["Luxembourg",["europe","european-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","+.. ..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","european-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52"],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","+... (..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe"],"me","382"],["Montserrat",["america","carribean"],"ms","1664"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","european-union"],"nl","31","+.. .. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","+.. ...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["North Korea",["asia"],"kp","850"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Norway",["europe"],"no","47","+.. ... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","+.. ...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63","+.. .... ......."],["Poland",["europe","european-union"],"pl","48","+.. ...-...-..."],["Portugal",["europe","european-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","european-union"],"ro","40"],["Russia",["europe","asia","ex-ussr"],"ru","7","+. (...) ...-..-..",0],["Rwanda",["africa"],"rw","250"],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","+.. ....-...."],["Sint Maarten",["america","carribean"],"sx","1721"],["Slovakia",["europe","european-union"],"sk","421"],["Slovenia",["europe","european-union"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","+.. ... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","european-union"],"es","34","+.. ... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","european-union"],"se","46","+.. (..) ...-..-.."],["Switzerland",["europe"],"ch","41","+.. .. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tokelau",["oceania"],"tk","690"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","+.. ... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["Tuvalu",["asia"],"tv","688"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","+... (..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","european-union"],"gb","44","+.. .... ......"],["United States",["america","north-america"],"us","1","+. (...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998"],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39","+.. .. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Wallis and Futuna",["oceania"],"wf","681"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]].map((function(n){var e=a(n,7),t=e[0],i=e[1],u=e[2],c=e[3],p=e[4],f=e[5],l=e[6],d={name:t,regions:i,iso2:u,dialCode:c,priority:f,format:p||void 0,hasAreaCodes:l},g=[];return d.hasAreaCodes&&l.forEach((function(n){var e=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e));}));}return n}({},d,{regions:i,dialCode:"".concat(c).concat(n),isAreaCode:!0});g.push(e),s(u,e.dialCode);})),s(d.iso2,d.dialCode,d.hasAreaCodes),g.length>0?[d].concat(g):[d]})))||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(p)||i(p)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());n.exports={allCountries:f,allCountryCodes:c};},function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t;}).call(this,t(75));},function(n,e,t){var r=t(8),o=t(15),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(o(n))return NaN;if(r(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=r(e)?e+"":e;}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(a,"");var t=u.test(n);return t||c.test(n)?s(n.slice(2),t?2:8):i.test(n)?NaN:+n};},function(n,e){n.exports=function(n,e,t){var r=-1,o=n.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=n[r+e];return a};},function(n,e){n.exports=function(n,e,t,r){for(var o=n.length,a=t+(r?1:-1);r?a--:++a<o;)if(e(n[a],a,n))return a;return -1};},function(n,e,t){var r=t(6),o=t(8);n.exports=function(n){if(!o(n))return !1;var e=r(n);return "[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};},function(n,e){var t=Function.prototype.toString;n.exports=function(n){if(null!=n){try{return t.call(n)}catch(n){}try{return n+""}catch(n){}}return ""};},function(n,e,t){var r=t(17),o=t(113),a=t(114),i=t(115),u=t(116),c=t(117);function s(n){var e=this.__data__=new r(n);this.size=e.size;}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=u,s.prototype.set=c,n.exports=s;},function(n,e,t){var r=t(118),o=t(7);n.exports=function n(e,t,a,i,u){return e===t||(null==e||null==t||!o(e)&&!o(t)?e!=e&&t!=t:r(e,t,a,i,n,u))};},function(n,e,t){var r=t(119),o=t(49),a=t(122);n.exports=function(n,e,t,i,u,c){var s=1&t,p=n.length,f=e.length;if(p!=f&&!(s&&f>p))return !1;var l=c.get(n);if(l&&c.get(e))return l==e;var d=-1,g=!0,b=2&t?new r:void 0;for(c.set(n,e),c.set(e,n);++d<p;){var A=n[d],x=e[d];if(i)var v=s?i(x,A,d,e,n,c):i(A,x,d,n,e,c);if(void 0!==v){if(v)continue;g=!1;break}if(b){if(!o(e,(function(n,e){if(!a(b,e)&&(A===n||u(A,n,t,i,c)))return b.push(e)}))){g=!1;break}}else if(A!==x&&!u(A,x,t,i,c)){g=!1;break}}return c.delete(n),c.delete(e),g};},function(n,e){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length;++t<r;)if(e(n[t],t,n))return !0;return !1};},function(n,e){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length,o=0,a=[];++t<r;){var i=n[t];e(i,t,n)&&(a[o++]=i);}return a};},function(n,e,t){var r=t(135),o=t(7),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(n){return o(n)&&i.call(n,"callee")&&!u.call(n,"callee")};n.exports=c;},function(n,e,t){(function(n){var r=t(3),o=t(136),a=e&&!e.nodeType&&e,i=a&&"object"==typeof n&&n&&!n.nodeType&&n,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;n.exports=c;}).call(this,t(53)(n));},function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n};},function(n,e,t){var r=t(137),o=t(138),a=t(139),i=a&&a.isTypedArray,u=i?o(i):r;n.exports=u;},function(n,e,t){var r=t(8);n.exports=function(n){return n==n&&!r(n)};},function(n,e){n.exports=function(n,e){return function(t){return null!=t&&(t[n]===e&&(void 0!==e||n in Object(t)))}};},function(n,e,t){var r=t(58),o=t(20);n.exports=function(n,e){for(var t=0,a=(e=r(e,n)).length;null!=n&&t<a;)n=n[o(e[t++])];return t&&t==a?n:void 0};},function(n,e,t){var r=t(2),o=t(35),a=t(152),i=t(28);n.exports=function(n,e){return r(n)?n:o(n,e)?[n]:a(i(n))};},function(n,e,t){var r=t(25),o=t(80),a=t(81),i=t(84),u=t(85),c=t(28),s=/^\s+|\s+$/g;n.exports=function(n,e,t){if((n=c(n))&&(t||void 0===e))return n.replace(s,"");if(!n||!(e=r(e)))return n;var p=u(n),f=u(e),l=i(p,f),d=a(p,f)+1;return o(p,l,d).join("")};},function(n,e,t){var r=t(8),o=t(110),a=t(41),i=Math.max,u=Math.min;n.exports=function(n,e,t){var c,s,p,f,l,d,g=0,b=!1,A=!1,x=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function v(e){var t=c,r=s;return c=s=void 0,g=e,f=n.apply(r,t)}function h(n){return g=n,l=setTimeout(y,e),b?v(n):f}function m(n){var t=n-d;return void 0===d||t>=e||t<0||A&&n-g>=p}function y(){var n=o();if(m(n))return P(n);l=setTimeout(y,function(n){var t=e-(n-d);return A?u(t,p-(n-g)):t}(n));}function P(n){return l=void 0,x&&c?v(n):(c=s=void 0,f)}function C(){var n=o(),t=m(n);if(c=arguments,s=this,d=n,t){if(void 0===l)return h(d);if(A)return clearTimeout(l),l=setTimeout(y,e),v(d)}return void 0===l&&(l=setTimeout(y,e)),f}return e=a(e)||0,r(t)&&(b=!!t.leading,p=(A="maxWait"in t)?i(a(t.maxWait)||0,e):p,x="trailing"in t?!!t.trailing:x),C.cancel=function(){void 0!==l&&clearTimeout(l),g=0,c=d=s=l=void 0;},C.flush=function(){return void 0===l?f:P(o())},C};},function(n,e,t){var r=t(42);n.exports=function(n){var e=null==n?0:n.length;return e?r(n,1,e):[]};},function(n,e){n.exports=function(n){return n&&n.length?n[0]:void 0};},function(n,e,t){var r=t(29),o=t(11),a=t(36),i=t(27),u=t(161),c=Math.max;n.exports=function(n,e,t,s){n=o(n)?n:u(n),t=t&&!s?i(t):0;var p=n.length;return t<0&&(t=c(p+t,0)),a(n)?t<=p&&n.indexOf(e,t)>-1:!!p&&r(n,e,t)>-1};},function(n,e){n.exports=clsx;},function(n,e){n.exports=TextField;},function(n,e){n.exports=InputAdornment;},function(n,e){n.exports=Button;},function(n,e){n.exports=Menu;},function(n,e){n.exports=Divider;},function(n,e){n.exports=NativeSelect;},function(n,e){n.exports=withStyles;},function(n,e){n.exports=MenuItem;},function(n,e){n.exports=RootRef;},function(n,e){n.exports="data:image/png;base64,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";},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")();}catch(n){"object"==typeof window&&(t=window);}n.exports=t;},function(n,e,t){var r=t(14),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;n.exports=function(n){var e=a.call(n,u),t=n[u];try{n[u]=void 0;var r=!0;}catch(n){}var o=i.call(n);return r&&(e?n[u]=t:delete n[u]),o};},function(n,e){var t=Object.prototype.toString;n.exports=function(n){return t.call(n)};},function(n,e){n.exports=function(n,e,t){return n==n&&(void 0!==t&&(n=n<=t?n:t),void 0!==e&&(n=n>=e?n:e)),n};},function(n,e,t){var r=t(41);n.exports=function(n){return n?(n=r(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0};},function(n,e,t){var r=t(42);n.exports=function(n,e,t){var o=n.length;return t=void 0===t?o:t,!e&&t>=o?n:r(n,e,t)};},function(n,e,t){var r=t(29);n.exports=function(n,e){for(var t=n.length;t--&&r(e,n[t],0)>-1;);return t};},function(n,e){n.exports=function(n){return n!=n};},function(n,e){n.exports=function(n,e,t){for(var r=t-1,o=n.length;++r<o;)if(n[r]===e)return r;return -1};},function(n,e,t){var r=t(29);n.exports=function(n,e){for(var t=-1,o=n.length;++t<o&&r(e,n[t],0)>-1;);return t};},function(n,e,t){var r=t(86),o=t(87),a=t(88);n.exports=function(n){return o(n)?a(n):r(n)};},function(n,e){n.exports=function(n){return n.split("")};},function(n,e){var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");n.exports=function(n){return t.test(n)};},function(n,e){var t="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+o+")"+"?",s="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[a,i,u].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),p="(?:"+[a+r+"?",r,i,u,t].join("|")+")",f=RegExp(o+"(?="+o+")|"+p+s,"g");n.exports=function(n){return n.match(f)||[]};},function(n,e,t){var r=t(90),o=t(17),a=t(32);n.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r};};},function(n,e,t){var r=t(91),o=t(96),a=t(97),i=t(98),u=t(99);function c(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1]);}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,n.exports=c;},function(n,e,t){var r=t(16);n.exports=function(){this.__data__=r?r(null):{},this.size=0;};},function(n,e,t){var r=t(44),o=t(93),a=t(8),i=t(45),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,p=c.toString,f=s.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(n){return !(!a(n)||o(n))&&(r(n)?l:u).test(i(n))};},function(n,e,t){var r,o=t(94),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";n.exports=function(n){return !!a&&a in n};},function(n,e,t){var r=t(3)["__core-js_shared__"];n.exports=r;},function(n,e){n.exports=function(n,e){return null==n?void 0:n[e]};},function(n,e){n.exports=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e};},function(n,e,t){var r=t(16),o=Object.prototype.hasOwnProperty;n.exports=function(n){var e=this.__data__;if(r){var t=e[n];return "__lodash_hash_undefined__"===t?void 0:t}return o.call(e,n)?e[n]:void 0};},function(n,e,t){var r=t(16),o=Object.prototype.hasOwnProperty;n.exports=function(n){var e=this.__data__;return r?void 0!==e[n]:o.call(e,n)};},function(n,e,t){var r=t(16);n.exports=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=r&&void 0===e?"__lodash_hash_undefined__":e,this};},function(n,e){n.exports=function(){this.__data__=[],this.size=0;};},function(n,e,t){var r=t(18),o=Array.prototype.splice;n.exports=function(n){var e=this.__data__,t=r(e,n);return !(t<0)&&(t==e.length-1?e.pop():o.call(e,t,1),--this.size,!0)};},function(n,e,t){var r=t(18);n.exports=function(n){var e=this.__data__,t=r(e,n);return t<0?void 0:e[t][1]};},function(n,e,t){var r=t(18);n.exports=function(n){return r(this.__data__,n)>-1};},function(n,e,t){var r=t(18);n.exports=function(n,e){var t=this.__data__,o=r(t,n);return o<0?(++this.size,t.push([n,e])):t[o][1]=e,this};},function(n,e,t){var r=t(19);n.exports=function(n){var e=r(this,n).delete(n);return this.size-=e?1:0,e};},function(n,e){n.exports=function(n){var e=typeof n;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n};},function(n,e,t){var r=t(19);n.exports=function(n){return r(this,n).get(n)};},function(n,e,t){var r=t(19);n.exports=function(n){return r(this,n).has(n)};},function(n,e,t){var r=t(19);n.exports=function(n,e){var t=r(this,n),o=t.size;return t.set(n,e),this.size+=t.size==o?0:1,this};},function(n,e,t){var r=t(3);n.exports=function(){return r.Date.now()};},function(n,e,t){var r=t(112),o=t(149),a=t(56);n.exports=function(n){var e=o(n);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(t){return t===n||r(t,n,e)}};},function(n,e,t){var r=t(46),o=t(47);n.exports=function(n,e,t,a){var i=t.length,u=i,c=!a;if(null==n)return !u;for(n=Object(n);i--;){var s=t[i];if(c&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return !1}for(;++i<u;){var p=(s=t[i])[0],f=n[p],l=s[1];if(c&&s[2]){if(void 0===f&&!(p in n))return !1}else {var d=new r;if(a)var g=a(f,l,p,n,e,d);if(!(void 0===g?o(l,f,3,a,d):g))return !1}}return !0};},function(n,e,t){var r=t(17);n.exports=function(){this.__data__=new r,this.size=0;};},function(n,e){n.exports=function(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t};},function(n,e){n.exports=function(n){return this.__data__.get(n)};},function(n,e){n.exports=function(n){return this.__data__.has(n)};},function(n,e,t){var r=t(17),o=t(32),a=t(30);n.exports=function(n,e){var t=this.__data__;if(t instanceof r){var i=t.__data__;if(!o||i.length<199)return i.push([n,e]),this.size=++t.size,this;t=this.__data__=new a(i);}return t.set(n,e),this.size=t.size,this};},function(n,e,t){var r=t(46),o=t(48),a=t(123),i=t(127),u=t(144),c=t(2),s=t(52),p=t(54),f="[object Object]",l=Object.prototype.hasOwnProperty;n.exports=function(n,e,t,d,g,b){var A=c(n),x=c(e),v=A?"[object Array]":u(n),h=x?"[object Array]":u(e),m=(v="[object Arguments]"==v?f:v)==f,y=(h="[object Arguments]"==h?f:h)==f,P=v==h;if(P&&s(n)){if(!s(e))return !1;A=!0,m=!1;}if(P&&!m)return b||(b=new r),A||p(n)?o(n,e,t,d,g,b):a(n,e,v,t,d,g,b);if(!(1&t)){var C=m&&l.call(n,"__wrapped__"),k=y&&l.call(e,"__wrapped__");if(C||k){var w=C?n.value():n,B=k?e.value():e;return b||(b=new r),g(w,B,t,d,b)}}return !!P&&(b||(b=new r),i(n,e,t,d,g,b))};},function(n,e,t){var r=t(30),o=t(120),a=t(121);function i(n){var e=-1,t=null==n?0:n.length;for(this.__data__=new r;++e<t;)this.add(n[e]);}i.prototype.add=i.prototype.push=o,i.prototype.has=a,n.exports=i;},function(n,e){n.exports=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this};},function(n,e){n.exports=function(n){return this.__data__.has(n)};},function(n,e){n.exports=function(n,e){return n.has(e)};},function(n,e,t){var r=t(14),o=t(124),a=t(31),i=t(48),u=t(125),c=t(126),s=r?r.prototype:void 0,p=s?s.valueOf:void 0;n.exports=function(n,e,t,r,s,f,l){switch(t){case"[object DataView]":if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return !1;n=n.buffer,e=e.buffer;case"[object ArrayBuffer]":return !(n.byteLength!=e.byteLength||!f(new o(n),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+n,+e);case"[object Error]":return n.name==e.name&&n.message==e.message;case"[object RegExp]":case"[object String]":return n==e+"";case"[object Map]":var d=u;case"[object Set]":var g=1&r;if(d||(d=c),n.size!=e.size&&!g)return !1;var b=l.get(n);if(b)return b==e;r|=2,l.set(n,e);var A=i(d(n),d(e),r,s,f,l);return l.delete(n),A;case"[object Symbol]":if(p)return p.call(n)==p.call(e)}return !1};},function(n,e,t){var r=t(3).Uint8Array;n.exports=r;},function(n,e){n.exports=function(n){var e=-1,t=Array(n.size);return n.forEach((function(n,r){t[++e]=[r,n];})),t};},function(n,e){n.exports=function(n){var e=-1,t=Array(n.size);return n.forEach((function(n){t[++e]=n;})),t};},function(n,e,t){var r=t(128),o=Object.prototype.hasOwnProperty;n.exports=function(n,e,t,a,i,u){var c=1&t,s=r(n),p=s.length;if(p!=r(e).length&&!c)return !1;for(var f=p;f--;){var l=s[f];if(!(c?l in e:o.call(e,l)))return !1}var d=u.get(n);if(d&&u.get(e))return d==e;var g=!0;u.set(n,e),u.set(e,n);for(var b=c;++f<p;){var A=n[l=s[f]],x=e[l];if(a)var v=c?a(x,A,l,e,n,u):a(A,x,l,n,e,u);if(!(void 0===v?A===x||i(A,x,t,a,u):v)){g=!1;break}b||(b="constructor"==l);}if(g&&!b){var h=n.constructor,m=e.constructor;h==m||!("constructor"in n)||!("constructor"in e)||"function"==typeof h&&h instanceof h&&"function"==typeof m&&m instanceof m||(g=!1);}return u.delete(n),u.delete(e),g};},function(n,e,t){var r=t(129),o=t(131),a=t(12);n.exports=function(n){return r(n,a,o)};},function(n,e,t){var r=t(130),o=t(2);n.exports=function(n,e,t){var a=e(n);return o(n)?a:r(a,t(n))};},function(n,e){n.exports=function(n,e){for(var t=-1,r=e.length,o=n.length;++t<r;)n[o+t]=e[t];return n};},function(n,e,t){var r=t(50),o=t(132),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(n){return null==n?[]:(n=Object(n),r(i(n),(function(e){return a.call(n,e)})))}:o;n.exports=u;},function(n,e){n.exports=function(){return []};},function(n,e,t){var r=t(134),o=t(51),a=t(2),i=t(52),u=t(33),c=t(54),s=Object.prototype.hasOwnProperty;n.exports=function(n,e){var t=a(n),p=!t&&o(n),f=!t&&!p&&i(n),l=!t&&!p&&!f&&c(n),d=t||p||f||l,g=d?r(n.length,String):[],b=g.length;for(var A in n)!e&&!s.call(n,A)||d&&("length"==A||f&&("offset"==A||"parent"==A)||l&&("buffer"==A||"byteLength"==A||"byteOffset"==A)||u(A,b))||g.push(A);return g};},function(n,e){n.exports=function(n,e){for(var t=-1,r=Array(n);++t<n;)r[t]=e(t);return r};},function(n,e,t){var r=t(6),o=t(7);n.exports=function(n){return o(n)&&"[object Arguments]"==r(n)};},function(n,e){n.exports=function(){return !1};},function(n,e,t){var r=t(6),o=t(34),a=t(7),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,n.exports=function(n){return a(n)&&o(n.length)&&!!i[r(n)]};},function(n,e){n.exports=function(n){return function(e){return n(e)}};},function(n,e,t){(function(n){var r=t(40),o=e&&!e.nodeType&&e,a=o&&"object"==typeof n&&n&&!n.nodeType&&n,i=a&&a.exports===o&&r.process,u=function(){try{var n=a&&a.require&&a.require("util").types;return n||i&&i.binding&&i.binding("util")}catch(n){}}();n.exports=u;}).call(this,t(53)(n));},function(n,e,t){var r=t(141),o=t(142),a=Object.prototype.hasOwnProperty;n.exports=function(n){if(!r(n))return o(n);var e=[];for(var t in Object(n))a.call(n,t)&&"constructor"!=t&&e.push(t);return e};},function(n,e){var t=Object.prototype;n.exports=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||t)};},function(n,e,t){var r=t(143)(Object.keys,Object);n.exports=r;},function(n,e){n.exports=function(n,e){return function(t){return n(e(t))}};},function(n,e,t){var r=t(145),o=t(32),a=t(146),i=t(147),u=t(148),c=t(6),s=t(45),p=s(r),f=s(o),l=s(a),d=s(i),g=s(u),b=c;(r&&"[object DataView]"!=b(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=b(new o)||a&&"[object Promise]"!=b(a.resolve())||i&&"[object Set]"!=b(new i)||u&&"[object WeakMap]"!=b(new u))&&(b=function(n){var e=c(n),t="[object Object]"==e?n.constructor:void 0,r=t?s(t):"";if(r)switch(r){case p:return "[object DataView]";case f:return "[object Map]";case l:return "[object Promise]";case d:return "[object Set]";case g:return "[object WeakMap]"}return e}),n.exports=b;},function(n,e,t){var r=t(9)(t(3),"DataView");n.exports=r;},function(n,e,t){var r=t(9)(t(3),"Promise");n.exports=r;},function(n,e,t){var r=t(9)(t(3),"Set");n.exports=r;},function(n,e,t){var r=t(9)(t(3),"WeakMap");n.exports=r;},function(n,e,t){var r=t(55),o=t(12);n.exports=function(n){for(var e=o(n),t=e.length;t--;){var a=e[t],i=n[a];e[t]=[a,i,r(i)];}return e};},function(n,e,t){var r=t(47),o=t(151),a=t(154),i=t(35),u=t(55),c=t(56),s=t(20);n.exports=function(n,e){return i(n)&&u(e)?c(s(n),e):function(t){var i=o(t,n);return void 0===i&&i===e?a(t,n):r(e,i,3)}};},function(n,e,t){var r=t(57);n.exports=function(n,e,t){var o=null==n?void 0:r(n,e);return void 0===o?t:o};},function(n,e,t){var r=t(153),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(o,(function(n,t,r,o){e.push(r?o.replace(a,"$1"):t||n);})),e}));n.exports=i;},function(n,e,t){var r=t(22);n.exports=function(n){var e=r(n,(function(n){return 500===t.size&&t.clear(),n})),t=e.cache;return e};},function(n,e,t){var r=t(155),o=t(156);n.exports=function(n,e){return null!=n&&o(n,e,r)};},function(n,e){n.exports=function(n,e){return null!=n&&e in Object(n)};},function(n,e,t){var r=t(58),o=t(51),a=t(2),i=t(33),u=t(34),c=t(20);n.exports=function(n,e,t){for(var s=-1,p=(e=r(e,n)).length,f=!1;++s<p;){var l=c(e[s]);if(!(f=null!=n&&t(n,l)))break;n=n[l];}return f||++s!=p?f:!!(p=null==n?0:n.length)&&u(p)&&i(l,p)&&(a(n)||o(n))};},function(n,e){n.exports=function(n){return n};},function(n,e,t){var r=t(159),o=t(160),a=t(35),i=t(20);n.exports=function(n){return a(n)?r(i(n)):o(n)};},function(n,e){n.exports=function(n){return function(e){return null==e?void 0:e[n]}};},function(n,e,t){var r=t(57);n.exports=function(n){return function(e){return r(e,n)}};},function(n,e,t){var r=t(162),o=t(12);n.exports=function(n){return null==n?[]:r(n,o(n))};},function(n,e,t){var r=t(26);n.exports=function(n,e){return r(e,(function(e){return n[e]}))};},function(n,e,t){var r=t(21);n.exports=function(n,e){var t=[];return r(n,(function(n,r,o){e(n,r,o)&&t.push(n);})),t};},function(n,e,t){var r=t(165),o=t(12);n.exports=function(n,e){return n&&r(n,e,o)};},function(n,e,t){var r=t(166)();n.exports=r;},function(n,e){n.exports=function(n){return function(e,t,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[n?u:++o];if(!1===t(a[c],c,a))break}return e}};},function(n,e,t){var r=t(11);n.exports=function(n,e){return function(t,o){if(null==t)return t;if(!r(t))return n(t,o);for(var a=t.length,i=e?a:-1,u=Object(t);(e?i--:++i<a)&&!1!==o(u[i],i,u););return t}};},function(n,e,t){var r=t(21),o=t(11);n.exports=function(n,e){var t=-1,a=o(n)?Array(n.length):[];return r(n,(function(n,r,o){a[++t]=e(n,r,o);})),a};},function(n,e){n.exports=function(n,e,t,r){var o=-1,a=null==n?0:n.length;for(r&&a&&(t=n[++o]);++o<a;)t=e(t,n[o],o,n);return t};},function(n,e){n.exports=function(n,e,t,r,o){return o(n,(function(n,o,a){t=r?(r=!1,n):e(t,n,o,a);})),t};},function(n,e,t){var r=t(10),o=t(11),a=t(12);n.exports=function(n){return function(e,t,i){var u=Object(e);if(!o(e)){var c=r(t,3);e=a(e),t=function(n){return c(u[n],n,u)};}var s=n(e,t,i);return s>-1?u[c?e[s]:s]:void 0}};},function(n,e,t){var r=t(21);n.exports=function(n,e){var t;return r(n,(function(n,r,o){return !(t=e(n,r,o))})),!!t};},function(n,e,t){var r=t(31),o=t(11),a=t(33),i=t(8);n.exports=function(n,e,t){if(!i(t))return !1;var u=typeof e;return !!("number"==u?o(t)&&a(e,t.length):"string"==u&&e in t)&&r(t[e],n)};},function(n,e,t){var r=t(175);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t};},function(n,e,t){n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";},function(n,e,t){t.r(e);var r=t(36),o=t.n(r),a=t(4),i=t.n(a),u=t(59),c=t.n(u),s=t(22),p=t.n(s),f=t(60),l=t.n(f),d=t(61),g=t.n(d),b=t(62),A=t.n(b),x=t(23),v=t.n(x),h=t(63),m=t.n(h),y=t(24),P=t.n(y),C=t(13),k=t.n(C),w=t(37),B=t.n(w),j=t(5),I=t.n(j),O=t(38),E=t.n(O),D=t(1),Q=t.n(D),S=t(0),T=t.n(S),R=t(64),M=t.n(R),F=t(65),N=t.n(F),z=t(66),U=t.n(z),K=t(67),L=t.n(K),G=t(68),H=t.n(G),q=t(69),Y=t.n(q),V=t(70),J=t.n(V),X=t(71),Z=t.n(X),W=t(39),_=t.n(W),$=t(72),nn=t.n($),en=t(73),tn=t.n(en);function rn(n){return (rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function on(){return (on=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n}).apply(this,arguments)}function an(n,e){if(null==n)return {};var t,r,o=function(n,e){if(null==n)return {};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t]);}return o}function un(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function cn(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r);}}function sn(n,e){return !e||"object"!==rn(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function pn(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return !1}}function fn(n){return (fn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function ln(n,e){return (ln=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var dn=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&ln(n,e);}(i,n);var e,t,r,a=(e=i,function(){var n,t=fn(e);if(pn()){var r=fn(this).constructor;n=Reflect.construct(t,arguments,r);}else n=t.apply(this,arguments);return sn(this,n)});function i(){return un(this,i),a.apply(this,arguments)}return t=i,(r=[{key:"render",value:function(){var n=this.props,e=n.name,t=n.iso2,r=n.dialCode,o=n.localization,a=n.itemRef,i=n.native,u=n.flagClass,c=an(n,["name","iso2","dialCode","localization","itemRef","native","flagClass"]);return i?Q.a.createElement("option",on({className:"country","data-dial-code":"1","data-country-code":t,value:t},c),o||e," ","+".concat(r)):Q.a.createElement(tn.a,{rootRef:function(n){return a(n)}},Q.a.createElement(nn.a,on({className:"country","data-dial-code":"1","data-country-code":t},c),Q.a.createElement("div",{className:"flag ".concat(t," margin ").concat(u)}),Q.a.createElement("span",{className:"country-name"},o||e),Q.a.createElement("span",{className:"dial-code"},"+".concat(r))))}}])&&cn(t.prototype,r),i}(Q.a.PureComponent);dn.propTypes={name:T.a.string.isRequired,iso2:T.a.string.isRequired,dialCode:T.a.string.isRequired,itemRef:T.a.func.isRequired,localization:T.a.string,native:T.a.bool,flagClass:T.a.string.isRequired},dn.defaultProps={localization:null,native:!1};var gn=dn,bn=t(74),An=t.n(bn);function xn(n){return (xn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function vn(){return (vn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);}return n}).apply(this,arguments)}function hn(n,e){if(null==n)return {};var t,r,o=function(n,e){if(null==n)return {};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t]);}return o}function mn(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r);}}function yn(n,e){return !e||"object"!==xn(e)&&"function"!=typeof e?Pn(n):e}function Pn(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Cn(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return !1}}function kn(n){return (kn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function wn(n,e){return (wn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function Bn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r);}return t}function jn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Bn(Object(t),!0).forEach((function(e){In(n,e,t[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Bn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e));}));}return n}function In(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var On=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&wn(n,e);}(s,n);var e,t,r,u=(e=s,function(){var n,t=kn(e);if(Cn()){var r=kn(this).constructor;n=Reflect.construct(t,arguments,r);}else n=t.apply(this,arguments);return yn(this,n)});function s(n){var e;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),In(Pn(e=u.call(this,n)),"flags",{}),In(Pn(e),"guessSelectedCountry",p()((function(n,t,r){var o=I()(t,{iso2:r})||{};if(""===c()(n))return o;var a=B()(t,(function(e,t){if(i()(n,t.dialCode)){if(t.dialCode.length>e.dialCode.length)return t;if(t.dialCode.length===e.dialCode.length&&t.priority<e.priority)return t}return e}),{dialCode:"",priority:10001},Pn(e));return a.name?a:o}))),In(Pn(e),"getProbableCandidate",p()((function(n){if(!n||0===n.length)return null;var t=e.state.onlyCountries;return P()(t,(function(e){return i()(e.name.toLowerCase(),n.toLowerCase())}),Pn(e))[0]}))),In(Pn(e),"getOnlyCountries",(function(n,e){return 0===n.length?e:e.filter((function(e){return n.some((function(n){return n===e.iso2}))}))})),In(Pn(e),"excludeCountries",(function(n,e){return 0===e.length?n:P()(n,(function(n){return !m()(e,n.iso2)}))})),In(Pn(e),"filterRegions",(function(n,e){if("string"==typeof n){var t=n;return e.filter((function(n){return n.regions.some((function(n){return n===t}))}))}return e.filter((function(e){return n.map((function(n){return e.regions.some((function(e){return e===n}))})).some((function(n){return n}))}))})),In(Pn(e),"deleteAreaCodes",(function(n){return n.filter((function(n){return !0!==n.isAreaCode}))})),In(Pn(e),"updateDefaultCountry",(function(n){var t=e.state.onlyCountries,r=e.props.disableCountryCode,o=I()(t,{iso2:n});e.setState({defaultCountry:n,selectedCountry:o,formattedNumber:r?"":"+".concat(o.dialCode)});})),In(Pn(e),"scrollTo",(function(n){if(n){var t=e.dropdownContainerRef;t&&document.body&&(t.scrollTop=n.offsetTop);}})),In(Pn(e),"formatNumber",(function(n,t){var r,o=e.props,a=o.disableCountryCode,i=o.enableLongNumbers,u=o.autoFormat;if(a&&t?((r=t.split(" ")).shift(),r=r.join(" ")):r=t,!n||0===n.length)return a?"":"+";if(n&&n.length<2||!r||!u)return a?n:"+".concat(n);var c,s=B()(r,(function(n,e){return 0===n.remainingText.length?n:"."!==e?{formattedText:n.formattedText+e,remainingText:n.remainingText}:{formattedText:n.formattedText+A()(n.remainingText),remainingText:g()(n.remainingText)}}),{formattedText:"",remainingText:n.split("")});return (c=i?s.formattedText+s.remainingText.join(""):s.formattedText).includes("(")&&!c.includes(")")&&(c+=")"),c})),In(Pn(e),"cursorToEnd",(function(){var n=e.props.isModernBrowser,t=e.inputRef;if(t.focus(),n){var r=t.value.length;t.setSelectionRange(r,r);}})),In(Pn(e),"getElement",(function(n){return e.flags["flag_no_".concat(n)]})),In(Pn(e),"getCountryData",(function(){var n=e.state.selectedCountry;return n?{name:n.name||"",dialCode:n.dialCode||"",countryCode:n.iso2||""}:{}})),In(Pn(e),"handleInput",(function(n){var t=e.state,r=t.selectedCountry,o=t.freezeSelection,a=e.state,i=a.selectedCountry,u=a.formattedNumber,c=a.onlyCountries,s=a.defaultCountry,p=e.props,f=p.disableCountryCode,l=p.countryCodeEditable,d=p.isModernBrowser,g=p.onChange,b=f?"":"+";if(!l){var A="+".concat(r.dialCode);if(n.target.value.length<A.length)return}if(!(n.target.value.replace(/\D/g,"").length>15)&&n.target.value!==u){if(n.preventDefault?n.preventDefault():n.returnValue=!1,n.target.value.length>0){var x=n.target.value.replace(/\D/g,"");(!o||i.dialCode.length>x.length)&&(r=e.guessSelectedCountry(x.substring(0,6),c,s),o=!1),b=e.formatNumber(x,r.format);}var v=n.target.selectionStart,h=b.length-u.length;e.setState({formattedNumber:b,freezeSelection:o,selectedCountry:r.dialCode?r:i},(function(){d&&(h>0&&(v-=h),")"===b.charAt(b.length-1)?e.inputRef.setSelectionRange(b.length-1,b.length-1):v>0&&u.length>=b.length&&e.inputRef.setSelectionRange(v,v));g&&g(b,e.getCountryData());}));}})),In(Pn(e),"handleRefInput",(function(n){var t,r=e.props,o=r.inputRef,a=r.InputProps;e.inputRef=n,o?t=o:a&&a.ref&&(t=a.ref),t&&("function"==typeof t?t(n):t.current=n);})),In(Pn(e),"handleInputClick",(function(n){var t=e.props.onClick;t&&t(n,e.getCountryData());})),In(Pn(e),"handleFlagItemClick",(function(n){var t=e.state,r=t.formattedNumber,a=t.selectedCountry,i=t.onlyCountries,u=e.props.onChange,c=a,s=o()(n)?I()(i,(function(e){return e.iso2===n})):I()(i,n),p=r.replace(" ","").replace("(","").replace(")","").replace("-",""),f=p.length>1?p.replace(c.dialCode,s.dialCode):s.dialCode,l=e.formatNumber(f.replace(/\D/g,""),s.format);e.setState({anchorEl:null,selectedCountry:s,freezeSelection:!0,formattedNumber:l},(function(){e.cursorToEnd(),u&&u(l,e.getCountryData());}));})),In(Pn(e),"handleInputFocus",(function(n){var t=e.state.selectedCountry,r=e.props,o=r.disableCountryCode,a=r.onFocus;e.inputRef&&"+"===e.inputRef.value&&t&&!o&&e.setState({formattedNumber:"+".concat(t.dialCode)},(function(){return setTimeout(e.cursorToEnd,10)})),e.setState({placeholder:""}),a&&a(n,e.getCountryData()),setTimeout(e.cursorToEnd,10);})),In(Pn(e),"handleInputBlur",(function(n){var t=e.props,r=t.placeholder,o=t.onBlur;n.target.value||e.setState({placeholder:r}),o&&o(n,e.getCountryData());})),In(Pn(e),"getHighlightCountryIndex",(function(n){var t=e.state,r=t.highlightCountryIndex,o=t.onlyCountries,a=t.preferredCountries,i=r+n;return i<0||i>=o.length+a.length?i-n:i})),In(Pn(e),"searchCountry",(function(){var n=e.state,t=n.queryString,r=n.onlyCountries,o=n.preferredCountries,a=e.getProbableCandidate(t)||r[0],i=v()(r,a)+o.length;e.scrollTo(e.getElement(i),!0),e.setState({queryString:"",highlightCountryIndex:i});})),In(Pn(e),"handleKeydown",(function(n){var t=e.state,r=t.anchorEl,o=t.highlightCountryIndex,a=t.preferredCountries,i=t.onlyCountries,u=t.queryString,c=t.debouncedQueryStingSearcher,s=e.props,p=s.keys,f=s.disabled;if(r&&!f){n.preventDefault?n.preventDefault():n.returnValue=!1;var l=function(n){e.setState({highlightCountryIndex:e.getHighlightCountryIndex(n)},(function(){e.scrollTo(e.getElement(o+a.length),!0);}));};switch(n.which){case p.DOWN:l(1);break;case p.UP:l(-1);break;case p.ENTER:e.handleFlagItemClick(i[o],n);break;case p.ESC:e.setState({anchorEl:null},e.cursorToEnd);break;default:(n.which>=p.A&&n.which<=p.Z||n.which===p.SPACE)&&e.setState({queryString:u+String.fromCharCode(n.which)},c);}}})),In(Pn(e),"handleInputKeyDown",(function(n){var t=e.props,r=t.keys,o=t.onEnterKeyPress,a=t.onKeyDown;n.which===r.ENTER&&o&&o(n),a&&a(n);})),In(Pn(e),"checkIfValid",(function(){var n=e.state.formattedNumber;return (0, e.props.isValid)(n.replace(/\D/g,""))})),In(Pn(e),"updateFormattedNumber",(function(n){var t,r=e.state,o=r.onlyCountries,a=r.defaultCountry,u=e.props.disableCountryCode,c=n,s=n;if(c.startsWith("+"))c=c.replace(/\D/g,""),t=e.guessSelectedCountry(c.substring(0,6),o,a),s=e.formatNumber(c,t.format);else {var p=(t=I()(o,{iso2:a}))&&!i()(c.replace(/\D/g,""),t.dialCode)?t.dialCode:"";s=e.formatNumber((u?"":p)+c.replace(/\D/g,""),t?t.format:void 0);}e.setState({selectedCountry:t,formattedNumber:s});})),In(Pn(e),"getDropdownProps",(function(){var n=e.state,t=n.selectedCountry,r=n.anchorEl,o=n.preferredCountries,a=n.onlyCountries,i=e.props,u=i.classes,c=i.dropdownClass,s=i.localization,p=i.disableDropdown,f=i.native,l="flag ".concat(t.iso2," ").concat(u.flag),d=function(n){return Boolean(t&&t.dialCode===n.dialCode)};return p?{}:{startAdornment:Q.a.createElement(U.a,{className:u.positionStart,position:"start"},f?Q.a.createElement(Q.a.Fragment,null,Q.a.createElement(J.a,{id:"country-menu",open:Boolean(r),onClose:function(){return e.setState({anchorEl:null})},className:u.native,classes:{root:M()(u.nativeRoot,"native",l),select:u.nativeSelect},onChange:function(n){return e.handleFlagItemClick(n.target.value)},disableUnderline:!0},!!o.length&&k()(o,(function(n,t){return Q.a.createElement(gn,{key:"preferred_".concat(n.iso2,"_").concat(t),itemRef:function(n){e.flags["flag_no_".concat(t)]=n;},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name],native:!0,flagClass:u.flag})})),k()(a,(function(n,t){return Q.a.createElement(gn,{key:"preferred_".concat(n.iso2,"_").concat(t),itemRef:function(n){e.flags["flag_no_".concat(t)]=n;},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name],native:!0,flagClass:u.flag})})))):Q.a.createElement(Q.a.Fragment,null,Q.a.createElement(L.a,{className:u.flagButton,"aria-owns":r?"country-menu":null,"aria-label":"Select country",onClick:function(n){return e.setState({anchorEl:n.currentTarget})},"aria-haspopup":!0},Q.a.createElement("div",{className:l})),Q.a.createElement(H.a,{className:c,id:"country-menu",anchorEl:r,open:Boolean(r),onClose:function(){return e.setState({anchorEl:null})}},!!o.length&&k()(o,(function(n,t){return Q.a.createElement(gn,{key:"preferred_".concat(n.iso2,"_").concat(t),itemRef:function(n){e.flags["flag_no_".concat(t)]=n;},selected:d(n),onClick:function(){return e.handleFlagItemClick(n)},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name],flagClass:u.flag})})),!!o.length&&Q.a.createElement(Y.a,null),k()(a,(function(n,t){return Q.a.createElement(gn,{key:"preferred_".concat(n.iso2,"_").concat(t),itemRef:function(n){e.flags["flag_no_".concat(t)]=n;},selected:d(n),onClick:function(){return e.handleFlagItemClick(n)},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name],flagClass:u.flag})})))))}}));var t=_.a.allCountries;n.disableAreaCodes&&(t=e.deleteAreaCodes(t)),n.regions&&(t=e.filterRegions(n.regions,t));var r,a=e.excludeCountries(e.getOnlyCountries(n.onlyCountries,t),n.excludeCountries),f=P()(t,(function(e){return E()(n.preferredCountries,(function(n){return n===e.iso2}))})),d=n.value||"";r=d.length>1?e.guessSelectedCountry(d.replace(/\D/g,"").substring(0,6),a,n.defaultCountry)||0:n.defaultCountry&&I()(a,{iso2:n.defaultCountry})||0;var b=v()(e.allCountries,r),x=d.length<2&&r&&!i()(d.replace(/\D/g,""),r.dialCode)?r.dialCode:"",h=""===d&&0===r?"":e.formatNumber((n.disableCountryCode?"":x)+d.replace(/\D/g,""),r.name?r.format:void 0);return e.state={formattedNumber:h,placeholder:n.placeholder,onlyCountries:a,preferredCountries:f,defaultCountry:n.defaultCountry,selectedCountry:r,highlightCountryIndex:b,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:l()(e.searchCountry,100),anchorEl:null},e}return t=s,(r=[{key:"componentDidMount",value:function(){document.addEventListener&&document.addEventListener("keydown",this.handleKeydown);}},{key:"componentDidUpdate",value:function(n){var e=n.value,t=this.state,r=t.defaultCountry,o=t.formattedNumber,a=this.props,i=a.defaultCountry,u=a.value;i&&i!==r&&this.updateDefaultCountry(i),"string"==typeof u&&u!==e&&u!==o&&this.updateFormattedNumber(u);}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&document.removeEventListener("keydown",this.handleKeydown);}},{key:"render",value:function(){var n=this.state,e=n.formattedNumber,t=n.placeholder,r=this.props,o=(r.native,r.defaultCountry,r.excludeCountries,r.onlyCountries,r.preferredCountries,r.dropdownClass,r.autoFormat,r.disableAreaCodes,r.isValid,r.disableCountryCode,r.disableDropdown,r.enableLongNumbers,r.countryCodeEditable,r.onEnterKeyPress,r.isModernBrowser,r.classes,r.keys,r.localization,r.placeholder,r.regions,r.onChange,r.value,r.inputClass),a=r.error,i=r.InputProps,u=hn(r,["native","defaultCountry","excludeCountries","onlyCountries","preferredCountries","dropdownClass","autoFormat","disableAreaCodes","isValid","disableCountryCode","disableDropdown","enableLongNumbers","countryCodeEditable","onEnterKeyPress","isModernBrowser","classes","keys","localization","placeholder","regions","onChange","value","inputClass","error","InputProps"]),c=this.getDropdownProps();return Q.a.createElement(N.a,vn({placeholder:t,value:e,className:o,inputRef:this.handleRefInput,error:a||!this.checkIfValid(),onChange:this.handleInput,onClick:this.handleInputClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onKeyDown:this.handleInputKeyDown,type:"tel",InputProps:jn({},c,{},i)},u))}}])&&mn(t.prototype,r),s}(Q.a.Component);On.propTypes={classes:T.a.object,excludeCountries:T.a.arrayOf(T.a.string),onlyCountries:T.a.arrayOf(T.a.string),preferredCountries:T.a.arrayOf(T.a.string),defaultCountry:T.a.string,value:T.a.string,placeholder:T.a.string,disabled:T.a.bool,error:T.a.bool,variant:T.a.string,native:T.a.bool,inputClass:T.a.string,dropdownClass:T.a.string,InputProps:T.a.object,inputProps:T.a.object,inputRef:T.a.func,autoFormat:T.a.bool,disableAreaCodes:T.a.bool,disableCountryCode:T.a.bool,disableDropdown:T.a.bool,enableLongNumbers:T.a.bool,countryCodeEditable:T.a.bool,regions:T.a.oneOfType([T.a.string,T.a.arrayOf(T.a.string)]),localization:T.a.object,onChange:T.a.func,onFocus:T.a.func,onBlur:T.a.func,onClick:T.a.func,onKeyDown:T.a.func,isValid:T.a.func,isModernBrowser:T.a.func,onEnterKeyPress:T.a.func,keys:T.a.object},On.defaultProps={excludeCountries:[],onlyCountries:[],preferredCountries:[],defaultCountry:"",placeholder:"+1 (702) 123-4567",disabled:!1,error:!1,variant:"standard",native:!1,inputClass:"",dropdownClass:"",autoFormat:!0,disableAreaCodes:!1,isValid:function(n){return E()(_.a.allCountries,(function(e){return i()(n,e.dialCode)||i()(e.dialCode,n)}))},disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,regions:"",localization:{},onEnterKeyPress:function(){},onChange:function(){},isModernBrowser:function(){return !!document.createElement&&Boolean(document.createElement("input").setSelectionRange)},keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32}},On.displayName="MuiPhoneNumber";var En=Z()((function(){return jn({flagButton:{minWidth:30,padding:0,height:30},native:{width:30,height:30,padding:8},nativeRoot:{padding:0,"& + svg":{display:"none"}},nativeSelect:{padding:0,lineHeight:0,height:11},positionStart:{position:"relative"}},(n=An.a,{flag:{width:16,height:11,backgroundImage:"url(".concat(n,") !important"),"&.margin":{marginRight:8},"&.ad":{backgroundPosition:"-16px 0"},"&.ae":{backgroundPosition:"-32px 0"},"&.af":{backgroundPosition:"-48px 0"},"&.ag":{backgroundPosition:"-64px 0"},"&.ai":{backgroundPosition:"-80px 0"},"&.al":{backgroundPosition:"-96px 0"},"&.am":{backgroundPosition:"-112px 0"},"&.ao":{backgroundPosition:"-128px 0"},"&.ar":{backgroundPosition:"-144px 0"},"&.as":{backgroundPosition:"-160px 0"},"&.at":{backgroundPosition:"-176px 0"},"&.au":{backgroundPosition:"-192px 0"},"&.aw":{backgroundPosition:"-208px 0"},"&.az":{backgroundPosition:"-224px 0"},"&.ba":{backgroundPosition:"-240px 0"},"&.bb":{backgroundPosition:"0 -11px"},"&.bd":{backgroundPosition:"-16px -11px"},"&.be":{backgroundPosition:"-32px -11px"},"&.bf":{backgroundPosition:"-48px -11px"},"&.bg":{backgroundPosition:"-64px -11px"},"&.bh":{backgroundPosition:"-80px -11px"},"&.bi":{backgroundPosition:"-96px -11px"},"&.bj":{backgroundPosition:"-112px -11px"},"&.bl":{backgroundPosition:"-48px -44px"},"&.bm":{backgroundPosition:"-128px -11px"},"&.bn":{backgroundPosition:"-144px -11px"},"&.bo":{backgroundPosition:"-160px -11px"},"&.bq":{backgroundPosition:"-128px -99px"},"&.br":{backgroundPosition:"-176px -11px"},"&.bs":{backgroundPosition:"-192px -11px"},"&.bt":{backgroundPosition:"-208px -11px"},"&.bw":{backgroundPosition:"-224px -11px"},"&.by":{backgroundPosition:"-240px -11px"},"&.bz":{backgroundPosition:"0 -22px"},"&.ca":{backgroundPosition:"-16px -22px"},"&.cd":{backgroundPosition:"-32px -22px"},"&.cf":{backgroundPosition:"-48px -22px"},"&.cg":{backgroundPosition:"-64px -22px"},"&.ch":{backgroundPosition:"-80px -22px"},"&.ci":{backgroundPosition:"-96px -22px"},"&.ck":{backgroundPosition:"-112px -22px"},"&.cl":{backgroundPosition:"-128px -22px"},"&.cm":{backgroundPosition:"-144px -22px"},"&.cn":{backgroundPosition:"-160px -22px"},"&.co":{backgroundPosition:"-176px -22px"},"&.cr":{backgroundPosition:"-192px -22px"},"&.cu":{backgroundPosition:"-208px -22px"},"&.cv":{backgroundPosition:"-224px -22px"},"&.cw":{backgroundPosition:"-240px -22px"},"&.cy":{backgroundPosition:"0 -33px"},"&.cz":{backgroundPosition:"-16px -33px"},"&.de":{backgroundPosition:"-32px -33px"},"&.dj":{backgroundPosition:"-48px -33px"},"&.dk":{backgroundPosition:"-64px -33px"},"&.dm":{backgroundPosition:"-80px -33px"},"&.do":{backgroundPosition:"-96px -33px"},"&.dz":{backgroundPosition:"-112px -33px"},"&.ec":{backgroundPosition:"-128px -33px"},"&.ee":{backgroundPosition:"-144px -33px"},"&.eg":{backgroundPosition:"-160px -33px"},"&.er":{backgroundPosition:"-176px -33px"},"&.es":{backgroundPosition:"-192px -33px"},"&.et":{backgroundPosition:"-208px -33px"},"&.fi":{backgroundPosition:"-224px -33px"},"&.fj":{backgroundPosition:"-240px -33px"},"&.fk":{backgroundPosition:"0 -44px"},"&.fm":{backgroundPosition:"-16px -44px"},"&.fo":{backgroundPosition:"-32px -44px"},"&.fr":{backgroundPosition:"-48px -44px"},"&.ga":{backgroundPosition:"-64px -44px"},"&.gb":{backgroundPosition:"-80px -44px"},"&.gd":{backgroundPosition:"-96px -44px"},"&.ge":{backgroundPosition:"-112px -44px"},"&.gf":{backgroundPosition:"-128px -44px"},"&.gh":{backgroundPosition:"-144px -44px"},"&.gi":{backgroundPosition:"-160px -44px"},"&.gl":{backgroundPosition:"-176px -44px"},"&.gm":{backgroundPosition:"-192px -44px"},"&.gn":{backgroundPosition:"-208px -44px"},"&.gp":{backgroundPosition:"-224px -44px"},"&.gq":{backgroundPosition:"-240px -44px"},"&.gr":{backgroundPosition:"0 -55px"},"&.gt":{backgroundPosition:"-16px -55px"},"&.gu":{backgroundPosition:"-32px -55px"},"&.gw":{backgroundPosition:"-48px -55px"},"&.gy":{backgroundPosition:"-64px -55px"},"&.hk":{backgroundPosition:"-80px -55px"},"&.hn":{backgroundPosition:"-96px -55px"},"&.hr":{backgroundPosition:"-112px -55px"},"&.ht":{backgroundPosition:"-128px -55px"},"&.hu":{backgroundPosition:"-144px -55px"},"&.id":{backgroundPosition:"-160px -55px"},"&.ie":{backgroundPosition:"-176px -55px"},"&.il":{backgroundPosition:"-192px -55px"},"&.in":{backgroundPosition:"-208px -55px"},"&.io":{backgroundPosition:"-224px -55px"},"&.iq":{backgroundPosition:"-240px -55px"},"&.ir":{backgroundPosition:"0 -66px"},"&.is":{backgroundPosition:"-16px -66px"},"&.it":{backgroundPosition:"-32px -66px"},"&.jm":{backgroundPosition:"-48px -66px"},"&.jo":{backgroundPosition:"-64px -66px"},"&.jp":{backgroundPosition:"-80px -66px"},"&.ke":{backgroundPosition:"-96px -66px"},"&.kg":{backgroundPosition:"-112px -66px"},"&.kh":{backgroundPosition:"-128px -66px"},"&.ki":{backgroundPosition:"-144px -66px"},"&.km":{backgroundPosition:"-160px -66px"},"&.kn":{backgroundPosition:"-176px -66px"},"&.kp":{backgroundPosition:"-192px -66px"},"&.kr":{backgroundPosition:"-208px -66px"},"&.kw":{backgroundPosition:"-224px -66px"},"&.ky":{backgroundPosition:"-240px -66px"},"&.kz":{backgroundPosition:"0 -77px"},"&.la":{backgroundPosition:"-16px -77px"},"&.lb":{backgroundPosition:"-32px -77px"},"&.lc":{backgroundPosition:"-48px -77px"},"&.li":{backgroundPosition:"-64px -77px"},"&.lk":{backgroundPosition:"-80px -77px"},"&.lr":{backgroundPosition:"-96px -77px"},"&.ls":{backgroundPosition:"-112px -77px"},"&.lt":{backgroundPosition:"-128px -77px"},"&.lu":{backgroundPosition:"-144px -77px"},"&.lv":{backgroundPosition:"-160px -77px"},"&.ly":{backgroundPosition:"-176px -77px"},"&.ma":{backgroundPosition:"-192px -77px"},"&.mc":{backgroundPosition:"-208px -77px"},"&.md":{backgroundPosition:"-224px -77px"},"&.me":{backgroundPosition:"-112px -154px",height:12},"&.mf":{backgroundPosition:"-48px -44px"},"&.mg":{backgroundPosition:"0 -88px"},"&.mh":{backgroundPosition:"-16px -88px"},"&.mk":{backgroundPosition:"-32px -88px"},"&.ml":{backgroundPosition:"-48px -88px"},"&.mm":{backgroundPosition:"-64px -88px"},"&.mn":{backgroundPosition:"-80px -88px"},"&.mo":{backgroundPosition:"-96px -88px"},"&.mp":{backgroundPosition:"-112px -88px"},"&.mq":{backgroundPosition:"-128px -88px"},"&.mr":{backgroundPosition:"-144px -88px"},"&.ms":{backgroundPosition:"-160px -88px"},"&.mt":{backgroundPosition:"-176px -88px"},"&.mu":{backgroundPosition:"-192px -88px"},"&.mv":{backgroundPosition:"-208px -88px"},"&.mw":{backgroundPosition:"-224px -88px"},"&.mx":{backgroundPosition:"-240px -88px"},"&.my":{backgroundPosition:"0 -99px"},"&.mz":{backgroundPosition:"-16px -99px"},"&.na":{backgroundPosition:"-32px -99px"},"&.nc":{backgroundPosition:"-48px -99px"},"&.ne":{backgroundPosition:"-64px -99px"},"&.nf":{backgroundPosition:"-80px -99px"},"&.ng":{backgroundPosition:"-96px -99px"},"&.ni":{backgroundPosition:"-112px -99px"},"&.nl":{backgroundPosition:"-128px -99px"},"&.no":{backgroundPosition:"-144px -99px"},"&.np":{backgroundPosition:"-160px -99px"},"&.nr":{backgroundPosition:"-176px -99px"},"&.nu":{backgroundPosition:"-192px -99px"},"&.nz":{backgroundPosition:"-208px -99px"},"&.om":{backgroundPosition:"-224px -99px"},"&.pa":{backgroundPosition:"-240px -99px"},"&.pe":{backgroundPosition:"0 -110px"},"&.pf":{backgroundPosition:"-16px -110px"},"&.pg":{backgroundPosition:"-32px -110px"},"&.ph":{backgroundPosition:"-48px -110px"},"&.pk":{backgroundPosition:"-64px -110px"},"&.pl":{backgroundPosition:"-80px -110px"},"&.pm":{backgroundPosition:"-96px -110px"},"&.pr":{backgroundPosition:"-112px -110px"},"&.ps":{backgroundPosition:"-128px -110px"},"&.pt":{backgroundPosition:"-144px -110px"},"&.pw":{backgroundPosition:"-160px -110px"},"&.py":{backgroundPosition:"-176px -110px"},"&.qa":{backgroundPosition:"-192px -110px"},"&.re":{backgroundPosition:"-208px -110px"},"&.ro":{backgroundPosition:"-224px -110px"},"&.rs":{backgroundPosition:"-240px -110px"},"&.ru":{backgroundPosition:"0 -121px"},"&.rw":{backgroundPosition:"-16px -121px"},"&.sa":{backgroundPosition:"-32px -121px"},"&.sb":{backgroundPosition:"-48px -121px"},"&.sc":{backgroundPosition:"-64px -121px"},"&.sd":{backgroundPosition:"-80px -121px"},"&.se":{backgroundPosition:"-96px -121px"},"&.sg":{backgroundPosition:"-112px -121px"},"&.sh":{backgroundPosition:"-128px -121px"},"&.si":{backgroundPosition:"-144px -121px"},"&.sk":{backgroundPosition:"-160px -121px"},"&.sl":{backgroundPosition:"-176px -121px"},"&.sm":{backgroundPosition:"-192px -121px"},"&.sn":{backgroundPosition:"-208px -121px"},"&.so":{backgroundPosition:"-224px -121px"},"&.sr":{backgroundPosition:"-240px -121px"},"&.ss":{backgroundPosition:"0 -132px"},"&.st":{backgroundPosition:"-16px -132px"},"&.sv":{backgroundPosition:"-32px -132px"},"&.sx":{backgroundPosition:"-48px -132px"},"&.sy":{backgroundPosition:"-64px -132px"},"&.sz":{backgroundPosition:"-80px -132px"},"&.tc":{backgroundPosition:"-96px -132px"},"&.td":{backgroundPosition:"-112px -132px"},"&.tg":{backgroundPosition:"-128px -132px"},"&.th":{backgroundPosition:"-144px -132px"},"&.tj":{backgroundPosition:"-160px -132px"},"&.tk":{backgroundPosition:"-176px -132px"},"&.tl":{backgroundPosition:"-192px -132px"},"&.tm":{backgroundPosition:"-208px -132px"},"&.tn":{backgroundPosition:"-224px -132px"},"&.to":{backgroundPosition:"-240px -132px"},"&.tr":{backgroundPosition:"0 -143px"},"&.tt":{backgroundPosition:"-16px -143px"},"&.tv":{backgroundPosition:"-32px -143px"},"&.tw":{backgroundPosition:"-48px -143px"},"&.tz":{backgroundPosition:"-64px -143px"},"&.ua":{backgroundPosition:"-80px -143px"},"&.ug":{backgroundPosition:"-96px -143px"},"&.us":{backgroundPosition:"-112px -143px"},"&.uy":{backgroundPosition:"-128px -143px"},"&.uz":{backgroundPosition:"-144px -143px"},"&.va":{backgroundPosition:"-160px -143px"},"&.vc":{backgroundPosition:"-176px -143px"},"&.ve":{backgroundPosition:"-192px -143px"},"&.vg":{backgroundPosition:"-208px -143px"},"&.vi":{backgroundPosition:"-224px -143px"},"&.vn":{backgroundPosition:"-240px -143px"},"&.vu":{backgroundPosition:"0 -154px"},"&.wf":{backgroundPosition:"-16px -154px"},"&.ws":{backgroundPosition:"-32px -154px"},"&.ye":{backgroundPosition:"-48px -154px"},"&.za":{backgroundPosition:"-64px -154px"},"&.zm":{backgroundPosition:"-80px -154px"},"&.zw":{backgroundPosition:"-96px -154px"}}}));var n;}))(On);e.default=En;}]);
});

var MuiPhoneInput = /*@__PURE__*/unwrapExports(dist);

const useStyles$j = styles.makeStyles(({
  palette,
  spacing,
  shape
}) => ({
  root: {
    '& .MuiInputBase-formControl': {
      paddingLeft: 0
    },
    '& .MuiPhoneNumber-flagButton': {
      height: 48,
      borderRadius: 0,
      backgroundColor: 'transparent',
      '&:after': {
        content: '""',
        width: 0,
        height: 0,
        marginRight: 16,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: `5px solid ${palette.greyTransparent[70]}`
      },
      '&:hover, &:focus': {
        backgroundColor: palette.greyTransparent[4]
      },
      '& .MuiButton-label': {
        marginLeft: 20,
        marginRight: 16
      },
      '& .flag': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'scale(1.5)'
      }
    },
    '& .MuiInputBase-input': {
      paddingLeft: 8
    },
    '& .MuiPhoneNumber-positionStart': {
      '&:after': {
        position: 'absolute',
        display: 'block',
        content: '""',
        width: 0,
        right: 0,
        height: 24,
        borderRight: `1px solid ${palette.greyTransparent[30]}`
      }
    }
  },
  dropdown: {
    '& .MuiPaper-root': {
      width: '71.5%',
      maxWidth: 350,
      '@media(max-width: 375px)': {
        width: '90%'
      },
      '& .flag': {
        minWidth: 16,
        marginLeft: 4,
        marginRight: 16,
        transform: 'scale(1.4)'
      },
      '& .dial-code': {
        paddingLeft: 8,
        color: palette.grey[50]
      }
    }
  }
}), {
  classNamePrefix: 'PhoneInput'
});

const PhoneInput = props => {
  const {
    className,
    defaultCountry,
    disableAreaCodes,
    dropdownClass,
    excludeCountries
  } = props,
        other = objectWithoutPropertiesLoose(props, ["className", "defaultCountry", "disableAreaCodes", "dropdownClass", "excludeCountries"]);

  const classes = useStyles$j();
  return /*#__PURE__*/React__default.createElement(MuiPhoneInput, Object.assign({
    className: clsx(classes.root, className),
    dropdownClass: clsx(classes.dropdown, dropdownClass),
    defaultCountry: defaultCountry,
    excludeCountries: excludeCountries,
    disableAreaCodes: disableAreaCodes,
    variant: "filled"
  }, other));
}; // See material-ui-phone-number and Material UI Textfield docs for all available props
// https://github.com/alexplumb/material-ui-phone-number#options
// https://material-ui.com/api/text-field/


process.env.NODE_ENV !== "production" ? PhoneInput.propTypes = {
  className: propTypes.string,
  defaultCountry: propTypes.string,
  disableAreaCodes: propTypes.bool,
  dropdownClass: propTypes.string,
  excludeCountries: propTypes.array,
  label: propTypes.string
} : void 0;
PhoneInput.defaultProps = {
  className: '',
  defaultCountry: 'us',
  disableAreaCodes: true,
  dropdownClass: '',
  excludeCountries: ['kp'],
  label: 'Phone Number'
};

const useStyles$k = styles.makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '85%'
  },
  icon: {
    fontSize: 18,
    marginRight: theme.spacing(1),
    color: theme.palette.grey[20]
  },
  iconPassed: {
    color: theme.palette.primary.main
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 4,
    '@media (max-width: 767px)': {
      flex: '0 0 100%'
    },
    '@media (min-width: 768px)': {
      flex: '0 0 50%'
    }
  },
  label: {
    fontSize: 13
  }
}));
function UserCheckList({
  checklist
}) {
  const classes = useStyles$k();
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, checklist.map(({
    label,
    passed
  }, index) => {
    const Icon = passed ? CheckCircleIcon : CancelIcon;
    const iconClass = `${classes.icon} ${passed ? classes.iconPassed : ''}`;
    return /*#__PURE__*/React__default.createElement("div", {
      key: index,
      className: classes.checkItem
    }, /*#__PURE__*/React__default.createElement(Icon, {
      className: iconClass
    }), /*#__PURE__*/React__default.createElement(Typography, {
      variant: "body2",
      className: classes.label
    }, label));
  }));
}
process.env.NODE_ENV !== "production" ? UserCheckList.propTypes = {
  checklist: propTypes.arrayOf(propTypes.shape({
    label: propTypes.string,
    passed: propTypes.bool
  }))
} : void 0;

const useStyles$l = styles.makeStyles(theme => ({
  paper: {
    position: 'relative',
    boxShadow: `0 10px 20px -5px ${theme.palette.greyTransparent[50]}`,
    // Overrides Safari fix on MuiPaper in theme because it causes layout issues and is not needed in this component.
    willChange: 'auto'
  },
  shadowContainer: {
    padding: `12px 20px`,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    zIndex: 1
  },
  popperArrow: {
    '&[x-placement*="bottom"] $arrow': {
      marginLeft: 0,
      marginRight: 0,
      top: -9,
      marginTop: 0
    },
    '&[x-placement*="top"] $arrow': {
      marginLeft: 0,
      marginRight: 0,
      bottom: -9,
      marginBottom: 0
    },
    '&[x-placement*="right"] $arrow': {
      marginTop: 0,
      marginBottom: 0,
      height: 20,
      width: 20,
      left: -9,
      marginLeft: 0
    },
    '&[x-placement*="left"] $arrow': {
      marginTop: 0,
      marginBottom: 0,
      height: 20,
      width: 20,
      right: -9,
      marginRight: 0
    }
  },
  tooltipArrow: {
    padding: 0,
    maxWidth: 'unset'
  },
  arrow: {
    width: 20,
    height: 20,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    transform: 'rotate(45deg)',
    boxShadow: `0 10px 20px -5px ${theme.palette.greyTransparent[50]}`,
    '&:before': {
      content: 'none'
    }
  }
}));
function ArrowPopper(props) {
  const {
    children,
    containerClassName,
    PaperProps,
    title
  } = props,
        rest = objectWithoutPropertiesLoose(props, ["children", "containerClassName", "PaperProps", "title"]);

  const classes = useStyles$l(props);

  const {
    className: paperClassName
  } = PaperProps,
        paperPropsRest = objectWithoutPropertiesLoose(PaperProps, ["className"]);

  const Tip = /*#__PURE__*/React__default.createElement(Paper, Object.assign({
    className: clsx(classes.paper, paperClassName)
  }, paperPropsRest), /*#__PURE__*/React__default.createElement("div", {
    className: clsx(classes.shadowContainer, containerClassName)
  }, title));
  return /*#__PURE__*/React__default.createElement(Tooltip, Object.assign({
    arrow: true,
    TransitionComponent: Fade,
    title: Tip,
    classes: {
      popperArrow: classes.popperArrow,
      tooltip: classes.tooltipArrow,
      arrow: classes.arrow
    }
  }, rest), children);
} // See Material UI Tooltip component API for all possible props
// https://material-ui.com/api/tooltip/

process.env.NODE_ENV !== "production" ? ArrowPopper.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  containerClassName: propTypes.string,
  PaperProps: propTypes.shape({}),
  title: propTypes.node.isRequired
} : void 0;
ArrowPopper.defaultProps = {
  className: '',
  containerClassName: '',
  PaperProps: {
    elevation: 0
  }
};

const useStyles$m = styles.makeStyles(({
  spacing,
  typography
}) => ({
  root: ({
    overflowX
  }) => ({
    padding: 0,
    overflowX,
    '& [class*="MuiTableCell-head"]': {
      whiteSpace: 'nowrap',
      width: 'auto',
      '&.title': {
        width: '100%'
      },
      '&.icon, &.icon-button': {
        padding: 0
      }
    },
    '& [class*="MuiTableCell-body"]': {
      fontSize: typography.pxToRem(15),
      lineHeight: typography.pxToRem(19),
      paddingTop: spacing(4),
      paddingBottom: spacing(4),
      width: 'auto',
      '&.title': {
        width: '100%'
      },
      '&.icon, &.icon-button': {
        padding: 0
      },
      '&.icon-button': {
        width: 40,
        textAlign: 'center',
        paddingLeft: 22,
        '& [class*="MuiIconButton-root"]': {
          marginLeft: 2,
          marginRight: 2
        },
        '&:last-child': {
          paddingRight: 22
        }
      },
      // Sets styles on all that come after the first
      '&.icon-button ~ .icon-button': {
        paddingLeft: 0
      },
      '&:first-child': {
        paddingLeft: spacing(3)
      },
      '&:last-child': {
        paddingRight: spacing(3)
      },
      '&.no-vertical-padding': {
        paddingTop: 0,
        paddingBottom: 0
      },
      '&.no-horizontal-padding': {
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  })
}), {
  classNamePrefix: 'EntityTable'
});

const EntityTable = props => {
  const {
    className,
    children,
    overflowX,
    TableProps
  } = props,
        other = objectWithoutPropertiesLoose(props, ["className", "children", "overflowX", "TableProps"]);

  const classes = useStyles$m({
    overflowX
  });
  return /*#__PURE__*/React__default.createElement(TableContainer, Object.assign({
    className: clsx(classes.root, className),
    component: ShadowBox
  }, other), /*#__PURE__*/React__default.createElement(Table, TableProps, children));
};

process.env.NODE_ENV !== "production" ? EntityTable.propTypes = {
  className: propTypes.string,
  overflowX: propTypes.oneOf(['hidden', 'auto']),
  TableProps: propTypes.object
} : void 0;
EntityTable.defaultProps = {
  className: '',
  overflowX: 'auto',
  TableProps: {}
};

const useStyles$n = styles.makeStyles(theme => ({
  root: {
    backgroundColor: primaryColors.greyLight
  }
}), {
  classNamePrefix: 'FullScreenDialog'
});

const FullScreenDialog = (_ref) => {
  let {
    isOpen,
    children
  } = _ref,
      other = objectWithoutPropertiesLoose(_ref, ["isOpen", "children"]);

  const classes = useStyles$n();
  return /*#__PURE__*/React__default.createElement(Dialog, Object.assign({
    PaperProps: {
      className: classes.root
    },
    fullScreen: true,
    open: isOpen
  }, other), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "space-between"
  }, children));
};

process.env.NODE_ENV !== "production" ? FullScreenDialog.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  isOpen: propTypes.bool.isRequired
} : void 0;
FullScreenDialog.defaultProps = {
  children: null
};

const useStyles$o = styles.makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3, 0),
    margin: '0 auto',
    maxWidth: 1280,
    width: '100%'
  },
  subheadContainer: {
    color: theme.palette.greyTransparent[70],
    marginTop: -theme.spacing(1)
  },
  subheader: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3)
  }
}), {
  classNamePrefix: 'FullScreenDialogTitle'
});

const FullScreenDialogTitle = ({
  children,
  className,
  classesProp,
  headline,
  subheadline,
  justify
}) => {
  const classes = useStyles$o();
  return /*#__PURE__*/React__default.createElement("div", {
    className: clsx(classes.root, className)
  }, headline && /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.headline,
    variant: "h1"
  }, headline), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    alignItems: "center",
    justify: justify,
    className: clsx(classes.subheadContainer, classesProp === null || classesProp === void 0 ? void 0 : classesProp.subheadContainer)
  }, subheadline && /*#__PURE__*/React__default.createElement(Typography, {
    className: clsx(classes.subheader, classesProp === null || classesProp === void 0 ? void 0 : classesProp.subheader),
    variant: "subtitle1"
  }, subheadline), children));
};

process.env.NODE_ENV !== "production" ? FullScreenDialogTitle.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  className: propTypes.string,
  classes: propTypes.shape({
    header: propTypes.string,
    subheadContainer: propTypes.string,
    subheader: propTypes.string
  }),
  headline: propTypes.string,
  subheadline: propTypes.string,
  justify: propTypes.string
} : void 0;
FullScreenDialogTitle.defaultProps = {
  children: null,
  className: null,
  classes: null,
  headline: null,
  subheadline: null,
  justify: "space-between"
};

const useStyles$p = styles.makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3, 0),
    margin: '0 auto',
    maxWidth: 1280,
    width: '100%'
  },
  logo: {
    paddingBottom: theme.spacing(1)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(3)
  },
  breadcrumbs: {
    marginBottom: 45,
    marginTop: 60,
    width: '100%'
  }
}), {
  classNamePrefix: 'FullScreenDialogHeader'
});

var _ref$5 = /*#__PURE__*/React__default.createElement(CloseIcon, null);

const FullScreenDialogHeader = ({
  breadcrumbs,
  children,
  className,
  classesProp,
  onClose
}) => {
  const classes = useStyles$p();
  return /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    className: clsx(classes.root, className),
    justify: "space-between"
  }, /*#__PURE__*/React__default.createElement(LeadpagesLogo, {
    className: clsx(classes.logo, classesProp === null || classesProp === void 0 ? void 0 : classesProp.logo)
  }), children, /*#__PURE__*/React__default.createElement(IconButton, {
    className: clsx(classes.closeButton, classesProp === null || classesProp === void 0 ? void 0 : classesProp.closeButton),
    onClick: onClose,
    "aria-label": "close"
  }, _ref$5), (breadcrumbs === null || breadcrumbs === void 0 ? void 0 : breadcrumbs.length) > 0 && /*#__PURE__*/React__default.createElement(Breadcrumbs, {
    className: clsx(classes.breadcrumbs, classesProp === null || classesProp === void 0 ? void 0 : classesProp.breadcrumbs),
    "aria-label": "breadcrumb"
  }, breadcrumbs.map(breadcrumb => breadcrumb)));
};

process.env.NODE_ENV !== "production" ? FullScreenDialogHeader.propTypes = {
  breadcrumbs: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  className: propTypes.string,
  classes: propTypes.shape({
    breadcrumbs: propTypes.string,
    closeButton: propTypes.string,
    logo: propTypes.string
  }),
  onClose: propTypes.func.isRequired
} : void 0;
FullScreenDialogHeader.defaultProps = {
  breadcrumbs: null,
  children: null,
  className: null,
  classes: null
};

const useStyles$q = styles.makeStyles(({
  palette
}) => ({
  root: {
    cursor: 'pointer',
    textDecoration: 'none',
    borderBottomStyle: 'solid',
    '&:hover, &:focus': {
      borderBottomColor: palette.primary.dark
    }
  },
  primary: {
    borderBottomWidth: '3px',
    color: '#000000',
    borderBottomColor: 'transparent',
    paddingBottom: '.57em'
  },
  secondary: {
    borderBottomWidth: '2px',
    color: palette.secondary.contrastText,
    borderBottomColor: palette.primary.lightAlt,
    paddingBottom: '.21em'
  }
}), {
  classNamePrefix: 'UnderlineLink'
});
function UnderlineLink(_ref) {
  let {
    variant,
    typographyVariant,
    children,
    className
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["variant", "typographyVariant", "children", "className"]);

  const classes = useStyles$q();
  return /*#__PURE__*/React__default.createElement(Link, Object.assign({
    className: clsx(classes.root, variant === 'primary' ? classes.primary : classes.secondary, className),
    color: "initial",
    underline: "none",
    variant: typographyVariant
  }, props), children);
} // See Material UI Link component API for all possible props
// https://material-ui.com/api/link/

process.env.NODE_ENV !== "production" ? UnderlineLink.propTypes = {
  variant: propTypes.oneOf(['primary', 'secondary']),
  typographyVariant: propTypes.string,
  className: propTypes.string,
  children: propTypes.node.isRequired
} : void 0;
UnderlineLink.defaultProps = {
  variant: 'primary',
  typographyVariant: 'body2',
  className: ''
};

var _ref2$4 = /*#__PURE__*/React__default.createElement(VisibilityIcon, null);

var _ref3$1 = /*#__PURE__*/React__default.createElement(VisibilityOffIcon, null);

function PasswordTextField(_ref) {
  let {
    label
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["label"]);

  const [showPassword, setShowPassword] = React.useState(false);
  return /*#__PURE__*/React__default.createElement(TextField, Object.assign({
    type: showPassword ? 'text' : 'password',
    InputProps: {
      endAdornment: /*#__PURE__*/React__default.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React__default.createElement(IconButton, {
        "aria-label": `${showPassword ? 'Hide' : 'Show'} ${label}`,
        onClick: () => setShowPassword(!showPassword),
        tabIndex: "-1"
      }, showPassword ? _ref2$4 : _ref3$1))
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    inputProps: {
      'aria-label': label
    },
    label: label
  }, props));
} // See Material UI Link component API for all possible props
// https://material-ui.com/api/text-field/


process.env.NODE_ENV !== "production" ? PasswordTextField.propTypes = {
  label: propTypes.string
} : void 0;
PasswordTextField.defaultProps = {
  label: 'Password'
};

const useStyles$r = styles.makeStyles(({
  typography
}) => ({
  label: _extends_1({}, typography.label)
}), {
  classNamePrefix: 'InputLabelWithCount'
});
function InputLabelWithCount({
  label,
  value
}) {
  const classes = useStyles$r();
  return /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "space-between",
    alignItems: "baseline"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    className: classes.label
  }, label), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    component: Typography,
    variant: "caption",
    color: "inherit"
  }, (value === null || value === void 0 ? void 0 : value.length) > 0 && `${value.length} characters`));
}
process.env.NODE_ENV !== "production" ? InputLabelWithCount.propTypes = {
  label: propTypes.node.isRequired,
  value: propTypes.string
} : void 0;
InputLabelWithCount.defaultProps = {
  value: ''
};

const LIST_ITEM_STATUS = {
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete'
};
const ItemSummary = withStyles(({
  palette,
  transitions
}) => ({
  root: {
    border: `1px solid transparent`,
    transition: transitions.create(['box-shadow', 'border-color'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short
    }),
    // Expanded and closed summary states
    '&.Mui-expanded': {
      minHeight: 'auto'
    },
    '&:not(.Mui-expanded)': {
      borderColor: palette.greyTransparent[8]
    },
    // Hover and focus states
    '&:hover': {
      borderColor: 'transparent'
    },
    '&:not(.Mui-expanded):hover': {
      boxShadow: `0 10px 20px -5px ${palette.greyTransparent[20]}`
    },
    '&.Mui-expanded.Mui-focused': {
      backgroundColor: 'transparent'
    },
    '&:not(.Mui-expanded).Mui-focused': {
      boxShadow: `0 10px 20px -5px ${palette.greyTransparent[20]}`,
      borderColor: 'transparent',
      backgroundColor: 'transparent'
    }
  },
  content: {
    alignItems: 'center',
    margin: '18px 0',
    '&.Mui-expanded': {
      margin: '18px 0'
    }
  },
  expandIcon: {
    transform: 'rotate(-90deg)',
    // Start icon pointing right
    '&.Mui-expanded': {
      transform: 'rotate(0deg)'
    }
  }
}))(AccordionSummary);
const useStyles$s = makeStyles(({
  palette,
  typography,
  transitions,
  spacing
}) => ({
  itemRoot: {
    margin: spacing(1.5, 1.5, 0),
    boxShadow: 'none',
    // Remove default box shadow
    '&.Mui-expanded, &.Mui-expanded:first-child': {
      margin: spacing(1.5, 1.5, 0),
      backgroundColor: palette.greyTransparent[4]
    },
    '&:not(.Mui-expanded):hover $orderCircle': {
      backgroundColor: palette.grey[60],
      color: palette.common.white
    },
    '&:before': {
      content: 'none' // Remove default top border

    },
    '&:last-child, &:last-child.Mui-expanded': {
      marginBottom: spacing(1.5)
    }
  },
  itemDetails: {
    padding: spacing(0, 1.5, 1.5)
  },
  summaryLabel: ({
    expanded
  }) => ({
    fontWeight: expanded ? typography.fontWeightBold : typography.fontWeightRegular
  }),
  checkCircle: {
    fill: legacyColors.green,
    fontSize: 27,
    marginRight: 9
  },
  orderCircle: ({
    expanded
  }) => ({
    width: 24,
    height: 24,
    borderRadius: '50%',
    color: expanded ? palette.common.white : palette.grey[70],
    backgroundColor: expanded ? palette.grey[60] : palette.grey[10],
    marginRight: 9,
    fontSize: 13,
    fontWeight: typography.fontWeightBold,
    transition: transitions.create(['background-color', 'color'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short
    })
  })
}), {
  classNamePrefix: 'CheckListItem'
});

var _ref$6 = /*#__PURE__*/React__default.createElement(ExpandMore, null);

const ChecklistItem = ({
  open,
  name,
  label,
  order,
  status,
  DetailsComponent,
  onOpen,
  onAccordionChange,
  onStatusChange,
  onOpenNextItem,
  onLinkClick,
  onActionClick,
  onItemClosing
}) => {
  const classes = useStyles$s({
    expanded: open
  });

  const handleOpen = name => {
    onAccordionChange(name);
    if (name) onOpen(name);
  };

  return /*#__PURE__*/React__default.createElement(Accordion, {
    id: `checklist-item-${name}`,
    classes: {
      root: classes.itemRoot
    },
    expanded: open,
    onChange: (event, expanded) => handleOpen(expanded ? name : null),
    TransitionProps: {
      onExiting: () => {
        onItemClosing(true);
      },
      onExited: () => {
        onItemClosing(false);
      }
    }
  }, /*#__PURE__*/React__default.createElement(ItemSummary, {
    "aria-label": label,
    expandIcon: _ref$6
  }, status === LIST_ITEM_STATUS.COMPLETE ? /*#__PURE__*/React__default.createElement(CheckCircleIcon, {
    className: classes.checkCircle,
    "data-qa-selector": `item-${order}-checked`
  }) : /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.orderCircle,
    align: "center",
    component: "span",
    "data-qa-selector": `item-${order}`
  }, order), /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.summaryLabel,
    variant: "subtitle2"
  }, label)), /*#__PURE__*/React__default.createElement(AccordionDetails, {
    classes: {
      root: classes.itemDetails
    }
  }, DetailsComponent && /*#__PURE__*/React__default.createElement(DetailsComponent, {
    itemName: name,
    itemStatus: status,
    onStatusChange: onStatusChange,
    onOpenNextItem: onOpenNextItem,
    onLinkClick: onLinkClick,
    onActionClick: onActionClick
  })));
};

ChecklistItem.defaultProps = {
  onOpen: () => {},
  onLinkClick: () => {},
  onActionClick: () => {}
};
process.env.NODE_ENV !== "production" ? ChecklistItem.propTypes = {
  open: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  order: propTypes.number.isRequired,
  status: propTypes.oneOf([LIST_ITEM_STATUS.COMPLETE, LIST_ITEM_STATUS.INCOMPLETE]),
  DetailsComponent: propTypes.elementType.isRequired,
  onOpen: propTypes.func,
  onAccordionChange: propTypes.func.isRequired,
  onStatusChange: propTypes.func.isRequired,
  onOpenNextItem: propTypes.func.isRequired,
  onLinkClick: propTypes.func,
  onActionClick: propTypes.func,
  onItemClosing: propTypes.func
} : void 0;

// This will contain MUI collapse or acordian, accepting children containing the core content
const ItemSummary$1 = withStyles(({
  palette,
  transitions
}) => ({
  root: {
    padding: '6px 24px 6px 27px',
    transition: transitions.create(['background-color', 'border', 'borderColor'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short
    }),
    '&:hover, &.Mui-focused': {
      backgroundColor: 'transparent'
    },
    '&:not(.Mui-expanded):hover, &:not(.Mui-expanded).Mui-focused': {
      backgroundColor: palette.greyTransparent[4]
    }
  },
  content: {
    alignItems: 'center',
    margin: '14px 0'
  },
  expandIcon: {
    transform: 'rotate(-180deg)',
    // Start icon pointing up
    '&.Mui-expanded': {
      transform: 'rotate(0deg)'
    },
    '&:hover, &:focus': {
      backgroundColor: palette.greyTransparent[4]
    }
  }
}))(AccordionSummary);
const useStyles$t = makeStyles(({
  palette,
  typography
}) => ({
  root: {
    borderTop: `1px solid ${palette.greyTransparent[10]}`,
    boxShadow: 'none',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  summaryLabel: {
    fontWeight: typography.fontWeightBold
  },
  detailsWrapper: {
    padding: 0
  }
}), {
  classNamePrefix: 'FixedBottomItem'
});

var _ref$7 = /*#__PURE__*/React__default.createElement(ExpandMore, null);

const FixedBottomItem = ({
  open,
  name,
  label,
  DetailsComponent,
  onOpen,
  onAccordionChange
}) => {
  const classes = useStyles$t({
    expanded: open
  });

  const handleOpen = name => {
    onAccordionChange(name);
    if (name) onOpen(name);
  };

  return /*#__PURE__*/React__default.createElement(Accordion, {
    classes: {
      root: classes.root
    },
    expanded: open,
    onChange: (event, expanded) => handleOpen(expanded ? name : null)
  }, /*#__PURE__*/React__default.createElement(ItemSummary$1, {
    "aria-label": label,
    expandIcon: _ref$7
  }, /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.summaryLabel,
    variant: "h5"
  }, label)), /*#__PURE__*/React__default.createElement(AccordionDetails, {
    className: classes.detailsWrapper
  }, DetailsComponent));
};

FixedBottomItem.defaultProps = {
  onOpen: () => {}
};
process.env.NODE_ENV !== "production" ? FixedBottomItem.propTypes = {
  open: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onOpen: propTypes.func,
  onAccordionChange: propTypes.func.isRequired,
  DetailsComponent: propTypes.node
} : void 0;

const CompletionProgressBar = withStyles(theme => ({
  root: {
    height: 7,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[10]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: legacyColors.green
  }
}))(LinearProgress);
const useStyles$u = makeStyles(theme => ({
  paperAnchorRight: ({
    topOffset
  }) => ({
    width: 360,
    top: topOffset ? topOffset : 0,
    height: topOffset ? `calc(100% - ${topOffset}px)` : '100%',
    border: 0,
    boxShadow: `0 10px 20px -5px ${theme.palette.greyTransparent[10]}`
  }),
  dialogTitle: {
    padding: '16px 18px 16px 27px'
  },
  progressWrapper: {
    margin: '12px 28px 18px'
  },
  pageProgressTitle: {
    marginBottom: 12
  },
  pageProgressCaptionContainer: {
    marginTop: 11,
    color: theme.palette.grey[70]
  },
  pageProgressMessage: {
    fontWeight: theme.typography.fontWeightBold
  },
  listWrapper: ({
    bottomItem
  }) => ({
    height: bottomItem ? 'calc(100% - 239px)' : '100%',
    overflowY: 'auto'
  })
}), {
  classNamePrefix: 'Checklist'
});

var _ref$8 = /*#__PURE__*/React__default.createElement(Divider, null);

function Checklist({
  open,
  list,
  topOffset,
  bottomItemLabel,
  bottomItemComponent,
  onClose,
  onStatusChange,
  onItemExpand,
  onBottomItemExpand,
  onLinkClick,
  onActionClick
}) {
  const [activeListItem, setActiveListItem] = React.useState();
  const [itemClosing, setItemClosing] = React.useState(false);
  const [displayContent, setDisplayContent] = React.useState(true);
  const classes = useStyles$u({
    topOffset,
    bottomItem: !!bottomItemComponent
  });
  const theme = useTheme();
  const listTotal = list.length;
  let complete = 0;
  list.forEach(({
    status
  }) => {
    if (status === LIST_ITEM_STATUS.COMPLETE) {
      complete += 1;
    }
  });
  const progressPercentage = Math.round(complete / listTotal * 100);

  const handleOpenNextItem = (currentOpenItem, itemStatus) => {
    const currentIndex = list.findIndex(listItem => listItem.name === currentOpenItem);
    const nextIndex = currentIndex + 1;

    if (list.length > nextIndex) {
      setActiveListItem(list[nextIndex].name);
    } else {
      setActiveListItem(null);
    }
  };

  const displayTimeoutRef = React.useRef();
  React.useEffect(() => {
    // Render content only when the sidebar is open
    if (open) {
      if (displayTimeoutRef.current) {
        clearTimeout(displayTimeoutRef.current);
        displayTimeoutRef.current = null;
      }

      setDisplayContent(true);
    } else {
      displayTimeoutRef.current = setTimeout(() => {
        setDisplayContent(false);
      }, theme.transitions.duration.enteringScreen);
    }
  }, [open, theme]);
  return /*#__PURE__*/React__default.createElement(Drawer, {
    open: open,
    anchor: "right",
    variant: "persistent",
    classes: {
      paperAnchorRight: classes.paperAnchorRight
    }
  }, displayContent && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(DialogTitleWithCloseButton, {
    className: classes.dialogTitle,
    onClose: onClose
  }, 'Help & Getting Started'), _ref$8, /*#__PURE__*/React__default.createElement("div", {
    className: classes.progressWrapper
  }, /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.pageProgressTitle,
    variant: "h5"
  }, "Page Completion"), /*#__PURE__*/React__default.createElement(CompletionProgressBar, {
    value: progressPercentage,
    variant: "determinate",
    "aria-label": "page progress"
  }), /*#__PURE__*/React__default.createElement(Grid, {
    className: classes.pageProgressCaptionContainer,
    container: true,
    justify: "space-between"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "caption"
  }, `${complete}/${listTotal} Complete`), progressPercentage === 100 && /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.pageProgressMessage,
    variant: "caption"
  }, "Great\u2014ready for visitors!"))), /*#__PURE__*/React__default.createElement("div", {
    className: classes.listWrapper
  }, list && list.length >= 1 && list.map(({
    name,
    label,
    status,
    DetailsComponent
  }, index) => /*#__PURE__*/React__default.createElement(ChecklistItem, {
    open: activeListItem === name && !itemClosing,
    name: name,
    key: name,
    order: index + 1,
    label: label,
    status: status,
    DetailsComponent: DetailsComponent,
    onOpen: onItemExpand,
    onAccordionChange: setActiveListItem,
    onStatusChange: onStatusChange,
    onOpenNextItem: handleOpenNextItem,
    onLinkClick: onLinkClick,
    onActionClick: onActionClick,
    onItemClosing: setItemClosing
  }))), bottomItemComponent && /*#__PURE__*/React__default.createElement(FixedBottomItem, {
    open: activeListItem === bottomItemLabel,
    name: bottomItemLabel,
    label: bottomItemLabel,
    DetailsComponent: bottomItemComponent,
    onOpen: onBottomItemExpand,
    onAccordionChange: setActiveListItem
  })));
}

Checklist.defaultProps = {
  bottomItemLabel: '',
  bottomItemComponent: null,
  topOffset: 0,
  onItemExpand: () => {},
  onBottomItemExpand: () => {},
  onLinkClick: () => {},
  onActionClick: () => {}
};
process.env.NODE_ENV !== "production" ? Checklist.propTypes = {
  open: propTypes.bool.isRequired,
  list: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    status: propTypes.oneOf([LIST_ITEM_STATUS.COMPLETE, LIST_ITEM_STATUS.INCOMPLETE]).isRequired,
    DetailsComponent: propTypes.elementType.isRequired
  })).isRequired,
  topOffset: propTypes.number,
  bottomItemLabel: propTypes.string,
  bottomItemDetailsComponent: propTypes.node,
  onClose: propTypes.func.isRequired,
  onStatusChange: propTypes.func.isRequired,
  onItemExpand: propTypes.func,
  onBottomItemExpand: propTypes.func,
  onLinkClick: propTypes.func,
  onActionClick: propTypes.func
} : void 0;

function ChecklistItemDetails({
  children,
  itemName,
  itemStatus,
  nextButtonLabel,
  onStatusChange,
  onOpenNextItem
}) {
  const handleClickNext = () => {
    if (itemStatus !== LIST_ITEM_STATUS.COMPLETE) {
      onStatusChange(itemName, LIST_ITEM_STATUS.COMPLETE);
    }

    onOpenNextItem(itemName);
  };

  return /*#__PURE__*/React__default.createElement("div", null, children, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "flex-end"
  }, /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleClickNext,
    "data-qa-selector": `${itemName}-next-button`
  }, nextButtonLabel)));
}

process.env.NODE_ENV !== "production" ? ChecklistItemDetails.propTypes = {
  children: propTypes.node.isRequired,
  itemName: propTypes.string.isRequired,
  itemStatus: propTypes.oneOf([LIST_ITEM_STATUS.COMPLETE, LIST_ITEM_STATUS.INCOMPLETE]),
  nextButtonLabel: propTypes.string,
  onStatusChange: propTypes.func.isRequired,
  onOpenNextItem: propTypes.func.isRequired
} : void 0;
ChecklistItemDetails.defaultProps = {
  nextButtonLabel: 'Next'
};

const useStyles$v = styles.makeStyles(({
  spacing
}) => ({
  dialogPaper: {
    maxWidth: 475
  },
  image: {
    marginTop: spacing(3),
    width: 350
  },
  contentHeadline: {
    padding: spacing(3, 0, 1.5),
    textAlign: 'center'
  },
  contentText: {
    textAlign: 'center'
  },
  contentButton: {
    margin: spacing(3, 0, 6)
  }
}));

function ChecklistCelebrationModal({
  open,
  imgSrc,
  imgAlt,
  onClose
}) {
  const classes = useStyles$v();
  return /*#__PURE__*/React__default.createElement(Dialog, {
    classes: {
      paper: classes.dialogPaper
    },
    open: open,
    onClose: onClose,
    fullWidth: true
  }, /*#__PURE__*/React__default.createElement(DialogTitleWithCloseButton, {
    onClose: onClose
  }), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "center"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: classes.image,
    src: imgSrc,
    alt: imgAlt
  })), /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.contentHeadline,
    component: "h2",
    variant: "h3"
  }, "Way to go!"), /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.contentText
  }, "You're one step closer to more leads & sales."), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "center"
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: classes.contentButton,
    onClick: onClose,
    "aria-label": "close celebration"
  }, "Yep, I'm Awesome"))));
}

process.env.NODE_ENV !== "production" ? ChecklistCelebrationModal.propTypes = {
  open: propTypes.bool.isRequired,
  imgSrc: propTypes.string.isRequired,
  imgAlt: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired
} : void 0;

const useStyles$w = styles.makeStyles(theme => ({
  root: ({
    position
  }) => _extends_1({
    width: 350,
    position: 'fixed',
    bottom: 0,
    boxShadow: `0 6px 20px ${theme.palette.greyTransparent[10]}, 0 12px 40px ${theme.palette.greyTransparent[14]}`,
    zIndex: theme.zIndex.modal + 1,
    transition: theme.transitions.create('bottom', {
      duration: theme.transitions.duration.standard
    })
  }, position === 'right' ? {
    right: theme.spacing(3)
  } : {
    left: theme.spacing(3)
  }, {
    '&.Mui-expanded, &[class*="MuiAccordion-expanded"]': {
      bottom: theme.spacing(3)
    },
    '@media (max-width: 425px)': {
      width: '100%',
      margin: 'auto',
      left: 0,
      right: 0,
      '&.Mui-expanded, &[class*="MuiAccordion-expanded"]': {
        bottom: '0 !important' // Required to win specificity on marketing site and in-app.

      }
    }
  }),
  title: {
    fontWeight: theme.typography.fontWeightBold,
    opacity: 0.7
  },
  contentHeader: {
    marginBottom: 12,
    lineHeight: theme.typography.pxToRem(30)
  },
  content: {
    marginBottom: 18
  },
  linkRoot: ({
    textColor
  }) => ({
    margin: '12px 9px 12px 0',
    color: textColor,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    '&:visited': {
      color: textColor
    }
  }),
  linkHover: ({
    textColor
  }) => ({
    '&:hover, &.Mui-focusVisible': {
      paddingBottom: 4,
      textDecoration: 'none',
      color: textColor,
      borderBottom: `2px solid ${textColor}`
    }
  }),
  linkArrow: {
    position: 'relative',
    width: 10,
    height: 10,
    top: 1
  }
}), {
  classNamePrefix: 'BundleInfoSheet'
});

const BundleInfoSheet = ({
  className,
  backgroundColor,
  textColor,
  title,
  contentHeader,
  contentBody,
  imageSrc,
  isDefaultOpen,
  position,
  linkLabel,
  linkURL,
  onCollapseChange
}) => {
  const classes = useStyles$w({
    position,
    textColor
  });
  return /*#__PURE__*/React__default.createElement(InfoSheet, {
    title: /*#__PURE__*/React__default.createElement(Typography, {
      className: classes.title,
      variant: "overline"
    }, title),
    AccordionProps: {
      defaultExpanded: isDefaultOpen,
      classes: {
        root: clsx(classes.root, className)
      },
      onChange: onCollapseChange,
      elevation: 0
    },
    footerImage: imageSrc && /*#__PURE__*/React__default.createElement("div", {
      style: {
        backgroundSize: 'cover',
        backgroundImage: `url(${imageSrc})`,
        height: 112,
        width: '100%'
      }
    }),
    backgroundColor: backgroundColor,
    textColor: textColor,
    "data-qa-selector": "bundle-info-sheet"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(VSTypography, {
    className: classes.contentHeader,
    variant: "h5"
  }, contentHeader), /*#__PURE__*/React__default.createElement(Typography, {
    className: classes.content,
    component: "div",
    variant: "body2"
  }, contentBody), linkURL && linkLabel && /*#__PURE__*/React__default.createElement(Typography, {
    component: "div",
    variant: "body2"
  }, /*#__PURE__*/React__default.createElement(Link, {
    underline: "hover",
    classes: {
      root: classes.linkRoot,
      underlineHover: classes.linkHover
    },
    href: linkURL,
    target: "_blank"
  }, linkLabel), /*#__PURE__*/React__default.createElement(ArrowForwardIosIcon, {
    className: classes.linkArrow
  }))));
};

process.env.NODE_ENV !== "production" ? BundleInfoSheet.propTypes = {
  className: propTypes.string,
  backgroundColor: propTypes.string,
  textColor: propTypes.string,
  title: propTypes.string.isRequired,
  contentHeader: propTypes.string.isRequired,
  contentBody: propTypes.string.isRequired,
  imageSrc: propTypes.string,
  isDefaultOpen: propTypes.bool,
  position: propTypes.oneOf(['left', 'right']),
  linkURL: propTypes.string,
  linkLabel: propTypes.string,
  onCollapseChange: propTypes.func
} : void 0;
BundleInfoSheet.defaultProps = {
  className: '',
  backgroundColor: primaryColors.indigo,
  textColor: primaryColors.white,
  imageSrc: null,
  isDefaultOpen: false,
  position: 'right',
  linkURL: null,
  linkLabel: null,
  onCollapseChange: () => {}
};

const useStyles$x = styles.makeStyles({
  dialog: {
    maxWidth: 557
  }
});

var _ref$9 = /*#__PURE__*/React__default.createElement(Link, {
  href: "mailto:support@leadpages.com"
}, "support@leadpages.com");

const FeedbackTool = ({
  closeModal,
  hasRequestedFeedback,
  open,
  onSubmit,
  kind,
  setRequestedFeedback,
  ToastProps
}) => {
  const classes = useStyles$x();
  const [showToast, setShowToast] = React.useState(false);
  const [questions, setQuestions] = React.useState('');
  const [hasError, setHasError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const closeToast = () => setShowToast(false);

  const onClose = () => {
    setQuestions('');
    closeModal();
  };

  const onConfirm = async () => {
    if (questions === '') return setHasError(true);
    setIsSubmitting(true);
    await onSubmit(questions);
    onClose();
    setShowToast(true);
    setIsSubmitting(false);
    setRequestedFeedback();
  };

  const onChange = e => {
    if (e.target.value !== '') setHasError(false);
    setQuestions(e.target.value);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, hasRequestedFeedback ? /*#__PURE__*/React__default.createElement(ConfirmDialog, {
    classes: {
      paper: classes.dialog
    },
    type: "alert",
    confirmButtonText: "Close",
    onClose: closeModal,
    onConfirm: closeModal,
    open: open,
    titleText: "Your request for feedback has been successfully submitted.",
    descriptionText: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "If you don\u2019t see an email confirming your submission, make sure to check your spam folder. If you still don\u2019t see it or have any other issues, contact us at", ' ', _ref$9, "."),
    ConfirmButtonProps: {
      variant: 'text'
    }
  }) : /*#__PURE__*/React__default.createElement(ConfirmDialog, {
    classes: {
      paper: classes.dialog
    },
    cancelButtonText: "Cancel",
    confirmButtonText: "Submit",
    disableBackdropClick: isSubmitting,
    onConfirm: onConfirm,
    onClose: onClose,
    open: open,
    titleText: `Get Feedback on Your ${kind}`,
    ConfirmButtonProps: {
      isLoading: isSubmitting
    },
    CancelButtonProps: {
      disabled: isSubmitting
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    paragraph: true
  }, "Feeling stuck or just need a little nudge? Submit your ", kind.toLowerCase(), " for feedback, and Leadpages staff will review it and email you with a detailed list of how to optimize it for conversion."), /*#__PURE__*/React__default.createElement(TextField, {
    label: "Questions",
    fullWidth: true,
    multiline: true,
    rows: 4,
    placeholder: "Let us know what kind of feedback you are looking for",
    value: questions,
    onChange: onChange,
    error: hasError
  })), /*#__PURE__*/React__default.createElement(Toast, Object.assign({
    message: `Your ${kind.toLowerCase()} has been submitted for feedback.`,
    onClose: closeToast,
    open: showToast
  }, ToastProps)));
};

process.env.NODE_ENV !== "production" ? FeedbackTool.propTypes = {
  closeModal: propTypes.func.isRequired,
  hasRequestedFeedback: propTypes.bool.isRequired,
  kind: propTypes.oneOf(['Page', 'Site']).isRequired,
  onSubmit: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
  setRequestedFeedback: propTypes.func.isRequired,
  ToastProps: propTypes.shape({})
} : void 0;
FeedbackTool.defaultProps = {
  ToastProps: {}
};

function Squiggle({
  component: SquiggleComponent,
  pathProps,
  repeatCount,
  shellProps
}) {
  const repeatDef = [...Array(repeatCount)].map(() => ' t 90 0').join('');
  return /*#__PURE__*/React__default.createElement(SquiggleComponent, shellProps, /*#__PURE__*/React__default.createElement("path", Object.assign({
    fill: "transparent",
    d: `M0 80 Q 45 40, 90 80${repeatDef}`
  }, pathProps)));
}
process.env.NODE_ENV !== "production" ? Squiggle.propTypes = {
  component: propTypes.node,
  pathProps: propTypes.shape({}),
  repeatCount: propTypes.number,
  shellProps: propTypes.shape({})
} : void 0;
Squiggle.defaultProps = {
  component: 'svg',
  pathProps: {
    stroke: 'rebeccapurple',
    strokeWidth: '2'
  },
  repeatCount: 1,
  shellProps: {}
};

var _ref$a = /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("polygon", {
  id: "leadpages-logo-a",
  points: "2.83 2.88 2.83 0 0 0 0 2.88 2.83 2.88"
}));

var _ref2$5 = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#000",
  d: "M31.8836996,15.2182255 L27.8879099,13.1276138 L16.2201269,19.2330192 C16.0901148,19.3015114 15.9344846,19.3015114 15.8044725,19.2330192 L4.13733001,13.1276138 L0.142180691,15.2182255 C-0.0473935635,15.3174431 -0.0473935635,15.5882112 0.142180691,15.6874289 L15.8044725,23.8840861 C15.9344846,23.9519381 16.0901148,23.9519381 16.2201269,23.8840861 L31.8836996,15.6874289 C32.0732739,15.5888514 32.0732739,15.3174431 31.8836996,15.2182255 M3.06969392,10.5735597 L15.8044725,17.2377845 C15.9344846,17.3062767 16.0901148,17.3062767 16.2201269,17.2377845 L28.9561864,10.5735597 C29.1457607,10.4743421 29.1457607,10.2029339 28.9561864,10.1037162 L25.3043202,8.19297653 L16.2201269,12.9464616 C16.0901148,13.0149538 15.9351251,13.0149538 15.8044725,12.9464616 L6.72091967,8.19297653 L3.06969392,10.1037162 C2.88011966,10.2029339 2.88011966,10.4743421 3.06969392,10.5735597 M5.83837466,5.73621977 L15.8044725,10.9512269 C15.9344846,11.0197191 16.0901148,11.0197191 16.2201269,10.9512269 L26.1868652,5.73621977 C26.3764395,5.63700213 26.3764395,5.36559388 26.1868652,5.26637624 L16.2201269,0.0513691323 C16.0901148,-0.0171230441 15.9344846,-0.0171230441 15.8044725,0.0513691323 L5.83837466,5.26637624 C5.64944086,5.36559388 5.64944086,5.63700213 5.83837466,5.73621977"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#000019",
  d: "M91.2883292,9.54345661 C90.891248,9.03648649 90.2956262,8.63961593 89.4354971,8.63961593 C87.2733259,8.63961593 86.8320534,10.6899004 86.8320534,12.3433144 C86.8320534,13.9973684 87.2733259,16.0252489 89.4354971,16.0252489 C90.2956262,16.0252489 90.891248,15.6283784 91.2883292,15.1214083 C91.8615352,14.371835 92.0165249,13.3354908 92.0165249,12.3433144 C92.0165249,11.351138 91.8615352,10.2930299 91.2883292,9.54345661 M92.7664961,17.4142959 C92.0600758,17.9878378 91.1339799,18.3405405 89.9645117,18.3405405 C88.5971434,18.3405405 87.4942824,17.8553343 86.9646273,17.2158606 L86.9646273,22.4417496 L84.2068342,22.4417496 L84.2068342,6.58869132 L86.5893215,6.58869132 L86.7660867,7.84587482 C87.4500911,6.7871266 88.7290768,6.32432432 89.9869276,6.32432432 C91.1339799,6.32432432 92.0600758,6.72119488 92.7664961,7.29409673 C94.1338644,8.41877667 94.8178688,10.1387624 94.8178688,12.2991465 C94.8178688,14.5485064 94.1338644,16.2896159 92.7664961,17.4142959"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#000019",
  points: "38.94 18.065 38.94 2.432 41.785 2.432 41.785 15.375 47.191 15.375 48.769 18.065"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#000019",
  d: "M76.9255177 8.64089616C76.0666695 8.64089616 75.4716881 9.03776671 75.0752473 9.54409673 74.5026819 10.2917496 74.3483326 11.3268137 74.3483326 12.3177098 74.3483326 13.308606 74.5026819 14.3641536 75.0752473 15.1130868 75.4716881 15.6194168 76.0666695 16.0162873 76.9255177 16.0162873 79.0838462 16.0162873 79.5244782 13.9685633 79.5244782 12.3177098 79.5244782 10.6668563 79.0838462 8.64089616 76.9255177 8.64089616L76.9255177 8.64089616zM79.7665697 18.0627312L79.590445 16.8081081C78.9077215 17.864936 77.6300166 18.3270982 76.3747276 18.3270982 75.2295967 18.3270982 74.2823658 17.9308677 73.5778669 17.3592461 72.2117795 16.2364865 71.5514719 14.5184211 71.5514719 12.3618777 71.5514719 10.1157183 72.2341954 8.37716927 73.5996423 7.25376956 74.3041413 6.68214794 75.2295967 6.33008535 76.396503 6.33008535 77.8503326 6.33008535 78.9077215 6.81401138 79.3919043 7.40803698L79.3919043 2.43243243 82.1452142 2.43243243 82.1452142 18.0627312 79.7665697 18.0627312zM112.900814 21.2216927C111.82165 21.2216927 110.015571 21.0898293 110.015571 19.636771 110.015571 18.9108819 110.455563 18.4039118 111.050544 18.2278805L113.208872 18.2278805C114.244486 18.2278805 115.940407 18.2278805 115.940407 19.636771 115.940407 21.155761 114.001754 21.2216927 112.900814 21.2216927M112.702274 8.38805121C113.957563 8.38805121 114.728669 9.29125178 114.728669 10.524111 114.728669 11.7569701 113.957563 12.6364865 112.702274 12.6364865 111.446985 12.6364865 110.676519 11.7569701 110.676519 10.524111 110.676519 9.29125178 111.446985 8.38805121 112.702274 8.38805121M117.151505 16.81899C116.07234 16.0713371 114.574319 16.0495733 113.429188 16.0495733L111.535367 16.0495733C110.962802 16.0495733 110.279438 15.8940256 110.279438 15.2123044 110.279438 14.838478 110.587496 14.5523471 110.852644 14.3974395 111.425209 14.5965149 112.063741 14.7066145 112.702274 14.7066145 115.169301 14.7066145 117.274472 13.2100284 117.274472 10.7878378 117.274472 8.97567568 115.851384 8.41109531 115.827687 8.37972973L118.20377 8.37972973 119.406542 6.32432432 112.702274 6.32432432C110.125729 6.32432432 108.010951 7.7940256 108.010951 10.524111 108.010951 11.6897582 108.451583 12.6364865 109.156082 13.3418919 108.231267 13.9135135 107.790635 14.6842105 107.790635 15.6520626 107.790635 16.4016358 108.209492 17.2152205 108.936407 17.612091 107.614511 18.2720484 107.184766 19.974111 107.945625 21.448293 109.224611 23.2130868 111.193365 23.4012802 113.010972 23.4012802 115.565742 23.4012802 118.539367 22.5864154 118.539367 19.5708393 118.539367 18.4698435 118.142286 17.5019915 117.151505 16.81899M134.946768 18.377027C134.309516 18.377027 133.585163 18.2893314 132.969687 18.0915363 131.520341 17.6088905 130.29003 16.5328592 129.960837 14.9959459L132.201143 14.1836415C132.442594 15.5009957 133.716456 16.137909 134.968543 16.137909 135.671761 16.137909 136.198854 16.0502134 136.594014 15.8082504 136.967399 15.5886913 137.165299 15.2814367 137.165299 14.8864865 137.165299 14.1836415 136.725948 13.8104552 135.979179 13.6792319L133.233554 13.1959459C131.366632 12.8669275 130.334221 11.5495733 130.334221 10.1003556 130.334221 7.86123755 132.354852 6.32432432 134.946768 6.32432432 137.165299 6.32432432 138.944479 7.26849218 139.493347 9.33221906L137.231265 10.2104552C136.989814 9.04672831 135.956763 8.51991465 134.968543 8.51991465 134.595159 8.51991465 134.221774 8.54167852 133.826614 8.69530583 133.321296 8.893101 132.947912 9.24452347 132.947912 9.81486486 132.947912 10.6271693 133.65113 10.7590327 134.265965 10.8691323L136.550463 11.3082504C138.351419 11.6590327 139.735439 12.8009957 139.735439 14.6009957 139.735439 16.9060455 137.867876 18.377027 134.946768 18.377027M54.9566796 9.23364154C54.5595984 8.81500711 53.9646171 8.55 53.1704546 8.55 51.7147037 8.55 50.6118427 9.58634424 50.4799092 11.1514225L55.6182682 11.1514225C55.5964927 10.3576814 55.3755363 9.7188478 54.9566796 9.23364154M58.3088136 13.156899L50.5016847 13.156899C50.5241005 14.8762447 51.8248617 16.0444523 53.4131865 16.0444523 54.9566796 16.0444523 55.7726175 15.2513514 56.1696987 14.2374111L58.3312294 15.1412518C57.7573831 16.8599573 56.0371248 18.3591038 53.4567374 18.3591038 50.1270193 18.3591038 47.7009812 15.9125889 47.7009812 12.363798 47.7009812 9.14530583 49.6857468 6.32432432 53.1922301 6.32432432 55.1110289 6.32432432 56.6769379 7.16159317 57.5812583 8.72667141 58.1986556 9.76237553 58.3971962 10.9747511 58.3747803 12.2095306 58.3747803 12.7824324 58.3088136 13.156899 58.3088136 13.156899M67.1240164 12.9795875L64.213155 13.1997866C63.3754417 13.2663585 62.5595039 13.7726885 62.5595039 14.698293 62.5595039 15.5803698 63.2870591 16.1308677 64.1913795 16.1308677 65.9109973 16.1308677 67.1240164 15.2052632 67.1240164 13.5083215L67.1240164 12.9795875zM69.8139213 15.2276671C69.8139213 15.7564011 70.12262 15.9548364 70.5856679 15.9548364 70.7624331 15.9548364 70.9167824 15.9106686 70.9167824 15.9106686L70.9167824 17.8502134C70.6080838 18.0704125 70.2769693 18.2464438 69.6153807 18.2464438 68.4247776 18.2464438 67.5870643 17.4975107 67.4986817 16.6378378 66.8595091 17.5852063 65.64649 18.3565434 64.0152548 18.3565434 61.2805181 18.3565434 59.8695989 16.6378378 59.8695989 14.7648649 59.8695989 12.5827169 61.5674413 11.3268137 63.750107 11.1725462L67.1240164 10.9299431 67.1240164 10.4671408C67.1240164 9.25540541 66.3080785 8.55 64.9631261 8.55 63.419633 8.55 62.6696619 9.29893314 62.4717617 10.445377L60.1565221 9.93840683C60.3326468 8.021266 62.1630631 6.32432432 65.0290928 6.32432432 68.0059209 6.32432432 69.8139213 7.77866287 69.8139213 10.6655761L69.8139213 15.2276671zM102.65638 12.9795875L99.7455185 13.1997866C98.9078053 13.2663585 98.0918674 13.7726885 98.0918674 14.698293 98.0918674 15.5803698 98.8194227 16.1308677 99.7237431 16.1308677 101.443361 16.1308677 102.65638 15.2052632 102.65638 13.5083215L102.65638 12.9795875zM105.346285 15.2276671C105.346285 15.7564011 105.654984 15.9548364 106.118031 15.9548364 106.294797 15.9548364 106.449146 15.9106686 106.449146 15.9106686L106.449146 17.8502134C106.140447 18.0704125 105.809333 18.2464438 105.147744 18.2464438 103.957141 18.2464438 103.119428 17.4975107 103.031045 16.6378378 102.391873 17.5852063 101.178854 18.3565434 99.5476184 18.3565434 96.8128817 18.3565434 95.4019625 16.6378378 95.4019625 14.7648649 95.4019625 12.5827169 97.0998049 11.3268137 99.2824706 11.1725462L102.65638 10.9299431 102.65638 10.4671408C102.65638 9.25540541 101.840442 8.55 100.49549 8.55 98.9519966 8.55 98.2020254 9.29893314 98.0041253 10.445377L95.6888857 9.93840683C95.8650104 8.021266 97.6954267 6.32432432 100.561456 6.32432432 103.538285 6.32432432 105.346285 7.77866287 105.346285 10.6655761L105.346285 15.2276671z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#000019",
  d: "M126.021407,9.23364154 C125.624326,8.81500711 125.029344,8.55 124.235182,8.55 C122.779431,8.55 121.67657,9.58634424 121.544636,11.1514225 L126.682995,11.1514225 C126.66122,10.3576814 126.440263,9.7188478 126.021407,9.23364154 M129.373541,13.156899 L121.566412,13.156899 C121.588828,14.8762447 122.889589,16.0444523 124.477914,16.0444523 C126.021407,16.0444523 126.837345,15.2513514 127.234426,14.2374111 L129.395957,15.1412518 C128.82211,16.8599573 127.101852,18.3591038 124.521465,18.3591038 C121.191746,18.3591038 118.765708,15.9125889 118.765708,12.363798 C118.765708,9.14530583 120.750474,6.32432432 124.256957,6.32432432 C126.175756,6.32432432 127.741665,7.16159317 128.645985,8.72667141 C129.263383,9.76237553 129.461923,10.9747511 129.439507,12.2095306 C129.439507,12.7824324 129.373541,13.156899 129.373541,13.156899"
}), /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(140.746 6.012)"
}, /*#__PURE__*/React__default.createElement("mask", {
  id: "leadpages-logo-b",
  fill: "#fff"
}, /*#__PURE__*/React__default.createElement("use", {
  xlinkHref: "#leadpages-logo-a"
})), /*#__PURE__*/React__default.createElement("path", {
  fill: "#000019",
  d: "M1.47752637,0.908961593 L1.18355818,0.908961593 L1.18355818,1.37112376 L1.47752637,1.37112376 C1.63443749,1.37112376 1.7362696,1.30071124 1.7362696,1.13620199 C1.7362696,0.983214794 1.61842615,0.908961593 1.47752637,0.908961593 L1.47752637,0.908961593 Z M1.73242688,2.16678521 L1.48136909,1.614367 L1.1874009,1.614367 L1.1874009,2.16678521 L0.924814942,2.16678521 L0.924814942,0.666358464 L1.47752637,0.666358464 C1.76380911,0.666358464 2.01038373,0.83086771 2.01038373,1.13620199 C2.01038373,1.33207681 1.92456295,1.48890469 1.74011233,1.57083926 L2.01806917,2.16678521 L1.73242688,2.16678521 Z M1.41476192,0.250924609 C0.72115071,0.250924609 0.26258596,0.755974395 0.26258596,1.44153627 C0.26258596,2.12709815 0.72115071,2.62894737 1.41476192,2.62894737 C2.10837312,2.62894737 2.56693787,2.12325747 2.56693787,1.43769559 C2.56693787,0.752133713 2.10837312,0.250924609 1.41476192,0.250924609 L1.41476192,0.250924609 Z M1.41476192,2.87987198 C0.603307255,2.87987198 0,2.24487909 0,1.44153627 C0,0.63883357 0.603307255,0 1.41476192,0 C2.22621658,0 2.83016429,0.634992888 2.83016429,1.43769559 C2.83016429,2.24103841 2.22621658,2.87987198 1.41476192,2.87987198 L1.41476192,2.87987198 Z",
  mask: "url(#leadpages-logo-b)"
})));

function Logo (props) {
  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    width: "144",
    height: "24",
    viewBox: "0 0 144 24"
  }, props), _ref$a, _ref2$5);
}

const useStyles$y = styles.makeStyles(({
  palette,
  breakpoints
}) => ({
  container: {
    display: 'block',
    background: palette.grey[4],
    minHeight: '100%',
    padding: '0 24px',
    position: 'relative'
  },
  gridContainer: {
    minHeight: '100vh',
    position: 'relative'
  },
  gridContent: {
    margin: '72px auto',
    [breakpoints.up('md')]: {
      margin: '120px auto'
    }
  },
  gridFooter: {
    alignSelf: 'flex-end',
    margin: '0 auto 24px',
    color: palette.grey[70],
    width: '100%'
  },
  gridFooterContainer: {
    flexDirection: 'column',
    [breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: palette.grey[70],
      textDecoration: 'none'
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  logo: {
    position: 'absolute',
    top: 24,
    left: 24
  },
  paper: {
    minHeight: 436,
    position: 'relative',
    margin: '0 auto',
    [breakpoints.up('md')]: {
      maxWidth: 696
    }
  },
  squiggle: {
    display: 'none',
    position: 'fixed',
    left: 'calc(50% + 247px)',
    width: 168,
    height: '100%',
    [breakpoints.up('md')]: {
      display: 'block'
    }
  }
}));

var _ref$b = /*#__PURE__*/React__default.createElement(Typography, {
  variant: "body2",
  align: "center"
}, "\xA9 2021 Leadpages (US) Inc.");

function Onboarding({
  children,
  paperProps
}) {
  const theme = styles.useTheme();
  const classes = useStyles$y();
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default.createElement(Logo, {
    className: classes.logo
  }), /*#__PURE__*/React__default.createElement("svg", {
    className: classes.squiggle
  }, /*#__PURE__*/React__default.createElement(Squiggle, {
    component: "g",
    shellProps: {
      style: {
        transform: 'translate(404px, -420px) rotate(90deg) scale(4, 4)'
      }
    },
    pathProps: {
      strokeWidth: 1,
      stroke: theme.palette.grey[10]
    },
    repeatCount: 100
  })), /*#__PURE__*/React__default.createElement(Grid, {
    className: classes.gridContainer,
    container: true,
    justify: "center"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: 12,
    className: classes.gridContent
  }, /*#__PURE__*/React__default.createElement(Paper, Object.assign({
    className: classes.paper
  }, paperProps), children)), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    className: classes.gridFooter
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    justify: "center",
    alignItems: "center",
    spacing: 1,
    className: classes.gridFooterContainer
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    className: classes.gridLp
  }, _ref$b), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    className: classes.gridLinks
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2",
    align: "center"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: classes.link,
    href: "https://www.leadpages.net/contact"
  }, "Contact"), ' ', "|", ' ', /*#__PURE__*/React__default.createElement("a", {
    className: classes.link,
    href: "https://www.leadpages.net/legal"
  }, "Legal"), ' ', "|", ' ', /*#__PURE__*/React__default.createElement("a", {
    className: classes.link,
    href: "https://www.leadpages.net/privacy"
  }, "Privacy")))))));
}
process.env.NODE_ENV !== "production" ? Onboarding.propTypes = {
  children: propTypes.node.isRequired,
  paperProps: propTypes.shape({})
} : void 0;
Onboarding.defaultProps = {
  paperProps: {}
};

var _ref2$6 = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "40",
  height: "26",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "15",
  height: "5",
  x: "25",
  y: "7",
  fill: "#C3C2C1"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "15",
  height: "5",
  x: "25",
  y: "15",
  fill: "#C3C2C1"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  d: "M20,26 C20,21.581722 16.418278,18 12,18 C7.581722,18 4,21.581722 4,26 L20,26 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "12",
  cy: "11",
  r: "4",
  fill: "#B27E52"
}));

function AboutMeBio(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-16 -23 72 72"
  }, props), _ref2$6);
}
process.env.NODE_ENV !== "production" ? AboutMeBio.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
AboutMeBio.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$7 = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M0,0 L48,0 L48,26 C48,32.627417 42.627417,38 36,38 L0,38 L0,0 Z"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "48",
  height: "10",
  fill: "#DFAE78"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "24",
  cy: "46",
  r: "8",
  fill: "#C3C2C1"
}));

function AlertBar(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-12 -9 72 72"
  }, props), _ref2$7);
}
process.env.NODE_ENV !== "production" ? AlertBar.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
AlertBar.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$8 = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  opacity: ".9",
  transform: "translate(-.2)"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#C3C2C1",
  d: "M0.2,5.8 L0.2,-2.48689958e-13 L22.2,-2.48689958e-13 L22.2,5.8 C22.2,11.9855892 17.2751322,17 11.2,17 C5.12486775,17 0.2,11.9855892 0.2,5.8 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M0.2,22.8 L0.2,17 L22.2,17 L22.2,22.8 C22.2,28.9855892 17.2751322,34 11.2,34 C5.12486775,34 0.2,28.9855892 0.2,22.8 Z",
  transform: "matrix(1 0 0 -1 0 51)"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#43E0F0",
  points: "3.2 32 11.2 26 19.2 32"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#FFF",
  points: "3.2 17 11.2 8 19.2 17",
  transform: "matrix(1 0 0 -1 0 25)"
}));

function ComingSoon(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-25 -19 72 72"
  }, props), _ref2$8);
}
process.env.NODE_ENV !== "production" ? ComingSoon.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
ComingSoon.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$9 = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M5,11 L5,0 L33,0 L33,11 C33,18.7319865 26.7319865,25 19,25 C11.2680135,25 5,18.7319865 5,11 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "19",
  cy: "30",
  r: "5",
  fill: "#FFDCEE"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#E7E6E6",
  points: "19 35 29.044 41 8.956 41"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#C3C2C1",
  d: "M33,10 C35.7614237,10 38,7.76142375 38,5 C38,2.23857625 35.7614237,-1.8189894e-12 33,-1.8189894e-12 L33,10 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#C3C2C1",
  d: "M0,10 C2.76142375,10 5,7.76142375 5,5 C5,2.23857625 2.76142375,-1.8189894e-12 0,-1.8189894e-12 L0,10 Z",
  transform: "matrix(-1 0 0 1 5 0)"
}));

function ContestGiveaway(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-17 -15.5 72 72"
  }, props), _ref2$9);
}
process.env.NODE_ENV !== "production" ? ContestGiveaway.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
ContestGiveaway.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$a = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M36,7 C33.2385763,7 31,9.23857625 31,12 C31,14.7614237 33.2385763,17 36,17 L36,23 L0,23 L0,17 C2.76142375,17 5,14.7614237 5,12 C5,9.23857625 2.76142375,7 0,7 L0,0 L36,0 L36,7 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "18",
  cy: "12",
  r: "5",
  fill: "#F65B1C"
}));

function DiscountCoupon(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-18 -24.5 72 72"
  }, props), _ref2$a);
}
process.env.NODE_ENV !== "production" ? DiscountCoupon.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
DiscountCoupon.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$b = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "36",
  height: "23",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#603EFF",
  points: "0 0 36 0 18 14"
}));

function ENewsletter(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-18 -24.5 72 72"
  }, props), _ref2$b);
}
process.env.NODE_ENV !== "production" ? ENewsletter.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
ENewsletter.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$c = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(0 -.5)"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "36",
  height: "26",
  y: "15.5",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "11",
  height: "11",
  x: "12.278",
  y: "22.985",
  fill: "#603EFF",
  transform: "rotate(-45 17.778 28.485)"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "36",
  height: "10",
  y: "5.5",
  fill: "#C3C2C1"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M6.5,8 C9.26142375,8 11.5,5.76142375 11.5,3 C11.5,0.238576251 9.26142375,-2 6.5,-2 L6.5,8 Z",
  transform: "rotate(-90 9 3)"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M24.5,8 C27.2614237,8 29.5,5.76142375 29.5,3 C29.5,0.238576251 27.2614237,-2 24.5,-2 L24.5,8 Z",
  transform: "rotate(-90 27 3)"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "9",
  cy: "5.5",
  r: "5",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "27",
  cy: "5.5",
  r: "5",
  fill: "#E7E6E6"
}));

function Event(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-18 -15.5 72 72"
  }, props), _ref2$c);
}
process.env.NODE_ENV !== "production" ? Event.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
Event.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$d = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "38",
  height: "22",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "8",
  cy: "11",
  r: "4",
  fill: "#FFF"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "19",
  cy: "11",
  r: "4",
  fill: "#FFF"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "30",
  cy: "11",
  r: "4",
  fill: "#FFF"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "0 22 8 22 0 30"
}), /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(21 26)"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "23",
  height: "15",
  fill: "#4D7523",
  transform: "matrix(-1 0 0 1 23 0)"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "15 15 23 15 15 23",
  transform: "matrix(-1 0 0 1 38 0)"
})));

function FreeConsultation(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-14 -11.5 72 72"
  }, props), _ref2$d);
}
process.env.NODE_ENV !== "production" ? FreeConsultation.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
FreeConsultation.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$e = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#E7E6E6",
  points: "0 0 12.571 0 24 11.429 24 31 0 31"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#43E0F0",
  points: "12.571 0 24 11.429 12.571 11.429"
}));

function FreeResource(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-24 -20.5 72 72"
  }, props), _ref2$e);
}
process.env.NODE_ENV !== "production" ? FreeResource.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
FreeResource.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$f = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(0 26)"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "52",
  height: "34",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "0 0 52 0 26 22"
})), /*#__PURE__*/React__default.createElement("path", {
  fill: "#43E0F0",
  d: "M40,26 C40,18.2680135 33.7319865,12 26,12 C18.2680135,12 12,18.2680135 12,26 L40,26 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "26",
  cy: "6",
  r: "6",
  fill: "#C3C2C1"
}));

function GenerateLeads(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-10 -6 72 72"
  }, props), _ref2$f);
}
process.env.NODE_ENV !== "production" ? GenerateLeads.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
GenerateLeads.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$g = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "48",
  height: "38",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "26",
  height: "8",
  x: "11",
  y: "19",
  fill: "#F65B1C",
  rx: "4"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "35.157 48.843 24 60 12.843 48.843 24 37.686"
}));

function LandingPage(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-12 -6 72 72"
  }, props), _ref2$g);
}
process.env.NODE_ENV !== "production" ? LandingPage.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
LandingPage.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$h = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "0 0 11 0 11 10",
  transform: "translate(0 10)"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M11,20 L60,20 L60,36 C60,42.627417 54.627417,48 48,48 L23,48 C16.372583,48 11,42.627417 11,36 L11,20 Z"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#4D7523",
  points: "26 10 36 0 46 10 36 20"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "47",
  cy: "54",
  r: "6",
  fill: "#C3C2C1"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "24",
  cy: "54",
  r: "6",
  fill: "#C3C2C1"
}));

function MakeSales(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-6 -6 72 72"
  }, props), _ref2$h);
}
process.env.NODE_ENV !== "production" ? MakeSales.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
MakeSales.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$i = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "48",
  height: "38",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "32",
  height: "22",
  x: "8",
  y: "8",
  fill: "#D1C6F9"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#878584",
  points: "38 44 24 50 10 44 24 38"
}));

function PopUp(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-12 -11 72 72"
  }, props), _ref2$i);
}
process.env.NODE_ENV !== "production" ? PopUp.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
PopUp.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$j = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(0 -.02)"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#C3C2C1",
  d: "M28,60.0208153 C28,52.2888288 21.7319865,46.0208153 14,46.0208153 C6.2680135,46.0208153 0,52.2888288 0,60.0208153 L28,60.0208153 Z",
  transform: "rotate(-180 14 53.02)"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#E7E6E6",
  d: "M4.10050506,4.12383227 C9.56784515,-1.34685705 18.4321549,-1.34685705 23.8994949,4.12383227 C29.366835,9.59452159 29.366835,18.4642615 23.8994949,23.9349508 L14,34.0208153 L4.10050506,23.9349508 C-1.36683502,18.4642615 -1.36683502,9.59452159 4.10050506,4.12383227 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "14",
  cy: "40.021",
  r: "6",
  fill: "#E28F44"
}));

function SomethingElse(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-22 -6 72 72"
  }, props), _ref2$j);
}
process.env.NODE_ENV !== "production" ? SomethingElse.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
SomethingElse.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$k = /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("path", {
  id: "thank-you-a",
  d: "M30.3743874,5.54518267 C37.2085661,12.3391247 37.208509,23.3543407 30.3743874,30.1482259 L18.0000107,42.4497475 L5.62563404,30.1482259 C-1.20854468,23.3542839 -1.20854468,12.3391247 5.62563404,5.54518267 C12.4597557,-1.24870254 23.5402086,-1.24875932 30.3743874,5.54518267 Z"
}));

var _ref3$2 = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(-.5 -.45)"
}, /*#__PURE__*/React__default.createElement("mask", {
  id: "thank-you-b",
  fill: "#fff"
}, /*#__PURE__*/React__default.createElement("use", {
  xlinkHref: "#thank-you-a"
})), /*#__PURE__*/React__default.createElement("use", {
  fill: "#E7E6E6",
  xlinkHref: "#thank-you-a"
}), /*#__PURE__*/React__default.createElement("rect", {
  width: "11",
  height: "11",
  x: "12.778",
  y: "12.728",
  fill: "#4D7523",
  mask: "url(#thank-you-b)",
  transform: "rotate(-45 18.278 18.228)"
}));

function ThankYou(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width,
    height: height,
    viewBox: "-18.5 -15 72 72"
  }, props), _ref2$k, _ref3$2);
}
process.env.NODE_ENV !== "production" ? ThankYou.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
ThankYou.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$l = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "38",
  height: "26",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  d: "M27,26 C27,21.581722 23.418278,18 19,18 C14.581722,18 11,21.581722 11,26 L27,26 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "19",
  cy: "11",
  r: "4",
  fill: "#DFAE78"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "11 32 19 26 27 32"
}));

function Webinar(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-17 -20 72 72"
  }, props), _ref2$l);
}
process.env.NODE_ENV !== "production" ? Webinar.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
Webinar.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$m = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("rect", {
  width: "38",
  height: "26",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  d: "M27,26 C27,21.581722 23.418278,18 19,18 C14.581722,18 11,21.581722 11,26 L27,26 Z"
}), /*#__PURE__*/React__default.createElement("circle", {
  cx: "19",
  cy: "11",
  r: "4",
  fill: "#DFAE78"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#C3C2C1",
  points: "11 32 19 26 27 32"
}));

function WebinarEvent(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-17 -20 72 72"
  }, props), _ref2$m);
}
process.env.NODE_ENV !== "production" ? WebinarEvent.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
WebinarEvent.defaultProps = {
  width: 72,
  height: 72
};

var _ref2$n = /*#__PURE__*/React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("circle", {
  cx: "24",
  cy: "24",
  r: "24",
  fill: "#E7E6E6"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#C3C2C1",
  d: "M24,48 C37.254834,48 48,37.254834 48,24 C48,10.745166 37.254834,-3.55271368e-15 24,-3.55271368e-15 L24,48 Z"
}), /*#__PURE__*/React__default.createElement("polygon", {
  fill: "#43E0F0",
  points: "24 48 36 60 12 60"
}));

function Website(_ref) {
  let {
    width,
    height
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["width", "height"]);

  return /*#__PURE__*/React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "-12 -6 72 72"
  }, props), _ref2$n);
}
process.env.NODE_ENV !== "production" ? Website.propTypes = {
  width: propTypes.number,
  height: propTypes.number
} : void 0;
Website.defaultProps = {
  width: 72,
  height: 72
};

var index$1 = {
  AboutMeBio: 'AboutMeBio',
  AlertBar: 'AlertBar',
  ComingSoon: 'ComingSoon',
  ContestGiveaway: 'ContestGiveaway',
  DiscountCoupon: 'DiscountCoupon',
  ENewsletter: 'ENewsletter',
  Event: 'Event',
  FreeConsultation: 'FreeConsultation',
  FreeResource: 'FreeResource',
  GenerateLeads: 'GenerateLeads',
  LandingPage: 'LandingPage',
  MakeSales: 'MakeSales',
  PopUp: 'PopUp',
  SomethingElse: 'SomethingElse',
  ThankYou: 'ThankYou',
  Webinar: 'Webinar',
  WebinarEvent: 'WebinarEvent',
  Website: 'Website'
};
const propsEnum = ['AboutMeBio', 'AlertBar', 'ComingSoon', 'ContestGiveaway', 'DiscountCoupon', 'ENewsletter', 'Event', 'FreeConsultation', 'FreeResource', 'GenerateLeads', 'LandingPage', 'MakeSales', 'PopUp', 'SomethingElse', 'ThankYou', 'Webinar', 'WebinarEvent', 'Website'];

var IllustrationComponents = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index$1,
  propsEnum: propsEnum,
  AboutMeBio: AboutMeBio,
  AlertBar: AlertBar,
  ComingSoon: ComingSoon,
  ContestGiveaway: ContestGiveaway,
  DiscountCoupon: DiscountCoupon,
  ENewsletter: ENewsletter,
  Event: Event,
  FreeConsultation: FreeConsultation,
  FreeResource: FreeResource,
  GenerateLeads: GenerateLeads,
  LandingPage: LandingPage,
  MakeSales: MakeSales,
  PopUp: PopUp,
  SomethingElse: SomethingElse,
  ThankYou: ThankYou,
  Webinar: Webinar,
  WebinarEvent: WebinarEvent,
  Website: Website
});

function Illustration(_ref) {
  let {
    illustrationType
  } = _ref,
      props = objectWithoutPropertiesLoose(_ref, ["illustrationType"]);

  const IllustrationComponent = IllustrationComponents[illustrationType];
  return /*#__PURE__*/React__default.createElement(IllustrationComponent, props);
}
process.env.NODE_ENV !== "production" ? Illustration.propTypes = {
  // auto generated by svg-to-jsx need to copy it over
  illustrationType: propTypes.oneOf(['AboutMeBio', 'AlertBar', 'ComingSoon', 'ContestGiveaway', 'DiscountCoupon', 'ENewsletter', 'Event', 'FreeConsultation', 'FreeResource', 'GenerateLeads', 'LandingPage', 'MakeSales', 'PopUp', 'SomethingElse', 'ThankYou', 'Webinar', 'WebinarEvent', 'Website']).isRequired
} : void 0;

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Squiggle: Squiggle
});

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(hex, px) {
  const rgb = hexToRgb(hex).join(',');
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(${rgb},${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(${rgb},${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(${rgb},${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var sharedShadows = (hex => ['none', createShadow(hex, [0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0]), createShadow(hex, [0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0]), createShadow(hex, [0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0]), createShadow(hex, [0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0]), createShadow(hex, [0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0]), createShadow(hex, [0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0]), createShadow(hex, [0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1]), createShadow(hex, [0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2]), createShadow(hex, [0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2]), createShadow(hex, [0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3]), createShadow(hex, [0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3]), createShadow(hex, [0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4]), createShadow(hex, [0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4]), createShadow(hex, [0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4]), createShadow(hex, [0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5]), createShadow(hex, [0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5]), createShadow(hex, [0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5]), createShadow(hex, [0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6]), createShadow(hex, [0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6]), createShadow(hex, [0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7]), createShadow(hex, [0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7]), createShadow(hex, [0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7]), createShadow(hex, [0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8]), createShadow(hex, [0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8])]);

const inputPlaceholderStyles = ({
  palette
}) => ({
  opacity: 1,
  color: palette.greyTransparent[50],
  fontSize: 'inherit' // TODO: Remove this override for Lego.

});

const inputDisabledPlaceholderStyles = ({
  palette
}) => ({
  opacity: 1,
  color: palette.greyTransparent[30],
  fontSize: 'inherit' // TODO: Remove this override for Lego.

});

const checkboxAndRadioStyles = ({
  palette
}) => ({
  root: {
    margin: '2px 3px',
    padding: 6,
    color: palette.greyTransparent[50]
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: palette.greyTransparent[5]
    },
    '&:active': {
      backgroundColor: palette.action.active
    },
    '&$checked': {
      '&:hover': {
        backgroundColor: palette.greyTransparent[5]
      },
      '&:active': {
        backgroundColor: palette.action.active
      }
    },
    '&$disabled': {
      color: palette.greyTransparent[20]
    }
  }
});

var sharedOverrides = (theme => {
  const {
    breakpoints,
    palette,
    shadows,
    shape,
    spacing,
    typography,
    transitions
  } = theme;
  return {
    MuiLink: {
      root: {
        outline: 0,
        transition: transitions.create('color', {
          duration: transitions.duration.shortest
        }),
        '&:hover, &:focus, &$focusVisible': {
          color: palette.primary.dark
        },
        '&:active': {
          color: secondaryColors.navy
        }
      },
      button: {
        '&:focus, &$focusVisible': {
          outline: 0
        }
      },
      // TODO: Can remove once we get rid of LEGO.
      underlineAlways: {
        '&:hover, &:focus': {
          textDecoration: 'underline'
        }
      }
    },
    MuiButton: {
      root: {
        minWidth: null,
        transition: transitions.create(['background-color', 'border'], {
          duration: transitions.duration.shortest
        })
      },
      textPrimary: {
        '&:hover, &$focusVisible': {
          color: palette.primary.dark,
          backgroundColor: palette.greyTransparent[4]
        },
        '&$disabled $label': {
          color: palette.primary.light
        },
        '&:active': {
          color: palette.primary.dark,
          backgroundColor: palette.greyTransparent[8]
        }
      },
      containedPrimary: {
        '&$focusVisible': {
          backgroundColor: palette.primary.dark
        },
        '&:active': {
          backgroundColor: secondaryColors.navy
        },
        '&$disabled': {
          backgroundColor: palette.primary.light
        },
        '&$disabled $label': {
          color: palette.grey[0]
        }
      },
      outlined: {
        '& $label': {
          transition: transitions.create(['color'], {
            duration: transitions.duration.shortest
          })
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: '6px',
        color: palette.greyTransparent[60],
        // NOTE: $focusVisible was not working for this component.
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: palette.greyTransparent[4]
        },
        '&:active': {
          backgroundColor: palette.greyTransparent[8]
        },
        '&$disabled': {
          color: palette.greyTransparent[30]
        }
      }
    },
    MuiFab: {
      primary: {
        '&$focusVisible': {
          backgroundColor: palette.primary.dark
        },
        '&:active': {
          backgroundColor: secondaryColors.navy
        },
        '&$disabled': {
          backgroundColor: palette.primary.light
        },
        '&$disabled $label': {
          color: palette.grey[0]
        }
      },
      extended: {
        '& .MuiSvgIcon-root': {
          marginRight: spacing(1)
        }
      }
    },
    MuiFilledInput: {
      root: {
        borderRadius: shape.borderRadius,
        borderTopLeftRadius: null,
        borderTopRightRadius: null,
        overflow: 'hidden',
        backgroundColor: palette.greyTransparent[4],
        '&:hover:not($disabled), &$focused': {
          backgroundColor: palette.greyTransparent[8]
        },
        '&$disabled': {
          backgroundColor: palette.greyTransparent[4],
          color: palette.greyTransparent[30]
        }
      },
      input: {
        padding: '12px 16px',
        '&::-webkit-input-placeholder': _extends_1({}, inputPlaceholderStyles(theme), {
          lineHeight: 'normal'
        })
        /* Chrome/Opera/Safari/Edge */
        ,
        '&::-moz-placeholder': inputPlaceholderStyles(theme),
        // Firefox 19+
        '&:-ms-input-placeholder': inputPlaceholderStyles(theme),
        // IE 10+
        '&$disabled::-webkit-input-placeholder': _extends_1({}, inputDisabledPlaceholderStyles(theme), {
          lineHeight: 'normal'
        })
        /* Chrome/Opera/Safari/Edge */
        ,
        '&$disabled::-moz-placeholder': inputDisabledPlaceholderStyles(theme),
        // Firefox 19+
        '&$disabled:-ms-input-placeholder': inputDisabledPlaceholderStyles(theme) // IE 10+

      },
      inputMultiline: {
        padding: '12px 16px',
        '&::-webkit-input-placeholder': {
          lineHeight: 'inherit'
        }
        /* Chrome/Opera/Safari/Edge */
        ,
        '&$disabled::-webkit-input-placeholder': {
          lineHeight: 'inherit'
        }
        /* Chrome/Opera/Safari/Edge */

      },
      inputMarginDense: {
        paddingTop: 10,
        paddingLeft: 12,
        paddingBottom: 10,
        paddingRight: 12
      },
      multiline: {
        padding: 0
      },
      underline: {
        '&:before, &:hover:before': {
          borderBottom: `1px solid ${palette.greyTransparent[30]}`
        },
        '&$disabled:before, &$disabled:hover:before': {
          borderBottom: 'none',
          borderBottomStyle: 'none',
          border: 'none'
        },
        '&$disabled:after': {
          border: 'none'
        }
      }
    },
    MuiFormControlLabel: {
      label: {
        color: palette.text.primary,
        '&$disabled': {
          color: palette.greyTransparent[30]
        }
      }
    },
    MuiFormLabel: {
      root: _extends_1({}, typography.label, {
        color: palette.text.primary,
        lineHeight: typography.pxToRem(24),
        marginBottom: 6,
        '&$focused': {
          color: palette.text.primary
        },
        '&$disabled': {
          color: palette.greyTransparent[30]
        }
      })
    },
    MuiInputBase: {
      root: {
        fontSize: typography.pxToRem(15),
        minHeight: typography.pxToRem(48)
      },
      marginDense: {
        fontSize: typography.pxToRem(15),
        minHeight: typography.pxToRem(36)
      },
      input: {
        'label[data-shrink=false] + $formControl &': null,
        boxSizing: 'content-box !important',
        // HACK for Lego. It uses `input[type="text"]`, which is more specific.
        height: 24,
        lineHeight: typography.pxToRem(16)
      },
      inputMultiline: {
        lineHeight: typography.pxToRem(24)
      }
    },
    MuiInput: {
      formControl: {
        'label + &': {
          marginTop: null
        }
      }
    },
    MuiInputLabel: {
      root: {
        display: null,
        transformOrigin: null
      },
      formControl: {
        top: null,
        left: null,
        position: null,
        transform: null
      },
      filled: {
        zIndex: null,
        transform: null,
        pointerEvents: null,
        '&.MuiInputLabel-marginDense': {
          transform: 'unset'
        }
      },
      marginDense: {
        marginBottom: 4
      }
    },
    MuiInputAdornment: {
      filled: {
        color: palette.greyTransparent[50],
        '&$positionStart:not($hiddenLabel)': {
          marginTop: null
        },
        '&$positionStart p, &$positionEnd p, &$positionStart button, &$positionEnd button': {
          color: palette.greyTransparent[50]
        },
        '& .MuiCircularProgress-root': {
          width: '24px !important',
          height: '24px !important'
        }
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: typography.pxToRem(13),
        color: palette.grey[70],
        marginTop: 10,
        lineHeight: 1,
        '&$disabled': {
          color: palette.greyTransparent[30]
        }
      },
      contained: {
        marginLeft: null,
        marginRight: null
      }
    },
    MuiCheckbox: _extends_1({}, checkboxAndRadioStyles(theme)),
    MuiRadio: _extends_1({}, checkboxAndRadioStyles(theme)),
    MuiBackdrop: {
      root: {
        backgroundColor: palette.greyTransparent[10]
      }
    },
    MuiDialog: {
      paper: {
        boxShadow: `0 10px 20px -5px ${palette.greyTransparent[50]}`
      }
    },
    MuiDialogContentText: {
      root: {
        color: palette.greyTransparent[100]
      }
    },
    MuiTabs: {
      root: {
        color: palette.greyTransparent[100],
        backgroundColor: palette.common.white,
        minHeight: 56,
        position: 'relative'
      },
      indicator: {
        height: 3
      },
      scroller: {
        zIndex: 1
      },
      scrollButtons: {
        height: 56,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'inherit',
        display: 'none',
        zIndex: 2,
        // Undo above styles for right scroll button
        '& ~ $scrollButtons': {
          left: 'auto',
          right: 0
        },
        // This attribute is added when the scroll button should be made visible
        '&[aria-disabled="false"]': {
          display: 'inline-flex'
        }
      }
    },
    MuiTab: {
      root: {
        minWidth: null,
        maxWidth: null,
        minHeight: 56,
        padding: '0 24px',
        transition: transitions.create(['background-color', 'color'], {
          duration: transitions.duration.shortest
        }),
        [breakpoints.up('sm')]: null
      },
      textColorPrimary: {
        color: palette.greyTransparent[50],
        '&:hover:not($selected), &:focus:not($selected)': {
          backgroundColor: palette.action.hover,
          transition: transitions.create(['background-color', 'color'], {
            duration: 20
          })
        },
        '&:active:not($selected)': {
          backgroundColor: palette.action.active
        },
        '&$selected': {
          color: palette.greyTransparent[100],
          pointerEvents: 'none'
        }
      }
    },
    MuiTabScrollButton: {
      root: {
        opacity: null
      }
    },
    MuiTypography: {
      // TODO: Remove these once we get rid of Lego
      colorInherit: {
        '&:visited': {
          color: 'inherit'
        }
      },
      colorPrimary: {
        '&:visited': {
          color: palette.primary.main
        }
      },
      colorSecondary: {
        '&:visited': {
          color: palette.secondary.main
        }
      },
      colorError: {
        '&:visited': {
          color: palette.error.main
        }
      },
      colorTextPrimary: {
        '&:visited': {
          color: palette.text.primary
        }
      },
      colorTextSecondary: {
        '&:visited': {
          color: palette.text.secondary
        }
      }
    },
    MuiSnackbarContent: {
      root: _extends_1({}, typography.body1)
    },
    MuiCircularProgress: {
      colorSecondary: {
        color: palette.common.white
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#dfd8ff'
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: null
        }
      },
      selectMenu: {
        minHeight: null
      },
      icon: {
        color: palette.greyTransparent[70],
        '$disabled &': {
          color: palette.greyTransparent[30]
        }
      }
    },
    MuiMenuItem: {
      root: {
        minHeight: 40,
        lineHeight: typography.pxToRem(28),
        [breakpoints.up('sm')]: null,
        transition: transitions.create('background-color', {
          duration: transitions.duration.shortest
        }),
        // NOTE: $focusVisible was not working for this component.
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: palette.action.hover,
          outline: 0,
          transition: transitions.create('background-color', {
            duration: 20
          })
        },
        '&:active': {
          backgroundColor: palette.action.active
        }
      }
    },
    MuiListSubheader: {
      root: _extends_1({}, typography.overline, {
        color: palette.greyTransparent[50],
        lineHeight: typography.pxToRem(28),
        paddingTop: 6,
        paddingBottom: 6
      })
    },
    MuiListItemIcon: {
      root: {
        color: palette.greyTransparent[50],
        '.Mui-selected &': {
          color: palette.greyTransparent[70]
        },
        '.Mui-disabled &': {
          color: palette.greyTransparent[30]
        }
      }
    },
    MuiAlert: {
      // NOTE: The current designs for this component use legacy Leads colors.
      icon: {
        marginRight: spacing(1)
      },
      standardError: {
        backgroundColor: '#FBEAE5',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80]
        }
      },
      standardWarning: {
        backgroundColor: '#FCF1CD',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80]
        }
      },
      standardInfo: {
        backgroundColor: '#DEECFD',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80]
        }
      },
      standardSuccess: {
        backgroundColor: '#E0F5F5',
        color: palette.grey[100],
        '& $icon': {
          color: palette.grey[80]
        }
      },
      filledError: {
        backgroundColor: '#FBEAE5',
        color: '#330101',
        '& $icon': {
          color: '#BF0711'
        }
      },
      filledWarning: {
        backgroundColor: '#FCF1CD',
        color: '#573B00',
        '& $icon': {
          color: '#9C6F19'
        }
      },
      filledInfo: {
        backgroundColor: '#DEECFD',
        color: '#00044C',
        '& $icon': {
          color: '#00419F'
        }
      },
      filledSuccess: {
        backgroundColor: '#E0F5F5',
        color: '#003135',
        '& $icon': {
          color: '#00848E'
        }
      },
      message: {
        fontSize: typography.pxToRem(15),
        padding: '6px 0'
      }
    },
    MuiBreadcrumbs: {
      root: _extends_1({}, typography.button),
      li: {
        '&:before': {
          content: 'none' // TODO: Remove this override for Lego.

        },
        '& > span': {
          color: palette.greyTransparent[30],
          '&.selected': {
            color: palette.text.primary
          }
        },
        '& a, & button': {
          color: 'inherit',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          textTransform: 'inherit',
          textDecoration: 'none',
          '&:hover, &:focus': {
            transition: transitions.create('color', {
              duration: 20
            }),
            color: palette.primary.main,
            outline: 0
          },
          '&:active': {
            color: secondaryColors.navy
          }
        },
        '& button': {
          verticalAlign: 'baseline'
        }
      },
      separator: {
        '&:before': {
          content: 'none' // TODO: Remove this override for Lego.

        },
        color: palette.greyTransparent[40],
        marginLeft: 14,
        marginRight: 14
      }
    },
    MuiSwitch: {
      switchBase: {
        '&$disabled + $track': {
          opacity: 0.1
        },
        '&$checked + $track': {
          opacity: 0.4
        }
      },
      colorPrimary: {
        '&$disabled + $track': {
          backgroundColor: palette.grey[100]
        },
        '&$checked:hover, &$checked.Mui-focusVisible': {
          backgroundColor: `rgba(${hexToRgb(palette.primary.main)}, 0.1) !important`
        },
        '&$checked:active': {
          backgroundColor: `rgba(${hexToRgb(palette.primary.main)}, 0.2) !important`
        }
      },
      thumb: {
        boxShadow: shadows[2],
        backgroundColor: palette.common.white,
        '$checked &': {
          backgroundColor: palette.primary.main
        },
        '$disabled &': {
          backgroundColor: palette.grey[30]
        }
      },
      track: {
        backgroundColor: palette.grey[100],
        opacity: 0.5
      }
    },
    MuiChip: {
      root: {
        color: palette.common.white,
        backgroundColor: palette.greyTransparent[50],
        borderRadius: shape.borderRadius,
        height: 24,
        lineHeight: typography.pxToRem(24)
      },
      sizeSmall: {
        height: 19,
        lineHeight: typography.pxToRem(19),
        textTransform: 'none'
      },
      label: {
        paddingLeft: 10,
        paddingRight: 10
      },
      labelSmall: {
        paddingLeft: 7,
        paddingRight: 7
      },
      colorSecondary: {
        backgroundColor: palette.info.main,
        color: palette.text.primary
      },
      deleteIcon: {
        width: 20,
        height: 20,
        marginRight: 3,
        color: palette.whiteTransparent[85],
        '&:hover': {
          color: palette.common.white
        }
      },
      deleteIconSmall: {
        width: 15,
        height: 15
      },
      deleteIconColorPrimary: {
        color: palette.whiteTransparent[85]
      },
      deleteIconColorSecondary: {
        color: palette.greyTransparent[70],
        '&:hover': {
          color: palette.text.primary
        }
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${palette.grey[10]}`,
        paddingTop: 19,
        paddingLeft: spacing(3),
        paddingBottom: 19,
        paddingRight: spacing(3)
      },
      head: _extends_1({}, typography.label, {
        lineHeight: typography.pxToRem(21)
      }),
      body: {
        lineHeight: typography.pxToRem(20)
      }
    },
    MuiTableRow: {
      hover: {
        '&[class*="Mui-selected"]': {
          backgroundColor: palette.action.selected,
          '&:hover': {
            backgroundColor: palette.action.selected
          }
        }
      }
    },
    MuiTablePagination: {
      toolbar: {
        // Custom class override to adjust left alignment of pagination controls on dense tables.
        '.selectable-rows:not([class*="MuiTableCell-sizeSmall"]) &': {
          paddingLeft: 16
        }
      },
      spacer: {
        // Custom class override to allow left alignment of pagination controls within a table footer.
        '.align-left &': {
          display: 'none'
        }
      },
      actions: {
        color: palette.greyTransparent[60]
      }
    },
    MuiPaper: {
      root: {
        // A hack to fix Safari box-shadow issues when Paper is the child of a Popper.
        // TODO: Can remove when this issue is fixed: https://github.com/mui-org/material-ui/issues/20593
        willChange: 'transform'
      }
    }
  };
});

var sharedProps = {
  MuiAlert: {
    severity: 'error',
    iconMapping: {
      success: /*#__PURE__*/React__default.createElement(CheckCircleOutlineIcon, {
        fontSize: "inherit"
      })
    }
  },
  MuiButtonBase: {
    disableRipple: true
  },
  MuiButton: {
    variant: 'contained',
    color: 'primary',
    disableElevation: true
  },
  MuiCheckbox: {
    color: 'primary'
  },
  MuiCircularProgress: {
    size: 44,
    thickness: 3
  },
  MuiDialog: {
    PaperProps: {
      elevation: 0,
      square: true
    }
  },
  MuiFab: {
    color: 'primary'
  },
  MuiFormControl: {
    variant: 'filled'
  },
  MuiInputLabel: {
    disableAnimation: true,
    shrink: false
  },
  MuiLink: {
    underline: 'always'
  },
  MuiListSubheader: {
    disableSticky: true
  },
  MuiMenu: {
    TransitionComponent: Fade
  },
  MuiPopover: {
    elevation: 4
  },
  MuiRadio: {
    color: 'primary'
  },
  MuiSelect: {
    variant: 'filled'
  },
  MuiSnackbar: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    TransitionComponent: Slide
  },
  MuiSwitch: {
    color: 'primary'
  },
  MuiTabs: {
    textColor: 'primary',
    indicatorColor: 'primary'
  },
  MuiTextField: {
    variant: 'filled',
    color: 'primary',
    hiddenLabel: false
  }
};

var sharedShape = {
  borderRadius: 2
};

var sharedZIndex = {
  modal: 2000,
  snackbar: 2100,
  tooltip: 2200
};

var typography$1 = (theme => {
  const {
    typography
  } = theme;
  const {
    fontWeightRegular,
    fontWeightBold,
    pxToRem
  } = typography;
  const fontWeightSemiBold = 600;
  return {
    fontFamily: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontWeightSemiBold,
    h1: {
      fontSize: pxToRem(40),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(56),
      letterSpacing: pxToRem(-0.7)
    },
    h2: {
      fontSize: pxToRem(32),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(44),
      letterSpacing: pxToRem(-0.5)
    },
    h3: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(32),
      letterSpacing: pxToRem(-0.3)
    },
    h4: {
      fontSize: pxToRem(18),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(30),
      letterSpacing: pxToRem(-0.1)
    },
    h5: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(24)
    },
    h6: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(24)
    },
    subtitle1: {
      fontSize: pxToRem(17),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(28)
    },
    subtitle2: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    body1: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightSemiBold,
      lineHeight: pxToRem(20),
      letterSpacing: pxToRem(1)
    },
    label: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightSemiBold,
      lineHeight: pxToRem(20)
    },
    caption: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(20)
    },
    overline: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightSemiBold,
      lineHeight: pxToRem(20),
      letterSpacing: pxToRem(1)
    }
  };
});

var sharedPalette = {
  primary: {
    main: primaryColors.indigo,
    light: primaryColors.indigoLight,
    lightAlt: primaryColors.indigoLightAlt,
    dark: primaryColors.indigoDark,
    contrastText: primaryColors.white
  },
  legacy: _extends_1({}, legacyColors),
  info: {
    main: primaryColors.teal,
    light: primaryColors.tealLight,
    contrastText: primaryColors.white
  },
  success: {
    main: primaryColors.forest,
    light: primaryColors.forestLight,
    contrastText: primaryColors.white
  },
  warning: {
    main: primaryColors.terraCotta,
    light: primaryColors.terraCottaLight,
    contrastText: primaryColors.white
  },
  danger: {
    main: primaryColors.orange,
    light: primaryColors.orangeLight,
    contrastText: primaryColors.white
  },
  whiteTransparent: _extends_1({}, whiteTransparentColors)
};

var palette$1 = _extends_1({}, sharedPalette, {
  action: {
    active: coolGreyscaleTransparentColors[8],
    hover: coolGreyscaleTransparentColors[4],
    hoverOpacity: 0.04,
    selected: coolGreyscaleTransparentColors[8],
    selectedOpacity: 0.08,
    disabled: coolGreyscaleTransparentColors[30],
    disabledBackground: coolGreyscaleTransparentColors[10],
    disabledOpacity: 0.3,
    focus: coolGreyscaleTransparentColors[10],
    focusOpacity: 0.1,
    activatedOpacity: 0.1
  },
  divider: coolGreyscaleTransparentColors[10],
  secondary: {
    main: coolGreyscaleColors[5],
    light: coolGreyscaleColors[5],
    dark: coolGreyscaleColors[10],
    contrastText: primaryColors.indigo
  },
  text: {
    primary: coolGreyscaleColors[100],
    secondary: coolGreyscaleTransparentColors[60],
    disabled: coolGreyscaleTransparentColors[30],
    hint: coolGreyscaleTransparentColors[30]
  },
  grey: _extends_1({}, coolGreyscaleColors),
  greyTransparent: _extends_1({}, coolGreyscaleTransparentColors)
});

const MEDIUM_BUTTON_VERTICAL_PADDING = 8;
const MEDIUM_BUTTON_HORIZONTAL_PADDING = 16;

const mediumButtonStyles = () => ({
  padding: `${MEDIUM_BUTTON_VERTICAL_PADDING}px ${MEDIUM_BUTTON_HORIZONTAL_PADDING}px`
});

const LARGE_BUTTON_VERTICAL_PADDING = 14;
const LARGE_BUTTON_HORIZONTAL_PADDING = 24;

const largeButtonStyles = typography => ({
  fontSize: typography.pxToRem(15),
  padding: `${LARGE_BUTTON_VERTICAL_PADDING}px ${LARGE_BUTTON_HORIZONTAL_PADDING}px`
});

const OUTLINE_BUTTON_BORDER_WIDTH = 1;
var overrides = (({
  theme,
  variant
}) => {
  const {
    palette,
    shadows,
    typography
  } = theme;
  return _extends_1({
    MuiButton: {
      root: _extends_1({}, mediumButtonStyles()),
      text: _extends_1({}, mediumButtonStyles()),
      outlinedPrimary: {
        padding: `
          ${MEDIUM_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
          ${MEDIUM_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
        `,
        border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.main}`,
        '&:hover, &$focusVisible': {
          backgroundColor: palette.primary.dark,
          border: `1px solid ${palette.primary.dark}`
        },
        '&:hover $label, &$focusVisible $label': {
          color: palette.common.white
        },
        '&:active': {
          backgroundColor: secondaryColors.navy,
          border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.dark}`,
          color: palette.common.white
        },
        '&$disabled': {
          border: `${OUTLINE_BUTTON_BORDER_WIDTH}px solid ${palette.primary.light}`,
          color: palette.primary.light
        }
      },

      /* Styles applied to the root element if `size="large"` and `variant="contained". */
      containedSizeLarge: _extends_1({}, largeButtonStyles(typography)),

      /* Styles applied to the root element if `size="large"` and `variant="text". */
      textSizeLarge: _extends_1({}, largeButtonStyles(typography)),

      /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: _extends_1({}, largeButtonStyles(typography), {
        padding: `
          ${LARGE_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
          ${LARGE_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH}px
        `
      })
    },
    MuiChip: {
      root: {
        fontSize: typography.pxToRem(14),
        fontWeight: 600
      },
      sizeSmall: {
        fontSize: typography.pxToRem(13)
      }
    }
  }, variant === 'dark' && {
    MuiTooltip: {
      tooltip: {
        backgroundColor: palette.common.white,
        color: palette.text.primary,
        boxShadow: shadows[1]
      }
    }
  });
});

const defaultTheme = styles.createMuiTheme();

const productTheme = (options = {}) => {
  const {
    variant = 'light'
  } = options;
  const theme = styles.createMuiTheme({
    palette: palette$1,
    props: sharedProps,
    shape: sharedShape,
    typography: typography$1(defaultTheme),
    zIndex: sharedZIndex
  });
  theme.shadows = sharedShadows(theme.palette.grey[100]);
  theme.overrides = deepmerge(sharedOverrides(theme), overrides({
    theme,
    variant
  }));
  return theme;
};

// Needed because web version of Apercu Font has a baseline that is slightly offset.
// https://stuffandnonsense.co.uk/blog/improve_your_web_typography_with_baseline_shift

const baselineShift = {
  position: 'relative',
  top: '0.09em'
};
const SMALL_BUTTON_VERTICAL_PADDING = 6;
const SMALL_BUTTON_HORIZONTAL_PADDING = 24;

const smallButtonStyles = typography => ({
  fontSize: typography.pxToRem(14),
  padding: `${SMALL_BUTTON_VERTICAL_PADDING}px ${SMALL_BUTTON_HORIZONTAL_PADDING}px`,
  borderRadius: 24
});

const MEDIUM_BUTTON_VERTICAL_PADDING$1 = 12;
const MEDIUM_BUTTON_HORIZONTAL_PADDING$1 = 36;

const mediumButtonStyles$1 = typography => ({
  padding: `${MEDIUM_BUTTON_VERTICAL_PADDING$1}px ${MEDIUM_BUTTON_HORIZONTAL_PADDING$1}px`,
  borderRadius: 24
});

const LARGE_BUTTON_VERTICAL_PADDING$1 = 16;
const LARGE_BUTTON_HORIZONTAL_PADDING$1 = 36;

const largeButtonStyles$1 = typography => ({
  fontSize: typography.pxToRem(18),
  padding: `${LARGE_BUTTON_VERTICAL_PADDING$1}px ${LARGE_BUTTON_HORIZONTAL_PADDING$1}px`,
  borderRadius: 28
});

const OUTLINE_BUTTON_BORDER_WIDTH$1 = 3;
var overrides$1 = (({
  palette,
  typography
}) => ({
  MuiButton: {
    root: _extends_1({}, mediumButtonStyles$1()),
    text: _extends_1({}, mediumButtonStyles$1()),
    outlinedPrimary: {
      padding: `
        ${MEDIUM_BUTTON_VERTICAL_PADDING$1 - OUTLINE_BUTTON_BORDER_WIDTH$1}px
        ${MEDIUM_BUTTON_HORIZONTAL_PADDING$1 - OUTLINE_BUTTON_BORDER_WIDTH$1}px
      `,
      border: `${OUTLINE_BUTTON_BORDER_WIDTH$1}px solid ${palette.primary.lightAlt}`,
      '&:hover, &$focusVisible': {
        backgroundColor: palette.primary.dark,
        border: `3px solid ${palette.primary.dark}`
      },
      '&:hover $label, &$focusVisible $label': {
        color: palette.common.white
      },
      '&:active': {
        backgroundColor: secondaryColors.navy,
        border: `${OUTLINE_BUTTON_BORDER_WIDTH$1}px solid ${secondaryColors.navy}`,
        color: palette.common.white
      },
      '&$disabled': {
        border: `${OUTLINE_BUTTON_BORDER_WIDTH$1}px solid ${palette.primary.lightAlt}`,
        color: palette.primary.main
      },
      '&$disabled $label': {
        opacity: 0.5
      }
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: _extends_1({}, smallButtonStyles(typography)),
    textSizeSmall: _extends_1({}, smallButtonStyles(typography)),

    /* Styles applied to the root element if `size="large"` and `variant="contained". */
    containedSizeLarge: _extends_1({}, largeButtonStyles$1(typography)),
    textSizeLarge: _extends_1({}, largeButtonStyles$1(typography)),

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: _extends_1({}, smallButtonStyles(typography), {
      padding: `
        ${SMALL_BUTTON_VERTICAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH$1}px
        ${SMALL_BUTTON_HORIZONTAL_PADDING - OUTLINE_BUTTON_BORDER_WIDTH$1}px
      `
    }),

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: _extends_1({}, largeButtonStyles$1(typography), {
      padding: `
      ${LARGE_BUTTON_VERTICAL_PADDING$1 - OUTLINE_BUTTON_BORDER_WIDTH$1}px
      ${LARGE_BUTTON_HORIZONTAL_PADDING$1 - OUTLINE_BUTTON_BORDER_WIDTH$1}px
    `
    })
  },
  MuiFormLabel: {
    root: _extends_1({}, baselineShift)
  },
  MuiInputBase: {
    input: _extends_1({}, baselineShift)
  },
  MuiAlert: {
    message: {
      padding: '9px 0 6px'
    }
  },
  MuiChip: {
    root: _extends_1({}, typography.overline)
  }
}));

var palette$2 = _extends_1({}, sharedPalette, {
  action: {
    active: warmGreyscaleTransparentColors[8],
    hover: warmGreyscaleTransparentColors[4],
    hoverOpacity: 0.04,
    selected: warmGreyscaleTransparentColors[8],
    selectedOpacity: 0.08,
    disabled: warmGreyscaleTransparentColors[30],
    disabledBackground: warmGreyscaleTransparentColors[10],
    disabledOpacity: 0.3,
    focus: warmGreyscaleTransparentColors[10],
    focusOpacity: 0.1,
    activatedOpacity: 0.1
  },
  divider: warmGreyscaleTransparentColors[10],
  secondary: {
    main: warmGreyscaleColors[4],
    light: warmGreyscaleColors[4],
    dark: warmGreyscaleColors[10],
    contrastText: warmGreyscaleColors[70]
  },
  text: {
    primary: warmGreyscaleColors[100],
    secondary: warmGreyscaleTransparentColors[60],
    disabled: warmGreyscaleTransparentColors[30],
    hint: warmGreyscaleTransparentColors[30]
  },
  grey: _extends_1({}, warmGreyscaleColors),
  greyTransparent: _extends_1({}, warmGreyscaleTransparentColors)
});

var typography$2 = (theme => {
  const {
    typography
  } = theme;
  const {
    fontWeightBold,
    fontWeightMedium,
    fontWeightRegular,
    pxToRem
  } = typography;
  const valueSerif = ['Value Serif', 'Georgia', 'serif'].join(',');
  const spaceMono = ['Space Mono', 'monospace'].join(',');
  return {
    fontFamily: ['Apercu Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: pxToRem(30),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(46)
    },
    h2: {
      fontSize: pxToRem(26),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(40)
    },
    h3: {
      fontSize: pxToRem(22),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(36)
    },
    h4: {
      fontSize: pxToRem(18),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(30)
    },
    h5: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(24)
    },
    h6: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(20)
    },
    subtitle1: {
      fontSize: pxToRem(22),
      lineHeight: pxToRem(36),
      fontWeight: fontWeightRegular
    },
    subtitle2: {
      fontSize: pxToRem(18),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(30)
    },
    body1: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(20)
    },
    button: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightMedium,
      lineHeight: pxToRem(24),
      textTransform: 'none'
    },
    label: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18)
    },
    overline: {
      fontFamily: spaceMono,
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18),
      letterSpacing: pxToRem(2)
    },
    overline2: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightMedium,
      letterSpacing: pxToRem(2),
      lineHeight: pxToRem(18)
    },
    // Value-Serif Defs
    // VSTypography component uses these
    valueSerif: {
      h1: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(72),
        lineHeight: pxToRem(80),
        letterSpacing: pxToRem(-1)
      },
      h2: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(56),
        lineHeight: pxToRem(60),
        letterSpacing: pxToRem(-0.75)
      },
      h3: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(40),
        lineHeight: pxToRem(48),
        letterSpacing: pxToRem(-0.5)
      },
      h4: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(30),
        lineHeight: pxToRem(36),
        letterSpacing: pxToRem(-0.1)
      },
      h5: {
        fontFamily: valueSerif,
        fontWeight: fontWeightBold,
        fontSize: pxToRem(24),
        lineHeight: pxToRem(36),
        letterSpacing: pxToRem(-0.1)
      } // NOTE: H6 currently undefined

    }
  };
});

const defaultTheme$1 = styles.createMuiTheme();
const marketingTheme = styles.createMuiTheme({
  palette: palette$2,
  props: sharedProps,
  shape: sharedShape,
  typography: typography$2(defaultTheme$1),
  shadows: sharedShadows(palette$2.grey[100]),
  zIndex: sharedZIndex
});
marketingTheme.overrides = deepmerge(sharedOverrides(marketingTheme), overrides$1(marketingTheme));

const checkboxAndRadioStyles$1 = spacing => ({
  root: {
    margin: spacing(0, 0.5),
    padding: spacing(0, 1)
  },
  colorPrimary: {
    color: whiteTransparentColors[60],
    '&$disabled': {
      color: whiteTransparentColors[30]
    }
  }
});

const sharedButtonStyles = palette => ({
  '&:active': {
    backgroundColor: palette.primary.light,
    borderColor: palette.primary.light,
    color: whiteTransparentColors[100]
  },
  '&:hover': {
    backgroundColor: legacyColors.blueLightAccent,
    borderColor: legacyColors.blueLightAccent,
    color: whiteTransparentColors[100]
  }
});

var overrides$2 = (({
  palette,
  shape,
  spacing,
  transitions,
  typography,
  shadows
}) => ({
  MuiTooltip: {
    tooltip: {
      color: palette.text.primary,
      backgroundColor: palette.common.white,
      fontSize: typography.pxToRem(13),
      borderRadius: 3,
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 6px 0px, rgba(0, 0, 0, 0.25) 0px 8px 10px 0px',
      padding: '11px 20px'
    },
    arrow: {
      color: palette.common.white
    }
  },
  MuiInputBase: {
    root: {
      minHeight: typography.pxToRem(36)
    }
  },
  MuiInputAdornment: {
    filled: {
      color: whiteTransparentColors[60],
      '&$positionStart, &$positionEnd': {
        color: whiteTransparentColors[60],
        '& button, & p': {
          color: whiteTransparentColors[60]
        }
      }
    }
  },
  MuiFilledInput: {
    root: {
      backgroundColor: whiteTransparentColors[18],
      border: '1px solid transparent',
      color: palette.common.white,
      '&$focused': {
        backgroundColor: `${whiteTransparentColors[18]}!important`,
        border: `1px solid ${palette.primary.light}`
      },
      '&:hover:not($disabled)': {
        backgroundColor: whiteTransparentColors[25]
      },
      '&$disabled': {
        backgroundColor: whiteTransparentColors[18],
        color: whiteTransparentColors[30]
      },
      '&$error': {
        borderColor: palette.danger.main
      }
    },
    colorSecondary: {
      backgroundColor: whiteTransparentColors[100],
      borderColor: palette.secondary.dark,
      color: palette.text.primary,
      '&$focused': {
        borderColor: palette.primary.main,
        backgroundColor: `${whiteTransparentColors[100]}!important`
      },
      '&:hover:not(&$disabled)': {
        borderColor: palette.primary.main,
        backgroundColor: whiteTransparentColors[100]
      },
      '&$disabled': {
        color: palette.greyTransparent[40]
      },
      '& $input': {
        '&::placeholder, &::-webkit-input-placeholder': {
          color: legacyColors.greyDark
        },
        '&$disabled': {
          '&::placeholder, &::-webkit-input-placeholder': {
            color: palette.greyTransparent[40]
          }
        }
      },
      '& + [class*="MuiFormHelperText-root"]': {
        color: legacyColors.greyDark
      },
      '&$disabled + [class*="MuiFormHelperText-root"]': {
        color: palette.greyTransparent[40]
      }
    },
    input: {
      padding: '5px 12px',
      '&::placeholder, &::-webkit-input-placeholder': {
        color: whiteTransparentColors[60]
      },
      '&$disabled': {
        '&::placeholder, &::-webkit-input-placeholder': {
          color: whiteTransparentColors[30]
        }
      }
    },
    inputMultiline: {
      padding: '5px 12px'
    }
  },
  MuiFormControlLabel: {
    root: {
      marginBottom: spacing(2),
      '& [class*="Mui-checked"] + [class*="MuiFormControlLabel-label"]': {
        color: whiteTransparentColors[100]
      },
      '& [class*="Mui-checked"][class*="Mui-disabled"] + [class*="MuiFormControlLabel-label"]': {
        color: whiteTransparentColors[30]
      }
    },
    label: {
      fontSize: typography.pxToRem(15),
      lineHeight: typography.pxToRem(24),
      color: whiteTransparentColors[80],
      '&$disabled': {
        color: whiteTransparentColors[30]
      }
    }
  },
  MuiFormHelperText: {
    root: {
      color: whiteTransparentColors[60],
      '&$disabled': {
        color: whiteTransparentColors[30]
      },
      '&$error, &$focused$error': {
        color: palette.danger.main
      }
    }
  },
  MuiFormLabel: {
    root: {
      color: whiteTransparentColors[80],
      '&$focused': {
        color: whiteTransparentColors[80]
      },
      '&$disabled': {
        color: whiteTransparentColors[30]
      },
      '&$error, &$focused$error': {
        color: palette.danger.main
      }
    },
    colorSecondary: {
      color: palette.text.primary,
      '&$focused': {
        color: palette.text.primary
      },
      '&$disabled': {
        color: palette.greyTransparent[40]
      }
    }
  },
  MuiButton: {
    containedPrimary: _extends_1({}, sharedButtonStyles(palette), {
      '&$disabled': {
        backgroundColor: palette.primary.main,
        color: whiteTransparentColors[100],
        opacity: 0.4
      }
    }),
    outlinedPrimary: _extends_1({}, sharedButtonStyles(palette), {
      '&$disabled': {
        borderColor: palette.primary.main,
        color: palette.primary.main,
        opacity: 0.6
      }
    }),
    textPrimary: {
      '&:active': {
        backgroundColor: whiteTransparentColors[18],
        color: `${palette.primary.light}!important`
      },
      '&:hover': {
        backgroundColor: `${whiteTransparentColors[18]}!important`,
        color: `${legacyColors.blueLightAccent}!important`
      },
      '&$disabled': {
        opacity: 0.6
      }
    }
  },
  MuiIconButton: {
    root: {
      color: whiteTransparentColors[60],
      '&:hover, &:active': {
        backgroundColor: whiteTransparentColors[18]
      },
      '&$disabled': {
        color: whiteTransparentColors[30]
      }
    }
  },
  MuiListItem: {
    gutters: {
      paddingLeft: spacing(2),
      // Keeps lists in alignment with inputs.
      paddingRight: spacing(2) // Keeps lists in alignment with inputs.

    }
  },
  MuiCheckbox: _extends_1({}, checkboxAndRadioStyles$1(spacing)),
  MuiRadio: _extends_1({}, checkboxAndRadioStyles$1(spacing)),
  MuiSelect: {
    iconFilled: {
      color: palette.secondary.dark,
      '&$disabled': {
        color: whiteTransparentColors[30]
      }
    }
  },
  MuiListSubheader: {
    root: {
      color: palette.common.white
    }
  },
  MuiTabs: {
    root: {
      backgroundColor: 'inherit',
      minHeight: 0
    }
  },
  MuiTab: {
    root: {
      padding: 0,
      '&:not($fullWidth)': {
        '&:not(:first-child)': {
          marginLeft: spacing(1)
        },
        '&:not(:last-child)': {
          marginRight: spacing(1)
        }
      }
    },
    textColorPrimary: {
      color: legacyColors.greyDark,
      '&$selected': {
        color: palette.common.white
      },
      '&:hover:not($selected), &:focus:not($selected), &:active:not($selected)': {
        backgroundColor: 'transparent',
        transition: 'none'
      }
    }
  },
  MuiMenu: {
    paper: {
      backgroundColor: legacyColors.blueGrey
    }
  },
  MuiMenuItem: {
    root: {
      color: palette.common.white,
      paddingTop: 1,
      paddingBottom: 0,
      '&[class*=selected][class*=focusVisible]': {
        backgroundColor: whiteTransparentColors[8]
      }
    }
  },
  MuiPopover: {
    root: {
      zIndex: '2001 !important' // Equal to nestedZIndex.floatingWidgetOptions.select.value

    }
  },
  MuiAutocomplete: {
    popper: {
      backgroundColor: whiteTransparentColors[18],
      borderRadius: shape.borderRadius,
      marginTop: spacing(1)
    },
    paper: {
      backgroundColor: legacyColors.blueGrey,
      margin: 0
    },
    option: {
      backgroundColor: 'transparent',
      color: palette.common.white,
      '&[aria-selected="true"]': {
        backgroundColor: whiteTransparentColors[8],
        '&[data-focus="true"]': {
          backgroundColor: whiteTransparentColors[8]
        }
      }
    },
    input: {
      '&:focus': {
        border: 'none'
      }
    },
    inputRoot: {
      '&$focused': {
        border: `1px solid ${palette.primary.light}`
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 0,
        paddingLeft: 0,
        '& $input': {
          padding: spacing(0, 2)
        }
      }
    },
    noOptions: {
      color: whiteTransparentColors[60]
    },
    clearIndicator: {
      color: 'currentColor'
    },
    popupIndicator: {
      color: palette.secondary.dark,
      padding: '2px 0',
      '&:hover, &:focus': {
        backgroundColor: 'transparent'
      }
    },
    listbox: {
      padding: `${spacing(1)}px 0`,
      '& > li:first-child > [class*="groupLabel"]': {
        paddingTop: spacing(1)
      }
    },
    groupLabel: {
      backgroundColor: 'transparent',
      borderBottom: `1px solid ${whiteTransparentColors[5]}`,
      color: whiteTransparentColors[80],
      fontSize: typography.pxToRem(10),
      fontWeight: typography.fontWeightBold,
      lineHeight: typography.pxToRem(16),
      marginBottom: spacing(1),
      paddingBottom: spacing(1),
      paddingTop: spacing(2)
    }
  },
  MuiToggleButtonGroup: {
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderLeftColor: legacyColors.blueMediumDark
      }
    }
  },
  MuiToggleButton: {
    root: _extends_1({}, typography.button, {
      backgroundColor: 'transparent',
      border: 'none',
      color: palette.secondary.dark,
      padding: spacing(1),
      marginRight: spacing(1),
      transition: transitions.create('background-color', {
        duration: transitions.duration.shortest
      }),
      '&:last-of-type': {
        marginRight: 0
      },
      '&:hover, &:focus': {
        backgroundColor: palette.action.hover
      },
      '&$disabled': {
        color: palette.action.disabled
      },
      '&$selected': {
        backgroundColor: whiteTransparentColors[18],
        color: palette.common.white,
        '&:focus': {
          backgroundColor: whiteTransparentColors[18]
        },
        '&:hover, &:hover:focus': {
          backgroundColor: whiteTransparentColors[25]
        }
      },
      '&[class*="MuiToggleButtonGroup-grouped"]': {
        border: `1px solid ${legacyColors.blueMediumDark}`,
        marginRight: 0,
        paddingLeft: 7,
        paddingRight: 7,
        '&[class*="selected"]': {
          borderBottom: `3px solid ${palette.primary.light}`,
          paddingTop: 7,
          paddingBottom: 5
        }
      }
    }),
    sizeLarge: {
      '&[class*="MuiToggleButtonGroup-grouped"]': {
        padding: '8px 16px'
      }
    }
  },
  MuiSlider: {
    root: {
      height: 4
    },
    thumbColorPrimary: {
      color: palette.common.white,
      width: 16,
      height: 16,
      transform: 'translateY(calc(-50% + 2px)) translateX(-50%)',
      marginTop: 0,
      marginLeft: 0,
      boxShadow: 'none',
      '&:hover, &.Mui-focusVisible': {
        boxShadow: 'none !important'
      }
    },
    active: {
      boxShadow: 'none !important'
    },
    track: {
      color: palette.primary.light,
      height: 4,
      borderRadius: 6
    },
    rail: {
      height: 4,
      borderRadius: 6,
      backgroundColor: whiteTransparentColors[60],
      opacity: 1
    }
  },
  MuiSwitch: {
    switchBase: {
      '&$checked + $track': {
        opacity: 1
      }
    },
    colorPrimary: {
      '&$disabled + $track': {
        backgroundColor: whiteTransparentColors[30],
        opacity: 1
      },
      '&$checked:hover, &$checked.Mui-focusVisible': {
        backgroundColor: `${styles.lighten(`rgba(${hexToRgb(legacyColors.blueLighter)}, 0.4))`, 0.4)} !important`
      },
      '&$checked:active': {
        backgroundColor: palette.primary.main
      }
    },
    thumb: {
      boxShadow: shadows[2],
      backgroundColor: palette.common.white,
      '$checked &': {
        backgroundColor: styles.lighten(palette.primary.main, 0.75)
      },
      '$disabled &': {
        backgroundColor: styles.lighten(legacyColors.blueGrey, 0.4)
      }
    },
    track: {
      backgroundColor: whiteTransparentColors[60],
      opacity: 1
    }
  }
}));

var palette$3 = _extends_1({}, sharedPalette, {
  action: {
    active: whiteTransparentColors[8],
    hover: whiteTransparentColors[4],
    hoverOpacity: 0.04,
    selected: whiteTransparentColors[8],
    selectedOpacity: 0.08,
    disabled: whiteTransparentColors[30],
    disabledBackground: whiteTransparentColors[10],
    disabledOpacity: 0.3,
    focus: whiteTransparentColors[10],
    focusOpacity: 0.1,
    activatedOpacity: 0.1
  },
  primary: {
    light: legacyColors.blueLight,
    main: legacyColors.blue,
    dark: legacyColors.blueDark,
    contrastText: sharedPalette.primary.contrastText
  },
  secondary: {
    light: legacyColors.greyLighter,
    main: legacyColors.greyLight,
    dark: legacyColors.grey,
    contrastText: legacyColors.greyDarker
  },
  text: {
    primary: legacyColors.greyDarker,
    secondary: legacyColors.grey
  },
  danger: {
    main: legacyColors.red,
    light: legacyColors.redLight,
    contrastText: sharedPalette.primary.contrastText
  },
  grey: _extends_1({}, coolGreyscaleColors),
  greyTransparent: _extends_1({}, coolGreyscaleTransparentColors),
  divider: whiteTransparentColors[18] // Equates to rgba(177,186,204,0.25)

});

var typography$3 = (theme => {
  const {
    typography
  } = theme;
  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightBold,
    pxToRem
  } = typography;
  return {
    fontFamily: ['Akkurat'],
    letterSpacing: 0,
    h1: {
      fontSize: pxToRem(30),
      fontWeight: fontWeightLight,
      lineHeight: pxToRem(48)
    },
    h2: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(36)
    },
    h3: {
      fontSize: pxToRem(21),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    h4: {
      fontSize: pxToRem(17),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(30)
    },
    h5: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightBold,
      lineHeight: pxToRem(24)
    },
    body1: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(19)
    },
    body2: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18)
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: pxToRem(19)
    },
    label: {
      fontSize: pxToRem(15),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(24)
    },
    caption: {
      fontSize: pxToRem(13),
      fontWeight: fontWeightRegular,
      lineHeight: pxToRem(18)
    }
  };
});

const defaultTheme$2 = styles.createMuiTheme();
const leadsThemeProps = {
  MuiFilledInput: {
    disableUnderline: true
  },
  MuiSelect: {
    displayEmpty: true
  },
  MuiAutocomplete: {
    blurOnSelect: true
  }
};
const leadsTheme = styles.createMuiTheme({
  palette: palette$3,
  props: deepmerge(sharedProps, leadsThemeProps),
  typography: typography$3(defaultTheme$2),
  shadows: sharedShadows('#000000'),
  shape: sharedShape,
  spacing: 6
});
leadsTheme.overrides = deepmerge(sharedOverrides(leadsTheme), overrides$2(leadsTheme));

const ProductThemeProvider = ({
  children,
  variant
}) => /*#__PURE__*/React__default.createElement(styles.ThemeProvider, {
  theme: productTheme({
    variant
  })
}, children);

const MarketingThemeProvider = ({
  children
}) => /*#__PURE__*/React__default.createElement(styles.ThemeProvider, {
  theme: marketingTheme
}, children);

const LeadsThemeProvider = ({
  children
}) => /*#__PURE__*/React__default.createElement(styles.ThemeProvider, {
  theme: leadsTheme
}, children);

var _ref$c = /*#__PURE__*/React__default.createElement(CssBaseline, null);

var _ref2$o = /*#__PURE__*/React__default.createElement(CssBaseline, null);

var _ref3$3 = /*#__PURE__*/React__default.createElement(CssBaseline, null);

const getThemeDecorator = (themeName = 'product') => {
  if (themeName === 'marketing') {
    return storyFn => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MarketingThemeProvider, null, _ref$c, storyFn()));
  }

  if (themeName === 'leads') {
    return storyFn => /*#__PURE__*/React__default.createElement(Box, {
      style: {
        backgroundColor: '#01044c',
        color: 'white'
      },
      pt: 2,
      pb: 2
    }, /*#__PURE__*/React__default.createElement(LeadsThemeProvider, null, _ref2$o, storyFn()));
  }

  return storyFn => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ProductThemeProvider, null, _ref3$3, storyFn()));
};

exports.ArrowPopper = ArrowPopper;
exports.Banner = WrappedBanner;
exports.BundleInfoSheet = BundleInfoSheet;
exports.Checklist = Checklist;
exports.ChecklistCelebrationModal = ChecklistCelebrationModal;
exports.ChecklistItemDetails = ChecklistItemDetails;
exports.ClickShield = ClickShield;
exports.ColorPicker = ColorPicker;
exports.ConfirmDialog = ConfirmDialog;
exports.DialogTitleWithCloseButton = DialogTitleWithCloseButton;
exports.EntityTable = EntityTable;
exports.FeedbackTool = FeedbackTool;
exports.FlyoutMenu = FlyoutMenu;
exports.FullScreenDialog = FullScreenDialog;
exports.FullScreenDialogHeader = FullScreenDialogHeader;
exports.FullScreenDialogTitle = FullScreenDialogTitle;
exports.Illustration = Illustration;
exports.InfoSheet = InfoSheet;
exports.InputLabelWithCount = InputLabelWithCount;
exports.InputLabelWithTooltip = InputLabelWithTooltip;
exports.LeadpagesLogo = LeadpagesLogo;
exports.LeadsThemeProvider = LeadsThemeProvider;
exports.LoadingButton = LoadingButton;
exports.MarketingThemeProvider = MarketingThemeProvider;
exports.Onboarding = Onboarding;
exports.PasswordTextField = PasswordTextField;
exports.PhoneInput = PhoneInput;
exports.ProductThemeProvider = ProductThemeProvider;
exports.ShadowBox = ShadowBox;
exports.Shapes = index$2;
exports.Toast = Toast;
exports.UnderlineLink = UnderlineLink;
exports.UserCheckList = UserCheckList;
exports.VSTypography = VSTypography;
exports.WistiaEmbed = WistiaEmbed;
exports.getThemeDecorator = getThemeDecorator;
exports.illustrationTypes = index$1;
exports.leadsTheme = leadsTheme;
exports.marketingTheme = marketingTheme;
exports.productTheme = productTheme;
exports.useSuccess = useSuccess;

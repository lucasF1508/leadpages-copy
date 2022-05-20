'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.Input_inputClass__3uR3K {\n  width: 100%\n}\n\n.Input_inputClass__3uR3K:hover .Input_inputStyles__2vCPJ,\n  .Input_inputClass__3uR3K.Input_inputActive__2KDhJ .Input_inputStyles__2vCPJ {\n  border: 1px solid #0069ff;\n}\n\n.Input_inputClass__3uR3K .Input_inputHelperText__3EtwF {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0;\n  color: #797f89;\n  margin: 6px 0;\n}\n\n.Input_inputClass__3uR3K .Input_inputLabelText__1ZJR8 {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #4c515d;\n  margin: 6px 0;\n  text-transform: capitalize;\n}\n\n.Input_inputClass__3uR3K .Input_inputStyles__2vCPJ {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  color: #4c515d;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #b1bacc;\n  border-radius: 3px;\n  outline: 0;\n  background: #ffffff\n}\n\n.Input_inputClass__3uR3K .Input_inputStyles__2vCPJ.Input_singleInputField__c8fBR {\n  padding: 11px 11px;\n}\n\n.Input_inputClass__3uR3K .Input_inputStyles__2vCPJ:focus {\n  border: 1px solid #0069ff;\n}\n\n.Input_inputClass__3uR3K.Input_inputError__2gehN .Input_inputStyles__2vCPJ,\n  .Input_inputClass__3uR3K.Input_inputError__2gehN .Input_inputStyles__2vCPJ:focus {\n  border: 1px solid #bf0711;\n}\n\n.Input_inputClass__3uR3K.Input_inputError__2gehN .Input_inputHelperText__3EtwF {\n  color: #bf0711;\n}\n\n.Input_inputClass__3uR3K .Input_inputStyles__2vCPJ:focus {\n  border: 1px solid #0069ff;\n}\n\n.Input_inputClass__3uR3K.Input_inputDisabled__2YS1t,\n.Input_inputClass__3uR3K.Input_inputDisabled__2YS1t:hover {\n  opacity: 0.4\n}\n\n.Input_inputClass__3uR3K.Input_inputDisabled__2YS1t .Input_inputStyles__2vCPJ[disabled],\n  .Input_inputClass__3uR3K.Input_inputDisabled__2YS1t:hover .Input_inputStyles__2vCPJ[disabled],\n  .Input_inputClass__3uR3K.Input_inputDisabled__2YS1t:hover .Input_inputStyles__2vCPJ[disabled],\n  .Input_inputClass__3uR3K.Input_inputDisabled__2YS1t:hover:hover .Input_inputStyles__2vCPJ[disabled] {\n  cursor: not-allowed;\n  border: 1px solid #b1bacc;\n  border-radius: 3px;\n  background: #e4e7ed;\n}\n";
var styles = {"inputClass":"Input_inputClass__3uR3K","inputStyles":"Input_inputStyles__2vCPJ","inputActive":"Input_inputActive__2KDhJ","inputHelperText":"Input_inputHelperText__3EtwF","inputLabelText":"Input_inputLabelText__1ZJR8","singleInputField":"Input_singleInputField__c8fBR","inputError":"Input_inputError__2gehN","inputDisabled":"Input_inputDisabled__2YS1t"};
styleInject(css);

var Input = function Input(_ref) {
  var _classNames2;

  var className = _ref.className,
      disabled = _ref.disabled,
      hasError = _ref.hasError,
      subContent = _ref.subContent,
      id = _ref.id,
      isActive = _ref.isActive,
      labelContent = _ref.labelContent,
      isSingleInput = _ref.isSingleInput,
      inputContainerClass = _ref.inputContainerClass,
      inputLabelClass = _ref.inputLabelClass,
      inputSelfClass = _ref.inputSelfClass,
      placeholder = _ref.placeholder,
      type = _ref.type,
      inputRef = _ref.inputRef,
      tabIndex = _ref.tabIndex,
      InputComponent = _ref.inputComponent,
      InputWrapper = _ref.inputWrapper,
      inputWrapperProps = _ref.inputWrapperProps,
      props = objectWithoutProperties(_ref, ["className", "disabled", "hasError", "subContent", "id", "isActive", "labelContent", "isSingleInput", "inputContainerClass", "inputLabelClass", "inputSelfClass", "placeholder", "type", "inputRef", "tabIndex", "inputComponent", "inputWrapper", "inputWrapperProps"]);

  function renderInput() {
    var _classNames;

    return React.createElement(InputComponent, _extends_1({
      className: classNames(styles.inputStyles, inputSelfClass, (_classNames = {}, defineProperty(_classNames, styles.inputActive, isActive), defineProperty(_classNames, styles.singleInputField, isSingleInput), _classNames)),
      ref: inputRef,
      type: type,
      id: id,
      disabled: disabled,
      placeholder: !disabled ? placeholder : '',
      tabIndex: disabled ? undefined : tabIndex
    }, props));
  }

  return React.createElement("div", {
    className: classNames(className, styles.inputClass, inputContainerClass, (_classNames2 = {}, defineProperty(_classNames2, styles.inputActive, isActive), defineProperty(_classNames2, styles.inputError, hasError), defineProperty(_classNames2, styles.inputDisabled, !!disabled), _classNames2))
  }, React.createElement("label", {
    className: classNames(styles.inputLabelText, inputLabelClass),
    htmlFor: id
  }, labelContent), InputWrapper && React.createElement(InputWrapper, inputWrapperProps, renderInput()), !InputWrapper && renderInput(), subContent && React.createElement("div", {
    className: styles.inputHelperText
  }, subContent));
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  subContent: PropTypes.node,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  inputComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  inputContainerClass: PropTypes.string,
  inputLabelClass: PropTypes.string,
  inputSelfClass: PropTypes.string,
  inputRef: PropTypes.func,
  inputWrapper: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  inputWrapperProps: PropTypes.shape({}),
  isActive: PropTypes.bool,
  isSingleInput: PropTypes.bool,
  labelContent: PropTypes.node,
  type: PropTypes.string,
  tabIndex: PropTypes.number
};
Input.defaultProps = {
  className: '',
  disabled: false,
  hasError: false,
  subContent: null,
  id: '',
  inputComponent: 'input',
  inputContainerClass: null,
  inputLabelClass: null,
  inputSelfClass: null,
  inputRef: null,
  inputWrapper: null,
  inputWrapperProps: null,
  isActive: false,
  isSingleInput: false,
  labelContent: null,
  placeholder: '',
  type: 'text',
  tabIndex: 0
};

module.exports = Input;

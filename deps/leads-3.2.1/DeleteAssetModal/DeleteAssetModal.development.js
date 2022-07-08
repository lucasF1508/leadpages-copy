'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var emotion = require('emotion');
var Button = _interopDefault(require('../Button'));
var Modal = require('../Modal');
var Tooltip = _interopDefault(require('../Tooltip'));
var Checkbox = _interopDefault(require('../Checkbox'));
var withColor = require('../Color');
var withColor__default = _interopDefault(withColor);
var withTypograpgy = require('../Typography');
var withTypograpgy__default = _interopDefault(withTypograpgy);

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

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

var css = ".DeleteAssetModal_assetName__1ByUm {\n  margin: 12px 0 18px;\n  padding: 12px 18px;\n\n  border-radius: 3px;\n}\n\n.DeleteAssetModal_detailsContainer__1Zhmo {\n  margin: 12px 0\n}\n\n.DeleteAssetModal_detailsContainer__1Zhmo .DeleteAssetModal_details__pE2c5 {\n  padding: 0;\n  list-style-type: disc;\n}\n\n.DeleteAssetModal_detailsContainer__1Zhmo .DeleteAssetModal_details__pE2c5 .DeleteAssetModal_detail__19Ngq {\n  margin-left: 30px;\n}\n";
var styles = {"assetName":"DeleteAssetModal_assetName__1ByUm","detailsContainer":"DeleteAssetModal_detailsContainer__1Zhmo","details":"DeleteAssetModal_details__pE2c5","detail":"DeleteAssetModal_detail__19Ngq"};
styleInject(css);

function _templateObject() {
  var data = taggedTemplateLiteral(["\n            text-transform: capitalize;\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/*
  NOTE: Seeing this error? (Can remove after upgrade to react 16)

  Exception thrown by hook while
  handling onSetChildren: Invariant Violation:
  Expected onBeforeMountComponent() parent and onSetChildren()
  to be consistent (16 has parents 12 and 15).
  Invariant Violation: Expected onBeforeMountComponent() parent
  and onSetChildren() to be consistent (16 has parents 12 and 15).

  Dont worry it wont be a thing eventually :)

  https://github.com/facebook/react/issues/8692
*/

var Typography = withTypograpgy__default(function (props) {
  return React__default.createElement("div", props);
});
var ColorAndType = withColor__default(function (props) {
  return React__default.createElement(Typography, props);
});
var DeleteModalContent = function DeleteModalContent(props) {
  return React__default.createElement(ColorAndType, _extends_1({
    type: withTypograpgy.types.bodyDefault,
    color: withColor.colors.greyDark
  }, props));
};

var DeleteAssetModal =
/*#__PURE__*/
function (_Component) {
  inherits(DeleteAssetModal, _Component);

  function DeleteAssetModal(props) {
    var _this;

    classCallCheck(this, DeleteAssetModal);

    _this = possibleConstructorReturn(this, getPrototypeOf(DeleteAssetModal).call(this, props));
    _this.setIsConfirmed = _this.setIsConfirmed.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.onSubmit = _this.onSubmit.bind(assertThisInitialized(assertThisInitialized(_this)));
    _this.state = {
      isConfirmed: false
    };
    return _this;
  }

  createClass(DeleteAssetModal, [{
    key: "setIsConfirmed",
    value: function setIsConfirmed(_ref) {
      var target = _ref.target;
      this.setState(function () {
        return {
          isConfirmed: target.checked
        };
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      this.props.handleDelete();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          needsConfirmation = _this$props.needsConfirmation,
          assetType = _this$props.assetType,
          assetName = _this$props.assetName,
          alternate = _this$props.alternate,
          details = _this$props.details,
          handleClose = _this$props.handleClose,
          handleDelete = _this$props.handleDelete,
          useAlternatDeletePhrase = _this$props.useAlternatDeletePhrase;
      var isConfirmed = this.state.isConfirmed;
      return React__default.createElement(Modal.Modal, {
        isOpen: isOpen,
        onRequestClose: handleClose
      }, React__default.createElement(Modal.ModalHeader, {
        onClose: handleClose,
        title: "Delete ".concat(assetType),
        className: emotion.css(_templateObject())
      }), React__default.createElement("form", {
        onSubmit: this.onSubmit
      }, React__default.createElement(Modal.ModalBody, null, children || React__default.createElement("div", null, React__default.createElement(Typography, {
        type: withTypograpgy.types.headingDefault
      }, "You are about to", ' ', useAlternatDeletePhrase ? 'discard' : 'delete', " the following", ' ', assetType, ":"), React__default.createElement(ColorAndType, {
        className: styles.assetName,
        type: withTypograpgy.types.bodyDefault,
        color: withColor.colors.greyDark,
        backgroundColor: withColor.colors.greyLighter
      }, assetName), details && React__default.createElement(ColorAndType, {
        className: styles.detailsContainer,
        type: withTypograpgy.types.bodyDefault,
        color: withColor.colors.greyDark
      }, React__default.createElement(ColorAndType, {
        className: "delete-modal__details-title",
        type: withTypograpgy.types.bodyDefault,
        color: withColor.colors.greyDark
      }, "This cannot be undone. By", ' ', useAlternatDeletePhrase ? 'discarding' : 'deleting', " your", ' ', assetType, ","), React__default.createElement("ul", {
        className: styles.details
      }, details.map(function (detail) {
        return React__default.createElement("li", {
          key: detail,
          className: styles.detail
        }, React__default.createElement(ColorAndType, {
          color: withColor.colors.greyDark,
          type: withTypograpgy.types.bodyDefault
        }, detail));
      }))), alternate && alternate(), needsConfirmation && React__default.createElement("div", null, React__default.createElement(Checkbox, {
        id: "confirmForDeleteAsset",
        checked: isConfirmed,
        labelContent: "I understand the results of this action.",
        onChange: this.setIsConfirmed
      })))), React__default.createElement(Modal.ModalFooter, null, React__default.createElement(Button, {
        isSecondary: true,
        onClick: handleClose
      }, ' ', "Cancel", ' '), React__default.createElement(Tooltip, {
        tip: React__default.createElement("div", null, "Please confirm that you", React__default.createElement("br", null), "understand the results first."),
        hidden: !needsConfirmation || isConfirmed
      }, React__default.createElement(Button, {
        disabled: needsConfirmation && !isConfirmed,
        type: "submit",
        isDanger: true
      }, ' ', useAlternatDeletePhrase ? 'Discard' : 'Delete', ' ')))));
    }
  }]);

  return DeleteAssetModal;
}(React.Component);
DeleteAssetModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isOpen: PropTypes.bool,
  useAlternatDeletePhrase: PropTypes.bool,
  needsConfirmation: PropTypes.bool,
  assetType: PropTypes.string,
  assetName: PropTypes.string,
  alternate: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  details: PropTypes.arrayOf(PropTypes.string),
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};
DeleteAssetModal.defaultProps = {
  children: null,
  isOpen: false,
  useAlternatDeletePhrase: false,
  needsConfirmation: false,
  assetType: null,
  assetName: null,
  alternate: null,
  details: null
};

exports.default = DeleteAssetModal;
exports.DeleteModalContent = DeleteModalContent;

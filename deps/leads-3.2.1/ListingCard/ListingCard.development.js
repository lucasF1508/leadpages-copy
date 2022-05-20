'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var Icon = _interopDefault(require('../Icon'));

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

var css = ":root {\n  /* colors */\n\n  /* blue */ /* Builder side nav */\n\n  /* green */\n\n  /* red */\n\n  /* yellow */\n\n  /* purple */\n\n  /* grey */\n\n  /* shadows */\n\n  /* typography */\n}\n\n.ListingCard_calloutCard__1zZ0n {\n  position: relative;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n\n  -webkit-box-sizing: border-box;\n\n          box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  min-height: 210px;\n  padding: 24px;\n\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  -webkit-animation: ListingCard_ANIMATE-USECASE-CARDS__1td4y 0.6s;\n          animation: ListingCard_ANIMATE-USECASE-CARDS__1td4y 0.6s;\n  text-align: left;\n\n  border-radius: 3px;\n  outline: none;\n  background-color: white;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .32);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, .32)\n}\n\n.ListingCard_calloutCard__1zZ0n:hover,\n  .ListingCard_calloutCard__1zZ0n:focus {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  -webkit-box-shadow: 0 12px 24px rgba(0, 0, 0, .23);\n          box-shadow: 0 12px 24px rgba(0, 0, 0, .23);\n}\n\n.ListingCard_calloutCardActive__2FcKc {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n\n  -webkit-box-shadow: 0 12px 24px rgba(0, 0, 0, .23);\n\n          box-shadow: 0 12px 24px rgba(0, 0, 0, .23);\n}\n\n.ListingCard_subtitle__Tab7u {\n  font-family: 'Akkurat';\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n\n  letter-spacing: 0;\n\n  color: #797f89;\n\n  padding-left: 12px;\n}\n\n.ListingCard_title__1dfEc {\n  font-family: 'Akkurat';\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  overflow: hidden;\n\n  max-height: 120px;\n  margin: 4px 0 2px;\n  padding-bottom: 6px;\n\n  text-overflow: ellipsis;\n\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n\n.ListingCard_description__3Mfpm {\n  font-family: 'Akkurat';\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n\n  letter-spacing: 0;\n\n  color: #4c515d;\n\n  padding-bottom: 18px;\n\n  color: #797f89;\n}\n\n.ListingCard_icon__z0e1D {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  height: 48px;\n\n  -webkit-transition: all 0.2s ease-in-out;\n\n  transition: all 0.2s ease-in-out;\n  text-align: center;\n\n  border-radius: 24px;\n}\n";
var styles = {"calloutCard":"ListingCard_calloutCard__1zZ0n","ANIMATE-USECASE-CARDS":"ListingCard_ANIMATE-USECASE-CARDS__1td4y","calloutCardActive":"ListingCard_calloutCardActive__2FcKc","subtitle":"ListingCard_subtitle__Tab7u","title":"ListingCard_title__1dfEc","description":"ListingCard_description__3Mfpm","icon":"ListingCard_icon__z0e1D"};
styleInject(css);

var ListingCard = function ListingCard(_ref) {
  var isActive = _ref.isActive,
      onClick = _ref.onClick,
      title = _ref.title,
      description = _ref.description,
      icon = _ref.icon,
      subTitle = _ref.subTitle,
      className = _ref.className;
  return React.createElement("div", {
    className: classNames(className, "".concat(styles.calloutCard), defineProperty({}, "".concat(styles.calloutCardActive), isActive)),
    role: "button",
    tabIndex: "0",
    onClick: onClick
  }, React.createElement("div", null, React.createElement("h2", {
    className: styles.title
  }, title), React.createElement("div", {
    className: styles.description
  }, description)), !icon ? null : React.createElement("div", {
    className: styles.icon
  }, icon ? React.createElement(Icon, {
    icon: icon
  }) : null, React.createElement("div", {
    className: styles.subtitle
  }, subTitle)));
};

ListingCard.propTypes = {
  className: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};
ListingCard.defaultProps = {
  className: null,
  subTitle: '',
  title: '',
  description: '',
  icon: null,
  onClick: function onClick() {},
  isActive: false
};

module.exports = ListingCard;

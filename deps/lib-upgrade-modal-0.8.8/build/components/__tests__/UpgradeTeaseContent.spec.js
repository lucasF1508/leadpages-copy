"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _UpgradeTeaseContent = _interopRequireDefault(require("../UpgradeTeaseContent"));

var makeWrapper = function makeWrapper(props) {
  return (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_UpgradeTeaseContent.default, props));
};

var selectors = {
  image: {
    'data-qa-selector': 'promo-image'
  },
  ctaLink: {
    'data-qa-selector': 'cta-link'
  }
};
describe('UpgradeContent', function () {
  var wrapper;
  var props = {
    headline: 'Headline',
    subheadline: 'Subheadline',
    mediaUrl: '/',
    image: 'image.png',
    listItems: ['one', 'two', 'three'],
    ctaLabel: 'Label',
    ctaLink: 'link.html',
    closeAction: jest.fn()
  };
  beforeEach(function () {
    wrapper = makeWrapper(props);
  });
  it('should render', function () {
    expect(wrapper).toBeDefined();
  });
  it('should render the headline', function () {
    var headerElem = wrapper.find('h1');
    expect(headerElem.text()).toBe(props.headline);
  });
  it('should render the subheadline', function () {
    var headerElem = wrapper.find('h2');
    expect(headerElem.text()).toBe(props.subheadline);
  });
  it('should render a list from listItems', function () {
    var listElem = wrapper.find('ul li');
    expect(listElem.length).toBe(props.listItems.length);
  });
  it('should set the image src', function () {
    var imageElem = wrapper.find(selectors.image);
    expect(imageElem).toBeDefined();
    expect(imageElem.props().src).toBe("".concat(props.mediaUrl).concat(props.image));
  });
  it('should set the cta link and label', function () {
    var elem = wrapper.find(selectors.ctaLink);
    expect(elem).toBeDefined();
    expect(elem.props().href).toBe(props.ctaLink);
    expect(elem.text()).toMatch(props.ctaLabel);
  });
});
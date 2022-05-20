"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _UpgradeTeaseModal = _interopRequireDefault(require("../UpgradeTeaseModal"));

var _components = require("../components");

describe('UpgradeTeaseModal', function () {
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
  it('should render an UpgradeTeaseContent component', function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_UpgradeTeaseModal.default, props));
    expect(wrapper.find(_components.UpgradeTeaseContent).length).toBe(1);
  });
});
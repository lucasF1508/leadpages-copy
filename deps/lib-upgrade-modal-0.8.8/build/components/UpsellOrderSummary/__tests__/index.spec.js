"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireDefault(require("../index"));

describe('UpsellSummary', function () {
  var props;
  beforeEach(function () {
    props = {
      product: {
        isBilledNow: true,
        finePrint: ['Some legal disclaimer'],
        lineItems: [{
          title: 'L1',
          price: 100,
          discountedPrice: 25
        }]
      }
    };
  });
  it('should render correctly', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.getByText(props.product.finePrint[0])).toBeDefined();
    expect(_react2.screen.getByText(props.product.lineItems[0].title)).toBeDefined();
    expect(_react2.screen.getByText("$".concat(props.product.lineItems[0].price))).toBeDefined();
    expect(_react2.screen.getAllByText("$".concat(props.product.lineItems[0].discountedPrice)).length).toBe(2);
  });
  it('should get the total correctly', function () {
    props.product.lineItems.push({
      title: 'L2',
      price: 100
    }, {
      title: 'L3',
      price: 300,
      discountedPrice: 200
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.getByText('$325')).toBeDefined();
  });
  it('should render "FREE" for items with a discountedPrice of 0', function () {
    props.product.lineItems.push({
      title: 'L2',
      price: 100,
      discountedPrice: 0
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.getByText('FREE', {
      exact: false
    })).toBeDefined();
  });
  it('should pad fractions with zeroes', function () {
    props.product.lineItems.push({
      title: 'L2',
      price: 10.1
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.getByText('$10.10')).toBeDefined();
    expect(_react2.screen.getByText('$35.10')).toBeDefined();
  });
  it('should round fractional cents upward, and display whole numbers without padding', function () {
    props.product.lineItems.push( // Given a price that rounds upwards to a non-whole number
    // And a discount price that rounds to a whole number
    {
      title: 'L2',
      price: 10.8999,
      discountedPrice: 9.999
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props)); // I expect the whole number used for the dicount

    expect(_react2.screen.getByText('$10')).toBeDefined(); // And the original price rounded upward with zero-padding

    expect(_react2.screen.getByText('$10.90')).toBeDefined(); // And the total to be displayed without padding

    expect(_react2.screen.getByText('$35')).toBeDefined();
  });
  it('should not render a total with a null line item price', function () {
    props.product.lineItems.push({
      title: 'Cow',
      price: 1.1
    }, {
      title: 'Plus Tax',
      price: null
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.queryByText('$26.10')).toBe(null);
  });
  it('should update the total if a line item price changes', function () {
    props.product.lineItems.push({
      title: 'Cow',
      price: 1.1
    }, {
      title: 'Plus Tax',
      price: null
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.queryByText('$26.10')).toBe(null);
    props.product.lineItems[2].price = 2.5;
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.getByText('$28.60')).toBeDefined();
  });
  it('should handle line items with undefined price', function () {
    // Even though the schema demands this, this is a safety for cases where
    // bad data can be used.
    props.product.lineItems.push({
      title: 'Cow'
    }, {
      title: 'Chipmunk',
      price: 12.1
    });
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, props));
    expect(_react2.screen.queryByText('$NaN')).not.toBeInTheDocument();
    expect(_react2.screen.getByText('$37.10')).toBeDefined();
  });
});
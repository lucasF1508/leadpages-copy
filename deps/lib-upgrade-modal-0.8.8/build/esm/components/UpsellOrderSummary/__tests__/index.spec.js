import React from 'react';
import { screen, render } from '@testing-library/react';
import UpsellSummary from '../index';
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
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.getByText(props.product.finePrint[0])).toBeDefined();
    expect(screen.getByText(props.product.lineItems[0].title)).toBeDefined();
    expect(screen.getByText("$".concat(props.product.lineItems[0].price))).toBeDefined();
    expect(screen.getAllByText("$".concat(props.product.lineItems[0].discountedPrice)).length).toBe(2);
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
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.getByText('$325')).toBeDefined();
  });
  it('should render "FREE" for items with a discountedPrice of 0', function () {
    props.product.lineItems.push({
      title: 'L2',
      price: 100,
      discountedPrice: 0
    });
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.getByText('FREE', {
      exact: false
    })).toBeDefined();
  });
  it('should pad fractions with zeroes', function () {
    props.product.lineItems.push({
      title: 'L2',
      price: 10.1
    });
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.getByText('$10.10')).toBeDefined();
    expect(screen.getByText('$35.10')).toBeDefined();
  });
  it('should round fractional cents upward, and display whole numbers without padding', function () {
    props.product.lineItems.push( // Given a price that rounds upwards to a non-whole number
    // And a discount price that rounds to a whole number
    {
      title: 'L2',
      price: 10.8999,
      discountedPrice: 9.999
    });
    render( /*#__PURE__*/React.createElement(UpsellSummary, props)); // I expect the whole number used for the dicount

    expect(screen.getByText('$10')).toBeDefined(); // And the original price rounded upward with zero-padding

    expect(screen.getByText('$10.90')).toBeDefined(); // And the total to be displayed without padding

    expect(screen.getByText('$35')).toBeDefined();
  });
  it('should not render a total with a null line item price', function () {
    props.product.lineItems.push({
      title: 'Cow',
      price: 1.1
    }, {
      title: 'Plus Tax',
      price: null
    });
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.queryByText('$26.10')).toBe(null);
  });
  it('should update the total if a line item price changes', function () {
    props.product.lineItems.push({
      title: 'Cow',
      price: 1.1
    }, {
      title: 'Plus Tax',
      price: null
    });
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.queryByText('$26.10')).toBe(null);
    props.product.lineItems[2].price = 2.5;
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.getByText('$28.60')).toBeDefined();
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
    render( /*#__PURE__*/React.createElement(UpsellSummary, props));
    expect(screen.queryByText('$NaN')).not.toBeInTheDocument();
    expect(screen.getByText('$37.10')).toBeDefined();
  });
});
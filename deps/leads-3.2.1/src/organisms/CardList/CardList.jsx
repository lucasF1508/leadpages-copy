import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { shadows, typographyDefs } from '../../theme/Theme';
import CardListItem from '../../molecules/CardListItem';

const defaultClassName = css`
  display: flex;
  background-color: #fff;
  position: relative;
  box-sizing: content-box;
  flex-wrap: wrap;
  margin: 0px auto;
`;

const getLabelCss = itemMargin =>
  css(
    typographyDefs.bodyHeading,
    `
    margin-bottom: 20px;
    margin-left: ${itemMargin}px;
    width: 100%;
  `
  );

const getCardItemCss = (itemSize, itemMargin) =>
  css`
    width: ${itemSize}px;
    height: ${itemSize}px;
    text-align: center;
    margin: ${itemMargin}px;
    visibility: visible;
    z-index: 2;
    overflow: visible;
    transition: all 0.1s ease-in;
    position: relative;
  `;

const getCardItemHoverCss = () =>
  css`
    &.active {
      z-index: 2;
    }
    &:hover,
    &.active {
      transform: scale(1.22);
      box-shadow: ${shadows.l1};
    }

    &:hover {
      z-index: 3;
    }
  `;

const getCardItemRefCss = itemSize =>
  css`
    width: ${itemSize}px;
    height: ${itemSize}px;
    position: absolute;
    top: 0;
    left: 0;
  `;

const getTooltipCss = () =>
  css`
    position: absolute;
    z-index: 10;
    visibility: hidden;
  `;

const getActiveTooltipCss = activeBounds => {
  if (!activeBounds) {
    return null;
  }
  return css`
    top: ${activeBounds.top}px;
    left: ${activeBounds.left}px;
    display: inherit;
    visibility: visible;
  `;
};

export default class CardList extends Component {
  displayName = 'CardList';
  constructor(props) {
    super(props);
    this.cardRefs = {};
  }

  getActiveCardBounds() {
    if (!this.cardListRef || !this.tooltipRef) {
      return null;
    }
    const { activeItem, itemSize } = this.props;
    if ((!activeItem && activeItem !== 0) || !this.cardRefs[activeItem]) {
      return null;
    }

    const cardListBounds = this.cardListRef.getBoundingClientRect();
    const tooltipBounds = this.tooltipRef.getBoundingClientRect();
    const bounds = this.cardRefs[activeItem].getBoundingClientRect();

    let { width, height, left, top } = bounds;

    // add item card does not have the CSS transform, adjust left position accordingly
    if (Math.round(width) === itemSize) {
      width = width * 1.22;
      left = left - itemSize * 0.11;
    }

    // add item card does not have the CSS transform, adjust top position accordingly
    if (Math.round(height) === itemSize) {
      height = height * 1.22;
      top = top - itemSize * 0.11;
    }

    // position relative to parent container top
    top = top + height - cardListBounds.top;

    // position relative to parent container width
    left = left - cardListBounds.left;

    // center tooltip position using tooltip width
    left = left - (tooltipBounds.width - width) / 2;

    return {
      left,
      top
    };
  }
  render() {
    const {
      children,
      className,
      component: CardListComponent,
      addItem,
      setActiveItem,
      removeItem,
      activeItem,
      items,
      itemMargin,
      itemSize,
      label,
      ...props
    } = this.props;

    const cardItemCss = getCardItemCss(itemSize, itemMargin);
    const cardItemHoverCss = getCardItemHoverCss();
    const cardItemRefCss = getCardItemRefCss(itemSize);

    const labelCss = getLabelCss(itemMargin);

    let activeCardBounds = null;
    let tooltipCss = null;
    let activeTooltipCss = null;

    if (children) {
      activeCardBounds = this.getActiveCardBounds();
      tooltipCss = getTooltipCss();
      activeTooltipCss = getActiveTooltipCss(activeCardBounds);
    }

    return (
      <CardListComponent
        className={cx(className, defaultClassName)}
        {...props}
        ref={item => (this.cardListRef = item)}
      >
        {label && (
          <div data-qa-selector="card-list-label" className={labelCss}>
            {label}
          </div>
        )}
        {items.map((item, index) => {
          return (
            <CardListItem
              key={index}
              removeItem={() => removeItem(index)}
              onClick={() => setActiveItem(index)}
              className={cx(
                cardItemCss,
                cardItemHoverCss,
                activeItem === index && 'active'
              )}
            >
              {item}
              <div
                className={cx(cardItemRefCss)}
                ref={item => (this.cardRefs[index] = item)}
              />
            </CardListItem>
          );
        })}
        {addItem && (
          <CardListItem
            isAddItem
            onClick={addItem}
            className={cx(
              cardItemCss,
              css`
                z-index: 2;
              `
            )}
          >
            <div
              className={cx(cardItemRefCss)}
              ref={item => (this.cardRefs[items.length] = item)}
            />
          </CardListItem>
        )}
        {children && (
          <div
            ref={item => (this.tooltipRef = item)}
            data-qa-selector="card-list-tooltip"
            className={cx(tooltipCss, activeTooltipCss)}
          >
            {children}
          </div>
        )}
        <div
          role="button"
          tabIndex="0"
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: `${activeItem || activeItem === 0 ? 'block' : 'none'}`
          }}
          onClick={() => {
            setActiveItem(null);
          }}
        />
      </CardListComponent>
    );
  }
}

CardList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  addItem: PropTypes.func,
  setActiveItem: PropTypes.func,
  removeItem: PropTypes.func,
  activeItem: PropTypes.number,
  items: PropTypes.array,
  itemMargin: PropTypes.number,
  itemSize: PropTypes.number.isRequired,
  label: PropTypes.string
};

CardList.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  addItem: null,
  setActiveItem: null,
  removeItem: null,
  activeItem: null,
  items: [],
  itemMargin: 8,
  label: ''
};

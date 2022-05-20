import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardList from '../../CardList';

describe('CardList', () => {
  it('renders correctly', () => {
    const addItem = jest.fn();
    const tree = renderer.create(<CardList addItem={addItem} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render the addCard when addItem is not provided ', () => {
    const wrapper = shallow(<CardList />);
    const addCard = wrapper.find('CardListItem');
    expect(addCard.length).toBe(0);
  });

  it('should render the addCard when addItem is provided', () => {
    const addItem = jest.fn();
    const wrapper = shallow(<CardList addItem={addItem} />);
    const addCard = wrapper.find('CardListItem');
    expect(addCard.length).toBe(1);
  });

  it('should not render a label if no label is provided', () => {
    const wrapper = shallow(<CardList />);
    expect(
      wrapper.find({ 'data-qa-selector': 'card-list-label' }).length
    ).toEqual(0);
  });

  it('should render a label if a label is provided', () => {
    const wrapper = shallow(<CardList label={'My label'} />);
    expect(
      wrapper.find({ 'data-qa-selector': 'card-list-label' }).length
    ).toEqual(1);
  });

  it('should run addItem when addCard is clicked', () => {
    const addItem = jest.fn();
    const wrapper = shallow(<CardList addItem={addItem} />);
    const addCard = wrapper.find('CardListItem').at(0);
    addCard.simulate('click');
    expect(addItem.mock.calls[0]).toBeDefined();
  });

  it('should render items when they are provided', () => {
    const addItem = jest.fn();
    const items = [<div className="bar" />, <div className="bar" />];
    const wrapper = shallow(<CardList items={items} addItem={addItem} />);
    const cardListItems = wrapper.find('CardListItem');
    const cardItems = wrapper.find('.bar');
    expect(cardListItems.length).toBe(3); // The extra is the add card
    expect(cardItems.length).toBe(2);
  });

  it('should call setActiveItem with the index when an item is clicked', () => {
    const setActiveItem = jest.fn();
    const items = [<div className="bar" />, <div className="bar" />];
    const wrapper = shallow(
      <CardList items={items} setActiveItem={setActiveItem} />
    );
    const cardListItem0 = wrapper.find('CardListItem').at(0);
    cardListItem0.simulate('click');
    expect(setActiveItem.mock.calls[0]).toBeDefined();
    expect(setActiveItem.mock.calls[0][0]).toBe(0);

    const cardListItem1 = wrapper.find('CardListItem').at(1);
    cardListItem1.simulate('click');
    expect(setActiveItem.mock.calls[1]).toBeDefined();
    expect(setActiveItem.mock.calls[1][0]).toBe(1);
  });

  it('should pass removeItem to the removeable items and call with index', () => {
    const removeItem = jest.fn();
    const items = [<div className="bar" />, <div className="bar" />];
    const wrapper = shallow(<CardList items={items} removeItem={removeItem} />);
    const cardListItem = wrapper.find('CardListItem').at(0);
    cardListItem.props().removeItem();
    expect(removeItem.mock.calls[0]).toBeDefined();
    expect(removeItem.mock.calls[0][0]).toBe(0);
  });

  it('should render active item with the active class', () => {
    const activeItem = 1;
    const items = [
      <div className="bar" />,
      <div className="bar" />,
      <div className="bar" />
    ];
    const wrapper = shallow(<CardList items={items} activeItem={activeItem} />);
    const cardListItems = wrapper.find('CardListItem');
    const cardItems = wrapper.find('.bar');
    const activeCardItems = wrapper.find('.active');
    expect(cardListItems.length).toBe(3);
    expect(
      cardListItems
        .at(0)
        .props()
        .className.includes('active')
    ).toBe(false);
    expect(
      cardListItems
        .at(1)
        .props()
        .className.includes('active')
    ).toBe(true);
    expect(
      cardListItems
        .at(2)
        .props()
        .className.includes('active')
    ).toBe(false);
    expect(cardItems.length).toBe(3);
    expect(activeCardItems.length).toBe(1);
  });

  it('should render children inside of a tooltip', () => {
    const activeItem = 1;
    const tooltipInner = <div>Tooltip</div>;
    const items = [
      <div className="bar" />,
      <div className="bar" />,
      <div className="bar" />
    ];
    const cardList = shallow(
      <CardList items={items} activeItem={activeItem} itemSize={10}>
        {tooltipInner}
      </CardList>
    );
    const tooltip = cardList.find({ 'data-qa-selector': 'card-list-tooltip' });
    expect(
      tooltip
        .children()
        .at(0)
        .text()
    ).toEqual('Tooltip');
  });

  describe('getActiveCardBounds', () => {
    let cardList;
    let instance;
    const tooltipInner = <div>Tooltip</div>;
    const activeItem = 0;
    const itemSize = 10;
    const items = [
      <div className="bar" />,
      <div className="bar" />,
      <div className="bar" />
    ];

    beforeEach(() => {
      cardList = shallow(
        <CardList items={items} activeItem={activeItem} itemSize={itemSize}>
          {tooltipInner}
        </CardList>
      );
      instance = cardList.instance();
      instance.cardRefs = {
        0: {
          getBoundingClientRect: () => ({
            right: 500,
            left: 500,
            top: 500,
            bottom: 500,
            width: 11,
            height: 11
          })
        },
        1: {
          getBoundingClientRect: () => ({
            right: 500,
            left: 500,
            top: 500,
            bottom: 500,
            width: 10,
            height: 10
          })
        }
      };
      instance.cardListRef = {
        getBoundingClientRect: () => ({ top: 0, left: 0 })
      };
      instance.tooltipRef = {
        getBoundingClientRect: () => ({ width: 200 })
      };
    });

    it('should compute tooltip position based on bounding box of the active ref', () => {
      expect(instance.getActiveCardBounds()).toEqual({
        top: 511, // maintain top position
        left: 405.5 // 500 (item left) - 0 (card bounds left) - ((200 (tooltip width) - 11 (item width)) / 2 (to center tooltip))
      });
    });

    it('should compute tooltip position based on bounding box of the active ref when the item has a CSS transform', () => {
      cardList.setProps({ activeItem: 1 });
      expect(instance.getActiveCardBounds()).toEqual({
        top: 511.09999999999997, // adjust for CSS transition
        left: 405
      });
    });
  });
});

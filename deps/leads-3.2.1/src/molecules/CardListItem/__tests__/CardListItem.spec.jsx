import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardListItem from '../../CardListItem';

describe('CardListItem', () => {
  it('should render correctly', () => {
    const removeItem = jest.fn();
    const tree = renderer
      .create(<CardListItem removeItem={removeItem}>Children</CardListItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render + when isAddItem is not true', () => {
    const wrapper = shallow(<CardListItem />);
    expect(wrapper.find({ 'data-qa-selector': 'add-item' }).length).toEqual(0);
  });

  it('should render + when isAddItem is true', () => {
    const wrapper = shallow(<CardListItem isAddItem={true} />);
    expect(wrapper.find({ 'data-qa-selector': 'add-item' }).length).toEqual(1);
  });

  it('should run onClick when empty', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<CardListItem onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick.mock.calls[0]).toBeDefined();
  });

  it('should render children when present', () => {
    const wrapper = shallow(
      <CardListItem>
        <div className="bar">foo</div>
      </CardListItem>
    );
    const icons = wrapper.find('.lp-icon');
    expect(icons.length).toBe(0);
    const bar = wrapper.find('.bar').at(0);
    expect(bar.text()).toBe('foo');
  });

  it('should run onClick when it has children', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <CardListItem onClick={onClick}>
        <div className="bar">foo</div>
      </CardListItem>
    );
    wrapper.simulate('click');
    expect(onClick.mock.calls[0]).toBeDefined();
  });

  it('should not run onClick when it has children and remove is click', () => {
    const onClick = jest.fn();
    const removeItem = jest.fn();
    const stopPropagation = jest.fn();
    const wrapper = shallow(
      <CardListItem onClick={onClick} removeItem={removeItem}>
        <div className="bar">foo</div>
      </CardListItem>
    );
    const iconButton = wrapper.find('IconButton').at(0);
    iconButton.simulate('click', { stopPropagation });
    expect(onClick.mock.calls[0]).toBeUndefined();
    expect(removeItem.mock.calls[0]).toBeDefined();
  });

  it('should not render IconButton when no removeItem function is provided', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <CardListItem onClick={onClick}>
        <div className="bar">foo</div>
      </CardListItem>
    );
    const iconButton = wrapper.find('IconButton');
    expect(iconButton.length).toBe(0);
  });
});

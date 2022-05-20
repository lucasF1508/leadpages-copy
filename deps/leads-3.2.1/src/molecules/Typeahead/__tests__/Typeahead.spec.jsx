import React from 'react';
import { mount } from 'enzyme';

import Typeahead from '../Typeahead';

const animals = [
  'Cat',
  'Dog',
  'Mouse',
  'Aligator',
  'Lion',
  'Rabbit',
  'Squirrel',
  'Chipmunk',
  'Dolphin',
  'Turtle',
  'T-Rex'
];

const options = animals.map((animal, id) => ({
  name: animal,
  id: id.toString()
}));

describe('Typeahead', () => {
  let props;
  let typeahead;

  beforeEach(() => {
    props = {
      getOptionValue: jest.fn(item => item.id),
      getOptionLabel: jest.fn(item => item.name),
      handleOnReset: jest.fn(),
      handleOnSelect: jest.fn(),
      handleOnSearch: jest.fn(),
      listHeader: 'Header',
      listFooter: 'Footer',
      inputProps: {
        placeholder: 'Pick one!'
      },
      options
    };

    typeahead = mount(<Typeahead {...props} />);
  });

  describe('AutoComplete', () => {
    it('should call search on user input', () => {
      typeahead.find('input').simulate('change', { target: { value: 'Test' } });

      expect(props.handleOnSearch).toHaveBeenCalledWith('Test');
    });

    it('should call select on user select', () => {
      typeahead.find('input').simulate('keyDown', { key: 'ArrowDown' });

      typeahead
        .find('Option')
        .at(0)
        .simulate('click');

      expect(props.handleOnSelect).toHaveBeenCalledWith('0', {
        name: 'Cat',
        id: '0'
      });
    });

    it('should indicate the selected item', () => {
      typeahead.setProps({ value: '1' });
      typeahead.find('input').simulate('keyDown', { key: 'ArrowDown' });

      expect(
        typeahead
          .find('Option')
          .at(0)
          .props().selected
      ).toEqual(false);
      expect(
        typeahead
          .find('Option')
          .at(1)
          .props().selected
      ).toEqual(true);
    });

    it('should indicate the active option', () => {
      typeahead.find('input').simulate('keyDown', { key: 'ArrowDown' });

      expect(
        typeahead
          .find('Option')
          .at(0)
          .props().active
      ).toEqual(true);
      expect(
        typeahead
          .find('Option')
          .at(1)
          .props().active
      ).toEqual(false);
    });

    it('should select the active option on blur', () => {
      typeahead
        .find('input')
        .simulate('keyDown', { key: 'ArrowDown' })
        .simulate('blur');

      expect(props.handleOnSelect).toHaveBeenCalledWith('0', {
        name: 'Cat',
        id: '0'
      });
    });

    it('should remove the input value when the close icon is clicked', () => {
      typeahead.setProps({ value: '1', query: 'Cat' });
      typeahead
        .find({ 'data-qa-selector': 'clear-typeahead' })
        .simulate('click');
      expect(props.handleOnReset).toHaveBeenCalled();
    });
  });

  it('should highlight query that matches label', () => {
    typeahead.setProps({
      query: 'squ',
      options: [{ name: 'Squirrel', id: '111' }]
    });
    typeahead.find('input').simulate('keyDown', { key: 'ArrowDown' });
    const option = typeahead.find('Option').at(0);
    expect(option.props().children[0].props.children).toEqual('Squ');
    expect(option.props().children[0].props.style).toEqual({
      fontWeight: 'bold'
    });

    expect(option.props().children[1].props.children).toEqual('irrel');
    expect(option.props().children[1].props.style).toEqual({});
  });
});

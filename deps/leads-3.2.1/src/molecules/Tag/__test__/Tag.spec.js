import React from 'react';
import { shallow, mount } from 'enzyme';

import Tag from '../Tag';
import IconButton from '../../../molecules/IconButton';

describe('Tag Component', () => {
  it('should have button when editable', () => {
    const wrap = shallow(<Tag isEditable />);
    const button = wrap.find(IconButton);

    expect(button.length).toEqual(1);
  });
  it('should not have button when not editable', () => {
    const wrap = shallow(<Tag isEditable={false} />);
    const button = wrap.find(IconButton);

    expect(button.length).toEqual(0);
  });
  it('should have default value text', () => {
    const wrap = shallow(<Tag value="default" isEditable={false} />);
    const input = wrap.find('input').props();

    expect(input.value).toEqual('default');
  });
  it('should change text when edited', () => {
    const wrap = mount(<Tag value="default" isEditable />);
    let input = wrap.find('input');

    expect(input.props().value).toEqual('default');

    const button = wrap.find(IconButton);
    button.simulate('click');
    wrap.update();

    input = wrap.find('input');
    input.simulate('change', {
      target: { value: 'hello' }
    });
    wrap.update();

    input = wrap.find('input');
    expect(input.props().value).toEqual('hello');
  });
  it('should maintain changed text after edit', () => {
    const wrap = mount(<Tag value="default" isEditable />);
    const button = wrap.find(IconButton);
    const icon = button.find('i');
    let input = wrap.find('input');

    expect(input.props().value).toEqual('default');
    expect(icon.text()).toEqual('edit');

    button.simulate('click');
    wrap.update();

    input = wrap.find('input');
    input.simulate('change', {
      target: { value: 'hello' }
    });
    wrap.update();

    input = wrap.find('input');
    expect(icon.text()).toEqual('check');
    expect(input.props().value).toEqual('hello');

    button.simulate('click');
    wrap.update();
    input = wrap.find('input');

    expect(icon.text()).toEqual('edit');
    expect(input.props().value).toEqual('hello');
  });
  it('should handle using the `enter` key', () => {
    const onKeyDownSpy = jest.fn();
    const wrap = mount(
      <Tag value="default" isEditable onKeyDown={onKeyDownSpy} />
    );
    const button = wrap.find(IconButton);
    let input = wrap.find('input');

    button.simulate('click');

    input = wrap.find('input');
    input.simulate('change', {
      target: { value: 'hello' }
    });
    input.simulate('keyDown', { keyCode: 13 });

    expect(onKeyDownSpy).toHaveBeenCalledWith('hello');
  });
});

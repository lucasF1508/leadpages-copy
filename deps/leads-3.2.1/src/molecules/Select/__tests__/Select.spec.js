import React from 'react';
import { mount, shallow } from 'enzyme';
import Select from '../Select';
import Option from '../../../atoms/Option/Option';
import styles from '../Select.css';

import { KEY_CODES } from '../Select';

// TODO: No lifecycle tests yet
describe('Select Component', () => {
  let props;
  beforeEach(() => {
    props = {
      id: 'foo',
      onChange: jest.fn(),
      onClick: jest.fn()
    };
  });

  it('should not render open', () => {
    const wrapper = shallow(
      <Select {...props}>
        <div>foo</div>
      </Select>
    );
    expect(wrapper.find(`.${styles.open}`).length).toEqual(0);
  });

  it('should not render disabled if disabled property is not suppled', () => {
    const wrapper = shallow(
      <Select {...props}>
        <div>foo</div>
      </Select>
    );
    expect(wrapper.find(`.${styles.disabled}`).length).toEqual(0);
  });

  it('should render disabled if disabled property is supplied', () => {
    props.disabled = true;
    const wrapper = shallow(
      <Select {...props}>
        <div>foo</div>
      </Select>
    );
    expect(wrapper.find(`.${styles.disabled}`).length).toEqual(1);
  });

  it('should render a label if outerLabel is supplied', () => {
    const label = 'Select an Option';
    props.outerLabel = label;
    const wrapper = shallow(
      <Select {...props}>
        <div>foo</div>
      </Select>
    );
    expect(wrapper.find(`.${styles.label}`).contains(label)).toBe(true);
    expect(wrapper.find(`.${styles.label}`).length).toEqual(1);
  });

  it('should not render a label if outerLabel is not supplied', () => {
    const wrapper = shallow(
      <Select {...props}>
        <div>foo</div>
      </Select>
    );
    expect(wrapper.find(`.${styles.label}`).length).toEqual(0);
  });

  it('should render placeholder text if placeholderText property is supplied', () => {
    const placeholder = 'Select an Option';
    props.placeholderText = placeholder;
    const wrapper = shallow(
      <Select {...props}>
        <div>foo</div>
      </Select>
    );
    expect(wrapper.find(`.${styles.input}`).contains(placeholder)).toBe(true);
  });

  it('should render primaryText of option component with the selected property', () => {
    const placeholder = 'Select an Option';
    const optionText = 'bar';
    props.placeholderText = placeholder;
    const wrapper = mount(
      <Select {...props}>
        <Option value="foo" selected primaryText={optionText} />
        <Option value="baz" primaryText="qux" />
      </Select>
    );

    expect(wrapper.find(`.${styles.input}`).text()).not.toEqual(placeholder);
    // down_angle is the ligature for the icon
    expect(wrapper.find(`.${styles.input}`).text()).toEqual(
      `${optionText}down_angle`
    );
  });

  it('should render as inline if noBackground is enabled', () => {
    const optionText = 'bar';
    props.noBackground = true;
    const wrapper = mount(
      <Select {...props}>
        <Option value="foo" selected primaryText={optionText} />
      </Select>
    );

    expect(wrapper.find(`.${styles.select}`).props().className).toContain(
      'noBackground'
    );
  });

  describe('toggleHandler', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
      wrapper = mount(
        <Select {...props}>
          <Option value="foo" selected primaryText={'FOO'} />
          <Option value="bar" primaryText={'BAR'} />
        </Select>
      );
      instance = wrapper.instance();
    });

    it('should toggle the select open and closed', () => {
      instance.toggleHandler();
      expect(instance.state.open).toBe(true);

      instance.toggleHandler();
      expect(instance.state.open).toBe(false);
    });

    it('should set the currently active instance to be equal to the currently selected index', () => {
      wrapper.setState({ activeIndex: 1, selectedIndex: 0 });
      instance.toggleHandler();
      expect(instance.state.activeIndex).toEqual(0);
    });

    it('should trigger the onClick handler from props', () => {
      instance.toggleHandler();
      expect(props.onClick).toHaveBeenCalled();
    });
  });

  describe('Keyboard A11y (Select has focus)', () => {
    let selectWrapper;
    let focusSelect;
    describe('Open/Close behavior', () => {
      beforeEach(() => {
        selectWrapper = shallow(
          <Select {...props}>
            <Option value="foo" selected primaryText="bar" />
            <Option value="baz" primaryText="qux" />
          </Select>
        );
        focusSelect = selectWrapper.find('div[role="listbox"]');
      });
      it('should not loose focus when open and tab is key down', () => {
        selectWrapper.setState({ open: true });
        const preventDefault = jest.fn();
        focusSelect.simulate('keydown', {
          keyCode: KEY_CODES.TAB,
          preventDefault
        });
        expect(preventDefault).toBeCalled();
      });
      it('should not scroll when open and up is key down', () => {
        selectWrapper.setState({ open: true });
        const preventDefault = jest.fn();
        focusSelect.simulate('keydown', {
          keyCode: KEY_CODES.UP_ARROW,
          preventDefault
        });
        expect(preventDefault).toBeCalled();
      });
      it('should not scroll when open and down is key down', () => {
        selectWrapper.setState({ open: true });
        const preventDefault = jest.fn();
        focusSelect.simulate('keydown', {
          keyCode: KEY_CODES.DOWN_ARROW,
          preventDefault
        });
        expect(preventDefault).toBeCalled();
      });
      it('should open when space is key up', () => {
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.SPACE });
        expect(selectWrapper.state().open).toBe(true);
      });
      it('should reset active option when space key is up', () => {
        selectWrapper.setState({ selectedIndex: 0, activeIndex: 1 });
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.SPACE });
        expect(selectWrapper.state().activeIndex).toEqual(0);
      });
      it('should open when up arrow is key up', () => {
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.UP_ARROW });
        expect(selectWrapper.state().open).toBe(true);
      });
      it('should reset active option when up arrow is key up', () => {
        selectWrapper.setState({ selectedIndex: 0, activeIndex: 1 });
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.UP_ARROW });
        expect(selectWrapper.state().activeIndex).toEqual(0);
      });
      it('should open when down arrow is key up', () => {
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.DOWN_ARROW });
        expect(selectWrapper.state().open).toBe(true);
      });
      it('should reset active option when down arrow is key up', () => {
        selectWrapper.setState({ selectedIndex: 0, activeIndex: 1 });
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.DOWN_ARROW });
        expect(selectWrapper.state().activeIndex).toEqual(0);
      });
      it('should close when esc is key up', () => {
        selectWrapper.setState({ open: true });
        expect(selectWrapper.state().open).toBe(true);
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.ESC });
        expect(selectWrapper.state().open).toBe(false);
        expect(props.onChange).not.toBeCalled();
      });
      it('should reset active option when escape key is up', () => {
        selectWrapper.setState({
          open: true,
          selectedIndex: 0,
          activeIndex: 1
        });
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.ESC });
        expect(selectWrapper.state().activeIndex).toEqual(0);
      });
      it('should close when enter is key up', () => {
        selectWrapper.setState({ open: true });
        expect(selectWrapper.state().open).toBe(true);
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.ENTER });
        expect(selectWrapper.state().open).toBe(false);
      });
      it('should elect when enter is key up', () => {
        selectWrapper.setState({ open: true, activeIndex: 1 });
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.ENTER });
        expect(selectWrapper.state().value).toEqual('baz');
        expect(selectWrapper.state().selectedText).toEqual('qux');
        expect(selectWrapper.state().selectedIndex).toEqual(1);
        expect(props.onChange).toBeCalled();
      });
      it('should close when space is key up', () => {
        selectWrapper.setState({ open: true });
        expect(selectWrapper.state().open).toBe(true);
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.SPACE });
        expect(selectWrapper.state().open).toBe(false);
      });
      it('should elect when space is key up', () => {
        selectWrapper.setState({ open: true, activeIndex: 1 });
        focusSelect.simulate('keyup', { keyCode: KEY_CODES.SPACE });
        expect(selectWrapper.state().value).toEqual('baz');
        expect(selectWrapper.state().selectedText).toEqual('qux');
        expect(selectWrapper.state().selectedIndex).toEqual(1);
        expect(props.onChange).toBeCalled();
      });
    });
    describe('navigating in open select', () => {
      describe('without disabled options', () => {
        beforeEach(() => {
          selectWrapper = shallow(
            <Select {...props}>
              <Option value={0} />
              <Option value={1} />
              <Option value={2} selected />
              <Option value={3} />
              <Option value={4} />
              <Option value={5} />
              <Option value={6} />
              <Option value={7} />
              <Option value={8} />
              <Option value={9} />
              <Option value={10} />
              <Option value={11} />
              <Option value={12} />
              <Option value={13} />
              <Option value={14} />
              <Option value={15} />
              <Option value={16} />
              <Option value={17} />
              <Option value={18} />
              <Option value={19} />
            </Select>
          );
          focusSelect = selectWrapper.find('div[role="listbox"]');
          selectWrapper.setState({ open: true });
        });
        it('should move active before when arrow up is key up', () => {
          focusSelect.simulate('keyup', { keyCode: KEY_CODES.UP_ARROW });
          expect(selectWrapper.state().activeIndex).toBe(1);
        });
        it('should move active after when arrow down is key up', () => {
          focusSelect.simulate('keyup', { keyCode: KEY_CODES.DOWN_ARROW });
          expect(selectWrapper.state().activeIndex).toBe(3);
        });
        it('should stop at beginning when arrow up is key up', () => {
          let clicking = 25;
          while (clicking) {
            focusSelect.simulate('keyup', { keyCode: KEY_CODES.UP_ARROW });
            clicking = clicking - 1;
          }
          expect(selectWrapper.state().activeIndex).toBe(0);
        });
        it('should stop at end when arrow down is key up', () => {
          let clicking = 25;
          while (clicking) {
            focusSelect.simulate('keyup', { keyCode: KEY_CODES.DOWN_ARROW });
            clicking = clicking - 1;
          }
          expect(selectWrapper.state().activeIndex).toBe(19);
        });
      });
      describe('with disabled options', () => {
        beforeEach(() => {
          selectWrapper = shallow(
            <Select {...props}>
              <Option disabled value={0} />
              <Option disabled value={1} />
              <Option value={2} />
              <Option disabled value={3} />
              <Option value={4} />
              <Option disabled value={5} />
              <Option value={6} />
              <Option disabled value={7} />
              <Option value={8} selected />
              <Option disabled value={9} />
              <Option disabled value={10} />
              <Option disabled value={11} />
              <Option disabled value={12} />
              <Option value={13} />
              <Option disabled value={14} />
              <Option disabled value={15} />
              <Option disabled value={16} />
              <Option value={17} />
              <Option disabled value={18} />
              <Option disabled value={19} />
            </Select>
          );
          focusSelect = selectWrapper.find('div[role="listbox"]');
          selectWrapper.setState({ open: true });
        });
        it('should skip disabled item before when arrow up is key up', () => {
          focusSelect.simulate('keyup', { keyCode: KEY_CODES.UP_ARROW });
          expect(selectWrapper.state().activeIndex).toBe(6);
        });
        it('should skip disabled item after when arrow down is key up', () => {
          focusSelect.simulate('keyup', { keyCode: KEY_CODES.DOWN_ARROW });
          expect(selectWrapper.state().activeIndex).toBe(13);
        });
        it('should stop at disabled item at start before when arrow up is key up', () => {
          let clicking = 25;
          while (clicking) {
            focusSelect.simulate('keyup', { keyCode: KEY_CODES.UP_ARROW });
            clicking = clicking - 1;
          }
          expect(selectWrapper.state().activeIndex).toBe(2);
        });
        it('should stop at disabled item at end after when arrow down is key up', () => {
          let clicking = 25;
          while (clicking) {
            focusSelect.simulate('keyup', { keyCode: KEY_CODES.DOWN_ARROW });
            clicking = clicking - 1;
          }
          expect(selectWrapper.state().activeIndex).toBe(17);
        });
      });
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Option from '../Option';
import styles from '../Option.css';

describe('Option Component', () => {
  let props;
  beforeEach(() => {
    props = {
      primaryText: 'Option 1',
      value: 'foo'
    };
  });

  describe('componentDidUpdate', () => {
    let parentRef;
    let parentRect;
    let optionRef;
    let optionRect;
    let option;
    let instance;
    let prevProps;

    beforeEach(() => {
      parentRect = { top: 10, bottom: 100 };
      parentRef = {
        scrollTop: 10,
        getBoundingClientRect: jest.fn(() => parentRect)
      };
      props.parentRef = parentRef;
      props.active = true;

      optionRect = { top: 10, bottom: 100 };
      optionRef = {
        getBoundingClientRect: jest.fn(() => optionRect)
      };

      option = shallow(<Option {...props} />);
      instance = option.instance();
      instance.option = optionRef;
      prevProps = {
        active: false
      };
    });

    it('should not adjust the scroll position of the parent if the option is not active', () => {
      option.setProps({ active: false });
      instance.componentDidUpdate(prevProps);
      expect(parentRef.getBoundingClientRect).not.toHaveBeenCalled();
      expect(optionRef.getBoundingClientRect).not.toHaveBeenCalled();
      expect(parentRef.scrollTop).toEqual(10);
    });

    it('should not adjust the scroll position of the parent if the option was previously active', () => {
      prevProps.active = true;
      instance.componentDidUpdate(prevProps);
      expect(parentRef.getBoundingClientRect).not.toHaveBeenCalled();
      expect(optionRef.getBoundingClientRect).not.toHaveBeenCalled();
      expect(parentRef.scrollTop).toEqual(10);
    });

    it('should not adjust the scroll position down if the option is within the parent bounds', () => {
      instance.componentDidUpdate(prevProps);
      expect(parentRef.scrollTop).toEqual(10);
    });

    it('should adjust the scroll position down by the difference if the option bottom is below the parent', () => {
      optionRect.bottom = 110;
      instance.componentDidUpdate(prevProps);
      expect(parentRef.scrollTop).toEqual(20);
    });

    it('should adjust the scroll position up by the difference if the option top is above the parent', () => {
      optionRect.top = 0;
      instance.componentDidUpdate(prevProps);
      expect(parentRef.scrollTop).toEqual(0);
    });
  });

  it('should render with primaryText', () => {
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.find(`.${styles.primaryText}`).length).toEqual(1);
  });

  it('should not render with secondaryText if secondaryText is not supplied', () => {
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.find(`.${styles.secondaryText}`).length).toEqual(0);
  });

  it('should render with secondaryText if secondaryText is supplied', () => {
    props.secondaryText = 'with details';
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.find(`.${styles.secondaryText}`).length).toEqual(1);
  });

  it('should not render as selected if selected property is supplied as false', () => {
    props.selected = false;
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.hasClass(styles.selected)).toBe(false);
  });

  it('should render as selected if selected property is supplied as true', () => {
    props.selected = true;
    const wrapper = shallow(<Option {...props} />);
    expect(wrapper.hasClass(styles.selected)).toBe(true);
  });

  it('should render out children if they are provided', () => {
    props.primaryText = "I shouldn't be here";
    const wrapper = shallow(
      <Option {...props}>
        <span>wut wut</span>
      </Option>
    );
    const primaryTextContainer = wrapper.find(`.${styles.primaryText}`);
    expect(primaryTextContainer.length).toEqual(1);
    expect(primaryTextContainer.text()).toEqual('wut wut');
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});

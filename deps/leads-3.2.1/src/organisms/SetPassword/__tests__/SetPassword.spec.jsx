import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SetPassword from '../../SetPassword';

describe('SetPassword', () => {
  it('renders correctly with validations', () => {
    const tree = renderer
      .create(
        <SetPassword
          validations={[
            {
              content: () => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>at least 8 characters</div>
                </Fragment>
              ),
              passedCheck: false
            },
            {
              content: () => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>an uppercase letter</div>
                </Fragment>
              ),
              passedCheck: true
            },
            {
              content: () => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>a number</div>
                </Fragment>
              ),
              passedCheck: false
            },
            {
              content: () => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>a lowercase letter</div>
                </Fragment>
              ),
              passedCheck: true
            }
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly without validations', () => {
    const tree = renderer.create(<SetPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('showing the password', () => {
    it('should show the password', () => {
      const wrapper = shallow(<SetPassword />);
      wrapper
        .find('[data-test="test"]')
        .at(0)
        .simulate('click');
      const input = wrapper.find('Input').at(0);
      expect(input.props().type).toEqual('text');
    });
    it('should hide the password', () => {
      const wrapper = shallow(<SetPassword />);
      const button = wrapper.find('[data-test="test"]').at(0);
      button.simulate('click');
      let input = wrapper.find('Input').at(0);
      expect(input.props().type).toEqual('text');
      button.simulate('click');
      input = wrapper.find('Input').at(0);
      expect(input.props().type).toEqual('password');
    });
  });

  describe('getting the password', () => {
    it('should call onSubmit on submit', () => {
      const onSubmit = jest.fn();
      const wrapper = shallow(<SetPassword onSubmit={onSubmit} />);
      const form = wrapper.find('form').at(0);
      form.simulate('submit', { preventDefault: () => {} });
      expect(onSubmit.mock.calls[0][0]).toBeUndefined();
    });

    it('should return the password on change', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<SetPassword onChange={onChange} />);
      wrapper.instance().setState(() => ({ password: 'P4ssword' }));
      const input = wrapper.find('Input').at(0);
      input.simulate('change', { target: { value: 'foo' } });
      expect(onChange.mock.calls[0][0]).toBe('foo');
    });
  });

  /* This is being move out
  describe('validating the password', () => {
    let onChange;
    let wrapper;
    let input;
    beforeEach(() => {
      onChange = jest.fn();
      wrapper = shallow(<SetPassword onChange={onChange} />);
      input = wrapper.find('Input').at(0);
    });
    it('should have a number', () => {
      input.simulate('change', { target: { value: 'foo' } });
      expect(onChange.mock.calls[0][0]).toBe('foo');
      expect(wrapper.state().hasNumber).toBe(false);
      input.simulate('change', { target: { value: 'foo1' } });
      expect(onChange.mock.calls[1][0]).toBe('foo1');
      expect(wrapper.state().hasNumber).toBe(true);
    });
    it('should have eight characters', () => {
      input.simulate('change', { target: { value: 'foo1' } });
      expect(onChange.mock.calls[0][0]).toBe('foo1');
      expect(wrapper.state().hasCharacterCount).toBe(false);
      input.simulate('change', { target: { value: 'foo1awef4' } });
      expect(onChange.mock.calls[1][0]).toBe('foo1awef4');
      expect(wrapper.state().hasCharacterCount).toBe(true);
    });
    it('should have an upper case character', () => {
      input.simulate('change', { target: { value: 'foo1' } });
      expect(onChange.mock.calls[0][0]).toBe('foo1');
      expect(wrapper.state().hasUppercase).toBe(false);
      input.simulate('change', { target: { value: 'foo1A' } });
      expect(onChange.mock.calls[1][0]).toBe('foo1A');
      expect(wrapper.state().hasUppercase).toBe(true);
    });
    it('should have a lower case character', () => {
      input.simulate('change', { target: { value: 'FOO1' } });
      expect(onChange.mock.calls[0][0]).toBe('FOO1');
      expect(wrapper.state().hasLowercase).toBe(false);
      input.simulate('change', { target: { value: 'FOO1a' } });
      expect(onChange.mock.calls[1][0]).toBe('FOO1a');
      expect(wrapper.state().hasLowercase).toBe(true);
    });
  });
  */
});

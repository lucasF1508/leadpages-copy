import React from 'react';
import { mount } from 'enzyme';
import Feedback from '../Feedback';

jest.useFakeTimers();

describe('Feedback', () => {
  let wrapper;
  let unmountCallback;
  let onSubmitFeedback;
  const errorSelector = { 'data-qa-selector': 'error-message' };

  beforeEach(() => {
    unmountCallback = jest.fn();
    onSubmitFeedback = jest.fn();
    onSubmitFeedback.mockReturnValue(Promise.resolve({ status: 201 }));
    wrapper = mount(
      <Feedback unmount={unmountCallback} onSubmitFeedback={onSubmitFeedback} />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toBeDefined();
    const toolTipWrapper = wrapper.find('Tooltip');
    expect(toolTipWrapper).toBeDefined();
    expect(toolTipWrapper.text().includes('Feedback')).toBe(true);
  });

  it('should render a text field and "Next" button', () => {
    expect(wrapper.find('Input')).toBeDefined();
    expect(wrapper.find('Input').props().inputComponent).toBe('textarea');
    expect(wrapper.find('textarea')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
    ).toBe('Next');
  });

  it('should render two drop downs and "Send Message" button after next is clicked with valid feedback', () => {
    const USER_INPUT = 'We love this app.';
    const textarea = wrapper.find('textarea').at(0);
    textarea.simulate('change', { target: { value: USER_INPUT } });
    expect(wrapper.state().feedback).toBe(USER_INPUT);
    const button = wrapper.find('button').at(1);
    button.simulate('click');
    expect(wrapper.find('Select').length).toBe(2);
    expect(wrapper.find('button')).toBeDefined();
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
        .includes('Send Message')
    ).toBe(true);
  });

  it('should require some text to be added', () => {
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(wrapper.find(errorSelector).text()).toBe(
      'Please provide some feedback.'
    );
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
        .includes('Send Message')
    ).toBe(false);
  });

  it('should limit the number of characters in the text field to 250', () => {
    let USER_INPUT = '';
    let numOfCharacters = 251;
    while (numOfCharacters) {
      USER_INPUT = `${USER_INPUT}a`;
      numOfCharacters -= 1;
    }
    const textarea = wrapper.find('textarea').at(0);
    textarea.simulate('change', { target: { value: USER_INPUT } });
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(wrapper.find(errorSelector).text()).toBe(
      "You're over the 250 character limit."
    );
    expect(
      wrapper
        .find('button')
        .at(1)
        .text()
        .includes('Send Message')
    ).toBe(false);
  });

  it('should show an error message warning that you are close to character limit', () => {
    let USER_INPUT = '';
    let numOfCharacters = 231;
    while (numOfCharacters) {
      USER_INPUT = `${USER_INPUT}a`;
      numOfCharacters -= 1;
    }
    const textarea = wrapper.find('textarea').at(0);
    textarea.simulate('change', { target: { value: USER_INPUT } });
    expect(wrapper.find(errorSelector).text()).toBe('231 of 250 left.');
  });

  it('should show an error message warning that you used many characters', () => {
    let USER_INPUT = '';
    let numOfCharacters = 251;
    while (numOfCharacters) {
      USER_INPUT = `${USER_INPUT}a`;
      numOfCharacters -= 1;
    }
    const textarea = wrapper.find('textarea').at(0);
    textarea.simulate('change', { target: { value: USER_INPUT } });
    expect(wrapper.find(errorSelector).text()).toBe(
      "You're over the 250 character limit."
    );
  });

  describe('clicking send message button', () => {
    beforeEach(() => {
      const USER_INPUT = 'We love this app.';
      const textarea = wrapper.find('textarea').at(0);
      textarea.simulate('change', { target: { value: USER_INPUT } });
      expect(wrapper.state().feedback).toBe(USER_INPUT);
      wrapper
        .find('button')
        .at(1)
        .simulate('click');
    });

    it('should render an error message if both dropdowns are not selected and the submit button is clicked', () => {
      wrapper
        .find('button')
        .at(1)
        .simulate('click');
      expect(wrapper.find(errorSelector).text()).toBe(
        'You need to select a type and category.'
      );
    });

    describe('selecting Suggestions and Integrations', () => {
      beforeEach(() => {
        const optionSuggestion = wrapper.find('Option').at(0);
        optionSuggestion.simulate('click');
        expect(wrapper.state().feedbackType).toBe('Suggestion');
        const optionIntegrations = wrapper.find('Option').at(3);
        optionIntegrations.simulate('click');
        expect(wrapper.state().feedbackProductCategory).toBe('Integrations');
      });

      it('should render a thank you message after send message is clicked with selected options', done => {
        wrapper
          .find('button')
          .at(1)
          .simulate('click');
        setImmediate(() => {
          wrapper.update();
          expect(
            wrapper
              .find('h5')
              .at(0)
              .text()
          ).toBe('Feedback sent!');
          expect(
            wrapper
              .find('p')
              .at(0)
              .text()
          ).toBe(
            'Thanks so much for sharing yourthoughts on how we can improve.'
          );
          done();
        });
      });

      it('should send the request after send message is clicked', () => {
        wrapper
          .find('button')
          .at(1)
          .simulate('click');
        expect(onSubmitFeedback.mock.calls.length).toBe(1);
      });

      it('should render a generic try again later if no error is provided', done => {
        onSubmitFeedback.mockReturnValue(Promise.resolve({ status: 408 }));
        wrapper
          .find('button')
          .at(1)
          .simulate('click');
        expect(onSubmitFeedback.mock.calls.length).toBe(1);
        setImmediate(() => {
          wrapper.update();
          const errorMessage = wrapper
            .find(errorSelector)
            .at(0)
            .text();
          expect(errorMessage).toBe('Oops, please try again later.');
          done();
        });
      });

      it('should render a server error message if provided', () => {
        const serverErrorMessage = 'Feedback was too long.';
        onSubmitFeedback.mockReturnValue(
          Promise.resolve({ status: 400, message: serverErrorMessage })
        );
        wrapper
          .find('button')
          .at(1)
          .simulate('click');
        expect(onSubmitFeedback.mock.calls.length).toBe(1);
        expect(serverErrorMessage).toBe(serverErrorMessage);
      });

      it('should execute unmount callback after 5 seconds of displaying thank you', done => {
        wrapper
          .find('button')
          .at(1)
          .simulate('click');
        setImmediate(() => {
          wrapper.update();
          jest.runAllTimers();
          expect(unmountCallback.mock.calls.length).toBe(1);
          done();
        });
      });
    });
  });

  it('should execute unmount when you click close icon', () => {
    wrapper
      .find('IconButton')
      .at(0)
      .simulate('click');
    expect(unmountCallback.mock.calls.length).toBe(1);
  });
});

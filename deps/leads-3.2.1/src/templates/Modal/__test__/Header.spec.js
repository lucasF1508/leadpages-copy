import React from 'react';
import { shallow, mount } from 'enzyme';
import ModalHeader from '../Header';
import { headerTitleClassName } from '../Modal.css';

describe('Modal Header', () => {
  it('should render a basic header with title', () => {
    const testTitle = 'Ringo Star';
    const wrapper = shallow(<ModalHeader title={testTitle} />);
    const modalTitle = wrapper.contains(
      <h1 className={headerTitleClassName}> Ringo Star </h1>
    );

    expect(modalTitle).toEqual(true);
  });

  it('should render close button, given close function', () => {
    const onClose = jest.fn();
    const wrapper = shallow(<ModalHeader onClose={onClose} />);
    const closeButton = wrapper.find({ 'data-qa-selector': 'close-button' });

    expect(closeButton).toHaveLength(1);
  });

  it('should call close button on click', () => {
    const onClose = jest.fn();
    const wrapper = shallow(<ModalHeader onClose={onClose} />);
    const closeButton = wrapper.find({ 'data-qa-selector': 'close-button' });

    closeButton.simulate('click');

    expect(onClose.mock.calls).toHaveLength(1);
  });
});

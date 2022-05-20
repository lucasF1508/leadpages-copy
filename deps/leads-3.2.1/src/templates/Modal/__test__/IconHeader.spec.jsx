import React from 'react';
import { shallow } from 'enzyme';
import ModalIconHeader from '../IconHeader';

const selectors = {
  CLOSE: { 'data-qa-selector': 'close-button' },
  TITLE: { 'data-qa-selector': 'title' },
  ICON: { 'data-qa-selector': 'icon' }
};

describe('Modal Header', () => {
  let props;
  let modalIconHeader;

  beforeEach(() => {
    props = {
      iconConfig: {
        color: 'hotpink',
        backgroundColor: 'teal',
        icon: 'check'
      },
      title: 'Congrats!',
      onClose: jest.fn()
    };

    modalIconHeader = shallow(<ModalIconHeader {...props} />);
  });

  it('should render a basic header with title', () => {
    expect(modalIconHeader.find(selectors.TITLE).text()).toEqual('Congrats!');
  });

  it('should render the provided icon', () => {
    expect(
      modalIconHeader.find(selectors.ICON).hasClass('lp-icon-check')
    ).toEqual(true);
  });

  it('should call close button on click', () => {
    const closeButton = modalIconHeader.find(selectors.CLOSE);
    expect(modalIconHeader.find(selectors.CLOSE)).toHaveLength(1);

    closeButton.simulate('click');
    expect(props.onClose).toHaveBeenCalled();
  });
});

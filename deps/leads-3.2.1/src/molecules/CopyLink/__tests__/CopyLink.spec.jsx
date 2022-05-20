import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import CopyLink from '../CopyLink';

const selectors = {
  COPY_LINK: { 'data-qa-selector': 'copy-link' },
  COPY_BUTTON: { 'data-qa-selector': 'copy-button' },
  COPY_LINK_TEXT: { 'data-qa-selector': 'copy-link-text' },
};

describe('CopyLink', () => {
  let props;
  let copyLink;

  document.execCommand = jest.fn(() => true);

  beforeEach(() => {
    props = {
      linkToCopy: 'https://mycoollink.com',
    };

    copyLink = mount(<CopyLink {...props} />);
  });

  it('should render a link to copy', () => {
    const link = copyLink.find(selectors.COPY_LINK).at(1);

    expect(link.text()).toEqual(props.linkToCopy);
    expect(link.props().href).toEqual(props.linkToCopy);
  });

  it('should copy a url to clipboard', () => {
    copyLink.find(selectors.COPY_BUTTON).simulate('click');

    expect(document.execCommand).toHaveBeenCalled();
  });

  it('should update the text on copy success, and reset it after 1000 ms', () => {
    jest.useFakeTimers();
    copyLink.find(selectors.COPY_BUTTON).simulate('click');
    expect(copyLink.find(selectors.COPY_LINK_TEXT).text()).toEqual('Copied!');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(copyLink.find(selectors.COPY_LINK_TEXT).text()).toEqual('Copy Link');
  });

  it('should clear out the interval if the modal is unmounted before the copy text is reset', () => {
    jest.useFakeTimers();
    copyLink.find(selectors.COPY_BUTTON).simulate('click');
    expect(copyLink.find(selectors.COPY_LINK_TEXT).text()).toEqual('Copied!');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    copyLink.unmount();
    expect(window.clearInterval).toHaveBeenCalled();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import SharePage from '../SharePage';

const selectors = {
  SHARE_URL: { 'data-qa-selector': 'share-page-url' },
  SERVICE_TERMS: { 'data-qa-selector': 'share-page-service-terms' },
  DONE: { 'data-qa-selector': 'share-page-done' }
};

describe('SharePage', () => {
  let props;
  let sharePage;

  beforeEach(() => {
    props = {
      isOpen: true,
      onClose: jest.fn(),
      shareUrl: 'https://lp-share-url.com/12345',
      serviceTermsUrl: 'https://lp.net/terms'
    };

    sharePage = shallow(<SharePage {...props} />);
  });

  it('should display a link to view and copy the share url', () => {
    expect(sharePage.find(selectors.SHARE_URL).props().linkToCopy).toEqual(
      props.shareUrl
    );
  });

  it('should display a link to view the terms of service', () => {
    expect(sharePage.find(selectors.SERVICE_TERMS).props().href).toEqual(
      props.serviceTermsUrl
    );
  });

  it('should display a button to close the modal', () => {
    sharePage.find(selectors.DONE).simulate('click');
    expect(props.onClose).toHaveBeenCalled();
  });
});

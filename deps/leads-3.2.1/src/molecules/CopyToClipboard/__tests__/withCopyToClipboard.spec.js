import React from 'react';
import { mount } from 'enzyme';

import withCopyToClipboard from '../../CopyToClipboard/withCopyToClipboard';
import Button from '../../../atoms/Button';
const CopyTextButton = withCopyToClipboard(Button);

describe('<Pill />', () => {
  const onCopySuccess = jest.fn();
  const onCopyError = jest.fn();

  it('should render an empty pill', () => {
    const wrapper = mount(
      <CopyTextButton
        textToCopy={'Some String'}
        onCopySuccess={onCopySuccess}
        onCopyError={onCopyError}
      />
    );

    expect(wrapper).toBeDefined();
  });
});

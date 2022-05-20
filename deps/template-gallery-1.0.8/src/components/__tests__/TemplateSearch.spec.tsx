import React from 'react';
import { screen, renderWithTheme } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TemplateSearch, { TemplateSearchProps } from '../TemplateSearch';

describe('TemplateSearch', () => {
  let props: TemplateSearchProps;

  beforeEach(() => {
    props = {
      inputRef: { current: { value: '' } } as React.MutableRefObject<HTMLInputElement>,
      onChange: jest.fn(),
      onClear: jest.fn(),
      disabled: false,
    };
  });

  it('should render a text field that calls onChange when the user types', () => {
    renderWithTheme(<TemplateSearch {...props} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox', { name: 'Template Search' }), 'Real');
    expect(props.onChange).toHaveBeenCalled();
  });

  it('should display a clear icon when the input has a value', () => {
    (props.inputRef.current as HTMLInputElement).value = 'Real';
    renderWithTheme(<TemplateSearch {...props} />);

    userEvent.click(screen.getByRole('button'));
    expect(props.onClear).toHaveBeenCalled();
  });
});

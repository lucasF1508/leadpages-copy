import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextField from '@material-ui/core/TextField';

import { ProductThemeProvider } from '../../../index';
import InputLabelWithTooltip from '../';

const getComponent = props => (
  <ProductThemeProvider>
    <InputLabelWithTooltip {...props} />
  </ProductThemeProvider>
);

describe('InputLabelWithTooltip', () => {
  let rerender;
  let props;

  beforeEach(() => {
    props = {
      label: 'MY LABEL',
      tooltip: 'My tooltip',
    };
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a label and tooltip', () => {
    render(getComponent(props));

    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByTitle(props.tooltip)).toBeInTheDocument();
  });

  it('should not wrap in a <label> element by default', () => {
    render(getComponent(props));

    expect(screen.getByText(props.label).closest('label')).toBeNull();
  });

  it('should wrap in a <label> element if renderInputLabelEl is true', () => {
    props.renderInputLabelEl = true;
    render(getComponent(props));

    expect(screen.getByText(props.label).closest('label')).not.toBeNull();
  });

  it('should render an asterisk on the label if the field is required', () => {
    props.required = true;
    render(getComponent(props));

    expect(screen.getByText(`${props.label} *`)).toBeInTheDocument();
  });
});

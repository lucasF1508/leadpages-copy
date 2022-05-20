import React from 'react';
import { screen, renderWithTheme, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { makeTemplate } from '../../__fixtures__/template';
import { Template } from '../../types/mandrel';
import { makeUiTemplate } from '../../lib/template-ui-helpers';

import TemplateThumbnail, { TemplateThumbailProps } from '../TemplateThumbnail';

describe('TemplateThumbnail', () => {
  let template: Template;
  let props: TemplateThumbailProps;

  beforeEach(() => {
    template = makeTemplate();

    props = {
      onPreviewTemplate: jest.fn(),
      onSelectTemplate: jest.fn(),
      template: makeUiTemplate(template),
    };
  });

  it('should render the template thumbnail image', () => {
    renderWithTheme(<TemplateThumbnail {...props} />);

    expect(screen.getByRole('img', { name: template.template.name })).toHaveAttribute(
      'src',
      template.template.thumbnailUrlWebp,
    );
  });

  it('should include a "New" badge for templates tagged with new', () => {
    template.template.tags.push('new');
    renderWithTheme(<TemplateThumbnail {...props} />);

    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('should not include a "New" badge for templates not tagged with new', () => {
    renderWithTheme(<TemplateThumbnail {...props} />);

    expect(screen.queryByText('New')).not.toBeInTheDocument();
  });

  it('should display preview action on hover', async () => {
    renderWithTheme(<TemplateThumbnail {...props} />);

    const img = screen.getByRole('img', { name: template.template.name });

    fireEvent.load(img);
    userEvent.hover(img);

    userEvent.click(screen.getByRole('button', { name: 'Preview' }));
    expect(props.onPreviewTemplate).toHaveBeenCalled();
  });

  it('should not display Start Building action on hover if onSelectTemplate prop is not provided', async () => {
    props.onSelectTemplate = undefined;
    renderWithTheme(<TemplateThumbnail {...props} />);

    const img = screen.getByRole('img', { name: template.template.name });

    fireEvent.load(img);
    userEvent.hover(img);

    expect(screen.queryByRole('button', { name: 'Start Building' })).not.toBeInTheDocument();
  });

  it('should display Start Building action on hover if onSelectTemplate prop is provided', async () => {
    renderWithTheme(<TemplateThumbnail {...props} />);

    const img = screen.getByRole('img', { name: template.template.name });

    fireEvent.load(img);
    userEvent.hover(img);

    userEvent.click(screen.getByRole('button', { name: 'Start Building' }));
    expect(props.onSelectTemplate).toHaveBeenCalled();
  });
});

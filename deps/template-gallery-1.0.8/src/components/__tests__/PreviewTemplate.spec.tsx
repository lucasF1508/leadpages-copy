import React from 'react';
import { screen, renderWithTheme, fireEvent } from '@testing-library/react';

import PreviewTemplate, {
  PreviewTemplateProps,
  Device,
  TEMPLATE_PREVIEW_HASH,
} from '../PreviewTemplate';

describe('PreviewTemplate', () => {
  let props: PreviewTemplateProps;

  beforeEach(() => {
    props = {
      previewUrl:
        'https://api.leadpages.io/template/v2/templates/wszPGCvaqxemzfc6crzA5F/preview.html',
      device: Device.Desktop,
    };
  });

  it('should render the template thumbnail image', () => {
    renderWithTheme(<PreviewTemplate {...props} />);

    expect(screen.getByTitle('Preview')).toHaveAttribute(
      'src',
      props.previewUrl + TEMPLATE_PREVIEW_HASH,
    );
  });

  it('should display a progress spinner before the iframe src has loaded', () => {
    renderWithTheme(<PreviewTemplate {...props} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    const iframe = screen.getByTitle('Preview');
    fireEvent.load(iframe);
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
});

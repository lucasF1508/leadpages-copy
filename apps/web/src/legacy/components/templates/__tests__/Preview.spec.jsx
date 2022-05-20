import React from 'react';
import { renderWithTheme, waitFor } from '@testing-library/react';
import MandrelApi from '@lp/template-gallery/dist/mandrel-api';

import { TemplateKind } from '../../../constants/templates';
import Preview from '../Preview';

jest.mock('gatsby', () => {
  const originalModule = jest.requireActual('gatsby');
  return {
    __esModule: true,
    ...originalModule,
    graphql: jest.fn().mockReturnValue({}),
    useStaticQuery: jest.fn().mockReturnValue({
      planData: {
        trialPlans: {
          month: {
            pro: {
              id: 'fake-plan-id-123',
            },
          },
        },
      },
    }),
  };
});

describe('Preview', () => {
  let props;
  let template;

  beforeEach(() => {
    props = {
      templateId: 'preview/id-1',
      galleryRoot: '/',
      navigate: jest.fn(),
    };

    template = {
      template: {
        name: 'My Wedding Template',
        previewUrl: 'https://my-preview-url.com/preview/id-1',
      },
      _meta: {
        id: 'id-1',
      },
      kind: TemplateKind.LandingPage,
    };

    jest.spyOn(MandrelApi.prototype, 'getTemplateById').mockResolvedValue(template);
  });

  afterEach(() => {
    MandrelApi.prototype.getTemplateById.mockClear();
  });

  it('should call mandrelApi to fetch the preview template if the selected template is null', async () => {
    renderWithTheme(<Preview {...props}>Preview</Preview>);

    await waitFor(() =>
      expect(MandrelApi.prototype.getTemplateById).toHaveBeenCalledWith('preview/id-1'),
    );
  });

  it('should redirect to the gallery root if getTemplateById fails', async () => {
    jest.spyOn(MandrelApi.prototype, 'getTemplateById').mockRejectedValue(new Error());

    renderWithTheme(<Preview {...props}>Preview</Preview>);

    await waitFor(() =>
      expect(MandrelApi.prototype.getTemplateById).toHaveBeenCalledWith('preview/id-1'),
    );
    expect(props.navigate).toHaveBeenCalledWith(props.galleryRoot, { replace: true });
  });

  it('does not call mandrelApi if the selected template is provided', () => {
    props.previewTemplate = template;

    renderWithTheme(<Preview {...props}>Preview</Preview>);
    expect(MandrelApi.prototype.getTemplateById).not.toHaveBeenCalled();
  });
});

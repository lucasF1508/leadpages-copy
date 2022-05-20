import cloneDeep from 'lodash.clonedeep';
import uuid from '../lib/uuid';

import {
  Template,
  TemplateKind,
  GetTemplateByIdResponse,
  GetTemplatesResponse,
} from '../types/mandrel';

const mockTemplate: Template = {
  _meta: {
    id: 'GeqyH7JHwxvapeXjpMW9ZM',
    uri: 'https://api-test.leadpages.io/template/v2/leadpages/GeqyH7JHwxvapeXjpMW9ZM',
    created: '2019-01-16T16:53:53+00:00',
    updated: '2020-05-14T20:13:06+00:00',
  },
  kind: TemplateKind.Leadpage,
  template: {
    name: 'Comprehensive Checkout Page',
    conversionRate: 0.0,
    uses: 0,
    tags: [
      'button',
      'headline',
      'image',
      'leadbox',
      'line',
      'multiple-leadbox',
      'optin-form',
      'photo',
      'space',
      'text',
    ],
    categories: ['checkout', 'minisite', 'sales'],
    releaseDate: '2017-07-17T15:41:18+00:00',
    sortKey: 999999,
    enabled: true,
    currentEdition: 'C4EPt52Ym4yATioXUbzyLP',
    previewUrl:
      'https://api-test.leadpages.io/template/v2/templates/GeqyH7JHwxvapeXjpMW9ZM/preview.html',
    thumbnailUrl:
      'https://storage.googleapis.com/lp-template-assets-test/screenshots%2FGeqyH7JHwxvapeXjpMW9ZM-552x316.jpg?cb=6044867883419584244',
    thumbnailUrlWebp:
      'https://storage.googleapis.com/lp-template-assets-test/screenshots%2FGeqyH7JHwxvapeXjpMW9ZM-552x316.webp?cb=6044867883419584244',
    thumbnailAspect: null,
    legacyId: '5073061428723712',
  },
};

const mockGetTemplateByIdResponse: GetTemplateByIdResponse = {
  ...mockTemplate,
  _status: {
    code: 200,
  },
  _meta: {
    ...mockTemplate._meta,
  },
};

export const makeTemplate = (): Template => {
  const template = cloneDeep(mockTemplate);
  template._meta.id = uuid();
  return template;
};

export const makeTemplateResponse = (): GetTemplateByIdResponse =>
  cloneDeep(mockGetTemplateByIdResponse);
export const makeTemplatesResponse = (num: number): GetTemplatesResponse => {
  return {
    _meta: {
      count: num,
      limit: 20,
      cursor: num.toString(),
      total: num,
    },
    _status: {
      code: 200,
    },
    _items: Array(num)
      .fill(undefined)
      .map(() => makeTemplate()),
  };
};

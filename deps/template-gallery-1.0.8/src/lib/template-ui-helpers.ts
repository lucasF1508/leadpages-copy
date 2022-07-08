import uuid from './uuid';

import { Template, TemplateKind, TemplateModel, Meta } from '../types/mandrel';

export type UiTemplate = {
  kind: TemplateKind;
  template: Partial<TemplateModel>;
  _meta: Partial<Meta>;
  ui: {
    guid: string;
    isPlaceholder: boolean;
  };
};

export const makePlaceholderTemplates = (kind: TemplateKind, numLoading: number): UiTemplate[] =>
  [...Array(numLoading)].map((_, index) => ({
    template: {
      tags: [],
    },
    _meta: {
      id: `placholder-${index}`,
    },
    kind,
    ui: {
      guid: uuid(),
      isPlaceholder: true,
    },
  }));

export const makeUiTemplate = (template: Template): UiTemplate => {
  return {
    ...template,
    ui: {
      guid: uuid(),
      isPlaceholder: false,
    },
  };
};

export const replacePlaceholderTemplates = (
  templates: UiTemplate[],
  nextPageTemplates: Template[],
): UiTemplate[] => {
  if (nextPageTemplates.length > templates.length) {
    return nextPageTemplates.map(makeUiTemplate);
  }
  let idx = 0;

  return templates.map((template) => {
    if (template.ui.isPlaceholder) {
      const realTemplate = nextPageTemplates[idx];
      idx += 1;
      return {
        template: realTemplate.template,
        _meta: realTemplate._meta,
        kind: realTemplate.kind,
        ui: {
          ...template.ui,
          isPlaceholder: false,
        },
      };
    }
    return template;
  });
};

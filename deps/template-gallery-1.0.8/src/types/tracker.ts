import { UiTemplate } from '../lib/template-ui-helpers';

type TrackValueFn = ({ value }: { value: string }) => null;

export interface ButtonEvents {
  onUpdateOrderBy: TrackValueFn;
  onUpdateSearch: TrackValueFn;
  onUpdateFilter: ({ value, kind }: { value: string; kind: string }) => null;
  onToggleSidebar: ({ isOpen }: { isOpen: boolean }) => null;
  onOpenFilters: ({ kind }: { kind: string }) => null;
}

// Calls mixpanel.trackLinks function. Must be run when the link is already present on the page (and prior to clicking)
export interface LinkEvents {
  watchSelectTemplateLink: (selector: string, template: UiTemplate) => void;
  watchPreviewTemplateLink: (selector: string, template: UiTemplate) => void;
  watchLegacyLink: (selector: string) => void;
}

export type Tracker = Partial<ButtonEvents & LinkEvents>;

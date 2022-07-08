import React from 'react';
import { UiTemplate } from '../lib/template-ui-helpers';
export declare type TemplateThumbailProps = {
    template: UiTemplate;
    onPreviewTemplate: (template: UiTemplate) => void;
    onSelectTemplate?: (template: UiTemplate) => void;
};
declare const TemplateThumbnail: React.FC<TemplateThumbailProps>;
export default TemplateThumbnail;

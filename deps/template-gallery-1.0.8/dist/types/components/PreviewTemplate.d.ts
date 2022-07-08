import React from 'react';
export declare enum Device {
    'Mobile' = "mobile",
    'Desktop' = "desktop"
}
export declare const TEMPLATE_PREVIEW_HASH = "#template-preview";
export interface PreviewTemplateProps {
    previewUrl: string;
    device: Device;
}
declare const PreviewTemplate: React.FC<PreviewTemplateProps>;
export default PreviewTemplate;

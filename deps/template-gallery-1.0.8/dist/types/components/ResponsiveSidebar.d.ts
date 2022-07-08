import React from 'react';
import { TemplateKind } from '../types/mandrel';
import { TemplateActionCreators, TemplateState } from '../hooks/useTemplateState';
interface ResponsiveSidebarProps {
    state: TemplateState;
    actions: TemplateActionCreators;
    kind: TemplateKind;
    drawerPaperRef: React.MutableRefObject<HTMLDivElement>;
    sidebarButtonRef?: React.MutableRefObject<HTMLButtonElement | null>;
    drawerClass?: string;
    drawerPaperClass?: string;
    sidebarButtonClass?: string;
}
declare const ResponsiveSidebar: React.FC<ResponsiveSidebarProps>;
export default ResponsiveSidebar;

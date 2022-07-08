import React from 'react';
export declare type SidebarToggle = {
    isOpen: boolean;
    onToggleSidebar: () => void;
    buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
    buttonClassName?: string;
};
export declare const SidebarToggle: React.FC<SidebarToggle>;
export default SidebarToggle;

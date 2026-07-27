export interface ScrollTabItem {
    label: string;
    targetId: string;
}

export interface ScrollTabsProps {
    items: ScrollTabItem[];
    className?: string;
    activeClassName?: string;
    scrollOffset?: number;
}

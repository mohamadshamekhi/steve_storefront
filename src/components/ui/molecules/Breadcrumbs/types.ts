export interface ManualBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  activeLabelClassName?: string
  labelClassName?: string
  iconClassName?: string
}

export type BreadcrumbItem =
  | {
    label: string;
    href: string;
    icon?: React.ReactNode;
    isCurrent?: false;
  }
  | {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    isCurrent: true;
  };

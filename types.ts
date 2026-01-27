
export interface ServiceTier {
  title: string;
  tag: string;
  whoFor: string;
  solves: string;
  deliverables: string[];
  cta: string;
  isPopular?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

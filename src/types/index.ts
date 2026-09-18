export interface StatItem {
  id: string;
  count: string;
  label: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  linkText: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  description: string;
}

export interface QuickLink {
  id: string;
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  isPrimary?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

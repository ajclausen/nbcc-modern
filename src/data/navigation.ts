export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Beliefs', href: '/beliefs' },
  { label: 'Events', href: '/events' },
  { label: 'Giving', href: '/giving' },
  { label: 'Livestream', href: '/livestream' },
  { label: 'Visit', href: '/visit', highlight: true },
];

export const footerNavigation = {
  connect: [
    { label: 'Plan Your Visit', href: '/visit' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Livestream', href: '/livestream' },
    { label: 'Give', href: '/giving' },
  ],
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'What We Believe', href: '/beliefs' },
    { label: 'Events', href: '/events' },
  ],
};

export const getActiveNavItem = (pathname: string): string => {
  const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (path === '') return '/';
  return path;
};

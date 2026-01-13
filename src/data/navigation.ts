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
  {
    label: 'Events',
    href: '/events',
    children: [
      { label: 'All Events', href: '/events' },
      { label: 'Kids Church', href: '/events/kids-church' },
      { label: 'Youth Group', href: '/events/youth-group' },
      { label: 'Bible Bowl', href: '/events/bible-bowl' },
      { label: 'Food Pantry', href: '/events/food-pantry' },
    ],
  },
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

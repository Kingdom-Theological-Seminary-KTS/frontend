import type { StatItem, ProgramItem, NewsItem, EventItem, QuickLink, Testimonial } from '../types';

export const statsData: StatItem[] = [
  { id: '1', count: '12K+', label: 'Students Enrolled' },
  { id: '2', count: '150+', label: 'Expert Faculty' },
  { id: '3', count: '80+', label: 'Programs Offered' },
  { id: '4', count: '98%', label: 'Graduate Success' },
];

export const programsData: ProgramItem[] = [
  {
    id: '1',
    title: 'Business Administration',
    description: 'Master leadership, strategy, and global business dynamics.',
    iconName: 'Building2',
  },
  {
    id: '2',
    title: 'Computer Science',
    description: 'Learn software engineering, AI, and cutting-edge tech.',
    iconName: 'Laptop',
  },
  {
    id: '3',
    title: 'Engineering',
    description: 'Solve real-world problems through innovation & technology.',
    iconName: 'Cpu',
  },
  {
    id: '4',
    title: 'Data Analytics',
    description: 'Turn complex data into actionable business intelligence.',
    iconName: 'BarChart3',
  },
  {
    id: '5',
    title: 'Psychology',
    description: 'Explore human behavior, cognition, and mental health.',
    iconName: 'Brain',
  },
];

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Anti University Hosts Global Education Summit 2025',
    date: 'May 12, 2025',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800',
    linkText: 'Read More',
  },
  {
    id: '2',
    title: 'New Research Center for Innovation Launched',
    date: 'May 08, 2025',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    linkText: 'Read More',
  },
  {
    id: '3',
    title: 'Students Win Awards at National Competition',
    date: 'Apr 28, 2025',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    linkText: 'Read More',
  },
];

export const eventsData: EventItem[] = [
  {
    id: '1',
    day: '22',
    month: 'MAY',
    title: 'Career Fair 2025',
    description: 'Connect with top companies and explore career opportunities.',
  },
  {
    id: '2',
    day: '05',
    month: 'JUN',
    title: 'International Education Week',
    description: 'Celebrating cultures and global learning experiences.',
  },
  {
    id: '3',
    day: '18',
    month: 'JUN',
    title: 'Alumni Networking Night',
    description: 'Reconnect and expand your professional network.',
  },
];

export const quickLinksData: QuickLink[] = [
  { id: '1', label: 'Undergraduate Admissions', href: '#admissions' },
  { id: '2', label: 'Graduate Admissions', href: '#admissions' },
  { id: '3', label: 'Scholarships', href: '#scholarships' },
  { id: '4', label: 'Financial Aid', href: '#aid' },
  { id: '5', label: 'Academic Calendar', href: '#calendar' },
  { id: '6', label: 'Library Resources', href: '#library' },
  { id: '7', label: 'Student Portal', href: '#portal' },
  { id: '8', label: 'Contact Us', href: '#contact' },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Sophia Martinez',
    role: 'Marketing Specialist',
    quote: 'Anti gave me the confidence and skills to pursue my passion and build a career I love.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    isPrimary: false,
  },
  {
    id: '2',
    name: 'James Anderson',
    role: 'Software Engineer',
    quote: "The professors truly care about your success. Anti is more than a university; it's a family.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    isPrimary: true,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'International Relations',
    quote: 'Thanks to Anti, I had the opportunity to study abroad and grow beyond borders.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300',
    isPrimary: false,
  },
];

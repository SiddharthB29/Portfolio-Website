/**
 * Single source of truth for all site content.
 * Swap text here — sections read from this file only.
 */

export interface Project {
  name: string;
  description: string;
  href: string;
  repoHref?: string;
  image: string;
  caption: string;
  tags: string[];
  /** extra note under the card, e.g. status */
  note?: string;
}

export interface SkillGroup {
  index: string;
  title: string;
  skills: string[];
}

export interface Social {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export const profile = {
  name: 'Siddharth Bharti',
  firstName: 'Siddharth',
  roles: ['Backend Developer'],
  tagline: {
    plain: 'Crazy ideas,',
    hand: 'compiled clean.',
  },
  location: 'Bengaluru • GMT +5:30',
  availability: 'OPEN TO WORK',
} as const;

export const projects: Project[] = [
  {
    name: 'HireNest',
    description: 'Campus hiring & placement management — job posts, drive tracking and candidate pipelines for college placement cells.',
    href: 'https://hirenest-rho.vercel.app/',
    repoHref: 'https://github.com/SiddharthB29/HireNest',
    image: 'hirenest',
    caption: 'campus hiring, managed.',
    tags: ['placement drives', 'pipelines', 'full-stack'],
  },
];

export const stats = {
  handle: '@siddharthbhartii',
  problemsSolved: 500,
  maxContestRating: 1523,
  profileUrl: 'https://leetcode.com/u/siddharthbhartii/',
  stamp: 'GRIND VERIFIED',
} as const;

export const skillGroups: SkillGroup[] = [
  {
    index: '01',
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    index: '02',
    title: 'Frameworks & Tech',
    skills: ['Spring Boot', 'React.js', 'Vite', 'REST APIs', 'Django', 'FastAPI'],
  },
  {
    index: '03',
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    index: '04',
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    index: '05',
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export const beliefs: { text: string; variant: 'lined' | 'graph' | 'kraft' }[] = [
  { text: 'Weird ideas,\nworking code.', variant: 'lined' },
  { text: 'Simple scales.\nClever fails.', variant: 'graph' },
  { text: 'Ship.\nLearn.\nRepeat.', variant: 'kraft' },
];

export const checklist: string[] = [
  'building things end-to-end',
  'product-minded teams',
  'hard problems, honest feedback',
];

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/SiddharthB29', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharthbhartii/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:siddharthbharti@outlook.com', icon: 'mail' },
];

export const email = 'siddharthbharti@outlook.com';

export const nav = [
  { label: 'work', href: '#work' },
  { label: 'stats', href: '#stats' },
  { label: 'skills', href: '#skills' },
  { label: 'connect', href: '#contact' },
] as const;

import { InformationCard } from '../types/informationCard';

export const informationCards: InformationCard[] = [
  {
    title: 'For Developers',
    description: 'Browse our React jobs and start your career today',
    link: '/jobs',
    linkText: 'Browse Jobs',
    bg: 'bg-gray-100',
    linkClass: 'bg-black hover:bg-gray-700',
  },
  {
    title: 'For Employers',
    description: 'List your job to find the perfect developer for the role',
    link: '/add-job',
    linkText: 'Add Job',
    bg: 'bg-indigo-100',
    linkClass: 'bg-indigo-500 hover:bg-indigo-600',
  },
];

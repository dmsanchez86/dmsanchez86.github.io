import { LanguageItemI } from 'src/app/interfaces/LanguageI';
import { projects } from './projects';
import { portafolio } from './portafolio';
import { profile } from './profile';
import { meta } from './meta';

export const EN: LanguageItemI = {
  ref: 'en',
  title: 'English',
  label: 'Change language',
  loading: 'Loading...',
  thanks: { 
    label: 'Build with' 
  },
  logo: {
    title: 'dmsanchez86 Website',
  },
  skills: {
    title: 'Skills',
    label: 'skills',
    label_link: 'All',
  },
  meta,
  nav: {
    home: 'Home',
    projects: 'Projects',
    portafolio: 'Portafolio',
    contact: 'Contact',
    hobbies: 'Hobbies',
    skills: 'Skills',
    skill: 'Skill',
  },
  profile,
  global: {
    tweets: `Tweets's @dmsanchez86`,
    back: '',
    years: 'Years XP',
    percentage: 'Percentage'
  },
  tools: {
    preview: 'Preview',
    check: 'Check code',
    download: 'Download',
    install: 'Install',
  },
  projects,
  portafolio
};

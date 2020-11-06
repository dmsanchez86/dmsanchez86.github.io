import { LanguageItemI } from 'src/app/interfaces/LanguageI';
import { projects } from './projects';
import { portafolio } from './portafolio';
import { profile } from './profile';
import { meta } from './meta';

export const ES: LanguageItemI = {
  ref: 'es',
  title: 'Español',
  label: 'Cambiar Idioma',
  loading: 'Cargando...',
  thanks: { label: 'Construido con' },
  logo: {
    title: 'Sitio Web dmsanchez86',
  },
  skills: {
    title: 'Habilidades',
    label: 'Habilidades',
    label_link: 'Ver Todas'
  },
  meta,
  nav: {
    home: 'Inicio',
    projects: 'Proyectos',
    portafolio: 'Portafolio',
    contact: 'Contacto',
    hobbies: 'Pasatiempos',
    skills: 'Habilidades',
    skill: 'Habilidad',
  },
  profile,
  global: {
    tweets: `Tweets de @dmsanchez86`,
    back: '',
    years: 'Años XP',
    percentage: 'Porcentage'
  },
  tools: {
    preview: 'Previsualizar',
    check: 'Código Fuente',
    download: 'Descargar',
    install: 'Instalar',
  },
  projects,
  portafolio
};

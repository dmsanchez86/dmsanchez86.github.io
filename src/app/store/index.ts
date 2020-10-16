import { LanguageItemI } from '../interfaces/LanguageI';
import { MenuItemI } from '../interfaces/MenuItemI';
import { ProjectItemI } from '../interfaces/ProjectItemI';
import { SocialItemI } from '../interfaces/SocialItemI';
import { LanguageItemProfileSkillsI } from '../interfaces/LanguageI';

export interface AppState {
  projects: AppStateProjectsI;
  portafolio: AppStatePortafolioI;
  menu: AppStateMenu;
  language: AppStateLanguaje;
  social: AppStateSocial;
  global: AppStateGlobalI;
  skills?: AppStateSkillsI;
}

export interface AppStateProjectsI {
  data: ProjectItemI[];
  current: ProjectItemI;
}

export interface AppStatePortafolioI {
  data: ProjectItemI[];
  current: ProjectItemI;
}

export interface AppStateMenu {
  data: MenuItemI[];
}

export interface AppStateSocial {
  data: SocialItemI[];
}

export interface AppStateGlobalI {
  menu: boolean;
}

export interface AppStateSkillsI {
  data: LanguageItemProfileSkillsI[];
  current: LanguageItemProfileSkillsI;
}

export interface AppStateLanguaje {
  es: LanguageItemI;
  en: LanguageItemI;
  current: LanguageItemI;
}

import { LanguageItemI } from '../interfaces/LanguageI';
import { MenuItemI } from '../interfaces/MenuItemI';
import { ProjectItemI } from '../interfaces/ProjectItemI';
import { SocialItemI } from '../interfaces/SocialItemI';

export interface AppState {
  projects: AppStateProjectsI;
  portafolio: AppStatePortafolioI;
  menu: AppStateMenu;
  language: AppStateLanguaje;
  social: AppStateSocial;
  global: AppStateGlobalI;
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
export interface AppStateLanguaje {
  es: LanguageItemI;
  en: LanguageItemI;
  current: LanguageItemI;
}

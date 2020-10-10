import { LanguageItemI } from '../interfaces/LanguageI';
import { MenuItemI } from '../interfaces/MenuItemI';
import { ProjectItemI } from '../interfaces/ProjectItemI';

export interface AppState {
  projects: AppStateProjectsI;
  collaborations: AppStateCollaborationsI;
  menu: AppStateMenu;
  language: AppStateLanguaje;
}
export interface AppStateProjectsI {
  data: ProjectItemI[]
}
export interface AppStateCollaborationsI {
  data: ProjectItemI[]
}
export interface AppStateMenu {
  data: MenuItemI[];
}
export interface AppStateLanguaje {
  es: LanguageItemI,
  en: LanguageItemI,
  current: LanguageItemI
}

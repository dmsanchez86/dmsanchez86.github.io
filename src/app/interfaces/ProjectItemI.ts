import { LanguageItemProfileSkillsColorsI } from './LanguageI';

export interface ProjectItemI {
  name?: string;
  url?: string;
  url_app_store?: string;
  url_play_store?: string;
  preview?: boolean;
  no_preview?: boolean;
  code?: boolean;
  download?: boolean;
  app?: boolean;
  key?: string;
  type?: string;
  colors?: LanguageItemProfileSkillsColorsI;

  tecnologies?: ProjectItemTecnologiesI[];
  devs?: ProjectItemDevsI[];
  year?: ProjectItemYearI;
}

export interface ProjectItemTecnologiesI{
  icon: string;
  name: string;
}

export interface ProjectItemDevsI{
  icon: string;
  name: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  type?: string;
}

export interface ProjectItemYearI{
  icon: string;
  name: string;
}

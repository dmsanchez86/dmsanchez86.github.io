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
}

export interface LanguageItemI {
  ref: string;
  title: string;
  label: string;
  loading: string;
  thanks?: LanguageItemThanksI;
  skills?: LanguageItemSkillsI;
  meta: LanguageItemMetaI;
  logo: LanguageItemLogoI;
  nav: LanguageItemNavI;
  profile: LanguageItemProfileI;
  global: LanguageItemGlobalI;
  tools: LanguageItemToolsI;
  projects: LanguageItemProjectsI;
  portafolio: LanguageItemPortafolioI;
}

export interface LanguageItemThanksI {
  label: string;
}
export interface LanguageItemSkillsI {
  title: string;
  label: string;
  label_link: string;
}

export interface LanguageItemLogoI {
  title: string;
}

export interface LanguageItemMetaI {
  keywords?: string;
  description?: string;
  og?: LanguageItemMetaOGI;
  tw?: LanguageItemMetaTWI;
}

export interface LanguageItemMetaTWI {
  card?: string;
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
}

export interface LanguageItemMetaOGI {
  type?: string;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  site_name?: string;
}
export interface LanguageItemNavI {
  home: string;
  projects: string;
  portafolio: string;
  contact: string;
  hobbies: string;
  skills?: string;
  skill?: string;
}
export interface LanguageItemProfileI {
  nick: string;
  phone: string;
  email: string;
  name: string;
  biography: string;
  hobbies_bio: string;
  social: LanguageItemProfileSocialI;
  skills?: LanguageItemProfileSkillsKeyI;
}
export interface LanguageItemProfileSocialI {
  github: string;
  twitter: string;
  stack: string;
  facebook?: string;
  google: string;
  strava: string;
  linkedin: string;
  instagram: string;
  duolingo: string;
  email: string;
  whatsapp: string;
  freecodecamp: string;
  codepen: string;
}
export interface LanguageItemProfileSkillsI {
  icon: string;
  name: string;
  title: string;
  key: string;
  main?: boolean;
  years?: number;
  percentage?: number;
  image?: string;
  colors?: LanguageItemProfileSkillsColorsI;
}

export interface LanguageItemProfileSkillsColorsI{
  current_main?: string;
  nav_item?: string;
  nav_item_edge?: string;
  nav_item_bg?: string;
  nav_item_bg2?: string;
  nav_close?: string;

  profile_b?: string;
  btn_mobile?: string;

  logo_fill?: string;
  logo_stroke?: string;
  logo_scale?: string;
  logo_text?: string;

  skill_bg?: string;
  skill_b?: string;
  skill_g?: string;
  skill_tf?: string;

  main?: string;
  secondary?: string;
  terciary?: string;
  overlay?: string;

  fondo?: string;
}

export interface LanguageItemProfileSkillsKeyI{
  angular?: string;
  sass?: string;
  react?: string;
  wordpress?: string;
  android?: string;
  app_store?: string;
  apple?: string;
  bitbucket?: string;
  bootstrap?: string;
  chrome?: string;
  firefox?: string;
  css3?: string;
  figma?: string;
  fort_awesome?: string;
  git?: string;
  gitlab?: string;
  drive?: string;
  html5?: string;
  javascript?: string;
  jsfiddle?: string;
  laravel?: string;
  less?: string;
  linux?: string;
  markdown?: string;
  microsoft?: string;
  nodejs?: string;
  npm?: string;
  php?: string;
  python?: string;
  readme?: string;
  safari?: string;
  shopify?: string;
  sketch?: string;
  slack?: string;
  ubuntu?: string;
  unity?: string;
  vue?: string;
  yarn?: string;
  default?: string;
}
export interface LanguageItemGlobalI {
  tweets: string;
  back: string;
  years: string;
  percentage: string;
}
export interface LanguageItemToolsI {
  preview: string;
  check: string;
  download: string;
  install: string;
}
export interface LanguageItemProjectsI {
  default: string;
  football: LanguageItemPortafolioItemI;
  atom: LanguageItemPortafolioItemI;
  form: LanguageItemPortafolioItemI;
  jurisquiz_app: LanguageItemPortafolioItemI;
  quotes: LanguageItemPortafolioItemI;
  ball: LanguageItemPortafolioItemI;
  weather: LanguageItemPortafolioItemI;
  slide: LanguageItemPortafolioItemI;
  clock: LanguageItemPortafolioItemI;
  cellphone: LanguageItemPortafolioItemI;
  cube: LanguageItemPortafolioItemI;
  lists: LanguageItemPortafolioItemI;
  geometry_cube: LanguageItemPortafolioItemI;
  jurisquiz_web: LanguageItemPortafolioItemI;
  arthritis: LanguageItemPortafolioItemI;
  angular_template: LanguageItemPortafolioItemI;
  mecaut: LanguageItemPortafolioItemI;
}
export interface LanguageItemPortafolioI {
  default: string;
  libreria_nacional: LanguageItemPortafolioItemI;
  libreria_nacional_app: LanguageItemPortafolioItemI;
  energiteca: LanguageItemPortafolioItemI;
  energiteca_app: LanguageItemPortafolioItemI;
  aseoya: LanguageItemPortafolioItemI;
  aseoya_app: LanguageItemPortafolioItemI;
  existaya: LanguageItemPortafolioItemI;
  stp: LanguageItemPortafolioItemI;
  coomeva_mp: LanguageItemPortafolioItemI;
  coomeva_sao: LanguageItemPortafolioItemI;
  coomeva_pro: LanguageItemPortafolioItemI;
  krika: LanguageItemPortafolioItemI;
  go: LanguageItemPortafolioItemI;
  between_pines: LanguageItemPortafolioItemI;
  oral_center: LanguageItemPortafolioItemI;
  conexiones: LanguageItemPortafolioItemI;
  zeus_web: LanguageItemPortafolioItemI;
  santodomingo: LanguageItemPortafolioItemI;
  antorcha: LanguageItemPortafolioItemI;
  raking: LanguageItemPortafolioItemI;
  jurisquiz: LanguageItemPortafolioItemI;
  therapy: LanguageItemPortafolioItemI;
  zopp: LanguageItemPortafolioItemI;
  buffalo: LanguageItemPortafolioItemI;
  easynet: LanguageItemPortafolioItemI;
  cliniweb: LanguageItemPortafolioItemI;
  hospital: LanguageItemPortafolioItemI;
  finca: LanguageItemPortafolioItemI;
}

export interface LanguageItemPortafolioItemI{
  name: string;
  description?: string;
}

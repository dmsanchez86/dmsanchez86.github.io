export interface LanguageItemI {
  ref: string;
  title: string;
  label: string;
  loading: string;
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
}
export interface LanguageItemProfileI {
  nick: string;
  phone: string;
  email: string;
  name: string;
  biography: string;
  hobbies_bio: string;
  social: LanguageItemProfileSocialI;
  skills?: LanguageItemProfileSkillsI;
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
export interface LanguageItemProfileSkillsI{
  icon: string;
  name: string;
  title: string;
  key: string;
}
export interface LanguageItemGlobalI {
  tweets: string;
}
export interface LanguageItemToolsI {
  preview: string;
  check: string;
  download: string;
  install: string;
}
export interface LanguageItemProjectsI {
  football: string;
  atom: string;
  form: string;
  jurisquiz_app: string;
  quotes: string;
  ball: string;
  weather: string;
  slide: string;
  clock: string;
  cellphone: string;
  cube: string;
  lists: string;
  geometry_cube: string;
  jurisquiz_web: string;
  arthritis: string;
  angular_template: string;
  mecaut: string;
}
export interface LanguageItemPortafolioI {
  libreria_nacional: string;
  libreria_nacional_app: string;
  energiteca: string;
  energiteca_app: string;
  aseoya: string;
  aseoya_app: string;
  existaya: string;
  stp: string;
  coomeva_mp: string;
  coomeva_sao: string;
  coomeva_pro: string;
  krika: string;
  go: string;
  between_pines: string;
  oral_center: string;
  conexiones: string;
  zeus_web: string;
  santodomingo: string;
  antorcha: string;
  raking: string;
  jurisquiz: string;
  therapy: string;
  zopp: string;
  buffalo: string;
  easynet: string;
  cliniweb: string;
  hospital: string;
  finca: string;
}

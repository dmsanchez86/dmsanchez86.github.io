export interface LanguageItemI {
  ref: string;
  title: string;
  loading: string;
  meta: LanguageItemMetaI;
  logo: LanguageItemLogoI;
  nav: LanguageItemNavI;
  profile: LanguageItemProfileI;
  global: LanguageItemGlobalI;
  tools: LanguageItemToolsI;
  projects: LanguageItemProjectsI;
  portafolio: LanguageItemPortafolioI;
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
}
export interface LanguageItemProfileSocialI {
  github: string;
  twitter: string;
  facebook: string;
  google: string;
  linkedin: string;
  instagram: string;
  email: string;
  whatsapp: string;
  freecodecamp: string;
  codepen: string;
}
export interface LanguageItemGlobalI {
  tweets: string;
}
export interface LanguageItemToolsI {
  preview: string;
  check: string;
  download: string;
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

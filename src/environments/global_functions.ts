import { LanguageItemProfileSkillsColorsI } from 'src/app/interfaces/LanguageI';

export function isValidUrl(url, obligatorio?, ftp?) {
  if (obligatorio == undefined) {
    obligatorio = 0;
  }
  if (ftp == undefined) {
    ftp = 0;
  }

  if (url == "" && obligatorio == 0) {
    return true;
  }

  if (ftp) {
    var pattern = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
  } else {
    var pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
  }

  if (url.match(pattern)) {
    return true;
  } else {
    return false;
  }
}

export function favicon(fav: string){
  qs('#favicon').setAttribute('href', `assets/images/favicon_${fav}.png`);
}

export function bodyAddClass(classes: string){
  qs('.main-app').classList.add(classes);
}

export function bodyRemoveClass(classes: string){
  qs('.main-app').classList.remove(classes);
}

export function qs(selector: string): HTMLElement {
  return document.querySelector(selector);
}

export function setThemeTMP(
  {
    current_main,
    nav_item,
    nav_item_edge,
    nav_item_bg,
    nav_item_bg2,
    nav_close,

    profile_b,
    btn_mobile,

    logo_fill,
    logo_scale,
    logo_stroke,
    logo_text,

    skill_b,
    skill_bg,
    skill_g,
    skill_tf,

    main,
    secondary,
    terciary,
    overlay,

    fondo
  }: LanguageItemProfileSkillsColorsI) {
  if(current_main){
    qs('.main-app')['style'].setProperty(`--current-main`, current_main);
  }
  if(nav_item){
    qs('.main-app')['style'].setProperty(`--nav-item`, nav_item);
  }
  if (nav_item_edge) {
    qs('.main-app')['style'].setProperty(`--nav-item-edge`, nav_item_edge);
  }
  if (nav_item_bg) {
    qs('.main-app')['style'].setProperty(`--nav-item-bg`, nav_item_bg);
  }
  if (nav_item_bg2) {
    qs('.main-app')['style'].setProperty(`--nav-item-bg2`, nav_item_bg2);
  }
  if (nav_close) {
    qs('.main-app')['style'].setProperty(`--nav-close`, nav_close);
  }

  if (profile_b) {
    qs('.main-app')['style'].setProperty(`--profile-b`, profile_b);
  }
  if (btn_mobile) {
    qs('.main-app')['style'].setProperty(`--btn-mobile`, btn_mobile);
  }

  if (logo_fill) {
    qs('.main-app')['style'].setProperty(`--logo-fill`, logo_fill);
  }
  if (logo_stroke) {
    qs('.main-app')['style'].setProperty(`--logo-stroke`, logo_stroke);
  }
  if (logo_scale) {
    qs('.main-app')['style'].setProperty(`--logo-scale`, logo_scale);
  }
  if (logo_text) {
    qs('.main-app')['style'].setProperty(`--logo-text`, logo_text);
  }

  if (skill_bg) {
    qs('.main-app')['style'].setProperty(`--skill-bg`, skill_bg);
  }
  if (skill_b) {
    qs('.main-app')['style'].setProperty(`--skill-b`, skill_b);
  }
  if (skill_g) {
    qs('.main-app')['style'].setProperty(`--skill-g`, skill_g);
  }
  if (skill_tf) {
    qs('.main-app')['style'].setProperty(`--skill-tf`, skill_tf);
  }

  if (main) {
    qs('.main-app')['style'].setProperty(`--main`, main);
  }
  if (secondary) {
    qs('.main-app')['style'].setProperty(`--secondary`, secondary);
  }
  if (terciary) {
    qs('.main-app')['style'].setProperty(`--terciary`, terciary);
  }
  if (overlay) {
    qs('.main-app')['style'].setProperty(`--overlay`, overlay);
  }

  if (fondo) {
    qs('.main-app')['style'].setProperty(`--fondo`, fondo);
  }
}

export function removeThemeTMP(){
  qs('.main-app')['style'].removeProperty(`--current-main`);
  qs('.main-app')['style'].removeProperty(`--nav-item`);
  qs('.main-app')['style'].removeProperty(`--nav-item-edge`);
  qs('.main-app')['style'].removeProperty(`--nav-item-bg`);
  qs('.main-app')['style'].removeProperty(`--nav-item-bg2`);
  qs('.main-app')['style'].removeProperty(`--nav-close`);

  qs('.main-app')['style'].removeProperty(`--profile-b`);
  qs('.main-app')['style'].removeProperty(`--btn-mobile`);

  qs('.main-app')['style'].removeProperty(`--logo-fill`);
  qs('.main-app')['style'].removeProperty(`--logo-stroke`);
  qs('.main-app')['style'].removeProperty(`--logo-scale`);
  qs('.main-app')['style'].removeProperty(`--logo-text`);

  qs('.main-app')['style'].removeProperty(`--skill-bg`);
  qs('.main-app')['style'].removeProperty(`--skill-b`);
  qs('.main-app')['style'].removeProperty(`--skill-g`);
  qs('.main-app')['style'].removeProperty(`--skill-tf`);

  qs('.main-app')['style'].removeProperty(`--main`);
  qs('.main-app')['style'].removeProperty(`--secondary`);
  qs('.main-app')['style'].removeProperty(`--terciary`);
  qs('.main-app')['style'].removeProperty(`--overlay`);

  qs('.main-app')['style'].removeProperty(`--fondo`);
}

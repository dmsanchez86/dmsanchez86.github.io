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
  document
    .querySelector('#favicon')
    .setAttribute('href', `assets/images/favicon_${fav}.png`);
}

export function bodyAddClass(classes: string){
  document.body.classList.add(classes);
}

export function bodyRemoveClass(classes: string){
  document.body.classList.remove(classes);
}

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{PRPn:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var c=n("fXoL"),o=n("kt0X"),i=n("ofXK"),l=n("xBKO"),r=n("UpnK"),s=n("RuE5"),a=n("tyNb");function p(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",5),c.Ub("click",(function(){return c.gc(t),c.Xb(2).previewF()})),c.Ib(1,"i",6),c.Lb()}if(2&t){const t=c.Xb().ngIf;c.xb("title-ref",t.preview)}}function u(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",7),c.Ub("click",(function(){return c.gc(t),c.Xb(2).codeF()})),c.Ib(1,"i",8),c.Lb()}if(2&t){const t=c.Xb().ngIf;c.xb("title-ref",t.check)}}function b(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",9),c.Ub("click",(function(){return c.gc(t),c.Xb(2).downloadF()})),c.Ib(1,"i",10),c.Lb()}if(2&t){const t=c.Xb().ngIf;c.xb("title-ref",t.download)}}function f(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",7),c.Ub("click",(function(){return c.gc(t),c.Xb(2).installF()})),c.Ib(1,"i",11),c.Lb()}if(2&t){const t=c.Xb().ngIf;c.xb("title-ref",t.install)}}function d(t,e){if(1&t){const t=c.Nb();c.Mb(0,"div",7),c.Ub("click",(function(){return c.gc(t),c.Xb(2).installF()})),c.Ib(1,"i",12),c.Lb()}if(2&t){const t=c.Xb().ngIf;c.xb("title-ref",t.install)}}function h(t,e){if(1&t&&(c.Mb(0,"div",1),c.kc(1,p,2,1,"div",2),c.kc(2,u,2,1,"div",3),c.kc(3,b,2,1,"div",4),c.kc(4,f,2,1,"div",3),c.kc(5,d,2,1,"div",3),c.Lb()),2&t){const t=c.Xb();c.wb(1),c.ac("ngIf",(null==t.project?null:t.project.preview)&&!t.no_preview),c.wb(1),c.ac("ngIf",null==t.project?null:t.project.code),c.wb(1),c.ac("ngIf",null==t.project?null:t.project.download),c.wb(1),c.ac("ngIf",(null==t.project?null:t.project.app)&&(null==t.project?null:t.project.url_play_store)),c.wb(1),c.ac("ngIf",(null==t.project?null:t.project.app)&&(null==t.project?null:t.project.url_app_store))}}let j=(()=>{class t{constructor(t,e){this.store=t,this.router=e,this.no_preview=!1,this.language=this.store.select(t=>t.language.current.tools)}previewF(){localStorage.fromTools=!0,"project"===this.project.type&&this.store.dispatch(Object(r.c)(this.project)),"portafolio"===this.project.type&&this.store.dispatch(Object(l.c)(this.project)),window.open(this.project.url)}codeF(){if(Object(s.d)(this.project.url)){let t=this.project.url;this.project.url.indexOf("full")&&(t=this.project.url.replace("full","pen")),window.open(t)}else window.open("http://github.com/dmsanchez86/"+this.project.url)}installF(){this.project.url_play_store&&window.open(this.project.url_play_store),this.project.url_app_store&&window.open(this.project.url_app_store)}downloadF(){Object(s.d)(this.project.url)?window.open(this.project.url+"/archive/master.zip"):"mecaut"!==this.project.key?window.open("http://github.com/dmsanchez86/"+this.project.url+"/archive/gh-pages.zip"):window.open("http://github.com/dmsanchez86/"+this.project.url+"/archive/master.zip")}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(o.h),c.Hb(a.b))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-tools"]],inputs:{project:"project",url:"url",no_preview:"no_preview"},decls:2,vars:3,consts:[["class","tools",4,"ngIf"],[1,"tools"],["class","tool preview",3,"click",4,"ngIf"],["class","tool code",3,"click",4,"ngIf"],["class","tool download",3,"click",4,"ngIf"],[1,"tool","preview",3,"click"],[1,"fa","fa-desktop"],[1,"tool","code",3,"click"],[1,"fa","fa-code"],[1,"tool","download",3,"click"],[1,"fa","fa-download"],[1,"fab","fa-google-play"],[1,"fab","fa-app-store-ios"]],template:function(t,e){1&t&&(c.kc(0,h,6,5,"div",0),c.Yb(1,"async")),2&t&&c.ac("ngIf",c.Zb(1,1,e.language))},directives:[i.k],pipes:[i.b],encapsulation:2}),t})();function g(t,e){if(1&t&&(c.Kb(0),c.Mb(1,"a",6),c.mc(2),c.Yb(3,"async"),c.Lb(),c.Jb()),2&t){const t=c.Xb();c.wb(1),c.ac("href",null==t.project?null:t.project.url,c.ic),c.wb(1),c.nc(c.Zb(3,2,t.language)[null==t.project?null:t.project.key])}}function w(t,e){if(1&t&&(c.Mb(0,"a",8),c.mc(1),c.Yb(2,"async"),c.Lb()),2&t){const t=c.Xb(2);c.ac("href","javascript::void(0)",c.ic),c.wb(1),c.nc(c.Zb(2,2,t.language)[null==t.project?null:t.project.key])}}function v(t,e){if(1&t&&(c.Kb(0),c.kc(1,w,3,4,"a",7),c.Jb()),2&t){const t=c.Xb();c.wb(1),c.ac("ngIf",null==t.project?null:t.project.url_play_store)}}function k(t,e){if(1&t&&(c.Mb(0,"a",8),c.mc(1),c.Yb(2,"async"),c.Lb()),2&t){const t=c.Xb(2);c.ac("href","javascript::void(0)",c.ic),c.wb(1),c.nc(c.Zb(2,2,t.language)[null==t.project?null:t.project.key])}}function I(t,e){if(1&t&&(c.Mb(0,"a",8),c.mc(1),c.Yb(2,"async"),c.Lb()),2&t){const t=c.Xb(2);c.ac("href","javascript::void(0)",c.ic),c.wb(1),c.nc(c.Zb(2,2,t.language)[null==t.project?null:t.project.key])}}function _(t,e){if(1&t&&(c.kc(0,k,3,4,"a",7),c.kc(1,I,3,4,"a",7)),2&t){const t=c.Xb();c.ac("ngIf",(null==t.project?null:t.project.url_app_store)&&!(null!=t.project&&t.project.url_play_store)),c.wb(1),c.ac("ngIf",(null==t.project?null:t.project.url_play_store)&&!(null!=t.project&&t.project.url_app_store))}}let m=(()=>{class t{constructor(t){this.store=t,this.language=this.store.select(t=>t.language.current[this.key])}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(o.h))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-item-project"]],inputs:{project:"project",i:"i",key:"key"},decls:8,vars:6,consts:[[1,"project",2,"height","50vh","width","98vw"],[1,"title"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["other",""],[3,"project","url"],["target","_blank",3,"href"],[3,"href",4,"ngIf"],[3,"href"]],template:function(t,e){if(1&t&&(c.Mb(0,"div"),c.Mb(1,"div",0),c.Mb(2,"h1",1),c.kc(3,g,4,4,"ng-container",2),c.kc(4,v,2,1,"ng-container",3),c.kc(5,_,2,2,"ng-template",null,4,c.lc),c.Ib(7,"app-tools",5),c.Lb(),c.Lb(),c.Lb()),2&t){const t=c.fc(6);c.xb("tabIndex",e.i+1),c.wb(3),c.ac("ngIf",null==e.project?null:e.project.url),c.wb(1),c.ac("ngIf",(null==e.project?null:e.project.url_play_store)&&(null==e.project?null:e.project.url_app_store))("ngIfElse",t),c.wb(3),c.ac("project",e.project)("url",e.key)}},directives:[i.k,j],pipes:[i.b],encapsulation:2}),t})()},RuE5:function(t,e,n){"use strict";function c(t,e,n){if(null==e&&(e=0),null==n&&(n=0),""==t&&0==e)return!0;if(n)var c=/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;else c=/^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;return!!t.match(c)}function o(t){document.querySelector("#favicon").setAttribute("href",`assets/images/favicon_${t}.png`)}function i(t){document.body.classList.add(t)}function l(t){document.body.classList.remove(t)}n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}))},hsZO:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n("fXoL"),o=n("kt0X"),i=n("jhN1"),l=n("ofXK");const r=function(t,e){return{load:t,fullscreen:e}};let s=(()=>{class t{constructor(t,e){this.store=t,this.sanitizer=e,this.validationLoad=!1,this.validationFullscreen=!1,this.language=this.store.select(t=>t.language.current.loading)}loadIframe(t){}setFullscreen(){this.validationFullscreen=!this.validationFullscreen}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(o.h),c.Hb(i.b))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-preview"]],inputs:{project:"project"},decls:8,vars:7,consts:[[1,"preview_page","hide-mobile","active",3,"ngClass"],[1,"toolbox"],[1,"resize",3,"click"],["title","Maximize Screen",1,"fa","fa-expand"],["title","Minimize Screen",1,"fa","fa-compress"],[1,"loader_preview"],[1,"fa","fa-spinner","fa-pulse"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"span",2),c.Ub("click",(function(){return e.setFullscreen()})),c.Ib(3,"i",3),c.Ib(4,"i",4),c.Lb(),c.Lb(),c.Mb(5,"span",5),c.Yb(6,"async"),c.Ib(7,"i",6),c.Lb(),c.Lb()),2&t&&(c.ac("ngClass",c.dc(4,r,e.validationLoad,e.validationFullscreen)),c.wb(5),c.xb("title",c.Zb(6,2,e.language)))},directives:[l.i],pipes:[l.b],encapsulation:2}),t})()}}]);
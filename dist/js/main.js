"use strict";function animate(){requestAnimationFrame(animate),render()}function render(){App.renderer.render(App.scene,App.camera),TWEEN.update(),App.camera.position.x+=.01*(App.mouseX-App.camera.position.x),App.camera.position.y+=.01*(-App.mouseY-App.camera.position.y)}function onWindowResize(){App.windowHalfX=window.innerWidth/2,App.windowHalfY=window.innerHeight/2,App.camera.aspect=window.innerWidth/window.innerHeight,App.camera.updateProjectionMatrix(),App.renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(e){App.mouseX=e.clientX-App.windowHalfX,App.mouseY=e.clientY-App.windowHalfY}function onDocumentTouchStart(e){1==e.touches.length&&(e.preventDefault(),App.mouseX=e.touches[0].pageX-App.windowHalfX,App.mouseY=e.touches[0].pageY-App.windowHalfY)}function onDocumentTouchMove(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,mouseY=e.touches[0].pageY-windowHalfY)}var App={scene:null,camera:null,renderer:null,container:null,mouseX:0,mouseY:0,windowHalfX:window.innerWidth/2,windowHalfY:window.innerHeight/2,"const":{WINDOW_WIDTH:window.innerWidth,WINDOW_HEIGHT:window.innerHeight,PIXEL_RATIO:window.devicePixelRatio},init:function(){this.fullPage(),this.createContainer(),this.createScene(),this.createCamera();for(var e=new THREE.SpriteMaterial({map:new THREE.CanvasTexture(App.generateSprite()),blending:THREE.AdditiveBlending}),t=0;2e3>t;t++){var n=new THREE.Sprite(e);App.initParticle(n,10*t),App.scene.add(n)}this.createRender(),window.innerWidth>=960&&(document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1)),window.addEventListener("resize",onWindowResize,!1),setTimeout(function(){App.loader.hide(),$(".twitter_content .container").addClass("close")},2e3),this.buttonMenu(),this.overlayAndMenuEvent(),this.resizeButton(),this.iframe(),this.carouselControls(),this.tools(),this.contentProfile()},analitycs:function(){!function(e,t,n,i,a,o,s){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,o=t.createElement(n),s=t.getElementsByTagName(n)[0],o.async=1,o.src=i,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-62994212-3","auto"),ga("send","pageview")},fullPage:function(){var e=["#87CEEB","#61AB64","#00897b","#D67F35"];$("#main").fullpage({sectionsColor:e,anchors:["home","projects","collaborations","contact"],menu:"#menu",css3:!0,scrollOverflow:!1,autoScrolling:!0,navigation:!0,afterLoad:function(t,n){$(".preview_page").removeClass("active load").find("iframe").attr("src",""),$('a[href="#'+t+'"]').addClass("active").parent().addClass("active"),$("body").removeClass("home projects collaborations contact").addClass(t),$("#favicon").attr("href","favicon_"+t+".png"),$(".profile_content").removeClass("scaleOut");var i="";switch(t){case"home":i=e[0];break;case"projects":i=e[1];break;case"collaborations":i=e[2];break;case"contact":i=e[3]}$("#themeColor").attr("content",i),setTimeout(function(){$(".profile_content").addClass("scaleIn")},300)},onLeave:function(){$(".profile_content").removeClass("scaleIn").addClass("scaleOut"),setTimeout(function(){$(".profile_content").removeClass("scaleOut")},1e3)}})},createContainer:function(){this.container=document.querySelector("#container3D"),this.container.className="container3D"},createScene:function(){this.scene=new THREE.Scene},createCamera:function(){this["const"].WINDOW_WIDTH/this["const"].WINDOW_HEIGHT;this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,5e3),this.camera.position.set(0,0,700),this.scene.add(this.camera),this.camera.lookAt(this.scene.position)},createRender:function(){this.renderer=new THREE.CanvasRenderer,this.renderer.setPixelRatio(this["const"].PIXEL_RATIO),this.renderer.setSize(this["const"].WINDOW_WIDTH,this["const"].WINDOW_HEIGHT),this.renderer.setClearColor(THREE.ColorKeywords.skyblue),this.renderer.domElement.id="canvas_3d",App.container.appendChild(this.renderer.domElement)},generateSprite:function(){var e=document.createElement("canvas");e.width=16,e.height=16;var t=e.getContext("2d"),n=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.2,"rgb(106, 181, 212)"),n.addColorStop(.4,"rgba(0,0,64,1)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),e},initParticle:function(e,t){var e=this instanceof THREE.Sprite?this:e,t=void 0!==t?t:0;e.position.set(0,0,0),e.scale.x=e.scale.y=32*Math.random()+16,new TWEEN.Tween(e).delay(t).to({},1e4).onComplete(App.initParticle).start(),new TWEEN.Tween(e.position).delay(t).to({x:4e3*Math.random()-2e3,y:1e3*Math.random()-500,z:4e3*Math.random()-2e3},1e4).start(),new TWEEN.Tween(e.scale).delay(t).to({x:.01,y:.01},1e4).start()},loader:{hide:function(){$(".atomLoader").fadeOut(1e3)}},isValidUrl:function(e,t,n){if(void 0==t&&(t=0),void 0==n&&(n=0),""==e&&0==t)return!0;if(n)var i=/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;else var i=/^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;return!!e.match(i)},contentProfile:function(){$(".profile_content").unbind("click").click(function(){if($(".preview_page").removeClass("active load"),$("body").hasClass("profile"))$("body").removeClass("profile"),$(".popup").removeClass("active").find(".popup-header .profile_content").remove(),$(".profile_content").removeClass("scaleOut"),setTimeout(function(){$(".profile_content").addClass("scaleIn"),setTimeout(function(){},500)},500),window.location.hash=$("#menu li.active a").attr("href");else{$("body").addClass("profile"),$(this).removeClass("scaleIn");var e=$(".profile_content").clone();setTimeout(function(){$(".profile_content").addClass("scaleOut"),$(".popup").addClass("active"),setTimeout(function(){e.appendTo(".popup .popup-header"),App.contentProfile()},1e3)},100),window.location.hash="#about"}})},validateUrl:function(){"#about"==window.location.hash&&setTimeout(function(){$(".profile_content").click()},1e3)},carouselControls:function(){$(".carousel .control").unbind("click").click(function(){$(".preview_page").removeClass("load active").find("iframe").attr("src","");var e=$(this).parent(),t=parseInt(e.attr("item"));$(this).hasClass("inactive")||($(this).hasClass("right")&&!$(this).hasClass("inactive")?(e.find(".control.left").removeClass("inactive"),e.find(".item").removeClass("last"),e.find(".item.active").addClass("last").removeClass("next"),setTimeout(function(){e.find(".item.active").removeClass("active"),e.find(".item.next").addClass("active").removeClass("next last"),t>=e.find(".item").length-1?(e.find(".control.right").addClass("inactive"),t++):(t++,e.find(".item").eq(t).removeClass("last active").addClass("next")),e.attr("item",t)},500)):$(this).hasClass("left")&&(e.find(".control.right").removeClass("inactive"),setTimeout(function(){return 2>=t?(e.find(".control.left").addClass("inactive"),t--,e.find(".item").removeClass("next"),e.find(".item.active").addClass("next"),void setTimeout(function(){e.find(".item.active").removeClass("active"),e.find(".item.last").addClass("active").removeClass("next last"),1!=t&&e.find(".item").eq(t-2).removeClass("next active").addClass("last"),e.attr("item",t)},500)):(t--,e.find(".item").removeClass("next"),e.find(".item.active").addClass("next"),setTimeout(function(){e.find(".item.active").removeClass("active"),e.find(".item.last").addClass("active").removeClass("next last"),1!=t&&e.find(".item").eq(t-2).removeClass("next active").addClass("last"),e.attr("item",t)},500),void e.attr("item",t))},500)))})},tools:function(){$(".tools .tool").unbind("click").click(function(){var e=$(this).parent().parent().find("a").attr("href");$(this).hasClass("preview")?($(".preview_page").toggleClass("active"),App.isValidUrl(e)?$(".preview_page").removeClass("load").find("iframe").attr("src",e):$(".preview_page").removeClass("load").find("iframe").attr("src","http://dmsanchez86.github.io/"+e),window.innerWidth<=600&&$(".preview_page").addClass("fullscreen")):$(this).hasClass("code")?App.isValidUrl(e)?(e.indexOf("full")>0&&(e=e.replace("full","pen")),window.open(e)):window.open("http://github.com/dmsanchez86/"+e):$(this).hasClass("page")?($(".preview_page").toggleClass("active"),App.isValidUrl(e)?$(".preview_page").removeClass("load").find("iframe").attr("src",e):$(".preview_page").removeClass("load").find("iframe").attr("src","http://dmsanchez86.github.io/"+e)):$(this).hasClass("download")&&(App.isValidUrl(e)?window.open(e+"/archive/master.zip"):window.open("http://github.com/dmsanchez86/"+e+"/archive/gh-pages.zip"))})},iframe:function(){var e=document.querySelector(".preview_page iframe");e.onload=function(){$(".preview_page").addClass("load")}},resizeButton:function(){$(".resize").unbind("click").click(function(){$(".preview_page").toggleClass("fullscreen"),window.innerWidth<=600&&$(".preview_page").removeClass("active")})},buttonMenu:function(){$(".button_menu").unbind("click").click(function(){$("body").addClass("menu"),$("#menu,.overlay-menu").addClass("open"),$(this).fadeOut("1000")})},overlayAndMenuEvent:function(){$("#menu .close_menu,.overlay-menu").unbind("click").click(function(){$("body").hasClass("profile")?($("body").removeClass("profile"),$(".profile_content").removeClass("scaleOut"),$(".popup").removeClass("active"),$(this).hasClass("overlay-menu")&&$(".popup").find(".popup-header .profile_content").remove(),setTimeout(function(){$(".profile_content").addClass("scaleIn")},500)):($("body").removeClass("menu"),$(".button_menu").fadeIn("1500"),$("#menu,.overlay-menu").removeClass("open"))})}};App.analitycs(),$().ready(function(){App.init(),animate(),setTimeout(function(){$(".preview_page").find("iframe").attr("src","")},4e3),App.validateUrl()});
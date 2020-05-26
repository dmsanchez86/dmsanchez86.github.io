"use strict";function animate(){render(),requestAnimationFrame(animate)}function render(){for(var e=0;e<App.points.length;e++)App.points[e].position.x=.07*(App.mouseX-App.camera.position.x),App.points[e].position.y=.08*(-App.mouseY-App.camera.position.y),App.points[e].position.z=.07*(App.mouseY-App.camera.position.y),App.points[e].updateMatrix();var t=Date.now()-App.startTime;App.plane.scale.x=.5+.3*Math.sin(t/300),App.camera.position.x+=.04*(App.mouseX-App.camera.position.x),App.camera.position.y+=.04*(-App.mouseY-App.camera.position.y),App.camera.lookAt(App.scene.position),App.renderer.render(App.scene,App.camera)}function onWindowResize(){App.windowHalfX=window.innerWidth/2,App.windowHalfY=window.innerHeight/2,App.camera.aspect=window.innerWidth/window.innerHeight,App.camera.updateProjectionMatrix(),App.renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(e){App.mouseX=e.clientX-App.windowHalfX,App.mouseY=e.clientY-App.windowHalfY}function onDocumentTouchStart(e){1==e.touches.length&&(e.preventDefault(),App.mouseX=e.touches[0].pageX-App.windowHalfX,App.mouseY=e.touches[0].pageY-App.windowHalfY)}function onDocumentTouchMove(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,mouseY=e.touches[0].pageY-windowHalfY)}var App={scene:null,camera:null,renderer:null,controls:null,container:null,textMesh:null,plane:null,lod:null,points:[],mouseX:0,mouseY:0,windowHalfX:window.innerWidth/2,windowHalfY:window.innerHeight/2,lights:{ambient:null,directional:null},"const":{WINDOW_WIDTH:window.innerWidth,WINDOW_HEIGHT:window.innerHeight,PIXEL_RATIO:window.devicePixelRatio},init:function(e){this.fullPage(),this.createContainer(),this.createScene(),this.createCamera(),this.createRender(),this.createText(e),this.createPlane(),this.createPoints(),this.createLight(),window.innerWidth>=960&&(document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1)),window.addEventListener("resize",onWindowResize,!1),setTimeout(function(){App.loader.hide(),$(".twitter_content .container").addClass("close")},2e3),this.buttonMenu(),this.overlayAndMenuEvent(),this.resizeButton(),this.iframe(),this.carouselControls(),this.tools(),this.contentProfile()},analitycs:function(){!function(e,t,n,i,o,a,s){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,a=t.createElement(n),s=t.getElementsByTagName(n)[0],a.async=1,a.src=i,s.parentNode.insertBefore(a,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-62994212-3","auto"),ga("send","pageview")},fullPage:function(){var e=["#87CEEB","#61AB64","#00897b","#D67F35","#e6812b"];$("#main").fullpage({sectionsColor:e,anchors:["home","projects","portafolio","contact","footer"],menu:"#menu",css3:!0,scrollOverflow:!1,autoScrolling:!0,navigationTooltips:["Home","Projects","portafolio","Contact","Footer"],navigation:!0,afterLoad:function(t,n){$(".preview_page").removeClass("active load").find("iframe").attr("src",""),$('a[href="#'+t+'"]').addClass("active").parent().addClass("active"),$("body").removeClass("home projects portafolio contact footer").addClass(t),$("#favicon").attr("href","favicon_"+t+".png"),$(".profile_content").removeClass("scaleOut");var i="";switch(t){case"home":i=e[0];break;case"projects":i=e[1];break;case"portafolio":i=e[2];break;case"contact":i=e[3];break;case"footer":i=e[4]}$("#themeColor").attr("content",i),setTimeout(function(){$(".profile_content").addClass("scaleIn")},300)},onLeave:function(){$(".profile_content").removeClass("scaleIn").addClass("scaleOut"),setTimeout(function(){$(".profile_content").removeClass("scaleOut")},1e3)}})},createContainer:function(){this.container=document.querySelector("#container3D"),this.container.className="container3D"},createScene:function(){this.scene=new THREE.Scene},createCamera:function(){this["const"].WINDOW_WIDTH/this["const"].WINDOW_HEIGHT;this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,5e3),this.camera.position.set(0,0,700),this.scene.add(this.camera),this.camera.lookAt(this.scene.position)},createRender:function(){this.renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(this["const"].PIXEL_RATIO),this.renderer.setSize(this["const"].WINDOW_WIDTH,this["const"].WINDOW_HEIGHT),this.renderer.domElement.id="canvas_3d",App.container.appendChild(this.renderer.domElement)},createPlane:function(){var e=new THREE.MeshBasicMaterial({color:3312817});this.plane=new THREE.Mesh(new THREE.BoxGeometry(800,10,40),e),this.plane.position.y=-200,this.scene.add(this.plane)},createText:function(e){var t=235;window.innerWidth<460?t=135:window.innerWidth<680&&(t=165);var n=new THREE.TextGeometry("dmsanchez86",{font:e,size:t,height:30,curveSegments:20,bevelEnabled:!0,bevelThickness:22,bevelSize:8});n.computeBoundingBox();var i=-.5*(n.boundingBox.max.x-n.boundingBox.min.x),o=new THREE.MultiMaterial([new THREE.MeshPhongMaterial({color:5020861,specular:11184810}),new THREE.MeshPhongMaterial({color:3312817,specular:11184810})]);this.textMesh=new THREE.Mesh(n,o),this.textMesh.position.x=i,this.textMesh.position.y=-80,this.textMesh.position.z=window.innerWidth<460?-200:0,this.textMesh.rotation.x=0,this.textMesh.rotation.y=2*Math.PI;var a=new THREE.Group;a.add(this.textMesh),this.scene.add(a)},createPoints:function(){var e=[[new THREE.IcosahedronGeometry(100,4),50],[new THREE.IcosahedronGeometry(100,4),300],[new THREE.IcosahedronGeometry(100,4),1e3],[new THREE.IcosahedronGeometry(100,4),2e3],[new THREE.IcosahedronGeometry(100,4),8e3]],t=new THREE.MeshPhongMaterial({color:3289650,specular:5020861,shininess:8});t.opacity=1;var n,i,o;for(i=0;i<1e3;i++){for(this.lod=new THREE.LOD,n=0;n<e.length;n++)o=new THREE.Mesh(e[n][0],t),o.scale.set(.7,.7,.7),o.updateMatrix(),o.matrixAutoUpdate=!1,this.lod.addLevel(o,e[n][1]),this.points.push(o);this.lod.position.x=1e4*(.7-Math.random()),this.lod.position.y=7500*(.7-Math.random()),this.lod.position.z=1e4*(.7-Math.random()),this.lod.updateMatrix(),App.scene.add(this.lod)}},createLight:function(){this.lights.ambient=new THREE.AmbientLight(15987699),this.scene.add(this.lights.ambient),this.lights.directional=new THREE.DirectionalLight(16777215,2.5),this.lights.directional.position.set(-10,1800,1e3),this.lights.directional.castShadow=!0;var e=20;this.lights.directional.shadow.camera.left=-e,this.lights.directional.shadow.camera.right=e,this.lights.directional.shadow.camera.top=e,this.lights.directional.shadow.camera.bottom=-e,this.lights.directional.shadow.camera.near=2,this.lights.directional.shadow.camera.far=50,this.lights.directional.shadow.mapSize.x=1024,this.lights.directional.shadow.mapSize.y=1024,this.scene.add(this.lights.directional)},loader:{hide:function(){$(".atomLoader").fadeOut(1e3)}},isValidUrl:function(e,t,n){if(void 0==t&&(t=0),void 0==n&&(n=0),""==e&&0==t)return!0;if(n)var i=/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;else var i=/^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;return!!e.match(i)},contentProfile:function(){$(".profile_content").unbind("click").click(function(){if($(".preview_page").removeClass("active load"),$("body").hasClass("profile"))$("body").removeClass("profile"),$(".popup").removeClass("active").find(".popup-header .profile_content").remove(),$(".profile_content").removeClass("scaleOut"),setTimeout(function(){$(".profile_content").addClass("scaleIn"),setTimeout(function(){},500)},500),window.location.hash=$("#menu li.active a").attr("href");else{$("body").addClass("profile"),$(this).removeClass("scaleIn");var e=$(".profile_content").clone();setTimeout(function(){$(".profile_content").addClass("scaleOut"),$(".popup").addClass("active"),setTimeout(function(){e.appendTo(".popup .popup-header"),App.contentProfile()},1e3)},100),window.location.hash="#about"}})},validateUrl:function(){"#about"==window.location.hash&&setTimeout(function(){$(".profile_content").click()},500)},carouselControls:function(){$(".carousel .control").unbind("click").click(function(){$(".preview_page").removeClass("load active").find("iframe").attr("src","");var e=$(this).parent(),t=parseInt(e.attr("item"));$(this).hasClass("inactive")||($(this).hasClass("right")&&!$(this).hasClass("inactive")?(e.find(".control.left").removeClass("inactive"),e.find(".item").removeClass("last"),e.find(".item.active").addClass("last").removeClass("next"),setTimeout(function(){e.find(".item.active").removeClass("active"),e.find(".item.next").addClass("active").removeClass("next last"),t>=e.find(".item").length-1?(e.find(".control.right").addClass("inactive"),t++):(t++,e.find(".item").eq(t).removeClass("last active").addClass("next")),e.attr("item",t)},500)):$(this).hasClass("left")&&(e.find(".control.right").removeClass("inactive"),setTimeout(function(){return t<=2?(e.find(".control.left").addClass("inactive"),t--,e.find(".item").removeClass("next"),e.find(".item.active").addClass("next"),void setTimeout(function(){e.find(".item.active").removeClass("active"),e.find(".item.last").addClass("active").removeClass("next last"),1!=t&&e.find(".item").eq(t-2).removeClass("next active").addClass("last"),e.attr("item",t)},500)):(t--,e.find(".item").removeClass("next"),e.find(".item.active").addClass("next"),setTimeout(function(){e.find(".item.active").removeClass("active"),e.find(".item.last").addClass("active").removeClass("next last"),1!=t&&e.find(".item").eq(t-2).removeClass("next active").addClass("last"),e.attr("item",t)},500),void e.attr("item",t))},500)))})},tools:function(){$(".tools .tool").unbind("click").click(function(){var e=$(this).parent().parent().find("a").attr("href");$(this).hasClass("preview")?($(".preview_page").toggleClass("active"),App.isValidUrl(e)?$(".preview_page").removeClass("load").find("iframe").attr("src",e):$(".preview_page").removeClass("load").find("iframe").attr("src","http://dmsanchez86.github.io/"+e),window.innerWidth<=600&&($(".preview_page").addClass("fullscreen"),colorPrev=$("#themeColor").attr("content"),toggle=!1,$("#themeColor").attr("content","#fff"))):$(this).hasClass("code")?App.isValidUrl(e)?(e.indexOf("full")>0&&(e=e.replace("full","pen")),window.open(e)):window.open("http://github.com/dmsanchez86/"+e):$(this).hasClass("page")?($(".preview_page").toggleClass("active"),App.isValidUrl(e)?$(".preview_page").removeClass("load").find("iframe").attr("src",e):$(".preview_page").removeClass("load").find("iframe").attr("src","http://dmsanchez86.github.io/"+e)):$(this).hasClass("download")&&(App.isValidUrl(e)?window.open(e+"/archive/master.zip"):window.open("http://github.com/dmsanchez86/"+e+"/archive/gh-pages.zip"))})},iframe:function(){var e=document.querySelector(".preview_page iframe");e.onload=function(){$(".preview_page").addClass("load")}},resizeButton:function(){var e=!0,t=null;$(".resize").unbind("click").click(function(){e?(t=$("#themeColor").attr("content"),$("#themeColor").attr("content","#fff"),e=!1):($("#themeColor").attr("content",t),e=!0),$(".preview_page").toggleClass("fullscreen"),window.innerWidth<=600&&$(".preview_page").removeClass("active")})},buttonMenu:function(){$(".button_menu").unbind("click").click(function(){$("body").addClass("menu"),$("#menu,.overlay-menu").addClass("open"),$(this).fadeOut("1000")})},overlayAndMenuEvent:function(){$("#menu .close_menu,.overlay-menu").unbind("click").click(function(){$("body").hasClass("profile")?($("body").removeClass("profile"),$(".profile_content").removeClass("scaleOut"),$(".popup").removeClass("active"),$(this).hasClass("overlay-menu")&&$(".popup").find(".popup-header .profile_content").remove(),setTimeout(function(){$(".profile_content").addClass("scaleIn")},500)):($("body").removeClass("menu"),$(".button_menu").fadeIn("1500"),$("#menu,.overlay-menu").removeClass("open"))})}};App.analitycs(),$(function(){Detector.webgl||(Detector.addGetWebGLMessage(),alert("your browser don't support WebGL"));var e=["Chiller_Regular.json","Buxton_Sketch_Regular.json","Agency FB_Regular.json","Bradley Hand ITC_Regular.json","Papyrus_Regular.json","Segoe Marker_Regular.json","Viner Hand ITC_Regular.json"],t=Math.floor(Math.random()*e.length+1)-1;null!=localStorage.getItem("fuente")&&localStorage.getItem("fuente")==e[t]&&(t=Math.floor(Math.random()*e.length+1)-1),localStorage.setItem("fuente",e[t]);var n=new THREE.FontLoader;n.load("fonts/"+e[t],function(e){App.init(e),animate()}),setTimeout(function(){$(".preview_page").find("iframe").attr("src","")},4e3),App.validateUrl()});
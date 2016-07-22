'use strict';

var App = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    container: null,
    textMesh: null,
    mouseX : 0, 
    mouseY : 0,
    windowHalfX : window.innerWidth / 2,
    windowHalfY : window.innerHeight / 2,
    
    const: {
      WINDOW_WIDTH: window.innerWidth,
      WINDOW_HEIGHT: window.innerHeight,
      PIXEL_RATIO: window.devicePixelRatio
    },

    init: function(font){
        this.fullPage();
        this.createContainer();
        this.createScene();
        this.createCamera();
        this.createRender();
        this.createText(font);
        this.createPoints();

        if(window.innerWidth >= 960){
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.addEventListener( 'touchstart', onDocumentTouchStart, false );
            document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        }

        window.addEventListener( 'resize', onWindowResize, false );

        setTimeout(function(){ 
            App.loader.hide(); 
            $('.twitter_content .container').addClass('close');
        }, 2000);

        this.buttonMenu();
        this.overlayAndMenuEvent();
        this.resizeButton();
        this.iframe();
        this.carouselControls();
        this.tools();
        this.contentProfile();
    },
    
    analitycs: function(){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-62994212-3', 'auto');
        ga('send', 'pageview');
    },
    
    fullPage: function(){
        var colorsTheme = ["#87CEEB","#61AB64","#00897b", "#D67F35"];
        
        $('#main').fullpage({
            sectionsColor: colorsTheme,
            anchors: ['home', 'projects', 'collaborations', 'contact'],
            menu: '#menu',
            css3: true,
            scrollOverflow: false,
            autoScrolling: true,
            navigationTooltips: ['Home', 'Projects', 'Collaborations', 'Contact'],
            // continuousVertical: true,
            navigation: true,
            afterLoad: function(anchorLink, index){
                $('.preview_page').removeClass('active load').find('iframe').attr('src','');

                $('a[href="#'+ anchorLink +'"]').addClass('active').parent().addClass('active');
                $('body').removeClass('home projects collaborations contact').addClass(anchorLink);
                $('#favicon').attr('href', 'favicon_'+anchorLink+'.png');
                
                $('.profile_content').removeClass('scaleOut');
                
                var color = "";
                
                switch(anchorLink){
                    case "home": color = colorsTheme[0]; break;
                    case "projects": color = colorsTheme[1]; break;
                    case "collaborations": color = colorsTheme[2]; break;
                    case "contact": color = colorsTheme[3]; break;
                }
                
                $('#themeColor').attr('content', color);
                
                setTimeout(function(){
                    $('.profile_content').addClass('scaleIn');
                },300);
            },
            onLeave: function(){
                $('.profile_content').removeClass('scaleIn').addClass('scaleOut');
                
                setTimeout(function(){
                    $('.profile_content').removeClass('scaleOut');
                },1000);
            }
        });
    },

    createContainer: function(){
        // div donde se carga el dom del render
        this.container = document.querySelector('#container3D');
        this.container.className = 'container3D';
    },

    createScene: function(){
        this.scene = new THREE.Scene();
    },

    createCamera: function(){
        /*
        * Constructor
        *
        * PerspectiveCamera( fov, aspect, near, far )
        *
        * fov — Camera frustum vertical field of view.
        * aspect — Camera frustum aspect ratio.
        * near — Camera frustum near plane.
        * far — Camera frustum far plane.
        */
        
        // parametros de la camara
        var fov = 90;
        var aspect = this.const.WINDOW_WIDTH / this.const.WINDOW_HEIGHT;
        var near = 0.1;
        var far = 20000;
        
        // creacion de la camara con sus parametros
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000 );
        
        // posiciono la camara
        this.camera.position.set(0,0,700);
        
        // insertamos la camara a la escena
        this.scene.add(this.camera);
        
        // Camera look at
	      this.camera.lookAt( this.scene.position );
    },

    createRender: function(){

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });

      this.renderer.physicallyCorrectLights = true;

      this.renderer.shadowMap.enabled = true;
      
      // pixel del render
      this.renderer.setPixelRatio(this.const.PIXEL_RATIO);
      
      // tamaño del render
      this.renderer.setSize(this.const.WINDOW_WIDTH, this.const.WINDOW_HEIGHT);
      
      // le agregamos un color de fondo al render
        // this.renderer.setClearColor( THREE.ColorKeywords.skyblue );
      
      // añadimos un id al renderer(canvas)
      this.renderer.domElement.id = "canvas_3d";
      
      // añadimos el render al container
      App.container.appendChild(this.renderer.domElement);
    },

    createText: function(font){
        var size = 270;

        if(window.innerWidth < 460){
            size = 150;
        }else if(window.innerWidth < 680){
            size = 180;
        }

      var geometry = new THREE.TextGeometry( "dmsanchez86", {

        font: font,
        size: size,
        height: 30,
        curveSegments: 20,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 3

      });

      geometry.computeBoundingBox();

      var centerOffset = -0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

      var material = new THREE.MultiMaterial( [
        new THREE.MeshBasicMaterial( { color: 0x4c9cbd } ),
        new THREE.MeshBasicMaterial( { color: 0x328cb1 } )
      ] );

      this.textMesh = new THREE.Mesh( geometry, material );

      this.textMesh.position.x = centerOffset;
      this.textMesh.position.y = -80;
      this.textMesh.position.z = (window.innerWidth < 460 ? -200 : 0);

      this.textMesh.rotation.x = 0;
      this.textMesh.rotation.y = Math.PI * 2;

      var group = new THREE.Group();
      group.add( this.textMesh );
      this.scene.add(group);
    },

    createPoints: function(){
        var geometry = [

            [ new THREE.IcosahedronGeometry( 100, 4 ), 50 ],
            [ new THREE.IcosahedronGeometry( 100, 3 ), 300 ],
            [ new THREE.IcosahedronGeometry( 100, 2 ), 1000 ],
            [ new THREE.IcosahedronGeometry( 100, 1 ), 2000 ],
            [ new THREE.IcosahedronGeometry( 100, 0 ), 8000 ]

        ];

        var material = new THREE.MeshLambertMaterial( { color: 0xfefefe, wireframe: true } );
        material.opacity = .5;

        var i, j, mesh, lod;

        for ( j = 0; j < 1000; j ++ ) {

            lod = new THREE.LOD();

            for ( i = 0; i < geometry.length; i ++ ) {

                mesh = new THREE.Mesh( geometry[ i ][ 0 ], material );
                mesh.scale.set( .06, .06, .06 );
                mesh.updateMatrix();
                mesh.matrixAutoUpdate = false;
                lod.addLevel( mesh, geometry[ i ][ 1 ] );

            }

            lod.position.x = 10000 * ( 0.5 - Math.random() );
            lod.position.y =  7500 * ( 0.5 - Math.random() );
            lod.position.z = 10000 * ( 0.5 - Math.random() );
            lod.updateMatrix();
            lod.matrixAutoUpdate = false;
            App.scene.add( lod );

        }
    },

    loader: {
        hide: function(){
            $('.atomLoader').fadeOut(1000);
        }
    },
    
    isValidUrl: function(url,obligatory,ftp){
        // Si no se especifica el paramatro "obligatory", interpretamos
        // que no es obligatorio
        if(obligatory==undefined)
            obligatory=0;
        // Si no se especifica el parametro "ftp", interpretamos que la
        // direccion no puede ser una direccion a un servidor ftp
        if(ftp==undefined)
            ftp=0;
     
        if(url=="" && obligatory==0)
            return true;
     
        if(ftp)
            var pattern = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
        else
            var pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
     
        if(url.match(pattern))
            return true;
        else
            return false;
    },
    
    contentProfile: function(){
        $('.profile_content').unbind('click').click(function(){
            $('.preview_page').removeClass('active load');
            
            if($('body').hasClass('profile')){
                $('body').removeClass('profile');
                $('.popup').removeClass('active').find('.popup-header .profile_content').remove();
                
                $('.profile_content').removeClass('scaleOut');
                
                setTimeout(function(){
                    $('.profile_content').addClass('scaleIn');
                    setTimeout(function(){
                        // $('.profile_content').removeClass('scaleIn');
                    },500);
                },500);
                
                window.location.hash = $('#menu li.active a').attr('href');
                
            }else{
                $('body').addClass('profile');
                $(this).removeClass('scaleIn');
                
                var clonePopup = $('.profile_content').clone();
                
                setTimeout(function(){
                    $('.profile_content').addClass('scaleOut');
                    $('.popup').addClass('active');
                    
                    setTimeout(function(){
                        clonePopup.appendTo(".popup .popup-header");
                        App.contentProfile();
                    },1000);
                },100);
                
                window.location.hash = "#about";
            }
        });
    },
    
    validateUrl: function(){
        if(window.location.hash == "#about"){
            setTimeout(function(){
                $('.profile_content').click();
            },500);
        }
    },
    
    carouselControls: function(){
        $('.carousel .control').unbind('click').click(function(){
            $('.preview_page').removeClass('load active').find('iframe').attr('src', '');
            
            var father = $(this).parent(); // carousel
            var item = parseInt(father.attr('item')); // number item slider active
            
            if($(this).hasClass('inactive')){
                return;
            }
            
            if($(this).hasClass('right') && !$(this).hasClass('inactive')){ // click in the rigth button
                
                // put inactive left control
                father.find('.control.left').removeClass('inactive');
            
                // remove all items last class
                father.find('.item').removeClass('last');
                father.find('.item.active').addClass('last').removeClass('next'); // add next class item active
                
                setTimeout(function(){
                    father.find('.item.active').removeClass('active');
                    father.find('.item.next').addClass('active').removeClass('next last');
                    
                    if(item >= father.find('.item').length - 1){
                        father.find('.control.right').addClass('inactive');
                        item++;
                    }else{
                        item++;
                        father.find('.item').eq(item).removeClass('last active').addClass('next');
                    }
                    
                    father.attr('item', item);
                },500);
                
            }else if($(this).hasClass('left')){
                
                father.find('.control.right').removeClass('inactive');
                
                setTimeout(function(){
                    if(item <= 2){
                        father.find('.control.left').addClass('inactive');
                        
                        item--;
                        
                        father.find('.item').removeClass('next');
                        father.find('.item.active').addClass('next');
                        
                        setTimeout(function(){
                            father.find('.item.active').removeClass('active');
                            father.find('.item.last').addClass('active').removeClass('next last');
                            
                            if(item != 1){
                                father.find('.item').eq(item - 2).removeClass('next active').addClass('last');
                            }
                            father.attr('item', item);
                        },500);
                        return;
                    }else{
                        item--;
                        father.find('.item').removeClass('next');
                        father.find('.item.active').addClass('next');
                        
                        setTimeout(function(){
                            father.find('.item.active').removeClass('active');
                            father.find('.item.last').addClass('active').removeClass('next last');
                            
                            if(item != 1){
                                father.find('.item').eq(item - 2).removeClass('next active').addClass('last');
                            }
                            father.attr('item', item);
                        },500);
                    }
                    father.attr('item', item);
                },500);
            }
        });
    },
    
    tools: function(){
        $('.tools .tool').unbind('click').click(function(){
            var url = $(this).parent().parent().find('a').attr('href');
            
            if($(this).hasClass('preview')){
                $('.preview_page').toggleClass('active');
                if(App.isValidUrl(url)){
                    $('.preview_page').removeClass('load').find('iframe').attr('src', url);
                }else{
                    $('.preview_page').removeClass('load').find('iframe').attr('src', "http://dmsanchez86.github.io/"+url);
                }
                if(window.innerWidth <= 600){
                    $('.preview_page').addClass('fullscreen');
                    colorPrev = $('#themeColor').attr('content');
                    toggle = false;
                    $('#themeColor').attr('content', '#fff');
                }
            }else if($(this).hasClass('code')){
                if(App.isValidUrl(url)){
                    if(url.indexOf("full") > 0){
                        url = url.replace("full", "pen");
                    }
                    window.open(url);
                }else{
                    window.open("http://github.com/dmsanchez86/"+url);
                }
            }else if($(this).hasClass('page')){
                $('.preview_page').toggleClass('active');
                if(App.isValidUrl(url)){
                    $('.preview_page').removeClass('load').find('iframe').attr('src', url);
                }else{
                    $('.preview_page').removeClass('load').find('iframe').attr('src', "http://dmsanchez86.github.io/"+url);
                }
            }else if($(this).hasClass('download')){
                if(App.isValidUrl(url)){
                    window.open(url+"/archive/master.zip");
                }else{
                    window.open("http://github.com/dmsanchez86/"+url+"/archive/gh-pages.zip");
                }
            }
        });
    },
    
    iframe: function(){
        var iframe = document.querySelector(".preview_page iframe");

        iframe.onload = function(){
            $('.preview_page').addClass('load');
        }
    },
    
    resizeButton: function(){
        var toggle = true;
        var colorPrev = null;
        $('.resize').unbind('click').click(function(){
            if(toggle){
                colorPrev = $('#themeColor').attr('content');
                $('#themeColor').attr('content', '#fff');
                toggle = false;
            }else{
                $('#themeColor').attr('content', colorPrev);
                toggle = true;
            }
            
            $('.preview_page').toggleClass('fullscreen');
            if(window.innerWidth <= 600){
                $('.preview_page').removeClass('active');
            }
        });
    },
    
    buttonMenu: function(){
        $('.button_menu').unbind('click').click(function(){
            $('body').addClass('menu');
            $('#menu,.overlay-menu').addClass('open');
            $(this).fadeOut('1000');
        });
    },
    
    overlayAndMenuEvent: function(){
        $('#menu .close_menu,.overlay-menu').unbind('click').click(function(){
            if($('body').hasClass('profile')){
                $('body').removeClass('profile');
                $('.profile_content').removeClass('scaleOut');
                $('.popup').removeClass('active');
                
                if($(this).hasClass('overlay-menu')){
                    $('.popup').find('.popup-header .profile_content').remove();
                }
                
                setTimeout(function(){
                    $('.profile_content').addClass('scaleIn');
                },500);
            }else{
                $('body').removeClass('menu');
                $('.button_menu').fadeIn('1500');
                $('#menu,.overlay-menu').removeClass('open');
            }
        });
    },
}

App.analitycs();

$(function(){
    var loader = new THREE.FontLoader();
    loader.load( 'fonts/Chiller_Regular.json', function ( font ) {
        App.init( font );
        animate();
    } );

    setTimeout(function(){ $('.preview_page').find('iframe').attr('src', ""); },4000);
    App.validateUrl();
});

function animate(){
  render();
  requestAnimationFrame( animate );
}

function render(){
    // App.controls.update();

    if(window.innerWidth > 680){
        App.camera.position.x += ( App.mouseX - App.camera.position.x ) * 0.01;
        App.camera.position.y += ( - App.mouseY - App.camera.position.y ) * 0.01;
    }

    if(window.innerWidth <= 680){
        var timer = Date.now() * 0.0005;

        App.camera.position.x = Math.cos( timer ) * 10;
        // App.camera.position.y = 4;
        // App.camera.position.z = Math.sin( timer ) * 10;

        App.textMesh.position.z = -500;
    }

    App.camera.lookAt( App.scene.position );

    App.renderer.render( App.scene, App.camera );
}

function onWindowResize() {
    App.windowHalfX = window.innerWidth / 2;
    App.windowHalfY = window.innerHeight / 2;

    App.camera.aspect = window.innerWidth / window.innerHeight;
    App.camera.updateProjectionMatrix();

    App.renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
    App.mouseX = event.clientX - App.windowHalfX;
    App.mouseY = event.clientY - App.windowHalfY;
}

function onDocumentTouchStart( event ) {
    if ( event.touches.length == 1 ) {
        event.preventDefault();

        App.mouseX = event.touches[ 0 ].pageX - App.windowHalfX;
        App.mouseY = event.touches[ 0 ].pageY - App.windowHalfY;
    }
}

function onDocumentTouchMove( event ) {
    if ( event.touches.length == 1 ) {
        event.preventDefault();

        mouseX = event.touches[ 0 ].pageX - windowHalfX;
        mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
}
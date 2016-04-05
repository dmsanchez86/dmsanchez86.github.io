'use strict';

var App = {
    // Escena
    scene: null,
    
    // Camara
    camera: null,
    
    // Render
    renderer: null,
    
    // Contenedor
    container: null,

    mouseX : 0, 
    mouseY : 0,

    windowHalfX : window.innerWidth / 2,
    windowHalfY : window.innerHeight / 2,

    // Variables Constantes
    const: {
      WINDOW_WIDTH: window.innerWidth,
      WINDOW_HEIGHT: window.innerHeight,
      PIXEL_RATIO: window.devicePixelRatio
    },

    // Inicializacion de todo el entorno
    init: function(){
        this.fullPage();
        this.createContainer();
        this.createScene();
        this.createCamera();

        var material = new THREE.SpriteMaterial( {
            map: new THREE.CanvasTexture( App.generateSprite() ),
            blending: THREE.AdditiveBlending
        } );

        for ( var i = 0; i < 2000; i++ ) {
            var particle = new THREE.Sprite( material );
            App.initParticle( particle, i * 10 );
            App.scene.add( particle );
        }

        this.createRender();

        if(window.innerWidth >= 960){
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.addEventListener( 'touchstart', onDocumentTouchStart, false );
            document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        }

        window.addEventListener( 'resize', onWindowResize, false );

        setTimeout(function(){
            App.loader.hide();
        },2500);

        $('.button_menu').unbind('click').click(function(){
            $('#menu,.overlay-menu').addClass('open');
            $(this).fadeOut('1000');
        });

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
                $('.button_menu').fadeIn('1500');
                $('#menu,.overlay-menu').removeClass('open');
            }
        });
        
        $('.resize').unbind('click').click(function(){
            $('.preview_page').toggleClass('fullscreen');
            if(window.innerWidth <= 600){
                $('.preview_page').removeClass('active');
            }
        });

        var iframe = document.querySelector(".preview_page iframe");

        iframe.onload = function(){
            $('.preview_page').addClass('load');
        }
        
        $('.carousel .control:not(.inactive)').unbind('click').click(function(){
            $('.preview_page').removeClass('load active').find('iframe').attr('src', '');
            
            var father = $(this).parent(); // carousel
            var item = parseInt(father.attr('item')); // number item slider active
            
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
                    
                    if(item <= 1){
                         father.find('.control.left').addClass('inactive');
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
                }
            }else if($(this).hasClass('code')){
                if(App.isValidUrl(url)){
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
        
        this.contentProfile();
    },

    fullPage: function(){
        $('#main').fullpage({
            sectionsColor: ["rgb(135, 206, 235)","#61AB64","#00897b", "rgba(214, 127, 53, 0.95)"],
            anchors: ['home', 'projects', 'collaborations', 'contact'],
            menu: '#menu',
            css3: true,
            scrollOverflow: false, // for scroll big sections
            autoScrolling: true,
            // continuousVertical: true,
            navigation: true,
            afterLoad: function(anchorLink, index){
                $('.preview_page').removeClass('active load').find('iframe').attr('src','');

                $('a[href="#'+ anchorLink +'"]').addClass('active').parent().addClass('active');
                $('body').removeClass('home projects collaborations contact').addClass(anchorLink);
                $('#favicon').attr('href', 'favicon_'+anchorLink+'.png');
                
                $('.profile_content').removeClass('scaleOut');
                
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

    // funcion que me crea el contenedor
    createContainer: function(){
        // div donde se carga el dom del render
        this.container = document.querySelector('#container3D');
        this.container.className = 'container3D';
    },

    // funcion que me crea la escena
    createScene: function(){
        this.scene = new THREE.Scene();
    },

    // funcion que me crea la camara
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

    // funcion que me crea el renderizado
    createRender: function(){

      this.renderer = new THREE.CanvasRenderer();
      
      // pixel del render
      this.renderer.setPixelRatio(this.const.PIXEL_RATIO);
      
      // tamaño del render
      this.renderer.setSize(this.const.WINDOW_WIDTH, this.const.WINDOW_HEIGHT);
      
      // le agregamos un color de fondo al render
      this.renderer.setClearColor( THREE.ColorKeywords.skyblue );
      
      // añadimos un id al renderer(canvas)
      this.renderer.domElement.id = "canvas_3d";
      
      // añadimos el render al container
      App.container.appendChild(this.renderer.domElement);
    },

    generateSprite: function() {

        var canvas = document.createElement( 'canvas' );
        canvas.width = 16;
        canvas.height = 16;

        var context = canvas.getContext( '2d' );
        var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
        gradient.addColorStop( 0, 'rgba(0,0,0,1)' );
        gradient.addColorStop( 0.2, 'rgb(106, 181, 212)' );
        gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
        gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

        context.fillStyle = gradient;
        context.fillRect( 0, 0, canvas.width, canvas.height );

        return canvas;

    },

    initParticle: function( particle, delay ) {

        var particle = this instanceof THREE.Sprite ? this : particle;
        var delay = delay !== undefined ? delay : 0;

        particle.position.set( 0, 0, 0 );
        particle.scale.x = particle.scale.y = Math.random() * 32 + 16;

        new TWEEN.Tween( particle )
            .delay( delay )
            .to( {}, 10000 )
            .onComplete( App.initParticle )
            .start();

        new TWEEN.Tween( particle.position )
            .delay( delay )
            .to( { x: Math.random() * 4000 - 2000, y: Math.random() * 1000 - 500, z: Math.random() * 4000 - 2000 }, 10000 )
            .start();

        new TWEEN.Tween( particle.scale )
            .delay( delay )
            .to( { x: 0.01, y: 0.01 }, 10000 )
            .start();

    },

    loader: {
        hide: function(){
            $('.loader').fadeOut(1000);
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
                
                window.location.hash = "#about";
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
            }
        });
    }
}

$().ready(function(){
    App.init();
    animate();
    setTimeout(function(){
        $('.preview_page').find('iframe').attr('src', "");
    },4000);
});

// funcion render() por defecto de three js
function animate(){
    requestAnimationFrame( animate );
    render();
}

// render()
function render(){
    App.renderer.render(App.scene, App.camera);
    TWEEN.update();
    App.camera.position.x += ( App.mouseX - App.camera.position.x ) * 0.05;
    App.camera.position.y += ( - App.mouseY - App.camera.position.y ) * 0.05;
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

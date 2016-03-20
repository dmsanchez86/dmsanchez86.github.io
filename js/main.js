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
    
    // Contadoras
    projects_count: 0,
    collaboration_count: 0,

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

        for ( var i = 0; i < 1000; i++ ) {
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
            $('#menu').toggleClass('open');
            $(this).fadeOut('1000');
        });

        $('#menu .close_menu').unbind('click').click(function(){
            $('#menu').removeClass('open');
            $('.button_menu').fadeIn('1500');
        });
        
/*
        $('.project .title a').mouseenter(function(){
            if(App.isValidUrl($(this).attr('href'))){
                $('.preview_page').addClass('active').find('iframe').attr('src', $(this).attr('href'));
            }else{
                $('.preview_page').addClass('active').find('iframe').attr('src', "http://dmsanchez86.github.io/"+$(this).attr('href'));
            }
        });
        $('.project .title a').mouseleave(function(){
            $('.preview_page').addClass('active').find('iframe').attr('src', "");
        });*/
        
        $('.resize').unbind('click').click(function(){
            $('.preview_page').toggleClass('fullscreen');
        });

        var iframe = document.querySelector(".preview_page iframe");

        iframe.onload = function(){
            $('.preview_page').addClass('load');
        }
        
    },

    fullPage: function(){
        $('#main').fullpage({
            sectionsColor: ["rgb(135, 206, 235)","#61AB64","#00897b", "rgba(214, 127, 53, 0.95)"],
            anchors: ['home', 'projects', 'collaborations', 'contact'],
            menu: '#menu',
            css3: true,
            navigation: true,
            afterLoad: function(anchorLink, index){

                if(anchorLink == "projects" || anchorLink == "collaborations"){
                    $('.preview_page').addClass('active');

                    if(anchorLink == "projects"){
                        $('.preview_page').addClass('active').find('iframe').attr('src', 'http://dmsanchez86.github.io/'+$('#section_projects .slide:first-child .project .title a').attr('href'));
                    }else{
                        $('.preview_page').addClass('active').find('iframe').attr('src', $('#section_collaborations .slide:first-child .project .title a').attr('href'));
                    }

                }else{
                    $('.preview_page').removeClass('active');
                }

                $('a[href="#'+ anchorLink +'"]').addClass('active').parent().addClass('active');
                $('body').removeClass('home projects collaborations contact').addClass(anchorLink);
                $('#favicon').attr('href', 'favicon_'+anchorLink+'.png');
            },
            afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
                
                if(anchorLink == "projects"){
                    console.log($('#section_projects .slide').eq(slideIndex).find('.project .title a').attr('href'));
                    if($('#section_projects .slide').eq(slideIndex).find('.project .title a').attr('href') != "https://github.com/dmsanchez86/Mecaut"){
                        $('.preview_page').addClass('active').find('iframe').attr('src', 'http://dmsanchez86.github.io/'+$('#section_projects .slide').eq(slideIndex).find('.project .title a').attr('href'));
                    }else{
                        $('.preview_page').addClass('active').find('iframe').attr('src', $('#section_projects .slide').eq(slideIndex).find('.project .title a').attr('href'));
                    }
                    setTimeout(function(){
                        $('.preview_page').addClass('active');
                    },3000); 
                }else{
                    if($('#section_collaborations .slide').eq(slideIndex).find('.project .title a').attr('href') == "https://play.google.com/store/apps/details?id=com.phonegap.jurisquiz&hl=es_419" || $('#section_collaborations .slide').eq(slideIndex).find('.project .title a').attr('href') == "https://play.google.com/store/apps/details?id=com.zopp.artritis"){
                        $('.preview_page').removeClass('active');
                    }else{
                        $('.preview_page').addClass('active');
                        $('.preview_page').addClass('active').find('iframe').attr('src', $('#section_collaborations .slide').eq(slideIndex).find('.project .title a').attr('href'));
                        
                        setTimeout(function(){
                            $('.preview_page').addClass('active');
                        },3000); 
                    }
                }   
            },
            onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
                $('.preview_page').removeClass('active load').find('iframe').attr('src','');
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

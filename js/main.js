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
    
    // Controles de la camara
    controls: null,
    
    // Reloj
    clock: null,
    
    // Estadisticas del renderizado y consumo de memoria
    stats: null,

    // Variables Constantes
    const: {
      WINDOW_WIDTH: window.innerWidth,
      WINDOW_HEIGHT: window.innerHeight,
      PIXEL_RATIO: window.devicePixelRatio
    },

    // variable que me va a contener todos los materiales
    objects: {
        worldmap: null,
        plane: null,
        axis: null,
        bracket: null,
        ambientScene: null,
    },

    // variable que me va a contener todas las luces que valla a aplicar
    lights: {
        ambient: null,
        point: null,
        pointSide: null,
        directional: null,
        spot: null,
        hemisphere: null
    },

    // variables que son usadas en los events de los helpers
    helpers: {
        edges: null,
        faceNormal: null,
        vertexNormal: null,
        camera: null,
        pointLight: null,
        directionalLight: null,
        spotLight: null,
    },

    // Inicializacion de todo el entorno
    init: function(){
        this.createContainer();
        this.createScene();
        this.createCamera();
        this.createRender();
        this.createControls();
        //this.createAmbientScene();
        //this.events.fullScreen();
        this.events.plane();
        this.events.worldmap();
        this.createAxis();
        //this.createTooth('primer_molar');
        this.createLights();
        this.loader.hide();
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
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        
        // posiciono la camara
        this.camera.position.set(400,400,400);
        
        // rotacion de la camara
        //this.camera.rotation.set(-1.5707,9.935,1.4567);
        
        // insertamos la camara a la escena
        this.scene.add(this.camera);
        
        // Camera look at
	    this.camera.lookAt( this.scene.position );
    },

    // funcion que me crea el renderizado
    createRender: function(){
        
      this.renderer = new THREE.WebGLRenderer({
          antialias: true,
          preserveDrawingBuffer: true, // funcion que me permite tomar las capturas de las caras del diente
      }); 
      
      // pixel del render
      this.renderer.setPixelRatio(this.const.PIXEL_RATIO);
      
      // tamaño del render
      this.renderer.setSize(this.const.WINDOW_WIDTH, this.const.WINDOW_HEIGHT);
      
      // le agregamos un color de fondo al render
      this.renderer.setClearColor( THREE.ColorKeywords.skyblue );
      
      // añadimos la gama de entrada
      this.renderer.gammaInput = true;
      
      // añadimos la gama de salida
      this.renderer.gammaOutput = true;
      
      // activamos las sombras en el mapa
      this.renderer.shadowMapEnabled = true;
      this.renderer.shadowMapSoft = true;
      
      // añadimos un id al renderer(canvas)
      this.renderer.domElement.id = "canvas_3d";
      
      // añadimos el render al container
      App.container.appendChild(this.renderer.domElement);
    },

    // funcion que me crea los ejes de apoyo (x,y,z)
    createAxis: function(){
        // creo el axis
        this.axis = new THREE.AxisHelper(1000);
        this.axis.visible = false;
        
        // lo añado a la camara
        this.scene.add(this.axis);
    },

    // funcion que me crea las luces
    createLights: function(){
        this.events.pointLight();
        this.events.ambientLight();
        //this.events.directionalLight();
        //this.events.spotLight();
    },

    // funcion que me crea los controles
    createControls: function(){
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        
        // ponemos la distancia minima y la maxima del zoom
        this.controls.minDistance = 50;
        this.controls.maxDistance = 2000;
        
        // añadimos el evento change para que se actualicen los controles
        this.controls.addEventListener('change', render);
    },

    // events 
    events: {
    	// funcion que me carga el mapamundi
        worldmap: function(){
            // cargo la textura
            //var map = THREE.ImageUtils.loadTexture( 'textures/mapamundi.jpg' );
            
            // le asigno un material
            var material = new THREE.MeshBasicMaterial( {
                //map: map,
                //side: THREE.DoubleSide, 
                //wireframe : false ,
                color: 0x2194ce,
                vertexColor: THREE.FaceColors,
                //specular: 0xed1212, 
                //emissive: 0xfff ,
                //shininess: 80,
                shading: THREE.FlatShading,
                fog: true,
                //envMaps: 'reflection',
            } );
    	    
    	    // creo la malla
        	App.objects.worldmap = new THREE.Mesh( new THREE.SphereGeometry( 30,32,32, 0, 6.3, 0, 3.1), material );
        	
        	App.objects.worldmap.position.set( 0, 100, 0 );
        	App.objects.worldmap.scale.set( 3, 3, 3 );
        	App.objects.worldmap.castShadow = true;
        	App.objects.worldmap.visible = true; // mostrar o ocultar el mapamundi
        	//App.scene.add( App.objects.worldmap );

        	//var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
        	var geometry = new THREE.SphereGeometry( 30,32,32, 0, 6.3, 0, 3.1);
        	var mesh = new THREE.Mesh( geometry );

        	App.generateVertexColors( geometry );

        	mesh.material = App.chooseFromHash( mesh, geometry );

            App.objects.sphere = mesh;

        	mesh.scale.set( 8, 8, 8 );
            mesh.position.y = 100;

        	App.scene.add( mesh );
        	
        // 	App.events.edgesHelper(App.objects.worldmap, 0x000000);
        // 	App.events.faceNormalHelper(App.objects.worldmap, 5, 0x000000, 1);
        // 	App.events.vertexNormalHelper(App.objects.worldmap, 5, 0xff0000, 1);
            // create a canvas element




            // add 3D text
            /*var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
            var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
            var materialArray = [ materialFront, materialSide ];
            var textGeom = new THREE.TextGeometry( "dmsanchez86", 
            {
                size: 30, height: 4, curveSegments: 3,
                font: "helvetiker", weight: "bold", style: "normal",
                bevelThickness: 1, bevelSize: 2, bevelEnabled: true,
                material: 0, extrudeMaterial: 1
            });
            // font: helvetiker, gentilis, droid sans, droid serif, optimer
            // weight: normal, bold
            
            var textMaterial = new THREE.MeshFaceMaterial(materialArray);
            var textMesh = new THREE.Mesh(textGeom, textMaterial );
            
            textGeom.computeBoundingBox();
            var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;
            
            textMesh.position.set( -0.5 * textWidth, 50, 100 );
            textMesh.rotation.x = -Math.PI / 4;
            scene.add(textMesh);*/
    

        },

        // funcion que me carga el plano
        plane: function(){
            // Textura
            //var texturePlane = new THREE.ImageUtils.loadTexture("textures/checkerboard.jpg");
            
            // Geometria
            var planeGeometry = new THREE.PlaneGeometry(15000, 15000, 10, 10);
            //texturePlane.wrapS = texturePlane.wrapT = THREE.RepeatWrapping; // repeticion de la textura
            //texturePlane.repeat.set(10,10); // segmentos de la repeticion
            
            // Material
            var planeMaterial = new THREE.MeshLambertMaterial({
            	//map: texturePlane,
            	side: THREE.DoubleSide,
            	color: 0xfff
            });
            
            // Malla
            App.objects.plane = new THREE.Mesh(planeGeometry, planeMaterial);
            App.objects.plane.receiveShadow = true;
            App.objects.plane.castShadow = true;
            App.objects.plane.visible = false;
        
            // Rotacion del plano
            App.objects.plane.rotation.x = -0.5 * Math.PI;
        
            // añado el plano a la escena
            App.scene.add(App.objects.plane);
        },

        // funcion que me carga el evento de la luz point
        pointLight: function(){
            // PointLight
            App.lights.point = new THREE.PointLight(0xF9F2F2, .7, 0, 2);
            App.lights.point.position.set(0,1500,-1500); // posicion
            // configuracion de la camra para sombras
            App.lights.point.castShadow = false; // permito a la luz que emita sombras
            App.lights.point.shadowCameraVisible = true;
            
            App.lights.point.shadowCameraNear = 250;
            App.lights.point.shadowCameraFar = 20000;
            
            App.lights.point.shadowCameraLeft = -100;
            App.lights.point.shadowCameraRight = 100;
            App.lights.point.shadowCameraTop = -100;
            App.lights.point.shadowCameraBottom = 100;
            
            App.lights.point.visible = false;
            
            App.scene.add(App.lights.point); // añado la luz a la escena
            
            // añado el helper
            App.events.helpers.pointLight(App.lights.point, 30);
            
            // ----------------------------------------
            // Otra luz con las mismas caracteristicas
            // ----------------------------------------
            
            // PointLight
            App.lights.pointSide = new THREE.PointLight(0xF9F2F2, .5, 0, 2);
            App.lights.pointSide.position.set(-500,500,0); // posicion
            
            App.scene.add(App.lights.pointSide); // añado la luz a la escena
            
            // añado el helper
            // App.events.helpers.pointLight(App.lights.pointSide, 30);
        },

        // funcion que me crea la luz de ambiente
        ambientLight: function(){
            App.lights.ambient = new THREE.AmbientLight(0xffffff);
            //App.scene.add(App.lights.ambient);
        },

        helpers:{
        	// funcion que me carga el helper de la luz point
            pointLight: function(pointLight, sphere){
                // HelperPoint
                App.helpers.pointLight = new THREE.PointLightHelper( pointLight, sphere );
                App.scene.add( App.helpers.pointLight );
            },
        }
        
    },

    generateMorphTargets:  function( mesh, geometry ) {

		var vertices = [], scale;

		for ( var i = 0; i < geometry.vertices.length; i++ ) {

			vertices.push( geometry.vertices[ i ].clone() );

			scale = 1 + Math.random() * 0.3;

			vertices[ vertices.length - 1 ].x *= scale;
			vertices[ vertices.length - 1 ].y *= scale;
			vertices[ vertices.length - 1 ].z *= scale;

		}

		geometry.morphTargets.push( { name: "target1", vertices: vertices } );

		//geometry.update;

	},

	generateVertexColors: function( geometry ) {

		for ( var i=0, il = geometry.faces.length; i < il; i++ ) {

			geometry.faces[i].vertexColors.push( new THREE.Color().setHSL(
				i / il * Math.random(),
				0.5,
				0.5
			) );
			geometry.faces[i].vertexColors.push( new THREE.Color().setHSL(
				i / il * Math.random(),
				0.5,
				0.5
			) );
			geometry.faces[i].vertexColors.push( new THREE.Color().setHSL(
				i / il * Math.random(),
				0.5,
				0.5
			) );

			geometry.faces[i].color = new THREE.Color().setHSL(
				i / il * Math.random(),
				0.5,
				0.5
			);

		}

	},

	chooseFromHash: function ( mesh, geometry ) {

		var selectedMaterial = "MeshBasicMaterial";
		var material;

		switch (selectedMaterial) {

		case "MeshBasicMaterial" :

			material = new THREE.MeshBasicMaterial({
				color: THREE.ColorKeywords.deeppink,
				vertexColors: THREE.FaceColors

			});
			//guiMaterial( gui, mesh, material, geometry );
			//guiMeshBasicMaterial( gui, mesh, material, geometry );

			return material;

			break;

		case "MeshLambertMaterial" :

			material = new THREE.MeshLambertMaterial({color: 0x2194CE});
			guiMaterial( gui, mesh, material, geometry );
			guiMeshLambertMaterial( gui, mesh, material, geometry );

			return material;

			break;

		case "MeshPhongMaterial" :

			material = new THREE.MeshPhongMaterial({color: 0x2194CE});
			guiMaterial( gui, mesh, material, geometry );
			guiMeshPhongMaterial( gui, mesh, material, geometry );

			return material;

			break;

		case "MeshDepthMaterial" :

			material = new THREE.MeshDepthMaterial({color: 0x2194CE});
			guiMaterial( gui, mesh, material, geometry );
			guiMeshDepthMaterial( gui, mesh, material, geometry );

			return material;

			break;

		case "MeshNormalMaterial" :

			material = new THREE.MeshNormalMaterial();
			guiMaterial( gui, mesh, material, geometry );
			guiMeshNormalMaterial( gui, mesh, material, geometry );

			return material;

			break;

		case "LineBasicMaterial" :

			material = new THREE.LineBasicMaterial({color: 0x2194CE});
			guiMaterial( gui, mesh, material, geometry );
			guiLineBasicMaterial( gui, mesh, material, geometry );

			return material;

			break;
		}

	},

    loader: {
        hide: function(){
            $('.loader').fadeOut(1000);
        },
        show: function(){
            $('.loader').fadeIn(1000);
        },
    }
}


$().ready(function(){
	$('#main').fullpage({
        sectionsColor: ["rgb(135, 206, 235)","#61AB64","#00897b", "rgba(214, 127, 53, 0.95)"],
        anchors: ['home', 'projects', 'colaborations', 'contact'],
        menu: '#menu',
        css3: true,
        navigation: true,
        //navigationTooltips: ['Home', 'Projects', 'Colaborations', 'Contact'],
        //showActiveTooltip: true,
        scrollingSpeed: 1300,
        scrollBar: false,
        //fitToSection: true,
        //fitToSectionDelay: 2000,
        easing: 'easeInQuart',
        afterLoad: function(anchorLink, index){
            console.log({anchorLink, index});
            $('a[href="#'+ anchorLink +'"]').addClass('active').parent().addClass('active');
            $('body').removeClass('home projects colaborations contact').addClass(anchorLink);
        }
    });

    App.init();
    animate();
});

// funcion render() por defecto de three js
function animate(){
    requestAnimationFrame( animate );
    render();
}

// render()
function render(){
    App.renderer.render(App.scene, App.camera);
    App.controls.update();
    
    // Giro el mapamundi
    // App.objects.worldmap.rotation.y += 0.005;
    
    // var time = Date.now() * 0.0005;
    
//     App.lights.point.position.x = Math.sin( time * 0.7 ) * 300;
// 	App.lights.point.position.y = Math.cos( time * 0.5 ) * 400;
// 	App.lights.point.position.z = Math.cos( time * 0.3 ) * 300;
}

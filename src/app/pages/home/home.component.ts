import { Component, OnInit } from '@angular/core';
import * as THREE from 'tree';

declare const $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  scene: any;
  plane: any;
  lights: any = [];
  mouseX: any;
  startTime: any;
  mouseY: any;
  lod: any;
  points: any = [];
  renderer: any;
  textMesh: any;
  container: HTMLElement;
  camera: any;

  constructor() {}

  ngOnInit() {
    // this.fontsThree();
    setTimeout(() => {
      let atomLoader: HTMLElement = document.querySelector('#atomLoader');
      atomLoader.style.display = 'none';
    }, 1000);

    this.fullpage();
  }

  initTree(font: any) {
    // setTimeout(() => {
    //   let atomLoader: HTMLElement = document.querySelector('#atomLoader');
    //   atomLoader.style.display = 'none';
    // }, 3000);

    this.treeJS(font);
  }

  treeJS(font) {
    this.container = document.querySelector('#container3D');
    document.querySelector('#container3D').className = 'container3D';

    this.scene = new THREE.Scene();

    let fov = 90;
    let aspect = window.innerWidth / window.innerHeight;
    let near = 0.1;
    let far = 20000;

    // creacion de la camara con sus parametros
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    // this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

    // posiciono la camara
    this.camera.position.set(0, 0, 700);

    // insertamos la camara a la escena
    this.scene.add(this.camera);

    // Camera look at
    this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    this.renderer.physicallyCorrectLights = true;

    this.renderer.shadowMap.enabled = true;

    // pixel del render
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // tamaño del render
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // le agregamos un color de fondo al render
    // this.renderer.setClearColor( THREE.ColorKeywords.skyblue );

    // añadimos un id al renderer(canvas)
    this.renderer.domElement.id = 'canvas_3d';

    // añadimos el render al container
    document.querySelector('#container3D').appendChild(this.renderer.domElement);

    this.createText(font);

    var groundMaterial = new THREE.MeshBasicMaterial({ color: 0x328cb1 });
    this.plane = new THREE.Mesh(
      new THREE.BoxGeometry(800, 10, 40),
      groundMaterial
    );
    this.plane.position.y = -200;
    this.scene.add(this.plane);

    var geometry = [
      [new THREE.IcosahedronGeometry(100, 4), 50],
      [new THREE.IcosahedronGeometry(100, 4), 300],
      [new THREE.IcosahedronGeometry(100, 4), 1000],
      [new THREE.IcosahedronGeometry(100, 4), 2000],
      [new THREE.IcosahedronGeometry(100, 4), 8000],
    ];

    var material = new THREE.MeshPhongMaterial({
      color: 0x323232,
      specular: 0x4c9cbd,
      shininess: 8 /* wireframe: true */,
    });
    material.opacity = 1;

    var i, j, mesh;

    for (j = 0; j < 1000; j++) {
      this.lod = new THREE.LOD();

      for (i = 0; i < geometry.length; i++) {
        mesh = new THREE.Mesh(geometry[i][0], material);
        mesh.scale.set(0.7, 0.7, 0.7);
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        this.lod.addLevel(mesh, geometry[i][1]);
        this.points.push(mesh);
      }

      this.lod.position.x = 10000 * (0.7 - Math.random());
      this.lod.position.y = 7500 * (0.7 - Math.random());
      this.lod.position.z = 10000 * (0.7 - Math.random());
      this.lod.updateMatrix();
      // this.lod.matrixAutoUpdate = false;
      this.scene.add(this.lod);

      this.lights.ambient = new THREE.AmbientLight(0xf3f3f3);

      this.scene.add(this.lights.ambient);

      this.lights.directional = new THREE.DirectionalLight(0xffffff, 2.5);
      this.lights.directional.position.set(-10, 1800, 1000);
      this.lights.directional.castShadow = true;
      var d = 20;
      this.lights.directional.shadow.camera.left = -d;
      this.lights.directional.shadow.camera.right = d;
      this.lights.directional.shadow.camera.top = d;
      this.lights.directional.shadow.camera.bottom = -d;

      this.lights.directional.shadow.camera.near = 2;
      this.lights.directional.shadow.camera.far = 50;

      this.lights.directional.shadow.mapSize.x = 1024;
      this.lights.directional.shadow.mapSize.y = 1024;

      this.scene.add(this.lights.directional);
    }
  }

  createText(font) {
    var size = 235;

    if (window.innerWidth < 460) {
      size = 135;
    } else if (window.innerWidth < 680) {
      size = 165;
    }

    var geometry = new THREE.TextGeometry('dmsanchez86', {
      font: font,
      size: size,
      height: 30,
      curveSegments: 20,
      bevelEnabled: true,
      bevelThickness: 22,
      bevelSize: 8,
    });

    geometry.computeBoundingBox();

    var centerOffset =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    var material = new THREE.MultiMaterial([
      new THREE.MeshPhongMaterial({ color: 0x4c9cbd, specular: 0xaaaaaa }),
      new THREE.MeshPhongMaterial({ color: 0x328cb1, specular: 0xaaaaaa }),
    ]);

    this.textMesh = new THREE.Mesh(geometry, material);

    this.textMesh.position.x = centerOffset;
    this.textMesh.position.y = -80;
    this.textMesh.position.z = window.innerWidth < 460 ? -200 : 0;

    this.textMesh.rotation.x = 0;
    this.textMesh.rotation.y = Math.PI * 2;

    var group = new THREE.Group();
    group.add(this.textMesh);
    this.scene.add(group);
  }

  fontsThree() {
    var fonts = [
      'Chiller_Regular.json',
      'Buxton_Sketch_Regular.json',
      'Agency FB_Regular.json',
      'Bradley Hand ITC_Regular.json',
      'Papyrus_Regular.json',
      'Segoe Marker_Regular.json',
      'Viner Hand ITC_Regular.json',
    ];
    var selectedFont = Math.floor(Math.random() * fonts.length + 1) - 1;

    // validamos que no sean las mismas fuentes
    if (localStorage.getItem('fuente') != null) {
      // validamos que no sean las mismas
      if (localStorage.getItem('fuente') == fonts[selectedFont]) {
        selectedFont = Math.floor(Math.random() * fonts.length + 1) - 1;
      }
    }

    // guardamos la referencia en el localstorage para poder que no se repita la fuente
    localStorage.setItem('fuente', fonts[selectedFont]);

    var loader = new THREE.FontLoader();
    loader.load('assets/fonts/' + fonts[selectedFont], (font) => {
      this.initTree(font);
      this.animate();
    });
  }

  animate() {
    this.render();
    requestAnimationFrame(this.animate);
  }

  render() {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].position.x = (this.mouseX - this.camera.position.x) * 0.07;
      this.points[i].position.y =
        (-this.mouseY - this.camera.position.y) * 0.08;
      this.points[i].position.z = (this.mouseY - this.camera.position.y) * 0.07;

      this.points[i].updateMatrix();
    }

    var dtime = Date.now() - this.startTime;
    this.plane.scale.x = 0.5 + 0.3 * Math.sin(dtime / 300);

    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.04;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.04;

    this.camera.lookAt(this.scene.position);

    this.renderer.render(this.scene, this.camera);
  }

  fullpage(){
    var colorsTheme = ['#87CEEB', '#61AB64', '#00897b', '#D67F35', '#e6812b'];

    $('#main').fullpage({
      sectionsColor: colorsTheme,
      anchors: ['home', 'projects', 'portafolio', 'contact', 'footer'],
      menu: '#menu',
      css3: true,
      scrollOverflow: false,
      autoScrolling: true,
      navigationTooltips: [
        'Home',
        'Projects',
        'portafolio',
        'Contact',
        'Footer',
      ],
      // continuousVertical: true,
      navigation: true,
      afterLoad(anchorLink, index) {
        console.log('afterLoad');

        $('.preview_page')
          .removeClass('active load')
          .find('iframe')
          .attr('src', '');

        $('a[href="#' + anchorLink + '"]')
          .addClass('active')
          .parent()
          .addClass('active');
        $('body')
          .removeClass('home projects portafolio contact footer')
          .addClass(anchorLink);
        $('#favicon').attr('href', 'favicon_' + anchorLink + '.png');

        $('.profile_content').removeClass('scaleOut');

        var color = '';

        switch (anchorLink) {
          case 'home':
            color = colorsTheme[0];
            break;
          case 'projects':
            color = colorsTheme[1];
            break;
          case 'portafolio':
            color = colorsTheme[2];
            break;
          case 'contact':
            color = colorsTheme[3];
            break;
          case 'footer':
            color = colorsTheme[4];
            break;
        }

        $('#themeColor').attr('content', color);

        setTimeout(function () {
          $('.profile_content').addClass('scaleIn');
        }, 300);
      },
      onLeave() {
        console.log('onLeave');

        $('.profile_content').removeClass('scaleIn').addClass('scaleOut');

        setTimeout(function () {
          $('.profile_content').removeClass('scaleOut');
        }, 1000);
      },
    });

    $('.profile_content')
      .unbind('click')
      .click(function () {
        $('.preview_page').removeClass('active load');

        if ($('body').hasClass('profile')) {
          $('body').removeClass('profile');
          $('.popup')
            .removeClass('active')
            .find('.popup-header .profile_content')
            .remove();

          $('.profile_content').removeClass('scaleOut');

          setTimeout(function () {
            $('.profile_content').addClass('scaleIn');
            setTimeout(function () {
              // $('.profile_content').removeClass('scaleIn');
            }, 500);
          }, 500);

          window.location.hash = $('#menu li.active a').attr('href');
        } else {
          $('body').addClass('profile');
          $(this).removeClass('scaleIn');

          var clonePopup = $('.profile_content').clone();

          setTimeout(function () {
            $('.profile_content').addClass('scaleOut');
            $('.popup').addClass('active');

            setTimeout(function () {
              clonePopup.appendTo('.popup .popup-header');
              // App.contentProfile();
            }, 1000);
          }, 100);

          window.location.hash = '#about';
        }
      });
  }
}

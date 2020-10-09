import { Component, OnDestroy, OnInit } from '@angular/core';
import { isValidUrl } from 'src/environments/global_functions';

import * as THREE from 'tree';

declare const $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    document.body.classList.remove('home');
  }

  ngOnInit() {
    document.body.classList.add('home');
    // this.fontsThree();

    setTimeout(() => $('.twitter_content .container').addClass('close'), 2000);

    this.carouselControls();
    this.tools();
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

  carouselControls(){
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
  }

  colorPrev = null;
  toggle = false;

  tools(){
    $('.tools .tool').unbind('click').click((e) => {
      console.log(e.target);
      console.log(e.target.nodeName);
      var url = $(e.target).parent().parent().parent().find('a').attr('href');
      var ref = $(e.target);
      var parent = $(e.target).parent();

      // console.log(ref);
      console.log(parent);
      // debugger

      if(parent.hasClass('preview')){
        $('.preview_page').toggleClass('active');
        if(isValidUrl(url)){
            $('.preview_page').removeClass('load').find('iframe').attr('src', url);
        }else{
            $('.preview_page').removeClass('load').find('iframe').attr('src', "http://dmsanchez86.github.io/"+url);
        }
        if(window.innerWidth <= 600){
            $('.preview_page').addClass('fullscreen');
            this.colorPrev = $('#themeColor').attr('content');
            this.toggle = false;
            $('#themeColor').attr('content', '#fff');
        }
      }else if(parent.hasClass('code')){
          if(isValidUrl(url)){
              if(url.indexOf("full") > 0){
                  url = url.replace("full", "pen");
              }
              window.open(url);
          }else{
              window.open("http://github.com/dmsanchez86/"+url);
          }
      }else if(parent.hasClass('page')){
          $('.preview_page').toggleClass('active');
          if(isValidUrl(url)){
              $('.preview_page').removeClass('load').find('iframe').attr('src', url);
          }else{
              $('.preview_page').removeClass('load').find('iframe').attr('src', "http://dmsanchez86.github.io/"+url);
          }
      }else if(parent.hasClass('download')){
          if(isValidUrl(url)){
              window.open(url+"/archive/master.zip");
          }else{
              window.open("http://github.com/dmsanchez86/"+url+"/archive/gh-pages.zip");
          }
      }
    });
  }
}

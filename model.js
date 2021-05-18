import * as THREE from "https://cdn.skypack.dev/three@0.128.0";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

loader.load( './scene.gltf', function ( gltf ) {

    scene.add( gltf.scene );
    controls.update();
    function animate() {
    
        requestAnimationFrame( animate );
        controls.autoRotate=true;
        controls.maxDistance=15
        controls.autoRotateSpeed = 2.0;
        controls.enableDamping=true;
        controls.update();
        renderer.render( scene, camera );
    }
    animate()
    
}, undefined, function (error) {
    console.error( error )
} );

camera.position.set(0, 6 ,10);





import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118.3/build/three.module.js";
import Draw from "./Draw.js";
import Shere from "./Models/Shere.js";
import Orbit from "./Models/Orbite.js";
import { DRACOLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118.3/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.118.3/examples/jsm/loaders/GLTFLoader.js";
import {swap} from "./Events/InitEvent.js";

const COUNT_SHERE_LINE = 8;

const scene = new THREE.Scene(); 

function initLight(){
	const color = 0xFFFFFF;
	const intensity = 1;
	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(0, 0, 10);

	return light;
}
var width, height

function initCamera(){
	const canvas = document.getElementById("container");
	width = canvas.offsetWidth; // width of browser window
	height = canvas.offsetHeight; // height of browser window
	let viewAngle = 45; // view angle for Camera
	let nearClipping = 0.1; // near view point of camera
	let farClipping = 9999; // far view point of camera
	const camera = new THREE.PerspectiveCamera(viewAngle, 1, nearClipping, farClipping);
	camera.position.set(0,0,30);

	return camera;
}

const light = initLight();
const camera = initCamera();

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);

let element = document.getElementById("container");
element.appendChild(renderer.domElement);

const direction = new THREE.Vector2();
const scale = {value: 1};
direction.y = 0.01;
swap(element, direction, scale);
const orbit = new Orbit();
orbit.generate(COUNT_SHERE_LINE, 0.5);
const shere = new Shere(orbit, direction, scale);

const loader = new GLTFLoader();

DRACOLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
loader.setDRACOLoader( new DRACOLoader() );

let mixer, draw;

const vshader = document.getElementById('vertexShaderAtmosphere');
const fshader = document.getElementById('fragmentShaderAtmosphere');
console.log(vshader.textContent);


const purpleShader=  new THREE.MeshPhongMaterial({
    color: 0x782b7f,
    emissive: 0x180819,
    transparent: true,
    opacity: .5 });

const test = new THREE.Mesh(new THREE.SphereBufferGeometry( 2, 15, 15 ), purpleShader);
test.material.side = THREE.BackSide;
shere.getModels().add( test );

/*
loader.load('untitled.glb', function ( gltf ) {
	mixer = new THREE.AnimationMixer( gltf.scene );
	mixer.clipAction( gltf.animations[ 0 ] ).play();
	shere.getModels().add( gltf.scene );

	draw = new Draw(scene, camera, renderer, light, shere, mixer);
	draw.draw();

}, undefined, function ( error ) {
	console.error( error );
} );

*/

draw = new Draw(scene, camera, renderer, light, shere, mixer);
draw.draw();
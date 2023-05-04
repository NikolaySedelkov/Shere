//import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118.3/build/three.module.js";

export default class Draw{
    constructor(scene, camera, render, light, mainObject, mixer){
        this.scene = scene;
        this.objects = [];
        scene.add(light);
        this.light = light;
        this.camera = camera;
        this.renderer = render;
        this.main = mainObject;
        this.mixer = mixer;
        this.scene.add(mainObject.getModels());
        //this.clock = new THREE.Clock();
    }
    
    draw(){
        this.main.animate();
        requestAnimationFrame(() => {this.draw()});
        this.renderer.render(this.scene, this.camera);
        //const delta = this.clock.getDelta();

		//this.mixer.update( delta );
    }
}
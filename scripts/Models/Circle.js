import * as THREE from "../moduls/three.module.js"

export default class Circle{

    static material = new THREE.MeshPhongMaterial({color : "white"});
    constructor(x, y, z, R){
        this.geometry = new THREE.Mesh(new THREE.SphereGeometry( R, 15, 15 ), Circle.material);
        this.geometry.position.set(x, y, z);
    }

    getModels(){
        return this.geometry;
    }

    rotateY(angle){
        this.geometry.rotation.y = angle;
    }
}
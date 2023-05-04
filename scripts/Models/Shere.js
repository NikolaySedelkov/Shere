import * as THREE from "../moduls/three.module.js"

export default class Shere{

    static ACCELERATION = 0.01;
    static SPEED_X = 0;
    static SPEED_Y = 0;
    constructor(perimetr, direction, scale){
        this.geometry = new THREE.Object3D();
        this.perimetr = perimetr;
        this.geometry.add(perimetr.getModels());
        this.direction = direction;
        this.scale = scale;
    }

    #basicSpeed(){
        if(Math.sign(this.direction.x) === 1){
            
            if(this.direction.x - Shere.ACCELERATION > Shere.SPEED_X)
                this.direction.x -= Shere.ACCELERATION;
        }
        else {
            if(this.direction.x + Shere.ACCELERATION < -Shere.SPEED_X)
                this.direction.x += Shere.ACCELERATION;
        }
        if(Math.sign(this.direction.y) === 1){
            if(this.direction.y - Shere.ACCELERATION > Shere.SPEED_Y)
                this.direction.y -= Shere.ACCELERATION;
        }
        else {
            if(this.direction.y + Shere.ACCELERATION < -Shere.SPEED_Y)
                this.direction.y += Shere.ACCELERATION;
        }
    }

    animate(){
        this.perimetr.rotation(this.direction.x, this.direction.y);
        this.geometry.scale.set(this.scale.value, this.scale.value, this.scale.value);
        this.#basicSpeed();
    }

    rotateY(angle){
        this.geometry.rotation.y += angle;
    }

    getModels(){
        return  this.geometry;
    }
}
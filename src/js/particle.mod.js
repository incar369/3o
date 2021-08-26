import _mod from "./mod.mod"
import * as THREE from 'three';




class Particle extends _mod{
	constructor(){
		super('Particle','for Gra')
        this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        this.material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh( this.geometry, this.material );
	}
    behavior(time){
        this.mesh.rotation.x = time / -2000;
        this.mesh.rotation.y = time / 1000;
    }
}
export default Particle




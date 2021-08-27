import _mod from "./mod.mod"
import * as THREE from 'three';




class Particle extends _mod{
	constructor(x,y,z){
		super('Particle','for Gra')
        this.geometry = new THREE.SphereGeometry( 0.2, 10, 5 ); //BoxGeometry( 0.2, 0.2, 0.2 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x114356 } );  //MeshNormalMaterial();
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.x = x || 0;
        this.mesh.position.y = y || 0;
        this.mesh.position.z = z || 0;
	}
    behavior(time){
        this.mesh.rotation.x+=0.05
    }
}

export default Particle




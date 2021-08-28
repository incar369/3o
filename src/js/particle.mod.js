import _mod from "./mod.mod"
import * as THREE from 'three';




class Particle extends _mod{
	constructor(x,y,z,type,color){
		super('Particle','for Gra')
        this.type=type || 'none'
        this.geometry = new THREE.SphereGeometry( 0.2, 10, 5 ); //BoxGeometry( 0.2, 0.2, 0.2 );
        this.material = new THREE.MeshBasicMaterial( { color: color || 0x333333 } );  //MeshNormalMaterial();
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        this.mesh.position.x = x || 0;
        this.mesh.position.y = y || 0;
        this.mesh.position.z = z || 0;
	}
    behavior(time){
        this.mesh.rotation.x+=0.05
        //Math.cbrt(25)
    }
}

export default Particle




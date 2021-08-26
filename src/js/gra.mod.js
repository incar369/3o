import _mod from "./mod.mod"
import * as THREE from 'three';



class Gra extends _mod{
	constructor(){
        super('Gra','prim')
		this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer( { antialias: true } )
        document.body.appendChild( this.renderer.domElement );

        this.objectPool=[];
	}
    addObject(object){
        this.objectPool.push(object)
        this.scene.add( object.mesh );
    }
    preinit(){
        this.camera.position.z = 1;
 
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setAnimationLoop(this.animation.bind(this));
    }
    animation( time ) {
        this.objectPool.forEach(function(v,i,a){
            if(v.behavior){v.behavior(time)}
        })
        this.renderer.render( this.scene, this.camera );
    }
}
export default Gra
import _eng from "./eng.mod";
import _gra from "./gra.mod";
import _particle from "./particle.mod"

import Dat from 'dat.gui';
import init from 'three-dat.gui';

init(Dat); 
let gui = new Dat.GUI();





let Eng=global.eng=new _eng()


Eng.addModule(_gra)
Eng.Gra.preinit()
addObjects(150) //Eng.Gra.addObject(new _particle())

console.log(Eng)

document.addEventListener('wheel',function(e){
    if(e.deltaY>0){Eng.Gra.camera.position.z*=1.2}
    if(e.deltaY<0){Eng.Gra.camera.position.z/=1.2}
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function addObjects(c){
    for(let i=0;i<c;i++){
        Eng.Gra.addObject(new _particle(getRandomInt(-10,10),getRandomInt(-10,10),getRandomInt(-10,10)))
    }
}


gui.add(Eng.Gra.objectPool[0].geometry.parameters,'radius',0.1,20);
gui.add(Eng.Gra.objectPool[0].material.color,'r',0,1)
gui.add(Eng.Gra.objectPool[0].material.color,'g',0,1)
gui.add(Eng.Gra.objectPool[0].material.color,'b',0,1)
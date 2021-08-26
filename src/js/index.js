import _eng from "./eng.mod";
import _gra from "./gra.mod";
import _particle from "./particle.mod"

let Eng=global.eng=new _eng()


Eng.addModule(_gra)
Eng.Gra.preinit()
Eng.Gra.addObject(new _particle())

console.log(Eng)


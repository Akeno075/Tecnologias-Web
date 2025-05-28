
import {funcionGenericaFlecha2, funcionGenerica, imprimirObjeto, cuidar, identity, obtenerPrimero } from "./genericos/genericos";

//imprimirObjeto({ nombre: "Juan", edad: 30 });
//imprimirObjeto("Hola, mundo!");
//imprimirObjeto(42);
//imprimirObjeto(new Date());
//imprimirObjeto({
   // a:1,
 //   b: 2,
   // c: 3,
//})

console.log(funcionGenerica(3.1416) );
console.log(funcionGenerica("Hola, mundo!"));
console.log(funcionGenerica({ nombre: "Juan", edad: 30 }));
console.log(funcionGenerica([1, 2, 3, 4, 5]));


console.log(funcionGenericaFlecha2(3.1416).toFixed(2));
console.log(funcionGenericaFlecha2("Hola, mundo!").charAt(0));



console.log(cuidar(new Date()));
console.log(cuidar({ nombre: "Juan", edad: 30 }));
console.log(cuidar([1, 2, 3, 4, 5]));


console.log(identity(3.1416).toFixed(2));
console.log(identity("Hola, mundo!").charAt(0));

console.log(obtenerPrimero([1, 2, 3, 4, 5]));


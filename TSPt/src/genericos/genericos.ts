
export const imprimirObjeto =(argumento: any): void => {
    console.log(argumento);
}

export function funcionGenerica<T>(argumento: T):T {
    return argumento;
    
}

export const funcionGenericaFlecha= <T>(argumento: T): T => {
    return argumento;
}

export const funcionGenericaFlecha2 = <T>(argumento: T): T => argumento; 


//Ejemplos // de uso de genericos con clases y funciones
class Animal {
}

export function cuidar<T>(algo: T): T {
  return algo;
}
//https://desarrolloweb.com/articulos/generics-typescript.html

export function identity<Type>(arg: Type): Type {
  return arg;
}

//https://www.typescriptlang.org/docs/handbook/2/generics.html
 

export const obtenerPrimero = <T>(elementos: Array<T>): T => {
  return elementos[0];
};

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
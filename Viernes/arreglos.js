"use strict";
//Funcion anonima Auto invocada
(function () {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numeros2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    numeros.push('a');
    numeros.push(11);
    numeros.push(12);
    console.log(numeros);
    console.log({ numeros });
    const nombres = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis']; //Arreglos sin tipo
    const nombres2 = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis']; //Arreglos con tipo
})();


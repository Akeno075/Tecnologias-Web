"use strict";
(() => {
    const hola = function () {
        return "Hola";
    };
    console.log(hola());
    const hola2 = () => {
        return "Adios";
    };
    const hola3 = () => "Buenas tardes";
    const suma = (a, b) => a + b;
    const resta = (a, b) => a - b;
    const multiplicacion = (a, b) => a * b;
    const division = (a, b) => a / b;
    const suma2 = function (a, b) {
        return a + b;
    };
    ///////////////////////
    console.log(suma(2, 3));
    let getName = (name) => {
        return name;
    };
    let getName2 = (name) => name;
    console.log(getName("Juan"));
    ////////////////////
})();

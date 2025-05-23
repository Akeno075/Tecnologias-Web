"use strict";
console.log("---------------Clase 3-------------------");
(() => {
    class Animal {
        constructor(raza, patas, color) {
            this.raza = raza;
            this.patas = patas;
            this.color = color;
        }
    }
    const perro = new Animal("Perro", 4, "Marrón");
    // Mostrar cada atributo por separado
    console.log("Raza: ", perro.raza);
    console.log("Patas: ", perro.patas);
    console.log("Color: ", perro.color);
})();

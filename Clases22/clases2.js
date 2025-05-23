"use strict";
console.log("----------------Clase 2------------------");
(() => {
    // 1.-Atributos
    // 2.-Constructor
    // 3.-Getters y Setters
    // 4.-Métodos
    class Alumno {
        // Atributos
        constructor(nombre, matricula, academia) {
            this.nombre = nombre;
            this.matricula = matricula;
            this.academia = academia;
            this.nombre = nombre;
            this.matricula = matricula;
            this.academia = academia;
        }
        getNombre() {
            return this.nombre;
        }
        getMatricula() {
            return this.matricula;
        }
        getAcademia() {
            return this.academia;
        }
    }
    const Shagy = new Alumno('Shagy', 358321, "Redes y Telecomunicaciones");
    // Mostrar datos en consola
    console.log("Nombre: ", Shagy.getNombre());
    console.log("Matrícula: ", Shagy.getMatricula());
    console.log("Academia: ", Shagy.getAcademia());
})();

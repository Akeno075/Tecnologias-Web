"use strict";
(() => {
    // 1.-Atributos
    // 2.-Constructor
    // 3.-Getters y Setters
    // 4.-Métodos
    class Alumno {
        constructor(nombre, matricula, academia) {
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
    const Rios = new Alumno('Rio', 123456, "Sistemas");
    // Mostrar datos en consola
    console.log("Nombre: ", Rios.getNombre());
    console.log("Matrícula: ", Rios.getMatricula());
    console.log("Academia: ", Rios.getAcademia());
})();

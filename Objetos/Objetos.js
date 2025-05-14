"use strict";
const conocida = {
    nombre: "Nomada",
    telefono: 123456789,
    f_nacimiento: new Date(1990, 1, 1),
    mascota: "perro",
    domicilio: {
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Springfield",
        provincia: "Illinois",
        cp: 12345
    },
    hobbies: ["leer", "escribir", "programar"],
    consoleLog: function () {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Fecha de nacimiento: ${this.f_nacimiento}`);
        console.log(`Mascota: ${this.mascota}`);
        console.log(`Domicilio: ${this.domicilio.calle} ${this.domicilio.numero}, ${this.domicilio.ciudad}, ${this.domicilio.provincia}, CP: ${this.domicilio.cp}`);
        console.log(`Hobbies: ${this.hobbies.join(", ")}`);
    }
};
conocida.consoleLog();

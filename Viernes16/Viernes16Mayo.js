"use strict";
console.log("-------------------CODIGO 3---------------------------");
// Primer objeto planet
let planet1 = {
    name: "Earth",
    galaxy: "Milky Way",
    numberOfMoons: 1,
    weight: 100000
};
console.log("Planet name :- " + planet1.name);
console.log("Planet galaxy :- " + planet1.galaxy);
console.log("Planet number of moons :- " + planet1.numberOfMoons);
console.log("Planet weight :- " + planet1.weight);
console.log("-------------------CODIGO 4---------------------------");
// Segundo objeto planet Codigo 4
let planet2 = {
    name: "Mars",
    galaxy: "Milky Way",
    numberOfMoons: 2,
    weight: 50000
};
for (let prop in planet2) {
    // Se fuerza el acceso dinámico a las propiedades con indexación
    console.log("Planet " + prop + " :- " + planet2[prop]);
}

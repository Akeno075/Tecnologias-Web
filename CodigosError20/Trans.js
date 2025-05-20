"use strict";
function removeVowels(data) {
    return data.replace(/[aeiou]/gi, '');
}
console.log("Prueba de la funcion removeVowels");
console.log(`The text without vowels is: ${removeVowels("This is a manner to remove vowels")}`);

"use strict";
const Num1 = 150;
const Num2 = 5000;
const Num3 = 600;
const Mayor = Math.max(Num1, Num2, Num3);
const nombremayor = (Mayor === Num1) ? "Num1" : (Mayor === Num2) ? "Num2" : "Num3";
console.log(nombremayor + " es con el valor de " + Mayor);

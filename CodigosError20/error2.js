"use strict";
(() => {
    const addTwoNumbers = (params) => {
        return params.first + params.second;
    };
    console.log("Codigo 2");
    console.log(addTwoNumbers({ first: 2, second: 4, }) === 6);
    console.log(addTwoNumbers({ first: 10, second: 20, }) === 30);
    console.log("Error intencional", addTwoNumbers({ first: 2, second: 4 }) === 16);
    console.log("Exito intencional", addTwoNumbers({ first: 10, second: 20 }) === 30);
})();

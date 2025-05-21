"use strict";
(() => {
    var _a, _b;
    let Magik = {
        name: 'Illyana Nikolaievna Rasputina',
        age: 28,
        powers: [3],
        getName() {
            return this.name;
        }
    };
    let Psylock = {
        name: 'Anna Marie',
        age: 28,
        powers: [2],
        getName() {
            return this.name;
        }
    };
    console.log((_a = Magik.getName) === null || _a === void 0 ? void 0 : _a.call(Magik));
    console.log((_b = Psylock.getName) === null || _b === void 0 ? void 0 : _b.call(Psylock));
    //Custom types
    // (sring | number) = 4; //* se puede cambiar el valor a un string o a un number o el tipo que se desee colocar
    let myCustomVariable = 4;
    // myCustomVariable = '4'; // Cambiando el valor a un string
    myCustomVariable = 'Salvador'; // Cambiando el valor a un string
    myCustomVariable = {
        name: 'Doctor Doom',
        age: 36,
        powers: [4],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();

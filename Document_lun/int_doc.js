"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 30,
        power: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        power: [1, 2, 3],
        getName() {
            return this.name;
        }
    };
});

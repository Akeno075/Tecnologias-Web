"use strict";
(() => {
    class MyClass {
        constructor() {
            this._myProperty = '';
        }
        // Getter method
        get myProperty() {
            return this._myProperty;
        }
        // Setter method
        set myProperty(value) {
            this._myProperty = value;
        }
    }
    const instance = new MyClass();
    instance.myProperty = 'Hello'; // Setter is called
    console.log(instance.myProperty); // Getter is called: Output: Hello
});

console.log("---------------Clase 3-------------------");

(() => {
    class Animal {
        raza: string;
        patas: number;   
        color: string;
        
        constructor(raza: string, patas: number, color: string) {
            this.raza = raza;
            this.patas = patas;
            this.color = color;
        }
    }

    const perro: Animal = new Animal("Perro", 4, "Marrón");

    // Mostrar cada atributo por separado
    console.log("Raza: ", perro.raza);
    console.log("Patas: ", perro.patas);
    console.log("Color: ", perro.color);
})();

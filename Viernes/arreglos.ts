//Funcion anonima Auto invocada
(function () {

    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numeros2: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    numeros.push('a');
    numeros.push(11);

    
    console.log({numeros});

})();
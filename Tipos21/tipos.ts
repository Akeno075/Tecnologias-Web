(()=> {
    type Hero = {
        name: string;
        age?: number; //* propiedad opcional por el uso del ?*/
        powers: number[];
        getName?: () => string;//* propiedad opcional por el uso del ?*/
    }

    let Magik: Hero = {
        name: 'Illyana Nikolaievna Rasputina',  
        age: 28,
        powers: [3],
        getName() {
            return this.name;
        }
    }

    let Psylock: Hero = {
        name: 'Anna Marie',
        age: 28,
        powers: [2],
        getName() {
            return this.name;
        }
    }
    console.log(Magik.getName?.()); 
    console.log(Psylock.getName?.()); 

//Custom types

// (sring | number) = 4; //* se puede cambiar el valor a un string o a un number o el tipo que se desee colocar
    let myCustomVariable: (string | number |Hero ) = 4;
// myCustomVariable = '4'; // Cambiando el valor a un string
myCustomVariable = 'Salvador'; // Cambiando el valor a un string


    myCustomVariable = {
        name: 'Doctor Doom',
        age: 36,
        powers: [4],
    }


    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)

})()

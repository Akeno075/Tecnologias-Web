( ()=>{

    const hola= function(){
        return "Hola";
    }
console.log(hola());

    const hola2= () => {
        return "Adios";
    }

    const hola3= () => "Buenas tardes"; 

    const suma= (a:number, b:number):number => a + b;
    const resta= (a:number, b:number):number => a - b;
    const multiplicacion= (a:number, b:number):number => a * b;
    const division= (a:number, b:number):number => a / b;

    const suma2= function(a:number, b:number):number{
        return a + b;
    }

    ///////////////////////
    console.log(suma(2,3));

    let getName= (name:string):string => {
        return name;
    }
    let getName2= (name:string):string => name;

    console.log(getName("Juan"));



    ////////////////////
    
}) ()
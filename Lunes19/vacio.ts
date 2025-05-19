(()=>{
// undefined no es lo mismo que null
// void le indica a TypeScript que regresa nada, vacio
    function llamarBatman(){

    }
    function llamarBatman2():void{
      //  return 2;

    }
    const llamarSuperman=()=>{

    }
    const llamarSuperman2=():void=>{
        
    }
    
    const respuesta = llamarBatman();
    const respuesta2 = llamarBatman2();

    console.log(respuesta);
    console.log(respuesta2);
})()
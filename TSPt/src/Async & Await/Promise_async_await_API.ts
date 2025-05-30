const urltext:string="https://jsonplaceholder.typicode.com/comments";
const urlimg:string="https://jsonplaceholder.typicode.com/photos";

const consultarApi=async()=>{
    const inicio = performance.now();


    const respuesta1=await fetch(urltext);
    const regreso=await respuesta1.json();

    const repuesta2=await fetch(urlimg);
    const regreso2=await repuesta2.json();

   console.log(respuesta1)

    const fin = performance.now();
    console.log(`A=Tiempo de ejecución: ${fin - inicio} milisegundos`);
}

consultarApi();

const ConsultarApi2=async()=>{
    const inicio2 = performance.now();
    const [r1, r2] = await Promise.all([fetch(urltext), fetch(urlimg)]);

    const reg = await r1.json();
    const reg2 = await r2.json();

    const fin2= performance.now();
    console.log(`B=Tiempo de respuesta: ${fin2 - inicio2} milisegundos`);
    
    console.log(reg2);
}
ConsultarApi2();
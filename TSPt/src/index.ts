// Importando la función isPrime desde el archivo Promise.ts
import { isPrime } from "./Async & Await/Promise";
import { greet } from "./Async & Await/Await";
import { registerUser } from "./Async & Await/Async";

const numberToCheck = 2;

// Usando Promesas con .then/.catch
isPrime(numberToCheck)
  .then((message) => {
    console.log("Mensaje:", message);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// Usando Async/Await
  async function runGreeting() {
  console.log("Tiempo de espera de 5 segundos para el saludo...");
  const message = await greet("Carlos");
  console.log(message);
}
// Ejecutando la función de saludo
runGreeting();


// Importando la función registerUser desde el archivo Async.ts
// Registro de usuario con Async/Await
async function run() {
  const username = "Carlos";

  try {
    const message = await registerUser(username);
    console.log(message);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}
run();

//////////////30/05/2025
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

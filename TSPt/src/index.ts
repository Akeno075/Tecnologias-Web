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

// Función que espera 5 segundo y luego saluda por medio de la consola
// Importando la función isPrime desde el archivo Promise.ts
export async function greet(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hola, ${name}!`);
    }, 5000); // Se espera 3 segundo y luego manda un mensaje se saludo
  });
}

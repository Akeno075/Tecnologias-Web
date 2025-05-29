// Función que valida si un número es primo usando Promesas
export function isPrime(num: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (num < 2) {
      reject(new Error("El numero tiene que ser mayor a 1"));
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        reject(new Error(`${num} no es un numero primo`));
        return;
      }
    }

    resolve(`${num} es un numero primo`);
  });
}

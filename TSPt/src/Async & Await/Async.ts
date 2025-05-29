//Datos de ejemplo para simular una base de datos
const fakeDatabase: string[] = ["ana", "luis", "maria"];

// Función que simula la verificación de un nombre de usuario en una base de datos
async function isUsernameTaken(username: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeDatabase.includes(username.toLowerCase()));
    }, 1000);
  });
}

// Función que registra un usuario, verificando si el nombre de usuario ya está en uso
export async function registerUser(username: string): Promise<string> {
  const taken = await isUsernameTaken(username);

  if (taken) {
    throw new Error(`El nombre de usuario "${username}" ya está en uso.`);
  }
  return `Usuario "${username}" registrado con éxito.`;
}

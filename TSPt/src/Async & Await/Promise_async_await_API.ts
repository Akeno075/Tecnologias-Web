const urltext: string = "https://jsonplaceholder.typicode.com/comments";
const urlimg: string = "https://jsonplaceholder.typicode.com/photos";

const consultarApi = async () => {
    const inicio = performance.now();

    try {
        const respuesta1 = await fetch(urltext);
        if (!respuesta1.ok) throw new Error(`Error al obtener comentarios: ${respuesta1.status}`);
        const regreso = await respuesta1.json();

        const respuesta2 = await fetch(urlimg);
        if (!respuesta2.ok) throw new Error(`Error al obtener imágenes: ${respuesta2.status}`);
        const regreso2 = await respuesta2.json();

        console.log(regreso, regreso2);
    } catch (error: unknown) {
        // Manejo seguro del error
        if (error instanceof Error) {
            console.error("A=Ocurrió un error al consultar la API:", error.message);
        } else {
            console.error("A=Ocurrió un error desconocido:", error);
        }
    } finally {
        const fin = performance.now();
        console.log(`A=Tiempo de ejecución: ${fin - inicio} milisegundos`);
    }
};

consultarApi();

const ConsultarApi2 = async () => {
    const inicio2 = performance.now();

    try {
        const [r1, r2] = await Promise.all([
            fetch(urltext),
            fetch(urlimg)
        ]);

        if (!r1.ok || !r2.ok) {
            throw new Error(`Error al obtener datos: comentarios (${r1.status}), imágenes (${r2.status})`);
        }

        const reg = await r1.json();
        const reg2 = await r2.json();

        console.log(reg, reg2);
    } catch (error: unknown) {
        // Manejo seguro del error
        if (error instanceof Error) {
            console.error("B=Ocurrió un error al consultar la API:", error.message);
        } else {
            console.error("B=Ocurrió un error desconocido:", error);
        }
    } finally {
        const fin2 = performance.now();
        console.log(`B=Tiempo de respuesta: ${fin2 - inicio2} milisegundos`);
    }
};

ConsultarApi2();

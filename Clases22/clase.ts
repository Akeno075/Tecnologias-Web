(() => {
    // 1.-Atributos
    // 2.-Constructor
    // 3.-Getters y Setters
    // 4.-Métodos

    class Alumno {
        public nombre: string;
        public matricula: number;
        public academia: string;

        constructor(nombre: string, matricula: number, academia: string) {
            this.nombre = nombre;
            this.matricula = matricula;
            this.academia = academia;
        }

        public getNombre(): string {
            return this.nombre;
        }

        public getMatricula(): number {
            return this.matricula;
        }

        public getAcademia(): string {
            return this.academia;
        }
    }
    const Rios: Alumno = new Alumno('Rio', 123456, "Sistemas");

    // Mostrar datos en consola
    console.log("Nombre: ", Rios.getNombre());
    console.log("Matrícula: ", Rios.getMatricula());
    console.log("Academia: ", Rios.getAcademia());

})();

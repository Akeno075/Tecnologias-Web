(()=>{
   type Automovil = {
       carroceria: string;
       modelo: string;
       antibalas: boolean;
       pasajeros: number ; 
       disparar?: () => void; // El metodo disparar es opcional
   } 
   // Objetos
const batimovil:Automovil= {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:Automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

 type Villano = {
  nombre: string;
  edad: number;
  mutante: boolean;
 }
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos


type Charles = {
  nombre: string;
  edad?: number; //* propiedad opcional por el uso del ?*/
  poderes: number[];
  getNombre?: () => string;//* propiedad opcional por el uso del ?*/
}
const charles = {
  poder:"psiquico",
  estatura: 1.78
};


// cree dos tipos, uno para charles y otro para apocalipsis
type Apocalipsis = {
  lider: boolean;  
 miembros: string[];
}

const apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
type Mystique = Charles | Apocalipsis;
// Mystique es un tipo que puede ser Charles o Apocalipsis
let mystique;

mystique = charles;
mystique = apocalipsis;

});
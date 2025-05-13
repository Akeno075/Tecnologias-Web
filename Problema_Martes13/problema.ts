const nombres: string[] = ["Juan",'Hugo','Paco','Luis','Pedro','Hector'];
const edades: number[] = [35,50,40,18,30];

const personas= nombres.map((nombre, i) => ({ nombre, edad: edades[i] }));

const personaMayor= personas.reduce((max, persona) => persona.edad > max.edad ? persona : max);
const personaMenor= personas.reduce((min, persona) => persona.edad < min.edad ? persona : min);

console.log(`La persona mayor es ${personaMayor.nombre} con ${personaMayor.edad} años.`);
console.log(`La persona menor es ${personaMenor.nombre} con ${personaMenor.edad} años.`);
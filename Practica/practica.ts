const Num1 :number =150;
const Num2 :number =5000;
const Num3 :number= 600;

const Mayor :number = Math.max(Num1,Num2,Num3);


const nombremayor :string = (Mayor === Num1) ? "Num1" : (Mayor === Num2) ? "Num2" : "Num3";
console.log(nombremayor+" es con el valor de "+ Mayor);

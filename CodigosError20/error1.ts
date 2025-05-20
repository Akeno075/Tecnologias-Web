(()=>{
    
 const addTwoNumbers = (a:number, b:number) => {
  return a + b;
};
console.log("Codigo 1");
  console.log(addTwoNumbers(2 , 4)===6);
  console.log(addTwoNumbers(10, 10)===20);

  console.log("Error intencional", addTwoNumbers(2, 4)=== 7);
    console.log("Exito intencional", addTwoNumbers(10, 10)=== 20);  

})();


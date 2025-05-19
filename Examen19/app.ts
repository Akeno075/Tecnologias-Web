(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:any = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash:number = 5;
    const fuerzaSuperman:number = 100;
    const fuerzaBatman:number = 1;
    const fuerzaAcuaman:number = 0;
  
    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }
const activarBatiseñal = (): string => 'activada';
((): void => {
  console.log(activarBatiseñal());
})();

  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }

const pedirAyuda = (): void => console.log('¡Auxilio!!!');
((): void => {
pedirAyuda();
})();
  
    // Aserciones de Tipo
((): void => {
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
  })()
  
  
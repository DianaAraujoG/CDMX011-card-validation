import {cardNumber, longitud} from './index.js';

const validator = {
  // ...
};
/*Para esto debes implementar el objeto validator, el cual ya se encuentra exportado en el boilerplate. 
Este objeto (validator) contiene dos métodos (isValid y maskify):*/
/**CREO QUE LO HICE MAL :( */

export default validator;

function mostrar(){
  console.log('Estoy en el otro js' );
  console.log('Numero: '+cardNumber + ' Longitud: '+longitud);
}
function isValid(){
  /**Declaro un arreglo para invertir los numeros de la tarjeta */
  var array = [longitud];
  for(let i=1; i <= longitud; i++){
      array[longitud - i] = cardNumber.slice(i-1,i);
      console.log(array[longitud-i]);
  }
  /**Simplemente para mostrar que los numeros se hallas invertido */
  var prueba ='';
  for(let j= 0; j<longitud; j++){
      prueba += array[j];
  }
  console.log(prueba);
  /**Se multiplica por dos los lugares pares */
  for(let i=0 ; i < longitud ; i++){
      if((i+1)%2 === 0){
          array[i] = array[i]*2;
          console.log(array[i]);
      }else{
        continue;
      }
  }
  /**Simplemente para mostrar que los numeros se hallas invertido */
  var prueba2 ='';
  for(let j= 0; j<longitud; j++){
      prueba2 += array[j];
  }
  console.log(prueba2);
  /**Suma de los numeros mayores a 9*/ 
  var Temporal1 = '';
  var Temporal2 = '';
  var mayorNueve= '';
  for(let i=0 ; i<longitud; i++){
    
    if((i+1)%2 === 0){
      if(array[i] > 9){
        console.log('mayor a 9'); /** REGRESAAA -------------------------------------------------------------- */
        mayorNueve = array[i];
        console.log(mayorNueve);
        array[i]= parseInt(array[i]) - 9;
        console.log(array[i]);
       /* arrayTemporal = mayorNueve.split("(?<=.)");
        console.log(mayorNueve);
        for(let x=0; x < 2 ; x++){
          console.log('entreee for9');
          arrayTemporal[x] = mayorNueve.slice(x-1,x);
          console.log(arrayTemporal[x]);
        }
        Temporal1= mayorNueve.slice(0,1);
        console.log('Slice1 '+ 1+ ' Numero' + Temporal1);
        Temporal2= mayorNueve.slice(1,2);
        console.log('Slice1 '+ 1+ ' Numero' + Temporal2);*/
      }
    }else{
      continue;
    }
  }
  
  /* Suma de todos los elementos del array, pasandolos a numero*/
  var suma=0;
  for(let i=0; i< longitud; i++){
    suma = suma + parseInt(array[i]);
  }
  /**Modulo de 10 para verificar si la tarjeta es valida o no */
  if( suma%10 === 0){
    return('Tarjeta valida FELICIDADES'); /**MODIFICAR A QUE ALTERE EL CONTENIDO DE UN PARRAFO  */
  }else{
    return('NO es valida, LO SIENTO');
  }
  console.log(suma);
}
/*console.log('ingreso ' + numero);*/

//No funciona con 20
function maskify (cardNumber){ 
  var codificado= ''; // aqui es donde se va a mándar el numero ya codificado
  //si es de 4 o menos no hace nada y la manda igual
  if(cardNumber.length <= 4){ 
    codificado = cardNumber;
  }else{
    //
    var array2 =[longitud];
    for(let j=0; j<=longitud; j++){
      array2[j]=cardNumber.slice(j-1,j);
      //console.log(array2[j]);
    }
    let menosCuatro = longitud - 3 ;
    for(let i=0; i< menosCuatro ; i++){
       array2[i]='#';
       ///console.log(array2[i]);
    }
    for(let i=0; i<=longitud; i++){
      codificado += array2[i];
      //console.log(codificado);
    }
  }
  return(codificado);
}

export {mostrar, isValid,  maskify};
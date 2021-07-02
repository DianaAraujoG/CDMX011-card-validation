import {cardNumber, longitud} from './index.js';

const validator = {
  // ...
};

export default validator;




function mostrar(){
  console.log('Estoy en el otro js' );
  console.log('Numero: '+cardNumber + ' Longitud: '+longitud);
}
function isValid(){
  /**Declaro un arreglo para invertir los numeros de la tarjeta */
  let array = [longitud];
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
      }
  }
  /**Simplemente para mostrar que los numeros se hallas invertido */
  var prueba2 ='';
  for(let j= 0; j<longitud; j++){
      prueba2 += array[j];
  }
  console.log(prueba2);
  /**Suma de los numeros --------------------------------------------------------------------------mayores a 9*/ 
  /*******************************-------------------------------------------------------------aqui te quedaste*/
  var suma;
  for(let i=0; i< longitud; i++){
    suma = suma + array[i];
  }
  console.log(suma);
}
/*console.log('ingreso ' + numero);*/

export {mostrar, isValid};
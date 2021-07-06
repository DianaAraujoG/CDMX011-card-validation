const validator = {
   //No funciona con 20
   'maskify': function (creditCardNumber){ 
    let codificado= ''; // aqui es donde se va a mándar el numero ya codificado
    const longitud = creditCardNumber.length;
    //si es de 4 o menos no hace nada y la manda igual
    if(creditCardNumber.length <= 4){ 
      codificado = creditCardNumber;
    }else{
      //
      var array2 =[longitud];
      for(let j=0; j<=longitud; j++){
        array2[j]=creditCardNumber.slice(j-1,j);
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
  },
  "isValid":function(creditCardNumber){
    /**Declaro un arreglo para invertir los numeros de la tarjeta */
    let longitud = creditCardNumber.length;
    let cardNumber = [longitud];
    for(let i=1; i <= longitud; i++){
        cardNumber[longitud - i] = creditCardNumber.slice(i-1,i);
        console.log(cardNumber[longitud-i]);
    }
    /**Simplemente para mostrar que los numeros se hallas invertido */
    var prueba ='';
    for(let j= 0; j<longitud; j++){
        prueba += cardNumber[j];
    }
    console.log(prueba);
    /**Se multiplica por dos los lugares pares */
    for(let i=0 ; i < longitud ; i++){
        if((i+1)%2 === 0){
            cardNumber[i] = cardNumber[i]*2;
            console.log(cardNumber[i]);
        }else{
          continue;
        }
    }
    /**Simplemente para mostrar que los numeros se hallas invertido */
    let prueba2 ='';
    for(let j= 0; j<longitud; j++){
        prueba2 += cardNumber[j];
    }
    console.log(prueba2);
    /**Suma de los numeros mayores a 9*/ 
    for(let i=0 ; i<longitud; i++){
      if((i+1)%2 === 0){
        if(cardNumber[i] > 9){
          cardNumber[i]= parseInt(cardNumber[i]) - 9;
          console.log(cardNumber[i]);
        }
      }else{
        continue;
      }
    }
    
    /* Suma de todos los elementos del cardNumber, pasandolos a numero*/
    var suma=0;
    for(let i=0; i< longitud; i++){
      suma = suma + parseInt(cardNumber[i]);
    }
    /**Modulo de 10 para verificar si la tarjeta es valida o no */
    if( suma%10 === 0){
      return(true); /**MODIFICAR A QUE ALTERE EL CONTENIDO DE UN PARRAFO  */ /**'Tarjeta valida FELICIDADES' */
    }else{
      return(false); /**'NO es valida, LO SIENTO' */
    }
    console.log(suma);
  },
  
  
};
/*Para esto debes implementar el objeto validator, el cual ya se encuentra exportado en el boilerplate. 
Este objeto (validator) contiene dos métodos (isValid y maskify):*/
/**CREO QUE LO HICE MAL :( */

export default validator;
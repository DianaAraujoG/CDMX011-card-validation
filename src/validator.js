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
      }
      let menosCuatro = longitud - 3 ;
      for(let i=0; i< menosCuatro ; i++){
        array2[i]='#';
      }
      for(let i=1; i<= longitud; i++){ /**por que  */
        codificado += array2[i];
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
        
    }
    /**Se multiplica por dos los lugares pares */
    for(let i=0 ; i < longitud ; i++){
        if((i+1)%2 === 0){
            cardNumber[i] = cardNumber[i]*2;
        }else{
          continue;
        }
    }
    /**Suma de los numeros mayores a 9*/ 
    for(let i=0 ; i<longitud; i++){
      if((i+1)%2 === 0){
        if(cardNumber[i] > 9){
          cardNumber[i]= parseInt(cardNumber[i]) - 9;
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
  },
  "getIssuer": function(creditCardNumber){
    const longitud = creditCardNumber.length;
  }
};

export default validator;
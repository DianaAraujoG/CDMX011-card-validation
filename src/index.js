import validator from './validator.js'; /**Para que funcion ??? */
import {mostrar, isValid} from './validator.js'; /** ./ busca desde la raiz */

console.log(validator);


var cardNumber;
var longitud;
/**RECUPERAMOS EL BOTON COMO OBJETO */
const btnAccept = document.getElementById('btnAccept');
/**Un evento para cuando le de click */
btnAccept.addEventListener('click', (evt) => {
/** */
    evt.preventDefault();
    /**Recuperamos el objeto del numero de tarjeta */
    cardNumber = document.getElementById('cardNumber').value ;
    console.log('boton: ' + cardNumber);
    /*mostrar(cardNumber.value);*/ /**Prueba de llamado de funcion */
    longitud = cardNumber.length;
    console.log('Tamaño: '+ longitud);
    
    /**Validacion para que no entre vacio falta ver para que no ingrese letras */
    if( cardNumber === '' || cardNumber.length === 0 ){
        alert('Ingrese el numero de tarjeta')
    }else{
        /**Aqui se va hacer el llamado de las funciones */
        console.log('FUNCIONES :)');
        mostrar();
        isValid();
    }

});

/**Exportamos el numero de tarjeta y su tamaño para poder utilizarlos en el otro js */
export {cardNumber, longitud};




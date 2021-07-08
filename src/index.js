import validator from './validator.js'; /**Para que funcion ??? */

//console.log(validator);


/**RECUPERAMOS EL BOTON COMO OBJETO */
const btnAccept = document.getElementById('btnAccept');
/**Un evento para cuando le de click */
/**A la funcion de flecha no hay necesidad de poner funcion antes */
btnAccept.addEventListener('click', (evt) => { 
/** Previene las cosas o acciones raras que ya vienen en el click */
    evt.preventDefault();
    /**Recuperamos el objeto del numero de tarjeta */
    let creditCardNumber = document.getElementById('creditCardNumber').value ;
   /**Es para limpiar el formulario */
    document.getElementById("formulario").reset();
    /*mostrar(creditCardNumber.value);*/ /**Prueba de llamado de funcion */
    if( creditCardNumber === '' || creditCardNumber.length === 0 ){
        alert('Ingrese el numero de tarjeta')
    }else{
        /**Aqui se va hacer el llamado de las funciones */
        
        document.getElementById('mostrarNumero').innerHTML = validator.maskify(creditCardNumber);
        /*En la siguiente linia se muestra el codificado del numero de la tarjeta cambiando
        el contenido de un parrado con la ayuda de document by id */
        let codificacion = validator.isValid(creditCardNumber);
        if(codificacion){
            document.getElementById('mensaje').style.backgroundColor ="rgba(255, 173, 5, 0.8)";
            document.getElementById('mostrarValida').innerHTML = 'Tarjeta valida';
            document.getElementById('mostrarValida').style.color ="black";
        }else{
            document.getElementById('mensaje').style.backgroundColor ="rgba(179, 57, 81, 0.8)";
            document.getElementById('mostrarValida').innerHTML = 'NO es valida';
        }
        
    }

});


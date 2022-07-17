/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:
  String.prototype.repeatCharacters = function(){
  var result = "";

    for(i=0; i<this.length; i++){
        result += this.charAt(i) + this.charAt(i);
    }

    return result;

  }

}

// No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres
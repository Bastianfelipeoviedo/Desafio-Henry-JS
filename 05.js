/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'

  // Tu código aca:
  var palabras = [];
  var palabraMasGrande ="";
  

  for(i=0; i<array.length; i++){

      var a = array[i].split(' ');

      for(j=0; j<a.length; j++){
          palabras.push(a[j]);
      }
  }

  var mayor = palabras[0];

  for(q=1; q<palabras.length; q++){
      
      if(palabras[q].length > mayor.length){
          mayor = palabras[q];
      }

  }
  
  palabraMasGrande = mayor;

  return palabraMasGrande;

}

// No modifiques nada debajo de esta linea //


module.exports = palabraMasLarga
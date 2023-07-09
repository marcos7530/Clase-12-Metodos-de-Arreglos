//                 [ 0, 1, 2, 3, 4]                     
const listaNumeros=[11,12,13,14,15];

console.log(listaNumeros);

//El método filter me devuelve un array que contiene todos los 
//elementos del array original que cumplan con la condición dada.


const elementosEncontrados=listaNumeros.filter(elemento=>elemento>12&&elemento<15);
 
console.log(elementosEncontrados);
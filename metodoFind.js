//                 [ 0, 1, 2, 3, 4]                     
const listaNumeros=[11,12,13,14,15];

console.log(listaNumeros);

//El método find me devuelve el primer elemento del array que 
//cumpla la condición dada.

const elementoEncontrado=listaNumeros.find(elemento=>elemento>12);
 
console.log(elementoEncontrado);

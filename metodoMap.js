//                 [ 0, 1, 2, 3, 4]                     
const listaNumeros=[11,12,13,14,15];

console.log(listaNumeros);

//El método map crea un nuevo array que contiene los resultados de aplicar una función dada 
//a cada elemento del array original.

const nuevaListaNumeros = listaNumeros.map(elemento => `numero: ${elemento}`);

console.log(nuevaListaNumeros);
 
//                 [ 0, 1, 2, 3, 4]                     
const listaNumeros=[11,12,13,14,15];

console.log(listaNumeros);

//El método splice elimina y/o agrega nuevos elementos en nuestro array.

 listaNumeros.splice(2,0,`🙃`); 
 //listaNumeros.splice(a,b,c);
 //a=indice del elemento desde el cual se agrega o se borra 
 //b= cantidad de elementos que se borran
 //c=elemento que se agrega
 
console.log(listaNumeros);
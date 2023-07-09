//Dado un arreglo de números enteros, encuentre el mayor producto posible 
//entre dos números adyacentes y devuelva el valor de dicho producto.

const array = [9,8,6,7,5,3,4,2,1]; 
array.sort();
let mayorProducto=array[array.length()]+array[array.length()-1];

console.log(`El mayor producto es de ${mayorProducto}`);

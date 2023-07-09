//Dado un arreglo de números enteros, encuentre y devuelva el valor de 
//la menor suma posible entre ellos.

const array = [9,8,6,7,5,3,4,2,1]; 
array.sort();
let menorSuma=array[0]+array[1];

console.log(`La menor suma es de ${menorSuma}`);


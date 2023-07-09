//Ejercicio 3: Haga una función que reciba un arreglo y un número. 
//Tenemos que sumarle dicho número a cada elemento del arreglo y 
//devolver el arreglo modificado.


let array = [1, 2, 3];
let numero = 10;

console.log(array);
console.log(SumarNumero(array, numero)); 

function SumarNumero(arr, num) 
{
    return arr.map(elemento => elemento + num);
}
  
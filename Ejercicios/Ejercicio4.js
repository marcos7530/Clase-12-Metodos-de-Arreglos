//Ejercicio 4: Haga una función que reciba un número y devuelva un arreglo que 
//tenga el tamaño del número recibido.
//El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)

const num=5;

console.log(CrearArray(num));


function CrearArray(numero)
{
    let array=[];

    for (let index = 1; index <= num; index++) {
        const element = array[index];
        array.push(index);
    }
   
    return array;
}

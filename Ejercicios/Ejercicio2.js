//Ejercicio 2: Haga una función que solo reciba arreglos con más de 5 elementos 
//y luego elimine los últimos 3. En caso de recibir un arreglo de menos de 5 elementos, 
//mostrar en pantalla un mensaje de error.

const bigArray = [12,13,14,15,16];
const smallArray= [12,13,14];

RemoveLastThree(bigArray);


function RemoveLastThree(array)
{
    if (array.length < 5) {
        console.log(`Error`);
    }
    else
    {
        array.splice(-3);
        
        console.log(array);
    }
}

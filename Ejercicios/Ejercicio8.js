//Ejercicio 8: Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
//Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero
//Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.


const REBAÑO = [`obeja`,`obeja`,`obeja`,`lobo`,`obeja`,`obeja`];

const INDICE_LOBO= REBAÑO.indexOf(`lobo`);

if (INDICE_LOBO === REBAÑO.length-1  ) {
    console.log(`No sigas comiendo obejas`);
}
else
{
    console.log(`Hey! Oveja numero ${REBAÑO.length-(INDICE_LOBO+1)}! El lobo esta cerca!`);
}



